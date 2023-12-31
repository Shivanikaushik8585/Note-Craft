import Image  from 'next/image';
import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';
const font =Poppins({
    subsets:["latin"],
    weight:["400","500"]
});
export const Logo= () =>{
    return(
        <div className=' hidden md:flex items-center gap-x-2'>
            <Image  height="40" width="40" src="/logoN.png" alt='Logo'/>
         <p className={cn("font-bold",font.className)}>NoteCraft</p>
        </div>

    )
}