import {
    BellIcon,
    HashtagIcon,
    BookmarkIcon,
    CollectionIcon,
    DotsCircleHorizontalIcon,
    MailIcon,
    UserIcon,
    HomeIcon,
} from '@heroicons/react/outline'
import Link from 'next/link'

const Sidebar = () => {
    return (
        <div className='items-center md:items-start'>
            <div className="flex items-center cursor-pointer max-w-fit space-x-2 rounded-full px-4 py-3 hover:bg-gray-100 transition-all duration-200">
                <HomeIcon className='h-6 w-6' />
                <p className="hidden md:inline-flex group-hover:text-blue-300">企業概要</p>
            </div>
            <Link href="/invester_entrepreneur/stock/japan/[id]/stock">
            <div className="flex items-center cursor-pointer max-w-fit space-x-2 rounded-full px-4 py-3 hover:bg-gray-100 transition-all duration-200">
                <HashtagIcon className='h-6 w-6' />
                <p className="hidden md:inline-flex ggroup-hover:text-blue-300">株価</p>
            </div>
            </Link>
            <Link href="/invester_entrepreneur/stock/japan/[id]/financial">
                <div className="flex items-center cursor-pointer max-w-fit space-x-2 rounded-full px-4 py-3 hover:bg-gray-100 transition-all duration-200">
                    <BellIcon className='h-6 w-6' />
                    <p className="hidden md:inline-flex group-hover:text-blue-300">業績</p>
                </div>
            </Link>
            <div className="flex items-center cursor-pointer max-w-fit space-x-2 rounded-full px-4 py-3 hover:bg-gray-100 transition-all duration-200">
                <MailIcon className='h-6 w-6' />
                <p className="hidden md:inline-flex group-hover:text-blue-300"></p>
            </div>
        </div>
    )
}

export default Sidebar