import { FaList, FaCartPlus, FaEnvelopeOpen} from "react-icons/fa"
import { AiOutlineClose ,AiFillHome} from 'react-icons/ai'
import { IoIosPaper, IoMdPeople, IoMdHelpCircle}  from 'react-icons/io'

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiFillHome/>,
        class: 'navtext'
    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <IoIosPaper/>,
        class: 'navtext'
    },
    {
        title: 'Products',
        path: '/products',
        icon: <FaCartPlus/>,
        class: 'navtext'
    },
    {
        title: 'Team',
        path: '/team',
        icon: <IoMdPeople/>,
        class: 'navtext'
    },
    {
        title: 'Message',
        path: '/message',
        icon: <FaEnvelopeOpen/>,
        class: 'navtext'
    },
    {
        title: 'Support',
        path: '/support',
        icon: <IoMdHelpCircle/>,
        class: 'navtext'
    },
]