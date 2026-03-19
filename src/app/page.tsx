import Link from 'next/link';

export default function Home() {
  return (
      <main>
        <div className="homepage">
          <h1>Back To Work</h1>
          <p>The app that accompanies you during your job search and helps you keep track of all the jobs you applied to.</p>
          <div className="link-ctn">
            <Link href="/login" className="link-btn">Sign In</Link>
            <Link href="/register" className="link-btn">Sign Up</Link>
          </div>
        </div>
      </main>
  );
}