import { ExternalLink } from 'lucide-react';

export default function MaisConteudos() {
  const products = [
    {
      id: 1,
      title: 'Rotinas Imprimíveis',
      subtitle: 'Hora de Dormir',
      description: 'Guias práticos e rotinas estruturadas para otimizar seu descanso e recuperação muscular.',
      image: 'https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'R$ 47,00',
      link: '#',
      badge: 'Novo'
    },
    {
      id: 2,
      title: 'Consultoria Express',
      subtitle: 'Avaliação personalizada',
      description: 'Análise completa do seu treino atual + plano personalizado de evolução.',
      image: 'https://images.pexels.com/photos/6551415/pexels-photo-6551415.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'R$ 197,00',
      link: '#',
      badge: 'Exclusivo'
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-24 pt-6 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">Mais Conteúdos</h1>
          <p className="text-muted-foreground">Potencialize seus resultados com conteúdos exclusivos</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-card rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 bg-destructive text-destructive-foreground font-bold text-sm px-3 py-1 rounded-full">
                  {product.badge}
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-foreground font-bold text-2xl mb-1">
                    {product.title}
                  </h3>
                  <p className="text-primary font-semibold text-sm">
                    {product.subtitle}
                  </p>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-muted-foreground text-sm block">A partir de</span>
                    <span className="text-primary font-bold text-2xl">{product.price}</span>
                  </div>
                  <a
                    href={product.link}
                    className="bg-secondary hover:bg-primary text-secondary-foreground hover:text-primary-foreground font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center gap-2"
                  >
                    Acessar
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary/30 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground text-2xl font-bold">!</span>
            </div>
            <div>
              <h3 className="text-foreground font-bold text-lg mb-2">
                Pacote Completo Premium
              </h3>
              <p className="text-muted-foreground mb-4">
                Adquira os dois produtos juntos e ganhe 30% de desconto + bônus exclusivos.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-primary hover:text-foreground font-semibold transition-colors"
              >
                Ver oferta especial
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
