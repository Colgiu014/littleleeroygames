import { Gamepad2, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <div className="inline-flex items-center justify-center hero-fade" style={{ animationDelay: '80ms' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-purple-500 to-pink-500 p-6 rounded-full">
                <Gamepad2 className="w-16 h-16 sm:w-20 sm:h-20 text-white" />
              </div>
            </div>
          </div>

          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white hero-fade"
            style={{ animationDelay: '160ms' }}
          >
            Little Leeroy Games
          </h1>

          <div
            className="flex items-center justify-center gap-2 hero-fade"
            style={{ animationDelay: '240ms' }}
          >
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <p className="text-xl sm:text-2xl text-purple-300 font-medium">
              Indie Game Studio
            </p>
            <Sparkles className="w-5 h-5 text-yellow-400" />
          </div>

          <p
            className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto hero-fade"
            style={{ animationDelay: '320ms' }}
          >
            Crafting fun and engaging mobile games that bring joy to players
            around the world. Join us on our journey to create amazing gaming
            experiences!
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 hero-fade"
            style={{ animationDelay: '400ms' }}
          >
            <a
              href="#games"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              Explore Our Games
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold text-lg border-2 border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hero-fade" style={{ animationDelay: '520ms' }}>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-white rounded-full scroll-indicator"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
