// import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';
Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        todos: [
            {
                userId: 1,
                id: 1,
                title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
                completed: false
            },
            {
                userId: 1,
                id: 2,
                title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
                completed: false
            },
        ]
    },
    getters: {
        allTodos: state => state.todos,
        doneTodos: state => {
            return state.todos.filter(todo => todo.completed)
        },
        undoneTodos: state => {
            return state.todos.filter(todo => !todo.completed)
        },
        allTodosCount: (state, getters) => {
            return getters.allTodos.length
        },
        doneTodosCount: (state, getters) => { 
            return getters.doneTodos.length
        },
        undoneTodosCount: (state, getters) => { 
            return getters.undoneTodos.length
        }
    },
    mutations: {
        setTodos: (state, todos) => (state.todos = todos),
    },
    actions: {
        async fetchTodos ({ commit }) {
            const response = await Axios.get('https://jsonplaceholder.typicode.com/todos');
            
            commit('setTodos', response.data);
        }
    }
})
