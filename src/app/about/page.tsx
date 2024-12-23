import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ">
      <Image
        className="object-cover object-center rounded mx-auto "
        alt="hero"
        width={400}
        height={400}
        src="/image9.png"
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 font-sans">
        About me
        <br className="hidden lg:inline-block" />
        
      </h1>
      <p className="mb-8 leading-relaxed">
    Hello, I'm Ali Dost Jamali, a passionate frontend developer
    with a keen interest in artificial intelligence (AI). I am currently pursuing my studies
    in AI while continuously enhancing my skills in web development.
    With a background in programming and a growing knowledge of technologies 
    like TypeScript and Next.js, I am to create engaging and user-friendly websites.
    I believe in constant learning and strive to stay updated with the latest trends
    in technology to deliver high-quality solutions.
      </p>
    
    </div>
  </div>
</section>

    </div>
  )
}

export default About
