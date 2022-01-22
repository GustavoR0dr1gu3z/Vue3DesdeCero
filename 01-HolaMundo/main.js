// Codigo de Vue
const app = Vue.createApp({
    data(){
        return {
            title: 'Hola mundo',
            name: 'Gustavo Calzada',
            age: '22',
            url: 'https://www.google.com.mx/'            
        };
    },


});

console.log(app.data);
