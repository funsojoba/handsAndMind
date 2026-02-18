import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import emailjs from "emailjs-com"
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

import SalesFormVolunteer from "../../components/SalesForceVolunteer"

const Volunteer = () => {
    const [activeTab, setActiveTab] = useState('sponsor')
    // const [isSubmitting, setIsSubmitting] = useState(false)
    // const [submitMessage, setSubmitMessage] = useState('')

    // const [isStudentSubmitting, setIsStudentSubmitting] = useState(false)
    // const [studentSubmitMessage, setStudentSubmitMessage] = useState('')

    const location = useLocation()
    // const navigate = useNavigate()
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

    // const handleTabChange = (tab) => {
    //     setActiveTab(tab)
    //     if (tab === 'sponsor') {
    //         navigate('#sponsor')
    //     } else if (tab === 'placement') {
    //         navigate('#placement')
    //     } else {
    //         navigate('#volunteer')
    //     }
    // }

    // const handleVolunteerSubmit = async (e) => {
    //     e.preventDefault()
    //     setIsSubmitting(true)
    //     setSubmitMessage('')

    //     try {
    //         const formData = new FormData(e.target)
    //         console.log('Form Data:', Object.fromEntries(formData.entries()))
    //         console.log('-----', formData)

    //         const mapReason = (val) => {
    //             if (val === 'fosterParent') return 'Foster Parent'
    //             if (val === 'communityMember') return 'Community Member'
    //             if (val === 'corporateGroup') return 'Corporate Group'
    //             return val || ''
    //         }

    //         const volunteerRoles = []
    //         if (formData.get('volunteerMealPrep')) volunteerRoles.push('Foster parents in-home support')
    //         if (formData.get('volunteerBrunchSetup')) volunteerRoles.push('Event Setup')
    //         if (formData.get('volunteerCrisisRespite')) volunteerRoles.push('Crisis Respite Volunteer')

    //         const availability = []
    //         if (formData.get('volunteerMornings')) availability.push('Mornings')
    //         if (formData.get('volunteerAfternoons')) availability.push('Afternoons')
    //         if (formData.get('volunteerEvenings')) availability.push('Evenings')
    //         if (formData.get('volunteerWeekdays')) availability.push('Weekdays')
    //         if (formData.get('volunteerWeekends')) availability.push('Weekends')

    //         const skillsCerts = []
    //         if (formData.get('volunteerFirstAid')) skillsCerts.push('First Aid/CPR')
    //         if (formData.get('volunteerVulnerableSector')) skillsCerts.push('Vulnerable Sector Check')
    //         if (formData.get('volunteerTraumaTraining')) skillsCerts.push('Trauma Training')

    //         const volunteerData = {
    //             name: formData.get('volunteerFullName'),
    //             email: formData.get('volunteerEmail'),
    //             phone: formData.get('volunteerPhone'),
    //             whyVolunteer: mapReason(formData.get('volunteerWhy')),
    //             volunteerRoles,
    //             availability,
    //             skillsCerts,
    //             emergencyContactName: formData.get('volunteerEmergencyName'),
    //             emergencyContactPhone: formData.get('volunteerEmergencyPhone'),
    //             backgroundCheck: !!formData.get('volunteerBackgroundCheck'),
    //             newsletters: !!formData.get('volunteerNewsletter')
    //         }

    //         const templateParams = {
    //             to_email: 'volunteers@heartsandmind.org',
    //             name: volunteerData.name,
    //             from_email: volunteerData.email,
    //             time: new Date().toLocaleString(),
    //             subject: 'New Volunteer Application - Hearts & Mind',
    //             message: `
    //                 New Volunteer Application

    //                 Personal Information:
    //                 - Name: ${volunteerData.name}
    //                 - Email: ${volunteerData.email}
    //                 - Phone: ${volunteerData.phone}
    //                 - Why Volunteer: ${volunteerData.whyVolunteer}

    //                 Volunteer Roles: ${volunteerData.volunteerRoles.join(', ') || 'None selected'}

    //                 Availability: ${volunteerData.availability.join(', ') || 'None selected'}

    //                 Skills/Certifications: ${volunteerData.skillsCerts.join(', ') || 'None selected'}

    //                 Emergency Contact:
    //                 - Name: ${volunteerData.emergencyContactName}
    //                 - Phone: ${volunteerData.emergencyContactPhone}

    //                 Consent:
    //                 - Background Check: ${volunteerData.backgroundCheck ? 'Yes' : 'No'}
    //                 - Newsletters: ${volunteerData.newsletters ? 'Yes' : 'No'}
    //             `
    //         }

    //         const result = await emailjs.send(
    //             'service_142mhiv',
    //             'template_2qqpf08',
    //             templateParams,
    //             'PmoxR6KKr41SNPbuL'
    //         )

    //         console.log('Email sent successfully:', result.text)
    //         setSubmitMessage('Thank you! Your volunteer application has been submitted successfully.')
    //         e.target.reset()
    //     } catch (error) {
    //         console.error('Error submitting form:', error)
    //         setSubmitMessage('Sorry, there was an error submitting your application. Please try again.')
    //     } finally {
    //         setIsSubmitting(false)
    //     }
    // }


    // const handleStudentSubmit = async (e) => {
    //     e.preventDefault()
    //     setIsStudentSubmitting(true)
    //     setStudentSubmitMessage('')

    //     try {
    //         const formData = new FormData(e.target)
    //         console.log('Form Data:', Object.fromEntries(formData.entries()))
    //         console.log('-----', formData)

    //         const programType = []
    //         if (formData.get('placementPSW')) programType.push('PSW')
    //         if (formData.get('placementCSW')) programType.push('CSW')
    //         if (formData.get('placementSocialWork')) programType.push('Social Work')
    //         if (formData.get('placementNursing')) programType.push('Nursing')
    //         if (formData.get('placementOther')) programType.push('Others')
            

    //         const logistics = []
    //         if (formData.get('placementWeekdays')) logistics.push("Weekdays")
    //         if (formData.get("placementWeekends")) logistics.push("Weekends")
    //         if (formData.get("placementEvenings")) logistics.push("Evenings ")

    //         const consent = []
    //         if (formData.get('placementConfidentiality')) consent.push('Placement Confidentiality Agreement')
    //         if (formData.get('placementSchoolShare')) consent.push('Placement School Share Agreement')

    //         const studentData = {
    //             name: formData.get('volunteerFullName'),
    //             email: formData.get('volunteerEmail'),
    //             phone: formData.get('volunteerPhone'),
    //             program: formData.get('placementSchool'),
    //             programType: programType.join(', ') || 'None selected',
    //             placementHours: formData.get('placementHours'),
    //             placementExperience: formData.get('placementExperience'),
    //             logistics: logistics.join(', ') || 'None selected',
    //             transportation: formData.get('placementTransportation'),
    //             placementPoliceCheck: formData.get('placementPoliceCheck'),
    //             placementImmunization: formData.get('placementImmunization'),
    //             placementFirstAid: formData.get('placementFirstAid'),
    //             placementCPI: formData.get('placementCPI'),
    //             consent: consent.join(', ') || 'None selected'
    //         }

    //         const templateParams = {
    //             to_email: 'volunteers@heartsandmind.org',
    //             name: studentData.name,
    //             from_email: studentData.email,
    //             time: new Date().toLocaleString(),
    //             subject: 'Placement Student Signup Form - Hearts & Mind',
    //             message: `
    //                 New Volunteer Application

    //                 Personal Information:
    //                 - Name: ${studentData.name}
    //                 - Email: ${studentData.email}
    //                 - Phone: ${studentData.phone}
    //                 - School/Program: ${studentData.program}

    //                 - Program Type: ${studentData.programType}

    //                 - Placement Hour: ${studentData.placementHours}

    //                 - Placement Experience: ${studentData.placementExperience}
    //                 - Logistics: ${studentData.logistics}
    //                 - Transportation: ${studentData.transportation}

    //                 - Police Check: ${studentData.placementPoliceCheck ? 'Yes' : 'No'}
    //                 - Immunization: ${studentData.placementImmunization ? 'Yes' : 'No'}
    //                 - First Aid: ${studentData.placementFirstAid ? 'Yes' : 'No'}
    //                 - CPI: ${studentData.placementCPI ? 'Yes' : 'No'}

    //                 Consent:
    //                 - ${studentData.consent}

    //             `
    //         }

    //         // emailjs attachment
            

    //         const result = await emailjs.send(
    //             'service_142mhiv',
    //             'template_2qqpf08',
    //             templateParams,
    //             'PmoxR6KKr41SNPbuL'
    //         )

    //         console.log('Email sent successfully:', result.text)
    //         setSubmitMessage('Thank you! Your Placement Student Signup Form has been submitted successfully.')
    //         e.target.reset()
    //     } catch (error) {
    //         console.error('Error submitting form:', error)
    //         setSubmitMessage('Sorry, there was an error submitting your application. Please try again.')
    //     } finally {
    //         setIsSubmitting(false)
    //     }

    // }

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

                    <div>
                        <SalesFormVolunteer/>
                    </div>
                    
                </div>
            </VolunteerContent>
        </VolunteerContainer>
        <Footer />
        </>
    )
}

export default Volunteer
