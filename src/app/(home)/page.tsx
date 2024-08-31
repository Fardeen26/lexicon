import Banner from "@/app/(home)/components/Banner";
import BookList from "./components/BookList";


export default async function Home() {
  const response = await fetch(`https://icanhazdadjoke.com/`);
  // if(!response.ok) {
  //   throw new Error('An error occurred while fetching the books')
  // }
  const books = await response.json();


  return (
    <div>
      <Banner />
      <BookList books={books}/>
    </div>
  );
}
