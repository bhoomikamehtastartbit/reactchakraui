// Importing necessary modules and components
import { ChakraProvider, Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Importing custom components and pages
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Tables from './pages/Tables';
import Services from './pages/Services';  // Add this import
import Components from './pages/Components';

function App() {
  return (
     // Wrapping the app in ChakraProvider to enable Chakra UI styling
    <ChakraProvider>
      <Router>
        <Box minH="100vh">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/services" element={<Services />} />
            // In your Routes:
            <Route path="/components" element={<Components />} />
          </Routes>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
