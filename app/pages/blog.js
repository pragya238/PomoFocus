export default function Blog() {
    return (
      <div className="min-h-screen p-8">
        <h2 className="text-3xl font-semibold">Blog - Productivity Tips</h2>
        <ul className="mt-4">
          <li>
            <h3 className="font-semibold">How to Stay Focused</h3>
            <p className="mt-2">
              Staying focused can be challenging, but breaking tasks into smaller, manageable chunks and eliminating distractions can help. A few methods include setting clear goals, minimizing interruptions, and using techniques like the Pomodoro method to stay on track.
            </p>
          </li>
          <li>
            <h3 className="font-semibold">Effective Pomodoro Technique</h3>
            <p className="mt-2">
              The Pomodoro Technique is a time management method that breaks work into intervals, traditionally 25 minutes long, separated by short breaks. This technique helps maintain focus and productivity by balancing periods of deep work with relaxation. Adjusting the work and break times based on your preferences can optimize your productivity.
            </p>
          </li>
        </ul>
      </div>
    );
  }
  