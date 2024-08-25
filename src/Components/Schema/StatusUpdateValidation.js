import * as Yup from "yup";

export const StatusUpdate = Yup.object({
  status: Yup.string()
    .required("Status is required")
    .oneOf(["Pending", "Complete", "Inprogress"], "Invalid status selected"),
});
