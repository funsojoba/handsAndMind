import { useState, useEffect } from "react"
import { Form, useLocation, useNavigate } from "react-router-dom"
import Nav from "../../components/Nav"
import Footer from "../../components/Footer"
import { useHashNavigation } from "../../utils/scrollToSection"
import { 
    ChaptersContainer, 
    HeroSection, 
    ChaptersContent,
    TabNavigation,
    TabButton,
    FormSection,
    PODInfoSection,
    StepCard,
    PerksSection,
    PerkCard
} from "./style"

import emailjs from "emailjs-com"

const Chapters = () => {
    const [activeTab, setActiveTab] = useState('join')
    const location = useLocation()
    const navigate = useNavigate()
    const handleHashNavigation = useHashNavigation(location)
    const [joinIsSubmitting, setJoinIsSubmitting] = useState(false)
    const [joinChapterSubmitMessage, setJoinChapterSubmitMessage] = useState("")

    const [podSubmitting, setPodSubmitting] = useState(false)
    const [podSubmitMessage, setPodSubmitMessage] = useState("")


    // Set active tab based on URL hash and handle scroll
    useEffect(() => {
        const hash = location.hash
        console.log('Hash navigation triggered:', hash)
        
        if (hash === '#start') {
            setActiveTab('start')
        } else {
            setActiveTab('join')
        }
        
        // Handle scroll to section if hash exists
        if (hash) {
            // Use a longer delay to ensure the component is fully rendered
            setTimeout(() => {
                console.log('Attempting to scroll to section:', hash)
                handleHashNavigation()
            }, 300)
        }
    }, [location, handleHashNavigation])

    // Additional effect to handle hash navigation when component mounts
    useEffect(() => {
        const hash = location.hash
        if (hash) {
            // Try to scroll to the section after component is mounted
            setTimeout(() => {
                const sectionId = hash.substring(1)
                const element = document.getElementById(sectionId)
                if (element) {
                    // Try scrollIntoView first as it's more reliable
                    try {
                        element.scrollIntoView({ 
                            behavior: 'smooth', 
                            block: 'start',
                            inline: 'nearest'
                        })
                        console.log('Component mount: Used scrollIntoView for:', sectionId)
                    } catch (error) {
                        console.log('Component mount: scrollIntoView failed, using manual scroll for:', sectionId)
                        console.log(error)
                        // Fallback to manual scroll
                        const navbarHeight = window.innerWidth <= 768 ? 60 : 70
                        const elementPosition = element.offsetTop - navbarHeight - 100
                        window.scrollTo({
                            top: elementPosition,
                            behavior: 'smooth'
                        })
                    }
                }
            }, 500)
        }
    }, [])

    const handleTabChange = (tab) => {
        setActiveTab(tab)
        if (tab === 'start') {
            navigate('#start')
        } else {
            navigate('#join')
        }
    }

    const handleJoinChapterSubmit = async (e) =>{
        e.preventDefault()
        setJoinIsSubmitting(true)
        setJoinChapterSubmitMessage("")

        try{
            const formData = new FormData(e.target)

            const lookingFor = []
            if (formData.get("joinSupport")) lookingFor.push("Peer Support & Connection")
            if (formData.get("joinResources")) lookingFor.push("Access to Resources")
            if (formData.get("joinAdvocacy")) lookingFor.push("Advocacy Opportunities")
            if (formData.get("joinMentorship")) lookingFor.push("Mentorship")
            if (formData.get("joinTraining")) lookingFor.push("Training and Education")

            const joinChapterData = {
                name: formData.get("joinFullName"),
                email: formData.get("joinEmail"),
                phone: formData.get("joinPhone"),
                location: formData.get("joinLocation"),
                role: formData.get("joinRole"),
                experience: formData.get("joinExperience"),
                chapterType: formData.get("joinChapterType"),
                meetingPreference: formData.get("joinMeetingPreference"),
                lookingFor: lookingFor.join(", ") || "Not specified",
                message: formData.get("joinMessage")
            }

            const templateParams = {
                to_email: 'chapters@heartsandmind.org',
                time: new Date().toLocaleDateString(),
                email: joinChapterData.email,
                subject: "New Join Chapter Request",
                name: joinChapterData.name,
                message: `
                    New Join Chapter Request    

                    Form Information
                    - Name : ${joinChapterData.name}
                    - Email: ${joinChapterData.email}
                    - Phone: ${joinChapterData.phone}
                    - Location: ${joinChapterData.location}
                    - Role: ${joinChapterData.role}
                    - Experience: ${joinChapterData.experience}
                    - Chapter Type: ${joinChapterData.chapterType}
                    - Meeting Preference: ${joinChapterData.meetingPreference}
                    - I am looking for: ${joinChapterData.lookingFor}
                    - Other Message: ${joinChapterData.message}
                `,
            }

            const result = await emailjs.send(
                "service_4h9o5q7",
                "template_to0o9je",
                templateParams,
                "09RppmD6_8vbMCvJp" //public key
            )
            console.log('Email sent successfully:', result.text)
            setJoinChapterSubmitMessage('Thank you! Your contact form has been submitted successfully.')
            e.target.reset()
            console.log("FORM DATA->>", formData)
        }catch(error){
            console.log("error: ", error)
            setJoinChapterSubmitMessage("Sorry, there was an error submitting this form. Please try again")
        }finally{
            setJoinIsSubmitting(false)
        }

    }

    const handlePodLeaderSubmit = async (e) =>{
        e.preventDefault()
        setPodSubmitMessage("")
        setPodSubmitting(true)
        try{
            const formData = new FormData(e.target)

            const podLeaderData = {
                name: formData.get("podFullName"),
                email: formData.get("podEmail"),
                phone: formData.get("podPhone"),
                city: formData.get("podCity"),
                yearsFostering: formData.get("podYearsFostering"),
                podStrengths: formData.get("podStrengths"),
                podCulturalTies: formData.get("podCulturalTies"),
                podHostingStyle: formData.get("podHostingStyle"),
                podBestTime: formData.get("podBestTime"),

            }

            const templateParams = {
                to_email: 'chapters@heartsandmind.org',
                time: new Date().toLocaleDateString(),
                email: podLeaderData.email,
                subject: "New POD Leader Application",
                name: podLeaderData.name,
                message: `
                    New POD Leader Application

                    Form Information
                    - Name : ${podLeaderData.name}
                    - Email: ${podLeaderData.email}
                    - Phone: ${podLeaderData.phone}
                    - City: ${podLeaderData.city}
                    - Years Fostering: ${podLeaderData.yearsFostering}
                    - POD Strengths: ${podLeaderData.podStrengths}
                    - Cultural Ties: ${podLeaderData.podCulturalTies}
                    - Hosting Style: ${podLeaderData.podHostingStyle}
                    - Best Time: ${podLeaderData.podBestTime}
                `
                
            }
        const result = await emailjs.send(
                "service_4h9o5q7",
                "template_to0o9je",
                templateParams,
                "09RppmD6_8vbMCvJp" //public key
            )
        console.log('Email sent successfully:', result.text)
        setPodSubmitMessage('Thank you! Your contact form has been submitted successfully.')
        e.target.reset()
        console.log("FORM DATA->>", formData)
        }catch(error){
            console.log("error: ", error)
            setPodSubmitMessage("Sorry, there was an error submitting this form. Please try again.")
        }finally{
            setPodSubmitting(false)
        }
    }


    return (
        <>
        <Nav />
        <ChaptersContainer>
            <HeroSection>
                <div className="hero-content">
                    <h1 className="montserrat-bold">Chapters & PODs</h1>
                    <p>Connect with like-minded individuals in your community</p>
                </div>
            </HeroSection>

            <ChaptersContent>
                <div className="content-container">
                    <div className="intro-section">
                        <h2 className="section-title montserrat-bold">Join Our Community</h2>
                        <p className="section-description">
                            Whether you want to join an existing chapter or become a POD Leader, we're here to support 
                            your journey in building stronger communities for foster families.
                        </p>
                    </div>

                    <TabNavigation>
                        <TabButton 
                            active={activeTab === 'join'} 
                            onClick={() => handleTabChange('join')}
                        >
                            Join a Chapter
                        </TabButton>
                        <TabButton 
                            active={activeTab === 'start'} 
                            onClick={() => handleTabChange('start')}
                        >
                            Become a POD Leader
                        </TabButton>
                    </TabNavigation>

                    {activeTab === 'join' ? (
                        <FormSection onSubmit={handleJoinChapterSubmit}>
                            <div className="form-container" id="join" style={{ scrollMarginTop: '100px' }}>
                                <h3 className="form-title">Join a Chapter</h3>
                                <p className="form-subtitle">
                                    Connect with existing chapters in your area and become part of a supportive community.
                                </p>
                                
                                <form className="chapters-form">
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="joinFullName">Full Name *</label>
                                            <input type="text" id="joinFullName" name="joinFullName" required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="joinEmail">Email Address *</label>
                                            <input type="email" id="joinEmail" name="joinEmail" required />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="joinPhone">Phone Number</label>
                                            <input type="tel" id="joinPhone" name="joinPhone" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="joinLocation">Your Location *</label>
                                            <input type="text" id="joinLocation" name="joinLocation" placeholder="City, Province" required />
                                        </div>
                                    </div>

                                    <div className="form-section">
                                        <h4>About You</h4>
                                        <div className="form-group">
                                            <label htmlFor="joinRole">I am a...</label>
                                            <select id="joinRole" name="joinRole" required>
                                                <option value="">Select your role</option>
                                                <option value="fosterParent">Foster Parent</option>
                                                <option value="kinshipCaregiver">Kinship Caregiver</option>
                                                <option value="socialWorker">Social Worker</option>
                                                <option value="volunteer">Volunteer</option>
                                                <option value="communityMember">Community Member</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="joinExperience">Years of Experience (if applicable)</label>
                                            <select id="joinExperience" name="joinExperience">
                                                <option value="">Select experience level</option>
                                                <option value="new">New (0-1 years)</option>
                                                <option value="beginner">Beginner (1-3 years)</option>
                                                <option value="intermediate">Intermediate (3-5 years)</option>
                                                <option value="experienced">Experienced (5+ years)</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-section">
                                        <h4>Chapter Preferences</h4>
                                        <div className="form-group">
                                            <label htmlFor="joinChapterType">Preferred Chapter Type</label>
                                            <select id="joinChapterType" name="joinChapterType" required>
                                                <option value="">Select chapter type</option>
                                                <option value="general">General Foster Care Support</option>
                                                <option value="indigenous">Indigenous Cultural Support</option>
                                                <option value="black">Black Parent Affinity</option>
                                                <option value="youth">Youth-Focused</option>
                                                <option value="specialized">Specialized Care (medical, behavioral)</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="joinMeetingPreference">Meeting Preference</label>
                                            <div className="radio-group">
                                                <label className="radio-label">
                                                    <input type="radio" name="joinMeetingPreference" value="inPerson" />
                                                    <span className="radio-mark"></span>
                                                    In-Person Meetings
                                                </label>
                                                <label className="radio-label">
                                                    <input type="radio" name="joinMeetingPreference" value="virtual" />
                                                    <span className="radio-mark"></span>
                                                    Virtual Meetings
                                                </label>
                                                <label className="radio-label">
                                                    <input type="radio" name="joinMeetingPreference" value="hybrid" />
                                                    <span className="radio-mark"></span>
                                                    Hybrid (Both)
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-section">
                                        <h4>What You're Looking For</h4>
                                        <div className="checkbox-group">
                                            <label className="checkbox-label">
                                                <input type="checkbox" name="joinSupport" />
                                                <span className="checkmark"></span>
                                                Peer Support & Connection
                                            </label>
                                            <label className="checkbox-label">
                                                <input type="checkbox" name="joinResources" />
                                                <span className="checkmark"></span>
                                                Access to Resources
                                            </label>
                                            <label className="checkbox-label">
                                                <input type="checkbox" name="joinTraining" />
                                                <span className="checkmark"></span>
                                                Training & Education
                                            </label>
                                            <label className="checkbox-label">
                                                <input type="checkbox" name="joinAdvocacy" />
                                                <span className="checkmark"></span>
                                                Advocacy Opportunities
                                            </label>
                                            <label className="checkbox-label">
                                                <input type="checkbox" name="joinMentorship" />
                                                <span className="checkmark"></span>
                                                Mentorship
                                            </label>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="joinMessage">Additional Information</label>
                                        <textarea 
                                            id="joinMessage" 
                                            name="joinMessage" 
                                            rows="4" 
                                            placeholder="Tell us more about what you're looking for in a chapter..."
                                        ></textarea>
                                    </div>

                                    <button type="submit" 
                                        className="submit-btn" 
                                        disabled={joinIsSubmitting}>
                                                    {joinIsSubmitting ? 'Submitting...' : 'Submit Join Request'}
                                    </button>
                                </form>
                                {joinChapterSubmitMessage && (
                                    <div className={`submit-message ${joinChapterSubmitMessage.startsWith('Sorry') ? 'error' : 'success'}`}>
                                        {joinChapterSubmitMessage}
                                    </div>
                                )}
                            </div>
                        </FormSection>
                    ) : (
                        <>
                            <PODInfoSection>
                                <div className="pod-intro" id="start">
                                    <h2 className="pod-title">How to Become a Hearts & Mind POD Leader</h2>
                                    <div className="pod-definition">
                                        <h3>What's a POD?</h3>
                                        <p>
                                            A small, local group of 5-8 foster families who meet monthly for peer support, resource
                                            sharing, and respite swaps. POD Leaders are trusted community connectors who reduce
                                            isolation among caregivers.
                                        </p>
                                    </div>
                                </div>

                                <div className="steps-container">
                                    <h3 className="steps-title">Step-by-Step Guide</h3>
                                    
                                    <StepCard>
                                        <div className="step-number">1</div>
                                        <div className="step-content">
                                            <h4>Learn About the Role</h4>
                                            <p>As a POD Leader, you'll:</p>
                                            <ul>
                                                <li>Host monthly gatherings (potlucks, park meetups, or virtual chats)</li>
                                                <li>Share Hearts & Mind resources (respite vouchers, training)</li>
                                                <li>Be the first to pilot new programs (e.g., cultural healing circles)</li>
                                            </ul>
                                            <p className="time-commitment"><strong>Time commitment:</strong> 3-5 hours/month</p>
                                        </div>
                                    </StepCard>

                                    <StepCard>
                                        <div className="step-number">2</div>
                                        <div className="step-content">
                                            <h4>Check Eligibility</h4>
                                            <p>You're a great fit if you:</p>
                                            <ul>
                                                <li>Are a current/former foster parent in the region</li>
                                                <li>Believe in trauma-informed, culturally rooted support</li>
                                                <li>Can commit to 3-5 hours monthly</li>
                                                <li>Must be a community member</li>
                                            </ul>
                                            <p className="note"><em>(No formal education required—lived experience valued!)</em></p>
                                        </div>
                                    </StepCard>

                                    <StepCard>
                                        <div className="step-number">3</div>
                                        <div className="step-content">
                                            <h4>Complete the POD Leader Interest Form</h4>
                                            <p>Fill out the form below with your information and motivations for becoming a POD Leader.</p>
                                        </div>
                                    </StepCard>

                                    <StepCard>
                                        <div className="step-number">4</div>
                                        <div className="step-content">
                                            <h4>Attend Orientation</h4>
                                            <p>1-hour virtual training on:</p>
                                            <ul>
                                                <li>Trauma-informed group facilitation</li>
                                                <li>Respite swap guidelines</li>
                                                <li>Crisis resource navigation</li>
                                            </ul>
                                            <p>Receive your POD Leader Toolkit (agenda templates, icebreakers)</p>
                                        </div>
                                    </StepCard>

                                    <StepCard>
                                        <div className="step-number">5</div>
                                        <div className="step-content">
                                            <h4>Launch Your POD!</h4>
                                            <p>Hearts & Mind will:</p>
                                            <ul>
                                                <li>Match you with 5-8 local families</li>
                                                <li>Provide $50/month for snacks/supplies</li>
                                                <li>Feature you on our "Community Builders" wall</li>
                                            </ul>
                                        </div>
                                    </StepCard>

                                    <StepCard>
                                        <div className="step-number">6</div>
                                        <div className="step-content">
                                            <h4>Monthly Check-Ins</h4>
                                            <ul>
                                                <li>Share wins/challenges via 15-min Zoom calls with other Leaders</li>
                                                <li>Access to private Facebook group for troubleshooting</li>
                                            </ul>
                                        </div>
                                    </StepCard>
                                </div>

                                <PerksSection>
                                    <h3 className="perks-title">POD Leader Perks</h3>
                                    <div className="perks-grid">
                                        <PerkCard>
                                            <div className="perk-icon">🎓</div>
                                            <h4>Free Course Access</h4>
                                            <p>Free membership to Hearts & Mind courses</p>
                                        </PerkCard>
                                        <PerkCard>
                                            <div className="perk-icon">🍽️</div>
                                            <h4>Priority Brunch Access</h4>
                                            <p>First access to brunch events</p>
                                        </PerkCard>
                                        <PerkCard>
                                            <div className="perk-icon">🏆</div>
                                            <h4>Leadership Certificate</h4>
                                            <p>Leadership certificate after 6 months</p>
                                        </PerkCard>
                                    </div>
                                </PerksSection>
                            </PODInfoSection>

                            <FormSection>
                                <div className="form-container" style={{ scrollMarginTop: '100px' }}>
                                    <h3 className="form-title">POD Leader Interest Form</h3>
                                    <p className="form-subtitle">
                                        Ready to become a POD Leader? Fill out this form to get started on your journey.
                                    </p>
                                    
                                    <form className="chapters-form" onSubmit={handlePodLeaderSubmit}>
                                        <div className="form-section">
                                            <h4>Form Details</h4>
                                            <div className="form-row">
                                                <div className="form-group">
                                                    <label htmlFor="podFullName">Full Name *</label>
                                                    <input type="text" id="podFullName" name="podFullName" required />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="podEmail">Email Address *</label>
                                                    <input type="email" id="podEmail" name="podEmail" required />
                                                </div>
                                            </div>

                                            <div className="form-row">
                                                <div className="form-group">
                                                    <label htmlFor="podPhone">Phone Number *</label>
                                                    <input type="tel" id="podPhone" name="podPhone" required />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="podCity">City *</label>
                                                    <input type="text" id="podCity" name="podCity" required />
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="podYearsFostering">Years Fostering *</label>
                                                <select id="podYearsFostering" name="podYearsFostering" required>
                                                    <option value="">Select years of experience</option>
                                                    <option value="0-1">0-1 years</option>
                                                    <option value="1-3">1-3 years</option>
                                                    <option value="3-5">3-5 years</option>
                                                    <option value="5-10">5-10 years</option>
                                                    <option value="10+">10+ years</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="form-section">
                                            <h4>Why You?</h4>
                                            <div className="form-group">
                                                <label htmlFor="podStrengths">What strengths would you bring to a POD? *</label>
                                                <textarea 
                                                    id="podStrengths" 
                                                    name="podStrengths" 
                                                    rows="4" 
                                                    placeholder="Describe your strengths and what you can offer as a POD Leader..."
                                                    maxLength="150"
                                                    required
                                                ></textarea>
                                                <small className="char-count">150 words maximum</small>
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="podCulturalTies">Describe your cultural/community ties *</label>
                                                <select id="podCulturalTies" name="podCulturalTies" required>
                                                    <option value="">Select your cultural/community background</option>
                                                    <option value="black">Black</option>
                                                    <option value="indigenous">Indigenous</option>
                                                    <option value="southAsian">South Asian</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>

                                            {document.getElementById('podCulturalTies')?.value === 'other' && (
                                                <div className="form-group">
                                                    <label htmlFor="podCulturalOther">Please specify your cultural/community background</label>
                                                    <input type="text" id="podCulturalOther" name="podCulturalOther" />
                                                </div>
                                            )}
                                        </div>

                                        <div className="form-section">
                                            <h4>Logistics</h4>
                                            <div className="form-group">
                                                <label htmlFor="podHostingStyle">How would you host? *</label>
                                                <textarea 
                                                    id="podHostingStyle" 
                                                    name="podHostingStyle" 
                                                    rows="3" 
                                                    placeholder="Describe your preferred hosting style (potlucks, park meetups, virtual chats, etc.)..."
                                                    required
                                                ></textarea>
                                            </div>

                                            <div className="form-group">
                                                <label>Best time for meetings: *</label>
                                                <div className="radio-group">
                                                    <label className="radio-label">
                                                        <input type="radio" name="podBestTime" value="weekdayEvenings" required />
                                                        <span className="radio-mark"></span>
                                                        Weekday evenings
                                                    </label>
                                                    <label className="radio-label">
                                                        <input type="radio" name="podBestTime" value="weekends" />
                                                        <span className="radio-mark"></span>
                                                        Weekends
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <button 
                                            type="submit" 
                                            disabled={podSubmitting}
                                            className="submit-btn">
                                                {podSubmitting ? "Submitting ..." :"Submit POD Leader Application"}
                                        </button>
                                    </form>
                                    {
                                        podSubmitMessage && (
                                            <div className={`submit-message ${podSubmitMessage.startsWith('Sorry') ? 'error' : 'success'}`}>
                                                {podSubmitMessage}
                                            </div>
                                        )
                                    }
                                </div>
                            </FormSection>
                        </>
                    )}
                </div>
            </ChaptersContent>
        </ChaptersContainer>
        <Footer />
        </>
    )
}

export default Chapters
