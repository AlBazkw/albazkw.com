/* Builds the static site: Arabic at the root, English under /en/.
   Run from anywhere:  node tools/build.js
   Copy lives here, styles in css/site.css. The generated .html files are
   committed; never edit them by hand, edit this file and rebuild. */
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const SITE = 'https://albazkw.com';
const PHONE = '+965 9555 0029';
const TEL = '+96595550029';
const EMAIL = 'info@albazkw.com';
const HANDLE = '@albaz.kw';
const INSTAGRAM = 'https://www.instagram.com/albaz.kw/';
const MAP = 'https://maps.app.goo.gl/PmMJFyK5GMTrRpu48';
const BRANDS = 'Gree · Midea · LG · Samsung · York · Carrier';

const FILES = ['index.html', 'services.html', 'projects.html', 'about.html', 'contact.html'];
const urlOf = (lang, file) => SITE + (lang === 'ar' ? '/' : '/en/') + (file === 'index.html' ? '' : file);
const hrefOf = file => (file === 'index.html' ? './' : file);
const arDigits = n => String(n).padStart(2, '0').replace(/\d/g, d => '٠١٢٣٤٥٦٧٨٩'[d]);

/* ------------------------------------------------------------------ SEO */
const META = {
  'index.html': {
    ar: ['شركة تكييف في الكويت | بيع مكيفات جديدة، استبدال وشراء المكيفات القديمة – الباز للهندسة',
         'الباز للهندسة تبيع وتركّب مكيفات جديدة، تستبدل وتحدّث المكيفات القديمة، وتشتري المكيفات المستعملة نقداً أو كخصم. مكيفات سبليت وسنترال وVRF وصيانة تكييف في جميع محافظات الكويت.'],
    en: ['New AC Units, Replacement & Old AC Buy-Back in Kuwait | Al Baz Engineering',
         'Al Baz Engineering sells and installs new air conditioning units, replaces and upgrades old AC, and buys used units for cash or trade-in. Split, central and VRF systems and HVAC maintenance across Kuwait.'] },
  'services.html': {
    ar: ['خدمات التكييف في الكويت | تركيب مكيفات جديدة، استبدال وشراء القديمة، وصيانة – الباز للهندسة',
         'بيع وتركيب مكيفات جديدة، استبدال المكيفات القديمة أو شراؤها، تكييف سنترال وأنظمة VRF، دكت، عقود صيانة تكييف، إصلاح مكيفات وقطع غيار في جميع مناطق الكويت.'],
    en: ['AC Installation, Replacement, Old Unit Buy-Back & Maintenance in Kuwait | Al Baz Engineering',
         'New AC units sold and installed, old air conditioners replaced or bought back, VRF and central systems, ducting, AC maintenance contracts, repair and spare parts across Kuwait.'] },
  'projects.html': {
    ar: ['أعمال التكييف في الكويت | سبليت، مخفي، باكج وVRF – الباز للهندسة',
         'ما تنفّذه الباز للهندسة في الكويت: وحدات سبليت للمنازل، تكييف مخفي وسنترال للمكاتب والفلل، وحدات باكج، أنظمة VRF، استبدال المكيفات القديمة وعقود الصيانة.'],
    en: ['Air Conditioning & HVAC Work in Kuwait | Al Baz Engineering',
         'What Al Baz Engineering installs in Kuwait: split units for homes, ducted and central AC for offices and villas, package units, VRF systems, old unit replacement and maintenance contracts.'] },
  'about.html': {
    ar: ['عن الباز للهندسة | متخصصو التكييف والتبريد في الكويت',
         'الباز للهندسة شركة كويتية متخصصة في التكييف: بيع وتركيب مكيفات سبليت وسنترال ومخفي وأنظمة VRF، واستبدال وشراء المكيفات القديمة، وصيانتها.'],
    en: ['About Al Baz Engineering | AC & HVAC Specialists in Kuwait',
         'Al Baz Engineering is a Kuwaiti air conditioning and HVAC specialist: new split, central, ducted and VRF AC systems sold and installed, old units replaced and bought back, and all of it maintained.'] },
  'contact.html': {
    ar: ['اتصل بالباز للهندسة | عرض سعر تكييف مجاني في الكويت',
         'اطلب عرض سعر مجاني لتركيب تكييف جديد، أو استبدال مكيفك القديم، أو بيعه. الباز للهندسة، تكييف في جميع محافظات الكويت.'],
    en: ['Contact Al Baz Engineering | Free AC Quote in Kuwait',
         'Request a free quote for a new AC installation, a replacement, or a price for your old unit. Al Baz Engineering, air conditioning and HVAC across Kuwait.'] },
};
const CRUMB = { 'services.html': ['خدماتنا', 'Services'], 'projects.html': ['أعمالنا', 'Our work'], 'about.html': ['من نحن', 'About'], 'contact.html': ['اتصل بنا', 'Contact'] };

/* -------------------------------------------------------------- content */
const SERVICES = [
  { id: 'install', photo: 'split-living-room', lat: 'New units',
    ar: { t: 'مكيفات جديدة: بيع وتركيب', lead: 'وحدات جديدة بأسعار عادلة وتركيب يدوم. توريد فقط، أو توريد وتركيب. نحدد حجم الوحدة حسب المساحة وحرارة الكويت، لا حسب الكتالوج.',
      alt: 'وحدة تكييف سبليت مركّبة في غرفة معيشة حديثة',
      rows: ['وحدات سبليت من 1 إلى 3 طن', 'وحدات شباك وكاسيت ومخفية من 2 إلى 5 طن', 'وحدات باكج من 5 إلى 10 طن للقاعات والمحلات والمستودعات', 'مواسير نحاس وتصريف وتوصيل كهربائي ضمن العمل', 'تفريغ واختبار تسريب وشحن غاز وتشغيل في كل تركيب', 'أسعار توريد بالجملة للمقاولين وملّاك العقارات'] },
    en: { t: 'New units, sold and installed', lead: 'New units at fair prices, installed to last. Supply only, or supplied and installed. We size the unit to the space and the Kuwait heat, not to the catalogue.',
      alt: 'A split AC unit installed in a modern living room',
      rows: ['Split units from 1 to 3 ton', 'Window, cassette and ducted units from 2 to 5 ton', 'Package units from 5 to 10 ton for halls, shops and warehouses', 'Copper piping, drainage and electrical connection included', 'Vacuum, leak test, gas charge and commissioning on every install', 'Bulk supply pricing for contractors and building owners'] } },
  { id: 'replace', photo: 'technician-gauges-2', lat: 'Replace & upgrade',
    ar: { t: 'استبدال وتحديث المكيفات القديمة', lead: 'المكيف القديم يكلّفك أكثر كل صيف. نفحصه أولاً ونقول لك بصراحة إذا كان الإصلاح أوفر، وإن كان الاستبدال هو الأصح ننجزه في زيارة واحدة.',
      alt: 'فني يوصل العدادات بوحدة تكييف خارجية',
      rows: ['معاينة قبل أي سعر: إصلاح أم استبدال', 'وحدة مماثلة، أو ترقية إلى إنفرتر أو مخفي أو VRF', 'قيمة وحدتك القديمة تُخصم من سعر الجديدة', 'إعادة استخدام المواسير إن كانت سليمة', 'فك القديمة واسترجاع الغاز وإعادة تدويرها'] },
    en: { t: 'Replace and upgrade', lead: 'An old unit costs more to run every summer. We look at it first and tell you straight when a repair is the better buy. When replacement is right, we do it in one visit.',
      alt: 'A technician connecting gauges to an outdoor AC unit',
      rows: ['Assessment before any price: repair or replace', 'Like for like, or an upgrade to inverter, ducted or VRF', 'The value of your old unit comes off the new one', 'Existing piping reused where it is sound', 'Old unit removed, gas recovered, unit recycled'] } },
  { id: 'buyback', photo: 'outdoor-units-frame', lat: 'We buy old units',
    ar: { t: 'نشتري المكيفات القديمة', lead: 'شغّالة أو معطّلة، نشتري المكيفات المستعملة من المنازل والمكاتب والعمارات. بعها نقداً، أو ضع قيمتها في وحدة جديدة.',
      alt: 'وحدات تكييف خارجية مستعملة على هيكل حديدي',
      rows: ['سبليت وشباك وكاسيت ومخفي وباكج وVRF', 'أي ماركة وأي عمر', 'تسعير في اليوم نفسه من صورة للوحدة ولوحة بياناتها', 'نفكّ الوحدة وننقلها', 'نقداً، أو خصماً من سعر وحدة جديدة', 'كميات من العمارات والمكاتب ومواقع التجديد'] },
    en: { t: 'We buy old units', lead: 'Working or faulty, we buy used air conditioners from homes, offices and buildings. Sell for cash, or put the value towards a new unit.',
      alt: 'Used outdoor air conditioning units on a steel frame',
      rows: ['Split, window, cassette, ducted, package and VRF', 'Any brand, any age', 'Priced the same day from a photo of the unit and its nameplate', 'We uninstall it and take it away', 'Cash, or credit against a new unit', 'Bulk lots from buildings, offices and renovations'] } },
  { id: 'vrf', photo: 'vrf-outdoor-units', lat: 'VRF & central',
    ar: { t: 'أنظمة VRF والتكييف المركزي', lead: 'للفلل والمكاتب والمعارض والمباني متعددة الطوابق: غرف كثيرة بتحكم مستقل من نظام واحد عالي الكفاءة.',
      alt: 'صفوف من وحدات VRF الخارجية على سطح مبنى',
      rows: ['وحدات VRF خارجية من 8 إلى 20 حصان', 'وحدات داخلية جدارية وكاسيت ومخفية', 'حساب الأحمال وتصميم المواسير', 'ثرموستات ذكية وتحكم مركزي', 'أنظمة سنترال بالدكت للمساحات التجارية'] },
    en: { t: 'VRF and central systems', lead: 'For villas, offices, showrooms and multi-floor buildings: many rooms with independent control from one efficient system.',
      alt: 'Rows of VRF outdoor units on a rooftop',
      rows: ['VRF outdoor units from 8 to 20 HP', 'Hi-wall, cassette and ducted indoor units', 'Load calculation and piping design', 'Smart thermostats and central control', 'Central ducted systems for commercial spaces'] } },
  { id: 'ducting', photo: 'ducted-ceiling-white', lat: 'Ducting',
    ar: { t: 'الدكت والعزل', lead: 'الدكت الجيد هو الفرق بين غرفة باردة وزاوية باردة. نصنّع ونعزل وننظّف أنظمة الدكت للمباني الجديدة والتجديدات.',
      alt: 'نظام تكييف بالدكت عبر سقف مفتوح',
      rows: ['دكت من الصاج المجلفن', 'ألواح دكت معزولة مسبقاً', 'دكت مرن ومخارج هواء ودامبرات', 'عزل وإحكام لحرارة الكويت', 'تنظيف أنظمة الدكت'] },
    en: { t: 'Ducting and insulation', lead: 'Good ducting is the difference between a cold room and a cold corner. We fabricate, insulate and clean duct systems for new builds and renovations.',
      alt: 'A ducted air conditioning system across an open ceiling',
      rows: ['Galvanised sheet duct', 'Pre-insulated duct panels', 'Flexible duct, diffusers and dampers', 'Insulation and sealing for Kuwait heat', 'Duct system cleaning'] } },
  { id: 'amc', photo: 'manifold-gauges', lat: 'Maintenance contracts',
    ar: { t: 'عقود الصيانة السنوية', lead: 'زيارة صيانة مجدولة تكلّف أقل بكثير من عطل في أغسطس. عقودنا تبقي الوحدات نظيفة وتعمل بكفاءة.',
      alt: 'عدادات قياس تُستخدم في صيانة التكييف',
      rows: ['عقود للمنازل والفلل', 'عقود تجارية للمكاتب والمعارض والمدارس والعيادات', 'تنظيف الفلاتر والكويلات وغسل التصريف', 'فحص ضغط الغاز والكهرباء والثرموستات'] },
    en: { t: 'Annual maintenance contracts', lead: 'A planned service visit costs far less than a breakdown in August. Our contracts keep units clean and running efficiently.',
      alt: 'Manifold gauges used for AC maintenance',
      rows: ['Contracts for homes and villas', 'Commercial contracts for offices, showrooms, schools and clinics', 'Filter and coil cleaning, drain flushing', 'Gas pressure, electrical and thermostat checks'] } },
  { id: 'repair', photo: 'package-unit-service', lat: 'Repair',
    ar: { t: 'الإصلاح', lead: 'عندما يتوقف التبريد نأتي ونشخّص أولاً، ثم نسعّر، ثم نصلح.',
      alt: 'فني يعمل على وحدة باكج فوق السطح',
      rows: ['زيارة فحص مع سعر واضح قبل أي إصلاح', 'إصلاح تسريب الغاز وتعبئته (R410a وR22)', 'استبدال الكمبروسر والمواتير ولوحات التحكم', 'تنظيف عميق لوحدات السبليت والشباك', 'جميع الماركات'] },
    en: { t: 'Repair', lead: 'When the cooling stops we come, diagnose first, price second, and then fix it.',
      alt: 'A technician working on a rooftop package unit',
      rows: ['Diagnostic visit with a clear price before any repair', 'Gas leak repair and top-up (R410a and R22)', 'Compressor, motor and control board replacement', 'Deep cleaning for split and window units', 'All brands'] } },
  { id: 'parts', photo: 'refrigerant-workshop', lat: 'Spare parts',
    ar: { t: 'قطع الغيار', lead: 'قطع متوفرة في المخزون، لفنيّينا ولمقاولين وفرق صيانة آخرين.',
      alt: 'أسطوانات غاز تبريد وعدادات في ورشة',
      rows: ['كمبروسرات دوّارة وحلزونية', 'مواتير مراوح ومكثفات ولوحات تحكم وحساسات', 'ثرموستات وصمامات', 'مواسير نحاس وعزل ووصلات', 'غازات تبريد وفلاتر ومستهلكات'] },
    en: { t: 'Spare parts', lead: 'Parts in stock, for our own technicians and for other contractors and maintenance teams.',
      alt: 'Refrigerant cylinders and gauges in a workshop',
      rows: ['Rotary and scroll compressors', 'Fan motors, capacitors, control boards and sensors', 'Thermostats and valves', 'Copper pipe, insulation and fittings', 'Refrigerants, filters and consumables'] } },
];

const FAQ = {
  ar: [
    ['ما حجم المكيف الذي أحتاجه لغرفة في الكويت؟', 'كقاعدة عامة، حرارة الكويت تحتاج نحو طن تبريد واحد لكل 12 إلى 15 متراً مربعاً، وأكثر للأدوار العليا والغرف المواجهة للغرب والنوافذ الكبيرة. نؤكد الحجم بمعاينة قبل التسعير.'],
    ['ما الفرق بين مكيف السبليت والتكييف السنترال؟', 'مكيف السبليت يبرّد غرفة واحدة بوحدة داخلية وأخرى خارجية. التكييف السنترال (المركزي) يبرّد عدة غرف من وحدة واحدة عبر الدكت، ونظام VRF يشغّل وحدات داخلية كثيرة من وحدة خارجية واحدة مع تحكم مستقل لكل غرفة. نركّب ونصون الأنواع الثلاثة.'],
    ['هل تشترون المكيفات القديمة أو المستعملة؟', 'نعم. نشتري وحدات السبليت والشباك والكاسيت والمخفي والباكج وVRF من أي ماركة وأي عمر، شغّالة أو معطّلة. أرسل صورة للوحدة ولوحة بياناتها لتحصل على سعر في اليوم نفسه. ندفع نقداً أو نخصم القيمة من سعر وحدة جديدة.'],
    ['هل أصلح مكيفي القديم أم أستبدله؟', 'إذا كانت الوحدة حديثة نسبياً والعطل في المكثف أو موتور المروحة أو تسريب غاز، فالإصلاح عادةً يستحق. أما إذا كانت قديمة، أو تحتاج كمبروسر، أو تعمل بغاز R22، فالاستبدال بوحدة إنفرتر جديدة غالباً أوفر على المدى الطويل، ونخصم قيمة وحدتك القديمة من السعر.'],
    ['كم مرة يجب صيانة المكيف في الكويت؟', 'مع غبار الكويت وموسم التبريد الطويل، يُنصح بتنظيف الفلاتر شهرياً وصيانة الوحدة كل ثلاثة إلى أربعة أشهر، مع فحص شامل قبل الصيف. عقد الصيانة السنوي يجدول ذلك لك.'],
    ['هل تصلحون جميع ماركات المكيفات؟', 'نعم. نصلح وحدات السبليت والشباك والكاسيت والمخفي والباكج وVRF من مختلف الماركات.'],
  ],
  en: [
    ['What size AC do I need for a room in Kuwait?', 'As a rule of thumb, Kuwait’s heat needs roughly 1 ton of cooling for every 12 to 15 square metres, more for top floors, west-facing rooms and large windows. We confirm the size with a survey before quoting.'],
    ['What is the difference between a split AC and central air conditioning?', 'A split AC cools one room with its own indoor and outdoor unit. Central air conditioning cools several rooms from one unit through ducts, and a VRF system runs many indoor units from one outdoor unit with independent control per room. We install and maintain all three.'],
    ['Do you buy old or used AC units?', 'Yes. We buy split, window, cassette, ducted, package and VRF units of any brand and any age, working or not. Send a photo of the unit and its nameplate for a same-day price. We pay cash or take the value off a new unit.'],
    ['Should I repair or replace my old air conditioner?', 'If the unit is fairly new and the fault is a capacitor, fan motor or gas leak, repair is usually worth it. If it is old, needs a compressor, or runs on R22, replacing it with a new inverter unit is usually cheaper over time, and we take the value of your old unit off the price.'],
    ['How often should an air conditioner be serviced in Kuwait?', 'With Kuwait’s dust and long cooling season, clean the filters monthly and have the unit serviced every three to four months, with a full check before summer. An annual maintenance contract schedules this for you.'],
    ['Do you repair all AC brands?', 'Yes. We repair split, window, cassette, ducted, package and VRF units across brands.'],
  ],
};

const WORK = [
  { photo: 'vrf-outdoor-units', lat: 'VRF', ar: ['أنظمة VRF', 'وحدة خارجية واحدة تخدم مبنى كاملاً، بتحكم مستقل لكل غرفة.', 'صفوف من وحدات VRF الخارجية على سطح مبنى'], en: ['VRF systems', 'One outdoor plant serving a whole building, with independent control per room.', 'Rows of VRF outdoor units on a rooftop'] },
  { photo: 'ducted-ceiling-white', lat: 'Ducted', ar: ['تكييف مخفي وسنترال', 'وحدات مخفية ودكت للمكاتب والفلل والمعارض.', 'نظام تكييف بالدكت عبر سقف مفتوح'], en: ['Ducted and central AC', 'Concealed units and ductwork for offices, villas and showrooms.', 'A ducted air conditioning system across an open ceiling'] },
  { photo: 'split-living-room', lat: 'Split', ar: ['وحدات سبليت', 'للشقق والمنازل، بالحجم الصحيح لكل غرفة.', 'وحدة تكييف سبليت في غرفة معيشة'], en: ['Split units', 'For apartments and homes, sized correctly for each room.', 'A split AC unit in a living room'] },
  { photo: 'package-unit-service', lat: 'Package', ar: ['وحدات باكج', 'للقاعات والمحلات والمستودعات.', 'فني يعمل على وحدة باكج فوق السطح'], en: ['Package units', 'For halls, shops and warehouses.', 'A technician working on a rooftop package unit'] },
  { photo: 'outdoor-units-frame', lat: 'Replacement', ar: ['استبدال الوحدات القديمة', 'نفكّ القديم ونشتريه، ونركّب الجديد في الزيارة نفسها.', 'وحدات تكييف خارجية مستعملة على هيكل حديدي'], en: ['Old unit replacement', 'We remove and buy the old unit and fit the new one in the same visit.', 'Used outdoor AC units on a steel frame'] },
  { photo: 'technician-gauge', lat: 'Maintenance', ar: ['الصيانة الدورية', 'تنظيف وفحص مجدولان يحافظان على الكفاءة ويقلّلان الأعطال.', 'فني يفحص ضغط الغاز في وحدة تكييف'], en: ['Planned maintenance', 'Scheduled cleaning and checks that keep efficiency up and breakdowns down.', 'A technician checking gas pressure on an AC unit'] },
];

/* ---------------------------------------------------------------- chrome */
function build(lang, file) {
  const ar = lang === 'ar';
  const t = (a, e) => (ar ? a : e);
  const base = ar ? '' : '../';
  const other = ar ? 'en/' + (file === 'index.html' ? '' : file) : '../' + (file === 'index.html' ? '' : file);
  const arrow = ar ? '←' : '→';
  const num = n => (ar ? arDigits(n) : String(n).padStart(2, '0'));
  const ph = n => `${base}img/photos/${n}.jpg`;
  const sq = '<span class="sq" aria-hidden="true"></span>';
  const ruleHead = (n, a, e, side) => `<div class="rule-head"><h2>${num(n)} — ${t(a, e)}</h2>${side ? (ar ? `<span class="label" lang="en">${side[1]}</span>` : `<span class="ara" lang="ar">${side[0]}</span>`) : ''}</div>`;
  const rows = (items, cls = '') => `<ul class="rows${cls}">${items.map(i => Array.isArray(i) ? `<li><span>${i[0]}</span><span class="label" lang="en">${i[1]}</span></li>` : `<li><span>${i}</span></li>`).join('')}</ul>`;

  const nav = [
    ['services.html', 'خدماتنا', 'Services'],
    ['services.html#buyback', 'بيع مكيفك القديم', 'Sell your old unit'],
    ['projects.html', 'أعمالنا', 'Our work'],
    ['about.html', 'من نحن', 'About'],
  ];
  const header = `
<a class="skip" href="#main">${t('انتقل إلى المحتوى', 'Skip to content')}</a>
<header class="site-header">
  <div class="container">
    <a class="brand" href="./" aria-label="${t('الباز للهندسة، الرئيسية', 'ALBAZ Engineering, home')}"><img src="${base}brand/logo-transparent.png" alt="${t('الباز للهندسة', 'ALBAZ Engineering')}" width="985" height="650"></a>
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="nav">${t('القائمة', 'Menu')}</button>
    <nav class="nav" id="nav" aria-label="${t('القائمة الرئيسية', 'Primary')}">
      ${nav.map(([h, a, e]) => `<a href="${h}"${h === file ? ' aria-current="page"' : ''}>${t(a, e)}</a>`).join('\n      ')}
      <a class="lang ${ar ? 'lat' : 'ara'}" href="${other}" lang="${ar ? 'en' : 'ar'}" hreflang="${ar ? 'en' : 'ar'}">${ar ? 'English' : 'العربية'}</a>
      <a class="btn btn-ink" href="contact.html">${t('عرض سعر مجاني', 'Free quote')}</a>
    </nav>
  </div>
</header>`;

  const contact = `
<section class="contact-block" id="contact">
  <div class="container">
    <div class="say">
      <div class="big">${t('جاهزون نبرّد.', 'Cooling that works.')}</div>
      <div class="sub">${t('عرض سعر مجاني في جميع محافظات الكويت.', 'Free quote, in every Kuwait governorate.')}</div>
      ${ar ? '' : '<div class="ara" lang="ar">جاهزون نبرّد.</div>'}
    </div>
    <div class="reach">
      <a class="phone" href="tel:${TEL}" dir="ltr">${PHONE}</a>
      <ul class="rows">
        <li><span>${t('البريد', 'Email')}</span><a class="lat" href="mailto:${EMAIL}">${EMAIL}</a></li>
        <li><span>${t('إنستغرام', 'Instagram')}</span><a class="lat" href="${INSTAGRAM}" target="_blank" rel="noopener">${HANDLE}</a></li>
        <li><span>${t('العنوان', 'Address')}</span><a href="${MAP}" target="_blank" rel="noopener">${t('الري، الكويت', 'Al Rai, Kuwait')}</a></li>
        <li><span>${t('ساعات العمل', 'Hours')}</span><span>${t('8 ص – 8 م، يومياً عدا الجمعة', '8 am – 8 pm, every day except Friday')}</span></li>
      </ul>
    </div>
  </div>
</section>`;

  const footer = `
<footer class="site-footer">
  <div class="container">
    <a class="brand" href="./"><img src="${base}brand/logo-transparent.png" alt="${t('الباز للهندسة', 'ALBAZ Engineering')}" width="985" height="650" loading="lazy"></a>
    <nav class="foot-nav" aria-label="${t('روابط التذييل', 'Footer')}">
      <a href="services.html">${t('خدماتنا', 'Services')}</a>
      <a href="projects.html">${t('أعمالنا', 'Our work')}</a>
      <a href="about.html">${t('من نحن', 'About')}</a>
      <a href="contact.html">${t('اتصل بنا', 'Contact')}</a>
    </nav>
    <div class="legal">
      <span>© <span id="year">2026</span> ${t('الباز للهندسة. جميع الحقوق محفوظة.', 'ALBAZ Engineering. All rights reserved.')}</span>
      <span class="label" lang="en">albazkw.com · Sales · Installation · Maintenance</span>
    </div>
  </div>
</footer>`;

  const pageHero = (label, h1, lead) => `
<section class="hero">
  <div class="container">
    <span class="label" lang="en">${label}</span>
    <h1 class="display sm">${h1}${sq}</h1>
    <div class="hero-foot"><div><p class="lead">${lead}</p></div></div>
  </div>
</section>`;

  /* ---------------------------------------------------------------- pages */
  let main = '';
  let extraLd = [];

  if (file === 'index.html') {
    main = `
<section class="hero">
  <div class="container">
    <span class="label" lang="en">ALBAZ Engineering · Air conditioning · Kuwait</span>
    <h1 class="display">${t('برودة تعتمد عليها', 'Out with the old.<br>In with the cold')}${sq}</h1>
    <div class="hero-foot">
      <div>
        <p class="lead">${t('نبيع ونركّب مكيفات جديدة، ونستبدل القديمة، ونشتري مكيفك القديم شغّالاً كان أو معطّلاً.', 'We sell and install new air conditioning units, replace the old ones, and buy your old unit, working or not.')}</p>
        <div class="actions">
          <a class="btn btn-primary" href="contact.html">${t('اطلب عرض سعر مجاني', 'Get a free quote')}</a>
          <a class="link-under" href="#trade-in">${t('سعّر مكيفك القديم', 'Price my old unit')} ${arrow}</a>
        </div>
      </div>
      <ul class="chips">${(ar ? ['بيع', 'تركيب', 'استبدال', 'شراء القديم', 'صيانة'] : ['Sales', 'Installation', 'Replacement', 'Buy-back', 'Maintenance']).map(c => `<li class="chip">${c}</li>`).join('')}</ul>
    </div>
  </div>
</section>

<div class="photo-band"><img src="${ph('vrf-outdoor-units')}" alt="${t('صفوف من وحدات التكييف الخارجية على سطح مبنى', 'Rows of outdoor air conditioning units on a rooftop')}" fetchpriority="high"></div>

<section class="section" id="services">
  <div class="container">
    ${ruleHead(1, 'خدماتنا', 'Services', ['بيع · استبدال · شراء', 'Sell · Replace · Buy back'])}
    <div class="cols">
      <div class="col">
        <span class="label" lang="en">01 · New units</span>
        <h3>${t('مكيفات جديدة', 'New units')}</h3>
        <p>${t('سبليت وشباك وكاسيت ومخفي وباكج، بالحجم الصحيح للمكان، وبتركيب فرقنا.', 'Split, window, cassette, ducted and package units, sized to the room and fitted by our own crews.')}</p>
        <a class="more" href="services.html#install">${t('المزيد', 'More')} ${arrow}</a>
      </div>
      <div class="col">
        <span class="label" lang="en">02 · Replace &amp; upgrade</span>
        <h3>${t('استبدال وتحديث', 'Replace and upgrade')}</h3>
        <p>${t('القديم يطلع والجديد يتركّب في زيارة واحدة. ونقول لك بصراحة إذا كان الإصلاح أوفر.', 'Old unit out, new unit in, one visit. And we tell you straight when a repair is the better buy.')}</p>
        <a class="more" href="services.html#replace">${t('المزيد', 'More')} ${arrow}</a>
      </div>
      <div class="col">
        <span class="label" lang="en">03 · We buy old units</span>
        <h3>${t('نشتري القديم', 'We buy old units')}</h3>
        <p>${t('شغّال أو معطّل، من أي ماركة. نقداً، أو خصماً من سعر الوحدة الجديدة.', 'Working or faulty, any brand. Paid in cash, or taken off the price of a new unit.')}</p>
        <a class="more" href="services.html#buyback">${t('المزيد', 'More')} ${arrow}</a>
      </div>
    </div>
    <div class="also">
      <span class="note">${t('وأيضاً', 'Also')}</span>
      <ul class="chips">
        <li><a class="chip" href="services.html#vrf">${t('VRF وتكييف مركزي', 'VRF &amp; central systems')}</a></li>
        <li><a class="chip" href="services.html#ducting">${t('دكت وعزل', 'Ducting &amp; insulation')}</a></li>
        <li><a class="chip" href="services.html#amc">${t('عقود صيانة', 'Maintenance contracts')}</a></li>
        <li><a class="chip" href="services.html#repair">${t('إصلاح', 'Repair')}</a></li>
        <li><a class="chip" href="services.html#parts">${t('قطع غيار', 'Spare parts')}</a></li>
      </ul>
    </div>
  </div>
</section>

<section class="section band-bone" id="trade-in">
  <div class="container split">
    <div class="stack">
      <h2 class="note">${num(2)} — ${t('بيع مكيفك القديم', 'Sell your old unit')}</h2>
      <p class="statement">${t('مكيفك القديم<br>له سعر.', 'Your old unit<br>has a price.')}</p>
      <p class="lead">${t('صوّر الوحدة ولوحة بياناتها وأرسلها لنا. نسعّرها في اليوم نفسه، ونفكّها وننقلها.', 'Photograph the unit and its nameplate and send it to us. We price it the same day, uninstall it and take it away.')}</p>
      <a class="btn btn-ink" href="contact.html">${t('أرسل صورة الوحدة', 'Send a photo of the unit')}</a>
    </div>
    <div>
      <div class="rows-title">${t('ماذا نشتري', 'What we buy')}</div>
      ${rows(ar
        ? [['سبليت وشباك', '1 – 3 ton'], ['كاسيت ومخفي', '2 – 5 ton'], ['وحدات باكج', '5 – 10 ton'], ['أنظمة VRF', 'Whole systems'], ['كميات من العمارات والمكاتب', 'Bulk lots']]
        : [['Split and window units', '1 – 3 ton'], ['Cassette and ducted units', '2 – 5 ton'], ['Package units', '5 – 10 ton'], ['VRF systems', 'Whole systems'], ['Buildings, offices and renovations', 'Bulk lots']])}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${ruleHead(3, 'الباز للهندسة', 'ALBAZ Engineering', ['تكييف في الكويت', 'Air conditioning in Kuwait'])}
    <div class="prose">
      ${ar
        ? `<p>الباز للهندسة شركة تكييف وتبريد في الكويت. نبيع ونركّب <a href="services.html#install">مكيفات جديدة سبليت وشباك وكاسيت ومخفي</a>، و<a href="services.html#replace">نستبدل ونحدّث المكيفات القديمة</a>، و<a href="services.html#buyback">نشتري المكيفات المستعملة</a>، ونصمّم <a href="services.html#vrf">أنظمة التكييف السنترال (المركزي) وVRF</a> للفلل والمكاتب والمعارض.</p>
      <p>وبعد التركيب: <a href="services.html#amc">عقود صيانة تكييف سنوية</a>، و<a href="services.html#repair">إصلاح مكيفات</a>، و<a href="services.html#ducting">دكت وعزل</a>، و<a href="services.html#parts">قطع غيار</a>، في مدينة الكويت وحولي والفروانية والأحمدي والجهراء ومبارك الكبير.</p>`
        : `<p>ALBAZ Engineering is an air conditioning and HVAC company in Kuwait. We sell and install <a href="services.html#install">new split AC, window, cassette and ducted units</a>, <a href="services.html#replace">replace and upgrade old air conditioners</a>, <a href="services.html#buyback">buy used AC units</a>, and design <a href="services.html#vrf">central air conditioning and VRF systems</a> for villas, offices and showrooms.</p>
      <p>After the install: <a href="services.html#amc">annual AC maintenance contracts</a>, <a href="services.html#repair">AC repair</a>, <a href="services.html#ducting">ducting and insulation</a> and <a href="services.html#parts">spare parts</a>, across Kuwait City, Hawalli, Farwaniya, Ahmadi, Jahra and Mubarak Al-Kabeer.</p>`}
      <p class="note">${t('وحدات جديدة من', 'New units from')}</p>
      <p class="brands lat">${BRANDS}</p>
    </div>
  </div>
</section>`;
  }

  if (file === 'services.html') {
    main = pageHero('Services · Air conditioning · Kuwait',
      t('بيع. تركيب.<br>استبدال. صيانة', 'Sell. Install.<br>Replace. Maintain'),
      t('نبيع ونركّب وحدات جديدة، ونستبدل أو نشتري القديمة، ونوفر كل ما يلزم لإبقائها تعمل. ثماني خدمات ينفّذها فنيّونا.', 'New units sold and installed, old units replaced or bought back, and everything needed to keep them running. Eight services, carried out by our own technicians.'))
      + SERVICES.map((s, i) => {
        const c = s[lang];
        return `
<section class="svc" id="${s.id}">
  <div class="container">
    <div class="rule-head"><h2>${num(i + 1)} — ${c.t}</h2><span class="label" lang="en">${s.lat}</span></div>
    <div class="split">
      <div>
        <p class="lead">${c.lead}</p>
        ${rows(c.rows, ' plain')}
      </div>
      <figure class="shot"><img src="${ph(s.photo)}" alt="${c.alt}" loading="lazy" decoding="async"></figure>
    </div>
  </div>
</section>`; }).join('')
      + `
<section class="section band-bone" id="faq">
  <div class="container">
    ${ruleHead(9, 'أسئلة شائعة', 'Questions we hear', null)}
    <div class="faq">
      ${FAQ[lang].map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join('\n      ')}
    </div>
  </div>
</section>`;
    extraLd.push({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQ[lang].map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) });
  }

  if (file === 'projects.html') {
    main = pageHero('Our work · Air conditioning · Kuwait',
      t('من وحدة سبليت<br>إلى مبنى كامل', 'From one split<br>to a whole building'),
      t('أنواع الأعمال التي ننفّذها، للمنازل والمكاتب والمعارض والمستودعات.', 'The kinds of work we take on, for homes, offices, showrooms and warehouses.'))
      + `
<section class="section tight">
  <div class="container">
    ${ruleHead(1, 'ما ننفّذه', 'What we install', null)}
    <div class="work">
      ${WORK.map(w => { const c = w[lang]; return `<figure>
        <img src="${ph(w.photo)}" alt="${c[2]}" loading="lazy" decoding="async">
        <figcaption><span class="label" lang="en">${w.lat}</span><h3>${c[0]}</h3><p class="muted">${c[1]}</p></figcaption>
      </figure>`; }).join('\n      ')}
    </div>
  </div>
</section>`;
  }

  if (file === 'about.html') {
    main = pageHero('About · ALBAZ Engineering',
      t('متخصصون في التكييف،<br>لا مقاول عام', 'Air conditioning specialists,<br>not general contractors'),
      t('نقوم بعمل واحد ونتقنه: إبقاء منازل الكويت ومنشآتها باردة.', 'We do one thing and do it properly: keeping Kuwait’s homes and businesses cool.'))
      + `
<section class="section tight">
  <div class="container">
    ${ruleHead(1, 'من نحن', 'Who we are', null)}
    <div class="prose">
      <p>${t('الباز للهندسة شركة تكييف في الكويت. نبيع ونركّب الوحدات الجديدة، ونستبدل ونشتري القديمة، ونصونها جميعاً، للمنازل والمكاتب والمعارض والمدارس والعيادات في جميع محافظات الكويت.', 'ALBAZ Engineering is an air conditioning company in Kuwait. We sell and install new units, replace and buy old ones, and maintain them all, for homes, offices, showrooms, schools and clinics in every Kuwait governorate.')}</p>
      <p>${t('نعمل على أنظمة السبليت والشباك والكاسيت والمخفي والباكج وVRF، ونخزّن قطع الغيار اللازمة لها.', 'We work on split, window, cassette, ducted, package and VRF systems, and stock the spare parts they need.')}</p>
    </div>
  </div>
</section>

<section class="section band-bone">
  <div class="container">
    ${ruleHead(2, 'كيف نعمل', 'How we work', null)}
    <div class="cols four">
      <div class="col"><h3>${t('الحجم الصحيح', 'Right-sized')}</h3><p>${t('نحسب حمل التبريد ونوصي بالوحدة التي تحتاجها الغرفة، لا بأكبر وحدة على الرف.', 'We calculate the cooling load and recommend the unit the room needs, not the biggest one on the shelf.')}</p></div>
      <div class="col"><h3>${t('العمل الصحيح', 'Done properly')}</h3><p>${t('تفريغ واختبار تسريب وشحن بالوزن وتشغيل. لا اختصارات في الأجزاء التي لا تراها.', 'Vacuumed, leak-tested, charged by weight and commissioned. No shortcuts on the parts you cannot see.')}</p></div>
      <div class="col"><h3>${t('الصراحة', 'Straight answers')}</h3><p>${t('تشخيص قبل أي سعر، وعرض سعر مفصّل، ورأي صريح بين الإصلاح والاستبدال.', 'A diagnosis before any price, an itemised quote, and an honest call between repair and replacement.')}</p></div>
      <div class="col"><h3>${t('القديم له قيمة', 'Old units have value')}</h3><p>${t('نشتري وحدتك القديمة بدل أن ترميها، ونخصم قيمتها من الجديدة.', 'We buy your old unit instead of leaving you to dump it, and take its value off the new one.')}</p></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${ruleHead(3, 'ما نورّده', 'What we supply', null)}
    <div class="prose">
      <p class="note">${t('وحدات جديدة من', 'New units from')}</p>
      <p class="brands lat">${BRANDS}</p>
    </div>
  </div>
</section>`;
  }

  if (file === 'contact.html') {
    const opt = list => list.map(o => `<option>${o}</option>`).join('');
    main = pageHero('Contact · Free quote',
      t('عرض سعر مجاني', 'Free quote'),
      t('أخبرنا عن المكان، أو المشكلة، أو الوحدة القديمة التي تريد استبدالها أو بيعها.', 'Tell us about the space, the problem, or the old unit you want to replace or sell.'))
      + `
<section class="section tight">
  <div class="container">
    ${ruleHead(1, 'اطلب عرض سعر', 'Request a quote', null)}
    <form class="form" id="contact-form" style="padding-top:36px" data-to="${EMAIL}" data-subject="${t('طلب عرض سعر من الموقع', 'Website quote request')}">
      <div class="field"><label for="name">${t('الاسم', 'Name')} *</label><input id="name" name="${t('الاسم', 'Name')}" required autocomplete="name"></div>
      <div class="field"><label for="phone">${t('الهاتف', 'Phone')} *</label><input id="phone" name="${t('الهاتف', 'Phone')}" type="tel" required dir="ltr" placeholder="+965" autocomplete="tel"></div>
      <div class="field"><label for="need">${t('ماذا تحتاج؟', 'What do you need?')}</label><select id="need" name="${t('الطلب', 'Request')}">${opt(ar ? ['شراء مكيفات جديدة', 'استبدال أو تحديث مكيفات قديمة', 'بيع مكيفاتي القديمة', 'نظام VRF أو مركزي', 'دكت وعزل', 'عقد صيانة سنوي', 'إصلاح', 'قطع غيار', 'أخرى'] : ['Buy new AC units', 'Replace or upgrade old units', 'Sell my old AC units', 'VRF or central system', 'Ducting and insulation', 'Annual maintenance contract', 'Repair', 'Spare parts', 'Other'])}</select></div>
      <div class="field"><label for="property">${t('نوع العقار', 'Property type')}</label><select id="property" name="${t('العقار', 'Property')}">${opt(ar ? ['شقة', 'فيلا', 'مكتب', 'محل أو معرض', 'مستودع أو منشأة صناعية', 'مدرسة أو عيادة أو غير ذلك'] : ['Apartment', 'Villa', 'Office', 'Shop or showroom', 'Warehouse or industrial', 'School, clinic or other'])}</select></div>
      <div class="field wide"><label for="message">${t('التفاصيل', 'Details')} *</label><textarea id="message" name="${t('التفاصيل', 'Details')}" required placeholder="${t('المنطقة، عدد الغرف أو الوحدات، والنظام الحالي وعمره إن كنت تستبدل أو تبيع.', 'Area, number of rooms or units, and the current system and its age if you are replacing or selling.')}"></textarea></div>
      <div class="actions"><button class="btn btn-primary" type="submit">${t('إرسال الطلب', 'Send request')}</button></div>
      <p class="form-note">${t('يفتح الزر بريدك الإلكتروني برسالة جاهزة. إن كنت تبيع أو تستبدل وحدة، أرفق صورتها وصورة لوحة بياناتها.', 'The button opens your email with the message ready. If you are selling or replacing a unit, attach a photo of it and of its nameplate.')}</p>
    </form>
  </div>
</section>`;
  }

  /* ------------------------------------------------------------------ head */
  const [title, desc] = META[file][lang];
  const url = urlOf(lang, file);
  const business = {
    '@context': 'https://schema.org', '@type': 'HVACBusiness', '@id': SITE + '/#business',
    name: 'Al Baz Engineering', alternateName: 'الباز للهندسة', url: SITE + '/',
    logo: SITE + '/brand/app-icon-white.png', image: SITE + '/brand/app-icon-white.png',
    telephone: TEL, email: EMAIL,
    description: 'Air conditioning company in Kuwait: new AC units sold and installed, old units replaced and bought back, central and ducted systems, VRF, ducting, AC maintenance contracts, AC repair and spare parts. شركة تكييف في الكويت: بيع مكيفات جديدة، استبدال وشراء المكيفات القديمة، صيانة وإصلاح مكيفات سبليت وسنترال وVRF.',
    address: { '@type': 'PostalAddress', addressLocality: 'Al Rai', addressCountry: 'KW' },
    hasMap: MAP, sameAs: [INSTAGRAM],
    openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '08:00', closes: '20:00' }],
    areaServed: { '@type': 'Country', name: 'Kuwait' }, knowsLanguage: ['ar', 'en'],
    hasOfferCatalog: { '@type': 'OfferCatalog', name: 'Air conditioning services',
      itemListElement: SERVICES.map(s => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.en.t, alternateName: s.ar.t, url: SITE + '/services.html#' + s.id, areaServed: 'Kuwait' } })) },
  };
  const ld = [business, ...extraLd];
  if (CRUMB[file]) ld.push({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: t('الرئيسية', 'Home'), item: urlOf(lang, 'index.html') },
    { '@type': 'ListItem', position: 2, name: CRUMB[file][ar ? 0 : 1], item: url }] });

  return `<!DOCTYPE html>
<html lang="${lang}" dir="${ar ? 'rtl' : 'ltr'}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <meta name="description" content="${desc}">
  <link rel="canonical" href="${url}">
  <link rel="alternate" hreflang="ar" href="${urlOf('ar', file)}">
  <link rel="alternate" hreflang="en" href="${urlOf('en', file)}">
  <link rel="alternate" hreflang="x-default" href="${urlOf('ar', file)}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Al Baz Engineering">
  <meta property="og:locale" content="${ar ? 'ar_KW' : 'en_US'}">
  <meta property="og:locale:alternate" content="${ar ? 'en_US' : 'ar_KW'}">
  <meta property="og:url" content="${url}">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${desc}">
  <meta property="og:image" content="${SITE}/brand/app-icon-white.png">
  <meta name="twitter:card" content="summary">
  <meta name="robots" content="index, follow, max-image-preview:large">
  <meta name="theme-color" content="#f6f5f2">
  <link rel="preload" href="${base}fonts/${ar ? 'cairo-arabic' : 'space-grotesk-latin'}.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="${base}css/site.css">
  <link rel="icon" href="${base}brand/app-icon-white.png" type="image/png">
  <script type="application/ld+json">${JSON.stringify(ld.length === 1 ? ld[0] : ld)}</script>
</head>
<body>
${header}
<main id="main">
${main}
</main>
${contact}
${footer}
<script src="${base}js/site.js" defer></script>
</body>
</html>
`;
}

/* ------------------------------------------------------------------ write */
fs.mkdirSync(path.join(ROOT, 'en'), { recursive: true });
for (const file of FILES) {
  fs.writeFileSync(path.join(ROOT, file), build('ar', file));
  fs.writeFileSync(path.join(ROOT, 'en', file), build('en', file));
}
const entries = FILES.flatMap(f => ['ar', 'en'].map(l => `  <url>
    <loc>${urlOf(l, f)}</loc>
    <xhtml:link rel="alternate" hreflang="ar" href="${urlOf('ar', f)}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${urlOf('en', f)}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${urlOf('ar', f)}"/>
    <changefreq>monthly</changefreq>
    <priority>${f === 'index.html' ? '1.0' : '0.8'}</priority>
  </url>`));
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>
`);
fs.writeFileSync(path.join(ROOT, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);
console.log('built', FILES.length * 2, 'pages + sitemap.xml + robots.txt');
