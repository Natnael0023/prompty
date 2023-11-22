import React from 'react'
import '@styles/global.css'
import { Nav } from '@components/Nav'

export const metadata = {
    title: "Prompty",
    description: 'Discover and Share AI Prompts'
}

export const RootLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <html lang='en'>
        <body className=' bg-[#000000] text-white px-6 md:px-10 lg:px-60'>
            <Nav/>
            <div className=''>
                <div className=' z-0 gradient'/>
            </div>

            <main className='app '>
                {children}
            </main>

        </body>
    </html>
  )
}

export default RootLayout