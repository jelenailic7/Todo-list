<template>
  <div>
    <div class="card">
      <ul class="list-group list-group-flush" v-if="todo">
        <li class="list-group-item"><i class="fas fa-user fa-fw"></i> {{ todo.title }} </li>
        <li class="list-group-item"><i class="fas fa-envelope fa-fw"></i> {{ todo.priority }}</li>
        <li class="list-group-item"><i class="fas fa-phone fa-fw"></i> {{ todo.completed }}</li>
        <li class="list-group-item">
          <button class="btn btn-danger btn-sm mr-2" @click="removeTodo(todo.id)"><i class="fas fa-trash"></i></button>
           <button class="btn btn-primary btn-sm"><i class="fa fa-pencil-alt"></i></button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { todosService } from '../services/TodosService'
export default {
  props: ['todo'],
  methods: {
    // deleteContact (id) {
    //   contacts.remove(id)
    //     .then(() => {
    //       this.$emit('contactDeleted', id)
    //     })
      removeTodo(index) {   
        var todo = this.todos[index];
        todosService.remove(todo.id)
            .then((response)=> {
              this.todos.splice(index,1);
            }).catch(e => {
              console.log(e);
            });  
       }
  }
}
</script>