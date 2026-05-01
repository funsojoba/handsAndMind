import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import { Container } from "./style";




const PrivacyPolicy = () =>{
    return <>
        <Nav />
            <Container>
                <div className="content">
                    <div className="title">
                        <h2>HeartsandMind Privacy Policy</h2>
                    </div>
                    <div className="text">
                        <h4>Introduction</h4>
                        <p>
                            
                            HeartsandMind ("we", "us", or "our") is committed to protecting the privacy and security of
                            your personal information. This Privacy Policy explains how we collect, use, disclose, and
                            safeguard your information when you visit our website heartsandmind.org, submit forms
                            to us, or otherwise interact with our services.
                        </p>
                        <p>We exist to support foster parents, kinship caregivers and families with dignity and respect, and that includes
                        handling your data with the utmost care and integrity.</p>
                    </div>

                    <div className="text">
                        <h4>Information We Collect</h4>
                        <p>
                            We collect information that you provide directly to us, including:
                        </p>
                        <ul>
                            <li>
                                <strong>Personal Identifiers:</strong> Such as your name, email address, phone number, and home
                                address when you fill out a form to request support, volunteer, or contact us.
                            </li>
                            <li>
                                <strong>Sensitive Information:</strong> With your explicit consent, we may collect information
                                necessary to provide our services, such as details about your foster family
                                composition to better match you with resources or volunteers. This information is
                                treated with the highest level of security and confidentiality.
                            </li>
                        </ul>
                    </div>
                    <div className="text">
                        <h4>How We Use Your Information</h4>
                        <p>
                            We use the information we collect for the following purposes:
                        </p>
                        <ul>
                            <li>
                                To provide, schedule, and improve our services (e.g., connecting you with a
                                volunteer, registering you for a workshop).
                            </li>
                            <li>
                                To communicate with you about our services, events, and updates that we believe
                                will be of interest to you (you can opt-out at any time).
                            </li>
                            <li>To respond to your comments, questions, and requests</li>
                            <li>To comply with legal obligations and protect the rights and safety of our community.</li>
                        </ul>
                    </div>
                    <div className="text">
                        <h4>How We Share Your Information</h4>
                        <p>
                            <strong>We do not sell or rent your personal information to third parties.</strong> We only share your information in the following limited circumstances:
                        </p>
                        <ul>
                            <li>
                                <strong>With Your Consent:</strong>  We may share information with specific third parties when we
                                have your explicit permission (e.g., connecting a volunteer to your home after you
                                have approved the match).
                            </li>
                            <li>
                                <strong>Service Providers:</strong> We work with trusted third-party vendors who help us operate
                                our website and services (e.g., our form provider, email marketing service). These
                                partners are bound by strict data protection agreements and are only permitted to
                                use your data to provide services to us.
                            </li>
                            <li><strong>As Required by Law:</strong> We may disclose information if required to do so by law or in
                            the good-faith belief that such action is necessary to comply with state and federal
                            laws or to protect the safety of a child or vulnerable person.</li>
                        </ul>
                    </div>
                    
                    <div className="text">
                        <h4>Social Media Interactions</h4>
                        <p>
                            Your interactions with us on social media platforms (including but not limited to Instagram, Facebook, and LinkedIn) are also subject to this Privacy Policy
                        </p>
                        <ul>
                            <li>
                                <strong>Information We See:</strong> When you comment on, like, or share our posts, or send us a
                                direct message, we can see your public profile and the information you choose to
                                share with us. We use this information to respond to your inquiries, engage with
                                our community, and improve our services.
                            </li>
                            <li>
                                <strong>Platform Policies:</strong> Please note that any information you post on our social media
                                pages is also subject to the privacy policy of the respective social platform. We
                                encourage you to review the privacy policies of these platforms to understand how
                                they collect, use, and share your data
                            </li>
                            <li><strong>No Over-Sharing:</strong> For your own privacy and security, we strongly advise against
                                sending sensitive personal information (e.g., full address, detailed foster care status)
                                through public comments or direct messages on social media. Please use the
                                secure contact forms on our website for sensitive communications.</li>
                        </ul>
                    </div>

                    <div className="text">
                        <h4>Data Security</h4>
                        <p>
                            We implement appropriate technical and organizational measures to protect your
                            personal information against unauthorized access, alteration, disclosure, or destruction.
                            While no system is 100% secure, we strive to use commercially acceptable means to
                            protect your information.
                        </p>
                    </div>

                    <div className="text">
                        <h4>Your Choices and Rights</h4>
                        <p>
                            You have the right to:
                        </p>
                        <ul>
                            <li>
                                <strong>Access and Update</strong> the personal information we hold about you.
                            </li>
                            <li>
                                <strong>Request Deletion</strong> of your personal information, subject to certain legal exceptions.
                            </li>
                            <li><strong>Opt-out</strong> of receiving promotional communications from us by using the
                                unsubscribe link in our emails or contacting us directly.
                                To exercise any of these rights, please contact us at <a href="mainto:privacy@heartsandmind.org" target="_blank">privacy@heartsandmind.org</a></li>
                        </ul>
                    </div>
                    
                    <div className="text">
                        <h4>Children's Privacy</h4>
                        <p>
                            Our website and services are not directed at children under the age of 13. We do not
                            knowingly collect personal information from children. If you are a parent or guardian and
                            believe your child has provided us with information, please contact us, and we will delete
                            it.
                        </p>
                    </div>
                    
                    <div className="text">
                        <h4>Changes to This Privacy Policy</h4>
                        <p>
                            We may update this policy from time to time. The updated version will be indicated by the
                            "Last Updated" date at the top of this page. We encourage you to review this policy
                            periodically
                        </p>
                    </div>
                    
                    <div className="text">
                        <h4>Contact Us</h4>
                        <p>
                            If you have any questions, concerns, or requests regarding this Privacy Policy or our data
                            practices, please contact us at:
                        </p>
                    </div>
                    
                    <div className="text">
                        <h4>HeartsandMind</h4>
                        <p>Email: <a href="mainto:privacy@heartsandmind.org" target="_blank">privacy@heartsandmind.org</a></p>
                        <p>Phone: <a href="tel:(905) 723-6908">(905) 723-6908</a></p>
                    </div>

                </div>
            </Container>
        <Footer />
    </>
}


export default PrivacyPolicy