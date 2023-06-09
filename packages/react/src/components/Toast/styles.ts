import * as Toast from '@radix-ui/react-toast'
import { keyframes, styled } from "../../styles";

export const ToastContainer = styled(Toast.Provider, {})

const VIEWPORT_PADDING = 32

const hide = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0
  }
})

const slideIn = keyframes({
  from: {
    transform: 'translateX(calc(100% + ${VIEWPORT_PADDING}px))'
  },
  to: {
    transform: 'translateX(0)'
  }
})

const swipeOut = keyframes({
  from: {
    transform: 'translateX(var(--radix-toast-swipe-end-x))'
  },
  to: {
    transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))`
  }
})

export const ToastRoot = styled(Toast.Root, {
  display: 'flex',
  flexDirection: 'column',
  padding: '$3 $5',
  gap: '$1',
  boxSizing: 'border-box',

  maxWidth: '22.5rem',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  borderRadius: '$sm',

  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-state="open"]': {
      animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
    },

    '&[data-state="closed"]': {
      animation: `${hide} 100ms ease-in`
    },

    '&[data-swipe="move"]': {
      transform: 'translateX(var(--radix-toast-swipe-move-x))'
    },

    '&[data-swipe="cancel"]': {
      transform: 'translateX(0)',
      transition: 'transform 200ms ease-out' 
    },

    '&[data-swipe="end"]': {
      animation: `${swipeOut} 100ms ease-out`
    },
  }
})

export const ToastTitle = styled(Toast.Title, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  
  color: '$white',
  fontFamily: '$default',
  fontSize: '$xl',
  fontWeight: '$bold',
  lineHeight: '$base'
})

export const ToastContent = styled(Toast.Description, {
  color: '$gray200',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$normal',
  lineHeight: '$base'
})

export const ToastClose = styled(Toast.Close, {
  all: 'unset',
  backgroundColor: '$gray800',
  color: '$gray200',

  'svg': {
    cursor: 'pointer'
  }
})

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: VIEWPORT_PADDING,
  gap: 10,
  width: 390,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none'
})