import { useState } from "react";
import { 
    Page, Hero, Container, Card, 
    CardHeader, Form, Block, BlockTitle,
    FormGrid, Field, Input, 
    Select, Textarea, NeedsGrid,
    NeedCard, CheckboxRow, Button, 
    ErrorBox, ModalOverlay, ModalCard,
      } from "./style";



export default function SupportRequest() {
  const [chapter, setChapter] = useState("");
  const [pod, setPod] = useState("");
  const [needs, setNeeds] = useState([]);
  const [showNeedsError, setShowNeedsError] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  const citiesByProvince = {
    Alberta: ["Calgary", "Edmonton", "Red Deer", "Lethbridge", "Other"],
    "British Columbia": [
      "Vancouver",
      "Surrey",
      "Burnaby",
      "Richmond",
      "Victoria",
      "Other",
    ],
    Manitoba: ["Winnipeg", "Other"],
    "New Brunswick": ["Other"],
    "Newfoundland and Labrador": ["St. John's", "Other"],
    "Northwest Territories": ["Other"],
    "Nova Scotia": ["Halifax", "Other"],
    Nunavut: ["Other"],
    Ontario: [
      "Toronto",
      "Mississauga",
      "Brampton",
      "Hamilton",
      "Ottawa",
      "Kitchener",
      "London",
      "Markham",
      "Vaughan",
      "Windsor",
      "Other",
    ],
    "Prince Edward Island": ["Other"],
    Quebec: ["Montreal", "Quebec City", "Laval", "Gatineau", "Other"],
    Saskatchewan: ["Saskatoon", "Regina", "Other"],
    Yukon: ["Other"],
    Other: ["Other"],
  };

  const toggleNeed = (value) => {
    setNeeds((prev) =>
      prev.includes(value)
        ? prev.filter((n) => n !== value)
        : [...prev, value]
    );
  };

  const handleSubmit = (e) => {
    const email = e.target.email.value.trim();

    if (!email) {
      e.preventDefault();
      setModalMessage("Email is required.");
      return;
    }

    if (!emailRegex.test(email)) {
      e.preventDefault();
      setModalMessage("Please enter a valid email address.");
      return;
    }

    if (!chapter) {
      e.preventDefault();
      setModalMessage("Please select a Chapter.");
      return;
    }

    if (!pod) {
      e.preventDefault();
      setModalMessage("Please select a Pod.");
      return;
    }

    if (needs.length === 0) {
      e.preventDefault();
      setShowNeedsError(true);
      return;
    }
  };

  return (
    <Page>
      <Hero>
        <Container>
          <h1>Support Request</h1>
          <p>Please share what you need.</p>
        </Container>
      </Hero>

      <Container>
        <Card>
          {/* <CardHeader>
            <h2>Hearts & Mind Support Request</h2>
          </CardHeader> */}

          <Form
            action="https://webto.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8"
            method="POST"
            id="hmWebToCaseForm"
            novalidate
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="orgid" value="00Dau000008c2oz"></input>
            <input
              type="hidden"
              name="retURL"
              value="https://heartsandmind.org/about"
            />
            <input
              type="hidden"
              name="subject"
              value="Caregiver Support Request"
            />

            <Block>
              <FormGrid>
                <Field>
                  <label>Full Name *</label>
                  <Input name="name" required />
                </Field>

                <Field>
                  <label>Email *</label>
                  <Input name="email" type="email" required />
                </Field>

                <Field>
                  <label>Chapter *</label>
                  <Select
                    name="00NbZ000002gEoc"
                    value={chapter}
                    onChange={(e) => {
                      setChapter(e.target.value);
                      setPod("");
                    }}
                    required
                  >
                    <option value="">Select Province</option>
                    {Object.keys(citiesByProvince).map((prov) => (
                      <option key={prov}>{prov}</option>
                    ))}
                  </Select>
                </Field>

                <Field>
                  <label>Pod *</label>
                  <Select
                    name="00NbZ000002LLmf"
                    value={pod}
                    onChange={(e) => setPod(e.target.value)}
                    disabled={!chapter}
                    required
                  >
                    <option value="">Select City</option>
                    {chapter &&
                      citiesByProvince[chapter].map((city) => (
                        <option key={city}>{city}</option>
                      ))}
                  </Select>
                </Field>

                <Field style={{ gridColumn: "1 / -1" }}>
                  <label>Additional Notes</label>
                  <Textarea name="description" />
                </Field>
              </FormGrid>
            </Block>

            <Block style={{ marginTop: 16 }}>
              <h3>Your Needs *</h3>

              <ErrorBox show={showNeedsError}>
                Please select at least one need.
              </ErrorBox>

              <NeedsGrid>
                <NeedCard>
                  {[
                    "Laundry Assistance",
                    "Meal Prep",
                    "Emergency Cleaning",
                  ].map((item) => (
                    <CheckboxRow key={item}>
                      <input
                        type="checkbox"
                        onChange={() => toggleNeed(item)}
                      />
                      {item}
                    </CheckboxRow>
                  ))}
                </NeedCard>

                <NeedCard>
                  {["Hearts and Mind Brunch Invites", "Join a POD"].map(
                    (item) => (
                      <CheckboxRow key={item}>
                        <input
                          type="checkbox"
                          onChange={() => toggleNeed(item)}
                        />
                        {item}
                      </CheckboxRow>
                    )
                  )}
                </NeedCard>

                <NeedCard>
                  {[
                    "Indigenous Healing Circles",
                    "Black Parent Affinity Group",
                  ].map((item) => (
                    <CheckboxRow key={item}>
                      <input
                        type="checkbox"
                        onChange={() => toggleNeed(item)}
                      />
                      {item}
                    </CheckboxRow>
                  ))}
                </NeedCard>
              </NeedsGrid>

              <select
                multiple
                name="00NbZ000002e9Ur"
                style={{ display: "none" }}
                value={needs}
                readOnly
              >
                {needs.map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </Block>

            <div style={{ marginTop: 20 }}>
              <Button type="submit">Submit Request</Button>
            </div>
          </Form>
        </Card>
      </Container>

      <ModalOverlay show={!!modalMessage}>
        <ModalCard>
          <h3>Please check your email</h3>
          <p>{modalMessage}</p>
          <Button onClick={() => setModalMessage("")}>OK</Button>
        </ModalCard>
      </ModalOverlay>
    </Page>
  );
}