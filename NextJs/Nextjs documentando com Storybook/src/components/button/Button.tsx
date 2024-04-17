import React from "react"
import styled from 'styled-components';

interface ButtonProps {
  /** Essa prop é baseada nas opções de cor que temos no nosso tema */
  variant?: 'primary' | 'accent'
  children: React.ReactNode
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const StyledButton = styled.button<ButtonProps>`
  cursor: pointer;
  border: none;
  padding: 8px 14px;
  transition: 0.3s;
  ${({ theme, variant }) => {
    return {
      backgroundColor: theme.colors[variant].main,
      color: theme.colors[variant].text,
      ':hover' : {
        backgroundColor: theme.colors[variant].light
      },
      ':focus' : {
        backgroundColor: theme.colors[variant].dark,
      },
    }
  }}
`

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <StyledButton {...props}>
      {children}
    </StyledButton>
  )
}

Button.defaultProps = {
  disabled: false,
  variant: 'primary'
}
