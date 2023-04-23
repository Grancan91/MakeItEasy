
class Event {
    
    constructor(name = "New Event") {
        this.eventId = 1
        this.name = name
        this.dom = HTMLCollection
    }
   
    navbarEvent(){
        var navbar = document.querySelector('.navbar')
        this.dom = document.createElement('div')
        this.dom.setAttribute('class','event')  
        this.dom.setAttribute('id', this.eventId)
        navbar.appendChild(this.dom)
    }
    //
  
}

const event = new Event()

export {event}

