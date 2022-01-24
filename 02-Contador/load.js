/*Solo hay un if, que pregunta si hay service worker en el navegador*/

if(serviceWorker in navigator){
    navigator.serviceWorker.register('./sw.js').then(
        reg => console.log('Registro del service worker', reg),
        err => console.log('No se pudo registrar el service worker', err)
    )
}    
