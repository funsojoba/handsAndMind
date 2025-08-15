import { useState } from "react"

import Nav from "../../components/Nav"
import Footer from "../../components/Footer"
import { 
    ProgramContainer, 
    HeroSection, 
    ProgramContent,
    ProgramCard,
    FeatureList,
    ActionButton
} from "./style"

const Program = () => {
    const [activeProgram, setActiveProgram] = useState(null)

    const programs = [
        {
            id: "relief-package",
            title: "Hearts & Mind Relief Package",
            subtitle: "Practical, in-home support to ease daily burdens",
            description: "Our Relief Package provides foster parents with free, hands-on help for everyday tasks—meal prep, laundry, light housekeeping. Designed to reduce burnout, this service allows caregivers to focus on building strong connections with their children.",
            features: [
                "Customized support based on family needs",
                "Trauma-trained volunteers",
                "Flexible scheduling"
            ],
            actionText: "Learn More",
            actionLink: "/give-help#support-form",
            color: "#8D24B4"
        },
        {
            id: "brunch-series",
            title: "Hearts & Brunch Series",
            subtitle: "Building community over shared meals",
            description: "A monthly gathering where foster parents connect, share experiences, and access resources—all while enjoying a chef-prepared meal.",
            features: [
                "Themed discussions (e.g., advocacy, self-care)",
                "Peer mentorship opportunities",
                "Safe, judgment-free space"
            ],
            actionText: "See Upcoming Brunches",
            actionLink: "/chapters",
            color: "#E91E63"
        },
        {
            id: "workshops",
            title: "Reflect & Renew Workshops",
            subtitle: "Skills and strategies for resilient foster parenting",
            description: "Interactive, expert-led workshops covering trauma-informed care, cultural safety, system navigation, and caregiver wellness.",
            features: [
                "Evidence-based",
                "Practical tools for real-world challenges",
                "Inclusive of all family structures"
            ],
            actionText: "Explore Workshops",
            actionLink: "/workshops",
            color: "#2196F3"
        },
        {
            id: "support-group",
            title: "Hearts & Mind Support Group",
            subtitle: "A lifeline for foster parents",
            description: "Peer-led circles offering emotional support, shared wisdom, and a safe space to process the joys and struggles of foster care.",
            features: [
                "Themed groups",
                "Confidential and compassionate environment",
                "Virtual and in-person options"
            ],
            actionText: "Join a Group",
            actionLink: "https://forms.google.com/support-group-signup",
            color: "#4CAF50"
        }
    ]

    const handleActionClick = (program) => {
        if (program.actionLink.startsWith('http')) {
            // External link - open in new tab
            window.open(program.actionLink, '_blank')
        } else {
            // Internal navigation
            window.location.href = program.actionLink
        }
    }

    return (
        <>
            <Nav />
            <ProgramContainer>
                <HeroSection>
                    <div className="hero-content">
                        <h1 className="montserrat-bold">Our Programs</h1>
                        <p>Comprehensive support designed to strengthen foster families and build resilient communities</p>
                    </div>
                </HeroSection>

                <ProgramContent>
                    <div className="content-container">
                        <div className="intro-section">
                            <h2 className="section-title montserrat-bold">Supporting Foster Families</h2>
                            <p className="section-description">
                                We offer a range of programs designed to meet the diverse needs of foster families. 
                                From practical support to emotional connection, our services are built on the foundation 
                                of understanding, compassion, and community.
                            </p>
                        </div>

                        <div className="programs-grid">
                            {programs.map((program) => (
                                <ProgramCard 
                                    key={program.id}
                                    color={program.color}
                                    onClick={() => setActiveProgram(activeProgram === program.id ? null : program.id)}
                                    className={activeProgram === program.id ? 'active' : ''}
                                >
                                    <div className="program-header">
                                        <h3 className="program-title">{program.title}</h3>
                                        <p className="program-subtitle">{program.subtitle}</p>
                                    </div>
                                    
                                    <div className="program-body">
                                        <p className="program-description">{program.description}</p>
                                        
                                        <div className="features-section">
                                            <h4>Key Features:</h4>
                                            <FeatureList>
                                                {program.features.map((feature, featureIndex) => (
                                                    <li key={featureIndex}>
                                                        <span className="checkmark">✔</span>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </FeatureList>
                                        </div>
                                    </div>

                                    <div className="program-footer">
                                        <ActionButton 
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                handleActionClick(program)
                                            }}
                                            color={program.color}
                                        >
                                            {program.actionText}
                                        </ActionButton>
                                    </div>
                                </ProgramCard>
                            ))}
                        </div>

                        <div className="cta-section">
                            <h2 className="cta-title">Ready to Get Started?</h2>
                            <p className="cta-description">
                                Join our community and discover the support you need to thrive as a foster parent.
                            </p>
                            <div className="cta-buttons">
                                <ActionButton 
                                    onClick={() => window.location.href = '/chapters'}
                                    color="#8D24B4"
                                    className="primary"
                                >
                                    Join a Chapter
                                </ActionButton>
                                <ActionButton 
                                    onClick={() => window.location.href = '/give-help'}
                                    color="#E91E63"
                                    className="secondary"
                                >
                                    Get Support
                                </ActionButton>
                            </div>
                        </div>
                    </div>
                </ProgramContent>
            </ProgramContainer>
            <Footer />
        </>
    )
}

export default Program
