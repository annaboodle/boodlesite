/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { variables, mixins } from "../../styles/shared";

export default function CirclePhoto({ url, label, side }) {
  return (
    <div
      css={css`
        position: relative;
        margin-top: 57px;
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        float: ${side === "left" ? "left" : "right"};
        ${side === "left"
          ? "left: -25%; margin-right: calc(-25% + 20px)"
          : "right: -25%; margin-left: calc(-25% + 20px)"};

        @media (max-width: ${1.5 * variables.smallPageWidth -
          variables.pagePadding}px) {
          margin-top: 49px;
          ${side === "left"
            ? `left: 0; margin-right: 20px;`
            : `margin-left: 20px; right: 0;`}
        }

        @media (max-width: ${variables.mobile}px) {
          margin-top: 20px;
          float: none;
          display: flex;
          justify-content: center;
          width: 100%;
          align-items: center;
        }
      `}
    >
      <div
        css={css`
          background: url(${url});
          width: 300px;
          height: 300px;
          border-radius: 100%;
          ${mixins.backgroundImg}
        `}
      ></div>
      <label>{label}</label>
    </div>
  );
}
