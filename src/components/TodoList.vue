<!--<template>
   <div class="todo-list">
     <input type="text" class="todo-input" placeholder="What needs to be done?" @keyup.enter="addTodo" v-model="todo.title">
       <button class="btn btn-primary btn-sm mr-2" v-on:click="addTodo">Add</button>
    <div class="todo-item" v-for="(todo, index) in todos" :key="todo.id">
          <input type="checkbox" v-model="todo.completed">
           <div class="todo-item-left">
          <div class="todo-item-label" v-if="!todo.editing" :class="{ completed : todo.completed}" @dblclick="editTodo(todo)">
          {{todo.title}} </div>
          <input v-else class="todo-item-edit" type="text" v-model="todo.title" @blur="doneEdit(todo)" @keyup.enter="doneEdit(todo)"
           @keyup.esc="cancelEdit(todo)" v-focus>
        </div>
                


       <select v-model="todo.priority" class="form-control-sm" name="priority">
          <option v-for="option in options">{{option}}</option>
        </select>
      <div class="remove-item" v-on:click="removeItem(index)"> 
        &times;
      </div>    
    </div>   
  </div>
</template>
<script> -->


<template>
<div class="todo-list">
  <div class="list-group">
    <router-link
      class="list-group-item list-group-item-action"
      tag="button"
      :to="{ name: 'todo-details', params: { id: todo.id }}"
      exact-active-class="active"
      v-for="(todo, key) in todos"
      :key="key"
    >
      {{ todo.title }} 
    </router-link>
   </div>
  </div>
</template>

<script>
export default {
  name: 'todo-list',
   props: ['todos'],
  data() {
    return {
      todo: {
        title:"",
        completed:"false",
        priority:"normal",
      },
      todos:[]
    },
    created() 
    console.log(fgdfg);
    todosService.getAll()
      .then(response => {
        this.todos = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }

</script>
// import { todosService } from '../services/TodosService';

// export default {

//   name: 'todo-list',


//   data() {
//     return {
//       newTodo:"",
//       todo: {
//         title:"",
//         completed:"false",
//         priority:"normal",
//       },
//       todos: [],
//       options: ['Low', 'Normal', 'High'],
//     }
//   },
//   directives: {
//   focus: {
//     inserted: function (el) {
//       el.focus()
//     }
//    }
//   },     

//  created() {
//     todosService.getAll()
//       .then(response => {
//         this.todos = response.data
//       })
//       .catch(e => {
//         this.errors.push(e)
//       })
//   },

//     methods: {

//       addTodo() {
//         if(this.todo.title != "" ) {
//       todosService.add({
//         title: this.todo.title,
//         completed: this.todo.completed,
//         priority: this.todo.priority
//       }).then(response => {
//           todosService.getAll()
//           .then(response => {
//             this.todos = response.data
//           })
//       .catch(e => {
//         this.errors.push(e)
//        })         
//         this.todo.title = "";        
//           })
//         }
//       },
    
     
//       removeTodo(index) {   ///ovde SAM SA REMOVEITEM PREBACILA NA REMOVETODO ALI NIJE ISPRAVLJENO U HTML
//         var todo = this.todos[index];
//                 console.log(todo);
//         todosService.remove(todo.id)
//             .then((response)=> {
//               this.todos.splice(index,1);
//             }).catch(e => {
//               console.log(e);
//             });  
//        },



//       editTodo(todo){
//         this.beforeEditCache = todo.title;

//         todosService.edit({
//         title: this.todo.title,
//         completed: this.todo.completed,
//         priority: this.todo.priority
//       }).then(response => {
//           todosService.getAll()
//           .then(response => {
//             this.todos = response.data
//           })
//       .catch(e => {
//         this.errors.push(e)
//          })         
//         })
//       },


//       doneEdit(todo) {
//         todo.editing = false;
//       },

//       cancelEdit(todo) {
//         todo.title = this.beforeEditCache;
//         todo.editing = false;
//       }
//     }
   
// };

// </script>

<!-- <style lang="scss">
// .todo-input {
//     width: 100%;
//     padding: 10px 18px;
//     margin-bottom: 16px;
//     font-size: 18px;
//     cursor: pointer;
// }

// .todo-item {
//   display:-webkit-flex;
//   margin-bottom: 12px;
//   align-items: center;
//   justify-content: space-between;
// }

// .remove-item {
//       cursor: pointer;

// }
// .completed {
//   text-decoration: line-through;
//   color:grey;
// }


// </style>



