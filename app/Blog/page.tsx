import BlogCard from "@/components/Blog/BlogCard";
import BlogTips from "@/components/Blog/BlogTips";
import HealthInsights from "@/components/Blog/HealthInsights";

import React from "react";

const BlogPage = () => {
  return (
    <main className="bg-white py-[130px] flex flex-col justify-center items-center w-full text-center overflow-hidden">
      <BlogTips />
      <HealthInsights />
      <BlogCard />
    </main>
  );
};

export default BlogPage;
