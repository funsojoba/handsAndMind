import Nav from "../../components/Nav"
import Footer from "../../components/Footer"
import {
    PageContainer,
    HeroSection,
    Section,
    BulletList,
    VoiceSection,
    VoiceCard,
    CTASection,
    CTAButton
} from "./style"

const spaceOffers = [
    "Peer connection in small, closed groups",
    "Shared experiences without judgment",
    "Opportunities to reflect on stress, boundaries, and wellbeing",
    "Practical strategies from real-life caregiving",
    "A sense of belonging within a supportive community"
]

const howItWorksItems = [
    "8-session cycles for consistency and trust",
    "Virtual sessions with occasional in-person gatherings",
    "Guided conversations, check-ins, and practical tools"
]

const whoCanJoinItems = ["Foster parents", "Kinship caregivers", "Caregivers within our community"]

const CaregiverCircle = () => {
    return (
        <>
            <Nav />
            <PageContainer>
                <HeroSection>
                    <div className="content">
                        <h1>Hearts and Mind Support Group (Caregiver Circle)</h1>
                        <p>A support space for foster parents &amp; kinship caregivers.</p>
                    </div>
                </HeroSection>

                <Section>
                    <p>
                        The Hearts &amp; Mind Caregiver Circle is a safe, welcoming space designed for
                        connection, reflection, and support. Caregiving comes with deep responsibility and
                        constant transitions, which can feel overwhelming. This program ensures caregivers
                        have a place to pause, share, and be supported.
                    </p>
                </Section>

                <Section>
                    <h2>What This Space Offers</h2>
                    <BulletList>
                        {spaceOffers.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </BulletList>
                </Section>

                <Section>
                    <h2>How It Works</h2>
                    <BulletList>
                        {howItWorksItems.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </BulletList>
                </Section>

                <Section>
                    <h2>Our Approach</h2>
                    <p>
                        This is a peer-based support space grounded in trauma-informed care, cultural awareness,
                        and real-life caregiving experiences. It is not clinical therapy, but a supportive
                        environment to reduce isolation and strengthen caregiver wellbeing. When additional
                        support is needed, we connect caregivers to the right resources.
                    </p>
                    <p>
                        Alongside peer support, we host workshops facilitated by trained professionals,
                        including mental health therapists, counsellors, and wellness practitioners. These
                        sessions provide guidance, emotional support, and practical tools for daily caregiving.
                    </p>
                </Section>

                <Section>
                    <h2>Who Can Join</h2>
                    <BulletList>
                        {whoCanJoinItems.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </BulletList>
                </Section>

                <VoiceSection>
                    <h2>Caregiver Voices</h2>
                    <p className="voice-note">Real stories from caregivers in our community.</p>
                    <VoiceCard>
                        <p>
                            "You don’t have to carry everything on your own. This space reminded me I’m not
                            alone."
                        </p>
                    </VoiceCard>
                </VoiceSection>

                <CTASection>
                    <h2>You don’t have to do this alone.</h2>
                    <CTAButton to="/get-help">Join the Caregiver Circle</CTAButton>
                </CTASection>
            </PageContainer>
            <Footer />
        </>
    )
}

export default CaregiverCircle
