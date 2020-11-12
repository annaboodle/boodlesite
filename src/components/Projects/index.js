/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { variables, paths } from "../../styles/shared";

import ProjectTile from "./ProjectTile";

import hubHomepage from "../../img/hub-homepage/cover.jpg";
import homeward from "../../img/homeward/cover.png";
import pegaTours from "../../img/pega-tours/cover.png";
import hubDesignSystem from "../../img/hub-design-system/cover.jpg";

export default function Projects() {
  const first = css`
    position: relative;
    top: -50px;
    min-height: 400px;
  `;
  const second = css`
    position: relative;
    min-height: 300px;
    width: 100%;
  `;
  const third = css`
    position: relative;
    top: -50px;
    left: -50px;
    min-height: 300px;
  `;
  const fourth = css`
    position: relative;
    left: -50px;
    min-height: 400px;
  `;

  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: 0 auto;
        max-width: ${variables.largePageWidth}px;
        padding: calc(20px + 50px) calc(${variables.pagePadding}px + 0.5 * 50px)
          50px calc(${variables.pagePadding}px + 50px);

        @media (max-width: ${variables.mobile}px) {
          padding: 20px ${variables.pagePadding}px;
        }
      `}
    >
      <ProjectTile
        background={homeward}
        year="2018"
        name="Homeward"
        type="ux design // research // prototyping"
        side="left"
        vertical="bottom"
        styles={first}
        link={paths.homeward}
      />
      <ProjectTile
        background={hubDesignSystem}
        year="2016"
        name="HubSpot design system"
        type="front-end dev // research // training"
        side="right"
        vertical="bottom"
        styles={second}
        link={paths.hubDesignSystem}
      />

      <ProjectTile
        background={pegaTours}
        year="2018"
        name="Onboarding tours"
        type="design // research // copywriting"
        side="left"
        vertical="top"
        styles={third}
        link={paths.pegaTours}
      />
      <ProjectTile
        background={hubHomepage}
        year="2016"
        name="HubSpot homepage redesign"
        type="front-end dev // interaction design"
        side="right"
        vertical="top"
        styles={fourth}
        link={paths.hubHomepage}
      />
    </div>
  );
}
