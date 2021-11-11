import "../styles/qualtrics.css";
import React from "react";
import Header from "./header";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const Layout = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="Layout greyBackground">
        <Header />
        <main className="MainContent">{children}</main>
      </div>
    </QueryClientProvider>
  );
};

export default Layout;
