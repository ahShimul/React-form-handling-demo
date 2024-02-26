import React, { useState, useRef } from 'react';

const Forms: React.FC = () => {
    const [controlledValue, setControlledValue] = useState<string>('');
    const [uncontrolledValue, setUncontrolledValue] = useState<string>('')
    const uncontrolledInputRef = useRef<HTMLInputElement>(null);

    const handleControlledChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setControlledValue(event.target.value);
    };

    const handleUncontrolledChange = () => {
        setUncontrolledValue(uncontrolledInputRef.current?.value || '')
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(controlledValue, uncontrolledValue)
    };

    return (
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <input
                type="text"
                value={controlledValue}
                onChange={handleControlledChange}
            />
            <input
                type="text"
                ref={uncontrolledInputRef}
                onChange={handleUncontrolledChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Forms;
