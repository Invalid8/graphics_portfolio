import { Helmet } from "react-helmet";
import UserInfo from "./data/UserInfo";
import Main from "./Main";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>{UserInfo.name && UserInfo.name} - Portfolio</title>
      </Helmet>
      <Main />
    </div>
  );
}

export default App;
