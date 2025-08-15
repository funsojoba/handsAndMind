import styled from "styled-components"

export const ProgramContainer = styled.div`
    min-height: 100vh;
    background: #f8f9fa;
`

export const HeroSection = styled.div`
    background: linear-gradient(135deg, #8D24B4 0%, #E91E63 100%);
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

export const ProgramContent = styled.div`
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
            color: #8D24B4;
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

    .programs-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 30px;
        margin-bottom: 80px;
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
            color: #8D24B4;
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

        .cta-buttons {
            display: flex;
            gap: 20px;
            justify-content: center;
            flex-wrap: wrap;
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

        .programs-grid {
            grid-template-columns: 1fr;
            gap: 25px;
            margin-bottom: 60px;
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

            .cta-buttons {
                flex-direction: column;
                align-items: center;
            }
        }
    }
`

export const ProgramCard = styled.div`
    background: white;
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    cursor: pointer;
    border-left: 5px solid ${props => props.color};
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: ${props => props.color};
        transform: scaleX(0);
        transition: transform 0.3s ease;
    }

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);

        &::before {
            transform: scaleX(1);
        }
    }

    &.active {
        transform: translateY(-5px);
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);

        &::before {
            transform: scaleX(1);
        }
    }

    .program-header {
        margin-bottom: 20px;

        .program-title {
            font-size: 1.8rem;
            color: ${props => props.color};
            margin-bottom: 8px;
            font-weight: 700;
        }

        .program-subtitle {
            font-size: 1.1rem;
            color: #666;
            font-style: italic;
            margin: 0;
        }
    }

    .program-body {
        margin-bottom: 25px;

        .program-description {
            font-size: 1rem;
            color: #555;
            line-height: 1.6;
            margin-bottom: 20px;
        }

        .features-section {
            h4 {
                font-size: 1.1rem;
                color: #333;
                margin-bottom: 15px;
                font-weight: 600;
            }
        }
    }

    .program-footer {
        display: flex;
        justify-content: flex-end;
    }

    @media (max-width: 768px) {
        padding: 25px;

        .program-header {
            .program-title {
                font-size: 1.6rem;
            }

            .program-subtitle {
                font-size: 1rem;
            }
        }

        .program-body {
            .program-description {
                font-size: 0.95rem;
            }

            .features-section h4 {
                font-size: 1rem;
            }
        }
    }
`

export const FeatureList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;

    li {
        display: flex;
        align-items: flex-start;
        margin-bottom: 12px;
        font-size: 0.95rem;
        color: #555;
        line-height: 1.5;

        .checkmark {
            color: #4CAF50;
            font-weight: bold;
            margin-right: 10px;
            flex-shrink: 0;
            margin-top: 2px;
        }
    }

    @media (max-width: 768px) {
        li {
            font-size: 0.9rem;
            margin-bottom: 10px;
        }
    }
`

export const ActionButton = styled.button`
    padding: 12px 24px;
    background: ${props => props.color};
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-block;
    text-align: center;
    min-width: 120px;

    &:hover {
        background: ${props => {
            // Darken the color for hover effect
            const hex = props.color.replace('#', '');
            const r = parseInt(hex.substr(0, 2), 16);
            const g = parseInt(hex.substr(2, 2), 16);
            const b = parseInt(hex.substr(4, 2), 16);
            const darkerR = Math.max(0, r - 30);
            const darkerG = Math.max(0, g - 30);
            const darkerB = Math.max(0, b - 30);
            return `rgb(${darkerR}, ${darkerG}, ${darkerB})`;
        }};
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }

    &:active {
        transform: translateY(0);
    }

    &.primary {
        background: #8D24B4;
        font-size: 1.1rem;
        padding: 15px 30px;
    }

    &.secondary {
        background: #E91E63;
        font-size: 1.1rem;
        padding: 15px 30px;
    }

    @media (max-width: 768px) {
        padding: 10px 20px;
        font-size: 0.95rem;
        min-width: 100px;

        &.primary,
        &.secondary {
            font-size: 1rem;
            padding: 12px 25px;
        }
    }
`
