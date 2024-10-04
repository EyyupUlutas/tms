import React, { Component } from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {
    UpArrowIcon,
    UpArrowThinIcon
} from '../assets/icons';
ChartJS.register(ArcElement, Tooltip, Legend);

export default class DivisionStats extends Component {

    render() {
        const data = {
            labels: [
                'Red',
                'Blue',
                'Yellow'
            ],
            datasets: [{
                label: 'My First Dataset',
                data: [23, 12, 4],
                backgroundColor: [
                    '#3AA345',
                    '#DDB834',
                    '#42AEEB',
                ],
                hoverOffset: 4
            }]
        };

        const options = {
            cutout: '80%',
            rotation: -120,
            borderWidth: 0,
            spacing: 2,
            plugins: {

                tooltip: { enabled: false },
                legend: { display: false },
            },
        };
        return (
            <div className="flex flex-col  w-[315px] h-[703px] px-8 rounded-[26px] bg-gradient-to-b from-[#00A8E1] to-[#572AD8]">

                <span className="font-gilroy text-center font-semibold text-lg text-white mt-[46px]">DIVISIONS</span>

                <div className="flex flex-row justify-center mt-[17px]">
                    <span className="flex justify-center items-center w-[90px] h-[31px] font-gilroy font-medium text-[15px] text-white bg-[#00000040] rounded-[50px]">Metals</span>
                    <span className="flex justify-center items-center w-[90px] h-[31px] font-gilroy font-medium text-[15px] text-white  ">Minerals</span>

                </div>


                <div className="flex justify-center">
                    <div className="flex  w-[227px] h-[227px] relative mt-[35px]">
                        <div className="w-[180px] h-[180px] bg-[#2A2658] rounded-full flex flex-col justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <span className="font-gilroy text-[15px] font-medium text-white">COAL</span>
                            <div className="flex flex-row items-center gap-x-1">
                                <span className="font-gilroy text-[18px] text-[#B8B5D0]">$</span>
                                <span className="font-gilroy text-xl text-white">2,303.72</span>
                                <span className="bg-[#12948C] p-1 rounded-[3px]"><UpArrowIcon></UpArrowIcon></span>
                            </div>

                        </div>
                        <Doughnut data={data} options={options} />
                    </div>
                </div>


                <div className="flex w-full  mt-[31px]">
                    <div className="flex w-full border-b-2 border-[#B1B8C863] gap-x-[23px]">
                        <span className="font-gilroy font-semibold text-[15px] underline underline-offset-[6px] text-white">Amount</span>
                        <span className="font-gilroy font-semibold text-[15px] text-[#C3C9D6]">Volume</span>
                    </div>
                </div>


                <div className="flex flex-col gap-y-6  mt-[25px]">
                    <div className="flex flex-row gap-1">
                        <div className="mt-1 w-[14px] h-[14px] rounded-full bg-[#3AA345]"></div>
                        <div className="flex flex-col ml-2">
                            <span className="font-gilroy font-medium text-[15px] text-white">Coal</span>
                            <div className="flex flex-row justify-center items-center">
                                <span className="font-gilroy text-[18px] text-[#B8B5D0] pr-0.5">$</span>
                                <span className="font-gilroy text-lg text-white">2,303.72</span>
                                <div className="w-[50px] h-[21px] flex items-center justify-center bg-[#12948C] rounded-[3px] ml-1">
                                    <span className="font-gilroy font-semibold text-xs text-white">10.3%</span>
                                    <UpArrowThinIcon className="ml-1 w-2 h-2"></UpArrowThinIcon>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-row gap-1">
                        <div className="mt-1 w-[14px] h-[14px] rounded-full bg-[#DDB834]"></div>
                        <div className="flex flex-col ml-2">
                            <span className="font-gilroy font-medium text-[15px] text-white">Aluminium</span>
                            <div className="flex flex-row justify-center items-center">
                                <span className="font-gilroy text-[18px] text-[#B8B5D0] pr-0.5">$</span>
                                <span className="font-gilroy text-lg text-white">1,242.82</span>
                                <div className="w-[50px] h-[21px] flex items-center justify-center bg-[#FC5980] rounded-[3px] ml-1">
                                    <span className="font-gilroy font-semibold text-xs text-white">11.5%</span>
                                    <UpArrowThinIcon className="rotate-180 ml-1 w-2 h-2"></UpArrowThinIcon>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row gap-1">
                        <div className="mt-1 w-[14px] h-[14px] rounded-full bg-[#42AEEB]"></div>
                        <div className="flex flex-col ml-2">
                            <span className="font-gilroy font-medium text-[15px] text-white">Iron Ore</span>
                            <div className="flex flex-row justify-center items-center">
                                <span className="font-gilroy text-[18px] text-[#B8B5D0] pr-0.5">$</span>
                                <span className="font-gilroy text-lg text-white">398.53</span>
                                <div className="w-[50px] h-[21px] flex items-center justify-center bg-[#FC5980] rounded-[3px] ml-1">
                                    <span className="font-gilroy font-semibold text-xs text-white">8.9%</span>
                                    <UpArrowThinIcon className="rotate-180 ml-1 w-2 h-2"></UpArrowThinIcon>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}
