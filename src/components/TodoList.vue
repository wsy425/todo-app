<template>
  <div class="todo-list">
    <todo-item></todo-item>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
export default {
  name: "TodoList",
  components: { TodoItem },
};
</script>

<style>
.todo-list {
  display: grid;
  row-gap: 14px;
}
</style>