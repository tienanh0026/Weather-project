import Layout from '../components/layout';
import ConfigRouter from '../modules/routes';
import '../styles/globals.sass';
function App() {
  return (
    <>
      <Layout>
        <ConfigRouter />
      </Layout>
    </>
  );
}

export default App;
