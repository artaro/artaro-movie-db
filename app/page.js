import SearchBar from "@/components/SearchBar";
import MovieList from "@/components/MovieList";
import Pagination from "@/components/Pagination";
import styles from "@/styles/page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Artaro Movie DB</h1>
        <SearchBar />
        <MovieList />
        <Pagination />
      </div>
    </main>
  );
}
