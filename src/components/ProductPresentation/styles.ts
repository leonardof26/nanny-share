import styled from 'styled-components'
import { device } from '../../styles/devices'

export const Container = styled.div`
  max-width: 1050px;
  margin: auto 1rem auto 1rem;

  > div {
    padding: 5rem 0;
    position: relative;

    &:not(:last-child) {
      &:before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        height: 1px;
        width: 100%;
        border-bottom: 2px solid var(--grey);

        @media ${device.mobileLToUp} {
          width: 90%;
          left: 5%;
        }

        @media ${device.tabletLandScapedToUp} {
          width: 75%;
          left: 12.5%;
        }
      }
    }
  }

  h1 {
    font-weight: 500;
    font-size: 1.375rem;
    line-height: 2rem;
  }

  p {
    line-height: 1.75rem;
  }

  @media ${device.mobileLToUp} {
    margin: auto 2rem auto 2rem;

    > h1 {
      font-size: 1.75rem;
    }
  }

  @media ${device.laptopToUp} {
    margin: auto;
  }
`
