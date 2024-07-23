import React, { HTMLProps, useRef } from "react";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import clsx from "clsx";
import { ReactComponent as CloseIcon } from "src/images/icons/close_16.svg";
import btn from "src/classes/button";
import styles from "./Dialog.module.scss";
import { mergeRefs } from "src/lib/mergeRefs";

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogClose = DialogPrimitive.Close;

export interface DialogTitleProps {
  size?: "default" | "large";
}
export const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title> &
    DialogTitleProps
>(({ children, className, size = "default", ...props }, forwardedRef) => (
  <DialogPrimitive.Title
    ref={forwardedRef}
    className={clsx(
      styles.title,
      {
        [styles.large]: size === "large",
      },
      className,
    )}
    {...props}
  >
    {children}
  </DialogPrimitive.Title>
));

export const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ children, className, ...props }, forwardedRef) => (
  <DialogPrimitive.Description
    ref={forwardedRef}
    className={clsx(styles.description, className)}
    {...props}
  >
    {children}
  </DialogPrimitive.Description>
));

export interface DialogContentProps {
  size?: "small" | "medium-landscape" | "medium-portrait" | "large" | "xlarge";
}
export const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> &
    DialogContentProps
>(
  (
    {
      children,
      className,
      size = "medium-landscape",
      onOpenAutoFocus,
      ...props
    },
    forwardedRef,
  ) => {
    const contentRef = useRef<HTMLDivElement>(null);

    /**
     * Query for the first non-disabled input, select
     * or textarea element inside the content container
     * and focus that element.
     **/
    const focusFirstInput = (event: Event) => {
      const firstInput = contentRef.current?.querySelector<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >(
        "input:not([type=hidden]):not(:disabled), select:not(:disabled), textarea:not(:disabled)",
      );
      if (firstInput) {
        firstInput.focus();
        event.preventDefault();
      }
    };

    return (
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className={styles.overlay}>
          <DialogPrimitive.Content
            onOpenAutoFocus={
              onOpenAutoFocus ? onOpenAutoFocus : focusFirstInput
            }
            className={clsx(styles.content, styles[size], className)}
            {...props}
            ref={mergeRefs(contentRef, forwardedRef)}
          >
            {children}
          </DialogPrimitive.Content>
        </DialogPrimitive.Overlay>
      </DialogPrimitive.Portal>
    );
  },
);

export interface DialogHeaderProps {}
export const DialogHeader = React.forwardRef<
  HTMLDivElement,
  HTMLProps<HTMLDivElement> & DialogHeaderProps
>(({ children, className, ...props }, forwardedRef) => (
  <div className={clsx(styles.header, className)} ref={forwardedRef} {...props}>
    {children}
    <DialogPrimitive.Close
      className={clsx(btn({ typ: "icon", variant: "ghost" }), styles.close)}
      aria-label="Close"
    >
      <CloseIcon />
    </DialogPrimitive.Close>
  </div>
));

export interface DialogBodyProps {}
export const DialogBody = React.forwardRef<
  HTMLDivElement,
  HTMLProps<HTMLDivElement> & DialogBodyProps
>(({ children, className, ...props }, forwardedRef) => (
  <div className={clsx(styles.body, className)} ref={forwardedRef} {...props}>
    {children}
  </div>
));

export interface DialogFooterProps {}
export const DialogFooter = React.forwardRef<
  HTMLDivElement,
  HTMLProps<HTMLDivElement> & DialogFooterProps
>(({ children, className, ...props }, forwardedRef) => (
  <div className={clsx(styles.footer, className)} ref={forwardedRef} {...props}>
    {children}
  </div>
));
