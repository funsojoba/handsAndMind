import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import Nav from "../../components/Nav"
import Footer from "../../components/Footer"
import { useHashNavigation } from "../../utils/scrollToSection"
import { 
    ChaptersContainer, 
    HeroSection, 
    ChaptersContent,
    TabNavigation,
    TabButton,
    FormSection
} from "./style"

const Chapters = () => {
    const [activeTab, setActiveTab] = useState('join')
    const location = useLocation()
    const navigate = useNavigate()
    const handleHashNavigation = useHashNavigation(location)

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

    return (
        <>
        <Nav />
        <ChaptersContainer>
            <HeroSection>
                <div className="hero-content">
                    <h1 className="montserrat-bold">Chapters</h1>
                    <p>Connect with like-minded individuals in your community</p>
                </div>
            </HeroSection>

            <ChaptersContent>
                <div className="content-container">
                    <div className="intro-section">
                        <h2 className="section-title montserrat-bold">Join Our Community</h2>
                        <p className="section-description">
                            Chapters are a way we gather people of like minds together in different locations. 
                            Whether you want to join an existing chapter or start a new one, we're here to support 
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
                            Start a Chapter
                        </TabButton>
                    </TabNavigation>

                    <FormSection>
                        {activeTab === 'join' ? (
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

                                    <button type="submit" className="submit-btn">Submit Join Request</button>
                                </form>
                            </div>
                        ) : (
                            <div className="form-container" id="start" style={{ scrollMarginTop: '100px' }}>
                                <h3 className="form-title">Start a Chapter</h3>
                                <p className="form-subtitle">
                                    Ready to lead? Start a new chapter in your community and create a supportive network for foster families.
                                </p>
                                
                                <form className="chapters-form">
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="startFullName">Full Name *</label>
                                            <input type="text" id="startFullName" name="startFullName" required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="startEmail">Email Address *</label>
                                            <input type="email" id="startEmail" name="startEmail" required />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="startPhone">Phone Number *</label>
                                            <input type="tel" id="startPhone" name="startPhone" required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="startLocation">Chapter Location *</label>
                                            <input type="text" id="startLocation" name="startLocation" placeholder="City, Province" required />
                                        </div>
                                    </div>

                                    <div className="form-section">
                                        <h4>About You</h4>
                                        <div className="form-group">
                                            <label htmlFor="startRole">Your Role</label>
                                            <select id="startRole" name="startRole" required>
                                                <option value="">Select your role</option>
                                                <option value="fosterParent">Foster Parent</option>
                                                <option value="kinshipCaregiver">Kinship Caregiver</option>
                                                <option value="socialWorker">Social Worker</option>
                                                <option value="communityLeader">Community Leader</option>
                                                <option value="professional">Professional in Child Welfare</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="startExperience">Years of Experience</label>
                                            <select id="startExperience" name="startExperience" required>
                                                <option value="">Select experience level</option>
                                                <option value="1-3">1-3 years</option>
                                                <option value="3-5">3-5 years</option>
                                                <option value="5-10">5-10 years</option>
                                                <option value="10+">10+ years</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-section">
                                        <h4>Chapter Vision</h4>
                                        <div className="form-group">
                                            <label htmlFor="startChapterType">Chapter Type *</label>
                                            <select id="startChapterType" name="startChapterType" required>
                                                <option value="">Select chapter type</option>
                                                <option value="general">General Foster Care Support</option>
                                                <option value="indigenous">Indigenous Cultural Support</option>
                                                <option value="black">Black Parent Affinity</option>
                                                <option value="youth">Youth-Focused</option>
                                                <option value="specialized">Specialized Care (medical, behavioral)</option>
                                                <option value="other">Other (specify below)</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="startChapterName">Proposed Chapter Name</label>
                                            <input type="text" id="startChapterName" name="startChapterName" placeholder="e.g., Toronto Foster Care Community" />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="startVision">Chapter Vision & Goals *</label>
                                            <textarea 
                                                id="startVision" 
                                                name="startVision" 
                                                rows="4" 
                                                placeholder="Describe your vision for this chapter and what you hope to achieve..."
                                                required
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div className="form-section">
                                        <h4>Meeting & Structure</h4>
                                        <div className="form-group">
                                            <label htmlFor="startMeetingFormat">Preferred Meeting Format</label>
                                            <div className="radio-group">
                                                <label className="radio-label">
                                                    <input type="radio" name="startMeetingFormat" value="inPerson" />
                                                    <span className="radio-mark"></span>
                                                    In-Person Meetings
                                                </label>
                                                <label className="radio-label">
                                                    <input type="radio" name="startMeetingFormat" value="virtual" />
                                                    <span className="radio-mark"></span>
                                                    Virtual Meetings
                                                </label>
                                                <label className="radio-label">
                                                    <input type="radio" name="startMeetingFormat" value="hybrid" />
                                                    <span className="radio-mark"></span>
                                                    Hybrid (Both)
                                                </label>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="startFrequency">Meeting Frequency</label>
                                            <select id="startFrequency" name="startFrequency" required>
                                                <option value="">Select frequency</option>
                                                <option value="weekly">Weekly</option>
                                                <option value="biweekly">Bi-weekly</option>
                                                <option value="monthly">Monthly</option>
                                                <option value="quarterly">Quarterly</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-section">
                                        <h4>Support & Resources Needed</h4>
                                        <div className="checkbox-group">
                                            <label className="checkbox-label">
                                                <input type="checkbox" name="startTraining" />
                                                <span className="checkmark"></span>
                                                Leadership Training
                                            </label>
                                            <label className="checkbox-label">
                                                <input type="checkbox" name="startResources" />
                                                <span className="checkmark"></span>
                                                Resource Materials
                                            </label>
                                            <label className="checkbox-label">
                                                <input type="checkbox" name="startFunding" />
                                                <span className="checkmark"></span>
                                                Funding Support
                                            </label>
                                            <label className="checkbox-label">
                                                <input type="checkbox" name="startMentorship" />
                                                <span className="checkmark"></span>
                                                Mentorship from Existing Chapters
                                            </label>
                                            <label className="checkbox-label">
                                                <input type="checkbox" name="startMarketing" />
                                                <span className="checkmark"></span>
                                                Marketing & Promotion Support
                                            </label>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="startTimeline">Timeline for Launch</label>
                                        <select id="startTimeline" name="startTimeline" required>
                                            <option value="">Select timeline</option>
                                            <option value="1-3months">1-3 months</option>
                                            <option value="3-6months">3-6 months</option>
                                            <option value="6-12months">6-12 months</option>
                                            <option value="flexible">Flexible timeline</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="startAdditional">Additional Information</label>
                                        <textarea 
                                            id="startAdditional" 
                                            name="startAdditional" 
                                            rows="4" 
                                            placeholder="Any additional information about your proposed chapter..."
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="submit-btn">Submit Chapter Proposal</button>
                                </form>
                            </div>
                        )}
                    </FormSection>
                </div>
            </ChaptersContent>
        </ChaptersContainer>
        <Footer />
        </>
    )
}

export default Chapters
