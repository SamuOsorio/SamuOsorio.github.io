import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/hero/Hero';
import { SkillsSection } from './components/skills/SkillsSection';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { EducationSection } from './components/education/EducationSection';
import { ContactSection } from './components/contact/ContactSection';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50">
          <Navbar />
          <main>
            <Hero />
            <SkillsSection />
            <ProjectsSection />
            <EducationSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
