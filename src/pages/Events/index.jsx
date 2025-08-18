import { EventsContainer, EventCard, EventImage, EventDetails, EventDate, EventTitle, EventTime, EventLocation, EventDescription, RegisterButton, NoEvents } from "./style"
import Nav from "../../components/Nav"
import Footer from "../../components/Footer"

const Events = () => {
    // Sample events data - you can replace these with real events
    const events = [
        {
            id: 1,
            date: '2025-08-29',
            title: 'Introductory Workshop',
            time: '7:00 PM - 8:00 PM EST',
            location: 'Online Meeting',
            description: 'Hearts and mind trauma informed care approach for foster parents. Join us for an introductory session where we explore trauma-informed care principles specifically designed for foster parents.',
            link: "https://www.eventbrite.ca/e/introductory-workshop-tickets-1597710337629?aff=oddtdtcreator",
            flier: 'https://res.cloudinary.com/ddl2pf4qh/image/upload/v1755404999/HeartsAndMind/Group_xlbl2p.jpg'
        }
    ]

    const formatDate = (dateString) => {
        const date = new Date(dateString)
        return date.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        })
    }

    const isEventUpcoming = (dateString) => {
        const eventDate = new Date(dateString)
        const today = new Date()
        return eventDate >= today
    }

    const upcomingEvents = events.filter(event => isEventUpcoming(event.date))

    return (
        <>
            <Nav />
            
            <EventsContainer>
                <div className="events-header">
                    <h1 className="page-title">Upcoming Events</h1>
                    <p className="page-subtitle">
                        Join us for our upcoming workshops, brunches, and support sessions designed specifically for foster parents and kinship caregivers.
                    </p>
                </div>

                <div className="events-grid">
                    {upcomingEvents.length > 0 ? (
                        upcomingEvents.map(event => (
                            <EventCard key={event.id}>
                                <EventImage>
                                    <img src={event.flier} alt={event.title} />
                                </EventImage>
                                
                                <EventDetails>
                                    <EventDate>{formatDate(event.date)}</EventDate>
                                    <EventTitle>{event.title}</EventTitle>
                                    <EventTime>🕒 {event.time}</EventTime>
                                    <EventLocation>📍 {event.location}</EventLocation>
                                    <EventDescription>{event.description}</EventDescription>
                                    
                                    {event.link && (
                                        <RegisterButton 
                                            href={event.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                        >
                                            Register for this event
                                        </RegisterButton>
                                    )}
                                </EventDetails>
                            </EventCard>
                        ))
                    ) : (
                        <NoEvents>
                            <div className="no-events-icon">📅</div>
                            <h2>No Upcoming Events</h2>
                            <p>Check back soon for new events and workshops!</p>
                        </NoEvents>
                    )}
                </div>
            </EventsContainer>

            <Footer />
        </>
    )
}

export default Events
