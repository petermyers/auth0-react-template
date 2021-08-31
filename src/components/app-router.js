import { Switch } from "react-router-dom";
import PageContent from "./page-content";
import ProtectedRoute from "../auth/protected-route";
import Onboarding from "../views/onboarding";
import CurrentUserHandler from "../auth/current-user-handler";

const AppRouter = () => {
  return (
    <CurrentUserHandler>
      <Switch>
        <ProtectedRoute path="/onboarding" component={Onboarding} />
        <ProtectedRoute path="/" component={PageContent} />
      </Switch>
    </CurrentUserHandler>
  );
};

export default AppRouter;
