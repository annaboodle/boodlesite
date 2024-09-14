/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

import { variables } from "../../styles/shared";

export default function AboutMe() {
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
        I love thinking about how technology shapes how we see and interact with
        our world. I believe that design thinking is the way to create
        beautiful, empathetic products.
      </p>

      <p>
        My home base is Seattle, where you'll find me enjoying live music,
        playing board games, and visiting all the ice cream shops.
      </p>
    </div>
  );
}
