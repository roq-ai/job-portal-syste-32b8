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
  Center,
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
import { FunctionComponent, useState, useRef, useMemo } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { ImagePicker } from 'components/image-file-picker';
import { useRoqClient, useRecruiterFindFirst } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';
import { convertQueryToPrismaUtil } from 'lib/utils';
import { recruiterValidationSchema } from 'validationSchema/recruiters';
import { RecruiterInterface } from 'interfaces/recruiter';
import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';

function RecruiterEditPage() {
  const router = useRouter();
  const id = router.query.id as string;

  const roqClient = useRoqClient();
  const queryParams = useMemo(
    () =>
      convertQueryToPrismaUtil(
        {
          id,
        },
        'recruiter',
      ),
    [id],
  );
  const { data, error, isLoading, mutate } = useRecruiterFindFirst(queryParams, {}, { disabled: !id });
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (values: RecruiterInterface, { resetForm }: FormikHelpers<any>) => {
    setFormError(null);
    try {
      const updated = await roqClient.recruiter.update({
        data: values as RoqTypes.recruiter,
        where: {
          id,
        },
      });
      mutate(updated);
      resetForm();
      router.push('/recruiters');
    } catch (error: any) {
      if (error?.response.status === 403) {
        setFormError({ message: "You don't have permisisons to update this resource" });
      } else {
        setFormError(error);
      }
    }
  };

  const formik = useFormik<RecruiterInterface>({
    initialValues: data,
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
              label: 'Update Recruiter',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Update Recruiter
          </Text>
        </Box>
        {(error || formError) && (
          <Box mb={4}>
            <Error error={error || formError} />
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
    operation: AccessOperationEnum.UPDATE,
  }),
)(RecruiterEditPage);
