import { useEffect, useState } from "react"
import Nav from "../../components/Nav"
import Footer from "../../components/Footer"
import Brunch1 from "../../assets/Brunch/Brunch-1.jpg"
import Brunch2 from "../../assets/Brunch/Brunch-2.jpg"
import Brunch3 from "../../assets/Brunch/Brunch-3.jpg"
import Brunch4 from "../../assets/Brunch/Brunch-4.jpg"
import Brunch5 from "../../assets/Brunch/Brunch-5.jpg"
import Brunch6 from "../../assets/Brunch/Brunch-6.jpg"
import Brunch7 from "../../assets/Brunch/Brunch-7.jpg"
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
    { src: Brunch1, alt: "Caregivers gathered around a brunch table" },
    { src: Brunch2, alt: "Warm meal shared at Hearts and Brunch series" },
    { src: Brunch3, alt: "Caregivers talking and connecting over brunch" },
    { src: Brunch4, alt: "Community brunch setup for foster caregivers" },
    { src: Brunch5, alt: "Participants enjoying a supportive brunch circle" },
    { src: Brunch6, alt: "Shared laughter during monthly brunch event" },
    { src: Brunch7, alt: "Caregivers building peer connection at brunch" }
]

const brunchItems = ["Shared meals", "Open conversations", "Peer connection"]

const impactItems = [
    "Reduced isolation",
    "Stronger peer relationships",
    "Renewed energy for caregiving"
]

const HeartsBrunchSeries = () => {
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
                        <h1>Hearts &amp; Brunch Series</h1>
                        <p>Connection, community, and care.</p>
                    </div>
                </HeroSection>

                <Section>
                    <p>
                        Care-giving is one of the most rewarding journeys, but it can also feel heavy and isolating. As a caregiver, you carry responsibilities that few truly understand, and sometimes what you need most is simply to sit down with others who truly get it. This is why we created the <b>Hearts & Brunch Series</b>; a monthly gathering where foster parents and kinship caregivers come together for a hearty meal and warm, relaxing conversation.
                        The aim is to provide nourishment for your body and your soul. Around our brunch table, you will find laughter, shared stories, and the comfort of knowing you are not alone. You will meet others who face similar challenges, celebrate victories together, and discover encouragement in the simple act of connection.
                        Our brunches give you space to pause, breathe, and connect with yourself first, then fellow caregivers. They remind you that community care is truly a necessity. At Hearts and Mind, we believe that when you show up, you are not only receiving support but also offering it to someone else who may need to hear your story. Together, we build bonds that strengthen us for the challenges ahead and remind us of the joy in care-giving.
                        Every brunch is a chance to be seen, to be valued, and to leave re-energized. 
                        When you are supported, the children in your care thrive.
                    </p>
                    <br />
                     <p>
                        Care-giving is rewarding but can feel heavy and isolating. Our Hearts &amp; Brunch
                        Series is a monthly gathering where foster parents and kinship caregivers come together
                        for a hearty meal and warm conversation.
                    </p>
                </Section>

                <Section>
                    <h2>What Happens at Brunch</h2>
                    <BulletList>
                        {brunchItems.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </BulletList>
                </Section>

                <Section>
                    <h2>Why This Matters</h2>
                    <p>
                        Brunchin creates a space where caregivers feel seen, heard, and connected. It is
                        nourishment for both body and soul.
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
                    <p className="voices-note">Real photos and moments from our monthly brunch gatherings.</p>
                    <div className="voices-grid">
                        <VoiceCard>
                            <p>"I didn’t realize how much I needed this until I walked in."</p>
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
                    <h2>Join our next brunch.</h2>
                    <CTAButton to="/events">RSVP Now</CTAButton>
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

export default HeartsBrunchSeries
