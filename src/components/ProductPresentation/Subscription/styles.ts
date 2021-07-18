import styled from 'styled-components'
import { motion } from 'framer-motion'

import { device } from '../../../styles/devices'

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  > h1 {
    font-size: 1.375rem;
  }

  > span {
    margin-top: 1rem;
    font-size: 1.125rem;
    line-height: 1.75rem;
  }

  > form {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 1rem;
    width: 100%;

    > input,
    > button {
      margin-top: 1rem;
      width: 100%;
    }
  }

  @media ${device.mobileLToUp} {
    > span {
      line-height: 1.5rem;
    }

    > form {
      margin-top: 4rem;
      flex-direction: row;
      width: auto;

      > input,
      > button {
        margin-top: 0;
        width: auto;
      }

      > input {
        margin-right: 1rem;
      }
    }
  }
`
