import styles from './page.module.css'
export default function Home() {
  return (
    <main>
      <div className={styles.gradient}></div>
      <section>

      <div className={styles.container}>
          <h1 style={{ fontSize: '4.5rem' }}>Dylan's Portfolio</h1>
      </div>
        
        <div>
          {/* Project 1 */}
          <div>
            <h2>Project 1</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>

          {/* Project 2 */}
          <div>
            <h2>Project 2</h2>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
