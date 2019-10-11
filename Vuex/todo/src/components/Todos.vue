<template>
    <div id="Todos">
        <div class="todos">
            <button class="navBtn" @click="type='allTasks'">All Tasks</button>
            <button class="navBtn" @click="type='doneTasks'">Completed</button>
            <button class="navBtn" @click="type='undoneTasks'">To Do</button>
        
            <p>Double click to Toggle the task</p>
            <p><span class="complete-box"> </span> Complete</p>
            <p><span class="incomplete-box"> </span> Incomplete</p>
        </div>
        <div>
            <h2 v-show="type==='allTasks'"> All {{allTodosCount}} Tasks</h2>
            <h2 v-show="type==='doneTasks'">{{doneTodosCount}} Tasks Done</h2>
            <h2 v-show="type==='undoneTasks'">{{undoneTodosCount}} Tasks to be done</h2>
        </div>
        <div class="todos" v-if="type==='allTasks'">
            <div v-for="todo in allTodos" :key="todo.id" >
                <Task @dblclick="toggleStatus(todo)" :class="{'is-complete': todo.completed}" class="todo" :todo='todo'></Task>
            </div>
        </div>
        <div class="todos" v-if="type==='doneTasks'">
            <div v-for="todo in doneTodos" :key="todo.id" class="todo" :class="{'is-complete': todo.completed}" @dblclick="toggleStatus(todo)">
                {{todo.title}}
                <i class="fas fa-trash-alt icon" @click='deleteTodo(todo.id)'></i>
            </div>
        </div>
        <div class="todos" v-if="type==='undoneTasks'">
            <div v-for="todo in undoneTodos" :key="todo.id" class="todo" :class="{'is-complete': todo.completed}" @dblclick="toggleStatus(todo)">
                {{todo.title}}
                <i class="fas fa-trash-alt icon" @click='deleteTodo(todo.id)'></i>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import 'vue-loading-overlay/dist/vue-loading.css';
import Task from '@/components/Task.vue'
export default {
  name: "Todos",
  data() {
      return {
          type: 'allTasks',
          isLoading: false
      }
  },
  components: {
      Task
  },
  methods: {
      ...mapActions([
          'fetchTodos',
          'deleteTodo',
          'updateTodo',
          'updateTask'
      ]),
      toggleStatus(todo) {
          this.isLoading = true;
          const updTodo = {
              id: todo.id,
              title: todo.title,
              completed: !todo.completed
          }
          this.updateTodo(updTodo);
          setTimeout(() => {
             this.isLoading = false
          },500)
      }

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
        text-align: justify;
        border: 1px solid #ccc;
        background: #41b883;
        padding: 1rem;
        border-radius: 0.3rem;
        position: relative;
    }
    .todo:hover {
        background: green;
        color: #ccc;
    }
    .grid-4 {
        grid-template-columns: repeat(4,1fr);
    }
    .icon {
        position: absolute;
        bottom: 0.5rem;
        right: 0.5rem;
        color: #ffffff;
    }
    .complete-box {
        padding: 3px 10px;
        background: #35495e;
    }
    .incomplete-box {
        padding: 3px 10px;
        background: #41b883;
    }
    .is-complete {
        background: #35495e;
        color: #ccc;
    }
</style>
