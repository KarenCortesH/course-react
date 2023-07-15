import { useState } from "react";
export function TwitterFollowCard({ children, userName }) {

    //Inicializando el estado
    const [isfollowing, setIsFollowing] = useState(false);
    const text = isfollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isfollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'
        const handleClick = () => {
            setIsFollowing(!isfollowing)
        }
        return (
        <>
            <article className='tw-followCard'>
                <header className='tw-followCard-header'>
                    <img className='tw-followCard-avatar' src={`https://unavatar.io/${userName}`} alt="avatar" />
                    <div className='tw-followCard-info'>
                        <strong>{children}</strong>
                        <span className='tw-followCard-infoUserName'>@{userName}</span>
                    </div>
                </header>
                <aside>
                    <button className={buttonClassName} onClick={handleClick}>{text}</button>
                </aside>
            </article>
        </>
    )
}