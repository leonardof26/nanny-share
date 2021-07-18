import styled from 'styled-components'

import { device } from '../../../styles/devices'

export const Container = styled.div`
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    font-weight: 500;
    font-size: 1.375rem;
    line-height: 2rem;
    padding-bottom: 1rem;
  }

  > p {
    font-size: 1.125rem;
    line-height: 1rem;
    padding-bottom: 2rem;
  }

  @media ${device.mobileL} {
    > h1 {
      font-size: 1.75rem;
    }
    > p {
      line-height: 1.5rem;
    }
  }
`
