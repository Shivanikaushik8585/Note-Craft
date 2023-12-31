"use client"

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading  = () => {
    return ( 
     <div className="max-w-3xl space-y-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl  ">
            Your Ideas,Document, & plans, Unified. Welcome to <span className="underline">NoteCraft</span>
        </h1>
        <h3 className="text-base sm:text-xl md:text-2xl, font-medium ">NoteCraft is the connected workspace where <br />  better,faster work happens.</h3>
      <Button > Enter NoteCraft

      <ArrowRight className="h-4 w-4 ml-3"/>
      </Button>
     </div>
     );
}
 
