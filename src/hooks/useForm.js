import { useState } from "react";

export const useForm = (initialState = 'goku') => {

    const [value, setValue] = useState(initialState);

    const handleInputChange = ({target}) => {
        
        setValue(target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return [value, handleInputChange, handleSubmit];
}