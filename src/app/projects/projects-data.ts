import { IProject } from './models/project.model';

export const PROJECTS: IProject[] = [
  {
    id: 1,
    title: 'Viking Arena | For Honor inspired environment',
    description:
      "I made this environment inspired on the pit map from For Honor game. I did it with the help from my talented classmates Oscar Serna and Eric Moreno. We had 1 month to do all the modular assets, props and textures. I've spent 2 more weeks to do some more props, set dressing, error fixing and lightning. The environment is fully game ready running at 60 stable fps (capped to 60) on my nVidia GTX 1070 inside Unreal Engine 4.26 This is my first time making realistic textures and models so I learnt a lot on the process and all feedback will be truely apreciated!! Thanks for watching",
    programs: [
      {
        name: 'Unreal Engine',
        photo: 'assets/unreal-icon.png',
      },
      {
        name: '3ds Max',
        photo: 'assets/3dsmax-icon.png',
      },
      {
        name: 'Substance 3D Painter',
        photo: 'assets/pt-icon.png',
      },
      {
        name: 'Substance 3D Designer',
        photo: 'assets/ds-icon.png',
      },
      {
        name: 'ZBrush',
        photo: 'assets/zbrush-icon.png',
      },
    ],
cover: 'assets/portada-viking.jpg',
    image: 'assets/Viking-Arena-Card.jpg',
    secondaryPictures: {
      img1: 'assets/viking-project/ivan-perez-viking-arena-1.jpg',

      img2: 'assets/viking-project/ivan-perez-viking-arena-2.jpg',

      img3: 'assets/viking-project/ivan-perez-viking-arena-3.jpg',

      img4: 'assets/viking-project/ivan-perez-viking-arena-4.jpg',

      img5: 'assets/viking-project/ivan-perez-viking-arena-5.jpg',

      img6: 'assets/viking-project/ivan-perez-viking-arena-6.jpg',

      img7: 'assets/viking-project/ivan-perez-viking-arena-7.jpg',

      img8: 'assets/viking-project/ivan-perez-viking-arena-8.jpg',

      img9: 'assets/viking-project/ivan-perez-viking-arena-9.jpg',

      img10: 'assets/viking-project/ivan-perez-viking-arena-10.jpg',

      img11: 'assets/viking-project/ivan-perez-viking-arena-11.jpg',

      img12: 'assets/viking-project/ivan-perez-viking-arena-12.jpg',

      img13: 'assets/viking-project/ivan-perez-viking-arena-13.jpg',
    },
  },
  {
    id: 2,
    title: 'The Legend of King Arthur Sword',
    description: 'A sword inspired by the legend of King Arthur...',
    programs: [
     {
        name: '3ds Max',
        photo: 'assets/3dsmax-icon.png',
      },
      {
        name: 'ZBrush',
        photo: 'assets/zbrush-icon.png',
      },
      {
        name: 'Photoshop',
        photo: 'assets/ps-icon.png',
      },
      {
        name: 'Substance 3D Painter',
        photo: 'assets/pt-icon.png',
      },

    ],
    image: 'assets/Sword-Card.jpg',
    cover: 'assets/portada-sword.jpg',
    secondaryPictures: {
      img1: 'assets/sword-project/sword-ivan-perez-1.jpg',
      img2: 'assets/sword-project/sword-ivan-perez-2.jpg',
      img3: 'assets/sword-project/sword-ivan-perez-3.jpg',
      img4: 'assets/sword-project/sword-ivan-perez-4.jpg',
    }
  },
  {
    id: 3,
    title: 'Dagger',
    description: 'A dagger created in Maya and ZBrush...',
    programs: [
      {
        name: 'Unreal Engine',
        photo: 'assets/arrow-icon.png',
      },
    ],
    image: 'assets/Sword-Card.jpg',
  },
];
