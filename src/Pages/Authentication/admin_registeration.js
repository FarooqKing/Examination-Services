import React from "react";
import Input_Field from "../../Components/FormFields/input_field";
import Button from "../../Components/Button/button";
import { useFormik } from "formik";
import { AdminSchema } from "../../Components/Schema/AdminValidationSchema";
const initialValues = {
  name: "",
  email: "",
  password: "",
  image: null,
};
function Admin_Registeration() {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: AdminSchema,
    onSubmit: async (values, action) => {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("password", values.password);
      formData.append("image", values.image); // Use the file directly from the state

      // try {
      //   const response = await addAdmin(formData).unwrap(); // Adjust this to match your API
      //   if (response.success) {
      //     toast.success("admin add successfully.");
      //     dispatch(setCredientials(response.user));
      //     action.resetForm();
      //   } else {
      //     toast.error(response.message);
      //   }
      // } catch (error) {
      //   toast.error(error?.data?.message || error.error);
      // }
    },
  });

  const {
    values,
    handleBlur,
    touched,
    handleChange,
    errors,
    handleSubmit,
    setFieldValue,
  } = formik;

  console.log(values.name, values.email, values.password, values.image);

  return (
    <div className="content-wrapper d-flex align-items-center auth px-0">
      <div className="row w-100 mx-0">
        <div className="col-lg-5 mx-auto">
          <div className="auth-form-light text-left py-5 px-4 ">
            <div className="brand-logo">
              <img src="../../assets/images/logo.svg" alt="logo" />
            </div>
            <h4 className="font-weight-dark">Admin Registeration</h4>
            <form className="pt-3">
              <Input_Field
                type="text"
                value={values.name}
                label="Name"
                name="name"
                placeholder="Write Your name"
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
              <Input_Field
                type="file"
                value=""
                label="Upload Image"
                name="imgUpload"
                placeholder="Upload Your Image"
                col_size="12"
                className="form-control form-control-lg"
                onChange={(event) => {
                  setFieldValue("image", event.target.files[0]);
                }}
                onBlur={handleBlur}
                errors={errors.image}
                touched={touched.image}
              />
              <div className="col-md-12 d-flex justify-content-end">
                <Button
                  name="Login"
                  type="submit"
                  color="primary"
                  width="100%"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin_Registeration;
