import { css } from '@/styled-system/css'
import Image from 'next/image'

const styles = {
  description: '',
  code: '',
  vercelLogo: '',
  center: '',
  logo: '',
  grid: '',
  card: '',
}

export default function Home() {
  return (
    <main
      className={css({
        display: 'flex',
        flexDir: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        p: 's.4',
        minH: '100vh',
        border: '1px solid',
        borderColor: 'blue.5',
        borderWidth: 'w.4',
      })}
    >
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By <Image src="/vercel.svg" alt="Vercel Logo" width={100} height={24} priority />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={css({
            opacity: 0.5,
            animation: 'fade-in, shake-z forwards',
            animationDuration: '1s',
            animationIterationCount: 'infinite',
            animationTimingFunction: 'ease-in-out',
            animationDirection: 'alternate',
          })}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>Instantly deploy your Next.js site to a shareable URL with Vercel.</p>
        </a>
      </div>
    </main>
  )
}
