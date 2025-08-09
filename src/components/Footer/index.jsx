import { FooterContainer, FooterContent, FooterSection, FooterTitle, FooterLink, SocialLinks, SocialLink } from "./style"

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterSection>
                    <FooterTitle>Start A Conversation</FooterTitle>
                    <FooterLink href="mailto:info@heartsandmind.org">info@heartsandmind.org</FooterLink>
                    <FooterLink href="mailto:heartsandmindfc@gmail.com">heartsandmindfc@gmail.com</FooterLink>
                    <FooterLink href="tel:+14376883727">+1(437) 688 3727</FooterLink>
                </FooterSection>

                <FooterSection>
                    <FooterTitle>Visit Our Office</FooterTitle>
                    <p>Ajax ON Canada</p>
                </FooterSection>

                <FooterSection>
                    <FooterTitle>Find Us On</FooterTitle>
                    <SocialLinks>
                        <SocialLink href="#" target="_blank" rel="noopener noreferrer">
                            Facebook
                        </SocialLink>
                        <SocialLink href="#" target="_blank" rel="noopener noreferrer">
                            Instagram
                        </SocialLink>
                    </SocialLinks>
                </FooterSection>
            </FooterContent>
        </FooterContainer>
    )
}

export default Footer 