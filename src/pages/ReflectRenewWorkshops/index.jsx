import { useEffect, useState } from "react"
import Nav from "../../components/Nav"
import Footer from "../../components/Footer"
import Workshop1 from "../../assets/Workshop/Workshop-1.jpg"
import Workshop2 from "../../assets/Workshop/Workshop-2.jpg"
import Workshop3 from "../../assets/Workshop/Workshop-3.jpg"
import Workshop4 from "../../assets/Workshop/Workshop-4.jpg"
import {
    PageContainer,
    HeroSection,
    Section,
    BulletList,
    ImpactGrid,
    ImpactCard,
    VoicesSection,
    VoiceCard,
    GallerySection,
    GalleryGrid,
    GalleryItem,
    ImagePreviewOverlay,
    ImagePreviewContent,
    ImagePreviewClose,
    CTASection,
    CTAButton
} from "./style"

const galleryImages = [
    { src: Workshop1, alt: "Caregivers in a workshop circle discussion" },
    { src: Workshop2, alt: "Workshop facilitator supporting caregiver reflection" },
    { src: Workshop3, alt: "Participants collaborating during personal development activity" },
    { src: Workshop4, alt: "Caregivers engaged in a Reflect and Renew session" }
]

const workshopTopics = [
    "Financial literacy (budgeting, saving, investing)",
    "Parenting strategies and personal development",
    "Business and entrepreneurship basics",
    "Career and education development",
    "Emotional wellness and self-awareness"
]

const impactItems = [
    "Increased confidence and self-worth",
    "Stronger financial awareness",
    "Improved emotional resilience"
]

const ReflectRenewWorkshops = () => {
    const [activeImage, setActiveImage] = useState(null)

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === "Escape") {
                setActiveImage(null)
            }
        }

        if (activeImage) {
            window.addEventListener("keydown", handleEsc)
        }

        return () => window.removeEventListener("keydown", handleEsc)
    }, [activeImage])

    return (
        <>
            <Nav />
            <PageContainer>
                <HeroSection>
                    <div className="content">
                        <h1>Reflect &amp; Renew Workshops</h1>
                        <p>Supporting you as a person, not just a caregiver.</p>
                    </div>
                </HeroSection>

                <Section>
                    <p>
                        As a caregiver, you pour so much of yourself into others and it is easy to lose sight of your own needs, your own growth, and your own well-being. This is why our <b>Reflect &amp; Renew Workshops</b> are one of our most impactful programs.
                        Hosted monthly, these workshops are designed to give you intentional space to pause, reflect, and invest in yourself. Each session focuses on themes that matter most to you. We cover topics on parenting strategies, self-care and personal development, financial empowerment, and more. We listen to your feedback and shape every workshop to be practical, inspiring, and deeply responsive to your reality.
                        Our community members often tell us how these workshops help them feel seen, supported, and re-energized. Our Reflect & Renew workshop is about healing, growing, and remembering that your well-being as a foster/kinship caregiver matters too.
                        Our workshops are here to remind you that you deserve care, you deserve growth, and you deserve community.
                    </p>
                    <br />
                    <p>
                        Hosted monthly, our Reflect &amp; Renew Workshops give foster and kinship caregivers
                        intentional space to pause, reflect, and invest in themselves.
                    </p>
                </Section>

                <Section>
                    <h2>What We Cover</h2>
                    <BulletList>
                        {workshopTopics.map((topic) => (
                            <li key={topic}>{topic}</li>
                        ))}
                    </BulletList>
                </Section>

                <Section>
                    <h2>Why This Matters</h2>
                    <p>
                        Caregivers often lose sight of their own needs. These workshops restore identity, build
                        confidence, and create long-term stability beyond caregiving.
                    </p>
                </Section>

                <Section>
                    <h2>Our Impact</h2>
                    <ImpactGrid>
                        {impactItems.map((item) => (
                            <ImpactCard key={item}>{item}</ImpactCard>
                        ))}
                    </ImpactGrid>
                </Section>

                <VoicesSection>
                    <h2>Caregiver Voices</h2>
                    <p className="voices-note">Real caregiver moments from Reflect &amp; Renew sessions.</p>
                    <div className="voices-grid">
                        <VoiceCard>
                            <p>"This reminded me that I am still me outside of fostering."</p>
                        </VoiceCard>
                    </div>
                </VoicesSection>

                <GallerySection>
                    <h2>Photo Gallery</h2>
                    <GalleryGrid>
                        {galleryImages.map((image) => (
                            <GalleryItem
                                key={image.src}
                                type="button"
                                onClick={() => setActiveImage(image)}
                                aria-label={`Preview ${image.alt}`}
                            >
                                <img src={image.src} alt={image.alt} loading="lazy" />
                            </GalleryItem>
                        ))}
                    </GalleryGrid>
                </GallerySection>

                <CTASection>
                    <h2>Join an upcoming workshop.</h2>
                    <CTAButton to="/events">Register Now</CTAButton>
                </CTASection>
            </PageContainer>

            {activeImage && (
                <ImagePreviewOverlay onClick={() => setActiveImage(null)}>
                    <ImagePreviewContent onClick={(event) => event.stopPropagation()}>
                        <ImagePreviewClose
                            type="button"
                            onClick={() => setActiveImage(null)}
                            aria-label="Close image preview"
                        >
                            ×
                        </ImagePreviewClose>
                        <img src={activeImage.src} alt={activeImage.alt} />
                    </ImagePreviewContent>
                </ImagePreviewOverlay>
            )}

            <Footer />
        </>
    )
}

export default ReflectRenewWorkshops
