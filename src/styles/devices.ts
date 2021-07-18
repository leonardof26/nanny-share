const size = {
  mobileS: '319px',
  mobileM: '374px',
  mobileL: '426px',
  tabletPortrait: '790px',
  tabletLandScaped: '834px',
  laptop: '1025px',
  desktop: '1980px',
}

export const device = {
  mobileSToUp: `(min-width: ${size.mobileS})`,
  mobileMToUp: `(min-width: ${size.mobileM})`,
  mobileLToUp: `(min-width: ${size.mobileL})`,
  tabletPortraitToUp: `(min-width: ${size.tabletPortrait})`,
  tabletLandScapedToUp: `(min-width: ${size.tabletLandScaped})`,
  laptopToUp: `(min-width: ${size.laptop})`,
  desktopToUp: `(min-width: ${size.desktop})`,
}
