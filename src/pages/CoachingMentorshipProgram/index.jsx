import { useEffect, useState } from "react"
import Nav from "../../components/Nav"
import Footer from "../../components/Footer"
import Coaching1 from "../../assets/Coaching/Coaching-and-Mentorship-1.jpg"
import Coaching2 from "../../assets/Coaching/Coaching-and-Mentorship-2.jpg"
import Coaching3 from "../../assets/Coaching/Coaching-and-Mentorship-3.jpg"
import Coaching4 from "../../assets/Coaching/Coaching-and-Mentorship-4.jpg"
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
    { src: Coaching1, alt: "Caregiver and mentor in one-on-one conversation" },
    { src: Coaching2, alt: "Mentorship session focused on caregiver guidance" },
    { src: Coaching3, alt: "Supportive coaching discussion between caregivers" },
    { src: Coaching4, alt: "Mentor helping caregiver map practical next steps" }
]

const supportItems = [
    "One-on-one mentorship",
    "Practical advice",
    "Step-by-step guidance through caregiving responsibilities",
    "Ongoing encouragement"
]

const impactItems = ["Increased confidence", "Reduced overwhelm", "Stronger sense of community"]

const CoachingMentorshipProgram = () => {
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
                        <h1>Coaching &amp; Mentorship Program</h1>
                        <p>Guidance from people who understand.</p>
                    </div>
                </HeroSection>

                <Section>

                    <p>Becoming or continuing as a foster or kinship caregiver is a journey filled with responsibilities, expectations, and challenges. You are asked to navigate relationships with children, their families, and government systems, all while managing your own household and well-being. It can feel overwhelming, especially if you are just starting out.
                        Our <b>Coaching & Mentorship Program</b> is designed to walk alongside you whether you are new to caregiving or already experienced. Through guided, step-by-step sessions, we help you understand the responsibilities of caregiving, the expectations from yourself, the children, their families, and the government agencies you may interact with.
                        We tell you what to expect and we mentor you through it, offering encouragement, clarity, and practical tools. You will gain confidence, insight, and a stronger sense of community as you navigate the realities of caregiving. Most importantly, we show you the ways Hearts and Mind can support you on this journey.
                        This program is about equipping you to thrive as a caregiver because when you are empowered, the children in your care flourish.</p>
                    
                    <br />
                    <p>
                        Becoming or continuing as a foster or kinship caregiver is a journey filled with
                        responsibilities and challenges. Our Coaching &amp; Mentorship Program connects caregivers
                        with experienced mentors and professionals who provide guidance and encouragement.
                    </p>
                </Section>

                <Section>
                    <h2>What Support Looks Like</h2>
                    <BulletList>
                        {supportItems.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </BulletList>
                </Section>

                <Section>
                    <h2>Why This Matters</h2>
                    <p>
                        This program ensures caregivers are not navigating alone. Mentorship builds confidence
                        and clarity in managing relationships with children, families, and systems.
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
                    <p className="voices-note">Real photos and moments from our mentorship community.</p>
                    <div className="voices-grid">
                        <VoiceCard>
                            <p>"Having someone to talk to who understands changed everything."</p>
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
                    <h2>Get matched with a mentor.</h2>
                    <CTAButton to="/get-help">Sign Up</CTAButton>
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

export default CoachingMentorshipProgram
