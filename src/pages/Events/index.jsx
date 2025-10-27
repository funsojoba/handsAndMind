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
    // Sample events data - you can replace these with real events
    // const events = [
    //     {
    //         id: 1,
    //         date: '2025-08-29',
    //         title: 'Introductory Workshop',
    //         time: '7:00 PM - 8:00 PM EST',
    //         location: 'Online Meeting',
    //         description: 'Hearts and mind trauma informed care approach for foster parents. Join us for an introductory session where we explore trauma-informed care principles specifically designed for foster parents.',
    //         link: "https://www.eventbrite.ca/e/introductory-workshop-tickets-1597710337629?aff=oddtdtcreator",
    //         flier: 'https://res.cloudinary.com/ddl2pf4qh/image/upload/v1755404999/HeartsAndMind/Group_xlbl2p.jpg'
    //     },
    //     {
    //         id: 2,
    //         date: '2025-09-26',
    //         title: 'Reflect and Renew Workshop',
    //         time: '7:00 PM - 8:00 PM EST',
    //         location: 'Online Meeting',
    //         description: 'From surviving to thriving: Building resilience and setting boundaries as a foster parent',
    //         link: "https://www.eventbrite.ca/e/reflect-and-renew-workshop-september-edition-tickets-1681318100699?aff=oddtdtcreator",
    //         flier: 'https://res.cloudinary.com/ddl2pf4qh/image/upload/v1757588861/HeartsAndMind/https___cdn.evbuc.com_images_1119321153_2854776033591_1_original_qfm8sz.jpg'
    //     },
    //     {
    //         id: 3,
    //         date: '2025-09-27',
    //         title: 'Heart and Brunch Series',
    //         time: '12:30 PM - 3:30 PM EST',
    //         location: 'Online Meeting',
    //         description: 'Hearts and Mind Brunch Series',
    //         link: "https://www.eventbrite.ca/e/hearts-and-brunch-series-september-editiontoronto-tickets-1661860231689?aff=oddtdtcreator",
    //         flier: 'https://res.cloudinary.com/ddl2pf4qh/image/upload/v1757518976/HeartsAndMind/heatsandbrunch_lidu3h.jpg'
    //     },
    //     {
    //         id: 4,
    //         date: '2025-10-24',
    //         title: 'Storytelling & Advocacy',
    //         time: '7:00 PM EST',
    //         location: 'Online Meeting',
    //         description: 'Using Your Voice as a Foster Parent',
    //         link: "https://www.eventbrite.com/e/1760116157809?aff=oddtdtcreator",
    //         flier: 'https://res.cloudinary.com/ddl2pf4qh/image/upload/v1760152910/HeartsAndMind/WhatsApp_Image_2025-10-10_at_7.26.58_PM_tm41ac.jpg'
    //     },
    //     {
    //         id: 5,
    //         date: '2025-10-25',
    //         title: 'Heart and Brunch Series',
    //         time: '1:00 PM EST',
    //         location: 'North York (Exact location to be disclosed upon registration)',
    //         description: 'A monthly in-person brunch for foster parents to relax, reset, and connect.',
    //         link: "https://www.eventbrite.com/e/1763940135429?aff=oddtdtcreator",
    //         flier: 'https://res.cloudinary.com/ddl2pf4qh/image/upload/v1760152911/HeartsAndMind/WhatsApp_Image_2025-10-10_at_7.26.59_PM_mbdk7v.jpg'
    //     },
    // ]

    


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

  console.log("Fetched Events:", eventData);

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
