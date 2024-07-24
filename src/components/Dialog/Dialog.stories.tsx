import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Meta, StoryFn } from "@storybook/react";
import clsx from "clsx";
import btn from "src/classes/button";
import { ReactComponent as CloseIcon } from "src/images/icons/close_16.svg";
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./Dialog";
import styles from "./Dialog.module.scss";

export default {
  title: "Components/Dialog",
  component: Dialog,
  subcomponents: {
    DialogTrigger,
    DialogContent,
    DialogTitle,
    DialogDescription,
    DialogHeader,
    DialogBody,
    DialogFooter,
    DialogClose,
  },
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

const Template: StoryFn = (args) => (
  <Dialog>
    <DialogTrigger asChild>
      <button className={btn({ typ: "button", variant: "primary" })}>
        Open Dialog
      </button>
    </DialogTrigger>
    <DialogContent {...args}>
      <DialogHeader>
        <DialogTitle size="large">Dialog Title</DialogTitle>
        <DialogPrimitive.Close
          className={clsx(btn({ typ: "icon", variant: "ghost" }), styles.close)}
          aria-label="Close"
        >
          <CloseIcon />
        </DialogPrimitive.Close>
      </DialogHeader>
      <DialogBody>
        <DialogDescription>
          This is the description of the dialog.
        </DialogDescription>
        <p>Here you can put any content you want inside the dialog.</p>
      </DialogBody>
      <DialogFooter>
        <button className={btn({ typ: "button", variant: "primary" })}>
          Close
        </button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export const Default = Template.bind({});
Default.args = {
  size: "medium-landscape",
};
