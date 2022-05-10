import { GetStaticProps } from "next"
import Link from "next/link"
import { useRouter } from "next/router"
import useSWR from "swr"
import { getProductById, getProductWithLimit } from "../../api/services"
import Header from "../../components/Header"
import { Wrapper } from "../../components/Wrapper"

export async function getStaticPaths() {
  const products = await getProductWithLimit(20)
  return {
    paths: products.map((product) => ({ params: { id: `${product.id}` } })),
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    revalidate: 10,
    props: { id: params?.id },
  }
}

function Product({ id }: { id: string }) {
  const { data, error } = useSWR(
    `/product/${id}`,
    async () => {
      const data = await getProductById(id as string)

      if (!data) {
        throw new Error("ffff")
      }
      return data
    },
    {
      revalidateIfStale: false,
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
      refreshInterval: 60000,
    },
  )
  if (!error && !data) {
    return (
      <Wrapper>
        <Header>Loja X</Header>
        <h1>loading...</h1>
        <Link href="/product/1">
          <a>next</a>
        </Link>
      </Wrapper>
    )
  }
  if (error || !data) {
    return (
      <Wrapper>
        <Header>Loja X</Header>
        <h1>error</h1>
        <Link href="/product/1">
          <a>next</a>
        </Link>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <Header>Loja X</Header>
      <div>
        <div>{data.id}</div>
        <div>{data.title}</div>
        <div>{data.price}</div>
        <div>{data.description}</div>
      </div>
      <Link href="/">
        <a>home</a>
      </Link>
      |
      <Link href={`/product/${Number(id) - 1}`}>
        <a>previous</a>
      </Link>
      |
      <Link href={`/product/${Number(id) + 1}`}>
        <a>next</a>
      </Link>
    </Wrapper>
  )
}

export default Product
