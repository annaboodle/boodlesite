/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

import { mixins, variables } from "../../styles/shared";

import PageWrapper from "../../components/PageWrapper";

import CirclePhoto from "../../components/CirclePhoto";

import sketchSmall from "../../img/about-me/sketch-small.jpeg";

import hubspot from "../../img/about-me/hubspot.png";
import pega from "../../img/about-me/pega.png";
import twine from "../../img/about-me/twine.png";
import vassar from "../../img/about-me/vassar.png";
import indeed from "../../img/about-me/jobby.jpg";

export default function About() {
  const aboutPageSectionStyles = css`
    @media (max-width: ${variables.mobile}px) {
      display: flex;
      flex-direction: column-reverse;
    }

    &:after {
      content: "";
      clear: both;
      display: block;
      margin-bottom: 3em;
    }
  `;

  return (
    <PageWrapper className="about-page">
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          margin-bottom: 50px;
          @media (max-width: ${variables.mobile}px) {
            margin-bottom: 0;
          }
        `}
      >
        <div
          css={css`
            @media (max-width: ${variables.mobile}px) {
              flex-basis: 0;
              flex-grow: 1.5;
            }
          `}
        >
          <h1>My path to UX</h1>
          <p
            css={css`
              ${mixins.subhead}
            `}
          >
            A winding path from building robots to building experiences
          </p>
        </div>

        <div
          css={css`
            position: relative;
            right: -25%;
            margin-left: calc(-25% + 20px);

            @media (max-width: ${1.5 * variables.smallPageWidth -
            variables.pagePadding}px) {
              margin-left: 20px;
              right: 0;
            }
            @media (max-width: ${variables.mobile}px) {
              flex-basis: 0;
              flex-grow: 1;
            }
          `}
        >
          <img
            css={css`
              @media (max-width: ${variables.mobile}) {
                width: 150px;
              }
            `}
            src={sketchSmall}
            alt="Sketch of me"
          />
        </div>
      </div>

      {/**************************************/}
      {/**************************************/}
      {/**************************************/}
      <div
        css={css`
          ${aboutPageSectionStyles}
        `}
      >
        <CirclePhoto url={vassar} label="Leaping for joy by the iconic Vassar library" side="left" />

        <div>
          <h2>Vassar College</h2>
          <p>I studied at Vassar College in Poughkeepsie, NY.</p>
          <p>
            After my initial approach of taking every class that sounded
            interesting — and there were so many! — I discovered cognitive
            science. A multidisciplinary field where I could compete in robot
            competitions, debate bioethics, and study the biology of the human
            brain? Sounded perfect!
          </p>
          <p>
            Perhaps also of note: I studied abroad in Budapest, joined a
            fire-spinning club, and started a letter-writing organization. Most
            of my time was spent in a library that looks like a castle.
          </p>
        </div>
      </div>

      {/**************************************/}
      {/**************************************/}
      {/**************************************/}
      <div
        css={css`
          ${aboutPageSectionStyles}
        `}
      >
        <CirclePhoto
          url={hubspot}
          label="Hijinks at HubSpot's annual conference"
          side="right"
        />

        <div>
          <h2>HubSpot</h2>
          <p>
            After graduating, I landed a customer support job at a
            Cambridge-based startup. I spoke to hundreds of customers and
            learned a lot — from inbound marketing strategy to debugging complex
            integrations. I figured out how to listen for goals, not problems.
          </p>
          <p>
            My absolute favorite part of the role was helping people create
            beautiful, functional websites. So in the evenings, I took a class
            in front-end web development. Shortly afterwards, I landed my next
            role as a web developer on HubSpot’s marketing team.
          </p>
          <p>
            I spent the next couple years building pages and tools for HubSpot’s
            websites. During this time, the company had transformed from a small
            startup to a public, international company, and our site was pulling
            in over 7 million visitors per month. I partnered closely with our
            optimization experts, and together we built a culture of
            experimentation, testing, and iteration.
          </p>
        </div>
      </div>

      {/**************************************/}
      {/**************************************/}
      {/**************************************/}
      <div
        css={css`
          ${aboutPageSectionStyles}
        `}
      >
        <CirclePhoto
          url={twine}
          label="Twine's fabulous neon sign"
          side="left"
        />

        <div>
          <h2>Twine Health</h2>
          <p>
            I wanted to broaden my skillset and learn how other companies solved
            problems, and I was lucky enough to discover a small healthcare
            startup working to connect patients with care teams. I was attracted
            to their focus on behavior change and measurable outcomes, so I
            joined the team as a Product Operations Engineer.
          </p>
          <p>
            I loved working at a startup and contributing across departments. On
            any given day, I’d participate in discussions on feature
            prioritization, product strategy, or how we could help specific
            customers achieve success. I even produced a podcast where our CEO
            interviewed local healthcare professionals.
          </p>
        </div>
      </div>

      {/**************************************/}
      {/**************************************/}
      {/**************************************/}
      <div
        css={css`
          ${aboutPageSectionStyles}
        `}
      >
        <CirclePhoto url={pega} label="Fashionable Pega headgear" side="right" />

        <div>
          <h2>Pegasystems</h2>
          <p>
            After some freelance web development, I decided to make another
            slight career pivot, joining Pegasystems as a Product Architect.
            This hybrid role was incredibly collaborative, with most projects connecting some combination of development, design, and marketing.
          </p>
          <p>
            Now at my third software company, I was finally starting to consider
            UX as a potential career path. Knowing I needed to learn more, I
            enrolled in a User Experience Design class at General Assembly.
            Within the first week, I realized that all of my favorite parts of
            past positions were related to user experience. I was hooked.
          </p>
        </div>
      </div>

      {/**************************************/}
      {/**************************************/}
      {/**************************************/}
      <div
        css={css`
          ${aboutPageSectionStyles}
        `}
      >
        <CirclePhoto url={indeed} label="My prized Indeed pin collection" side="left" />

        <div>
          <h2>Indeed</h2>
          <p>
            As a design technologist, my role bridged the gap between design and development. I created designs, built interactive prototypes, validated them with user research, and collaborated with engineers to implement new features. Over my 5 years at Indeed, I leaned into my strengths to solve problems for job seekers, connect engineers with the design process, and build a polished, accessible product.
          </p>
          <p>
            I primarily worked with the Profile team to help job seekers improve their resumes and highlight their skills to employers. I’m so proud of my team’s work to improve the process of job searching, and I look forward to using this experience to solve new problems wherever my career takes me.
          </p>
        </div>
      </div>
    </PageWrapper>
  );
}
