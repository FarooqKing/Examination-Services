import * as Yup from "yup";

export const ForgotValidation = Yup.object({
  email: Yup.string().email().required("Please Enter Your Email"),
});
