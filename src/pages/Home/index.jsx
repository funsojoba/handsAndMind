import { SectionOne, SectionTwo, SectionThree, SectionFour, AboutMe, UpcomingEvents } from "./style"
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import { useState, useEffect } from "react"

import fosterFamily from "../../assets/foster-family.jpg"

const Home = ()=>{
    const [currentMonth, setCurrentMonth] = useState(new Date())
    const [selectedEvent, setSelectedEvent] = useState(null)

    // Sample event data - you can replace these with real events
    const events = [
        {
            date: '2025-08-15',
            title: 'Hearts & Mind Brunch',
            time: '11:00 AM - 2:00 PM',
            location: 'Community Center, Ajax',
            description: 'Join us for our monthly brunch gathering. Connect with other foster parents over delicious food and meaningful conversations.',
            flier: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            date: '2025-08-22',
            title: 'Reflect & Renew Workshop',
            time: '6:00 PM - 8:00 PM',
            location: 'Hearts & Mind Office',
            description: 'A guided workshop focused on self-care and renewal for foster parents and caregivers.',
            flier: 'https://images.unsplash.com/photo-1515378960530-7c0a6236fb84?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            date: '2025-08-30',
            title: 'Foster Parent Support Group',
            time: '7:00 PM - 9:00 PM',
            location: 'Online Meeting',
            description: 'Virtual support group meeting for foster parents to share experiences and get advice.',
            flier: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        }
    ]

    const getCalendarDays = () => {
        const year = currentMonth.getFullYear()
        const month = currentMonth.getMonth()
        const firstDay = new Date(year, month, 1)
        const lastDay = new Date(year, month + 1, 0)
        const startDate = new Date(firstDay)
        startDate.setDate(startDate.getDate() - firstDay.getDay())
        
        const days = []
        const today = new Date()
        
        for (let i = 0; i < 42; i++) {
            const date = new Date(startDate)
            date.setDate(startDate.getDate() + i)
            
            const dateString = date.toISOString().split('T')[0]
            const event = events.find(e => e.date === dateString)
            
            days.push({
                date: date.getDate(),
                fullDate: date,
                hasEvent: !!event,
                isCurrentMonth: date.getMonth() === month,
                isToday: date.toDateString() === today.toDateString(),
                event: event
            })
        }
        
        return days
    }

    const handleDateClick = (day) => {
        if (day.hasEvent) {
            setSelectedEvent(day.event)
        }
    }

    return <>
    <NavBar />

    <SectionOne>
        <div className="text">
            <h1 className="montserrat-bold">Hearts And Mind</h1>
            <p>Support  &nbsp; | &nbsp; Connect &nbsp; | &nbsp; Heal</p>
        </div>
    </SectionOne>

    <AboutMe>
        <div className="about-container">
            <div className="about-image">
                <img src={fosterFamily} alt="Foster family support group" />
            </div>
            <div className="about-content">
                <h2 className="about-title montserrat-bold">About Hearts & Mind</h2>
                <p className="about-description">
                    At Hearts & Mind, we believe healing happens in the community. Our monthly
                    Hearts & Mind Brunches are more than just meals—they're a lifeline for foster
                    parents and kinship caregivers. Join us to:
                </p>
                <ul className="about-benefits">
                    <li>Connect with others who truly understand the journey.</li>
                    <li>Recharge over chef-prepared comfort food.</li>
                    <li>Access resources in a judgment-free zone.</li>
                </ul>
            </div>
        </div>
    </AboutMe>


    
    <SectionTwo>
        <div className="programs-container">
            <h2 className="section-title montserrat-bold">Our Programs</h2>
            <div className="programs-grid">
                <div className="program-card">
                    <div className="card-icon">🏠</div>
                    <h3>Hearts & Home Relief Packages</h3>
                    <p>Providing essential support and resources to families in need</p>
                </div>
                <div className="program-card">
                    <div className="card-icon">🔄</div>
                    <h3>Reflect & Renew Workshops</h3>
                    <p>Personal growth and healing through guided reflection sessions</p>
                </div>
                <div className="program-card">
                    <div className="card-icon">⭐</div>
                    <h3>Foster Parent Win Spotlight</h3>
                    <p>Celebrating and highlighting the achievements of foster parents</p>
                </div>
                <div className="program-card">
                    <div className="card-icon">🌐</div>
                    <h3>Hearts & Mind Community Network</h3>
                    <p>Building connections and support systems within our community</p>
                </div>
                <div className="program-card">
                    <div className="card-icon">🍽️</div>
                    <h3>Hearts & Mind Brunchin</h3>
                    <p>Gathering together over meals to foster relationships and share experiences</p>
                </div>
            </div>
        </div>
    </SectionTwo>

    <SectionThree>
        <div className="packages-container">
            <h2 className="section-title montserrat-bold">Hearts & Home Relief Packages</h2>
            <p className="section-subtitle">Choose Your Support Level</p>
            
            <div className="packages-grid">
                <div className="package-card bronze">
                    <div className="package-header">
                        <div className="package-icon">🥉</div>
                        <h3>Bronze</h3>
                        <div className="price">$??/month</div>
                    </div>
                    <div className="package-features">
                        <div className="feature">
                            <span className="feature-icon">⏰</span>
                            <span>2 hrs / 4 times a month</span>
                        </div>
                        <div className="feature">
                            <span className="feature-icon">👥</span>
                            <span>Best for: Parents needing occasional breaks</span>
                        </div>
                    </div>
                    <button className="package-btn">Learn More</button>
                </div>

                <div className="package-card silver">
                    <div className="package-header">
                        <div className="package-icon">🥈</div>
                        <h3>Silver</h3>
                        <div className="price">$??/month</div>
                    </div>
                    <div className="package-features">
                        <div className="feature">
                            <span className="feature-icon">⏰</span>
                            <span>4 hrs / 4 times a month</span>
                        </div>
                        <div className="feature">
                            <span className="feature-icon">⚡</span>
                            <span>4hr response time</span>
                        </div>
                        <div className="feature">
                            <span className="feature-icon">👥</span>
                            <span>Best for: High-needs placements</span>
                        </div>
                    </div>
                    <button className="package-btn">Learn More</button>
                </div>

                <div className="package-card gold">
                    <div className="package-header">
                        <div className="package-icon">🥇</div>
                        <h3>Gold</h3>
                        <div className="price">$??/month</div>
                    </div>
                    <div className="package-features">
                        <div className="feature">
                            <span className="feature-icon">⏰</span>
                            <span>4 hrs / 4 times a month</span>
                        </div>
                        <div className="feature">
                            <span className="feature-icon">🎯</span>
                            <span>Priority booking + 1 free course/month</span>
                        </div>
                        <div className="feature">
                            <span className="feature-icon">🍽️</span>
                            <span>1 brunch reservation paid</span>
                        </div>
                    </div>
                    <button className="package-btn">Learn More</button>
                </div>
            </div>
        </div>
    </SectionThree>

    <UpcomingEvents>
        <div className="events-container">
            <div className="calendar-section">
                <h2 className="events-title montserrat-bold">Upcoming Events</h2>
                <div className="calendar">
                    <div className="calendar-header">
                        <button className="nav-btn" onClick={() => setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() - 1))}>
                            ‹
                        </button>
                        <h3>{currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</h3>
                        <button className="nav-btn" onClick={() => setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + 1))}>
                            ›
                        </button>
                    </div>
                    <div className="calendar-grid">
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                            <div key={day} className="calendar-day-header">{day}</div>
                        ))}
                        {getCalendarDays().map((day, index) => (
                            <div
                                key={index}
                                className={`calendar-day ${day.hasEvent ? 'has-event' : ''} ${day.isCurrentMonth ? '' : 'other-month'} ${day.isToday ? 'today' : ''}`}
                                onClick={() => handleDateClick(day)}
                            >
                                {day.date}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            <div className="flier-section">
                <div className="flier-container">
                    {selectedEvent ? (
                        <div className="event-flier">
                            <img src={selectedEvent.flier} alt={selectedEvent.title} />
                            <div className="event-info">
                                <h3>{selectedEvent.title}</h3>
                                <p className="event-date">{selectedEvent.date}</p>
                                <p className="event-time">{selectedEvent.time}</p>
                                <p className="event-location">{selectedEvent.location}</p>
                                <p className="event-description">{selectedEvent.description}</p>
                            </div>
                        </div>
                    ) : (
                        <div className="no-event-selected">
                            <div className="placeholder-icon">📅</div>
                            <h3>Select a Date</h3>
                            <p>Click on a highlighted date in the calendar to view event details</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </UpcomingEvents>

    <SectionFour>
        <div className="signup-container">
            <h2 className="signup-title montserrat-bold">Ready to Get Started?</h2>
            <p className="signup-subtitle">Join our community and get the support you need</p>
            
            <form className="signup-form">
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" name="firstName" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" name="lastName" required />
                    </div>
                </div>
                
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="tel" id="phone" name="phone" />
                    </div>
                </div>
                
                <div className="form-group">
                    <label htmlFor="package">Preferred Package</label>
                    <select id="package" name="package" required>
                        <option value="">Select a package</option>
                        <option value="bronze">Bronze</option>
                        <option value="silver">Silver</option>
                        <option value="gold">Gold</option>
                    </select>
                </div>
                
                <div className="form-group">
                    <label htmlFor="message">Additional Information</label>
                    <textarea id="message" name="message" rows="4" placeholder="Tell us about your needs..."></textarea>
                </div>
                
                <button type="submit" className="submit-btn">Get Started Today</button>
            </form>
        </div>
    </SectionFour>

    <Footer />
    </>
}


export default Home