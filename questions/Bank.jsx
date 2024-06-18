const questions = [
  {
    id: "REACT001",
    Question: "React nədir?",
    Correct: "JavaScript kitabxanası",
    WrongAnswer1: "UI komponent kitabxanası",
    WrongAnswer2: "Programlama dili",
    WrongAnswer3: "Full-stack platforması",
    Category: "React",
  },
  {
    id: "REACT002",
    Question: "React-in yaradıcısı kimdir?",
    Correct: "Facebook",
    WrongAnswer1: "Google",
    WrongAnswer2: "Microsoft",
    WrongAnswer3: "Amazon",
    Category: "React",
  },
  {
    id: "REACT003",
    Question: "React element və komponent arasındakı fərq nədir?",
    Correct: "Komponent statik və dinamik məzmunları birləşdirir",
    WrongAnswer1: "Element komponentin render nəticəsidir",
    WrongAnswer2: "Element həm JavaScript, həm də CSS məzmununu təsvir edir",
    WrongAnswer3: "Element və komponent eynidir",
    Category: "React",
  },
  {
    id: "REACT004",
    Question: "React-da Virtual DOM nədir və nə üçün istifadə olunur?",
    Correct: "Render performansını artırır",
    WrongAnswer1: "Komponentlərin funksional testləri üçün istifadə olunur",
    WrongAnswer2: "İstifadəçi interfeysini fərdiləşdirmək üçün",
    WrongAnswer3: "Funksionallıq əlavə edir",
    Category: "React",
  },
  {
    id: "REACT005",
    Question:
      "React Class Component və Function Component arasındakı əsas fərq nədir?",
    Correct: "State və lifecycle üçün",
    WrongAnswer1: "Function Component sadəcə təqdim etmək üçündür",
    WrongAnswer2: "Class Component yalnız formaları idarə edir",
    WrongAnswer3: "Function Component yalnız məlumat oxumaq üçündür",
    Category: "React",
  },
  {
    id: "REACT006",
    Question: "React prop drilling nədir?",
    Correct:
      "Yuxarı komponentlərdən aşağı komponentlərə məlumat keçidini əhatə edir",
    WrongAnswer1: "Komponentlər arasında stil ötürülməsi",
    WrongAnswer2: "Komponentlərin vəziyyətini təyin etmək üçün",
    WrongAnswer3: "Komponentlər arasında funksiyaları təyin etmək üçün",
    Category: "React",
  },
  {
    id: "REACT007",
    Question: "React-da 'props' nədir və nə üçün istifadə olunur?",
    Correct: "Componentlər arasında məlumat keçidini təmin edir",
    WrongAnswer1: "Komponentlərin vəziyyətini idarə etmək üçün",
    WrongAnswer2: "Yalnız stil təyin etmək üçün",
    WrongAnswer3: "Funksionallığı artırmaq üçün",
    Category: "React",
  },
  {
    id: "REACT008",
    Question: "React-da 'state' nədir və nə üçün istifadə olunur?",
    Correct: "Komponentin daxili məlumat vəziyyətini saxlamaq üçün",
    WrongAnswer1: "Komponentlər arasında məlumat mübadiləsi üçün",
    WrongAnswer2: "Komponentin həyat dövrünü idarə etmək üçün",
    WrongAnswer3: "DOM manipulyasiyaları etmək üçün",
    Category: "React",
  },
  {
    id: "REACT009",
    Question: "React-da 'component lifecycle' hansı funksiyaları əhatə edir?",
    Correct: "componentDidMount, componentDidUpdate, componentWillUnmount",
    WrongAnswer1: "render, setState, forceUpdate",
    WrongAnswer2: "props, state, context",
    WrongAnswer3: "fetchData, updateUI, removeComponent",
    Category: "React",
  },
  {
    id: "REACT010",
    Question: "React Hooks nədir və nə üçün istifadə olunur?",
    Correct:
      "Funksionallı komponentlərdə vəziyyət və əməliyyatları idarə etmək üçün",
    WrongAnswer1: "Event handlerləri dəstəkləmək üçün",
    WrongAnswer2: "Yenidən render etmək üçün",
    WrongAnswer3: "Componentləri dinamik yaratmaq üçün",
    Category: "React",
  },
  {
    id: "REACT011",
    Question: "React-da 'key' nədir və nə üçün istifadə olunur?",
    Correct: "List elementlərini fərdiləşdirmək üçün unique identifier kimi",
    WrongAnswer1: "Elementlərin render sırasını idarə etmək üçün",
    WrongAnswer2: "Componentlər arasında məlumat keçidini təmin etmək üçün",
    WrongAnswer3: "State idarə etmək üçün",
    Category: "React",
  },
  {
    id: "REACT012",
    Question:
      "Reactda 'conditional rendering' nədir və nə üçün istifadə olunur?",
    Correct: "Şərtlərə əsasən məzmunu dinamik olaraq göstərmək üçün",
    WrongAnswer1: "Komponentləri asinxron etmək üçün",
    WrongAnswer2: "Məzmunu lokal yaddaşda saxlamaq üçün",
    WrongAnswer3: "Dataları manipulyasiya etmək üçün",
    Category: "React",
  },
  {
    id: "REACT013",
    Question: "React Router istifadəçiyə nə təqdim edir?",
    Correct: "Veb tətbiqin naviqasiya funksiyalarını",
    WrongAnswer1: "Server tərəfi renderingi",
    WrongAnswer2: "Componentlər arasında məlumat paylaşımı",
    WrongAnswer3: "Global state idarəetməsi",
    Category: "React",
  },
  {
    id: "REACT014",
    Question: "React-da 'Higher-Order Components' (HOC) nədir?",
    Correct: "Başqa komponentlərə funksionallıq əlavə edən bir komponent",
    WrongAnswer1: "Componentlərin state idarəetməsi üçün",
    WrongAnswer2: "Məlumatları asinxron şəkildə yükləmək üçün",
    WrongAnswer3: "Componentləri DOM-a render etmək üçün",
    Category: "React",
  },
  {
    id: "REACT015",
    Question: "React-da 'Error Boundaries' nədir və nə üçün istifadə olunur?",
    Correct:
      "Komponentlərdəki xəta halında tətbiqin qalan hissəsini göstərmək üçün",
    WrongAnswer1: "Error mesajlarını console.log etmək üçün",
    WrongAnswer2: "Asinxron əməliyyatları idarə etmək üçün",
    WrongAnswer3: "Errorları try-catch blokları ilə idarə etmək üçün",
    Category: "React",
  },
  {
    id: "REACT016",
    Question: "React-da 'useEffect' hooku nədir və nə üçün istifadə olunur?",
    Correct: "Komponentlərdə yan-effektləri idarə etmək üçün",
    WrongAnswer1: "Yalnız məlumat yenilənmələrini təmin edir",
    WrongAnswer2: "Komponent ömür dövrü ilə iş görür",
    WrongAnswer3: "Təkcə məlumat load etmək üçündür",
    Category: "React",
  },
  {
    id: "REACT017",
    Question: "React-da 'PureComponent' nədir və nə üçün istifadə olunur?",
    Correct:
      "Component-lər üçün avtomatik shouldComponentUpdate metodunu təmin edir",
    WrongAnswer1: "Funksionallı komponentlər üçün nəzərdə tutulmuşdur",
    WrongAnswer2: "Komponentlər arasında məlumat keçidini tənzimləmək üçün",
    WrongAnswer3: "Virtual DOM performansını yaxşılaşdırmaq üçün",
    Category: "React",
  },
  {
    id: "REACT018",
    Question: "React-da 'forwardRef' nədir və nə üçün istifadə olunur?",
    Correct:
      "ForwardRef, komponentlərin ötürülməsi üçün bir yoldur. Bu, bir komponentdən digərinə ref-in təhlükəsiz şəkildə ötürülməsinə imkan verir",
    WrongAnswer1:
      "Bu bir bağlantıdır.Datanın ref vasitəsilə təhlükəsiz ötürülməsi üçün",
    WrongAnswer2: "Komponentlərin bir-birinə məlumat ötürmək üçün",
    WrongAnswer3: "Komponentlər arasında əlaqə yaratmaq üçün",

    Category: "React",
  },
  {
    id: "REACT019",
    Question: "React-da 'context' nədir və nə üçün istifadə olunur?",
    Correct: "Komponentlər arasında məlumatın təşkil edilməsini təmin edir",
    WrongAnswer1: "Virtual DOM yaradır",
    WrongAnswer2: "Komponentləri birləşdirmək üçün",
    WrongAnswer3: "İstifadəçi interfeysi dizayn etmək üçün",
    Category: "React",
  },
  {
    id: "REACT020",
    Question: "React-da 'useEffect' nədir və nə üçün istifadə olunur?",
    Correct:
      "Komponentin həyat dövrünü əhatə edir və təkrar-render olunduqda əməliyyatları idarə edir",
    WrongAnswer1:
      "Funksionallı komponentləri memoyaya alaraq yenidən-render olunmasını sıfırlayır",
    WrongAnswer2:
      "Verilənlər bazası əməliyyatıdır. Bu əməliyyat yeni effect yaradır",
    WrongAnswer3:
      "İstifadəçi interfeysini funksional etmək üçün istifadə olunur",
    Category: "React",
  },
  {
    id: "REACT021",
    Question: "React-da 'Fragment' nədir və nə üçün istifadə olunur?",
    Correct: "Məzmunu qruplaşdırarkən ekstra div-lər əlavə etməmək üçün",
    WrongAnswer1: "Yüksək performans üçün dinamik məzmun yükləmək",
    WrongAnswer2: "Komponentləri birləşdirmək üçün",
    WrongAnswer3: "Məzmunu CSS ilə dizayn etmək üçün",
    Category: "React",
  },
  {
    id: "REACT022",
    Question:
      "React Hooks-dan istifadə edərək öz əməliyyatlarınızı yaratmaq üçün lazım olan üç əsas funksiya hansılardır?",
    Correct: "useState, useEffect, useCallback",
    WrongAnswer1: "componentDidMount, componentDidUpdate, componentWillUnmount",
    WrongAnswer2: "render, setState, forceUpdate",
    WrongAnswer3: "fetchData, updateUI, removeComponent",
    Category: "React",
  },
  {
    id: "REACT023",
    Question: "React-də 'component lifecycle' nə deməkdir?",
    Correct: "'Component lifecycle', komponentin yaradılması, yenilənməsi və silinməsi zamanı baş verən fəaliyyətləri təsvir edir.",
    WrongAnswer1: "'Component lifecycle', yalnız komponentin başladığı və bitdiyi anı nəzərdə tutur.",
    WrongAnswer2: "'Component lifecycle', yalnız istifadəçinin komponentlə əməliyyatı zamanı baş verən prosesləri təsvir edir.",
    WrongAnswer3: "'Component lifecycle', yalnız komponentlərin bir-birinə məlumat ötürdüyü zaman baş verən fəaliyyətləri təsvir edir.",
    Category: "React"
  },
  {
    id: "REACT024",
    Question:
      "React SSR (Server-Side Rendering) nədir və nə üçün istifadə olunur?",
    Correct:
      "Server tərəfindən HTML-i yaradmaq və göndərmək üçün istifadə olunur",
    WrongAnswer1:
      "Funksionallı komponentləri memoyaya alaraq yenidən-render olunmasını sıfırlayır",
    WrongAnswer2: "Verilənlər bazası əməliyyatı",
    WrongAnswer3: "İstifadəçi interfeysi dizayn etmək üçün",
    Category: "React",
  },
  {
    id: "REACT025",
    Question: "React-da 'props' və 'state' arasındakı əsas fərq nədir?",
    Correct:
      "'props' komponentlər arasında məlumatın üzərindən keçdiyi və immutability qaydalarına əsaslanan verilən, 'state' isə yalnız komponentin özü tərəfindən dəyişdirilə bilən dinamik veriləndir.",
    WrongAnswer1:
      "'props' komponentin daxilində dəyişdirilə bilən verilən, 'state' isə yalnız komponentlər arasında məlumatın üzərindən keçdiyi veriləndir.",
    WrongAnswer2:
      "'props' komponentlər arasında məlumatın üzərindən keçdiyi veriləndir, 'state' isə komponentin daxilində dəyişdirilə bilən dinamik veriləndir.",
    WrongAnswer3:
      "'props' yalnız funksiyanal komponentlər üçün istifadə olunur, 'state' isə yalnız sinif komponentlər üçün istifadə olunur.",
    Category: "React",
  },
  {
    id: "REACT026",
    Question: "React-də 'JSX' nədir və necə işləyir?",
    Correct: "'JSX', JavaScript və XML-in birləşməsidir və React-də məzmunun təsviri üçün istifadə olunur.",
    WrongAnswer1: "'JSX', yalnız JavaScript dildə yazılan təlimatları ifadə edir.",
    WrongAnswer2: "'JSX', yalnız XML (eXtensible Markup Language) dildə yazılan təlimatları ifadə edir.",
    WrongAnswer3: "'JSX', yalnız React komponentləri təyin etmək üçün istifadə olunur.",
    Category: "React"
  },
  {
    id: "REACT027",
    Question: "React-də 'state' və 'props' arasındakı əsas fərq nədir?",
    Correct: "state komponentin daxilindən idarə olunan məlumatlardır, props isə bir komponentdən digərinə ötürülən məlumatlardır.",
    WrongAnswer1: "state yalnız funksiya komponentlərində işləyir, props isə yalnız sinif komponentlərində.",
    WrongAnswer2: "state yalnız səhifə yüklənmə zamanı istifadə olunur, props isə hər hansı bir vaxtda.",
    WrongAnswer3: "state və props eyni məlumat növlərini nəzərdə tutur, ancaq istifadə siyahısı fərqlidir.",
    Category: "React"
  }
  ,
  {
    id: "REACT028",
    Question: "React-da 'PropTypes' nə üçün istifadə olunur?",
    Correct:
      "Komponentlərə ötürülən məlumatların növlərini yoxlamaq və doğruluğunu təmin etmək üçün istifadə olunur",
    WrongAnswer1:
      "Komponentlərin stili və görüntüsünü tənzimləmək üçün istifadə olunur",
    WrongAnswer2: "Komponentlər arasında məlumat keçirmək üçün istifadə olunur",
    WrongAnswer3:
      "Komponentlərə əlavə funksiyalar əlavə etmək üçün istifadə olunur",
    Category: "React",
  },

  {
    id: "REACT029",
    Question: "React-da 'Layout' komponentləri nə üçün istifadə olunur?",
    Correct:
      "Səhifələrin ümumi quruluşunu və tərtibatını müəyyən etmək üçün istifadə olunur",
    WrongAnswer1:
      "Komponentin daxilində yerli vəziyyət mənbəyini idarə etmək üçün",
    WrongAnswer2: "Komponentin görünüşünü dinamik olaraq dəyişmək üçün",
    WrongAnswer3: "Virtual DOM elementlərinin yaradılması üçün",
    Category: "React",
  },
  {
    id: "REACT030",
    Question: "React-da 'useReducer' hook-u nə üçün istifadə olunur?",
    Correct:
      "Dəyişən vəziyyət idarəsini mürəkkəb vəziyyətlərdə effektiv şəkildə idarə etmək üçün istifadə olunur",
    WrongAnswer1:
      "Komponentin hər render-dən sonra fəaliyyətləri icra etmək üçün",
    WrongAnswer2:
      "Asinxron məlumat yükləmə zamanı gecikmələri idarə etmək üçün",
    WrongAnswer3: "Virtual DOM elementlərinin yaradılması üçün",
    Category: "React",
  },
  {
    id: "REACT031",
    Question: "React-da 'Refs' nədir və nə üçün istifadə olunur?",
    Correct:
      "DOM elementlərinə və ya react komponentlərinə müdaxilə etmək üçün istifadə olunur",
    WrongAnswer1: "Virtual DOM elementlərinin yaradılması üçün istifadə olunur",
    WrongAnswer2: "State yönləndirməsi üçün istifadə olunur",
    WrongAnswer3: "React komponentlərinin render edilməsi üçün istifadə olunur",
    Category: "React",
  },
  {
    id: "REACT032",
    Question: "React-da 'useReducer' nədir və nə üçün istifadə olunur?",
    Correct:
      "Complex state logicləri üçün istifadə olunur və 'useState' -dən daha qabaq işləyir.",
    WrongAnswer1: "componentDidMount, componentDidUpdate, componentWillUnmount",
    WrongAnswer2: "render, setState, forceUpdate",
    WrongAnswer3: "fetchData, updateUI, removeComponent",
    Category: "React",
  },
  {
    id: "REACT033",
    Question:
      "React Router vəziyyətini idarə etmək üçün hansı moduldan istifadə edir?",
    Correct: "react-router-dom",
    WrongAnswer1: "react-state-router",
    WrongAnswer2: "react-router-redux",
    WrongAnswer3: "react-route-manager",
    Category: "React",
  },
  {
    id: "REACT034",
    Question: "React-da 'memo' nədir və nə üçün istifadə olunur?",
    Correct:
      "Funksionallı komponentləri memoyaya alaraq yenidən-render olunmasını sıfırlayır",
    WrongAnswer1: "Verilənlər bazası əməliyyatı",
    WrongAnswer2: "İstifadəçi interfeysi dizayn etmək üçün",
    WrongAnswer3: "CSS məlumatlarını təyin etmək üçün",
    Category: "React",
  },
  {
    id: "REACT035",
    Question: "React-da 'useContext' hook-u nə üçün istifadə olunur?",
    Correct: "Fərqli komponentlər arasında məlumat paylaşmaq üçün",
    WrongAnswer1: "Komponentin vəziyyətini idarə etmək üçün",
    WrongAnswer2:
      "Context API-dən istifadə edərək yenidən render olmadan  məlumat almaq üçün istifadə olunur.",
    WrongAnswer3: "Router naviqasiyasını idarə etmək üçün",
    Category: "React",
  },

  {
    id: "REACT036",
    Question: "React-da 'useState' hook-u nə üçün istifadə olunur?",
    Correct: "Komponentin daxilində yerli vəziyyət mənbəyini idarə etmək üçün",
    WrongAnswer1: "Komponentin montaj və yeniləmə fazalarını idarə etmək üçün",
    WrongAnswer2:
      "Komponentin məlumat bazaları ilə əlaqələrini idarə etmək üçün",
    WrongAnswer3: "Komponentlər arasında məlumatı paylaşmaq üçün",
    Category: "React",
  },

  {
    id: "REACT037",
    Question: "React-da 'Lazy loading' nədir və nə üçün istifadə olunur?",
    Correct:
      "Tətbiqin yüklənmə vaxtını azaltmaq üçün məzmunun lazımi olduğu vaxt yükləmək üçün istifadə olunur",
    WrongAnswer1: "Virtual DOM yaradır",
    WrongAnswer2:
      "Funksionallı komponentləri memoyaya alaraq yenidən-render olunmasını sıfırlayır",
    WrongAnswer3: "Komponentləri birləşdirmək üçün",
    Category: "React",
  },
  {
    id: "REACT038",
    Question: "React Hooks-dan istifadə edərək vəziyyət necə idi?",
    Correct: "useState, useEffect, və useCallback",
    WrongAnswer1: "componentDidMount, componentDidUpdate, componentWillUnmount",
    WrongAnswer2: "render, setState, forceUpdate",
    WrongAnswer3: "fetchData, updateUI, removeComponent",
    Category: "React",
  },
  {
    id: "REACT039",
    Question:
      "React-testing-library nədir və nə üçün istifadə olunur? Yalnış cavabı seçin",
    Correct: "Reactın tərkibində amma Reactdan ayrı işləyir",
    WrongAnswer1: "Testlər istifadəçi təcrübəsini təsdiqləməyə yönəlmişdir ",
    WrongAnswer2:
      "Komponentlərin məntiqini və təcrübəsini doğrulamaq, Virtual DOM və ya state ilə əlaqəsi yoxdur",
    WrongAnswer3: "React komponentlərini test etmək üçün bir kitabxanadır",
    Category: "React",
  },
  {
    id: "REACT040",
    Question: "React-da 'memo' nədir və nə üçün istifadə olunur?",
    Correct:
      "Komponentin props və ya state dəyişdiyi zaman onun render edilməsini təmin edir.",
    WrongAnswer1:
      " Funksionallı komponentləri memoyaya alaraq yenidən-render olunmasına şərait yaradır",
    WrongAnswer2:
      "Komponentin props və ya state dəyişdiyi zaman yenidən render edilməsini təmin etmir.",
    WrongAnswer3: "Bu cavabların hamısı səhvdir",
    Category: "React",
  },
  {
    id: "REACT041",
    Question: "React Router-da 'Link' və 'NavLink' arasındakı fərq nədir?",
    Correct:
      "'NavLink', aktiv linkləri təyin etməyə imkan verir, 'Link' isə sadəcə link yaradır",
    WrongAnswer1: "'Link', fərqli router versiyaları arasında link yaradır",
    WrongAnswer2:
      "'NavLink', veb səhifəsi hədəfli link yaradır, 'Link' isə rəqəmsal hədəfli link",
    WrongAnswer3:
      "'Link', aktiv linkləri təyin etməyə imkan verir,'NavLink' isə sadəcə link yaradır",
    Category: "React",
  },
  {
    id: "REACT042",
    Question:
      "React-da 'Context API' nədir və nə üçün istifadə olunur? Yalnış cavabı seçin!",
    Correct:
      "Context API, fərqli komponentlər arasında müəyyən məlumatları həmin komponentlər render olmadan əlçatan edir",
    WrongAnswer1:
      "Məlumatı global olaraq paylaşmaq və bu məlumata giriş üçün istifadə olunan bir xüsusiyyətdir.",
    WrongAnswer2:
      "Context API, global vəziyyət idarəsi üçün istifadə olunur və prop drilling ehtiyacını aradan qaldırır",
    WrongAnswer3: " Komponentlər arasında məlumatın paylaşılmasını təmin edir",
    Category: "React",
  },
  {
    id: "REACT043",
    Question: "React-da 'Error Boundaries' nədir və nə üçün istifadə olunur?",
    Correct:
      "Komponentlərdəki xəta halında tətbiqin qalan hissəsini göstərmək üçün",
    WrongAnswer1: "Xəta halında virtual DOM-u qorumaq üçün",
    WrongAnswer2:
      "Xəta halında komponentləri run edərək xətaları log etmək üçün",
    WrongAnswer3: "Komponentləri birləşdirərək onları kompleksləşdirmək üçün",
    Category: "React",
  },
  {
    id: "REACT044",
    Question: "React-da 'Suspense' nədir və nə üçün istifadə olunur?",
    Correct:
      "Asinxron məlumat yükləmə zamanı gecikmələri idarə etmək üçün istifadə olunur",
    WrongAnswer1:
      "Funksionallı komponentləri əsas məzmuna alaraq yenidən-render olunmasını sıfırlamaq üçün",
    WrongAnswer2:
      "Məzmun yüklənənə qədər gözləmədən gecikən məzmunu göstərmək üçün, istifadə olunur",
    WrongAnswer3: "Bunlardan heç biri",
    Category: "React",
  },
  {
    id: "REACT045",
    Question: "React-da 'Portals' nədir və nə üçün istifadə olunur?",
    Correct:
      "Əlavə elementlər yaratmadan məzmunu başqa bir yerdə render etmək üçün",
    WrongAnswer1: "Virtual DOM-a portal vasitəsilə məzmun yükləmək üçün",
    WrongAnswer2: "Məzmunu fərqli bölmələrə ayırmaq üçün",
    WrongAnswer3: "Komponentlərin state və prop-larını dəyişmək üçün",
    Category: "React",
  },
  {
    id: "REACT046",
    Question: "React-da 'StrictMode' nədir və nə üçün istifadə olunur?",
    Correct:
      "Komponentləri və lifecycle methodların səhvlərə qarşı nəzarət etməsi üçün istifadə olunur",
    WrongAnswer1:
      "Funksionallı komponentləri memoya alaraq yenidən-render olunmasını sıfırlayır",
    WrongAnswer2: "Verilənlər bazası əməliyyatıdır. ",
    WrongAnswer3: "İstifadəçi interfeysi dizayn etmək üçün",
    Category: "React",
  },
  {
    id: "REACT047",
    Question: "React-da 'Lazy loading' nədir və nə üçün istifadə olunur?",
    Correct:
      "Tətbiqin yüklənmə vaxtını azaltmaq üçün məzmunun lazımi olduğu vaxt yükləmək üçün istifadə olunur",
    WrongAnswer1:
      "Virtual DOM-da yüklənməni azalatmaq və tətbiqin sürətini artırmaq üçün",
    WrongAnswer2:
      "Funksionallı komponentləri memoyaya alaraq yenidən-render olunmadan yükləmək üçün",
    WrongAnswer3: "Komponentləri lazy yükləmək üçün istifadə olunur",
    Category: "React",
  },
  {
    id: "REACT048",
    Question: "React-da 'useEffect' nədir və nə üçün istifadə olunur?",
    Correct: "Komponentin təyin edilmiş dəyişəninin durumu dəyişdikdə çalışır",
    WrongAnswer1:
      "Komponentləri birbiri ilə əlaqələndirərək renderə nəzarət etmək üçün",
    WrongAnswer2:
      "Komponentlərdəki xəta halında tətbiqin qalan hissəsini göstərmək üçün",
    WrongAnswer3: "Komponentləri əlaqələndirmək üçün",
    Category: "React",
  },
  {
    id: "REACT049",
    Question: "React-da 'useContext' nədir və nə üçün istifadə olunur?",
    Correct:
      "Context API-dən istifadə edərək məlumat alaraq yenidən render olmaq üçün istifadə olunur",
    WrongAnswer1:
      "Context API-dən istifadə edərək məlumat almadan yenidən render olmaq üçün istifadə olunur",
    WrongAnswer2:
      "Context API-dən istifadə edərək məlumat almaq və yenidən render olmadan  istifadə olunur",
    WrongAnswer3:
      "Context API-dən istifadə edərək məlumat almadan və yenidən render olmadan istifadə olunur",
    Category: "React",
  },
  {
    id: "REACT050",
    Question: "React-da 'useState' nədir və nə üçün istifadə olunur?",
    Correct:
      "Komponentin daxili vəziyyətini saxlamaq və bu vəziyyəti yenidən render etmək üçün istifadə olunur",
    WrongAnswer1:
      "Komponentin daxili vəziyyətini saxlamadan bu vəziyyəti yenidən render etmək üçün istifadə olunur",
    WrongAnswer2:
      "Komponentin daxili vəziyyətini saxlamadan və bu vəziyyəti yenidən render etmədən istifadə olunur",
    WrongAnswer3:
      "Komponentin daxili vəziyyətini saxlayaraq bu vəziyyəti yenidən render etmədən istifadə olunur",
    Category: "React",
  },
  {
    id: "JS050",
    Question:
      "JavaScript-də 'Arrow Functions' nədir və nə üçün istifadə olunur?",
    Correct:
      "Arrow Functions, JavaScript-də funksiyaları qısa sintaksis ilə ifadə etmək üçün istifadə olunan bir funskiyadır",
    WrongAnswer1:
      "Arrow Functions, JavaScript-də interaktiv elementlərə müraciət təmin etmək üçün istifadə olunur",
    WrongAnswer2:
      "Arrow Functions, funksiyanın alt növüdür və ana funksiyanın məzmununu dəyişmək üçün istifadə olunur",
    WrongAnswer3:
      "Arrow Functions, JavaScript-də funksiyaların təhlükəsizliyini artırmaq üçün istifadə olunur",
    Category: "JavaScript",
  },
  {
    id: "JS051",
    Question: "JavaScript-də 'Prototype' nədir və nə üçün istifadə olunur?",
    Correct:
      "Prototype, hər hansı bir obyekt yaradarkən əlavə metod və xüsusiyyətləri əlavə etmək üçün istifadə olunan mənbə obyektidir.",
    WrongAnswer1:
      "Prototype, səhifənin dizaynını tənzimləmək üçün istifadə olunur",
    WrongAnswer2: "Prototype, API-ləri təyin etmək üçün istifadə olunur",
    WrongAnswer3:
      "Prototype, JavaScript-də funksionallığı əlavə etmək üçün istifadə olunur",
    Category: "JavaScript",
  },
  {
    id: "JS052",
    Question: "JavaScript-də 'Closures' nədir və nə üçün istifadə olunur?",
    Correct:
      "Closures, funksiyaların daxilindən yaradılan və daxilindəki məlumatlara gizli müraciət etməyə imkan verən xüsusiyyətdir.",
    WrongAnswer1: "Closures, CSS-stilləri tənzimləmək üçün istifadə olunur",
    WrongAnswer2:
      "Closures, funksiyaların sıralamasını tənzim etmək üçün istifadə olunur",
    WrongAnswer3:
      "Closures, HTML elementlərini daxilində saxlamaq üçün istifadə olunur",
    Category: "JavaScript",
  },
  {
    id: "JS053",
    Question:
      "JavaScript-də 'Callback Functions' nədir və nə üçün istifadə olunur?",
    Correct:
      "Callback Functions, bir funksiyanın başqa bir funksiya tərəfindən çağırılması və ya istifadə olunması zamanı icra olunan funksiyadır.",
    WrongAnswer1: "Callback Functions, fayl yükləmək üçün istifadə olunur",
    WrongAnswer2:
      "Callback Functions, səhifə elementlərini tənzimləmək üçün istifadə olunur",
    WrongAnswer3:
      "Callback Functions, API-lər ilə məlumat əməliyyatları üçün istifadə olunur",
    Category: "JavaScript",
  },
  {
    id: "JS054",
    Question: "JavaScript-də 'Promise' nədir və nə üçün istifadə olunur?",
    Correct:
      "Promise, asinxron məlumat əməliyyatları üçün nəzərdə tutulan bir obyekt və ya proxy-dir, əsasən asinxron kodu oxşayır.",
    WrongAnswer1:
      "Promise, səhifənin dizaynını tənzimləmək üçün istifadə olunur",
    WrongAnswer2: "Promise, faylları yükləmək üçün istifadə olunur",
    WrongAnswer3:
      "Promise, JavaScript funksiyalarını daxilində saxlamaq üçün istifadə olunur",
    Category: "JavaScript",
  },
  {
    id: "JS055",
    Question: "JavaScript-də 'Strict Mode' nədir və nə üçün istifadə olunur?",
    Correct:
      "Strict Mode, JavaScript-də kodun daha səmərəli, təhlükəsiz və performant olması üçün işlənən xüsusiyyətdir.",
    WrongAnswer1: "Strict Mode, CSS-stilləri tənzimləmək üçün istifadə olunur",
    WrongAnswer2:
      "Strict Mode, səhifədə elementləri animasiya etmək üçün istifadə olunur",
    WrongAnswer3:
      "Strict Mode, JavaScript funksiyalarını sıralamaq üçün istifadə olunur",
    Category: "JavaScript",
  },
  {
    id: "JS056",
    Question: "JavaScript-də 'DOM' nə deməkdir və nə üçün istifadə olunur?",
    Correct:
      "DOM (Document Object Model), bir HTML və ya XML sənədini təmsil edən bir obyekt modelidir. JavaScript ilə bu sənədlərin strukturu və məzmunu dəyişdirilə bilər.",
    WrongAnswer1: "DOM, faylları yükləmək üçün istifadə olunur",
    WrongAnswer2: "DOM, CSS-stilləri tənzimləmək üçün istifadə olunur",
    WrongAnswer3:
      "DOM, JavaScript funksiyalarını daxilində saxlamaq üçün istifadə olunur",
    Category: "JavaScript",
  },
  {
    id: "JS057",
    Question:
      "JavaScript-də 'Event Bubbling' və 'Event Capturing' arasındakı fərq nədir?",
    Correct:
      "'Event Bubbling', bir hadisə yarananda, elementin daxilindən ən ancaq bir elementə yönəlmə prosesidir. 'Event Capturing' isə, bir hadisə yarananda, ən ancaq ən daxilə, ən dərin elementə yönəlmə prosesidir.",
    WrongAnswer1:
      "Event Bubbling, bir elementin digər elementlər üçün daxilinə yerləşdirilməsi prosesidir",
    WrongAnswer2:
      "Event Capturing, JavaScript funksiyalarının bir-birini izləmə prosesidir",
    WrongAnswer3: "Event Bubbling, səhifədə elementlərin gizləməsi prosesidir",
    Category: "JavaScript",
  },
  {
    id: "JS058",
    Question: "JavaScript-də 'Async/Await' nədir və nə üçün istifadə olunur?",
    Correct:
      "Async/Await, asinxron funksiyaları qurmadan asinxron kodunu daha rahat oxumaq üçün istifadə olunan bir funksionallıqdır",
    WrongAnswer1:
      "Async/Await, səhifənin dizaynını tənzimləmək üçün istifadə olunur",
    WrongAnswer2: "Async/Await, faylları yükləmək üçün istifadə olunur",
    WrongAnswer3:
      "Async/Await, JavaScript-də funksiyaları sıralamaq üçün istifadə olunur",
    Category: "JavaScript",
  },
  {
    id: "JS059",
    Question: "JavaScript-də 'Hoisting' nədir və nə üçün baş verir?",
    Correct:
      "Hoisting, JavaScript-də dəyişənlərin və funksiyaların kodun yuxarı hissəsinə təşkil olunduğu prosesdir. Bu, dəyişənlər və funksiyalar kod icra olunmadan əvvəl təyin edilə bilər, buna görə də kod istifadəçilər tərəfindən anlaşılmalıdır.",
    WrongAnswer1:
      "Hoisting, HTML elementlərini səhifəyə yükləmək üçün istifadə olunur",
    WrongAnswer2: "Hoisting, API-ləri təyin etmək üçün istifadə olunur",
    WrongAnswer3:
      "Hoisting, funksiyaların digər funksiyalar içində dəyərləndirilməsi üçün istifadə olunur",
    Category: "JavaScript",
  },
  {
    id: "JS060",
    Question: "JavaScript-də 'JSON' nədir və nə üçün istifadə olunur?",
    Correct:
      "JSON (JavaScript Object Notation), məlumatları təşkil etmək və ötürmək üçün istifadə olunan bir açıq məlumat mübadilə formatıdır.",
    WrongAnswer1:
      "JSON, JavaScript-də funksiyaları tənzimləmək üçün istifadə olunur",
    WrongAnswer2:
      "JSON, səhifədə interaktiv elementləri yaratmaq üçün istifadə olunur",
    WrongAnswer3:
      "JSON, səhifədə animasiya effektləri təyin etmək üçün istifadə olunur",
    Category: "JavaScript",
  },
  {
    id: "JS061",
    Question: "JavaScript-də 'let' və 'const' açarı fərqlər nələrdir?",
    Correct: "let dəyişənlərin yenidən təyin olunmasına imkan verir, const isə sabit dəyişənlər üçün istifadə olunur.",
    WrongAnswer1: "let yalnız global dəyişənləri təyin etmək üçün istifadə olunur, const isə yalnız lokal dəyişənlər üçün.",
    WrongAnswer2: "let ilə yalnız nömrələri, const ilə yalnız simvolları dəyişə bilərsiniz.",
    WrongAnswer3: "let və const eyni məqsədə xidmət edir, yalnız sintaksisi fərqlidir.",
    Category: "JavaScript"
  }
  
];

function findQuestions() {
  const index = Math.floor(Math.random() * questions.length);
  const question = questions[index];
  questions.splice(index, 1);
  return question;
}
const Bank = () => {
  return <div></div>;
};
export default Bank;

export { findQuestions, questions };
