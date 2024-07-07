'use client';

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '@/components/ui/toast';
import { useToast } from '@/components/ui/use-toast';
import InformationRed from 'public/images/icon-16-information-red.svg';
import RoundCheck from 'public/images/icon-16-roundcheck-main.svg';

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, icon, title, description, action, ...props }) {
        let IconComponent = null;
        if (icon === 'success') {
          IconComponent = <RoundCheck />;
        } else if (icon === 'error') {
          IconComponent = <InformationRed />;
        }

        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              <div className="flex items-center gap-1">
                {IconComponent}
                {title && <ToastTitle>{title}</ToastTitle>}
              </div>
              {description && <ToastDescription>{description}</ToastDescription>}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
