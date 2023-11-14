import SearchBar from "@/components/SearchBar";
import MovieList from "@/components/MovieList";
import Navbar from "@/components/Navbar";

import "@/styles/page.scss";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="main">
        <div>
          <SearchBar />
          <MovieList />
        </div>
      </main>
    </>
  );
}
