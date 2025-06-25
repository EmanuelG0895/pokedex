import React from "react";

interface FloatingLabelProps {
  label: string;
  id: string;
  type?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  error?: boolean;
  errorMessage?: string;
}

export default function FloatingLabel({
  error,
  errorMessage,
  label,
  id,
  type = "text",
  value,
  onChange,
  ...rest
}: FloatingLabelProps) {
  const inputClassName = error
    ? "border-red-700  focus:border-red-700"
    : "border-gray-300 focus:border-blue-600";

  const labelClassName = error
    ? "text-red-700 focus:border-red-700 peer-focus:text-red-700"
    : "text-gray-500 focus:border-blue-700";

  return (
    <div className="relative">
      <input
        type={type}
        id={id}
        className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none focus:outline-none focus:ring-0 peer ${inputClassName}`}
        placeholder=" "
        value={value}
        onChange={onChange}
        {...rest}
      />
      {error && <p className="text-red-700 ml-1 text-xs">{errorMessage}</p>}
      <label
        htmlFor={id}
        className={`absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 ${labelClassName}`}
      >
        {label}
      </label>
    </div>
  );
}
