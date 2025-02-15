/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

export default function TransparentBtn({
  children,
  bgColor,
  className,
  ...props
}) {
  return (
    <button
      className={`border-2 rounded-md transition-all duration-300 px-3 py-2 ${className} `}
      css={css`
        background-color: ${bgColor};
        border: 2px solid ${bgColor};
        &:hover {
          background-color: transparent;
          color: ${bgColor};
        }
      `}
      {...props}
    >
      {children}
    </button>
  );
}
