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

export default Object.assign(Dialog, {
  Trigger: DialogTrigger,
  Header: DialogHeader,
  Body: DialogBody,
  Footer: DialogFooter,
  Close: DialogClose,
  Title: DialogTitle,
  Description: DialogDescription,
  Content: DialogContent,
});
