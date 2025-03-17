/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import Loader from "src/components/ui/icons/Loader";

export default function TransparentBtn({
  children,
  bgColor,
  className,
  loading = null,
  ...props
}) {
  return (
    <button
      className={`rounded-md flex items-center justify-center border-2 px-3 py-2 text-base transition-all duration-300 ${className} `}
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
      {loading ? <Loader /> : children}
    </button>
  );
}
