import SearchBar from "@/components/searchBar";

import styles from "@/styles/page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Artaro Movie DB</h1>
        <SearchBar />
      </div>
    </main>
  );
}
