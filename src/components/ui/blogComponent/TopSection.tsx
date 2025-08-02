import React from 'react'
import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'



function TopSection({ title, desc, BtnTitle }: { title: string, desc?: string, BtnTitle?: string }) {
    return (
        <div className='mt-5 flex justify-between items-start'>
            <div className="text-center sm:text-right">
                <h2 className='text text-xl text-[#121213] font-bold '>{title}</h2>
                <h3 className='text-[#525253] text-lg mt-2'>{desc}</h3>
            </div>
            {BtnTitle && <Button variant="outline" className='m-3 text-xs text-[#121213]'> {BtnTitle} <ArrowLeft /></Button>}
        </div>
    )
}

export default TopSection