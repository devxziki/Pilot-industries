import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-[#0F3D5E] text-white hover:bg-[#0a2d45] shadow-sm hover:shadow-lg hover:shadow-[#0F3D5E]/20 active:scale-[0.97]",
        accent:
          "bg-[#F5A623] text-white hover:bg-[#d4921a] shadow-sm hover:shadow-lg hover:shadow-[#F5A623]/25 active:scale-[0.97]",
        outline:
          "border-2 border-[#0F3D5E] text-[#0F3D5E] hover:bg-[#0F3D5E] hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-[#0F3D5E] active:scale-[0.97]",
        ghost:
          "text-[#0F3D5E] hover:bg-[#0F3D5E]/5 dark:text-white dark:hover:bg-white/5",
        white: "bg-white text-[#0F3D5E] hover:bg-gray-100 shadow-sm hover:shadow-lg active:scale-[0.97]",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-6 text-sm",
        lg: "h-13 px-8 text-base",
        xl: "h-14 px-10 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
