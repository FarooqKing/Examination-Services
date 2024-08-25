import * as Yup from "yup";

export const NewPasswordValidation = Yup.object({
  newPassword: Yup.string().min(6).required("Please Enter Your new Password"),
  confirmNewPassword: Yup.string()
    .required("Please Confirm Your New Password")
    .oneOf([Yup.ref("password"), null], "Password must match"),
});
