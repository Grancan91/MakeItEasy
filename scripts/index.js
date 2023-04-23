import {event} from './event.js'


const loadNavbar = function(){
   console.log(event.name)

   //Localizar Div en el HTML
   event.dom = document.getElementsByClassName('navbar')
   event.mainEvents()
   console.log(event.dom)

}

const loadSidebar = function(){
 /*   
     let main = document.querySelector('.sidebar')
     let newEvent = document.querySelector('.new-event')
     let newImg = document.querySelector('.img')
    
     newEvent = document.createElement('div')
     newEvent.setAttribute('class', 'new-event')
     newImg = document.createElement('img')
     newEvent.appendChild(newImg)
     main.appendChild(newEvent)
   */  
    
}

loadSidebar()
//loadSidebar()