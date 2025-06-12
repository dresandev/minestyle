"use client"

import { forwardRef } from "react"
import { Root, Trigger, Content, Portal } from "@radix-ui/react-popover"
import clsx from "clsx"
import styles from "./popover.module.css"

const Popover = Root

const PopoverTrigger = Trigger

const PopoverContent = forwardRef<
  React.ComponentRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <Portal>
    <Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={clsx(styles.content, className)}
      {...props}
    />
  </Portal>
))
PopoverContent.displayName = Content.displayName

export { Popover, PopoverTrigger, PopoverContent }
