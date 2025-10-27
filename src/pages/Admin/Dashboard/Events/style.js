import styled from "styled-components"

export const EventsContainer = styled.div`
    width: 100%;
`

export const EventsList = styled.div`
    display: grid;
    gap: 20px;
    margin-top: 20px;

    p {
        color: #666;
        font-size: 1.1rem;
    }
`

export const EventCard = styled.div`
    background: white;
    border-radius: 12px;
    padding: 0;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border-left: 4px solid #8D24B4;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    .event-content {
        display: flex;
        padding: 25px;
        gap: 20px;

        .image {
            flex-shrink: 0;
            width: 200px;
            height: 150px;
            border-radius: 8px;
            overflow: hidden;
            background: #f8f9fa;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .text {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 12px;

            h2 {
                margin: 0;
                color: #8D24B4;
                font-size: 1.4rem;
                font-weight: 600;
                line-height: 1.3;
            }

            p {
                margin: 0;
                color: #666;
                line-height: 1.5;
                font-size: 0.95rem;
            }

            .date-time {
                display: flex;
                gap: 20px;
                margin-top: auto;

                small {
                    color: #8D24B4;
                    font-weight: 500;
                    font-size: 0.9rem;
                }
            }


            .event-link {
                color: #FFD700;
                background: #8D24B4;
                border: none;
                padding: 15px 30px;
                border-radius: 25px;
                font-size: 1.1rem;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s ease;
                text-decoration: none;
                
                &:hover {
                    background: #48155aff;
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(255, 0, 0, 0.3);
                }
            }
        }
    }

    .event-actions {
        display: flex;
        gap: 10px;
        padding: 20px 25px;
        background: #f8f9fa;
        border-top: 1px solid #e9ecef;
        justify-content: flex-end;

        button {
            padding: 8px 16px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-size: 0.9rem;
            font-weight: 500;
            transition: all 0.3s ease;

            &:not(.danger) {
                background: #8D24B4;
                color: white;

                &:hover {
                    background: #7a1f9e;
                }
            }

            &.danger {
                background: #dc3545;
                color: white;

                &:hover {
                    background: #c82333;
                }
            }
        }
    }

    @media (max-width: 768px) {
        .event-content {
            flex-direction: column;
            padding: 20px;

            .image {
                width: 100%;
                height: 200px;
            }
        }

        .event-actions {
            padding: 15px 20px;
            flex-direction: column;

            button {
                width: 100%;
            }
        }
    }
`

export const EventForm = styled.form`
    background: white;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
`

export const FormGroup = styled.div`
    margin-bottom: 20px;

    label {
        display: block;
        margin-bottom: 8px;
        color: #333;
        font-weight: 500;
    }

    input, textarea, select {
        width: 100%;
        padding: 12px 15px;
        border: 2px solid #e1e5e9;
        border-radius: 8px;
        font-size: 1rem;
        transition: border-color 0.3s ease;

        &:focus {
            outline: none;
            border-color: #8D24B4;
            box-shadow: 0 0 0 3px rgba(141, 36, 180, 0.1);
        }
    }

    textarea {
        resize: vertical;
        min-height: 100px;
    }
`

export const ActionButtons = styled.div`
    display: flex;
    gap: 15px;
    margin-bottom: 30px;

    button {
        padding: 12px 24px;
        border: none;
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;

        &.primary {
            background: #8D24B4;
            color: white;

            &:hover {
                background: #7a1f9e;
                transform: translateY(-2px);
                box-shadow: 0 5px 15px rgba(141, 36, 180, 0.3);
            }
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        
        button {
            width: 100%;
        }
    }
`

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 20px;
`

export const ModalContent = styled.div`
    background: white;
    border-radius: 12px;
    width: 100%;
    max-width: 600px;
    max-height: 90vh;
    overflow-y: auto;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 30px;
    border-bottom: 1px solid #e1e5e9;

    h2 {
        margin: 0;
        color: #8D24B4;
        font-size: 1.5rem;
        font-weight: 600;
    }

    button {
        background: none;
        border: none;
        font-size: 2rem;
        cursor: pointer;
        color: #666;
        padding: 0;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
            color: #333;
        }
    }
`

export const ModalBody = styled.div`
    padding: 30px;
`

export const ModalFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 15px;
    padding: 25px 30px;
    border-top: 1px solid #e1e5e9;

    button {
        padding: 12px 24px;
        border: none;
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;

        &:not(.primary) {
            background: #6c757d;
            color: white;

            &:hover {
                background: #5a6268;
            }
        }

        &.primary {
            background: #8D24B4;
            color: white;

            &:hover {
                background: #7a1f9e;
            }
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        
        button {
            width: 100%;
        }
    }
`
