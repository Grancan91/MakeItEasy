
class Event {

    constructor(name = "New Event") {
        this.eventId = 1
        this.name = name
        this.dom = HTMLCollection
    }

    mainEvents() {
        let main = document.querySelector('.main')
        let event = document.querySelector('.event')
        let eventUl = document.querySelector('ul')
        let eventLi = document.querySelector('li')

        event = document.createElement('div')
        event.setAttribute('class', 'event')
        event.setAttribute('id', this.eventId)
        eventLi = document.createElement('li')
        eventLi.appendChild(document.createTextNode(this.name))
        eventUl = document.createElement('ul')
        eventUl.appendChild(eventLi)
        event.appendChild(eventUl)
        main.appendChild(event)

    }



}

const event = new Event()

export { event }

