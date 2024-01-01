import { makeBlogPostsQueryWithRelay } from "@/app/actions/queries/blogPostQueries";
import BlogPostList from "./components/BlogPostList";
import BlurredText from "@/app/components/Text/BlurredText";
import { fetchBlogPosts } from "@/app/actions/fetch/server/fetchBlogPosts";
import { Query } from "@/typings";

async function BlogPostsPage() {
  const QUERY: string = makeBlogPostsQueryWithRelay(false);

  const query: Query = {query: QUERY, first: 100, after: ""};

  const result = await fetchBlogPosts(query);


  const posts = result?.blogPosts;
  const pageInfo = result?.pageInfo;

  return (
    <section className="my-44 flex justify-center flex-grow ">
      <div className="flex flex-col w-full max-w-7xl justify-center">
        <BlurredText
          text={"Tutorials / Blog"}
          tailwindClasses="text-6xl sm:text-7xl md:text-8xl lg:text-9xl mx-6 font-bold "
          delay={0.0}
          once={true}
        />

        <BlurredText
          text={"Sharing my learnings, tutorials, and thoughts."}
          tailwindClasses="mt-8 text-2xl sm:text-3xl md:text-4xl lg:text-4xl mx-6 text-pale-black"
          delay={0.0}
          once={true}
        />

        <div className="mt-20 mb-12 flex ">
          <BlogPostList blogPosts={posts}/>
        </div>
      </div>
    </section>
  );
}

export default BlogPostsPage;
