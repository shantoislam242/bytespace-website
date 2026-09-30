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

export function StarSharpIcon(props: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M14.43 10 12 2l-2.43 8H2l6.18 4.41L5.83 22 12 17.31 18.18 22l-2.35-7.59L22 10h-7.57Z" />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M7.41 8.295 12 12.875l4.59-4.58L18 9.705l-6 6-6-6 1.41-1.41Z" />
    </svg>
  );
}

export function ChevronLeftIcon(props: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M17.885 3.77 16.115 2l-10 10 10 10 1.77-1.77-8.23-8.23 8.23-8.23Z" />
    </svg>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M6.115 20.23 7.885 22l10-10-10-10-1.77 1.77 8.23 8.23-8.23 8.23Z" />
    </svg>
  );
}

export function FilterIcon(props: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M7.005 6h10l-5.01 6.3-4.99-6.3Zm-2.75-.39C6.275 8.2 10.005 13 10.005 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39c.51-.66.04-1.61-.79-1.61H5.045c-.83 0-1.3.95-.79 1.61Z" />
    </svg>
  );
}

export function CategoryIcon(props: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M11.5 2 6 11h11l-5.5-9Zm0 3.84L13.43 9H9.56l1.94-3.16ZM17 13c-2.49 0-4.5 2.01-4.5 4.5S14.51 22 17 22s4.5-2.01 4.5-4.5S19.49 13 17 13Zm0 7a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5ZM2.5 21.5h8v-8h-8v8Zm2-6h4v4h-4v-4Z" />
    </svg>
  );
}

export function SortIcon(props: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M3 18h6v-2H3v2ZM3 6v2h18V6H3Zm0 7h12v-2H3v2Z" />
    </svg>
  );
}

export function ShareIcon(props: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18 16.12c-.76 0-1.44.3-1.96.77l-7.13-4.15c.05-.23.09-.46.09-.7 0-.24-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.85C7.5 9.35 6.79 9.04 6 9.04c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92ZM18 4.04c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1Zm-12 9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1Zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1Z" />
    </svg>
  );
}

export function StudentsIcon(props: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87ZM15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24A5.98 5.98 0 0 1 15 8c0 1.42-.5 2.73-1.33 3.76.42.14.86.24 1.33.24Zm-6 0c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2Zm0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4Zm6 5H3v-.99C3.2 16.29 6.3 15 9 15s5.8 1.29 6 2v1Z" />
    </svg>
  );
}

export function PlayCircleIcon(props: IconProps) {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M36 6C19.44 6 6 19.44 6 36s13.44 30 30 30 30-13.44 30-30S52.56 6 36 6Zm-6 43.5v-27L48 36 30 49.5Z" />
    </svg>
  );
}

export function FolderIcon(props: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2Zm0 12H4V6h5.17l2 2H20v10Zm-2-6H6v-2h12v2Zm-4 4H6v-2h8v2Z" />
    </svg>
  );
}

export function VideoIcon(props: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M15 8v8H5V8h10Zm1-2H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7c0-.55-.45-1-1-1Z" />
    </svg>
  );
}

export function CertificateIcon(props: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18 12h-4v1.5h4V12Zm0 3h-4v1.5h4V15Zm2-8h-5V4c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2ZM11 4h2v5h-2V4Zm9 16H4V9h5c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2h5v11ZM9 15a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm2.08 1.18A5.02 5.02 0 0 0 9 15.75c-.74 0-1.44.15-2.08.43A1.51 1.51 0 0 0 6 17.57V18h6v-.43c0-.61-.36-1.15-.92-1.39Z" />
    </svg>
  );
}

export function ConsultationIcon(props: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M11 14H9c0-4.97 4.03-9 9-9v2c-3.87 0-7 3.13-7 7Zm7-3V9c-2.76 0-5 2.24-5 5h2c0-1.66 1.34-3 3-3ZM7 4c0-1.11-.89-2-2-2s-2 .89-2 2 .89 2 2 2 2-.89 2-2Zm4.45.5h-2C9.21 5.92 7.99 7 6.5 7h-3C2.67 7 2 7.67 2 8.5V11h6V8.74a4.5 4.5 0 0 0 3.45-4.24ZM19 17c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2Zm1.5 1h-3c-1.49 0-2.71-1.08-2.95-2.5h-2c.2 2.01 1.59 3.65 3.45 4.24V22h6v-2.5c0-.83-.67-1.5-1.5-1.5Z" />
    </svg>
  );
}
