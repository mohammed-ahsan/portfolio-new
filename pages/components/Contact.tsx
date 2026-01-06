import React from 'react'
import { PhoneIcon, MailIcon, LocationMarkerIcon } from '@heroicons/react/solid'
import { useForm, Resolver } from 'react-hook-form';
type Props = {}
type FormValues = {
  firstName: string;
  lastName: string;
  subject: string;
  description: string;
};
function Contact({}: Props) {
  const resolver: Resolver<FormValues> = async (values) => {
    return {
      values: values.firstName ? values : {},
      errors: !values.firstName
        ? {
            firstName: {
              type: 'required',
              message: 'This is required.',
            },
          }
        : {},
        
    };
  };

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver });
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <div className='w-screen justify-evenly mx-auto items-center px-auto max-w-7xl flex relative flex-col text-center md:text-left md:flex-row h-screen'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3>
            <div className='flex flex-col items-center space-y-3'>
              <h4 className='pt-2 text-3xl font-semibold text-center'>
                
                Let's get in touch.
              </h4>
              
              <div className='flex flex-row items-center'>
<PhoneIcon className='h-6 w-6 text-gray-500 inline-block mr-2'/>
<p className='text-gray-400'>+8801521421675</p></div>
<div className='flex flex-row items-center'>
<MailIcon className='h-6 w-6 text-gray-500 inline-block mr-2'/>
<p className='text-gray-400'>earth.ahsan@gmail.com</p></div>
<div className='flex flex-row items-center'>
<LocationMarkerIcon className='h-6 w-6 text-gray-500 inline-block mr-2'/>
<p className='text-gray-400'>Dhaka, Bangladesh</p></div>
<form 
className='flex max-w-[95%]   flex-col space-y-2 '
onSubmit={onSubmit}>
  <div className='flex  space-x-2'>
  <input className='w-[50%] outline-none bg-slate-400/10 rounded-sm border-b md:px-6 px-2 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-gray-400 focus:text-gray-400 hover:border-gray-400' {...register("firstName")} placeholder="Bill" />
      {errors?.firstName && <p>{errors.firstName.message}</p>}
      
      <input className='w-[50%] outline-none bg-slate-400/10 rounded-sm border-b md:px-6 px-2 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-gray-400 focus:text-gray-400 hover:border-gray-400' {...register("lastName")} placeholder="Luo" />
  </div>
  <input className=' outline-none bg-slate-400/10 rounded-sm border-b md:px-6 px-2 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-gray-400 focus:text-gray-400 hover:border-gray-400' {...register("lastName")} placeholder="Luo" />
  <textarea className=' outline-none bg-slate-400/10 rounded-sm border-b md:px-6 px-2 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-gray-400 focus:text-gray-400 hover:border-gray-400' {...register("lastName")} placeholder="Luo" />

      <button className='bg-gray-300 py-5 rounded-md text-gray-900 font-semibold text-lg' >Submit</button>
    </form>
            </div>
            </div>
  )
}

export default Contact