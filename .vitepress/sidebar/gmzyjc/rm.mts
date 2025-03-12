const path = {
  main: '/gmzyjc/ok/rm/',
};

const sidebar = [
  { text: '书评节选', link: `${path.main}rmsp` },
  { text: '绪言', link: `${path.main}rm00` },
  { text: '第一章 阴阳平衡', link: `${path.main}rm01` },
  { text: '第二章 天地自然', link: `${path.main}rm02` },
  {
    text: '第三章 中医人体观念',
    collapsed: true,
    item: [
      { text: '3.1 人体基本概念及运转机制', link: `${path.main}rm03-1` },
      { text: '3.2人体元气', link: `${path.main}rm03-2` },
      { text: '3.3人体地气', link: `${path.main}rm03-3` },
      { text: '3.4人体天气', link: `${path.main}rm03-4` },
      { text: '3.5精', link: `${path.main}rm03-5` },
      { text: '3.6神', link: `${path.main}rm03-6` },
    ],
  },
];

export { sidebar as rm };
