import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, Component } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LeadModal from './components/LeadModal';
import { LeadModalProvider } from './context/LeadModalContext';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Leadership from './pages/Leadership';
import Services from './pages/Services';
import Contact from './pages/Contact';

// Error Boundary Component
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Error logging can be added here if needed
  }

  render() {
    if (this.state.hasError) {
      return <div>Error: {this.state.error?.message}</div>;
    }
    return this.props.children;
  }
}

// Scroll to top
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const App = () => {
  return (
    <ErrorBoundary>
      <LeadModalProvider>
        <Router>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen text-brand-navy bg-white font-sans antialiased overflow-x-hidden">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/leadership" element={<Leadership />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
            <LeadModal />
          </div>
        </Router>
      </LeadModalProvider>
    </ErrorBoundary>
  );
};

export default App;
