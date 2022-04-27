/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { variables, mixins } from "../../styles/shared";

export default function SectionHeader({ headline, subhead, color, anchor }) {
  return (
    <div
      css={css`
        padding: 20px ${variables.pagePadding}px 10px;
        text-align: center;
      `}
      id={anchor}
    >
      <p
        css={css`
          ${mixins.secondaryFont}
        `}
      >
        {subhead}
      </p>

      <h2
        css={css`
          color: ${color};
          border-top: 1px solid;
          font-size: 32px;
          margin-top: 12px;
          padding-top: 12px;
          max-width: 350px;
          margin: 0 auto;
          &:before,
          &:after {
            display: none;
          }
        `}
      >
        {headline}
      </h2>
    </div>
  );
}
