import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deserunt aut est quasi dignissimos natus nam facilis quos sit rem ullam recusandae, ipsum, vero placeat officiis quae quam! Eligendi, autem.',
      size: 'md'
  },
  argTypes: {
    size: {
      options: ['xxs','xs','sm','lg','md','2xl', 'xl','5xl', '4xl', '6xl', '7xl', '9xl','8xl'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong'
  }
}

