/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { mixins, variables } from "../../styles/shared";

import PageWrapper from "../../components/PageWrapper";

import cover from "../../img/hub-design-system/cover.jpg";
import brandVoice from "../../img/hub-design-system/brand-voice.png";
import colorsImg from "../../img/hub-design-system/colors.png";
import icons from "../../img/hub-design-system/icons.png";
import testimonialDarkHeadshot from "../../img/hub-design-system/testimonial+dark+headshot.png";
import testimonialDarkNoHeadshot from "../../img/hub-design-system/testimonial+dark+no+headshot.png";
import testimonialLightNoHeadshot from "../../img/hub-design-system/testimonial+light+no+headshot.png";
import typography from "../../img/hub-design-system/typography.png";

export default function HubDesignSystem() {
  return (
    <PageWrapper className="project-page">
      <div>
        <div
          css={css`
            ${mixins.fullWidthImg}
            ${mixins.projectHeader}
          `}
        >
          <h1>The HubSpot design system</h1>

          <p
            css={css`
              ${mixins.subhead}
            `}
          >
            Designing, building, and implementing a design and development style
            guide
          </p>
        </div>

        <div
          css={css`
            ${mixins.fullWidthImg}
          `}
        >
          <img src={brandVoice} alt="brandVoice" />
        </div>

        {/**************************************/}
        {/**************************************/}
        {/**************************************/}
        <div>
          <h2>The problem</h2>
          <p>
            HubSpot provides a suite of SaaS products for marketing and sales
            teams. I worked on a small team responsible for the main
            customer-facing website.&nbsp;In many ways, my team functioned as an
            in-house agency, taking requests from across the company for new
            pages and tools.
          </p>
          <p>
            When I started on the team, our process was inefficient and
            inconsistent. Designers had no internal consistency on fonts,
            photography, iconography, and visual elements. Developers were
            writing similar custom code from scratch for every project. With no
            common design language, most of our time was spent designing and
            building the same pages over and over.
          </p>
          <p>
            Our “customers” on the greater marketing team were also struggling.
            They had no resources for creating on-brand web assets without our
            help. If we didn’t have the bandwidth for a particular project,
            marketers either had to wait or cobble together something from
            existing site elements.
          </p>
        </div>
        {/**************************************/}
        {/**************************************/}
        {/**************************************/}
        <div>
          <h2>The project and my role</h2>
          <p>
            We decided to build a unified design system for both our design and
            development assets.
          </p>
          <p>
            In addition to building out all development assets, I also managed
            much of the research, testing, and education around the new system.
            My work included:
          </p>
          <ul>
            <li>
              Meeting with marketers to determine their issues and goals around
              building web pages
            </li>
            <li>
              Performing a complete site audit to identify commonly used site
              elements
            </li>
            <li>
              Working closely with design to refine mockups of those repeated
              patterns
            </li>
            <li>
              Building out reusable, customizable modules with HTML/CSS/JS
            </li>
            <li>
              Testing those modules with non-technical team members (and making
              updates accordingly!)
            </li>
            <li>
              <p>
                Leading internal training programs on designing and building
                custom pages with the new system
              </p>
            </li>
          </ul>

          <div
            css={css`
              ${mixins.fullWidthImg}
            `}
          >
            <img src={icons} alt="icons" />
            <label>
              As part of the design style guide, we included a set of
              standardized iconography. We included these icons in our resuable
              modules to make it easy for our users to find the proper assets.
            </label>
          </div>
        </div>
        {/**************************************/}
        {/**************************************/}
        {/**************************************/}
        <div>
          <h2>Initial research and discoveries</h2>
          <p>
            Shortly after project kick-off, I sat down with various members of
            our marketing team. My goal was to learn how they currently built
            custom pages and what their pain points were. Here are a couple of
            the key takeaways:&nbsp;
          </p>
          <p>
            <strong>
              1. There was no consistent process for how team members built
              their own webpages.
            </strong>
          </p>
          <p>
            Sometimes marketers cloned existing pages that did something close
            to what they needed. Sometimes they hacked together their own
            elements with custom HTML and CSS. Occasionally they submitted
            requests to the web team, but usually assumed my team would take too
            long to respond.
          </p>
          <p>
            <em>Design takeaway: </em>Since they needed pages built yesterday,
            our solution needed to be easy to learn and quicker to implement
            than their existing process. If it wasn't fast, they wouldn't use
            it!
          </p>
          <p>
            <strong>
              2. Marketers had various degrees of technical knowledge.
            </strong>
          </p>
          <p>
            Some were terrified by the mention of custom code, whereas others
            were more than willing to jump in and hack away.&nbsp;
          </p>
          <p>
            <em>Design takeaway: </em>Our style guide would need to be
            accessible to non-technical users. It would also need to be
            comprehensive enough that marketers wouldn’t need to turn to custom
            solutions.
          </p>

          <div
            css={css`
              ${mixins.fullWidthImg}
            `}
          >
            <img src={typography} alt="typography" />
            <label>
              We chose the main fonts for our website — a non-serif font for
              top-level headers and body copy, coupled with a contrasting serif
              font for visual interest. We tested out different combinations of
              styles, aiming to find a good fit for HubSpot's friendly yet
              professional brand.
            </label>
          </div>
        </div>
        {/**************************************/}
        {/**************************************/}
        {/**************************************/}
        <div>
          <h2>Design and development</h2>
          <p>
            To allow non-technical team members to build their own pages, I
            decided to build out a set of reusable, customizable content blocks.
            My goal was to enable marketers to build web pages by simply
            stacking together the blocks they needed and customizing their
            content.
          </p>
          <p>
            Before development, I went through all of the high-level pages of
            our site and identified the most frequently used types of content.
            Next, working with our design team, we came up with multiple
            wireframes for each module in order to envision the various display
            options. (As you can imagine, this ended up being a{" "}
            <strong>lot</strong> of wireframes!)
          </p>
          <p>
            After the designs were finalized, I built all the modules from
            scratch, including the logic for each&nbsp; possible layout option.
            I refactored the codebase to include global stylesheets for
            variables and commonly used styles. I also implemented a
            standardized naming convention for our CSS selectors.
          </p>

          <div
            css={css`
              ${mixins.fullWidthImg}
              margin-bottom: 5px;
            `}
          >
            <img src={testimonialDarkHeadshot} alt="testimonialDarkHeadshot" />
          </div>

          <div
            css={css`
              ${mixins.imageInRowWrapper}
              margin-top: 5px;
              @media (max-width: ${variables.mobile}px) {
                flex-direction: column-reverse;
              }
            `}
          >
            <div
              css={css`
                ${mixins.imageInRow}
                @media (max-width: ${variables.mobile}px) {
                  margin-right: 0;
                  margin-top: 5px;
                }
              `}
            >
              <img
                src={testimonialDarkNoHeadshot}
                alt="testimonialDarkNoHeadshot"
              />
            </div>
            <div
              css={css`
                ${mixins.imageInRow}
                @media (max-width: ${variables.mobile}px) {
                  margin-left: 0;
                }
              `}
            >
              <img
                src={testimonialLightNoHeadshot}
                alt="testimonialLightNoHeadshot"
              />
            </div>
          </div>

          <label
            css={css`
              ${mixins.fullWidthImg}
              margin-top: 5px;
            `}
          >
            This single testimonial module can be displayed in a variety of
            ways. The module itself will update to the proper layout and styles
            for whatever information the user provides, such as a headshot
            photo, testimonial video, and job title. Additionally, users may
            choose between two on-brand color themes.
          </label>
        </div>
        {/**************************************/}
        {/**************************************/}
        {/**************************************/}
        <div>
          <h2>Testing and feedback</h2>
          <p>
            I created a “beta” group of interested marketers, granted them
            access to the new system, and provided instructions for rebuilding
            pages. After a couple weeks, I reviewed their most recently built
            pages.&nbsp;
          </p>
          <p>
            Sometimes, people had built pages in the way we intended. More
            often, I found that they’d mixed the new modules with custom
            elements or code. In those cases, I’d reach out individually to the
            creators of these pages to see why they didn’t stick to the assets
            we provided.
          </p>
          <p>
            Further along in the project, I followed up individually with each
            member of my beta group to review their overall experience learning
            and using the new system. I also sat down with new marketers to
            introduce them to the new system and watch them attempt to rebuild
            outdated pages using the new design system.&nbsp;
          </p>
          <p>
            In each case, I worked to discover what our users were trying to do.
            What was their ultimate goal? What wasn’t working? How could we make
            it better?
          </p>

          <div
            css={css`
              ${mixins.fullWidthImg}
            `}
          >
            <img src={colorsImg} alt="colorsImg" />
            <label>
              We pared down our list of on-brand colors, and ensured that each
              color was accompanied with usage guidelines. We also took care to
              ensure that our web styles were consistent with those in the
              HubSpot product. Finally, I refactored our CSS to include a global
              sheet for color variables so that all color references pulled from
              a centralized resource.
            </label>
          </div>
        </div>
        {/**************************************/}
        {/**************************************/}
        {/**************************************/}
        <div>
          <h2>Insights from testing</h2>
          <p>
            After talking to people who were using the first iteration of our
            modules, I found that we’d created a tool that was only useful to
            users like us: people who already understood how to use modules,
            were familiar with creating pages from scratch, and believed in the
            value of a style guide. However, this persona didn’t always match up
            with the people we were building for.
          </p>
          <p>
            After speaking to several marketers, three major issues emerged:
          </p>
          <ol>
            <li>
              <p>
                <strong>Our assets didn’t fulfill their needs. </strong>None of
                our elements worked for the types of content our users were
                trying to showcase.
              </p>
            </li>
            <li>
              <p>
                <strong>They didn’t know how to use the style guide. </strong>
                They didn’t know the style guide had what they needed, or they
                simply didn’t understand how to put modules together into a
                page.
              </p>
            </li>
            <li>
              <p>
                <strong>They didn’t want to use the style guide.</strong> Some
                marketers preferred their own designs over our on-brand
                versions. They enjoyed their creative freedom, and saw our
                offering as stripping a part of their job away.
              </p>
            </li>
          </ol>
        </div>
        {/**************************************/}
        {/**************************************/}
        {/**************************************/}
        <div>
          <h2>Broadening the scope</h2>
          <p>
            My original goal was to simply build out a set of custom modules.
            However, to properly address the issues that came out of testing,
            the scope of our project needed to expand.
          </p>
          <p>I implemented the following changes to the design system:</p>
          <ol>
            <li>
              <p>
                I added a few <strong>more modules</strong> that had come up
                repeatedly in conversations, such as full-width featured images
                and cards for promotional content.
              </p>
            </li>
            <li>
              <p>
                I added <strong>microcopy to each customizable field</strong> to
                provide guidance during the page-build process.
              </p>
            </li>
            <li>
              <p>
                I built out a <strong>webpage that showed all modules</strong>{" "}
                that were available for use.&nbsp;
              </p>
            </li>
          </ol>
          <p>
            To ensure that the system continued to evolve and fulfill the needs
            of our users, I created a feedback form for marketers to request new
            modules. I regularly reviewed these submissions with the design
            team.&nbsp;
          </p>
          <p>
            Finally, we needed to convince people of the benefits of the new
            model. To do so, we organized an internal campaign to launch and
            explain the new style guide (including emails and posts on our
            internal message board). We worked with managers to position our new
            page-creation process as the new standard and communicate the many
            benefits of using our modules. Finally, we put together and led a
            series of training programs for the marketing team, as well as
            running a monthly session for all new hires.
          </p>

          <div
            css={css`
              ${mixins.fullWidthImg}
            `}
          >
            <img src={cover} alt="cover" />
          </div>
        </div>
        {/**************************************/}
        {/**************************************/}
        {/**************************************/}
        <div>
          <h2>The results</h2>
          <p>
            I completed the first ever style guide in June 2015. Since then,
            it’s evolved significantly, now forming the basis of the entire
            hubspot.com site.
          </p>
          <p>Our final deliverables were:</p>
          <ul>
            <li>
              A set of 13 customizable, reusable modules to enable non-technical
              team members to build on-brand web assets
            </li>
            <li>
              A two-page microsite to familiarize viewers with HubSpot’s brand
              standards and website design system
            </li>
            <li>
              An ongoing series of internal training programs for existing
              employees and new hires around building effective pages with the
              new design system
            </li>
          </ul>
          <p>
            After the style guide launched, an enormous amount of time was freed
            up across the team. Marketers built their own pages without relying
            on our team, developers spent more time on complex projects, and
            designers had a baseline for future design decisions.
          </p>
          <p>
            Additionally, we were able to experiment more quickly with global
            design changes. Due to the refactored and consolidated stylesheets,
            our site loaded significantly faster.
          </p>
          <p>
            <strong>
              Our success wouldn’t have been possible without listening to our
              users.{" "}
            </strong>
            Their feedback drastically changed the course of this project,
            providing us the insight to build tools and resources that addressed
            their needs.
          </p>
        </div>
        {/**************************************/}
        {/**************************************/}
        {/**************************************/}
        <div
          css={css`
            text-align: center;
          `}
        >
          <a
            css={css`
              ${mixins.button}
              margin-top: 20px;
            `}
            href="https://blog.hubspot.com/marketing/website-style-guide"
            data-initialized="true"
          >
            Read my post on HubSpot's blog
          </a>
        </div>
      </div>
    </PageWrapper>
  );
}
