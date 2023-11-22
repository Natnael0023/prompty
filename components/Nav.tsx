'use client'

import React, { useEffect } from 'react'
import { useState } from 'react'
import {signIn, signOut, useSession, getProviders} from 'next-auth/react'
import Link from 'next/link'
import Image from 'next/image'

export const Nav = () => {

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true)

  const [providers, setProviders] = useState(null)

  const [dropDown, setDropDown] = useState(false)

  useEffect(()=>{
    const setProv = async () =>{
      const res = await getProviders()
      setProviders(res)
    }

    setProv()

  },[])

  return (
    <nav className=' flex justify-between w-full pt-5 pb-5'>
      <Link href={"/"} className=' flex gap-1'>
        <Image src="/assets/images/logo.svg" width={35} height={20} alt=''/>
        <p className=' text-xl font-semibold text-white hidden sm:flex'>Prompty</p>
      </Link>

      {/* /* desktop nav */ }
      <div>
        {
            isUserLoggedIn ? (
              <div className=' sm:flex gap-4 hidden'>
                <Link 
                  href={"/create"} 
                  className=' bg-sky-500 p-2 px-4 rounded-full font-semibold'>
                  Create Prompt
                </Link>
                <button type='button'
                onClick={()=>signOut}
                className=' border p-2 px-4 rounded-full'>
                  SignOut
                </button>
                <Image
                  src={"/assets/images/logo.svg"}
                  width={30}
                  height={30}
                  alt=''
                  className=' rounded-full '
                />
              </div>
            ):(
              <>
                  {providers && 
                    Object.values(providers).map((provider)=>
                    (
                      <button
                      type='button'
                      key={provider.name}
                      onClick={()=>signIn}
                      className=' bg-sky-400'>
                        Sign In
                      </button>
                    ))
                  }
              </>
            )
        }
      </div>

      {/* mobile */}
      <div className=' sm:hidden flex relative'>
        {
          isUserLoggedIn ? (
            <div className=' flex flex-col items-end'>
              <Image
                  src={"/assets/images/logo.svg"}
                  width={30}
                  height={30}
                  alt=''
                  onClick={()=>setDropDown((prev)=>!prev)}
                  className=' rounded-full '
                />

                {dropDown && (
                  <div className=' z-50 bg-white rounded-xl text-gray-500 shadow absolute top-12 flex flex-col justify-end items-end'>
                    <Link 
                      href={"/profile"}
                      onClick={()=> setDropDown(false)}
                      className=' hover:bg-white p-1 pl-20 pr-3'>
                      Profile
                    </Link>
                    <Link 
                      href={"/profile"}
                      onClick={()=> setDropDown(false)}
                      className=' hover:bg-white p-1 pl-20 pr-3'>
                      Create prompt
                    </Link>
                    <button 
                      type='button'
                      onClick={()=> {setDropDown(false); signOut}}
                      className=' p-1 pl-20 pr-3'>
                      SignOut
                    </button>
                  </div>
                )}
            </div>
          ):('')
        }
      </div>
    </nav>
  )
}