import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  return <header className="p-4  bg-slate-800 text-white">
  <div className="container mx-auto flex justify-center items-center">
    <div className="w-1/2">
    <Link className='' href="/">ProductsGallery</Link>
    </div>
    <div className="w-1/2">
    <Link className='hover:text-orange-200  hover:border-b-2  duration-500' href="/">Home </Link>
    </div>
  </div>
  </header>
}
