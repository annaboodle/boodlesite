/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

import { paths, mixins } from "../../styles/shared";

import PageWrapper from "../../components/PageWrapper";

import analytics from "../../img/hub-homepage/Analytics.png";
import fullpage from "../../img/hub-homepage/fullpage.png";
import heatmapHero from "../../img/hub-homepage/heatmap-hero.png";
import heatmaps1 from "../../img/hub-homepage/heatmaps1.png";
import heatmaps2 from "../../img/hub-homepage/heatmaps2.png";
import heatmaps3 from "../../img/hub-homepage/heatmaps3.png";
import heatmaps4 from "../../img/hub-homepage/heatmaps4.png";
import hoverHero from "../../img/hub-homepage/hover-hero.gif";
import hover from "../../img/hub-homepage/hover.gif";
import hoverfree from "../../img/hub-homepage/hoverfree.png";
import wireframe from "../../img/hub-homepage/wireframe.png";

export default function HubHomepage() {
  return (
    <PageWrapper className="project-page">
      <div>
        <div
          css={css`
            ${mixins.fullWidthImg}
            ${mixins.projectHeader}
          `}
        >
          <h1>HubSpot homepage redesign</h1>

          <p
            css={css`
              ${mixins.subhead}
            `}
          >
            Designing, testing, and building a homepage for a prominent SaaS
            company
          </p>
        </div>

        <div
          css={css`
            ${mixins.fullWidthImg}
          `}
        >
          <img src={hoverfree} alt="hoverfree" />
        </div>
        {/**************************************/}
        {/**************************************/}
        {/**************************************/}
        <div>
          <h2>The challenge</h2>
          <p>
            HubSpot had quickly gone from a single-product domestic company to a
            multi-product international company. We needed to showcase our new
            offerings and ensure that our visitors were finding the right tools,
            information, and resources.
          </p>
          <p>
            We'd also just released{" "}
            <a href={paths.hubDesignSystem}>HubSpot’s new style guide</a>
            &nbsp;—&nbsp;so our homepage needed to reflect our new branding and
            design system. Plus, we were working with a hard
            deadline:&nbsp;HubSpot’s annual industry event, INBOUND.
          </p>
        </div>
        {/**************************************/}
        {/**************************************/}
        {/**************************************/}
        <div>
          <h2>My role</h2>
          <p>
            My teammates on this project consisted of a visual designer, user
            experience researcher,&nbsp;and product manager.
          </p>
          <p>
            As the lead (and sole!) developer, I was responsible for the
            implementation of the page.&nbsp;I also worked on a great deal of
            the research, analysis, conceptualization, and usability. This
            included:
          </p>
          <ul>
            <li>
              Setting up analytics software and analyzing data alongside our
              user experience designer
            </li>
            <li>
              Participating in all design review meetings, from wireframes to
              high-fidelity mockups
            </li>
            <li>
              Working closely with our visual designer to come up with dynamic,
              responsive, and interactive versions of static designs
            </li>
            <li>Proposing, refining, and testing brand messaging</li>
            <li>Reviewing session recordings and usability tests</li>
            <li>Designing and implementing A/B tests&nbsp;</li>
          </ul>
          <p>
            Having previously worked with customers on HubSpot's customer
            success team, I contributed technical knowledge, deep familiarity
            with our product, and an informed understanding of our users.&nbsp;
          </p>

          <div
            css={css`
              ${mixins.fullWidthImg}
            `}
          >
            <img src={analytics} alt="analytics" />
            <label>
              HubSpot's marketing analytics showed us the original sources that
              brought users to our website, and which pages were getting the
              most traffic. Google Analytics gave us insight into how visitors
              traveled through the website.
            </label>
          </div>
        </div>

        {/**************************************/}
        {/**************************************/}
        {/**************************************/}
        <div>
          <h2>Research</h2>
          <p>
            We started this project by pulling together a great deal of
            qualitative and quantitative data, such as:
          </p>
          <ul>
            <li>
              website analytics from HubSpot, Google Analytics, and Mixpanel
            </li>
            <li>heatmaps, scrollmaps, and session recordings from Crazy Egg</li>
            <li>homepage tests from participants on usertesting.com</li>
            <li>A/B tests from HubSpot and Optimizely</li>
            <li>
              direct feedback from users in blog posts, tweets, and social media
              comments
            </li>
          </ul>
          <p>
            Over the course of the project, we performed additional research and
            usability tests to validate potential wireframes, messaging, and
            interactions.
          </p>
        </div>

        {/**************************************/}
        {/**************************************/}
        {/**************************************/}
        <div>
          <h2>Insights</h2>
          <p>
            After distilling the vast amount of information available, we came
            up with several actionable insights and takeaways:&nbsp;
          </p>
          <p>
            <strong>
              1. After landing on the site, most users jumped to the pricing
              page, the FAQs, or a search.&nbsp;
            </strong>
          </p>
          <p>
            <em>Takeaway:</em> We hypothesized that our homepage wasn't
            providing our users with the resources or information they were
            seeking. We needed to figure out our users' goals so that we could
            surface appropriate, relevant information.
          </p>
          <p>
            <strong>
              2. Less than 25% of visitors scrolled down the homepage.&nbsp;
            </strong>
          </p>
          <p>
            <em>Takeaway: </em>The above-the-fold space is critical! We needed
            to ensure the most relevant content and featured offerings are
            immediately visible.&nbsp;
          </p>
          <p>
            <strong>3. Users don't understand what HubSpot does.</strong>&nbsp;
          </p>
          <p>
            To measure users' first impressions, we showed the existing homepage
            to participants for 5 seconds, then asked specific questions about
            about their takeaways. The majority of our users weren't able to
            articulate what HubSpot is. Often, they didn't even realize we were
            selling software! Many users only got a sense of our business after
            looking through the navigation and seeing product names and pricing
            pages.&nbsp;
          </p>
          <p>
            <em>Takeaway:</em>&nbsp;We needed to refine our brand messaging,
            eliminate distracting elements, and clearly articulate our value
            proposition. Our site needed to be accessible for first-time
            visitors as well as returning users.
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
              <img src={heatmaps1} alt="heatmaps1" />
              <label>2014 homepage heatmap.</label>
            </div>
            <div
              css={css`
                ${mixins.imageInRow}
              `}
            >
              <img src={heatmaps2} alt="heatmaps2" />
              <label>Early 2015 homepage heatmap.</label>
            </div>
            <div
              css={css`
                ${mixins.imageInRow}
              `}
            >
              <img src={heatmaps3} alt="heatmaps3" />
              <label>Mid-2015 homepage heatmap.</label>
            </div>
            <div
              css={css`
                ${mixins.imageInRow}
              `}
            >
              <img src={heatmaps4} alt="heatmaps4" />
              <label>Mid-2015 homepage scrollmap.</label>
            </div>
          </div>
        </div>

        {/**************************************/}
        {/**************************************/}
        {/**************************************/}
        <div>
          <h2>Determining content for initial wireframes</h2>
          <p>
            We worked hard to balance user goals with business goals. With a
            project as impactful as the homepage, internal stakeholders across
            all departments needed to be included and represented. At some
            points, it felt like everyone in the company was competing for space
            to feature their team's products and services!
          </p>
          <p>
            Fortunately, we had a great deal of data to help guide us in
            deciding what content to include on the homepage. We built out the
            most common user flows, categorized our visitors based on
            demographic information, and reviewed video recordings of actual
            visitors interacting with our existing site. This guided us towards
            the elements that our users were looking for and engaging with,
            allowing us to justify our ultimate content decisions.&nbsp;
          </p>
          <p>
            Once we were sure of the elements we'd be including, we collaborated
            with stakeholders to determine messaging and copy. We then drafted
            three potential wireframes,&nbsp;ultimately choosing the version
            that best fit our content and resonated best across our team.&nbsp;
          </p>

          <div
            css={css`
              ${mixins.fullWidthImg}
            `}
          >
            <img src={wireframe} alt="heatmaps4" />
            <label>
              One of our initial wireframes. The high-fidelity design ended up
              mirroring this layout fairly closely.
            </label>
          </div>
        </div>

        {/**************************************/}
        {/**************************************/}
        {/**************************************/}
        <div>
          <h2>Internationalization</h2>
          <p>
            As a global company, HubSpot required a site for each of our
            markets. In addition to English, the new homepage would be
            translated into Spanish, Portuguese, German, French, and Japanese.
            Since foreign translations often took up significantly more or less
            space than their English counterparts, we made sure to factor
            flexible copy length into the design and development process,
            ensuring that the page could accommodate copy of different sizes.
          </p>
        </div>

        {/**************************************/}
        {/**************************************/}
        {/**************************************/}
        <div>
          <h2>Contextual messaging</h2>
          <p>
            From our research, we had a good idea of the types of users that
            were visiting our site. These personas had different goals and
            challenges, so we initially struggled with finding a design solution
            that would work for so many different personas.
          </p>
          <p>
            I recognized the opportunity to take advantage of Smart
            Content,&nbsp;a new feature in the HubSpot CMS for showing different
            content based on visitor analytics. Since we could match visitors to
            our marketing data, we knew whether or not they were a customer of
            any of our products. For these existing customers, I built out
            different versions of our above-the-fold section to show relevant
            promotions, instead of marketing the products they'd already
            purchased.
          </p>

          <div
            css={css`
              ${mixins.fullWidthImg}
            `}
          >
            <img src={hover} alt="heatmaps4" />
            <label>Hover states on the lower grid section of the page.</label>
          </div>
        </div>

        {/**************************************/}
        {/**************************************/}
        {/**************************************/}
        <div>
          <h2>Keeping the content fresh</h2>
          <p>
            We wanted this page to update and change regularly to reflect the
            changes in our rapidly evolving company. So, I built out each
            section with HubSpot's templating language to ensure that
            non-technical team members could edit the photos, videos, and copy.
            This way, I was able to lock down the main code on the page, while
            still opening editorial capabilities to content-focused team
            members. Ultimately, making this page easy to edit ensured that it
            stayed fresh and reflective of our current features, promotions, and
            offerings. (It also meant that we could quickly update copy based on
            the results of our A/B tests!)
          </p>
        </div>

        {/**************************************/}
        {/**************************************/}
        {/**************************************/}
        <div>
          <h2>Interaction design</h2>
          <p>
            I worked closely with the visual designer on this project to come up
            with our on-page interactions.&nbsp;
          </p>
          <p>
            We ended up building a unique hero section that changed content and
            design based on where users hovered. For example, if you hovered on
            the "Sales Software" block, the other blocks would change to show
            more information on that specific product. (You can see this in the
            gif below.)
          </p>
          <p>
            By showing relevant information depending on the context, we were
            able to keep the page light and easy to parse. We were able to
            include more information for each product by repurposing sections to
            match the users' interest.&nbsp;
          </p>

          <div
            css={css`
              ${mixins.fullWidthImg}
            `}
          >
            <img src={hoverHero} alt="hoverHero" />
            <label>Hover states on the above-the-fold hero section.</label>
          </div>
        </div>

        {/**************************************/}
        {/**************************************/}
        {/**************************************/}
        <div>
          <h2>Compatibility, accessibility, and responsiveness</h2>
          <p>
            The design needed to display properly across browsers and devices. I
            used BrowserStack to emulate the site on real devices and across
            browsers. From Google Analytics, we knew the main browsers and
            devices that our visitors were using;&nbsp;I prioritized these
            first, then ensured backwards compatibility based on audience
            size.&nbsp;
          </p>
          <p>
            We also took pride in ensuring accessibility and device
            compatibility across HubSpot.com. We reviewed simulations showing
            how the page would appear to those with different forms of color
            blindness.&nbsp;I built the page with semantic HTML and included the
            appropriate metadata for screen readers.&nbsp;
          </p>
          <p>
            Finally, as with every page on our site, I built this homepage to
            work well on all popular screen sizes. On mobile, I made sure that
            the grid-based sections broke down into a single-column layout and
            stacked in a logical order. I hid items that were less important to
            mobile users (like the testimonial section), and replaced on-page
            interactions with simple backgrounds. I rescaled buttons and copy
            appropriately.&nbsp;&nbsp;&nbsp;
          </p>
        </div>

        {/**************************************/}
        {/**************************************/}
        {/**************************************/}
        <div>
          <h2>Post-launch analysis</h2>
          <p>
            After launching this page at our annual conference, we regularly
            checked the analytics to see how it was performing.&nbsp;
          </p>
          <p>
            Heatmaps allowed us to see what links were getting the most
            attention. After the launch, we noticed an increased click rate on
            certain menu items, such as "Software" and "Free trial". We used
            this data as a launch point for more tests and iterations. Would
            users be more likely to convert if we called out features right on
            the homepage? What if we included the trial sign-up form?&nbsp;
          </p>
          <p>
            We also reviewed our marketing analytics data to get a picture of a
            user’s entire marketing lifecycle. Since I coded every button in the
            design as a HubSpot CTA, the HubSpot platform tracked views, clicks,
            and submissions that started from that CTA. Since we knew the number
            of initial clicks that led to conversions, we started up a series of
            A/B tests to try different button copy, text styles, and background
            colors.&nbsp;
          </p>
          <p>
            Finally, we reviewed screen recordings of users interacting with the
            design. We used this to see where they were getting stuck (were they
            consistently clicking non-linked elements?) and tracking how much of
            the page they actually interacted with.&nbsp;
          </p>

          <div
            css={css`
              ${mixins.fullWidthImg}
            `}
          >
            <img src={heatmapHero} alt="heatmapHero" />
            <label>Heatmap for the new homepage hero section.</label>
          </div>
        </div>

        {/**************************************/}
        {/**************************************/}
        {/**************************************/}
        <div>
          <h2>The final product</h2>
          <p>
            I'm so proud of our team and how this project turned out. This
            homepage certainly played a critical role in repositioning HubSpot
            as a multi-product company, and the post-launch analysis indicated
            that our users were responding to our messaging, exploring the new
            products, and engaging with our content.&nbsp;Of course, this laid
            the groundwork for even more tests,&nbsp;iterations, and updates as
            HubSpot continued to grow and evolve!
          </p>

          <div
            css={css`
              ${mixins.fullWidthImg}
            `}
          >
            <img src={fullpage} alt="fullpage" />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
