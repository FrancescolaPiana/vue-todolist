const dProcess = [
    {
        text:'chose something to draw',
        done: false,
    },
    {
        text:'select some reference image',
        done: false,
    },
    {
        text:'start create guidelines and shapes',
        done: false,
    },
    {
        text:'sketch the first drawing',
        done: false,
    },
]

console.log(dProcess);

console.log(dProcess[0].text);

const {createApp} = Vue;
const app = createApp({
    data(){
        return {
            dProcess,
            newTodo:''
        }
    },

    methods: {
        addTodo(){
            if (this.newTodo.length > 0 ) {
            let texn = this.newTodo
            let obj = Object();
            obj.text = texn;
            obj.done = false;
            this.dProcess.push(obj)
            console.log(texn);
            console.log(obj);
            console.log(dProcess);
            this.newTodo = ''
            }
            else{

            }

        },

        deleteTodo(index){
            console.log(index);
            this.dProcess.splice(index, 1)
            console.log(dProcess);
        }
    },

    computed: {

    },

    mounted(){

    },
    created(){

    },
    beforeCreate(){

    },

});
app.mount('#app')
