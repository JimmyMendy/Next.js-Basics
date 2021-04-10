import Link from 'next/link';
import { useEffect } from 'react'
import { useRouter } from 'next/router';
import Meta from '../components/Meta';
//Style
//import styles from '../styles/404.module.css'

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.go(-1)
      router.push('/')
    }, 3000)
  }, [])

  return (
    <div>
      <Meta title='404' />
      <h1>Oooops...</h1>
      <h2>That page cannont be found.</h2>
      <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
    </div>
  )
}

export default NotFound
