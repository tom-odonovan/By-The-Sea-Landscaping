'use client';


const FormInput = ({ label, type, name, placeholder, value, handleChange }) => {

    return (
        <div className='flex flex-col flex-grow gap-1'>
            { label && <label htmlFor={name}>{label}</label> }
            { type === 'textarea' ? (
                <textarea
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                    className="appearance-none bg-gray-100/50 text-[14px] border rounded w-full min-h-[150px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            ) : (
                <input
                    id={name}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                        className="appearance-none bg-gray-100/50 text-[14px] border rounded w-full p-4 text-gray-700 leading-tight focus:outline-palette-2 focus:shadow-outline"
                />
            )
            }
        </div>
    );
};

export default FormInput;