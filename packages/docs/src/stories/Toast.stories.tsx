import { StoryObj, Meta } from '@storybook/react'
import { Button, Toast, ToastProps } from '@felipelopes-ignite-ui/react'
import { useState } from 'react'

const ToastModel = (props: ToastProps) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        size='lg'
          css={{
            backgroundColor: '$gray800',
            minWidth: 67,

            '&:not(:disabled):hover': {
              backgroundColor: '$gray600'
            }
          }}
      >
        26
      </Button>
      <Toast open={open} onOpenChange={setOpen} {...props} />
    </>
  )
}

export default {
  title: 'Surfaces/Toast',
  component: ToastModel,
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
