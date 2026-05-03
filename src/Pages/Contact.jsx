import React from 'react'
import { useForm } from 'react-hook-form'

export default function Contact() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
  <>
  <div className='max-w-7xl mx-auto mt-10 px-4 mb-[100px]'>

  <div className='contact-form max-w-lg mx-auto bg-white shadow-lg rounded-xl p-8'>

    <form className='flex flex-col gap-5' onSubmit={handleSubmit(onSubmit)}>

      <div className='flex flex-col gap-2'>
        <label className='font-medium'>Name</label>
  
        <input {...register('name', {required: true})} type='text' placeholder='Enter your name' className='border border-gray-300 rounded-md px-4 py-2 
        outline-none focus:ring-2 focus:ring-blue-400' />
         
         {errors.name?.type === 'required' && <p role="alert" className='error'>Field not be empty</p>}

      </div>

      <div className='flex flex-col gap-2'>
        <label className='font-medium'>Email</label>
        <input {...register('email', {required: true})} type='email' placeholder='Enter your email' className='border border-gray-300 rounded-md px-4 py-2
         outline-none focus:ring-2 focus:ring-blue-400'/>

         {errors.email?.type === 'required' && <p role="alert" className='error'>Field not be empty</p>}

      </div>

      <div className='flex flex-col gap-2'>
        <label className='font-medium'>Phone No.</label>

        <input {...register('phone', {required: true})} type='text' placeholder='Enter your phone number' className='border border-gray-300 rounded-md px-4 py-2 
        outline-none focus:ring-2 focus:ring-blue-400'/>

        {errors.phone?.type === 'required' && <p role="alert" className='error'>Field not be empty</p>}

      </div>

      <div className='flex flex-col gap-2'>
        <label className='font-medium'>Message</label>

        <textarea {...register('message', {required: true})} placeholder='Enter your message' rows="4"
          className='border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400'></textarea>

          {errors.message?.type === 'required' && <p role="alert" className='error'>Field not be empty</p>}

        </div>

      <button className='bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition'>
        Submit
      </button>

    </form>

  </div>

 </div>

    </>
  )
}
