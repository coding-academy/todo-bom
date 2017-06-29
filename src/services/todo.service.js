import axios from 'axios'

const emptyTodo = () => ({
  _id: null,
  txt: '',
  completed: false,
  importance: 2
})

const addTodo = todo => {
  return axios.post('http://localhost:3003/data/todo', todo)
    .then(function (response) {
      console.log(response);
      return response.data;
    })
}

const query = () => {
  return axios.get('http://localhost:3003/data/todo')
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}

const update = todo => {
  return axios.put(`http://localhost:3003/data/todo/${todo._id}`, todo)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}


export default {
  emptyTodo,
  addTodo,
  update,
  query
}
