import styles from './FriendListItem.module.css';
import PropTypes from 'prop-types';

export const FriendListItem = ({ id, isOnline, name, avatar }) => {
  return (
    <li key={id} className={styles.ListItem}>
      <span
        className={isOnline ? styles.StatusTrue : styles.StatusFalse}
      ></span>

      <img className={styles.Avatar} src={avatar} alt={name} width={48} />
      <p className={styles.Name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
