/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { variables } from "../../styles/shared";

export default function PageWrapper({ className, children }) {
  return (
    <div
      className={className}
      css={css`
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        max-width: ${variables.smallPageWidth}px;
        padding: 20px ${variables.pagePadding}px 50px;
        @media (max-width: ${variables.mobile}px) {
          padding-top: 0;
        }
      `}
    >
      {children}
    </div>
  );
}
