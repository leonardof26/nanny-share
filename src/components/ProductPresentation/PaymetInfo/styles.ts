import styled from 'styled-components'
import { device } from '../../../styles/devices'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  img {
    max-height: 230px;
    margin: auto;
  }

  @media ${device.tabletPortrait} {
    flex-direction: row;

    img {
      max-height: 250px;
      margin-right: 2rem;
    }
  }

  @media ${device.tabletLandScaped} {
    img {
      max-height: 300px;
    }
  }

  @media ${device.laptop} {
    img {
      max-height: 336px;
    }
  }
`

export const Info = styled.div`
  text-align: center;
  margin-top: 2rem;

  > p {
    padding: 2.5rem 0;
  }

  @media ${device.tabletPortrait} {
    margin-top: 0;
    max-width: 45%;
    text-align: left;
  }
`
