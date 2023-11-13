import SearchBar from "@/components/SearchBar";
import MovieList from "@/components/movieList";

import styles from "@/styles/page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Artaro Movie DB</h1>
        <SearchBar />
        <MovieList />
      </div>
    </main>
  );
}
