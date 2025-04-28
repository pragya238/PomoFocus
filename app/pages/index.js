export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            <section className="max-w-4xl text-left mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">How to Use PomoFocus</h2>
          <p className="mt-4 text-lg text-gray-700">
            Here's how to make the most out of your Pomodoro sessions:
          </p>
          <ol className="mt-4 space-y-2 pl-6 list-decimal text-lg text-gray-700">
            <li><strong>Set a task:</strong> Choose a task that requires your focus. It could be anything—study, work, write, etc.</li>
            <li><strong>Start your timer:</strong> Hit the start button, and work for 25 minutes without distractions (yes, we mean it! 😅).</li>
            <li><strong>Take a break:</strong> When the timer rings, take a 5-minute break. Refresh your mind, stretch, or grab a coffee!</li>
            <li><strong>Repeat:</strong> Complete 4 Pomodoro cycles (work-break), then reward yourself with a longer break. 🎉</li>
          </ol>
        </section>

        <section className="max-w-4xl text-left mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">Why PomoFocus?</h2>
          <p className="mt-4 text-lg text-gray-700">
            PomoFocus is designed to help you work smarter, not harder. Here's why you should try it:
          </p>
          <ul className="mt-4 space-y-2 pl-6 list-disc text-lg text-gray-700">
            <li><strong>Focus:</strong> The Pomodoro timer keeps you laser-focused on one task at a time, improving productivity.</li>
            <li><strong>Prevents Burnout:</strong> The short breaks give your brain a chance to recharge, so you stay fresh.</li>
            <li><strong>Feel Accomplished:</strong> Every time the timer rings, you’ve achieved something meaningful. Celebrate small wins!</li>
            <li><strong>Master Time Management:</strong> By breaking work into manageable intervals, you’ll be amazed at how much you can achieve in less time.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-3xl font-semibold text-gray-800">Ready to Get Started?</h2>
          <p className="mt-4 text-lg text-gray-700 mb-8">
            We’re excited to help you focus and get things done. Click the button below to start your first Pomodoro session. Let’s do this! ⏱️
          </p>

          <Link href="/timer">
            <a className="bg-blue-500 text-white py-2 px-6 rounded-full text-lg hover:bg-blue-600 transition duration-300">
              Start Your Focus Session
            </a>
          </Link>
        </section>
        
      </div>
    );
  }
  