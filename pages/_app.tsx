import '@/styles/globals.css'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Layout from '@/components/layout/Layout'
import Hero from '@/components/home/Hero'
import DarkModeProvider from "../components/utils/Theme.provider"

export default function App({ Component, pageProps }: AppProps) {
  return (
    
    <DarkModeProvider>
    <Layout currentPage="Home" meta={{ desc: "I'm a passionate web developer and designer coding beautiful websites and apps." }}>
   <h1>Hello world</h1>
  </Layout>
  </DarkModeProvider>
    
  )
}
