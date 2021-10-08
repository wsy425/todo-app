<template>
  <main>
    <div class="container">
      <h1>欢迎使用wsy待办事项</h1>

      <todo-add :tid="todo?.length ?? 0" @add-todo="addTodo" />

      <todo-filter></todo-filter>

      <todo-list :todos="todos"></todo-list>
    </div>
  </main>
</template>

<script lang="ts">
import TodoAdd from "./components/TodoAdd.vue";
import TodoFilter from "./components/TodoFilter.vue";
import TodoList from "./components/TodoList.vue";
import { reactive, toRefs } from "vue";

interface DataProps {
  todos: string[];
  addTodo: (todo: string) => void;
}

export default {
  name: "App",
  components: {
    TodoAdd,
    TodoFilter,
    TodoList,
  },
  setup() {
    const data: DataProps = reactive({
      todos: [],
      addTodo: (todo: string) => {
        data.todos.push(todo);
      },
    });
    const refData = toRefs(data);
    return {
      ...refData,
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Helvetica, "PingFang SC", "Microsoft Yahei", sans-serif;
}
main {
  width: 100vw;
  min-height: 100vh;
  display: grid;
  align-items: center;
  justify-items: center;
  background: rgb(203, 210, 240);
}

.container {
  width: 60%;
  max-width: 400px;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.15);
  border-radius: 24px;
  padding: 48px 28px;
  background-color: rgb(245, 246, 252);
}

h1 {
  margin: 24px 0;
  font-size: 28px;
  color: #414873;
}
</style>
