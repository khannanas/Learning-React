// import React from "react"

// const page = ()=>{
//     return (
//         <div>Hello Baccha Log</div>
//     )
// }

// export default page



// import React from "react"

// function page(){
//     return "Hello"
// }

// // export mtlb isko dusri file mai bhejna hai ,default karke kara to specific name nhi dena padega.

// export default page


// Jsx: ✅
/* Jsx help or allow us to write html code in javascript.
ye jo curly brackets mai value daala hai ye html mai nhi karsakte hai ye hota hai jsx i.e javascript + html */

// import React from 'react'

// const page = () => {
// const groom ="Salmon Bhoi"
// const bride ="Kat"

//   return (
//     <div>{groom} weds {bride}</div>
//   )
// }

// export default page

// Real Dom and Virtual Dom ✅
// import React from 'react'

// const page = () => {
//     let marks = 99
//     function changemarks (){
//         // console.log(marks);
//         marks=95;
//         // console.log(marks);
//     }
//     return (
//         // ek return mai ek hi chiz pass karsakte hai isliye hum empty tags use karte hai which works as a wrapper
//         <>
//             <h1>My Name is Anas and</h1>
//             <div>My Marks are {marks}</div>
//             {/* Ye dega error direct button mai function nhi likhsakte */}
//             {/* <button onClick={()=>{
//                 marks=95
//             }}>Update</button> */}
//             {/* ye kuch nhi chalega jab tak react ko nhi batayenge to isliye use client upar daalna padhta hai jisse variable banta hai react mai direct variable nhi banta hai aur ye sab sirf console mai dikhega div mai marks show hoke nhi aayega */}
//             <button onClick={changemarks()}>Update</button>
//         </>
//     )
// }

// export default page

// "use client"
// import React,{useState} from 'react'

// const page = () => {
//     // creating variable
//     // pehla variable hai dusra hai fucntion jo variable update karne k kaam aata hai
//     const [marks,setMarks]=useState(99)
//   return (
//     <>
//     <div>My name is Anas</div>
//     <h1>My marks were {marks}</h1>
//     <button onClick={()=>{
//         setMarks(100)
//     }}>Update</button>
//       </>
//   )
// }

// export default page

// Components✅

/*
Layout.js page.js ka mai baap hai
Page .js mai sab nhi likh sakte hai isliye hum components banate hai jisme alag alag chiz ka codes likha hota hai.
iske liye folder structure aana chahiye.
Hum components ka folder banayenge jisme components ka naam hamesha capital se start hoga */

// "use client"
// import React,{useState} from 'react'
// import Header from '@/Components/Header'

// const page = () => {
//   // creating a variable
//   const [user, setuser] = useState("Anas")
//   const [income, setincom] = useState(321234)
//   return (
//     <>
//     <Header user={user} income={income}/>
//     <div>Ye hai apne page ka file</div>
//       {/* <div>{user}</div> isko header mai pass karna hai to idher user= users banaya aur heder ki file mai props use karenge */}
//     </>
//   )
// }

// export default page


// Routing ✅
/* 
Apps mai jaake folder bana na hai sab links k liye
*/

// import React from 'react'
// import Link from 'next/link'

// const page = () => {
//   return (
//     <>
//       {/* ye teeno k page banayenge apps mai jaake sabke naam ka apna apna folder hoga usme fir hum page.js banayenge sabke apne apne naam ki*/}
//       {/* <a href='/About'>About</a>
//     <a href='/Product'>Product</a>
//     <a href='/Course'>Course</a> */}
//       {/* Lekin isme bhi reload to hori hai to iske liye a tag ka use nhi karna hai link import karna hai and a k badle link tag use karna hai */}
//       <Link href='/About'>About</Link>
//       <Link href='/Product'>Product</Link>
//       <Link href='/Course'>Course</Link>
//       {/* Ye mostly header mai likhte hai aur import karna hota hai layout.js mai to usse saare page mai aajayega */}

//     </>

//   )
// }

// export default page


// How to call Api using fetch or axios ✅

// import React from 'react'

// const page = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default page



// Two way binding in react ✅
/*
Jo bhi change karenge react k through karenge aur dom mai bhi change hoga aur humko bhi change hote hue dikhega
 */
// "use client"
// import React, { useState } from 'react'

// const page = () => {
//     const [username, setusername] = useState("")
//   return (
//     <>
//         <form>
//             <h2>Enter your name</h2>
//             <input type="text" value={username}
//             onChange={(e)=>{
//                 setusername(e.target.value)
//                 // console.log(username);
//             }}>
//             </input>
//         </form>
//     </>
//   )
// }

// export default page



// Routing,Dyanamic Routing ✅
/*
About waale page mai bhi layout.js bana sakte hai.

*/
import React from 'react'

const page = () => {
    return (
        <>
            <a href='/About'>About</a>
        </>
    )
}

export default page