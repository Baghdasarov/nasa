import * as yup from "yup";

export const nasaSearchSchema = yup.object().shape({
  search: yup.string().required().min(3),
});
