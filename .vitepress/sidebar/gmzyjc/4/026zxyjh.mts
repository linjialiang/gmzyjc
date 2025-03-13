const path = {
  main: '/gmzyjc/ok/zxyjh/',
};

const sidebar = [
  { text: '编者与编者的话', link: `${path.main}zxyjh00` },
  { text: '导言', link: `${path.main}daoyan` },
  {
    text: '第一章 中西医结合的回顾与展望（吴咸中）',
    link: `${path.main}zxyjh01`,
    collapsed: true,
    items: [
      { text: '一、中西医结合的回顾', link: `${path.main}zxyjh01-0.1.0.0.0` },
      { text: '二、中西医结合在国外的影响', link: `${path.main}zxyjh01-0.2.0.0.0` },
      { text: '三、对未来的展望', link: `${path.main}zxyjh01-0.3.0.0.0` },
    ],
  },
  {
    text: '第二章 内科',
    link: `${path.main}zxyjh02`,
    collapsed: true,
    items: [
      {
        text: '一、内科急症',
        link: `${path.main}zxyjh02-0.1.0.0.0`,
        collapsed: true,
        items: [
          { text: '(一) 高热', link: `${path.main}zxyjh02-0.1.1.0.0` },
          { text: '（二）休克', link: `${path.main}zxyjh02-0.1.2.0.0` },
          { text: '（三）急性弥漫性血管内凝血（DIC)', link: `${path.main}zxyjh02-0.1.3.0.0` },
        ],
      },
      {
        text: '二、消化系统疾病',
        link: `${path.main}zxyjh02-0.2.0.0.0`,
        collapsed: true,
        items: [
          { text: '（一）消化性溃疡', link: `${path.main}zxyjh02-0.2.1.0.0` },
          { text: '（二）病毒性肝炎', link: `${path.main}zxyjh02-0.2.2.0.0` },
        ],
      },
      {
        text: '三、呼吸系统疾病',
        link: `${path.main}zxyjh02-0.3.0.0.0`,
        collapsed: true,
        items: [
          { text: '(―)慢性支气管炎（肺心病）', link: `${path.main}zxyjh02-0.3.1.0.0` },
          { text: '（二）支气管哮喘', link: `${path.main}zxyjh02-0.3.2.0.0` },
          { text: '（三）肺脓肿', link: `${path.main}zxyjh02-0.3.3.0.0` },
        ],
      },
      {
        text: '四、心血管系统疾病',
        link: `${path.main}zxyjh02-0.4.0.0.0`,
        collapsed: true,
        items: [
          { text: '（一）冠心病（心绞痛）', link: `${path.main}zxyjh02-0.4.1.0.0` },
          { text: '（二）高血压病', link: `${path.main}zxyjh02-0.4.2.0.0` },
        ],
      },
      {
        text: '五、泌尿系统疾病',
        link: `${path.main}zxyjh02-0.5.0.0.0`,
        collapsed: true,
        items: [
          { text: '(一)肾小球肾炎', link: `${path.main}zxyjh02-0.5.1.0.0` },
          { text: '（二）肾盂肾炎', link: `${path.main}zxyjh02-0.5.2.0.0` },
        ],
      },
      {
        text: '六、血液系统疾病',
        link: `${path.main}zxyjh02-0.6.0.0.0`,
        collapsed: true,
        items: [
          { text: '(一)再生障碍性贫血', link: `${path.main}zxyjh02-0.6.1.0.0` },
          { text: '（二）白血病', link: `${path.main}zxyjh02-0.6.2.0.0` },
          { text: '（三）血小板减少性紫癜', link: `${path.main}zxyjh02-0.6.3.0.0` },
        ],
      },
      {
        text: '七、内分泌代谢疾病',
        link: `${path.main}zxyjh02-0.7.0.0.0`,
        collapsed: true,
        items: [
          { text: '(一)甲状腺机能亢进(甲亢)', link: `${path.main}zxyjh02-0.7.1.0.0` },
          { text: '（二）糖尿病', link: `${path.main}zxyjh02-0.7.2.0.0` },
        ],
      },
      {
        text: '八、精神、神经系统疾病',
        link: `${path.main}zxyjh02-0.8.0.0.0`,
        collapsed: true,
        items: [
          { text: '(一)精神分裂症', link: `${path.main}zxyjh02-0.8.1.0.0` },
          { text: '（二）急性脑血管病', link: `${path.main}zxyjh02-0.8.2.0.0` },
        ],
      },
    ],
  },
  {
    text: '第三章外   科',
    link: `${path.main}zxyjh03`,
    collapsed: true,
    items: [
      {
        text: '一、中西医结合治疗急腹症',
        link: `${path.main}zxyjh03-0.1.0.0.0`,
        collapsed: true,
        items: [
          { text: '(一)急性阐尾炎', link: `${path.main}zxyjh03-0.1.1.0.0` },
          { text: '（二）胃、十二指肠溃疡急性穿孔', link: `${path.main}zxyjh03-0.1.2.0.0` },
          { text: '（三）急性肠梗阻', link: `${path.main}zxyjh03-0.1.3.0.0` },
          { text: '（四）急性胆道感染', link: `${path.main}zxyjh03-0.1.4.0.0` },
          { text: '（五）胆石病', link: `${path.main}zxyjh03-0.1.5.0.0` },
          { text: '（六）急性胰腺炎', link: `${path.main}zxyjh03-0.1.6.0.0` },
          { text: '（七）泌尿系结石', link: `${path.main}zxyjh03-0.1.7.0.0` },
        ],
      },
      {
        text: '二、中西医结合治疗骨折与关节损伤',
        link: `${path.main}zxyjh03-0.2.0.0.0`,
        collapsed: true,
        items: [
          { text: '(一)骨折的治疗原则', link: `${path.main}zxyjh03-0.2.1.0.0` },
          { text: '（二）关节损伤', link: `${path.main}zxyjh03-0.2.2.0.0` },
          { text: '（三）骨、关节损伤的中草药治疗', link: `${path.main}zxyjh03-0.2.3.0.0` },
        ],
      },
      {
        text: '三、中西医结合治疗烧伤',
        link: `${path.main}zxyjh03-0.3.0.0.0`,
        collapsed: true,
        items: [
          { text: '(一)中西医结合治疗烧伤的治疗学研究', link: `${path.main}zxyjh03-0.3.1.0.0` },
          { text: '（二）中西医结合治疗烧伤的湿性疗法', link: `${path.main}zxyjh03-0.3.2.0.0` },
        ],
      },
      {
        text: '四、中西医结合治疗肛肠疾病',
        link: `${path.main}zxyjh03-0.4.0.0.0`,
        collapsed: true,
        items: [
          { text: '(一)内痔', link: `${path.main}zxyjh03-0.4.1.0.0` },
          { text: '（二）肛门周围脓肿', link: `${path.main}zxyjh03-0.4.2.0.0` },
          { text: '(三)肛瘘', link: `${path.main}zxyjh03-0.4.3.0.0` },
        ],
      },
    ],
  },
  {
    text: '第四章妇产科',
    link: `${path.main}zxyjh04`,
    collapsed: true,
    items: [
      { text: '一、 痛经', link: `${path.main}zxyjh04-0.1.0.0.0` },
      { text: '二、  闭经', link: `${path.main}zxyjh04-0.2.0.0.0` },
      { text: '三、功能性子宫出血', link: `${path.main}zxyjh04-0.3.0.0.0` },
      { text: '四、 不孕症', link: `${path.main}zxyjh04-0.4.0.0.0` },
      { text: '五、 先兆流产与习惯性流产', link: `${path.main}zxyjh04-0.5.0.0.0` },
      { text: '六、 宫外孕', link: `${path.main}zxyjh04-0.6.0.0.0` },
      { text: '七、 更年期综合征', link: `${path.main}zxyjh04-0.7.0.0.0` },
      { text: '八、多囊卵巢综合征', link: `${path.main}zxyjh04-0.8.0.0.0` },
      { text: '九、子宫肌瘤', link: `${path.main}zxyjh04-0.9.0.0.0` },
      { text: '十、外阴白色病损', link: `${path.main}zxyjh04-0.10.0.0.0` },
      { text: '十一、电子计算机辅助诊断在妇产科的应用', link: `${path.main}zxyjh04-0.11.0.0.0` },
    ],
  },
  {
    text: '第五章儿   科',
    link: `${path.main}zxyjh05`,
    collapsed: true,
    items: [
      { text: '一、婴幼儿腹泻', link: `${path.main}zxyjh05-0.1.0.0.0` },
      { text: '二、小儿肺炎', link: `${path.main}zxyjh05-0.2.0.0.0` },
      { text: '三、小儿急性肾炎', link: `${path.main}zxyjh05-0.3.0.0.0` },
    ],
  },
  {
    text: '第六章皮肤科',
    link: `${path.main}zxyjh06`,
    collapsed: true,
    items: [
      { text: '一、红斑性狼疮', link: `${path.main}zxyjh06-0.1.0.0.0` },
      { text: '二、银屑病', link: `${path.main}zxyjh06-0.2.0.0.0` },
      { text: '三、皮炎湿疹类皮肤病', link: `${path.main}zxyjh06-0.3.0.0.0` },
      { text: '四、慢性感染性皮肤病', link: `${path.main}zxyjh06-0.4.0.0.0` },
    ],
  },
  {
    text: '第七章五官科',
    link: `${path.main}zxyjh07`,
    collapsed: true,
    items: [
      {
        text: '一、耳鼻咽喉中西医结合临床和研究成果',
        link: `${path.main}zxyjh07-0.1.0.0.0`,
        collapsed: true,
        items: [
          { text: '(一)变态反应性鼻炎', link: `${path.main}zxyjh07-0.1.1.0.0` },
          { text: '（二）突发性耳聋', link: `${path.main}zxyjh07-0.1.2.0.0` },
          { text: '（三）药物中毒性耳聋', link: `${path.main}zxyjh07-0.1.3.0.0` },
          { text: '（四）美尼尔氏病', link: `${path.main}zxyjh07-0.1.4.0.0` },
          { text: '（五）恶性肉芽肿', link: `${path.main}zxyjh07-0.1.5.0.0` },
        ],
      },
      {
        text: '二，口腔科中西医结合临床成果',
        link: `${path.main}zxyjh07-0.2.0.0.0`,
        collapsed: true,
        items: [
          { text: '（一）复发性口疮', link: `${path.main}zxyjh07-0.2.1.0.0` },
          { text: '（二）口腔扁平苔癣', link: `${path.main}zxyjh07-0.2.2.0.0` },
          { text: '(三)干燥综合征', link: `${path.main}zxyjh07-0.2.3.0.0` },
        ],
      },
      {
        text: '三、眼科中西医结合临床成果',
        link: `${path.main}zxyjh07-0.3.0.0.0`,
        collapsed: true,
        items: [
          { text: '(一)老年性白内障', link: `${path.main}zxyjh07-0.3.1.0.0` },
          { text: '(二)角膜瘢痕', link: `${path.main}zxyjh07-0.3.2.0.0` },
          { text: '（三）视网膜静脉阻塞', link: `${path.main}zxyjh07-0.3.3.0.0` },
          { text: '（四）中心性浆液性视网膜脉络膜炎', link: `${path.main}zxyjh07-0.3.4.0.0` },
        ],
      },
    ],
  },
  {
    text: '第八章针灸与针麻',
    link: `${path.main}zxyjh08`,
    collapsed: true,
    items: [
      {
        text: '一、针灸临床中西医结合成就',
        link: `${path.main}zxyjh08-0.1.0.0.0`,
        collapsed: true,
        items: [
          { text: '(一)传染、感染性疾病', link: `${path.main}zxyjh08-0.1.1.0.0` },
          { text: '（二）消化系统疾病', link: `${path.main}zxyjh08-0.1.2.0.0` },
          { text: '（三）呼吸系统疾病', link: `${path.main}zxyjh08-0.1.3.0.0` },
          { text: '（四） 循环系统疾病', link: `${path.main}zxyjh08-0.1.4.0.0` },
          { text: '（五） 代谢、内分泌疾病', link: `${path.main}zxyjh08-0.1.5.0.0` },
          { text: '（六）神经系统疾病', link: `${path.main}zxyjh08-0.1.6.0.0` },
          { text: '（七）其它病症及危、急、重症', link: `${path.main}zxyjh08-0.1.7.0.0` },
        ],
      },
      {
        text: '二、针刺麻醉的临床研究和应用',
        link: `${path.main}zxyjh08-0.2.0.0.0`,
        collapsed: true,
        items: [
          { text: '(一)针麻术前、术中的注意事项', link: `${path.main}zxyjh08-0.2.1.0.0` },
          { text: '（二）手术针麻处方', link: `${path.main}zxyjh08-0.2.2.0.0` },
          { text: '（三）针刺复合麻醉', link: `${path.main}zxyjh08-0.2.3.0.0` },
          { text: '（四）术后处理及效果', link: `${path.main}zxyjh08-0.2.4.0.0` },
        ],
      },
    ],
  },
  {
    text: '第九章恶性肿瘤',
    link: `${path.main}zxyjh09`,
    collapsed: true,
    items: [
      { text: '一、原发性支气管肺癌', link: `${path.main}zxyjh09-0.1.0.0.0` },
      { text: '二、胃癌', link: `${path.main}zxyjh09-0.2.0.0.0` },
      { text: '三、食管癌', link: `${path.main}zxyjh09-0.3.0.0.0` },
      { text: '四、原发性肝癌', link: `${path.main}zxyjh09-0.4.0.0.0` },
      { text: '五、大肠癌', link: `${path.main}zxyjh09-0.5.0.0.0` },
      { text: '六、鼻咽癌', link: `${path.main}zxyjh09-0.6.0.0.0` },
      { text: '七、乳癌', link: `${path.main}zxyjh09-0.7.0.0.0` },
      { text: '八、宫颈癌', link: `${path.main}zxyjh09-0.8.0.0.0` },
    ],
  },
  {
    text: '第十章老年医学的中西医结合成就',
    link: `${path.main}zxyjh10`,
    collapsed: true,
    items: [
      { text: '一、老年性肺炎', link: `${path.main}zxyjh10-0.1.0.0.0` },
      { text: '二、老年性前列腺肥大症', link: `${path.main}zxyjh10-0.2.0.0.0` },
    ],
  },
  { text: '主要参考文献', link: `${path.main}zxyjh11` },
  { text: '电子版录入与校对', link: `${path.main}dzb` },
];

export { sidebar as zxyjh };
