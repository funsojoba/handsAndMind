import styled from "styled-components"

export const AdminAuthContainer = styled.div`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #8D24B4 0%, #38064bff 100%);
    padding: 20px;
`

export const AuthForm = styled.form`
    background: white;
    padding: 40px;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    width: 100%;
    max-width: 400px;

    h1 {
        text-align: center;
        color: #8D24B4;
        margin-bottom: 30px;
        font-size: 2rem;
        font-weight: 600;
    }

    @media (max-width: 768px) {
        padding: 30px 20px;
        max-width: 350px;
    }
`

export const AuthToggle = styled.div`
    display: flex;
    margin-bottom: 30px;
    background: #f8f9fa;
    border-radius: 8px;
    padding: 4px;

    button {
        flex: 1;
        padding: 12px;
        border: none;
        background: transparent;
        color: #666;
        font-weight: 500;
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.3s ease;

        &.active {
            background: #8D24B4;
            color: white;
        }

        &:hover:not(.active) {
            background: #e9ecef;
        }
    }
`

export const FormGroup = styled.div`
    margin-bottom: 20px;

    label {
        display: block;
        margin-bottom: 8px;
        color: #333;
        font-weight: 500;
    }

    input {
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
`

export const SubmitButton = styled.button`
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
    margin-top: 10px;

    &:hover:not(:disabled) {
        background: #7a1f9e;
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(141, 36, 180, 0.3);
    }

    &:disabled {
        background: #ccc;
        cursor: not-allowed;
        transform: none;
        box-shadow: none;
    }
`

export const ErrorMessage = styled.div`
    background: #f8d7da;
    color: #721c24;
    padding: 12px;
    border-radius: 8px;
    margin-bottom: 15px;
    border: 1px solid #f5c6cb;
    font-size: 0.9rem;
`

export const SuccessMessage = styled.div`
    background: #d4edda;
    color: #155724;
    padding: 12px;
    border-radius: 8px;
    margin-bottom: 15px;
    border: 1px solid #c3e6cb;
    font-size: 0.9rem;
`
