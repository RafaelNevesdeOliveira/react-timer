import { ButtonContainer, ButtonVariant } from './Button.styles.ts'

interface buttonProps {
  variant?: ButtonVariant
  content: string
}

export function Button({ variant = 'primary', content }: buttonProps) {
  return <ButtonContainer variant={variant}>{content}</ButtonContainer>
}
