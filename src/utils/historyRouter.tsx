import { ReactNode } from "react";
import { useLayoutEffect, useState } from "react";
import { History } from "history";
import { Router } from "react-router-dom";

import { createBrowserHistory } from "history";

export const browserHistory = createBrowserHistory({ window });

export interface BrowserRouterProps {
  basename?: string;
  children?: ReactNode;
  history: History;
}
export function HistoryRouter({
  basename,
  children,
  history,
}: BrowserRouterProps) {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      basename={basename}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    >
      {children}
    </Router>
  );
}
