import React from "react";

const Layout = ({ children }) => {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: 20 }}>
      {children}
    </div>
  );
};

export default Layout;