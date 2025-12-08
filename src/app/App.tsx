import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { HomePage } from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";
import { Header, Footer } from "../widgets";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ErrorBoundary } from "./providers/ui/errorBoundary";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <div className="App">
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
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
