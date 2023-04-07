import { Meta, StoryObj } from "@storybook/react";
import { Box, Button, Tooltip, TooltipProps } from '@felipelopes-ignite-ui/react'

export default {
  title: 'Surfaces/Tooltip',
  component: Tooltip,
  args: {
    children: 
      <Button
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
      </Button>,
    content: '26 de Outubro - Disponível'
  },
  argTypes: {
    children: {
      control: {
        type: null,
      }
    }
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '$20',
            backgroundColor: '$gray500'
          }}
        >
          {Story()}
        </Box>
      )
    }
  ]
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
