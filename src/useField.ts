import React from "react";

interface UseFieldParams {
  name: string;
}

function useField(params: UseFieldParams) {
  const { name } = params;

  const [localValue, setLocalValue] = React.useState();
}

export default useField;
