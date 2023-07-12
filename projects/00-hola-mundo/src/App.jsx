import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {
    return (
        <>
            <TwitterFollowCard userName="@KarC833" name="Karen Cortes" />
            <TwitterFollowCard userName="@elonmusk" name="Elon Musk" />
            <TwitterFollowCard userName="@midudev" name="Miguel Duran" />
        </>
    )
}