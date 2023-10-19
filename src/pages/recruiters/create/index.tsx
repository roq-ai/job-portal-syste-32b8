import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { useRoqClient } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';

import { recruiterValidationSchema } from 'validationSchema/recruiters';
import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { RecruiterInterface } from 'interfaces/recruiter';

function RecruiterCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const roqClient = useRoqClient();
  const handleSubmit = async (values: RecruiterInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await roqClient.recruiter.create({ data: values as RoqTypes.recruiter });
      resetForm();
      router.push('/recruiters');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<RecruiterInterface>({
    initialValues: {
      job_posted: 0,
      job_filled: 0,
      active_jobs: 0,
      inactive_jobs: 0,
      user_id: (router.query.user_id as string) ?? null,
      organization_id: (router.query.organization_id as string) ?? null,
    },
    validationSchema: recruiterValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Recruiters',
              link: '/recruiters',
            },
            {
              label: 'Create Recruiter',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Recruiter
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <NumberInput
            label="Job Posted"
            formControlProps={{
              id: 'job_posted',
              isInvalid: !!formik.errors?.job_posted,
            }}
            name="job_posted"
            error={formik.errors?.job_posted}
            value={formik.values?.job_posted}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('job_posted', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <NumberInput
            label="Job Filled"
            formControlProps={{
              id: 'job_filled',
              isInvalid: !!formik.errors?.job_filled,
            }}
            name="job_filled"
            error={formik.errors?.job_filled}
            value={formik.values?.job_filled}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('job_filled', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <NumberInput
            label="Active Jobs"
            formControlProps={{
              id: 'active_jobs',
              isInvalid: !!formik.errors?.active_jobs,
            }}
            name="active_jobs"
            error={formik.errors?.active_jobs}
            value={formik.values?.active_jobs}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('active_jobs', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <NumberInput
            label="Inactive Jobs"
            formControlProps={{
              id: 'inactive_jobs',
              isInvalid: !!formik.errors?.inactive_jobs,
            }}
            name="inactive_jobs"
            error={formik.errors?.inactive_jobs}
            value={formik.values?.inactive_jobs}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('inactive_jobs', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <AsyncSelect<UserInterface>
            formik={formik}
            name={'user_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={() => roqClient.user.findManyWithCount({})}
            labelField={'email'}
          />
          <AsyncSelect<OrganizationInterface>
            formik={formik}
            name={'organization_id'}
            label={'Select Organization'}
            placeholder={'Select Organization'}
            fetcher={() => roqClient.organization.findManyWithCount({})}
            labelField={'name'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/recruiters')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'recruiter',
    operation: AccessOperationEnum.CREATE,
  }),
)(RecruiterCreatePage);
