import NavBar from "./nav-bar";
import { Route, Switch } from "react-router-dom";
import Home from "../views/home";
import Profile from "../views/profile";
import ExternalApi from "../views/external-api";
import ProtectedRoute from "../auth/protected-route";

const PageContent = ({ children }) => {
  return (
    <>
      <div className="w-full flex flex-col h-screen overflow-y-hidden">
        <NavBar />

        <div className="w-full overflow-x-hidden border-t flex flex-col">
          <main className="w-full flex-grow p-6">
            <Switch>
              <Route path="/" exact component={Home} />
              <ProtectedRoute path="/profile" component={Profile} />
              <ProtectedRoute path="/external-api" component={ExternalApi} />
            </Switch>
          </main>
        </div>
      </div>
    </>
  );
};

export default PageContent;
