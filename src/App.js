import News from "./components/news";
import { Route, BrowserRouter, Switch} from "react-router-dom";
import Story from "./components/story";
import './index.css'

function App() {

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Switch>
          <Route exact path="/">
              <News />
          </Route>
          <Route path="/stories/:id" children={<Story/>} />
        </Switch>
      </div>
    </BrowserRouter>
      
  );
}

export default App;
