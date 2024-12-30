import { ArrowRight } from 'lucide-react'


export function DualAudience() {
  return (
    <section className="bg-[#1a1a1a]">
      <div className="grid md:grid-cols-2">
        {/* Candidates Section */}
        <div className="relative group">
          <div className="aspect-[4/3] relative overflow-hidden">
            <img
              src="/placeholder.svg"
              alt="Professional candidate smiling while using phone"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-8 space-y-4">
            <h2 className="text-4xl font-bold text-white">Candidates</h2>
            <p className="text-white/90 text-lg">
              We are here to help you find your ideal role
            </p>
            <button 
         
              className="bg-[#ffeb3b] hover:bg-[#fdd835] text-black"
            >
              Learn more <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Clients Section */}
        <div className="relative group">
          <div className="aspect-[4/3] relative overflow-hidden">
            <img
              src="/placeholder.svg"
              alt="Professional client working on laptop and phone"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-8 space-y-4">
            <h2 className="text-4xl font-bold text-white">Clients</h2>
            <p className="text-white/90 text-lg">
              We are here to solve your hiring needs
            </p>
            <button 
              className="bg-[#00ffa3] hover:bg-[#00df8f] text-black"
            >
              Learn more <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

