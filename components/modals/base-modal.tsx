import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useRef } from 'react';

export interface ModalProps {
  children: React.ReactNode;
  onDismiss?: () => void;
}

export function Modal({ children, onDismiss }: ModalProps) {
  const router = useRouter();
  const overlay = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);

  const handleDismiss = useCallback(() => {
    if (onDismiss) {
      onDismiss();
    } else {
      router.back();
    }
  }, [onDismiss, router]);

  const onClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        handleDismiss();
      }
    },
    [handleDismiss, overlay, wrapper]
  );

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleDismiss();
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [handleDismiss]);

  return (
    <div
      ref={overlay}
      onClick={onClick}
      className='fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60'>
      <div
        ref={wrapper}
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w-10/12 md:w-8/12 lg:w-1/2 p-6'>
        {children}
      </div>
    </div>
  );
}
