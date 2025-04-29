import { getRequest } from "@/lib/APIHelper";
import { dataFetcher } from "@/lib/dataFetcher";
import Image from "next/image";

async function fetchBlogs() {
    try {
        const res = dataFetcher("blogs")
        console.log(res)
        return res || [];
    } catch (err) {
        console.error(err);
        return [];
    }
}

export default async function Page() {
    const blogData = await fetchBlogs();

    console.log(blogData?.data?.length, "...")

    return (
        <section className="bg-gray-100 py-12">
            <div className="max-w-6xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                    Latest Blogs
                </h1>
                <div className="grid gap-8 md:grid-cols-2">
                    {blogData.data.length > 0 ? (
                        blogData.data.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-all"
                            >
                                {item?.image_url ? (
                                    <div className="h-48 relative">
                                        <Image
                                            src={item.image_url}
                                            alt={item.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ) : (
                                    <div className="h-48 bg-gray-300 flex items-center justify-center text-gray-600">
                                        No Image
                                    </div>
                                )}
                                <div className="p-5">
                                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                                        <span className="uppercase font-semibold text-orange-500">
                                            {item?.posted_by?.slice(0, 2).toUpperCase()}
                                        </span>
                                        <span>{item?.posted_by}</span>
                                    </div>
                                    <h2 className="text-xl font-bold text-gray-800 mb-2">
                                        {item.title}
                                    </h2>
                                    <div
                                        className="text-gray-600 text-sm mb-3 line-clamp-3"
                                        dangerouslySetInnerHTML={{
                                            __html: item.short_description,
                                        }}
                                    />
                                    <p className="text-xs text-gray-400">{item.posted_at}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center text-gray-500">
                            No blogs available.
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
