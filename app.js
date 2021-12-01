let App = {
  data() {
    return {
      todos: [{ title: "task 1" }, { title: "task 2" }, { title: "task 3" }],
      inputValue: "",
      placeholderValue: "Write new Task",
    };
  },
  methods: {
    addTodo() {
      console.log(this.inputValue);
      this.todos.push({ title: this.inputValue });
      this.inputValue = "";
    },
    upperCase(i) {
      return i.toUpperCase();
    },
    deleteTask(idx) {
      this.todos.splice(idx, 1);
    },
  },
};
Vue.createApp(App).mount("#app");
