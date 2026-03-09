import React from "react";
import styled from "styled-components";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const Page = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial,
    "Helvetica Neue", sans-serif;
  background: #f4f0f6;
  min-height: 100vh;
  color: #1f1f1f;
`;

const Hero = styled.section`
  background: linear-gradient(135deg, #6e2b8a, #4f1f63);
  color: white;
  padding: 48px 16px 90px;
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 16px;
`;

const HeroTitle = styled.h1`
  margin: 0;
  font-size: 34px;
  font-weight: 800;
`;

const Card = styled.div`
  max-width: 780px;
  margin: -54px auto 30px;
  background: white;
  border: 1px solid #ddd3e3;
  border-radius: 22px;
  box-shadow: 0 16px 42px rgba(31, 31, 31, 0.08);
  padding: 36px 24px;
  text-align: center;
`;

const Badge = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 18px;
  font-size: 34px;
  font-weight: 900;
  background: #f4ecf8;
  color: #6e2b8a;
`;

const Title = styled.h2`
  margin: 0 0 10px;
  font-size: 28px;
  color: #4f1f63;
`;

const Text = styled.p`
  margin: 0 auto 12px;
  max-width: 620px;
  color: #667085;
  font-size: 16px;
  line-height: 1.6;
`;

const Button = styled.a`
  display: inline-block;
  margin-top: 18px;
  text-decoration: none;
  background: #6e2b8a;
  color: white;
  padding: 12px 18px;
  border-radius: 14px;
  font-weight: 800;

  &:hover {
    background: #4f1f63;
  }
`;

const SupportRequestSuccess = () => {
  return (
    <>
        <Nav/>
        <Page>
        <Hero>
            <Container>
            <HeroTitle>Support Request</HeroTitle>
            </Container>
        </Hero>

        <Container>
            <Card>
            <Badge>✓</Badge>

            <Title>
                Thank you — your support request has been received.
            </Title>

            <Text>
                Our team will review your submission and follow up as soon as
                possible.
            </Text>

            <Text>
                You may now return to the Hearts &amp; Mind website.
            </Text>

            <Button href="https://heartsandmind.org/">
                Back to Home
            </Button>
            </Card>
        </Container>
        </Page>
        <Footer />
    </>
  );
};

export default SupportRequestSuccess;