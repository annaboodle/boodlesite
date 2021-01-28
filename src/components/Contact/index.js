import { useState } from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { variables, mixins } from "../../styles/shared";

export default function Contact() {
  const formAction =
    "https://docs.google.com/forms/u/0/d/e/1FAIpQLScfNFCzvaMjdhkjMhT8pFbMD50ZDHPtiREtfKxZhv5yHcT2oQ/formResponse";
  const gFormNameEntry = "entry.1867961456";
  const gFormMessageEntry = "entry.444461217";
  const gFormEmailEntry = "entry.1198240554";
  const gFormBotcatcherEntry = "entry.1713606778";

  const [formSubmitted, updateFormSubmitted] = useState(false);

  const [message, updateMessage] = useState("");
  const [name, updateName] = useState("");
  const [email, updateEmail] = useState("");
  const [botcatcherField, updateBotcatcherField] = useState("");

  return (
    <div
      css={css`
        display: flex;
        margin: 0 auto 50px;
        max-width: ${variables.smallPageWidth}px;
        padding: 20px ${variables.pagePadding}px 50px;
        justify-content: center;
      `}
    >
      {/* resource: https://blog.webjeda.com/google-form-customize/ */}
      <iframe
        title="hidden_iframe"
        name="hidden_iframe"
        id="hidden_iframe"
        style={{ display: "none" }}
      />

      {formSubmitted && (
        <div>
          <p>Fancy seeing you here!</p>
          <p>
            Thanks for reaching out. I'll be in touch soon.{" "}
            <span role="img" aria-label="Dancer">
              💃
            </span>
          </p>
        </div>
      )}

      <form
        css={css`
          display: ${formSubmitted
            ? "none"
            : "flex"}; // form NEEDS to stay on page in order to submit, but can be hidden
          flex-direction: column;
          width: 100%;
        `}
        action={formAction}
        method="post"
        target="hidden_iframe"
        onSubmit={() => {
          updateFormSubmitted(true);
        }}
      >
        <div
          css={css`
            ${mixins.formFlex}
          `}
        >
          {/* name */}
          <div
            css={css`
              ${mixins.formField}
            `}
          >
            <label>Name</label>
            <input
              css={css`
                ${mixins.formInput}
              `}
              name={gFormNameEntry}
              onChange={(e) => {
                updateName(e.target.value);
              }}
              value={name}
              type="text"
            />
          </div>
          {/* email */}
          <div
            css={css`
              ${mixins.formField}
            `}
          >
            <label>Email</label>
            <input
              css={css`
                ${mixins.formInput}
              `}
              name={gFormEmailEntry}
              onChange={(e) => {
                updateEmail(e.target.value);
              }}
              value={email}
              type="email"
            />
          </div>
        </div>

        {/* message */}
        <div
          css={css`
            ${mixins.formField}
          `}
        >
          <label>Message</label>
          <textarea
            css={css`
              ${mixins.formInput}
            `}
            onChange={(e) => {
              updateMessage(e.target.value);
            }}
            value={message}
            name={gFormMessageEntry}
          />
        </div>

        <div
          css={css`
            display: none;
            ${mixins.formField}
          `}
        >
          <label>Botcatcher</label>
          <input
            css={css`
              ${mixins.formInput}
            `}
            name={gFormBotcatcherEntry}
            onChange={(e) => {
              updateBotcatcherField(e.target.value);
            }}
            value={botcatcherField}
            type="text"
          />
        </div>

        <input
          css={css`
            ${mixins.button}
          `}
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
}
