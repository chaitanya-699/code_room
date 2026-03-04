import Link from "next/link";
import styles from "./SignUp.module.css";

export default function SignupPage() {
  return (
    <main className={styles.signupPage}>
      <div className={styles.signupCard}>
        <div className={styles.header}>
          <Link href="/" className={styles.brand}>
            <span className={styles.brandIcon}>{"</>"}</span>
            <span>CodeRoom</span>
          </Link>
          <h1>Create your account</h1>
          <p>Start creating coding rooms in seconds.</p>
        </div>

        <form className={styles.form}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Choose a username"
            autoComplete="username"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            autoComplete="new-password"
            required
          />

          <button type="submit" className={styles.primaryBtn}>
            Create account
          </button>
        </form>

        <div className={styles.divider}>
          <span>or continue with</span>
        </div>

        <div className={styles.oauthButtons}>
          <button type="button" className={styles.oauthBtn}>
            <i className="fa-brands fa-google"></i>
            Google
          </button>
          <button type="button" className={styles.oauthBtn}>
            <i className="fa-brands fa-github"></i>
            GitHub
          </button>
        </div>

        <p className={styles.footerText}>
          Already have an account? <Link href="/signin">Sign in</Link>
        </p>
      </div>
    </main>
  );
}
