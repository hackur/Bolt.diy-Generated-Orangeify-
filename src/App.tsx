import { Layout } from './components/Layout'
import { AlbumView } from './components/AlbumView'
import { PlayerBar } from './components/PlayerBar'

function App() {
  return (
    <div className="h-screen bg-zinc-900 text-white overflow-hidden">
      <Layout>
        <AlbumView />
      </Layout>
      <PlayerBar />
    </div>
  )
}

export default App
