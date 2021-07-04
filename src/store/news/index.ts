import { NewsState, state } from "./state";
import mutations from "./mutations";
import { Module } from "vuex";

const newsModule: Module<NewsState, string> = {
    namespaced: true,
    state,
    mutations,
};

export default newsModule;
