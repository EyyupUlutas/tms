import React, { Component } from 'react'
import {
    DashboardFilledIcon,
    DownArrowIcon,
  } from '../assets/icons';
export default class DashboardHeader extends Component {
  render() {
    return (
        <div className="flex justify-between mt-8 pl-12 pr-9">
        <div className="flex items-center justify-center gap-4">
          <DashboardFilledIcon></DashboardFilledIcon>
          <span className="text-base font-semibold text-[#707895]">Dashboard</span>
        </div>
        <div className="flex items-center justify-center gap-6 bg-white w-[137px] h-[40px] rounded-lg">
          <span className="text-sm font-normal text-[#232323]">Monthly</span>
          <DownArrowIcon className="text-[#232323]"></DownArrowIcon>
        </div>
      </div>
    )
  }
}
