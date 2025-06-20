import SearchForm from "../../components/SearchForm";
import StartupCard from "../../components/StartupCard";
export default async function Home({searchParams}: {searchParams: Promise<{query: string}>}) {
  const query = (await searchParams).query;
  const posts = [{
    _createdAt: new Date(),
    views: 55,
    author: {_id: 1, name: 'John Doe'},
    _id: 1,
    title: 'We Robots',
    description: 'Description 1',
    image: 'https://i.ytimg.com/vi/vTuL2_4VOBA/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDDAkXRnXL1dSpicvw3qBe7_Uo_sw',
    category: 'Technology',
  }]

  return (
    <>
    <section className="pink_container">
      <h1 className='heading'>Pitch Your Startup, <br /> Conect With Entrepreneurs</h1>

      <p className="sub-heading !max-w-3xl">Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions</p>

      <SearchForm query={query} />

    </section>

    <section className="section_container">
      <p className="text-30-semibold">
        {
          query ? `Search Results for "${query}"` : "All Startups"
        }
      </p>
      
      <ul className="mt-7 card_grid">
        {
          posts?.length > 0 ? (posts.map((post) => (
            <StartupCard key={post._id} post={post} />
          ))) : (
            <p className="text-20-medium">No posts found</p>
          )
        }
        </ul>
    </section>
    </>
  );
}
