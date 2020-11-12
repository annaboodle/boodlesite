import { HashLink as Link } from "react-router-hash-link";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import Resume from "../../img/AnnabethCarroll.pdf";

import { variables, paths } from "../../styles/shared";

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
        I'm a design technologist with a background in front-end web
        development, marketing, and customer support.
      </p>

      <p>
        I love thinking about how technology shapes how we see and interact with
        our world. I believe that design thinking is the way to create
        beautiful, empathetic products.
      </p>

      <p>
        <a href="mailto:annabethcarroll@gmail.com">Reach out</a> if you'd like
        to connect! (I'm ready to discuss UX, your favorite board games, or any
        animals you've encountered recently.)
      </p>

      <p>
        PS. You're also welcome to <a href={Resume}>check out my resume</a> or
        read more about <Link to={paths.about}>how I got into UX.</Link>
      </p>
    </div>
  );
}
