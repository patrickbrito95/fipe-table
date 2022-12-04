import Head from 'next/head'
import Image from 'next/image'
import { HomePage } from '../screens/Home'
import {ResultsPage} from '../screens/Results/index'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <HomePage />
    </div>
  )
}
