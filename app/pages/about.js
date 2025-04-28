
export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      <main className="flex-grow p-8">
        <h2 className="text-3xl font-semibold text-center mb-6">How to Use This App</h2>

        <div className="max-w-4xl mx-auto text-lg space-y-6">
          <section>
            <h3 className="text-2xl font-semibold">1. Set Your Focus and Break Intervals</h3>
            <p>
              Start by customizing your Pomodoro timer. You can set the length of your focus time (default 25 minutes) and break time (default 5 minutes).
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold">2. Start the Timer</h3>
            <p>
              Once you're ready, hit the "Start" button to begin your Pomodoro session. The timer will count down the focus interval.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold">3. Take a Break</h3>
            <p>
              After your focus session ends, take a 5-minute break. The app will alert you when it's time to switch between focus and break intervals.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold">4. Track Your Progress</h3>
            <p>
              The app will keep track of your completed Pomodoro sessions, so you can see how much time you've spent working and how many breaks you've taken.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-semibold">5. Enjoy Productivity Tips</h3>
            <p>
              You can also visit the "Blog" section to read productivity tips and advice on how to make the most of the Pomodoro Technique.
            </p>
          </section>

          <div className="text-center mt-6">
            <Link href="./timer.js">
              <a className="bg-blue-500 text-white py-2 px-6 rounded-lg text-xl font-semibold transition duration-300 hover:bg-blue-600">
                Start Using the Timer
              </a>
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white text-center p-4">
        <p> {new Date().getFullYear()} PomoFocus App | All Rights Reserved</p>
      </footer>
    </div>
  );
}
