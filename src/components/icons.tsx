import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function SearchIcon(props: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M15.755 14.255h-.79l-.28-.27a6.47 6.47 0 0 0 1.57-4.23 6.5 6.5 0 1 0-6.5 6.5c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99 1.49-1.49-4.99-5Zm-6 0c-2.49 0-4.5-2.01-4.5-4.5s2.01-4.5 4.5-4.5 4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5Z" />
    </svg>
  );
}

export function BagIcon(props: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2Zm-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2Zm6 16H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2v12Z" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 14 13" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M6.316.356c.156-.475.828-.475.983 0l1.26 3.848a.517.517 0 0 0 .49.356l4.05.01c.5.001.707.64.303.935L10.132 7.892a.517.517 0 0 0-.187.576l1.242 3.854c.153.476-.39.87-.795.578L7.11 10.527a.517.517 0 0 0-.606 0l-3.28 2.373c-.406.293-.95-.102-.796-.578l1.243-3.854a.517.517 0 0 0-.188-.576L.213 5.504c-.404-.294-.196-.934.304-.935l4.049-.009a.517.517 0 0 0 .49-.356L6.316.356Z" />
    </svg>
  );
}

export function StarRoundedIcon(props: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="m14.43 9.612-1.47-4.84c-.29-.95-1.63-.95-1.91 0l-1.48 4.84H5.12c-.97 0-1.37 1.25-.58 1.81l3.64 2.6-1.43 4.61c-.29.93.79 1.68 1.56 1.09l3.69-2.8 3.69 2.81c.77.59 1.85-.16 1.56-1.09l-1.43-4.61 3.64-2.6c.79-.57.39-1.81-.58-1.81h-4.45v-.01Z" />
    </svg>
  );
}

export function SignalIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.75 3.333h2.5v13.334h-2.5V3.333Zm-10 8.334h2.5v5h-2.5v-5Zm5-4.167h2.5v9.167h-2.5V7.5Z" />
    </svg>
  );
}

export function CheckCircleIcon(props: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}
