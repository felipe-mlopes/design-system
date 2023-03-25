import { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@felipelopes-ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/felipe-mlopes.png',
    alt: 'Felipe Lopes'
  },
  argTypes: {
    src: {
      control: {
        type: 'text'
      }
    }
  }
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined
  }
}

