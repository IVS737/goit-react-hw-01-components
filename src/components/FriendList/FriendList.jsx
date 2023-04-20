import styles from './FriendList.module.css';

export const FriendList = ({ friends }) => (
  <div className={styles.Container}>
    <ul className={styles.FriendList}>
      {friends.map(item => {
        return (
          <li key={item.id} className={styles.ListItem}>
            <span
              className={item.isOnline ? styles.StatusTrue : styles.StatusFalse}
            ></span>

            <img
              className={styles.Avatar}
              src={item.avatar}
              alt={item.name}
              width={48}
            />
            <p className={styles.Name}>{item.name}</p>
          </li>
        );
      })}
    </ul>
  </div>
);
