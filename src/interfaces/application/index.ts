import { JobSeekerInterface } from 'interfaces/job-seeker';
import { JobInterface } from 'interfaces/job';
import { GetQueryInterface } from 'interfaces';

export interface ApplicationInterface {
  id?: string;
  job_seeker_id: string;
  job_id: string;
  application_date?: any;
  status?: string;
  resume?: string;
  cover_letter?: string;
  created_at?: any;
  updated_at?: any;

  job_seeker?: JobSeekerInterface;
  job?: JobInterface;
  _count?: {};
}

export interface ApplicationGetQueryInterface extends GetQueryInterface {
  id?: string;
  job_seeker_id?: string;
  job_id?: string;
  status?: string;
  resume?: string;
  cover_letter?: string;
}
