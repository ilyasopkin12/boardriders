import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { HomePage } from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";
import { Header, Footer } from "../widgets";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ErrorBoundary } from "./providers/ui/errorBoundary";
import { ClientChat, OperatorPanel } from "./features";
const queryClient = new QueryClient();
const userId = "1";
const operatorId = "2";
const isOperator = true;
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <div className="App">
          <BrowserRouter>
            <Header />
            {isOperator ? <OperatorPanel userId={operatorId} /> : <ClientChat userId={userId} />}
            <Routes>
              <Route path="/homepage" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

export default App;
