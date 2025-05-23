import { notFound } from "next/navigation";
import Head from "next/head";
import { dataFetcher } from "@/lib/dataFetcher";
import Image from "next/image";
import { Metadata } from "next";
import { use } from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  try {
    const { slug } = await params;
    const data = await dataFetcher(`blog/${slug}`)
    const blog = data?.data

    if (!blog) throw new Error("No data")

    return {
      title: blog.meta_title || blog.title,
      description: blog.meta_description || blog.short_description?.replace(/<[^>]+>/g, "").slice(0, 160),
    }
  } catch {
    return {
      title: "Blog Not Found",
      description: "The blog post you are looking for does not exist or failed to load.",
    }
  }
}

export default async function BlogDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  let blog;
  try {
    const { slug } = await params
    const data = await dataFetcher(`blog/${slug}`);
    blog = data?.data;
  } catch (err) {
    console.error("Error fetching blog:", err);
    notFound();
  }

  if (!blog) {
    notFound();
  }

  return (
    <>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">{blog.title}</h1>
        <div className="text-sm text-gray-500 mb-6">
          Posted by <span className="font-medium">{blog.posted_by}</span>
        </div>

        {blog.image_url && (
          <div className="w-full h-64 relative mb-8">
            <Image
              src={blog.image_url}
              alt={blog.title || "Blog Image"}
              fill
              className="object-cover rounded-xl"
            />
          </div>
        )}

        <div
          className="prose max-w-none prose-lg prose-p:leading-relaxed prose-img:rounded-xl"
          dangerouslySetInnerHTML={{ __html: blog.description || "" }}
        />
      </article>
    </>
  );
}
