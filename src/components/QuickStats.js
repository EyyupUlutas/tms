import React, { Component } from 'react'
import axios from 'axios';
import {
    CommunityIcon,
    MeetingIcon
} from '../assets/icons';
import DashboardBubbleCard from './DashboardBubbleCard';

export default class QuickStats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customersCount: 0,
            suppliersCount: 0,
            meetingsCount: 0,
        };
    }



    componentDidMount() {
        axios.get('http://20.247.206.163/api/customers/count')
            .then(response => {
                this.setState({
                    customersCount: response.data.count,
                });
            })
            .catch(error => {
                console.log(error.message);
            });


            axios.get('http://20.247.206.163/api/supplier/count')
            .then(response => {
                this.setState({
                    suppliersCount: response.data.count,
                });
            })
            .catch(error => {
                console.log(error.message);
            });

            axios.get('http://20.247.206.163/api/meeting/count')
            .then(response => {
                this.setState({
                    meetingsCount: response.data.count,
                });
            })
            .catch(error => {
                console.log(error.message);
            });
    }
    render() {
        const { customersCount, suppliersCount, meetingsCount } = this.state;

       
        return (
            <div className="flex flex-col ml-8 gap-y-3">
                <DashboardBubbleCard
                    width="200px"
                    height="224px"
                    IconComponent={CommunityIcon}
                    number={customersCount}
                    status="CUSTOMERS"
                />

                <DashboardBubbleCard
                    width="200px"
                    height="224px"
                    IconComponent={CommunityIcon}
                    number={suppliersCount}
                    status="SUPPLIERS"
                />

                <DashboardBubbleCard
                    width="200px"
                    height="224px"
                    IconComponent={MeetingIcon}
                    IconColor={"#7452D6"}
                    IconWidth={40}
                    IconHeight={40}
                    number={meetingsCount}
                    status="MEETINGS"
                />

            </div>
        )
    }
}
