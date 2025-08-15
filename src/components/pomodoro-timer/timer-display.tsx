import { useTimerContext } from "../../context/timer-context";

const TimerDisplay = () => {
  const { timeLeft: currentTime } = useTimerContext();

  return (
    <div className="timer-display">
      <span>{String(Math.floor(currentTime / 60)).padStart(2, "0")}</span>
      <span>:</span>
      <span>{String(currentTime % 60).padStart(2, "0")}</span>
    </div>
  );
};

export default TimerDisplay;
