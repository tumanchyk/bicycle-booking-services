import BicycleList from "./components/BicycleList/BicycleList"
import Statistic from "./components/Statistic/Statistic"
import Form from "./components/Form/Form"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
function App() {

  return (
    <> 
      <Header/>
    <main> 
        <BicycleList />
        <div>
          <Form />
          <Statistic/>
        </div>
      </main>
      <Footer/>
      </>
  )
}

export default App
