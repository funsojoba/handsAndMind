import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import { 
    WorkshopsContainer, 
    HeroSection, 
    WorkshopsContent,
    WorkshopCard,
    WorkshopGrid
} from "./style"

const Workshops = () => {
    const upcomingWorkshops = [
        {
            id: 1,
            title: "Trauma-Informed Care Fundamentals",
            date: "March 15, 2024",
            time: "10:00 AM - 2:00 PM",
            location: "Virtual (Zoom)",
            facilitator: "Dr. Sarah Johnson, Child Trauma Specialist",
            description: "Learn the core principles of trauma-informed care and how to apply them in your foster parenting journey.",
            topics: [
                "Understanding trauma and its impact on children",
                "Building trust and safety",
                "Practical strategies for daily interactions"
            ],
            capacity: 25,
            registered: 18,
            price: "Free"
        },
        {
            id: 2,
            title: "Cultural Safety in Foster Care",
            date: "March 22, 2024",
            time: "1:00 PM - 4:00 PM",
            location: "Community Center, Downtown",
            facilitator: "Elder Mary Williams & Dr. Michael Chen",
            description: "Explore cultural safety practices and learn how to create inclusive, culturally responsive environments for children.",
            topics: [
                "Cultural identity and belonging",
                "Indigenous cultural practices",
                "Supporting children's cultural connections"
            ],
            capacity: 30,
            registered: 22,
            price: "Free"
        },
        {
            id: 3,
            title: "Navigating the Child Welfare System",
            date: "April 5, 2024",
            time: "9:00 AM - 12:00 PM",
            location: "Virtual (Zoom)",
            facilitator: "Jennifer Rodriguez, Social Worker",
            description: "Get practical guidance on working effectively with social workers, agencies, and the broader child welfare system.",
            topics: [
                "Understanding your rights and responsibilities",
                "Effective communication with professionals",
                "Advocacy strategies for your family"
            ],
            capacity: 40,
            registered: 35,
            price: "Free"
        },
        {
            id: 4,
            title: "Self-Care for Caregivers",
            date: "April 12, 2024",
            time: "2:00 PM - 5:00 PM",
            location: "Wellness Center",
            facilitator: "Dr. Lisa Thompson, Mental Health Professional",
            description: "Prioritize your wellbeing with practical self-care strategies designed specifically for foster parents.",
            topics: [
                "Recognizing burnout and compassion fatigue",
                "Building resilience and coping skills",
                "Creating sustainable self-care routines"
            ],
            capacity: 20,
            registered: 15,
            price: "Free"
        }
    ]

    const handleRegister = (workshopId) => {
        // This would typically open a registration form or redirect to a registration page
        alert(`Registration for workshop ${workshopId} would open here. This is a placeholder.`)
    }

    return (
        <>
            <NavBar />
            <WorkshopsContainer>
                <HeroSection>
                    <div className="hero-content">
                        <h1 className="montserrat-bold">Reflect & Renew Workshops</h1>
                        <p>Skills and strategies for resilient foster parenting</p>
                    </div>
                </HeroSection>

                <WorkshopsContent>
                    <div className="content-container">
                        <div className="intro-section">
                            <h2 className="section-title montserrat-bold">Upcoming Workshops</h2>
                            <p className="section-description">
                                Join our expert-led workshops designed to strengthen your foster parenting skills. 
                                All workshops are free and open to foster parents, kinship caregivers, and those 
                                considering foster care.
                            </p>
                        </div>

                        <WorkshopGrid>
                            {upcomingWorkshops.map((workshop) => (
                                <WorkshopCard key={workshop.id}>
                                    <div className="workshop-header">
                                        <h3 className="workshop-title">{workshop.title}</h3>
                                        <div className="workshop-meta">
                                            <span className="date">{workshop.date}</span>
                                            <span className="time">{workshop.time}</span>
                                            <span className="location">{workshop.location}</span>
                                        </div>
                                    </div>

                                    <div className="workshop-body">
                                        <p className="workshop-description">{workshop.description}</p>
                                        
                                        <div className="facilitator">
                                            <strong>Facilitated by:</strong> {workshop.facilitator}
                                        </div>

                                        <div className="topics">
                                            <h4>Topics Covered:</h4>
                                            <ul>
                                                {workshop.topics.map((topic, index) => (
                                                    <li key={index}>{topic}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="workshop-stats">
                                            <div className="stat">
                                                <span className="label">Capacity:</span>
                                                <span className="value">{workshop.capacity}</span>
                                            </div>
                                            <div className="stat">
                                                <span className="label">Registered:</span>
                                                <span className="value">{workshop.registered}</span>
                                            </div>
                                            <div className="stat">
                                                <span className="label">Price:</span>
                                                <span className="value price">{workshop.price}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="workshop-footer">
                                        <button 
                                            className={`register-btn ${workshop.registered >= workshop.capacity ? 'full' : ''}`}
                                            onClick={() => handleRegister(workshop.id)}
                                            disabled={workshop.registered >= workshop.capacity}
                                        >
                                            {workshop.registered >= workshop.capacity ? 'Full' : 'Register Now'}
                                        </button>
                                        {workshop.registered < workshop.capacity && (
                                            <span className="spots-left">
                                                {workshop.capacity - workshop.registered} spots remaining
                                            </span>
                                        )}
                                    </div>
                                </WorkshopCard>
                            ))}
                        </WorkshopGrid>

                        <div className="cta-section">
                            <h2 className="cta-title">Can't Make These Dates?</h2>
                            <p className="cta-description">
                                We offer workshops throughout the year. Join our mailing list to be notified of upcoming sessions.
                            </p>
                            <button className="cta-btn">
                                Join Mailing List
                            </button>
                        </div>
                    </div>
                </WorkshopsContent>
            </WorkshopsContainer>
            <Footer />
        </>
    )
}

export default Workshops
