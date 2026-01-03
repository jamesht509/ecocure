import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-zinc-950 text-white hover:bg-zinc-800 shadow-xl shadow-zinc-200/50",
        destructive: "bg-red-500 text-white hover:bg-red-600",
        outline: "border border-zinc-200 bg-transparent hover:bg-zinc-50 text-zinc-600 hover:text-zinc-950",
        secondary: "bg-zinc-100 text-zinc-900 hover:bg-zinc-200",
        ghost: "hover:bg-zinc-100 hover:text-zinc-950",
        link: "text-zinc-950 underline-offset-4 hover:underline",
        premium: "bg-gradient-to-br from-zinc-900 to-zinc-950 text-white hover:shadow-2xl hover:shadow-zinc-300/50",
      },
      size: {
        default: "h-12 px-8 py-2 rounded-3xl",
        sm: "h-10 px-6 rounded-2xl text-xs",
        lg: "h-14 px-10 rounded-[2rem] text-base",
        icon: "h-10 w-10 rounded-2xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

