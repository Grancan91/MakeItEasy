
class Event {
    
    constructor(name = "New Event") {
        this.eventId = 1
        this.name = name
        this.dom = HTMLCollection
    }
   
    navbarEvent(){
        let navbar = document.querySelector('.navbar')
        let event = document.querySelector('.event')
        let eventUl = document.querySelector('ul')
        let eventLi = document.querySelector('li')

            if(event){
            event = document.createElement('div')
            event.setAttribute('class','event')
            event.setAttribute('id', this.eventId)
            
            eventLi = document.createElement('li')
            eventLi.appendChild(document.createTextNode("Lista"))
            eventUl = document.createElement('ul')
            eventUl.appendChild(eventLi)
            
            
            event.appendChild(eventUl)
            navbar.appendChild(event)
            } else {
                event = document.createElement('div')
                event.setAttribute('class','event')
                event.setAttribute('id', this.eventId)
                
                eventLi = document.createElement('li')
                eventLi.appendChild(document.createTextNode("Dont Have Events Jet"))
                eventUl = document.createElement('ul')
                eventUl.appendChild(eventLi)
                
                
                event.appendChild(eventUl)
                navbar.appendChild(event)
            }

            
       
        
    }
    //
  
}

const event = new Event()

export {event}

