import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'


export default function App() {

  return (
    <section className='App'>
      <TwitterFollowCard isfollowing={false } userName="midudev">
      Miguel Duran
      </TwitterFollowCard>
      <TwitterFollowCard isfollowing={false } userName="karenco95614434 ">
      Karen Cortes
      </TwitterFollowCard>
      <TwitterFollowCard isfollowing={false } userName="KarC833">
      Karen Cortes
      </TwitterFollowCard>
    </section>
  )
}
