
import { ArrowRight, Globe, MapPin, Truck, Ship, PaintBucket, Scale, Laptop, Building2, DollarSign, Users, Briefcase, Box } from 'lucide-react'

const categories = [
  { name: "GLOBAL MOBILITY", icon: Globe },
  { name: "RELOCATION SERVICES", icon: MapPin },
  { name: "MOVING SERVICES", icon: Truck },
  { name: "SHIPPING", icon: Ship },
  { name: "FINE ART & GALLERY", icon: PaintBucket },
  { name: "LEGAL & IMMIGRATION", icon: Scale },
  { name: "TECHNOLOGY", icon: Laptop },
  { name: "CORPORATE HOUSING", icon: Building2 },
  { name: "TOTAL REWARD", icon: DollarSign },
  { name: "HUMAN RESOURCES", icon: Users },
  { name: "FINANCE", icon: Briefcase },
  { name: "LOGISTICS", icon: Box },
]

const jobs = [
  {
    title: "Relocation Client Services Consultant",
    location: "Sao Paulo, Brazil",
  },
  {
    title: "International Move Manager",
    location: "Sterling, Virginia, United States",
  },
  {
    title: "Accounts Payable",
    location: "Dallas, Texas, United States",
  },
  {
    title: "Export Coordinator",
    location: "Grimsby, Lincolnshire, United Kingdom",
  },
  {
    title: "National Shuttle Manager",
    location: "Irving, Texas, United States",
  },
  {
    title: "Art Handler/Driver",
    location: "Aspen, Colorado, United States",
  },
]

export function LatestJobs() {
  return (
    <section className="bg-gradient-to-b from-[#1a1a1a] to-[#0d2229] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Latest Jobs</h2>
          <p className="text-white/90 text-lg">
            Know what you're looking for? Jump straight to:
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <button
                key={category.name}
               
                className="bg-[#1e3641] hover:bg-[#254451] text-white border-none"
              >
                <Icon className="mr-2 h-4 w-4" />
                {category.name}
              </button>
            )
          })}
        </div>

        {/* Jobs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            // <Card key={job.title} className="bg-[#1e2937] border-none">
            //   <CardContent className="p-6">
            //     <div className="space-y-4">
            //       <h3 className="text-xl font-semibold text-white">
            //         {job.title}
            //       </h3>
            //       <p className="text-white/70">{job.location}</p>
            //       <Button className="bg-[#00ffa3] hover:bg-[#00df8f] text-black">
            //         View job <ArrowRight className="ml-2 h-4 w-4" />
            //       </Button>
            //     </div>
            //   </CardContent>
            // </Card>
            <div key={job.title}>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

