import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const videoUrl = 'https://drive.google.com/file/d/155dyfnZhIBTojwwFMtXm3p-2lfw9QRfd/preview';

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/30 via-background to-secondary/30">
      <section className="container mx-auto px-4 py-16 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            С Днём Рождения! 🎉
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Дорогой, мы все собрались вместе, чтобы поздравить тебя в этот особенный день
          </p>
        </div>

        <Card className="max-w-4xl mx-auto overflow-hidden shadow-2xl animate-scale-in">
          <CardContent className="p-0">
            <div className="relative aspect-video bg-black">
              <iframe
                src={videoUrl}
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Видео-поздравление"
              />
            </div>
          </CardContent>
        </Card>

        <div className="max-w-4xl mx-auto mt-12 text-center">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Icon name="Cake" size={40} className="mx-auto mb-3 text-secondary" />
                <h3 className="font-semibold mb-2">Много радости</h3>
                <p className="text-sm text-muted-foreground">Пусть каждый день приносит улыбки</p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Icon name="Heart" size={40} className="mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2">Крепкого здоровья</h3>
                <p className="text-sm text-muted-foreground">Здоровья тебе и всей семье</p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Icon name="Sparkles" size={40} className="mx-auto mb-3 text-accent" />
                <h3 className="font-semibold mb-2">Исполнения мечт</h3>
                <p className="text-sm text-muted-foreground">Пусть сбудутся все желания</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-white/80 backdrop-blur-sm border-t border-border mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>Сделано с любовью ❤️</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
