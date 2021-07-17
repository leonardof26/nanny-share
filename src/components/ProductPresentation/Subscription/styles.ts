import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    font-weight: 500;
    font-size: 1.375rem;
    line-height: 2rem;
  }

  > span {
    margin-top: 1rem;
    font-size: 1.125rem;
    line-height: 1.5rem;
  }

  > form {
    display: flex;
    align-items: center;
    margin-top: 4rem;

    > input {
      margin-right: 1rem;
    }
  }
`
