import React, { useEffect, useRef } from 'react';

interface ModalProps {
  onClose: () => void;
  titleId: string;
  children: React.ReactNode;
  className?: string;
}

// Native dialog supplies focus containment, Escape handling, and focus restoration.
export const Modal: React.FC<ModalProps> = ({ onClose, titleId, children, className = '' }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}
      className={`portfolio-dialog m-auto w-[calc(100%_-_1.5rem)] max-w-4xl max-h-[90dvh] overflow-hidden p-0 rounded-xl bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-2xl border border-slate-200 dark:border-slate-800 ${className}`}
    >
      <div className="flex flex-col max-h-[calc(90dvh_-_2px)]">{children}</div>
    </dialog>
  );
};
