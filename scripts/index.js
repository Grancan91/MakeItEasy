import {event} from './event.js'


const loadNavbar = function(){
   console.log(event.name)

   //Localizar Div en el HTML
   event.dom = document.getElementsByClassName('navbar')
   event.navbarEvent()
   console.log(event.dom)

}
loadNavbar()
