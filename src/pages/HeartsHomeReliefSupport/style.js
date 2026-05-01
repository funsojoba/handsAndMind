import styled from "styled-components"
import { Link } from "react-router-dom"

export const PageContainer = styled.main`
    background: #f8f7fb;
    color: #2d2640;
    padding-bottom: 80px;
`

export const HeroSection = styled.section`
    background: linear-gradient(135deg, #8d24b4 0%, #e91e63 100%);
    color: #fff;
    text-align: center;
    padding: 110px 20px 90px;

    .content {
        max-width: 900px;
        margin: 0 auto;
    }

    h1 {
        font-size: clamp(2.2rem, 4vw, 4rem);
        margin-bottom: 16px;
    }

    p {
        font-size: clamp(1.1rem, 2.1vw, 1.5rem);
        margin: 0;
        opacity: 0.95;
    }
`

export const Section = styled.section`
    max-width: 1000px;
    margin: 0 auto;
    padding: 48px 20px 0;

    h2 {
        color: #8d24b4;
        font-size: clamp(1.7rem, 2.6vw, 2.3rem);
        margin-bottom: 14px;
    }

    p {
        font-size: 1.1rem;
        line-height: 1.75;
        color: #4b4860;
        margin: 0;
    }
`

export const BulletList = styled.ul`
    margin: 0;
    padding-left: 22px;
    display: grid;
    gap: 12px;

    li {
        font-size: 1.06rem;
        color: #4b4860;
        line-height: 1.5;
    }
`

export const ImpactGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 16px;
`

export const ImpactCard = styled.div`
    background: #fff;
    border: 1px solid #ece7f5;
    border-left: 4px solid #e91e63;
    border-radius: 12px;
    padding: 18px;
    box-shadow: 0 8px 22px rgba(80, 39, 112, 0.08);
    color: #3f3654;
    line-height: 1.5;
`

export const VoicesSection = styled.section`
    max-width: 1000px;
    margin: 0 auto;
    padding: 56px 20px 0;

    h2 {
        color: #8d24b4;
        font-size: clamp(1.7rem, 2.6vw, 2.3rem);
        margin-bottom: 10px;
    }

    .voices-note {
        color: #5f5773;
        margin-bottom: 20px;
    }

    .voices-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 16px;
    }
`

export const VoiceCard = styled.blockquote`
    margin: 0;
    background: #fff;
    border: 1px solid #ece7f5;
    border-radius: 14px;
    padding: 24px;
    box-shadow: 0 10px 24px rgba(80, 39, 112, 0.08);

    p {
        margin: 0;
        color: #3f3654;
        line-height: 1.65;
        font-size: 1.04rem;
    }
`

export const GallerySection = styled.section`
    max-width: 1100px;
    margin: 0 auto;
    padding: 56px 20px 0;

    h2 {
        color: #8d24b4;
        font-size: clamp(1.7rem, 2.6vw, 2.3rem);
        margin-bottom: 20px;
    }
`

export const GalleryGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 14px;
`

export const GalleryItem = styled.button`
    margin: 0;
    padding: 0;
    width: 100%;
    border-radius: 14px;
    overflow: hidden;
    background: #fff;
    border: 1px solid #ece7f5;
    box-shadow: 0 10px 24px rgba(80, 39, 112, 0.08);
    aspect-ratio: 4 / 3;
    cursor: pointer;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform 0.35s ease;
    }

    &:hover img {
        transform: scale(1.05);
    }
`

export const ImagePreviewOverlay = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(20, 14, 33, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    z-index: 1200;
`

export const ImagePreviewContent = styled.div`
    position: relative;
    width: min(960px, 100%);
    max-height: 90vh;
    border-radius: 14px;
    overflow: hidden;
    box-shadow: 0 18px 42px rgba(0, 0, 0, 0.35);
    background: #fff;

    img {
        width: 100%;
        max-height: 90vh;
        object-fit: contain;
        display: block;
        background: #fff;
    }
`

export const ImagePreviewClose = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 34px;
    height: 34px;
    border: none;
    border-radius: 50%;
    background: rgba(20, 14, 33, 0.8);
    color: #fff;
    font-size: 1.4rem;
    line-height: 1;
    cursor: pointer;
`

export const CTASection = styled.section`
    max-width: 1000px;
    margin: 0 auto;
    padding: 70px 20px 0;
    text-align: center;

    h2 {
        color: #8d24b4;
        font-size: clamp(1.8rem, 2.8vw, 2.6rem);
        margin-bottom: 20px;
    }
`

export const CTAButton = styled(Link)`
    display: inline-block;
    background: #e91e63;
    color: #fff;
    text-decoration: none;
    font-weight: 700;
    border-radius: 10px;
    padding: 14px 28px;
    transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;

    &:hover {
        background: #c91754;
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(201, 23, 84, 0.3);
    }
`
