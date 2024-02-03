import axios from "axios";

const state = () => ({
    products: [],
    product: null,
    isLoading: false,
})

const getters = {
    productList: state => state.products,
    isLoading: state => state.isLoading,
    product: state => state.product,
}

const actions = {
    async fetchAllProducts({commit}){
        commit('setProductIsLoading', true)
        const url = `http://localhost:4000/api/food/get-all`
        await axios.get(url)
            .then((res) => {
                const products = res.data.data
                commit('setProducts', products)
                commit('setProductIsLoading', false)
            })
            .catch((err) => {
                console.log(err)
                commit('setProductIsLoading', false)
            })
    },
    async getDetailProduct({commit}, id){
        commit('setProductIsLoading', true)
        const url = `http://localhost:4000/api/food/${id}`
        await axios.get(url)
            .then((res) => {
                const product = res.data.data
                commit('setProductDetail', product)
                commit('setProductIsLoading', false)
            })
            .catch((err) => {
                console.log(err)
                commit('setProductIsLoading', false)
            })
    }
}

const mutations = {
    setProducts: (state, products) => {
        state.products = products
    },
    setProductIsLoading(state, isLoading) {
        state.isLoading = isLoading
    },
    setProductDetail(state, product){
        state.product = product
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}


