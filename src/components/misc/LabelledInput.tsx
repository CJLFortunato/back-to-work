import React from 'react';

type LabelledInputProps = {
    label: string,
    inputType: string,
    name: string,
    value: string | number | undefined,
    // eslint-disable-next-line no-unused-vars
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    placeholder?: string,
    isRequired?: boolean,
};

function LabelledInput (props: LabelledInputProps) {
    const { label, inputType, name, value, handleChange, placeholder = '', isRequired = true } = props;
    return (
        <div className="labelled-input">
            <label htmlFor={name}>{label}</label>
            <input type={inputType} name={name} id={name} value={value} onChange={handleChange} placeholder={placeholder} required={isRequired} />
        </div>
    );
}

export default LabelledInput;