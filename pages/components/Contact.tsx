import React, { useState } from 'react'
import { PhoneIcon, MailIcon, LocationMarkerIcon } from '@heroicons/react/solid'
import { useForm, Resolver } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'

type Props = {}

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

function Contact({}: Props) {
  const [submitResult, setSubmitResult] = useState<string>('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const resolver: Resolver<FormValues> = async (values) => {
    const errors: any = {}
    
    if (!values.firstName) {
      errors.firstName = { type: 'required', message: 'First name is required' }
    }
    if (!values.email) {
      errors.email = { type: 'required', message: 'Email is required' }
    }
    if (!values.subject) {
      errors.subject = { type: 'required', message: 'Subject is required' }
    }
    if (!values.message) {
      errors.message = { type: 'required', message: 'Message is required' }
    }
    
    return {
      values: Object.keys(errors).length === 0 ? values : {},
      errors
    }
  }

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({ resolver })
  
  const onSubmit = handleSubmit(async (data) => {
    setIsSubmitting(true)
    setSubmitResult('')

    try {
      const formData = new FormData()
      formData.append('access_key', 'c5cc6f74-7174-4b91-afe0-bc0bd53f8f78')
      formData.append('name', `${data.firstName} ${data.lastName}`)
      formData.append('email', data.email)
      formData.append('subject', data.subject)
      formData.append('message', data.message)

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })

      const result = await response.json()

      if (result.success) {
        setSubmitResult('success')
        reset()
        setTimeout(() => setSubmitResult(''), 5000)
      } else {
        setSubmitResult('error')
      }
    } catch (error) {
      setSubmitResult('error')
    } finally {
      setIsSubmitting(false)
    }
  })

  const contactInfo = [
    { icon: PhoneIcon, text: '+8801521421675', label: 'Phone' },
    { icon: MailIcon, text: 'earth.ahsan@gmail.com', label: 'Email' },
    { icon: LocationMarkerIcon, text: 'Dhaka, Bangladesh', label: 'Location' }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='flex flex-col relative min-h-screen items-center justify-center px-4 md:px-10 py-24 max-w-7xl mx-auto'
    >
      <motion.h3
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='section-title'
      >
        Contact
      </motion.h3>

      <div className='w-full max-w-4xl mt-12 space-y-8'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='text-center space-y-4'
        >
          <h4 className='text-3xl md:text-4xl font-semibold text-white'>
            Let's <span className='text-[#F7AB0A]'>Connect</span>
          </h4>
          <p className='text-gray-400 text-lg'>
            Have a project in mind or want to collaborate? Drop me a message!
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='grid grid-cols-1 md:grid-cols-3 gap-4'
        >
          {contactInfo.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className='card-gradient rounded-xl p-4 flex items-center gap-3'
              >
                <div className='w-12 h-12 rounded-full bg-[#F7AB0A]/10 flex items-center justify-center flex-shrink-0'>
                  <Icon className='h-6 w-6 text-[#F7AB0A]' />
                </div>
                <div className='text-left'>
                  <p className='text-xs text-gray-500 uppercase tracking-wide'>{item.label}</p>
                  <p className='text-gray-300 text-sm font-medium'>{item.text}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          onSubmit={onSubmit}
          className='card-gradient rounded-2xl p-6 md:p-8 space-y-4'
        >
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <input
                {...register('firstName')}
                placeholder='First Name'
                className='form-input w-full'
              />
              {errors?.firstName && (
                <p className='text-red-400 text-xs mt-1'>{errors.firstName.message}</p>
              )}
            </div>
            <div>
              <input
                {...register('lastName')}
                placeholder='Last Name'
                className='form-input w-full'
              />
            </div>
          </div>

          <div>
            <input
              {...register('email')}
              type='email'
              placeholder='Email Address'
              className='form-input w-full'
            />
            {errors?.email && (
              <p className='text-red-400 text-xs mt-1'>{errors.email.message}</p>
            )}
          </div>

          <div>
            <input
              {...register('subject')}
              placeholder='Subject'
              className='form-input w-full'
            />
            {errors?.subject && (
              <p className='text-red-400 text-xs mt-1'>{errors.subject.message}</p>
            )}
          </div>

          <div>
            <textarea
              {...register('message')}
              placeholder='Your Message'
              rows={5}
              className='form-input w-full resize-none'
            />
            {errors?.message && (
              <p className='text-red-400 text-xs mt-1'>{errors.message.message}</p>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type='submit'
            disabled={isSubmitting}
            className='w-full bg-[#F7AB0A] hover:bg-[#F7AB0A]/90 py-4 rounded-lg text-gray-900 font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-[#F7AB0A]/50 disabled:opacity-50 disabled:cursor-not-allowed'
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>

          {/* Success/Error Messages */}
          <AnimatePresence>
            {submitResult && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className={`p-4 rounded-lg text-center font-medium ${
                  submitResult === 'success'
                    ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                    : 'bg-red-500/20 text-red-400 border border-red-500/50'
                }`}
              >
                {submitResult === 'success' ? (
                  <div className='flex items-center justify-center gap-2'>
                    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                    </svg>
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </div>
                ) : (
                  <div className='flex items-center justify-center gap-2'>
                    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                    </svg>
                    <span>Failed to send message. Please try again.</span>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </motion.div>
  )
}

export default Contact