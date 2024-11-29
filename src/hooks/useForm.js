import { useState } from 'react';

export function useForm(initialValues) {
    const [values, setValues] = useState(initialValues);

    /* 입력 값 변경 */
    const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    /* 선택 값 변경 */
    const handleSelect = ({ name, selected }) => setValues({ ...values, [name]: selected });

    return {
        values,
        handleChange,
        handleSelect
    };
}
