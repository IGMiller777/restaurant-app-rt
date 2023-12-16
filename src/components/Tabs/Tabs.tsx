import styles from './styles.module.css';
import { Tab } from '../Tab/Tab';

interface Tab {
    id: string;
    title: string;
}

interface TabsProps {
    tabs: Tab[];
}


export const Tabs: React.FC<TabsProps> = ({tabs}) => {
    return (
        <div className={styles.root}>
            {tabs.map(({id, title}) => (
                <Tab title={title} to={id} className={styles.root}/>
            ))}
        </div>
    );
};
