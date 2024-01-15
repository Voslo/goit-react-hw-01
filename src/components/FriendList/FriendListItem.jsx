import clsx from "clsx";
import css from "./FriendList.module.css";


const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <div className={css.item}>
            <img className="avatar" src={avatar} alt="Avatar" width="48" />
            <p className="name">{name}</p>
            <p className={clsx(css.status, { [css.isOnline]: isOnline, [css.isOffline]: !isOnline })}>
                {isOnline ? 'Online' : 'Offline'}
            </p>

        </div>
    )
}
export default FriendListItem;