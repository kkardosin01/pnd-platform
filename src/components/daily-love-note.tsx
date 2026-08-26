"use client";

import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { getTodayLoveNote, markLoveNoteShownToday, shouldShowLoveNoteToday } from "@/lib/love-notes";
import { useSyncedValue } from "@/lib/use-synced-value";

export function DailyLoveNote() {
  const shouldShow = useSyncedValue(shouldShowLoveNoteToday);
  const [open, setOpen] = useState(false);

  if (shouldShow && !open) {
    setOpen(true);
  }

  useEffect(() => {
    if (shouldShow) markLoveNoteShownToday();
  }, [shouldShow]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="text-center">
        <DialogHeader className="items-center">
          <span className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Heart className="size-5 fill-current" />
          </span>
          <DialogTitle>Um recadinho para você</DialogTitle>
          <DialogDescription className="text-sm">{getTodayLoveNote()}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
