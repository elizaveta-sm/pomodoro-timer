import { useContext } from "react";
import { TimerContext } from "../../context/timer-context";

const TimerDisplay = () => {
  const context = useContext(TimerContext);
  if (!context) throw new Error("Error with context");
  const { timeLeft: currentTime } = context;

  return (
    <div className="timer-display">
      <span>{String(Math.floor(currentTime / 60)).padStart(2, "0")}</span>
      <span>:</span>
      <span>{String(currentTime % 60).padStart(2, "0")}</span>
    </div>
  );
};

export default TimerDisplay;
