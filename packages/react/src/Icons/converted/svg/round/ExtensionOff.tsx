import type { SVGProps } from "react";

const SvgExtensionOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M20.49 21.9a.996.996 0 0 1-1.41 0l-.92-.92c-.06 0-.11.02-.16.02h-3.8c0-2.71-2.16-3-2.7-3s-2.7.29-2.7 3H5c-1.1 0-2-.9-2-2v-3.8c2.71 0 3-2.16 3-2.7s-.3-2.7-2.99-2.7V6c0-.05.02-.09.02-.14l-.93-.93a.996.996 0 1 1 1.41-1.41l16.97 16.97c.4.39.4 1.02.01 1.41M20 17.17V15a2.5 2.5 0 0 0 0-5V6c0-1.1-.9-2-2-2h-4a2.5 2.5 0 0 0-5 0H6.83z" />
  </svg>
);

export { SvgExtensionOff };