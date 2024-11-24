import React from "react";
import { useRoutes } from "react-router-dom";
import Layout from "../layout";
import signUpRoutes from "../features/user/routes";

const Routes = () => {
  return (
    <React.Suspense>
      {useRoutes([
        {
          path: "/",
          element: <Layout />,
          children: [...signUpRoutes],
        },
      ])}
    </React.Suspense>
  );
};

export default Routes;
