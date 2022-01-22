const app = Vue.createApp({
    data(){
        return{
            title: "App Contador - Vue",
            count: 0,

        }
    },

    methods:{

        minCount(){
            console.log("Decremento");
        },

        maxCount(){
            console.log("Incremento");
        },
    }

});