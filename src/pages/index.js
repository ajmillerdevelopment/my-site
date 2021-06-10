import * as React from "react"
import Header from '../comps/Header'
import Headshot from '../images/cropped.jpg'
const IndexPage = () => {
  return (
    <div className="w-screen flex flex-col items-center min-h-screen bg-backgroundGrey">
        <div className="frame fade-frame">
        <div className="flex flex-col fade-inner items-center">
          <Header/>
          <img src={Headshot} className="m-1 rounded-full border-4 border-black w-1/2 h-auto sm:max-w-xs" alt="My headshot" />
          <p className="m-1 font-display text-center text-5xl sm:text-2xl">Full-Stack Engineer</p>
          <p className="font-display text-center text-xl sm:text-lg"><span className="text-highlightBlue text-shadow-s text-2xl">☛</span> Seeking Employment <span className="text-highlightBlue text-shadow-s text-2xl">☚</span></p>
          <div className="horizontal-line sm:max-w-xl m-2 mb-1"></div>
          <p className="mb-1 font-display text-center text-8xl sm:text-6xl">React</p>
          <p className="m-1 font-display text-center text-5xl sm:text-4xl">JavaScript</p>
          <p className="m-2 font-display text-center text-xl sm:text-lg">Full-Stack Development And More</p>
          <div className="horizontal-line sm:max-w-xl  m-2"></div>
          <nav className="m-1 flex flex-col">
            <a href="/about" className="m-4 sm:m-2 font-display underline text-center text-2xl sm:text-lg">About Me</a>
            <a href="/resume" className="m-4 sm:m-2 font-display underline text-center text-2xl sm:text-lg">Resume</a>
            <a href="/projects" className="m-4 sm:m-2 font-display underline text-center text-2xl sm:text-lg">Projects</a>
          </nav>
        </div>
        </div>
    </div>
  )
}

export default IndexPage
