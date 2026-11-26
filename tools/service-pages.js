/* One page per service, in both languages. Keyed by the service id used in
   tools/build.js. Each entry: slug (file name), then per language:
   h1, title (browser tab / Google headline), desc (Google snippet),
   intro (the first paragraph: answers "what is this and where" straight away),
   faq (real questions with short answers; also published as FAQ data).
   Only state facts the business stands behind. No prices, guarantees or
   response times unless the business has confirmed them. */
module.exports = {
  install: {
    slug: 'new-ac-units.html',
    ar: {
      h1: 'بيع وتركيب مكيفات جديدة في الكويت',
      title: 'بيع وتركيب مكيفات جديدة في الكويت | الباز الهندسية',
      desc: 'مكيفات سبليت وشباك وكاسيت ومخفي وباكج جديدة في الكويت، توريد فقط أو مع التركيب. نحدد الحجم بمعاينة ونسلّم الوحدة مفحوصة وتعمل. عرض سعر مجاني.',
      intro: 'نبيع ونركّب مكيفات جديدة في جميع محافظات الكويت: سبليت وشباك وكاسيت ومخفي وباكج، من 1 إلى 10 طن. يمكنك شراء الوحدة فقط، أو شراؤها مع التركيب الكامل على يد فنيّينا.',
      faq: [
        ['ما حجم المكيف الذي أحتاجه لغرفة في الكويت؟', 'كقاعدة عامة، حرارة الكويت تحتاج نحو طن تبريد واحد لكل 12 إلى 15 متراً مربعاً، وأكثر للأدوار العليا والغرف المواجهة للغرب والنوافذ الكبيرة. نؤكد الحجم بمعاينة قبل التسعير.'],
        ['هل يمكن شراء المكيف بدون تركيب؟', 'نعم. نبيع الوحدات توريداً فقط أو مع التركيب، ونقدّم أسعار جملة للمقاولين وملّاك العقارات.'],
        ['ماذا يشمل تركيب المكيف؟', 'مواسير النحاس والتصريف والتوصيل الكهربائي، ثم تفريغ الدائرة واختبار التسريب وشحن الغاز وتشغيل الوحدة والتأكد من تبريدها.'],
        ['ما ماركات المكيفات التي توردونها؟', 'نورّد وحدات جديدة من Gree وMidea وLG وSamsung وYork وCarrier.'],
      ],
    },
    en: {
      h1: 'New AC units, sold and installed in Kuwait',
      title: 'New AC Units & Installation in Kuwait | Al Baz Engineering',
      desc: 'New split, window, cassette, ducted and package AC units in Kuwait, supply only or fully installed. Sized by survey, tested and commissioned. Free quote.',
      intro: 'We sell and install new air conditioners in every Kuwait governorate: split, window, cassette, ducted and package units from 1 to 10 ton. Buy the unit alone, or have it supplied and fully installed by our own technicians.',
      faq: [
        ['What size AC do I need for a room in Kuwait?', 'As a rule of thumb, Kuwait’s heat needs roughly 1 ton of cooling for every 12 to 15 square metres, more for top floors, west-facing rooms and large windows. We confirm the size with a survey before quoting.'],
        ['Can I buy an AC unit without installation?', 'Yes. We sell units supply only or supplied and installed, with bulk pricing for contractors and building owners.'],
        ['What does AC installation include?', 'Copper piping, drainage and the electrical connection, then vacuuming the circuit, a leak test, the gas charge, and commissioning to confirm the unit cools as it should.'],
        ['Which AC brands do you supply?', 'We supply new units from Gree, Midea, LG, Samsung, York and Carrier.'],
      ],
    },
  },

  replace: {
    slug: 'ac-replacement.html',
    ar: {
      h1: 'استبدال المكيفات القديمة في الكويت',
      title: 'استبدال المكيفات القديمة في الكويت | الباز الهندسية',
      desc: 'نفحص مكيفك القديم ونقول لك بصراحة: إصلاح أم استبدال. نفكّ القديم ونركّب الجديد في زيارة واحدة، ونخصم قيمة وحدتك القديمة من السعر.',
      intro: 'نستبدل المكيفات القديمة بوحدات جديدة في جميع محافظات الكويت. نفكّ الوحدة القديمة ونركّب الجديدة في زيارة واحدة، ونخصم قيمة القديمة من سعر الجديدة.',
      faq: [
        ['هل أصلح مكيفي القديم أم أستبدله؟', 'إذا كانت الوحدة حديثة نسبياً والعطل في المكثف أو موتور المروحة أو تسريب غاز، فالإصلاح عادةً يستحق. أما إذا كانت قديمة، أو تحتاج كمبروسر، أو تعمل بغاز R22، فالاستبدال بوحدة إنفرتر جديدة غالباً أوفر على المدى الطويل.'],
        ['ما فائدة الترقية إلى مكيف إنفرتر؟', 'كمبروسر الإنفرتر يغيّر سرعته حسب حاجة الغرفة بدل التشغيل والإيقاف المتكرر، فيستهلك كهرباء أقل ويحافظ على حرارة أثبت وصوت أهدأ.'],
        ['هل يمكن استخدام المواسير القديمة مع المكيف الجديد؟', 'نعم إن كانت سليمة ومناسبة لحجم الوحدة الجديدة ونوع غازها. نفحصها أولاً، ونستبدلها عند وجود تسريب أو تآكل.'],
        ['ماذا تفعلون بالمكيف القديم؟', 'نفكّه ونسترجع غاز التبريد منه وننقله، ونخصم قيمته من سعر الوحدة الجديدة.'],
      ],
    },
    en: {
      h1: 'Old AC replacement and upgrades in Kuwait',
      title: 'AC Replacement & Upgrade in Kuwait | Al Baz Engineering',
      desc: 'We assess your old air conditioner and tell you straight: repair or replace. Old unit out, new unit in, in one visit, with the old unit’s value off the price.',
      intro: 'We replace old air conditioners with new units across Kuwait. The old unit comes out and the new one goes in during one visit, and the value of the old unit comes off the price of the new one.',
      faq: [
        ['Should I repair or replace my old air conditioner?', 'If the unit is fairly new and the fault is a capacitor, fan motor or gas leak, repair is usually worth it. If it is old, needs a compressor, or runs on R22, replacing it with a new inverter unit is usually cheaper over time.'],
        ['What is the benefit of upgrading to an inverter AC?', 'An inverter compressor changes speed to match what the room needs instead of switching on and off, so it uses less electricity, holds a steadier temperature and runs quieter.'],
        ['Can the existing pipes be reused with a new AC?', 'Yes, when they are sound and suit the size and refrigerant of the new unit. We check them first and replace them where there is a leak or corrosion.'],
        ['What happens to the old air conditioner?', 'We uninstall it, recover the refrigerant and take it away, and its value comes off the price of the new unit.'],
      ],
    },
  },

  buyback: {
    slug: 'sell-used-ac.html',
    ar: {
      h1: 'نشتري المكيفات المستعملة والقديمة في الكويت',
      title: 'شراء مكيفات مستعملة وقديمة في الكويت | الباز الهندسية',
      desc: 'نشتري المكيفات المستعملة في الكويت، شغّالة أو معطّلة، من أي ماركة: سبليت وشباك ومخفي وباكج وVRF. أرسل صورة الوحدة ولوحة بياناتها لتسعيرها.',
      intro: 'نشتري المكيفات المستعملة والقديمة في جميع محافظات الكويت، شغّالة كانت أو معطّلة، ومن أي ماركة. أرسل صورة للوحدة وصورة للوحة بياناتها، فنسعّرها في اليوم نفسه ونأتي لفكّها ونقلها.',
      faq: [
        ['هل تشترون المكيفات القديمة أو المستعملة؟', 'نعم. نشتري وحدات السبليت والشباك والكاسيت والمخفي والباكج وVRF من أي ماركة وأي عمر، شغّالة أو معطّلة. ندفع نقداً أو نخصم القيمة من سعر وحدة جديدة.'],
        ['كيف أحصل على سعر لمكيفي القديم؟', 'صوّر الوحدة ولوحة البيانات الملصقة عليها، وفيها الماركة والموديل والحجم، وأرسل الصورتين مع منطقتك وعدد الوحدات. نرد عليك بسعر في اليوم نفسه.'],
        ['هل تشترون المكيفات المعطّلة؟', 'نعم. نشتري الوحدات المعطّلة أيضاً. يعتمد السعر على نوع الوحدة وحجمها وعمرها وحالتها.'],
        ['هل تشترون كميات من العمارات والمكاتب؟', 'نعم. نشتري كميات من العمارات والمكاتب ومواقع التجديد، ونتولى الفك والنقل.'],
      ],
    },
    en: {
      h1: 'We buy used and old AC units in Kuwait',
      title: 'Sell Your Used AC in Kuwait | Al Baz Engineering',
      desc: 'We buy used air conditioners in Kuwait, working or faulty, any brand: split, window, ducted, package and VRF. Send a photo of the unit for a price.',
      intro: 'We buy used and old air conditioners in every Kuwait governorate, working or faulty, from any brand. Send a photo of the unit and a photo of its nameplate. We price it the same day, then come to uninstall it and take it away.',
      faq: [
        ['Do you buy old or used AC units?', 'Yes. We buy split, window, cassette, ducted, package and VRF units of any brand and any age, working or not. We pay cash or take the value off a new unit.'],
        ['How do I get a price for my old AC?', 'Photograph the unit and the nameplate on it, which shows the brand, model and size, and send both with your area and the number of units. We reply with a price the same day.'],
        ['Do you buy air conditioners that no longer work?', 'Yes. We buy faulty units too. The price depends on the type of unit, its size, age and condition.'],
        ['Do you buy in bulk from buildings and offices?', 'Yes. We buy bulk lots from buildings, offices and renovation sites, and handle the uninstalling and removal.'],
      ],
    },
  },

  vrf: {
    slug: 'vrf-central-ac.html',
    ar: {
      h1: 'تكييف مركزي وأنظمة VRF في الكويت',
      title: 'تكييف مركزي (سنترال) وأنظمة VRF في الكويت | الباز الهندسية',
      desc: 'تصميم وتوريد وتركيب تكييف سنترال بالدكت وأنظمة VRF للفلل والمكاتب والمعارض والمباني في الكويت، مع حساب الأحمال وتحكم مستقل لكل غرفة.',
      intro: 'نصمّم ونركّب أنظمة التكييف المركزي (السنترال) وأنظمة VRF في الكويت، للفلل والمكاتب والمعارض والمباني متعددة الطوابق. نبدأ بحساب أحمال التبريد، ثم نختار النظام المناسب للمبنى.',
      faq: [
        ['ما الفرق بين مكيف السبليت والتكييف السنترال؟', 'مكيف السبليت يبرّد غرفة واحدة بوحدة داخلية وأخرى خارجية. التكييف السنترال (المركزي) يبرّد عدة غرف من وحدة واحدة عبر الدكت، ونظام VRF يشغّل وحدات داخلية كثيرة من وحدة خارجية واحدة مع تحكم مستقل لكل غرفة. نركّب ونصون الأنواع الثلاثة.'],
        ['ما هو نظام VRF؟', 'نظام VRF، أي تدفق غاز التبريد المتغيّر، يربط وحدة خارجية واحدة بعدة وحدات داخلية، ويعطي كل غرفة كمية التبريد التي تحتاجها فقط. لكل غرفة تحكم مستقل بدرجة حرارتها.'],
        ['متى أختار VRF ومتى أختار السنترال بالدكت؟', 'نظام VRF يناسب المباني ذات الغرف الكثيرة التي تُستخدم في أوقات مختلفة، كالفلل والمكاتب، لأن كل غرفة تعمل مستقلة. السنترال بالدكت يناسب المساحات المفتوحة الواسعة كالمعارض والقاعات. نحدد الأنسب بعد حساب الأحمال ومعاينة المبنى.'],
      ],
    },
    en: {
      h1: 'Central air conditioning and VRF systems in Kuwait',
      title: 'Central AC & VRF Systems in Kuwait | Al Baz Engineering',
      desc: 'Design, supply and installation of ducted central AC and VRF systems for villas, offices, showrooms and buildings in Kuwait, with load calculation.',
      intro: 'We design and install central air conditioning and VRF systems in Kuwait, for villas, offices, showrooms and multi-floor buildings. We start with a cooling load calculation, then choose the system that suits the building.',
      faq: [
        ['What is the difference between a split AC and central air conditioning?', 'A split AC cools one room with its own indoor and outdoor unit. Central air conditioning cools several rooms from one unit through ducts, and a VRF system runs many indoor units from one outdoor unit with independent control per room. We install and maintain all three.'],
        ['What is a VRF system?', 'VRF stands for variable refrigerant flow. One outdoor unit is connected to many indoor units and sends each room only the cooling it needs. Every room has its own temperature control.'],
        ['When is VRF the better choice, and when is ducted central AC?', 'VRF suits buildings with many rooms used at different times, such as villas and offices, because each room runs independently. Ducted central AC suits large open spaces such as showrooms and halls. We recommend one after a load calculation and a look at the building.'],
      ],
    },
  },

  ducting: {
    slug: 'ac-ducting.html',
    ar: {
      h1: 'دكت التكييف في الكويت: تصنيع وتركيب وعزل',
      title: 'دكت تكييف في الكويت: تصنيع، تركيب، عزل وتنظيف | الباز الهندسية',
      desc: 'نصنّع ونركّب ونعزل دكت التكييف في الكويت من الصاج المجلفن والألواح المعزولة، مع مخارج الهواء والدامبرات، وننظّف أنظمة الدكت القائمة.',
      intro: 'نصنّع ونركّب ونعزل دكت التكييف في الكويت للمباني الجديدة والتجديدات، وننظّف أنظمة الدكت القائمة. نعمل بالصاج المجلفن والألواح المعزولة مسبقاً والدكت المرن.',
      faq: [
        ['لماذا يهم عزل دكت التكييف؟', 'الدكت يمر غالباً في أسقف وأسطح شديدة الحرارة. من دون عزل وإحكام جيدين يسخن الهواء قبل وصوله إلى الغرفة ويتكثف الماء على الدكت، فيضعف التبريد ويرتفع استهلاك الكهرباء.'],
        ['ما الفرق بين دكت الصاج والألواح المعزولة مسبقاً؟', 'دكت الصاج المجلفن يُصنّع من ألواح معدنية ثم يُعزل، وهو متين ويناسب المسارات الطويلة والأحجام الكبيرة. الألواح المعزولة مسبقاً أخف وزناً وعزلها جزء منها، فتُركّب أسرع.'],
        ['متى يحتاج الدكت إلى تنظيف؟', 'عند خروج غبار من مخارج الهواء، أو ظهور رائحة عند التشغيل، أو ضعف تدفق الهواء، وبعد أعمال الترميم والدهان.'],
      ],
    },
    en: {
      h1: 'AC ducting in Kuwait: fabrication, installation, insulation',
      title: 'AC Ducting, Insulation & Duct Cleaning in Kuwait | Al Baz',
      desc: 'We fabricate, install and insulate AC ductwork in Kuwait in galvanised sheet and pre-insulated panels, with diffusers and dampers, and clean duct systems.',
      intro: 'We fabricate, install and insulate air conditioning ductwork in Kuwait for new builds and renovations, and clean existing duct systems. We work in galvanised sheet, pre-insulated panels and flexible duct.',
      faq: [
        ['Why does duct insulation matter?', 'Ducts usually run through very hot ceilings and roofs. Without good insulation and sealing the air warms up before it reaches the room and water condenses on the duct, so cooling drops and electricity use rises.'],
        ['What is the difference between sheet metal duct and pre-insulated panels?', 'Galvanised sheet duct is made from metal sheet and then insulated. It is tough and suits long runs and large sizes. Pre-insulated panels are lighter and the insulation is part of the panel, so they install faster.'],
        ['When does ductwork need cleaning?', 'When dust comes out of the air outlets, when there is a smell on start-up, when airflow weakens, and after renovation or painting work.'],
      ],
    },
  },

  amc: {
    slug: 'ac-maintenance.html',
    ar: {
      h1: 'صيانة مكيفات وعقود صيانة سنوية في الكويت',
      title: 'صيانة مكيفات وعقود صيانة تكييف في الكويت | الباز الهندسية',
      desc: 'عقود صيانة تكييف سنوية في الكويت للمنازل والفلل والمكاتب والمعارض والمدارس والعيادات: تنظيف الفلاتر والكويلات، غسل التصريف، وفحص الغاز والكهرباء.',
      intro: 'نقدّم عقود صيانة تكييف سنوية في الكويت للمنازل والفلل والمكاتب والمعارض والمدارس والعيادات. في كل زيارة ننظّف الفلاتر والكويلات، ونغسل خط التصريف، ونفحص ضغط الغاز والكهرباء والثرموستات.',
      faq: [
        ['كم مرة يجب صيانة المكيف في الكويت؟', 'مع غبار الكويت وموسم التبريد الطويل، يُنصح بتنظيف الفلاتر شهرياً وصيانة الوحدة كل ثلاثة إلى أربعة أشهر، مع فحص شامل قبل الصيف. عقد الصيانة السنوي يجدول ذلك لك.'],
        ['ماذا تشمل زيارة صيانة المكيف؟', 'تنظيف الفلاتر والكويلات، وغسل خط التصريف، وفحص ضغط الغاز والتوصيلات الكهربائية والثرموستات.'],
        ['ما أفضل وقت لصيانة المكيف؟', 'في الربيع قبل الصيف، ليكون المكيف جاهزاً قبل اشتداد الحرارة. ثم زيارات دورية خلال موسم التبريد.'],
      ],
    },
    en: {
      h1: 'AC maintenance and annual contracts in Kuwait',
      title: 'AC Maintenance Contracts in Kuwait | Al Baz Engineering',
      desc: 'Annual AC maintenance contracts in Kuwait for homes, villas, offices, showrooms, schools and clinics: filter and coil cleaning, drain flushing, gas checks.',
      intro: 'We offer annual AC maintenance contracts in Kuwait for homes, villas, offices, showrooms, schools and clinics. On every visit we clean the filters and coils, flush the drain line, and check gas pressure, electrics and the thermostat.',
      faq: [
        ['How often should an air conditioner be serviced in Kuwait?', 'With Kuwait’s dust and long cooling season, clean the filters monthly and have the unit serviced every three to four months, with a full check before summer. An annual maintenance contract schedules this for you.'],
        ['What does an AC maintenance visit include?', 'Filter and coil cleaning, flushing the drain line, and checks on gas pressure, electrical connections and the thermostat.'],
        ['When is the best time to service an AC?', 'In spring, before summer, so the unit is ready before the heat peaks. Then regular visits through the cooling season.'],
      ],
    },
  },

  repair: {
    slug: 'ac-repair.html',
    ar: {
      h1: 'تصليح مكيفات في الكويت',
      title: 'تصليح مكيفات في الكويت، جميع الماركات | الباز الهندسية',
      desc: 'تصليح مكيفات جميع الماركات في الكويت: تسريب وتعبئة الغاز، الكمبروسر، المواتير ولوحات التحكم. نشخّص أولاً ونعطيك سعراً واضحاً قبل أي إصلاح.',
      intro: 'نصلّح المكيفات من جميع الماركات في الكويت: سبليت وشباك وكاسيت ومخفي وباكج وVRF. نشخّص العطل أولاً، ثم نعطيك سعراً واضحاً، ثم نصلح.',
      faq: [
        ['لماذا لا يبرّد المكيف؟', 'أكثر الأسباب شيوعاً: فلتر أو كويل متسخ، نقص في غاز التبريد بسبب تسريب، مكثف أو موتور مروحة تالف، أو عطل في الكمبروسر. الفحص يحدد السبب قبل أي إصلاح.'],
        ['لماذا ينزل ماء من المكيف داخل الغرفة؟', 'غالباً بسبب انسداد خط التصريف أو اتساخ الفلتر والكويل، وأحياناً بسبب نقص الغاز الذي يجمّد الكويل. تنظيف التصريف والوحدة يحل معظم الحالات.'],
        ['هل تصلحون جميع ماركات المكيفات؟', 'نعم. نصلح وحدات السبليت والشباك والكاسيت والمخفي والباكج وVRF من مختلف الماركات.'],
        ['هل تعبّئون غاز المكيف؟', 'نعم. نصلح التسريب أولاً ثم نعبّئ الغاز، سواء R410a أو R22.'],
      ],
    },
    en: {
      h1: 'AC repair in Kuwait',
      title: 'AC Repair in Kuwait, All Brands | Al Baz Engineering',
      desc: 'AC repair for all brands in Kuwait: gas leaks and top-ups, compressors, motors and control boards. We diagnose first and give a clear price before any repair.',
      intro: 'We repair air conditioners of all brands in Kuwait: split, window, cassette, ducted, package and VRF. We diagnose the fault first, then give you a clear price, then fix it.',
      faq: [
        ['Why is my AC not cooling?', 'The most common causes are a dirty filter or coil, low refrigerant from a leak, a failed capacitor or fan motor, or a compressor fault. A diagnostic visit finds the cause before any repair.'],
        ['Why is water dripping from my AC indoors?', 'Usually a blocked drain line or a dirty filter and coil, and sometimes low gas that freezes the coil. Cleaning the drain and the unit solves most cases.'],
        ['Do you repair all AC brands?', 'Yes. We repair split, window, cassette, ducted, package and VRF units across brands.'],
        ['Do you refill AC gas?', 'Yes. We repair the leak first and then top up the gas, R410a or R22.'],
      ],
    },
  },

  parts: {
    slug: 'ac-spare-parts.html',
    ar: {
      h1: 'قطع غيار مكيفات في الكويت',
      title: 'قطع غيار مكيفات في الكويت | الباز الهندسية',
      desc: 'قطع غيار تكييف في الكويت: كمبروسرات دوّارة وحلزونية، مواتير مراوح، مكثفات، لوحات تحكم، ثرموستات، مواسير نحاس وغازات تبريد، للفنيين والمقاولين.',
      intro: 'نوفّر قطع غيار المكيفات في الكويت لفنيّينا وللمقاولين وفرق الصيانة: كمبروسرات ومواتير مراوح ومكثفات ولوحات تحكم وثرموستات ومواسير نحاس وغازات تبريد.',
      faq: [
        ['هل تبيعون قطع الغيار للمقاولين وفرق الصيانة؟', 'نعم. القطع متوفرة في المخزون لفنيّينا ولمقاولين وفرق صيانة آخرين.'],
        ['كيف أعرف القطعة المناسبة لمكيفي؟', 'أرسل صورة للوحة بيانات الوحدة، وفيها الماركة والموديل، وصورة للقطعة القديمة إن أمكن، فنحدد القطعة المطابقة.'],
        ['أين تقع الباز الهندسية وما ساعات العمل؟', 'في منطقة الري بالكويت. نعمل من 8 صباحاً إلى 8 مساءً يومياً عدا الجمعة.'],
      ],
    },
    en: {
      h1: 'AC spare parts in Kuwait',
      title: 'AC Spare Parts in Kuwait | Al Baz Engineering',
      desc: 'AC spare parts in Kuwait: rotary and scroll compressors, fan motors, capacitors, control boards, thermostats, copper pipe and refrigerants.',
      intro: 'We stock air conditioning spare parts in Kuwait for our own technicians and for contractors and maintenance teams: compressors, fan motors, capacitors, control boards, thermostats, copper pipe and refrigerants.',
      faq: [
        ['Do you sell spare parts to contractors and maintenance teams?', 'Yes. Parts are in stock for our own technicians and for other contractors and maintenance teams.'],
        ['How do I find the right part for my AC?', 'Send a photo of the unit’s nameplate, which shows the brand and model, and a photo of the old part if you can. We match the part from those.'],
        ['Where is Al Baz Engineering and when is it open?', 'In Al Rai, Kuwait. We are open 8 am to 8 pm every day except Friday.'],
      ],
    },
  },
};
