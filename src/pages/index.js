import * as React from "react"
import Header from '../comps/Header'
import Headshot from '../images/cropped.jpg'
const IndexPage = () => {
  return (
    <div className="w-screen flex flex-col items-center min-h-screen bg-backgroundGrey">
      <Header/>
      <img src={Headshot} className="m-1 rounded-full border-4 border-black w-1/2 h-auto" alt="My headshot" />
      <p className="m-1 font-display text-center text-5xl">Full-Stack Engineer</p>
      <p className="font-display text-center text-xl"><span className="text-highlightBlue text-shadow-s text-2xl">☛</span> Seeking Employment <span className="text-highlightBlue text-shadow-s text-2xl">☚</span></p>
      <div className="horizontal-line m-2 mb-1"></div>
      <p className="mb-1 font-display text-center text-8xl">React</p>
      <p className="m-1 font-display text-center text-5xl">JavaScript</p>
      <p className="m-2 font-display text-center text-xl">Full-Stack Development And More</p>
      <div className="horizontal-line m-2"></div>
      <nav className="m-1 flex flex-col">
        <a href="/about" className="m-1 font-display blue-underline text-center text-2xl">About Me</a>
        <a href="/resume" className="m-1 font-display blue-underline text-center text-2xl">Resume</a>
        <a href="/projects" className="m-1 font-display blue-underline text-center text-2xl">Projects</a>
        <a href="/blog" className="m-1 font-display blue-underline text-center text-2xl">Blog</a>
      </nav>
    </div>
  )
}

export default IndexPage
