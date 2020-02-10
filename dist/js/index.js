var todos = [{
        text: 'Finish brand presentation',
        done: false,
        id: Date.now()
    },
    {
        text: 'Prepare UX wireframe for new project',
        done: true,
        id: Date.now() + 1
    },
    {
        text: 'Update tasks on Jira',
        done: true,
        id: Date.now() + 2
    },
    {
        text: 'Choose primary colors based on material design',
        done: false,
        id: Date.now() + 3
    }
]

var List = Vue.extend({
    template: '#todo-list',
    data: function () {
        return {
            title: 'TODOS',
            todos: todos
        }
    },
    methods: {
        addTodo(event) {
            const text = event.target.value
            this.todos.push({
                text,
                done: false,
                id: Date.now()
            })
            event.target.value = ''
        },
        removeTodo(id) {
            this.todos = this.todos.filter(todo => todo.id !== id)
        },
        check(todo) {
            todo.done = !todo.done
        },
    }
})

var FullWidth = Vue.extend({
    template: '#todo-full-width',
    data: function () {
        return {
            title: 'TODOS',
            todos: todos
        }
    },
    methods: {
        addTodo(event) {
            const text = event.target.value
            this.todos.push({
                text,
                done: false,
                id: Date.now()
            })
            event.target.value = ''
        },
        removeTodo(id) {
            this.todos = this.todos.filter(todo => todo.id !== id)
        },
        check(todo) {
            todo.done = !todo.done
        },
    }
})

var router = new VueRouter({
    routes: [{
            path: '/',
            component: List
        },
        {
            path: '/full-width',
            component: FullWidth,
            name: 'full-width'
        },
    ]
});

new Vue({
    el: "#app",
    router: router,
    template: '<router-view></router-view>',
});