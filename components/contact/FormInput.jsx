'use client';


const FormInput = ({ label, type, name, placeholder, value, handleChange }) => {

    return (
        <div className='flex flex-col flex-grow gap-1'>
            { label && <label htmlFor={name}>{label}</label> }
            { type === 'textarea' ? (
                <label>
                    <textarea
                        id={name}
                        name={name}
                        value={value}
                        onChange={handleChange}
                        className="appearance-none bg-gray-100/50 text-[14px] border rounded w-full min-h-[150px] py-2 px-3 text-gray-700 leading-tight focus:outline-palette-2 focus:shadow-outline"
                    />
                    <span className={`absolute left-2 top-2 px-2 h-[25px] text-[14px] transition duration-200 input-textarea ${value ? 'text-palette-2 bg-opacity-0 transform -translate-y-10 -translate-x-4' : ''}`}>{placeholder}</span>
                </label>
            ) : (
                <label className="relative">
                    <input
                        id={name}
                        name={name}
                        type={type}
                        value={value}
                        onChange={handleChange}
                        className="appearance-none text-[14px] bg-gray-100/50 border rounded w-full p-4 text-gray-700 leading-tight focus:outline-palette-2 focus:shadow-md"
                    />
                        <span className={`absolute left-2 top-2 px-2 h-[25px] text-[14px] transition duration-200 input-text ${value ? 'text-palette-2 bg-opacity-0 transform -translate-y-10 -translate-x-4' : ''}`}>{placeholder}</span>
                </label>
            )
            }
        </div>
    );
};

export default FormInput;