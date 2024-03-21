import styles from "./app.module.scss";
import FormMain from "./components/form-main";

const App = () => {
  return (
    <div className={styles.app}>
      <FormMain />
    </div>
  );
};

export default App;
