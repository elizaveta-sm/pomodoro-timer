import { createContext, useState, type ReactNode } from "react";

export interface TimerContextValue {
  timeLeft: number;
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>;
}

export const TimerContext = createContext<TimerContextValue | undefined>(
  undefined
);

export const TimerProvider = ({ children }: { children: ReactNode }) => {
  const [timeLeft, setTimeLeft] = useState<number>(25 * 60);

  return (
    <TimerContext.Provider value={{ timeLeft, setTimeLeft }}>
      {children}
    </TimerContext.Provider>
  );
};
