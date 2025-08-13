import type { TimerMode } from "../../App";

interface TimerPromptProps {
  activeMode: TimerMode;
  activeTaskTitle?: string;
}

const TimerPrompt = ({ activeMode, activeTaskTitle }: TimerPromptProps) => {
  const modePrompts = {
    shortBreak: "Time for a break!",
    longBreak: "Time for a break!",
    pomodoro: activeTaskTitle || "Time to focus!",
  };

  return (
    <div className="timer-prompt">
      <p>{modePrompts[activeMode]}</p>
    </div>
  );
};

export default TimerPrompt;
