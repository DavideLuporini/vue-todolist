Vue.config.devtools = true;

var app = new Vue({
    el: '#root',
    data: {
        newTodo: '',
        todos: [{
                todo: 'comprare il latte',
                done: true,
            },
            {
                todo: 'comprare il latte',
                done: true,
            },
            {
                todo: 'comprare il latte',
                done: true,
            },
            {
                todo: 'comprare il latte',
                done: true,
            },
            {
                todo: 'comprare il latte',
                done: true,
            },
        ],
    },
    methods: {
        addTodo() {
            const newTodo = this.newTodo.trim();
            if (newTodo) {
                const newTodoObject = {
                    todo: newTodo,
                    done: false,
                }
                this.todos.push(newTodoObject);
            }
            this.newTodo = '';
        },

        deleteTodo(index) {
            this.todos.splice(index, 1)
        },

        deleteAll() {
            const deleteAllTodo = [];
            this.todos = deleteAllTodo;
        }
    }
})