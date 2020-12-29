<template>
  <div class="todo-parent">
    <section class="todoapp">
      <header class="header">
        <h1>todos</h1>
        <input
          class="new-todo"
          autofocus
          autocomplete="off"
          placeholder="What needs to be done?"
          v-model="newTodo"
          @keyup.enter="addTodo"
        />
      </header>
      <section class="main" v-show="todos.length" v-cloak>
        <input
          class="toggle-all"
          id="toggle-all"
          type="checkbox"
          v-model="allDone"
        />
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
          <li
            class="todo"
            v-for="todo in filterdTodos"
            :key="todo.id"
            :class="{ completed: todo.completed, editing: todo == editedTodo }"
          >
            <div class="view">
              <input class="toggle" type="checkbox" v-model="todo.completed" />
              <label @dblclick="editTodo(todo)">{{ todo.title }}</label>
              <button class="destroy" @click="deleteTodo(todo)"></button>
            </div>
            <input
              class="edit"
              type="text"
              v-model="todo.title"
              @blur="doneEdit(todo)"
              @keyup.enter="doneEdit(todo)"
              @keyup.esc="cancelEdit(todo)"
            />
          </li>
        </ul>
      </section>
      <footer class="footer" v-show="todos.length" v-cloak>
        <span class="todo-count">
          <strong>{{ remaining }}</strong> {{ remaining | pluralize }} left
        </span>
        <ul class="filters">
          <li>
            <a
              href="#/all"
              @click.prevent="visibility = 'all'"
              :class="{ selected: visibility == 'all' }"
              >All</a
            >
          </li>
          <li>
            <a
              href="#/active"
              @click.prevent="visibility = 'active'"
              :class="{ selected: visibility == 'active' }"
              >Active</a
            >
          </li>
          <li>
            <a
              href="#/completed"
              @click.prevent="visibility = 'completed'"
              :class="{ selected: visibility == 'completed' }"
              >Completed</a
            >
          </li>
        </ul>
        <button class="clear-completed" @click="removeCompleted">
          Clear completed
        </button>
      </footer>
    </section>
    <footer class="info">
      <p>Double-click to edit a todo</p>
      <p>Click Esc to cancel edit</p>
      <p>Click enter to save edit</p>
    </footer>
  </div>
</template>

<script type="text/javascript">
// Full spec-compliant TodoMVC with localStorage persistence
// and hash-based routing in ~120 effective lines of JavaScript.

// localStorage persistence
var STORAGE_KEY = "todos-vuejs-2.0";
var todoStorage = {
  fetch: function() {
    var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    todos.forEach(function(todo, index) {
      todo.id = index;
    });
    todoStorage.uid = todos.length;
    return todos;
  },
  save: function(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }
};

// visibility filters
var filters = {
  all: function(todos) {
    return todos;
  },
  active: function(todos) {
    return todos.filter(function(todo) {
      return !todo.completed;
    });
  },
  completed: function(todos) {
    return todos.filter(function(todo) {
      return todo.completed;
    });
  }
};

export default {
  name: "TodoComp",
  data: function() {
    return {
      todos: todoStorage.fetch(),
      newTodo: "",
      visibility: "all",
      editedTodo: null
    };
  },

  // watch todos change for localStorage persistence
  watch: {
    todos: {
      handler: function(todos) {
        todoStorage.save(todos);
      },
      deep: true
    }
  },

  // computed properties
  computed: {
    filterdTodos: function() {
      return filters[this.visibility](this.todos);
    },
    remaining: function() {
      return filters.active(this.todos).length;
    },
    allDone: {
      get: function() {
        return this.remaining === 0;
      },
      set: function(value) {
        this.todos.forEach(function(todo) {
          todo.completed = value;
        });
      }
    }
  },

  filters: {
    pluralize: function(n) {
      return n === 1 ? "item" : "items";
    }
  },
  methods: {
    addTodo: function() {
      var value = this.newTodo && this.newTodo.trim();
      if (!value) {
        return;
      }
      this.todos.push({
        id: todoStorage.uid++,
        title: value,
        completed: false
      });
      this.newTodo = "";
    },
    deleteTodo: function(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1);
    },
    removeCompleted() {
      this.todos = filters.active(this.todos);
    },
    editTodo(todo) {
      this.beforeEditCache = todo.title;
      this.editedTodo = todo;
    },
    doneEdit: function(todo) {
      if (!this.editedTodo) {
        return;
      }
      this.editedTodo = null;
      todo.title = todo.title.trim();
      if (!todo.title) {
        this.removeTodo(todo);
      }
    },
    cancelEdit: function(todo) {
      this.editedTodo = null;
      todo.title = this.beforeEditCache;
    }
  }
};
</script>
<style lang="scss" scoped>@import "../../scss/TodoApp/TodoApp";</style>
