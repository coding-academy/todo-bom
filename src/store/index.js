import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import {todoStore} from './todos.store'
import {contactStore} from './contacts.store'


export default new Vuex.Store({
  state: {loggedinUser: {name: 'Puki'}},
  modules: {
    contact: contactStore,
    todo: todoStore
  }
})

