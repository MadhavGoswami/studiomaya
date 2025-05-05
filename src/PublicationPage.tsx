import { PublicationCard } from './components/PublicationCard';

export default function PublicationPage() {
  const publications = [
    {
      id: 1,
      title: '#AIExclusive',
      description: 'Kalkaji residence is a combination of two things, first, the earthiness which correlates with the women of the house, and the other is steadiness which comes from the man of the house. Studio Ma:Ya amalgamates both things to give the entire house a definition of their reflection.The aim of the design was to transfigure old erected structures to new conditions and aesthetics. It is an independent floor of an area of 1800 sq ft. The inhabitants are rooted in nature and their traditional environment. The aesthetics and spaces they briefed were on analogous lines.',
      imageUrl: 'assets/ProjectImages/Publishing/Architects And Interiors_Kalkaji.jpg',
      link: 'https://www.architectandinteriorsindia.com/projects/aiexclusive-the-defining-reflection-of-earthy-and-steady-in-a-home'
    },
    {
      id: 2,
      title: 'Delhi’s unconventional law office',
      description: 'While many law offices across India adopt a traditional decor, replete with oversized leather chairs, chunky wooden bookshelves and framed artwork, architecture firm Studio MaYa—helmed by Principal Architect Mayank Yadav.The brief from the client was simple: a sophisticated space, elegant, simple, and modern. The first task, however, was to break all the existing walls in the space as it lent the law office a cluttered look. In fact, before Studio MaYa took charge of re-designing the space, it existed with smaller rooms that failed to provide a visual connection',
      imageUrl: 'assets/ProjectImages/Publishing/Architects And Interiors_V Law.jpg',
      link: 'https://www.architectandinteriorsindia.com/projects/delhis-unconventional-law-office-by-studio-maya-breaks-design-stereotypes'
    },
    {
      id: 3,
      title: 'A Conventional Delhi Home',
      description: 'This home, christened Aashirwad Residence, designed by Ar. Mayank Yadav, Design Head & Principal Architect of Studio Ma:Ya, is high on style and filled with creative design ideas. The aim behind this project was to divide a shell structure to accommodate each generation. Located in the west part of Delhi, this residence is an epitome of grandeur unfolded. Sit on the first floor of a low-rise builder apartment, with an edge of orientation where natural sunlight passes through large windows and classy elements embedded in every corner of the house, which indeed encapsulates luxury to the higher volumes',
      imageUrl: 'assets/ProjectImages/Publishing/Surface Reporter_Aashirwad.jpg',
      link: 'https://surfacesreporter.com/articles/133649/studio-ma-ya-transformed-a-conventional-delhi-home-into-a-classy-contemporary-haven-aashirwad-residence'
    },
    {
      id: 4,
      title: 'Straight Talk with Mayank Yadav',
      description: 'The seeds of Ma:Ya were sown by Mayank in the midst of 2017. Studio Ma:Ya believes in creating Architecture that’s multi-layered, versatile, and sensitive to contextual conditions. The firm is developing each day with their spectrum ranging from postmodern interiors to didactic and complex global needs. They serve single clients and integrated development sectors too. Studio Ma:Ya attempts to develop environmentally and morphologically responsible designs, keeping up with their client goals',
      imageUrl: 'assets/ProjectImages/Publishing/AHL.jpg',
      link: 'https://www.allhomeliving.com/ahl-lounge-straight-talk-with-mayank-yadav-of-studio-maya/'
    },
    {
      id: 5,
      title: 'Aashiyana: An apartment at Gurugram',
      description: 'This apartment masterfully balances modern elegance with traditional touches, creating a harmonious and visually captivating living space. The use of natural materials, vibrant accent walls, and thoughtful decor choices lends personality and warmth to each room. It’s an inviting and earthy abode that reflects a refined sense of style and comfort.The living and dining space serves as the heart of the apartment, where modern style meets traditional warmth. A cane swing with brass detailing serves as a statement piece, bridging functionality with heritage. ',
      imageUrl: 'assets/ProjectImages/Publishing/RTF_Aashiyana.jpg',
      link: 'https://www.re-thinkingthefuture.com/residentail-interior-design/11575-aashiyana-an-apartment-at-gurugram-by-studio-maya/'
    },
    {
      id: 6,
      title: 'Modern Design Aesthete and Curation',
      description: 'Located in the west part of Delhi, this residence is one of the examples of grandeur unfolded. The aim of this project is to bisect a shell structure into each generation accommodate. It is the first floor of a low-rise builder apartment, with an edge of orientation where natural sunlight passes through large windows and classy elements embedded in every corner of the house, which indeed encapsulates luxury to the higher volumes. There are multiple pockets in the house as per the requirement, each pocket has its own materiality, texture, and color but the transition from one place to another is effortless.',
      imageUrl: 'assets/ProjectImages/Publishing/The Architects Diary_Aashirwad.jpg',
      link: 'https://thearchitectsdiary.com/modern-design-aesthete-and-curation-embellishes-aashirwad-residence-in-delhi-studio-maya/'
    },
    {
      id: 7,
      title: 'A Sophisticated, Elegant Office Space',
      description: 'The brief from the client was simple: a sophisticated, elegant, simple and modern office space. The first task, however, was to break all the existing walls in the space as it lent the law office a cluttered look. In fact, before Studio Ma:Ya took charge of re-designing the space, it existed with smaller rooms that failed to provide a visual connection. The entire ground floor was converted into an immense office area with execution of architectural changes to maximize space as per the requirement.',
      imageUrl: 'assets/ProjectImages/Publishing/The Architects Diary_V Law.jpg',
      link: 'https://thearchitectsdiary.com/a-sophisticated-elegant-simple-and-modern-office-space-studio-maya/'
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-8">
      <h1 className="text-gray-800 text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-6 mb-10 text-center">
        Publications
      </h1>

      <div className="flex flex-col space-y-12 w-full px-[18px] sm:px-6 md:px-12 lg:px-[18px]">
        {publications.map((pub) => (
          <PublicationCard key={pub.id} publication={pub} />
        ))}
      </div>
    </div>
  );
}
