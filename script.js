function toCapitalize(word) {
  let firstChar = word.slice(0, 1).toUpperCase();

  let lastPartFromWord = word.slice(1);

  return firstChar + lastPartFromWord;
}

// Genarating Letters & Chars & Numbers

let myLetters = "abcdefghijklmnopqrstuvwxyz";

let myChars = "!@#$%.*?+-_:|,'\"/\\[]()<>";

let myNumber = "1234567890";

// Convert The Letters & Chars & Numbers To Array

let lettersArray = Array.from(myLetters);

let charsArray = Array.from(myChars);

let numbersArray = Array.from(myNumber);

// Geting The Div From HTML File And Add To Varibls

let lettersRow = document.querySelector(".letters-upper-row");

let charsRow = document.querySelector(".chars-row");

let numbersRow = document.querySelector(".numbers-row");

let lettersKeyboard = document.querySelector(".letters-row span");

// Add Letters To Div

lettersArray.forEach((e) => {
  let span = document.createElement("span");

  let spanContent = document.createTextNode(e);

  span.appendChild(spanContent);

  span.classList.add("letter-span", "letter-span-upper");

  lettersRow.appendChild(span);
});

// Add Chars To Div

charsArray.forEach((e) => {
  let span = document.createElement("span");

  let spanContent = document.createTextNode(e);

  span.appendChild(spanContent);

  span.classList.add("letter-span", "letter-span-chars");

  charsRow.appendChild(span);
});

// Add Numbers To Div

numbersArray.forEach((e) => {
  let span = document.createElement("span");

  let spanContent = document.createTextNode(e);

  span.appendChild(spanContent);

  span.classList.add("letter-span", "letter-span-number");

  numbersRow.appendChild(span);
});

const words = new Object();

function bilingualHints(en, ar) {
  return { en, ar };
}

const difficultyHintContexts = {
  programming_Language: {
    medium: ["It is used by developers to build software.", "It is part of the world of computer programming."],
    high: ["This subject is connected to source code and digital systems.", "Developers use related tools to create applications and services."],
    mediumAr: ["يستخدمه المطورون لبناء البرامج.", "ينتمي إلى عالم برمجة الحاسوب."],
    highAr: ["يرتبط هذا الموضوع بالشيفرة المصدرية والأنظمة الرقمية.", "يستخدم المطورون الأدوات المرتبطة به لإنشاء التطبيقات والخدمات."],
  },
  Popular_Brands: {
    medium: ["It is a consumer brand recognized by many people.", "Its name is connected to products or services."],
    high: ["This subject belongs to the world of commercial branding.", "People may recognize it through its products, logo, or packaging."],
    mediumAr: ["هي علامة تجارية يعرفها كثير من الناس.", "يرتبط اسمها بمنتجات أو خدمات."],
    highAr: ["ينتمي هذا الموضوع إلى عالم العلامات التجارية التجارية.", "قد يتعرف الناس عليه من خلال منتجاته أو شعاره أو تغليفه."],
  },
  Arabic_Country: {
    medium: ["It is an Arab country with its own capital and geography.", "It is part of the Arab world."],
    high: ["This subject belongs to the geography of the Arab world.", "Its people, landmarks, and location are part of its identity."],
    mediumAr: ["هي دولة عربية لها عاصمتها وجغرافيتها الخاصة.", "تنتمي إلى العالم العربي."],
    highAr: ["ينتمي هذا الموضوع إلى جغرافيا العالم العربي.", "تشكل شعوبها ومعالمها وموقعها جزءاً من هويتها."],
  },
  Video_Games: {
    medium: ["It is an interactive digital game.", "Players engage with it through rules, goals, or challenges."],
    high: ["This subject belongs to the world of digital games.", "It is experienced through a game world, competition, exploration, or missions."],
    mediumAr: ["هي لعبة رقمية تفاعلية.", "يتفاعل اللاعبون معها من خلال القواعد أو الأهداف أو التحديات."],
    highAr: ["ينتمي هذا الموضوع إلى عالم الألعاب الرقمية.", "تُعاش تجربته من خلال عالم أو منافسة أو استكشاف أو مهام داخل اللعبة."],
  },
  phones: {
    medium: ["It is connected to mobile technology.", "People use related devices for communication or digital tasks."],
    high: ["This subject belongs to the world of personal electronics.", "It is associated with portable communication and smart-device features."],
    mediumAr: ["يرتبط بتقنية الهواتف المحمولة.", "يستخدم الناس الأجهزة المرتبطة به للتواصل أو للمهام الرقمية."],
    highAr: ["ينتمي هذا الموضوع إلى عالم الإلكترونيات الشخصية.", "يرتبط بالتواصل المحمول وميزات الأجهزة الذكية."],
  },
  fruits: {
    medium: ["It is an edible fruit that grows on a plant.", "It can be part of a healthy meal or snack."],
    high: ["This subject belongs to the natural world of edible plants.", "Its taste, color, and growing conditions help identify it."],
    mediumAr: ["هي فاكهة تؤكل وتنمو على نبات.", "يمكن أن تكون جزءاً من وجبة أو وجبة خفيفة صحية."],
    highAr: ["ينتمي هذا الموضوع إلى عالم النباتات الطبيعية الصالحة للأكل.", "يساعد طعمها ولونها وظروف نموها على تمييزها."],
  },
  soft_Drinks: {
    medium: ["It is a prepared drink served cold or chilled.", "It is usually sold in bottles or cans."],
    high: ["This subject belongs to the world of packaged beverages.", "Its flavor, color, and carbonation are common ways to describe it."],
    mediumAr: ["هو مشروب مُحضّر يُقدم بارداً أو مبرداً.", "يباع عادةً في زجاجات أو علب."],
    highAr: ["ينتمي هذا الموضوع إلى عالم المشروبات المعبأة.", "تُعد نكهته ولونه ودرجة غازيته طرقاً شائعة لوصفه."],
  },
  Technology_Science: {
    medium: ["It is connected to technology, science, or discovery.", "It helps explain how tools, systems, or the natural world work."],
    high: ["This subject belongs to a field of knowledge or innovation.", "It is studied or applied to understand problems and develop useful solutions."],
    mediumAr: ["يرتبط بالتقنية أو العلوم أو الاكتشاف.", "يساعد على تفسير عمل الأدوات أو الأنظمة أو العالم الطبيعي."],
    highAr: ["ينتمي هذا الموضوع إلى مجال من مجالات المعرفة أو الابتكار.", "يدرس أو يطبق لفهم المشكلات وتطوير حلول مفيدة."],
  },
  Animals: {
    medium: ["It is a living creature found in the natural world.", "Its body and behavior help it survive in its habitat."],
    high: ["This subject belongs to the animal kingdom.", "Its habitat, diet, movement, and physical features help identify it."],
    mediumAr: ["هو كائن حي موجود في العالم الطبيعي.", "تساعده بنيته وسلوكه على البقاء في موطنه."],
    highAr: ["ينتمي هذا الموضوع إلى مملكة الحيوانات.", "يساعد موطنه وغذاؤه وحركته وخصائصه الجسدية على تمييزه."],
  },
  Food: {
    medium: ["It is something people prepare and eat.", "It can be part of a meal or a snack."],
    high: ["This subject belongs to the world of food and cooking.", "Its ingredients, preparation, and taste are useful ways to describe it."],
    mediumAr: ["هو شيء يُحضّره الناس ويأكلونه.", "يمكن أن يكون جزءاً من وجبة أو وجبة خفيفة."],
    highAr: ["ينتمي هذا الموضوع إلى عالم الطعام والطبخ.", "تُعد مكوناته وطريقة تحضيره وطعمه طرقاً مفيدة لوصفه."],
  },
  Geography_Landmarks: {
    medium: ["It is connected to a place or feature on Earth.", "Maps and geography help people understand it."],
    high: ["This subject belongs to the physical or cultural geography of our world.", "Its location, shape, history, or surroundings help identify it."],
    mediumAr: ["يرتبط بمكان أو معلم على الأرض.", "تساعد الخرائط والجغرافيا على فهمه."],
    highAr: ["ينتمي هذا الموضوع إلى الجغرافيا الطبيعية أو الثقافية لعالمنا.", "يساعد موقعه أو شكله أو تاريخه أو محيطه على تمييزه."],
  },
  Professions: {
    medium: ["It is a type of work that serves people or communities.", "It requires particular skills and responsibilities."],
    high: ["This subject belongs to the world of useful occupations.", "Its tools, workplace, and daily duties help identify it."],
    mediumAr: ["هي نوع من العمل يخدم الناس أو المجتمع.", "تتطلب مهارات ومسؤوليات معينة."],
    highAr: ["ينتمي هذا الموضوع إلى عالم المهن المفيدة.", "تساعد أدواته ومكان عمله ومهامه اليومية على تمييزه."],
  },
  Nature_Weather: {
    medium: ["It is a natural feature or weather condition.", "It can affect living things and the environment."],
    high: ["This subject belongs to the natural systems around us.", "Its appearance, movement, or effect helps people recognize it."],
    mediumAr: ["هو مظهر طبيعي أو حالة من حالات الطقس.", "يمكن أن يؤثر في الكائنات الحية والبيئة."],
    highAr: ["ينتمي هذا الموضوع إلى الأنظمة الطبيعية من حولنا.", "يساعد مظهره أو حركته أو تأثيره على التعرف إليه."],
  },
};

function addDifficultyHints() {
  Object.entries(words).forEach(([categoryKey, category]) => {
    let context = difficultyHintContexts[categoryKey];

    category.forEach((entry) => {
      entry.hints = {
        easy: {
          en: [...entry.hints.en],
          ar: [...entry.hints.ar],
        },
        medium: {
          en: [entry.hints.en[1] || entry.hints.en[0], ...context.medium],
          ar: [entry.hints.ar[1] || entry.hints.ar[0], ...context.mediumAr],
        },
        high: {
          en: [...context.high],
          ar: [...context.highAr],
        },
      };
    });
  });
}

words.programming_Language = [
  { word: "Objective-C", hints: bilingualHints(["It has long been used to develop iOS applications.", "It combines object-oriented programming with the C language."], ["استُخدمت لفترة طويلة في تطوير تطبيقات iOS.", "تجمع بين البرمجة كائنية التوجه ولغة C."]) },
  { word: "TypeScript", hints: bilingualHints(["It adds static typing to JavaScript.", "It is commonly used in large web applications."], ["تضيف الكتابة الثابتة إلى JavaScript.", "تُستخدم كثيراً في تطبيقات الويب الكبيرة."]) },
  { word: "Dart", hints: bilingualHints(["It is the main language used by Flutter.", "Google created it for client-side application development."], ["هي اللغة الأساسية المستخدمة مع Flutter.", "طورتها Google لتطوير تطبيقات الواجهة."]) },
  { word: "Ruby", hints: bilingualHints(["Its name comes from a precious gemstone.", "It is known for readable and expressive syntax."], ["سُمّيت نسبةً إلى حجر كريم.", "تشتهر بصياغتها الواضحة والقابلة للقراءة."]) },
  { word: "Rust", hints: bilingualHints(["It focuses on memory safety and performance.", "Its name is also associated with a reddish-brown color."], ["تركز على أمان الذاكرة والأداء.", "اسمها مرتبط أيضاً بلون بني مائل إلى الحمرة."]) },
  { word: "Go", hints: bilingualHints(["Google developed this programming language.", "Its name is a short, two-letter word."], ["طورت Google هذه اللغة البرمجية.", "اسمها كلمة قصيرة مكوّنة من حرفين."]) },
  { word: "Kotlin", hints: bilingualHints(["It is widely used for Android development.", "It runs on the Java Virtual Machine."], ["تُستخدم على نطاق واسع لتطوير Android.", "تعمل على آلة Java الافتراضية."]) },
  { word: "Swift", hints: bilingualHints(["Apple created it for modern app development.", "It is commonly used for iOS and macOS applications."], ["أنشأتها Apple لتطوير التطبيقات الحديثة.", "تُستخدم غالباً لتطبيقات iOS وmacOS."]) },
  { word: "Java", hints: bilingualHints(["It is used in many kinds of software systems.", "Its slogan is 'write once, run anywhere'."], ["تُستخدم في أنواع كثيرة من الأنظمة البرمجية.", "شعارها هو: اكتب مرة وشغّل في أي مكان."]) },
  { word: "C", hints: bilingualHints(["It is one of the earliest widely used programming languages.", "Many operating systems and languages were influenced by it."], ["هي من أقدم لغات البرمجة واسعة الاستخدام.", "تأثرت بها أنظمة تشغيل ولغات برمجة كثيرة."]) },
  { word: "C++", hints: bilingualHints(["It extends the C language with object-oriented features.", "Its name suggests an increment from C."], ["توسّع لغة C بميزات البرمجة كائنية التوجه.", "اسمها يوحي بزيادة على لغة C."]) },
  { word: "C#", hints: bilingualHints(["It is widely used with the Unity game engine.", "Microsoft developed it for the .NET ecosystem."], ["تُستخدم كثيراً مع محرك Unity للألعاب.", "طورتها Microsoft لمنظومة .NET."]) },
  { word: "SQL", hints: bilingualHints(["It is used to work with relational databases.", "Its full name is Structured Query Language."], ["تُستخدم للتعامل مع قواعد البيانات العلائقية.", "اسمها الكامل هو لغة الاستعلامات المهيكلة."]) },
  { word: "Python", hints: bilingualHints(["It is popular for web, data, and artificial intelligence work.", "Its name was inspired by a British comedy group."], ["تشتهر في الويب والبيانات والذكاء الاصطناعي.", "استُلهم اسمها من فرقة كوميدية بريطانية."]) },
  { word: "PHP", hints: bilingualHints(["It is commonly used for server-side web development.", "Its logo is an elephant named elePHPant."], ["تُستخدم غالباً لتطوير الويب من جهة الخادم.", "شعارها فيل يُسمى elePHPant."]) },
  { word: "JavaScript", hints: bilingualHints(["It adds behavior and interactivity to web pages.", "It commonly works alongside HTML and CSS."], ["تضيف السلوك والتفاعل إلى صفحات الويب.", "تعمل عادةً إلى جانب HTML وCSS."]) },
  { word: "CSS", hints: bilingualHints(["It controls the visual style of web pages.", "Its full name is Cascading Style Sheets."], ["تتحكم في المظهر المرئي لصفحات الويب.", "اسمها الكامل هو أوراق الأنماط المتتالية."]) },
  { word: "HTML", hints: bilingualHints(["It describes the structure of web pages.", "Its full name is HyperText Markup Language."], ["تصف بنية صفحات الويب.", "اسمها الكامل هو لغة ترميز النص التشعبي."]) },
];

words.Popular_Brands = [
  { word: "Starbucks", hints: bilingualHints(["It is a coffeehouse chain founded in Seattle.", "Its logo features a two-tailed siren."], ["هي سلسلة مقاهٍ تأسست في سياتل.", "يظهر في شعارها مخلوق أسطوري ذو ذيلين."]) },
  { word: "Nestle", hints: bilingualHints(["It is a Swiss food and beverage company.", "Its name is associated with chocolate, coffee, and baby food."], ["هي شركة سويسرية للأغذية والمشروبات.", "يرتبط اسمها بالشوكولاتة والقهوة وأغذية الأطفال."]) },
  { word: "McDonald's", hints: bilingualHints(["It is known for burgers and the Golden Arches.", "Its name begins with the letter M and includes an apostrophe."], ["تشتهر بالبرغر وبالقوسين الذهبيين.", "يبدأ اسمها بحرف M ويحتوي على فاصلة عليا."]) },
  { word: "Pizza Hut", hints: bilingualHints(["It is an international pizza restaurant chain.", "Its logo is associated with a red roof."], ["هي سلسلة مطاعم بيتزا عالمية.", "يرتبط شعارها بسقف أحمر."]) },
  { word: "KFC", hints: bilingualHints(["Its initials stand for Kentucky Fried Chicken.", "Its branding is associated with Colonel Sanders."], ["اختصار لاسم كنتاكي للدجاج المقلي.", "يرتبط شعارها بالكولونيل ساندرز."]) },
  { word: "Lay's", hints: bilingualHints(["It is a potato chip brand.", "Its logo is usually shown on a yellow package."], ["هي علامة تجارية لرقائق البطاطا.", "يظهر شعارها عادةً على عبوة صفراء."]) },
];

words.Arabic_Country = [
  { word: "Algeria", hints: bilingualHints(["It is the largest Arab country by area.", "Its capital is Algiers."], ["هي أكبر دولة عربية من حيث المساحة.", "عاصمتها الجزائر."]) },
  { word: "Bahrain", hints: bilingualHints(["It is a small island country in the Arabian Gulf.", "Its capital is Manama."], ["هي دولة جزرية صغيرة في الخليج العربي.", "عاصمتها المنامة."]) },
  { word: "Kuwait", hints: bilingualHints(["Its currency is the Kuwaiti dinar.", "It lies between Iraq and Saudi Arabia."], ["عملتها هي الدينار الكويتي.", "تقع بين العراق والسعودية."]) },
  { word: "Egypt", hints: bilingualHints(["It has the largest population in the Arab world.", "The Nile flows through its capital, Cairo."], ["لديها أكبر عدد من السكان في العالم العربي.", "يمر نهر النيل عبر عاصمتها القاهرة."]) },
  { word: "Iraq", hints: bilingualHints(["Kuwait lies to its south.", "The Tigris and Euphrates rivers run through it."], ["تقع الكويت إلى جنوبها.", "يمر فيها نهرا دجلة والفرات."]) },
  { word: "Jordan", hints: bilingualHints(["It is home to the ancient city of Petra.", "It borders the West Bank to the west."], ["توجد فيها مدينة البتراء الأثرية.", "تحدها الضفة الغربية من جهة الغرب."]) },
  { word: "Lebanon", hints: bilingualHints(["Syria borders it to the east.", "Its capital is Beirut."], ["تحدها سوريا من جهة الشرق.", "عاصمتها بيروت."]) },
  { word: "Libya", hints: bilingualHints(["It was the home of Omar Mukhtar.", "Its northern coast faces the Mediterranean Sea."], ["كانت موطن عمر المختار.", "يقابل ساحلها الشمالي البحر المتوسط."]) },
  { word: "Morocco", hints: bilingualHints(["Casablanca is one of its best-known cities.", "Its capital is Rabat."], ["الدار البيضاء من أشهر مدنها.", "عاصمتها الرباط."]) },
  { word: "Oman", hints: bilingualHints(["It is a sultanate on the southeastern Arabian Peninsula.", "Its capital is Muscat."], ["هي سلطنة في جنوب شرق شبه الجزيرة العربية.", "عاصمتها مسقط."]) },
  { word: "Palestine", hints: bilingualHints(["Jerusalem is central to its history and identity.", "It lies on the eastern Mediterranean coast."], ["تحتل القدس مكانة محورية في تاريخها وهويتها.", "تقع على الساحل الشرقي للبحر المتوسط."]) },
  { word: "Qatar", hints: bilingualHints(["It hosted the FIFA World Cup in 2022.", "Its capital is Doha."], ["استضافت كأس العالم لكرة القدم عام 2022.", "عاصمتها الدوحة."]) },
  { word: "Saudi Arabia", hints: bilingualHints(["It is one of the largest Arab countries by area.", "Mecca and Medina are located there."], ["هي من أكبر الدول العربية مساحةً.", "تقع فيها مكة المكرمة والمدينة المنورة."]) },
  { word: "Sudan", hints: bilingualHints(["It has many ancient pyramids, including those at Meroe.", "The Blue Nile and White Nile meet in its capital region."], ["تضم أهرامات قديمة كثيرة، منها أهرامات مروي.", "يلتقي النيل الأزرق والنيل الأبيض في منطقة عاصمتها."]) },
  { word: "United Arab Emirates", hints: bilingualHints(["It is home to the Burj Khalifa.", "Its capital is Abu Dhabi."], ["يوجد فيها برج خليفة.", "عاصمتها أبوظبي."]) },
  { word: "Tunisia", hints: bilingualHints(["It is often called the Green Tunisia.", "Its capital is Tunis."], ["تُلقب غالباً بتونس الخضراء.", "عاصمتها تونس."]) },
  { word: "Yemen", hints: bilingualHints(["It occupies the southern end of the Arabian Peninsula.", "Sana'a is its historic capital."], ["تقع في الطرف الجنوبي من شبه الجزيرة العربية.", "صنعاء عاصمتها التاريخية."]) },
  { word: "Somalia", hints: bilingualHints(["Its capital is Mogadishu.", "It has a long coastline along the Indian Ocean."], ["عاصمتها مقديشو.", "لديها ساحل طويل على المحيط الهندي."]) },
  { word: "Syria", hints: bilingualHints(["Damascus is one of the world's oldest continuously inhabited cities.", "It is home to the ancient city of Palmyra."], ["دمشق من أقدم المدن المأهولة باستمرار في العالم.", "توجد فيها مدينة تدمر الأثرية."]) },
];

words.Video_Games = [
  { word: "GTA V", hints: bilingualHints(["Rockstar Games released it in 2013.", "Its open world is centered on Los Santos."], ["أصدرتها Rockstar Games عام 2013.", "تدور عالمها المفتوح حول مدينة لوس سانتوس."]) },
  { word: "GTA IV", hints: bilingualHints(["It was released by Rockstar Games in 2008.", "Its protagonist is Niko Bellic."], ["أصدرتها Rockstar Games عام 2008.", "بطلها هو نيكو بيلك."]) },
  { word: "GTA San Andreas", hints: bilingualHints(["Its protagonist is Carl Johnson.", "The story begins in the fictional state of San Andreas."], ["بطلها هو كارل جونسون.", "تبدأ قصتها في ولاية سان أندرياس الخيالية."]) },
  { word: "GTA Vice City", hints: bilingualHints(["Rockstar Games released it in 2002.", "Its setting is inspired by 1980s Miami."], ["أصدرتها Rockstar Games عام 2002.", "تجري أحداثها في مدينة مستوحاة من ميامي في الثمانينيات."]) },
  { word: "Counter-Strike: Global Offensive", hints: bilingualHints(["Valve released it in 2012.", "It is commonly abbreviated as CS:GO."], ["أطلقتها Valve عام 2012.", "يُختصر اسمها عادةً إلى CS:GO."]) },
  { word: "Overwatch 2", hints: bilingualHints(["It is the sequel to Overwatch.", "It is a team-based action game from Blizzard."], ["هي تكملة للعبة Overwatch.", "هي لعبة حركة جماعية من Blizzard."]) },
  { word: "Dota 2", hints: bilingualHints(["It is a major competitive game from Valve.", "Two teams of five players battle on one map."], ["هي لعبة تنافسية كبيرة من Valve.", "يتنافس فريقان من خمسة لاعبين على خريطة واحدة."]) },
  { word: "Counter-Strike 1.6", hints: bilingualHints(["It became a classic in internet cafes.", "It is an older version of the Counter-Strike series."], ["أصبحت لعبة كلاسيكية في مقاهي الإنترنت.", "هي نسخة قديمة من سلسلة Counter-Strike."]) },
  { word: "Counter-Strike 2", hints: bilingualHints(["It replaced Counter-Strike: Global Offensive.", "It uses the Source 2 engine."], ["حلّت محل Counter-Strike: Global Offensive.", "تستخدم محرك Source 2."]) },
  { word: "PUBG Mobile", hints: bilingualHints(["It brings battle royale matches to mobile devices.", "Players search for equipment while the play area shrinks."], ["تنقل مباريات الباتل رويال إلى الهواتف.", "يبحث اللاعبون عن المعدات بينما تضيق منطقة اللعب."]) },
  { word: "Rocket League", hints: bilingualHints(["Cars play football in this game.", "It combines driving with competitive team matches."], ["تلعب السيارات كرة القدم في هذه اللعبة.", "تجمع بين القيادة والمباريات الجماعية التنافسية."]) },
  { word: "Fortnite", hints: bilingualHints(["It became famous for its battle royale mode.", "Its first battle royale release was in 2017."], ["اشتهرت بنمط الباتل رويال.", "صدر نمط الباتل رويال فيها عام 2017."]) },
  { word: "PUBG: Battlegrounds", hints: bilingualHints(["It is the PC and console version of PUBG.", "Its matches begin with players parachuting onto an island."], ["هي نسخة PUBG للحاسوب والمنصات المنزلية.", "تبدأ مبارياتها بهبوط اللاعبين بالمظلات على جزيرة."]) },
  { word: "eFootball PES 2020", hints: bilingualHints(["It is a football simulation game.", "PES stands for Pro Evolution Soccer."], ["هي لعبة محاكاة لكرة القدم.", "يرمز PES إلى Pro Evolution Soccer."]) },
  { word: "The Legend of Zelda", hints: bilingualHints(["Its hero is usually named Link.", "Many entries feature the land of Hyrule."], ["يُسمى بطلها عادةً Link.", "تظهر في أجزاء كثيرة منها أرض Hyrule."]) },
  { word: "Apex Legends", hints: bilingualHints(["It is a battle royale game with unique heroes.", "It was developed by Respawn Entertainment."], ["هي لعبة باتل رويال تضم أبطالاً بقدرات مختلفة.", "طورتها Respawn Entertainment."]) },
  { word: "Cyberpunk 2077", hints: bilingualHints(["Its story takes place in the year 2077.", "Its setting is the futuristic Night City."], ["تدور قصتها في عام 2077.", "تجري أحداثها في مدينة Night City المستقبلية."]) },
  { word: "The Witcher 3", hints: bilingualHints(["Its protagonist is Geralt of Rivia.", "It is an open-world fantasy role-playing game."], ["بطلها هو جيرالت من ريفيا.", "هي لعبة تقمص أدوار خيالية بعالم مفتوح."]) },
  { word: "FIFA 22", hints: bilingualHints(["It is a football video game from EA.", "Its title refers to the 2022 edition."], ["هي لعبة كرة قدم من EA.", "يشير اسمها إلى إصدار عام 2022."]) },
  { word: "Among Us", hints: bilingualHints(["Players try to identify the impostor.", "It became especially popular in 2020."], ["يحاول اللاعبون اكتشاف المحتال.", "أصبحت شديدة الشعبية خصوصاً في عام 2020."]) },
  { word: "Genshin Impact", hints: bilingualHints(["It is an action role-playing game with anime-inspired art.", "Its world is called Teyvat."], ["هي لعبة تقمص أدوار حركية برسوم مستوحاة من الأنمي.", "اسم عالمها هو Teyvat."]) },
  { word: "Call of Duty: Warzone", hints: bilingualHints(["It is a free-to-play battle royale game.", "Its title contains the word War."], ["هي لعبة باتل رويال مجانية.", "يحتوي اسمها على كلمة War."]) },
  { word: "Red Dead Redemption 2", hints: bilingualHints(["Its story follows Arthur Morgan and the Van der Linde gang.", "It is set in the American frontier era."], ["تتبع قصتها آرثر مورغان وعصابة فان دير ليند.", "تجري أحداثها في عصر الغرب الأمريكي."]) },
  { word: "Minecraft", hints: bilingualHints(["Its world is built from blocks.", "Players can mine, craft, and explore."], ["يتكوّن عالمها من مكعبات.", "يمكن للاعبين التعدين والصناعة والاستكشاف."]) },
  { word: "Assassin's Creed Mirage", hints: bilingualHints(["Its story is set in ninth-century Baghdad.", "Its protagonist is named Basim."], ["تدور قصتها في بغداد خلال القرن التاسع.", "بطلها يُدعى باسم."]) },
  { word: "Valorant", hints: bilingualHints(["It is a tactical shooter from Riot Games.", "It combines gunplay with agent abilities."], ["هي لعبة تصويب تكتيكية من Riot Games.", "تجمع بين الأسلحة وقدرات العملاء."]) },
];

words.phones = [
  { word: "Nokia", hints: bilingualHints(["It is a well-known Finnish phone brand.", "It became famous for durable mobile phones."], ["هي علامة هواتف فنلندية معروفة.", "اشتهرت بهواتف محمولة متينة."]) },
  { word: "Samsung", hints: bilingualHints(["It is a major South Korean electronics company.", "Its Galaxy line includes many smartphones."], ["هي شركة إلكترونيات كورية جنوبية كبرى.", "تضم سلسلة Galaxy العديد من الهواتف الذكية."]) },
  { word: "iPhone", hints: bilingualHints(["Apple introduced the first model in 2007.", "It uses Apple's iOS operating system."], ["قدمت Apple أول طراز منه عام 2007.", "يستخدم نظام التشغيل iOS من Apple."]) },
  { word: "HTC", hints: bilingualHints(["It is a Taiwanese electronics company.", "It was known for Android smartphones and the One series."], ["هي شركة إلكترونيات تايوانية.", "اشتهرت بهواتف Android وسلسلة One."]) },
  { word: "Redmi", hints: bilingualHints(["It is a smartphone brand from Xiaomi.", "It is known for value-focused devices."], ["هي علامة هواتف تابعة لـ Xiaomi.", "تشتهر بأجهزة ذات قيمة جيدة مقابل السعر."]) },
  { word: "Nothing", hints: bilingualHints(["It is known for transparent-style phone designs.", "Its phone branding uses a minimalist identity."], ["تشتهر بتصاميم هواتف ذات مظهر شفاف.", "تستخدم هوية بصرية بسيطة في هواتفها."]) },
  { word: "Huawei", hints: bilingualHints(["It is a Chinese technology company.", "It has produced phones, tablets, and networking equipment."], ["هي شركة تقنية صينية.", "أنتجت هواتف وأجهزة لوحية ومعدات شبكات."]) },
  { word: "Honor", hints: bilingualHints(["It was once a sub-brand of Huawei.", "It makes smartphones and other consumer devices."], ["كانت في السابق علامة تابعة لـ Huawei.", "تصنع الهواتف الذكية وأجهزة استهلاكية أخرى."]) },
  { word: "BlackBerry", hints: bilingualHints(["It became known for physical keyboards.", "Its devices were popular for messaging and email."], ["اشتهرت بلوحات المفاتيح الحقيقية.", "كانت أجهزتها محبوبة للمراسلة والبريد الإلكتروني."]) },
  { word: "Pixel", hints: bilingualHints(["It is Google's smartphone brand.", "Pixel phones are known for computational photography."], ["هي علامة الهواتف الذكية من Google.", "تشتهر هواتف Pixel بالتصوير الحاسوبي."]) },
  { word: "OnePlus", hints: bilingualHints(["Its name combines the words One and Plus.", "It is known for fast-charging Android phones."], ["يجمع اسمها بين كلمتي One وPlus.", "تشتهر بهواتف Android سريعة الشحن."]) },
  { word: "Sony Xperia", hints: bilingualHints(["It is a smartphone line from Sony.", "Sony's camera and entertainment expertise influences the line."], ["هي سلسلة هواتف ذكية من Sony.", "تؤثر خبرة Sony في الكاميرات والترفيه على هذه السلسلة."]) },
  { word: "LG", hints: bilingualHints(["It is a South Korean electronics brand.", "It produced phones, televisions, and home appliances."], ["هي علامة إلكترونيات كورية جنوبية.", "أنتجت الهواتف والتلفزيونات والأجهزة المنزلية."]) },
  { word: "Xiaomi", hints: bilingualHints(["It is a Chinese electronics company.", "Its products include phones, wearables, and smart-home devices."], ["هي شركة إلكترونيات صينية.", "تشمل منتجاتها الهواتف والأجهزة القابلة للارتداء والمنزل الذكي."]) },
  { word: "Motorola", hints: bilingualHints(["It is associated with the Razr foldable phone.", "It is one of the oldest names in mobile communications."], ["ترتبط بهاتف Razr القابل للطي.", "هي من أقدم الأسماء في مجال الاتصالات المحمولة."]) },
  { word: "Vivo", hints: bilingualHints(["It is a Chinese smartphone brand.", "Its name ends with the letter O."], ["هي علامة هواتف ذكية صينية.", "ينتهي اسمها بحرف O."]) },
  { word: "Realme", hints: bilingualHints(["It is a smartphone brand from China.", "It is part of the wider BBK electronics family."], ["هي علامة هواتف ذكية من الصين.", "تنتمي إلى عائلة BBK Electronics الأوسع."]) },
  { word: "OPPO", hints: bilingualHints(["It is a Chinese smartphone brand.", "Its four-letter name begins and ends with O."], ["هي علامة هواتف ذكية صينية.", "يتكون اسمها من أربعة أحرف ويبدأ وينتهي بحرف O."]) },
  { word: "ROG Phone", hints: bilingualHints(["It is a gaming phone line from ASUS.", "Its name stands for Republic of Gamers."], ["هي سلسلة هواتف للألعاب من ASUS.", "يرمز اسمها إلى Republic of Gamers."]) },
  { word: "Infinix", hints: bilingualHints(["It is a smartphone brand based in Hong Kong.", "It focuses on affordable phones with modern features."], ["هي علامة هواتف ذكية مقرها هونغ كونغ.", "تركز على هواتف اقتصادية بميزات حديثة."]) },
  { word: "Sony Ericsson", hints: bilingualHints(["It was a partnership between Sony and Ericsson.", "The Walkman and Cyber-shot phones carried its branding."], ["كانت شراكة بين Sony وEricsson.", "حملت هواتف Walkman وCyber-shot علامتها التجارية."]) },
  { word: "Alcatel", hints: bilingualHints(["It is a telecommunications brand with a long history.", "Its name is associated with mobile phones and network equipment."], ["هي علامة اتصالات ذات تاريخ طويل.", "يرتبط اسمها بالهواتف المحمولة ومعدات الشبكات."]) },
];

words.fruits = [
  { word: "watermelon", hints: bilingualHints(["It is a large fruit with a high water content.", "It is especially popular in summer."], ["هي فاكهة كبيرة تحتوي على نسبة عالية من الماء.", "تشتهر خصوصاً في فصل الصيف."]) },
  { word: "tangerine", hints: bilingualHints(["It is a small, easy-to-peel citrus fruit.", "Its skin is usually orange."], ["هي فاكهة حمضية صغيرة سهلة التقشير.", "يكون لون قشرتها برتقالياً عادةً."]) },
  { word: "strawberry", hints: bilingualHints(["It is a red fruit with tiny seeds on its surface.", "It is often used in desserts and smoothies."], ["هي فاكهة حمراء تحمل بذوراً صغيرة على سطحها.", "تُستخدم كثيراً في الحلويات والعصائر."]) },
  { word: "raspberry", hints: bilingualHints(["It is a soft berry made of many small sections.", "It is often red or dark pink when ripe."], ["هي ثمرة طرية تتكون من وحدات صغيرة كثيرة.", "يكون لونها أحمر أو وردياً داكناً عند النضج."]) },
  { word: "quince", hints: bilingualHints(["It resembles an apple or pear but is usually cooked.", "Its flesh becomes fragrant and rosy when cooked."], ["تشبه التفاح أو الكمثرى لكنها تُطهى غالباً.", "يصبح لبها عطراً ووردياً عند طهيها."]) },
  { word: "orange", hints: bilingualHints(["Its name is also the name of its color.", "It is a round citrus fruit rich in juice."], ["اسمها هو نفسه اسم لونها.", "هي فاكهة حمضية مستديرة وغنية بالعصير."]) },
  { word: "mango", hints: bilingualHints(["It is a tropical fruit with sweet yellow flesh.", "It is commonly used in juice and desserts."], ["هي فاكهة استوائية ذات لب أصفر حلو.", "تُستخدم كثيراً في العصائر والحلويات."]) },
  { word: "lemon", hints: bilingualHints(["It is a yellow citrus fruit with a sour taste.", "Its juice is often added to drinks and food."], ["هي فاكهة حمضية صفراء ذات طعم حامض.", "يُضاف عصيرها كثيراً إلى المشروبات والطعام."]) },
  { word: "apple", hints: bilingualHints(["Its name begins with the first letter of the English alphabet.", "It can be red, green, or yellow."], ["يبدأ اسمها بأول حرف في الأبجدية الإنجليزية.", "قد تكون حمراء أو خضراء أو صفراء."]) },
  { word: "banana", hints: bilingualHints(["It is a curved fruit with a yellow peel.", "It is commonly used in smoothies."], ["هي فاكهة منحنية ذات قشرة صفراء.", "تُستخدم كثيراً في العصائر."]) },
  { word: "cherry", hints: bilingualHints(["It is a small fruit that often grows in pairs.", "It has a stone in its center."], ["هي فاكهة صغيرة تنمو غالباً في أزواج.", "تحتوي على نواة في وسطها."]) },
  { word: "fig", hints: bilingualHints(["It is a soft fruit with many tiny seeds.", "It is mentioned in the Quran."], ["هي فاكهة طرية تحتوي على بذور صغيرة كثيرة.", "ورد ذكرها في القرآن الكريم."]) },
  { word: "grape", hints: bilingualHints(["It grows in bunches on a vine.", "It can be green, red, purple, or black."], ["تنمو في عناقيد على الكرمة.", "قد تكون خضراء أو حمراء أو بنفسجية أو سوداء."]) },
  { word: "kiwi", hints: bilingualHints(["It has brown fuzzy skin and green flesh.", "Its green flesh contains many small black seeds."], ["لها قشرة بنية ولب أخضر.", "يحتوي لبها الأخضر على بذور سوداء صغيرة كثيرة."]) },
];

words.soft_Drinks = [
  { word: "Iced Tea", hints: bilingualHints(["It is tea served cold, often with ice.", "Lemon is a common flavor for it."], ["هو شاي يُقدم بارداً وغالباً مع الثلج.", "يُعد الليمون نكهة شائعة له."]) },
  { word: "Lemonade", hints: bilingualHints(["It is a refreshing drink made with lemon juice.", "It is usually mixed with water and sugar."], ["هو مشروب منعش يُصنع من عصير الليمون.", "يُمزج عادةً بالماء والسكر."]) },
  { word: "7UP", hints: bilingualHints(["It is a clear, lemon-lime soft drink.", "Its name begins with the number seven."], ["هو مشروب غازي شفاف بنكهة الليمون واللايم.", "يبدأ اسمه بالرقم سبعة."]) },
  { word: "Fanta", hints: bilingualHints(["Its orange flavor is one of its best-known varieties.", "It is a colorful carbonated soft drink."], ["نكهة البرتقال من أشهر نكهاته.", "هو مشروب غازي ملون."]) },
  { word: "Sprite", hints: bilingualHints(["It is a clear lemon-lime soft drink.", "Its branding is commonly associated with green."], ["هو مشروب غازي شفاف بنكهة الليمون واللايم.", "يرتبط شعاره عادةً باللون الأخضر."]) },
  { word: "Coca-Cola", hints: bilingualHints(["It is one of the world's most recognized soft drink brands.", "Its classic branding is strongly associated with red."], ["هي من أشهر علامات المشروبات الغازية في العالم.", "يرتبط تصميمها الكلاسيكي بقوة باللون الأحمر."]) },
  { word: "Pepsi", hints: bilingualHints(["It is a cola soft drink brand.", "Blue is strongly associated with its branding."], ["هي علامة تجارية لمشروب غازي بنكهة الكولا.", "يرتبط شعارها بقوة باللون الأزرق."]) },
];

words.Technology_Science = [
  { word: "Artificial Intelligence", hints: bilingualHints(["It enables computers to perform tasks that usually require human intelligence.", "Machine learning is one of its major fields."], ["تمكّن الحواسيب من تنفيذ مهام تتطلب عادةً ذكاءً بشرياً.", "يُعد التعلم الآلي أحد مجالاتها الرئيسية."]) },
  { word: "Quantum Computer", hints: bilingualHints(["It uses quantum bits instead of ordinary bits.", "Its basic unit can represent a superposition of states."], ["تستخدم بتات كمومية بدلاً من البتات العادية.", "يمكن لوحدتها الأساسية تمثيل تراكب من الحالات."]) },
  { word: "Solar Energy", hints: bilingualHints(["It comes from the light and heat of the Sun.", "Solar panels can convert it into electricity."], ["تأتي من ضوء الشمس وحرارتها.", "يمكن للألواح الشمسية تحويلها إلى كهرباء."]) },
  { word: "Internet", hints: bilingualHints(["It connects computer networks around the world.", "Websites and online services use it to communicate."], ["تربط شبكات الحاسوب حول العالم.", "تستخدمها المواقع والخدمات للتواصل."]) },
  { word: "Volcano", hints: bilingualHints(["It can release lava, ash, and gases.", "Mountains with openings in Earth's crust may be one."], ["يمكن أن تطلق الحمم والرماد والغازات.", "قد تكون جبلاً يحتوي على فتحة في قشرة الأرض."]) },
  { word: "Gravity", hints: bilingualHints(["It pulls objects toward one another.", "It keeps planets in orbit around stars."], ["تجذب الأجسام بعضها نحو بعض.", "تحافظ على دوران الكواكب حول النجوم."]) },
  { word: "DNA", hints: bilingualHints(["It stores genetic instructions in living organisms.", "Its structure is commonly described as a double helix."], ["تخزن التعليمات الوراثية في الكائنات الحية.", "يوصف تركيبها عادةً باللولب المزدوج."]) },
  { word: "Robot", hints: bilingualHints(["It is a machine that can perform programmed tasks.", "Some robots are designed to work without constant human control."], ["هي آلة تستطيع تنفيذ مهام مبرمجة.", "صُممت بعض الروبوتات للعمل دون تحكم بشري مستمر."]) },
];

words.Animals = [
  { word: "Elephant", hints: bilingualHints(["It is the largest land animal alive today.", "It has a long trunk and large ears."], ["هو أكبر حيوان بري حي حالياً.", "له خرطوم طويل وأذنان كبيرتان."]) },
  { word: "Penguin", hints: bilingualHints(["It is a bird that cannot fly.", "Many species live in the Southern Hemisphere."], ["هو طائر لا يستطيع الطيران.", "تعيش أنواع كثيرة منه في نصف الكرة الجنوبي."]) },
  { word: "Dolphin", hints: bilingualHints(["It is a highly intelligent marine mammal.", "It communicates using clicks and whistles."], ["هو حيوان ثديي بحري شديد الذكاء.", "يتواصل باستخدام النقرات والصفير."]) },
  { word: "Camel", hints: bilingualHints(["It can survive for long periods in dry deserts.", "It is known for its hump and ability to travel on sand."], ["تستطيع العيش لفترات طويلة في الصحارى الجافة.", "تشتهر بسنامها وقدرتها على السير فوق الرمال."]) },
  { word: "Eagle", hints: bilingualHints(["It is a powerful bird of prey.", "It has excellent eyesight and sharp talons."], ["هو طائر جارح قوي.", "يمتلك بصراً حاداً ومخالب قوية."]) },
  { word: "Giraffe", hints: bilingualHints(["It is the tallest living land animal.", "Its long neck helps it reach leaves high in trees."], ["هي أطول حيوانات البر الحية.", "تساعدها رقبتها الطويلة على الوصول إلى أوراق الأشجار العالية."]) },
];

words.Food = [
  { word: "Chocolate", hints: bilingualHints(["It is made from cacao beans.", "It can be dark, milk, or white."], ["تُصنع من حبوب الكاكاو.", "قد تكون داكنة أو بالحليب أو بيضاء."]) },
  { word: "Pasta", hints: bilingualHints(["It is commonly made from wheat and water.", "Spaghetti and penne are examples of it."], ["تُصنع عادةً من القمح والماء.", "من أمثلتها السباغيتي والبيني."]) },
  { word: "Pizza", hints: bilingualHints(["It usually has a flat dough base with toppings.", "It is strongly associated with Italian cuisine."], ["تتكون عادةً من عجينة مسطحة مع إضافات.", "ترتبط بقوة بالمطبخ الإيطالي."]) },
  { word: "Honey", hints: bilingualHints(["Bees produce it from flower nectar.", "It is naturally sweet and often golden in color."], ["ينتجه النحل من رحيق الأزهار.", "هو حلو المذاق ولونه ذهبي غالباً."]) },
  { word: "Popcorn", hints: bilingualHints(["It is made by heating a special type of corn.", "It is a popular cinema snack."], ["يُصنع بتسخين نوع خاص من الذرة.", "هو وجبة خفيفة شهيرة في دور السينما."]) },
  { word: "Bread", hints: bilingualHints(["It is commonly made from flour, water, and yeast.", "It is a staple food in many cultures."], ["يُصنع عادةً من الدقيق والماء والخميرة.", "هو طعام أساسي في ثقافات كثيرة."]) },
  { word: "Rice", hints: bilingualHints(["It is a grain eaten around the world.", "It can be served steamed, boiled, or cooked in dishes."], ["هي حبوب تؤكل في أنحاء العالم.", "يمكن تقديمها مطهوة على البخار أو مسلوقة أو ضمن أطباق مختلفة."]) },
  { word: "Dates", hints: bilingualHints(["They grow on palm trees.", "They are naturally sweet and common in the Middle East."], ["تنمو على أشجار النخيل.", "هي حلوة بطبيعتها وشائعة في الشرق الأوسط."]) },
];

words.Geography_Landmarks = [
  { word: "Mountain", hints: bilingualHints(["It is a high natural elevation of land.", "The highest point is called its summit."], ["هو ارتفاع طبيعي شاهق من الأرض.", "تُسمى أعلى نقطة فيه القمة."]) },
  { word: "Desert", hints: bilingualHints(["It receives very little rainfall.", "The Sahara is one of the world's largest examples."], ["تتلقى كمية قليلة جداً من الأمطار.", "تُعد الصحراء الكبرى من أكبر أمثلتها في العالم."]) },
  { word: "Island", hints: bilingualHints(["It is land completely surrounded by water.", "It can be found in oceans, seas, rivers, or lakes."], ["هي قطعة أرض تحيط بها المياه من كل الجهات.", "يمكن أن توجد في المحيطات والبحار والأنهار والبحيرات."]) },
  { word: "Waterfall", hints: bilingualHints(["It forms where a river drops over a steep edge.", "Niagara is one of the world's famous examples."], ["تتكون عندما يسقط النهر فوق حافة شديدة الانحدار.", "تُعد شلالات نياجرا من أشهر أمثلتها."]) },
  { word: "Pyramid", hints: bilingualHints(["It has a polygonal base and triangular sides.", "The pyramids of Giza are famous ancient examples."], ["لها قاعدة متعددة الأضلاع وجوانب مثلثة.", "تُعد أهرامات الجيزة أمثلة أثرية شهيرة."]) },
  { word: "Map", hints: bilingualHints(["It represents places and their locations.", "It can show roads, borders, rivers, and mountains."], ["تمثل الأماكن ومواقعها.", "يمكن أن توضح الطرق والحدود والأنهار والجبال."]) },
];

words.Professions = [
  { word: "Teacher", hints: bilingualHints(["This person helps students learn.", "They may work in a school or training center."], ["يساعد الطلاب على التعلم.", "قد يعمل في مدرسة أو مركز تدريب."]) },
  { word: "Doctor", hints: bilingualHints(["This person diagnoses and treats illness.", "They may work in a hospital or clinic."], ["يشخّص الأمراض ويعالجها.", "قد يعمل في مستشفى أو عيادة."]) },
  { word: "Engineer", hints: bilingualHints(["This person designs or builds solutions using science and mathematics.", "Civil, electrical, and software are examples of its fields."], ["يصمم أو يبني حلولاً باستخدام العلوم والرياضيات.", "من مجالاته الهندسة المدنية والكهربائية والبرمجيات."]) },
  { word: "Farmer", hints: bilingualHints(["This person grows crops or raises animals.", "Their work helps provide food for communities."], ["يزرع المحاصيل أو يربي الحيوانات.", "يساعد عمله في توفير الغذاء للمجتمعات."]) },
  { word: "Carpenter", hints: bilingualHints(["This person works with wood.", "They can build furniture, doors, and other structures."], ["يعمل بالخشب.", "يمكنه صناعة الأثاث والأبواب وهياكل أخرى."]) },
  { word: "Pilot", hints: bilingualHints(["This person flies an aircraft.", "They are responsible for controlling the flight."], ["يقود الطائرة.", "يكون مسؤولاً عن التحكم في الرحلة."]) },
];

words.Nature_Weather = [
  { word: "Rain", hints: bilingualHints(["It is water that falls from clouds.", "It helps plants and crops grow."], ["هي مياه تسقط من السحب.", "تساعد النباتات والمحاصيل على النمو."]) },
  { word: "Cloud", hints: bilingualHints(["It is made of tiny water droplets or ice crystals.", "It can bring rain, shade, or storms."], ["تتكون من قطرات ماء صغيرة أو بلورات جليد.", "قد تجلب المطر أو الظل أو العواصف."]) },
  { word: "Wind", hints: bilingualHints(["It is moving air.", "It can turn wind turbines to produce electricity."], ["هواء متحرك.", "يمكنه تدوير التوربينات لإنتاج الكهرباء."]) },
  { word: "Rainbow", hints: bilingualHints(["It appears when light passes through water droplets.", "It displays a range of colors in the sky."], ["تظهر عندما يمر الضوء عبر قطرات الماء.", "تعرض مجموعة من الألوان في السماء."]) },
  { word: "River", hints: bilingualHints(["It is a natural stream of flowing water.", "It usually flows toward a lake, sea, or another river."], ["هو مجرى طبيعي من المياه الجارية.", "يتجه عادةً نحو بحيرة أو بحر أو نهر آخر."]) },
  { word: "Forest", hints: bilingualHints(["It is a large area covered mainly by trees.", "It provides habitats for many plants and animals."], ["هي مساحة كبيرة تغطيها الأشجار غالباً.", "توفر موائل لكثير من النباتات والحيوانات."]) },
];

addDifficultyHints();

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

//  Initialize Randoming Word Variables

let objectKeys;

let randomPropOfObject;

let randomValueFromObjectProp;

let randomWordFromObjectPropValue;

let randomGuessWord;

let randomGuessHint;

let currentHintIndex = 0;

let randomGuessWordArray;

let wordFrom;

let guessWordDiv;

let nativeRandomWord;

let nativeGuessWord;

let wordHint = document.querySelector(".word-hint");

let hintProgress = document.querySelector(".hint-progress");

let showHintButton = document.querySelector(".show-hint");

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

function randomizingValues() {
  objectKeys = Object.keys(words);

  randomPropOfObject = Math.floor(Math.random() * objectKeys.length);

  randomValueFromObjectProp = words[objectKeys[randomPropOfObject]];

  randomWordFromObjectPropValue = Math.floor(
    Math.random() * randomValueFromObjectProp.length
  );

  randomGuessWord =
    words[objectKeys[randomPropOfObject]][randomWordFromObjectPropValue].word;
  randomGuessHint =
    words[objectKeys[randomPropOfObject]][randomWordFromObjectPropValue].hints;

  currentHintIndex = 0;

  randomGuessWordArray = [...randomGuessWord];

  wordFrom = document.querySelector(".game-info .word-type .wt-value");

  wordFrom.innerHTML = t("cat_" + objectKeys[randomPropOfObject]);

  renderHint();

  guessWordDiv = document.querySelectorAll(".guess-word");

  let nativeArrayWord = [];

  Array.from(randomGuessWord).forEach((e) => {
    nativeArrayWord.push(e === " " ? "" : e);
  });

  nativeRandomWord = nativeArrayWord.join("").toLowerCase();
}

function renderHint() {
  let difficultyHints = randomGuessHint && randomGuessHint[gameDifficulty];
  let hints = difficultyHints && difficultyHints[lang];

  if (!Array.isArray(hints) || hints.length === 0) {
    hints = difficultyHints && difficultyHints.en;
  }

  if (!Array.isArray(hints) || hints.length === 0) {
    wordHint.textContent = "";
    hintProgress.textContent = "";
    return;
  }

  currentHintIndex = Math.min(currentHintIndex, hints.length - 1);
  wordHint.textContent = hints[currentHintIndex];
  hintProgress.textContent = lang === "ar"
    ? `التلميح ${currentHintIndex + 1} من ${hints.length}`
    : `Hint ${currentHintIndex + 1} of ${hints.length}`;

  let nextHintLabel = t("nextHint");
  showHintButton.title = nextHintLabel;
  showHintButton.setAttribute("aria-label", nextHintLabel);
}

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

// Initialize Most Buttons

let continueBtn = document.getElementById("continue-btn");

let changeNameBtn = document.getElementById("change-name");

let resetNameBtn = document.getElementById("reset-name");

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

// Initialize Word Numbers And Limits

let limitTimes;

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-
 
// Accesing Head & Style Tags
 
let headTag = document.getElementsByTagName("head")[0];
 
let styleTag = document.createElement("style");
 
// Light Theme Definition
const lightTheme = `
:root {
  --black-color: #edf2fa;
  --white-color: #131c2e;
  --mov-color: #7c3aed;
  --blue-color: #0891b2;
  --mint-color: #0d9488;
  --danger-color: #e11d48;
  --success-color: #0d9488;
  --panel-border: rgba(19, 28, 46, 0.18);
  --glow-green: rgba(8, 145, 178, 0.25);
  --glow-orange: rgba(124, 58, 237, 0.25);
}
body {
  background-color: var(--black-color);
  background-image:
    radial-gradient(circle at 12% 15%, rgba(8, 145, 178, 0.08), transparent 30%),
    radial-gradient(circle at 87% 80%, rgba(124, 58, 237, 0.09), transparent 32%);
}
`;
 
//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-
 
// Initialize Name Input

let inputName = document.getElementById("name");

let defaultName = "@player_99";

inputName.className = "mainName";

inputName.placeholder = "Your Name";

inputName.value = defaultName;

inputName.maxLength = 15;

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

// Correct Words Bar + Timer

let correctWordsContainer = document.querySelector(".words");

let time = document.getElementById("time");

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

// Name Functions

changeNameBtn.addEventListener("click", () => {
  inputName.value = "";

  inputName.focus();

  inputName.oninput = () => localStorage.setItem("mainName", inputName.value);
});

resetNameBtn.addEventListener("click", () => {
  inputName.value = defaultName;

  localStorage.setItem("mainName", inputName.value);
});

inputName.onfocus = () => inputName.classList.add("no-event");

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

// Register Service Worker (PWA offline support) — http(s) only
if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

window.addEventListener("load", () => {
  //-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

  //-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

  // Remove 'Diseble' Class From  Popup After Loading

  setTimeout(() => {
    [...document.querySelectorAll(".popup")].forEach((e) =>
      e.classList.remove("diseble")
    );
  }, 2500);

  //-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

  // If No Custom Name Name Equal Default Name

  if (localStorage.getItem("mainName") == undefined) {
    localStorage.setItem("mainName", defaultName);
  }
  //-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-
  if (localStorage.getItem("mainName") != undefined) {
    inputName.value = localStorage.getItem("mainName");
  }

  if (localStorage.getItem("mainName") === undefined) {
    inputName.value = defaultName;
  }

  // If Light Mode Was Enabled : Apply Light Theme On Load

  if (localStorage.getItem("isDark") === "true") {
    document.getElementById("change-mode").checked = true;

    styleTag.innerHTML = lightTheme;

    headTag.appendChild(styleTag);
  }
  //-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

  // Language : Apply Saved Content Translation

  applyLang();

  // Header Buttons : Language Toggle + How To Play

  document.getElementById("lang-btn").addEventListener("click", () => {
    // Toggle language without reloading
    lang = lang === "ar" ? "en" : "ar";
    localStorage.setItem("lang", lang);

    applyLang();
  });

  document.getElementById("help-btn").addEventListener("click", () => {
    buildRulesScreen();
  });

  // Settings Menu : group name / theme / language / help behind one button (mobile)
  let settingsGroup = document.getElementById("settings-group");
  let settingsBtn = document.getElementById("settings-btn");

  let closeSettingsMenu = () => {
    settingsGroup.classList.remove("open");
    settingsBtn.setAttribute("aria-expanded", "false");
  };

  settingsBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    let open = settingsGroup.classList.toggle("open");
    settingsBtn.setAttribute("aria-expanded", open ? "true" : "false");
  });

  document.addEventListener("click", (e) => {
    if (!settingsGroup.contains(e.target)) closeSettingsMenu();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeSettingsMenu();
  });

  // Theme Toggle
  let changeModeToggle = document.getElementById("change-mode");
  changeModeToggle.addEventListener("click", () => {
    if (changeModeToggle.checked === true) {
      localStorage.setItem("isDark", true);
      styleTag.innerHTML = lightTheme;
      headTag.appendChild(styleTag);
    } else {
      localStorage.setItem("isDark", false);
      styleTag.remove();
    }
  });

  buildSetupScreen();

  // First Visit : Show The Rules Screen Once

  if (localStorage.getItem("seenRules") == undefined) {
    buildRulesScreen();

    localStorage.setItem("seenRules", "true");
  }
});

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

// Declaration Others Variable

let wrongTimes = 0;

// Input Lock : swallow taps landing too close together (double-tap guard).
// Raise/lower INPUT_LOCK_MS to taste — 500ms feels natural on touch.
let inputLockedUntil = 0;
const INPUT_LOCK_MS = 500;

let successSound = document.getElementById("success");

let errorSound = document.getElementById("error");

let gameOver = document.getElementById("game-over");

let gameEnded = false;

let gameDifficulty = "medium";

let timeLimits = { easy: 0, medium: 0, high: 0 };

let selectedCategories = [];

// Saved game state for Play Again (replay with same settings)
let savedGameConfig = null;
let originalWords = null;

let guessSpansArray = document.getElementsByClassName("guess-span");

let guessBasicSpansArray = document.getElementsByClassName("basic-span");

let submitWord = document.getElementById("submit-btn");

let winStatus = false;

let correctSpans = document.querySelectorAll(".correct-word-span");

let wordLength;

let clickedTarget;

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

// Language System : Content-Only Translation (Game Logic Stays English)

const i18n = {
  en: {
    wordFrom: "Word From :",
    letsStart: `Let's Start <i class="fa-regular fa-hand-peace c-blue"></i>`,
    mistakes: "Number Of Mistake Is :",
    correctWords: "Correct Words",
    wordHint: "Word Hint",
    nextHint: "Next Hint",
    lettersLabel: "Letters",
    namePh: "Your Name",
    welcomeWord: "Welcome",
    welcomeTail: "let's guess some words",
    selectCats: "Select Categories",
    howMany: "How Many Words ?",
    startGame: "Start Game",
    englishNote: "All words are in English",
    gameOver: "Game Over",
    theWordWas: "The Word Was",
    correctWordsBtn: "Correct Words",
    playAgain: "Play Again",
    thanksPre: "Thanks For Playing ,",
    youWin: "You Win !",
    guessedPre: "You Guessed",
    guessedPost: "Words Correctly",
    yourWords: "Your Words",
    noWordsYet: "No Words Guessed Yet",
    colNum: "#",
    colWord: "Word",
    colCat: "Category",
    rulesTitle: "How To Play",
    rulesOk: "Got It , Let's Play",
    rule1: "Every round hides one English word — reveal it letter by letter.",
    rule2: "Each wrong letter draws part of the hangman : 10 mistakes and the round is over.",
    rule3: "Choose your categories and the number of words in the setup screen.",
    rule4: "The timer starts as soon as the game begins.",
    rule5: "Need help ? Use the eye button to reveal the hint.",
    rule6: "Guess every word correctly to win the round !",
    cat_programming_Language: "Programming Language",
    cat_Popular_Brands: "Popular Brands",
    cat_Arabic_Country: "Arabic Country",
    cat_Video_Games: "Video Games",
    cat_phones: "Phones",
    cat_fruits: "Fruits",
    cat_soft_Drinks: "Soft Drinks",
    cat_Technology_Science: "Technology & Science",
    cat_Animals: "Animals",
    cat_Food: "Food",
    cat_Geography_Landmarks: "Geography & Landmarks",
    cat_Professions: "Professions",
    cat_Nature_Weather: "Nature & Weather",
difficulty: "Difficulty",
    difficultyEasy: "Easy",
    difficultyMedium: "Medium",
    difficultyHigh: "High",
    correctWord: "Correct Word!",
    wordComplete: "Word Completed!",
    selectedCategories: "Selected Categories",
    difficultyNote: "High: Repeated letters count as one",
    timeLimit: "Time Limit (seconds)",
    timeLimitEasy: "Easy Time Limit",
    timeLimitMedium: "Medium Time Limit",
    timeLimitHigh: "High Time Limit",
    timeLimitNote: "Time per word. 0 = no limit",
    timeUp: "Time's Up!",
    timeUpMistake: "Time expired! Mistake added.",
    settingsTitle: "Settings",
    themeLabel: "Theme",
    languageLabel: "Language",
    helpLabel: "How To Play",
  },
  ar: {
    wordFrom: "الفئة :",
    letsStart: `لنبدأ <i class="fa-regular fa-hand-peace c-blue"></i>`,
    mistakes: "عدد الأخطاء :",
    correctWords: "الكلمات الصحيحة",
    wordHint: "تلميح الكلمة",
    nextHint: "التلميح التالي",
    lettersLabel: "عدد الحروف",
    namePh: "اسمك",
    welcomeWord: "أهلاً بك",
    welcomeTail: "هيا نبدأ التخمين",
    selectCats: "اختر الفئات",
    howMany: "كم كلمة تريد ؟",
    startGame: "ابدأ اللعبة",
    englishNote: "جميع الكلمات باللغة الإنجليزية",
    gameOver: "انتهت اللعبة",
    theWordWas: "الكلمة هي",
    correctWordsBtn: "الكلمات الصحيحة",
    playAgain: "العب مرة أخرى",
    thanksPre: "شكراً للعب يا",
    youWin: "لقد فزت !",
    guessedPre: "لقد أكملت",
    guessedPost: "كلمة بنجاح",
    yourWords: "كلماتك",
    noWordsYet: "لا توجد كلمات بعد",
    colNum: "#",
    colWord: "الكلمة",
    colCat: "الفئة",
    rulesTitle: "كيف تلعب ؟",
    rulesOk: "حسناً ، هيا نبدأ",
    rule1: "في كل جولة كلمة إنجليزية مخفية — اكتشفها حرفاً بحرف.",
    rule2: "كل حرف خاطئ يضيف جزءاً إلى الرسم : بعد 10 أخطاء تنتهي الجولة.",
    rule3: "اختر الفئات وعدد الكلمات من شاشة البداية.",
    rule4: "يبدأ العدّاد بمجرد بدء اللعبة.",
    rule5: "تحتاج مساعدة ؟ اضغط زر العين لإظهار التلميح.",
    rule6: "اكتشف جميع الكلمات بشكل صحيح لتفوز بالجولة !",
    cat_programming_Language: "لغة برمجة",
    cat_Popular_Brands: "علامات تجارية شهيرة",
    cat_Arabic_Country: "دولة عربية",
    cat_Video_Games: "لعبة فيديو",
    cat_phones: "هواتف",
    cat_fruits: "فواكه",
    cat_soft_Drinks: "مشروبات غازية",
    cat_Technology_Science: "التقنية والعلوم",
    cat_Animals: "الحيوانات",
    cat_Food: "الطعام",
    cat_Geography_Landmarks: "الجغرافيا والمعالم",
    cat_Professions: "المهن",
    cat_Nature_Weather: "الطبيعة والطقس",
    difficulty: "الصعوبة",
    difficultyEasy: "سهل",
    difficultyMedium: "متوسط",
    difficultyHigh: "صعب",
    correctWord: "كلمة صحيحة!",
    wordComplete: "اكتملت الكلمة!",
    selectedCategories: "الفئات المختارة",
    difficultyNote: "الصعب: الحروف المكررة تحسب كواحدة",
    timeLimit: "الوقت المحدد (ثواني)",
    timeLimitEasy: "وقت السهل",
    timeLimitMedium: "وقت المتوسط",
    timeLimitHigh: "وقت الصعب",
    timeLimitNote: "الوقت لكل كلمة. 0 = لا حد",
    timeUp: "انتهى الوقت!",
    timeUpMistake: "انتهى الوقت! تمت إضافة خطأ.",
    settingsTitle: "الإعدادات",
    themeLabel: "المظهر",
    languageLabel: "اللغة",
    helpLabel: "كيف تلعب",
  },
};

let lang = localStorage.getItem("lang") === "ar" ? "ar" : "en";

function t(key) {
  return (i18n[lang] && i18n[lang][key]) || i18n.en[key] || key;
}

// Apply Language To Static HTML Elements

function applyLang() {
  document.body.classList.toggle("lang-ar", lang === "ar");

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });

  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    let translatedTitle = t(el.dataset.i18nTitle);
    el.title = translatedTitle;
    el.setAttribute("aria-label", translatedTitle);
  });

  inputName.placeholder = t("namePh");

  let languageButton = document.getElementById("lang-btn");
  let languageLabel = lang === "ar" ? "Switch to English" : "التبديل إلى العربية";
  languageButton.title = languageLabel;
  languageButton.setAttribute("aria-label", languageLabel);

  if (randomGuessHint) {
    wordFrom.innerHTML = t("cat_" + objectKeys[randomPropOfObject]);
    renderHint();
  }
}

showHintButton.addEventListener("click", () => {
  let difficultyHints = randomGuessHint && randomGuessHint[gameDifficulty];
  let hints = difficultyHints && difficultyHints[lang];

  if (!Array.isArray(hints) || hints.length === 0) {
    hints = difficultyHints && difficultyHints.en;
  }

  if (!Array.isArray(hints) || hints.length < 2) return;

  currentHintIndex = (currentHintIndex + 1) % hints.length;
  renderHint();
});

let wordTypeArray = [];

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

function clickerWords() {
  // Bind once : re-calling startGame must not stack duplicate listeners
  if (window._clickerWordsBound) return;
  window._clickerWordsBound = true;

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("letter-span") && !gameEnded) {
      // Ignore taps while the input lock is active
      if (Date.now() < inputLockedUntil) return;
      inputLockedUntil = Date.now() + INPUT_LOCK_MS;

      clickedTarget = e.target.innerText.toLowerCase();

      // Set Status Value

      let theStatus = false;

      // Checking Guess Word And Random Word

      let theNeededLetter = e.target.innerText.toLowerCase();

      // Check If Clicked Letter Equal In Word Letter

      let matchIndices = [];

      [...randomGuessWord].forEach(function (letter, index) {
        let arrayLetter = letter.toLowerCase();

        if (theNeededLetter === arrayLetter) {
          matchIndices.push(index);
        }
      });

      if (matchIndices.length > 0) {
        let shouldLockTarget = true;

        // High Difficulty : Every press reveals just one matching position.
        // Keys stay available, so extra presses can still count as mistakes.
        if (gameDifficulty === "high") {
          let nextHiddenIndex = matchIndices.find(
            (idx) => guessSpansArray[idx].innerHTML === ""
          );

          if (nextHiddenIndex !== undefined) {
            guessSpansArray[nextHiddenIndex].innerHTML = theNeededLetter;
            theStatus = true;
          }

          shouldLockTarget = false;
        } else {
          matchIndices.forEach((idx) => {
            guessSpansArray[idx].innerHTML = theNeededLetter;
          });

          theStatus = true;
        }

        if (shouldLockTarget) {
          e.target.classList.add("clicked");
        }

        if (theStatus) {
          successSound.play().catch(() => {});
          fxHaptic(15);
        }
      } else {
        if (gameDifficulty !== "high") {
          e.target.classList.add("clicked");
        }
      }

      // If Clicked Letter Not Equal Word
      if (theStatus !== true) {
        wrongTimes++;

        document.querySelector(".draw-row").classList.add(`show-${wrongTimes}`);

        errorSound.play().catch(() => {});
        fxHaptic([40, 60, 40]);
      }

      let nativeGuessArray = [];

      [...guessSpansArray].forEach((span) => {
        nativeGuessArray.push(span.innerHTML !== " " ? span.innerHTML : " ");
      });

      nativeGuessWord = nativeGuessArray.join("").toLowerCase();
      ifGameOver();

      updateMistakesRail();
    }

    let emptySpansArray = [];

    [...guessBasicSpansArray].forEach((span) => {
      span.innerHTML === "" ? emptySpansArray.push(span) : false;
    });
    if (emptySpansArray.length === 0) {
      submitWord.click();
    }
  });
}
//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

// Keyboard Support : Physical Keyboard Input

const tapToGuessBtn = document.querySelector(".tap-to-guess-btn");
const mobileInput = document.querySelector(".mobile-keyboard-input");

tapToGuessBtn.addEventListener("click", () => {
  tapToGuessBtn.style.display = "none";
  document.querySelectorAll(".letter-span").forEach((span) => span.classList.remove("clicked"));
  inputLockedUntil = 0;
  mobileInput.focus();
  mobileInput.select();
});

mobileInput.addEventListener("input", (e) => {
  const typedChar = e.data;
  if (!typedChar || gameEnded) return;
  
  const targetSpan = [...document.querySelectorAll(".letter-span")].find(
    (span) => span.innerText.toLowerCase() === typedChar.toLowerCase()
  );
  
  if (targetSpan && !targetSpan.classList.contains("clicked")) {
    targetSpan.click();
  }
  
  // Clear the input after processing
  e.target.value = "";
});

document.addEventListener("keydown", (e) => {
  if (gameEnded) return;
  const key = e.key.toLowerCase();
  if (key.length === 1 && /^[a-z0-9!$%*_:+?@#]/.test(key)) {
    const targetSpan = [...document.querySelectorAll(".letter-span")].find(
      (span) => span.innerText.toLowerCase() === key
    );
    if (targetSpan && !targetSpan.classList.contains("clicked")) {
      targetSpan.click();
    }
  }
});

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

// Function Add To Correct Words Div
function correctWord() {
  let correctWordDiv = document.querySelector(".words-container");

  let correctWordSpan = document.createElement("span");

  correctWordSpan.id = "correct-word-span";

  correctWordSpan.className = "correct-word-span";

  correctWordSpan.textContent = randomGuessWord;

  correctWordDiv.appendChild(correctWordSpan);

  document.querySelector(".word-number").innerHTML = `${
    [...correctWordDiv.childNodes].length
  } / ${limitTimes}`;

  // Celebration Effect For Correct Word
  if (typeof fxConfetti === "function") {
    fxConfetti();
  }

  // Show Correct Word Feedback
  showCorrectWordFeedback();
}

// Show Correct Word Feedback Animation
function showCorrectWordFeedback() {
  // Create Feedback Element
  let feedback = document.createElement("div");
  feedback.className = "correct-feedback";
  feedback.textContent = t("correctWord");

  // Add To Guess Word Area
  let guessParent = document.querySelector(".guess-word");
  guessParent.appendChild(feedback);

  // Trigger Animation
  requestAnimationFrame(() => {
    feedback.classList.add("show");
  });

  // Remove After Animation
  setTimeout(() => {
    feedback.classList.remove("show");
    setTimeout(() => feedback.remove(), 300);
  }, 1500);
}

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

// Function Declere Guess Spans

function DeclareGuessSpans() {
  Array.from(randomGuessWord).forEach(function (letter, index) {
    let guessWordDiv = document.querySelector(".guess-parent");

    let guessSpans = document.createElement("span");

    guessSpans.classList.add("guess-span");

    guessSpans.classList.add("basic-span");

    guessWordDiv.appendChild(guessSpans);

    if (letter === " ") {
      guessSpans.classList.add("space-span");

      guessSpans.classList.remove("basic-span");

      letter.innerHTML = " ";
    }
  });
  let oldBadge = document.querySelector(".word-length");
  if (oldBadge) oldBadge.remove();

  littersLength = document.createElement("div");

  littersLength.classList.add("word-length");

  littersLength.dataset.label = t("lettersLabel");

  littersLength.innerHTML = randomGuessWord.length;

  document.querySelector(".guess-line").appendChild(littersLength);

  wordTypeArray.push(objectKeys[randomPropOfObject]);
}

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

// On Submit Word Function

function submitFunction() {
  // Bind once : re-calling startGame must not stack duplicate listeners
  if (window._submitFunctionBound) return;
  window._submitFunctionBound = true;

  submitWord.addEventListener("click", () => {
    if (nativeGuessWord === nativeRandomWord) {
      correctWord();

      // Reset timer for the next word
      StartTimeFunction();

      document
        .querySelectorAll(".letter-span")
        .forEach((e) => e.classList.remove("clicked"));
      [...document.querySelector(".guess-parent").childNodes].forEach((e) => {
        e.remove();
      });
      if (littersLength) littersLength.remove();
    }
    document.querySelectorAll(".correct-word-span").length === limitTimes
      ? youWinPopup()
      : false;
    continueBtn.click();
  });
}

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

// If All Gallows Slides Showing Function

// Light Haptic Feedback For Mobile (no-op where unsupported)
function fxHaptic(pattern) {
  try {
    if (navigator.vibrate) navigator.vibrate(pattern);
  } catch (_) {}
}

// Sync The Board-Aligned Mistakes Rail With The Current Count
function updateMistakesRail() {
  let railCount = document.querySelector(".mistakes-rail .mr-count");
  if (railCount) railCount.textContent = wrongTimes;
}

function ifGameOver() {
  // Run Only Once : Lock Everything Immediately

  if (gameEnded) {
    return;
  }

  if (document.getElementById("draw-row-div").classList.contains("show-10")) {
    gameEnded = true;

    // Death Effect : hang the person

    document.getElementById("draw-row-div").classList.add("game-over");

    // Add Prevent Event To All Keyboard Spans

    document
      .querySelectorAll(".letter-span")
      .forEach((span) => span.classList.add("no-event"));

    // Show The "Game Over" Title While The Death Effect Plays

    setTimeout(() => {
      let titleDiv = document.createElement("div");

      titleDiv.className = "game-over-title";

      titleDiv.textContent = t("gameOver");

      document.body.appendChild(titleDiv);

      // Blur The Game & Background While The Title Is Up
      document.body.classList.add("go-title-active");

      gameOver.play().catch(() => {});
      fxHaptic([60, 50, 60, 50, 120]);
    }, 500);

    // Show The Popup After The Death Effect Finishes

    setTimeout(() => {
      document
        .querySelectorAll(".game-over-title")
        .forEach((title) => title.remove());

      document.body.classList.remove("go-title-active");

      gameOverPopup();
    }, 4300);
  }
}

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

// Deferance Operation Function

function operationFunction() {
  randomizingValues();

  DeclareGuessSpans();
}

// Reusable game start — used by both setup and Play Again
function startGame(config) {
  // Unlock immediately : never leave the board frozen if a later
  // step throws (the popup had disabled all pointer events)
  let gameContainer = document.querySelector(".container");
  gameContainer.classList.remove("diseble");
  gameContainer.style.pointerEvents = "";
  gameContainer.style.opacity = "";

  // Restore original words if replaying
  if (config && originalWords) {
    Object.keys(words).forEach((k) => delete words[k]);
    Object.assign(words, JSON.parse(JSON.stringify(originalWords)));

    // Re-apply the category selection (labels alone can't filter)
    if (Array.isArray(config.selectedCategoryKeys)) {
      Object.keys(words).forEach((type) => {
        if (!config.selectedCategoryKeys.includes(type)) {
          delete words[type];
        }
      });
    }

    // Safety net : never run with an empty pool
    if (Object.keys(words).length === 0) {
      Object.assign(words, JSON.parse(JSON.stringify(originalWords)));
    }
  }

  limitTimes = config.limitTimes;
  gameDifficulty = config.gameDifficulty;
  timeLimits = config.timeLimits;
  selectedCategories = config.selectedCategories;
  gameEnded = false;
  wrongTimes = 0;

  // Clear gallows
  document.getElementById("draw-row-div").className = "draw-row";

  // Clear correct words
  let cw = document.querySelector(".words-container");
  if (cw) cw.innerHTML = "";

  document.querySelector(".word-number").innerHTML = ` 0 / ${limitTimes}`;

  // Reset letter spans
  document.querySelectorAll(".letter-span").forEach((e) => {
    e.classList.remove("clicked", "no-event");
  });

  // Clear guess area
  let gp = document.querySelector(".guess-parent");
  if (gp) gp.innerHTML = "";

  // Reset mistake display (ticks clear automatically with .draw-row classes)
  updateMistakesRail();

  populateWordTypeDropdown();
  updateDifficultyBadge();
  StartTimeFunction();
  operationFunction();
  clickerWords();
  submitFunction();
}

continueBtn.onclick = () => {
  document.querySelectorAll(".correct-word-span").length <= limitTimes
    ? operationFunction()
    : "";
};

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

// Build Rules Screen — How To Play (Closable : Informational Only)

function buildRulesScreen() {
  let rulesDiv = document.createElement("div");

  rulesDiv.className = "popup rules-screen";

  let rulesList = document.createElement("ul");

  rulesList.className = "rules-list";

  let rules = [
    ["fa-solid fa-spell-check", t("rule1")],
    ["fa-solid fa-triangle-exclamation", t("rule2")],
    ["fa-solid fa-layer-group", t("rule3")],
    ["fa-solid fa-stopwatch", t("rule4")],
    ["fa-solid fa-lightbulb", t("rule5")],
    ["fa-solid fa-trophy", t("rule6")],
  ];

  rules.forEach(([icon, text]) => {
    let li = document.createElement("li");

    li.innerHTML = `<i class="${icon}"></i><span>${text}</span>`;

    rulesList.appendChild(li);
  });

  rulesDiv.innerHTML = `
    <i class="fa-solid fa-circle-question popup-icon c-mov"></i>

    <h1 class="popup-header"> ${t("rulesTitle")} </h1>
  `;

  rulesDiv.appendChild(rulesList);

  let actionsDiv = document.createElement("div");

  actionsDiv.className = "popup-actions";

  let okBtn = document.createElement("button");

  okBtn.className = "popup-btn solid";

  okBtn.textContent = t("rulesOk");

  okBtn.addEventListener("click", () => rulesDiv.remove());

  actionsDiv.appendChild(okBtn);

  rulesDiv.appendChild(actionsDiv);

  // Closable : Rules Do Not Control Game Logic

  addCloseIcon(rulesDiv, () => rulesDiv.remove());

  document.body.appendChild(rulesDiv);
}

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

// Add A Close (X) Icon To Any Popup

function addCloseIcon(popupDiv, onClose) {
  let closeBtn = document.createElement("button");

  closeBtn.type = "button";

  closeBtn.className = "popup-close";

  closeBtn.title = "Close";

  closeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';

  closeBtn.addEventListener("click", onClose);

  popupDiv.appendChild(closeBtn);
}

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

// Make Desibling Parent Container

function disebleContainerEvents() {
  return document.querySelector(".container").classList.add("diseble");
}

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

// Build Setup Screen — welcome, category chips, words stepper, start

function buildSetupScreen() {
  disebleContainerEvents();

  let setupDiv = document.createElement("div");

  setupDiv.className = "setup-screen-full";

  // Basmala

  let basmala = document.createElement("h3");

  basmala.className = "setup-header basmala";

  basmala.textContent = " بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ ";

  // Welcome Line

  let welcome = document.createElement("h3");

  welcome.className = "setup-words setup-welcome";

  welcome.innerHTML = `${t("welcomeWord")} <span class="setup-spans">${
    inputName.value
  }</span> — ${t("welcomeTail")}`;

  // Categories Label + Chips

  let catLabel = document.createElement("p");

  catLabel.className = "setup-label";

  catLabel.textContent = t("selectCats");

  let chipsWrap = document.createElement("div");

  chipsWrap.className = "setup-chips";

  Object.keys(words).forEach((type) => {
    let chip = document.createElement("button");

    chip.type = "button";

    // Default : Only Arabic Countries Selected

    chip.className =
      type === "Arabic_Country" ? "setup-chip selected" : "setup-chip";

    chip.dataset.type = type;

    chip.textContent = t("cat_" + type);

    chip.addEventListener("click", () => chip.classList.toggle("selected"));

    chipsWrap.appendChild(chip);
  });

  // Words Count Stepper

  let countLabel = document.createElement("p");

  countLabel.className = "setup-label";

  countLabel.textContent = t("howMany");

  let wordCount = 5;

  let stepper = document.createElement("div");

  stepper.className = "setup-stepper";

  let minusBtn = document.createElement("button");

  minusBtn.type = "button";

  minusBtn.textContent = "-";

  let countBox = document.createElement("span");

  countBox.id = "word-count-value";

  countBox.textContent = wordCount;

  let plusBtn = document.createElement("button");

  plusBtn.type = "button";

  plusBtn.textContent = "+";

  minusBtn.addEventListener("click", () => {
    if (wordCount > 1) {
      wordCount--;

      countBox.textContent = wordCount;
    }
  });

  plusBtn.addEventListener("click", () => {
    if (wordCount < 20) {
      wordCount++;

      countBox.textContent = wordCount;
    }
  });

  stepper.appendChild(minusBtn);

  stepper.appendChild(countBox);

  stepper.appendChild(plusBtn);

// Difficulty Selector
  let diffLabel = document.createElement("p");
  diffLabel.className = "setup-label";
  diffLabel.textContent = t("difficulty");

  let diffWrap = document.createElement("div");
  diffWrap.className = "setup-difficulty";

  ["easy", "medium", "high"].forEach((level) => {
    let btn = document.createElement("button");
    btn.type = "button";
    btn.className = level === "medium" ? "diff-btn selected" : "diff-btn";
    btn.dataset.difficulty = level;
    btn.textContent = t("difficulty" + level.charAt(0).toUpperCase() + level.slice(1));
    btn.addEventListener("click", () => {
      diffWrap.querySelectorAll(".diff-btn").forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");
    });
    diffWrap.appendChild(btn);
  });

  // Update minimum words based on selected categories
  function updateWordCountMin() {
    let selectedCount = [...chipsWrap.children].filter((c) => c.classList.contains("selected")).length;
    let minWords = Math.max(selectedCount, 1);
    if (wordCount < minWords) {
      wordCount = minWords;
      countBox.textContent = wordCount;
    }
    minusBtn.disabled = wordCount <= minWords;
    minusBtn.style.opacity = minusBtn.disabled ? "0.4" : "1";
    minusBtn.style.cursor = minusBtn.disabled ? "not-allowed" : "pointer";
  }

  // Update minimum when chip selection changes
  chipsWrap.addEventListener("click", (e) => {
    if (e.target.classList.contains("setup-chip")) {
      setTimeout(updateWordCountMin, 0);
    }
  });

  // Initial minimum
  updateWordCountMin();

  // Append elements in order: Basmala, Welcome, Categories, Word Count, Difficulty, Start
  setupDiv.appendChild(basmala);
  setupDiv.appendChild(welcome);
  setupDiv.appendChild(catLabel);
  setupDiv.appendChild(chipsWrap);
  setupDiv.appendChild(countLabel);
  setupDiv.appendChild(stepper);
  setupDiv.appendChild(diffLabel);
  setupDiv.appendChild(diffWrap);

  // Start Button
  let setupStartBtn = document.createElement("button");
  setupStartBtn.className = "setup-btn";
  setupStartBtn.textContent = t("startGame");

  setupStartBtn.addEventListener("click", () => {
    let selectedChips = [...chipsWrap.children].filter((chip) =>
      chip.classList.contains("selected")
    );

    // Validation : At Least One Category

    if (selectedChips.length === 0) {
      fxShake(chipsWrap);
      return;
    }

    let diffBtn = diffWrap.querySelector(".diff-btn.selected");
    let cfg = {
      limitTimes: wordCount,
      gameDifficulty: diffBtn ? diffBtn.dataset.difficulty : "medium",
      timeLimits: { easy: 40, medium: 30, high: 20 },
      selectedCategories: selectedChips.map((chip) => t("cat_" + chip.dataset.type)),
      selectedCategoryKeys: selectedChips.map((chip) => chip.dataset.type),
    };

    // Save original words and config for Play Again
    originalWords = JSON.parse(JSON.stringify(words));
    savedGameConfig = cfg;

    // Delete Not Selected Types
    Object.keys(words).forEach((type) => {
      let isSelected = selectedChips.some(
        (chip) => chip.dataset.type === type
      );
      if (!isSelected) {
        delete words[type];
      }
    });

    startGame(cfg);
    setupDiv.remove();
  });

setupDiv.appendChild(basmala);
  setupDiv.appendChild(welcome);
  setupDiv.appendChild(catLabel);
  setupDiv.appendChild(chipsWrap);
  setupDiv.appendChild(countLabel);
  setupDiv.appendChild(stepper);
  setupDiv.appendChild(diffLabel);
  setupDiv.appendChild(diffWrap);
  setupDiv.appendChild(setupStartBtn);

  document.body.appendChild(setupDiv);
}

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

// On Start Game Start Time Function

function StartTimeFunction() {
  // Get time limit for current difficulty
  let currentTimeLimit = timeLimits[gameDifficulty] || 0;
  let timeRemaining = currentTimeLimit;
  let timerInterval = null;

  // Clear any existing timer
  if (window.gameTimerInterval) {
    clearInterval(window.gameTimerInterval);
  }

  // Update timer display
  function updateTimerDisplay() {
    if (currentTimeLimit === 0) {
      // No time limit - show elapsed time
      time.innerHTML = "∞";
      time.style.color = "var(--blue-color)";
      return;
    }

    let mins = Math.floor(timeRemaining / 60);
    let secs = timeRemaining % 60;
    let display = `${mins > 9 ? mins : "0" + mins}:${secs > 9 ? secs : "0" + secs}`;

    // Change color based on urgency
    if (timeRemaining <= 10) {
      time.style.color = "var(--danger-color)";
      time.style.animation = "pulse 0.5s infinite";
    } else if (timeRemaining <= 30) {
      time.style.color = "var(--mov-color)";
      time.style.animation = "none";
    } else {
      time.style.color = "var(--white-color)";
      time.style.animation = "none";
    }

    time.innerHTML = display;
  }

  // Initial display
  updateTimerDisplay();

  // Start countdown if limit > 0
  if (currentTimeLimit > 0) {
    timerInterval = setInterval(() => {
      timeRemaining--;
      updateTimerDisplay();

      if (timeRemaining <= 0) {
        clearInterval(timerInterval);
        handleTimeUp();
      }
    }, 1000);
  }

  window.gameTimerInterval = timerInterval;
}

// Handle time up - add mistakes and skip to next word
function handleTimeUp() {
  if (gameEnded) return;

  let mistakesToAdd = 0;
  switch (gameDifficulty) {
    case "easy":
      mistakesToAdd = 1;
      break;
    case "medium":
      mistakesToAdd = 2;
      break;
    case "high":
      mistakesToAdd = 3;
      break;
    default:
      mistakesToAdd = 1;
  }

  // Show time up feedback
  showTimeUpFeedback();

  // Add mistakes
  for (let i = 0; i < mistakesToAdd; i++) {
    wrongTimes++;
    document.querySelector(".draw-row").classList.add(`show-${wrongTimes}`);
  }

  errorSound.play().catch(() => {});
  updateMistakesRail();

  ifGameOver();

  // Skip to next word if game not over
  if (!gameEnded) {
    // Reset letter keys
    document.querySelectorAll(".letter-span").forEach((e) => {
      e.classList.remove("clicked", "no-event");
    });

    // Clear guess area
    let gp = document.querySelector(".guess-parent");
    if (gp) gp.innerHTML = "";

    // Load next word
    operationFunction();

    // Start new timer
    StartTimeFunction();
  }
}

// Show time up feedback animation
function showTimeUpFeedback() {
  let feedback = document.createElement("div");
  feedback.className = "timeup-feedback";
  feedback.textContent = `${t("timeUp")} ${t("timeUpMistake")}`;

  let guessParent = document.querySelector(".guess-word");
  guessParent.appendChild(feedback);

  requestAnimationFrame(() => {
    feedback.classList.add("show");
  });

  setTimeout(() => {
    feedback.classList.remove("show");
    setTimeout(() => feedback.remove(), 300);
  }, 2000);
}

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

// Word Type Dropdown Functions

function populateWordTypeDropdown() {
  let dropdown = document.getElementById("wordTypeDropdown");
  if (!dropdown) return;

  if (selectedCategories.length === 0) {
    dropdown.innerHTML = `<div class="wt-empty">${t("noCategoriesSelected") || "No categories selected"}</div>`;
    return;
  }

  dropdown.innerHTML = selectedCategories
    .map((cat) => `<div class="wt-item"><i class="fa-solid fa-check"></i> ${cat}</div>`)
    .join("");
}

// Toggle Word Type Dropdown
document.addEventListener("click", (e) => {
  let wordType = document.querySelector(".word-type");
  let dropdown = document.getElementById("wordTypeDropdown");

  if (!wordType || !dropdown) return;

  if (wordType.contains(e.target)) {
    wordType.classList.toggle("open");
  } else {
    wordType.classList.remove("open");
  }
});

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-
// Game Over Popup
//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-
function showCorrectWords() {
  let correctWords = [...document.querySelectorAll(".correct-word-span")];
  let div = document.createElement("div");

  div.className = "popup words-popup";
  div.innerHTML = `
    <h1 class="popup-header">${t("yourWords")}</h1>
    <div class="popup-words small-words">
      <b>${t("colNum")}</b>
      <b>${t("colWord")}</b>
      <b>${t("colCat")}</b>
    </div>
  `;

  if (correctWords.length === 0) {
    let emptyMessage = document.createElement("p");
    emptyMessage.className = "popup-words";
    emptyMessage.textContent = t("noWordsYet");
    div.appendChild(emptyMessage);
  } else {
    correctWords.forEach((word, index) => {
      let row = document.createElement("div");
      row.className = "popup-words list-row";

      let number = document.createElement("span");
      number.className = "row-num";
      number.textContent = index + 1;

      let wordName = document.createElement("span");
      wordName.className = "row-word";
      wordName.textContent = word.textContent;

      let category = document.createElement("span");
      category.className = "row-cat";
      category.textContent = t("cat_" + wordTypeArray[index]);

      row.append(number, wordName, category);
      div.append(row);
    });
  }

  addCloseIcon(div, () => div.remove());
  document.body.appendChild(div);
}

function gameOverPopup() {
  disebleContainerEvents();

  let div = document.createElement("div");

  div.classList.add("popup");

  div.innerHTML = `
  <i class="fa-solid fa-skull popup-icon c-danger"></i>

  <h1 class="popup-header"> ${t("gameOver")} </h1>

  <div class="popup-word-reveal">
    <span class="reveal-label">${t("theWordWas")}</span>
    <span class="reveal-word">${randomGuessWord}</span>
    <span class="reveal-cat"
      ><i class="fa-solid fa-tag"></i> ${t(
        "cat_" + objectKeys[randomPropOfObject]
      )}</span
    >
  </div>

  <div class="popup-actions">
    <button id="correct-words-btn" class="popup-btn ghost">
      ${t("correctWordsBtn")}
    </button>
    <button id="play-again-btn" class="popup-btn solid">
      ${t("playAgain")}
    </button>
  </div>

  <p class="popup-words popup-thanks">${t("thanksPre")}
    <span class="popup-spans">${
      inputName.value === "" ? '" "' : inputName.value
    }</span></p>
  `;

  document.body.appendChild(div);

  document
    .getElementById("correct-words-btn")
    .addEventListener("click", showCorrectWords);

  document.getElementById("play-again-btn").addEventListener("click", () => {
    // Remove the game over popup
    document.querySelectorAll(".popup").forEach((p) => p.remove());
    document.querySelector(".container").style.opacity = "";
    if (savedGameConfig) {
      startGame(savedGameConfig);
    } else {
      window.location.reload();
    }
  });

  document.getElementsByClassName("container")[0].style.opacity = 0.2;
}

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-
// Update Difficulty Badge
//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-
function updateDifficultyBadge() {
  let badge = document.getElementById("difficulty-badge");
  if (!badge) return;

  let label = "";
  switch (gameDifficulty) {
    case "easy":
      label = t("difficultyEasy");
      badge.style.background = "var(--success-color)";
      break;
    case "medium":
      label = t("difficultyMedium");
      badge.style.background = "var(--blue-color)";
      break;
    case "high":
      label = t("difficultyHigh");
      badge.style.background = "var(--danger-color)";
      break;
  }
  badge.textContent = label;
  badge.style.display = "inline-flex";
}
