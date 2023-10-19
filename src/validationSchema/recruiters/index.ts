import * as yup from 'yup';

export const recruiterValidationSchema = yup.object().shape({
  job_posted: yup.number().integer().nullable(),
  job_filled: yup.number().integer().nullable(),
  active_jobs: yup.number().integer().nullable(),
  inactive_jobs: yup.number().integer().nullable(),
  user_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});
