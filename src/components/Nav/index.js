/** @jsxImportSource @emotion/react */

import { useState } from "react";

import { HashLink as Link } from "react-router-hash-link";

import { css } from "@emotion/react";

import logo from "../../img/logo/logo.png";

import Close from "../../img/icons/close";

import Resume from "../../img/AnnabethCarroll.pdf";

import { variables, paths, colors, helper } from "../../styles/shared";

import LockIcon from "../../icons/LockIcon";
import UnlockIcon from "../../icons/UnlockIcon";

export default function Nav({ showHomeLink, isVerified, setIsVerified, pwModalOpen, setPwModalStatus, desiredPath, setDesiredPath }) {
  const [showMobileMenu, updateShowMobileMenu] = useState(false);
  const [showSecondaryMenu, updateShowSecondaryMenu] = useState(-1); // index of which secondary menu to show; if -1, no secondary menu shown

  const navItems = [
    {
      name: "Projects",
      link: paths.projectsAnchor,
      secondary: [
        {
          name: "AI-generated resume suggestions",
          link: paths.aiSuggestions,
          protected: true
        },
        {
          name: "Work gaps",
          link: paths.workGaps,
          protected: true
        },
        {
          name: "HubSpot design system",
          link: paths.hubDesignSystem,
        },
        {
          name: "HubSpot homepage redesign",
          link: paths.hubHomepage,
        },
        {
          name: "Pegasystems onboarding tours",
          link: paths.pegaTours,
        },
        {
          name: "Apartment & roommate finding app",
          link: paths.homeward,
        }
      ],
    },
    {
      name: "My path to UX",
      link: paths.about,
    },
    {
      name: "Resume",
      atag: Resume,
      newWindow: true
    },
    {
      name: "Contact",
      atag: paths.contactLink,
    },
  ];

  const navItemFont = css`
    font-family: ${variables.headerFont};
    font-weight: normal;
    font-size: 14px;
  `;

  const nav = (
    <nav
      css={css`
        position: relative;
        list-style-type: none;
        display: flex;
        margin: 0 0 0 20px;
        padding: 0 0;
        align-items: flex-end;

        @media (max-width: ${variables.mobile}px) {
          width: 100%;
          margin: 0 0;
          display: block;
          left: 100%;
          transition: 0.3s left;
          position: absolute;
          top: 0;

          ${showMobileMenu &&
        `
            position: fixed;
            left: 0;
            background: #fff;
            z-index: 2;
            height: 100vh;
          `}
        }
      `}
    >
      {/* close icon in mobile menu */}
      <div
        css={css`
          position: absolute;
          padding: 15px;
          right: 0;
          @media (min-width: ${variables.mobile + 1}px) {
            display: none;
          }
        `}
        onClick={() => updateShowMobileMenu(!showMobileMenu)}
      >
        <Close fill={colors.textColor} />
      </div>

      {/* menu item list, starting with primary items */}
      <ul
        css={css`
          font-size: 18px;
          list-style-type: none;
          display: flex;
          margin: 0 0 0 20px;
          padding: 0 0;
          @media (max-width: ${variables.mobile}px) {
            margin: 50px 0 20px;
            padding: 5px 0;
            display: block;
            flex-direction: column;
            align-items: flex-end;
          }
        `}
      >
        {navItems.map((navItem, i) => {
          const isAtag = navItem.atag ? true : false; // Check if atag exists
          return (
            <li
              css={css`
                margin-bottom: 0;
                     `}
              onMouseEnter={() => {
                updateShowSecondaryMenu(i);
              }}
              onMouseLeave={() => {
                updateShowSecondaryMenu(-1);
              }}
              key={i}
            >
              {/* Conditionally render based on Link or atag */}
              {isAtag ? (
                <a
                  href={navItem.atag}
                  target={navItem.newWindow && "_blank"}
                  css={css`
                      color: ${colors.textColor};
                      padding: 10px 20px;
                      ${navItemFont}
                      @media (max-width: ${variables.mobile}px) {
                      display: flex;
                    }
                  `}
                  onClick={() => {
                    updateShowMobileMenu(!showMobileMenu);
                  }}
                >
                  {navItem.name}
                </a>
              ) : (
                <Link
                  smooth
                  to={navItem.link}
                  css={css`
                  color: ${colors.textColor};
                  padding: 10px 20px;
                  ${navItemFont}
                  @media (max-width: ${variables.mobile}px) {
                    display: flex;
                  }
                `}
                  onClick={() => {
                    updateShowMobileMenu(!showMobileMenu);
                  }}
                >
                  {navItem.name}
                </Link>
              )}

              {/* if there are secondary items, build them under their primary header item  */}
              {navItem.secondary && (
                <ul
                  css={css`
                    display: ${showSecondaryMenu === i ? "block" : "none"};
                    transition: 0.3s all ease;
                    position: absolute;
                    padding: 0 0;
                    z-index: 1;
                    list-style: none;
                    top: calc(100% + 8px);
                    @media (max-width: ${variables.mobile}px) {
                      display: block;
                      position: relative;
                    }
                  `}
                >
                  {/* inner item for secondary menu with styles for gradient border */}
                  <div
                    css={css`
                      @media (min-width: ${variables.mobile + 1}px) {
                        background: #fff;
                        background-clip: padding-box;
                        border: solid 1px transparent;
                        border-radius: 15px;
                        &:before {
                          content: "";
                          position: absolute;
                          top: 0;
                          right: 0;
                          bottom: 0;
                          left: 0;
                          z-index: -1;
                          margin: -1px;
                          border-radius: inherit;
                          background: linear-gradient(#ff5092, #ffd869);
                        }
                      }

                      @media (max-width: ${variables.mobile}px) {
                        margin-left: 20px;
                      }
                    `}
                  >
                    {navItem.secondary.map((secondaryItem, j) => {
                      const Parent = (secondaryItem.protected && !isVerified) ? 'div' : Link;
                      const handleClick = () => {
                        if (secondaryItem.protected && !isVerified) {
                          setPwModalStatus(true);
                          setDesiredPath(secondaryItem.link);
                        } else {
                          updateShowSecondaryMenu(-1);
                          updateShowMobileMenu(!showMobileMenu);
                        }
                      };

                      return (
                        <li key={j}
                          css={css`
                          margin-bottom: 0;
                              `}
                        >
                          <Parent
                            to={secondaryItem.protected && !isVerified ? undefined : secondaryItem.link}

                            css={css`
                              display: flex;
                              align-items: center;
                              color: ${colors.textColor};
                              display: flex;
                              padding: 5px 20px;
                              cursor: pointer;
                              &:hover {
                                color: ${colors.linkHoverColor};
                                }
                              ${navItemFont}
                              ${j === navItem.secondary.length - 1
                                ? "padding-bottom: 15px;"
                                : ""} // more bottom padding on last item
                              @media (min-width: ${variables.mobile + 1}px) {
                                ${j === 0
                                ? "padding-top: 15px;"
                                : ""}// more top padding on first item (desktop only)
                              }
                            `}
                            onClick={handleClick}


                          >

                            <span>
                              {secondaryItem.name}
                            </span>
                            {secondaryItem.protected && (
                              <>
                                {isVerified ? (
                                  <UnlockIcon className="lock lock--open lock--small" />
                                ) : (
                                  <LockIcon className="lock lock--closed lock--small" />
                                )}
                              </>
                            )}
                          </Parent>
                        </li>
                      );
                    })}
                  </div>
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );

  return (
    <div
      css={css`
        display: flex;
        align-items: flex-end;
        min-height: ${variables.menuHeight}px;
        justify-content: ${showHomeLink ? "space-between" : "flex-end"};
        margin: 0 auto;
        max-width: ${variables.largePageWidth}px;
        padding: 20px ${variables.pagePadding}px 20px;
        @media (max-width: ${variables.mobile}px) {
          flex-wrap: wrap;
        }
      `}
    >
      {showHomeLink && (
        <Link
          smooth
          to={paths.home}
          css={css`
            display: flex;
            align-items: center;
            @media (max-width: ${variables.mobile}px) {
              width: 50%;
            }
          `}
        >
          {/* mobile icon */}
          <div>
            <img
              src={logo}
              alt="logo"
              css={css`
                max-width: 38px;
                display: none;
                @media (max-width: ${variables.mobile}px) {
                  display: block;
                }
              `}
            />
          </div>

          {/* desktop full name */}
          <p
            css={css`
              font-family: ${variables.headerFont};
              ${helper.textGradientRightToLeft}
              margin: 0 0;
              font-size: 26px;

              @media (max-width: ${variables.mobile}px) {
                display: none;
              }
            `}
          >
            Annabeth Carroll
          </p>
        </Link>
      )}

      {/* mobile "Menu" in top right to toggle menu */}
      <div
        css={css`
          font-family: ${variables.headerFont};
          font-size: 14px;
          text-align: right;
          display: none;
          cursor: pointer;
          color: ${colors.lighterGray};
          @media (max-width: ${variables.mobile}px) {
            display: block;
            width: 50%;
          }
        `}
        onClick={() => {
          updateShowMobileMenu(!showMobileMenu);
        }}
      >
        Menu
      </div>

      {nav}
    </div>
  );
}
