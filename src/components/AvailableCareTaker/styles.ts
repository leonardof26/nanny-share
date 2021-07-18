import styled from 'styled-components'
import { device } from '../../styles/devices'

export const Container = styled.div`
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  background: var(--white);

  > img {
    height: 56px;
  }

  > span {
    margin-left: 0.5rem;
    font-weight: 500;
  }

  > a {
    max-width: 50%;
    margin: 1rem 0;
  }

  @media ${device.tabletLandScaped} {
    flex-direction: row;

    > img {
      margin-right: 1rem;
    }

    > a {
      max-width: 100%;
      margin: 0;
    }
  }

  @media ${device.mobileL} {
    text-align: left;

    > img {
      height: 3.5rem;
    }
  }
`
