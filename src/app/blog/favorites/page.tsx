import Breadcrumb from '@/components/ui/blogComponent/Breadcrumb'
import MagazineGrid from '@/components/ui/blogComponent/MagazineGrid'
import React from 'react'

// //! TODO develope favorites section 
function Favorites() {
    return (
        <div className=' p-6 max-w-7xl mx-auto'>
            <h2 className='text text-3xl text-[#121213] font-bold text-center mt-6'>مجله نکست اسکیل</h2>
            <Breadcrumb />
            <MagazineGrid />
        </div>
    )
}

export default Favorites