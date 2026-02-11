import styled from "styled-components";


export const FormDiv = styled.form`

    .hm-field{
        display: flex;
        flex-direction: column;
        gap: 6px;
        }

    label{
      font-size: 13px;
      font-weight: 650;
    }

    .req{
      color: #b42318;
      font-weight: 800;
      margin-left: 4px;
    }

    input[type="text"],
    input[type="email"],
    input[type="tel"],
    textarea,
    select{
      width: 100%;
      padding: 10px 12px;
      border-radius: 10px;
      border: solid 1px #e6e0ea;
      outline: none;
      background: #fff;
      font-size: 14px;
      transition: box-shadow 0.15s ease, border-color 0.15s ease;
    }

    textarea{
      min-height: 42px;
      resize: vertical;
    }

    input:focus, textarea:focus, select:focus{
      border-color: #6e2b8a;
      box-shadow: 0 0 0 4px rgba(110, 43, 138, 0.25);
    }

    .hm-actions{
      display: flex;
      gap: 10px;
      justify-content: flex-end;
      margin-top: 16px;
      padding-top: 16px;
      border-top: 1px solid #e6e0ea;
    }

    .hm-btn{
      appearance: none;
      border: none;
      cursor: pointer;
      border-radius: 12px;
      padding: 11px 14px;
      font-weight: 750;
      font-size: 14px;
    }

    .hm-btn-primary{
      background: #6e2b8a;
      color: #fff;
    }

    .hm-btn-primary:hover{
      background: #4f1f63;
    }
    .hm-footnote{
      margin-top: 10px;
      color: #6b7280;
      font-size: 12px;
    }
`