import { JobInterface } from 'interfaces/job';
import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface RecruiterInterface {
  id?: string;
  user_id: string;
  organization_id: string;
  job_posted?: number;
  job_filled?: number;
  active_jobs?: number;
  inactive_jobs?: number;
  created_at?: any;
  updated_at?: any;
  job?: JobInterface[];
  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {
    job?: number;
  };
}

export interface RecruiterGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  organization_id?: string;
}
