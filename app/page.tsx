import { SearchBar } from "@/components/SearchBar/SearchBar";
import { NavBar } from "@/components/TopAppBar/TopAppBar";
import { BlogHub } from "@/modules/Blog/Blog";
import { DualAudience } from "@/modules/DualAudience/DualAudience";
import { GlobalRecruiters } from "@/modules/GlobalRecruiter/GlobalRecruiter";
import JobSection from "@/modules/JobSection/JobSection";
import { LatestJobs } from "@/modules/LatestJobs/LatestJobs";

export default function Home() {
  return (
    <div>
      <main className="min-h-screen relative">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/placeholder.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/40" /> {/* Overlay */}
        </div>

        {/* Content */}
        <NavBar />
        
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Global Talent Alchemists
          </h1>
          <h2 className="text-2xl md:text-3xl text-white mb-8">
            Transforming Talent
          </h2>
          <SearchBar />
        </div>
      </main>

      <GlobalRecruiters />
      <DualAudience />
      <JobSection/>
      <LatestJobs />
      <BlogHub />
    </div>
  )
}

