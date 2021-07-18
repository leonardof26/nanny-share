import styled from 'styled-components'
import { device } from '../../../styles/devices'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  > p {
    padding: 2.5rem 0;
    max-width: 790px;
  }

  > img {
    max-width: calc(100vw - 8rem);
    display: none;
  }

  @media ${device.laptop} {
    > img {
      max-height: 392px;
      margin: 0;
    }
  }

  @media ${device.tabletPortrait} {
    > img {
      display: block;
    }
    > a {
      padding-bottom: 3.5rem;
    }
  }
`
