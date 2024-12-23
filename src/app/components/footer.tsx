import Link from 'next/link'
import React from 'react'
import { BsGithub } from "react-icons/bs";
function Footer() {
  return (
    <div>
      <footer className="text-gray-600 body-font bg-blue-100">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <p className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
   
      <span className="ml-3 text-xl">Ali Dost</span>
    </p>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      ©Copyright 2023 Ali Dost. 
 </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
     <Link href={"https://github.com/alijamali06"} className="text-gray-500 text-xl hover:*:text-blue-300">
     <BsGithub />
     </Link>
 </span>
  </div>
</footer>

    </div>
  )
}

export default Footer
