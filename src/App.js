import News from "./components/news";
import { Route, BrowserRouter, Switch} from "react-router-dom";
import Story from "./components/story";

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
            <News />
        </Route>
        <Route path="/stories/:id" children={<Story/>} />
      </Switch>
    </BrowserRouter>
      
  );
}

export default App;
