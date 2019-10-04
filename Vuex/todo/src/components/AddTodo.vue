<template>
    <div id="AddTodo">
        <h3>Add Todo</h3>
        <div class="add">
            <form @submit.prevent="onSubmit()">
                <input type="text" v-model="title" placeholder="Add Todo...">
                <input type="submit" value="Submit">
            </form>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        name: 'AddTodo',
        data() {
            return {
                title: ''
            }
        },
        methods: {
            ...mapActions([
                'addTodo'
            ]),
            onSubmit () {
                this.addTodo(this.title);
                this.title='';
            }
        }
    }
</script>

<style scoped>
    form {
        display: flex;
        width: 90%;
        margin: 0 auto;
        border-radius: 0.3rem;
    }
    input[type="text"] {
        flex: 10;
        padding: 10px;
        border: 1px solid #41b883;
        outline: 0;
    }
    input[type="submit"] {
        flex: 2;
        cursor: pointer;
        color: #ffffff;
        background: #41b883;
        border: 1px solid #41b883;
    }
</style>