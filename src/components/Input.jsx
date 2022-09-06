import React from 'react';
import { ErrorMessage, useField } from 'formik';
const fixedInputClass="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
const erroredFixedInputClass="rounded-md appearance-none relative block w-full px-3 py-2 border border-red-600 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"

export default function Input({
    labelText,
    labelFor,
    customClass,
    ...props
}){
  const [field, meta] = useField(props);

  return (
    <div className="my-5">
      <label htmlFor={labelFor}>
        {labelText}
      </label>
      <input
        className={meta.error ? erroredFixedInputClass+customClass : fixedInputClass+customClass}
        {...field} {...props}
        autoComplete="off"
      />
      <p className="text-sm text-red-600"><ErrorMessage name={field.name} /></p>
    </div>
  )
}