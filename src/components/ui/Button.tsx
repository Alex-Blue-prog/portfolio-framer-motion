import { cva, VariantProps } from 'class-variance-authority'
import * as React from 'react'

const buttonVariants = cva(
  'active:scale-95 text-lg font-medium inline-flex items-center justify-center rounded-md border-2 border-transparent focus:ring-2 ring-offset-2 ring-custom-300 transition disabled:opacity-50',
  {
    variants: {
      btncolor: {
        default: 'bg-custom text-light hover:bg-custom/80',
        dark: 'bg-dark text-light hover:bg-light hover:text-dark hover:border-dark focus:ring-0 dark:bg-light dark:text-dark hover:dark:text-light hover:dark:bg-dark hover:dark:border-light',
        underline: 'bg-transparent text-custom underline underline-offset-4',
        destructive: 'text-white hover:bg-red-600 dark:hover:bg-red-600',
      },
      size: {
        default: 'h-10 px-4',
        sm: 'h-9 px-3 text-base',
        lg: 'h-11 px-8'
      },
    },
    defaultVariants: {
      btncolor: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  isLoading?: boolean
}

const Button: React.FC<ButtonProps> = ({ children, className, btncolor, size, isLoading, ...props }) => {

    return (
      <button className={buttonVariants({btncolor, size, className})} disabled={isLoading} {...props}>
        {children}
      </button>
    )
  }

Button.displayName = 'Button'

export { Button, buttonVariants }