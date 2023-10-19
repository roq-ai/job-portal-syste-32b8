import * as yup from 'yup';

export const jobValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().nullable(),
  location: yup.string().nullable(),
  salary: yup.number().integer().nullable(),
  job_type: yup.string().nullable(),
  posted_date: yup.date().nullable(),
  recruiter_id: yup.string().nullable().required(),
});
