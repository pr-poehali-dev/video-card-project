import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [wishes, setWishes] = useState<Array<{ name: string; text: string }>>([
    { name: 'Мама', text: 'Любимый зять! Желаю тебе здоровья, счастья и успехов во всем! Ты замечательный муж и отец. Пусть все твои мечты сбываются!' },
    { name: 'Папа', text: 'Желаю тебе удачи, крепкого здоровья и семейного благополучия. Ты настоящий мужчина!' }
  ]);
  const [newName, setNewName] = useState('');
  const [newWish, setNewWish] = useState('');
  const [activeSection, setActiveSection] = useState<'home' | 'wishes'>('home');

  const handleAddWish = () => {
    if (newName.trim() && newWish.trim()) {
      setWishes([...wishes, { name: newName, text: newWish }]);
      setNewName('');
      setNewWish('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/30 via-background to-secondary/30">
      <nav className="bg-white/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-center gap-4">
            <Button
              variant={activeSection === 'home' ? 'default' : 'ghost'}
              onClick={() => setActiveSection('home')}
              className="gap-2"
            >
              <Icon name="Home" size={18} />
              Главная
            </Button>
            <Button
              variant={activeSection === 'wishes' ? 'default' : 'ghost'}
              onClick={() => setActiveSection('wishes')}
              className="gap-2"
            >
              <Icon name="Heart" size={18} />
              Пожелания
            </Button>
          </div>
        </div>
      </nav>

      {activeSection === 'home' && (
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
              <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <Icon name="Video" size={64} className="mx-auto mb-4 text-primary" />
                  <p className="text-lg text-muted-foreground mb-4">
                    Видео-поздравление от семьи
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Здесь будет размещено видео-поздравление от родственников
                  </p>
                </div>
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
      )}

      {activeSection === 'wishes' && (
        <section className="container mx-auto px-4 py-16 animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Пожелания от близких</h2>

            <div className="space-y-6 mb-12">
              {wishes.map((wish, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                        {wish.name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{wish.name}</h3>
                        <p className="text-muted-foreground leading-relaxed">{wish.text}</p>
                      </div>
                      <Icon name="Heart" size={24} className="text-secondary flex-shrink-0" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-center">Добавить своё пожелание</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input
                      placeholder="Введите ваше имя"
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                      className="bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше пожелание</label>
                    <Textarea
                      placeholder="Напишите тёплые слова..."
                      value={newWish}
                      onChange={(e) => setNewWish(e.target.value)}
                      rows={4}
                      className="bg-white resize-none"
                    />
                  </div>
                  <Button
                    onClick={handleAddWish}
                    className="w-full gap-2"
                    size="lg"
                  >
                    <Icon name="Send" size={18} />
                    Отправить пожелание
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      <footer className="bg-white/80 backdrop-blur-sm border-t border-border mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>Сделано с любовью для самого лучшего мужа ❤️</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
