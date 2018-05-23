<template>
   <div class="todo-list">
     <input type="text" class="todo-input" placeholder="What needs to be done?" @keyup.enter="addTodo" v-model="newTodo">
       <button class="primary-lg" v-on:click="addTodo">Add</button>
    <div class="todo-item" v-for="(todo, index) in todos" :key="todo.id">
          <input type="checkbox" v-model="todo.completed">
           <div class="todo-item-left">
          <div class="todo-item-label" v-if="!todo.editing" :class="{ completed : todo.completed}" @dblclick="editTodo(todo)">
          {{todo.title}} </div>
          <input v-else class="todo-item-edit" type="text" v-model="todo.title" @blur="doneEdit(todo)" @keyup.enter="doneEdit(todo)"
           @keyup.esc="cancelEdit(todo)" v-focus>
        </div>
      <div class="remove-item" v-on:click="removeItem(index)"> 
        &times;
      </div>    
    </div>   
</div>
</template>
<script>
export default {
  name: 'todo-list',

  data() {
    return {
      newTodo: " ",
      idForTodo: 5,
      todos: [{
        'id':1,
        'title': 'Add todo',
        'completed': false,
        'editing':false,
      }, {
        'id':2,
        'title': 'Delete todo',
        'completed': false,
        'editing':false,   
        }, 
        {
        'id':3,
        'title': 'Edit todo',
        'completed': false,
        'editing':false,   
      }, 
      {
        'id':4,
        'title': 'Check todo',
        'completed': false,
        'editing':false,
      }],
    }
  },
  directives: {
  focus: {
    inserted: function (el) {
      el.focus()
    }
   }
  },
    methods: {
      addTodo() {
        if(this.newTodo.trim().length == 0) {
          return;
        }
       this.todos.push({
         id:this.idForTodo,
         title: this.newTodo,
         completed:false
       })
       this.idForTodo++
       this.newTodo=""
      },
      removeItem(index) {
        this.todos.splice(index,1);    
      },
      editTodo(todo){
        this.beforeEditCache = todo.title;
        todo.editing = true;
      },
      doneEdit(todo) {
        todo.editing = false;
      },
      cancelEdit(todo) {
        todo.title = this.beforeEditCache;
        todo.editing = false;
      }
    }
};

</script>

<style lang="scss">
.todo-input {
    width: 100%;
    padding: 10px 18px;
    margin-bottom: 16px;
    font-size: 18px;
    cursor: pointer;
}

.todo-item {
  display:-webkit-flex;
  margin-bottom: 12px;
  align-items: center;
  justify-content: space-between;
}

.remove-item {
      cursor: pointer;

}
.completed {
  text-decoration: line-through;
  color:grey;
}


</style>