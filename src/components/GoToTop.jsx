// import { useState, useEffect } from "react"
// import { ChevronsUp } from "lucide-react";

// export default function GoToTop() {
//     const [isVisible, setIsVisible] = useState(false)

//     useEffect(() => {
//         const toggleVisibility = () => {
//             setIsVisible(window.pageYOffset > 300)
//         }

//         window.addEventListener("scroll", toggleVisibility)
//         return () => window.removeEventListener("scroll", toggleVisibility)
//     }, [])

//     const scrollToTop = () => {
//         window.scrollTo({ top: 0, behavior: "smooth" })
//     }

//     return (
//         <>
//             {isVisible && (
//                 <button
//                     onClick={scrollToTop}
//                     className="fixed bottom-9 right-11 z-50 h-11 w-11 flex flex-col items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl bg-[#0959a2] hover:bg-[#d24950]"
//                     aria-label="Scroll to top"
//                 >
//                     <ChevronsUp className="h-6 w-6" />
//                 </button>

//             )}
//         </>
//     )
// }


// import { useState, useEffect } from "react"
// import { ChevronsUp } from "lucide-react";

// export default function GoToTop() {
//     const [isVisible, setIsVisible] = useState(false)

//     useEffect(() => {
//         const toggleVisibility = () => {
//             setIsVisible(window.pageYOffset > 300)
//         }

//         window.addEventListener("scroll", toggleVisibility)
//         return () => window.removeEventListener("scroll", toggleVisibility)
//     }, [])

//     const scrollToTop = () => {
//         window.scrollTo({ top: 0, behavior: "smooth" })
//     }

//     return (
//         <div>
//             <button
//                 onClick={scrollToTop}
//                 aria-label="Scroll to top"
//                 className={`fixed bottom-9 right-11 z-50 h-11 w-11 flex flex-col items-center justify-center rounded-full text-white shadow-lg transition-all duration-500 ease-in-out hover:shadow-xl bg-[#0959a2] hover:bg-[#d24950]
//                     ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5 pointer-events-none"}
//                 `}
//             >
//                 <ChevronsUp className="h-6 w-6" />
//             </button>
//         </div>
//     )
// }

import { useState, useEffect } from "react"
import { ChevronsUp } from "lucide-react"

export default function GoToTop() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300)
        }

        window.addEventListener("scroll", toggleVisibility)
        return () => window.removeEventListener("scroll", toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <div>
            <button
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className={`
                    fixed bottom-9 right-11 z-50 h-11 w-11 flex items-center justify-center
                    rounded-full text-white shadow-lg bg-[#0959a2]
                    hover:bg-[#d24950] hover:shadow-xl
                    transition-all duration-500 ease-in-out
                    transform
                    ${isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-40 pointer-events-none"
                    }
                `}
            >
                <ChevronsUp className="h-6 w-6" />
            </button>
        </div>
    )
}
