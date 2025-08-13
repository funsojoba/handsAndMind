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

    const objectives = [
        "Strengthen the Foster Caregiving Ecosystem",
        "Reduce Caregiver Burnout",
        "Enhance Placement Stability",
        "Improve Outcomes for Children in Care",
        "Center Lived Experience and Community Voice",
        "Advocate for Systemic Change",
        "Deliver Sustainable, Justice-Informed Care"
    ]

    const challenges = [
        "Systemic Neglect and Under-Resourcing of Foster Families",
        "High Rates of Burnout Among Caregivers",
        "Trauma Misunderstood or Pathologized",
        "Cultural Disconnection in Child Welfare Systems",
        "Lack of Holistic and Relational Services",
        "Barriers to Accessing Support",
        "Over-Surveillance of Racialized Communities",
        "Sustainability and Capacity Building"
    ]

    return (
        <>
        <NavBar/>
        <AboutContainer>
            <HeroSection>
                <div className="hero-content">
                    <h1 className="montserrat-bold">About HEARTSANDMIND</h1>
                    <p>Empowering foster parents with resources, relational guidance, and in-home support</p>
                </div>
            </HeroSection>

            <MissionSection>
                <div className="section-container">
                    <h2 className="section-title montserrat-bold">Our Mission</h2>
                    <div className="mission-content">
                        <p className="mission-text">
                            HEARTSANDMIND exists to empower foster parents with the resources, relational guidance, 
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
                            that our communities embrace and our systems resource. It is a future in which youth in care 
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

            <HistorySection>
                <div className="section-container">
                    <h2 className="section-title montserrat-bold">History and Founding Story</h2>
                    <div className="history-content">
                        <p className="history-text">
                            Abigail Wonuigwe is a mother of two, a foster parent and a graduate of Oxford College's 
                            Community Developmental Support Program, began witnessing a recurring crisis: foster 
                            parents, particularly those caring for racialized children, were overwhelmed, isolated, and 
                            unsupported. Many were on the brink of burnout. And the children in their care are brilliant, 
                            resilient, and full of potential and were being failed by systems that too often ignored their 
                            histories, culture, and humanity.
                        </p>
                        <p className="history-text">
                            Abigail heard the same stories over and over: caregivers begging for respite and being denied, 
                            youth with trauma histories shuffled between homes, children missing school or slipping into 
                            survival behaviors such as substance use, self-harm, or street involvement as a result of their 
                            pain was misunderstood or pathologized. She listened. She saw. And she knew something had 
                            to change.
                        </p>
                        <p className="history-text">
                            Drawing from her professional training, lived experience, and maternal wisdom, Abigail 
                            imagined a new way forward: a nonprofit rooted in compassion, culturally attuned care, and 
                            practical, in-home support. A place where caregivers wouldn't feel alone and where children 
                            wouldn't just survive but begin to heal and thrive.
                        </p>
                        <p className="history-text">
                            And so, HEARTSANDMIND was born; not just as an organization, but as a community promise: 
                            to center healing, dignity, and people over process.
                        </p>
                    </div>
                </div>
            </HistorySection>

            <ObjectivesSection>
                <div className="section-container">
                    <h2 className="section-title montserrat-bold">Objectives</h2>
                    <div className="objectives-list">
                        {objectives.map((objective, index) => (
                            <div key={index} className="objective-item">
                                <span className="objective-number">{index + 1}.</span>
                                <span className="objective-text">{objective}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </ObjectivesSection>

            <ChallengesSection>
                <div className="section-container">
                    <h2 className="section-title montserrat-bold">Challenges</h2>
                    <div className="challenges-list">
                        {challenges.map((challenge, index) => (
                            <div key={index} className="challenge-item">
                                <span className="challenge-number">{index + 1}.</span>
                                <span className="challenge-text">{challenge}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </ChallengesSection>
        </AboutContainer>
        <Footer />
        </>
    )
}

export default About