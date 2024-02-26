import React, { useState } from 'react';

interface InputProps {
    value: string;
    id: string;
    onChange: (value: string) => void;
}

// Memoized Input Component
const MemoizedInput: React.FC<InputProps> = React.memo(({ value, onChange, id }) => {
    console.log(`Rendering Input for ${id}`);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <div className='flex justify-center gap-4'>
            <label className='w-20' htmlFor={id}>{id}:</label>
            <input
                type="text"
                id={id}
                name={id}
                value={value}
                onChange={handleInputChange}
            />
        </div>
    );
}, (prevProps, nextProps) => {
    // Only re-render if the value has changed
    return prevProps.value === nextProps.value;
});

// Example App Component
export const RerenderOptimization: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')

    const handleUsernameChange = (value: string) => {
        setUsername(value);
    };

    const handlePasswordChange = (value: string) => { setPassword(value) }

    return (
        <div className='flex flex-col gap-8'>
            <h1>Minimize Re-renders with Memoization</h1>
            <MemoizedInput id='username' value={username} onChange={handleUsernameChange} />
            <MemoizedInput id='password' value={password} onChange={handlePasswordChange} />
        </div>
    );
};


