// app/blog/page.tsx or pages/blog/index.tsx (depending on your Next.js setup)

import Head from "next/head";
import Image from "next/image";
import { dataFetcher } from "@/lib/dataFetcher";
import { Metadata } from "next";
import Link from "next/link";

async function fetchBlogs() {
  try {
    const res = await dataFetcher("blogs");
    return res || { data: [] };
  } catch (err) {
    console.error("Error fetching blogs:", err);
    throw new Error("Failed to fetch blog data");
  }
}

export const metadata: Metadata = {
  title: "Latest Blogs | AtoZ Dispatch",
  description:
    "Read the latest insights, tutorials, and updates from AtoZ Dispatch.",
};

export default async function Page() {
  let blogData: any[] = [];
  let hasError = false;

  try {
    const res = await fetchBlogs();
    blogData = res.data || [];
  } catch (error) {
    hasError = true;
  }

  return (
    <>
      <Head>
        <title>Latest Blogs | AtoZ Dispatch</title>
        <meta
          name="description"
          content="Read the latest insights, tutorials, and updates from AtoZ Dispatch."
        />
      </Head>

      <section className="bg-gray-100 py-12 min-h-screen">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10">
            Latest Blogs
          </h1>

          {hasError ? (
            <div className="text-center text-red-600">
              Failed to load blogs. Please try again later.
            </div>
          ) : blogData.length === 0 ? (
            <div className="text-center text-gray-500">No blogs available.</div>
          ) : (
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {blogData.map((item, idx) => (
                <Link key={idx} href={`/blog/${item?.slug}`}>
                  <article
                    key={idx}
                    className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden"
                  >
                    {item?.image_url ? (
                      <div className="relative h-48 w-full">
                        <Image
                          src={item.image_url}
                          alt={item.title || "Blog image"}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="h-48 bg-gray-300 flex items-center justify-center text-gray-600 text-sm">
                        No Image Available
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center space-x-3 text-sm text-gray-500 mb-2">
                        <span className="uppercase font-bold text-orange-600">
                          {item?.posted_by?.slice(0, 2).toUpperCase() || "NA"}
                        </span>
                        <span>{item?.posted_by}</span>
                      </div>

                      <h2 className="text-xl font-semibold text-gray-800 mb-2">
                        {item.title}
                      </h2>

                      <div
                        className="text-gray-600 text-sm mb-4 line-clamp-3"
                        dangerouslySetInnerHTML={{
                          __html: item.short_description || "",
                        }}
                      />

                      <p className="text-xs text-gray-400">
                        {item.posted_at || "Unknown Date"}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
