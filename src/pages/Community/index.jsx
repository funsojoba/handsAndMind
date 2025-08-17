import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import Nav from "../../components/Nav"
import Footer from "../../components/Footer"
import { useHashNavigation } from "../../utils/scrollToSection"
import { 
    CommunityContainer, 
    HeroSection, 
    CommunityContent,
    Section,
    CardGrid,
    Card,
    TestimonialSection,
    StatsSection,
    CTAButton
} from "./style"

const Community = () => {
    const location = useLocation()
    const handleHashNavigation = useHashNavigation(location)

    // Handle scroll to section if hash exists
    useEffect(() => {
        const hash = location.hash
        if (hash) {
            setTimeout(() => {
                handleHashNavigation()
            }, 300)
        }
    }, [location, handleHashNavigation])

    return (
        <>
        <Nav />
        <CommunityContainer>
            <HeroSection>
                <div className="hero-content">
                    <h1 className="montserrat-bold">Our Community</h1>
                    <p>Building connections, fostering hope, and creating lasting change for foster families</p>
                </div>
            </HeroSection>

            <CommunityContent>
                <div className="content-container">
                    <Section id="about" style={{ scrollMarginTop: '100px' }}>
                        <h2 className="section-title montserrat-bold">About Hearts & Mind Brunches</h2>
                        <p className="section-description">
                            Our community gatherings are more than just meals - they're spaces where foster families 
                            find support, connection, and understanding. Through our Hearts & Mind Brunches, we create 
                            opportunities for families to share experiences, build relationships, and access resources 
                            in a warm, welcoming environment.
                        </p>
                        
                        <CardGrid>
                            <Card>
                                <div className="card-icon">🤝</div>
                                <h3>Peer Support</h3>
                                <p>Connect with other foster families who understand your journey and can offer guidance, empathy, and practical advice.</p>
                            </Card>
                            <Card>
                                <div className="card-icon">🍽️</div>
                                <h3>Nourishing Meals</h3>
                                <p>Enjoy delicious, culturally diverse meals prepared with love by our community volunteers and local partners.</p>
                            </Card>
                            <Card>
                                <div className="card-icon">💝</div>
                                <h3>Resource Access</h3>
                                <p>Access information about local services, support programs, and community resources designed for foster families.</p>
                            </Card>
                        </CardGrid>
                    </Section>

                    <Section>
                        <h2 className="section-title montserrat-bold">What to Expect</h2>
                        <div className="expectations-grid">
                            <div className="expectation-item">
                                <h4>Welcoming Atmosphere</h4>
                                <p>Our brunches are held in comfortable, family-friendly spaces where everyone feels welcome and valued.</p>
                            </div>
                            <div className="expectation-item">
                                <h4>Cultural Celebration</h4>
                                <p>We honor and celebrate the diverse cultural backgrounds of our community through food, activities, and conversation.</p>
                            </div>
                            <div className="expectation-item">
                                <h4>Child-Friendly Activities</h4>
                                <p>While parents connect, children can enjoy supervised activities, games, and crafts in a safe, engaging environment.</p>
                            </div>
                            <div className="expectation-item">
                                <h4>Professional Support</h4>
                                <p>Connect with social workers, therapists, and other professionals who specialize in foster care and family support.</p>
                            </div>
                        </div>
                    </Section>

                    <TestimonialSection>
                        <h2 className="section-title montserrat-bold">Community Voices</h2>
                        <div className="testimonials-grid">
                            <div className="testimonial">
                                <div className="quote">"The Hearts & Mind Brunches have been a lifeline for our family. We've made lasting friendships and found the support we needed during challenging times."</div>
                                <div className="author">- Sarah & Mike, Foster Parents</div>
                            </div>
                            <div className="testimonial">
                                <div className="quote">"As a new foster parent, I was overwhelmed. The community here helped me feel less alone and gave me practical advice that made all the difference."</div>
                                <div className="author">- Jennifer, First-time Foster Parent</div>
                            </div>
                            <div className="testimonial">
                                <div className="quote">"Our children love coming to the brunches. They've made friends with other foster kids and feel like they belong to a special community."</div>
                                <div className="author">- David & Lisa, Foster Family</div>
                            </div>
                        </div>
                    </TestimonialSection>

                    <StatsSection>
                        <h2 className="section-title montserrat-bold">Our Impact</h2>
                        <div className="stats-grid">
                            <div className="stat-item">
                                <div className="stat-number">500+</div>
                                <div className="stat-label">Families Served</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">50+</div>
                                <div className="stat-label">Community Events</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">200+</div>
                                <div className="stat-label">Volunteers</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">95%</div>
                                <div className="stat-label">Satisfaction Rate</div>
                            </div>
                        </div>
                    </StatsSection>

                    <Section>
                        <h2 className="section-title montserrat-bold">Join Our Community</h2>
                        <p className="section-description">
                            Ready to connect with other foster families and be part of our supportive community? 
                            Join us at our next Hearts & Mind Brunch and experience the warmth and connection 
                            that makes our community special.
                        </p>
                        <div className="cta-buttons">
                            <CTAButton onClick={() => window.location.href = '/events'}>
                                View Upcoming Events
                            </CTAButton>
                            <CTAButton onClick={() => window.location.href = '/volunteer'}>
                                Volunteer With Us
                            </CTAButton>
                        </div>
                    </Section>
                </div>
            </CommunityContent>
        </CommunityContainer>
        <Footer />
        </>
    )
}

export default Community
