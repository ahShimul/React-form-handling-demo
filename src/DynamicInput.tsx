import React, { useState } from 'react';

const DynamicFormGenerator = () => {
    const [numFields, setNumFields] = useState(0);
    const [formFields, setFormFields] = useState<string[]>([]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const num = parseInt(e.target?.value, 10);
        setNumFields(num);
    };

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const fields: string[] = [];
        for (let i = 0; i < numFields; i++) {
            fields.push(`Field ${i + 1}`);
        }
        setFormFields(fields);
    };

    return (
        <div>
            <form className='flex gap-4 justify-center' onSubmit={handleFormSubmit}>
                <div className='flex justify-center items-center gap-3'>
                    <p>Number of Fields:</p>
                    <input
                        type="number"
                        value={numFields}
                        onChange={handleInputChange}
                        min="0"
                    />
                </div>
                <button type="submit">Generate Form</button>
            </form>
            {formFields.length > 0 && (
                <form className='flex flex-col gap-2'>
                    {formFields.map((field, index) => (
                        <input key={index} type="text" placeholder={field} className='animated-input' style={{ animationDelay: `${(index + 1) * 0.1}s` }} />
                    ))}
                    <button type="submit">Submit</button>
                </form>
            )}
        </div>
    );
};

export default DynamicFormGenerator;
