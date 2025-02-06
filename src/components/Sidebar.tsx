import { Home, Search, Library, PlusSquare, Heart, Music4 } from 'lucide-react'

export function Sidebar() {
  return (
    <aside className="w-64 bg-black p-6">
      <div className="flex items-center gap-2 mb-8">
        <Music4 className="h-8 w-8 text-orange-500" />
        <span className="font-bold text-xl">Orangify</span>
      </div>
      
      <nav className="space-y-5">
        <a href="#" className="flex items-center gap-3 text-sm font-semibold text-zinc-200 hover:text-white">
          <Home className="h-6 w-6" />
          Home
        </a>
        <a href="#" className="flex items-center gap-3 text-sm font-semibold text-zinc-200 hover:text-white">
          <Search className="h-6 w-6" />
          Search
        </a>
        <a href="#" className="flex items-center gap-3 text-sm font-semibold text-zinc-200 hover:text-white">
          <Library className="h-6 w-6" />
          Your Library
        </a>
      </nav>

      <nav className="mt-10 pt-6 border-t border-zinc-800 space-y-4">
        <a href="#" className="flex items-center gap-3 text-sm font-semibold text-zinc-200 hover:text-white">
          <PlusSquare className="h-6 w-6" />
          Create Playlist
        </a>
        <a href="#" className="flex items-center gap-3 text-sm font-semibold text-zinc-200 hover:text-white">
          <Heart className="h-6 w-6" />
          Liked Songs
        </a>
      </nav>

      <nav className="mt-6 pt-6 border-t border-zinc-800 space-y-3">
        {Array.from({ length: 10 }).map((_, i) => (
          <a key={i} href="#" className="text-sm text-zinc-400 hover:text-white block">
            My Playlist #{i + 1}
          </a>
        ))}
      </nav>
    </aside>
  )
}
