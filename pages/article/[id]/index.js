import {server} from '../../../config'
import {useRouter} from 'next/router';
import Link from 'next/link';
import Meta from '../../../components/Meta'

const ArticlePage = ({article}) => {
  // const router = useRouter();
  // const {id} = router.query

  return (
    <div>
      <Meta 
        title={article.title}
        description={article.excerpt}
      />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br/>
      <Link href="/">Go Back</Link>
    </div>
  )
}

//Fetch from the API
export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`)

  const article = await res.json();

  return {
    props: {
      article
    }
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`)

  const articles = await res.json()

  const paths = articles.map(article => {
    return {
      params: { id: article.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

//getServersideProps Method
// export const getServerSideProps = async (context) => {
//   const res = await fetch(`http://jsonplaceholder.typicode.com/posts/${context.params.id}`)

//   const article = await res.json();

//   return {
//     props: {
//       article
//     }
//   }
// }

// export const getStaticProps = async (context) => {
//   const res = await fetch(`http://jsonplaceholder.typicode.com/posts/${context.params.id}`)

//   const article = await res.json();

//   return {
//     props: {
//       article
//     }
//   }
// }

// export const getStaticPaths = async () => {
//   const res = await fetch(`http://jsonplaceholder.typicode.com/posts`)

//   const articles = await res.json()

//   const paths = articles.map(article => {
//     return {
//       params: { id: article.id.toString() }
//     }
//   })

//   return {
//     paths,
//     fallback: false
//   }
// }

export default ArticlePage
