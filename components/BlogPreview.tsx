import { blogPosts } from "@/lib/data";

export function BlogPreview() {
  return (
    <section id="blog" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-[#1e3a5f]">From The Blog</h2>
          <p className="mt-2 text-slate-600">
            Stories from volunteers and partner organizations.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="rounded-xl border border-slate-200 overflow-hidden hover:border-[#e87722]/40 hover:shadow-md transition-all"
            >
              <div className="h-32 bg-gradient-to-br from-[#1e3a5f] to-[#254a75]" />
              <div className="p-6">
                <time className="text-xs font-medium text-[#e87722]">
                  {post.date}
                </time>
                <h3 className="mt-2 text-lg font-bold text-[#1e3a5f] leading-snug">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {post.excerpt}
                </p>
                <a
                  href="#"
                  className="mt-4 inline-block text-sm font-semibold text-[#1e3a5f] hover:text-[#e87722] transition-colors"
                >
                  Read more →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
