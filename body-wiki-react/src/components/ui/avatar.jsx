import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

import { cn } from '@/lib/utils';

function AvatarComponent({ className, ...props }) {
  return (
    <AvatarPrimitive.Root
      data-slot='avatar'
      className={cn(
        'relative flex size-8 shrink-0 overflow-hidden rounded-full',
        className
      )}
      {...props}
    />
  );
}

function AvatarImageComponent({ className, ...props }) {
  return (
    <AvatarPrimitive.Image
      data-slot='avatar-image'
      className={cn('aspect-square size-full', className)}
      {...props}
    />
  );
}

function AvatarFallbackComponent({ className, ...props }) {
  return (
    <AvatarPrimitive.Fallback
      data-slot='avatar-fallback'
      className={cn(
        'bg-muted flex size-full items-center justify-center rounded-full',
        className
      )}
      {...props}
    />
  );
}

export { AvatarComponent, AvatarFallbackComponent, AvatarImageComponent };
