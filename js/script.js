Vue.config.devtools = true;

var app = new Vue({
    el: '#root',
    data: {
        newTodo: '',
        todos: [{
                todo: 'comprare il latte',
                done: false,
            },
            {
                todo: 'comprare crocchette per gatti',
                done: false,
            },
            {
                todo: 'comprare prosciutto',
                done: false,
            },
            {
                todo: 'comprare samale',
                done: false,
            },
            {
                todo: 'comprare tortellini',
                done: false,
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
        },
        todoCheck(index) {
            const newTodo = this.todos.map((todo, i) => {
                if (i === index) todo.done = !todo.done;
                return todo;
            });
            this.todos = newTodo;
        },
    }
})