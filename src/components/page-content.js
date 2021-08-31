import NavBar from "./nav-bar";
import Home from "../views/home";
import Profile from "../views/profile";
import ExternalApi from "../views/external-api";
import ProtectedRoute from "../auth/protected-route";
import LeftNav from "./left-nav";
import { Switch } from "react-router-dom";

const PageContent = () => {
  return (
    <>
      <LeftNav />
      <div className="w-full flex flex-col h-screen overflow-y-hidden">
        <NavBar />

        <div className="w-full overflow-x-hidden border-t flex flex-col">
          <main className="w-full flex-grow py-8 px-4 sm:px-24 md:px-28">
            <Switch>
              <ProtectedRoute path="/home" component={Home} />
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
