export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Engineering Managers &amp; CTOs
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Understand Your Team&apos;s{" "}
          <span className="text-[#58a6ff]">GitHub Activity</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Connect your GitHub org and instantly surface commit patterns, code review participation, and collaboration bottlenecks — so you can unblock your team before problems compound.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
        >
          Start for $15 / month
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No credit card required to explore.</p>

        {/* Metrics strip */}
        <div className="mt-16 grid grid-cols-3 gap-6 border border-[#30363d] rounded-xl bg-[#161b22] p-8">
          <div>
            <p className="text-3xl font-bold text-[#58a6ff]">98%</p>
            <p className="text-sm text-[#8b949e] mt-1">GitHub API coverage</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#58a6ff]">&lt;5 min</p>
            <p className="text-sm text-[#8b949e] mt-1">Setup time</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#58a6ff]">10–100</p>
            <p className="text-sm text-[#8b949e] mt-1">Ideal team size</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="border border-[#58a6ff] rounded-xl bg-[#161b22] p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$15</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited repositories",
              "Commit pattern analytics",
              "Code review participation metrics",
              "Collaboration bottleneck detection",
              "Weekly email digest",
              "Up to 100 team members"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-lg bg-[#161b22] p-6">
            <h3 className="font-semibold text-white mb-2">What GitHub permissions are required?</h3>
            <p className="text-[#8b949e] text-sm">We request read-only access to your organization&apos;s repositories, commits, and pull requests. We never write to your repos or access private keys.</p>
          </div>
          <div className="border border-[#30363d] rounded-lg bg-[#161b22] p-6">
            <h3 className="font-semibold text-white mb-2">How is the data used?</h3>
            <p className="text-[#8b949e] text-sm">Activity data is stored securely and used solely to generate your team&apos;s insights. We never sell or share your data with third parties.</p>
          </div>
          <div className="border border-[#30363d] rounded-lg bg-[#161b22] p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel anytime?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Cancel your subscription at any time from your billing portal. You&apos;ll retain access until the end of your billing period.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-xs text-[#8b949e]">
        &copy; {new Date().getFullYear()} GitHub Activity Insights. All rights reserved.
      </footer>
    </main>
  );
}
