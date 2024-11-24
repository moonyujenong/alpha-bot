import "./App.css";
import { HistoryRouter, browserHistory } from "./utils/historyRouter.tsx";
import Routes from "./routes";

function App() {
  return (
    <HistoryRouter history={browserHistory}>
      <Routes />
    </HistoryRouter>
  );
}

export default App;
