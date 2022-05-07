import type { NextPage } from "next"
import styled from "styled-components"

const Main = styled.main`
  background-color: red;
  font-size: 2rem;
`

const Home: NextPage = () => {
  return <Main>Olá next</Main>
}

export default Home
