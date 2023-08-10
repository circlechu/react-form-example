import React from "react";
import Form from "./Form";
import Field from "./Field";
import "./styles.css";

const data = Array(10)
  .fill(null)
  .map((item, index) => "item" + index);

export default function App() {
  const [values, setValues] = React.useState<{ [key: string]: any }>(() => {
    const result: { [key: string]: any } = {};
    data.forEach((item) => {
      result[item] = item;
    });
    return result;
  });

  return (
    <div className="App">
      <h1>React 18 - form</h1>
      <h2>Bad performance??? :(</h2>
      <Form values={values} onChange={setValues}>
        {data.map((item) => (
          <Field name={item} key={item}>
            {(value: any, onChange: any) => (
              <input value={value} onChange={(e) => onChange(e.target.value)} />
            )}
          </Field>
        ))}
      </Form>
      <pre>{JSON.stringify(values, null, 2)}</pre>
    </div>
  );
}
