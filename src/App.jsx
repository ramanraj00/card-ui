import { useEffect } from "react";
import { animateWaves } from "./g.js";



   function App() {
  useEffect(() => {
    animateWaves();
  }, []);
return (

    <div className="relative overflow-hidden    h-screen flex items-center justify-center min-h-screen bg-gradient-to-b from-[#041027] to-[#122548] ">


 <svg
  className="absolute bottom-0 left-1/2 -translate-x-1/2 z-0 "
  width="900"
  height="500"
  viewBox="0 0 900 500"
  fill="none"
>
  <defs>
   <linearGradient id="strokeGrad" x1="0" y1="0" x2="0" y2="1">
  <stop offset="0%" stopColor="#4E5F9E" />
  <stop offset="55%" stopColor="#7F95E6" />
  <stop offset="78%" stopColor="#B9C8FF" />
  <stop offset="100%" stopColor="#DCE6FF" />
</linearGradient>


<linearGradient id="glowMaskGrad" x1="0" y1="0" x2="0" y2="1">
  <stop offset="0%" stopColor="#000000" />
  <stop offset="65%" stopColor="#030617" />
  <stop offset="85%" stopColor="#14245A" />
  <stop offset="100%" stopColor="#4F66FF" />
</linearGradient>



    <mask id="bottomGlowMask">
      <rect width="900" height="500" fill="url(#glowMaskGrad)" />
    </mask>


    <filter id="upperGlow">
      <feGaussianBlur stdDeviation="6" />
    </filter>
    

    <filter id="heavyGlow">
      <feGaussianBlur stdDeviation="1" />
    </filter>
  </defs>


  <path
    d="M 100 600 C 200 110, 700 110, 800 550"
    stroke="black"
    strokeWidth="8"
    stroke-linecap="round"
   
    opacity="1"
    filter="url(#upperGlow)"
    fill="none"
    
  />

  <path
    d="M 100 600 C 200 110, 700 110, 800 550"
    stroke="#5A70B3"
    strokeWidth="45"
    stroke-linecap="round"
    opacity="1"
    filter="url(#heavyGlow)"
    mask="url(#bottomGlowMask)"
    fill="black"
  />

<path
  d="M 100 600 C 200 110, 700 110, 800 550"
  stroke="#5A70B3"
  stroke-width="1"
  stroke-linecap="round"
  filter="url(#upperGlow)"
  fill="none"
/>

  <path
    d="M 100 600 C 200 110, 700 110, 800 550"
    stroke="#9BB1FF"
    strokeWidth="25"
    stroke-linecap="round"
    opacity="1"
    filter="url(#heavyGlow)"
    mask="url(#bottomGlowMask)"
    fill="none"
  />


  <path
    d="M 100 600 C 200 110, 700 110, 800 550"
    stroke=""
    strokeWidth="1"
    stroke-linecap="round"
    opacity="1"
    fill="none"
  />
</svg>

      <div>
      <div className="relative z-10  opacity-100 p-5 text-2xl font-light text-gray-600  w-[23rem] h-[31rem] pt-14  rounded-4xl bg-white/10 backdrop-blur-[2px]
                    border boder-white/10
                    before:content-[' '] 
                    before:absolute
                    before:insert-0
                    before:border
                    before:border-blue/10  ">
  
      <p className="text-gray-400">Hey, GBT, I need your help on</p>
      <p className="text-gray-400">one of my new project </p>
      <p className="text-gray-400">thats about the {" "}
        <span className="text-gray-100 font-normal ">organizing
           <span className="ml-1.5 text-xs leading-none align-middle">●</span>
           <span  style={{ fontSize: "8px" }}  className="ml-0.5 text-xs scale-75 leading-none align-middle text-gray-300">●</span>
            <span  style={{ fontSize: "4px" }}  className="ml-0.5 text-xs scale-75 leading-none align-middle text-gray-500">●</span>
        </span>

        <div  className="flex justify-center pt-66">
          <p className="border w-13 h-13 border-gray-400 rounded-full bg-white">


  <svg
  className="absolute inset-0 w-full h-full pointer-events-none "
  xmlns="http://www.w3.org/2000/svg"
>
  <defs>
 
    <pattern
      id="dots"
      width="20"
      height="20"
      patternUnits="userSpaceOnUse"
    
    >
      <circle cx="2" cy="2" r="1.2" fill="#93c5fd" />
    </pattern>

    <linearGradient id="fadeMask" x1="0" y1="0" x2="0" y2="1.9">
      <stop offset="0%" stop-color="black" />
      <stop offset="25%" stop-color="black" />
      <stop offset="55%" stop-color="white" />
      <stop offset="100%" stop-color="white" />
    </linearGradient>

    <mask id="middleMask">
      <rect width="100%" height="100%" fill="url(#fadeMask)" />
    </mask>
  </defs>


  <rect
    width="100%"
    height="100%"
    fill="url(#dots)"
    mask="url(#middleMask)"
    opacity="0.20"
    
  />
</svg>




<svg
  id="waveArea"  
  viewBox="0 -10 1460 320"
  className="absolute top-1/2 left-0 w-full -translate-y-1/2"
  fill="none"
>

  <path
    id="wave1"
    d="
      M 0 160
      C 220 -10, 460 330, 720 160
      C 980 -10, 1220 330, 1440 160
    "
    stroke="rgba(255,255,255,0.95)"
    strokeWidth="7"
    strokeLinecap="round"
    fill="url(#dots)"
  />


  <path
    id="wave3"
    d="
      M 16 165
      C 220 340, 500 -0, 720 165
      C 940 340, 1180 -40, 1440 165
    "
    stroke="rgba(96,165,250,0.65)"
    strokeWidth="7"
    strokeLinecap="round"
    fill="url(#dots)"
  />

  <path
    id="string"   
    d="M 0 160 L 1440 160"
    stroke="rgba(255,255,255,0.6)"
    strokeWidth="1.5"
    strokeLinecap="round"
    fill="none"
  />
</svg>
            <div className="flex justify-center items-center mt-3.5 ">
              <img className="h-2/4 w-2/4  " src="/mic.png" alt="mic" />
            </div>
          </p>
        </div>
      </p>
      </div>
      </div>
      </div>

      
  )
}

 

  
  
export default App
