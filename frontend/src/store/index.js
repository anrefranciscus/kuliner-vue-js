import Vue from 'vue'
import Vuex, {createLogger} from 'vuex'
import product from "@/store/modules/product";
Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
    modules: {
        product
    },
    strict: debug,
    plugins: debug ? [createLogger()] : [],
})
