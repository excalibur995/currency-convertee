import React from "react";
import { ComponentPropsWithoutRef } from "react";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  label?: string;
  suffix?: React.ReactNode;
}

const Input = ({ label, suffix = "$", ...inputProps }: InputProps) => {
  return (
    <div className="w-full">
      <label className="mb-2 block text-sm font-medium text-white">
        {label}
      </label>
      <div className="relative mb-6">
        {suffix && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            {suffix}
          </div>
        )}
        <input
          className="block w-full rounded-lg border bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          {...inputProps}
        />
      </div>
    </div>
  );
};

export default Input;
