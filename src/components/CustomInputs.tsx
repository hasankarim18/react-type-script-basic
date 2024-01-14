import { forwardRef } from "react";

type TCustomInputProps = {
  className: string;
};

const CustomInputs = forwardRef<HTMLInputElement, TCustomInputProps>(
  ({ className }, inputRef) => {
    return (
      <div>
        <input
          ref={inputRef}
          type="text"
          name="name"
          id="name"
          className={className}
        />
      </div>
    );
  }
);

export default CustomInputs;
