/** @jsxImportSource @emotion/react */

import { paths } from "../../styles/shared";

import ProjectTile from "./ProjectTile";

import hubHomepage from "../../img/hub-homepage/cover.jpg";
import homeward from "../../img/homeward/user-flow.jpeg";
import pegaTours from "../../img/pega-tours/tours-hero.png";
import hubDesignSystem from "../../img/hub-design-system/cover.jpg";

import PegaLogo from "../../img/company-logos/pega-logo.png";
import HubSpotLogo from "../../img/company-logos/hubspot-logo.png";
import IndeedLogo from "../../img/company-logos/indeed-logo.png";

import aiSuggestions from "../../img/ai-suggestions/ai-hero-square.png";
import workGaps from "../../img/work-gaps/work-gaps-hero-square.png";

export default function Projects({ isVerified, setIsVerified, pwModalOpen, setPwModalStatus, desiredPath, setDesiredPath }) {
  return (
    <div
      className="projects"
    >
      <ProjectTile
        background={aiSuggestions}
        name="Helping job seekers describe their work experience with generative AI"
        logo={IndeedLogo}
        type="ux design // prototyping // usability testing // content design // prompt engineering"
        link={paths.aiSuggestions}
        protected={true}
        setPwModalStatus={setPwModalStatus}
        setDesiredPath={setDesiredPath}
        isVerified={isVerified}
      />
      <ProjectTile
        background={workGaps}
        name="Helping job seekers explain work gaps on their resume"
        logo={IndeedLogo}
        type="ux design // prototyping // usability testing // content design"
        link={paths.workGaps}
        protected={true}
        setPwModalStatus={setPwModalStatus}
        setDesiredPath={setDesiredPath}
        isVerified={isVerified}
      />
      <ProjectTile
        background={hubDesignSystem}
        name="Designing, building, and implementing HubSpot's first web design and development style guide"
        logo={HubSpotLogo}
        type="front-end dev // user interviews // internal training"
        link={paths.hubDesignSystem}
      />
      <ProjectTile
        background={hubHomepage}
        name="Designing, testing, and building a homepage for a prominent SaaS company"
        logo={HubSpotLogo}
        type="front-end dev // a11y // interaction design"
        link={paths.hubHomepage}
      />
      <ProjectTile
        background={pegaTours}
        name="Creating onboarding tours to improve engagement with a software trial product"
        logo={PegaLogo}
        type="ux design // usability testing // content design"
        link={paths.pegaTours}
      />
      <ProjectTile
        background={homeward}
        name="Designing an app for renters to find compatible roommates and apartments"
        type="ux design // user interviews // persona development // feature prioritization // prototyping"
        link={paths.homeward}
      />
    </div>
  );
}
