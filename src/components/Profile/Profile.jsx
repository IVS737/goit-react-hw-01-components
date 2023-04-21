import styles from './Profile.module.css';
import PropTypes from 'prop-types';

export const Profile = ({ avatar, username, tag, location, stats }) => (
  <div className={styles.Profile}>
    <div className={styles.Profile__Description}>
      <img src={avatar} alt="User avatar" className={styles.Profile__Avatar} />
      <p className={styles.Profile__Name}>{username}</p>
      <p className={styles.Profile__Tag}>{tag}</p>
      <p className={styles.Profile__Location}>{location}</p>
    </div>

    <ul className={styles.Profile__Stats}>
      <li className={styles.Profile__StatsLink}>
        <span className={styles.Profile__Stats__Label}>Followers</span>
        <span className={styles.Profile__Stats__Quantity}>
          {stats.followers}
        </span>
      </li>
      <li className={styles.Profile__StatsLink}>
        <span className={styles.Profile__Stats__Label}>Views</span>
        <span className={styles.Profile__Stats__Quantity}>{stats.views}</span>
      </li>
      <li className={styles.Profile__StatsLink}>
        <span className={styles.Profile__Stats__Label}>Likes</span>
        <span className={styles.Profile__Stats__Quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    views: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
