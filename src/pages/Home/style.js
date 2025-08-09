import styled from "styled-components";
import background from "../../assets/BG_ONE.jpg"



export const SectionOne = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 75vh;
    /* background: #8D24B4; */
    background-image: url(${background});
    background-size: cover;
    background-position: center;

    .text{
        h1{
            font-size: 3rem; /* Increased font size */
            display: inline-block;
            color: #fff;
        }
        p{
            color: #fff;
            font-size: 1.5em;
            text-align: center;
        }
    }   
`


export const SectionTwo = styled.div`
    background: #f7f7f7ff;
    min-height: 75vh;
    padding: 50px;

    .programs-container {
        max-width: 1200px;
        margin: 0 auto;
        
        .section-title {
            text-align: center;
            font-size: 2.5rem;
            color: #8D24B4;
            margin-bottom: 40px;
        }

        .programs-grid {
            display: flex;
            gap: 20px;
            overflow-x: auto;
            padding: 20px 0;
            
            /* Custom scrollbar */
            &::-webkit-scrollbar {
                height: 8px;
            }
            
            &::-webkit-scrollbar-track {
                background: #f1f1f1;
                border-radius: 4px;
            }
            
            &::-webkit-scrollbar-thumb {
                background: #8D24B4;
                border-radius: 4px;
            }
            
            &::-webkit-scrollbar-thumb:hover {
                background: #6a1b8a;
            }
        }

        .program-card {
            min-width: 280px;
            background: white;
            border-radius: 16px;
            padding: 30px 25px;
            box-shadow: 0 8px 32px rgba(141, 36, 180, 0.1);
            border: 2px solid transparent;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;

            &:hover {
                transform: translateY(-8px);
                border-color: #FFD700;
                box-shadow: 0 16px 48px rgba(141, 36, 180, 0.2);
            }

            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 4px;
                background: linear-gradient(90deg, #8D24B4, #FFD700);
            }

            .card-icon {
                font-size: 3rem;
                text-align: center;
                margin-bottom: 20px;
                background: linear-gradient(135deg, #8D24B4, #FFD700);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }

            h3 {
                font-size: 1.3rem;
                color: #8D24B4;
                margin-bottom: 15px;
                text-align: center;
                font-weight: 600;
                line-height: 1.3;
            }

            p {
                color: #666;
                text-align: center;
                line-height: 1.6;
                font-size: 0.95rem;
            }
        }
    }

    /* Large screens and tablets */
    @media (max-width: 1024px) {
        padding: 40px 30px;
        
        .programs-container {
            .programs-grid {
                gap: 18px;
            }
            
            .program-card {
                min-width: 260px;
                padding: 28px 22px;
            }
        }
    }

    /* Medium tablets */
    @media (max-width: 768px) {
        padding: 30px 20px;
        
        .programs-container {
            .section-title {
                font-size: 2rem;
                margin-bottom: 30px;
            }
            
            .programs-grid {
                gap: 15px;
                padding: 15px 0;
            }
            
            .program-card {
                min-width: 240px;
                padding: 25px 20px;
                
                .card-icon {
                    font-size: 2.5rem;
                    margin-bottom: 18px;
                }
                
                h3 {
                    font-size: 1.2rem;
                    margin-bottom: 12px;
                }
                
                p {
                    font-size: 0.9rem;
                }
            }
        }
    }

    /* Small tablets and large phones */
    @media (max-width: 600px) {
        padding: 25px 15px;
        
        .programs-container {
            .section-title {
                font-size: 1.8rem;
                margin-bottom: 25px;
            }
            
            .programs-grid {
                gap: 12px;
                padding: 12px 0;
            }
            
            .program-card {
                min-width: 220px;
                padding: 22px 18px;
                
                .card-icon {
                    font-size: 2.2rem;
                    margin-bottom: 15px;
                }
                
                h3 {
                    font-size: 1.1rem;
                    margin-bottom: 10px;
                }
                
                p {
                    font-size: 0.85rem;
                }
            }
        }
    }

    /* Mobile phones */
    @media (max-width: 480px) {
        padding: 20px 10px;
        
        .programs-container {
            .section-title {
                font-size: 1.6rem;
                margin-bottom: 20px;
            }
            
            .programs-grid {
                gap: 10px;
                padding: 10px 0;
            }
            
            .program-card {
                min-width: 200px;
                padding: 20px 15px;
                
                .card-icon {
                    font-size: 2rem;
                    margin-bottom: 12px;
                }
                
                h3 {
                    font-size: 1rem;
                    margin-bottom: 8px;
                }
                
                p {
                    font-size: 0.8rem;
                }
            }
        }
    }

    /* Very small screens */
    @media (max-width: 360px) {
        padding: 15px 8px;
        
        .programs-container {
            .section-title {
                font-size: 1.4rem;
                margin-bottom: 15px;
            }
            
            .programs-grid {
                gap: 8px;
                padding: 8px 0;
            }
            
            .program-card {
                min-width: 180px;
                padding: 18px 12px;
                
                .card-icon {
                    font-size: 1.8rem;
                    margin-bottom: 10px;
                }
                
                h3 {
                    font-size: 0.9rem;
                    margin-bottom: 6px;
                }
                
                p {
                    font-size: 0.75rem;
                }
            }
        }
    }

    /* Landscape orientation for mobile */
    @media (max-height: 500px) and (orientation: landscape) {
        padding: 20px 15px;
        
        .programs-container {
            .section-title {
                font-size: 1.8rem;
                margin-bottom: 20px;
            }
            
            .programs-grid {
                gap: 15px;
            }
            
            .program-card {
                min-width: 200px;
                padding: 20px 15px;
                
                .card-icon {
                    font-size: 2rem;
                    margin-bottom: 12px;
                }
                
                h3 {
                    font-size: 1rem;
                    margin-bottom: 8px;
                }
                
                p {
                    font-size: 0.8rem;
                }
            }
        }
    }
`

export const SectionThree = styled.div`
    background: #8D24B4;
    min-height: 100vh;
    padding: 40px 20px;

    .packages-container {
        max-width: 1200px;
        margin: 0 auto;
        
        .section-title {
            text-align: center;
            font-size: 2.5rem;
            color: white;
            margin-bottom: 10px;
        }
        
        .section-subtitle {
            text-align: center;
            font-size: 1.2rem;
            color: #f0f0f0;
            margin-bottom: 40px;
            font-weight: 400;
        }

        .packages-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 25px;
            margin-bottom: 60px;
        }

        .package-card {
            background: white;
            border-radius: 15px;
            padding: 30px 25px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;

            &:hover {
                transform: translateY(-5px);
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            }

            &.bronze {
                border: 2px solid #CD7F32;
            }

            &.silver {
                border: 2px solid #C0C0C0;
            }

            &.gold {
                border: 2px solid #FFD700;
            }

            .package-header {
                text-align: center;
                margin-bottom: 25px;

                .package-icon {
                    font-size: 3rem;
                    margin-bottom: 15px;
                    display: block;
                }

                h3 {
                    font-size: 1.8rem;
                    color: #8D24B4;
                    margin-bottom: 10px;
                    font-weight: 600;
                }

                .price {
                    font-size: 1.5rem;
                    color: #666;
                    font-weight: 500;
                }
            }

            .package-features {
                margin-bottom: 25px;

                .feature {
                    display: flex;
                    align-items: center;
                    margin-bottom: 12px;
                    padding: 8px 0;

                    .feature-icon {
                        font-size: 1.1rem;
                        margin-right: 12px;
                        min-width: 25px;
                    }

                    span:last-child {
                        color: #555;
                        font-size: 0.95rem;
                        line-height: 1.3;
                    }
                }
            }

            .package-btn {
                width: 100%;
                padding: 12px;
                background: #8D24B4;
                color: white;
                border: none;
                border-radius: 8px;
                font-size: 1rem;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s ease;

                &:hover {
                    background: #6a1b8a;
                    transform: translateY(-2px);
                }
            }
        }
    }

    /* Responsive Design */
    @media (max-width: 1024px) {
        padding: 35px 20px;
        
        .packages-container {
            .packages-grid {
                gap: 20px;
            }
            
            .package-card {
                padding: 25px 20px;
            }
        }
    }

    @media (max-width: 768px) {
        padding: 30px 15px;
        
        .packages-container {
            .section-title {
                font-size: 2.2rem;
            }
            
            .section-subtitle {
                font-size: 1.1rem;
                margin-bottom: 30px;
            }
            
            .packages-grid {
                grid-template-columns: 1fr;
                gap: 20px;
                margin-bottom: 50px;
            }
            
            .package-card {
                padding: 25px 20px;
                
                .package-header {
                    .package-icon {
                        font-size: 2.5rem;
                    }
                    
                    h3 {
                        font-size: 1.6rem;
                    }
                    
                    .price {
                        font-size: 1.3rem;
                    }
                }
            }
        }
    }

    @media (max-width: 480px) {
        padding: 25px 10px;
        
        .packages-container {
            .section-title {
                font-size: 2rem;
            }
            
            .section-subtitle {
                font-size: 1rem;
                margin-bottom: 25px;
            }
            
            .packages-grid {
                gap: 15px;
                margin-bottom: 40px;
            }
            
            .package-card {
                padding: 20px 15px;
                
                .package-header {
                    .package-icon {
                        font-size: 2.2rem;
                        margin-bottom: 10px;
                    }
                    
                    h3 {
                        font-size: 1.4rem;
                    }
                    
                    .price {
                        font-size: 1.2rem;
                    }
                }
                
                .package-features {
                    .feature {
                        .feature-icon {
                            font-size: 1rem;
                            min-width: 20px;
                        }
                        
                        span:last-child {
                            font-size: 0.85rem;
                        }
                    }
                }
                
                .package-btn {
                    padding: 10px;
                    font-size: 0.95rem;
                }
            }
        }
    }
`

export const SectionFour = styled.div`
    background: #f8f9fa;
    padding: 60px 20px;

    .signup-container {
        max-width: 800px;
        margin: 0 auto;
        text-align: center;

        .signup-title {
            font-size: 2.5rem;
            color: #8D24B4;
            margin-bottom: 15px;
        }

        .signup-subtitle {
            font-size: 1.2rem;
            color: #666;
            margin-bottom: 40px;
            font-weight: 400;
        }

        .signup-form {
            background: white;
            border-radius: 15px;
            padding: 40px 30px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
            text-align: left;

            .form-row {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 20px;
                margin-bottom: 15px;

                @media (max-width: 600px) {
                    grid-template-columns: 1fr;
                    gap: 15px;
                }
            }

            .form-group {
                margin-bottom: 15px;

                label {
                    display: block;
                    margin-bottom: 5px;
                    color: #8D24B4;
                    font-weight: 600;
                    font-size: 0.9rem;
                }

                input, select, textarea {
                    width: 100%;
                    padding: 12px;
                    border: 2px solid #e1e5e9;
                    border-radius: 8px;
                    font-size: 0.95rem;
                    transition: all 0.3s ease;
                    background: #f8f9fa;

                    &:focus {
                        outline: none;
                        border-color: #8D24B4;
                        background: white;
                    }

                    &::placeholder {
                        color: #999;
                    }
                }

                textarea {
                    resize: vertical;
                    min-height: 80px;
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
                margin-top: 15px;

                &:hover {
                    background: #6a1b8a;
                    transform: translateY(-2px);
                }
            }
        }
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        padding: 50px 20px;
        
        .signup-container {
            .signup-title {
                font-size: 2.2rem;
            }
            
            .signup-subtitle {
                font-size: 1.1rem;
                margin-bottom: 35px;
            }
            
            .signup-form {
                padding: 35px 25px;
            }
        }
    }

    @media (max-width: 480px) {
        padding: 40px 15px;
        
        .signup-container {
            .signup-title {
                font-size: 2rem;
            }
            
            .signup-subtitle {
                font-size: 1rem;
                margin-bottom: 30px;
            }
            
            .signup-form {
                padding: 30px 20px;
                
                .form-group {
                    input, select, textarea {
                        padding: 10px;
                        font-size: 0.9rem;
                    }
                }
                
                .submit-btn {
                    padding: 12px;
                    font-size: 1rem;
                }
            }
        }
    }
`

export const AboutMe = styled.div`
    background: white;
    padding: 80px 20px;

    .about-container {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 60px;
        align-items: center;

        @media (max-width: 768px) {
            grid-template-columns: 1fr;
            gap: 40px;
        }
    }

    .about-image {
        img {
            width: 100%;
            height: 500px;
            object-fit: cover;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
            transition: transform 0.3s ease;

            &:hover {
                transform: scale(1.02);
            }
        }

        @media (max-width: 768px) {
            img {
                height: 350px;
            }
        }
    }

    .about-content {
        .about-title {
            font-size: 2.8rem;
            color: #8D24B4;
            margin-bottom: 25px;
            line-height: 1.2;
        }

        .about-description {
            font-size: 1.2rem;
            color: #555;
            line-height: 1.7;
            margin-bottom: 25px;
        }

        .about-benefits {
            list-style: none;
            padding: 0;
            margin: 0;

            li {
                font-size: 1.1rem;
                color: #555;
                padding: 12px 0;
                padding-left: 30px;
                position: relative;
                line-height: 1.5;

                &:before {
                    content: "•";
                    color: #FFD700;
                    font-weight: bold;
                    font-size: 1.8rem;
                    position: absolute;
                    left: 0;
                    top: 8px;
                }
            }
        }

        @media (max-width: 768px) {
            .about-title {
                font-size: 2.4rem;
                margin-bottom: 20px;
            }

            .about-description {
                font-size: 1.1rem;
                margin-bottom: 20px;
            }

            .about-benefits {
                li {
                    font-size: 1rem;
                    padding: 10px 0;
                    padding-left: 25px;

                    &:before {
                        font-size: 1.5rem;
                        top: 6px;
                    }
                }
            }
        }
    }

    @media (max-width: 768px) {
        padding: 60px 20px;
    }
`

export const UpcomingEvents = styled.div`
    background: white;
    padding: 80px 20px;
    
    .events-container {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 60px;
        align-items: start;
        
        @media (max-width: 768px) {
            grid-template-columns: 1fr;
            gap: 40px;
        }
    }
    
    .events-title {
        font-size: 2.5rem;
        color: #8D24B4;
        margin-bottom: 30px;
        text-align: center;
        
        @media (max-width: 768px) {
            font-size: 2rem;
        }
    }
    
    .calendar-section {
        .calendar {
            background: white;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(141, 36, 180, 0.1);
            padding: 20px;
            border: 2px solid #f0f0f0;
        }
        
        .calendar-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            
            h3 {
                font-size: 1.3rem;
                color: #8D24B4;
                margin: 0;
                font-weight: 600;
            }
            
            .nav-btn {
                background: #8D24B4;
                color: white;
                border: none;
                width: 35px;
                height: 35px;
                border-radius: 50%;
                cursor: pointer;
                font-size: 1.2rem;
                transition: all 0.3s ease;
                
                &:hover {
                    background: #7a1f9e;
                    transform: scale(1.1);
                }
            }
        }
        
        .calendar-grid {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            gap: 2px;
        }
        
        .calendar-day-header {
            text-align: center;
            font-weight: 600;
            color: #8D24B4;
            padding: 10px 5px;
            font-size: 0.9rem;
        }
        
        .calendar-day {
            aspect-ratio: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            border-radius: 8px;
            font-weight: 500;
            transition: all 0.3s ease;
            position: relative;
            
            &:hover {
                background: #f8f9fa;
                transform: scale(1.05);
            }
            
            &.has-event {
                background: #FFD700;
                color: #8D24B4;
                font-weight: 600;
                
                &:hover {
                    background: #ffed4e;
                    transform: scale(1.1);
                }
                
                &::after {
                    content: '•';
                    position: absolute;
                    bottom: 2px;
                    color: #8D24B4;
                    font-size: 1.2rem;
                }
            }
            
            &.today {
                border: 2px solid #8D24B4;
                font-weight: 700;
            }
            
            &.other-month {
                color: #ccc;
                cursor: default;
                
                &:hover {
                    background: transparent;
                    transform: none;
                }
            }
        }
    }
    
    .flier-section {
        .flier-container {
            background: white;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(141, 36, 180, 0.1);
            padding: 20px;
            border: 2px solid #f0f0f0;
            min-height: 400px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .event-flier {
            text-align: center;
            width: 100%;
            
            img {
                width: 100%;
                max-width: 300px;
                height: 200px;
                object-fit: cover;
                border-radius: 10px;
                margin-bottom: 20px;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            }
            
            .event-info {
                h3 {
                    color: #8D24B4;
                    font-size: 1.5rem;
                    margin-bottom: 10px;
                    font-weight: 600;
                }
                
                p {
                    margin: 5px 0;
                    color: #666;
                    
                    &.event-date, &.event-time, &.event-location {
                        font-weight: 500;
                        color: #8D24B4;
                    }
                    
                    &.event-description {
                        color: #666;
                        line-height: 1.6;
                        margin-top: 15px;
                    }
                }
            }
        }
        
        .no-event-selected {
            text-align: center;
            color: #999;
            
            .placeholder-icon {
                font-size: 4rem;
                margin-bottom: 20px;
                opacity: 0.5;
            }
            
            h3 {
                color: #8D24B4;
                margin-bottom: 10px;
                font-size: 1.3rem;
            }
            
            p {
                color: #666;
                line-height: 1.5;
            }
        }
    }
    
    @media (max-width: 768px) {
        padding: 60px 20px;
        
        .events-container {
            gap: 30px;
        }
        
        .calendar-section .calendar {
            padding: 15px;
        }
        
        .calendar-section .calendar-day {
            font-size: 0.9rem;
        }
        
        .flier-section .flier-container {
            min-height: 300px;
            padding: 15px;
        }
    }
`