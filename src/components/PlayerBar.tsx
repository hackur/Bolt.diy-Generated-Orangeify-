import { Play, SkipBack, SkipForward, Repeat, Shuffle, Volume2, Maximize2, ListMusic } from 'lucide-react'

export function PlayerBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-20 bg-zinc-950 border-t border-zinc-800 px-4 py-3">
      <div className="flex items-center justify-between h-full">
        <div className="flex items-center gap-3 w-80">
          <img 
            src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=56&h=56&fit=crop" 
            alt="Album Cover" 
            className="w-14 h-14"
          />
          <div className="flex flex-col">
            <span className="font-semibold">Track Name</span>
            <span className="text-xs text-zinc-400">Artist Name</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 flex-1">
          <div className="flex items-center gap-6">
            <button className="text-zinc-200 hover:text-white">
              <Shuffle className="h-5 w-5" />
            </button>
            <button className="text-zinc-200 hover:text-white">
              <SkipBack className="h-5 w-5" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-black hover:scale-105">
              <Play className="h-5 w-5 fill-current" />
            </button>
            <button className="text-zinc-200 hover:text-white">
              <SkipForward className="h-5 w-5" />
            </button>
            <button className="text-zinc-200 hover:text-white">
              <Repeat className="h-5 w-5" />
            </button>
          </div>
          
          <div className="flex items-center gap-2 w-full max-w-md">
            <span className="text-xs text-zinc-400">1:30</span>
            <div className="h-1 rounded-full flex-1 bg-zinc-600">
              <div className="h-1 rounded-full bg-orange-500 w-1/3" />
            </div>
            <span className="text-xs text-zinc-400">3:45</span>
          </div>
        </div>

        <div className="flex items-center gap-4 w-80 justify-end">
          <button className="text-zinc-200 hover:text-white">
            <ListMusic className="h-5 w-5" />
          </button>
          <button className="text-zinc-200 hover:text-white">
            <Volume2 className="h-5 w-5" />
          </button>
          <div className="w-24 h-1 rounded-full bg-zinc-600">
            <div className="h-1 rounded-full bg-orange-500 w-1/2" />
          </div>
          <button className="text-zinc-200 hover:text-white">
            <Maximize2 className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
