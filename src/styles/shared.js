import { css } from "@emotion/core";

export const paths = {
  home: "/",

  about: "/about",

  projectsAnchor: "/#projects",
  aboutAnchor: "/#about",
  contactAnchor: "/#contact",

  homeward: "/projects/homeward",
  hubDesignSystem: "/projects/hubspot-design-system",
  pegaTours: "/projects/pega-tours",
  hubHomepage: "/projects/hubspot-homepage",
};

export const colors = {
  startColor: "#ff5092", // pink
  midColor: "#FF9182", // sunset orange
  midColor2: "#ffbc74", // darker gold
  endColor: "#ffd869", // bright gold

  linkColor: "#ff5092",
  linkHoverColor: "#FF9182",

  textColor: "#2d2d2d",

  lighterGray: "#4a4a4a", // icons in footer, "Menu" on mobile

  formFieldBorder: "#ddd",
  formFieldBorderFocus: "#FF9182",

  buttonColor: "#ff5092",
  buttonHoverColor: "#FF9182",
};

export const variables = {
  mobile: 768,

  largePageWidth: 1000,
  smallPageWidth: 600,

  pagePadding: 20, // padding on left and right sides of page

  bodyFont: '"Fanwood Text", serif',
  headerFont: '"Days One", serif',
  secondaryFont: '"Catamaran", sans-serif',

  menuHeight: 79,
};

export const helper = {
  leftRightImg: css`
    width: 50%;
    margin-bottom: 20px;
    position: relative;
  `,

  textGradientRightToLeft: css`
    background-color: ${colors.startColor}; //fallback
    background-image: linear-gradient(
      90deg,
      ${colors.startColor},
      ${colors.endColor}
    );

    // https://fossheim.io/writing/posts/css-text-gradient/
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  `,

  textGradient: css`
    background-color: ${colors.startColor}; //fallback
    background-image: linear-gradient(${colors.startColor}, ${colors.endColor});

    // https://fossheim.io/writing/posts/css-text-gradient/
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  `,
};

export const mixins = {
  subhead: css`
    font-family: ${variables.headerFont};
    font-size: 1.3em;
  `,

  projectHeader: css`
    text-align: center;
    margin-bottom: 2em;
    @media (max-width: ${variables.mobile}px) {
      margin-top: 0; //ugh this is a weird way to cancel out css in fullwidthimg
    }
  `,

  backgroundImg: css`
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
  `,

  textGradient: css`
    ${helper.textGradient}
  `,

  button: css`
    border: none;
    border-radius: 5px;
    background: ${colors.buttonColor};
    font-size: 14px;
    font-family: ${variables.headerFont};
    text-transform: uppercase;
    color: #fff;
    display: inline-block;
    width: auto;
    padding: 12px 50px;
    margin: 20px auto 0;
    transition: 0.3s opacity;
    -webkit-appearance: none;
    &:hover {
      color: #fff;
      background: ${colors.buttonHoverColor};
    }
  `,

  // images
  imageInRowWrapper: css`
    display: flex;
    width: 150%;
    position: relative;
    left: -25%;
    margin-top: 20px;

    @media (max-width: ${1.5 * variables.smallPageWidth -
      variables.pagePadding}px) {
      width: 100%;
      left: 0;
    }
  `,

  imageInRow: css`
    display: flex;
    flex-basis: 0;
    flex-grow: 1;
    flex-direction: column;
    margin: 0 5px;
    &:first-of-type {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  `,

  fullWidthImg: css`
    margin-bottom: 20px;
    width: 150%;
    position: relative;
    left: -25%;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    @media (max-width: ${1.5 * variables.smallPageWidth -
      variables.pagePadding}px) {
      width: 100%;
      left: 0;
    }
  `,

  rightImg: css`
    ${helper.leftRightImg}
    float: right;
    margin-left: calc(-25% + 20px);
    right: -25%;
    @media (max-width: ${1.5 * variables.smallPageWidth -
      variables.pagePadding}px) {
      margin-left: 20px;
      right: 0;
    }
  `,

  leftImg: css`
    ${helper.leftRightImg}
    float: left;
    margin-right: calc(-25% + 20px);
    left: -25%;
    @media (max-width: ${1.5 * variables.smallPageWidth -
      variables.pagePadding}px) {
      margin-right: 20px;
      left: 0;
    }
  `,

  // forms
  formFlex: css`
    display: flex;
    div {
      flex-grow: 1;
      &:not(:first-of-type) {
        padding-left: 20px;
      }
    }
    @media (max-width: ${variables.mobile}px) {
      flex-direction: column;
      div {
        &:not(:first-of-type) {
          padding-left: 0;
        }
      }
    }
  `,

  formField: css`
    padding: 8px 0;
    text-align: left;
  `,

  formInput: css`
    border: 1px solid ${colors.formFieldBorder};
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border-radius: 5px;
    font-size: 14px;
    transition: 0.3s border-color;
    margin-bottom: 0;
    &:focus {
      outline: none;
      border-color: ${colors.formFieldBorderFocus};
    }
  `,
};
