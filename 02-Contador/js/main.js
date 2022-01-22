const app = Vue.createApp({
    data(){
        return{
            title: "App Contador - Vue",
            count: 0,

        }
    },

    methods:{

        minCount(){
            console.log("Restar");
            this.count--;
        },

        maxCount(){
            console.log("Sumar");
            // Acceder a propiedades de un objeto
            this.count++;
        },

        modCount(instruccion = "add"){
            if(instruccion === "dis"){
                this.count--;
            }else{
                this.count++;
            }

        },
    }

});