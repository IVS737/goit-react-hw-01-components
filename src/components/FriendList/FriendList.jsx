import styles from './FriendList.module.css';
import { FriendListItem } from './FriendListItem/FriendListItem';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => (
  <div className={styles.Container}>
    <ul className={styles.FriendList}>
      {friends.map(item => {
        return (
          <FriendListItem
            isOnline={item.isOnline}
            id={item.id}
            name={item.name}
            avatar={item.avatar}
            key={item.id}
          />
        );
      })}
    </ul>
  </div>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ).isRequired,
};
