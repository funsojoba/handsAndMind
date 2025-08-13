import styled from "styled-components"

export const GiveHelpContainer = styled.div`
    min-height: 100vh;
    background: #f8f9fa;
`

export const HeroSection = styled.div`
    background: linear-gradient(135deg, #8D24B4 0%, #38064bff 100%);
    color: white;
    padding: 80px 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
    /* max-width: 1200px; */
    margin: 0 auto;
    
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 40px;
        padding: 60px 20px;
        text-align: center;
    }
    
    .hero-content {
        .hero-headline {
            font-size: 3rem;
            font-weight: 700;
            margin-bottom: 20px;
            line-height: 1.2;
            
            @media (max-width: 768px) {
                font-size: 2.5rem;
            }
        }
        
        .hero-subhead {
            font-size: 1.2rem;
            line-height: 1.6;
            margin-bottom: 30px;
            opacity: 0.9;
            
            @media (max-width: 768px) {
                font-size: 1.1rem;
            }
        }
        
        .hero-cta {
            background: #FFD700;
            color: #8D24B4;
            border: none;
            padding: 15px 30px;
            border-radius: 25px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            
            &:hover {
                background: #ffed4e;
                transform: translateY(-2px);
                box-shadow: 0 5px 15px rgba(255, 215, 0, 0.3);
            }
        }
    }
    
    .hero-image {
        img {
            width: 100%;
            /* height: 400px; */
            object-fit: cover;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
    }
`

export const SponsorshipSection = styled.div`
    background: white;
    padding: 80px 20px;
    
    .section-title {
        font-size: 2.5rem;
        color: #8D24B4;
        text-align: center;
        margin-bottom: 50px;
        font-weight: 600;
        
        @media (max-width: 768px) {
            font-size: 2rem;
        }
    }
    
    .tabs-container {
        max-width: 1000px;
        margin: 0 auto;
    }
    
    .tabs {
        display: flex;
        justify-content: center;
        gap: 20px;
        margin-bottom: 40px;
        
        @media (max-width: 768px) {
            flex-direction: column;
            align-items: center;
            gap: 15px;
        }
    }
    
    .tab {
        padding: 15px 25px;
        border: 2px solid #8D24B4;
        background: white;
        color: #8D24B4;
        border-radius: 25px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        min-width: 200px;
        
        &:hover {
            background: #f8f9fa;
            transform: translateY(-2px);
        }
        
        &.active {
            background: #8D24B4;
            color: white;
            box-shadow: 0 5px 15px rgba(141, 36, 180, 0.3);
        }
        
        @media (max-width: 768px) {
            min-width: 250px;
        }
    }
    
    .tab-content {
        background: white;
        border-radius: 15px;
        padding: 40px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        border: 2px solid #f0f0f0;
        
        @media (max-width: 768px) {
            padding: 30px 20px;
        }
        
        h3 {
            color: #8D24B4;
            font-size: 1.8rem;
            margin-bottom: 20px;
            font-weight: 600;
        }
        
        p {
            color: #666;
            line-height: 1.6;
            margin-bottom: 20px;
            font-size: 1.1rem;
        }
        
        ul {
            list-style: none;
            padding: 0;
            
            li {
                color: #8D24B4;
                padding: 8px 0;
                padding-left: 25px;
                position: relative;
                font-weight: 500;
                
                &:before {
                    content: "✓";
                    position: absolute;
                    left: 0;
                    color: #FFD700;
                    font-weight: bold;
                }
            }
        }
    }
`

export const WhySponsorSection = styled.div`
    background: #f8f9fa;
    padding: 80px 20px;
    
    .section-title {
        font-size: 2.5rem;
        color: #8D24B4;
        text-align: center;
        margin-bottom: 50px;
        font-weight: 600;
        
        @media (max-width: 768px) {
            font-size: 2rem;
        }
    }
    
    .stats-testimonials {
        max-width: 1200px;
        margin: 0 auto 60px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 60px;
        align-items: start;
        
        @media (max-width: 768px) {
            grid-template-columns: 1fr;
            gap: 40px;
        }
    }
    
    .stats {
        display: flex;
        flex-direction: column;
        gap: 30px;
        
        .stat-item {
            background: white;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
            text-align: center;
            border-left: 4px solid #FFD700;
            
            .stat-number {
                font-size: 3rem;
                font-weight: 700;
                color: #8D24B4;
                margin-bottom: 10px;
                
                @media (max-width: 768px) {
                    font-size: 2.5rem;
                }
            }
            
            .stat-text {
                color: #666;
                font-size: 1.1rem;
                line-height: 1.5;
            }
        }
    }
    
    .testimonials {
        display: flex;
        flex-direction: column;
        gap: 25px;
        
        .testimonial {
            background: white;
            padding: 25px;
            border-radius: 15px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
            border-left: 4px solid #8D24B4;
            
            p {
                color: #333;
                font-size: 1.1rem;
                line-height: 1.6;
                margin-bottom: 15px;
                font-style: italic;
            }
            
            .testimonial-author {
                color: #8D24B4;
                font-weight: 600;
                font-size: 0.95rem;
            }
        }
    }
    
    .infographic {
        max-width: 800px;
        margin: 0 auto;
        
        .infographic-content {
            background: white;
            padding: 40px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            text-align: center;
            
            h3 {
                color: #8D24B4;
                font-size: 1.8rem;
                margin-bottom: 30px;
                font-weight: 600;
            }
            
            .impact-visual {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 30px;
                flex-wrap: wrap;
                
                .money-input {
                    background: #FFD700;
                    color: #8D24B4;
                    padding: 20px 30px;
                    border-radius: 50%;
                    font-size: 1.5rem;
                    font-weight: 700;
                    min-width: 80px;
                    height: 80px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .arrow {
                    font-size: 2rem;
                    color: #8D24B4;
                    font-weight: bold;
                }
                
                .impact-output {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                    
                    .output-item {
                        background: #8D24B4;
                        color: white;
                        padding: 15px 25px;
                        border-radius: 25px;
                        font-weight: 600;
                        font-size: 1rem;
                    }
                }
            }
        }
    }
`

export const HowItWorksSection = styled.div`
    background: white;
    padding: 80px 20px;
    
    .section-title {
        font-size: 2.5rem;
        color: #8D24B4;
        text-align: center;
        margin-bottom: 50px;
        font-weight: 600;
        
        @media (max-width: 768px) {
            font-size: 2rem;
        }
    }
    
    .steps-container {
        max-width: 1000px;
        margin: 0 auto 50px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 40px;
        
        @media (max-width: 768px) {
            grid-template-columns: 1fr;
            gap: 30px;
        }
        
        .step {
            text-align: center;
            padding: 30px 20px;
            
            .step-number {
                background: #8D24B4;
                color: white;
                width: 60px;
                height: 60px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.8rem;
                font-weight: 700;
                margin: 0 auto 20px;
            }
            
            h3 {
                color: #8D24B4;
                font-size: 1.5rem;
                margin-bottom: 15px;
                font-weight: 600;
            }
            
            p {
                color: #666;
                line-height: 1.6;
                font-size: 1rem;
            }
        }
    }
    
    .cta-button {
        display: block;
        margin: 0 auto;
        background: #FFD700;
        color: #8D24B4;
        border: none;
        padding: 18px 40px;
        border-radius: 25px;
        font-size: 1.2rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        
        &:hover {
            background: #ffed4e;
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(255, 215, 0, 0.3);
        }
    }
`

export const FAQSection = styled.div`
    background: #f8f9fa;
    padding: 80px 20px;
    
    .section-title {
        font-size: 2.5rem;
        color: #8D24B4;
        text-align: center;
        margin-bottom: 50px;
        font-weight: 600;
        
        @media (max-width: 768px) {
            font-size: 2rem;
        }
    }
    
    .faq-container {
        max-width: 800px;
        margin: 0 auto;
    }
    
    .faq-item {
        background: white;
        border-radius: 10px;
        margin-bottom: 20px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        
        .faq-question {
            width: 100%;
            padding: 25px 30px;
            background: white;
            border: none;
            text-align: left;
            font-size: 1.1rem;
            font-weight: 600;
            color: #8D24B4;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: all 0.3s ease;
            
            &:hover {
                background: #f8f9fa;
            }
            
            .faq-icon {
                font-size: 1.5rem;
                font-weight: bold;
                color: #FFD700;
            }
            
            &.expanded {
                background: #f8f9fa;
            }
        }
        
        .faq-answer {
            padding: 0 30px 25px;
            color: #666;
            line-height: 1.6;
            font-size: 1rem;
        }
    }
`

export const SponsorsSpotlightSection = styled.div`
    background: white;
    padding: 80px 20px;
    
    .section-title {
        font-size: 2.5rem;
        color: #8D24B4;
        text-align: center;
        margin-bottom: 50px;
        font-weight: 600;
        
        @media (max-width: 768px) {
            font-size: 2rem;
        }
    }
    
    .sponsors-grid {
        max-width: 800px;
        margin: 0 auto 30px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 30px;
        
        .sponsor-logo {
            background: #f8f9fa;
            border: 2px solid #e0e0e0;
            border-radius: 10px;
            padding: 30px 20px;
            text-align: center;
            font-weight: 600;
            color: #8D24B4;
            font-size: 1.1rem;
            transition: all 0.3s ease;
            
            &:hover {
                border-color: #8D24B4;
                background: #f0f0f0;
                transform: translateY(-2px);
            }
        }
    }
    
    .join-text {
        text-align: center;
        color: #8D24B4;
        font-size: 1.3rem;
        font-weight: 600;
    }
`

export const FooterCTASection = styled.div`
    background: #8D24B4;
    color: white;
    padding: 60px 20px;
    text-align: center;
    
    h2 {
        font-size: 2rem;
        margin-bottom: 15px;
        font-weight: 600;
        
        @media (max-width: 768px) {
            font-size: 1.8rem;
        }
    }
    
    p {
        font-size: 1.2rem;
        margin-bottom: 30px;
        opacity: 0.9;
    }
    
    .share-buttons {
        display: flex;
        justify-content: center;
        gap: 20px;
        flex-wrap: wrap;
        
        .share-btn {
            background: #FFD700;
            color: #8D24B4;
            border: none;
            padding: 12px 25px;
            border-radius: 25px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            
            &:hover {
                background: #ffed4e;
                transform: translateY(-2px);
                box-shadow: 0 5px 15px rgba(255, 215, 0, 0.3);
            }
        }
    }
`

export const ContactFormSection = styled.div`
    background: white;
    padding: 80px 20px;
    
    .section-title {
        font-size: 2.5rem;
        color: #8D24B4;
        text-align: center;
        margin-bottom: 20px;
        font-weight: 600;
        
        @media (max-width: 768px) {
            font-size: 2rem;
        }
    }
    
    .section-subtitle {
        text-align: center;
        color: #666;
        font-size: 1.1rem;
        margin-bottom: 40px;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
    }
    
    .form-tabs {
        display: flex;
        justify-content: center;
        gap: 10px;
        margin-bottom: 40px;
        flex-wrap: wrap;
        
        @media (max-width: 768px) {
            gap: 8px;
        }
    }
    
    .form-tab {
        padding: 12px 24px;
        border: 2px solid #8D24B4;
        background: white;
        color: #8D24B4;
        border-radius: 25px;
        cursor: pointer;
        font-weight: 500;
        font-size: 0.95rem;
        transition: all 0.3s ease;
        
        &:hover {
            background: rgba(141, 36, 180, 0.1);
        }
        
        &.active {
            background: #8D24B4;
            color: white;
        }
        
        @media (max-width: 768px) {
            padding: 10px 20px;
            font-size: 0.9rem;
        }
    }
    
    .form-content {
        max-width: 800px;
        margin: 0 auto;
    }
    
    .sponsor-form,
    .placement-form,
    .volunteer-form {
        background: #f8f9fa;
        padding: 40px;
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        
        @media (max-width: 768px) {
            padding: 30px 20px;
        }
    }
        
        .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-bottom: 20px;
            
            @media (max-width: 768px) {
                grid-template-columns: 1fr;
                gap: 15px;
            }
        }
        
        .form-group {
            margin-bottom: 20px;
            
            label {
                display: block;
                margin-bottom: 8px;
                color: #333;
                font-weight: 500;
                font-size: 0.95rem;
            }
            
            input, select, textarea {
                width: 100%;
                padding: 12px 15px;
                border: 2px solid #e0e0e0;
                border-radius: 8px;
                font-size: 1rem;
                transition: border-color 0.3s ease;
                background: white;
                
                &:focus {
                    outline: none;
                    border-color: #8D24B4;
                    box-shadow: 0 0 0 3px rgba(141, 36, 180, 0.1);
                }
            }
            
            textarea {
                resize: vertical;
                min-height: 80px;
            }
        }
        
        .form-section {
            margin-bottom: 30px;
            padding: 25px;
            background: white;
            border-radius: 10px;
            border-left: 4px solid #8D24B4;
            
            h3 {
                color: #8D24B4;
                font-size: 1.5rem;
                margin-bottom: 20px;
                font-weight: 600;
            }
            
            h4 {
                color: #8D24B4;
                font-size: 1.2rem;
                margin-bottom: 15px;
                font-weight: 600;
            }
        }
        
        .help-category {
            margin-bottom: 25px;
            padding: 20px;
            background: #f8f9fa;
            border-radius: 8px;
            
            h4 {
                color: #8D24B4;
                font-size: 1.1rem;
                margin-bottom: 15px;
                font-weight: 600;
            }
        }
        
        .checkbox-group {
            margin-bottom: 20px;
        }
        
        .checkbox-label {
            display: flex;
            align-items: flex-start;
            margin-bottom: 12px;
            cursor: pointer;
            font-size: 0.95rem;
            color: #333;
            position: relative;
            padding-left: 35px;
            line-height: 1.4;
            
            input[type="checkbox"] {
                position: absolute;
                opacity: 0;
                cursor: pointer;
                height: 0;
                width: 0;
            }
            
            .checkmark {
                position: absolute;
                left: 0;
                top: 0;
                height: 20px;
                width: 20px;
                background-color: white;
                border: 2px solid #8D24B4;
                border-radius: 4px;
                transition: all 0.3s ease;
                flex-shrink: 0;
            }
            
            &:hover .checkmark {
                background-color: #f0f0f0;
            }
            
            input:checked ~ .checkmark {
                background-color: #8D24B4;
            }
            
            .checkmark:after {
                content: "";
                position: absolute;
                display: none;
                left: 6px;
                top: 2px;
                width: 5px;
                height: 10px;
                border: solid white;
                border-width: 0 2px 2px 0;
                transform: rotate(45deg);
            }
            
            input:checked ~ .checkmark:after {
                display: block;
            }
        }
        
        .submit-btn {
            width: 100%;
            padding: 18px;
            background: #8D24B4;
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 1.2rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-top: 30px;
            
            &:hover {
                background: #7a1f9e;
                transform: translateY(-2px);
                box-shadow: 0 5px 15px rgba(141, 36, 180, 0.3);
            }
        }
        
        .form-title {
            color: #8D24B4;
            font-size: 1.8rem;
            margin-bottom: 10px;
            font-weight: 600;
            text-align: center;
        }
        
        .form-subtitle {
            color: #666;
            font-size: 1rem;
            margin-bottom: 30px;
            text-align: center;
            line-height: 1.5;
        }
        
        .form-note {
            color: #666;
            font-size: 0.9rem;
            margin-bottom: 15px;
            font-style: italic;
        }
        
        .document-list {
            margin-bottom: 20px;
        }
        
        .document-item {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px;
            background: white;
            border-radius: 8px;
            margin-bottom: 8px;
            border: 1px solid #e0e0e0;
            
            .document-icon {
                font-size: 1.2rem;
            }
        }
        
        .radio-group {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
        }
        
        .radio-label {
            display: flex;
            align-items: center;
            gap: 8px;
            cursor: pointer;
            font-size: 0.95rem;
            color: #333;
            
            input[type="radio"] {
                margin: 0;
            }
        }
        
        small {
            color: #666;
            font-size: 0.85rem;
            margin-top: 5px;
            display: block;
        }
`
