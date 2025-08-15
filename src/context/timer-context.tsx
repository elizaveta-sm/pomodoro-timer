import { createContext, useContext, useState, type ReactNode } from "react";

interface TimerDurationsState {
  pomodoro: number;
  shortBreak: number;
  longBreak: number;
}

export interface TimerContextValue {
  timeLeft: number;
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>;
  durations: TimerDurationsState;
  setDurations: React.Dispatch<React.SetStateAction<TimerDurationsState>>;
}

interface TimerProviderProps {
  children: ReactNode;
}

export const defaultTimerDurations: TimerDurationsState = {
  pomodoro: 25 * 60,
  shortBreak: 5 * 60,
  longBreak: 15 * 60,
};

const TimerContext = createContext<TimerContextValue | null>(null);

export const TimerProvider = ({ children }: TimerProviderProps) => {
  const [durations, setDurations] = useState<TimerDurationsState>(
    defaultTimerDurations
  );
  const [timeLeft, setTimeLeft] = useState<number>(durations.pomodoro);

  const value = {
    timeLeft,
    setTimeLeft,
    durations,
    setDurations,
  };

  return (
    <TimerContext.Provider value={value}>{children}</TimerContext.Provider>
  );
};

export const useTimerContext = () => {
  const context = useContext(TimerContext);
  if (!context) throw new Error("Context Not Found");
  return context;
};
