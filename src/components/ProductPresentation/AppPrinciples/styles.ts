import styled from 'styled-components'
import { motion } from 'framer-motion'

import { device } from '../../../styles/devices'

export const Container = styled(motion.div)`
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

  @media ${device.tabletPortraitToUp} {
    > img {
      display: block;
    }
    > a {
      padding-bottom: 3.5rem;
    }
  }

  @media ${device.laptopToUp} {
    > img {
      max-height: 392px;
      margin: 0;
    }
  }
`
