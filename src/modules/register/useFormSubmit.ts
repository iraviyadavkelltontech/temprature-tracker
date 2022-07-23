// @ts-ignore
import { UseFormSetError } from 'react-hook-form/dist/types/form';
import { FieldValues } from 'react-hook-form/dist/types/fields';
export const useFormSubmit = <T>(
  submit: (fields: T) => Promise<unknown>,
  setError?: UseFormSetError<FieldValues>,
) => {
  const onSubmit =   (fields: T) => {
    return submit(fields)
      .catch((error: { data: any }) => {
        if (setError && error?.data?.errors) {
          const {
            data: { errors },
          } = error;

          Object.keys(errors).forEach((fieldName) => {
            setError(fieldName, {
              type: 'apiError',
              message: errors[fieldName].join(', '),
            });
          });
        } 
      }).finally(() => {
        return new Promise<void>((resolve, reject) => {
          resolve();
        });
      });
  };

  return { onSubmit };
};
