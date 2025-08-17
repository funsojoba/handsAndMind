import styled from "styled-components"

export const EventsContainer = styled.div`
    background: #f8f9fa;
    min-height: 100vh;
    padding: 80px 20px;
    
    .events-header {
        max-width: 1200px;
        margin: 0 auto 60px;
        text-align: center;
        
        .page-title {
            font-size: 3rem;
            color: #8D24B4;
            margin-bottom: 20px;
            font-weight: 700;
            
            @media (max-width: 768px) {
                font-size: 2.5rem;
            }
            
            @media (max-width: 480px) {
                font-size: 2rem;
            }
        }
        
        .page-subtitle {
            font-size: 1.2rem;
            color: #666;
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto;
            
            @media (max-width: 768px) {
                font-size: 1.1rem;
            }
        }
    }
    
    .events-grid {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: 30px;
        
        @media (max-width: 768px) {
            grid-template-columns: 1fr;
            gap: 25px;
        }
    }
`

export const EventCard = styled.div`
    background: white;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(141, 36, 180, 0.1);
    border: 2px solid #f0f0f0;
    transition: all 0.3s ease;
    
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 40px rgba(141, 36, 180, 0.15);
        border-color: #8D24B4;
    }
`

export const EventImage = styled.div`
    width: 100%;
    height: 200px;
    overflow: hidden;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        aspect-ratio: 2 / 1;
        transition: transform 0.3s ease;
    }
    
    ${EventCard}:hover & img {
        transform: scale(1.05);
    }
`

export const EventDetails = styled.div`
    padding: 25px;
    
    @media (max-width: 768px) {
        padding: 20px;
    }
`

export const EventDate = styled.div`
    color: #8D24B4;
    font-weight: 600;
    font-size: 0.9rem;
    margin-bottom: 10px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
`

export const EventTitle = styled.h2`
    color: #333;
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 15px;
    line-height: 1.3;
    
    @media (max-width: 768px) {
        font-size: 1.3rem;
    }
`

export const EventTime = styled.div`
    color: #666;
    font-size: 0.95rem;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 5px;
`

export const EventLocation = styled.div`
    color: #666;
    font-size: 0.95rem;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    gap: 5px;
`

export const EventDescription = styled.p`
    color: #555;
    line-height: 1.6;
    margin-bottom: 20px;
    font-size: 0.95rem;
`

export const RegisterButton = styled.a`
    display: inline-block;
    background: #8D24B4;
    color: white;
    text-decoration: none;
    padding: 12px 24px;
    border-radius: 25px;
    font-weight: 600;
    font-size: 0.95rem;
    transition: all 0.3s ease;
    border: 2px solid #8D24B4;
    text-align: center;
    
    &:hover {
        background: #7a1f9e;
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(141, 36, 180, 0.3);
    }
    
    &:active {
        transform: translateY(0);
    }
`

export const NoEvents = styled.div`
    grid-column: 1 / -1;
    text-align: center;
    padding: 80px 20px;
    background: white;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(141, 36, 180, 0.1);
    border: 2px solid #f0f0f0;
    
    .no-events-icon {
        font-size: 4rem;
        margin-bottom: 20px;
        opacity: 0.5;
    }
    
    h2 {
        color: #8D24B4;
        font-size: 1.8rem;
        margin-bottom: 15px;
        font-weight: 600;
    }
    
    p {
        color: #666;
        font-size: 1.1rem;
        line-height: 1.5;
    }
    
    @media (max-width: 768px) {
        padding: 60px 20px;
        
        .no-events-icon {
            font-size: 3rem;
        }
        
        h2 {
            font-size: 1.5rem;
        }
        
        p {
            font-size: 1rem;
        }
    }
`
