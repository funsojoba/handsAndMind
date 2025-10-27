import Nav from "../../components/Nav"
import Footer from "../../components/Footer"

import { SuccessPaymentDiv } from "./style"
import { Link } from "react-router"


const SuccessPayment = ()=>{
    return (
        <>
            <Nav/>
                <SuccessPaymentDiv>
                    <h1 className="success-message">Thank You for Your Donation!</h1>
                    <p className="thank-you-note">
                        We appreciate your support in helping us provide resources and assistance to foster families and kinship caregivers.
                    </p>
                    <Link href="/" className="home-button">Return to Home</Link>

                </SuccessPaymentDiv>
            <Footer/>
        </>
    )
}

export default SuccessPayment;