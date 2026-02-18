import styled from "styled-components";


export const Page = styled.div`
  --hm-purple: #6e2b8a;
  --hm-purple-dark: #4f1f63;
  --hm-bg: #f7f3f9;
  --hm-card: #ffffff;
  --hm-text: #1f1f1f;
  --hm-muted: #6b7280;
  --hm-border: #e6e0ea;
  --hm-focus: rgba(110, 43, 138, 0.25);
  --hm-danger: #b42318;
  --radius: 16px;

  background: var(--hm-card);
  box-shadow: 0 14px 40px rgba(31, 31, 31, 0.08);
  min-height: 100vh;
  border-radius: 10px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial;
  color: var(--hm-text);
`;

export const Hero = styled.header`
  padding: 38px 16px;
`;

export const Container = styled.div`
  max-width: 980px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Card = styled.section`
  background: var(--hm-card);
  /* border: 1px solid var(--hm-border); */
  border-radius: var(--radius);
  margin: -18px auto 28px auto;
  overflow: hidden;
`;

export const CardHeader = styled.div`
  padding: 18px 18px 0 18px;
`;

export const Form = styled.form`
  padding: 18px;
`;

export const Block = styled.div`
  border: 1px solid var(--hm-border);
  border-radius: 14px;
  padding: 14px;
  background: #fff;
`;

export const BlockTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px 16px;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 11px 12px;
  border: 1px solid var(--hm-border);
  border-radius: 12px;
  font-size: 14px;

  &:focus {
    border-color: var(--hm-purple);
    box-shadow: 0 0 0 4px var(--hm-focus);
    outline: none;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 11px 12px;
  border-radius: 12px;
  border: 1px solid var(--hm-border);
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 11px 12px;
  border-radius: 12px;
  border: 1px solid var(--hm-border);
  min-height: 96px;
`;

export const NeedsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 12px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const NeedCard = styled.div`
  border: 1px solid var(--hm-border);
  border-radius: 14px;
  padding: 12px;
`;

export const CheckboxRow = styled.label`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  font-size: 13px;
`;

export const Button = styled.button`
  padding: 12px 16px;
  border-radius: 14px;
  border: none;
  background: var(--hm-purple);
  color: white;
  font-weight: 800;
  cursor: pointer;

  &:hover {
    background: var(--hm-purple-dark);
  }
`;

export const ErrorBox = styled.div`
  display: ${({ show }) => (show ? "block" : "none")};
  margin-top: 10px;
  background: #fff;
  border: 1px solid #f3c5c5;
  color: #7a0b0b;
  border-radius: 12px;
  padding: 10px 12px;
  font-size: 13px;
`;

export const ModalOverlay = styled.div`
  display: ${({ show }) => (show ? "block" : "none")};
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  padding: 18px;
  z-index: 9999;
`;

export const ModalCard = styled.div`
  max-width: 520px;
  margin: 10vh auto 0 auto;
  background: white;
  border-radius: 16px;
  padding: 16px;
`;