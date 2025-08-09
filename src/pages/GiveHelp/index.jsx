import { useState } from "react"
import { 
    GiveHelpContainer, 
    HeroSection, 
    SponsorshipSection, 
    WhySponsorSection, 
    HowItWorksSection, 
    FAQSection, 
    SponsorsSpotlightSection, 
    FooterCTASection,
    ContactFormSection 
} from "./style"
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"

const GiveHelp = () => {
    const [activeTab, setActiveTab] = useState('corporate')
    const [activeFormTab, setActiveFormTab] = useState('sponsor')
    const [expandedFAQ, setExpandedFAQ] = useState(null)

    const toggleFAQ = (index) => {
        setExpandedFAQ(expandedFAQ === index ? null : index)
    }

    return (
        <GiveHelpContainer>
            <NavBar />
            
            <HeroSection>
                <div className="hero-content">
                    <h1 className="hero-headline">Your Support Keeps Families Strong</h1>
                    <p className="hero-subhead">
                        Businesses, foundations, and community partners; join us to prevent burnout
                        and keep foster placements stable.
                    </p>
                    <button className="hero-cta">Learn How to Help</button>
                </div>
                <div className="hero-image">
                    <img 
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                        alt="Diverse group of smiling parents and kids" 
                    />
                </div>
            </HeroSection>

            <SponsorshipSection>
                <h2 className="section-title">Sponsorship Opportunities</h2>
                <div className="tabs-container">
                    <div className="tabs">
                        <button 
                            className={`tab ${activeTab === 'corporate' ? 'active' : ''}`}
                            onClick={() => setActiveTab('corporate')}
                        >
                            🔹 Corporate Partnerships
                        </button>
                        <button 
                            className={`tab ${activeTab === 'local' ? 'active' : ''}`}
                            onClick={() => setActiveTab('local')}
                        >
                            🔹 Local Business Support
                        </button>
                        <button 
                            className={`tab ${activeTab === 'inKind' ? 'active' : ''}`}
                            onClick={() => setActiveTab('inKind')}
                        >
                            🔹 In-Kind Donations
                        </button>
                    </div>
                    
                    <div className="tab-content">
                        {activeTab === 'corporate' && (
                            <div className="tab-panel">
                                <h3>Corporate Partnerships</h3>
                                <p>Partner with us to create meaningful impact in your community while advancing your corporate social responsibility goals.</p>
                                <ul>
                                    <li>Employee volunteer programs</li>
                                    <li>Matching gift initiatives</li>
                                    <li>Long-term strategic partnerships</li>
                                    <li>Brand visibility and recognition</li>
                                </ul>
                            </div>
                        )}
                        {activeTab === 'local' && (
                            <div className="tab-panel">
                                <h3>Local Business Support</h3>
                                <p>Small businesses can make a big difference in the lives of foster families in your neighborhood.</p>
                                <ul>
                                    <li>Sponsor monthly brunches</li>
                                    <li>Provide in-kind services</li>
                                    <li>Host fundraising events</li>
                                    <li>Employee volunteer days</li>
                                </ul>
                            </div>
                        )}
                        {activeTab === 'inKind' && (
                            <div className="tab-panel">
                                <h3>In-Kind Donations</h3>
                                <p>Your goods and services directly support families in need, reducing costs and increasing our impact.</p>
                                <ul>
                                    <li>Meal kits and grocery cards</li>
                                    <li>Cleaning and laundry supplies</li>
                                    <li>Professional services</li>
                                    <li>Event space and equipment</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </SponsorshipSection>

            <WhySponsorSection>
                <h2 className="section-title">Why Sponsor?</h2>
                <div className="stats-testimonials">
                    <div className="stats">
                        <div className="stat-item">
                            <div className="stat-number">92%</div>
                            <div className="stat-text">of our parents say sponsors' support reduced their stress.</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">40</div>
                            <div className="stat-text">hours of support provided with every $1K sponsorship.</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">85%</div>
                            <div className="stat-text">reduction in placement disruptions for supported families.</div>
                        </div>
                    </div>
                    
                    <div className="testimonials">
                        <div className="testimonial">
                            <p>"Partnering with Hearts & Mind lets our business live its values."</p>
                            <span className="testimonial-author">— Local Bakery Owner</span>
                        </div>
                        <div className="testimonial">
                            <p>"Seeing the direct impact on families in our community is incredibly rewarding."</p>
                            <span className="testimonial-author">— Community Bank Manager</span>
                        </div>
                    </div>
                </div>
                
                <div className="infographic">
                    <div className="infographic-content">
                        <h3>How Your Support Makes a Difference</h3>
                        <div className="impact-visual">
                            <div className="money-input">$1K</div>
                            <div className="arrow">→</div>
                            <div className="impact-output">
                                <div className="output-item">40 Hours of Support</div>
                                <div className="output-item">2 Families Helped</div>
                                <div className="output-item">1 Month of Stability</div>
                            </div>
                        </div>
                    </div>
                </div>
            </WhySponsorSection>

            <HowItWorksSection>
                <h2 className="section-title">How It Works</h2>
                <div className="steps-container">
                    <div className="step">
                        <div className="step-number">1</div>
                        <h3>You Give</h3>
                        <p>Choose cash, in-kind, or employee volunteering.</p>
                    </div>
                    <div className="step">
                        <div className="step-number">2</div>
                        <h3>We Deliver</h3>
                        <p>Impact Report (not available yet)</p>
                    </div>
                    <div className="step">
                        <div className="step-number">3</div>
                        <h3>Families Thrive</h3>
                        <p>Fewer disruptions, more stable homes.</p>
                    </div>
                </div>
                <button className="cta-button">Become a Sponsor Today</button>
            </HowItWorksSection>

            <FAQSection>
                <h2 className="section-title">Sponsor FAQ</h2>
                <div className="faq-container">
                    {[
                        {
                            question: "Can we sponsor a specific program?",
                            answer: "Yes! Designate funds to brunches, home support, or any specific initiative that aligns with your values."
                        },
                        {
                            question: "Is my donation tax-deductible?",
                            answer: "We're working on obtaining charitable status. Currently, donations are not tax-deductible, but we'll update this information as soon as it's available."
                        },
                        {
                            question: "How are sponsors recognized?",
                            answer: "Custom perks based on tier including logos on our website, social media features, and exclusive event invitations."
                        },
                        {
                            question: "What's the minimum sponsorship amount?",
                            answer: "We welcome support at any level. Even small contributions make a meaningful difference in a family's life."
                        },
                        {
                            question: "Can we volunteer as a team?",
                            answer: "Absolutely! We love corporate volunteer teams for meal prep, brunch setup, and special events."
                        }
                    ].map((faq, index) => (
                        <div key={index} className="faq-item">
                            <button 
                                className={`faq-question ${expandedFAQ === index ? 'expanded' : ''}`}
                                onClick={() => toggleFAQ(index)}
                            >
                                {faq.question}
                                <span className="faq-icon">{expandedFAQ === index ? '−' : '+'}</span>
                            </button>
                            {expandedFAQ === index && (
                                <div className="faq-answer">{faq.answer}</div>
                            )}
                        </div>
                    ))}
                </div>
            </FAQSection>

            <SponsorsSpotlightSection>
                <h2 className="section-title">Current Sponsors Spotlight</h2>
                <div className="sponsors-grid">
                    <div className="sponsor-logo">Local Bakery</div>
                    <div className="sponsor-logo">Community Bank</div>
                    <div className="sponsor-logo">Family Restaurant</div>
                    <div className="sponsor-logo">Local Law Firm</div>
                </div>
                <p className="join-text">Join these change-makers!</p>
            </SponsorsSpotlightSection>

            <FooterCTASection>
                <h2>Not ready to sponsor?</h2>
                <p>Share this page with a business owner who might be!</p>
                <div className="share-buttons">
                    <button className="share-btn">Share on Facebook</button>
                    <button className="share-btn">Share on LinkedIn</button>
                    <button className="share-btn">Copy Link</button>
                </div>
            </FooterCTASection>

            <ContactFormSection>
                <h2 className="section-title">Get Involved</h2>
                <p className="section-subtitle">Choose how you'd like to contribute to our community</p>
                
                <div className="form-tabs">
                    <button 
                        className={`form-tab ${activeFormTab === 'sponsor' ? 'active' : ''}`}
                        onClick={() => setActiveFormTab('sponsor')}
                    >
                        💼 Sponsor Form
                    </button>
                    <button 
                        className={`form-tab ${activeFormTab === 'placement' ? 'active' : ''}`}
                        onClick={() => setActiveFormTab('placement')}
                    >
                        🎓 Student Placement
                    </button>
                    <button 
                        className={`form-tab ${activeFormTab === 'volunteer' ? 'active' : ''}`}
                        onClick={() => setActiveFormTab('volunteer')}
                    >
                        🤝 Volunteer
                    </button>
                </div>
                
                <div className="form-content">
                    {activeFormTab === 'sponsor' && (
                        <form className="sponsor-form">
                            <h3 className="form-title">Contact Form for Sponsors</h3>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Name *</label>
                                    <input type="text" id="name" name="name" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="company">Company</label>
                                    <input type="text" id="company" name="company" />
                                </div>
                            </div>
                            
                            <div className="form-group">
                                <label>Interest *</label>
                                <div className="checkbox-group">
                                    <label className="checkbox-label">
                                        <input type="checkbox" name="interest" value="corporate" />
                                        <span className="checkmark"></span>
                                        Corporate
                                    </label>
                                    <label className="checkbox-label">
                                        <input type="checkbox" name="interest" value="localBusiness" />
                                        <span className="checkmark"></span>
                                        Local Business
                                    </label>
                                    <label className="checkbox-label">
                                        <input type="checkbox" name="interest" value="inKind" />
                                        <span className="checkmark"></span>
                                        In-Kind
                                    </label>
                                </div>
                            </div>

                            <div className="form-section">
                                <h4>How would you like to help?</h4>
                                
                                <div className="help-category">
                                    <h5>1. Financial Support</h5>
                                    <div className="checkbox-group">
                                        <label className="checkbox-label">
                                            <input type="checkbox" name="financialSupport" value="generalDonation" />
                                            <span className="checkmark"></span>
                                            General Donation (donation link won't work yet as we don't have a charitable status yet)
                                        </label>
                                        <label className="checkbox-label">
                                            <input type="checkbox" name="financialSupport" value="programSponsor" />
                                            <span className="checkmark"></span>
                                            Program Sponsor
                                        </label>
                                        <div className="form-group">
                                            <select name="programType">
                                                <option value="">Select program</option>
                                                <option value="indigenousHealing">Indigenous Healing Circles</option>
                                                <option value="blackParentNetworks">Black Parent Networks</option>
                                                <option value="respiteCare">Respite Care</option>
                                                <option value="brunchin">Hearts & Mind Brunchin</option>
                                            </select>
                                        </div>
                                        <label className="checkbox-label">
                                            <input type="checkbox" name="financialSupport" value="eventSponsor" />
                                            <span className="checkmark"></span>
                                            Event Sponsor (e.g., Annual Gala, Cultural Celebration, Hearts & Mind Brunchin)
                                        </label>
                                    </div>
                                </div>

                                <div className="help-category">
                                    <h5>2. In-Kind Donations</h5>
                                    <div className="checkbox-group">
                                        <label className="checkbox-label">
                                            <input type="checkbox" name="inKindDonations" value="mealKits" />
                                            <span className="checkmark"></span>
                                            Meal Kits/Grocery Cards
                                        </label>
                                        <label className="checkbox-label">
                                            <input type="checkbox" name="inKindDonations" value="cleaningSupplies" />
                                            <span className="checkmark"></span>
                                            Cleaning/Laundry Supplies
                                        </label>
                                        <label className="checkbox-label">
                                            <input type="checkbox" name="inKindDonations" value="professionalServices" />
                                            <span className="checkmark"></span>
                                            Professional Services (Legal, therapy, marketing)
                                        </label>
                                    </div>
                                </div>

                                <div className="help-category">
                                    <h5>3. Corporate Partnerships</h5>
                                    <div className="checkbox-group">
                                        <label className="checkbox-label">
                                            <input type="checkbox" name="corporatePartnerships" value="employeeVolunteer" />
                                            <span className="checkmark"></span>
                                            Employee Volunteer Teams (e.g., meal prep, brunch setup)
                                        </label>
                                        <label className="checkbox-label">
                                            <input type="checkbox" name="corporatePartnerships" value="matchingGift" />
                                            <span className="checkmark"></span>
                                            Matching Gift Program (Match employee donations)
                                        </label>
                                    </div>
                                </div>

                                <div className="help-category">
                                    <h5>4. Cultural Community Support (For Indigenous/Black Initiatives)</h5>
                                    <div className="checkbox-group">
                                        <label className="checkbox-label">
                                            <input type="checkbox" name="culturalSupport" value="landBasedHealing" />
                                            <span className="checkmark"></span>
                                            Sponsor Land-Based Healing (Elder honoraria, supplies)
                                        </label>
                                        <label className="checkbox-label">
                                            <input type="checkbox" name="culturalSupport" value="haircareMentalHealth" />
                                            <span className="checkmark"></span>
                                            Fund Haircare/Mental Health Days (For Black parents)
                                        </label>
                                        <label className="checkbox-label">
                                            <input type="checkbox" name="culturalSupport" value="culturalEvents" />
                                            <span className="checkmark"></span>
                                            Underwrite Cultural Events (Kwanzaa, Powwows, etc.)
                                        </label>
                                    </div>
                                </div>

                                <div className="help-category">
                                    <h5>5. Other</h5>
                                    <div className="checkbox-group">
                                        <label className="checkbox-label">
                                            <input type="checkbox" name="other" value="customPartnership" />
                                            <span className="checkmark"></span>
                                            Propose a Custom Partnership
                                        </label>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="customIdea">Describe your idea:</label>
                                        <textarea id="customIdea" name="customIdea" rows="4" placeholder="Tell us about your custom partnership idea..."></textarea>
                                    </div>
                                </div>
                            </div>

                            <button type="submit" className="submit-btn">Submit Sponsorship Inquiry</button>
                        </form>
                    )}

                    {activeFormTab === 'placement' && (
                        <form className="placement-form">
                            <h3 className="form-title">Placement Student Signup Form</h3>
                            <p className="form-subtitle">For PSW, CSW, Social Work, Addictions & Mental Health or Nursing students seeking practicums/internships.</p>
                            
                            <div className="form-section">
                                <h4>Student Details</h4>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="studentName">Full Name *</label>
                                        <input type="text" id="studentName" name="studentName" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="studentEmail">Email *</label>
                                        <input type="email" id="studentEmail" name="studentEmail" required />
                                    </div>
                                </div>
                                
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="studentPhone">Phone *</label>
                                        <input type="tel" id="studentPhone" name="studentPhone" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="schoolProgram">School/Program *</label>
                                        <select id="schoolProgram" name="schoolProgram" required>
                                            <option value="">Select school</option>
                                            <option value="durhamCollege">Durham College</option>
                                            <option value="ontarioTechU">Ontario Tech U</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>
                                
                                <div className="form-group">
                                    <label>Program Type * (Check all that apply)</label>
                                    <div className="checkbox-group">
                                        <label className="checkbox-label">
                                            <input type="checkbox" name="programType" value="psw" />
                                            <span className="checkmark"></span>
                                            PSW
                                        </label>
                                        <label className="checkbox-label">
                                            <input type="checkbox" name="programType" value="csw" />
                                            <span className="checkmark"></span>
                                            CSW
                                        </label>
                                        <label className="checkbox-label">
                                            <input type="checkbox" name="programType" value="socialWork" />
                                            <span className="checkmark"></span>
                                            Social Work
                                        </label>
                                        <label className="checkbox-label">
                                            <input type="checkbox" name="programType" value="nursing" />
                                            <span className="checkmark"></span>
                                            Nursing
                                        </label>
                                        <label className="checkbox-label">
                                            <input type="checkbox" name="programType" value="other" />
                                            <span className="checkmark"></span>
                                            Other
                                        </label>
                                    </div>
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="placementHours">Placement Hours Required *</label>
                                    <input type="text" id="placementHours" name="placementHours" placeholder="e.g., 200 hours" required />
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="relevantExperience">Relevant Experience *</label>
                                    <textarea id="relevantExperience" name="relevantExperience" rows="4" placeholder="Describe any trauma-informed training or lived experience..." required></textarea>
                                </div>
                            </div>
                            
                            <div className="form-section">
                                <h4>Logistics</h4>
                                <div className="form-group">
                                    <label>Availability (Check all that apply) *</label>
                                    <div className="checkbox-group">
                                        <label className="checkbox-label">
                                            <input type="checkbox" name="availability" value="weekdays" />
                                            <span className="checkmark"></span>
                                            Weekdays
                                        </label>
                                        <label className="checkbox-label">
                                            <input type="checkbox" name="availability" value="weekends" />
                                            <span className="checkmark"></span>
                                            Weekends
                                        </label>
                                        <label className="checkbox-label">
                                            <input type="checkbox" name="availability" value="evenings" />
                                            <span className="checkmark"></span>
                                            Evenings
                                        </label>
                                    </div>
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="transportation">Transportation *</label>
                                    <select id="transportation" name="transportation" required>
                                        <option value="">Select transportation option</option>
                                        <option value="car">Car</option>
                                        <option value="transit">Transit</option>
                                        <option value="needSupport">Need Support</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className="form-section">
                                <h4>Consent</h4>
                                <div className="checkbox-group">
                                    <label className="checkbox-label">
                                        <input type="checkbox" name="confidentialityPolicy" required />
                                        <span className="checkmark"></span>
                                        I agree to Hearts & Mind's confidentiality policy. *
                                    </label>
                                    <label className="checkbox-label">
                                        <input type="checkbox" name="schoolSharing" required />
                                        <span className="checkmark"></span>
                                        My school can share placement details with Hearts & Mind. *
                                    </label>
                                </div>
                            </div>
                            
                            <div className="form-section">
                                <h4>Required Documents</h4>
                                <p className="form-note">Please ensure you have the following documents ready for upload:</p>
                                <div className="document-list">
                                    <div className="document-item">
                                        <span className="document-icon">📄</span>
                                        <span>Police Check Status</span>
                                    </div>
                                    <div className="document-item">
                                        <span className="document-icon">💉</span>
                                        <span>Immunization Records</span>
                                    </div>
                                    <div className="document-item">
                                        <span className="document-icon">🆘</span>
                                        <span>First Aid & CPR Certificate</span>
                                    </div>
                                    <div className="document-item">
                                        <span className="document-icon">🛡️</span>
                                        <span>CPI (Non-Violent Crisis Prevention & Intervention Training) Certificate</span>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="documentUpload">Upload Documents</label>
                                    <input type="file" id="documentUpload" name="documentUpload" multiple accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" />
                                    <small>Accepted formats: PDF, DOC, DOCX, JPG, PNG</small>
                                </div>
                            </div>
                            
                            <button type="submit" className="submit-btn">Apply for Placement</button>
                        </form>
                    )}

                    {activeFormTab === 'volunteer' && (
                        <form className="volunteer-form">
                            <h3 className="form-title">Volunteer Signup Form</h3>
                            
                            <div className="form-section">
                                <h4>Personal Info</h4>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="volunteerName">Full Name *</label>
                                        <input type="text" id="volunteerName" name="volunteerName" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="volunteerEmail">Email *</label>
                                        <input type="email" id="volunteerEmail" name="volunteerEmail" required />
                                    </div>
                                </div>
                                
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="volunteerPhone">Phone *</label>
                                        <input type="tel" id="volunteerPhone" name="volunteerPhone" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="whyVolunteer">Why Volunteer? *</label>
                                        <select id="whyVolunteer" name="whyVolunteer" required>
                                            <option value="">Select reason</option>
                                            <option value="fosterParent">Foster Parent</option>
                                            <option value="communityMember">Community Member</option>
                                            <option value="corporateGroup">Corporate Group</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="form-section">
                                <h4>Volunteer Roles</h4>
                                <p className="form-subtitle">Choose Opportunities (Check all that apply)</p>
                                <div className="checkbox-group">
                                    <label className="checkbox-label">
                                        <input type="checkbox" name="volunteerRoles" value="laundryHelper" />
                                        <span className="checkmark"></span>
                                        Laundry Helper (2 hrs/week)
                                    </label>
                                    <label className="checkbox-label">
                                        <input type="checkbox" name="volunteerRoles" value="mealPrepAssistant" />
                                        <span className="checkmark"></span>
                                        Meal Prep Assistant
                                    </label>
                                    <label className="checkbox-label">
                                        <input type="checkbox" name="volunteerRoles" value="brunchEventSetup" />
                                        <span className="checkmark"></span>
                                        Brunch Event Setup
                                    </label>
                                    <label className="checkbox-label">
                                        <input type="checkbox" name="volunteerRoles" value="crisisRespiteVolunteer" />
                                        <span className="checkmark"></span>
                                        Crisis Respite Volunteer
                                    </label>
                                    <label className="checkbox-label">
                                        <input type="checkbox" name="volunteerRoles" value="culturalProgramSupport" />
                                        <span className="checkmark"></span>
                                        Cultural Program Support (e.g., Indigenous cooking)
                                    </label>
                                </div>
                            </div>
                            
                            <div className="form-section">
                                <h4>Availability</h4>
                                <p className="form-subtitle">Days/Times (Check all that apply)</p>
                                <div className="checkbox-group">
                                    <label className="checkbox-label">
                                        <input type="checkbox" name="availability" value="mornings" />
                                        <span className="checkmark"></span>
                                        Mornings
                                    </label>
                                    <label className="checkbox-label">
                                        <input type="checkbox" name="availability" value="afternoons" />
                                        <span className="checkmark"></span>
                                        Afternoons
                                    </label>
                                    <label className="checkbox-label">
                                        <input type="checkbox" name="availability" value="evenings" />
                                        <span className="checkmark"></span>
                                        Evenings
                                    </label>
                                    <label className="checkbox-label">
                                        <input type="checkbox" name="availability" value="weekdays" />
                                        <span className="checkmark"></span>
                                        Weekdays
                                    </label>
                                    <label className="checkbox-label">
                                        <input type="checkbox" name="availability" value="weekends" />
                                        <span className="checkmark"></span>
                                        Weekends
                                    </label>
                                </div>
                            </div>
                            
                            <div className="form-section">
                                <h4>Screening</h4>
                                <div className="form-group">
                                    <label>Skills/Certifications (Check all that apply)</label>
                                    <div className="checkbox-group">
                                        <label className="checkbox-label">
                                            <input type="checkbox" name="skillsCerts" value="firstAidCPR" />
                                            <span className="checkmark"></span>
                                            First Aid/CPR
                                        </label>
                                        <label className="checkbox-label">
                                            <input type="checkbox" name="skillsCerts" value="vulnerableSectorCheck" />
                                            <span className="checkmark"></span>
                                            Vulnerable Sector Check
                                        </label>
                                        <label className="checkbox-label">
                                            <input type="checkbox" name="skillsCerts" value="traumaTraining" />
                                            <span className="checkmark"></span>
                                            Trauma Training
                                        </label>
                                    </div>
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="emergencyContact">Emergency Contact *</label>
                                    <input type="text" id="emergencyContact" name="emergencyContact" placeholder="Name and phone number" required />
                                </div>
                            </div>
                            
                            <div className="form-section">
                                <h4>Consent</h4>
                                <div className="checkbox-group">
                                    <label className="checkbox-label">
                                        <input type="checkbox" name="backgroundCheck" required />
                                        <span className="checkmark"></span>
                                        I consent to a background check. *
                                    </label>
                                    <label className="checkbox-label">
                                        <input type="checkbox" name="newsletters" />
                                        <span className="checkmark"></span>
                                        I'd like to receive newsletters.
                                    </label>
                                </div>
                            </div>
                            
                            <button type="submit" className="submit-btn">Join Our Village</button>
                        </form>
                    )}
                </div>
            </ContactFormSection>

            <Footer />
        </GiveHelpContainer>
    )
}

export default GiveHelp
