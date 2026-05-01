import { useEffect, useState } from "react"
import Nav from "../../components/Nav"
import Footer from "../../components/Footer"
import ReliefSupport from "../../assets/Relief/Relief Support.jpeg"
import ReliefSupport1 from "../../assets/Relief/Relief Support 1.jpeg"
import ReliefSupport2 from "../../assets/Relief/Relief Support 2.jpeg"
import ReliefSupport3 from "../../assets/Relief/Relief Support 3.jpeg"
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
    {
        src: ReliefSupport,
        alt: "Caregiver organizing a calm home space"
    },
    {
        src: ReliefSupport1,
        alt: "Fresh groceries and essentials prepared in a kitchen"
    },
    {
        src: ReliefSupport2,
        alt: "Neat and welcoming family living room"
    },
    {
        src: ReliefSupport3,
        alt: "Support worker helping with daily home tasks"
    }
]

const supportItems = [
    "Laundry support",
    "Light housekeeping and home organization",
    "Meal preparation support",
    "Grocery and essential item assistance",
    "Decluttering and move-in/move-out support",
    "Errands and day-to-day tasks"
]

const impactItems = [
    "Reduced stress and burnout",
    "More stable and supportive home environments",
    "Increased ability to focus on children and connections"
]

const HeartsHomeReliefSupport = () => {
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
                        <h1>Hearts &amp; Home Relief Support</h1>
                        <p>Practical support that meets you where you are.</p>
                    </div>
                </HeroSection>

                <Section>
                    <p>
                        Care-giving can feel overwhelming, and sometimes the most powerful support is someone
                        showing up to help with everyday tasks. Our Hearts &amp; Home Relief Support program
                        provides direct, hands-on help to foster parents and kinship caregivers in their homes.
                    </p>
                </Section>

                <Section>
                    <h2>What We Provide</h2>
                    <BulletList>
                        {supportItems.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </BulletList>
                </Section>

                <Section>
                    <h2>Why This Matters</h2>
                    <p>
                        Caregiver burnout is one of the leading causes of placement breakdown. By easing the
                        daily load, caregivers can focus on relationships and stability.
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
                    <p className="voices-note">Real caregiver stories and moments from support visits.</p>
                    <div className="voices-grid">
                        <VoiceCard>
                            <p>
                                “I didn’t realize how much I needed help until they showed up. It gave me
                                space to breathe again.”
                            </p>
                        </VoiceCard>
                        <VoiceCard>
                            <p>
                                “Having someone help with the basics made such a difference in how I showed
                                up for my home.”
                            </p>
                        </VoiceCard>
                    </div>
                </VoicesSection>

                <GallerySection>
                    <h2>Image Gallery</h2>
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
                    <h2>Need support in your home?</h2>
                    <CTAButton to="/get-help">Request Support</CTAButton>
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

export default HeartsHomeReliefSupport
