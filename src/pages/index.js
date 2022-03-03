import Head from 'next/head'
import Image from 'next/image'
import Windows from '../components/window/Window'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Windows/>
    </div>
  )
}
