/**
 *
 * @author: @DyanGalih <dyan.galih@gmail.com>
 */

/**
 * @param map
 * @param fromObj
 * @param toObj
 * @returns {Promise<void>}
 */
const additionalMap = async (map, fromObj, toObj) => {
    for (let mapKey in map) {
        // eslint-disable-next-line no-prototype-builtins
        if (typeof fromObj[map[mapKey]] !== 'undefined' && toObj.hasOwnProperty(mapKey)) {
            toObj[mapKey] = fromObj[map[mapKey]]
        }
    }
    return toObj
}

/**
 * @author: @DyanGalih <dyan.galih@gmail.com>
 * @param fromObj
 * @param toObj
 * @param map
 * @returns {Promise<*>}
 */

const transform = async (fromObj, toObj, map = null) => {
    for (let toObjKey in toObj) {
        if (typeof fromObj[toObjKey] !== 'undefined') {
            if (toObj[toObjKey] !== null && typeof toObj[toObjKey] === 'function') {
                if (Array.isArray(fromObj[toObjKey])) {
                    toObj[toObjKey] = await Promise.all(
                        fromObj[toObjKey].map(async (item) => {
                            return transform(item, new toObj[toObjKey]())
                        }),
                    )
                } else {
                    toObj[toObjKey] = await transform(
                        fromObj[toObjKey],
                        new toObj[toObjKey](),
                        map,
                    )
                }
            } else if (typeof toObj[toObjKey] !== 'undefined') {
                toObj[toObjKey] = fromObj[toObjKey]
            }
        }
    }
    if (map !== null) {
        toObj = additionalMap(map, fromObj, toObj)
    }

    return toObj
}

const transformToComponent = async (fromObj, toObj) => {
    for (let fromObjKey in fromObj) {
        if (typeof toObj[`${fromObjKey}Ref`] !== 'undefined') {
            toObj[`${fromObjKey}Ref`].value = fromObj[`${fromObjKey}`]
        }
    }
    return toObj
}

/**
 *
 * @param fromObj
 * @param toObj
 * @param expectTest
 * @returns {Promise<void>}
 */
const expect = async (fromObj, toObj, expectTest) => {
    for (const toObjKey in toObj) {
        if (typeof fromObj[toObjKey] !== 'undefined') {
            expectTest(fromObj[toObjKey]).to.equal(toObj[toObjKey])
        }
    }
}

/**
 *
 * @param fromObjs
 * @param toObjs
 * @param expectTest
 * @returns {Promise<void>}
 */
const expectBulk = async (fromObjs, toObjs, expectTest) => {
    expectTest(fromObjs.length).to.equal(toObjs.length)
    for (let i = 0; i < toObjs.length; i++) {
        const toObj = toObjs[i]
        const fromObj = fromObjs[i]
        for (const toObjKey in toObj) {
            if (typeof fromObj[toObjKey] !== 'undefined') {
                expectTest(fromObj[toObjKey]).to.equal(toObj[toObjKey])
            }
        }
    }
}

/**
 *
 * @param object
 * @param context
 * @param callback
 */
const set = (object, context, callback) => {
    let value = object.target.value
    let name = object.target.name
    if (typeof context[name] !== 'undefined') {
        context[name] = value
    }
    callback(context)
}

/**
 *
 * @param obj
 * @param struct
 */
const clear = (obj, struct) => {
    for (const objKey in struct) {
        let currentObj = obj[`${objKey}Ref`]
        if (typeof currentObj !== 'undefined') {
            if (typeof currentObj.value !== 'undefined') {
                currentObj.value = null
            }
        }
    }
}

/**
 *
 * @param routes
 * @param routeName
 * @param params
 * @param query
 */
const generateRoute = (routes, routeName, params = {}, query = {}) => {
    const route = routes.getRoutes().find((item) => item.name === routeName)
    const newParams = {}
    if (typeof route !== 'undefined') {
        route.regex.keys.forEach((item) => {
            if ((query !== null && typeof query[item.name] !== 'undefined' && query[item.name] !== '') && typeof params[item.name] === 'undefined') {
                newParams[item.name] = query[item.name]
                delete query[item.name]
            } else if (typeof params[item.name] !== 'undefined') {
                newParams[item.name] = params[item.name]
            }
        })

        for (const paramsKey in params) {
            if (typeof route.regex.keys.find((item) => item.name === paramsKey) === 'undefined' && typeof query[paramsKey] !== 'undefined') {
                query[paramsKey] = params[paramsKey]
            }
        }
    }
    return {
        name: routeName,
        params: newParams,
        query: query,
    }
}

const Lazy = {transform, expect, expectBulk, set, clear, transformToComponent, generateRoute}

export default Lazy
