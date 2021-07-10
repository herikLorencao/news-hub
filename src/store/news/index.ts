import { NewsState, state } from "./state";
import mutations from "./mutations";
import getters from "./getters";
import { Module } from "vuex";

const newsModule: Module<NewsState, string> = {
    namespaced: true,
    state,
    mutations,
    getters,
};

export default newsModule;
