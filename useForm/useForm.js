import { useState } from 'react'

export const useForm = (initialState = {}) => {
    
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues(initialState);
    }

    const handleInputChange = ({target}) => {
        setValues({
            // mantiene todo igual
            ...values,
            // aqui se sobreescribe
            [target.name] : target.value
        });
    }

    return [values, handleInputChange, reset];
}
