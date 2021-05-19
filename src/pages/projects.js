import React from 'react'
import Header from '../comps/Header'
const projects = () => {
    return(
        <div className="w-screen flex flex-col items-center min-h-screen bg-backgroundGrey">
           <Header/>
           <h2 className="font-display text-center text-4xl mt-3 blue-underline">Projects</h2>
           <ul>
               <h3 className="font-display text-center text-xl mt-3">Magenta Rejects</h3>
               <p className="font-body text-center">https://example.com</p>
               <p className="font-body text-center mt-2">Magenta Rejects is an art collective...</p>
           </ul>
        </div>
    )
}
export default projects