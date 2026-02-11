import styled from "styled-components";


export const Container = styled.div`
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, "Helvetica Neue", sans-serif;
        color: var(--hm-text);
        background: var(--hm-bg);
        line-height: 1.4;
    

    .hm-container {
      max-width: 980px;
      margin: 0 auto;
      padding: 0 16px;
    }


    .hm-card {
      background: var(--hm-card);
      border: 1px solid var(--hm-border);
      border-radius: var(--radius);
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
      color: var(--hm-muted);
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
      border-top: 1px dashed var(--hm-border);
    }

    .hm-section-title{
      grid-column: 1 / -1;
      margin: 0;
      font-size: 14px;
      font-weight: 800;
      color: var(--hm-purple-dark);
    }

    .hm-checkbox{
      display: flex;
      align-items: flex-start;
      gap: 10px;
      padding: 10px 12px;
      border: 1px solid var(--hm-border);
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
      color: var(--hm-muted);
      font-size: 12px;
    }
`

export const HeaderDiv = styled.header`
    background: linear-gradient(135deg, #8D24B4 0%, #38064bff 100%);
    padding: 50px;
    color: #fff;
    height: 250px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`