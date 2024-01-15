import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {

    return (
        <div className={css.profile}>
            <div className="description">
                <img
                    src={image}
                    alt="User avatar"
                    className="avatar"
                    width="200px"
                />
                <p className="name">{name}</p>
                <p className="tag">@{tag}</p>
                <p className="location">{location}</p>
            </div>
            <ul className={css.stats}>
                <li className={css.statsItem}>
                    <span className="label">Followers</span>
                    <span className="value">{stats.followers}</span>
                </li>
                <li className={css.statsItem}>
                    <span className="label">Views</span>
                    <span className="value">{stats.views}</span>
                </li>
                <li className={css.statsItem}>
                    <span className="label">Likes</span>
                    <span className="value">{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
}
export default Profile;