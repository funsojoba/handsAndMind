import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import { AboutContainer, HeroSection, CommunitySection, BrunchSection, MembershipSection } from "./style"

const About = () => {
    return (
        <>
        <NavBar/>
        <AboutContainer>
            <HeroSection>
                <div className="hero-content">
                    <h1 className="montserrat-bold">About Us</h1>
                    <p>Building a community where foster parents find support, connection, and healing</p>
                </div>
            </HeroSection>

            <CommunitySection>
                <div className="section-container">
                    <h2 className="section-title montserrat-bold">Our Community</h2>
                    <p className="section-description">
                        At Hearts & Mind, we believe healing happens in the community. We're dedicated to creating 
                        a supportive network where foster parents and kinship caregivers can find understanding, 
                        resources, and genuine connections.
                    </p>
                </div>
            </CommunitySection>

            <BrunchSection>
                <div className="section-container">
                    <div className="brunch-content">
                        <div className="brunch-text">
                            <h2 className="section-title montserrat-bold">About Hearts & Mind Brunches</h2>
                            <h3 className="brunch-headline">"Where Foster Parents Find Their Village"</h3>
                            <p className="brunch-subhead">
                                Monthly gatherings to nourish your plate, your heart, and your spirit.
                            </p>
                            <div className="brunch-body">
                                <p>
                                    At Hearts & Mind, we believe healing happens in the community. Our monthly
                                    Hearts & Mind Brunches are more than just meals—they're a lifeline for foster
                                    parents and kinship caregivers. Join us to:
                                </p>
                                <ul className="benefits-list">
                                    <li>Connect with others who truly understand the journey.</li>
                                    <li>Recharge over chef-prepared comfort food.</li>
                                    <li>Access resources in a judgment-free zone.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="brunch-visual">
                            <div className="visual-element">🍽️</div>
                            <div className="visual-element">💜</div>
                            <div className="visual-element">🤝</div>
                        </div>
                    </div>
                </div>
            </BrunchSection>

            <MembershipSection>
                <div className="section-container">
                    <h2 className="section-title montserrat-bold">Membership</h2>
                    <div className="membership-options">
                        <div className="membership-card">
                            <h3>Sign In</h3>
                            <p>Already a member? Access your account and resources.</p>
                            <button className="membership-btn signin-btn">
                                Sign In
                            </button>
                            <small>Please refer to BSB website</small>
                        </div>
                        <div className="membership-card">
                            <h3>Join Now</h3>
                            <p>Become part of our supportive community today.</p>
                            <button className="membership-btn join-btn">
                                Join Now
                            </button>
                            <small>Please refer to BSB website</small>
                        </div>
                    </div>
                </div>
            </MembershipSection>
        </AboutContainer>
        <Footer />
        </>
    )
}

export default About