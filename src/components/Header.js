import React, { Component } from 'react'
import {
    MeetingIcon,
    CompletedTaskIcon,
    MapsAndFlagsIcon,
    BellIcon,
    ExpandIcon,
    MailBoxIcon,
    NotificationEllipseIcon,
    DownArrowIcon
  } from '../assets/icons';
  
import UserImage from '../assets/images/user.png';


export default class Header extends Component {
    render() {
        return (
            
            <header className='h-[77px] w-full flex flex-row items-center justify-end pr-10 bg-white'>
                
                <div className='flex gap-3 mr-[54px]'>
                    <div className='flex gap-3 text-sm text-[#6C6C6C] '> <MeetingIcon className='w-[18px] h-[19px]'></MeetingIcon> <span className='text-[#232323]'>Meeting</span></div>
                    <div className='flex gap-3 text-sm'> <CompletedTaskIcon></CompletedTaskIcon> <span>Tasks</span></div>
                    <div className='flex gap-3 text-sm'> <MapsAndFlagsIcon></MapsAndFlagsIcon><span>Approvals</span></div>
                </div>

                <div className='flex justify-center items-center gap-9 mr-[68px]'>
                    <div className='flex justify-center items-center gap-5'> <ExpandIcon></ExpandIcon></div>
                    <div className='flex relative'>
                        <NotificationEllipseIcon className='absolute right-[-3px] -top-1'></NotificationEllipseIcon>
                        <MailBoxIcon></MailBoxIcon>
                    </div>
                    <div className='flex relative'>
                        <NotificationEllipseIcon className='absolute right-[-2px] -top-1'></NotificationEllipseIcon>
                        <BellIcon></BellIcon>
                    </div>
                </div>

                <div className='flex justify-center gap-2'>
                    <img src={UserImage} className='w-10 h-10' alt="User" />
                    <div className='flex flex-col'>
                        <div className='flex'>
                            <span className='text-sm font-medium text-[#232323]'>Jane Doe</span>
                            <DownArrowIcon className='ml-[30px] mt-2'></DownArrowIcon>
                        </div>
                        <span className='text-xs  text-[#6C6C6C]'>Admin</span>
                    </div>
                </div>
            </header>
        )
    }
}