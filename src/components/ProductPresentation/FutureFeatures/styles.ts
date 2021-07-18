import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  > h1 {
    font-weight: 500;
    font-size: 1.75rem;
    line-height: 2rem;
    padding: 2.5rem 0;
  }

  > p {
    line-height: 1.75rem;
    max-width: 790px;
    text-align: center;
  }

  > img {
    max-height: 96px;
  }
`
