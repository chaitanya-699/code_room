import Link from "next/link";

export default function HomePage() {
  return (
    <div className="landing-page">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <span className="sidebar-logo-icon">{"</>"}</span>
          <span className="sidebar-logo-text">CodeRoom</span>
        </div>

        <nav className="sidebar-nav">
          <Link href="/" className="sidebar-nav-item active">
            <i className="fa-solid fa-house"></i>
            <span>Home</span>
          </Link>
          <Link href="/create" className="sidebar-nav-item">
            <i className="fa-solid fa-plus"></i>
            <span>Create Test</span>
          </Link>
          <Link href="/join" className="sidebar-nav-item">
            <i className="fa-solid fa-right-to-bracket"></i>
            <span>Join Test</span>
          </Link>
          <Link href="/tests" className="sidebar-nav-item">
            <i className="fa-solid fa-list-check"></i>
            <span>My Tests</span>
          </Link>
          <Link href="/profile" className="sidebar-nav-item">
            <i className="fa-solid fa-user"></i>
            <span>Profile</span>
          </Link>
        </nav>

        <div className="sidebar-divider"></div>

        <div className="sidebar-bottom">
          <Link href="/signin" className="sidebar-auth-btn signin">
            <i className="fa-solid fa-arrow-right-to-bracket"></i>
            Sign In
          </Link>
          <Link href="/signup" className="sidebar-auth-btn signup">
            <i className="fa-solid fa-user-plus"></i>
            Sign Up
          </Link>
          {/* <Link href="/logout" className="sidebar-auth-btn logout">
            <i className="fa-solid fa-right-from-bracket"></i>
            Logout
          </Link> */}
        </div>
      </aside>

      {/* Main Content */}
      <main className="landing-main">
        {/* Top Nav — mobile */}
        <header className="landing-topbar">
          <div className="landing-topbar-logo">
            <span className="sidebar-logo-icon">{"</>"}</span>
            <span>CodeRoom</span>
          </div>
          <div className="landing-topbar-actions">
            <Link href="/signin" className="topbar-link">
              Sign In
            </Link>
            <Link href="/signup" className="topbar-btn">
              Sign Up
            </Link>
          </div>
        </header>

        {/* ── Hero ── */}
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              Live Coding Platform
            </div>
            <h1 className="hero-title">
              Run Coding Tests
              <br />
              <span className="hero-title-accent">Instantly</span> with
              <br />
              Room Codes
            </h1>
            <p className="hero-description">
              Create a test room, pick your questions, and share a 6-digit code.
              Participants join in seconds — no setup, no friction.
            </p>
            <div className="hero-cta">
              <Link href="/create" className="cta-btn-primary">
                <i className="fa-solid fa-plus"></i>
                Create Test
              </Link>
              <Link href="/join" className="cta-btn-secondary">
                <i className="fa-solid fa-right-to-bracket"></i>
                Join with Code
              </Link>
              <Link
                href="/problem"
                className="cta-btn-secondary demo-btn"
              >
                <i className="fa-solid fa-flask"></i>
                <span>Demo Test</span>
              </Link>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="hero-stat-value">6-digit</span>
                <span className="hero-stat-label">Room Codes</span>
              </div>
              <div className="hero-stat-divider"></div>
              <div className="hero-stat">
                <span className="hero-stat-value">Real-time</span>
                <span className="hero-stat-label">Execution</span>
              </div>
              <div className="hero-stat-divider"></div>
              <div className="hero-stat">
                <span className="hero-stat-value">Multi-lang</span>
                <span className="hero-stat-label">Support</span>
              </div>
            </div>
          </div>

          {/* Code window visual */}
          <div className="hero-visual">
            <div className="code-window">
              <div className="code-window-header">
                <div className="code-window-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <span className="code-window-title">solution.py</span>
              </div>
              <div className="code-window-body">
                <div className="code-line">
                  <span className="code-ln">1</span>
                  <span className="code-kw">def </span>
                  <span className="code-fn">two_sum</span>
                  <span className="code-pu">(</span>
                  <span className="code-par">nums, target</span>
                  <span className="code-pu">):</span>
                </div>
                <div className="code-line">
                  <span className="code-ln">2</span>
                  {"    "}
                  <span className="code-par">seen </span>
                  <span className="code-op">= </span>
                  <span className="code-pu">{"{}"}</span>
                </div>
                <div className="code-line">
                  <span className="code-ln">3</span>
                  {"    "}
                  <span className="code-kw">for </span>
                  <span className="code-par">i, n </span>
                  <span className="code-kw">in </span>
                  <span className="code-fn">enumerate</span>
                  <span className="code-pu">(</span>
                  <span className="code-par">nums</span>
                  <span className="code-pu">):</span>
                </div>
                <div className="code-line">
                  <span className="code-ln">4</span>
                  {"        "}
                  <span className="code-par">diff </span>
                  <span className="code-op">= </span>
                  <span className="code-par">target </span>
                  <span className="code-op">- </span>
                  <span className="code-par">n</span>
                </div>
                <div className="code-line">
                  <span className="code-ln">5</span>
                  {"        "}
                  <span className="code-kw">if </span>
                  <span className="code-par">diff </span>
                  <span className="code-kw">in </span>
                  <span className="code-par">seen</span>
                  <span className="code-pu">:</span>
                </div>
                <div className="code-line code-line-highlight">
                  <span className="code-ln">6</span>
                  {"            "}
                  <span className="code-kw">return </span>
                  <span className="code-pu">[</span>
                  <span className="code-par">seen</span>
                  <span className="code-pu">[</span>
                  <span className="code-par">diff</span>
                  <span className="code-pu">], </span>
                  <span className="code-par">i</span>
                  <span className="code-pu">]</span>
                </div>
                <div className="code-line">
                  <span className="code-ln">7</span>
                  {"        "}
                  <span className="code-par">seen</span>
                  <span className="code-pu">[</span>
                  <span className="code-par">n</span>
                  <span className="code-pu">] </span>
                  <span className="code-op">= </span>
                  <span className="code-par">i</span>
                </div>
              </div>
              <div className="code-window-footer">
                <div className="code-room-badge">
                  <i className="fa-solid fa-users"></i>
                  Room:&nbsp;<strong>482 931</strong>
                  <span className="live-dot"></span>
                  Live
                </div>
                <div className="code-verdict accepted-verdict">
                  <i className="fa-solid fa-circle-check"></i> Accepted
                </div>
              </div>
            </div>
            <div className="hero-glow"></div>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section className="section how-it-works-section">
          <div className="section-header">
            <span className="section-tag">Workflow</span>
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">
              Four simple steps to run your coding test
            </p>
          </div>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">01</div>
              <div className="step-icon">
                <i className="fa-solid fa-door-open"></i>
              </div>
              <h3>Create a Room</h3>
              <p>
                Log in and spin up a new test room instantly. Name it and
                configure your settings.
              </p>
            </div>
            <div className="step-connector">
              <i className="fa-solid fa-arrow-right"></i>
            </div>
            <div className="step-card">
              <div className="step-number">02</div>
              <div className="step-icon">
                <i className="fa-solid fa-code"></i>
              </div>
              <h3>Choose Questions</h3>
              <p>
                Pick from curated coding problems across difficulty levels and
                language categories.
              </p>
            </div>
            <div className="step-connector">
              <i className="fa-solid fa-arrow-right"></i>
            </div>
            <div className="step-card">
              <div className="step-number">03</div>
              <div className="step-icon">
                <i className="fa-solid fa-share-nodes"></i>
              </div>
              <h3>Share the Code</h3>
              <p>
                Get a unique <strong>6-digit room code</strong> and share it
                with your participants.
              </p>
            </div>
            <div className="step-connector">
              <i className="fa-solid fa-arrow-right"></i>
            </div>
            <div className="step-card">
              <div className="step-number">04</div>
              <div className="step-icon">
                <i className="fa-solid fa-rocket"></i>
              </div>
              <h3>Solve & Evaluate</h3>
              <p>
                Participants join, write code, and submit. Auto-evaluation
                delivers instant verdicts.
              </p>
            </div>
          </div>
        </section>

        {/* ── Features ── */}
        <section className="section features-section">
          <div className="section-header">
            <span className="section-tag">Features</span>
            <h2 className="section-title">Everything You Need</h2>
            <p className="section-subtitle">
              Built for developers, by developers
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrap">
                <i className="fa-solid fa-bolt"></i>
              </div>
              <h3>Real-time Environment</h3>
              <p>
                Code execution happens live with instant output and feedback
                streaming to all participants.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrap">
                <i className="fa-solid fa-hashtag"></i>
              </div>
              <h3>Room-based Sessions</h3>
              <p>
                Isolated test rooms with unique 6-digit codes — each session is
                private and secure.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrap">
                <i className="fa-solid fa-lock"></i>
              </div>
              <h3>Secure Login Required</h3>
              <p>
                Only authenticated users can create or join sessions — keeping
                your tests fair and integrity intact.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrap">
                <i className="fa-brands fa-python"></i>
              </div>
              <h3>Multiple Languages</h3>
              <p>
                Full support for Python, JavaScript, C++, Java, Go, Rust, and
                more popular languages.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrap">
                <i className="fa-solid fa-circle-check"></i>
              </div>
              <h3>Auto Evaluation</h3>
              <p>
                Submissions are automatically judged against test cases with
                instant, accurate verdicts.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrap">
                <i className="fa-solid fa-link"></i>
              </div>
              <h3>Instant Room Sharing</h3>
              <p>
                Just share a 6-digit code — participants join from any device
                without any installation.
              </p>
            </div>
          </div>
        </section>

        {/* ── Use Cases ── */}
        <section className="section use-cases-section">
          <div className="section-header">
            <span className="section-tag">Use Cases</span>
            <h2 className="section-title">Built for Every Scenario</h2>
            <p className="section-subtitle">
              From technical interviews to classroom exams
            </p>
          </div>
          <div className="use-cases-grid">
            <div className="use-case-card">
              <div className="use-case-icon">
                <i className="fa-solid fa-briefcase"></i>
              </div>
              <h3>Interview Practice</h3>
              <p>
                Run technical interviews with candidates in a realistic coding
                environment. Share results instantly post-session.
              </p>
              <span className="use-case-tag">HR &amp; Engineering</span>
            </div>
            <div className="use-case-card">
              <div className="use-case-icon">
                <i className="fa-solid fa-trophy"></i>
              </div>
              <h3>Coding Contests</h3>
              <p>
                Host competitive programming rounds with multiple participants
                live in a single session room.
              </p>
              <span className="use-case-tag">Competitive Programming</span>
            </div>
            <div className="use-case-card">
              <div className="use-case-icon">
                <i className="fa-solid fa-chalkboard-user"></i>
              </div>
              <h3>Classroom Tests</h3>
              <p>
                Instructors can assign live coding exams and monitor every
                submission in real-time without hassle.
              </p>
              <span className="use-case-tag">Education</span>
            </div>
            <div className="use-case-card">
              <div className="use-case-icon">
                <i className="fa-solid fa-people-group"></i>
              </div>
              <h3>Peer Challenges</h3>
              <p>
                Challenge friends or teammates to solve problems together inside
                a shared private room session.
              </p>
              <span className="use-case-tag">Community</span>
            </div>
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section className="cta-section">
          <div className="cta-section-content">
            <div className="cta-section-terminal">
              <span className="cta-prompt">$ </span>
              <span className="cta-cmd">coderoom</span>
              <span className="cta-arg"> --start</span>
              <span className="cta-cursor">█</span>
            </div>
            <h2 className="cta-section-title">Ready to Run Your First Test?</h2>
            <p className="cta-section-subtitle">
              Join developers using CodeRoom for interviews, contests, and
              learning sessions.
            </p>
            <div className="cta-section-actions">
              <Link href="/signup" className="cta-btn-primary">
                <i className="fa-solid fa-user-plus"></i>
                Sign Up — It&apos;s Free
              </Link>
              <Link href="/join" className="cta-btn-secondary">
                Enter Room Code
              </Link>
            </div>
          </div>
          <div className="cta-section-room-preview">
            <div className="room-code-display">
              <p className="room-code-label">Enter Room Code</p>
              <div className="room-code-boxes">
                {["4", "8", "2", "9", "3", "1"].map((d, i) => (
                  <span key={i} className="room-code-box">
                    {d}
                  </span>
                ))}
              </div>
              <button className="room-join-btn">
                Join Room&nbsp;<i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="landing-footer">
          <div className="footer-logo">
            <span className="sidebar-logo-icon">{"</>"}</span>
            <span>CodeRoom</span>
          </div>
          <p>© 2026 CodeRoom. Built for developers.</p>
          <div className="footer-links">
            <Link href="#">Privacy</Link>
            <Link href="#">Terms</Link>
            <Link href="#">GitHub</Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
