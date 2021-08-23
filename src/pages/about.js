import React from 'react'
import Header from '../comps/Header'
import Headshot from '../images/cropped.jpg'
const about = () => {
    return(
        <div className="w-screen flex flex-col items-center min-h-screen bg-backgroundGrey">
           <Header/>
           <img src={Headshot} className="m-1 rounded-full border-4 border-black w-1/2 h-auto sm:max-w-xs" alt="My headshot" />
           <h2 className="font-display text-center text-4xl mt-3 blue-underline">About Me</h2>
           <p className="font-body text-center m-4 mt-6 sm:max-w-prose">
           In 2020 I graduated from UC Santa Barbara with a Bachelor's Degree in English... straight into a global pandemic. Originally, I intended to go to law school, but I put off applying because I didn't want to pay $50k to learn torts over Zoom. During that time I decided, mostly on a whim, to try CodeAcademy. I've been a computer hobbyist all my life even though I never studied them academically, and I discovered that I enjoy programming. I pursued the self-education path for a while but decided that it was time to commit full-time to this career change, so I applied to General Assembly's full-time Software Engineering Immersive bootcamp.</p>
<p className="font-body text-center m-4 mt-6 sm:max-w-prose">
I chose to pursue full-stack development as a career because I want a job where I use my creativity and knowledge to build things. I love the creative process and the sense of accomplishment that comes with putting something into the world. I also love learning, whether it be new technologies and techniques or more abstract concepts. I wanted a career where I can grow, learn, create, and build, and I believe that I've found that career in full-stack development.</p>
<p className="font-body text-center m-4 mt-6 sm:max-w-prose">My experience is primarily in JavaScript and React, although I have some exposure to a wide variety of other technologies and languages like Python and SQL. I'm primarily interested in full-stack development roles but I'm not yet committed to any particular path in my tech career so I'm open to all kinds of opportunities.</p>
        </div>
    )
}
export default about