/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

import { mixins } from "../../styles/shared";

import PageWrapper from "../../components/PageWrapper";

import hero from "../../img/ai-suggestions/ai-hero-full.png";
import competitiveAnalysis from "../../img/ai-suggestions/competitive-analysis-suggestions.png";
import legal1 from "../../img/ai-suggestions/legal-1.png";
import legal2 from "../../img/ai-suggestions/legal-2.png";
import originalAndUpdated from "../../img/ai-suggestions/original-and-updated.png";
import processDiagram from "../../img/ai-suggestions/process-diagram-ai-suggestions.png";
import suggestionsV1 from "../../img/ai-suggestions/v1-suggestions.png";
import suggestionsV2 from "../../img/ai-suggestions/v2-suggestions.png";
import finalGif from "../../img/ai-suggestions/final-ai-suggestions.gif";


export default function AISuggestions() {
  return (
    <PageWrapper className="project-page">
      <div>
        <div
          css={css`
            ${mixins.fullWidthImg}
            ${mixins.projectHeader}
          `}
        >
          <h1>
            AI-Generated Resume Suggestions
          </h1>

          <p
            css={css`
              ${mixins.subhead}
            `}
          >
            Helping job seekers describe their work experience with generative AI
          </p>
        </div>

        <div
          css={css`
            ${mixins.fullWidthImg}
          `}
        >
          <img src={hero} alt="Image of phone screen showing AI work experience suggestions" />
        </div>

        {/**************************************/}
        {/**************************************/}
        {/**************************************/}
        <div>
          <h2>
            Background
          </h2>

          <div className="column-wrapper">
            <div className="column">
              <h3>
                The company
              </h3>

              <p>
                <strong>Indeed</strong> is the #1 job site in the world with 250+ million unique users/month. Employers and job seekers use our platform to hire and match with jobs.
              </p>
            </div>
            <div className="column">
              <h3>
                The team
              </h3>
              <p>
                The <strong>Job Seeker Profile</strong> team helps job seekers represent themselves in the best possible light to potential employers.
              </p>
            </div>
          </div>
        </div>

        {/**************************************/}
        {/**************************************/}
        {/**************************************/}
        <div>
          <h2>
            TL;DR
          </h2>

          <h3>
            My role in this project
          </h3>
          <p>
            As a Senior Design Technologist, I led this project from concept, research, design, and ultimately working with engineering to implement a cutting-edge solution to one of our top customer pain points. Over the course of this work, I…
          </p>
          <ol>
            <li>
              Identified, through user research, that the top pain point that job seekers have in creating their resume is writing about their work experience.
            </li>
            <li>
              Saw the potential of generative AI to help job seekers describe their work experience.
            </li>
            <li>
              Pitched, designed, and drove the creation of Indeed’s first-ever AI-powered feature to help job seekers improve their resume quality.
            </li>
          </ol>

          <h3>
            Collaborators
          </h3>
          <p>
            Product management, engineering, UX research, content design, legal
          </p>

          <h3>
            Impact
          </h3>
          <ul>
            <li>
              90% of job seekers who see the feature add at least one suggestion to their resume
            </li>
          </ul>

          <div
            css={css`
            ${mixins.fullWidthImg}
          `}
          >
            <img src={processDiagram} alt="Process diagram for this project" />
            <label>Process diagram for this project.</label>
          </div>

        </div>
      </div>

      {/**************************************/}
      {/**************************************/}
      {/**************************************/}
      <div>
        <h2>
          The problem
        </h2>

        <div className="column-wrapper">
          <div>
            <h3>
              Job seekers
            </h3>
            <p>
              Describing work experience is the most challenging and time-consuming part of writing a resume. Job seekers actively seek guidance when they reach this step.
            </p>
          </div>

          <div>
            <h3>
              Employers
            </h3>
            <p>
              Employers consistently rank work experience and skills as the most critical sections of a resume, regardless of industry, occupation, or specific role.
            </p>
          </div>
        </div>

        <h3>
          The challenge
        </h3>
        <p>
          How might we help job seekers quickly and accurately describe their past work experience, ensuring they effectively highlight their unique expertise to employers?
        </p>
      </div>

      {/**************************************/}
      {/**************************************/}
      {/**************************************/}
      <div>
        <h2>
          An opportunity with generative AI
        </h2>

        <p>
          While our team was examining ways to improve work experience quality on resumes, a new technology emerged, generative AI. After spending time learning about and using the latest LLMs, it became clear that this new technology could enable us to do something that was previously impossible: provide instant resume help, at scale, to all of Indeed’s job seekers.
        </p>

      </div>

      {/**************************************/}
      {/**************************************/}
      {/**************************************/}
      <div>
        <h2>
          Hypothesis
        </h2>

        <p>
          By integrating AI-generated work experience suggestions into Indeed’s resume editor, we can:
        </p>

        <ol>
          <li>
            Enable job seekers to describe their past experiences more quickly and easily.
          </li>
          <li>
            Improve the quality of work experience descriptions, making them more appealing to employers.
          </li>
          <li>
            Increase job seekers' confidence in their resumes.
          </li>
          <li>
            Increase positive outcomes from job applications (e.g. messages from employers, interviews)
          </li>
        </ol>
      </div>

      {/**************************************/}
      {/**************************************/}
      {/**************************************/}
      <div>
        <h2>
          User stories
        </h2>

        <p>
          To stay focused on addressing the key problems, I wrote user stories that represented different types of users and their pain points. Given Indeed's broad user base, it was essential to ensure our solution worked for job seekers across various industries, experience levels, app familiarity, and even across different countries.
        </p>

        <p className="callout callout-bg">
          <span className="callout-emoji">🤷</span>
          As a job seeker who is not confident in my writing skills, I want to accurately and professionally describe my work experience so that I can make the best impression on potential employers.
        </p>

        <p className="callout callout-bg">
          <span className="callout-emoji">👩‍🎓</span>
          As a recent college graduate making my first resume, I want to see examples of how to write my work experience descriptions so that my resume looks professional and shows off my skills.
        </p>

        <p className="callout callout-bg">
          <span className="callout-emoji">👩‍💻</span>
          As a job seeker who is reentering the workforce, I want to see suggestions that describe my past positions since I may not remember all my responsibilities and duties.
        </p>

        <p className="callout callout-bg">
          <span className="callout-emoji">🤳</span>
          As a job seeker using a mobile device to create a resume, I want to quickly add content to my resume without too much typing so that I don’t have to struggle with a small keyboard.
        </p>

      </div>

      {/**************************************/}
      {/**************************************/}
      {/**************************************/}
      <div>
        <h2>
          Competitive analysis
        </h2>

        <p>
          I analyzed popular resume-building products that offer writing assistance and identified several key takeaways:
        </p>
        <ol>
          <li>
            <strong>Visual:</strong> On desktop, suggestions were typically displayed side-by-side with a text editor, a layout that works well on larger screens. However, none of the products offered an effective solution for integrating suggestions with a text field on mobile devices.
          </li>
          <li>
            <strong>Content:</strong> Platforms varied widely in how they referred to the suggestions and communicated their value to job seekers.
          </li>
        </ol>

        <div
          css={css`
            ${mixins.fullWidthImg}
          `}
        >
          <img src={competitiveAnalysis} alt="Competitive analysis diagram" />
          <label>I compared the experience of building a work experience section across five other popular resume builders.</label>
        </div>

      </div>

      {/**************************************/}
      {/**************************************/}
      {/**************************************/}
      <div>
        <h2>
          Content guidelines
        </h2>

        <p>
          To establish a shared understanding of what makes a strong work experience section, I consulted with Indeed’s top resume-writing coach to gather her high-level recommendations and insights into what employers prioritize. I distilled these findings into five key guidelines for our suggestions, including detailed explanations and examples of strong resume content.
        </p>

        <div className="callout callout-bg">
          <span className="callout-emoji">✏️</span>
          <div>
            <p>Each bullet point on a resume should be:</p>
            <ol>
              <li>
                Relevant and specific
              </li>
              <li>
                Easy to customize
              </li>
              <li>
                Led with a strong, past-tense verb
              </li>
              <li>
                Highlighting skills, strengths, or achievements
              </li>
              <li>
                Concise yet meaningful
              </li>
            </ol>
          </div>
        </div>

        <p>
          These guidelines moved the project forward in several ways. I could incorporate realistic content for various professions into my designs, helping the team visualize the end result and ensuring the designs could handle longer text strings. The guidelines also clarified functionality requirements and guided decision-making with product owners. For example, we concluded that our suggestions needed to include variables to make them easy to customize.
        </p>

        <div className="callout-bg">
          <div className="column-wrapper">
            <p className="column">
              ❌ <strong>Too generic:</strong> Onboarded new employees
            </p>
            <p className="column">
              ✅ <strong>Relevant and specific:</strong> Trained [x] new employees in customer service script recitation, conflict resolution, and data entry practices
            </p>
          </div>

          <div className="column-wrapper">
            <p className="column">
              ❌ <strong>Too vague:</strong> Upheld a high standard of customer service
            </p>
            <p className="column">
              ✅ <strong>Specific and customizable:</strong> Maintained consistently high service levels with an average [x]% customer satisfaction rating
            </p>
          </div>

          <div className="column-wrapper">
            <p className="column">
              ❌ <strong>Too generic:</strong> Pursued sales leads to advance store growth
            </p>
            <p className="column">
              ✅ <strong>Highlights achievements:</strong> Exceeded the sales targets set for the [x] fiscal year and increased the company's client base by [x]
            </p>
          </div>
        </div>

      </div>

      {/**************************************/}
      {/**************************************/}
      {/**************************************/}
      <div>
        <h2>
          Prompt engineering
        </h2>

        <p>
          After finalizing the guidelines, I used them to develop a prompt for generating suggestions and later to assess the quality of the output. I created a prompt for GPT 3.5, specifying the desired length, formatting, and tone. Once the generated bullet points for several job titles looked good, I teamed up with an engineer to refine and test the prompt. We iterated on my initial draft to reduce repetition, improve formatting, and prevent nonsensical responses.
        </p>

      </div>

      {/**************************************/}
      {/**************************************/}
      {/**************************************/}
      <div>
        <h2>
          Feature requirements
        </h2>

        <p>
          After proving that we could create a prompt that generates results which follow our content guidelines, I created feature requirements and worked with a PM to get the feature on the engineering team’s roadmap. Requirements included:
        </p>

        <ol>
          <li>
            <strong>
              Visible entry point in resume creation and edit flows
            </strong>
          </li>
          <li>
            <strong>
              Suggestions automatically appear after entering a job title
            </strong>
          </li>
          <li>
            <strong>
              User-selected suggestions are added inline to job descriptions
            </strong>
          </li>
          <li>
            <strong>
              Suggestions are tied to job titles in Indeed’s taxonomy
            </strong>
            <br />
            After discussions with engineering, we chose to limit suggestions to job titles within Indeed’s 11,000-title taxonomy to reduce API costs and speed up response times. This approach also mitigated LLM risks by preventing inappropriate inputs.
          </li>
          <li>
            <strong>
              Users can select one or more suggestions
            </strong>
            <br />
            5-7 bullet points are recommended for most roles.
          </li>
          <li>
            <strong>
              Suggestions include variables to customize
            </strong>
            <br />
            Numbers are crucial for quantifying achievements.
          </li>
        </ol>

      </div>

      {/**************************************/}
      {/**************************************/}
      {/**************************************/}
      <div>
        <h2>
          Legal considerations
        </h2>

        <p>
          I regularly consulted with the legal team throughout the project to ensure compliance, particularly since this was our team’s first AI-powered feature. These consultations introduced additional design requirements. Most importantly, we needed to inform job seekers that they must review and edit suggestions to ensure accuracy and appropriateness before adding AI-generated content to their resumes.
        </p>

        <div className="column-wrapper" css={css`
         ${mixins.fullWidthImg}
             flex-direction: row;
          `}>
          <div className="column"
          >
            <img css={css` 
            width: 100%;
               `}
              src={legal1} alt="One option for legal copy" />

          </div>
          <div className="column"

          >
            <img css={css` 
            width: 100%;
               `} src={legal2} alt="Another option for legal copy" />

          </div>
        </div>
        <label>
          Two potential options for legal copy.
        </label>

      </div>

      {/**************************************/}
      {/**************************************/}
      {/**************************************/}
      <div>
        <h2>
          Design exploration and validation
        </h2>

        <p>
          I began by sketching various layout options, quickly identifying potential challenges. How could we associate suggestions with a form field? How could we encourage users to customize the suggestions with their own content? After exploring these questions, I mocked up the most promising designs in Figma, leveraging existing components and patterns from the Indeed design system.
        </p>

        <div
          css={css`
            ${mixins.fullWidthImg}
          `}
        >
          <img src={suggestionsV1} alt="Early designs showing suggestions in the resume-building flow" />
          <label>
            Early designs showing suggestions in the resume-building flow.
          </label>
        </div>

      </div>

      {/**************************************/}
      {/**************************************/}
      {/**************************************/}
      <div>
        <h2>
          Rapid usability testing
        </h2>

        <p>
          Next, I collaborated with UX research to run a quick study to validate the usability and compare different entry points for the feature. The study aimed to answer key questions, including:
        </p>

        <ol>
          <li>
            What do job seekers expect to happen when they select a suggestion?
          </li>
          <li>
            How do job seekers feel about quality of the suggestions?
          </li>
          <li>
            Should suggestions appear before or after the user has the chance to enter their own content?
          </li>
          <li>
            How many suggestions do users want to see?
          </li>
        </ol>

        <h3>
          Key takeaways:
        </h3>

        <p className="callout">
          <span className="callout-emoji">👍</span>
          Users successfully added suggestions to their resume.
        </p>
        <p className="callout">
          <span className="callout-emoji">👍</span>
          Data entry was easy and quick on mobile devices.
        </p>
        <p className="callout">
          <span className="callout-emoji">👍</span>
          Examples felt relevant and sparked new ideas.
        </p>
        <p className="callout">
          <span className="callout-emoji">👍</span>
          Job seekers felt more confident in their resumes.
        </p>
        <p className="callout">
          <span className="callout-emoji">❗</span>
          Participants who viewed bullet points on a separate screen from the rich-text editor didn’t realize they could edit the suggestions.
        </p>

      </div>

      {/**************************************/}
      {/**************************************/}
      {/**************************************/}
      <div>
        <h2>
          Design iteration
        </h2>

        <p>
          I revisited the design to incorporate findings from the usability test. Displaying suggestions on a dedicated screen provided a focused experience. However, when suggestions were shown separately, users were less likely to edit and customize the content. To address this, I tried a new approach by placing suggestions in a modal that could be accessed from the main form, aiming to maintain a focused experience while clearly linking suggestions to the editor.
        </p>

        <p>
          By this stage, we had also finalized the first version of the prompt, so we wanted to validate both the AI-generated content as well as the updated design. To allow users to interact with real suggestions for their job titles, our UX researcher recommended using a coded prototype for the next round of usability testing. So I collaborated with a front-end developer to build a prototype that could access our database of suggestions.
        </p>

        <div
          css={css`
            ${mixins.fullWidthImg}
          `}
        >
          <img src={suggestionsV2} alt="Updated designs to solve usability issue" />
          <label>
            Updated designs to solve usability issue.
          </label>
        </div>

      </div>

      {/**************************************/}
      {/**************************************/}
      {/**************************************/}
      <div>
        <h2>
          Usability testing: round 2
        </h2>

        <p>
          We conducted moderated research with 7 job seekers from various industries and with different levels of AI experience.
        </p>

        <h3>
          Key takeaways:
        </h3>

        <p className="callout">
          <span className="callout-emoji">👍</span>
          The suggestions were accurate and relevant, which built trust in the tool.
        </p>
        <p className="callout">
          <span className="callout-emoji">👍</span>Job seekers liked having an extensive list of suggestions.
        </p>
        <p className="callout">
          <span className="callout-emoji">👍</span>Users believe that this tool would help them create a better resume.
        </p>
        <p className="callout">
          <span className="callout-emoji">❗</span>
          Users struggled to figure out what to do if their job title produced no results. Many would give up on the tool and write their descriptions themselves.
        </p>

      </div>

      {/**************************************/}
      {/**************************************/}
      {/**************************************/}
      <div>
        <h2>
          Solving usability issues
        </h2>

        <p>
          The main usability issue was with the empty state. We had pre-populated the job title to save time for users by displaying relevant suggestions immediately. However, this approach only worked if the job title was in our database. Many users encountered an empty state because their job titles did not exactly match our taxonomy, and they struggled to recover without help from our researcher.
        </p>

        <p>
          I met with the researcher and PM to discuss these issues. We agreed that better, more explanatory copy was needed, so I reworked the headers and label. I also collaborated with our engineer to only pre-fill the job title when suggestions were available. This way, users would see related job titles in an autocomplete once they started interacting with this field.
        </p>

        <div
          css={css`
            ${mixins.fullWidthImg}
          `}
        >
          <img src={originalAndUpdated} alt="Caption here" />
          {/* <label>
            Caption here.
          </label> */}
        </div>

      </div>

      {/**************************************/}
      {/**************************************/}
      {/**************************************/}
      <div>
        <h2>
          Verbatims
        </h2>

        <p>
          Participant responses helped us validate that we’d solved for our user stories. Additionally, the positive feedback helped us show the value for this feature internally.
        </p>

        <p className="quote">
          “<strong>If I had to use my phone to write</strong> [a resume], I would use this tool.”
        </p>
        <p className="quote">
          “It's easy to look past all the work that you do at your jobs because it can be hard to remember those on your own. <strong>This makes me a more marketable applicant.</strong>”
        </p>
        <p className="quote">
          “The options make it really easy to add to the resume. <strong>The options help me think critically on what I should include.</strong>”
        </p>
        <p className="quote">
          “<strong>This takes off the burden of trying to remember duties</strong> you had… Especially nice for roles that you haven't worked in a while.”
        </p>

      </div>

      {/**************************************/}
      {/**************************************/}
      {/**************************************/}
      <div>
        <h2>
          Final UX and results
        </h2>

        <p>With the validation from usability testing, we felt ready to finalize and launch the feature. I worked closely with our front-end engineers to ensure that all details transferred properly to the live product. I double-checked the details on various device sizes, paying attention to edge cases, loading animations, and hover states. Once we were satisfied, we started to roll out the feature in production. Here’s the final UX: </p>

        <div className="prototype-gif-wrapper">
          <img className="prototype-gif" src={finalGif} alt="Animation of the full final feature" />

        </div>

        <p>Our results revealed that many job seekers were using this tool to help craft their resumes:</p>
        <p>
          <strong>90%</strong> of job seekers who see the suggestions select at least one to add to their resume.
        </p>

        <p>
          For the longer term, we implemented tracking to see whether applicants using this feature were more likely to receive responses from employers.
        </p>



      </div>


      {/**************************************/}
      {/**************************************/}
      {/**************************************/}
      <div>
        <h2>Takeaways</h2>

        <ul>
          <li>
            Simplify whenever possible
          </li>
          <li>
            Keep in mind all personas when designing for a broad user base
          </li>
          <li>
            Content design and visual design go hand-in-hand
          </li>
          <li>
            Coded prototypes are an incredible tool for flagging issues and polishing interactions
          </li>
          <li>
            Always pay attention to empty states and edge cases
          </li>
        </ul>

      </div>

    </PageWrapper >
  );
}
