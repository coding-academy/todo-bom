import storageService from './storage.service.js'

const KEY = 'todosAppKey';

// When app is loaded - init our initial storage
(() => {
    storageService.load(KEY).then(todos => {
        if (!todos) storageService.store(KEY, [{_id: 1, txt: 'Wash the Car', completed:false, importance: 1}])
    })
})();

function emptyObj() {
    return {
        _id: null,
        txt: '',
        completed: false,
        importance: 2
      };    
}

function query(filter = null) {
    return storageService.load(KEY)
        .then(todos => {
            if (!todos) todos = [];
            console.log('Todos: ', todos);
            if (filter === null) return todos;
            else return todos.filter(todo => todo.txt.includes(filter.txt))
        })
}

function getById(todoId) {
    return storageService.load(KEY)
        .then(todos => {
            return todos.find(todo => todo._id === todoId);
        })
}

function remove(todoId) {
    return storageService.load(KEY)
        .then(todos => {
            var todoIdx = todos.findIndex(todo => todo._id === todoId);
            todos.splice(todoIdx, 1);
            return storageService.store(KEY, todos);
        })
}

function add(todo) {
    return storageService.load(KEY)
        .then(todos => {
            todo._id = '' + Date.now();
            todos.push(todo);
            return storageService.store(KEY, todos).then(()=>todo)
        });
}
function update(todo) {
    return storageService.load(KEY)
        .then(todos => {
            var todoIdx = todos.findIndex(currTodo => currTodo._id === todo._id)
            todos.splice(todoIdx, 1, todo);
            return storageService.store(KEY, todos).then(()=>todo);
        });
}

const service = {
    emptyObj,
    add,
    getById,
    update,
    remove,
    query
};

// For Debugging 
window.todoService = service;

export default service;

