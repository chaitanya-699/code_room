import Link from "next/link";
import styles from "./SignIn.module.css";

export default function SigninPage() {
  return (
    <main className={styles.signinPage}>
      <div className={styles.signinCard}>
        <div className={styles.header}>
          <Link href="/" className={styles.brand}>
            <span className={styles.brandIcon}>{"</>"}</span>
            <span>CodeRoom</span>
          </Link>
          <h1>Welcome back</h1>
          <p>Sign in to continue to your coding rooms.</p>
        </div>

        <form className={styles.form}>
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
            autoComplete="current-password"
            required
          />

          <button type="submit" className={styles.primaryBtn}>
            Sign in
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
          Don&apos;t have an account? <Link href="/signup">Sign up</Link>
        </p>
      </div>
    </main>
  );
}
