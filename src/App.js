import Header from "./components/Header";
import SideBar from "./components/SideBar";
import UserGreeting from "./components/UserGreeting";

import {
  DashboardFilledIcon,
  DownArrowIcon,
} from './assets/icons';

import NotificationsList from "./components/NotificationsList";
import DivisionStats from "./components/DivisionStats";
import QuickStats from "./components/QuickStats";
import TradesOverview from "./components/TradesOverview";




function App() {


  return (
    <div className="flex flex-row">
      <SideBar></SideBar>
      <div className="flex-1 flex-col">

        <Header />



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


        <div className="flex flex-row mt-8">

          <div className="flex pl-12 pr-9 flex-col">
            <UserGreeting />
            <NotificationsList />
          </div>

          <DivisionStats />

          <QuickStats />


        </div>

        <TradesOverview />

      </div>
    </div>
  );
}

export default App;
