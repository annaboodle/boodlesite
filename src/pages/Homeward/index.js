/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { mixins } from "../../styles/shared";

import PageWrapper from "../../components/PageWrapper";

import hero from "../../img/homeward/hero.png";
import affinityMap from "../../img/homeward/affinity-map.jpeg";
import competitiveAnalysis from "../../img/homeward/competitive-analysis.png";
import featurePrioritization from "../../img/homeward/feature-prioritization.png";
import hiFiProto from "../../img/homeward/hi-fi-proto.png";
import personaImg from "../../img/homeward/persona-img.jpeg";
import userFlow from "../../img/homeward/user-flow.jpeg";
import wireframes from "../../img/homeward/wireframes.png";

export default function Homeward() {
  return (
    <PageWrapper className="project-page">
      <div>
        <div
          css={css`
            ${mixins.fullWidthImg}
            ${mixins.projectHeader}
          `}
        >
          <h1>Homeward</h1>

          <p
            css={css`
              ${mixins.subhead}
            `}
          >
            {/* An app for hunting for shared apartments  */}
            Find the right roommate and hunt for your new home &mdash; together
          </p>
        </div>

        <div
          css={css`
            ${mixins.fullWidthImg}
          `}
        >
          <img src={hero} alt="Homeward" />
        </div>

        {/**************************************/}
        {/**************************************/}
        {/**************************************/}
        <div>
          <h2>The problem</h2>

          <p>
            Searching for a new apartment can be stressful, challenging, and
            time-consuming — especially when roommates are involved.
          </p>
          <p>
            I chose to explore the specific problems faced by individual renters
            who were simultaneously searching for roommates and apartments.
          </p>
        </div>

        {/**************************************/}
        {/**************************************/}
        {/**************************************/}
        <div>
          <h2>Competitive analysis</h2>

          <p>
            I analyzed apps, websites, and email newsletters that focused on
            various aspects of the housing search.
          </p>
          <p>Most services allowed users to either: </p>
          <ul>
            <li>
              <strong>Exclusively find an apartment </strong> (ie: PadMapper,
              Zillow)
            </li>
            <li>
              <strong>Exclusively find a roommate</strong> (ie: Roomiematch)
            </li>
            <li>
              <strong>
                Search for roommates or apartments — but separately
              </strong>{" "}
              (ie: Craigslist, Roomster)
            </li>
          </ul>
          <p>
            For the few services that could help users find both roommates and
            apartments, the two searches were completely disconnected. None
            provided features that tied roommates and apartments to the same
            housing search.
          </p>

          <div
            css={css`
              ${mixins.fullWidthImg}
            `}
          >
            <img
              src={competitiveAnalysis}
              alt="Chart showing features available on different roommate/apartment hunting platforms"
            />
          </div>
        </div>

        {/**************************************/}
        {/**************************************/}
        {/**************************************/}
        <div>
          <h2>User interviews</h2>

          <p>
            I conducted 4 interviews, each lasting approximately 45 minutes. I
            screened participants to ensure that they’d all searched for an
            apartment within the past two years in a major city (Boston, NYC, or
            Chicago).
          </p>
          <p>
            My goal was to learn about participants’ past experiences searching
            for a shared apartment. I wanted to understand their pain points,
            needs, and general emotions around the apartment search.
          </p>
          <p>Some sample questions from my script included:</p>
          <ul>
            <li>
              Can you describe the entire process for the last time you moved?
            </li>
            <li>
              How did you organize information about the apartments you were
              looking at?
            </li>
            <li>
              What did you want to find out about a person before living
              together?
            </li>
            <li>
              If you were to create a magical product that would help you find
              an apartment, what would it do?
            </li>
          </ul>
        </div>

        {/**************************************/}
        {/**************************************/}
        {/**************************************/}
        <div>
          <h2>The discoveries</h2>

          <div
            css={css`
              ${mixins.rightImg}
            `}
          >
            <img
              src={affinityMap}
              alt="Affinity map used to synthesize information from user interviews."
            />
            <label>
              Affinity map used to synthesize information from user interviews.
            </label>
          </div>

          <p>
            <strong>
              1. Renters prioritize who they live with over where they live.
            </strong>
          </p>
          <p>
            Once an apartment met a certain standard, roommates seemed to be the
            deciding factor in renters’ satisfaction.
          </p>
          <p>
            <em>Design takeaway: </em>Renters wanted to make an informed
            decision on who they lived with. They wanted to know essential
            information upfront, as well as have the ability to chat with and
            screen their potential roommates.
          </p>
          <p>
            <strong>
              2. Finding an apartment happens fast (and people often feel like
              it’s a matter of luck).
            </strong>
          </p>
          <p>
            Everyone invested hours per day searching and messaging apartments,
            but finding the right home usually happened in a relatively short
            time —&nbsp;and was often interpreted as a lucky break after a
            stressful hunt.
          </p>
          <p>
            <em>Design takeaway:</em>
            <strong> </strong>I needed to make sure my app could alert people
            the second that new apartments appeared that matched their criteria.
            Users needed to be able to share listings quickly and move fast when
            good opportunities appeared.
          </p>
          <p>
            <strong>
              3. Everyone has specific criteria and deal breakers.
            </strong>
          </p>
          <p>
            Each person brought up specific, crucial criteria that completely
            shaped their search.&nbsp;
          </p>
          <p>
            <em>Design takeaway:</em>
            <strong> </strong>Since each person’s search was so personal and
            customized, a useful apartment-finding app needed to allow users to
            filter apartments based on their exact criteria. All the filters!
          </p>
          <p>
            <strong>4. Searching for an apartment sucks.</strong>
          </p>
          <p>
            Unsurprisingly, interviewees found the housing hunt to be stressful,
            unpleasant, and all-consuming.
          </p>
          <p>
            <em>Design takeaway:</em> The voice and tone of the app needs to be
            helpful, supportive, and encouraging.
          </p>
        </div>

        {/**************************************/}
        {/**************************************/}
        {/**************************************/}
        <div>
          <h2>Persona</h2>

          <p>
            Next, I built out a primary persona to focus in on the goals,
            priorities, and pain points of my target users.
          </p>

          <div>
            <div
              css={css`
                ${mixins.leftImg}
              `}
            >
              <img src={personaImg} alt="Persona" />
            </div>

            <h3>Noelle</h3>
            <p>
              <strong>Age</strong>: 27
              <br />
              <strong>Occupation</strong>: graduate student
              <br />
              <strong>Home</strong>: Boston
            </p>
            <p>
              Noelle can't quite afford a nice, well-located apartment by
              herself, but she's doesn’t mind living with roommates. She has
              limited time to visit apartments and meet potential roommates.
              Overall, she's stressed out by the idea of searching for an
              apartment, but hopeful that she can find a place that fits her
              lifestyle.
            </p>
          </div>

          <div>
            <h3>Pain points</h3>
            <ul>
              <li>
                hard to keep track of conversations with apartments and
                roommates
              </li>
              <li>
                time commitment of searching every day for the "diamond in the
                rough"
              </li>
              <li>incompatible or inconsiderate roommates</li>
            </ul>
          </div>

          <div>
            <h3>Goals and needs</h3>
            <ul>
              <li>
                find available apartments that fulfill her criteria (size,
                budget, etc)
              </li>
              <li>save favorite apartments</li>
              <li>find roommates that match well with her needs</li>
              <li>
                <p>quickly communicate with landlords and roommates</p>
              </li>
            </ul>
          </div>
        </div>

        {/**************************************/}
        {/**************************************/}
        {/**************************************/}
        <div>
          <h2>Feature prioritization</h2>

          <p>
            To come up with a list of features, I reviewed the tasks and
            behaviors had come up consistently in user interviews. Also, after
            walking through each person’s process, it was clear which integral
            features were lacking from the platforms they were using.
            Interviewees often used multiple apps or sites, picking and choosing
            the features they needed to fill in the gaps.
          </p>
          <p>
            After determining these common issues and use cases, I brainstormed
            what features could be included in my app. Finally, I employed the
            MSCW method (sorting features into the categories of{" "}
            <em>
              <strong>M</strong>ust have
            </em>
            ,&nbsp;
            <em>
              <strong>S</strong>hould have
            </em>
            ,&nbsp;
            <em>
              <strong>C</strong>ould have
            </em>
            , and{" "}
            <em>
              <strong>W</strong>on't have)
            </em>{" "}
            to prioritize the features that were truly necessary to solve my
            primary persona’s needs.
          </p>

          <div
            css={css`
              ${mixins.fullWidthImg}
            `}
          >
            <img src={featurePrioritization} alt="Prioritization chart" />
          </div>
        </div>

        {/**************************************/}
        {/**************************************/}
        {/**************************************/}
        <div>
          <h2>User flows</h2>

          <div
            css={css`
              ${mixins.rightImg}
            `}
          >
            <img src={userFlow} alt="Sketches of potential user flows." />
            <label>Sketches of potential user flows.</label>
          </div>

          <p>
            While sketching my initial user flows, I debated between two major
            paths. Should users look for apartments then roommates, or
            vice-versa?
          </p>
          <p>
            After the user interviews, it was clear that my users needed to find
            and choose roommates before starting the apartment search.
          </p>
          <p>
            First off, all interviewees mentioned how difficult it was to snag
            fast-moving apartments in a competitive housing market. Meeting up
            in person with a potential roommate might take days —&nbsp;and that
            dream apartment might already be off the market.
          </p>
          <p>
            And meeting up with potential roommates was important! Overall, my
            interviewees wanted time to assess and chat with many people to make
            sure they’d found a good match. They repeatedly stressed how
            roommates could make or break a living situation.
          </p>
        </div>

        {/**************************************/}
        {/**************************************/}
        {/**************************************/}
        <div>
          <h2>Usability testing with an interactive prototype</h2>

          <p>
            I built out the screens of my app in Sketch. My first version was a
            lower-fidelity wireframe — grayscale with no visual design elements
            —&nbsp;so that I could gain feedback before investing too much in
            the designs. I used the Craft plugin to port my wireframes into
            InVision, then linked those designs into a clickable prototype.
          </p>
          <p>
            Next, I drafted a mod guide for my usability test. My goal was to
            test whether participants could complete certain common
            tasks:&nbsp;searching for apartments that allow pets, seeing a map
            view of available apartments, and sending a message to a potential
            roommate.
          </p>
          <p>I then ran through my usability test with 3 participants.&nbsp;</p>

          <div>
            <h3>Wins</h3>
            <ul>
              <li>navigation in the app was clear</li>
              <li>
                users were excited to share and see their roommate’s favorite
                apartments
              </li>
              <li>users were able to complete all tasks</li>
            </ul>
          </div>

          <div>
            <h3>Areas to improve</h3>
            <ul>
              <li>
                users don’t see a clear distinction between filters for
                apartments and filters for roommates
              </li>
              <li>
                users want to know what information goes into match percentages
              </li>
              <li>
                users want to share apartment listings outside of the app itself
              </li>
            </ul>
          </div>

          <div
            css={css`
              ${mixins.fullWidthImg}
            `}
          >
            <img src={wireframes} alt="wireframes" />
          </div>
        </div>

        {/**************************************/}
        {/**************************************/}
        {/**************************************/}
        <div>
          <h2>The final version&#8230; for now</h2>

          {/* <p>
            I built out a higher-fidelity design that addressed some of the
            issues that came up in usability testing. Feel free to explore that
            prototype{" "}
            <a
              target="_blank"
              href="https://invis.io/5EKHDW3C8SP#/298339128_Home"
            >
              here
            </a>
            .
          </p> */}
          <p>
            In future iterations, I plan to focus on fixing all issues from the
            first round of usability testing. Next, I’ll integrate more features
            — such as allowing users to schedule apartment viewings, apply to
            apartments, and take on a search with more than one roommate.
          </p>
          <p>
            Thanks for letting me share Homeward with you! I hope you’ve enjoyed
            the process as much as I did.
          </p>

          <div
            css={css`
              ${mixins.fullWidthImg}
            `}
          >
            <img src={hiFiProto} alt="Hi fi proto" />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
