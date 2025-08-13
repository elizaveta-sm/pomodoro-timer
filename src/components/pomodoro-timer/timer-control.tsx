interface TimerControlProps {
  isRunning: boolean;
  pauseTimer: () => void;
  startTimer: () => void;
}

const TimerControl = ({
  isRunning,
  pauseTimer,
  startTimer,
}: TimerControlProps) => {
  return (
    <div className="timer-control">
      {isRunning ? (
        <button className="timer-control__button" onClick={pauseTimer}>
          <span className="front" id="pause">
            Pause
          </span>
        </button>
      ) : (
        <button className="timer-control__button" onClick={startTimer}>
          <span className="front">Start</span>
        </button>
      )}
    </div>
  );
};

export default TimerControl;
