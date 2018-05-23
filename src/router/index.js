import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '@/components/TodoList'
import BootstrapVue from 'bootstrap-vue'
import AnimatedVue from 'animated-vue'

Vue.use(Router)
Vue.use(AnimatedVue)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'todo-list',
      component: TodoList
    }
  ]
})
