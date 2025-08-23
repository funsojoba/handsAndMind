import { SectionOne, SectionTwo, SectionThree, SectionFour, AboutMe, UpcomingEvents, LinkTag, FormContainer } from "./style"
import Nav from "../../components/Nav"
import Footer from "../../components/Footer"
import { useState } from "react"
import emailjs from "emailjs-com"

import fosterFamily from "../../assets/foster-family.jpg"
import { Link } from "react-router-dom"

const Home = ()=>{
    const [currentMonth, setCurrentMonth] = useState(new Date())
    const [selectedEvent, setSelectedEvent] = useState(null)
    const [activeForm, setActiveForm] = useState('support')

    const [contactIsSubmitting, setContactIsSubmitting] = useState(false)
    const [contactSubmitMessage, setContactSubmitMessage] = useState('')

    const [supportSubmitting, setSupportSubmitting] = useState(false)
    const [supportSubmitMessage, setSupportSubmitMessage] = useState('')


    const scrollToSignupForm = () => {
        setActiveForm('support')
        setTimeout(() => {
            const target = document.getElementById('signup')
            if (target) {
                try {
                    const navbarHeight = window.innerWidth <= 768 ? 60 : 70
                    const top = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20
                    window.scrollTo({ top, behavior: 'smooth' })
                } catch (err) {
                    console.log(err)
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
            }
        }, 0)
    }

    // Sample event data - you can replace these with real events
    const events = [
        {
            date: '2025-08-29',
            title: 'Introductory Workshop',
            time: '7:00 PM - 8:00 PM EST',
            location: 'Online Meeting',
            description: 'Hearts and mind trauma informed care approach for foster parents',
            link: "https://www.eventbrite.ca/e/introductory-workshop-tickets-1597710337629?aff=oddtdtcreator",
            flier: 'https://res.cloudinary.com/ddl2pf4qh/image/upload/v1755404999/HeartsAndMind/Group_xlbl2p.jpg'
        }
    ]

    const getCalendarDays = () => {
        const year = currentMonth.getFullYear()
        const month = currentMonth.getMonth()
        const firstDay = new Date(year, month, 1)
        // const lastDay = new Date(year, month + 1, 0)
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

    const handleContactSubmit = async (e) => {
        e.preventDefault()
        setContactIsSubmitting(true)
        setContactSubmitMessage('')

        try {
            const formData = new FormData(e.target)
            console.log("FORM DATA:", formData)
            const whoAreYou = (val) =>{
                if (val === "fosterParent") return "Foster Parent/Kinship Caregiver"
                if (val === "schoolRep") return "School/University Representative" 
                if (val === "volunteer") return "Community Volunteer"
                if (val === "agencyPartner") return "Agency Partner (CAS, Nonprofit, etc.)"
                if (val === "donor") return "Potential Donor/Sponsor"
                if (val === "general") return "General Inquiry"
                return val || "Not specified"
            }

            const howCanWeHelp = []
            if (formData.get('homeSupport')) howCanWeHelp.push("Sign up for Home Support")
            if (formData.get('joinPodContact')) howCanWeHelp.push("Join a POD (peer support group)")
            if (formData.get('attendBrunch')) howCanWeHelp.push("Attend a Hearts & Mind Brunchin")
            
            
            const forSchoolVolunteer = []
            if (formData.get('studentPlacements')) forSchoolVolunteer.push("Student Placements/Internships")
            if (formData.get('volunteerOpportunities')) forSchoolVolunteer.push("Volunteer Opportunities")

            const agencyPartner = []
            if (formData.get('collaborationMeeting')) agencyPartner.push("Request a Collaboration Meeting")
            if (formData.get('inviteToEvent')) agencyPartner.push("Invite Hearts & Mind to an Event")

            const general = []
            if (formData.get('donationQuestions')) general.push("Donation Questions")
            if (formData.get('mediaInquiry')) general.push("Media Inquiry")
            if (formData.get('other')) general.push("Other Inquiry")
            

            const contactData = {
                name: formData.get('contactFullName'),
                email: formData.get('contactEmail'),
                phone: formData.get('contactPhone'),
                organization: formData.get('organization'),
                whoAreYou: whoAreYou(formData.get('whoAreYou')),
                howCanWeHelp: howCanWeHelp.join(", ") || "Not specified",
                forSchoolVolunteer: forSchoolVolunteer.join(", ") || "Not specified",
                agencyPartner: agencyPartner.join(", ") || "Not specified",
                general: general.join(", ") || "Not specified",
                otherDescription: formData.get('otherDescription'),
                contactPreference: formData.get('contactPreference') || "Not specified",

            }

            const templateParams = {
                to_email: '',
                name: contactData.name,
                from_email: contactData.email,
                phone: contactData.phone,
                time: new Date().toLocaleString(),
                subject: 'New Contact Form Submission - Hearts & Mind',
                message: `
                    New Contact Form Submission:

                    Personal Information:
                    - Name : ${contactData.name}
                    - Email: ${contactData.email}
                    - Phone: ${contactData.phone || "Not provided"}
                    - Organization: ${contactData.organization ||"Not provided"}
                    - Who Are You: ${contactData.whoAreYou}
                    - Contact Preference: ${contactData.contactPreference}
                    Inquiry Details:
                    - How Can We Help: ${contactData.howCanWeHelp}
                    - For School/University Representatives: ${contactData.forSchoolVolunteer}
                    - For Agency Partners: ${contactData.agencyPartner}
                    - General Inquiries: ${contactData.general}
                    - Other Description: ${contactData.otherDescription || "N/A"}

                `
            }

            const result = await emailjs.send(
                'service_v4m3ooa', 
                'template_dxoi3bt',
                templateParams,
                'hQZgpt2Mnek8FbjAq'
            )
            console.log('Email sent successfully:', result.text)
            setContactSubmitMessage('Thank you! Your contact form has been submitted successfully.')
            e.target.reset()
            
        } catch (error) {
            console.error('Error submitting contact form:', error)
            setContactSubmitMessage('There was an error submitting your request. Please try again later.')
        } finally {
            setContactIsSubmitting(false)
        }
    }

    const handleSupportSubmit = async (e) =>{
        e.preventDefault()
        setSupportSubmitting(true)
        setSupportSubmitMessage('')

        try{
            const formData = new FormData(e.target)
            console.log("FORM DATA:", formData)

            const practicalSupport = []
            if (formData.get('laundry')) practicalSupport.push("Laundry")
            if (formData.get('mealPrep')) practicalSupport.push("Meal Prep")
            if (formData.get('emergencyCleaning')) practicalSupport.push("Emergency Cleaning")

            const communityConnection = []
            if (formData.get('brunchInvites')) communityConnection.push("Brunch Invites")
            if (formData.get('joinPod')) communityConnection.push("Join a POD")

            const culturalSupport = []
            if (formData.get('indigenousHealing')) culturalSupport.push("Indigenous Healing Circles")
            if (formData.get('blackParentGroup')) culturalSupport.push("Black Parent Affinity Group")

            const supportData = {
                fullName: formData.get('supportFullName'),
                email: formData.get('supportEmail'),
                phone: formData.get('supportPhone'),
                supportContactMethod: formData.get('supportContactMethod'),
                practicalSupport: practicalSupport.join(", ") || "None selected",
                communityConnection: communityConnection.join(", ") || "None selected",
                culturalSupport: culturalSupport.join(", ") || "None selected",

            }

            const templateParams = {
                to_email: '',
                name: supportData.fullName,
                from_email: supportData.email,
                phone: supportData.phone,
                time: new Date().toLocaleString(),
                subject: 'New Support Signup - Hearts & Mind',
                message: `
                    New Support Signup:

                    Personal Information:
                    - Name : ${supportData.fullName}
                    - Email: ${supportData.email}
                    - Phone: ${supportData.phone || "Not provided"}
                    - Preferred Contact Method: ${supportData.supportContactMethod}

                    Support Interests:
                    - Practical Support: ${supportData.practicalSupport}
                    - Community Connection: ${supportData.communityConnection}
                    - Cultural Support: ${supportData.culturalSupport}
                `
            }

            const result = await emailjs.send(
                'service_oq0ipyq', 
                'template_j3e1slg', // Replace with your EmailJS template ID
                templateParams,
                'n5PSYCctGphvtLEB6' // Replace with your EmailJS user ID
            )
            console.log('Email sent successfully:', result.text)
            setSupportSubmitMessage('Thank you! Your support signup has been submitted successfully.')
            e.target.reset()

        }catch(error){
            console.log("error: ", error)
            setSupportSubmitMessage("Sorry, there was an error submitting this form. Please try again")
            }
        finally{
            setSupportSubmitting(false)
        }
    }

    return <>
    <Nav />

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
                    We envision a future where every child in foster care thrives in a home grounded in 
                    compassion, cultural integrity, and emotional safety—and where every foster parent is 
                    supported, respected, and equipped to sustain that environment.
                </p>
                <p className="about-description">
                    At Hearts & Mind, we believe healing happens in the community. Our monthly
                    Hearts & Mind Brunches are more than just meals—they're a lifeline for foster
                    parents and kinship caregivers. Join us to:
                </p>
                <Link to="/about">
                    <LinkTag>Learn More</LinkTag>
                </Link>
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
                    <div className="card-icon">🌐</div>
                    <h3>Hearts & Mind Support Group</h3>
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
                    </div>
                    <div className="package-features">
                        <div className="feature">
                            <span className="feature-icon">⏰</span>
                            <span>4 hrs / 2 times a month</span>
                        </div>
                        <div className="feature">
                            <span className="feature-icon">👥</span>
                            <span>Best for: Parents needing occasional breaks</span>
                        </div>
                    </div>
                    <button className="package-btn" onClick={scrollToSignupForm}>Learn More</button>
                </div>

                <div className="package-card silver">
                    <div className="package-header">
                        <div className="package-icon">🥈</div>
                        <h3>Silver</h3>
                    </div>
                    <div className="package-features">
                        <div className="feature">
                            <span className="feature-icon">⏰</span>
                            <span>4 hrs / 4 times a month</span>
                        </div>
                        <div className="feature">
                            <span className="feature-icon">🎯</span>
                            <span>Priority booking</span>
                        </div>

                    </div>
                    <button disabled className="package-btn">Coming Soon ...</button>
                </div>

                <div className="package-card gold">
                    <div className="package-header">
                        <div className="package-icon">🥇</div>
                        <h3>Gold</h3>
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
                    </div>
                    <button className="package-btn">Coming Soon ...</button>
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
                                {selectedEvent.link && (
                                    <a 
                                        href={selectedEvent.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="event-registration-link"
                                    >
                                        Register for this event
                                    </a>
                                )}
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

    <SectionFour id="signup">
        <div className="signup-container">
            <h2 className="signup-title montserrat-bold">Get In Touch</h2>
            <p className="signup-subtitle">Choose the form that best fits your needs</p>
            
            <div className="form-toggle">
                <button 
                    className={`toggle-btn ${activeForm === 'support' ? 'active' : ''}`}
                    onClick={() => setActiveForm('support')}
                >
                    Support Request Form
                </button>
                <button 
                    className={`toggle-btn ${activeForm === 'contact' ? 'active' : ''}`}
                    onClick={() => setActiveForm('contact')}
                >
                    Contact Form
                </button>
            </div>
            
            {activeForm === 'support' ? (
                <form className="signup-form" onSubmit={handleSupportSubmit}>
                    <h3 className="form-section-title">Hearts & Mind Support Request Sign-Up Form</h3>
                    
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="fullName">Full Name</label>
                            <input type="text" id="fullName" name="supportFullName" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="supportEmail" required />
                        </div>
                    </div>
                    
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="tel" id="phone" name="supportPhone" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="contactMethod">Preferred Contact Method</label>
                            <select id="contactMethod" name="supportContactMethod" required>
                                <option value="">Select contact method</option>
                                <option value="email">Email</option>
                                <option value="text">Text</option>
                                <option value="phone">Phone Call</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className="form-section">
                        <h4 className="section-subtitle">Your Needs (Check All That Apply)</h4>
                        
                        <div className="checkbox-group">
                            <h5>Practical Support:</h5>
                            <label className="checkbox-label">
                                <input type="checkbox" name="laundry" />
                                <span className="checkmark"></span>
                                Laundry Assistance
                            </label>
                            <label className="checkbox-label">
                                <input type="checkbox" name="mealPrep" />
                                <span className="checkmark"></span>
                                Meal Prep
                            </label>
                            <label className="checkbox-label">
                                <input type="checkbox" name="emergencyCleaning" />
                                <span className="checkmark"></span>
                                Emergency Cleaning
                            </label>
                        </div>
                        
                        <div className="checkbox-group">
                            <h5>Community Connection:</h5>
                            <label className="checkbox-label">
                                <input type="checkbox" name="brunchInvites" />
                                <span className="checkmark"></span>
                                Hearts & Mind Brunch Invites
                            </label>
                            <label className="checkbox-label">
                                <input type="checkbox" name="joinPod" />
                                <span className="checkmark"></span>
                                Join a POD
                            </label>
                        </div>
                        
                        <div className="checkbox-group">
                            <h5>Cultural Support:</h5>
                            <label className="checkbox-label">
                                <input type="checkbox" name="indigenousHealing" />
                                <span className="checkmark"></span>
                                Indigenous Healing Circles
                            </label>
                            <label className="checkbox-label">
                                <input type="checkbox" name="blackParentGroup" />
                                <span className="checkmark"></span>
                                Black Parent Affinity Group
                            </label>
                        </div>
                    </div>
                    <button 
                        type="submit" 
                        disabled={supportSubmitting}
                        className="submit-btn">
                            {supportSubmitting ? 'Submitting...' : 'Submit Support Request'}
                            
                    </button>
                    
                    {supportSubmitMessage && (
                        <p className="submit-message">{supportSubmitMessage}</p>
                    )}
                </form>
            ) : (
                <form className="signup-form" onSubmit={handleContactSubmit}>
                    <h3 className="form-section-title">Hearts & Mind Contact Form</h3>
                    
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="contactFullName">Full Name</label>
                            <input type="text" id="contactFullName" name="contactFullName" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="contactEmail">Email</label>
                            <input type="email" id="contactEmail" name="contactEmail" required />
                        </div>
                    </div>
                    
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="contactPhone">Phone</label>
                            <input type="tel" id="contactPhone" name="contactPhone" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="organization">Organization (if applicable)</label>
                            <input type="text" id="organization" name="organization" />
                        </div>
                    </div>
                    
                    <div className="form-section">
                        <h4 className="section-subtitle">Who Are You?</h4>
                        <div className="form-group">
                            <select id="whoAreYou" name="whoAreYou" required>
                                <option value="">I am a...</option>
                                <option value="fosterParent">Foster Parent/Kinship Caregiver</option>
                                <option value="schoolRep">School/University Representative</option>
                                <option value="volunteer">Community Volunteer</option>
                                <option value="agencyPartner">Agency Partner (CAS, Nonprofit, etc.)</option>
                                <option value="donor">Potential Donor/Sponsor</option>
                                <option value="general">General Inquiry</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className="form-section">
                        <h4 className="section-subtitle">How Can We Help? (Check All That Apply)</h4>
                        
                        <div className="checkbox-group">
                            <h5>For Foster Parents:</h5>
                            <label className="checkbox-label">
                                <input type="checkbox" name="homeSupport" />
                                <span className="checkmark"></span>
                                Sign up for Home Support
                            </label>
                            <label className="checkbox-label">
                                <input type="checkbox" name="joinPodContact" />
                                <span className="checkmark"></span>
                                Join a POD (peer support group)
                            </label>
                            <label className="checkbox-label">
                                <input type="checkbox" name="attendBrunch" />
                                <span className="checkmark"></span>
                                Attend a Hearts & Mind Brunchin
                            </label>
                        </div>
                        
                        <div className="checkbox-group">
                            <h5>For Schools/Volunteers:</h5>
                            <label className="checkbox-label">
                                <input type="checkbox" name="studentPlacements" />
                                <span className="checkmark"></span>
                                Student Placements/Internships
                            </label>
                            <label className="checkbox-label">
                                <input type="checkbox" name="volunteerOpportunities" />
                                <span className="checkmark"></span>
                                Volunteer Opportunities
                            </label>
                        </div>
                        
                        <div className="checkbox-group">
                            <h5>For Agencies/Partners:</h5>
                            <label className="checkbox-label">
                                <input type="checkbox" name="collaborationMeeting" />
                                <span className="checkmark"></span>
                                Request a Collaboration Meeting
                            </label>
                            <label className="checkbox-label">
                                <input type="checkbox" name="inviteToEvent" />
                                <span className="checkmark"></span>
                                Invite Hearts & Mind to an Event
                            </label>
                        </div>
                        
                        <div className="checkbox-group">
                            <h5>General:</h5>
                            <label className="checkbox-label">
                                <input type="checkbox" name="donationQuestions" />
                                <span className="checkmark"></span>
                                Donation Questions
                            </label>
                            <label className="checkbox-label">
                                <input type="checkbox" name="mediaInquiry" />
                                <span className="checkmark"></span>
                                Media/Press Inquiry
                            </label>
                            <label className="checkbox-label">
                                <input type="checkbox" name="other" />
                                <span className="checkmark"></span>
                                Other (describe below)
                            </label>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="otherDescription">Other Description</label>
                            <textarea id="otherDescription" name="otherDescription" rows="3" placeholder="Please describe your inquiry..."></textarea>
                        </div>
                    </div>
                    
                    <div className="form-section">
                        <h4 className="section-subtitle">Follow-Up Preferences</h4>
                        
                        <div className="form-row">
                            <div className="form-group">
                                <label>Best way to contact you:</label>
                                <div className="radio-group">
                                    <label className="radio-label">
                                        <input type="radio" name="contactPreference" value="email" />
                                        <span className="radio-mark"></span>
                                        Email
                                    </label>
                                    <label className="radio-label">
                                        <input type="radio" name="contactPreference" value="phone" />
                                        <span className="radio-mark"></span>
                                        Phone
                                    </label>
                                    <label className="radio-label">
                                        <input type="radio" name="contactPreference" value="text" />
                                        <span className="radio-mark"></span>
                                        Text
                                    </label>
                                </div>
                            </div>
                            
                          
                        </div>
                    </div>
                    {contactSubmitMessage && (
                        <p className="submit-message">{contactSubmitMessage}</p>
                    )}
                    
                    <button type="submit" 
                            className="submit-btn" 
                            disabled={contactIsSubmitting}>
                                        {contactIsSubmitting ? 'Submitting...' : 'Submit Contact Form'}
                                    </button>
                </form>
            )}
        </div>
    </SectionFour>

    <Footer />
    </>
}


export default Home