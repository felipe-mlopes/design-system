import { X } from "phosphor-react";
import { ToastClose, ToastContainer, ToastContent, ToastTitle, ToastRoot, ToastViewport } from "./styles";
import { ComponentProps } from "react";

export interface ToastProps extends ComponentProps<typeof ToastRoot> {
  title: string,
  description: string
}

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <ToastContainer>
      <ToastRoot {...props}>
        <ToastTitle>
          {title}
          <ToastClose>
            <X size={20} />
          </ToastClose>
        </ToastTitle>
        <ToastContent>
          {description}
        </ToastContent>
      </ToastRoot>

      <ToastViewport />
    </ToastContainer>
  )
}

Toast.diplayName = 'Toast'