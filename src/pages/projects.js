import React from 'react'
import Header from '../comps/Header'
const projects = () => {
    return(
        <div className="w-screen flex flex-col items-center min-h-screen bg-backgroundGrey">
           <Header/>
           <div className="md:max-w-prose">
           <h2 className="font-display text-center text-4xl m-3">Projects</h2>
           <ul>
                <li>
                    <h3 className="font-display text-center mt-6 text-xl">This Website</h3>
                    <p className="font-body italic text-center">Personal Project</p>
                    <a href="https://github.com/captainahab68/my-site" className="text-highlightBlue font-bold font-body block text-center">Github</a>
                    <p className="font-body text-center mx-3">This website is built with Gatsby.js, a React framework for building and hosting static websites. It is styled with Tailwind CSS (my first Tailwind project). It was also built with a mobile-first approach, also a first for me. The design is my own, inspired by 19th-century advertisments and handbills.</p>    
                </li>
                <li>
                    <h3 className="font-display blue-underline text-center text-xl mt-6"> <a href="https://magentarejects.com/">Magenta Rejects</a></h3>
                    <p className="font-body italic text-center">Client Project</p>
                    <a href="https://github.com/captainahab68/magenta-rejects" className="text-highlightBlue font-bold font-body block text-center">Github</a>
                    <p className="font-body text-center mx-3">Magenta Rejects (still in progress) is a blogging and e-commerce site built for an art collective. This was my first project built to a client specification, and with client feedback throughout the process. The design began with a mockup image that was given to me by the client which I translated into a <a href="https://www.figma.com/file/FV9SBmVQnQRatqQiDZRXnN/Magenta-Rejects?node-id=0%3A1">Figma project.</a> I decided to build the frontend with Gatsby.js and connected it to Contentful (a headless CMS) on the backend. Integrating the information from Contentful into the website required me to learn GraphQL, which turned out to be very useful and effective.</p>  
                </li>
                <li>
                    <h3 className="font-display text-center blue-underline text-xl mt-6"><a href="https://wayfarer-abjj.herokuapp.com/">Project Wayfarer</a></h3>
                    <p className="font-body italic text-center">Bootcamp Project</p>
                    <a href="https://github.com/captainahab68/wayfarer-front" className="text-highlightBlue font-bold font-body block text-center">Github</a>
                    <p className="font-body text-center mx-3">Project Wayfarer was a group project in which we had to work on 4-person teams to build a full stack MERN (MongoDB, Express, React, Node) application. The primary difficulty here was that none of us had worked on a team-based coding project before (everything had been solo or in pairs) and we struggled at first to manage both our workflow and the integrity of our codebase. After a few late night sessions and some Git wrangling, we managed to meet the requirements for the project, though we failed to reach any stretch goals.</p>  
                </li>
                <li>
                    <h3 className="font-display text-center text-xl mt-6">Tables</h3>
                    <p className="font-body italic text-center">Bootcamp Project</p>
                    <a href="https://github.com/captainahab68/tables" className="text-highlightBlue font-bold font-body block text-center">Github</a>
                    <p className="font-body text-center mx-3">Tables was a solo project in which I built a full-stack, full-CRUD Django (Python) application with a PostgreSQL backend. I chose to build a simple restaurant management app where users could build a menu, create tickets for those tables, and calculate bills with tax and suggested gratuity. Unfortunately, with Django not being a core competency of mine I haven't been able to get this application deployed. I am planning on rebuilding it as a React application soon.</p>  
                </li>
                <li>
                    <h3 className="font-display blue-underline text-center text-xl mt-6"><a href="https://alex-tom-app.herokuapp.com/">Alex and Tom's Art Blog</a></h3>
                    <p className="font-body italic text-center">Bootcamp Project</p>
                    <a href="https://github.com/captainahab68/art-blog" className="text-highlightBlue font-bold font-body block text-center">Github</a>
                    <p className="font-body text-center mx-3">Alex and Tom's Art Blog was a pair project I did with Tom Grey. I was already thinking about the project that would become Magenta Rejects at this point, so we decided to build this project as a test run, borrowing the design elements from the MR mockup I already had. ATAB was built as a MEN (MongoDB, Express, Node) application with a EJS templating frontend.</p>  
                </li>
           </ul>
           </div>
        </div>
    )
}
export default projects