import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SearchWidget from './components/SearchWidget';
import HowItWorks from './components/HowItWorks';
import CarCollection from './components/CarCollection';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { CarProvider } from './context/CarContext';

function App() {
  return (
    <div className="min-h-screen">
      <CarProvider>
        <Header />
        <main>
          <Hero />
          <SearchWidget />
          <HowItWorks />
          <CarCollection />
          <WhyChooseUs />
          <Testimonials />
        </main>
        <Footer />
      </CarProvider>
    </div>
  );
}

export default App;
