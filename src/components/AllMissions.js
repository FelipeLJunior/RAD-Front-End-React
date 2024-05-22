import styles from './css/missions.module.css';
import Mission from './Mission';

function Missions() {
    return (
        <div className={styles.Bottom}>
            <h2 id={styles.Title}>Missões</h2>
            <div className={styles.AllMissions}>
                <Mission id="1" crew="Gabriel, Gabriely, Felipe, Adalberto" status="Ativa" destiny="Bem ali" usefulLoad="Algo importante" duration="07 dias" cost="1090" date="01/01/2023"/>
                <Mission id="2" crew="Gabriel, Gabriely, Felipe, Adalberto" status="Ativa" destiny="Bem ali" usefulLoad="Algo importante" duration="07 dias" cost="1090" date="01/01/2023"/>
                <Mission id="3" crew="Gabriel, Gabriely, Felipe, Adalberto" status="Ativa" destiny="Bem ali" usefulLoad="Algo importante" duration="07 dias" cost="1090" date="01/01/2023"/>
            </div>
        </div>
    );
}

export default Missions;