import type { TimerMode } from "../../App";

interface TimerTabsProps {
  activeTab: TimerMode;
  onTabChange: (tab: TimerMode) => void;
}

const TimerTabs = ({ activeTab, onTabChange }: TimerTabsProps) => {
  const handleTabClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onTabChange(e.currentTarget.id as TimerMode);
  };

  return (
    <div className="timer-tabs">
      <button
        className={`timer-tabs__button ${
          activeTab === "pomodoro" ? "timer-tabs__button--active" : ""
        }`}
        id="pomodoro"
        onClick={handleTabClick}
      >
        Pomodoro
      </button>
      <button
        className={`timer-tabs__button ${
          activeTab === "shortBreak" ? "timer-tabs__button--active" : ""
        }`}
        id="shortBreak"
        onClick={handleTabClick}
      >
        Short Break
      </button>
      <button
        className={`timer-tabs__button ${
          activeTab === "longBreak" ? "timer-tabs__button--active" : ""
        }`}
        id="longBreak"
        onClick={handleTabClick}
      >
        Long Break
      </button>
    </div>
  );
};

export default TimerTabs;
