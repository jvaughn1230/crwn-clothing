import React from "react";
import SignupForm from "../../components/sign-up-form/Sign-up-form.component";
import SignInForm from "../../components/sign-in-form.component.jsx/sign-in-form.component";

import { AuthenticationContainer } from "./authentication.styles";

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignupForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
