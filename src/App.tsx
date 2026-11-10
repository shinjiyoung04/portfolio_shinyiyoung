import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { PhotoProvider } from './context/PhotoContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { FeaturedProjects } from './components/FeaturedProjects';
import { ProblemSolving } from './components/ProblemSolving';
import { EducationCertifications } from './components/EducationCertifications';
import { ResumeSection } from './components/ResumeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { RecruiterQuickView } from './components/RecruiterQuickView';
import { PhotoUploadModal } from './components/PhotoUploadModal';
import { ProjectData } from './types/portfolio';
import { PROJECTS_DATA } from './data/portfolioData';

function PortfolioApp() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [isQuickScanOpen, setIsQuickScanOpen] = useState(false);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);

  // Check URL hash on initial mount for direct deep linking (e.g. #project-bookcast)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#project-')) {
        const projectId = hash.replace('#project-', '');
        const found = PROJECTS_DATA.find((p) => p.id === projectId);
        setSelectedProject(found ?? null);
        setIsQuickScanOpen(false);
      } else if (hash === '#quick-scan') {
        setSelectedProject(null);
        setIsQuickScanOpen(true);
      } else {
        setSelectedProject(null);
        setIsQuickScanOpen(false);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOpenProjectById = (projectId: string) => {
    const found = PROJECTS_DATA.find((p) => p.id === projectId);
    if (found) setSelectedProject(found);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors selection:bg-blue-600 selection:text-white">
      {/* 3-Zone Navigation Header */}
      <Header onOpenQuickScan={() => setIsQuickScanOpen(true)} />

      <main className="flex-1">
        {/* Section 01: Hero / Introduction */}
        <Hero onOpenPhotoModal={() => setIsPhotoModalOpen(true)} />

        {/* Lead with the applicant's selected projects. */}
        <FeaturedProjects onSelectProject={(project) => setSelectedProject(project)} />
        <AboutMe />

        {/* Section 04: Problem Solving (STAR Cases) */}
        <ProblemSolving />

        {/* Section 05: Education & Certifications */}
        <EducationCertifications />

        {/* Related project documentation */}
        <ResumeSection />

        {/* Section 07: Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => {
          setSelectedProject(null);
          if (window.location.hash.startsWith('#project-')) {
            history.replaceState(null, '', window.location.pathname + window.location.search + '#projects');
          }
        }}
      />

      <RecruiterQuickView
        isOpen={isQuickScanOpen}
        onClose={() => {
          setIsQuickScanOpen(false);
          if (window.location.hash === '#quick-scan') {
            history.replaceState(null, '', window.location.pathname + window.location.search);
          }
        }}
        onOpenProject={handleOpenProjectById}
      />

      <PhotoUploadModal
        isOpen={isPhotoModalOpen}
        onClose={() => setIsPhotoModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PhotoProvider>
          <PortfolioApp />
        </PhotoProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
