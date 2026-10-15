import clsx from 'clsx';
import React, { TextareaHTMLAttributes } from 'react';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, Props>(
    ({ className, children, ...args }, ref) => {
        return (
            <textarea
                ref={ref}
                className={clsx(
                    'focus:border-primary-300 focus:ring-primary-200/50 dark:focus:ring-primary-600/25 block w-full rounded-2xl border-neutral-200 bg-white focus:ring-3 sm:text-sm dark:border-neutral-700 dark:bg-neutral-900',
                    className,
                )}
                rows={4}
                {...args}
            >
                {children}
            </textarea>
        );
    },
);

Textarea.displayName = 'Textarea';

export default Textarea;
