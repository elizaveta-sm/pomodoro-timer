import Button from "./button";
import "../../styles/modal.css";
import { useTimerContext } from "../../context/timer-context";
import { useState } from "react";

interface ModalProps {
  onClose: () => void;
}

const Modal = ({ onClose }: ModalProps) => {
  const { durations, setDurations } = useTimerContext();

  const [formValues, setFormValues] = useState({
    pomodoro: durations.pomodoro / 60,
    shortBreak: durations.shortBreak / 60,
    longBreak: durations.longBreak / 60,
  });

  const handleSave = () => {
    setDurations({
      pomodoro: formValues.pomodoro * 60,
      shortBreak: formValues.shortBreak * 60,
      longBreak: formValues.longBreak * 60,
    });
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newFormValues = {
      ...formValues,
      [name]: +value,
    };
    setFormValues(newFormValues);
  };

  return (
    <div className="modal-container" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <header className="modal__header">
          <h3>Settings</h3>

          <button onClick={onClose} className="modal__close-btn" type="button">
            &times;
          </button>
        </header>

        <div className="modal__content">
          <p>Time (minutes)</p>
          <div className="time-settings">
            <label>
              Pomodoro
              <input
                name="pomodoro"
                type="number"
                value={formValues.pomodoro}
                onChange={handleChange}
              />
            </label>
            <label>
              Short Break
              <input
                name="shortBreak"
                type="number"
                value={formValues.shortBreak}
                onChange={handleChange}
              />
            </label>
            <label>
              Long Break
              <input
                name="longBreak"
                type="number"
                value={formValues.longBreak}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>

        <div className="modal__actions">
          <Button
            type="button"
            variant="cancel"
            label="Cancel"
            clickHandler={onClose}
          />
          <Button
            type="submit"
            variant="save"
            label="Save"
            clickHandler={handleSave}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
