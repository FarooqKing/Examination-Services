import * as Yup from "yup";

export const RemarksValidation = Yup.object({
  remark: Yup.string()
    .required("Remark is required")
    .min(5, "Remark must be at least 5 characters")
    .max(500, "Remark cannot exceed 500 characters"),
});
