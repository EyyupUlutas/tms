import React, { Component } from 'react'
import User2 from '../assets/images/user-2.png';
import DashboardBubbleCard from "../components/DashboardBubbleCard";

import {
    TradesFilledIcon
} from '../assets/icons';

export default class UserGreeting extends Component {
    render() {
        return (
          


                <div className="w-[698px] h-[363px] rounded-[28px] bg-gradient-to-b from-[#FFFFFF] from-50% to-[#01f6c94d]">
                    <div className="flex flex-col pl-10 pt-10">

                        <div className="flex flex-row">
                            <div className="flex justify-center w-[60px] h-[60px] pt-2 rounded-full overflow-hidden bg-[#FFCE22]">
                                <img src={User2} className="w-[50px] h-[65px]" alt="User2" />
                            </div>

                            <div className="flex flex-col justify-center pl-3">
                                <span className="font-gilroy font-medium text-base text-[#9FADC7]">Good morning,</span>
                                <span className="font-gilroy font-semibold text-xl text-[#69789F]">Vishwanath</span>
                            </div>
                        </div>

                        <div className="flex flex-row gap-x-[11px] mt-[30px]">
                            <DashboardBubbleCard
                                width="200px"
                                height="185px"
                                IconComponent={TradesFilledIcon}
                                number="12"
                                status="NEW REQUIREMENTS"
                            />

                            <DashboardBubbleCard
                                width="200px"
                                height="185px"
                                IconComponent={TradesFilledIcon}
                                number="02"
                                status="INITIATED"
                            />

                            <DashboardBubbleCard
                                width="200px"
                                height="185px"
                                IconComponent={TradesFilledIcon}
                                number="03"
                                status="Upcoming"
                            />
                        </div>
                    </div>
                </div>
        )
    }
}
