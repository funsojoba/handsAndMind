import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import { 
    AboutContainer, 
    HeroSection, 
    MissionSection, 
    VisionSection, 
    ValuesSection, 
    HistorySection, 
    ObjectivesSection, 
    ChallengesSection 
} from "./style"

import Nav from "../../components/Nav"

const About = () => {
    const coreValues = [
        {
            title: "Trauma-Informed Practice",
            description: "We understand that trauma, especially complex and intergenerational trauma, deeply impacts both children and caregivers. Our services prioritize emotional safety, choice, collaboration, and empowerment."
        },
        {
            title: "Cultural Humility",
            description: "We work in partnership with Indigenous, Black, and racialized communities—honoring diverse worldviews, rejecting one-size-fits-all models, and committing to lifelong learning and unlearning. We respect the cultural identities and spiritual needs of every family and resist all forms of assimilation and erasure."
        },
        {
            title: "Holistic Wellness",
            description: "Healing is multifaceted and does not begin or end with clinical intervention. We support emotional, physical, spiritual, and relational wellbeing by blending in-home care with therapeutic tools, community engagement, and personal agency."
        },
        {
            title: "Community-Centered Action",
            description: "We trust the wisdom of lived experience. Our work is shaped by the voices of caregivers directly impacted by the system. We invest in peer-led models, collaborative problem-solving, and community accountability."
        },
        {
            title: "Equity and Accessibility",
            description: "We challenge systemic barriers by offering low-barrier, non-stigmatizing services. We advocate for fair policy, equitable funding, and anti-racist practices within child welfare and related sectors."
        },
        {
            title: "Sustainable Support",
            description: "We recognize that short-term fixes often fail. We offer consistent, reliable, and wraparound support that evolves with the needs of each family over time. Our work is proactive, not just reactive, and committed to long-term family preservation and stability."
        }
    ]


    return (
        <>
        <Nav />
        <AboutContainer>
            <HeroSection>
                <div className="hero-content">
                    <h1 className="montserrat-bold">About HEARTS AND MIND</h1>
                    <p>Empowering foster parents with resources, relational guidance, and in-home support</p>
                </div>
            </HeroSection>

            <MissionSection>
                <div className="section-container">
                    <h2 className="section-title montserrat-bold">Our Mission</h2>
                    <div className="mission-content">
                        <p className="mission-text">
                            HEARTS AND MIND exists to empower foster parents with the resources, relational guidance, 
                            and in-home support they need to provide safe, nurturing, and stable environments for the 
                            children entrusted to their care. We believe that by centering healing, cultural safety, and 
                            dignity, we can reduce caregiver burnout, stabilize foster placements, and improve long-term 
                            outcomes for children and youth in care, particularly those from Indigenous and racialized 
                            communities who have been historically underserved and over-surveyed by the child welfare 
                            system.
                        </p>
                        <p className="mission-text">
                            Our mission is to walk alongside caregivers and children, offering not charity, but deep and 
                            sustained support rooted in equity, love, and accountability.
                        </p>
                    </div>
                </div>
            </MissionSection>

            <VisionSection>
                <div className="section-container">
                    <h2 className="section-title montserrat-bold">Vision Statement</h2>
                    <div className="vision-content">
                        <p className="vision-text">
                            We envision a future where every child in foster care thrives in a home grounded in 
                            compassion, cultural integrity, and emotional safety—and where every foster parent is 
                            supported, respected, and equipped to sustain that environment.
                        </p>
                        <p className="vision-text">
                            In this future, caregiving is not a burden shouldered in isolation, but a collective responsibility 
                            that our communities embrace and our systems resource. It is a future in which children in care 
                            grow up with hope, stability, and opportunity, and where trauma is met not with punishment, 
                            but with connection, care, and culturally informed healing.
                        </p>
                    </div>
                </div>
            </VisionSection>

            <ValuesSection>
                <div className="section-container">
                    <h2 className="section-title montserrat-bold">Core Values</h2>
                    <div className="values-grid">
                        {coreValues.map((value, index) => (
                            <div key={index} className="value-card">
                                <h3 className="value-title">{index + 1}. {value.title}</h3>
                                <p className="value-description">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </ValuesSection>

        </AboutContainer>
        <Footer />
        </>
    )
}

export default About