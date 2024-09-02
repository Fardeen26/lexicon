import Banner from "@/app/(home)/components/Banner";
import BookList from "./components/BookList";
import { Suspense } from "react";
import Loading from "@/components/Loading";


export default async function Home() {
  return (
    <div>
      <Banner />
      <Suspense fallback={<Loading />}>

      </Suspense>
      <BookList />      
      </div>
  );
}
