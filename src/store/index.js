import Vue from "vue";
import Vuex from "vuex";

import Axios from "axios";

Vue.use(Vuex);

const baseUrl = 'http://localhost:8080/';
const pagesUrl = `${baseUrl}`

export default new Vuex.Store({

    strict: true,
    state: {
        pages: []
    },
    getter: {

    },
    mutations: {
        setPages(state, pages){
            state.pages = pages;
        }
    },
    actions: {
        async setPagesAction(context) {
            context.commit("setPages", (await Axios.get(pagesUrl)).data);
        }
    }
});

