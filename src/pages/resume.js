import React from 'react'
import Header from '../comps/Header'
import resumeCopy from '../files/MasterResume(1).pdf'
const resume = () => {
    return(
        <div className="w-screen flex flex-col items-center min-h-screen bg-backgroundGrey">
           <Header/>
           <h2 className="font-display text-center text-4xl mt-3 blue-underline">Resume</h2>
           <p className="font-body m-3">You can find a PDF copy of my resume <a href={resumeCopy} className="text-highlightBlue blue-underline">here.</a></p>
           <div className="w-screen sm:max-w-prose p-8">
           <h3 className="font-display text-center text-2xl">Skills</h3>
           <h4 className="font-body text-lg blue-underline">Core Skills</h4>
            <ul>
                <li className="font-body">JavaScript ES6+</li>
                <li className="font-body">React</li>
                <li className="font-body">HTML5/CSS3</li>
                <li className="font-body">Node.js/NPM</li>
                <li className="font-body">Express.js</li>
                <li className="font-body">Git/Github</li>
            </ul>
            <h4 className="mt-4 font-body text-lg blue-underline">Some Experience</h4>
            <ul>
                <li className="font-body">MongoDB/Mongoose</li>
                <li className="font-body">PostgreSQL</li>
                <li className="font-body">Python</li>
                <li className="font-body">Heroku</li>
            </ul>
            </div>
           <h3 className="font-display text-center text-2xl">Experience</h3>
           <h3 className="font-display text-center text-2xl">Education</h3>
        </div>
    )
}
export default resume