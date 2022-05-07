import { getProductWithLimit } from "../api/services"
import Header from "../components/Header"
import { Wrapper } from "../components/Wrapper"
import { IProduct } from "../Types/IProduct"
import * as S from "../styles/homeStyles"
import Link from "next/link"

export async function getStaticProps() {
  const products = await getProductWithLimit()
  return { props: { products }, revalidate: 24 * 3600 }
}

interface IHomeProps {
  products: IProduct[]
}

const Home = ({ products }: IHomeProps) => {
  return (
    <Wrapper>
      <Header>Loja X</Header>
      <S.ListWrapper>
        {products.map((product) => (
          <li key={`product_${product.id}`}>
            <Link href={`/product/${product.id}`}>
              <a>{product.title}</a>
            </Link>
          </li>
        ))}
      </S.ListWrapper>
    </Wrapper>
  )
}

export default Home
