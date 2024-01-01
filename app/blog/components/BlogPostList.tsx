"use client";

import React from "react";
import Link from "next/link";
import { BlogPostPage } from "@/typings";
import BlogPostCard from "./BlogPostCard";
import { useScroll, motion, useTransform } from "framer-motion";

type BlogPostListProps = {
  blogPosts: BlogPostPage[];
};

const BlogPostList: React.FC<BlogPostListProps> = (props) => {
  const blogPosts = props.blogPosts;


  const containerRef = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["end end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0.3, 1], [0, 200]);


  if (blogPosts && blogPosts.length === 0) {
    return (
      <div>
        <h2>Ooops, something went wrong</h2>
      </div>
    );
  }

  return (
    <motion.div className="my-12 mx-6 flex" ref={containerRef} style={{ y }}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-14">
        {blogPosts &&
          blogPosts.length > 0 &&
          blogPosts.map((blogPost: BlogPostPage, idx: number) => {
            return (
              <div key={blogPost.blogPost.id} className="cursor-pointer">
                {!blogPost.blogPost.external ? (
                  <Link
                    href={`/blog/${blogPost.blogPost.slug}`}
                    scroll={false}
                  >
                    <BlogPostCard blogPost={blogPost.blogPost} idx={idx} />
                  </Link>
                ) : (
                  <a href={blogPost.blogPost.externalLink} target="_blank">
                    <BlogPostCard blogPost={blogPost.blogPost} idx={idx} />
                  </a>
                )}
              </div>
            );
          })}

        {/*pageInfo && pageInfo.hasNextPage && (
          <MoreblogPostsButton currentCursor={pageInfo.endCursor} size={first} />
        )*/}
      </div>
    </motion.div>
  );
};

export default BlogPostList;
