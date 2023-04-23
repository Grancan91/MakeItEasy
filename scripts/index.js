import {event} from './event.js'


const loadNavbar = function(){
   console.log(event.name)

   //Localizar Div en el HTML
   event.dom = document.getElementsByClassName('navbar')
   event.mainEvent()
   console.log(event.dom)

}
loadNavbar()
