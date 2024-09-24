/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

import { mixins } from "../../styles/shared";

import PageWrapper from "../../components/PageWrapper";

import hero from "../../img/work-gaps/work-gaps-hero-full.png";
import bulletPointPickerFinal from "../../img/work-gaps/bullet-point-picker-final.png";
import bulletPointPickerV1 from "../../img/work-gaps/bullet-point-picker-v1.png";
import careerNotesExercise from "../../img/work-gaps/career-notes-exercise.png";
import formDesignV1 from "../../img/work-gaps/form-design-v1.png";
import labelPickerFinal from "../../img/work-gaps/label-picker-final.png";
import labelPickerV2 from "../../img/work-gaps/label-picker-v2.png";
import placementExercise from "../../img/work-gaps/placement-exercise.png";
import processDiagramWorkGaps from "../../img/work-gaps/process-diagram-work-gaps.png";
import usabilityChanges1 from "../../img/work-gaps/usability-changes-1.png";
import usabilityChanges2 from "../../img/work-gaps/usability-changes-2.png";
import finalWorkGaps from "../../img/work-gaps/work-gaps-animated.gif";

export default function WorkGaps() {
    return (
        <PageWrapper className="project-page">
            <div>
                <div
                    css={css`
            ${mixins.fullWidthImg}
            ${mixins.projectHeader}
          `}
                >
                    <h1>Work gaps</h1>

                    <p
                        css={css`
              ${mixins.subhead}
            `}
                    >
                        Helping job seekers explain work gaps on their resume
                    </p>
                </div>

                <div
                    css={css`
            ${mixins.fullWidthImg}
          `}
                >
                    <img src={hero} alt="Person holding iPhone showing the work gaps feature" />
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

                    <ul>
                        <li>
                            Analyzed data and research to uncover a new, high-impact opportunity that fit with Indeed’s mission to reduce employment barriers
                        </li>
                        <li>
                            Built relationships across teams and organized a focus group with external partners to understand how to better serve job seekers with diverse backgrounds
                        </li>
                        <li>
                            Proposed and designed a solution to provide job seekers with clear guidance and tools to account for work gaps on their resumes
                        </li>
                        <li>
                            Guided the project through its lifecycle—from initial concept and research to usability testing and iteration—and secured buy-in from the product team to get the feature added to the engineering roadmap
                        </li>
                    </ul>

                    <h3>
                        Collaborators
                    </h3>
                    <p>
                        Product, UX research, content design, engineering
                    </p>

                    <h3>
                        Deliverables
                    </h3>
                    <ul>
                        <li>
                            Full designs and prototypes in Figma
                        </li>
                        <li>
                            Over 100 bullet point suggestions for the 8 most common reasons for work gaps
                        </li>
                        <li>
                            UX brief including user stories, research insights, and project plan
                        </li>
                    </ul>

                    <div
                        css={css`
            ${mixins.fullWidthImg}
          `}
                    >
                        <img src={processDiagramWorkGaps} alt="Process diagram for this project" />
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
                    <div className="column">
                        <h3>
                            Job seekers
                        </h3>

                        <p>
                            Research indicates that job seekers with unexplained work gaps are less likely to be selected to move forward in an application. Unfortunately, job seekers often don’t know how to explain these gaps or know that it could benefit them to do so.
                        </p>
                    </div>
                    <div className="column">
                        <h3>
                            Employers
                        </h3>

                        <p>
                            Although many employers report being sympathetic to work gaps, they often overlook candidates who don’t provide adequate context. As a result, qualified candidates with gaps may be passed over, and employers miss out on talent.
                        </p>
                    </div>
                </div>

                <h3>
                    The challenge
                </h3>

                <p>
                    How might we empower job seekers to explain gaps in their employment history in a way that positions them more favorably to employers?
                </p>

            </div>

            {/**************************************/}
            {/**************************************/}
            {/**************************************/}
            <div>
                <h2>
                    A strategic fit
                </h2>

                <p>
                    One of Indeed’s core principles is to remove biases and barriers to employment. To support this, the company committed to helping <a href="https://www.indeed.com/esg/job-seekers-facing-barriers">30 million people facing barriers get hired by 2030</a>.
                </p>

                <p>
                    After analyzing product data, I discovered that nearly 5% of Indeed resumes have a unaccounted-for gap of at least 6 months in their work experience. These findings revealed a significant opportunity to make an impact.
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
                    By providing job seekers with tools and guidance to account for work gaps on their resumes, they will be more likely to pass initial resume screenings and advance to the interview stage.
                </p>

            </div>

            {/**************************************/}
            {/**************************************/}
            {/**************************************/}
            <div>
                <h2>
                    Developing research questions
                </h2>

                <p>
                    Identifying the opportunity was just the beginning—I needed to deepen my understanding of the problem space. Collaborating with a UX researcher and PM, we brainstormed key questions to guide our exploration:
                </p>

                <ul>
                    <li>
                        How do job seekers perceive and label their work gaps? Can we create labels that align with their mental models?
                    </li>
                    <li>
                        How can we best support job seekers who are unsure how to explain a work gap? Do they prefer strict recommendations, examples, or exact language, especially in sensitive cases? What are the risks of open-ended suggestions?
                    </li>
                    <li>
                        Where should work gaps be addressed on the resume—under education, work experience, or a separate section entirely?
                    </li>
                </ul>

            </div>

            {/**************************************/}
            {/**************************************/}
            {/**************************************/}
            <div>
                <h2>
                    Career coach guidance
                </h2>

                <p>
                    To answer the research questions, I met with Indeed’s top career coach. This meeting provided clarity on the most common work gaps, the challenges job seekers face, and the best practices for addressing these gaps on resumes.
                </p>

                <h3>
                    Key insights:
                </h3>

                <p className="callout">
                    <span className="callout-emoji">⭐</span>
                    <span>Job seekers want help with <strong>both structure and content</strong>. They frequently ask career coaches how and where to address work gaps.</span>
                </p>
                <p className="callout">
                    <span className="callout-emoji">⭐</span>
                    <span>Work gaps should be explained in the <strong>work experience section</strong>. Employers scan the dates under work experiences, and applicant tracking systems (ATS) use this section to detect and flag gaps.</span>
                </p>
                <p className="callout">
                    <span className="callout-emoji">⭐</span>
                    <span>Many job seekers <strong>want to provide context</strong> for these gaps, believing it can mitigate potential employer bias.</span>
                </p>

            </div>

            {/**************************************/}
            {/**************************************/}
            {/**************************************/}
            <div>
                <h2>
                    User stories
                </h2>

                <p>
                    From what we’d learned from the career coach, we determined 8 main categories to represent the most common reasons for work gaps:
                </p>

                <div className="column-wrapper">
                    <ul className="column column-list">
                        <li>
                            Parental leave
                        </li>
                        <li>
                            Medical leave
                        </li>
                        <li>
                            Caregiver leave
                        </li>
                        <li>
                            Incarceration
                        </li>
                    </ul>
                    <ul className="column column-list">
                        <li>
                            Planned career break
                        </li>
                        <li>
                            Unemployment
                        </li>
                        <li>
                            Education
                        </li>
                        <li>
                            Volunteering
                        </li>
                    </ul>
                </div>

                <p>
                    From these, we derived our user stories, including:
                </p>

                <p className="callout callout-bg">
                    <span className="callout-emoji">🎓</span>
                    As a recent graduate, I want advice on how to present volunteer work I did during my gap so that employers see my proactive approach.
                </p>

                <p className="callout callout-bg">
                    <span className="callout-emoji">❤️‍🩹</span>
                    As someone who took time off to care for an ill family member, I want to highlight the transferable skills I gained during this period so that employers recognize what I could bring to the job.
                </p>

                <p className="callout callout-bg">
                    <span className="callout-emoji">🏛️</span>
                    As someone with a history of incarceration, I want guidance on how to address my gap in a way that reduces stigma and demonstrates my commitment to rebuilding my career.
                </p>

                <p className="callout callout-bg">
                    <span className="callout-emoji">🧑‍🍼</span>
                    As a stay-at-home parent returning to the workforce, I want employers to understand the skills I developed during my time at home and my commitment to family responsibilities.
                </p>

            </div>

            {/**************************************/}
            {/**************************************/}
            {/**************************************/}
            <div>
                <h2>
                    Focus group with experts on sensitive work gaps
                </h2>

                <p>
                    We realized that helping job seekers explain the more sensitive reasons for work gaps (like medical leave or incarceration) would require specialized expertise. To better understand the challenges facing those job seekers, I partnered with a team focused on social impact initiatives. This team regularly collaborated with external partners that specialize in helping job seekers overcome bias and barriers. Each partner brought expertise in one of five key areas: medical leave, caregiver leave, parental leave, criminal legal system leave, and unemployment.
                </p>

                <p>
                    We organized a focus group with the partners to gather their insights quickly and efficiently. Our goals were to gather actionable feedback on:
                </p>

                <ul>
                    <li>
                        When to offer guidance in explaining work gaps
                    </li>
                    <li>
                        What type of guidance to include
                    </li>
                    <li>
                        Possible risks with explaining sensitive work gaps
                    </li>
                </ul>

                <p>
                    In our first activity, we asked the focus group participants to discuss when they would recommend disclosing the reasons for different types of work gaps:
                </p>

                <div
                    css={css`
            ${mixins.fullWidthImg}
          `}
                >
                    <img src={placementExercise} alt="Slide from focus group showing different stages of job search process" />
                    {/* <label>
                        We asked the focus group participants to discuss when they would recommend disclosing the reasons for different types of work gaps.
                    </label> */}
                </div>

                <p>
                    Next, we presented sample descriptions of work gaps to the partners to gather their feedback on possible phrasing:
                </p>

                <div
                    css={css`
            ${mixins.fullWidthImg}
          `}
                >
                    <img src={careerNotesExercise} alt="Slide from focus group showing possible resume content to explain various reasons for work gaps" />
                    {/* <label>
                        In this activity, we presented sample descriptions of work gaps to the partners to gather their feedback.
                    </label> */}
                </div>

                <h2>
                    Key insights from focus group
                </h2>

                <p className="callout">
                    <span className="callout-emoji">⭐</span>
                    <span><strong>Skills are key.</strong> Our partners emphasize the importance of calling out the skills obtained during work gaps and incorporating keywords that will be captured by applicant tracking systems (ATS).</span>
                </p>
                <p className="callout">
                    <span className="callout-emoji">⭐</span>
                    <span><strong>Avoid vague language.</strong> The partners noted that terms like “personal matters” can be a red flag for employers.</span>
                </p>
                <p className="callout">
                    <span className="callout-emoji">⭐</span>
                    <span><strong>Disclosure is nuanced.</strong> For more sensitive work gaps, specifically incarceration or medical leave, progressive disclosure throughout the hiring process can minimize the likelihood of bias.</span>
                </p>
                <p className="callout">
                    <span className="callout-emoji">⭐</span>
                    <span>The reason for work gaps <strong>may affect compatibility with employers</strong>. In some cases, it may save time to disclose those reasons earlier in the hiring process.</span>
                </p>

                <p>
                    Overall, the partners were strongly in favor of the proposed project, especially because it normalized non-linear career paths for all job seekers.
                </p>

            </div>

            {/**************************************/}
            {/**************************************/}
            {/**************************************/}
            <div>
                <h2>
                    Visual design
                </h2>

                <p>
                    I started mocking up some options for how this feature might work in our existing resume editor. Since we now knew that work gaps should be accounted for in the work experience section, I first tried to see if the existing form could be modified to fill our needs.
                </p>

                <div
                    css={css`
            ${mixins.fullWidthImg}
          `}
                >
                    <img src={formDesignV1} alt="Version 1: proposed flow using the existing work experience editor to explain work gaps" />
                    <label>
                        <strong>Version 1:</strong> proposed flow using the existing work experience editor to explain work gaps.
                    </label>
                </div>

                <p>
                    After getting feedback from our engineering and design teams, we ultimately determined that it would be too complicated to integrate work gaps into the existing work experience form. Also, there were technical complications with storing two different types of data (work gaps and work experience) in the same schema.
                </p>

                <p>
                    So, I pivoted and began designing a new form in the resume editor. This allowed me the flexibility to design a bespoke user experience to help job seekers explain their work gaps.
                    As I worked through this new form, the main challenge was information architecture and how we offer guidance to job seekers. What information do we need to gather from job seekers? Should that information be gathered as free-text or structured input? How can we ensure people have the right guidance to represent their work gaps without incurring bias from employers?
                </p>

                <p>
                    Ultimately, I tried to build in stronger guidance and structured choices when we had a strong point of view about what would look best to employers, while also leaving room for the job seeker to customize based on their personal experience and preferences. I accomplished this through explanatory elements to help guide the user through the process, such as helper text, contextual guidance, and structured dropdown fields.
                </p>

                <div
                    css={css`
            ${mixins.fullWidthImg}
          `}
                >
                    <img src={labelPickerV2} alt="Version 2: proposed flow for selecting a high-level reason for a work gap" />
                    <label>
                        <strong>Version 2:</strong> proposed flow for selecting a high-level reason for a work gap.
                    </label>
                </div>

                <div
                    css={css`
            ${mixins.fullWidthImg}
          `}
                >
                    <img src={bulletPointPickerV1} alt="Version 2: proposed flow for accessing and using guidance to explain a break for parenting." />
                    <label>
                        <strong>Version 2:</strong> proposed flow for accessing and using guidance to explain a break for parenting.
                    </label>
                </div>

            </div>

            {/**************************************/}
            {/**************************************/}
            {/**************************************/}
            <div>
                <h2>Usability testing and findings</h2>

                <p>
                    I turned my designs into a clickable Figma prototype so that we could get real job seeker reactions. We ran moderated research with job seekers who had self-identified as having a gap between jobs of at least 6 months.
                </p>

                <h3>
                    Key takeaways:
                </h3>

                <p className="callout">
                    <span className="callout-emoji">👍</span><span>
                        Participants understood the concept of explaining work gaps and were genuinely enthusiastic about the feature, believing it could improve their chances of employment by mitigating potential employer bias.
                        {/* <br />
                        <br />
                        <p class="quote">
                            “It would give me a better opportunity to acquire a position I am seeking. <strong>Without an explanation, [the employer] is left to assume.</strong>”</p> */}
                    </span>
                </p>
                <p className="callout">
                    <span className="callout-emoji">👍</span>
                    The structured options aligned with how job seekers categorized the reasons for their gaps.
                </p>
                <p className="callout">
                    <span className="callout-emoji">👍</span>Job seekers appreciated specific content examples to explain their work gaps.
                </p>
                <p className="callout">
                    <span className="callout-emoji">❗</span>
                    Several participants were hesitant to select “Personal reasons” for their break. One feared it might increase employer bias, while another felt it didn’t reflect their experience as a stay-at-home parent.
                </p>
                <p className="callout">
                    <span className="callout-emoji">❗</span>After clicking "Get help explaining this break," job seekers were confused about why they had to select a reason again. The text "This won't appear on your resume" also caused confusion around what would and wouldn’t be shown to employers.
                </p>

            </div>

            {/**************************************/}
            {/**************************************/}
            {/**************************************/}
            <div>
                <h2>
                    Fixing usability issues
                </h2>

                <h3>
                    Information architecture
                </h3>

                <p>
                    To solve the usability issues, I started by reworking the form labels, helper text, and menu items. My goal was to improve the information architecture, match existing form patterns, and integrate guidance on how to approach their break.
                </p>

                <div
                    css={css`
            ${mixins.fullWidthImg}
          `}
                >
                    <img src={usabilityChanges1} alt="Updated form labels and menu items" />
                    {/* <label>
                        Caption here
                    </label> */}
                </div>

                <h3>
                    Adding more suggested copy for different reasons
                </h3>

                <p>
                    Since we’d gotten feedback that specific copy recommendations would be helpful for job seekers, we created lists of recommended content for each type of work gap. Based on the guidance from the focus group, we wrote bullet points that highlighted transferable skills and accomplishments.
                </p>

                <p>
                    Our last step was sharing the updated designs and copy with our partner experts from the focus group. Using their feedback, we made some tweaks to the recommended bullet points for some of the work gaps.
                </p>

                {/* <p>
                    Here’s some of the recommendations for “caregiver”:
                </p>

                <span className="callout callout-bg">
                    <ul>
                        <li>
                            Provided full-time care for a relative, managing all appointments and daily needs
                        </li>
                        <li>
                            Coordinated with medical teams on care planning and execution
                        </li>
                        <li>
                            Kept detailed records of medications, appointments, and important health information
                        </li>
                        <li>
                            Collaborated with family and support networks to meet needs for care
                        </li>
                        <li>
                            Managed schedules and logistics to provide quality care
                        </li>
                        <li>
                            Assisted with daily activities such as medication, cooking, cleaning, and personal care
                        </li>
                    </ul></span>  */}

                <div
                    css={css`
            ${mixins.fullWidthImg}
          `}
                >
                    <img src={usabilityChanges2} alt="Updated version showing options to describe a work gap for parenting" />
                    {/* <label>
                        Caption here
                    </label> */}
                </div>

            </div>

            {/**************************************/}
            {/**************************************/}
            {/**************************************/}
            <div>
                <h2>
                    Final usability testing
                </h2>

                <p>
                    We put the updated prototype through another rapid usability test, which confirmed that the previous usability issues had been solved. Job seekers did not hesitate to choose the new “Career note” option, and they found suggested copy that resonated with their experience. All participants indicated they were either “very satisfied” or “satisfied” with the feature, with many sharing their excitement and desire to use it for their own resumes:
                </p>

                <p className="quote">
                    ”I would use this once it becomes available on Indeed... <strong>I'm learning about something new here right now</strong> as I'm helping you guys. You guys are helping me.”
                </p>
                <p className="quote">
                    “I think <strong>it really encapsulates what the scenario was for me and articulates it in a professional way</strong> that makes sense to have here. I wish I had been able to save some of these, so if you are putting these up on Indeed, like I would 100% use them.”
                </p>
                <p className="quote">
                    “Actually, all of these are really good. <strong>They show why you were there and the purpose behind it and the skills that you gained</strong> instead of just kind of making an excuse for a career gap. So I think that's the big thing, just making it look like you were intentional with your time.”
                </p>

                {/**************************************/}
                {/**************************************/}
                {/**************************************/}
                <div>
                    <h2>Final version</h2>

                    <p>
                        With the validation from both usability testing and our partner experts, we wrapped up the design phase of the project and started working with engineering on implementation. Here’s the final UX:
                    </p>

                    <div className="prototype-gif-wrapper">
                        <img className="prototype-gif" src={finalWorkGaps} alt="Animation of the full final feature" />
                    </div>

                    <div
                        css={css`
            ${mixins.fullWidthImg}
          `}
                    >
                        <img src={labelPickerFinal} alt="Final flow to select a high-level reason for a work gap" />
                        <label>
                            <strong>Final version:</strong> flow to select a high-level reason for a work gap.
                        </label>
                    </div>
                    <div
                        css={css`
            ${mixins.fullWidthImg}
          `}
                    >
                        <img src={bulletPointPickerFinal} alt="Final flow to access and use recommended copy to explain a break for parenting" />
                        <label>
                            <strong>Final version:</strong> flow to access and use recommended copy to explain a break for parenting.
                        </label>
                    </div>

                </div>

                {/**************************************/}
                {/**************************************/}
                {/**************************************/}
                <div>
                    <h2>Takeaways</h2>

                    <ul>
                        <li>
                            Get subject matter experts involved early
                        </li>
                        <li>
                            Don’t be limited by the existing implementation in the brainstorming phase
                        </li>
                        <li>
                            Understanding a problem for a diverse user base can take time
                        </li>
                        <li>
                            Regular design reviews are a powerful tool to quickly identify potential issues
                        </li>
                    </ul>
                </div>
            </div>

        </PageWrapper >
    );
}
