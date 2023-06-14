import React from 'react';
import { IconProps } from './icon';

export default function TextIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="fill-current"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.25 2.75C3.83579 2.75 3.5 3.08579 3.5 3.5C3.5 3.91421 3.83579 4.25 4.25 4.25H10.55C10.9642 4.25 11.3 3.91421 11.3 3.5C11.3 3.08579 10.9642 2.75 10.55 2.75H4.25ZM4.25 5.75C3.83579 5.75 3.5 6.08579 3.5 6.5C3.5 6.91421 3.83579 7.25 4.25 7.25H8.6C9.01421 7.25 9.35 6.91421 9.35 6.5C9.35 6.08579 9.01421 5.75 8.6 5.75H4.25ZM3.5 9.5C3.5 9.08579 3.83579 8.75 4.25 8.75H12.5C12.9142 8.75 13.25 9.08579 13.25 9.5C13.25 9.91421 12.9142 10.25 12.5 10.25H4.25C3.83579 10.25 3.5 9.91421 3.5 9.5ZM4.25 11.75C3.83579 11.75 3.5 12.0858 3.5 12.5C3.5 12.9142 3.83579 13.25 4.25 13.25H7.625C8.03921 13.25 8.375 12.9142 8.375 12.5C8.375 12.0858 8.03921 11.75 7.625 11.75H4.25Z"
      />
    </svg>
  );
}