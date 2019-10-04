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
        newTodo: (state, todo) => state.todos.unshift(todo),
        removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id!==id),
        updateTodo: (state, updTodo) => {
            const index = state.todos.findIndex(todo => todo.id === updTodo.id);
            if(index !== -1) {
                state.todos.splice(index, 1, updTodo);
            }
        }
    },
    actions: {
        async fetchTodos ({ commit }) {
            const response = await Axios.get('https://jsonplaceholder.typicode.com/todos');
            
            commit('setTodos', response.data);
        },
        async addTodo ({commit}, title) {
            const response = await Axios.post('https://jsonplaceholder.typicode.com/todos', {title, completed: false});

            commit('newTodo', response.data);
        },
        async deleteTodo ({commit}, id) {
            await Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

            commit('removeTodo', id);
        },
        async filterTodos ({commit}, e) {
            const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);
            const response = await Axios.get(`https://jsonplaceholder.typicode.com/todos/?_limit=${limit}`);

            commit('setTodos', response.data);
        },
        async updateTodo ({commit}, updTodo) {
            const response = await Axios.put(`https://jsonplaceholder.typicode.com/todos/${updTodo.id}`, updTodo);

            commit('updateTodo', response.data);
        }
    }
})
