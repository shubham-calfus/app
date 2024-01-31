"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { StyledInputBox } from "@/app/MaterialStyledComponents";
import { TextField } from "@/app/Material";
import Guide from "@/app/dashboard/customer-setup-wizard/guide/Guide";

interface FormValues {
  customerCompanyName: string;
  classification: string;
  taxpayerID: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  region: string;
}

const initialValues: FormValues = {
  customerCompanyName: "",
  classification: "",
  taxpayerID: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  zipCode: "",
  country: "",
  region: "",
};

const validationSchema = Yup.object({
  customerCompanyName: Yup.string().required("Required"),
  classification: Yup.string().required("Required"),
  taxpayerID: Yup.string().required("Required"),
  addressLine1: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  zipCode: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
  region: Yup.string().required("Required"),
});
const BusinessInformationForm = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="border-l-2 border-stroke-medium py-6 px-8">
      <div className="pb-2">Setup complete business information</div>
      <div className="flex border-t-2 border-stroke-medium py-4">
        <form onSubmit={formik.handleSubmit} className="flex-grow pr-6 ">
          <div className="flex gap-8">
            <div className="w-full">
              <div className="input-lbl">Customer Company Name</div>
              <StyledInputBox
                className="w-full"
                id="customerCompanyName"
                name="customerCompanyName"
                placeholder="Customer Company Name"
                value={formik.values.customerCompanyName}
                onChange={formik.handleChange}
                error={
                  formik.touched.customerCompanyName &&
                  Boolean(formik.errors.customerCompanyName)
                }
              />
            </div>

            <div className="w-full">
              <div className="input-lbl">Classification</div>
              <StyledInputBox
                className="w-full"
                id="classification"
                name="classification"
                value={formik.values.classification}
                onChange={formik.handleChange}
                error={
                  formik.touched.classification &&
                  Boolean(formik.errors.classification)
                }
              />
            </div>
          </div>

          <div className="mt-6">
            <div className="input-lbl">Taxpayer ID</div>
            <StyledInputBox
              className="w-full"
              id="taxpayerID"
              name="taxpayerID"
              value={formik.values.taxpayerID}
              onChange={formik.handleChange}
              error={
                formik.touched.taxpayerID && Boolean(formik.errors.taxpayerID)
              }
            />
          </div>

          <div className="mt-6">
            <div className="input-lbl">Address Line 1</div>
            <StyledInputBox
              className="w-full"
              id="addressLine1"
              name="addressLine1"
              value={formik.values.addressLine1}
              onChange={formik.handleChange}
              error={
                formik.touched.addressLine1 &&
                Boolean(formik.errors.addressLine1)
              }
            />
          </div>

          <div className="mt-6">
            <div className="input-lbl">Address Line 2</div>
            <StyledInputBox
              className="w-full"
              id="addressLine2"
              name="addressLine2"
              value={formik.values.addressLine2}
              onChange={formik.handleChange}
              error={
                formik.touched.addressLine2 &&
                Boolean(formik.errors.addressLine2)
              }
            />
          </div>

          <div className="flex gap-4 mt-6">
            <div className="flex-grow">
              <div className="input-lbl">City</div>
              <StyledInputBox
                className="w-full"
                id="city"
                name="city"
                value={formik.values.city}
                onChange={formik.handleChange}
                error={formik.touched.city && Boolean(formik.errors.city)}
              />
            </div>

            <div className="flex-grow">
              <div className="input-lbl">State</div>
              <StyledInputBox
                className="w-full"
                id="state"
                name="state"
                value={formik.values.state}
                onChange={formik.handleChange}
                error={formik.touched.state && Boolean(formik.errors.state)}
              />
            </div>

            <div className="">
              <div className="input-lbl">Zip Code</div>
              <StyledInputBox
                className="w-full"
                id="zipCode"
                name="zipCode"
                value={formik.values.zipCode}
                onChange={formik.handleChange}
                error={formik.touched.zipCode && Boolean(formik.errors.zipCode)}
              />
            </div>
          </div>

          <div className="flex gap-4  mt-6">
            <div className="flex-grow">
              <div className="input-lbl">Country</div>
              <StyledInputBox
                className="w-full"
                id="country"
                name="country"
                value={formik.values.country}
                onChange={formik.handleChange}
                error={formik.touched.country && Boolean(formik.errors.country)}
              />
            </div>

            <div className="flex-grow">
              <div className="input-lbl">Region</div>
              <StyledInputBox
                className="w-full"
                id="region"
                name="region"
                value={formik.values.region}
                onChange={formik.handleChange}
                error={formik.touched.region && Boolean(formik.errors.region)}
              />
            </div>
          </div>

          {/* helperText={formik.touched.country && formik.errors.country} */}
        </form>
        <Guide></Guide>
      </div>
    </div>
  );
};

export default BusinessInformationForm;
