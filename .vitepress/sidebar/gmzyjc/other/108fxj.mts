const path = {
  main: '/gmzyjc/ok/fxj/',
};

const sidebar = [
  { text: '《辅行诀》' },
  { text: '前言', link: `${path.main}fxj00` },
  {
    text: '辅行诀脏腑用药法要',
    link: `${path.main}fxj01`,
    collapsed: true,
    items: [
      { text: '一 辨肝脏病证文并方', link: `${path.main}fxj01-01` },
      { text: '二 辨心脏病证文并方', link: `${path.main}fxj01-02` },
      { text: '三 辨脾脏病证文并方', link: `${path.main}fxj01-03` },
      { text: '四 辨肺脏病证候文并方', link: `${path.main}fxj01-04` },
      { text: '五 辨肾脏病证文并方', link: `${path.main}fxj01-05` },
      { text: '六 五脏泻方', link: `${path.main}fxj01-06` },
      { text: '七 救五脏诸劳损病方', link: `${path.main}fxj01-07` },
      { text: '八 二旦六神大小汤', link: `${path.main}fxj01-08` },
      { text: '九 救五脏中恶卒死方', link: `${path.main}fxj01-09` },
    ],
  },
  {
    text: '附录',
    link: `${path.main}fxjfu`,
    collapsed: true,
    items: [
      { text: '《辅行诀脏腑用药法式》真伪考', link: `${path.main}fxjfu-01` },
      { text: '附录一：张大昌先生', link: `${path.main}fxjfu-02` },
      { text: '附录二：《辅行诀脏腑用药法要》现存版本对比研究', link: `${path.main}fxjfu-03` },
    ],
  },
];

export { sidebar as fxj };
