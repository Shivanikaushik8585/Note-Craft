"use client"

import { useScrollTop } from "@/hooks/use-scroll"
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
export const Navbar=()=>{
   const scrolled = useScrollTop();
 return(
    <div className={ cn ("z-50 bg-background top-0 flex items-center fixed w-full p-6",scrolled && "border-b shadow-sm")}>
      <Logo/>
      
      <div className="md:ml-auto md:justify-end flex justify-between w-full items-center gap-x-2">
         Login
    </div>
    </div>

 )
}