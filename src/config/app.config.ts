interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Job Seeker'],
  customerRoles: ['Customer'],
  tenantRoles: ['Job Seeker', 'Recruiter', 'HR Manager'],
  tenantName: 'Organization',
  applicationName: 'Job Portal System App',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View job postings', 'Apply for jobs', 'Update personal information', 'View application status'],
  ownerAbilities: ['Manage own profile', 'Apply for jobs', 'View job details', 'Update application status'],
  getQuoteUrl: 'https://app.roq.ai/proposal/b022b5ea-c04f-4db4-bf40-60f6124c63ae',
};
