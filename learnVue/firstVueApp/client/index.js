var app = new Vue({
    el: "#app",
    data: {
        message: "Hello my love!"
    }
});

var app2 = new Vue({
    el: "#app-2",
    data: {
        message: "You loaded this page on " + new Date().toLocaleString()
    }
});

var app3 = new Vue({
    el: "#app-3",
    data: {
        seen: true
    }
});

var app4 = new Vue({
    el: "#app-4",
    data: {
        todos: [
            { text: "First todo" },
            { text: "Second todo" },
            { text: "Third todo" }
        ]
    }
});

var app5 = new Vue({
    el: "#app-5",
    data: {
        message: "Hello Vue.js!"
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message
                .split("")
                .reverse()
                .join("");
        }
    }
});

var app6 = new Vue({
    el: "#app-6",
    data: {
        message: "Hello Vue!"
    }
});

//Vue components
// Define a new component called todo-item
Vue.component("todo-item", {
    //this todo-item component now accepts
    //a "prop", which is like a custom attribute.
    //This prop is called a todo.
    props: ["todo"],
    template: "<li>{{todo.text}}</li>"
});

var app7 = new Vue({
    el: "#app-7",
    data: {
        groceryList: [
            { id: 0, text: "Vegetables" },
            { id: 1, text: "Cheese" },
            { id: 2, text: "Meat" }
        ]
    }
});

//This is what an imaginary example of what an app's template might
//look like with components
/*
    <div id="app">
        <app-nav></app-nav>
        <app-view>
            <app-sidebar></app-sidebar>
            <app-content></app-content>
        </app-view>
    </div>
*/
