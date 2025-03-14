const path = {
  main: '/gmzyjc/ok/wbtb/',
};

const sidebar = [
  { text: '《温病条辨讲解》' },
  { text: '编者与编者的话', link: `${path.main}wbtb0000` },
  { text: '导言', link: `${path.main}daoyan` },
  {
    text: '总论',
    link: `${path.main}wbtb0zl01`,
    collapsed: true,
    items: [
      {
        text: '第一章中医学对传染病的一般认识',
        link: `${path.main}wbtb0zl01-1.0.0.0.0`,
        collapsed: true,
        items: [
          { text: '第一节中医学对传染病的病因认识', link: `${path.main}wbtb0zl01-1.0.1.0.0` },
          { text: '第二节中医学对传染病的病机认识', link: `${path.main}wbtb0zl01-1.0.2.0.0` },
          { text: '第三节中医学对传染病诊断治疗的认识', link: `${path.main}wbtb0zl01-1.0.3.0.0` },
          { text: '第四节中医学对传染病预防的认识', link: `${path.main}wbtb0zl01-1.0.4.0.0` },
        ],
      },
      { text: '第二章 评伤寒与温病学派之争', link: `${path.main}wbtb0zl02` },
      {
        text: '第三章《温病条辨》的基本内容',
        link: `${path.main}wbtb0zl03`,
        collapsed: true,
        items: [
          { text: '第一节 作者吴瑭生平及学术思想简介', link: `${path.main}wbtb0zl03-0.1.0.0.0` },
          { text: '第二节 三焦、卫气营血辨证论治体系', link: `${path.main}wbtb0zl03-0.2.0.0.0` },
        ],
      },
      { text: '第四章 学习《温病条辨讲解》的方法', link: `${path.main}wbtb0zl04` },
    ],
  },
  {
    text: '各论',
    link: `${path.main}wbtb1gl00`,
    collapsed: true,
    items: [
      {
        text: '卷首',
        link: `${path.main}wbtb1gl00-1.0.0.0.0`,
        collapsed: true,
        items: [
          { text: '问心堂温病条辨自序', link: `${path.main}wbtb1gl00-1.1.0.0.0` },
          { text: '凡例', link: `${path.main}wbtb1gl00-1.2.0.0.0` },
          {
            text: '问心堂温病条辨原病篇',
            link: `${path.main}wbtb1gl00-1.3.0.0.0`,
            collapsed: true,
            items: [{ text: '小结', link: `${path.main}wbtb1gl00-1.3.1.0.0` }],
          },
        ],
      },
      {
        text: '卷一上焦篇',
        link: `${path.main}wbtb1gl01`,
        collapsed: true,
        items: [
          { text: '风温  温热 温疫 温毒 冬温', link: `${path.main}wbtb1gl01-0.1.0.0.0` },
          { text: '暑温', link: `${path.main}wbtb1gl01-0.2.0.0.0` },
          { text: '伏暑', link: `${path.main}wbtb1gl01-0.3.0.0.0` },
          { text: '湿温 寒湿', link: `${path.main}wbtb1gl01-0.4.0.0.0` },
          { text: '温疟', link: `${path.main}wbtb1gl01-0.5.0.0.0` },
          { text: '秋燥', link: `${path.main}wbtb1gl01-0.6.0.0.0` },
          { text: '补秋燥胜气论', link: `${path.main}wbtb1gl01-0.7.0.0.0` },
          { text: '小结', link: `${path.main}wbtb1gl01-0.8.0.0.0` },
        ],
      },
      {
        text: '卷二中焦篇',
        link: `${path.main}wbtb1gl02`,
        collapsed: true,
        items: [
          { text: '风温    温热    温疫    温毒    冬温', link: `${path.main}wbtb1gl02-0.1.0.0.0` },
          { text: '暑温 伏暑', link: `${path.main}wbtb1gl02-0.2.0.0.0` },
          { text: '寒湿', link: `${path.main}wbtb1gl02-0.3.0.0.0` },
          { text: '湿温(疟、痢、疸、痹附）', link: `${path.main}wbtb1gl02-0.4.0.0.0` },
          { text: '秋燥', link: `${path.main}wbtb1gl02-0.5.0.0.0` },
          { text: '小结', link: `${path.main}wbtb1gl02-0.6.0.0.0` },
        ],
      },
      {
        text: '卷三 下焦篇',
        link: `${path.main}wbtb1gl03`,
        collapsed: true,
        items: [
          { text: '风温  温热  温疫  温毒  冬温', link: `${path.main}wbtb1gl03-0.1.0.0.0` },
          { text: '暑温  伏暑', link: `${path.main}wbtb1gl03-0.4.0.0.0` },
          { text: '寒湿（便血、咳嗽、疝瘕附）', link: `${path.main}wbtb1gl03-0.5.0.0.0` },
          { text: '湿温（疟、痢、痘、痹附）', link: `${path.main}wbtb1gl03-0.6.0.0.0` },
          { text: '秋燥', link: `${path.main}wbtb1gl03-0.7.0.0.0` },
          { text: '小结', link: `${path.main}wbtb1gl03-0.8.0.0.0` },
        ],
      },
    ],
  },
  { text: '电子版录入与校对', link: `${path.main}dzb` },
];

export { sidebar as wbtb };
