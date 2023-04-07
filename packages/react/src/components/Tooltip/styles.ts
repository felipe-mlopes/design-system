import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipContainer = styled(Tooltip.Provider, {})

export const TooltipRoot = styled(Tooltip.Root, {})

export const TooltipTrigger = styled(Tooltip.Trigger, {})

export const TooltipPortal = styled(Tooltip.Portal, {})

export const TooltipContent = styled(Tooltip.Content, {
  padding: '$3 $4',
  backgroundColor: '$gray900',
  borderRadius: '$sm',
  color: '$gray100',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$medium',
  lineHeight: '$short',
  filter: 'drop-shadow(4px 16px 24px rgba(0, 0, 0, 0.25))'
})

export const Arrow = styled(Tooltip.Arrow, {
  fill: '$gray900'
})