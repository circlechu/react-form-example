import React from "react";
import FormContext from "./FormContext";

interface FormParams {
  values: { [key: string]: any };
  onChange: (values: { [key: string]: any }) => void;
  children: React.ReactNode;
}

function Form(params: FormParams) {
  const { values, children, onChange } = params;

  const setValue = React.useCallback(
    (name: string, value: any) => {
      const newValues = {
        ...values,
        [name]: value
      };
      onChange(newValues);
    },
    [onChange, values]
  );

  const contextValue = React.useMemo(() => {
    return {
      values,
      setValue
    };
  }, [values, setValue]);

  return (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
}

export default Form;
