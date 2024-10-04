import Header from "./components/Header";
import SideBar from "./components/SideBar";
import UserGreeting from "./components/UserGreeting";
import NotificationsList from "./components/NotificationsList";
import DivisionStats from "./components/DivisionStats";
import QuickStats from "./components/QuickStats";
import TradesOverview from "./components/TradesOverview";
import DashboardHeader from "./components/DashboardHeader";


function App() {
  return (
    <div className="flex flex-row">
      <SideBar />
      <div className="flex-1 flex-col">
        <Header />
        <DashboardHeader />
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
