import styled from "styled-components"
import { Link } from "react-router-dom"

export const PageContainer = styled.main`
    background: #f7f8ff;
    color: #252a55;
    padding-bottom: 80px;
`

export const HeroSection = styled.section`
    background: linear-gradient(135deg, #5954d6 0%, #7a62e3 100%);
    color: #fff;
    text-align: center;
    padding: 110px 20px 90px;

    .content {
        max-width: 980px;
        margin: 0 auto;
    }

    h1 {
        font-size: clamp(1.9rem, 3.7vw, 3.4rem);
        margin-bottom: 16px;
    }

    p {
        font-size: clamp(1.05rem, 2vw, 1.4rem);
        margin: 0;
        opacity: 0.96;
    }
`

export const Section = styled.section`
    max-width: 1000px;
    margin: 0 auto;
    padding: 48px 20px 0;

    h2 {
        color: #5954d6;
        font-size: clamp(1.7rem, 2.4vw, 2.2rem);
        margin-bottom: 14px;
    }

    p {
        font-size: 1.08rem;
        line-height: 1.75;
        color: #3d4379;
        margin: 0 0 14px;
    }
`

export const BulletList = styled.ul`
    margin: 0;
    padding-left: 22px;
    display: grid;
    gap: 12px;

    li {
        font-size: 1.04rem;
        color: #3d4379;
        line-height: 1.5;
    }
`

export const VoiceSection = styled.section`
    max-width: 1000px;
    margin: 0 auto;
    padding: 56px 20px 0;

    h2 {
        color: #5954d6;
        font-size: clamp(1.7rem, 2.4vw, 2.2rem);
        margin-bottom: 10px;
    }

    .voice-note {
        color: #565c90;
        margin-bottom: 20px;
    }
`

export const VoiceCard = styled.blockquote`
    margin: 0;
    background: #fff;
    border: 1px solid #e5e7ff;
    border-radius: 14px;
    padding: 24px;
    box-shadow: 0 10px 24px rgba(89, 84, 214, 0.12);

    p {
        margin: 0;
        color: #3d4379;
        line-height: 1.65;
        font-size: 1.04rem;
    }
`

export const CTASection = styled.section`
    max-width: 1000px;
    margin: 0 auto;
    padding: 70px 20px 0;
    text-align: center;

    h2 {
        color: #5954d6;
        font-size: clamp(1.8rem, 2.8vw, 2.6rem);
        margin-bottom: 20px;
    }
`

export const CTAButton = styled(Link)`
    display: inline-block;
    background: #5954d6;
    color: #fff;
    text-decoration: none;
    font-weight: 700;
    border-radius: 10px;
    padding: 14px 28px;
    transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;

    &:hover {
        background: #4743b0;
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(71, 67, 176, 0.3);
    }
`
