<template>
    <div id="Task">
        <div class="todo" @click="isEditable=!isEditable" @dblclick="toggleStatus(todo)">
            {{todo.title}}
        </div>
         <i class="fas fa-trash-alt icon" @click='deleteTodo(todo.id)'></i>
        <div v-if="isEditable">
            <input v-model="updatedValue" type="text" @change="updateTask(todo)">
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    name: 'Task',
    data(){
        return {
            isEditable: false,
            updatedValue: this.todo.title
        }
    },
    methods: {
        ...mapActions([
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
    props: [
        'todo'
    ]
}
</script>

<style scoped>
.icon {
    position: absolute;
    bottom: 0.5rem;
    right: 0.5rem;
    color: #ffffff;
}
</style>

