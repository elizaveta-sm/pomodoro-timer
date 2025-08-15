import PomodoroTimer from "./components/pomodoro-timer/pomodoro-timer";
import AppHeader from "./components/app-header/app-header";
import TaskManager from "./components/task-manager/task-manager";

import "./styles/App.css";
import { useEffect, useState } from "react";

export type TimerMode = "pomodoro" | "shortBreak" | "longBreak";

const App: React.FC = () => {
  const [timerMode, setTimerMode] = useState<TimerMode>("pomodoro");

  useEffect(() => {
    document.body.classList.remove(
      "pomodoro-mode",
      "shortbreak-mode",
      "longbreak-mode"
    );
    document.body.classList.add(`${timerMode.toLowerCase()}-mode`);
  }, [timerMode]);

  return (
    <div className="App">
      <AppHeader timerMode={timerMode} />
      <PomodoroTimer activeMode={timerMode} setActiveMode={setTimerMode} />
      <TaskManager activeMode={timerMode} />
    </div>
  );
};

export default App;
