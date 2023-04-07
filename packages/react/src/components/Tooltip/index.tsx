import { ComponentProps, ReactNode } from "react";
import { Arrow, TooltipContainer, TooltipContent, TooltipPortal, TooltipRoot, TooltipTrigger } from "./styles";

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {
  content: string | ReactNode
}

export function Tooltip({ children, content, ...props }: TooltipProps) {
  return (
    <TooltipContainer>
      <TooltipRoot {...props}>
        <TooltipTrigger asChild>
          {children}
        </TooltipTrigger>

        <TooltipPortal>
          <TooltipContent data-side="bottom">
            {content}
            <Arrow />
          </TooltipContent>
        </TooltipPortal>

      </TooltipRoot>


    </TooltipContainer>
  )
}

Tooltip.displayName = 'Tooltip'