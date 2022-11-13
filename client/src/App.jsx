import { Navbar, Welcome, Footer, Services, Transactions } from "./components";
import Options from "./components/Options";

const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
    </div>
    <Services />
    {/* <Options /> */}

    {/* <Transactions /> */}
    <Footer />
  </div>
);

export default App;
