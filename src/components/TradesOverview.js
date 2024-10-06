import React, { Component } from 'react'
import {
    UpArrowThinIcon,
    TradesFilledIcon,
    SupplyChainIcon,
    CalenderIcon
} from '../assets/icons';
import DashboardBubbleCard from './DashboardBubbleCard';
import axios from 'axios';


export default class TradesOverview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalTrades: 0,
            tradeStagesCount: {
                "Contract stage": 0,
                "Pre Shipment": 0,
                "Post Fixtures Vessel": 0,
                "In-Transit": 0,
                "Pre Closure": 0,
            },
            estimatedCost: {
                "Contract stage": 0,
                "Pre Shipment": 0,
                "Post Fixtures Vessel": 0,
                "In-Transit": 0,
                "Pre Closure": 0,
            }
        };
    }

    async componentDidMount() {
        try {
            const response = await axios.get('/api/trans');
            const trades = response.data;

            // Toplam ticaret sayısını hesapla
            const totalTrades = trades.length;

            // Ticaret aşamalarının sayısını ve tahmini maliyetlerini hesapla
            const tradeStagesCount = {
                "Contract stage": 0,
                "Pre Shipment": 0,
                "Post Fixtures Vessel": 0,
                "In-Transit": 0,
                "Pre Closure": 0,
            };

            const estimatedCost = {
                "Contract stage": 0,
                "Pre Shipment": 0,
                "Post Fixtures Vessel": 0,
                "In-Transit": 0,
                "Pre Closure": 0,
            };

            // Her bir ticaret kaydını incele
            trades.forEach(trade => {
                // Ticaret aşamasını say
                if (tradeStagesCount[trade.tradeStage] !== undefined) {
                    tradeStagesCount[trade.tradeStage]++;
                    // Tahmini maliyeti al
                    const estimatedCostStage = trade.processStage.find(stage => stage.stageName === "Estimated cost sheet");
                    if (estimatedCostStage) {
                        estimatedCost[trade.tradeStage] += parseFloat(estimatedCostStage.cost);
                    }
                }
            });
            
            this.setState({ totalTrades, tradeStagesCount, estimatedCost });
            
        } catch (error) {
            console.error('Error:', error);
        }
    }

    render() {
        return (
            <div className="flex flex-col mt-8 pl-12 pr-9 mb-14">
                <span className=" font-gilroy font-medium text-[22px] tracking-widest mb-4 text-[#69789F]">TRADES OVERVIEW</span>

                <div className="h-[363px] rounded-[28px] bg-gradient-to-b from-[#FFFFFF] from-50% to-[#01F6CA70]">
                    <div className="flex flex-col pr-10 pl-10 pt-10">

                        <div className="flex flex-row justify-between">
                            <div className="flex flex-col justify-center">
                                <span className="font-gilroy font-semibold text-xs text-[#9FADC7]">TOTAL TRADES</span>
                                <span className="font-gilroy text-5xl text-[#383874]">{this.state.totalTrades}</span>
                            </div>

                            <div className="flex flex-col justify-center">
                                <span className="font-gilroy font-semibold text-xs text-[#9FADC7]">TOTAL REVENUE OF TRADES</span>
                                <div className="flex flex-row justify-center items-center">
                                    <span className="font-gilroy text-[41px] text-[#69789F] pr-0.5">$</span>
                                    <span className="font-gilroy text-5xl text-[#383874]">3,945.07</span>
                                    <div className="w-[82px] h-[32px] flex items-center justify-center bg-[#12948C] rounded-[5px] ml-1">
                                        <span className="font-gilroy font-medium text-xl text-white">10.3%</span>
                                        <UpArrowThinIcon className="ml-1 w-3"></UpArrowThinIcon>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row gap-x-[20px] mt-[30px]">
                            <DashboardBubbleCard
                                width="200px"
                                height="185px"
                                IconComponent={TradesFilledIcon}
                                number={this.state.tradeStagesCount["Contract stage"]}
                                status="CONTRACT STAGE"
                                price={this.state.estimatedCost["Contract stage"]}
                            />

                            <DashboardBubbleCard
                                width="200px"
                                height="185px"
                                IconComponent={SupplyChainIcon}
                                number={this.state.tradeStagesCount["Pre Shipment"]}
                                status="PRE SHIPMENT"
                                price={this.state.estimatedCost["Pre Shipment"]}
                            />

                            <DashboardBubbleCard
                                width="200px"
                                height="185px"
                                IconComponent={CalenderIcon}
                                number={this.state.tradeStagesCount["Post Fixtures Vessel"]}
                                status="POST FIXTURES VESSEL"
                                price={this.state.estimatedCost["Post Fixtures Vessel"]}
                            />

                            <DashboardBubbleCard
                                width="200px"
                                height="185px"
                                IconComponent={CalenderIcon}
                                number={this.state.tradeStagesCount["In-Transit"]}
                                status="IN-TRANSIT"
                                price={this.state.estimatedCost["In-Transit"]}
                            />

                            <DashboardBubbleCard
                                width="200px"
                                height="185px"
                                IconComponent={CalenderIcon}
                                number={this.state.tradeStagesCount["Pre Closure"]}
                                status="PRE CLOSURE"
                                price={this.state.estimatedCost["Pre Closure"]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
