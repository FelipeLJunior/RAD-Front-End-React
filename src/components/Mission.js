import styles from './css/mission.module.css';

function Mission({id, crew, status, destiny, usefulLoad, duration, cost, date}) {
    return (
        <div className={styles.MissionBox}>
            <p id={styles.Date}>{date}</p>
            <p className={styles.SubTitle}>Id: <span className={styles.Content}>{id}</span></p>
            <p className={styles.SubTitle}>Tripulação: <span className={styles.Content}>{crew}</span></p>
            <p className={styles.SubTitle}>Status: <span className={styles.Content}>{status}</span></p>
            <p className={styles.SubTitle}>Destino: <span className={styles.Content}>{destiny}</span></p>
            <p className={styles.SubTitle}>Carga Útil: <span className={styles.Content}>{usefulLoad}</span></p>
            <p className={styles.SubTitle}>Duração: <span className={styles.Content}>{duration}</span></p>
            <p className={styles.SubTitle}>Custos: <span className={styles.Content}>{cost}</span></p>
        </div>
    );
}

export default Mission;