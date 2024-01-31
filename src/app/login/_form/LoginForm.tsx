"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "@/lib/store";
import { startLoading } from "@/lib/features/loading/loadingSlice";
import { StyledInputBox } from "@/app/MaterialStyledComponents";
import {
  FormHelperText,
  FormControlLabel,
  Checkbox,
  Button,
} from "@/app/Material";
import { useFormik } from "formik";
import * as Yup from "yup";

const signSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("Password Required")
    .min(8, "Min 8 Char Required"),
  // serviceAndTerms: Yup.string().required("Accept terms and conditions."),
});

const LoginForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  // const isLoading = useSelector((state: AppStore) => state.loading).isLoading;
  const form = useFormik({
    initialValues: {
      email: "s@gmail.com",
      password: "",
    },
    validationSchema: signSchema,
    validateOnChange: true,
    onSubmit: (values) => {
      router.push("/dashboard");
      // alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={form.handleSubmit}>
      {/* EMAIL */}
      <div className="flex flex-col py-3">
        <div className="text-sm font-normal mb-2">Email</div>
        <StyledInputBox
          id="email"
          name="email"
          type="email"
          size="small"
          autoComplete="off"
          onChange={form.handleChange}
          value={form.values.email}
          error={!!form.errors.email}
        />
      </div>

      {/* PASSWORD */}
      <div className="flex flex-col py-3">
        <div className="text-sm font-normal mb-2">Password</div>
        <StyledInputBox
          id="password"
          name="password"
          type="password"
          size="small"
          autoComplete="off"
          onChange={form.handleChange}
          value={form.values.password}
          error={!!form.errors.password}
        />
        <div className="">
          <FormHelperText className="text-blue-600">
            Forgot Password
          </FormHelperText>
        </div>
      </div>

      <FormControlLabel
        control={<Checkbox />}
        label="I agree with terms and conditions."
      />
      <div className="my-2 w-full">
        <Button
          fullWidth
          variant="contained"
          className="text-sm"
          type="submit"
          disabled={!(form.isValid && form.dirty)}
        >
          Sign in
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
