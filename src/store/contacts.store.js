export const CONTACT_LOAD        = 'CONTACT_LOAD';

// import todoService from '../services/todo.service'

const state = {
  contacts: [],
};

const getters = {
  filteredContacts(context) {
    return context.contacts
  }
}


const mutations = {
  [CONTACT_LOAD](state, { contacts }) {
    state.contacts = contacts;
  }
}

const actions = {
  [CONTACT_LOAD](context, payload) {
      payload.contacts = ['x', 'y'];
      context.commit(payload);
    // todoService.query()
    //   .then(todos => {
    //     payload.todos = todos;
    //     context.commit(payload)
    //   });
  }
}

export const contactStore = {
  state,
  mutations,
  getters,
  actions
}


