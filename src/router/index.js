import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Todos from '@/components/Todos'
import Contacts from '@/components/Contacts'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/todos',
      name: 'Todos',
      component: Todos
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts
    }
  ]
})
