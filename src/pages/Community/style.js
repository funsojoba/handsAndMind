import styled from "styled-components"
import background from "../../assets/BG_2.png"

export const CommunityContainer = styled.div`
    min-height: 100vh;
    background: #f8f9fa;
`

export const HeroSection = styled.div`
    background: url(${background});
    background-position: center;
    background-size: cover;
    padding: 80px 20px;
    text-align: center;
    color: white;
    height: 75vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .hero-content {
        max-width: 800px;
        margin: 0 auto;

        h1 {
            font-size: 3.5rem;
            margin-bottom: 20px;
            color: white;
        }

        p {
            font-size: 1.3rem;
            color: #f0f0f0;
            line-height: 1.6;
        }
    }

    @media (max-width: 768px) {
        padding: 60px 20px;

        .hero-content {
            h1 {
                font-size: 2.8rem;
            }

            p {
                font-size: 1.1rem;
            }
        }
    }
`

export const CommunityContent = styled.div`
    padding: 60px 20px;

    .content-container {
        max-width: 1200px;
        margin: 0 auto;
    }

    @media (max-width: 768px) {
        padding: 40px 20px;
    }
`

export const Section = styled.section`
    margin-bottom: 80px;

    .section-title {
        font-size: 2.5rem;
        color: #8D24B4;
        margin-bottom: 20px;
        text-align: center;
    }

    .section-description {
        font-size: 1.2rem;
        color: #666;
        line-height: 1.7;
        max-width: 800px;
        margin: 0 auto 50px;
        text-align: center;
    }

    .expectations-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 30px;
        margin-top: 40px;
    }

    .expectation-item {
        background: white;
        padding: 30px;
        border-radius: 15px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
        text-align: center;
        transition: transform 0.3s ease;

        &:hover {
            transform: translateY(-5px);
        }

        h4 {
            font-size: 1.3rem;
            color: #8D24B4;
            margin-bottom: 15px;
            font-weight: 600;
        }

        p {
            color: #666;
            line-height: 1.6;
        }
    }

    .cta-buttons {
        display: flex;
        justify-content: center;
        gap: 20px;
        margin-top: 40px;

        @media (max-width: 768px) {
            flex-direction: column;
            align-items: center;
        }
    }

    @media (max-width: 768px) {
        margin-bottom: 60px;

        .section-title {
            font-size: 2.2rem;
        }

        .section-description {
            font-size: 1.1rem;
            margin-bottom: 40px;
        }

        .expectations-grid {
            gap: 20px;
            margin-top: 30px;
        }

        .expectation-item {
            padding: 25px;

            h4 {
                font-size: 1.2rem;
            }
        }
    }
`

export const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 50px;
`

export const Card = styled.div`
    background: white;
    padding: 40px 30px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    }

    .card-icon {
        font-size: 3rem;
        margin-bottom: 20px;
    }

    h3 {
        font-size: 1.5rem;
        color: #8D24B4;
        margin-bottom: 15px;
        font-weight: 600;
    }

    p {
        color: #666;
        line-height: 1.6;
    }

    @media (max-width: 768px) {
        padding: 30px 25px;

        .card-icon {
            font-size: 2.5rem;
        }

        h3 {
            font-size: 1.3rem;
        }
    }
`

export const TestimonialSection = styled(Section)`
    background: linear-gradient(135deg, #8D24B4 0%, #6a1b8a 100%);
    color: white;
    padding: 60px 40px;
    border-radius: 20px;
    margin: 80px 0;

    .section-title {
        color: white;
    }

    .testimonials-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 30px;
        margin-top: 40px;
    }

    .testimonial {
        background: rgba(255, 255, 255, 0.1);
        padding: 30px;
        border-radius: 15px;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);

        .quote {
            font-size: 1.1rem;
            line-height: 1.6;
            margin-bottom: 20px;
            font-style: italic;
        }

        .author {
            font-weight: 600;
            color: rgba(255, 255, 255, 0.9);
        }
    }

    @media (max-width: 768px) {
        padding: 40px 25px;
        margin: 60px 0;

        .testimonials-grid {
            gap: 20px;
            margin-top: 30px;
        }

        .testimonial {
            padding: 25px;

            .quote {
                font-size: 1rem;
            }
        }
    }
`

export const StatsSection = styled(Section)`
    background: white;
    padding: 60px 40px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

    .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 40px;
        margin-top: 40px;
    }

    .stat-item {
        text-align: center;

        .stat-number {
            font-size: 3rem;
            font-weight: bold;
            color: #8D24B4;
            margin-bottom: 10px;
        }

        .stat-label {
            font-size: 1.1rem;
            color: #666;
            font-weight: 500;
        }
    }

    @media (max-width: 768px) {
        padding: 40px 25px;

        .stats-grid {
            gap: 30px;
            margin-top: 30px;
        }

        .stat-item {
            .stat-number {
                font-size: 2.5rem;
            }

            .stat-label {
                font-size: 1rem;
            }
        }
    }
`

export const CTAButton = styled.button`
    padding: 15px 30px;
    background: #8D24B4;
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    min-width: 200px;

    &:hover {
        background: #6a1b8a;
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(141, 36, 180, 0.3);
    }

    &:active {
        transform: translateY(0);
    }

    @media (max-width: 768px) {
        padding: 12px 25px;
        font-size: 1rem;
        min-width: 180px;
    }
`
