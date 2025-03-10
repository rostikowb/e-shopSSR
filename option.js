export const option = {
  // api: "http://localhost:5000",
  // api: "http://192.168.1.104:3001",
  api: "https://api.vsivuha.online",
  STATIC: "https://vsivuha.online",

  DOMEN: "http://localhost",

  DOMENREGEX: /localhost/,

  // goodsCount
  GC: 29,

  // procent skidki
  interest: 20,
  // nova poshta keyAPI
  NPkey: "11e6b768f60094240422f5c8af2d5a24", // обновлять кожен місяць 30.09.2021 16:08:07
  // 0 = в обработке 1 = готовится к отправке 2 = у новой почты 3 = забрано 4 = отказался
  status: [
    "в обработке",
    "готовится к отправке",
    "передано в службу доставки",
    "забрано",
    "отказ",
  ],
  goods: [
    {value: "11900213", label: {ru: "Кабели синхронизации", ua: "Кабелі синхронизації"}},
    {value: "11900214", label: {ru: "Чехлы", ua: 'Чохли'}},
    {value: "11900215", label: {ru: "Защитные стекла", ua: "Захисні стекла"}},
    {value: "11900217", label: {ru: "Проводные зарядки", ua: "Проводні зарядки"}},
    {value: "11900220", label: {ru: "Моноподы для селфи", ua: "Моноподи для селфі"}},
    {value: "11900221", label: {ru: "Автодержатели", ua: "Автотримачі"}},
    {value: "11900222", label: {ru: "Переходники", ua: "Перехідники"}},
    {value: "11900223", label: {ru: "Карты памяти", ua: "Карти памяті"}},
    {value: "11900228", label: {ru: "Аккумуляторы для смартфона", ua: "Акумулятори для смартфона"}},
    {value: "11900211", label: {ru: "Наушники и гарнитуры", ua: "Навушники і гарнітура"}},
    {value: "11900212", label: {ru: "Power Bank", ua: "Повербанк"}},
    {value: "11900216", label: {ru: "Портативные колонки", ua: "Портативні колонки"}},
    {value: "11900219", label: {ru: "Беспроводные зарядки", ua: "Бездротові зарядки"}},
    {value: "11900233", label: {ru: "Чехлы для наушников", ua: "Чохли для навушників"}},
    {value: "11900218", label: {ru: "Автомобильные ЗУ", ua: "Автомобільні ЗП"}},
    {value: "11900224", label: {ru: "VR очки", ua: "VR очки"}},
    {value: "11900226", label: {ru: "Сетевые удлинители", ua: "Мережеві подовжувачі"}},
    {value: "11900231", label: {ru: "Аксессуары для смарт-часов", ua: "Аксесуари для смарт-годинників"}},
    {value: "11900232", label: {ru: "Джойстики, триггеры", ua: "Джойстики, тригери"}},
    {value: "11900234", label: {ru: "Увлажнители воздуха", ua: "Зволожувачі повітря"}},
    {value: "11900235", label: {ru: "Лампы, свет", ua: "Лампи, світло"}},
  ],
};
