// Codigo de Vue
const app = Vue.createApp({
    data(){
        return {
            user:{
                title: 'Hola mundo',
                name: 'Gustavo Calzada',
                age: '22',
                url: 'https://www.google.com.mx/',
                movies: ["pelicula1", "pelicula2", "pelicula3", "pelicula4", "pelicula5"]
            
            }            
            
        };
    },


});

console.log(app.data);
