import * as Yup from "yup";

export const AdminSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(22, "Name can't be longer than 22 characters")
    .required("Please Enter Your Name"),

  email: Yup.string()
    .email("Invalid email format")
    .required("Please Enter Your Email"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Please Enter Your Password"),

  image: Yup.mixed()
    .required("Please upload an image")
    .test(
      "fileSize",
      "File size is too large",
      (value) => value && value.size <= 1024 * 1024
    ) // 1MB
    .test(
      "fileType",
      "Unsupported file format",
      (value) =>
        value && ["image/jpeg", "image/png", "image/gif"].includes(value.type)
    ),
});
