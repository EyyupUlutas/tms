import React, { Component } from 'react'
import User3 from '../assets/images/user-3.png';
import User4 from '../assets/images/user-4.png';


export default class NotificationsList extends Component {
  render() {
    return (
        <div className="w-[697px] h-[328px] mt-7 rounded-[28px] bg-white">
        <div className="flex justify-between py-[20px] px-[28px] rounded-t-[28px] bg-[#F9F9FF]">
          <span className="font-gilroy text-xl font-medium text-[#69789F]">Notifications</span>
          <div className="flex items-center justify-center">
            <span className="text-sm font-medium text-[#2C67FF] underline underline-offset-8">View  All</span>
          </div>
        </div>



        <div className="flex flex-1 mx-9 py-4 border-b-2" >
          <div className="flex justify-center w-[55px] h-[50px] pt-2 rounded-full overflow-hidden  bg-[#E2E7FF]">
            <img src={User3} className="w-[45px] h-[45px] object-contain" alt='User3.1'/>
          </div>
          <div className="flex flex-col w-full ml-2">
            <span className="text-sm font-medium text-[#66687D]"><b className="text-[#243448]">Aneesh thomas</b> has updated<b className="text-[#243448]"> Freight charges</b></span>
            <div className="flex flex-row justify-between items-center">
              <span className="text-[10px] font-semibold text-[#05172E] py-1.5 px-2 leading-4 rounded-md bg-[#E2E7FF]">TR-22-00001</span>
              <span className="text-[10px] font-normal text-[#66687D]">3h ago</span>
            </div>
          </div>
        </div>
        <div className="flex flex-1 mx-9 py-4 border-b-2 " >
          <div className="flex justify-center w-[55px] h-[50px] pt-2 rounded-full overflow-hidden  bg-[#E2E7FF]">
            <img src={User4} className="w-[45px] h-[45px] object-contain" alt='User4' />
          </div>
          <div className="flex flex-col w-full ml-2">
            <span className="text-sm font-medium text-[#66687D]"><b className="text-[#243448]">Nita Chakravarty</b> has updated<b className="text-[#243448]"> Freight</b></span>
            <div className="flex flex-row justify-between items-center">
              <span className="text-[10px] font-semibold text-[#05172E] py-1.5 px-2 leading-4 rounded-md bg-[#E2E7FF]">TR-22-00001</span>
              <span className="text-[10px] font-normal text-[#66687D]">3h ago</span>
            </div>
          </div>
        </div>
        <div className="flex flex-1 mx-9 py-4" >
          <div className="flex justify-center w-[55px] h-[50px] pt-2 rounded-full overflow-hidden">
            <img src={User3} className="w-[45px] h-[45px] object-contain" alt='User3'/>
          </div>
          <div className="flex flex-col w-full ml-2">
            <span className="text-sm font-medium text-[#66687D]"><b className="text-[#243448]">Aneesh thomas</b> has updated<b className="text-[#243448]"> Freight</b></span>
            <div className="flex flex-row justify-between items-center">
              <span className="text-[10px] font-semibold text-[#05172E] py-1.5 px-2 leading-4 rounded-md bg-[#E2E7FF]">TR-22-00001</span>
              <span className="text-[10px] font-normal text-[#66687D]">3h ago</span>
            </div>
          </div>
        </div>


      </div>
    )
  }
}
