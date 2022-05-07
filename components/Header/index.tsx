import { ReactNode } from "react"
import * as S from "./styles"

interface IHeaderProps {
  children: ReactNode
}

function Header({ children }: IHeaderProps): JSX.Element {
  return <S.HeaderWrapper>{children}</S.HeaderWrapper>
}

export default Header
