import { useEffect } from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { Container } from './styles'

import Input from '../../Input'
import { Button } from '../../Button'

type SubscribeFormData = {
  name: string
  email: string
}

const subscribeFormSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required().email(),
})

type HandleSubmitFunction = {
  user: SubscribeFormData
  reset: () => void
}

interface SubscriptionProps {
  loading: boolean
  // eslint-disable-next-line no-unused-vars
  handleSubscribeToNewsletter: ({ user, reset }: HandleSubmitFunction) => void
}

function Subscription({
  loading,
  handleSubscribeToNewsletter,
}: SubscriptionProps) {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(subscribeFormSchema),
  })

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  const handleSubscribe: SubmitHandler<SubscribeFormData> = async (values) => {
    handleSubscribeToNewsletter({ user: values, reset })
  }

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <Container
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      transition={{ duration: 1.5 }}
    >
      <h1>Are you a parent without a nanny and looking to share?</h1>
      <span>
        Leave us your name and email and we’ll update you as soon as a share
        becomes available in your area!
      </span>
      <form onSubmit={handleSubmit(handleSubscribe)}>
        <Input
          placeholder="Your Name"
          error={formState.errors.name}
          {...register('name')}
        />
        <Input
          placeholder="Your Best Email"
          type="email"
          error={formState.errors.email}
          {...register('email')}
        />
        <Button type="submit" loading={loading}>
          Send
        </Button>
      </form>
    </Container>
  )
}

export { Subscription }
