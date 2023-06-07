'use client';

import { contact } from '../../constants'

const ContactDetails = () => {

    return (
        <div className={`p-20 leading-8 w-[550px] bg-contact bg-black/30 bg-blend-multiply bg-cover text-white rounded-l-lg flex flex-col relative`}>
            <h1 className='font-sans text-[40px] text-white pb-6 border-b-[1px] border-white/70'>
                Contact Us
            </h1>
            <div className='flex flex-col justify-center gap-8 mt-[100px]'>
                {contact.map(({ name, icon, content, url }) => {
                    const ContactIcon = icon;

                    return (
                        <a href={url} className='cursor-pointer group'>
                            <div key={name} className='flex flex-row items-center'>
                                <div className='border-[1px] border-palette-2 bg-palette-2 rounded-full p-2 mr-6  group-hover:border-white group-hover:bg-white transition duration-300'>
                                    <ContactIcon size={30} className='text-palette-1 group-hover:text-palette-2 text-center w-[30px]' />
                                </div>
                                <p className='text-lg font-bold'>{content}</p>
                            </div>
                        </a>        
                    )
                })
                }
            </div>
        </div>
    );
};

export default ContactDetails;