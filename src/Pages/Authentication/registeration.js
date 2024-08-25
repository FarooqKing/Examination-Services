import React from "react";
import Input_Field from "../../Components/FormFields/input_field";
import Button from "../../Components/Button/button";
import { SignUpSchema } from "../../Components/Schema/SignUpValidation";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
function Registeration() {
  const { values, handleBlur, touched, handleChange, errors, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: SignUpSchema,
      onSubmit: async (values, action) => {
        const userData = {
          name: values.name,
          email: values.email,
          password: values.password,
        };

        // const { data } = await regiseterUser(userData);

        // if (!data.success) {
        //   toast.error(data.message);
        // } else {
        //   toast.success("User registered successfully");
        //   dispatch(setCredientials(data.user));
        //   action.resetForm();
        //   navigate("/");
        // }
      },
    });

  console.log(
    "User registration",
    values.email,
    values.name,
    values.password,
    values.confirmPassword
  );

  return (
    <div className="content-wrapper d-flex align-items-center auth px-0">
      <div className="row w-100 mx-0">
        <div className="col-lg-5 mx-auto">
          <div className="auth-form-light text-left py-5 px-4 ">
            <div className="brand-logo">
              <img src="../../assets/images/logo.svg" alt="logo" />
            </div>
            <h4 className="font-weight-dark">
              Signing up is easy. It only takes a few steps
            </h4>
            <form className="pt-3">
              <Input_Field
                type="text"
                value={values.name}
                label="Name"
                name="name"
                col_size="12"
                className="form-control form-control-lg"
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors.name}
                touched={touched.name}
              />
              <Input_Field
                type="email"
                value={values.email}
                label="Email"
                name="email"
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
                col_size="12"
                className="form-control form-control-lg"
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors.password}
                touched={touched.password}
              />
              <Input_Field
                type="password"
                value={values.confirmPassword}
                label="Confirm Password"
                name="confirmPassword"
                col_size="12"
                className="form-control form-control-lg"
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors.confirmPassword}
                touched={touched.confirmPassword}
              />

              <div className="mb-4">
                <div className="form-check">
                  <label className="form-check-label text-muted">
                    <input type="checkbox" className="form-check-input" />I
                    agree to all Terms & Conditions
                  </label>
                </div>
              </div>
              <div className="col-md-12 d-flex justify-content-end">
                <Button
                  name="SignUp"
                  type="submit"
                  color="primary"
                  width="100%"
                />
              </div>
              <div className="text-center mt-4 font-weight-light">
                Already have an account?{" "}
                <Link to="/login" className="text-primary">
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registeration;
