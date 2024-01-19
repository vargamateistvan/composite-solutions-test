<template>
  <div class="todo-list-item">
    <div :class="{ 'todo-list-item-done': todo.done }">
      <input type="checkbox" v-model="todo.done" @input="updateTodo" />
      <span class="todo-list-item-title">{{ todo.title }}</span>
    </div>
    <input
      class="todo-list-item-delete"
      type="button"
      value="Törlés"
      @click="deleteTodo"
    />
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      title: String,
      done: Boolean,
    },
    index: Number,
  },
  methods: {
    updateTodo() {
      this.$emit("updateTodo", this.index, this.todo);
    },
    deleteTodo() {
      this.$emit("deleteTodo", this.index);
    },
  },
};
</script>

<style lang="scss" scoped>
.todo-list-item {
  display: flex;
  justify-content: space-between;
  width: 350px;
  font-size: 16px;

  input[type="checkbox"] {
    margin-right: 10px;
  }

  &-done {
    text-decoration: line-through;
  }

  &-title {
    padding: 5px;
  }

  &-delete {
    background-color: Transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    justify-self: flex-end;
    color: #213547;
  }
}
</style>
