import styled from 'styled-components'

import { device } from '../../../styles/devices'

export const Container = styled.div`
  margin: auto;
  padding: 0 2rem;
  height: calc(60vh - 60px);

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    display: none;
  }

  @media ${device.laptop} {
    padding: 0;
    max-width: 1080px;

    > img {
      margin-right: 5rem;
    }
  }

  @media ${device.tabletLandScaped} {
    > img {
      height: 290px;
      display: block;
    }
  }

  @media ${device.mobileL} {
    height: calc(70vh - 60px);
    margin-top: 5rem;
  }
`

export const Info = styled.div`
  color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  > h1 {
    font-weight: 500;
    line-height: 2rem;
    font-size: 1.75rem;
  }

  > p {
    margin-top: 1.5rem;
    font-weight: 400;
    line-height: 1.75rem;
  }

  @media ${device.tabletLandScaped} {
    max-width: 590px;
    align-items: flex-start;
    text-align: left;
  }

  @media ${device.mobileL} {
    > h1 {
      line-height: 3rem;
      font-size: 2.5rem;
    }

    > p {
      line-height: 1.5rem;
      font-size: 1.125rem;
    }
  }
`

export const CompanyVideo = styled.div`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;

  > div {
    background: var(--green);
    border-radius: 50%;
    height: 48px;
    width: 48px;
    margin-right: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: var(--white);
      margin: auto;
    }
  }
`
