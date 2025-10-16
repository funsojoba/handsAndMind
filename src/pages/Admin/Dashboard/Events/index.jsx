import { useState, useEffect } from "react"
import { apiCall, API_CONFIG } from "../../../../config/api"
import { EventsContainer, EventsList, EventCard, EventForm, FormGroup, ActionButtons, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "./style"

const Events = () => {
    const [events, setEvents] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [showModal, setShowModal] = useState(false)
    const [editingEvent, setEditingEvent] = useState(null)
    const [formData, setFormData] = useState({
        event_title: '',
        description: '',
        date: '',
        time: '',
        location: '',
        registration_link: '',
        flier_image: ''
    })

    useEffect(() => {
        fetchEvents()
    }, [])

    const fetchEvents = async () => {
        try {
            const response = await apiCall(API_CONFIG.ENDPOINTS.EVENTS)
            console.log('Events response:', response) // Debug log
            
            if (response.success && response.data) {
                setEvents(response.data)
            } else {
                console.error('Invalid events response:', response)
                setEvents([])
            }
        } catch (error) {
            console.error('Error fetching events:', error)
            setEvents([])
        } finally {
            setIsLoading(false)
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try {
            const endpoint = editingEvent 
                ? API_CONFIG.ENDPOINTS.EVENT_BY_ID(editingEvent.id)
                : API_CONFIG.ENDPOINTS.EVENTS
            const method = editingEvent ? 'PUT' : 'POST'
            
            await apiCall(endpoint, {
                method,
                body: JSON.stringify(formData)
            })

            fetchEvents()
            setShowModal(false)
            setEditingEvent(null)
            setFormData({
                event_title: '',
                description: '',
                date: '',
                time: '',
                location: '',
                registration_link: '',
                flier_image: ''
            })
        } catch (error) {
            console.error('Error saving event:', error)
        }
    }

    const handleEdit = (event) => {
        setEditingEvent(event)
        setFormData({
            event_title: event.event_title,
            description: event.description,
            date: event.date,
            time: event.time,
            location: event.location,
            registration_link: event.registration_link || '',
            flier_image: event.flier_image || ''
        })
        setShowModal(true)
    }

    const handleDelete = async (eventId) => {
        if (window.confirm('Are you sure you want to delete this event?')) {
            try {
                await apiCall(API_CONFIG.ENDPOINTS.EVENT_BY_ID(eventId), {
                    method: 'DELETE'
                })
                fetchEvents()
            } catch (error) {
                console.error('Error deleting event:', error)
            }
        }
    }

    const openCreateModal = () => {
        setEditingEvent(null)
        setFormData({
            event_title: '',
            description: '',
            date: '',
            time: '',
            location: '',
            registration_link: '',
            flier_image: ''
        })
        setShowModal(true)
    }

    if (isLoading) {
        return <div>Loading events...</div>
    }

    return (
        <EventsContainer>
            <ActionButtons>
                <button className="primary" onClick={openCreateModal}>
                    + Create New Event
                </button>
            </ActionButtons>

            <EventsList>
                {events.length === 0 ? (
                    <p>No events found. Create your first event!</p>
                ) : (
                    events.map(event => (
                        <EventCard key={event.id}>
                            <div className="event-content">
                                {event.flier_image && (
                                    <div className="image">
                                        <img src={event.flier_image} alt={event.event_title} />
                                    </div>
                                )}
                                <div className="text">
                                    <h2>{event.event_title}</h2>
                                    <p>{event.description}</p>
                                    
                                    <div className="date-time">
                                        <small>{event.date}</small>
                                        <small>{event.time}</small>
                                    </div>
                                    
                                    {event.registration_link && (
                                        <a href={event.registration_link} target="_blank" rel="noopener noreferrer" className="event-link">
                                            Event Link
                                        </a>
                                    )}
                                </div>
                            </div>
                            
                            <div className="event-actions">
                                <button onClick={() => handleEdit(event)}>Edit</button>
                                <button className="danger" onClick={() => handleDelete(event.id)}>Delete</button>
                            </div>
                        </EventCard>
                    ))
                )}
            </EventsList>

            {showModal && (
                <Modal>
                    <ModalContent>
                        <ModalHeader>
                            <h2>{editingEvent ? 'Edit Event' : 'Create New Event'}</h2>
                            <button onClick={() => setShowModal(false)}>×</button>
                        </ModalHeader>
                        <form onSubmit={handleSubmit}>
                            <ModalBody>
                                <FormGroup>
                                    <label htmlFor="event_title">Event Title *</label>
                                    <input
                                        type="text"
                                        id="event_title"
                                        name="event_title"
                                        value={formData.event_title}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <label htmlFor="description">Description *</label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        value={formData.description}
                                        onChange={handleInputChange}
                                        rows="4"
                                        required
                                    />
                                </FormGroup>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                                    <FormGroup>
                                        <label htmlFor="date">Date *</label>
                                        <input
                                            type="date"
                                            id="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </FormGroup>

                                    <FormGroup>
                                        <label htmlFor="time">Time *</label>
                                        <input
                                            type="text"
                                            id="time"
                                            name="time"
                                            value={formData.time}
                                            onChange={handleInputChange}
                                            placeholder="e.g., 7:00 PM - 8:00 PM EST"
                                            required
                                        />
                                    </FormGroup>
                                </div>

                                <FormGroup>
                                    <label htmlFor="location">Location *</label>
                                    <input
                                        type="text"
                                        id="location"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <label htmlFor="registration_link">Registration Link</label>
                                    <input
                                        type="url"
                                        id="registration_link"
                                        name="registration_link"
                                        value={formData.registration_link}
                                        onChange={handleInputChange}
                                        placeholder="https://..."
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <label htmlFor="flier_image">Flier Image URL</label>
                                    <input
                                        type="url"
                                        id="flier_image"
                                        name="flier_image"
                                        value={formData.flier_image}
                                        onChange={handleInputChange}
                                        placeholder="https://..."
                                    />
                                </FormGroup>
                            </ModalBody>
                            <ModalFooter>
                                <button type="button" onClick={() => setShowModal(false)}>Cancel</button>
                                <button type="submit" className="primary">Save Event</button>
                            </ModalFooter>
                        </form>
                    </ModalContent>
                </Modal>
            )}
        </EventsContainer>
    )
}

export default Events
