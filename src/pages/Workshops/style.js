import styled from "styled-components"

export const WorkshopsContainer = styled.div`
    min-height: 100vh;
    background: #f8f9fa;
`

export const HeroSection = styled.div`
    background: linear-gradient(135deg, #2196F3 0%, #1976D2 100%);
    padding: 100px 20px;
    text-align: center;
    color: white;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
        opacity: 0.3;
    }

    .hero-content {
        max-width: 800px;
        margin: 0 auto;
        position: relative;
        z-index: 1;

        h1 {
            font-size: 4rem;
            margin-bottom: 20px;
            color: white;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        p {
            font-size: 1.4rem;
            color: #f0f0f0;
            line-height: 1.6;
            max-width: 600px;
            margin: 0 auto;
        }
    }

    @media (max-width: 768px) {
        padding: 80px 20px;

        .hero-content {
            h1 {
                font-size: 3rem;
            }

            p {
                font-size: 1.2rem;
            }
        }
    }
`

export const WorkshopsContent = styled.div`
    padding: 80px 20px;

    .content-container {
        max-width: 1200px;
        margin: 0 auto;
    }

    .intro-section {
        text-align: center;
        margin-bottom: 60px;

        .section-title {
            font-size: 2.8rem;
            color: #2196F3;
            margin-bottom: 20px;
        }

        .section-description {
            font-size: 1.3rem;
            color: #666;
            line-height: 1.7;
            max-width: 800px;
            margin: 0 auto;
        }
    }

    .cta-section {
        text-align: center;
        background: white;
        border-radius: 20px;
        padding: 60px 40px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        margin-top: 60px;

        .cta-title {
            font-size: 2.5rem;
            color: #2196F3;
            margin-bottom: 20px;
        }

        .cta-description {
            font-size: 1.2rem;
            color: #666;
            margin-bottom: 40px;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }

        .cta-btn {
            background: #2196F3;
            color: white;
            border: none;
            border-radius: 8px;
            padding: 15px 30px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;

            &:hover {
                background: #1976D2;
                transform: translateY(-2px);
                box-shadow: 0 5px 15px rgba(33, 150, 243, 0.3);
            }
        }
    }

    @media (max-width: 768px) {
        padding: 60px 20px;

        .intro-section {
            margin-bottom: 40px;

            .section-title {
                font-size: 2.4rem;
            }

            .section-description {
                font-size: 1.1rem;
            }
        }

        .cta-section {
            padding: 40px 20px;
            margin-top: 40px;

            .cta-title {
                font-size: 2.2rem;
            }

            .cta-description {
                font-size: 1.1rem;
            }
        }
    }
`

export const WorkshopGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 30px;
    margin-bottom: 60px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 25px;
    }
`

export const WorkshopCard = styled.div`
    background: white;
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    border-left: 5px solid #2196F3;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
    }

    .workshop-header {
        margin-bottom: 20px;

        .workshop-title {
            font-size: 1.6rem;
            color: #2196F3;
            margin-bottom: 15px;
            font-weight: 700;
        }

        .workshop-meta {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            font-size: 0.9rem;
            color: #666;

            span {
                display: flex;
                align-items: center;
                gap: 5px;

                &::before {
                    content: '';
                    width: 6px;
                    height: 6px;
                    background: #2196F3;
                    border-radius: 50%;
                }
            }
        }
    }

    .workshop-body {
        margin-bottom: 25px;

        .workshop-description {
            font-size: 1rem;
            color: #555;
            line-height: 1.6;
            margin-bottom: 20px;
        }

        .facilitator {
            font-size: 0.95rem;
            color: #666;
            margin-bottom: 20px;
            padding: 10px;
            background: #f8f9fa;
            border-radius: 8px;
        }

        .topics {
            margin-bottom: 20px;

            h4 {
                font-size: 1.1rem;
                color: #333;
                margin-bottom: 10px;
                font-weight: 600;
            }

            ul {
                list-style: none;
                padding: 0;
                margin: 0;

                li {
                    padding: 5px 0;
                    color: #555;
                    font-size: 0.95rem;
                    position: relative;
                    padding-left: 20px;

                    &::before {
                        content: '•';
                        color: #2196F3;
                        font-weight: bold;
                        position: absolute;
                        left: 0;
                    }
                }
            }
        }

        .workshop-stats {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
            padding: 15px;
            background: #f8f9fa;
            border-radius: 8px;

            .stat {
                text-align: center;

                .label {
                    display: block;
                    font-size: 0.8rem;
                    color: #666;
                    margin-bottom: 5px;
                    text-transform: uppercase;
                    font-weight: 600;
                }

                .value {
                    display: block;
                    font-size: 1.1rem;
                    color: #333;
                    font-weight: 700;

                    &.price {
                        color: #4CAF50;
                    }
                }
            }
        }
    }

    .workshop-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 15px;

        .register-btn {
            background: #2196F3;
            color: white;
            border: none;
            border-radius: 8px;
            padding: 12px 24px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            min-width: 120px;

            &:hover:not(:disabled) {
                background: #1976D2;
                transform: translateY(-2px);
                box-shadow: 0 5px 15px rgba(33, 150, 243, 0.3);
            }

            &:disabled {
                background: #ccc;
                cursor: not-allowed;
                transform: none;
                box-shadow: none;
            }

            &.full {
                background: #f44336;
            }
        }

        .spots-left {
            font-size: 0.9rem;
            color: #666;
            font-style: italic;
        }
    }

    @media (max-width: 768px) {
        padding: 25px;

        .workshop-header {
            .workshop-title {
                font-size: 1.4rem;
            }

            .workshop-meta {
                flex-direction: column;
                gap: 8px;
            }
        }

        .workshop-body {
            .workshop-stats {
                grid-template-columns: 1fr;
                gap: 10px;
            }
        }

        .workshop-footer {
            flex-direction: column;
            align-items: stretch;

            .register-btn {
                width: 100%;
            }
        }
    }
`
