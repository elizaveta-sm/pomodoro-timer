import { useEffect, useRef, useState } from "react";
import TimerControl from "./timer-control";
import TimerDisplay from "./timer-display";
import TimerTabs from "./timer-tabs";

import type { TimerMode } from "../../App";

import "../../styles/pomodoro-timer.css";

export const TimerDurations = {
  pomodoro: 25 * 60,
  shortBreak: 5 * 60,
  longBreak: 15 * 60,
} as const;

interface PomodoroTimerProps {
  activeMode: TimerMode;
  setActiveMode: (mode: TimerMode) => void;
}

const PomodoroTimer = ({ activeMode, setActiveMode }: PomodoroTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<number>(TimerDurations.pomodoro);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const intervalIdRef = useRef<number | null>(null);

  useEffect(() => {
    setTimeLeft(TimerDurations[activeMode]);
    const intervalId = intervalIdRef.current;
    if (intervalId) clearInterval(intervalId);
  }, [activeMode]);

  useEffect(() => {
    return () => {
      const intervalId = intervalIdRef.current;
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  const getNextTimerMode = (currentMode: TimerMode): TimerMode => {
    const modes: TimerMode[] = ["pomodoro", "shortBreak", "longBreak"];
    const currentIdx = modes.indexOf(currentMode);
    const nextMode = modes[(currentIdx + 1) % modes.length];
    return nextMode;
  };

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);

      const intervalId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          if (prevTimeLeft <= 1) {
            clearInterval(intervalId);
            setIsRunning(false);
            setActiveMode(getNextTimerMode(activeMode));
            return 0;
          }
          return prevTimeLeft - 1;
        });
      }, 1000);

      intervalIdRef.current = intervalId;
    }
  };

  const pauseTimer = () => {
    const intervalId = intervalIdRef.current;
    console.log({ intervalId });
    if (intervalId) {
      clearInterval(intervalId);
      setIsRunning(false);
    }
  };

  return (
    <section className="pomodoro-timer">
      <TimerTabs activeTab={activeMode} onTabChange={setActiveMode} />
      <TimerDisplay currentTime={timeLeft} />
      <TimerControl
        isRunning={isRunning}
        startTimer={startTimer}
        pauseTimer={pauseTimer}
      />
    </section>
  );
};

export default PomodoroTimer;
