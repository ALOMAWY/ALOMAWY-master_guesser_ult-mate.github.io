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

words.programming_Language = [
  {
    word: "Objective-C",
    hint: "It has long been used to develop IOS applications",
  },

  {
    word: "Type Script",
    hint: "it Upgraded Java Script Language",
  },

  {
    word: "Dart",
    hint: "using the Flutter framework",
  },

  {
    word: "Ruby",
    hint: "The Logo Is : Jewel",
  },

  {
    word: "Rust",
    hint: "I'ts Low Level Language ",
  },

  {
    word: "Go",
    hint: "Development By Google",
  },

  {
    word: "Kotlin",
    hint: "To Android Applications Development",
  },

  {
    word: "Swift",
    hint: "To IOS Applications Development",
  },

  {
    word: "Java",
    hint: "its has most uses",
  },

  {
    word: "C",
    hint: "One of the first programming languages",
  },

  {
    word: "C++",
    hint: "In addition to the C language, object-oriented programming",
  },

  {
    word: "C#",
    hint: "it used In the Unity game engine",
  },

  {
    word: "SQL",
    hint: "Used for database Development",
  },

  {
    word: "Python",
    hint: "The most popular programming language",
  },

  {
    word: "PHP",
    hint: "It is symbolized by an elephant",
  },

  {
    word: "Java Script",
    hint: "Used with HTML and CSS",
  },

  {
    word: "CSS",
    hint: "Used to Styling HTML elements",
  },

  {
    word: "Html",
    hint: "Hyper text markup language",
  },
];
words.Popular_Brands = [
  {
    word: "Star bucks",
    hint: "شركه قهوه داعمه للكيان الصهيوني",
  },
  {
    word: "Nestle",
    hint: 'شركه تصنع الشوكولا " داعمه للكيان الصهيوني"',
  },
  {
    word: "McDonalds",
    hint: 'شركه تصنع البرجر " داعمه للكيان الصهيوني"',
  },
  {
    word: "Pizza Hut",
    hint: 'شركه تصنع البيتزا "داعمه للكيان الصهيوني"',
  },
  {
    word: "KFC",
    hint: 'شركه تصنع البروست " داعمه للكيان الصهيوني"',
  },
  {
    word: "Lays",
    hint: 'شركه تصنع رقائق الشيبس " داعمه للكيان الصهيوني "',
  },
];
words.Arabic_Country = [
  {
    word: "Algeria",
    hint: "أكبر دوله عربيه",
  },
  {
    word: "Bahrain",
    hint: "أصغر دوله عربيه",
  },
  {
    word: "Kuwait",
    hint: "صاحبه اقوى عمله في العالم",
  },
  {
    word: "Egypt",
    hint: "صاحبه اكبر عدد من السكان في الوطن العربي",
  },
  {
    word: "Iraq",
    hint: "يحده من الجنوب الكويت",
  },
  {
    word: "Jordan",
    hint: "يحده من الغرب فلسطين",
  },
  {
    word: "Lebanon",
    hint: "يحدها من الشرق سوريا",
  },
  {
    word: "Libya",
    hint: "وطن عمر المختار",
  },
  {
    word: "Morocco",
    hint: "فيها الدار البيضاء ",
  },
  {
    word: "Oman",
    hint: "السلطنه الوحيده",
  },
  {
    word: "Palestine",
    hint: "عاصمتها القدس",
  },
  {
    word: "Qatar",
    hint: "قامت باستضافه كاس العالم عام 2022",
  },
  {
    word: "Saudi Arabia",
    hint: "هي من اكبر الدول العربية و يحدها بريا سبع دول عربيه",
  },
  {
    word: "Sudan",
    hint: "فيها الكثير من الاهرامات",
  },
  {
    word: "United Arab Emirates",
    hint: "فيها اعلى برج بالعالم",
  },
  {
    word: "Tunisia",
    hint: "تلقب بالخضراء",
  },
  {
    word: "Yemen",
    hint: "يقال ان اهلها هم اصل العرب",
  },
  {
    word: "Somalia",
    hint: "عاصمتها مقديشو",
  },
  {
    word: "Syria",
    hint: "فيها اقدم عاصم ماهوله بالسكان",
  },
];
words.series = [
  {
    word: "Bab Alhara",
    hint: " 9 أجزاء",
  },

  {
    word: "Maraya",
    hint: "من عام 1986",
  },
];
words.Video_Games = [
  {
    word: "GTA V",
    hint: "It was released in 2013 From Rockstar Game",
  },
  {
    word: "GTA IV",
    hint: "From Rockstar Game Released In 2008 The Hero Name Is : Niko Bellic ",
  },
  {
    word: "GTA SAN ANDRIAS",
    hint: "The name of the hero in the game is: Carl Johnson",
  },
  {
    word: "GTA VICE City",
    hint: "It Was Released In 2002 From Rockstar Game",
  },
  {
    word: "Counter Strike Go",
    hint: "It Was Released In 2012 From : Valve",
  },
  {
    word: "Over watch 2",
    hint: "The second season of the old game , Has This Word : 'Over ' ",
  },
  {
    word: "Dota 2",
    hint: "One of the largest e-sports games in the world and similar to League of Legends",
  },
  {
    word: "Counter Strike 1.6",
    hint: "اكثر لعبه لعبت في مقاهي الالعاب",
  },
  {
    word: "Counter Strike 2",
    hint: "NEW Version From : CSGO ",
  },
  {
    word: "PUBG Mobile",
    hint: "أكو عرب بالطيارة",
  },
  {
    word: "Rocket League",
    hint: "لعب الكره بالسيارات",
  },
  {
    word: "fortnite",
    hint: "Battle Royal Game Released In : 21 / 7 / 2017 ",
  },
  {
    word: "PUBG Steam",
    hint: "نسخة من اشهز لعيى باتل رويال لكن لجهاز الجاسب  (الكمبيوتر)",
  },
  {
    word: "Pes 2020",
    hint: "P## E######## S##### 20##",
  },
  {
    word: "The Legend of Zelda",
    hint: "On Nentendo Switch , Has This Word : 'Zelda'",
  },
  {
    word: "Apex Legends",
    hint: "Battle Royal Game With Furture Style",
  },
  {
    word: "Cyberpunk 2077",
    hint: "This Game Is Story , Its events take place in the year '2077' ",
  },
  {
    word: "The Witcher 3",
    hint: "Like Red Dead Redemption 2",
  },
  {
    word: "FIFA 22",
    hint: "Football Game In 2022 Year",
  },
  {
    word: "Among Us",
    hint: "The Most Pupolor Game In 2020 Year - (C_R_O_N_)",
  },
  {
    word: "Genshin Impact",
    hint: "Like Anime Moves",
  },
  {
    word: "Call of Duty: Warzone",
    hint: "From Activision Blazzard , Has This Word : 'War'",
  },
  {
    word: "Red Dead Redemption 2",
    hint: "The Most Popular Game With Realistic Theme",
  },
  {
    word: "Minecraft",
    hint: "Square Pixle Game",
  },
  {
    word: "Assassins Creed Merage",
    hint: "A game that simulates the atmosphere of Baghdad from ancient times",
  },
  {
    word: "Valorant",
    hint: "Like CSGO Game , From Riot Gaming",
  },
];
words.phones = [
  {
    word: "Nokia",
    hint: "شركة هواتف قديمة",
  },

  {
    word: "Samsung",
    hint: "شركة هواتف تتميز بنظام سلس و رائع",
  },

  {
    word: "Iphone",
    hint: "عنوان الفخامه",
  },

  {
    word: "HTC",
    hint: "شركة هواتف فخمة قديمة",
  },

  {
    word: "Redmi",
    hint: "شركه هواتف شركة هواتف تمتاز بهواتفها ذات القيمة الممتازة والاسعار الاقتصادية",
  },

  {
    word: "Nothing",
    hint: "شركه هواتف قدمت فكره غير مسبوقه",
  },

  {
    word: "Huawei",
    hint: "شركه هواتف حدثت لها الكثير من المشاكل ولكنها ما زالت من الشركات المميزة",
  },

  {
    word: "Honer",
    hint: "كانت تابعه لشركه 'Huawei'",
  },

  {
    word: "Black Berry",
    hint: "كانت تابعه لشركه هواوي 'Bold 9900'",
  },

  {
    word: "Pixle",
    hint: "هي تحت شركه اشهر محرك بحث في العالم",
  },

  {
    word: "One Plus",
    hint: " 1 + ",
  },

  {
    word: "Sony Xperia",
    hint: "عنوان الفخامة القديم , من شركة مصنعة للكاميرات",
  },

  {
    word: "LG",
    hint: "شركه تصنع الكثير من الاجهزه الالكترونيه",
  },

  {
    word: "Xiaomi",
    hint: "شركه صينيه من اصحاب اعلى المبيعات في سوق الهواتف",
  },

  {
    word: "Motorola",
    hint: "من هواتفها  'Razr 40 Ultra'",
  },

  {
    word: "Vivo",
    hint: "الحرب الاخير منها 'O'",
  },

  {
    word: "Realme",
    hint: "هي تحت شركه 'Oppo'",
  },
  {
    word: "OPPO",
    hint: "تبدا وتنتهي في نفس الحرف",
  },

  {
    word: "Rog Phone",
    hint: "من شركة (Asus)",
  },

  {
    word: "Infinix",
    hint: "صينية ولكن اصلية",
  },

  {
    word: "Sony Ericsson",
    hint: "عنوان الفخامة القديم , من شركة مصنعة للكاميرات",
  },

  {
    word: "Alcatel",
    hint: "بالانجلزي (Killer)",
  },
];

words.fruits = [
  {
    word: "watermelon",
    hint: "لذيذ في الصيف",
  },

  {
    word: "tangerine",
    hint: "على اسم نبي ",
  },

  {
    word: "strawberry",
    hint: "على اسم افلام كرتون قديم",
  },

  {
    word: "raspberry",
    hint: "توت العُليق",
  },

  {
    word: "quince",
    hint: "يشبه التفاح والكمثرى",
  },

  {
    word: "orange",
    hint: "اسمها مثل لونها",
  },

  {
    word: "mango",
    hint: "عصيرها طيب جدا",
  },

  {
    word: "lemon",
    hint: "لونها قريب على لون فاكهه مثلها",
  },

  {
    word: "apple",
    hint: "يبدا اسمها باول الحقيقي في الابجديه",
  },

  {
    word: "banana",
    hint: "من مكونات الكوكتيل",
  },

  {
    word: "cherry",
    hint: "فاكهه صيفيه وغالبا ما يكون منها حبتين مع بعضهما",
  },

  {
    word: "fig",
    hint: "مذكور بالقران",
  },

  {
    word: "grape",
    hint: "موجود منه ثلاثه الوان او اكثر",
  },

  {
    word: "kiwi",
    hint: "اخبار اللون يحتوي على بذور",
  },
];

words.soft_Drinks = [
  {
    word: "Ice Tea",
    hint: "شاي بارد",
  },
  {
    word: "Lemonade",
    hint: "منعش",
  },
  {
    word: "7UP",
    hint: "لتريح  المعدة",
  },
  {
    word: "Fanta",
    hint: "برتقالي الطعم",
  },
  {
    word: "Sprite",
    hint: "شفاف",
  },
  {
    word: "Coca Cola",
    hint: "داعم لاسرائيل",
  },
  {
    word: "Pepsi",
    hint: "داعم لاسرائيل ازرق",
  },
];

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

//  Initialize Randoming Word Variables

let objectKeys;

let randomPropOfObject;

let randomValueFromObjectProp;

let randomWordFromObjectPropValue;

let randomGuessWord;

let randomGuessHint;

let randomGuessWordArray;

let wordFrom;

let guessWordDiv;

let nativeRandomWord;

let nativeGuessWord;

let wordHint = document.querySelector(".word-hint");

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
    words[objectKeys[randomPropOfObject]][randomWordFromObjectPropValue].hint;

  randomGuessWordArray = [...randomGuessWord];

  wordFrom = document.querySelector(".game-info .word-type span");

  wordFrom.innerHTML = toCapitalize(objectKeys[randomPropOfObject]);

  wordHint.innerHTML = randomGuessHint;

  guessWordDiv = document.querySelectorAll(".guess-word");

  let nativeArrayWord = [];

  Array.from(randomGuessWord).forEach((e) => {
    nativeArrayWord.push(e === " " ? "" : e);
  });

  nativeRandomWord = nativeArrayWord.join("").toLowerCase();
}

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

// Initialize Most Buttons

let continueBtn = document.getElementById("continue-btn");

let startBtn = document.createElement("button");

let choseWordsTypeButton = document.createElement("button");

let changeNameBtn = document.getElementById("change-name");

let resetNameBtn = document.getElementById("reset-name");

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

// Initialize Word Numbers And Limits

let limitTimes;

let limitTimesInput = document.getElementById("limit-times-input");

let selectWordNumbers = document.getElementById("select-word-numbers");

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

// Accesing Head & Style Tags

let headTag = document.getElementsByTagName("head")[0];

let styleTag = document.createElement("style");

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

// Initialize Name Input

let inputName = document.getElementById("name");

let defaultName = "@player_99";

inputName.className = "mainName";

inputName.placeholder = "Your Name";

inputName.value = defaultName;

inputName.maxLength = 15;

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

// Custom Theme Input Variables

let blackInput = document.getElementById("black-input");

let whiteInput = document.getElementById("white-input");

let movInput = document.getElementById("mov-input");

let blueInput = document.getElementById("blue-input");

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

// Accesing Flags

let palestineContainer = document.querySelector(".palestine");

let syriaContainer = document.querySelector(".syria");

let blackScreen = document.querySelector(".black-screen");

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

// Hidden Sides

let showSettingBtn = document.getElementById("show-setting");

let settingList = document.querySelector(".left-side");

let correctWordsContainer = document.querySelector(".words");

let showCorrectBtn = document.getElementById("show-correct");

let startTime = document.querySelector(".start-time");

let time = document.getElementById("time");

let showTime = document.getElementById("show-time");

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

// Choose Word Types Function

function chooseWordsType() {
  document.querySelector(".container").classList.add("diseble");

  let objectKeys = Object.keys(words);

  let div = document.createElement("div");

  div.classList.add("popup", "select-types");

  let typesContainerDiv = document.createElement("div");

  div.appendChild(typesContainerDiv);

  typesContainerDiv.classList.add("types-container");

  // Loop For Create Word Type Selection Div

  objectKeys.forEach((type) => {
    let choseLabel = document.createElement("label");

    choseLabel.for = "chose";

    choseLabel.className = "select-type";

    let checkBoxWordType = document.createElement("input");

    checkBoxWordType.type = "checkbox";

    checkBoxWordType.id = "chose";

    checkBoxWordType.className = "custom-select";

    checkBoxWordType.checked = true;

    choseWordsTypeButton.style.pointerEvents = "all";

    choseLabel.appendChild(checkBoxWordType);

    let wordType = document.createElement("span");

    wordType.className = "words-type";

    let textNode = document.createTextNode(type);

    wordType.appendChild(textNode);

    choseLabel.appendChild(wordType);

    typesContainerDiv.appendChild(choseLabel);
  });

  choseWordsTypeButton;

  choseWordsTypeButton.innerHTML = "Let's Start";

  choseWordsTypeButton.classList.add("start");

  div.appendChild(choseWordsTypeButton);

  document.body.appendChild(div);

  let typesArray = Array.from(document.querySelectorAll(".words-type"));

  // If Click Event Equal Check Box Input  Prevent Event

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("select-type") || e.target.id === "chose") {
      typesArray.forEach((type) => {
        let arr = [];
        if (type.previousSibling.checked) {
          arr.push(type.innerHTML);
          choseWordsTypeButton.style.pointerEvents = "all";
        }
      });

      //-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

      // If Every types Not checked Prevent Event

      let result = typesArray.every(function (type) {
        return type.previousSibling.checked == false;
      });

      if (result) {
        choseWordsTypeButton.style.pointerEvents = "none";
      }

      //-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

      // If Some One Or More Types Checked Allow Event

      let checkedType = typesArray.some((e) => {
        e.previousSibling.checked == true;
      });

      if (checkedType) {
        choseWordsTypeButton.style.pointerEvents = "all";
      }

      //-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-
    }
  });

  choseWordsTypeButton.addEventListener("click", function () {
    StartTimeFunction();

    typesArray.forEach((type) => {
      if (type.previousSibling.checked == false) {
        // Deleted Not Checked Types

        delete words[type.innerHTML];
      }
    });

    operationFunction();

    clickerWords();

    submitFunction();

    div.remove();

    // Add Blure Background To Container

    document.querySelector(".container").classList.remove("diseble");
  });
}

setTimeout(() => {
  [...document.querySelectorAll(".popup")].forEach((e) =>
    e.classList.add("diseble")
  );
}, 31);

window.addEventListener("load", () => {
  //-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

  // Add Animation Classes To Flags

  syriaContainer.classList.add("bottom-zero");

  palestineContainer.classList.add("top-zero");

  setTimeout(() => {
    syriaContainer.remove();

    palestineContainer.remove();
  }, 3000);

  //-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

  let bodyWidth = window.getComputedStyle(document.body).width;

  if (bodyWidth <= "1440px") {
    nextWord.style.right = "-" + window.getComputedStyle(nextWord).width;
  }

  //-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

  // Reset Hidden Sides Positions

  // Setting List

  settingList.style.left = "-" + window.getComputedStyle(settingList).width;

  startTime.style.top = "-" + window.getComputedStyle(startTime).height;

  // Time Side

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

  // If No Custom Mode And Dark Mode Eneble Theme Equal Dark Theme

  if (localStorage.getItem("isDark") === "true") {
    document.getElementById("change-mode").checked = true;

    headTag.appendChild(styleTag);

    styleTag.innerHTML = `
    :root {
      --mov-color: #e91e63;
      --blue-color:#30a9f4 ;
      --black-color: #fff;
      --white-color: #000;
    }
    `;
  }
  //-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

  // If Dark Mode Eneble Custom Input List Equal Dark Mode Colors

  if (changeModeToggle.checked === true) {
    blackInput.value = "#f0f0f0";

    whiteInput.value = "#000000";

    movInput.value = "#e91e63";

    blueInput.value = "#03a9f4";
  }

  if (localStorage.getItem("customTheme") != undefined) {
    styleTag.innerHTML = localStorage.getItem("customTheme");

    headTag.appendChild(styleTag);
  }

  startPopup();
});

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

// Declaration Others Variable

let wrongTimes = 0;

let numberOfMistakeSpan = document.getElementById("wrong-times");

let successSound = document.getElementById("success");

let errorSound = document.getElementById("error");

let gameOver = document.getElementById("game-over");

let nextWord = document.querySelector(".words");

let guessSpansArray = document.getElementsByClassName("guess-span");

let guessBasicSpansArray = document.getElementsByClassName("basic-span");

let submitWord = document.getElementById("submit-btn");

let winStatus = false;

let correctSpans = document.querySelectorAll(".correct-word-span");

let wordLength;

let clickedTarget;

let wordTypeArray = [];

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

function clickerWords() {
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("letter-span")) {
      e.target.classList.add("clicked");

      clickedTarget = e.target.innerText.toLowerCase();

      // Set Status Value

      let theStatus = false;

      // Checking Guess Word And Random Word

      let theNeededLetter = e.target.innerText.toLowerCase();

      // Check If Clicked Letter Equal In Word Letter

      [...randomGuessWord].forEach(function (letter, index) {
        let arrayLetter = letter.toLowerCase();

        if (theNeededLetter === arrayLetter) {
          guessSpansArray[index].innerHTML = theNeededLetter;

          theStatus = true;

          successSound.play();
        }
      });
      // If Clicked Letter Not Equal Word
      if (theStatus !== true) {
        wrongTimes++;

        document.querySelector(".draw-row").classList.add(`show-${wrongTimes}`);

        errorSound.play();
      }

      let nativeGuessArray = [];

      [...guessSpansArray].forEach((span) => {
        nativeGuessArray.push(span.innerHTML !== " " ? span.innerHTML : " ");
      });

      nativeGuessWord = nativeGuessArray.join("").toLowerCase();
      ifGameOver();

      numberOfMistakeSpan.innerHTML = `Number Of Mistake Is : <span>'${wrongTimes} / 10'</span>`;
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
//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/,

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
  nextWord.style.right = "-" + window.getComputedStyle(nextWord).width;
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
  littersLength = document.createElement("div");

  littersLength.classList.add("word-length");

  littersLength.innerHTML = randomGuessWord.length;

  document.querySelector(".game-draw").appendChild(littersLength);

  wordTypeArray.push(objectKeys[randomPropOfObject]);
}

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

// On Submit Word Function

function submitFunction() {
  submitWord.addEventListener("click", () => {
    if (nativeGuessWord === nativeRandomWord) {
      correctWord();

      document
        .querySelectorAll(".letter-span")
        .forEach((e) => e.classList.remove("clicked"));
      [...document.querySelector(".guess-parent").childNodes].forEach((e) => {
        e.remove();

        littersLength.remove();
      });
    }
    document.querySelectorAll(".correct-word-span").length === limitTimes
      ? youWinPopup()
      : false;
    continueBtn.click();
  });
}

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

// If All Gallows Slides Showing Function

function ifGameOver() {
  if (document.getElementById("draw-row-div").classList.contains("show-10")) {
    // Add Prevent Event To All Spans

    Array.from(lettersRow).forEach((span) => span.classList.add("no-event"));

    setTimeout(() => {
      gameOverPopup();

      gameOver.play();
    }, 500);
  }
}

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

// Deferance Operation Function

function operationFunction() {
  randomizingValues();

  DeclareGuessSpans();
}

continueBtn.onclick = () => {
  document.querySelectorAll(".correct-word-span").length <= limitTimes
    ? operationFunction()
    : "";
};

if (limitTimesInput.value == "") {
  startBtn.style.pointerEvents = "none";

  limitTimesInput.classList.add("error-border");

  limitTimesInput.addEventListener("input", () => {
    if (limitTimesInput.value.length === 1) {
      limitTimesInput.classList.remove("error-border");

      startBtn.style.pointerEvents = "all";

      if (limitTimesInput.value.length === 3) {
        limitTimesInput.blur();
      }
    }
  });

  // On Start Btn Click Function

  startBtn.addEventListener("click", (e) => {
    chooseWordsType();
    limitTimes = parseInt(limitTimesInput.value);

    document.querySelector(".word-number").innerHTML = ` 0 / ${limitTimes}`;
  });
}

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

// Create Start Game Popup Function

function startPopup() {
  disebleContainerEvents();
  let startPopupDiv = document.createElement("div");

  startPopupDiv.className = "popup";

  startPopupDiv.innerHTML = `

  <h3 class="popup-header basmala"> بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ </h3>

  <h3 class="popup-words"> Hello <span class="popup-spans"> ${inputName.value} </span> </h3>

  <h3 class="popup-words">Let's start guessing the words</h3>`;

  startPopupDiv.appendChild(selectWordNumbers);

  startBtn.className = "start-btn";

  startBtn.innerText = "Start";

  startBtn.style.marginBottom = "20px";

  startPopupDiv.appendChild(startBtn);

  document.body.appendChild(startPopupDiv);
  limitTimesInput.focus();

  startBtn.addEventListener("click", () => {
    startPopupDiv.remove();
  });
}

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

let condition = () => {
  if (document.querySelectorAll(".correct-word-span").length < 1) {
    showWordsContainerPopup(0);
  } else {
    showWordsContainerPopup(213);
  }
};

// Create Game Over Popup Function

function gameOverPopup() {
  disebleContainerEvents();

  document.querySelector(".container").style.pointerEvents = "none";

  let div = document.createElement("div");

  div.classList.add("popup");

  div.innerHTML = `
  <h1 class=" popup-header" > Game Over </h1>

  <h3 class="popup-words" >The Word Is  <span class="popup-spans"> ${randomGuessWord} </span> </h3>
  
  <h3 class="popup-words" >Word From  <span class="popup-spans"> ${
    objectKeys[randomPropOfObject]
  }</span> </h3>
  
  <p class="popup-words">Show Correct Words <span  onclick="condition()" id="reset" class="sw popup-spans has-event">Show</span></p>

  <p class="popup-words">You Can Replay This Game By Clicking The<span onclick="location.reload();" id="reset" class="popup-spans has-event">Replay</span></p>

  <p class="popup-words">  Thank You <span class="popup-spans">${
    inputName.value === "" ? '" "' : inputName.value
  }</span></p>
  `;

  document.body.appendChild(div);

  document.getElementsByClassName("container")[0].style.opacity = 0.2;
  // timerToReload(10);
}

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

// Create Wins Game Popup Function

function youWinPopup() {
  // timerToReload(15);

  disebleContainerEvents();

  let winPopup = document.createElement("div");

  winPopup.className = "popup";

  document.body.appendChild(winPopup);

  winPopup.innerHTML = `<h1 class="popup-header">YOU WIN</h1>

    <p class="popup-words">You Can Replay This Game By Clicking The<span onclick="location.reload();" id="reset" class="popup-spans has-event">Replay</span></p>

    <p class="popup-words">The number of words you have guessed <span  id="reset" class="popup-spans">${limitTimes}</span> <span  onclick="showWordsContainerPopup()" id="reset" class="popup-spans has-event">Show</span></p>
  `;
}

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

// Create Correct Results Words Popup Function

function showWordsContainerPopup(noWords) {
  document.querySelectorAll(".popup").forEach((popup) => popup.remove());

  let containerDiv = document.createElement("div");

  containerDiv.classList.add("popup", "no-flexing", "words-popup");
  if (noWords === 0) {
    containerDiv.innerHTML = `<span class=" popup-words"> No Words </span>`;
  } else {
    containerDiv.innerHTML = `<span class=" small-words popup-words">number <i class="fa-solid fa-minus c-mov"></i> Word <i class="fa-solid fa-arrow-right-long c-mov"></i> WordFrom  </span>`;
  }

  [...document.querySelectorAll(".correct-word-span")].forEach(
    (span, index) => {
      let wordSpan = document.createElement("span");

      wordSpan.className = "popup-words";

      wordSpan.innerHTML = `${
        index + 1
      }<i class="fa-solid fa-minus c-mov"></i> ${span.innerHTML}  

      <i class="fa-solid fa-arrow-right-long c-mov"></i> ${
        wordTypeArray[index]
      }`;

      containerDiv.appendChild(wordSpan);
    }
  );

  document.body.appendChild(containerDiv);
}

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

// If Game End count to custom secounds and reload page

function timerToReload(numbeOfSecounds) {
  let countDiv = document.getElementById("count");

  let seconds = numbeOfSecounds;

  countDiv.style.opacity = "1";

  countDiv.innerHTML = seconds;

  let downCount = setInterval(() => {
    countDiv.innerHTML--;

    if (countDiv.innerHTML == "0") {
      countDiv.innerHTML = seconds;

      clearInterval(downCount);

      location.reload();
    }
  }, 1000);
}

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

// Create Change Mode Toggle

let changeModeToggle = document.getElementById("change-mode");

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

// Create Dark Theme Variable

const darkModeTheme = `
:root {
  --mov-color: #e91e63;
  --blue-color:#30a9f4 ;
  --black-color: #fff;
  --white-color: #000;
}
`;

// Create Main Theme Variable

const mainTheme = `
:root {
  --mov-color: #e91e63;
  --blue-color: #03a9f4;
  --black-color: #000;
  --white-color: #fff;
}`;

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

// On Clicking Change Theme To Selection Theme

changeModeToggle.addEventListener("click", () => {
  if (changeModeToggle.checked === true) {
    localStorage.setItem("isDark", true);

    styleTag.innerHTML = darkModeTheme;

    headTag.appendChild(styleTag);
  } else {
    localStorage.setItem("isDark", false);

    headTag.appendChild(styleTag);

    styleTag.innerHTML = mainTheme;
  }
});

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

// Show Hidden Sections Buttons

showCorrectBtn.addEventListener("click", () => {
  let closeWordsTap = setTimeout(() => {
    if (window.getComputedStyle(nextWord).right === "0px") {
      nextWord.style.right = `-${window.getComputedStyle(nextWord).width}`;
    }
  }, 5000);

  nextWord.classList.toggle("show-shadow");
  if (parseInt(window.getComputedStyle(nextWord).right) !== 0) {
    nextWord.style.right = "0px";
  } else if (window.getComputedStyle(nextWord).right === "0px") {
    nextWord.style.right = `-${window.getComputedStyle(nextWord).width}`;

    clearTimeout(closeWordsTap);
  }
});

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

// Check Setting List Position If Not Equal 0 Make It Equaled 0 , If Equal 0 Make It Position - 100% (Hidden)

showSettingBtn.addEventListener("click", () => {
  let closeSettingsTap = setTimeout(() => {
    if (window.getComputedStyle(settingList).left === "0px") {
      settingList.style.left = `-${window.getComputedStyle(settingList).width}`;
    }
  }, 1000 * 15);

  settingList.classList.toggle("show-shadow");

  if (parseInt(window.getComputedStyle(settingList).left) !== 0) {
    settingList.classList.add("show-shadow");

    settingList.style.left = "0px";
  } else if (window.getComputedStyle(settingList).left === "0px") {
    settingList.style.left = `-${window.getComputedStyle(settingList).width}`;

    clearTimeout(closeSettingsTap);
  }
});

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

// Make Timer Function

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

// On Start Game Start Time Function

function StartTimeFunction() {
  let myHour = 0;

  let myMin = 0;

  let mySec = 0;

  let date = new Date();

  document.querySelector(".word-number").innerHTML = ` 0 / ${limitTimes}`;
  setInterval(() => {
    mySec++;
    if (mySec > 60) {
      myMin++;
      mySec = 0;
    }
    if (myMin > 60) {
      myMin = 0;
      myHour++;
    }
    let startTime = `${myHour > 9 ? myHour : "0" + myHour} : ${
      myMin > 9 ? myMin : "0" + myMin
    } : ${mySec > 9 ? mySec : "0" + mySec}`;
    time.innerHTML = startTime;
  }, 1000);
}

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

// On Clicking : Showing Time Popup || Hidding Time Popup

showTime.addEventListener("click", () => {
  let startTimeHeight = window.getComputedStyle(startTime).height;

  startTime.classList.toggle("show-shadow");

  if (window.getComputedStyle(startTime).top === "0px") {
    startTime.style.top = `-${startTimeHeight}`;
  } else if (window.getComputedStyle(startTime).top !== "0px") {
    startTime.style.top = `0px`;
  }
  setTimeout(() => {
    startTime.style.top = "-" + startTimeHeight;

    startTime.classList.remove("show-shadow");
  }, 5000);
});

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

// Make Desibling Parent Container

function disebleContainerEvents() {
  return document.querySelector(".container").classList.add("diseble");
}

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

// Change Theme Function

let changeThemeBtn = document.getElementById("change-theme");

let saveThemeColors = document.getElementById("save-color-btn");

let resetThemeColors = document.getElementById("reset-color-btn");

changeThemeBtn.addEventListener("click", () => {
  [...document.querySelector(".change-theme-section").children].forEach(
    (input) => input.classList.remove("ctm-color")
  );

  document.querySelector(".actions-btns").style.display = "block";
});

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

// return To Selected Theme

resetThemeColors.addEventListener("click", () => {
  if (!changeModeToggle.checked) {
    blackInput.value = "#000000";

    whiteInput.value = "#f0f0f0";

    movInput.value = "#e91e63";

    blueInput.value = "#03a9f4";
  } else if (changeModeToggle.checked) {
    blackInput.value = "#f0f0f0";

    whiteInput.value = "#000000";

    movInput.value = "#e91e63";

    blueInput.value = "#03a9f4";
  }

  styleTag.innerHTML = `
  :root {
    --black-color: ${document.getElementById("black-input").value};
    --white-color:${document.getElementById("white-input").value};
    --mov-color:${document.getElementById("mov-input").value};
    --blue-color:${document.getElementById("blue-input").value} ;
  }`;

  saveThemeColors.click();
  headTag.appendChild(styleTag);
});

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

// Apply Changes To Root Element On Inputs Change

[...document.querySelectorAll(".color-input")].forEach((input) =>
  input.addEventListener("input", () => {
    styleTag.innerHTML = `
  :root {
    --black-color: ${document.getElementById("black-input").value};
    --white-color:${document.getElementById("white-input").value};
    --mov-color:${document.getElementById("mov-input").value};
    --blue-color:${document.getElementById("blue-input").value} ;
  }`;
    headTag.appendChild(styleTag);
  })
);

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

// Save Mode Button On Click Apply Theme

saveThemeColors.addEventListener("click", () => {
  styleTag.innerHTML = `
:root {
  --black-color: ${document.getElementById("black-input").value};
  --white-color:${document.getElementById("white-input").value};
  --mov-color:${document.getElementById("mov-input").value};
  --blue-color:${document.getElementById("blue-input").value} ;
}`;
  headTag.appendChild(styleTag);
  localStorage.setItem(
    "customTheme",
    `
:root {
  --black-color: ${document.getElementById("black-input").value};
  --white-color:${document.getElementById("white-input").value};
  --mov-color:${document.getElementById("mov-input").value};
  --blue-color:${document.getElementById("blue-input").value} ;
}`
  );
});

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

// Show Hint Icon On Click : Show Hint || Hidden Hint

let showHint = document.querySelector(".show-hint");

showHint.addEventListener("click", () => {
  if (showHint.children[0].className === "fa-solid fa-eye-slash") {
    showHint.children[0].className = "fa-solid fa-eye";

    wordHint.style.color = "transparent";
  } else if (showHint.children[0].className !== "fa-solid fa-eye-slash") {
    showHint.children[0].className = "fa-solid fa-eye-slash";

    wordHint.style.color = "var(--white-color)";
  }
});
