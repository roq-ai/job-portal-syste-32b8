import * as yup from 'yup';

export const jobSeekerValidationSchema = yup.object().shape({
  resume: yup.string().nullable(),
  skills: yup.string().nullable(),
  experience_years: yup.number().integer().nullable(),
  education_level: yup.string().nullable(),
  preferred_job_type: yup.string().nullable(),
  preferred_location: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
});
