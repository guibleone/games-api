import PopularGames from "@/components/popular-games";

export default async function Home({
  searchParams,
}:{
  searchParams?: {
    query?: string;
    page?: number;
    filter?: string;
  };
}) {

  const query = searchParams?.query || "";
  const currentPage = searchParams?.page || 1;
  const filter = searchParams?.filter || "dlcs";

  return (
    <main className="h-screen">
      <section>
        <div className="mx-auto max-w-screen-lg px-8 py-5 md:py-0">
          <PopularGames query={query} currentPage={currentPage} filter={filter} />
        </div>
      </section>
    </main>
  );
}
