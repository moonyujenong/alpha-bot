import React, { Fragment } from "react";

const lazy = (
  factory: () => Promise<{
    default: () => JSX.Element;
  }>,
) => {
  const Element = React.lazy(factory);

  const renderComponent = () => (
    <React.Suspense fallback={<Fragment />}>
      <Element />
    </React.Suspense>
  );

  return renderComponent;
};

export default lazy;
