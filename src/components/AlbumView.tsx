import { Play, Heart, MoreHorizontal, Clock3 } from 'lucide-react'

export function AlbumView() {
  return (
    <div className="bg-gradient-to-b from-orange-900 to-zinc-900">
      <div className="px-6 py-4">
        <div className="flex items-end gap-6 p-6">
          <img 
            src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=300&h=300&fit=crop" 
            alt="Album Cover" 
            className="w-56 h-56 shadow-2xl"
          />
          <div className="flex flex-col gap-3">
            <span className="text-sm font-semibold">Album</span>
            <h1 className="text-5xl font-bold">Midnight Memories</h1>
            <div className="flex items-center gap-2 mt-4">
              <img 
                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=30&h=30&fit=crop" 
                alt="Artist" 
                className="w-6 h-6 rounded-full"
              />
              <span className="text-sm font-semibold">Artist Name</span>
              <span className="text-sm text-zinc-400">• 2024 • 12 songs, 48 min</span>
            </div>
          </div>
        </div>

        <div className="mt-8 px-6">
          <div className="flex items-center gap-4">
            <button className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-500 text-black hover:bg-orange-400">
              <Play className="h-6 w-6 fill-current" />
            </button>
            <button className="p-2 hover:text-orange-500">
              <Heart className="h-8 w-8" />
            </button>
            <button className="p-2 hover:text-orange-500">
              <MoreHorizontal className="h-8 w-8" />
            </button>
          </div>

          <table className="w-full mt-8 text-sm text-left text-zinc-400">
            <thead className="text-xs border-b border-zinc-700">
              <tr>
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2"><Clock3 className="h-4 w-4" /></th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 12 }).map((_, i) => (
                <tr key={i} className="hover:bg-white/5">
                  <td className="px-4 py-3">{i + 1}</td>
                  <td className="px-4 py-3">
                    <div>
                      <p className="text-white">Track {i + 1}</p>
                      <p className="text-sm">Artist Name</p>
                    </div>
                  </td>
                  <td className="px-4 py-3">3:45</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
