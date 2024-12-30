
import { ArrowRight } from 'lucide-react'

export function GlobalRecruiters() {
  return (
    <section className="bg-[#1a1a1a] py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Global Recruiters
            </h2>
            <p className="text-xl text-white/90">
              Alchemy are recruitment experts with over 25 years of experience placing talent across multiple industries worldwide.
            </p>
            <p className="text-gray-300">
              Our knowledge and experience in global recruitment is unparalleled, and our international network spans over 50 countries worldwide, from London to Australia, Hong Kong to New York - our reach is truly global!
            </p>
            <p className="text-gray-300">
              In addition to our specialist markets, we maintain a substantial global talent pool across multiple industries - meaning we can find you the best talent, no matter the role or location.
            </p>
            <button className="bg-[#00ffa3] text-black hover:bg-[#00df8f] transition-colors">
              Find out more <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Professional recruiter smiling at camera"
                className="w-full h-auto rounded-2xl"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

