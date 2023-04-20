import styles from './Profile.module.css';
import PropTypes from 'prop-types';

export const Profile = props => (
  <div className={styles.Profile}>
    <div className={styles.Profile__Description}>
      <img
        src={props.avatar}
        alt="User avatar"
        className={styles.Profile__Avatar}
      />
      <p className={styles.Profile__Name}>{props.username}</p>
      <p className={styles.Profile__Tag}>{props.tag}</p>
      <p className={styles.Profile__Location}>{props.location}</p>
    </div>

    <ul className={styles.Profile__Stats}>
      <li className={styles.Profile__StatsLink}>
        <span className={styles.Profile__Stats__Label}>Followers</span>
        <span className={styles.Profile__Stats__Quantity}>
          {props.stats.followers}
        </span>
      </li>
      <li className={styles.Profile__StatsLink}>
        <span className={styles.Profile__Stats__Label}>Views</span>
        <span className={styles.Profile__Stats__Quantity}>
          {props.stats.views}
        </span>
      </li>
      <li className={styles.Profile__StatsLink}>
        <span className={styles.Profile__Stats__Label}>Likes</span>
        <span className={styles.Profile__Stats__Quantity}>
          {props.stats.likes}
        </span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  views: PropTypes.number,
  followers: PropTypes.number,
  likes: PropTypes.number,
};
