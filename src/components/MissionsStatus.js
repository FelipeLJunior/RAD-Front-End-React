import styles from './css/missionStatus.module.css';
import StatusBlock from './StatusBlock';

function MissionsStatus({total, actives, nextMonth}) {
    return (
        <div className={styles.MissionsStatus}>
            <StatusBlock title="Total de missões" status="4"/>
            <StatusBlock title="Missões atuais" status="4"/>
            <StatusBlock title="Próximo mês" status="4"/>
        </div>
    );
}

export default MissionsStatus;