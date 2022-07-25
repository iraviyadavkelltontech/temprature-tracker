import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { schema } from "./schema";
import { useFormSubmit } from "./useFormSubmit";
import { Input } from "../../components/Form";

interface RegisterFormProps {
  submit?: (fields: RegisterFields) => any;
}

interface RegisterFields {
  name: string;
}
type UserRegisterForm = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  country: string;
};
export const Register = ({ submit }: RegisterFormProps) => {
  const [success, setSuccess] = useState<string>("");
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    register,
    setError,
  } = useForm<UserRegisterForm>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: UserRegisterForm) => {
    setSuccess("Data Saved");
  };
  return (
    <div>
      {success && <div>{success}</div>}
      <form id="registerForm" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <Input
            {...register("firstName")}
            label="First Name"
            error={Boolean(errors?.firstName)}
            errorMessage={errors.firstName?.message}
            data-testid="firstName"
          />
        </div>
        <div className="form-group">
          <Input
            {...register("lastName")}
            label="Last Name"
            error={Boolean(errors?.lastName)}
            errorMessage={errors.lastName?.message}
          />
        </div>
        <div className="form-group">
          <Input
            {...register("phoneNumber")}
            label="Phone Number"
            error={Boolean(errors?.phoneNumber)}
            errorMessage={errors.phoneNumber?.message}
          />
        </div>
        <div className="form-group">
          <Input
            {...register("country")}
            label="Country"
            error={Boolean(errors?.country)}
            errorMessage={errors.country?.message}
          />
        </div>
        <button data-testid="submit" type="submit">
          {" "}
          Save
        </button>
      </form>
    </div>
  );
};
