export type Project = {
  slug: string;
  title: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  description?: string;
  placeholder?: boolean;
};

export const projects: Project[] = [
  {
    slug: "project-1",
    title: "Kylpyhuoneremontti",
    category: "Remontti",
    beforeImage: "/images/projects/project-1/before.jpg",
    afterImage: "/images/projects/project-1/after.jpg",
    description: "Esimerkkipaikka kylpyhuoneen ennen- ja jälkeen-kuville.",
    placeholder: true,
  },
  {
    slug: "project-2",
    title: "Huoneiston saneeraus",
    category: "Saneeraus",
    beforeImage: "/images/projects/project-2/before.jpg",
    afterImage: "/images/projects/project-2/after.jpg",
    description: "Esimerkkipaikka huoneistoremontin kuville.",
    placeholder: true,
  },
  {
    slug: "project-3",
    title: "Kevyt purkutyö",
    category: "Purkutyö",
    beforeImage: "/images/projects/project-3/before.jpg",
    afterImage: "/images/projects/project-3/after.jpg",
    description: "Esimerkkipaikka purkukohteen kuville.",
    placeholder: true,
  },
];
