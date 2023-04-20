import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ stats, title }) => {
  return (
    <div className={styles.Container}>
      <section className={styles.Statistics}>
        <h2 className={styles.Statistics__Title}>{title}</h2>

        <ul className={styles.Statistics__StatList}>
          {stats.map(item => {
            return (
              <li key={item.id} className={styles.Statistics__StatListItem}>
                <span className={styles.Statistics__StatListItemLabel}>
                  {item.label}
                </span>
                <span className={styles.Statistics__StatListItemPercentage}>
                  {item.percentage}%
                </span>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

Statistics.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
