import styles from "../styles/App.module.css";
import Dashboard from '../components/Dashboard';

const App =() => {
  return (
    <div className={styles['App']}>
      <Dashboard/>
    </div>
  );
}

export default App;
