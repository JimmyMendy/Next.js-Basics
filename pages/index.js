import {server} from '../config'
import ArticleList from '../components/ArticleList';
import styles from '../styles/Layout.module.css';

export default function Home({articles}) {
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  )
}

// export const getStaticProps = async () => {
//   const res = await fetch(`http://jsonplaceholder.typicode.com/posts?_limit=6`);
//   const articles = await res.json();

//   return {
//     props: {
//       articles
//     }
//   }
// }

//request to our API
export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  return {
    props: {
      articles
    }
  }
}