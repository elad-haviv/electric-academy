import React from "react";
import classes from "./LandingPage.module.css"
import { RedirectToSignIn, RedirectToSignUp, SignIn, SignInButton, SignUp, SignUpButton } from "@clerk/clerk-react";

function LandingPage() {
    return <>
        <header>
            Header
        </header>
        <section>
            Hero
            <SignInButton />
            <SignUpButton />
        </section>
        <section>
            Features
        </section>
        <section>
            About Us
        </section>
        <section>
            Contact
        </section>
        <footer>
            Footer
        </footer>
    </>;
}

export default LandingPage;
