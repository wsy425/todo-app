import { ref, computed } from "vue";

interface todosProps {
    id: number;
    content: string;
    comleted: boolean;
}

export default function useFilterTodos(todos: todosProps[]) {
    const filter = ref("all");
    const filterTodos = computed(() => {
        switch (filter.value) {
            case "done":
                return todos.filter((todo) => todo.comleted);
            case "todo":
                return todos.filter((todo) => !todo.comleted);
            default:
                return todos;
        }
    });
    return {
        filter,
        filterTodos
    }
}