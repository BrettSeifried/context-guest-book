import { useState } from 'react';

export function useForm(inputs = {}) {
  const [formState, setFormState] = useState(inputs);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormState((PrevState) => {
      return { ...PrevState, [name]: value };
    });
  };

  return { formState, handleFormChange };
}
