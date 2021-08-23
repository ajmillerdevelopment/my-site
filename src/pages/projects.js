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
                    <h3 className="font-display text-center mt-6 text-xl">DC Jam Records</h3>
                    <p className="font-body italic text-center">Freelance Project</p>
                    <a href="https://dcjamrecords.com" className="text-highlightBlue font-bold font-body block text-center">Website</a>
                    <a href="https://github.com/ajmillerdevelopment/dc-jam" className="text-highlightBlue font-bold font-body block text-center">Github</a>
                    <p className="font-body text-center m-1">I was commissioned to create a new front-end for DC Jam Records (https://dcjamrecords.com/). The client had a pre-existing Wordpress site and I decided to keep WP in place as the back-end since he was already familiar with its interface. I started by creating mockups for mobile and desktop views on Figma (which you can view here and presenting those to the client who gave his feedback. Once we were happy with the look of the site, I began to develop using Gatsby.js and Tailwind CSS. This was my first full-scale project using Tailwind (I also used it for my personal site) and I really enjoyed the development experience that Tailwind provided. After a few days the basic views of the site were complete and I was ready to begin ingesting data into to the site via graphQL.</p>
                    <p className="font-body text-center m-1">This was where the problems began. I used Docker to create a local instance of the WP site (my first time working with Docker) and I had a lot of first-timer bugs and issues there. Things got worse when the time came to ingest the data from the live WP site, as I was having an extremely difficult time making the site's pre-existing custom post types visible in GraphQL. Ultimatley I had no choice but to simply re-create all the site's data manually to get all of the data to register which was frustrating.</p>    
                    <p className="font-body text-center m-1">For deployment, the current WP site was already deployed to cPanel. With the assistance of the current web host, I was able to deploy a static version of the site in the root public_html directory of cPanel. Since WP was installed in a subdirectory, /blog/, no extra configuration was needed in order to keep the WP site functioning as our backend. Eventually I would like to revisit this and redeploy the site as a node application with automatic builds after WP changes are detected as that would reduce overhead for me maintaining the site.</p>
                    <p className="font-body text-center m-1">This project was more difficult than I expected, but rewarding. This was my first time dealing with a real client with real-world specifications and that was extremely useful experience. I also gained significant hands-on experience with GraphQL, Wordpress, Docker, and cPanel.</p>    
                </li>
                <li>
                    <h3 className="font-display text-center mt-6 text-xl">This Website</h3>
                    <p className="font-body italic text-center">Personal Project</p>
                    <a href="https://github.com/ajmillerdevelopment/my-site" className="text-highlightBlue font-bold font-body block text-center">Github</a>
                    <p className="font-body text-center mx-3">This website is built with Gatsby.js, a React framework for building and hosting static websites. It is styled with Tailwind CSS (my first Tailwind project). It was also built with a mobile-first approach, also a first for me. The design is my own, inspired by 19th-century advertisments and handbills.</p>    
                </li>
                <li>
                    <h3 className="font-display text-center blue-underline text-xl mt-6"><a href="https://wayfarer-abjj.herokuapp.com/">Project Wayfarer</a></h3>
                    <p className="font-body italic text-center">Bootcamp Project</p>
                    <a href="https://github.com/ajmillerdevelopment/wayfarer-front" className="text-highlightBlue font-bold font-body block text-center">Github</a>
                    <p className="font-body text-center mx-3">Project Wayfarer was a group project in which we had to work on 4-person teams to build a full stack MERN (MongoDB, Express, React, Node) application. The primary difficulty here was that none of us had worked on a team-based coding project before (everything had been solo or in pairs) and we struggled at first to manage both our workflow and the integrity of our codebase. After a few late night sessions and some Git wrangling, we managed to meet the requirements for the project, though we failed to reach any stretch goals.</p>  
                </li>
                <li>
                    <h3 className="font-display text-center text-xl mt-6">Tables</h3>
                    <p className="font-body italic text-center">Bootcamp Project</p>
                    <a href="https://github.com/ajmillerdevelopment/tables" className="text-highlightBlue font-bold font-body block text-center">Github</a>
                    <p className="font-body text-center mx-3">Tables was a solo project in which I built a full-stack, full-CRUD Django (Python) application with a PostgreSQL backend. I chose to build a simple restaurant management app where users could build a menu, create tickets for those tables, and calculate bills with tax and suggested gratuity. Unfortunately, with Django not being a core competency of mine I haven't been able to get this application deployed. I am planning on rebuilding it as a React application soon.</p>  
                </li>
                <li>
                    <h3 className="font-display blue-underline text-center text-xl mt-6"><a href="https://alex-tom-app.herokuapp.com/">Alex and Tom's Art Blog</a></h3>
                    <p className="font-body italic text-center">Bootcamp Project</p>
                    <a href="https://github.com/ajmillerdevelopment/art-blog" className="text-highlightBlue font-bold font-body block text-center">Github</a>
                    <p className="font-body text-center mx-3">Alex and Tom's Art Blog was a pair project I did with Tom Grey. I was already thinking about the project that would become Magenta Rejects at this point, so we decided to build this project as a test run, borrowing the design elements from the MR mockup I already had. ATAB was built as a MEN (MongoDB, Express, Node) application with a EJS templating frontend.</p>  
                </li>
           </ul>
           </div>
        </div>
    )
}
export default projects