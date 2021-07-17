import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1080px;
  margin: auto;
  margin-top: 5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 290px;
    margin-right: 5rem;
  }
`

export const Info = styled.div`
  max-width: 590px;
  color: var(--white);

  > h1 {
    font-weight: 500;
    line-height: 3rem;
    font-size: 2.5rem;
  }

  > p {
    margin-top: 1.5rem;
    font-weight: 400;
    line-height: 1.5rem;
    font-size: 1.125rem;
  }
`

export const CompanyVideo = styled.div`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;

  > div {
    background: var(--green);
    border-radius: 50%;
    padding: 0.75rem;
    margin-right: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: var(--white);
      margin: auto;
    }
  }
`
