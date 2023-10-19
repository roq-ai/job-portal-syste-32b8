import { ApplicationInterface } from 'interfaces/application';
import { RecruiterInterface } from 'interfaces/recruiter';
import { GetQueryInterface } from 'interfaces';

export interface JobInterface {
  id?: string;
  title: string;
  description?: string;
  recruiter_id: string;
  location?: string;
  salary?: number;
  job_type?: string;
  posted_date?: any;
  created_at?: any;
  updated_at?: any;
  application?: ApplicationInterface[];
  recruiter?: RecruiterInterface;
  _count?: {
    application?: number;
  };
}

export interface JobGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  recruiter_id?: string;
  location?: string;
  job_type?: string;
}
