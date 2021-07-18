import styled from 'styled-components'

export const Container = styled.div`
  padding: 5rem 0;
`

export const SocialNetworkButton = styled.button`
  background: var(--white);
  border: 1px solid var(--grey);
  border-radius: 50%;
  width: 2.8rem;
  height: 2.8rem;

  & + button {
    margin-left: 1rem;
  }

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`
