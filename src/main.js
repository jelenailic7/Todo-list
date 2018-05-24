// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import AnimatedVue from 'animated-vue'
import TodoDetails from './components/TodoDetails.vue'
import TodoList from './components/TodoList.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/todos' },
  { path: '/todos', component: TodoList, name: 'todo-list'},
  { path: '/todos/:id', component: TodoDetails, name: 'todo-details'},
  // { path: 'add-todo',component: AddTodo, name: 'add-todo' }
  

]


const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
