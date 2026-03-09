import { useState, useRef, useCallback } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { ThreeDots } from 'react-loader-spinner'

// ─── Design Tokens ───────────────────────────────────────────────────────────
const tokens = {
  purple: "#6e2b8a",
  purpleDark: "#4f1f63",
  purpleLight: "#f7f3f9",
  purpleFocus: "rgba(110,43,138,0.22)",
  bg: "#f0eaf4",
  card: "#ffffff",
  text: "#1a1a2e",
  muted: "#6b7280",
  border: "#e0d5e8",
  danger: "#b42318",
  dangerBg: "#fff5f5",
  dangerBorder: "#f3c5c5",
  radius: "16px",
  radiusSm: "12px",
};

// ─── Global Style ────────────────────────────────────────────────────────────
const GlobalStyle = createGlobalStyle`

  *, *::before, *::after { box-sizing: border-box; }
  body {
    margin: 0;
    /* font-family: 'montserrat' serif; */
    background: ${tokens.bg};
    color: ${tokens.text};
    line-height: 1.5;
    min-height: 100vh;
  }
`;

// ─── Animations ───────────────────────────────────────────────────────────────
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
`;


// ─── Styled Components ───────────────────────────────────────────────────────
const Hero = styled.header`
  background: linear-gradient(135deg, ${tokens.purple} 0%, ${tokens.purpleDark} 100%);
  color: #fff;
  padding: 52px 16px 72px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Ccircle cx='30' cy='30' r='28'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat;
    pointer-events: none;
  }
`;

const HeroInner = styled.div`
  max-width: 980px;
  margin: 0 auto;
  padding: 0 16px;
  position: relative;
  animation: ${fadeUp} 0.55s ease both;
`;

const HeroHeading = styled.h1`
  margin: 0 0 10px 0;
  font-size: clamp(28px, 5vw, 42px);
  font-weight: 900;
  letter-spacing: -0.5px;
`;

const HeroSub = styled.p`
  margin: 0;
  opacity: 0.92;
  max-width: 680px;
  font-size: 16px;
`;

const Container = styled.div`
  max-width: 980px;
  margin: 0 auto;
  padding: 0 16px;
`;

const Card = styled.section`
  background: ${tokens.card};
  border: 1px solid ${tokens.border};
  border-radius: ${tokens.radius};
  box-shadow: 0 20px 60px rgba(31,31,31,0.09);
  margin: -32px auto 40px auto;
  overflow: hidden;
  animation: ${fadeUp} 0.6s 0.1s ease both;
`;

const CardHeader = styled.div`
  padding: 24px 24px 0;
  border-bottom: 1px solid ${tokens.border};
  padding-bottom: 16px;
`;

const CardTitle = styled.h2`
  margin: 0 0 4px 0;
  font-size: 20px;
  font-weight: 900;
  color: ${tokens.purpleDark};
`;

const Hint = styled.p`
  margin: 0;
  color: ${tokens.muted};
  font-size: 13px;
`;

const Req = styled.span`
  color: ${tokens.danger};
  font-weight: 900;
  margin-left: 3px;
`;

const StyledForm = styled.form`
  padding: 20px 24px 24px;
`;

const Block = styled.div`
  border: 1px solid ${tokens.border};
  border-radius: 14px;
  padding: 18px;
  background: #fff;
`;

const BlockTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin: 0 0 14px 0;
`;

const BlockHeading = styled.h3`
  margin: 0;
  font-size: 15px;
  font-weight: 900;
  color: ${tokens.purpleDark};
`;

const RequiredNote = styled.p`
  font-size: 12px;
  color: ${tokens.muted};
  margin: 0;
  white-space: nowrap;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px 18px;
  align-items: start;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
  ${({ span2 }) => span2 && "grid-column: 1 / -1;"}
`;

const Label = styled.label`
  font-size: 13px;
  font-weight: 700;
`;

const inputBase = `
  width: 100%;
  padding: 11px 13px;
  border: 1.5px solid ${tokens.border};
  border-radius: 12px;
  background: #fff;
  font-size: 14px;
  font-family: 'DM Sans', sans-serif;
  outline: none;
  color: ${tokens.text};
  transition: box-shadow 0.15s ease, border-color 0.15s ease;

  &:focus {
    border-color: ${tokens.purple};
    box-shadow: 0 0 0 4px ${tokens.purpleFocus};
  }

  &::placeholder {
    color: #bbb;
  }
`;

const Input = styled.input`${inputBase}`;
const Select = styled.select`
  ${inputBase}
  appearance: auto;
  cursor: pointer;
  &:disabled { background: #f9f9f9; color: #aaa; cursor: not-allowed; }
`;
const Textarea = styled.textarea`
  ${inputBase}
  min-height: 96px;
  resize: vertical;
`;

const HelpText = styled.p`
  margin: 2px 0 0;
  color: ${tokens.muted};
  font-size: 12px;
  line-height: 1.4;
`;

const Divider = styled.hr`
  margin: 18px 0;
  border: 0;
  border-top: 1.5px dashed ${tokens.border};
`;

const NeedsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 14px;
  margin-top: 14px;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

const NeedCard = styled.div`
  border: 1px solid ${tokens.border};
  border-radius: 14px;
  background: #fdfaff;
  padding: 14px;
`;

const NeedCardHeading = styled.h4`
  margin: 0 0 12px 0;
  font-size: 13px;
  font-weight: 900;
  color: ${tokens.purpleDark};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const CheckLabel = styled.label`
  display: flex;
  gap: 10px;
  align-items: flex-start;
  padding: 9px 10px;
  border: 1.5px solid ${({ checked }) => checked ? tokens.purple : tokens.border};
  border-radius: 12px;
  margin-bottom: 8px;
  background: ${({ checked }) => checked ? "rgba(110,43,138,0.05)" : "#fff"};
  cursor: pointer;
  transition: border-color 0.15s, background 0.15s, transform 0.05s;

  &:last-child { margin-bottom: 0; }
  &:hover { border-color: ${tokens.purple}; background: rgba(110,43,138,0.04); }
  &:active { transform: scale(0.99); }
`;

const CheckInput = styled.input`
  margin-top: 2px;
  transform: scale(1.15);
  accent-color: ${tokens.purple};
  flex-shrink: 0;
`;

const CheckSpan = styled.span`
  font-size: 13px;
  font-weight: 600;
  line-height: 1.4;
`;

const ErrorBox = styled.div`
  margin-top: 10px;
  background: ${tokens.dangerBg};
  border: 1px solid ${tokens.dangerBorder};
  color: #7a0b0b;
  border-radius: 12px;
  padding: 10px 13px;
  font-size: 13px;
  display: ${({ visible }) => visible ? "block" : "none"};
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 18px;
`;

const SubmitBtn = styled.button`
  appearance: none;
  border: none;
  cursor: pointer;
  border-radius: 14px;
  padding: 13px 28px;
  font-weight: 800;
  font-size: 15px;
  font-family: 'DM Sans', sans-serif;
  background: ${tokens.purple};
  color: #fff;
  box-shadow: 0 10px 24px rgba(110,43,138,0.22);
  transition: background 0.15s, transform 0.1s, box-shadow 0.15s;
  letter-spacing: 0.2px;

  &:hover {
    background: ${tokens.purpleDark};
    box-shadow: 0 14px 30px rgba(110,43,138,0.28);
    transform: translateY(-1px);
  }
  &:active { transform: scale(0.98); }
`;

const Footnote = styled.p`
  margin: 12px 0 0;
  color: ${tokens.muted};
  font-size: 12px;
  text-align: right;
`;

// ─── Modal ────────────────────────────────────────────────────────────────────
const Overlay = styled.div`
  display: ${({ visible }) => visible ? "flex" : "none"};
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.38);
  padding: 18px;
  z-index: 9999;
  align-items: flex-start;
  justify-content: center;
`;

const ModalCard = styled.div`
  max-width: 520px;
  width: 100%;
  background: #fff;
  border: 1px solid ${tokens.border};
  border-radius: 16px;
  box-shadow: 0 24px 70px rgba(0,0,0,0.28);
  overflow: hidden;
  margin-top: 10vh;
  animation: ${fadeUp} 0.25s ease both;
`;

const ModalHeader = styled.div`
  background: linear-gradient(135deg, ${tokens.purple}, ${tokens.purpleDark});
  color: #fff;
  padding: 14px 18px;
  font-weight: 900;
  font-size: 15px;
`;

const ModalBody = styled.div`
  padding: 16px 18px;
  color: ${tokens.text};
  font-size: 14px;
  line-height: 1.5;
`;

const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 18px 18px;
`;

const SecondaryBtn = styled.button`
  appearance: none;
  border: 1.5px solid ${tokens.border};
  cursor: pointer;
  border-radius: 12px;
  padding: 10px 20px;
  font-weight: 800;
  font-size: 14px;
  font-family: 'DM Sans', sans-serif;
  background: #f3eef6;
  color: ${tokens.purpleDark};
  transition: background 0.15s;

  &:hover { background: #ece4f2; }
`;

// ─── Data ─────────────────────────────────────────────────────────────────────
const CITIES_BY_PROVINCE = {
  Alberta: ["Calgary","Edmonton","Red Deer","Lethbridge","Other"],
  "British Columbia": ["Vancouver","Surrey","Burnaby","Richmond","Victoria","Other"],
  Manitoba: ["Winnipeg","Other"],
  "New Brunswick": ["Other"],
  "Newfoundland and Labrador": ["St. John's","Other"],
  "Northwest Territories": ["Other"],
  "Nova Scotia": ["Halifax","Other"],
  Nunavut: ["Other"],
  Ontario: ["Toronto","Mississauga","Brampton","Hamilton","Ottawa","Kitchener","London","Markham","Vaughan","Windsor","Other"],
  "Prince Edward Island": ["Other"],
  Quebec: ["Montreal","Quebec City","Laval","Gatineau","Other"],
  Saskatchewan: ["Saskatoon","Regina","Other"],
  Yukon: ["Other"],
  Other: ["Other"],
};

const NEEDS = [
  {
    group: "Practical Support",
    items: ["Laundry Assistance","Meal Prep","Emergency Cleaning"],
  },
  {
    group: "Community Connection",
    items: ["Hearts and Mind Brunch Invites","Join a POD"],
  },
  {
    group: "Cultural Support",
    items: ["Indigenous Healing Circles","Black Parent Affinity Group"],
  },
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// ─── Component ────────────────────────────────────────────────────────────────
export default function SupportRequestSalesForce() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [contactMethod, setContactMethod] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [notes, setNotes] = useState("");
  const [selectedNeeds, setSelectedNeeds] = useState([]);
  const [needsError, setNeedsError] = useState(false);
  const [modal, setModal] = useState({ visible: false, message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const needsRef = useRef(null);
  const formRef = useRef(null);

  const cities = province ? (CITIES_BY_PROVINCE[province] || ["Other"]) : [];

  const handleProvinceChange = (e) => {
    setProvince(e.target.value);
    setCity("");
  };

  const toggleNeed = useCallback((value) => {
    setSelectedNeeds((prev) => {
      const next = prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value];
      if (next.length > 0) setNeedsError(false);
      return next;
    });
  }, []);

  const openModal = (message) => setModal({ visible: true, message });
  const closeModal = () => setModal({ visible: false, message: "" });

  const handleSubmit = (e) => {
    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      e.preventDefault();
      openModal("Email is required. Please enter your email address.");
      return;
    }
    if (!EMAIL_REGEX.test(trimmedEmail)) {
      e.preventDefault();
      openModal("The email you entered doesn't look valid. Please enter a correct email address (example: name@example.com).");
      return;
    }
    if (!province) {
      e.preventDefault();
      openModal("Please select a Chapter (Province) before submitting.");
      return;
    }
    if (!city) {
      e.preventDefault();
      openModal("Please select a Pod (City) before submitting.");
      return;
    }
    if (selectedNeeds.length === 0) {
      e.preventDefault();
      setNeedsError(true);
      needsRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setIsLoading(true);
    
    // If all validations pass, form submits natively to Salesforce
  };

  return (
    <>
      <GlobalStyle />

      <Hero>
        <HeroInner>
          <HeroHeading>Support Request</HeroHeading>
          <HeroSub>
            Please share what you need. Our team will review your request and
            follow up as soon as possible.
          </HeroSub>
        </HeroInner>
      </Hero>

      <Container>
        <Card>
          <CardHeader>
            <CardTitle>Hearts &amp; Mind Support Request</CardTitle>
            <Hint>
              Fields marked with <Req>*</Req> help us respond faster.
            </Hint>
          </CardHeader>

          {/* <input type="hidden" name="retURL" value="https://heartsandmind.org/support-request-success.html"> */}


          <StyledForm
            ref={formRef}
            id="hmWebToCaseForm"
            action="https://webto.salesforce.com/servlet/servlet.WebToCase"
            // action="https://webto.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8"
            method="POST"
            onSubmit={handleSubmit}
            noValidate
          >
            {/* Hidden Salesforce fields */}
            <input type="hidden" name="orgid" value="00Dau000008c2oz"></input>
            <input type="hidden" name="retURL" value="https://heartsandmind.org/support-success" />
            <input type="hidden" name="subject" value="Caregiver Support Request" />

            {/* Sync selected needs into hidden multi-select for Salesforce */}
            <div style={{ display: "none" }} aria-hidden="true">
              <select
                id="00NbZ000002e9Ur"
                multiple
                name="00NbZ000002e9Ur"
                title="Caregiver Needs"
                readOnly
                value={selectedNeeds}
                onChange={() => {}}
              >
                {NEEDS.flatMap(({ items }) =>
                  items.map((item) => (
                    <option key={item} value={item}>{item}</option>
                  ))
                )}
              </select>
            </div>

            {/* ── Contact Info ── */}
            <Block>
              <BlockTitle>
                <BlockHeading>Contact Info</BlockHeading>
                <RequiredNote>
                  Required: <Req>*</Req>
                </RequiredNote>
              </BlockTitle>

              <FormGrid>
                {/* Full Name */}
                <Field>
                  <Label htmlFor="name">Full Name<Req>*</Req></Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    maxLength={80}
                    autoComplete="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Field>

                {/* Email */}
                <Field>
                  <Label htmlFor="email">Email<Req>*</Req></Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    maxLength={80}
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Field>

                {/* Phone */}
                <Field>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    maxLength={40}
                    autoComplete="tel"
                    placeholder="+1 (555) 555-5555"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Field>

                {/* Preferred Contact Method */}
                <Field>
                  <Label htmlFor="00NbZ000002e9TF">Preferred Contact Method</Label>
                  <Select
                    id="00NbZ000002e9TF"
                    name="00NbZ000002e9TF"
                    title="Preferred Contact Method"
                    value={contactMethod}
                    onChange={(e) => setContactMethod(e.target.value)}
                  >
                    <option value="">--None--</option>
                    <option value="Email">Email</option>
                    <option value="Text">Text</option>
                    <option value="Phone Call">Phone Call</option>
                  </Select>
                </Field>

                {/* Chapter (Province) */}
                <Field>
                  <Label htmlFor="00NbZ000002gEoc">
                    Chapter (Province)<Req>*</Req>
                  </Label>
                  <Select
                    id="00NbZ000002gEoc"
                    name="00NbZ000002gEoc"
                    title="Chapter"
                    required
                    value={province}
                    onChange={handleProvinceChange}
                  >
                    <option value="">--Select Province/Territory--</option>
                    {Object.keys(CITIES_BY_PROVINCE).map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </Select>
                  <HelpText>Choose your province first.</HelpText>
                </Field>

                {/* Pod (City) */}
                <Field>
                  <Label htmlFor="00NbZ000002LLmf">
                    Pod (City)<Req>*</Req>
                  </Label>
                  <Select
                    id="00NbZ000002LLmf"
                    name="00NbZ000002LLmf"
                    title="Pod"
                    required
                    disabled={!province}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  >
                    <option value="">--Select City--</option>
                    {cities.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </Select>
                  <HelpText>
                    Then pick a city. If not listed, select <strong>Other</strong>.
                  </HelpText>
                </Field>

                {/* Additional Notes */}
                <Field span2>
                  <Label htmlFor="description">Additional Notes</Label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Share any context that will help us support you."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </Field>
              </FormGrid>
            </Block>

            <Divider />

            {/* ── Your Needs ── */}
            <Block>
              <BlockTitle>
                <BlockHeading>
                  Your Needs<Req>*</Req>
                </BlockHeading>
                <RequiredNote>Select at least one</RequiredNote>
              </BlockTitle>

              <HelpText style={{ marginTop: "-4px" }}>Select all that apply.</HelpText>

              <ErrorBox visible={needsError} ref={needsRef}>
                <strong>Action required:</strong> Please select at least one need.
              </ErrorBox>

              <NeedsGrid role="group" aria-label="Caregiver Needs">
                {NEEDS.map(({ group, items }) => (
                  <NeedCard key={group}>
                    <NeedCardHeading>{group}</NeedCardHeading>
                    {items.map((item) => {
                      const checked = selectedNeeds.includes(item);
                      return (
                        <CheckLabel key={item} checked={checked}>
                          <CheckInput
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggleNeed(item)}
                            value={item}
                          />
                          <CheckSpan>{item}</CheckSpan>
                        </CheckLabel>
                      );
                    })}
                  </NeedCard>
                ))}
              </NeedsGrid>
            </Block>

            <Actions>
              <SubmitBtn type="submit" name="submit">
                {isLoading ? <ThreeDots /> : "Submit Request"}
              </SubmitBtn>
            </Actions>

            <Footnote>
              By submitting this form, you confirm the information provided is accurate to the best of your knowledge.
            </Footnote>
          </StyledForm>
        </Card>
      </Container>

      {/* ── Email Validation Modal ── */}
      <Overlay
        visible={modal.visible}
        onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
        aria-hidden={!modal.visible}
      >
        <ModalCard role="dialog" aria-modal="true" aria-labelledby="modalTitle">
          <ModalHeader id="modalTitle">Please check your input</ModalHeader>
          <ModalBody>{modal.message}</ModalBody>
          <ModalActions>
            <SecondaryBtn type="button" onClick={closeModal} autoFocus>
              OK
            </SecondaryBtn>
          </ModalActions>
        </ModalCard>
      </Overlay>
    </>
  );
}