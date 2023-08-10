import React from "react";

interface FormContextValue {
  values: { [key: string]: any };
  setValue: (name: string, value: any) => void;
}

const FormContext = React.createContext<FormContextValue | null>(null);

export default FormContext;
