const path = {
  main: '/gmzyjc/ok/gmrw/',
};

const sidebar = [
  { text: '作者简介', link: `${path.main}rm000` },
  {
    text: '第三章 中医人体观念',
    collapsed: true,
    items: [{ text: '概述', link: `${path.main}rm03` }],
  },
];

export { sidebar as gmrw };
