import React, { useTransition } from "react";
import FormContext from "./FormContext";

interface FieldParams {
  name: string;
  children: (value: any, onChange: (value: any) => void) => JSX.Element;
}

function Field(params: FieldParams) {
  const { name, children } = params;

  const formContext = React.useContext(FormContext);

  const [isPending, startTransition] = useTransition();

  console.log(isPending);

  const [localValue, setLocalValue] = React.useState(() => {
    return formContext?.values?.[name];
  });

  const handleChange = (value: any) => {
    setLocalValue(value);
  };

  React.useEffect(() => {
    startTransition(() => {
      formContext?.setValue?.(name, localValue);
    });
  }, [formContext, localValue, name, startTransition]);

  // React.useEffect(() => {
  //   const newValue = formContext?.values?.[name];
  //   if (newValue !== localValue) {
  //     setLocalValue(newValue);
  //   }
  // }, [formContext, name, localValue]);

  return children(localValue, handleChange);
}

export default Field;
