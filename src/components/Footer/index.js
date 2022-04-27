/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import EmotionIcon from "../../img/icons/emotion.png";
import SketchIcon from "../../img/icons/sketch.png";
import ReactIcon from "../../img/icons/react.png";
import GithubIcon from "../../img/icons/github.png";

import LinkedInIcon from "../../img/icons/linkedin";
import MailIcon from "../../img/icons/mail";
import MailOpenIcon from "../../img/icons/mail-open.js";

import ToolLink from "./ToolLink";

import { variables, mixins, colors } from "../../styles/shared";

export default function Footer() {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 auto;
        max-width: ${variables.largePageWidth}px;
        padding: 20px ${variables.pagePadding}px 20px;

        @media (max-width: ${variables.mobile}px) {
          flex-direction: column;
        }
      `}
    >
      <div
        css={css`
          ${mixins.secondaryFont}

          @media (max-width: ${variables.mobile}px) {
            margin-bottom: 15px;
          }
        `}
      >
        Design and code by Annabeth using
        {` `}
        <ToolLink
          name="GitHub Pages"
          link="https://pages.github.com/"
          img={GithubIcon}
        />
        {`, `}
        <ToolLink name="React" link="https://reactjs.org/" img={ReactIcon} />
        {`, `}
        <ToolLink
          name="Emotion"
          link="https://emotion.sh/docs/introduction"
          img={EmotionIcon}
        />
        {`, and `}
        <ToolLink
          name="Sketch"
          link="https://www.sketch.com/"
          img={SketchIcon}
        />
      </div>

      <div
        css={css`
          display: flex;
          align-items: center;
        `}
      >
        <a
          css={css`
            margin-right: 10px;
            width: 24px;
            &:hover {
              .li-normal {
                display: none;
              }
              .li-hover {
                display: block;
              }
            }
          `}
          href="https://www.linkedin.com/in/annabethcarroll/"
        >
          <span
            className="li-hover"
            css={css`
              display: none;
            `}
          >
            <LinkedInIcon fill={colors.linkHoverColor} />
          </span>
          <span
            className="li-normal"
            css={css`
              display: block;
            `}
          >
            <LinkedInIcon fill={colors.lighterGray} />
          </span>
        </a>

        <a
          href="mailto:annabethcarroll+website@gmail.com"
          css={css`
            display: flex;
            padding: 5px;
            align-items: center;
            &:hover {
              .mail-closed {
                display: none;
              }
              .mail-open {
                display: flex;
              }
            }
          `}
        >
          <span
            className="mail-open"
            css={css`
              display: none;
            `}
          >
            <MailOpenIcon fill={colors.linkHoverColor} />
          </span>
          <span
            className="mail-closed"
            css={css`
              display: flex;
            `}
          >
            <MailIcon fill={colors.lighterGray} />
          </span>
        </a>
      </div>
    </div>
  );
}
