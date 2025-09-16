import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

//TODO: add publishable key
const stripePromise = loadStripe("pk_test_51S7ul7FRq8w5aoXSVDruhYfetWjvxdKV4WIc3AGrtBI0ILg1FiXOeedQo5cYilRL6VxwdtC4dkaGAPnpU5G35jSO00imGWNpID");
const Payment = () => {
    return (
        <div>
            <SectionTitle
                heading="Payment History"
                subHeading="Please pay to eat"
            >
            </SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;