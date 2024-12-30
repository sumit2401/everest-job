import Image from "next/image"

import { ArrowRight } from 'lucide-react'

interface BlogPost {
  title: string
  image: string
  link: string
  featured?: boolean
}

const blogPosts: BlogPost[] = [
  {
    title: "Effective Onboarding Practices in Aerospace Companies",
    image: "/placeholder.svg",
    link: "/blog/effective-onboarding-practices-in-aerospace-companies",
    featured: true
  },
  {
    title: "Summer Fun in Chelmsford: Bringing Our Team Together",
    image: "/placeholder.svg",
    link: "/blog/summer-fun-chelmsford"
  },
  {
    title: "Revolutionising the Industry: Key Moving Services Trends Unveiled",
    image: "/placeholder.svg",
    link: "/blog/moving-services-trends"
  },
  {
    title: "AI-Powered Freight Forwarding: Unleashing Transformation in the Industry",
    image: "/placeholder.svg",
    link: "/blog/ai-powered-freight-forwarding"
  },
  {
    title: "Tech Takeover: Exploring the Transformation of Corporate Housing",
    image: "/placeholder.svg",
    link: "/blog/tech-takeover-corporate-housing"
  }
]

export function BlogHub() {
  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <section className="bg-[#1a1a1a] py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-white">Blog hub</h2>
          <div className="flex items-center gap-2 text-white">
            <span>Looking for more?</span>
            <button className="bg-[#00ffa3] hover:bg-[#00df8f] text-black">
              View all blogs <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Featured Article */}
          {featuredPost && (
            <div className="relative group rounded-2xl overflow-hidden lg:row-span-2">
              <div className="aspect-[16/9] lg:aspect-[3/4] relative">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="mb-4">
                  <span className="text-[#00ffa3] text-sm font-medium">
                    Featured article
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {featuredPost.title}
                </h3>
                <button className="bg-[#00ffa3] hover:bg-[#00df8f] text-black">
                  View article <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {/* Regular Articles Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {regularPosts.map((post) => (
              <div
                key={post.title}
                className="relative group rounded-2xl overflow-hidden"
              >
                <div className="aspect-video relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-bold text-white">
                    {post.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

