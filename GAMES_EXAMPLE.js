// Example: How to add new games to your website
// File: components/Games.tsx

const games = [
  // BBBlocks - Your first game
  {
    id: 1,
    title: 'BBBlocks',
    description: 'A captivating puzzle game with mechanics similar to Block Blast. Match blocks, clear lines, and achieve high scores in this addictive mobile game!',
    image: '/games/bbblocks.jpg',
    status: 'Available Now',
    platforms: ['Android', 'iOS'],
    link: 'https://play.google.com/store/apps/details?id=your.app.id', // UPDATE THIS!
    color: 'from-cyan-500 to-blue-600',
  },
  
  // Example: Add your second game like this:
  /*
  {
    id: 2,
    title: 'Your Second Game',
    description: 'Description of your new awesome game...',
    image: '/games/second-game.jpg', // Save screenshot in public/games/
    status: 'Coming Soon', // or 'Available Now', 'In Development'
    platforms: ['Android', 'iOS'], // or just ['Android'] or ['iOS']
    link: 'https://your-game-link.com',
    color: 'from-purple-500 to-pink-600', // Choose gradient colors
  },
  */
  
  // More games...
];

/*
GRADIENT COLOR OPTIONS:
- from-cyan-500 to-blue-600 (blue theme)
- from-purple-500 to-pink-600 (purple-pink theme)
- from-green-500 to-emerald-600 (green theme)
- from-orange-500 to-red-600 (warm theme)
- from-yellow-500 to-orange-600 (sunny theme)
- from-indigo-500 to-purple-600 (indigo theme)
*/
