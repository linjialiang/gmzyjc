const path = {
  main: '/gmzyjc/ok/hk/',
};

const sidebar = [
  { text: '《中医喉科学》' },
  { text: '编者与编者的话', link: `${path.main}hk000` },
  { text: '导言', link: `${path.main}daoyan` },
  {
    text: '上篇 总论',
    link: `${path.main}hk0zl01`,
    collapsed: true,
    items: [
      { text: '第一章 中医喉科的源流和发展', link: `${path.main}hk0zl01-1.0.0.0.0` },
      { text: '第二章 咽喉的归经属脏', link: `${path.main}hk0zl02` },
      { text: '第三章 历代咽喉口齿的解剖名称', link: `${path.main}hk0zl03` },
      { text: '第四章 历来对咽喉口齿生理功能作用的认识', link: `${path.main}hk0zl04` },
      { text: '第五章 病因病机', link: `${path.main}hk0zl05` },
      {
        text: '第六章 辨证',
        link: `${path.main}hk0zl06`,
        collapsed: true,
        items: [
          { text: '一、对症投药与辨证论治', link: `${path.main}hk0zl06-0.1.0.0.0` },
          { text: '二、怎样诊察与辨证', link: `${path.main}hk0zl06-0.2.0.0.0` },
        ],
      },
      {
        text: '第七章  论治一（内治）',
        link: `${path.main}hk0zl07`,
        collapsed: true,
        items: [
          { text: '一、治法总述', link: `${path.main}hk0zl07-0.1.0.0.0` },
          { text: '二、治法分述', link: `${path.main}hk0zl07-0.2.0.0.0` },
          { text: '三、咽喉口齿科专用药', link: `${path.main}hk0zl07-0.3.0.0.0` },
        ],
      },
      {
        text: '第八章  论治三（外治）',
        link: `${path.main}hk0zl08`,
        collapsed: true,
        items: [
          { text: '一、用于局部病变区的', link: `${path.main}hk0zl08-0.1.0.0.0` },
          { text: '二、手法外治', link: `${path.main}hk0zl08-0.2.0.0.0` },
        ],
      },
    ],
  },
  {
    text: '下篇 各论',
    link: `${path.main}hk1gl01`,
    collapsed: true,
    items: [
      {
        text: '风热喉痹',
        collapsed: true,
        items: [
          { text: '风热喉痹之一（急性单纯性咽炎）', link: `${path.main}hk1gl01-0.1.0.0.0` },
          { text: '风热喉痹之二（溃疡膜性咽峡炎）', link: `${path.main}hk1gl01-0.2.0.0.0` },
          { text: '风热喉痹之三（粒细胞缺乏性咽峡炎）', link: `${path.main}hk1gl01-0.3.0.0.0` },
          { text: '风热喉痹之四（传染性单核细胞增多性咽峡炎）', link: `${path.main}hk1gl01-0.4.0.0.0` },
          { text: '风热喉痹之五（脓菌性咽峡炎）', link: `${path.main}hk1gl01-0.5.0.0.0` },
        ],
      },
      {
        text: '虚火喉痹',
        collapsed: true,
        items: [
          { text: '虚火喉痹之一（慢性咽炎）', link: `${path.main}hk1gl01-0.6.0.0.0` },
          { text: '虚火喉痹之二（慢性喉炎）', link: `${path.main}hk1gl01-0.7.0.0.0` },
          { text: '虚火喉痹之三（干燥性咽喉炎、萎缩性咽喉炎）', link: `${path.main}hk1gl01-0.8.0.0.0` },
        ],
      },
      { text: '帝中风（悬雍垂过长）', link: `${path.main}hk1gl01-0.9.0.0.0` },
      { text: '口疮（咽部疱疹）', link: `${path.main}hk1gl01-0.10.0.0.0` },
      { text: '飞疡喉（咽粘膜下出血）', link: `${path.main}hk1gl01-0.11.0.0.0` },
      { text: '风热乳蛾（急性扁桃体炎）', link: `${path.main}hk1gl01-0.12.0.0.0` },
      { text: '乳蛾（慢性扁桃体炎）', link: `${path.main}hk1gl01-0.13.0.0.0` },
      { text: '石蛾（扁桃体结石）', link: `${path.main}hk1gl01-0.14.0.0.0` },
      { text: '鼻塞《咽扁桃体肥大》', link: `${path.main}hk1gl01-0.15.0.0.0` },
      { text: '喉痈（扁桃体周围脓肿）', link: `${path.main}hk1gl01-0.16.0.0.0` },
      { text: '鱼鳞风（咽角化症、扁桃体角化症）', link: `${path.main}hk1gl01-0.17.0.0.0` },
      { text: '干咳（喉源性咳嗽）', link: `${path.main}hk1gl01-0.18.0.0.0` },
      { text: '紧喉（喉脓肿）', link: `${path.main}hk1gl01-0.19.0.0.0` },
      { text: '走马喉风（喉梗阻）', link: `${path.main}hk1gl01-0.20.0.0.0` },
      {
        text: '喑病（嘶哑与失音）',
        link: `${path.main}hk1gl01-0.21.0.0.0`,
        collapsed: true,
        items: [
          { text: '（一）急性嘶哑或失音', link: `${path.main}hk1gl01-0.21.1.0.0` },
          { text: '（二）女子临经失音', link: `${path.main}hk1gl01-0.21.2.0.0` },
          { text: '（三）妊娠期失音', link: `${path.main}hk1gl01-0.21.3.0.0` },
          { text: '（四）癔性失音', link: `${path.main}hk1gl01-0.21.4.0.0` },
          { text: '（五）音带充血', link: `${path.main}hk1gl01-0.21.5.0.0` },
          { text: '（六）声带水肿或肥厚', link: `${path.main}hk1gl01-0.21.6.0.0` },
          { text: '（七）声带小结', link: `${path.main}hk1gl01-0.21.7.0.0` },
          { text: '（八）息肉', link: `${path.main}hk1gl01-0.21.8.0.0` },
          { text: '（九）血性息肉、声带粘膜下血及血管瘤', link: `${path.main}hk1gl01-0.21.9.0.0` },
          { text: '（十） 喉淀粉样性变', link: `${path.main}hk1gl01-0.21.10.0.0` },
          { text: '(十一) 声带闭合不密', link: `${path.main}hk1gl01-0.21.11.0.0` },
          { text: '(十二) 声带瘫痪', link: `${path.main}hk1gl01-0.21.12.0.0` },
          { text: '(十三) 喉肌无力症', link: `${path.main}hk1gl01-0.21.13.0.0` },
          { text: '(十四) 喉关节炎', link: `${path.main}hk1gl01-0.21.14.0.0` },
          { text: '(十五) 增生性喉炎与喉厚皮病', link: `${path.main}hk1gl01-0.21.15.0.0` },
        ],
      },
      { text: '梅核气（癔性咽喉异感症）', link: `${path.main}hk1gl01-0.22.0.0.0` },
      { text: '谷贼（异物）', link: `${path.main}hk1gl01-0.23.0.0.0` },
    ],
  },
  { text: '常见证治方剂索引', link: `${path.main}hk3fjsy` },
  { text: '电子版录入与校对', link: `${path.main}dzb` },
];

export { sidebar as hk };
