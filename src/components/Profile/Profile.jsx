import styles from './Profile.module.css';

export const Profile = props => {
  return (
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
};
