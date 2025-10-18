import { useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [videoUrl, setVideoUrl] = useState<string>('https://drive.google.com/file/d/155dyfnZhIBTojwwFMtXm3p-2lfw9QRfd/preview');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoUrl(url);
    }
  };

  const handleVideoUrlChange = (url: string) => {
    setVideoUrl(url);
  };

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
            {videoUrl ? (
              <div className="relative aspect-video bg-black">
                <iframe
                  src={videoUrl}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="Видео-поздравление"
                />
              </div>
            ) : (
              <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-center p-8 max-w-md">
                  <Icon name="Video" size={64} className="mx-auto mb-4 text-primary" />
                  <p className="text-lg font-semibold mb-4">
                    Загрузите видео-поздравление
                  </p>
                  <div className="space-y-4">
                    <Button
                      onClick={() => fileInputRef.current?.click()}
                      size="lg"
                      className="gap-2"
                    >
                      <Icon name="Upload" size={18} />
                      Выбрать файл с компьютера
                    </Button>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="video/*"
                      onChange={handleVideoUpload}
                      className="hidden"
                    />
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-muted-foreground/20" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-gradient-to-br from-primary/20 to-secondary/20 px-2 text-muted-foreground">
                          или
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Вставьте ссылку на видео (YouTube, Google Drive...)"
                        onChange={(e) => handleVideoUrlChange(e.target.value)}
                        className="bg-white"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
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