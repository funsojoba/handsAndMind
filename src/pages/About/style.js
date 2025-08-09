import styled from "styled-components"

export const AboutContainer = styled.div`
    min-height: 100vh;
    background: #f8f9fa;
`

export const HeroSection = styled.div`
    background: #8D24B4;
    padding: 80px 20px;
    text-align: center;
    color: white;

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

export const CommunitySection = styled.div`
    background: white;
    padding: 60px 20px;

    .section-container {
        max-width: 800px;
        margin: 0 auto;
        text-align: center;

        .section-title {
            font-size: 2.5rem;
            color: #8D24B4;
            margin-bottom: 25px;
        }

        .section-description {
            font-size: 1.2rem;
            color: #666;
            line-height: 1.7;
        }
    }

    @media (max-width: 768px) {
        padding: 50px 20px;

        .section-container {
            .section-title {
                font-size: 2.2rem;
            }

            .section-description {
                font-size: 1.1rem;
            }
        }
    }
`

export const BrunchSection = styled.div`
    background: #f8f9fa;
    padding: 60px 20px;

    .section-container {
        max-width: 1000px;
        margin: 0 auto;
    }

    .brunch-content {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 50px;
        align-items: center;

        @media (max-width: 768px) {
            grid-template-columns: 1fr;
            gap: 30px;
        }
    }

    .brunch-text {
        .section-title {
            font-size: 2.3rem;
            color: #8D24B4;
            margin-bottom: 20px;
        }

        .brunch-headline {
            font-size: 1.8rem;
            color: #FFD700;
            margin-bottom: 15px;
            font-weight: 600;
        }

        .brunch-subhead {
            font-size: 1.2rem;
            color: #666;
            margin-bottom: 25px;
            font-style: italic;
        }

        .brunch-body {
            p {
                font-size: 1.1rem;
                color: #555;
                line-height: 1.6;
                margin-bottom: 20px;
            }

            .benefits-list {
                list-style: none;
                padding: 0;
                margin: 0;

                li {
                    font-size: 1.1rem;
                    color: #555;
                    padding: 8px 0;
                    padding-left: 25px;
                    position: relative;
                    line-height: 1.5;

                    &:before {
                        content: "•";
                        color: #8D24B4;
                        font-weight: bold;
                        font-size: 1.5rem;
                        position: absolute;
                        left: 0;
                        top: 5px;
                    }
                }
            }
        }
    }

    .brunch-visual {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;

        .visual-element {
            font-size: 4rem;
            background: white;
            border-radius: 50%;
            width: 100px;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;

            &:hover {
                transform: scale(1.1);
            }
        }
    }

    @media (max-width: 768px) {
        padding: 50px 20px;

        .brunch-text {
            .section-title {
                font-size: 2rem;
            }

            .brunch-headline {
                font-size: 1.6rem;
            }

            .brunch-subhead {
                font-size: 1.1rem;
            }

            .brunch-body {
                p, .benefits-list li {
                    font-size: 1rem;
                }
            }
        }

        .brunch-visual {
            .visual-element {
                font-size: 3rem;
                width: 80px;
                height: 80px;
            }
        }
    }
`

export const MembershipSection = styled.div`
    background: white;
    padding: 60px 20px;

    .section-container {
        max-width: 800px;
        margin: 0 auto;
        text-align: center;

        .section-title {
            font-size: 2.5rem;
            color: #8D24B4;
            margin-bottom: 40px;
        }
    }

    .membership-options {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 30px;

        @media (max-width: 600px) {
            grid-template-columns: 1fr;
            gap: 25px;
        }
    }

    .membership-card {
        background: #f8f9fa;
        border-radius: 15px;
        padding: 40px 30px;
        border: 2px solid transparent;
        transition: all 0.3s ease;

        &:hover {
            border-color: #8D24B4;
            transform: translateY(-5px);
        }

        h3 {
            font-size: 1.8rem;
            color: #8D24B4;
            margin-bottom: 15px;
            font-weight: 600;
        }

        p {
            font-size: 1rem;
            color: #666;
            line-height: 1.5;
            margin-bottom: 25px;
        }

        .membership-btn {
            width: 100%;
            padding: 15px;
            border: none;
            border-radius: 8px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-bottom: 15px;

            &.signin-btn {
                background: #8D24B4;
                color: white;

                &:hover {
                    background: #6a1b8a;
                }
            }

            &.join-btn {
                background: #FFD700;
                color: #333;

                &:hover {
                    background: #FFA500;
                }
            }
        }

        small {
            font-size: 0.85rem;
            color: #999;
            font-style: italic;
        }
    }

    @media (max-width: 768px) {
        padding: 50px 20px;

        .section-container {
            .section-title {
                font-size: 2.2rem;
                margin-bottom: 35px;
            }
        }

        .membership-card {
            padding: 30px 25px;

            h3 {
                font-size: 1.6rem;
            }

            p {
                font-size: 0.95rem;
            }

            .membership-btn {
                padding: 12px;
                font-size: 1rem;
            }
        }
    }
`
