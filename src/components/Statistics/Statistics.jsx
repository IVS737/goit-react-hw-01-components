import styles from './Statistics.module.css';

export const Statistics = props => {
  const Arr = props.stats;
  return (
    <div className={styles.Container}>
      <section className={styles.Statistics}>
        <h2 className={styles.Statistics__Title}>{props.title}</h2>

        <ul className={styles.Statistics__StatList}>
          {Arr.map(item => {
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
