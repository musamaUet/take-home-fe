import { ErrorMessage } from "formik";
import InputError from "./InputError";

const Input = ({
  placeholder,
  className,
  value,
  onChange,
  type,
  register,
  max,
  min,
  step,
  prefix,
  pattern,
  title,
  disabled,
  error,
  autoFocus,
  onClick,
  ...rest
}) => {
  return (
    <>
      <input
        type={type ? type : "text-[#202631]"}
        className={`input-text ${className}  text-blackrussian form-control font-Manrope md:text-base text-sm w-full outline-none bg-transparent pt-[0.89rem] pb-[0.7rem] px-6 border-[#e5e5e5] rounded-lg placeholder:font-Manrope`}
        pattern={pattern}
        max={max}
        step={step && step}
        title={title}
        min={min}
        value={value}
        onChange={onChange}
        onClick={onClick}
        {...(register !== undefined && { ...register(rest.name) })}
        placeholder={placeholder}
        prefix={prefix ? prefix : ""}
        disabled={disabled}
        {...rest}
      />
      {/* {error && <InputError error={error} />} */}
      {error && (
        <ErrorMessage
          name={error}
          component="p"
          className="mt-1 block w-full text-start text-sm text-danger"
        />
      )}
    </>
  );
};

export default Input;
