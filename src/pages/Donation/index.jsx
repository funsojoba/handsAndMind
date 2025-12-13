import React, { useState } from "react";
import axios from "axios";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { ThreeDots } from 'react-loader-spinner'

import { DonateContainer, AmountButton, CustomAmountInput } from "./style";

const DonationPage = () => {
  const [customAmount, setCustomAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isRecurring, setIsrecurring] = useState(false);
  const amounts = [10, 25, 50, 75, 100];

  const handleDonate = async (amount, isRecurring) => {
    try {
        setIsLoading(true);
      const response = await axios.post(
        // "http://localhost:8000/api/donations/create-checkout-session",
        "https://heartsandmind.org/backend/public/api/donations/create-checkout-session",
        { amount, isRecurring }
      );
      window.location.href = response.data.url;
    } catch (error) {
      console.error(error);
      alert("Unable to start checkout session");
    }
    finally{
        setIsLoading(false);
    }
  };

return (
    <>
        <Nav />

        <DonateContainer>
            <div className="donate-header">
                <h2 className="page-title">Support Our Mission</h2>
                <p className="page-subtitle">
                    Your donation helps us provide essential resources and support to
                    foster families and kinship caregivers.
                </p>
            </div>

            <div className="donate-section">
                <div className="donate-section-header">
                    <h3>Select Donation Amount</h3>
                    <div className="recurring-button">
                        <label>
                            <input
                                type="checkbox"
                                checked={isRecurring}
                                onChange={() => setIsrecurring(!isRecurring)}
                            /> 
                            Recurring Donation
                        </label>
                    </div>
                </div>
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1rem" }}>
                    {amounts.map((amt) => (
                        <AmountButton
                            key={amt}
                            onClick={() => handleDonate(amt, isRecurring)}
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <ThreeDots
                                    height="20"
                                    width="60"
                                    radius="9"
                                    color="#6772e5"
                                    ariaLabel="loading"
                                />
                            ) : (
                                `US$${amt}`
                            )}
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
                        disabled={isLoading}
                    />
                    <button
                        onClick={() => handleDonate(Number(customAmount), isRecurring)}
                        disabled={isLoading}
                        style={{
                            marginLeft: "10px",
                            padding: "10px 20px",
                            border: "none",
                            borderRadius: "8px",
                            background: "#6772e5",
                            color: "white",
                            cursor: isLoading ? "not-allowed" : "pointer",
                        }}
                    >
                        {isLoading ? (
                            <ThreeDots
                                height="16"
                                width="48"
                                radius="9"
                                color="#ffffff"
                                ariaLabel="loading"
                            />
                        ) : (
                            "Donate"
                        )}
                    </button>
                </div>
            </div>
        </DonateContainer>

        <Footer />
    </>
);
};

export default DonationPage;