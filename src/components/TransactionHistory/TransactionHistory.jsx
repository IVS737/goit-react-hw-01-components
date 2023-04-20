import styles from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <div className={styles.Container}>
      <table className={styles.TransactionHistory}>
        <thead>
          <tr className={styles.TitleList}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody className={styles.TransactionList}>
          {items.map(item => {
            return (
              <tr key={item.id} className={styles.TransactionItem}>
                <td>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
