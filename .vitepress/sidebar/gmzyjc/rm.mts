const path = {
  main: '/gmzyjc/ok/rm/',
};

const sidebar = [
  { text: '作者简介', link: `${path.main}rm000` },
  { text: '书评节选', link: `${path.main}rmsp` },
  { text: '绪言', link: `${path.main}rm00` },
  { text: '第一章 阴阳平衡', link: `${path.main}rm01` },
  { text: '第二章 天地自然', link: `${path.main}rm02` },
  {
    text: '第三章 中医人体观念',
    collapsed: true,
    items: [
      { text: '概述', link: `${path.main}rm03` },
      { text: '3.1 人体基本概念及运转机制', link: `${path.main}rm03-1` },
      { text: '3.2人体元气', link: `${path.main}rm03-2` },
      { text: '3.3人体地气', link: `${path.main}rm03-3` },
      { text: '3.4人体天气', link: `${path.main}rm03-4` },
      { text: '3.5精', link: `${path.main}rm03-5` },
      { text: '3.6神', link: `${path.main}rm03-6` },
    ],
  },
  { text: '第四章 人体运行框架', link: `${path.main}rm04` },
  { text: '第五章 人体部位的划分及病证的轻重传变', link: `${path.main}rm05` },
  { text: '第六章 人体各类平衡波动', link: `${path.main}rm06` },
  { text: '第七章 判断人体失衡情况', link: `${path.main}rm07` },
  {
    text: '附录',
    collapsed: true,
    items: [
      { text: '概述', link: `${path.main}rmfu` },
      { text: '附1：再论中医的阴阳概念', link: `${path.main}rmfu1` },
      { text: '附2：证与病的关系', link: `${path.main}rmfu2` },
      { text: '附3：诊治入门目录', link: `${path.main}zhenzhi` },
    ],
  },
  { text: '后记', link: `${path.main}rmhj` },
];

export { sidebar as rm };
