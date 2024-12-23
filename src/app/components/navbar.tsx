import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='bg-white z-50 sticky top-0'>
        <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
    <p className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <span className="ml-3 text-xl">Ali Dost</span>
    </p>
    <nav
     className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href={"/"} className="mr-5 hover:text-blue-600">Home</Link>
      <Link href={"./about"} className="mr-5 hover:text-blue-600">About</Link>
      <Link href={"./skills"} className="mr-5 hover:text-blue-600">Skills</Link>
      <Link href={"./project"} className="mr-5 hover:text-blue-600">Projects</Link>
      <Link href={"./contact"} className="mr-5 hover:text-blue-600">Contact</Link>
    </nav>
   
  </div>
</header>   
    </div>
  )
}

export default Navbar
