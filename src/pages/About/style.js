import styled from "styled-components"

import AboutImg from "../../assets/About.jpg"

export const AboutContainer = styled.div`
    min-height: 100vh;
    background: #f8f9fa;
`

export const HeroSection = styled.div`
    background: #8D24B4;
    padding: 80px 20px;
    text-align: center;
    color: white;
    background: url(${AboutImg});
    height: 75vh;
    background-size: cover;
    background-position: center;
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

export const MissionSection = styled.div`
    background: white;
    padding: 80px 20px;

    .section-container {
        max-width: 900px;
        margin: 0 auto;

        .section-title {
            font-size: 2.8rem;
            color: #8D24B4;
            margin-bottom: 40px;
            text-align: center;
        }
    }

    .mission-content {
        .mission-text {
            font-size: 1.2rem;
            color: #555;
            line-height: 1.8;
            margin-bottom: 25px;
            text-align: justify;
        }
    }

    @media (max-width: 768px) {
        padding: 60px 20px;

        .section-container {
            .section-title {
                font-size: 2.4rem;
                margin-bottom: 30px;
            }
        }

        .mission-content {
            .mission-text {
                font-size: 1.1rem;
                line-height: 1.7;
            }
        }
    }
`

export const VisionSection = styled.div`
    background: #f8f9fa;
    padding: 80px 20px;

    .section-container {
        max-width: 900px;
        margin: 0 auto;

        .section-title {
            font-size: 2.8rem;
            color: #8D24B4;
            margin-bottom: 40px;
            text-align: center;
        }
    }

    .vision-content {
        .vision-text {
            font-size: 1.2rem;
            color: #555;
            line-height: 1.8;
            margin-bottom: 25px;
            text-align: justify;
        }
    }

    @media (max-width: 768px) {
        padding: 60px 20px;

        .section-container {
            .section-title {
                font-size: 2.4rem;
                margin-bottom: 30px;
            }
        }

        .vision-content {
            .vision-text {
                font-size: 1.1rem;
                line-height: 1.7;
            }
        }
    }
`

export const ValuesSection = styled.div`
    background: white;
    padding: 80px 20px;

    .section-container {
        max-width: 1200px;
        margin: 0 auto;

        .section-title {
            font-size: 2.8rem;
            color: #8D24B4;
            margin-bottom: 50px;
            text-align: center;
        }
    }

    .values-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 30px;

        @media (max-width: 768px) {
            grid-template-columns: 1fr;
            gap: 25px;
        }
    }

    .value-card {
        background: #f8f9fa;
        border-radius: 15px;
        padding: 30px;
        border-left: 5px solid #8D24B4;
        transition: transform 0.3s ease, box-shadow 0.3s ease;

        &:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(141, 36, 180, 0.15);
        }

        .value-title {
            font-size: 1.4rem;
            color: #8D24B4;
            margin-bottom: 15px;
            font-weight: 600;
        }

        .value-description {
            font-size: 1rem;
            color: #666;
            line-height: 1.6;
        }
    }

    @media (max-width: 768px) {
        padding: 60px 20px;

        .section-container {
            .section-title {
                font-size: 2.4rem;
                margin-bottom: 40px;
            }
        }

        .value-card {
            padding: 25px;

            .value-title {
                font-size: 1.3rem;
            }

            .value-description {
                font-size: 0.95rem;
            }
        }
    }
`

export const HistorySection = styled.div`
    background: #f8f9fa;
    padding: 80px 20px;

    .section-container {
        max-width: 900px;
        margin: 0 auto;

        .section-title {
            font-size: 2.8rem;
            color: #8D24B4;
            margin-bottom: 40px;
            text-align: center;
        }
    }

    .history-content {
        .history-text {
            font-size: 1.2rem;
            color: #555;
            line-height: 1.8;
            margin-bottom: 25px;
            text-align: justify;
        }
    }

    @media (max-width: 768px) {
        padding: 60px 20px;

        .section-container {
            .section-title {
                font-size: 2.4rem;
                margin-bottom: 30px;
            }
        }

        .history-content {
            .history-text {
                font-size: 1.1rem;
                line-height: 1.7;
            }
        }
    }
`

export const ObjectivesSection = styled.div`
    background: white;
    padding: 80px 20px;

    .section-container {
        max-width: 900px;
        margin: 0 auto;

        .section-title {
            font-size: 2.8rem;
            color: #8D24B4;
            margin-bottom: 40px;
            text-align: center;
        }
    }

    .objectives-list {
        .objective-item {
            display: flex;
            align-items: flex-start;
            margin-bottom: 20px;
            padding: 20px;
            background: #f8f9fa;
            border-radius: 10px;
            transition: transform 0.3s ease;

            &:hover {
                transform: translateX(10px);
            }

            .objective-number {
                font-size: 1.3rem;
                font-weight: bold;
                color: #8D24B4;
                margin-right: 15px;
                min-width: 30px;
            }

            .objective-text {
                font-size: 1.1rem;
                color: #555;
                line-height: 1.6;
                font-weight: 500;
            }
        }
    }

    @media (max-width: 768px) {
        padding: 60px 20px;

        .section-container {
            .section-title {
                font-size: 2.4rem;
                margin-bottom: 30px;
            }
        }

        .objectives-list {
            .objective-item {
                padding: 15px;

                .objective-number {
                    font-size: 1.2rem;
                    margin-right: 12px;
                    min-width: 25px;
                }

                .objective-text {
                    font-size: 1rem;
                }
            }
        }
    }
`

export const ChallengesSection = styled.div`
    background: #f8f9fa;
    padding: 80px 20px;

    .section-container {
        max-width: 900px;
        margin: 0 auto;

        .section-title {
            font-size: 2.8rem;
            color: #8D24B4;
            margin-bottom: 40px;
            text-align: center;
        }
    }

    .challenges-list {
        .challenge-item {
            display: flex;
            align-items: flex-start;
            margin-bottom: 20px;
            padding: 20px;
            background: white;
            border-radius: 10px;
            border-left: 4px solid #FF6B6B;
            transition: transform 0.3s ease;

            &:hover {
                transform: translateX(10px);
            }

            .challenge-number {
                font-size: 1.3rem;
                font-weight: bold;
                color: #FF6B6B;
                margin-right: 15px;
                min-width: 30px;
            }

            .challenge-text {
                font-size: 1.1rem;
                color: #555;
                line-height: 1.6;
                font-weight: 500;
            }
        }
    }

    @media (max-width: 768px) {
        padding: 60px 20px;

        .section-container {
            .section-title {
                font-size: 2.4rem;
                margin-bottom: 30px;
            }
        }

        .challenges-list {
            .challenge-item {
                padding: 15px;

                .challenge-number {
                    font-size: 1.2rem;
                    margin-right: 12px;
                    min-width: 25px;
                }

                .challenge-text {
                    font-size: 1rem;
                }
            }
        }
    }
`
