import React, { useState } from "react";
import axios from "axios";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

import { DonateContainer, AmountButton, CustomAmountInput } from "./style";

const DonationPage = () => {
  const [customAmount, setCustomAmount] = useState("");
  const amounts = [50, 100, 150, 250, 500];

  const handleDonate = async (amount) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/donations/create-checkout-session",
        { amount }
      );
      window.location.href = response.data.url;
    } catch (error) {
      console.error(error);
      alert("Unable to start checkout session");
    }
  };

  return (
    <>
        <Nav />

        <DonateContainer>
            <div className="donate-header">
                <h2 className="page-title">Support Our Mission</h2>
                <p className="page-subtitle">Your donation helps us provide essential resources and support to foster families and kinship caregivers.</p>
            </div>

            <div className="donate-section">
                <h3>Select Donation Amount</h3>
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1rem" }}>
                    {amounts.map((amt) => (
                        <AmountButton key={amt} onClick={() => handleDonate(amt)}>
                            ${amt}
                        </AmountButton>
                    ))}
                </div>

                <div style={{ marginTop: "2rem" }}>
                    <CustomAmountInput
                        type="number"
                        min="1"
                        placeholder="Custom amount"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                    />
                    <button
                        onClick={() => handleDonate(Number(customAmount))}
                        style={{
                            marginLeft: "10px",
                            padding: "10px 20px",
                            border: "none",
                            borderRadius: "8px",
                            background: "#6772e5",
                            color: "white",
                            cursor: "pointer",
                        }}
                    >
                        Donate
                    </button>
                </div>
            </div>
        </DonateContainer>

        {/* <div style={{ textAlign: "center", padding: "2rem" }}>
        <h1>Make a Donation</h1>
        <p>Select an amount or enter a custom amount:</p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            {amounts.map((amt) => (
            <AmountButton
                key={amt}
                onClick={() => handleDonate(amt)}
                style={{
                padding: "10px 20px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                cursor: "pointer",
                }}
            >
                ${amt}
            </AmountButton>
            ))}
        </div>

        <div style={{ marginTop: "2rem" }}>
            <input
            type="number"
            placeholder="Custom amount"
            value={customAmount}
            onChange={(e) => setCustomAmount(e.target.value)}
            style={{ padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}
            />
            <button
            onClick={() => handleDonate(Number(customAmount))}
            style={{
                marginLeft: "10px",
                padding: "10px 20px",
                border: "none",
                borderRadius: "8px",
                background: "#6772e5",
                color: "white",
                cursor: "pointer",
            }}
            >
            Donate
            </button>
        </div>
        </div> */}
        <Footer/>
    </>
  );
};

export default DonationPage;