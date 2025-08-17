import styled from "styled-components"
import ChapterImg from "../../assets/Chapter.jpg"

export const ChaptersContainer = styled.div`
    min-height: 100vh;
    background: #f8f9fa;
`

export const HeroSection = styled.div`
    /* background: #8D24B4; */
    /* background: linear-gradient(rgba(141,36,180,0.7), rgba(141,36,180,0.7)), url(${ChapterImg}) center/cover no-repeat; */
    background: url(${ChapterImg});
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

export const ChaptersContent = styled.div`
    padding: 60px 20px;

    .content-container {
        max-width: 1000px;
        margin: 0 auto;
    }

    .intro-section {
        text-align: center;
        margin-bottom: 50px;

        .section-title {
            font-size: 2.5rem;
            color: #8D24B4;
            margin-bottom: 20px;
        }

        .section-description {
            font-size: 1.2rem;
            color: #666;
            line-height: 1.7;
            max-width: 800px;
            margin: 0 auto;
        }
    }

    @media (max-width: 768px) {
        padding: 40px 20px;

        .intro-section {
            margin-bottom: 40px;

            .section-title {
                font-size: 2.2rem;
            }

            .section-description {
                font-size: 1.1rem;
            }
        }
    }
`

export const TabNavigation = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
    background: white;
    border-radius: 15px;
    padding: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 768px) {
        margin-bottom: 30px;
        padding: 6px;
    }
`

export const TabButton = styled.button`
    flex: 1;
    padding: 15px 25px;
    border: none;
    background: ${props => props.active ? '#8D24B4' : 'transparent'};
    color: ${props => props.active ? 'white' : '#8D24B4'};
    font-weight: 600;
    font-size: 1rem;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background: ${props => props.active ? '#8D24B4' : 'rgba(141, 36, 180, 0.1)'};
    }

    @media (max-width: 768px) {
        padding: 12px 20px;
        font-size: 0.95rem;
    }
`

export const FormSection = styled.div`
    background: white;
    border-radius: 20px;
    padding: 40px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

    .form-container {
        .form-title {
            font-size: 2.2rem;
            color: #8D24B4;
            margin-bottom: 10px;
            text-align: center;
        }

        .form-subtitle {
            font-size: 1.1rem;
            color: #666;
            text-align: center;
            margin-bottom: 40px;
            line-height: 1.6;
        }
    }

    .chapters-form {
        .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-bottom: 25px;

            @media (max-width: 768px) {
                grid-template-columns: 1fr;
                gap: 15px;
            }
        }

        .form-group {
            margin-bottom: 25px;

            label {
                display: block;
                margin-bottom: 8px;
                font-weight: 600;
                color: #333;
                font-size: 0.95rem;
            }

            input, select, textarea {
                width: 100%;
                padding: 12px 15px;
                border: 2px solid #e1e5e9;
                border-radius: 8px;
                font-size: 1rem;
                transition: border-color 0.3s ease;
                background: white;

                &:focus {
                    outline: none;
                    border-color: #8D24B4;
                    box-shadow: 0 0 0 3px rgba(141, 36, 180, 0.1);
                }

                &::placeholder {
                    color: #999;
                }
            }

            textarea {
                resize: vertical;
                min-height: 100px;
            }
            
            .char-count {
                color: #666;
                font-size: 0.85rem;
                margin-top: 5px;
                display: block;
            }
        }

        .form-section {
            margin-bottom: 35px;
            padding: 25px;
            background: #f8f9fa;
            border-radius: 12px;
            border-left: 4px solid #8D24B4;

            h4 {
                font-size: 1.3rem;
                color: #8D24B4;
                margin-bottom: 20px;
                font-weight: 600;
            }
        }

        .radio-group {
            display: flex;
            flex-direction: column;
            gap: 12px;

            .radio-label {
                display: flex;
                align-items: center;
                cursor: pointer;
                font-size: 1rem;
                color: #555;

                input[type="radio"] {
                    display: none;
                }

                .radio-mark {
                    width: 20px;
                    height: 20px;
                    border: 2px solid #8D24B4;
                    border-radius: 50%;
                    margin-right: 12px;
                    position: relative;
                    transition: all 0.3s ease;
                }

                input[type="radio"]:checked + .radio-mark {
                    background: #8D24B4;
                }

                input[type="radio"]:checked + .radio-mark::after {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 8px;
                    height: 8px;
                    background: white;
                    border-radius: 50%;
                }
            }
        }

        .checkbox-group {
            display: flex;
            flex-direction: column;
            gap: 12px;

            .checkbox-label {
                display: flex;
                align-items: center;
                cursor: pointer;
                font-size: 1rem;
                color: #555;

                input[type="checkbox"] {
                    display: none;
                }

                .checkmark {
                    width: 20px;
                    height: 20px;
                    border: 2px solid #8D24B4;
                    border-radius: 4px;
                    margin-right: 12px;
                    position: relative;
                    transition: all 0.3s ease;
                }

                input[type="checkbox"]:checked + .checkmark {
                    background: #8D24B4;
                }

                input[type="checkbox"]:checked + .checkmark::after {
                    content: '✓';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    color: white;
                    font-size: 14px;
                    font-weight: bold;
                }
            }
        }

        .submit-btn {
            width: 100%;
            padding: 15px;
            background: #8D24B4;
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-top: 20px;

            &:hover {
                background: #6a1b8a;
                transform: translateY(-2px);
                box-shadow: 0 5px 15px rgba(141, 36, 180, 0.3);
            }

            &:active {
                transform: translateY(0);
            }
        }
    }

    @media (max-width: 768px) {
        padding: 25px;

        .form-container {
            .form-title {
                font-size: 1.9rem;
            }

            .form-subtitle {
                font-size: 1rem;
                margin-bottom: 30px;
            }
        }

        .chapters-form {
            .form-section {
                padding: 20px;
                margin-bottom: 25px;

                h4 {
                    font-size: 1.2rem;
                    margin-bottom: 15px;
                }
            }

            .form-group {
                margin-bottom: 20px;

                label {
                    font-size: 0.9rem;
                }

                input, select, textarea {
                    padding: 10px 12px;
                    font-size: 0.95rem;
                }
            }

            .submit-btn {
                padding: 12px;
                font-size: 1rem;
            }
        }
    }
`

export const PODInfoSection = styled.div`
    margin-bottom: 60px;
    
    .pod-intro {
        text-align: center;
        margin-bottom: 50px;
        
        .pod-title {
            font-size: 2.5rem;
            color: #8D24B4;
            margin-bottom: 30px;
            font-weight: 700;
        }
        
        .pod-definition {
            background: white;
            border-radius: 15px;
            padding: 30px;
            box-shadow: 0 5px 20px rgba(141, 36, 180, 0.1);
            border: 2px solid #f0f0f0;
            max-width: 800px;
            margin: 0 auto;
            
            h3 {
                color: #8D24B4;
                font-size: 1.5rem;
                margin-bottom: 15px;
                font-weight: 600;
            }
            
            p {
                color: #555;
                line-height: 1.6;
                font-size: 1.1rem;
            }
        }
    }
    
    .steps-container {
        margin-bottom: 50px;
        
        .steps-title {
            font-size: 2rem;
            color: #8D24B4;
            text-align: center;
            margin-bottom: 40px;
            font-weight: 600;
        }
    }
    
    @media (max-width: 768px) {
        margin-bottom: 40px;
        
        .pod-intro {
            margin-bottom: 40px;
            
            .pod-title {
                font-size: 2rem;
                margin-bottom: 25px;
            }
            
            .pod-definition {
                padding: 25px;
                
                h3 {
                    font-size: 1.3rem;
                }
                
                p {
                    font-size: 1rem;
                }
            }
        }
        
        .steps-container {
            .steps-title {
                font-size: 1.8rem;
                margin-bottom: 30px;
            }
        }
    }
`

export const StepCard = styled.div`
    background: white;
    border-radius: 15px;
    padding: 25px;
    margin-bottom: 25px;
    box-shadow: 0 5px 20px rgba(141, 36, 180, 0.1);
    border: 2px solid #f0f0f0;
    display: flex;
    gap: 20px;
    align-items: flex-start;
    transition: all 0.3s ease;
    
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(141, 36, 180, 0.15);
        border-color: #8D24B4;
    }
    
    .step-number {
        background: #8D24B4;
        color: white;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 1.2rem;
        flex-shrink: 0;
    }
    
    .step-content {
        flex: 1;
        
        h4 {
            color: #8D24B4;
            font-size: 1.3rem;
            margin-bottom: 10px;
            font-weight: 600;
        }
        
        p {
            color: #555;
            line-height: 1.6;
            margin-bottom: 10px;
        }
        
        ul {
            margin: 10px 0;
            padding-left: 20px;
            
            li {
                color: #555;
                line-height: 1.6;
                margin-bottom: 5px;
            }
        }
        
        .time-commitment {
            background: #f8f9fa;
            padding: 10px 15px;
            border-radius: 8px;
            border-left: 4px solid #8D24B4;
            margin-top: 15px;
        }
        
        .note {
            background: #fff3cd;
            padding: 10px 15px;
            border-radius: 8px;
            border-left: 4px solid #ffc107;
            margin-top: 15px;
            color: #856404;
        }
    }
    
    @media (max-width: 768px) {
        padding: 20px;
        gap: 15px;
        
        .step-number {
            width: 35px;
            height: 35px;
            font-size: 1.1rem;
        }
        
        .step-content {
            h4 {
                font-size: 1.2rem;
            }
        }
    }
`

export const PerksSection = styled.div`
    background: white;
    border-radius: 20px;
    padding: 40px;
    box-shadow: 0 10px 30px rgba(141, 36, 180, 0.1);
    border: 2px solid #f0f0f0;
    
    .perks-title {
        font-size: 2rem;
        color: #8D24B4;
        text-align: center;
        margin-bottom: 40px;
        font-weight: 600;
    }
    
    .perks-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 25px;
    }
    
    @media (max-width: 768px) {
        padding: 30px 20px;
        
        .perks-title {
            font-size: 1.8rem;
            margin-bottom: 30px;
        }
        
        .perks-grid {
            grid-template-columns: 1fr;
            gap: 20px;
        }
    }
`

export const PerkCard = styled.div`
    text-align: center;
    padding: 25px;
    background: #f8f9fa;
    border-radius: 15px;
    border: 2px solid #e9ecef;
    transition: all 0.3s ease;
    
    &:hover {
        transform: translateY(-3px);
        border-color: #8D24B4;
        box-shadow: 0 8px 25px rgba(141, 36, 180, 0.15);
    }
    
    .perk-icon {
        font-size: 3rem;
        margin-bottom: 15px;
    }
    
    h4 {
        color: #8D24B4;
        font-size: 1.2rem;
        margin-bottom: 10px;
        font-weight: 600;
    }
    
    p {
        color: #555;
        line-height: 1.5;
        font-size: 0.95rem;
    }
    
    @media (max-width: 768px) {
        padding: 20px;
        
        .perk-icon {
            font-size: 2.5rem;
            margin-bottom: 12px;
        }
        
        h4 {
            font-size: 1.1rem;
        }
        
        p {
            font-size: 0.9rem;
        }
    }
`
