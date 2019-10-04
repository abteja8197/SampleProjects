<template>
    <div id="FilterTodos">
        <div class="filtersection">
            Filter Todos:
            <select @change='filterTodos($event)'>
                <option value="200">200</option>
                <option value="100">100</option>
                <option value="50">50</option>
                <option value="20">20</option>
                <option value="10">10</option>
                <option value="5">5</option>
            </select>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'FilterTodos',
    methods: {
        ...mapActions([
            'filterTodos'
        ])
    }
}
</script>

<style>
    .filtersection {
        padding: 1em;
    }
</style>
