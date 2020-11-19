import { HashLink as Link } from "react-router-hash-link";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { colors, mixins, variables } from "../../../styles/shared";

export default function ProjectTile({
  background,
  year,
  name,
  type,
  side,
  vertical,
  styles,
  link,
}) {
  return (
    <Link
      to={link}
      css={css`
        color: initial;
        margin: 10px;
        flex: 1 0 calc(50% - 30px);
        display: flex;
        justify-content: ${side === "left" ? "flex-end" : "flex-start"};
        align-items: ${vertical === "top" ? "flex-start" : "flex-end"};
        @media (max-width: ${variables.mobile}px) {
          flex: 1 0 calc(100% - 30px);
          margin: 20px 0;
          max-width: 600px;
        }
        &:hover {
          color: initial;
        }
      `}
    >
      <div
        css={css`
          cursor: pointer;
          margin: 20px;
          background: url(${background});
          display: flex;
          flex-direction: column;
          ${mixins.backgroundImg};
          ${styles}

          @media (max-width: ${variables.mobile}px) {
            width: 100%;
            position: relative;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            min-height: 0;
            margin: 0 0 1px;
            background: #fff;
          }

          @media (min-width: ${variables.mobile + 1}px) {
            &:hover {
              .inner {
                opacity: 1;
                border-width: 30px;
              }
            }
          }
        `}
      >
        {/* image for mobile only */}
        <div
          css={css`
            display: none;
            background: url(${background});
            ${mixins.backgroundImg};
            height: 250px;
            width: 80%;

            @media (max-width: ${variables.mobile}px) {
              display: block;
              left: 20%;
              position: relative;
            }
          `}
        ></div>

        <div
          className="inner"
          css={css`
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            transition: 0.3s opacity, 0.3s border-width, 0.3s margin;
            opacity: 0;
            border-width: 30px;
            padding: 20px;
            background: #ffffffed;
            border-style: solid;
            border-image: linear-gradient(
                ${colors.startColor},
                ${colors.endColor}
              )
              1;

            @media (max-width: ${variables.mobile}px) {
              opacity: 1;
              border-width: 30px;
              background: #fff;
              position: relative;
              top: -30px;
              margin-bottom: -30px;
              width: 80%;
              z-index: 1;
              border-width: 5px;
            }
          `}
        >
          <p>{year}</p>

          <div
            css={css`
              text-align: center;
            `}
          >
            <h3
              css={css`
                margin: 0 0 10px;
              `}
            >
              {name}
            </h3>
            <p
              css={css`
                margin: 0 0;
              `}
            >
              {type}
            </p>
          </div>

          <p
            css={css`
              margin: 16px 0 0;
              font-family: "Days One";
              font-size: 12px;
              color: ${colors.startColor};

              &:after {
                content: "";
                width: 100%;
              }
            `}
          >
            see more ›
          </p>
        </div>
      </div>
    </Link>
  );
}
