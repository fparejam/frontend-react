import styles from "../styles/App.module.css";
import Dashboard from '../components/Dashboard';
import Header from "../components/Header";

const App =() => {
  return (
    <div className={styles['App']}>
      <Header/>
      <Dashboard/>
    </div>
  );
}

export default App;
