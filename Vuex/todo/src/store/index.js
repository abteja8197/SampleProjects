import Vuex from 'vuex';
import Vue from 'vue';
import Todos from './views/todos';

Vue.use(Vuex);

export default new Vuex.store ({
    modules: {
        Todos
    }
});