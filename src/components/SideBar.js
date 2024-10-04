import React, { Component } from 'react'
import Logo from '../assets/images/logo.png';
import {
  DownArrowIcon,
  DashboardIcon,
  CustomerQuestionIcon,
  BusinessManIcon,
  ProductsIcon,
  TradesIcon,
  SalesIcon,
  CheckListIcon,
  ShipIcon
} from '../assets/icons';
export default class SideBar extends Component {
    render() {
        return (
            <div className="flex flex-col items-center  w-[90px] bg-white shadow-[inset_-1px_-23px_0_0_#F6F6F6]">
                <div className="relative w-full flex flex-col items-center">
                    <img src={Logo} className="w-10 h-10 mt-6" alt="Logo" />
                    <span className="bg-white  absolute p-1 w-10 h-10 -right-5 top-6 rounded-full flex justify-center items-center shadow-[2px_4px_15px_0_rgba(0,0,0,0.1)]">
                        <DownArrowIcon className="w-4 h-4 -rotate-90 text-[#2C67FF]" />
                    </span>
                </div>

                <ul className="flex flex-col items-center mt-[72px] gap-5">
                    <li className="p-4 rounded-md bg-[#E2E7FF]">
                        <DashboardIcon></DashboardIcon>
                    </li>
                    <li className="p-4"><CustomerQuestionIcon></CustomerQuestionIcon></li>
                    <li className="p-4"><BusinessManIcon></BusinessManIcon></li>
                    <li className="p-4"><ProductsIcon></ProductsIcon></li>
                    <li className="p-4"><TradesIcon></TradesIcon></li>
                    <li className="p-4"><SalesIcon></SalesIcon></li>
                    <li className="p-4"><CheckListIcon></CheckListIcon></li>
                    <li className="p-4"><ShipIcon></ShipIcon></li>
                </ul>
            </div>
        )
    }
}
