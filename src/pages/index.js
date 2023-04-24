import styles from "../styles/App.module.css";
import Dashboard from '../components/Dashboard';
import Header from "../components/Header";
import Footer from "../components/Footer";

const App =() => {
  return (
    <div className={styles['App']}>
      <Header/>
      <Dashboard/>
      <Footer/>
    </div>
  );
}

export default App;
