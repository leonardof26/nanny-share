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
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tabletPortrait: `(min-width: ${size.tabletPortrait})`,
  tabletLandScaped: `(min-width: ${size.tabletLandScaped})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
}
