import { ApplicationInterface } from 'interfaces/application';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface JobSeekerInterface {
  id?: string;
  user_id: string;
  resume?: string;
  skills?: string;
  experience_years?: number;
  education_level?: string;
  preferred_job_type?: string;
  preferred_location?: string;
  created_at?: any;
  updated_at?: any;
  application?: ApplicationInterface[];
  user?: UserInterface;
  _count?: {
    application?: number;
  };
}

export interface JobSeekerGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  resume?: string;
  skills?: string;
  education_level?: string;
  preferred_job_type?: string;
  preferred_location?: string;
}
