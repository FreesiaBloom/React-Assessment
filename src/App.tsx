import Header from './modules/core/components/Header';
import Footer from './modules/core/containers/Footer';
import Navbar from './modules/core/containers/Navbar';
import Dashboard from './modules/dashboard/components/Dashboard';

function App() {
  return(
    <>
      <Navbar />
      <Header />
      <Dashboard />
      <Footer />
    </>
  )
}

export default App
