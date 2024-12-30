import { Search } from 'lucide-react'

export function SearchBar() {
  return (
    <div className="relative max-w-xl w-full">
      <input
        type="text"
        placeholder="Search keyword or location..."
        className="w-full px-4 py-3 rounded-lg bg-black/20 backdrop-blur-sm text-white placeholder-gray-300 border border-white/20"
      />
      <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-[#00ffa3] rounded-lg hover:bg-[#00df8f] transition-colors">
        <Search className="h-5 w-5 text-black" />
      </button>
    </div>
  )
}

