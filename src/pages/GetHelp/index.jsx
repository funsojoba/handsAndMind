import Nav from "../../components/Nav";
import SalesforceForm from "../../components/SalesForce";
import { Container, HeaderDiv } from "./style";


const GetHelpPage = () => {
    return <>
        <Nav />

            <HeaderDiv>
                <div>
                    <h1>Volunteer Signup</h1>
                    <p>Tell us a bit about yourself and how you’d like to support foster families. Your application will be reviewed before approval.</p>
                </div>
            </HeaderDiv>

        <Container>
            <main className="hm-container">
                <section className="hm-card">
                <div className="hm-card-header">
                    <h2>Volunteer Details</h2>
                    <p className="hint">Fields marked with <span class="req">*</span> are recommended to collect for a complete application.</p>
                </div>

                <SalesforceForm />
                
                </section>
            </main>
        </Container>
    
    </>
}

export default GetHelpPage;