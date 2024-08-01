import React from 'react';

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet";
 
type Props = {
   title: string;
   description?: string;
   children: React.ReactNode;
   Trigger?: React.ReactNode;
}

function SheetModal({ title, description, Trigger, children }: Props) {
  return (
    <Sheet>
    <SheetTrigger asChild>{Trigger}</SheetTrigger>
    <SheetContent className="font-sans">
      <SheetHeader>
        <SheetTitle className="px-6 py-3 rounded-full text-center text-xl text-primary/70 uppercase bg-secondary/20 tracking-widest">{title}</SheetTitle>
        { description && <SheetDescription>{description}</SheetDescription> }
      </SheetHeader>
      { children}
      {/* <SheetFooter>
        <SheetClose asChild>
          <Button type="submit">Save changes</Button>
        </SheetClose>
      </SheetFooter> */}
    </SheetContent>
  </Sheet>
  )
}

export default SheetModal