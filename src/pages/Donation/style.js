import styled from "styled-components";




export const DonateContainer = styled.div`
    background: #f8f9fa;
    min-height: 100vh;
    padding: 80px 20px;
    
    .donate-header {
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

    .donate-section {
        box-shadow: 0 10px 30px rgba(141, 36, 180, 0.1);
        background: #fff;
        border-radius: 20px;
        padding: 40px;
        max-width: 600px;
        margin: 0 auto;

        &-header{
            display: flex;
            justify-content: space-between;
            align-items: center;

            .recurring-button label{
                font-size: 1rem;
                color: #555;
                cursor: pointer;

                input {
                    margin-right: 8px;
                }
            }
        }

        @media (max-width: 768px) {
            padding: 30px 20px;
        }
    }
`






export const DonationContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

export const AmountButton = styled.button`
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  cursor: pointer;
  margin: 0.5rem;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const CustomAmountInput = styled.input`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  width: 150px;
`;

export const DonateButton = styled.button`
  margin-left: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background: #6772e5;
  color: white;
  cursor: pointer;

  &:hover {
    background: #5469d4;
  }
`;



export const SuccessPaymentDiv = styled.div`
    text-align: center;
    padding: 4rem 2rem;

    .success-message {
        font-size: 2rem;
        color: #28a745;
        margin-bottom: 1rem;
        font-weight: 700;
    }

    .thank-you-note {
        font-size: 1.2rem;
        color: #555;
        margin-bottom: 2rem;
    }

    .home-button {
        padding: 10px 20px;
        border: none;
        border-radius: 8px;
        background: #6772e5;
        color: white;
        cursor: pointer;
        text-decoration: none;

        &:hover {
            background: #5469d4;
        }
    }
`