<template>
    <div id="Todos">
        <div>
        <b-button v-b-modal.modal-1>Launch demo modal</b-button>

        <b-modal id="modal-1" title="BootstrapVue">
            <p class="my-4">Hello from modal!</p>
        </b-modal>
        </div>
        <div class="todos grid-4">
            <button class="navBtn" @click="type='allTasks'">All Tasks</button>
            <button class="navBtn" @click="type='doneTasks'">Completed</button>
            <button class="navBtn" @click="type='undoneTasks'">To Do</button>
            <h2 v-show="type==='allTasks'">{{allTodosCount}} Tasks</h2>
            <h2 v-show="type==='doneTasks'">{{doneTodosCount}} Tasks</h2>
            <h2 v-show="type==='undoneTasks'">{{undoneTodosCount}} Tasks</h2>
        </div>
        <div class="todos" v-if="type==='allTasks'">
            <div v-for="todo in allTodos" :key="todo.id" class="todo">
                {{todo.title}}
            </div>
        </div>
        <div class="todos" v-if="type==='doneTasks'">
            <div v-for="todo in doneTodos" :key="todo.id" class="todo">
                {{todo.title}}
            </div>
        </div>
        <div class="todos" v-if="type==='undoneTasks'">
            <div v-for="todo in undoneTodos" :key="todo.id" class="todo">
                {{todo.title}}
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
export default {
  name: "Todos",
  data() {
      return {
          type: 'allTasks'
      }
  },
  methods: {
      ...mapActions([
          'fetchTodos'
      ])
  },
  computed: {
    ...mapGetters([
      'allTodos',
      'doneTodos',
      'doneTodosCount',
      'undoneTodos',
      'undoneTodosCount',
      'allTodosCount'
    ]),
    ...mapMutations([
        'addTodos'
    ])
  },
  created() {
      this.fetchTodos();
  }
}
</script>

<style scoped>
    .todos {
        display: inline-grid;
        grid-template-columns: repeat(3,1fr);
        grid-gap: 1rem;
        padding: 1rem;
    }
    .todos .navBtn {
        text-align: center;
        border: 1px solid #ccc;
        padding: 1rem;
        border-radius: 0.3rem;
        cursor: pointer;
    }
    .todos .navBtn:hover {
        text-align: center;
        border: 1px solid #ccc;
        background: rgb(107, 107, 107);
        color:#fff;
        padding: 1rem;
        border-radius: 0.3rem;
        cursor: pointer;
    }
    .todo {
        text-align: center;
        border: 1px solid #ccc;
        background: #41b883;
        padding: 1rem;
        border-radius: 0.3rem;
        cursor: pointer;
    }
    .todo:hover {
        background: green;
        color: #ccc;
    }
    .grid-4 {
        grid-template-columns: repeat(4,1fr);
    }
</style>
