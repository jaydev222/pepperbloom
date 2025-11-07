import Hero from './components/Hero';
import IntroSection from './components/IntroSection';
import ServicesPreview from './components/ServicesPreview';
import PageNav from './components/PageNav';

function App() {
  return (
    <main className="min-h-screen">
      <Hero />
      <IntroSection />
      <ServicesPreview />
      <PageNav />
    </main>
  );
}

export default App;
