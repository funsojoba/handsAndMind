import styled from "styled-components";



export const Container = styled.div`
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, "Helvetica Neue", sans-serif;
        color: #1f1f1f;
        background: #f7f3f9;
        line-height: 1.4;
    

    .hm-container {
      max-width: 980px;
      margin: 0 auto;
      padding: 0 16px;
    }


    .hm-card {
      background: #ffffff;
      border: 1px solid #e6e0ea;
      border-radius: 14px;
      box-shadow: 0 10px 30px rgba(31, 31, 31, 0.06);
      margin: -18px auto 28px auto;
      overflow: hidden;
    }

    .hm-card-header{
      padding: 18px 18px 0 18px;
    }

    .hm-card-header h2{
      margin: 0 0 6px 0;
      font-size: 18px;
      font-weight: 700;
    }

    .hm-card-header .hint{
      margin: 0 0 12px 0;
      color: #6b7280;
      font-size: 13px;
    }

    form{
      padding: 0 18px 18px 18px;
    }

    .hm-grid{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px 16px;
    }

    @media (max-width: 760px){
      .hm-grid{ grid-template-columns: 1fr; }
    }

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

    
    .hm-section{
      margin-top: 14px;
      padding-top: 14px;
      border-top: 1px dashed #e6e0ea;
    }

    .hm-section-title{
      grid-column: 1 / -1;
      margin: 0;
      font-size: 14px;
      font-weight: 800;
      color: #4f1f63;
    }

    .hm-checkbox{
      display: flex;
      align-items: flex-start;
      gap: 10px;
      padding: 10px 12px;
      border: 1px solid #e6e0ea;
      border-radius: 10px;
      background: #fff;
    }

    .hm-checkbox input{
      margin-top: 2px;
      transform: scale(1.1);
    }

    .hm-checkbox label{
      font-weight: 600;
      margin: 0;
    }


    .hm-footnote{
      margin-top: 10px;
      color: #6b7280;
      font-size: 12px;
    }
`



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