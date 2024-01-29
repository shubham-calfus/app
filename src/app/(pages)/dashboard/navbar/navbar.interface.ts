export type menuOptionType = {
  title: string;
  description: string;
  icon: string;
  childrenMenu: childrenMenu[];
};

type childrenMenu = {
  title: string;
  description: string;
};
