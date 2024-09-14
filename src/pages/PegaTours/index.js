/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

import { mixins, variables } from "../../styles/shared";

import PageWrapper from "../../components/PageWrapper";

import results from "../../img/pega-tours/results.png";
import startTourHero from "../../img/pega-tours/start-tour-hero.png";
import stepV1 from "../../img/pega-tours/step-v1.png";
import stepV2 from "../../img/pega-tours/step-v2.png";
import tourDashboard from "../../img/pega-tours/tour-dashboard.png";
import walkmeEditor from "../../img/pega-tours/walkme+editor.png";

export default function PegaTours() {
  return (
    <PageWrapper className="project-page">
      <div>
        <div
          css={css`
            ${mixins.fullWidthImg}
            ${mixins.projectHeader}
          `}
        >
          <h1>Onboarding tours for Pegasystems</h1>

          <p
            css={css`
              ${mixins.subhead}
            `}
          >
            Creating onboarding tours to improve engagement with a software
            trial product
          </p>
        </div>

        <div
          css={css`
            ${mixins.fullWidthImg}
          `}
        >
          <img src={startTourHero} alt="startTourHero" />
        </div>
        {/**************************************/}
        {/**************************************/}
        {/**************************************/}
        <div>
          <div>
            <h2>The Pega Platform trial</h2>
            <p>
              Pega offers a low-code platform for building enterprise-level
              applications.
            </p>
            <p>
              As part of the sales process, we offer a 30-day trial version of
              the platform. Our goal is to highlight Pega’s differentiating
              features by enabling users to build real applications.
            </p>
            <p>
              Unfortunately, we had little insight on the trial’s impact on
              potential users. Who were our users? Were they finding what they
              wanted? What were their pain points, and how could we improve
              their trial experience?
            </p>
          </div>
        </div>

        {/**************************************/}
        {/**************************************/}
        {/**************************************/}
        <div>
          <h2>User analysis</h2>
          <h3>Current userbase</h3>
          <p>
            To analyze engagement with the current trial, we pulled as much data
            as we could find on our existing trial users. This included:
          </p>
          <ul>
            <li>
              <p>user email domains</p>
            </li>
            <li>
              <p>job titles</p>
            </li>
            <li>
              <p>activities completed in the trial</p>
            </li>
            <li>
              <p>session data from Google Analytics</p>
            </li>
          </ul>
          <h3>Personas</h3>
          <p>
            We classified each user into role-based categories,&nbsp;such as
            developer, business user, or consultant. We also cross-referenced
            email addresses with our marketing analytics to determine existing
            customers, competitors, or prospects. From this analysis, we
            developed four distinct persona types.
          </p>
          <h3>Conclusion</h3>
          <p>
            Overall, trial engagement was low. A majority of users didn't return
            after their initial log in. On average, users completed very few
            activities. Our trial was missing a clear jumping-off point for
            trial users.&nbsp;
          </p>
        </div>

        {/**************************************/}
        {/**************************************/}
        {/**************************************/}
        <div>
          <h2>Problem statement</h2>
          <p>
            After gaining access to the trial, users don’t know what they can
            do, how to start learning about the product, or where to find the
            features they're interested in.
          </p>

          <div>
            <figure>
              <blockquote>
                <span>“</span>I just want to figure out how to get going and
                build something!<span>”</span>
              </blockquote>
              <figcaption>— Usability testing participant</figcaption>
            </figure>
          </div>
        </div>

        {/**************************************/}
        {/**************************************/}
        {/**************************************/}
        <div>
          <div
            css={css`
              ${mixins.rightImg}
              @media (max-width: ${variables.mobile}px) {
                width: 33%;
              }
            `}
          >
            <img src={walkmeEditor} alt="walkme" />
            <label>Interface for building out tour logic.</label>
          </div>

          <h2>Our project: new onboarding tours</h2>
          <p>
            To address this problem, we decided to build out a series of
            optional onboarding tours. Our goals were as follows:
          </p>
          <ul>
            <li>
              <p>Give users a clear way to learn about the product</p>
            </li>
            <li>
              <p>Highlight the features they were most often searching for</p>
            </li>
            <li>
              <p>
                Enable and encourage users to build an application in their
                trial
              </p>
            </li>
          </ul>
          <p>
            We decided to measure our progress by monitoring all our existing
            trial engagement metrics (such as logged in time and number of
            logins) as well as tour completion rate.
          </p>
        </div>

        {/**************************************/}
        {/**************************************/}
        {/**************************************/}
        <div>
          <h2>Content and design</h2>

          <p>
            For our tours to be effective, they needed to be short, focused, and
            relevant to our users’ interests and needs. We first designed a tour
            to acquaint first-time visitors with the interface. Then, we
            reviewed the most commonly completed activities in our trial, and
            built tours around those popular features.&nbsp;
          </p>
          <p>
            We coordinated with our marketing team to ensure a consistent
            experience in terms of brand voice. We took into account the
            features they wanted to highlight, while advocating for the features
            that our users wanted to see.
          </p>
          <p>In total, we built out six short, feature-focused tours.</p>
        </div>

        {/**************************************/}
        {/**************************************/}
        {/**************************************/}
        <div>
          <h2>Usability testing</h2>
          <p>
            We tested on 4 new hires before they went through any type of
            training.
          </p>
          <p>
            We asked users to self-report their thoughts as they stepped through
            the new tours.&nbsp;
          </p>
          <p>
            After the tour, we guided a short discussion with a few follow-up
            questions:
          </p>
          <ul>
            <li>
              <p>
                How long do you think the process took? Did it feel too long,
                too short, or just right?
              </p>
            </li>
            <li>
              <p>
                What kinds of things do you think you can do with this
                application?
              </p>
            </li>
            <li>
              <p>What would you want to do next?</p>
            </li>
            <li>
              <p>
                On a scale of 1 to 7, where 1 is the worst, 4 is neither good
                nor bad, and 7 is the best, how would you rate this experience?
              </p>
            </li>
          </ul>

          <div
            css={css`
              ${mixins.fullWidthImg}
            `}
          >
            <img src={tourDashboard} alt="tour dash" />
            <label>
              We experimented with different ways to display and launch the
              tours. After prompting first-time users to start with an initial
              tour, we pointed them towards this menu where they could pick and
              choose tours to explore particular features of interest.
            </label>
          </div>
        </div>

        {/**************************************/}
        {/**************************************/}
        {/**************************************/}

        <div>
          <h2>Issues and iteration</h2>
          <p>
            Several issues were brought up in usability testing, such as:&nbsp;
          </p>
          <p>
            <strong>
              1. Half of our participants clicked the close button on a tour
              step without noticing.
            </strong>
          </p>
          <p>
            <em>Our solution:</em>&nbsp;We replaced the “X” close button with an
            “Exit tour” hyperlink located at the bottom of the tour step (see
            screenshots below).
          </p>
          <p>
            <strong>
              2. In multiple steps, users couldn’t determine which elements to
              click
            </strong>
          </p>
          <p>
            <em>Our solution: </em>We cut down the copy in each tour step to
            never be longer than one or two short sentences. We bolded the names
            of clickable elements, as well as slightly increasing the size of
            the arrow from the tour step bubble. Finally, we added a border
            around focused elements and a slightly opaque overlay to the rest of
            the page.
          </p>

          <div
            css={css`
              ${mixins.imageInRowWrapper}
            `}
          >
            <div
              css={css`
                ${mixins.imageInRow}
              `}
            >
              <img src={stepV1} alt="stepv1" />
              <label>Initial design.</label>
            </div>

            <div
              css={css`
                ${mixins.imageInRow}
              `}
            >
              <img src={stepV2} alt="stepv2" />
              <label>
                Edited design after usability testing. We added a light purple
                highlighter line around the focused element, plus a
                semitransparent overlay to the rest of the screen. We cut down
                the instructional copy, and made the close button's action more
                explicit.
              </label>
            </div>
          </div>
        </div>

        {/**************************************/}
        {/**************************************/}
        {/**************************************/}
        <div>
          <h2>Follow-up usability testing</h2>
          <p>
            After updating the tours, we ran 2 more usability tests. This time,
            our users completed the tours without accidentally closing any steps
            and consistently clicked the correct elements. Some other small
            issues cropped up (primarily around copy), but for the most part,
            our edits had solved the major issues from the first round of
            testing.
          </p>
          <p>
            In response to our follow-up questions, our users reported enjoying
            the tours, rated them as being a good length, and performed well on
            our knowledge check questions.
          </p>
          <p>We were ready for our initial launch!</p>

          <div
            css={css`
              ${mixins.fullWidthImg}
            `}
          >
            <img src={results} alt="results" />
            <label>
              By pulling reports on how many users completed each tour step, I
              was able to determine which steps were particularly tricky.
              Sometimes, we came up with more creative solutions to make those
              steps easier to follow, such as replacing explanatory copy with
              simple gifs that showed users what to do.
            </label>
          </div>
        </div>

        {/**************************************/}
        {/**************************************/}
        {/**************************************/}
        <div>
          <h2>Results</h2>
          <p>
            After the tours had been live for a few weeks, we reviewed the
            analytics around trial engagement and tour completion. Over the
            course of this project, trial logins increased 59%.
          </p>
          <p>
            In reviewing our initial goals for this project, we had succeeded in
            providing users with a clear starting point to learn about our
            product. We'd also come up with many more ideas for future
            improvements. It was time for another round of experiments!
          </p>
        </div>
      </div>
    </PageWrapper>
  );
}
