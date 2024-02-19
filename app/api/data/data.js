export const students = [
  {
    id: 1,
    name: "Артем Троян",
    contacts: "+3809326457",
    group: "Группа онлайн 1",
    groupType: "online",
    age: 25,
    tariff: 3500,
    allLessons: 8,
    checkLessons: 0,
    parentName: "none",
  },
  {
    id: 2,
    name: "Ирина Петрова",
    contacts: "+380932654321",
    group: "Группа онлайн 1",
    groupType: "online",
    age: 23,
    tariff: 4000,
    allLessons: 10,
    checkLessons: 2,
    parentName: "Елена Петрова",
  },
  {
    id: 3,
    name: "Александр Иванов",
    contacts: "+380931234567",
    group: "Группа онлайн 1",
    groupType: "offline",
    age: 22,
    tariff: 4500,
    allLessons: 12,
    checkLessons: 5,
    parentName: "Иван Иванов",
  },
  {
    id: 4,
    name: "Мария Сидорова",
    contacts: "+380936543210",
    group: "Группа онлайн 2",
    groupType: "offline",
    age: 24,
    tariff: 3800,
    allLessons: 10,
    checkLessons: 3,
    parentName: "Ольга Сидорова",
  },
  {
    id: 5,
    name: "Дмитрий Козлов",
    contacts: "+380935678901",
    group: "Группа онлайн 2",
    groupType: "online",
    age: 26,
    tariff: 4200,
    allLessons: 8,
    checkLessons: 1,
    parentName: "Наталья Козлова",
  },
  {
    id: 6,
    name: "Екатерина Лебедева",
    contacts: "+380939876543",
    group: "Группа онлайн 2",
    groupType: "offline",
    age: 27,
    tariff: 4000,
    allLessons: 9,
    checkLessons: 4,
    parentName: "Андрей Лебедев",
  },
  {
    id: 7,
    name: "Сергей Михайлов",
    contacts: "+380937654321",
    group: "Группа офлайн 1",
    groupType: "online",
    age: 24,
    tariff: 3800,
    allLessons: 11,
    checkLessons: 6,
    parentName: "Марина Михайлова",
  },
  {
    id: 8,
    name: "Ольга Кравченко",
    contacts: "+380931112233",
    group: "Группа офлайн 1",
    groupType: "offline",
    age: 28,
    tariff: 4700,
    allLessons: 14,
    checkLessons: 8,
    parentName: "Игорь Кравченко",
  },
  {
    id: 9,
    name: "Владимир Захаров",
    contacts: "+380931223344",
    group: "Группа офлайн 1",
    groupType: "online",
    age: 25,
    tariff: 4100,
    allLessons: 9,
    checkLessons: 3,
    parentName: "Алена Захарова",
  },
  {
    id: 10,
    name: "Елена Новикова",
    contacts: "+380931334455",
    group: "Группа офлайн 2",
    groupType: "offline",
    age: 26,
    tariff: 3900,
    allLessons: 13,
    checkLessons: 7,
    parentName: "Сергей Новиков",
  },
  {
    id: 11,
    name: "Андрей Кузнецов",
    contacts: "+380931445566",
    group: "Группа офлайн 2",
    groupType: "online",
    age: 27,
    tariff: 4300,
    allLessons: 12,
    checkLessons: 5,
    parentName: "Оксана Кузнецова",
  },
  {
    id: 12,
    name: "Наталия Морозова",
    contacts: "+380931556677",
    group: "Группа офлайн 2",
    groupType: "offline",
    age: 24,
    tariff: 3600,
    allLessons: 11,
    checkLessons: 4,
    parentName: "Иван Морозов",
  },
];

export const groups = [
  {
    id: 1,
    name: "Группа онлайн 1",
    type: "online",
    studentsCount: 3,
    income: 0,
    cleareIncome: 9000,
    teacher: "Ольга Смирнова",
    students: [students[0], students[1], students[2]],
  },
  {
    id: 2,
    name: "Группа онлайн 2",
    type: "online",
    studentsCount: 3,
    income: 9000,
    cleareIncome: 7800,
    teacher: "Марк Миллер",
    students: [students[3], students[4], students[5]],
  },
  {
    id: 3,
    name: "Группа офлайн 1",
    type: "offline",
    studentsCount: 3,
    income: 9000,
    cleareIncome: 7800,
    teacher: "Екатерина Никон",
    students: [students[6], students[7], students[8]],
  },
  {
    id: 4,
    name: "Группа офлайн 2",
    type: "offline",
    studentsCount: 3,
    income: 9000,
    cleareIncome: 7800,
    teacher: "Дмитрий Ольман",
    students: [students[9], students[10], students[11]],
  },
];

export const teachers = [
  {
    id: 1,
    name: "Ольга Смирнова",
    bidGroup: 200,
    bidIndiv: 150,
    group: "Группа онлайн 1",
  },

  {
    id: 2,
    name: "Марк Миллер",
    bidGroup: 200,
    bidIndiv: 150,
    group: "Группа онлайн 2",
  },

  {
    id: 3,
    name: "Екатерина Никон",
    bidGroup: 250,
    bidIndiv: 200,
    group: "Группа офлайн 1",
  },

  {
    id: 4,
    name: "Дмитрий Ольман",
    bidGroup: 250,
    bidIndiv: 200,
    group: "Группа офлайн 2",
  },
];

export const data = {
  students: students,
  teachers: teachers,
  groups: groups,
};
