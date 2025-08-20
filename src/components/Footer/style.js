import styled from "styled-components"

export const FooterContainer = styled.footer`
    background: #8D24B4;
    color: white;
    padding: 60px 20px 40px;

    .copyright {
        border-top: solid 1px #FFD700;
        padding: 10px;
        display:flex;
        justify-content: center;
        align-items: center;

        text-align: center;
        margin-top: 20px;
        font-size: 0.9rem;
        color: #f0f0f0;
    }
`

export const FooterContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 30px;
        text-align: center;
    }
`

export const FooterSection = styled.div`
    p {
        margin: 0;
        color: #f0f0f0;
        font-size: 1rem;
        line-height: 1.5;
    }
`

export const FooterTitle = styled.h3`
    font-size: 1.3rem;
    color: #FFD700;
    margin-bottom: 20px;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
`

export const FooterLink = styled.a`
    display: block;
    color: #f0f0f0;
    text-decoration: none;
    margin-bottom: 12px;
    font-size: 1rem;
    line-height: 1.5;
    transition: color 0.3s ease;

    &:hover {
        color: #FFD700;
    }
`

export const SocialLinks = styled.div`
    display: flex;
    gap: 20px;

    @media (max-width: 768px) {
        justify-content: center;
    }
`

export const SocialLink = styled.a`
    color: #f0f0f0;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    transition: all 0.3s ease;

    svg {
        width: 24px;
        height: 24px;
    }

    &:hover {
        color: #8D24B4;
        background: #FFD700;
        border-color: #FFD700;
        transform: translateY(-2px);
    }
` 