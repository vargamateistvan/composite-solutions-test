<template>
  <div class="todo-list">
    <div class="todo-list-create">
      <form @submit.prevent="addTodoItem(newTodo)">
        <input v-model="newTodo" type="text" required />
        <input
          type="button"
          value="Todo hozzáadása"
          @click="addTodoItem(newTodo)"
        />
      </form>
    </div>

    <div v-if="todos.length === 0" class="todo-list-empty">
      <p>A ToDo lista üres</p>
    </div>
    <template v-else>
      <p>Elvégezendő teendők</p>
      <template v-for="(todo, index) in todos" :key="index">
        <todo-list-item
          v-if="!todo.done"
          @updateTodo="updateTodo"
          @deleteTodo="deleteTodo"
          :todo="todo"
          :index="index"
        ></todo-list-item>
      </template>
      <p>Elvégzett teendők</p>
      <template v-for="(todo, index) in todos" :key="index">
        <todo-list-item
          v-if="todo.done"
          @updateTodo="updateTodo"
          @deleteTodo="deleteTodo"
          :todo="todo"
          :index="index"
        ></todo-list-item>
      </template>
    </template>
  </div>
</template>

<script>
import todoListItem from "./item.vue";

export default {
  components: { todoListItem },
  data() {
    return {
      todos: [],
      newTodo: "",
    };
  },
  computed: {
    remaningTodos() {
      return this.todos.filter((todo) => !todo.done);
    },
    donedTodos() {
      return this.todos.filter((todo) => todo.done);
    },
  },
  methods: {
    addTodoItem(todo) {
      if (!this.newTodo) return;
      this.todos.unshift({
        title: todo,
        done: false,
      });
      this.newTodo = "";
    },
    updateTodo(index, todo) {
      this.todos.splice(index, 1, todo);
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
.todo-list {
  p {
    font-size: 18px;
  }

  &-create {
    display: flex;
    justify-content: space-between;
  }
}
</style>
