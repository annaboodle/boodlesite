/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

import { HashLink as Link } from "react-router-hash-link";

import Resume from "../../img/AnnabethCarroll.pdf";

import { variables, paths } from "../../styles/shared";

export default function Contact() {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        max-width: ${variables.smallPageWidth}px;
        padding: 20px ${variables.pagePadding}px 50px;
      `}
    >
      <p>
        Please <a href="mailto:annabethcarroll+website@gmail.com">send me an email</a>{" "}
        if you'd like to connect! (I'm ready to discuss UX, your favorite board
        games, or any animals you've encountered recently.)
      </p>
      <p>
        You're also welcome to <a target="_blank" href={Resume}>check out my resume</a> or read
        more about <Link to={paths.about}>how I got into UX.</Link>
      </p>
    </div>
  );
}
