export type Project = {
  slug: string;
  title: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  placeholder?: boolean;
};

export const projects: Project[] = [
  {
    slug: "kylppariremppa",
    title: "Kylppäriremppa",
    category: "Esimerkki",
    beforeImage: "/images/projects/project-1/before.jpg",
    afterImage: "/images/projects/project-1/after.jpg",
    placeholder: true,
  },
  {
    slug: "saneeraus",
    title: "Saneeraus",
    category: "Esimerkki",
    beforeImage: "/images/projects/project-2/before.jpg",
    afterImage: "/images/projects/project-2/after.jpg",
    placeholder: true,
  },
  {
    slug: "purkutyot",
    title: "Purkutyöt",
    category: "Esimerkki",
    beforeImage: "/images/projects/project-3/before.jpg",
    afterImage: "/images/projects/project-3/after.jpg",
    placeholder: true,
  },
];
