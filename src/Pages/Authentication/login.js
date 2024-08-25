import React from "react";
import Button from "../../Components/Button/button";
import Input_Field from "../../Components/FormFields/input_field";
import { useFormik } from "formik";
import { LoginValidation } from "../../Components/Schema/LoginValidation";
import { Link } from "react-router-dom";
const initialValues = {
  email: "",
  password: "",
};
function Login() {
  const { values, handleBlur, touched, handleChange, errors, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: LoginValidation,
      onSubmit: async (values, action) => {
        const userData = { email: values.email, password: values.password };

        // const { data } = await userLogin(userData);

        // if (!data.success) {
        //   toast.error(data.message);
        // } else {
        //   toast.success("Login successfully");
        //   dispatch(setCredientials(data.user));
        //   action.resetForm();
        //   navigate("/userProfile");
        // }
      },
    });
  // console.log(values.email, values.password);
  return (
    <div className="content-wrapper d-flex align-items-center auth px-0">
      <div className="row w-100 mx-0">
        <div className="col-lg-5 mx-auto">
          <div className="auth-form-light text-left py-5 px-4 ">
            <div className="brand-logo">
              <img src="../../assets/images/logo.svg" alt="logo" />
            </div>
            <h4 className="font-weight-dark">Sign in to continue.</h4>
            <form className="pt-3" onSubmit={handleSubmit}>
              <Input_Field
                type="email"
                value={values.email}
                label="Email"
                name="email"
                placeholder="Write Your Email"
                col_size="12"
                className="form-control form-control-lg"
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors.email}
                touched={touched.email}
              />
              <Input_Field
                type="password"
                value={values.password}
                label="Password"
                name="password"
                placeholder="Write Your password"
                col_size="12"
                className="form-control form-control-lg"
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors.password}
                touched={touched.password}
              />
              <div className="col-md-12 d-flex justify-content-end">
                <Button
                  name="Login"
                  type="submit"
                  color="primary"
                  width="100%"
                />
              </div>
              <div className="my-2 d-flex justify-content-between align-items-center">
                <div className="form-check">
                  <label className="form-check-label text-muted">
                    <input type="checkbox" className="form-check-input" />
                    Keep me signed in
                  </label>
                </div>
                <Link to="/forgot-password" className="auth-link text-black">
                  Forgot password?
                </Link>
              </div>
              <div className="text-center mt-4 font-weight-light">
                Don't have an account?{" "}
                <Link to="/registeration" className="text-primary">
                  Create
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
