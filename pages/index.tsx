import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Layout from '@/components/layout/Layout'
import Hero from '@/components/home/Hero'
import DarkModeProvider from "../components/utils/Theme.provider";
import {useThemeState} from "../components/utils/Theme.provider"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const { theme } = useThemeState();
  return (
   <div className="text-center">
    <Hero/>
   </div>
  )
}
