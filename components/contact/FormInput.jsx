'use client';


const FormInput = ({ label, type, name, placeholder, value, handleChange, error, touched }) => {

    return (
        <div className='flex flex-col flex-grow gap-1'>
            { label && <label htmlFor={name}>{label}</label> }
            { type === 'textarea' ? (
                <label className="relative">
                    <textarea
                        id={name}
                        name={name}
                        value={value}
                        onChange={handleChange}
                        className="appearance-none bg-gray-100/50 text-[14px] border-[1px] border-gray-300 rounded w-full min-h-[150px] p-4 text-gray-700 leading-tight focus:border-palette-2 focus:ring-palette-2 focus:shadow-md"
                    />
                    <span className={`absolute left-2 top-2 px-2 h-[25px] text-[14px] text-gray-400 transition duration-200 input-textarea ${value ? 'font-bold text-gray-500 bg-none transform -translate-y-10 -translate-x-4' : ''}`}>{placeholder}</span>
                </label>
            ) : (
                <label className="relative">
                    <input
                        id={name}
                        name={name}
                        type={type}
                        value={value}
                        onChange={handleChange}
                        className={`appearance-none text-[14px] bg-gray-100/50 border-[1px] border-gray-300 rounded w-full p-4 text-gray-700 leading-tight ${error && touched ? 'focus:ring-pink-500 focus:border-pink-500 border-pink-500' : 'focus:border-palette-2 focus:ring-palette-2 focus:shadow-md'}`}
                    />
                        <span className={`absolute left-2 top-2 px-2 h-[25px] text-[14px] text-gray-400 transition duration-200 input-text ${value ? 'font-bold text-gray-500 bg-none transform -translate-y-10 -translate-x-4' : ''} ${error && touched ? 'font-normal text-pink-500 transform -translate-y-10 -translate-x-4' : ''}`}>{placeholder}</span>
                </label>
            )
            }
        </div>
    );
};

export default FormInput;