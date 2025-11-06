import { Module } from '../../types';
import { ChevronRight } from 'lucide-react';

interface PrincipalProps {
  modules: Module[];
  onModuleSelect: (moduleId: number) => void;
}

export default function Principal({ modules, onModuleSelect }: PrincipalProps) {
  return (
    <div className="min-h-screen bg-background pb-24 pt-6 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">Métodos de Treino</h1>
          <p className="text-muted-foreground">Domine os 51 métodos de treinamento</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => (
            <div
              key={module.id}
              onClick={() => onModuleSelect(module.id)}
              className="group bg-card rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={module.coverImage}
                  alt={module.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                <div className="absolute top-3 left-3 bg-primary text-primary-foreground font-bold text-sm px-3 py-1 rounded-full">
                  Módulo {module.id}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-foreground font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {module.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {module.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-sm">{module.lessons.length} aulas</span>
                  <button className="bg-secondary hover:bg-primary text-secondary-foreground hover:text-primary-foreground font-semibold py-2 px-4 rounded-lg transition-all duration-300 flex items-center gap-2 text-sm">
                    Ver aulas
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
