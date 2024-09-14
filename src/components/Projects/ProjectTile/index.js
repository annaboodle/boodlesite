/** @jsxImportSource @emotion/react */

import { HashLink as Link } from "react-router-hash-link";

import { css } from "@emotion/react";

import LockIcon from "../../../icons/LockIcon";
import UnlockIcon from "../../../icons/UnlockIcon";

import { useState } from "react";

import { Redirect } from 'react-router-dom';

export default function ProjectTile({
  background,
  name,
  logo,
  type,
  link,
  protected: isProtected,
  setPwModalStatus,
  setDesiredPath,
  isVerified
}) {
  const Parent = isProtected ? 'div' : Link;

  const [shouldRedirect, setShouldRedirect] = useState(false);

  const handleClick = (e) => {
    if (isProtected) {
      e.preventDefault(); // Prevent the default link behavior
      if (isVerified) {
        setShouldRedirect(true); // Trigger redirection
      } else {
        setPwModalStatus(true); // Show the password modal
        setDesiredPath(link);
      }
    }
  };

  if (shouldRedirect) {
    return <Redirect to={link} />;
  }

  return (
    <Parent
      to={isProtected ? undefined : link}
      onClick={handleClick}
      className="project-tile"
    >

      <div
        className="project-tile--inner1 backgroundImg boxShadow"
        css={css`
        background-image: url(${background});`
        }
      >
        {/* image for mobile only */}
        <div
          className={"project-tile--image-mobile backgroundImg"}
          css={css`
            background-image: url(${background});
          `}
        ></div>

        <div
          className="project-tile--inner2"
        >

          <div className="project-tile--copy">
            <div
              className="project-tile--info"
            >
              {isProtected && (
                <>
                  {isVerified ? (
                    <UnlockIcon className="lock lock--open lock--med" />
                  ) : (
                    <LockIcon className="lock lock--closed lock--med" />
                  )}
                </>
              )}
              <h3
                className="project-tile--title"
              >
                <span>{name}</span>

              </h3>

              <p
                className="project-tile--type"
              >
                {type}
              </p>
            </div>

            <img src={logo} className="project-tile--logo" />

            <p
              className="project-tile--more-link"
            >
              see more ›
            </p>
          </div>
        </div>
      </div>
    </Parent >
  );
}
