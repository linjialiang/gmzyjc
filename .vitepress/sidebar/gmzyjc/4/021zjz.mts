const path = {
  main: '/gmzyjc/ok/zjz/',
};

const sidebar = [
  { text: '《针灸学-中》' },
  { text: '中篇 针灸术', link: `${path.main}zjz01` },
  {
    text: '第一章毫针',
    link: `${path.main}zjz01-1.0.0.0.0`,
    collapsed: true,
    items: [
      { text: '第一节毫针的基本知识', link: `${path.main}zjz01-1.1.0.0.0` },
      { text: '第二节针刺练习', link: `${path.main}zjz01-1.2.0.0.0` },
      { text: '第三节针刺前的准备', link: `${path.main}zjz01-1.3.0.0.0` },
      {
        text: '第四节毫针刺法',
        link: `${path.main}zjz01-1.4.0.0.0`,
        collapsed: true,
        items: [
          { text: '一、进 针', link: `${path.main}zjz01-1.4.1.0.0` },
          { text: '二、针刺的角度和深度', link: `${path.main}zjz01-1.4.2.0.0` },
          { text: '三、行针与得气', link: `${path.main}zjz01-1.4.3.0.0` },
          { text: '四、针刺补泻', link: `${path.main}zjz01-1.4.4.0.0` },
        ],
      },
      {
        text: '五、留针与出针',
        link: `${path.main}zjz01-1.4.5.0.0`,
        collapsed: true,
        items: [
          {
            text: '〔临床应用〕',
            link: `${path.main}zjz01-1.4.6.0.0`,
            collapsed: true,
            items: [
              { text: '1.针刺角度与深度：', link: `${path.main}zjz01-1.4.6.1.0` },
              { text: '2.得气：', link: `${path.main}zjz01-1.4.6.2.0` },
              { text: '3.针刺补泻：', link: `${path.main}zjz01-1.4.6.3.0` },
              { text: '第五节异常情况的处理及预防', link: `${path.main}zjz01-1.5.0.0.0` },
            ],
          },
        ],
      },
    ],
  },
  {
    text: '第二章   灸 法    附:拔火罐疗法',
    link: `${path.main}zjz02`,
    collapsed: true,
    items: [
      { text: '第一节灸用材料', link: `${path.main}zjz02-0.1.0.0.0` },
      { text: '第二节灸法的分类及其操作', link: `${path.main}zjz02-0.2.0.0.0` },
      { text: '第三节炎法的作用', link: `${path.main}zjz02-0.3.0.0.0` },
      { text: '第四节灸法的注意事项', link: `${path.main}zjz02-0.4.0.0.0` },
      { text: '〔附〕拔罐法', link: `${path.main}zjz02-0.5.0.0.0` },
    ],
  },
  {
    text: '第三章其他针法',
    link: `${path.main}zjz03`,
    collapsed: true,
    items: [
      { text: '第一节三棱针', link: `${path.main}zjz03-0.1.0.0.0` },
      { text: '第二节皮肤针', link: `${path.main}zjz03-0.2.0.0.0` },
      { text: '第三节皮疗针', link: `${path.main}zjz03-0.3.0.0.0` },
      { text: '第四节火 针', link: `${path.main}zjz03-0.4.0.0.0` },
      { text: '第五节电针', link: `${path.main}zjz03-0.5.0.0.0` },
      { text: '第六节水针', link: `${path.main}zjz03-0.6.0.0.0` },
      {
        text: '第七节耳 针',
        link: `${path.main}zjz03-0.7.0.0.0`,
        collapsed: true,
        items: [
          { text: '一、耳廓表面解剖', link: `${path.main}zjz03-0.7.1.0.0` },
          { text: '二、耳与经络脏腑的关系', link: `${path.main}zjz03-0.7.2.0.0` },
          { text: '三、耳穴的分布', link: `${path.main}zjz03-0.7.3.0.0` },
          { text: '四、常用耳穴的定位和主治', link: `${path.main}zjz03-0.7.4.0.0` },
          {
            text: '五、耳针的应用',
            link: `${path.main}zjz03-0.7.5.0.0`,
            collapsed: true,
            items: [
              { text: '(一)选穴处方原则', link: `${path.main}zjz03-0.7.6.0.0` },
              { text: '(二)操作方法', link: `${path.main}zjz03-0.7.7.0.0` },
            ],
          },
          {
            text: '六、注意事项',
            link: `${path.main}zjz03-0.7.8.0.0`,
            collapsed: true,
            items: [{ text: '〔临床应用〕', link: `${path.main}zjz03-0.7.9.0.0` }],
          },
        ],
      },
      { text: '第八节头针', link: `${path.main}zjz03-0.8.0.0.0` },
    ],
  },
  {
    text: '第四章其他针法',
    link: `${path.main}zjz04`,
    collapsed: true,
    items: [
      { text: '第一节针麻概念和简史', link: `${path.main}zjz04-0.1.0.0.0` },
      {
        text: '第二节针麻特点和方法',
        link: `${path.main}zjz04-0.2.0.0.0`,
        collapsed: true,
        items: [
          { text: '一、针麻特点', link: `${path.main}zjz04-0.2.1.0.0` },
          { text: '二、针麻方法', link: `${path.main}zjz04-0.2.2.0.0` },
        ],
      },
      { text: '第三节针麻的要求及辅助用药', link: `${path.main}zjz04-0.3.0.0.0` },
    ],
  },
];

export { sidebar as zjz };
