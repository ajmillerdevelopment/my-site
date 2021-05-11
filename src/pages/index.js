import * as React from "react"
import Headshot from '../images/cropped.jpg'
const IndexPage = () => {
  return (
    <div className="w-screen flex flex-col items-center h-screen bg-backgroundGrey">
      <h1 className="mt-4 mb-1 font-display text-center text-shadow text-highlightBlue"> <span className="text-4xl">ALEXANDER</span> <br /> <span className="text-7xl">MILLER</span> </h1>
      <img src={Headshot} className="m-1 rounded-full border-4 border-black w-1/2 h-auto" alt="My headshot" />
      <p className="m-1 font-display text-center text-5xl">Full-Stack Engineer</p>
      <p className="font-display text-center text-xl"><span className="text-highlightBlue text-2xl">☛</span>  Seeking Employment <span className="text-highlightBlue text-2xl">☚</span></p>
      <p className="mb-1 font-display text-center text-8xl">React</p>
      <p className="m-1 font-display text-center text-5xl">JavaScript</p>
    </div>
  )
}

export default IndexPage
