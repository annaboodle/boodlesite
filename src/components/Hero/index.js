/** @jsxImportSource @emotion/react */

import { css, jsx } from "@emotion/react";

import { mixins, variables } from "../../styles/shared";

import me from "../../img/about-me/me.jpg";

export default function Hero() {
  return (
    <div className="hero"
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 50px ${variables.pagePadding}px;
        height: calc(90vh - ${variables.menuHeight}px); //height of menu

        @media (max-width: ${variables.mobile}px) {
          flex-direction: column;
          padding: 20px 40px 50px;
          height: auto;
          max-width: ${variables.smallPageWidth}px;
          margin: 0 auto;
        }
      `}
    >
      {/* left side (img wrapper) */}
      <div
        css={css`
          max-width: 400px;
          width: 100%;
          position: relative;
          left: 44px;

          @media (max-width: ${variables.mobile}px) {
            left: 0;
            max-width: 550px;
          }
        `}
      >
        <img
          alt=""
          css={css`
            width: 100%;
            border-radius: 100%;
          `}
          src={me}
        ></img>
      </div>

      {/* right side (text) */}
      <div
        css={css`
          text-align: right;
          position: relative;
          left: -44px;
          top: 25px;

          @media (max-width: ${variables.mobile}px) {
            text-align: center;
            left: 0;
            top: 0;
            padding: 25px 0 0;
            width: 100%;
          }
        `}
      >
        <h1
          css={css`
            font-size: 80px;
            line-height: 0.9;
            margin: 0 0 20px;
            ${mixins.textGradient}

            @media (max-width: ${variables.mobile}px) {
              font-size: 60px;
            }

            @media (max-width: 480px) {
              font-size: 45px;
            }
          `}
        >
          Annabeth <br />
          Carroll
        </h1>
        <p
          css={css`
            font-size: 22px;
            font-weight: light;
            color: #4a4a4a;
            line-height: initial;
            @media (max-width: ${variables.mobile}px) {
              font-size: 20px;
            }
          `}
        >
          ux design // front-end dev //
          <br />
          prototyping // all-around cool cat
        </p>
      </div>
    </div>
  );
}
