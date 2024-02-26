import React, { useState } from 'react';

// TypeScript types
interface FormData {
    username: string;
    password: string;
}

interface FormErrors {
    username?: string;
    password?: string;
}

const AdvancedForm: React.FC = () => {
    // State for form data and errors
    const [formData, setFormData] = useState<FormData>({
        username: '',
        password: '',
    });

    const [formErrors, setFormErrors] = useState<FormErrors>({});

    // Update form data
    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Validate form data
    const validateForm = (): boolean => {
        const errors: FormErrors = {};

        if (!formData.username.trim()) {
            errors.username = 'Username is required';
        }

        if (formData.password.length < 6) {
            errors.password = 'Password must be at least 6 characters';
        }

        setFormErrors(errors);

        return Object.keys(errors).length === 0;
    };

    // Handle form submission
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        if (validateForm()) {
            // Perform form submission logic here
            console.log('Form submitted:', formData);
        } else {
            console.log('Form validation failed');
        }
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <div className='flex gap-4'>
                <label className='w-20' htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                />
                {formErrors.username && (
                    <div className="error">{formErrors.username}</div>
                )}
            </div>
            <div className='flex gap-4'>
                <label className='w-20' htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                />

            </div>
            {formErrors.password && (
                <div className="text-red-500">{formErrors.password}</div>
            )}
            <button type="submit">Submit</button>
        </form>
    );
};

export default AdvancedForm;