/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { variables } from "../../styles/shared";

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
        Please <a href="mailto:annabethcarroll+website@gmail.com">reach out</a>{" "}
        if you'd like to connect! (I'm ready to discuss UX, your favorite board
        games, or any animals you've encountered recently.)
      </p>
    </div>
  );
}
