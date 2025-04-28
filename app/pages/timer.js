import { useState, useEffect } from 'react';

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(25 * 60)
  const [isActive, setIsActive] = useState(false)
  useEffect(() => {
    let timer;
    if (isActive) {
      timer = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isActive]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setTimeLeft(25 * 60);
    setIsActive(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h2 className="text-4xl font-semibold text-gray-800">Pomodoro Timer</h2>
      <p className="text-lg text-gray-600 mt-2">Stay focused and productive! 💪</p>
      
      <div className="mt-8 text-6xl font-bold text-gray-900">
      {`${Math.floor(timeLeft / 60)}:${timeLeft % 60 < 10 ? '0' : ''}${timeLeft % 60}`}
      </div>
      
      <div className="mt-6 flex space-x-6">
        <button
          className="bg-green-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-600 transition-all"
          onClick={toggleTimer}
        >
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button
          className="bg-red-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-red-600 transition-all"
          onClick={resetTimer}
        >
          Reset
        </button>
      </div>

      <div className="mt-8 text-center text-gray-500">
        <p>{isActive ? 'You got this! Keep going!' : 'Take a break if you need to!'}</p>
      </div>
    </div>
  );
}
