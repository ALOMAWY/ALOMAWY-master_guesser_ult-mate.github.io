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

words.programming_Language = [
  { word: "Objective-C", hints: bilingualHints(["I dominated iOS apps for years, heavy on square brackets [ ]!", "A hybrid beast combining C's speed with Smalltalk's objects."], ["سيطرتُ على تطبيقات iOS لسنوات، مع كثرة الأقواس المربعة [ ]!", "وحش هجين يجمع بين سرعة C وكائنية Smalltalk."]) },
  { word: "TypeScript", hints: bilingualHints(["JavaScript's strict big brother who hates runtime errors.", "I bring static types to the wild west of web scripts."], ["أخو JavaScript الصارم الذي يكره أخطاء وقت التشغيل.", "أفرض الأنواع الثابتة على عالم سكريبتات الويب الفوضوي."]) },
  { word: "Dart", hints: bilingualHints(["Flutter's soulmate, built by Google to target every screen.", "A language crafted to shoot straight into multi-platform apps."], ["توأم روح Flutter، طوّرتني Google لاستهداف كل الشاشات.", "لغة صُممت لترمي هدفها مباشرة نحو تطبيقات متعددة المنصات."]) },
  { word: "Ruby", hints: bilingualHints(["Gem of a language, written to make developers happy.", "Rails made me famous for building web apps in record time."], ["جوهرة اللغات، كُتبت لجعل المطورين سعداء.", "إطار عمل Rails جعلني شهيرة لبناء تطبيقات الويب في وقت قياسي."]) },
  { word: "Rust", hints: bilingualHints(["Borrow checker is my strict bouncer; memory safety is my game.", "I deliver C++ speed without the random memory crashes."], ["فاحص الاستعارة هو حارسي الصارم، وأمان الذاكرة لعبتي.", "أقدم سرعة C++ دون انهيارات الذاكرة العشوائية."]) },
  { word: "Go", hints: bilingualHints(["Google's minimalist, concurrency-loving mascot is a gopher.", "Two letters, ultra-fast compilation, built for backend power."], ["حيواني الجرذ الميمون يحب البساطة والتزامن من Google.", "حرفان فقط، وتجميع خارق السرعة، بُنيت لقوة الخوادم."]) },
  { word: "Kotlin", hints: bilingualHints(["Android's favorite language, killing NullPointerExceptions step by step.", "I run on the JVM, making Java code look ancient."], ["لغة Android المفضل، وأقضي على أخطاء المؤشر الفارغ تدريجياً.", "أعمل على JVM وأجعل كود Java يبدو قديماً."]) },
  { word: "Swift", hints: bilingualHints(["Fast by name, modern by design, replacing Objective-C on Apple devices.", "Apple's shiny toy for writing clean iOS code."], ["سريعة باسمها، حديثة بتصميمها، وبديلة Objective-C على أجهزة Apple.", "لعبة Apple البراقة لكتابة كود iOS نظيف."]) },
  { word: "Java", hints: bilingualHints(["Write once, run anywhere... assuming you installed the JVM!", "Coffee cup logo, heavily object-oriented, powers enterprise servers."], ["اكتب مرة واحدة، وشغّل في أي مكان... بشرط تثبيت JVM!", "شعار فنجان قهوة، كائنية التوجه بشدة، وتدير خوادم الشركات."]) },
  { word: "C", hints: bilingualHints(["The god-mother of modern programming—manual memory, pure speed.", "No classes, no garbage collector, just raw pointers and danger."], ["أم لغات البرمجة الحديثة—إدارة ذاكرة يدوية وسرعة مطلقة.", "لا فئات، لا جامع قمامة، فقط مؤشرات مباشرة ومغامرة."]) },
  { word: "C++", hints: bilingualHints(["C with classes, power, and enough complexity to confuse experts.", "Game engines love my extreme performance and control."], ["C مع فئات، وقوة، وتعقيد يكفي وإرباك الخبراء.", "تعشقني محركات الألعاب لأدائي العالي والتحكم الفائق."]) },
  { word: "C#", hints: bilingualHints(["Microsoft's child, loved by Unity game developers worldwide.", "Sounds like a musical note, but runs heavy .NET systems."], ["طفل Microsoft المدلل، ومحبوب مطوري ألعاب Unity حول العالم.", "تبدو كعلامة موسيقية، لكنها تدير أنظمة .NET الضخمة."]) },
  { word: "SQL", hints: bilingualHints(["SELECT * FROM answers WHERE knowledge = 'Database queries'.", "The universal language for talking to relational tables."], ["اختر جميع الإجابات حيث المعرفة تساوي استعلامات قواعد البيانات.", "اللغة العالمية للتحدث مع الجداول العلائقية."]) },
  { word: "Python", hints: bilingualHints(["I love indentation, hate curly braces, and rule the AI world.", "Named after a comedy circus, but coders take me very seriously."], ["أعشق المسافات البادئة، وأكره الأقواس المزخرفة، وأحكم عالم الذكاء الاصطناعي.", "سُمّيت على اسم فرقة كوميدية، لكن المبرمجين يأخذونني بجدية تامة."]) },
  { word: "PHP", hints: bilingualHints(["The elephant in the room powering over 70% of web backends.", "WordPress made me immortal, love me or hate me!"], ["الفيل الصامد الذي يشغل أكثر من 70% من خوادم الويب.", "WordPress جعلني خالدة، سواء أحببتني أم كرهتني!"]) },
  { word: "JavaScript", hints: bilingualHints(["Created in 10 days, now running on every browser on Earth.", "I make web pages dynamic, interactive, and sometimes unpredictable."], ["بُنيت في 10 أيام، وأعمل الآن على كل متصفح في كوكب الأرض.", "أجعل صفحات الويب تفاعلية، وأحياناً غير متوقعة."]) },
  { word: "CSS", hints: bilingualHints(["Centered a div? Congratulations, you mastered me!", "I turn plain HTML skeletons into beautiful visual designs."], ["هل قمت بتوسيط العنصر؟ تهانينا، لقد أتقنتني!", "أحول هياكل HTML الجافة إلى تصاميم بصرية جذابة."]) },
  { word: "HTML", hints: bilingualHints(["Not a programming language! Just the skeletal bones of every web page.", "I open with <html> and end with </html>."], ["لستُ لغة برمجة! أنا فقط العظام الهيكلية لكل صفحة ويب.", "أبدأ بـ <html> وأختم بـ </html>."]) },
];

words.Popular_Brands = [
  { word: "Starbucks", hints: bilingualHints(["Siren logo selling overpriced caffeine in green cups.", "Where people spend $7 to write code or read on laptops."], ["شعار الحورية الشاطئة الذي يبيع الكافيين في أكواب خضراء.", "حيث يدفع الناس ثروة صغيرة للجلوس والعمل على حواسيبهم."]) },
  { word: "Nestle", hints: bilingualHints(["Swiss food giant with a bird nest for its iconic icon.", "From KitKat to bottled water, they own half your pantry."], ["عملاق الأغذية السويسري بشعار عش الطيور الشهير.", "من كيت كات إلى المياه المعبأة، يملكون نصف خزانة طعامك."]) },
  { word: "McDonald's", hints: bilingualHints(["Golden Arches serving billions of burgers worldwide.", "Home of the Happy Meal and the notoriously broken ice cream machine."], ["الأقواس الذهبية التي تقدم المليارات من وجبات البرغر عالمياً.", "بيت الوجبة السعيدة وآلة الآيس كريم المعطلة دائماً."]) },
  { word: "Pizza Hut", hints: bilingualHints(["Famous red roof icon serving stuffed crust slices.", "Where family pizza night started in the 90s."], ["سقف أحمر شهير يقدم شرائح البيتزا بجبن الأطراف.", "حيث بدأت ليلة البيتزا العائلية التسعينات."]) },
  { word: "KFC", hints: bilingualHints(["Secret recipe of 11 herbs and spices by a white-suited Colonel.", "Finger Lickin' Good fried chicken in a bucket."], ["وصفة سرية من 11 عشبة وبهاراً مع كولونيل ببدلة بيضاء.", "دجاج مقلي في دلو يجعلك تلعق أصابعك للذة."]) },
  { word: "Lay's", hints: bilingualHints(["You buy a bag of air, but get free crispy potato chips inside!", "Bet you can't eat just one of these yellow bags."], ["تشتري كيساً من الهواء، وتحصل على رقائق بطاطس مقرمشة مجاناً بالداخل!", "أتحداك أن تأكل قطعة واحدة فقط من أكياسهم الصفراء."]) },
];

words.Arabic_Country = [
  { word: "Algeria", hints: bilingualHints(["Land of One and a Half Million Martyrs, largest in Africa.", "From Saharan dunes to Mediterranean coast, capital is Algiers."], ["بلد المليون والنصف مليون شهيد، والأكبر مساحةً في أفريقيا.", "من كثبان الصحراء إلى ساحل المتوسط، وعاصمتها الجزائر."]) },
  { word: "Bahrain", hints: bilingualHints(["Tiny Gulf kingdom connected to Saudi Arabia by a giant bridge.", "Pearl of the Gulf with Manama as its heart."], ["مملكة خليجية صغيرة ترتبط بالسعودية عبر جسر ضخم.", "لؤلؤة الخليج وعاصمتها المنامة."]) },
  { word: "Kuwait", hints: bilingualHints(["Home of the world's highest valued currency unit.", "Recognizable by its iconic trio of slender water towers."], ["وطن أعلى عملة نقدية قيمةً في العالم.", "تشتهر بأبراج المياه الثلاثة الرفيعة والمميزة."]) },
  { word: "Egypt", hints: bilingualHints(["Um al-Dunya, where the Nile waters ancient Pharaoh secrets.", "Home to Cairo, pyramids, and a famously witty accent."], ["أم الدنيا، حيث يروي النيل أسرار الفراعنة القدماء.", "موطن القاهرة، الأهرامات، واللهمجة المليئة بالفكاهة."]) },
  { word: "Iraq", hints: bilingualHints(["Cradle of civilization between the Tigris and Euphrates.", "Land of Mesopotamia, ancient Babylon, and palm trees."], ["مهد الحضارات القائم بين دجلة والفرات.", "أرض بلاد الرافدين، بابل القديمة، والنخيل."]) },
  { word: "Jordan", hints: bilingualHints(["Rosy red sandstone city of Petra cut into cliffs.", "Where you float effortlessly in the Dead Sea."], ["مدينة البتراء وردية الصخور المنحوتة في الجبال.", "حيث تطفو فوق مياه البحر الميت دون أي جهد."]) },
  { word: "Lebanon", hints: bilingualHints(["Cedar tree flag, mountain slopes, and Beirut nightlife.", "Paris of the Middle East, famous for cuisine and culture."], ["علم شجرة الأرز، قمم الجبال، وحياة بيروت الصاخبة.", "باريس الشرق الأوسط، الشهيرة بجمال ثقافة طعامها."]) },
  { word: "Libya", hints: bilingualHints(["Land of Omar Mukhtar, with immense desert oil reserves.", "Extensive North African coast facing Italy across the sea."], ["أرض عمر المختار، واحتياطيات النفط الصحراوية الضخمة.", "ساحل شمال أفريقي طويل يواجه إيطاليا عبر البحر."]) },
  { word: "Morocco", hints: bilingualHints(["Land of Tagine, Atlas mountains, and green mint tea.", "Marrakech red, Casablanca coast, and Rabat capital."], ["أرض الطاجين، جبال الأطلس، وأتاي النعناع الأخضر.", "حمرة مراكش، ساحل الدار البيضاء، والرباط العاصمة."]) },
  { word: "Oman", hints: bilingualHints(["Frankincense, quiet majesty, and traditional dhows in Muscat.", "Sultanate known for hospitable culture and pristine fjords."], ["أرض اللبان، والهدوء الملكي، والسفن التقليدية في مسقط.", "سلطنة تشتهر بضيافتها وأخوارها البحرية النقية."]) },
  { word: "Palestine", hints: bilingualHints(["Land of Olives, dome of the rock, and unwavering resilience.", "Jerusalem stands at the heart of its history."], ["أرض الزيتون، قبة الصخرة، والصمود الذي لا يلين.", "القدس تقف في قلب تاريخها وهيئتها."]) },
  { word: "Qatar", hints: bilingualHints(["Host of the historic 2022 FIFA World Cup.", "Doha skyline meets Arabian desert dunes."], ["مستضيفة كأس العالم التاريخية لعام 2022.", "ناطحات سحاب الدوحة تلتئم مع كثبان الصحراء."]) },
  { word: "Saudi Arabia", hints: bilingualHints(["Heart of the Islamic world housing Mecca and Medina.", "Kingdom undergoing massive Green and Vision 2030 transformations."], ["قلب العالم الإسلامي والحاضنة لمكة المكرمة والمدينة المنورة.", "مملكة تشهد تحولات ضخمة ورؤية متطورة 2030."]) },
  { word: "Sudan", hints: bilingualHints(["Where White and Blue Niles unite in Khartoum.", "Home to more pyramids than Egypt, located in Meroe."], ["حيث يلتقي النيلان الأبيض والأزرق في الخرطوم.", "تضم أهرامات أكثر من مصر، وتحديداً في مروي."]) },
  { word: "United Arab Emirates", hints: bilingualHints(["Seven emirates housing the tallest tower on Earth.", "Burj Khalifa, futuristic innovation, and Abu Dhabi capital."], ["سبع إمارات تحتضن أطول برج على وجه الأرض.", "برج خليفة، والابتكار المستقبلي، وأبوظبي العاصمة."]) },
  { word: "Tunisia", hints: bilingualHints(["Green Tunisia, ancient Carthage, and Mediterranean olive groves.", "Where the Arab Spring was born in 2011."], ["تونس الخضراء، قرطاج القديمة، وبساتين الزيتون المتوسطية.", "مهد مهد الثورات العربية عام 2011."]) },
  { word: "Yemen", hints: bilingualHints(["Happy Arabia, famous for Mocha coffee and ancient Sana'a architecture.", "Southern tip of the peninsula rich in ancient history."], ["العرب السعيد، الشهير بقهوة المخا وعمارة صنعاء القديمة.", "الطرف الجنوبي للجزيرة العربية المليء بالتاريخ."]) },
  { word: "Somalia", hints: bilingualHints(["Horn of Africa with the longest coastline on the mainland.", "Mogadishu capital, rich poetry traditions, and ocean views."], ["قرن أفريقيا بأطول ساحل على اليابسة الأفريقية.", "عاصمتها مقديشو، وتشتهر بثقافة الشعر وعشق المحيط."]) },
  { word: "Syria", hints: bilingualHints(["Home of Damascus, the oldest continuously inhabited capital.", "Jasmine flowers, ancient Palmyra, and rich historic culture."], ["موطن دمشق، أقدم عاصمة مأهولة بالسكان في العالم.", "زهر الياسمين، تدمر الأثرية، والثقافة التاريخية العريقة."]) },
];

words.Video_Games = [
  { word: "GTA V", hints: bilingualHints(["Three protagonists, Los Santos heist missions, and endless online madness.", "Rockstar's cash cow that spans three console generations."], ["ثلاثة أبطال، سرقات في لوس سانتوس، وجنون أونلاين لا ينتهي.", "بقرة Rockstar الحلوب التي عاشت عبر ثلاثة أجيال أجهزة."]) },
  { word: "GTA IV", hints: bilingualHints(["Hey cousin, want to go bowling? set in Liberty City.", "Niko Bellic chasing the dark American Dream."], ["مرحباً يا ابن عمي، هل نذهب للعب البولينج؟ في ليبيرتي سيتي.", "نيكو بيلك يطارد الحلم الأمريكي المظلم."]) },
  { word: "GTA San Andreas", hints: bilingualHints(["Ah shit, here we go again with CJ in Grove Street.", "Follow the damn train, jetpacks, and 90s West Coast vibes."], ["تباً، هأنذا أعود مجدداً مع CJ في شارع غروف.", "اتبع القطار اللعين، نفاثات الطيران، وأجواء التسعينات."]) },
  { word: "GTA Vice City", hints: bilingualHints(["1980s neon lights, Hawaiian shirts, and Tommy Vercetti.", "Synthwave music, palm trees, and ocean drive style."], ["أضواء النيون في الثمانينات، قمصان هاواي، وتومي فيرسيتي.", "موسيقى السينثوايف، النخيل، وطرقات الميامي الساحلية."]) },
  { word: "Counter-Strike: Global Offensive", hints: bilingualHints(["Rush B my friend! Bomb has been planted.", "Dragon Lore skins, competitive ranks, and AWP snipers."], ["اسرع إلى B يا صديقي! تم زرع القنبلة.", "سكنات دراجون لور، الرتب التنافسية، وقناصات AWP."]) },
  { word: "Overwatch 2", hints: bilingualHints(["Hero shooter that replaced its predecessor, now 5v5.", "Blizzard's team game with payloads, ultimate voice lines, and shields."], ["لعبة أبطال حلت محل الجزء الأول وصارت 5 ضد 5.", "لعبة فريق من Blizzard مع حمولات، ونداءات القاضية، والدروع."]) },
  { word: "Dota 2", hints: bilingualHints(["The International prize pool worth tens of millions.", "Valve's complex MOBA where defense of the Ancients is everything."], ["بطولة العالم ذات الجوائز التي تقدر بعشرات الملايين.", "لعبة MOBA معقدة من Valve حيث حماية المبنى الرئيسي هي كل شيء."]) },
  { word: "Counter-Strike 1.6", hints: bilingualHints(["Internet cafe golden era: de_dust2 and green crosshairs.", "The legendary LAN party shooter that started it all."], ["العصر الذهبي لمقاهي الإنترنت: خريطة de_dust2 والمؤشر الأخضر.", "لعبة شبكات LAN الأسطورية التي أطلقت كل شيء."]) },
  { word: "Counter-Strike 2", hints: bilingualHints(["Volumetric smoke grenades and Source 2 engine upgrades.", "The direct modern evolution replacing CS:GO."], ["قنابل دخانية واقعية مع تحديثات محرك Source 2.", "التطور الحديث المباشر الذي حل محل CS:GO."]) },
  { word: "PUBG Mobile", hints: bilingualHints(["Winner Winner Chicken Dinner on your phone screen.", "100 players parachute into Erangel, looting for level 3 helmets."], ["عشاء دجاج للفائز على شاشة هاتفك.", "100 لاعب يهبطون بالمظلات في إرانغل بحثاً عن خوذة المستوى 3."]) },
  { word: "Rocket League", hints: bilingualHints(["Rocket-powered cars playing soccer with a giant ball.", "Aerial boosts, wall rides, and epic goal explosions."], ["سيارات بنفاثات صاروخية تلعب كرة القدم بكرة ضخمة.", "اندفاعات هوائية، قيادة على الجدران، وانفجارات أهداف ملحمية."]) },
  { word: "Fortnite", hints: bilingualHints(["Crank 90s, drop from the battle bus, and dance like crazy.", "Building walls while getting shot at, featuring every pop-culture character."], ["بناء سريع، هبوط من حافلة المعركة، ورقصات مجنونة.", "تبني جدراناً أثناء إطلاق النار عليك، وبشخصيات من كل ثقافة."]) },
  { word: "PUBG: Battlegrounds", hints: bilingualHints(["The original battle royale that started the parachuting craze on PC.", "Frying pans as melee armor and realistic bullet drop."], ["لعبة الباتل رويال الأصلية التي أطلقت هوس المظلات على الحاسوب.", "مقلاة المطبخ كدرع حماية وفيزياء رصاص واقعية."]) },
  { word: "eFootball PES 2020", hints: bilingualHints(["Konami's football simulator right before the rebrand.", "Master League modes, tactical football, and licensed team rivalries."], ["محاكي كرة القدم من Konami قبل تغيير الاسم التجاري.", "طور طور الماستر ليغ، التكتيكات الكروية، وصراع الأندية."]) },
  { word: "The Legend of Zelda", hints: bilingualHints(["Link saves the princess, but everyone calls HIM by her name!", "Exploring Hyrule, Master Sword, and Triforce legends."], ["لينك ينقذ الأميرة، لكن الجميع ينادونه باسمها هي!", "استكشاف هايرول، السيف الأسطوري، وأسطورة الترايفورس."]) },
  { word: "Apex Legends", hints: bilingualHints(["Slide-hopping battle royale set in the Titanfall universe.", "Ping system revolutionizer with unique agent ultimate abilities."], ["باتل رويال مع انزلاقات سريعة في عالم Titanfall.", "ثورة نظام الإشارات الإرشادية مع قدرات أبطال خارقة."]) },
  { word: "Cyberpunk 2077", hints: bilingualHints(["Wake up Samurai, we have a city to burn with Keanu Reeves.", "Night City cyberware, corporate greed, and futuristic hacking."], ["استيقظ يا ساموراي، لدينا مدينة لنحرقها مع كيانو ريفز.", "تعديلات سيبرانية في نايت سيتي، جشع الشركات، والتهكير المستقبلي."]) },
  { word: "The Witcher 3", hints: bilingualHints(["Tossing a coin to your witcher while playing Gwent for hours.", "Geralt hunting monsters and searching for Ciri."], ["دفع قطعة نقدية للمشعوذ أثناء لعب الجوينت لعدة ساعات.", "جيرالت يصطاد الوحوش ويبحث عن سيري."]) },
  { word: "FIFA 22", hints: bilingualHints(["HyperMotion technology football game before losing the official FIFA name.", "Ultimate Team packs, FUT Champions, and rage-quits."], ["لعبة كرة قدم بتقنية HyperMotion قبل فقدان اسم FIFA الرسمي.", "حزم أولتيميت تيم، طور FUT، والانسحاب بسبب الغضب."]) },
  { word: "Among Us", hints: bilingualHints(["Red is sus! Emergency meeting called in the spaceship.", "Crewmates doing tasks while Impostors sabotage vents."], ["الأحمر مشكوك فيه! اجتماع طارئ في المركبة الفضائية.", "أفراد الطاقم يؤدون المهام بينما المحتال يتعمد التخريب."]) },
  { word: "Genshin Impact", hints: bilingualHints(["Anime gacha RPG exploring the seven elements of Teyvat.", "Paimon is emergency food, wishing for 5-star characters."], ["لعبة غاتشا أنمي تجمع العناصر السبعة في عالم تيفات.", "بايمون هي طعام طوارئ، والدعاء للحصول على شخصيات 5 نجوم."]) },
  { word: "Call of Duty: Warzone", hints: bilingualHints(["Gulag 1v1 fights to earn your respawn back.", "Verdansk contract drops, armor plates, and loadout drops."], ["قتال 1 ضد 1 في الغولاغ لإعادة إحيائك إلى اللعبة.", "عقود فردانسك، صفائح الدروع، وصناديق العتاد."]) },
  { word: "Red Dead Redemption 2", hints: bilingualHints(["Cowboy masterpiece following Arthur Morgan's emotional journey.", "Outlaws, horse bonding, and wild west gang life."], ["تحفة رعاة البقر التي تتبع رحلة آرثر مورغان العاطفية.", "خارجون عن القانون، ترابط مع الخيول، وحياة العصابات."]) },
  { word: "Minecraft", hints: bilingualHints(["Punching trees to craft your first wooden pickaxe.", "Creeper hiss sounds, diamond mining, and building blocky worlds."], ["لكم الأشجار لصنع أول معول خشبي.", "صوت فحيح الكريبر، تنقيب الألماس، وبناء عوالم المكعبات."]) },
  { word: "Assassin's Creed Mirage", hints: bilingualHints(["Basim leaping through rooftops in 9th-century Baghdad.", "A return to roots with hidden blades and stealth assassinations."], ["باسم يتقافز بين أسطح المنازل في بغداد خلال القرن التاسع.", "عودة للجذور مع الشفرات الخفية والاغتيالات الهادئة."]) },
  { word: "Valorant", hints: bilingualHints(["Tactical 5v5 shooter with spike plants, flashbangs, and radiant ranks.", "Precise gunplay where headshots mean instant elimination."], ["لعبة تصويب تكتيكية 5 ضد 5 مع زرع السبايك والقدرات.", "إطلاق نار دقيق حيث الضربة في الرأس تعني الإقصاء الفوري."]) },
];

words.phones = [
  { word: "Nokia", hints: bilingualHints(["Famous for the indestructible 3310 and the connecting hands intro.", "The Finnish giant that used to own the entire mobile market."], ["شهيرة بهاتف 3310 الذي لا ينكسر ونغمة الأيادي المتقاربة.", "العملاق الفنلندي الذي كان يمتلك سوق الهواتف بالكامل."]) },
  { word: "Samsung", hints: bilingualHints(["South Korean titan selling foldable Z Flips and Galaxy Ultra zoom.", "Curved AMOLED displays and Stylus Pens in your pocket."], ["العملاق الكوري الجنوبي الذي يبيع الهواتف القابلة للطي و أجهزة الغالاكسي.", "شاشات AMOLED منحنية وأقلام ذكية في جيبك."]) },
  { word: "iPhone", hints: bilingualHints(["Steve Jobs introduced it in 2007 without a physical keyboard.", "Bitten apple logo, dynamic island, and high resale value."], ["قدمه ستيف جوبز عام 2007 بدون لوحة مفاتيح حقيقية.", "شعار التفاحة المعضوضة، الجزيرة التفاعلية، والسعر المرتفع."]) },
  { word: "HTC", hints: bilingualHints(["Early Android pioneer famous for the full-metal One M8 design.", "First brand to release a commercially available Android phone."], ["رائد Android الأول الذي اشتهر بتصميم One M8 المعدني الكامل.", "أول علامة تطلق هاتف Android تجاري في السوق."]) },
  { word: "Redmi", hints: bilingualHints(["Xiaomi's budget powerhouse offering crazy specs for cheap prices.", "The undisputed champion of value-for-money smartphones."], ["سلسلة Xiaomi الاقتصادية التي تقدم مواصفات قوية بسعر رخيص.", "البطل بلا منازع للهواتف ذات القيمة مقابل السعر."]) },
  { word: "Nothing", hints: bilingualHints(["Transparent back covers with glowing Glyph LED light patterns.", "Carl Pei's minimalist startup reinventing modern phone aesthetics."], ["غطاء خلفي شفاف مع أشرطة إضاءة LED تفاعلية.", "شركة كارل باي المبسطة التي تعيد تعريف جماليات الهواتف."]) },
  { word: "Huawei", hints: bilingualHints(["Leica camera partnerships, HarmonyOS, and US ban struggles.", "Chinese telecommunications king known for incredible night photography."], ["شراكات كاميرات لايكا، نظام HarmonyOS، وصمود بوجه العقوبات.", "ملك الاتصالات الصيني الشهير بالتصوير الليلي الخارق."]) },
  { word: "Honor", hints: bilingualHints(["Spun off from Huawei to bring back Google Play Services.", "Sleek magic designs targeting younger tech enthusiasts."], ["انفصلت عن Huawei لتعيد خدمات Google Play لهواتفها.", "تصاميم ساحرة وأنيقة تستهدف عشاق التقنية الشباب."]) },
  { word: "BlackBerry", hints: bilingualHints(["QWERTY physical keyboards and BBM PIN codes in the business era.", "The ultimate business phone before touchscreen slates took over."], ["لوحات مفاتيح QWERTY حقيقية ورمز BBM في عصر الأعمال.", "هاتف رجال الأعمال الأول قبل انقراض الأزرار لصالح الشاشات."]) },
  { word: "Pixel", hints: bilingualHints(["Google's flagship phone with pure Android and magical camera AI.", "Unblur photos, magic eraser, and immediate stock updates."], ["هاتف Google الرائد بنظام Android خام وكاميرا ذكية ساحرة.", "إزالة العناصر من الصور، ومحو العيوب، وتحديثات سريعة."]) },
  { word: "OnePlus", hints: bilingualHints(["Never Settle motto, launching as the original Flagship Killer.", "Warp charging speeds and smooth OxygenOS UI."], ["شعار Never Settle، والانطلاقة كقائل الهواتف الرائدة.", "سرعات شحن خارقة وواجهة سلسة للغاية."]) },
  { word: "Sony Xperia", hints: bilingualHints(["21:9 cinema aspect ratios, dedicated shutter button, and Bravia tech.", "Made for pro photographers with manual Alpha camera controls."], ["أبعاد شاشة سينمائية 21:9، زر تصوير مستقل، وتقنيات برافيا.", "صُنِع للمصورين المحترفين للتحكم اليدوي الكامل."]) },
  { word: "LG", hints: bilingualHints(["Innovators of dual screens, curved G Flex, and rear buttons.", "South Korean pioneer that exited the smartphone market in 2021."], ["مبتكرو الشاشات المزدوجة، والشاشات المنحنية، والأزرار الخلفية.", "العملاق الكوري الذي غادر سوق الهواتف الذكية في 2021."]) },
  { word: "Xiaomi", hints: bilingualHints(["From Mi Band wearables to fast-charging smartphones and smart home tech.", "Massive ecosystem known for high specs at aggressive pricing."], ["من أساور Mi Band إلى الهواتف ذات الشحن الخارق والمنزل الذكي.", "منظومة ضخمة تشتهر بمواصفات عالية وأسعار منافسة."]) },
  { word: "Motorola", hints: bilingualHints(["Hello Moto! Iconic Razr flip phone nostalgia.", "One of the oldest telecom pioneers, now famous for modern foldables."], ["مرحباً موتو! حنين هاتف Razr القابل للطي القديم.", "أحد أقدم رواد الاتصالات، وتشتهر حالياً بهواتفها القابلة للطي."]) },
  { word: "Vivo", hints: bilingualHints(["Pioneered under-display fingerprint scanners and gimbal camera stabilization.", "Selfie-focused brand under the BBK Electronics umbrella."], ["ابتكرت بصمة الشاشة الأولى وتثبيت الكاميرا الميكانيكي.", "علامة تركز على صور السيلفي وتتبع مجموعة BBK."]) },
  { word: "Realme", hints: bilingualHints(["Fast-growing spin-off targeting youth with stylish budget phones.", "Dart charging, bold designs, and entry-level gaming devices."], ["علامة سريعة النمو تستهدف الشباب بهواتف أنيقة واقتصادية.", "تقنيات شحن سريعة، تصاميم جريئة، وأجهزة ألعاب اقتصادية."]) },
  { word: "OPPO", hints: bilingualHints(["VOOC flash charging pioneers with sleek camera designs.", "Four letter brand starting and ending with O under BBK."], ["رواد الشحن السريع VOOC وتصاميم الكاميرات الأنيقة.", "علامة من أربعة أحرف تبدأ وتختم بحرف O."]) },
  { word: "ROG Phone", hints: bilingualHints(["ASUS Republic of Gamers beast with air triggers and RGB lighting.", "Overclocked specs built purely to dominate mobile esports."], ["وحش ASUS المخصص للألعاب مع أزرار لمسية وإضاءة RGB.", "مواصفات فائقة صُممت خصيصاً للسيطرة على بطولات الهواتف."]) },
  { word: "Infinix", hints: bilingualHints(["Budget battery monsters popular in emerging markets.", "Huge screens and large mAh batteries for minimal cost."], ["وحوش البطاريات الاقتصادية الشائعة في الأسواق الناشئة.", "شاشات ضخمة وبطاريات هائلة بأقل تكلفة ممكنة."]) },
  { word: "Sony Ericsson", hints: bilingualHints(["Classic partnership that gave us Walkman music phones.", "Cyber-shot mobile camera legendary models from the 2000s."], ["الشراكة الكلاسيكية التي قدمت لنا هواتف Walkman الموسيقية.", "سلسلة كاميرات Cyber-shot الأسطورية في الأجهزة القديمة."]) },
  { word: "Alcatel", hints: bilingualHints(["French telecommunications classic from the early GSM button phone days.", "Known today for budget entry-level feature devices."], ["العلامة الفرنسية الكلاسيكية من أيام الهواتف ذات الأزرار الأولى.", "تُعرف اليوم بتقديم هواتف بسيطة جداً منخفضة التكلفة."]) },
];

words.fruits = [
  { word: "watermelon", hints: bilingualHints(["Green shell on the outside, red juice on the inside, 92% water.", "The ultimate summer picnic refreshing giant."], ["قشرة خضراء من الخارج، ولب أحمر مليء بالعصير، 92% منه ماء.", "الفاكهة المنعشة الأكبر للرحلات الصيفية."]) },
  { word: "tangerine", hints: bilingualHints(["Orange's smaller, zip-peel relative perfect for lunchboxes.", "Citrus pockets easily pulled apart into sweet wedges."], ["قريب البرتقال الأصغر والسهل التقشير والمناسب للوجبات.", "قطع حمضية صغيرة تفصل بسهولة إلى أجزاء حلوة."]) },
  { word: "strawberry", hints: bilingualHints(["The only fruit with its tiny seeds wearing on the outside skin.", "Red heart-shaped berry dipped in chocolate on Valentine's."], ["الفاكهة الوحيدة التي ترتدي بذورها الصغير على قشرتها الخارجية.", "ثمرة حمراء على شكل قلب تُغمس في الشوكولاتة."]) },
  { word: "raspberry", hints: bilingualHints(["Hollow red crown made of dozens of tiny sweet drupelets.", "Slightly tart ruby berry that sits on top of luxury cakes."], ["تاج أحمر مجوف يتكون من عشرات الحبيبات الصغير الحلوة.", "ثمرة ياقوتية حامضة قليلاً تزين قمم الكعكات الفاخرة."]) },
  { word: "quince", hints: bilingualHints(["Too hard to eat raw, turns fragrant rosy pink when stewed into jam.", "Ancient pear-shaped fruit known for its strong aromatic perfume."], ["قاسية جداً للأكل نيئة، وتتحول للون الوردي العطر عند طهيها مربى.", "فاكهة قديمة تشبه الكمثرى وتشتهر برائحتها العطرية القوية."]) },
  { word: "orange", hints: bilingualHints(["Vitamin C powerhouse whose name doubles as a primary color.", "Freshly squeezed breakfast juice classic."], ["مصدر غني بفيتامين C واسمها هو نفس اسم لون معروف.", "كوب العصير الطازج الكلاسيكي على مائدة الإفطار."]) },
  { word: "mango", hints: bilingualHints(["King of tropical fruits with juicy golden-yellow flesh.", "Sweet, fibrous, and sticky fruit with a large flat pit."], ["ملك الفواكه الاستوائية بلبه الذهبي الحلو والمنعش.", "فاكهة حلوة وأليافية تحتوي على نواة عريضة مسطحة."]) },
  { word: "lemon", hints: bilingualHints(["Sour yellow citrus that turns into a cold refreshing summer drink.", "If life gives you these, make a lemonade!"], ["حمضيات صفراء شديدة الحموضة تتحول لمشروب صيفي منعش.", "إذا أعطتك الحياة منها، اصنع منها مشروباً منعشاً!"]) },
  { word: "apple", hints: bilingualHints(["One a day keeps the doctor away! Fell on Newton's head.", "Red, green, or yellow crispy fruit with a core."], ["واحدة منها يومياً تبعدك عن الطبيب! سقطت على رأس نيوتن.", "فاكهة مقرمشة حمراء أو خضراء أو صفراء لها نواة وسطية."]) },
  { word: "banana", hints: bilingualHints(["Yellow curved fruit packed with potassium, loved by monkeys.", "Slippery peel trope in classic comedy cartoons."], ["فاكهة صفراء منحنية مليئة بالبوتاسيوم، يعشقها القردة.", "قشرتها المنسكبة سبب التزحلق الشهير في أفلام الكرتون."]) },
  { word: "cherry", hints: bilingualHints(["Twin red jewels hanging on stems, sitting atop ice cream sundaes.", "Small pitted fruit that marks the ultimate finishing touch."], ["جوهرتان حمراوان تدليان من غصن، وتزينان مثلجات الأيس كريم.", "فاكهة صغيرة بنواة تعبر عن اللمسة الأخيرة المثالية."]) },
  { word: "fig", hints: bilingualHints(["Soft chewy fruit with a sweet interior, mentioned in holy scriptures.", "Mediterranean delicacy eaten fresh or sun-dried."], ["فاكهة طرية ومقرمشة البذور حُلوة المذاق ورد ذكرها في القرآن.", "طعام متوسطي يُؤكل طازجاً أو مجففاً تحت الشمس."]) },
  { word: "grape", hints: bilingualHints(["Grows in tight hanging bunches, converted into raisins when dried.", "Small round spheres that come in green, red, or dark purple."], ["ينمو في عناقيد متراصة، ويتحول إلى زبيب عند تجفيفه.", "كريات صغيرة تأتي بالألوان الأخضر أو الأحمر أو البنفسجي."]) },
  { word: "kiwi", hints: bilingualHints(["Brown fuzzy jacket on the outside, vibrant green specs inside.", "Name shared with a flightless bird from New Zealand."], ["سترة بنية مزغبة من الخارج، ولب أخضر براق من الداخل.", "تتشارك اسمها مع طائر لا يطير في نيوزيلندا."]) },
];

words.soft_Drinks = [
  { word: "Iced Tea", hints: bilingualHints(["Brewed leaf drink chilled over ice with a splash of lemon.", "The ultimate non-carbonated summer cold refresher."], ["مشروب أوراق الشاي المغلي المبرد مع الثلج والليمون.", "المشروب البارد غير الغازي المنعش للنعيم الصيفي."]) },
  { word: "Lemonade", hints: bilingualHints(["Freshly squeezed sour citrus mixed with sugar and cold water.", "Classic driveway stand drink sold by kids in summer."], ["عصير حمضي حامض طازج مع السكر والماء البارد.", "المشروب الكلاسيكي المنعش الذي يبيعه الأطفال صيفاً."]) },
  { word: "7UP", hints: bilingualHints(["Clear lemon-lime soda with the iconic red dot mascot logo.", "Fido Dido mascot, caffeine-free green bottle drink."], ["مشروب غازي شفاف بنكهة الليمون واللايم مع نقطة حمراء.", "زجاجة خضراء خالية من الكافيين ارتبطت بشخصية فيدو فيدو."]) },
  { word: "Fanta", hints: bilingualHints(["Bright orange bubbly soda created during 1940s flavor shortages.", "Fruity fizzy drink that turns your tongue orange."], ["مشروب برتقالي فوار برز خلال نقص النكهات في الأربعينات.", "مشروب غازي بنكهات الفواكه يصبغ لسانك باللون البرتقالي."]) },
  { word: "Sprite", hints: bilingualHints(["Obey your thirst! Green bottle lemon-lime crisp carbonation.", "Clear soda that sparkles with instant bubbly citrus taste."], ["أطع عطشك! مشروب شفاف في زجاجة خضراء بنكهة الليمون.", "صودا شفافة تفور بطعم الحمضيات المنعشة."]) },
  { word: "Coca-Cola", hints: bilingualHints(["Secret formula soda served in contoured glass bottles.", "Red branding, Santa Claus holiday ads, and world dominance."], ["صودا بخلطة سرية تقدم في زجاجات مموجة الشهيرة.", "هوية حمراء، إعلانات بابا نويل، وسيطرة عالمية."]) },
  { word: "Pepsi", hints: bilingualHints(["Blue red white globe logo, rival of Coca-Cola in the cola wars.", "The choice of a new generation with famous football commercials."], ["شعار دائري بألوان الأزرق والأحمر والأبيض، غريم كوكاكولا.", "خيار الجيل الجديد مع إعلانات نجوم كرة القدم."]) },
];

words.Technology_Science = [
  { word: "Artificial Intelligence", hints: bilingualHints(["Neural networks learning to write code, generate art, and chat with you.", "The field driving ChatGPT, LLMs, and self-driving cars."], ["شبكات عصبية تتعلم كتابة الأكواد، وإنشاء الصور، والمحادثة.", "المجال الذي يحرك ChatGPT، الهواتف، والسيارات ذاتية القيادة."]) },
  { word: "Quantum Computer", hints: bilingualHints(["Uses qubits existing in superposition instead of plain 0s and 1s.", "Ultra-cold computing power that solves impossible calculations."], ["يستخدم البتات الكمومية المترابطة بدلاً من 0 و1 العادية.", "قوة حاسوبية شديدة البرودة تحل معادلات مستحيلة."]) },
  { word: "Solar Energy", hints: bilingualHints(["Harnessing photons from our local star into green electric power.", "Silicon panels on rooftops collecting clean sun rays."], ["تسخير فوتونات النجم الأقرب لنا لتحويلها إلى كهرباء نظيفة.", "ألواح سيليكون على الأسطح تمتص أشعة الشمس."]) },
  { word: "Internet", hints: bilingualHints(["A global web of interconnected routers sharing cat memes and data.", "The world wide network that powers every website today."], ["شبكة عالمية من الموجهات المترابطة لتداول البيانات والملفات.", "الشبكة العالمية التي تشغل جميع المواقع اليوم."]) },
  { word: "Volcano", hints: bilingualHints(["Earth's pressure valve erupting hot liquid magma and ash clouds.", "A mountain that blows its top with liquid fire."], ["صمام ضغط الأرض الذي ينفجر بحمم بركانية وسحب رماد.", "جبل يخرج النار السائلة والمغما من أعماقه."]) },
  { word: "Gravity", hints: bilingualHints(["The invisible space force keeping your feet planted on Earth.", "What made Newton's apple fall down instead of floating away."], ["القوة المرئية التي تبقي قدميك مثبتتين على الأرض.", "ما جعل تفاحة نيوتن تسقط للأسفل بدلاً من أن تطير."]) },
  { word: "DNA", hints: bilingualHints(["Double-helix ladder containing the master instruction blueprint of life.", "Four chemical bases (A, T, C, G) defining your biological traits."], ["سلم لولبي مزدوج يحتوي على الشفرة الوراثية الكاملة للحياة.", "أربعة قواعد كيميائية تحدد صفاتك البيولوجية."]) },
  { word: "Robot", hints: bilingualHints(["Programmable machine built to automate human labor and tasks.", "Metal limbs, sensors, and microchips walking among us."], ["آلة قابلة للبرمجة صُممت لأتمتة المهام والعمل البشري.", "أطراف معدنية، مستشعرات، وشرائح الكترونية تعمل بدقة."]) },
];

words.Animals = [
  { word: "Elephant", hints: bilingualHints(["Gentle giant with a versatile trunk and memories that never fade.", "Long ivory tusks, giant floppy ears, and massive stomping feet."], ["عملاق لطيف بخرطوم متعدد الاستخدامات وذاكرة لا تنسى أبداً.", "أنياب عاجية طويلة، آذان ضخمة، وأقدام ثقيلة."]) },
  { word: "Penguin", hints: bilingualHints(["Tuxedo-wearing bird that swapped flying for swimming in Antarctic ice.", "Waddling seabird that slides on its belly across ice sheets."], ["طائر يرتدي بدل زفاف رسمية مقايضاً الطيران بالسباحة.", "طائر يتمايل في مشيته وينزلق على بطنه فوق الثلج."]) },
  { word: "Dolphin", hints: bilingualHints(["Ocean gymnast that clicks, leaps, and uses echolocation to navigate.", "Highly intelligent marine mammal that loves riding ship waves."], ["لاعب جمباز المحيط الذي يصفر ويلقف باستخدام صدى الصوت.", "حيوان ثديي بحري شديد الذكاء يعشق مرافقة أمواج السفن."]) },
  { word: "Camel", hints: bilingualHints(["Ship of the desert storing fat in humps to survive weeks without water.", "Long eyelashes, tough lips for eating thorns, and desert power."], ["سفينة الصحراء التي تخزن الدهون في السنام لتتحمل العطش.", "رموش طويلة، وشفتان قويتان لأكل الشوك، وتحمل الحرارة."]) },
  { word: "Eagle", hints: bilingualHints(["Sky predator with razor-sharp talons and incredible zoom eyesight.", "National symbol of strength soaring high above mountain peaks."], ["جوارح السماء بمخالب حادة كالموس وبصر خارق التركيز.", "رمز وطني للقوة يحلق عالياً فوق قمم الجبال."]) },
  { word: "Giraffe", hints: bilingualHints(["Nature's skyscraper with a long neck and a long purple tongue.", "Patterned spotted coats grazing tree leaves high above ground."], ["ناطحة سحاب الطبيعة برقبة طويلة ولسان أرجواني طويل.", "جلد مبرقش بالبقع يرعى أوراق الأشجار العالية."]) },
];

words.Food = [
  { word: "Chocolate", hints: bilingualHints(["Sweet cacao block that releases dopamine and melts in your mouth.", "Dark, milk, or white bars that cure bad moods."], ["قالب كاكاو حلو يفرز الهرمونات السعيدة ويذوب في فمك.", "ألواح داكنة أو بالحليب تحسن المزاج فوراً."]) },
  { word: "Pasta", hints: bilingualHints(["Italian carb art coming in shapes like Penne, Spaghetti, and Farfalle.", "Boiled wheat dough smothered in marinara or Alfredo sauce."], ["فن النشويات الإيطالي بأشكال مثل البيني والسباغيتي.", "عجين قمح مسلوق مغرق بصلصة الطماطم أو الكريمة."]) },
  { word: "Pizza", hints: bilingualHints(["Flat baked dough wheel covered with melted mozzarella and toppings.", "Delivered in a square box, sliced into triangles, eaten round!"], ["قرص عجين مخبوز مكسو بجبن الموزاريلا والإضافات.", "تصل في صندوق مربع، وتقطع إلى مثلثات، وتؤكل دائرية!"]) },
  { word: "Honey", hints: bilingualHints(["Liquid gold made by bees that literally never spoils for thousands of years.", "Sweet nectar drizzled over pancakes or warm tea."], ["ذهب سائل يصنعه النحل لا يفسد مطلقاً حتى بعد آلاف السنين.", "رحيق حلو يُصب فوق الفطائر أو الشاي الدافئ."]) },
  { word: "Popcorn", hints: bilingualHints(["Exploding corn kernels turned into fluffy white movie snacks.", "Salty, buttered, or caramelized movie theater staple."], ["بذور ذرة تنفجر بالحرارة للتحول إلى رقائق بيضاء هشة.", "وجبة سينمائية خفيفة مملحة أو مدهونة بالزبدة."]) },
  { word: "Bread", hints: bilingualHints(["Flour, yeast, and water baked into the fundamental staple of humanity.", "The outer crust wrapper of every delicious sandwich."], ["دقيق وخميرة وماء مخبوزة ليشكل الغذاء الأساسي للبشرية.", "الغلاف الخارجي لكل شطيرة شهية."]) },
  { word: "Rice", hints: bilingualHints(["Small grains that feed over half of the human population daily.", "Steamed white or brown dish that accompanies every stew."], ["حبوب صغيرة تغذي أكثر من نصف سكان الأرض يومياً.", "طبق مطهو على البخار يرافق الأطباق الرئيسية."]) },
  { word: "Dates", hints: bilingualHints(["Sweet chewy palm fruit traditional for breaking Ramadan fasts.", "Nature's caramel candy growing on Middle Eastern trees."], ["ثمرة نخيل حلوة ومغذية يُفطر عليها تقليدياً في رمضان.", "حلوى الطبيعة الكاراميلية التي تنمو على أشجار النخيل."]) },
];

words.Geography_Landmarks = [
  { word: "Mountain", hints: bilingualHints(["Giant rocky landform reaching for the clouds, top is a summit.", "Everest is the ultimate towering example of this geology."], ["تضاريس صخرية عملاقة تطال السحاب، وأعلى نقطة فيها قمة.", "إيفرست هو المثال الأعلى ارتفاعاً لهذه الأوتاد الجيولوجية."]) },
  { word: "Desert", hints: bilingualHints(["Arid wasteland covered in sand dunes or ice with minimal rain.", "Sahara is the hottest famous vast example of this terrain."], ["أرض قاحلة تغطيها الكثبان الرملية وقلة الأمطار.", "الصحراء الكبرى هي أشهر وأوسع نموذج لهذه الطبيعة."]) },
  { word: "Island", hints: bilingualHints(["Land surrounded completely by water on all four sides.", "Tropical paradise isolated in the middle of oceans or lakes."], ["قطعة يابسة محاطة بالمياه بالكامل من كافة الجهات.", "جنة استوائية معزولة في منتصف المحيطات أو البحيرات."]) },
  { word: "Waterfall", hints: bilingualHints(["River plummeting dramatically over a steep cliff face.", "Niagara and Victoria fall with mist, roar, and rainbows."], ["نهر ينحدر بقوة متساقطاً من حافة صخرية حادة.", "نياجرا وفيكتوريا تسقطان برذاذ، وهدير، وأقواس قزح."]) },
  { word: "Pyramid", hints: bilingualHints(["Ancient stone tomb geometry with triangular faces pointing up.", "Giza's ancient structural wonders built by Pharaohs."], ["مقبرة صخرية قديمة بجوانب مثلثية تتلاقى في الأعلى.", "عجائب الجيزة المعمارية القديمة التي بناها الفراعنة."]) },
  { word: "Map", hints: bilingualHints(["Flat visual representation of terrain, borders, roads, and oceans.", "Google replaced paper versions of this navigation tool."], ["تمثيل بصري مسطح للتضاريس والحدود والطرق والمحيطات.", "استبدلت Google النسخ الورقية من أدوات الملاحة هذه."]) },
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
    statTime: "Total Time",
    statDifficulty: "Difficulty",
    statMistakes: "Mistakes",
    statProgress: "Progress",
    categoriesPlayed: "Categories Played",
    winSub: "Flawless run, ",
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
    statTime: "الوقت الكلي",
    statDifficulty: "الصعوبة",
    statMistakes: "الأخطاء",
    statProgress: "التقدم",
    categoriesPlayed: "الفئات التي لعبت",
    winSub: "جولة مثالية يا",
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
  document.querySelectorAll(".letter-span").forEach((span) => span.classList.remove("clicked"));
  inputLockedUntil = 0;
  
  // Show input briefly to trigger mobile keyboard, then hide it
  mobileInput.style.position = "fixed";
  mobileInput.style.left = "0";
  mobileInput.style.top = "0";
  mobileInput.style.width = "0";
  mobileInput.style.height = "0";
  mobileInput.style.opacity = "0";
  mobileInput.style.pointerEvents = "none";
  mobileInput.focus();
  mobileInput.select();
  
  // Hide again after a short delay
  setTimeout(() => {
    mobileInput.style.position = "absolute";
    mobileInput.style.left = "-9999px";
  }, 100);
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

// Mobile Keyboard : Keep Tap-to-Guess button above the on-screen keyboard
if (window.visualViewport && tapToGuessBtn) {
  const adjustForKeyboard = () => {
    const vv = window.visualViewport;
    const keyboardHeight = Math.max(0, window.innerHeight - vv.height - vv.offsetTop);
    if (keyboardHeight > 100) {
      tapToGuessBtn.style.position = "fixed";
      tapToGuessBtn.style.bottom = keyboardHeight + 20 + "px";
      document.body.classList.add("keyboard-open");
    } else {
      tapToGuessBtn.style.position = "";
      tapToGuessBtn.style.bottom = "";
      document.body.classList.remove("keyboard-open");
    }
  };
  window.visualViewport.addEventListener("resize", adjustForKeyboard);
  window.visualViewport.addEventListener("scroll", adjustForKeyboard);
  adjustForKeyboard();
}

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

// Function Add To Correct Words Div
function correctWord() {
  let correctWordDiv = document.querySelector(".words-container");

  let correctWordSpan = document.createElement("span");

  correctWordSpan.id = "correct-word-span";

  correctWordSpan.className = "correct-word-span";

  correctWordSpan.textContent = randomGuessWord;

  let solvedCount =
    [...document.querySelectorAll(".correct-word-span")].length + 1;

  document.querySelector(".word-number").innerHTML = `${solvedCount} / ${limitTimes}`;

  // Celebration Effect For Correct Word
  if (typeof fxConfetti === "function") {
    fxConfetti();
  }

  // Fly the solved word from the guess area into the correct words list
  flyWordToCorrectWords(correctWordSpan, correctWordDiv);
}

// Fly Animation : solved word travels from the guess section into the
// correct words section, then lands in the list with a springy pop
function flyWordToCorrectWords(wordSpan, targetContainer) {
  let source = document.querySelector(".guess-parent");

  let land = () => {
    wordSpan.classList.add("just-landed");
    targetContainer.appendChild(wordSpan);
    wordSpan.addEventListener(
      "animationend",
      () => wordSpan.classList.remove("just-landed"),
      { once: true }
    );
  };

  if (!source || typeof wordSpan.animate !== "function") {
    land();
    return;
  }

  let s = source.getBoundingClientRect();
  let tgt = targetContainer.getBoundingClientRect();

  // Start : centre of the guess word area
  let sx = s.left + s.width / 2;
  let sy = s.top + s.height / 2;

  // End : where the next chip appears in the correct words list
  let ex = Math.min(tgt.left + 90, window.innerWidth - 60);
  let ey = tgt.top + tgt.height / 2;

  let clone = document.createElement("span");
  clone.className = "fly-word";
  clone.textContent = wordSpan.textContent;
  document.body.appendChild(clone);

  let dx = ex - sx;
  let dy = ey - sy;

  let anim = clone.animate(
    [
      { transform: `translate(${sx}px, ${sy}px) scale(1.2)`, opacity: 0 },
      { transform: `translate(${sx}px, ${sy}px) scale(1.1)`, opacity: 1, offset: 0.15 },
      { transform: `translate(${sx + dx * 0.5}px, ${sy + dy * 0.5 - 90}px) scale(0.95)`, offset: 0.62 },
      { transform: `translate(${ex}px, ${ey}px) scale(0.7)`, opacity: 0.2 },
    ],
    { duration: 780, easing: "cubic-bezier(.22,.9,.3,1)" }
  );

  anim.onfinish = () => {
    clone.remove();
    land();
  };
  anim.oncancel = () => {
    clone.remove();
    land();
  };
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

  // Match clock : total playtime shown on the result screen
  window.matchStartStamp = Date.now();
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

  // Arrow beside the word type only when more than one type is in play
  let multi = selectedCategories.length > 1;
  let wordType = document.querySelector(".word-type");
  if (wordType) {
    wordType.classList.toggle("has-multi", multi);
    if (!multi) wordType.classList.remove("open");
    let caret = wordType.querySelector(".wt-caret");
    if (caret) caret.style.display = multi ? "" : "none";
  }

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

// Unified Match Result Screen : one themed component for win + game over
function collectMatchStats() {
  return {
    solved: [...document.querySelectorAll(".correct-word-span")],
    total: limitTimes,
    mistakes: wrongTimes,
    elapsedMs: window.matchStartStamp ? Date.now() - window.matchStartStamp : 0,
    difficulty: gameDifficulty,
    categories: selectedCategories || [],
  };
}

function formatMatchTime(ms) {
  let totalSec = Math.floor(ms / 1000);
  let mins = Math.floor(totalSec / 60);
  let secs = totalSec % 60;
  return `${mins > 9 ? mins : "0" + mins}:${secs > 9 ? secs : "0" + secs}`;
}

function resultStatsHTML(stats) {
  let diffLabel =
    stats.difficulty === "easy"
      ? t("difficultyEasy")
      : stats.difficulty === "high"
      ? t("difficultyHigh")
      : t("difficultyMedium");

  return `
    <div class="result-stats">
      <div class="result-stat">
        <i class="fa-regular fa-clock"></i>
        <b>${formatMatchTime(stats.elapsedMs)}</b>
        <span>${t("statTime")}</span>
      </div>
      <div class="result-stat">
        <i class="fa-solid fa-gauge-high"></i>
        <b>${diffLabel}</b>
        <span>${t("statDifficulty")}</span>
      </div>
      <div class="result-stat">
        <i class="fa-solid fa-heart-crack"></i>
        <b>${stats.mistakes}</b>
        <span>${t("statMistakes")}</span>
      </div>
      <div class="result-stat">
        <i class="fa-solid fa-list-check"></i>
        <b>${stats.solved.length} / ${stats.total}</b>
        <span>${t("statProgress")}</span>
      </div>
    </div>`;
}

function showResultScreen(win) {
  disebleContainerEvents();

  let stats = collectMatchStats();

  let div = document.createElement("div");
  div.className = "popup result-screen " + (win ? "result-win" : "result-lose");

  div.innerHTML = `
    <div class="result-orbs" aria-hidden="true"><span></span><span></span><span></span></div>

    <i class="fa-solid ${win ? "fa-trophy" : "fa-skull"} popup-icon ${
      win ? "c-blue" : "c-danger"
    }"></i>

    <h1 class="popup-header">${win ? t("youWin") : t("gameOver")}</h1>

    ${
      win
        ? `<p class="result-sub">${t("winSub")}<span class="popup-spans">${
            inputName.value === "" ? '" "' : inputName.value
          }</span></p>`
        : `<div class="popup-word-reveal">
            <span class="reveal-label">${t("theWordWas")}</span>
            <span class="reveal-word">${randomGuessWord}</span>
            <span class="reveal-cat"
              ><i class="fa-solid fa-tag"></i> ${t(
                "cat_" + objectKeys[randomPropOfObject]
              )}</span
            >
          </div>`
    }

    ${resultStatsHTML(stats)}

    <div class="result-words">
      <p class="result-words-title">
        <i class="fa-solid fa-layer-group"></i> ${t("categoriesPlayed")}:
        ${stats.categories.join(" · ") || "—"}
      </p>
      ${
        stats.solved.length
          ? `<div class="result-chips">${stats.solved
              .map(
                (w, i) =>
                  `<span class="result-chip"><b>${w.textContent}</b><i>${t(
                    "cat_" + wordTypeArray[i]
                  )}</i></span>`
              )
              .join("")}</div>`
          : ""
      }
    </div>

    <div class="popup-actions">
      <button id="play-again-btn" class="popup-btn solid">${t("playAgain")}</button>
    </div>

    <p class="popup-words popup-thanks">${t("thanksPre")}
      <span class="popup-spans">${
        inputName.value === "" ? '" "' : inputName.value
      }</span></p>
  `;

  document.body.appendChild(div);

  // Win celebration : confetti waves + victory haptic
  if (win) {
    if (typeof fxConfetti === "function") {
      fxConfetti();
      setTimeout(() => fxConfetti(), 400);
      setTimeout(() => fxConfetti(), 800);
    }
    fxHaptic([30, 40, 30, 40, 30]);
  }

  document.getElementById("play-again-btn").addEventListener("click", () => {
    // Remove the result popup
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

function gameOverPopup() {
  showResultScreen(false);
}

function youWinPopup() {
  gameEnded = true;
  showResultScreen(true);
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
