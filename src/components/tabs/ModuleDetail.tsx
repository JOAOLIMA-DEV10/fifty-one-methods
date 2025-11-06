import { useState } from 'react';
import { Module } from '../../types';
import { ArrowLeft, Play, CheckCircle2 } from 'lucide-react';

interface ModuleDetailProps {
  module: Module;
  onBack: () => void;
  onLessonComplete?: (lessonId: string) => void;
  completedLessons?: Set<string>;
}

export default function ModuleDetail({ module, onBack, onLessonComplete, completedLessons = new Set() }: ModuleDetailProps) {
  const [currentLesson, setCurrentLesson] = useState(0);

  const handleLessonSelect = (index: number) => {
    setCurrentLesson(index);
  };

  return (
    <div className="min-h-screen bg-background pb-24 pt-6">
      <div className="max-w-7xl mx-auto px-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Voltar</span>
        </button>

        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-primary text-primary-foreground font-bold text-sm px-3 py-1 rounded-full">
              Módulo {module.id}
            </span>
            <h1 className="text-2xl font-bold text-foreground">{module.title}</h1>
          </div>
          <p className="text-muted-foreground">{module.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-card rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-black">
                <iframe
                  src={`${module.lessons[currentLesson].videoUrl}?modestbranding=1&rel=0&showinfo=0&controls=1&autoplay=1`}
                  title={module.lessons[currentLesson].title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h2 className="text-primary text-xl font-bold mb-2">
                  {module.lessons[currentLesson].title}
                </h2>
                <div className="flex items-center gap-4 text-muted-foreground text-sm">
                  <span>Aula {currentLesson + 1} de {module.lessons.length}</span>
                  {module.lessons[currentLesson].duration && (
                    <span>• {module.lessons[currentLesson].duration}</span>
                  )}
                </div>
                {onLessonComplete && (
                  <button
                    onClick={() => onLessonComplete(module.lessons[currentLesson].id)}
                    className="mt-4 bg-secondary hover:bg-primary text-secondary-foreground hover:text-primary-foreground font-semibold py-2 px-6 rounded-lg transition-all duration-300 flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    Marcar como concluída
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-card rounded-2xl p-4 max-h-[600px] overflow-y-auto scrollbar-thin">
              <h3 className="text-foreground font-bold text-lg mb-4">Lista de Aulas</h3>
              <div className="space-y-2">
                {module.lessons.map((lesson, index) => (
                  <button
                    key={lesson.id}
                    onClick={() => handleLessonSelect(index)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                      index === currentLesson
                        ? 'bg-primary/20 border-2 border-primary'
                        : 'bg-background hover:bg-background/80 border-2 border-transparent'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                        completedLessons.has(lesson.id)
                          ? 'bg-secondary'
                          : index === currentLesson
                          ? 'bg-primary'
                          : 'bg-muted'
                      }`}>
                        {completedLessons.has(lesson.id) ? (
                          <CheckCircle2 className="w-5 h-5 text-secondary-foreground" />
                        ) : (
                          <Play className="w-4 h-4 text-foreground" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className={`font-semibold mb-1 ${
                          index === currentLesson ? 'text-primary' : 'text-foreground'
                        }`}>
                          {lesson.title}
                        </h4>
                        {lesson.duration && (
                          <span className="text-muted-foreground text-sm">{lesson.duration}</span>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
