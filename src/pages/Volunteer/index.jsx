import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import Nav from "../../components/Nav"
import Footer from "../../components/Footer"
import { useHashNavigation } from "../../utils/scrollToSection"
import { 
    VolunteerContainer, 
    HeroSection, 
    VolunteerContent,
    TabNavigation,
    TabButton,
    FormSection
} from "./style"

const Volunteer = () => {
    const [activeTab, setActiveTab] = useState('volunteer')
    const location = useLocation()
    const navigate = useNavigate()
    const handleHashNavigation = useHashNavigation(location)

    // Set active tab based on URL hash and handle scroll
    useEffect(() => {
        const hash = location.hash
        console.log('Hash navigation triggered:', hash)
        
        if (hash === '#sponsor') {
            setActiveTab('sponsor')
        } else if (hash === '#placement') {
            setActiveTab('placement')
        } else {
            setActiveTab('volunteer')
        }
        
        // Handle scroll to section if hash exists
        if (hash) {
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
            setTimeout(() => {
                const sectionId = hash.substring(1)
                const element = document.getElementById(sectionId)
                if (element) {
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
        if (tab === 'sponsor') {
            navigate('#sponsor')
        } else if (tab === 'placement') {
            navigate('#placement')
        } else {
            navigate('#volunteer')
        }
    }

    return (
        <>
        <Nav />
        <VolunteerContainer>
            <HeroSection>
                <div className="hero-content">
                    <h1 className="montserrat-bold">Get Involved</h1>
                    <p>Join our community and make a difference in the lives of foster families</p>
                </div>
            </HeroSection>

            <VolunteerContent>
                <div className="content-container">
                    <div className="intro-section">
                        <h2 className="section-title montserrat-bold">Ways to Support</h2>
                        <p className="section-description">
                            Whether you want to volunteer your time, sponsor our programs, or complete your placement with us, 
                            there are many ways to get involved and support foster families in your community.
                        </p>
                    </div>

                    <TabNavigation>
                        <TabButton 
                            active={activeTab === 'volunteer'} 
                            onClick={() => handleTabChange('volunteer')}
                        >
                            Volunteer
                        </TabButton>
                        <TabButton 
                            active={activeTab === 'sponsor'} 
                            onClick={() => handleTabChange('sponsor')}
                        >
                            Sponsor
                        </TabButton>
                        <TabButton 
                            active={activeTab === 'placement'} 
                            onClick={() => handleTabChange('placement')}
                        >
                            Student Placement
                        </TabButton>
                    </TabNavigation>

                    {activeTab === 'volunteer' && (
                        <FormSection>
                            <div className="form-container" id="volunteer" style={{ scrollMarginTop: '100px' }}>
                                <h3 className="form-title">Volunteer Signup Form</h3>
                                <p className="form-subtitle">
                                    Join our village of volunteers and help support foster families in your community.
                                </p>
                                
                                <form className="volunteer-form">
                                    <div className="form-section">
                                        <h4>Personal Information</h4>
                                        <div className="form-row">
                                            <div className="form-group">
                                                <label htmlFor="volunteerFullName">Full Name *</label>
                                                <input type="text" id="volunteerFullName" name="volunteerFullName" required />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="volunteerEmail">Email Address *</label>
                                                <input type="email" id="volunteerEmail" name="volunteerEmail" required />
                                            </div>
                                        </div>

                                        <div className="form-row">
                                            <div className="form-group">
                                                <label htmlFor="volunteerPhone">Phone Number *</label>
                                                <input type="tel" id="volunteerPhone" name="volunteerPhone" required />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="volunteerWhy">Why Volunteer? *</label>
                                                <select id="volunteerWhy" name="volunteerWhy" required>
                                                    <option value="">Select your reason</option>
                                                    <option value="fosterParent">Foster Parent</option>
                                                    <option value="communityMember">Community Member</option>
                                                    <option value="corporateGroup">Corporate Group</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-section">
                                        <h4>Volunteer Roles</h4>
                                        <p className="section-description">Choose the opportunities that interest you:</p>
                                        <div className="checkbox-group">
                                            <label className="checkbox-label">
                                                <input type="checkbox" name="volunteerLaundry" />
                                                <span className="checkmark"></span>
                                                Laundry Helper (2 hrs/week)
                                            </label>
                                            <label className="checkbox-label">
                                                <input type="checkbox" name="volunteerMealPrep" />
                                                <span className="checkmark"></span>
                                                Meal Prep Assistant
                                            </label>
                                            <label className="checkbox-label">
                                                <input type="checkbox" name="volunteerBrunchSetup" />
                                                <span className="checkmark"></span>
                                                Event Setup
                                            </label>
                                            <label className="checkbox-label">
                                                <input type="checkbox" name="volunteerCrisisRespite" />
                                                <span className="checkmark"></span>
                                                Crisis Respite Volunteer
                                            </label>

                                        </div>
                                    </div>

                                    <div className="form-section">
                                        <h4>Availability</h4>
                                        <div className="form-group">
                                            <label>Days/Times Available:</label>
                                            <div className="checkbox-grid">
                                                <div className="checkbox-column">
                                                    <h5>Time of Day:</h5>
                                                    <label className="checkbox-label">
                                                        <input type="checkbox" name="volunteerMornings" />
                                                        <span className="checkmark"></span>
                                                        Mornings
                                                    </label>
                                                    <label className="checkbox-label">
                                                        <input type="checkbox" name="volunteerAfternoons" />
                                                        <span className="checkmark"></span>
                                                        Afternoons
                                                    </label>
                                                    <label className="checkbox-label">
                                                        <input type="checkbox" name="volunteerEvenings" />
                                                        <span className="checkmark"></span>
                                                        Evenings
                                                    </label>
                                                </div>
                                                <div className="checkbox-column">
                                                    <h5>Days of Week:</h5>
                                                    <label className="checkbox-label">
                                                        <input type="checkbox" name="volunteerWeekdays" />
                                                        <span className="checkmark"></span>
                                                        Weekdays
                                                    </label>
                                                    <label className="checkbox-label">
                                                        <input type="checkbox" name="volunteerWeekends" />
                                                        <span className="checkmark"></span>
                                                        Weekends
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-section">
                                        <h4>Screening & Skills</h4>
                                        <div className="form-group">
                                            <label>Skills/Certifications:</label>
                                            <div className="checkbox-group">
                                                <label className="checkbox-label">
                                                    <input type="checkbox" name="volunteerFirstAid" />
                                                    <span className="checkmark"></span>
                                                    First Aid/CPR
                                                </label>
                                                <label className="checkbox-label">
                                                    <input type="checkbox" name="volunteerVulnerableSector" />
                                                    <span className="checkmark"></span>
                                                    Vulnerable Sector Check
                                                </label>
                                                <label className="checkbox-label">
                                                    <input type="checkbox" name="volunteerTraumaTraining" />
                                                    <span className="checkmark"></span>
                                                    Trauma Training
                                                </label>
                                            </div>
                                        </div>

                                        <div className="form-row">
                                            <div className="form-group">
                                                <label htmlFor="volunteerEmergencyName">Emergency Contact Name *</label>
                                                <input type="text" id="volunteerEmergencyName" name="volunteerEmergencyName" required />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="volunteerEmergencyPhone">Emergency Contact Phone *</label>
                                                <input type="tel" id="volunteerEmergencyPhone" name="volunteerEmergencyPhone" required />
                                            </div>
                                        </div>
                                        <div className="note">CAS is required for respite care</div>
                                    </div>

                                    <div className="form-section">
                                        <h4>Consent</h4>
                                        <div className="checkbox-group">
                                            <label className="checkbox-label">
                                                <input type="checkbox" name="volunteerBackgroundCheck" required />
                                                <span className="checkmark"></span>
                                                I consent to a background check. *
                                            </label>
                                            <label className="checkbox-label">
                                                <input type="checkbox" name="volunteerNewsletter" />
                                                <span className="checkmark"></span>
                                                I'd like to receive newsletters.
                                            </label>
                                        </div>
                                    </div>

                                    <button type="submit" className="submit-btn">Join Our Village</button>
                                </form>
                            </div>
                        </FormSection>
                    )}

                    {activeTab === 'sponsor' && (
                        <FormSection>
                            <div className="form-container" id="sponsor" style={{ scrollMarginTop: '100px' }}>
                                <h3 className="form-title">Contact Form for Sponsors</h3>
                                <p className="form-subtitle">
                                    Partner with us to support foster families and make a lasting impact in our community.
                                </p>
                                
                                <form className="volunteer-form">
                                    <div className="form-section">
                                        <h4>Contact Information</h4>
                                        <div className="form-row">
                                            <div className="form-group">
                                                <label htmlFor="sponsorName">Name *</label>
                                                <input type="text" id="sponsorName" name="sponsorName" required />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="sponsorCompany">Company *</label>
                                                <input type="text" id="sponsorCompany" name="sponsorCompany" required />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label>Interest Type:</label>
                                            <div className="radio-group">
                                                <label className="radio-label">
                                                    <input type="radio" name="sponsorInterest" value="corporate" />
                                                    <span className="radio-mark"></span>
                                                    Corporate
                                                </label>
                                                <label className="radio-label">
                                                    <input type="radio" name="sponsorInterest" value="localBusiness" />
                                                    <span className="radio-mark"></span>
                                                    Local Business
                                                </label>
                                                <label className="radio-label">
                                                    <input type="radio" name="sponsorInterest" value="inKind" />
                                                    <span className="radio-mark"></span>
                                                    In-Kind
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-section">
                                        <h4>How Would You Like to Help?</h4>
                                        
                                        <div className="help-category">
                                            <h5>1. Financial Support</h5>
                                            <div className="checkbox-group">
                                                <label className="checkbox-label">
                                                    <input type="checkbox" name="sponsorGeneralDonation" />
                                                    <span className="checkmark"></span>
                                                    General Donation
                                                </label>
                                                <div className="form-group">
                                                    <label htmlFor="sponsorProgram">Program Sponsor:</label>
                                                    <select id="sponsorProgram" name="sponsorProgram">
                                                        <option value="">Select a program</option>
                                                        <option value="indigenousHealing">Indigenous Healing Circles</option>
                                                        <option value="blackParentNetworks">Black Parent Networks</option>
                                                        <option value="respiteCare">Respite Care</option>
                                                        <option value="heartsMindBrunchin">Hearts & Mind Brunchin</option>
                                                    </select>
                                                </div>
                                                <label className="checkbox-label">
                                                    <input type="checkbox" name="sponsorEventSponsor" />
                                                    <span className="checkmark"></span>
                                                    Event Sponsor (e.g., Annual Gala, Cultural Celebration, Hearts & Mind Brunchin)
                                                </label>
                                            </div>
                                        </div>

                                        <div className="help-category">
                                            <h5>2. In-Kind Donations</h5>
                                            <div className="checkbox-group">
                                                <label className="checkbox-label">
                                                    <input type="checkbox" name="sponsorMealKits" />
                                                    <span className="checkmark"></span>
                                                    Meal Kits/Grocery Cards
                                                </label>
                                                <label className="checkbox-label">
                                                    <input type="checkbox" name="sponsorCleaningSupplies" />
                                                    <span className="checkmark"></span>
                                                    Cleaning/Laundry Supplies
                                                </label>
                                                <label className="checkbox-label">
                                                    <input type="checkbox" name="sponsorProfessionalServices" />
                                                    <span className="checkmark"></span>
                                                    Professional Services (Legal, therapy, marketing)
                                                </label>
                                            </div>
                                        </div>

                                        <div className="help-category">
                                            <h5>3. Corporate Partnerships</h5>
                                            <div className="checkbox-group">
                                                <label className="checkbox-label">
                                                    <input type="checkbox" name="sponsorEmployeeVolunteer" />
                                                    <span className="checkmark"></span>
                                                    Employee Volunteer Teams (e.g., meal prep, brunch setup)
                                                </label>
                                                <label className="checkbox-label">
                                                    <input type="checkbox" name="sponsorMatchingGift" />
                                                    <span className="checkmark"></span>
                                                    Matching Gift Program (Match employee donations)
                                                </label>
                                            </div>
                                        </div>

                                        <div className="help-category">
                                            <h5>4. Cultural Community Support (For Indigenous/Black Initiatives)</h5>
                                            <div className="checkbox-group">
                                                <label className="checkbox-label">
                                                    <input type="checkbox" name="sponsorLandBasedHealing" />
                                                    <span className="checkmark"></span>
                                                    Sponsor Land-Based Healing (Elder honoraria, supplies)
                                                </label>
                                                <label className="checkbox-label">
                                                    <input type="checkbox" name="sponsorHaircareMentalHealth" />
                                                    <span className="checkmark"></span>
                                                    Fund Haircare/Mental Health Days (For Black parents)
                                                </label>
                                                <label className="checkbox-label">
                                                    <input type="checkbox" name="sponsorCulturalEvents" />
                                                    <span className="checkmark"></span>
                                                    Underwrite Cultural Events (Kwanzaa, Powwows, etc.)
                                                </label>
                                            </div>
                                        </div>

                                        <div className="help-category">
                                            <h5>5. Other</h5>
                                            <div className="checkbox-group">
                                                <label className="checkbox-label">
                                                    <input type="checkbox" name="sponsorCustomPartnership" />
                                                    <span className="checkmark"></span>
                                                    Propose a Custom Partnership
                                                </label>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="sponsorCustomIdea">Describe your idea:</label>
                                                <textarea 
                                                    id="sponsorCustomIdea" 
                                                    name="sponsorCustomIdea" 
                                                    rows="4" 
                                                    placeholder="Tell us about your custom partnership idea..."
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    <button type="submit" className="submit-btn">Submit Sponsor Inquiry</button>
                                </form>
                            </div>
                        </FormSection>
                    )}

                    {activeTab === 'placement' && (
                        <FormSection>
                            <div className="form-container" id="placement" style={{ scrollMarginTop: '100px' }}>
                                <h3 className="form-title">Placement Student Signup Form</h3>
                                <p className="form-subtitle">
                                    For PSW, CSW, Social Work, Addictions & Mental Health or Nursing students seeking practicums/internships.
                                </p>
                                
                                <form className="volunteer-form">
                                    <div className="form-section">
                                        <h4>Student Details</h4>
                                        <div className="form-row">
                                            <div className="form-group">
                                                <label htmlFor="placementFullName">Full Name *</label>
                                                <input type="text" id="placementFullName" name="placementFullName" required />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="placementEmail">Email Address *</label>
                                                <input type="email" id="placementEmail" name="placementEmail" required />
                                            </div>
                                        </div>

                                        <div className="form-row">
                                            <div className="form-group">
                                                <label htmlFor="placementPhone">Phone Number *</label>
                                                <input type="tel" id="placementPhone" name="placementPhone" required />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="placementSchool">School/Program *</label>
                                                <select id="placementSchool" name="placementSchool" required>
                                                    <option value="">Select your school</option>
                                                    <option value="durhamCollege">Durham College</option>
                                                    <option value="ontarioTechU">Ontario Tech U</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label>Program Type *</label>
                                            <div className="checkbox-group">
                                                <label className="checkbox-label">
                                                    <input type="checkbox" name="placementPSW" />
                                                    <span className="checkmark"></span>
                                                    PSW
                                                </label>
                                                <label className="checkbox-label">
                                                    <input type="checkbox" name="placementCSW" />
                                                    <span className="checkmark"></span>
                                                    CSW
                                                </label>
                                                <label className="checkbox-label">
                                                    <input type="checkbox" name="placementSocialWork" />
                                                    <span className="checkmark"></span>
                                                    Social Work
                                                </label>
                                                <label className="checkbox-label">
                                                    <input type="checkbox" name="placementNursing" />
                                                    <span className="checkmark"></span>
                                                    Nursing
                                                </label>
                                                <label className="checkbox-label">
                                                    <input type="checkbox" name="placementOther" />
                                                    <span className="checkmark"></span>
                                                    Other
                                                </label>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="placementHours">Placement Hours Required *</label>
                                            <input type="number" id="placementHours" name="placementHours" min="1" required />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="placementExperience">Relevant Experience *</label>
                                            <textarea 
                                                id="placementExperience" 
                                                name="placementExperience" 
                                                rows="4" 
                                                placeholder="Describe any trauma-informed training or lived experience..."
                                                required
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div className="form-section">
                                        <h4>Logistics</h4>
                                        <div className="form-group">
                                            <label>Availability:</label>
                                            <div className="checkbox-group">
                                                <label className="checkbox-label">
                                                    <input type="checkbox" name="placementWeekdays" />
                                                    <span className="checkmark"></span>
                                                    Weekdays
                                                </label>
                                                <label className="checkbox-label">
                                                    <input type="checkbox" name="placementWeekends" />
                                                    <span className="checkmark"></span>
                                                    Weekends
                                                </label>
                                                <label className="checkbox-label">
                                                    <input type="checkbox" name="placementEvenings" />
                                                    <span className="checkmark"></span>
                                                    Evenings
                                                </label>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="placementTransportation">Transportation *</label>
                                            <select id="placementTransportation" name="placementTransportation" required>
                                                <option value="">Select transportation method</option>
                                                <option value="car">Car</option>
                                                <option value="transit">Transit</option>
                                                <option value="needSupport">Need Support</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-section">
                                        <h4>Required Documents</h4>
                                        <p className="section-description">Please upload the following documents:</p>
                                        <div className="document-uploads">
                                            <div className="form-group">
                                                <label htmlFor="placementPoliceCheck">Police Check Status *</label>
                                                <input type="file" id="placementPoliceCheck" name="placementPoliceCheck" accept=".pdf,.doc,.docx" required />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="placementImmunization">Immunization Records *</label>
                                                <input type="file" id="placementImmunization" name="placementImmunization" accept=".pdf,.doc,.docx" required />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="placementFirstAid">First Aid & CPR Certificate *</label>
                                                <input type="file" id="placementFirstAid" name="placementFirstAid" accept=".pdf,.doc,.docx" required />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="placementCPI">CPI Training Certificate</label>
                                                <input type="file" id="placementCPI" name="placementCPI" accept=".pdf,.doc,.docx" />
                                                <small>Non-Violent Crisis Prevention & Intervention Training certificate</small>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-section">
                                        <h4>Consent</h4>
                                        <div className="checkbox-group">
                                            <label className="checkbox-label">
                                                <input type="checkbox" name="placementConfidentiality" required />
                                                <span className="checkmark"></span>
                                                I agree to Hearts & Mind's confidentiality policy. *
                                            </label>
                                            <label className="checkbox-label">
                                                <input type="checkbox" name="placementSchoolShare" required />
                                                <span className="checkmark"></span>
                                                My school can share placement details with Hearts & Mind. *
                                            </label>
                                        </div>
                                    </div>

                                    <button type="submit" className="submit-btn">Apply for Placement</button>
                                </form>
                            </div>
                        </FormSection>
                    )}
                </div>
            </VolunteerContent>
        </VolunteerContainer>
        <Footer />
        </>
    )
}

export default Volunteer
