import PomodoroTimer from "./components/pomodoro-timer/pomodoro-timer";
import AppHeader from "./components/app-header/app-header";
import TaskManager from "./components/task-manager/task-manager";

import "./styles/App.css";
import { useEffect, useState } from "react";

export type TimerMode = "pomodoro" | "shortBreak" | "longBreak";

// todo: settings for changing the timer durations
// todo: rewrite everything with useContext
// todo: understand how context works
// todo: check whether there's unnecessary rerendering
// todo: put to github pages

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
    <div className={`App ${timerMode.toLowerCase()}-mode`}>
      <AppHeader timerMode={timerMode} />
      <PomodoroTimer activeMode={timerMode} setActiveMode={setTimerMode} />
      <TaskManager activeMode={timerMode} />
    </div>
  );
};

export default App;
