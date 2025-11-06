import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Principal from '../components/tabs/Principal';
import ModuleDetail from '../components/tabs/ModuleDetail';
import ContinuarAssistindo from '../components/tabs/ContinuarAssistindo';
import MaisConteudos from '../components/tabs/MaisConteudos';
import Configuracoes from '../components/tabs/Configuracoes';
import AuthGuard from '../components/AuthGuard';
import { modules } from '../data/modules';
import { Module, Lesson } from '../types';

const Index = () => {
  const [activeTab, setActiveTab] = useState('principal');
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());
  const [lastWatched, setLastWatched] = useState<{
    module: Module;
    lesson: Lesson;
    progress: number;
  } | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('completedLessons');
    if (saved) {
      setCompletedLessons(new Set(JSON.parse(saved)));
    }

    const savedLastWatched = localStorage.getItem('lastWatched');
    if (savedLastWatched) {
      const data = JSON.parse(savedLastWatched);
      const module = modules.find(m => m.id === data.moduleId);
      const lesson = module?.lessons.find(l => l.id === data.lessonId);
      if (module && lesson) {
        setLastWatched({
          module,
          lesson,
          progress: data.progress
        });
      }
    }
  }, []);

  const handleModuleSelect = (moduleId: number) => {
    const module = modules.find(m => m.id === moduleId);
    if (module) {
      setSelectedModule(module);
      setLastWatched({
        module,
        lesson: module.lessons[0],
        progress: 0
      });
      localStorage.setItem('lastWatched', JSON.stringify({
        moduleId: module.id,
        lessonId: module.lessons[0].id,
        progress: 0
      }));
    }
  };

  const handleBackToModules = () => {
    setSelectedModule(null);
  };

  const handleLessonComplete = (lessonId: string) => {
    const newCompleted = new Set(completedLessons);
    newCompleted.add(lessonId);
    setCompletedLessons(newCompleted);
    localStorage.setItem('completedLessons', JSON.stringify([...newCompleted]));
  };

  const handleContinueWatching = () => {
    if (lastWatched) {
      setSelectedModule(lastWatched.module);
      setActiveTab('principal');
    }
  };

  return (
    <AuthGuard>
      <div className="min-h-screen bg-background">
        {selectedModule ? (
          <ModuleDetail
            module={selectedModule}
            onBack={handleBackToModules}
            onLessonComplete={handleLessonComplete}
            completedLessons={completedLessons}
          />
        ) : (
          <>
            {activeTab === 'principal' && (
              <Principal modules={modules} onModuleSelect={handleModuleSelect} />
            )}
            {activeTab === 'continuar' && (
              <ContinuarAssistindo
                lastWatched={lastWatched}
                onContinue={handleContinueWatching}
              />
            )}
            {activeTab === 'conteudos' && <MaisConteudos />}
            {activeTab === 'config' && <Configuracoes />}
          </>
        )}
        {!selectedModule && <Navigation activeTab={activeTab} onTabChange={setActiveTab} />}
      </div>
    </AuthGuard>
  );
};

export default Index;
