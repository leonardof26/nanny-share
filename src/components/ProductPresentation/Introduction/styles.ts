import styled from 'styled-components'
import { device } from '../../../styles/devices'

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: space-between;

  img {
    max-height: 204px;
  }

  @media ${device.tabletPortrait} {
    flex-direction: row;

    img {
      max-height: 240px;
    }
  }

  @media ${device.tabletLandScaped} {
    > img {
      max-height: 330px;
    }
  }

  @media ${device.laptop} {
    > img {
      max-height: 392px;
    }
  }
`

export const Info = styled.div`
  margin-top: 2rem;
  text-align: center;

  > p {
    padding: 1.5rem 0;
  }

  @media ${device.tabletPortrait} {
    margin-top: 0;
    max-width: 43%;
    text-align: left;
  }
`
