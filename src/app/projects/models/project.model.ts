export interface IProgram {
  name: string;
  photo: string;
}

export interface ISecondaryPictures {
img1?: string;
img2?: string;
img3?: string;
img4?: string;
img5?: string;
img6?: string;
img7?: string;
img8?: string;
img9?: string;
img10?: string;
img11?: string;
img12?: string;
img13?: string;
}

export interface IProject {
  id?: number | undefined;
  title: string;
  description: string;
  programs: IProgram[];
  image?: string;
  cover?: string;
  secondaryPictures?: ISecondaryPictures;
}
