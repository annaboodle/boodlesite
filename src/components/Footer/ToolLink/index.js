/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { colors } from "../../../styles/shared";

export default function ToolLink({ name, link, img }) {
  const toolIconStyles = css`
    max-width: 100%;
    max-height: 100%;
  `;

  const borderWidth = 2;
  const width = 40;
  const padding = 5;

  const toolIconWrapperStyles = css`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: ${width}px;
    height: ${width}px;
    padding: ${padding}px;
    left: 50%;
    margin-left: calc(-0.5 * ${width}px);
    background: #fff;
    background-clip: padding-box;
    border: solid ${borderWidth}px transparent;
    border-radius: ${width}px;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      margin: -${borderWidth}px;
      border-radius: inherit;
      background: linear-gradient(${colors.startColor}, ${colors.endColor});
    }
  `;

  const toolStyles = css`
    position: relative;
    padding-top: 5px;
    &:hover {
      .icon {
        bottom: 100%;
        opacity: 1;
      }
    }
  `;

  return (
    <a
      css={css`
        ${toolStyles}
      `}
      href={link}
    >
      <span
        className="icon"
        css={css`
          transition: 0.3s bottom;
          bottom: 0%;
          opacity: 0;
          ${toolIconWrapperStyles}
        `}
      >
        <img
          css={css`
            ${toolIconStyles}
          `}
          src={img}
          alt="sketch"
        />
      </span>
      {name}
    </a>
  );
}
