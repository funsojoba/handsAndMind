import { EventsContainer, EventCard, EventImage, EventDetails, EventDate, EventTitle, EventTime, EventLocation, EventDescription, RegisterButton, NoEvents } from "./style"
import Nav from "../../components/Nav"
import Footer from "../../components/Footer"
import { useEffect, useState } from "react"
import api from "../../api/axiosInstance"

import { formatDate, convertTime } from "../../utils/dateTimeFormat"

const Events = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [eventData, setEventData] = useState(null);



    const isEventUpcoming = (dateString) => {
        const eventDate = new Date(dateString)
        const today = new Date()

        // Normalize both to midnight local time
        eventDate.setHours(0, 0, 0, 0)
        today.setHours(0, 0, 0, 0)

        return eventDate >= today
    }

    

    useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await api.get("event");
        setEventData(res.data?.data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch events");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);


  if (loading) return <p>Loading events...</p>;
  if (error) return <p>{error}</p>;



    const upcomingEvents = eventData.filter(event => isEventUpcoming(event.date))

    console.log("Upcoming Events:", upcomingEvents);

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
                                    <img src={event.event_flier} alt={event.title} />
                                </EventImage>
                                
                                <EventDetails>
                                    <EventDate>{formatDate(event.date)}</EventDate>
                                    <EventTitle>{event.title}</EventTitle>
                                    <EventTime>🕒 {convertTime(event?.time)}</EventTime>
                                    <EventLocation>📍 {event.location}</EventLocation>
                                    <EventDescription>{event.description}</EventDescription>
                                    
                                    {event.registration_link && (
                                        <RegisterButton 
                                            href={event.registration_link} 
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
