import React, { FC } from 'react'
import { cva, VariantProps } from 'class-variance-authority'


const TitleVariant = cva(
    "font-bold text-dark dark:text-light",
    {
        variants: {
            size: {
                default: "text-8xl md:text-7xl xs:text-4xl",
                md: "text-4xl md:text-3xl xs:text-2xl",
            }
        },
        defaultVariants: {
            size: "default"
        }
    }
)

interface Props extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof TitleVariant> {}

const Title: FC<Props> = ({children, size, className, ...props}) => {

  return (
    <h2 className={TitleVariant({size, className})} {...props}>
        {children}
    </h2>
  )
}


Title.displayName = "Title"

export default Title