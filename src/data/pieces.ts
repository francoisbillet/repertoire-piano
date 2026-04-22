export interface Piece {
  title: string;
  composer: string;
  type: "morceau" | "chanson";
}

export const pieces: Piece[] = [
  { title: "Una Mattina (Intouchables)", composer: "Ludovico Einaudi", type: "morceau" },
  { title: "Primavera", composer: "Ludovico Einaudi", type: "morceau" },
  { title: "Nuvole Bianche", composer: "Ludovico Einaudi", type: "morceau" },

  { title: "Sleeping Lotus", composer: "Joep Beving", type: "morceau" },

  { title: "River Flows In You", composer: "Yiruma", type: "morceau" },
  { title: "Love Me", composer: "Yiruma", type: "morceau" },
  { title: "Maybe", composer: "Yiruma", type: "morceau" },
  { title: "Kiss The Rain", composer: "Yiruma", type: "morceau" },
  { title: "Scenery Through The Window", composer: "Yiruma", type: "morceau" },
  { title: "Fairy Tale", composer: "Yiruma", type: "morceau" },

  { title: "Summer", composer: "Joe Hisaishi", type: "morceau" },
  { title: "One Summer's Day (Le voyage de Chihiro)", composer: "Joe Hisaishi", type: "morceau" },
  { title: "The Wind Forest (Mon voisin Totoro)", composer: "Joe Hisaishi", type: "morceau" },
  { title: "Confessions in the Moonlight (Le château dans le ciel)", composer: "Joe Hisaishi", type: "morceau" },
  { title: "Merry-Go-Round (Le château ambulant)", composer: "Joe Hisaishi", type: "morceau" },
  { title: "Kiki's Delivery Service", composer: "Joe Hisaishi", type: "morceau" },

  { title: "The heart asks pleasure first (La leçon de piano)", composer: "Michael Nyman", type: "morceau" },

  { title: "Comptine d'un autre été: l'après-midi", composer: "Yann Tiersen", type: "morceau" },
  { title: "La valse d'Amélie (Amélie Poulain)", composer: "Yann Tiersen", type: "morceau" },
  { title: "Rue des cascades", composer: "Yann Tiersen", type: "morceau" },
  { title: "Mother's journey", composer: "Yann Tiersen", type: "morceau" },

  { title: "Sonate en Do", composer: "Mozart", type: "morceau" },
  { title: "Marche Turque", composer: "Mozart", type: "morceau" },

  { title: "Pélude en do", composer: "Johann Sebastian Bach", type: "morceau" },

  { title: "Lettre à Élise", composer: "Ludwig van Beethoven", type: "morceau" },

  { title: "Nocturne Opus 9 No. 2", composer: "Chopin", type: "morceau" },

  { title: "The Entertainer", composer: "Scott Joplin", type: "morceau" },
  { title: "Mapple Leaf Rag", composer: "Scott Joplin", type: "morceau" },

  { title: "Forrest Gump", composer: "Alan Silvestri", type: "morceau" },

  { title: "To Zanarkand (Final Fantasy X)", composer: "Nobuo Uematsu", type: "morceau" },

  { title: "Main theme (Suzuka)", composer: "Masanori Takumi", type: "morceau" },
  { title: "Tooi Hi No Kizuato (Suzuka)", composer: "Masanori Takumi", type: "morceau" },

  { title: "Sadness and Sorrow (Naruto)", composer: "Toshio Masuda", type: "morceau" },

  { title: "Bella's Lullaby (Twilight)", composer: "Carter Burwell", type: "morceau" },

  { title: "Love me", composer: "Michel Polnareff", type: "chanson" },

  { title: "Logical Song", composer: "Supertramp", type: "chanson" },

  { title: "The Scientist", composer: "Coldplay", type: "chanson" },
  { title: "Trouble", composer: "Coldplay", type: "chanson" },
  { title: "Viva la vida", composer: "Coldplay", type: "chanson" },
  { title: "Clocks", composer: "Coldplay", type: "chanson" },
  { title: "Everglow", composer: "Coldplay", type: "chanson" },


  { title: "Apologize", composer: "One Republic", type: "chanson" },

  { title: "Someone like you", composer: "Adèle", type: "chanson" },

  { title: "What I've done", composer: "Linkin Park", type: "chanson" },

  { title: "Yesterday", composer: "The Beatles", type: "chanson" },

  { title: "Kiss Me Slowly", composer: "Parachutes", type: "chanson" },

  { title: "My Heart Will Go On (Titanic)", composer: "Céline Dion", type: "chanson" },

  { title: "Fireflies", composer: "Owl City", type: "chanson" },

  { title: "Chasing cars", composer: "Snow Patrol", type: "chanson" },

  { title: "Comme un ouragan", composer: "Stéphanie de Monaco", type: "chanson" },

  { title: "Demons", composer: "Imagine Dragons", type: "chanson" },

  { title: "High On Humans", composer: "Oh Wonder", type: "chanson" },

  { title: "High Hopes", composer: "Kodaline", type: "chanson" },
];

export const learningPieces: Piece[] = [
  { title: "Destiny Of Love", composer: "Yiruma", type: "morceau" },

  { title: "Canon", composer: "Johann Pachelbel", type: "morceau" },

  { title: "Time (Inception)", composer: "Hans Zimmer", type: "morceau" },

  {title: "Merry Christmas Mr. Lawrence", composer: "Ryuchi Sakamoto", type: "morceau"},
  {title: "Energy Flow", composer: "Ryuchi Sakamoto", type: "morceau"},

  {title: "Big My Secret", composer: "Michael Nyman", type: "morceau"},

  {title: "Nocturne n°20", composer: "Chopin", type: "morceau"},

  {title: "Sonate au Clair de Lune n°14", composer: "Beethoven", type: "morceau"},

  {title: "Lettre à France", composer: "Michel Polnareff", type: "chanson"},
  {title: "On ira tous au paradis", composer: "Michel Polnareff", type: "chanson"},

  {title: "S'il Suffisait", composer: "Céline Dion", type: "chanson"},

  {title: "On va s'aimer", composer: "Gilbert Montagné", type: "chanson"},

  {title: "Foule Sentimentale", composer: "Alain Souchon", type: "chanson"},

  {title: "Drôle de machine", composer: "Comptine", type: "chanson"},

  { title: "Yellow", composer: "Coldplay", type: "chanson" },

  { title: "Hometown Glory", composer: "Adèle", type: "chanson" },
  { title: "Turning Tables", composer: "Adèle", type: "chanson" },

  { title: "Half the World Away", composer: "Oasis", type: "chanson" },

  { title: "Hello", composer: "Lionel Richie", type: "chanson" },

  { title: "Le Sud", composer: "Nino Ferrer", type: "chanson" },

  { title: "She Has No Time", composer: "Keane", type: "chanson" },

  { title: "Boston", composer: "Augustana", type: "chanson" },
];
