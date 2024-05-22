import styles from './css/statusBlock.module.css';

function StatusBlock({title, status}) {
    return (
        <div className={styles.StatusBlock}>
            <span className={styles.StatusTitle}>{title}</span>
            <span className={styles.StatusContent}>{status}</span>
        </div>
    );
}

export default StatusBlock;