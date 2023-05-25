import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link  from "next/link" 
import {AiOutlineBars} from "react-icons/ai"

const inter = Inter({ subsets: ['latin'] })

import Navbar from "@/components/Sidebar/Navbar/Navbar"

export default function Home() {
    return (
        <Navbar />
    )
}

