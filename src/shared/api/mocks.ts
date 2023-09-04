import { OrderStatus, BurgerIngredientDto, OrderDto } from "./dto";

export const mockedBurgerIngredients: BurgerIngredientDto[] = [
  {
    _id: "60666c42cc7b410027a1a9b1",
    name: "Краторная булка N-200i",
    type: "bun",
    proteins: 80,
    fat: 24,
    carbohydrates: 53,
    calories: 420,
    price: 1255,
    image: "https://code.s3.yandex.net/react/code/bun-02.png",
    image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
    __v: 0,
  },
  {
    _id: "60666c42cc7b410027a1a9b5",
    name: "Говяжий метеорит (отбивная)",
    type: "main",
    proteins: 800,
    fat: 800,
    carbohydrates: 300,
    calories: 2674,
    price: 3000,
    image: "https://code.s3.yandex.net/react/code/meat-04.png",
    image_mobile: "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/meat-04-large.png",
    __v: 0,
  },
  {
    _id: "60666c42cc7b410027a1a9b6",
    name: "Биокотлета из марсианской Магнолии",
    type: "main",
    proteins: 420,
    fat: 142,
    carbohydrates: 242,
    calories: 4242,
    price: 424,
    image: "https://code.s3.yandex.net/react/code/meat-01.png",
    image_mobile: "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/meat-01-large.png",
    __v: 0,
  },
  {
    _id: "60666c42cc7b410027a1a9b7",
    name: "Соус Spicy-X",
    type: "sauce",
    proteins: 30,
    fat: 20,
    carbohydrates: 40,
    calories: 30,
    price: 90,
    image: "https://code.s3.yandex.net/react/code/sauce-02.png",
    image_mobile: "https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/sauce-02-large.png",
    __v: 0,
  },
  {
    _id: "60666c42cc7b410027a1a9b4",
    name: "Мясо бессмертных моллюсков Protostomia",
    type: "main",
    proteins: 433,
    fat: 244,
    carbohydrates: 33,
    calories: 420,
    price: 1337,
    image: "https://code.s3.yandex.net/react/code/meat-02.png",
    image_mobile: "https://code.s3.yandex.net/react/code/meat-02-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/meat-02-large.png",
    __v: 0,
  },
  {
    _id: "60666c42cc7b410027a1a9b9",
    name: "Соус традиционный галактический",
    type: "sauce",
    proteins: 42,
    fat: 24,
    carbohydrates: 42,
    calories: 99,
    price: 15,
    image: "https://code.s3.yandex.net/react/code/sauce-03.png",
    image_mobile: "https://code.s3.yandex.net/react/code/sauce-03-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/sauce-03-large.png",
    __v: 0,
  },
  {
    _id: "60666c42cc7b410027a1a9b8",
    name: "Соус фирменный Space Sauce",
    type: "sauce",
    proteins: 50,
    fat: 22,
    carbohydrates: 11,
    calories: 14,
    price: 80,
    image: "https://code.s3.yandex.net/react/code/sauce-04.png",
    image_mobile: "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/sauce-04-large.png",
    __v: 0,
  },
  {
    _id: "60666c42cc7b410027a1a9bc",
    name: "Плоды Фалленианского дерева",
    type: "main",
    proteins: 20,
    fat: 5,
    carbohydrates: 55,
    calories: 77,
    price: 874,
    image: "https://code.s3.yandex.net/react/code/sp_1.png",
    image_mobile: "https://code.s3.yandex.net/react/code/sp_1-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/sp_1-large.png",
    __v: 0,
  },
  {
    _id: "60666c42cc7b410027a1a9bb",
    name: "Хрустящие минеральные кольца",
    type: "main",
    proteins: 808,
    fat: 689,
    carbohydrates: 609,
    calories: 986,
    price: 300,
    image: "https://code.s3.yandex.net/react/code/mineral_rings.png",
    image_mobile:
      "https://code.s3.yandex.net/react/code/mineral_rings-mobile.png",
    image_large:
      "https://code.s3.yandex.net/react/code/mineral_rings-large.png",
    __v: 0,
  },
  {
    _id: "60666c42cc7b410027a1a9ba",
    name: "Соус с шипами Антарианского плоскоходца",
    type: "sauce",
    proteins: 101,
    fat: 99,
    carbohydrates: 100,
    calories: 100,
    price: 88,
    image: "https://code.s3.yandex.net/react/code/sauce-01.png",
    image_mobile: "https://code.s3.yandex.net/react/code/sauce-01-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/sauce-01-large.png",
    __v: 0,
  },
  {
    _id: "60666c42cc7b410027a1a9bd",
    name: "Кристаллы марсианских альфа-сахаридов",
    type: "main",
    proteins: 234,
    fat: 432,
    carbohydrates: 111,
    calories: 189,
    price: 762,
    image: "https://code.s3.yandex.net/react/code/core.png",
    image_mobile: "https://code.s3.yandex.net/react/code/core-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/core-large.png",
    __v: 0,
  },
  {
    _id: "60666c42cc7b410027a1a9be",
    name: "Мини-салат Экзо-Плантаго",
    type: "main",
    proteins: 1,
    fat: 2,
    carbohydrates: 3,
    calories: 6,
    price: 4400,
    image: "https://code.s3.yandex.net/react/code/salad.png",
    image_mobile: "https://code.s3.yandex.net/react/code/salad-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/salad-large.png",
    __v: 0,
  },
  {
    _id: "60666c42cc7b410027a1a9b3",
    name: "Филе Люминесцентного тетраодонтимформа",
    type: "main",
    proteins: 44,
    fat: 26,
    carbohydrates: 85,
    calories: 643,
    price: 988,
    image: "https://code.s3.yandex.net/react/code/meat-03.png",
    image_mobile: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/meat-03-large.png",
    __v: 0,
  },
  {
    _id: "60666c42cc7b410027a1a9bf",
    name: "Сыр с астероидной плесенью",
    type: "main",
    proteins: 84,
    fat: 48,
    carbohydrates: 420,
    calories: 3377,
    price: 4142,
    image: "https://code.s3.yandex.net/react/code/cheese.png",
    image_mobile: "https://code.s3.yandex.net/react/code/cheese-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/cheese-large.png",
    __v: 0,
  },
  {
    _id: "60666c42cc7b410027a1a9b2",
    name: "Флюоресцентная булка R2-D3",
    type: "bun",
    proteins: 44,
    fat: 26,
    carbohydrates: 85,
    calories: 643,
    price: 988,
    image: "https://code.s3.yandex.net/react/code/bun-01.png",
    image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
    __v: 0,
  },
];

export const mockedConfigurationData: BurgerIngredientDto[] = [
  {
    _id: "60666c42cc7b410027a1a9b9",
    name: "Соус традиционный галактический",
    type: "sauce",
    proteins: 42,
    fat: 24,
    carbohydrates: 42,
    calories: 99,
    price: 15,
    image: "https://code.s3.yandex.net/react/code/sauce-03.png",
    image_mobile: "https://code.s3.yandex.net/react/code/sauce-03-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/sauce-03-large.png",
    __v: 0,
  },
  {
    _id: "60666c42cc7b410027a1a9b4",
    name: "Мясо бессмертных моллюсков Protostomia",
    type: "main",
    proteins: 433,
    fat: 244,
    carbohydrates: 33,
    calories: 420,
    price: 1337,
    image: "https://code.s3.yandex.net/react/code/meat-02.png",
    image_mobile: "https://code.s3.yandex.net/react/code/meat-02-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/meat-02-large.png",
    __v: 0,
  },
  {
    _id: "60666c42cc7b410027a1a9bc",
    name: "Плоды Фалленианского дерева",
    type: "main",
    proteins: 20,
    fat: 5,
    carbohydrates: 55,
    calories: 77,
    price: 874,
    image: "https://code.s3.yandex.net/react/code/sp_1.png",
    image_mobile: "https://code.s3.yandex.net/react/code/sp_1-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/sp_1-large.png",
    __v: 0,
  },
  {
    _id: "60666c42cc7b410027a1a9bb",
    name: "Хрустящие минеральные кольца",
    type: "main",
    proteins: 808,
    fat: 689,
    carbohydrates: 609,
    calories: 986,
    price: 300,
    image: "https://code.s3.yandex.net/react/code/mineral_rings.png",
    image_mobile:
      "https://code.s3.yandex.net/react/code/mineral_rings-mobile.png",
    image_large:
      "https://code.s3.yandex.net/react/code/mineral_rings-large.png",
    __v: 0,
  },
  {
    _id: "60666c42cc7b410027a1a9bwergwerg9",
    name: "Соус традиционный галактический",
    type: "sauce",
    proteins: 42,
    fat: 24,
    carbohydrates: 42,
    calories: 99,
    price: 15,
    image: "https://code.s3.yandex.net/react/code/sauce-03.png",
    image_mobile: "https://code.s3.yandex.net/react/code/sauce-03-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/sauce-03-large.png",
    __v: 0,
  },
  {
    _id: "60666c42cc7b410027a1a9bergewrg4",
    name: "Мясо бессмертных моллюсков Protostomia",
    type: "main",
    proteins: 433,
    fat: 244,
    carbohydrates: 33,
    calories: 420,
    price: 1337,
    image: "https://code.s3.yandex.net/react/code/meat-02.png",
    image_mobile: "https://code.s3.yandex.net/react/code/meat-02-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/meat-02-large.png",
    __v: 0,
  },
  {
    _id: "60666c42cc7b410027a1a9bcergewrgreg",
    name: "Плоды Фалленианского дерева",
    type: "main",
    proteins: 20,
    fat: 5,
    carbohydrates: 55,
    calories: 77,
    price: 874,
    image: "https://code.s3.yandex.net/react/code/sp_1.png",
    image_mobile: "https://code.s3.yandex.net/react/code/sp_1-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/sp_1-large.png",
    __v: 0,
  },
  {
    _id: "60666c42cc7b410027a1a9bbwergwergerg",
    name: "Хрустящие минеральные кольца",
    type: "main",
    proteins: 808,
    fat: 689,
    carbohydrates: 609,
    calories: 986,
    price: 300,
    image: "https://code.s3.yandex.net/react/code/mineral_rings.png",
    image_mobile:
      "https://code.s3.yandex.net/react/code/mineral_rings-mobile.png",
    image_large:
      "https://code.s3.yandex.net/react/code/mineral_rings-large.png",
    __v: 0,
  },
  {
    _id: "60666c42cc7b410027a1ergewrgewrga9b9",
    name: "Соус традиционный галактический",
    type: "sauce",
    proteins: 42,
    fat: 24,
    carbohydrates: 42,
    calories: 99,
    price: 15,
    image: "https://code.s3.yandex.net/react/code/sauce-03.png",
    image_mobile: "https://code.s3.yandex.net/react/code/sauce-03-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/sauce-03-large.png",
    __v: 0,
  },
  {
    _id: "60666c42cc7b410027a1a9bheerherwhe4",
    name: "Мясо бессмертных моллюсков Protostomia",
    type: "main",
    proteins: 433,
    fat: 244,
    carbohydrates: 33,
    calories: 420,
    price: 1337,
    image: "https://code.s3.yandex.net/react/code/meat-02.png",
    image_mobile: "https://code.s3.yandex.net/react/code/meat-02-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/meat-02-large.png",
    __v: 0,
  },
  {
    _id: "60666c42cc7b410027a1a9bcewrgwergerwg",
    name: "Плоды Фалленианского дерева",
    type: "main",
    proteins: 20,
    fat: 5,
    carbohydrates: 55,
    calories: 77,
    price: 874,
    image: "https://code.s3.yandex.net/react/code/sp_1.png",
    image_mobile: "https://code.s3.yandex.net/react/code/sp_1-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/sp_1-large.png",
    __v: 0,
  },
  {
    _id: "60666c42cc7b410027a1a9bbwioejwef",
    name: "Хрустящие минеральные кольца",
    type: "main",
    proteins: 808,
    fat: 689,
    carbohydrates: 609,
    calories: 986,
    price: 300,
    image: "https://code.s3.yandex.net/react/code/mineral_rings.png",
    image_mobile:
      "https://code.s3.yandex.net/react/code/mineral_rings-mobile.png",
    image_large:
      "https://code.s3.yandex.net/react/code/mineral_rings-large.png",
    __v: 0,
  },
];

export const mockedConfigurationPrice = mockedConfigurationData.reduce(
  (acc, currentItem) => acc + currentItem.price,
  0
);

export const mockedOrders: OrderDto[] = [
  {
    _id: "64f4cc546d2997001caa5dff",
    ingredients: [
      "643d69a5c3f7b9001cfa0943",
      "643d69a5c3f7b9001cfa0942",
      "643d69a5c3f7b9001cfa093d",
    ],
    status: "done",
    name: "Space флюоресцентный spicy бургер",
    createdAt: "2023-09-03T18:11:32.235Z",
    updatedAt: "2023-09-03T18:11:32.483Z",
    number: 19181,
  },
  {
    _id: "64f4cc126d2997001caa5dfe",
    ingredients: ["643d69a5c3f7b9001cfa0943", "643d69a5c3f7b9001cfa093d"],
    status: "done",
    name: "Space флюоресцентный бургер",
    createdAt: "2023-09-03T18:10:26.505Z",
    updatedAt: "2023-09-03T18:10:26.697Z",
    number: 19180,
  },
  {
    _id: "64f4cbf56d2997001caa5dfd",
    ingredients: [
      "643d69a5c3f7b9001cfa093e",
      "643d69a5c3f7b9001cfa0940",
      "643d69a5c3f7b9001cfa093d",
    ],
    status: "done",
    name: "Люминесцентный флюоресцентный метеоритный бургер",
    createdAt: "2023-09-03T18:09:57.136Z",
    updatedAt: "2023-09-03T18:09:57.365Z",
    number: 19179,
  },
  {
    _id: "64f4cbd66d2997001caa5dfc",
    ingredients: [
      "643d69a5c3f7b9001cfa093f",
      "643d69a5c3f7b9001cfa0946",
      "643d69a5c3f7b9001cfa093d",
    ],
    status: "done",
    name: "Минеральный бессмертный флюоресцентный бургер",
    createdAt: "2023-09-03T18:09:26.709Z",
    updatedAt: "2023-09-03T18:09:26.901Z",
    number: 19178,
  },
  {
    _id: "64f4cbb26d2997001caa5dfb",
    ingredients: [
      "643d69a5c3f7b9001cfa0942",
      "643d69a5c3f7b9001cfa0945",
      "643d69a5c3f7b9001cfa0940",
      "643d69a5c3f7b9001cfa093d",
    ],
    status: "done",
    name: "Антарианский метеоритный флюоресцентный spicy бургер",
    createdAt: "2023-09-03T18:08:50.761Z",
    updatedAt: "2023-09-03T18:08:50.962Z",
    number: 19177,
  },
  {
    _id: "64f4cb9a6d2997001caa5df8",
    ingredients: ["643d69a5c3f7b9001cfa0943", "643d69a5c3f7b9001cfa093d"],
    status: "done",
    name: "Space флюоресцентный бургер",
    createdAt: "2023-09-03T18:08:26.093Z",
    updatedAt: "2023-09-03T18:08:26.281Z",
    number: 19176,
  },
  {
    _id: "64f4ca016d2997001caa5def",
    ingredients: [
      "643d69a5c3f7b9001cfa093c",
      "643d69a5c3f7b9001cfa0941",
      "643d69a5c3f7b9001cfa093e",
      "643d69a5c3f7b9001cfa0947",
      "643d69a5c3f7b9001cfa0946",
      "643d69a5c3f7b9001cfa093c",
    ],
    status: "done",
    name:
      "Фалленианский минеральный био-марсианский люминесцентный краторный бургер",
    createdAt: "2023-09-03T18:01:37.758Z",
    updatedAt: "2023-09-03T18:01:38.028Z",
    number: 19175,
  },
  {
    _id: "64f4b5dd6d2997001caa5dac",
    ingredients: ["643d69a5c3f7b9001cfa093d", "643d69a5c3f7b9001cfa0943"],
    status: "done",
    name: "Space флюоресцентный бургер",
    createdAt: "2023-09-03T16:35:41.683Z",
    updatedAt: "2023-09-03T16:35:41.850Z",
    number: 19174,
  },
  {
    _id: "64f4b50f6d2997001caa5da8",
    ingredients: ["643d69a5c3f7b9001cfa093d", "643d69a5c3f7b9001cfa0943"],
    status: "done",
    name: "Space флюоресцентный бургер",
    createdAt: "2023-09-03T16:32:15.630Z",
    updatedAt: "2023-09-03T16:32:15.877Z",
    number: 19173,
  },
  {
    _id: "64f4b4da6d2997001caa5da7",
    ingredients: ["643d69a5c3f7b9001cfa093d", "643d69a5c3f7b9001cfa0945"],
    status: "done",
    name: "Антарианский флюоресцентный бургер",
    createdAt: "2023-09-03T16:31:22.726Z",
    updatedAt: "2023-09-03T16:31:22.966Z",
    number: 19172,
  },
  {
    _id: "64f4b49f6d2997001caa5da6",
    ingredients: [
      "643d69a5c3f7b9001cfa093d",
      "643d69a5c3f7b9001cfa093e",
      "643d69a5c3f7b9001cfa0941",
    ],
    status: "done",
    name: "Био-марсианский люминесцентный флюоресцентный бургер",
    createdAt: "2023-09-03T16:30:23.013Z",
    updatedAt: "2023-09-03T16:30:23.195Z",
    number: 19171,
  },
  {
    _id: "64f4b4746d2997001caa5da5",
    ingredients: [
      "643d69a5c3f7b9001cfa093d",
      "643d69a5c3f7b9001cfa0943",
      "643d69a5c3f7b9001cfa0947",
    ],
    status: "done",
    name: "Space флюоресцентный фалленианский бургер",
    createdAt: "2023-09-03T16:29:40.904Z",
    updatedAt: "2023-09-03T16:29:41.137Z",
    number: 19170,
  },
  {
    _id: "64f4b3fe6d2997001caa5da4",
    ingredients: ["643d69a5c3f7b9001cfa093d", "643d69a5c3f7b9001cfa0943"],
    status: "done",
    name: "Space флюоресцентный бургер",
    createdAt: "2023-09-03T16:27:42.260Z",
    updatedAt: "2023-09-03T16:27:42.449Z",
    number: 19169,
  },
  {
    _id: "64f4b3da6d2997001caa5da3",
    ingredients: ["643d69a5c3f7b9001cfa093d", "643d69a5c3f7b9001cfa093e"],
    status: "done",
    name: "Люминесцентный флюоресцентный бургер",
    createdAt: "2023-09-03T16:27:06.368Z",
    updatedAt: "2023-09-03T16:27:06.550Z",
    number: 19168,
  },
  {
    _id: "64f4b3ce6d2997001caa5da2",
    ingredients: [
      "643d69a5c3f7b9001cfa093d",
      "643d69a5c3f7b9001cfa0945",
      "643d69a5c3f7b9001cfa093e",
    ],
    status: "done",
    name: "Антарианский люминесцентный флюоресцентный бургер",
    createdAt: "2023-09-03T16:26:54.943Z",
    updatedAt: "2023-09-03T16:26:55.143Z",
    number: 19167,
  },
  {
    _id: "64f4b3a36d2997001caa5da0",
    ingredients: [
      "643d69a5c3f7b9001cfa093c",
      "643d69a5c3f7b9001cfa0943",
      "643d69a5c3f7b9001cfa0945",
      "643d69a5c3f7b9001cfa0943",
    ],
    status: "done",
    name: "Space антарианский краторный бургер",
    createdAt: "2023-09-03T16:26:11.711Z",
    updatedAt: "2023-09-03T16:26:11.899Z",
    number: 19166,
  },
  {
    _id: "64f4b22f6d2997001caa5d9a",
    ingredients: ["643d69a5c3f7b9001cfa0940", "643d69a5c3f7b9001cfa093c"],
    status: "done",
    name: "Метеоритный краторный бургер",
    createdAt: "2023-09-03T16:19:59.985Z",
    updatedAt: "2023-09-03T16:20:00.180Z",
    number: 19165,
  },
  {
    _id: "64f4b1936d2997001caa5d99",
    ingredients: ["643d69a5c3f7b9001cfa093d", "643d69a5c3f7b9001cfa0943"],
    status: "done",
    name: "Space флюоресцентный бургер",
    createdAt: "2023-09-03T16:17:23.899Z",
    updatedAt: "2023-09-03T16:17:24.088Z",
    number: 19164,
  },
  {
    _id: "64f4aeb66d2997001caa5d96",
    ingredients: [
      "643d69a5c3f7b9001cfa093d",
      "643d69a5c3f7b9001cfa0943",
      "643d69a5c3f7b9001cfa093e",
    ],
    status: "done",
    name: "Space люминесцентный флюоресцентный бургер",
    createdAt: "2023-09-03T16:05:10.087Z",
    updatedAt: "2023-09-03T16:05:10.282Z",
    number: 19163,
  },
  {
    _id: "64f4ae976d2997001caa5d95",
    ingredients: ["643d69a5c3f7b9001cfa0943", "643d69a5c3f7b9001cfa093c"],
    status: "done",
    name: "Space краторный бургер",
    createdAt: "2023-09-03T16:04:39.609Z",
    updatedAt: "2023-09-03T16:04:39.831Z",
    number: 19162,
  },
  {
    _id: "64f4ae786d2997001caa5d94",
    ingredients: [
      "643d69a5c3f7b9001cfa093d",
      "643d69a5c3f7b9001cfa0943",
      "643d69a5c3f7b9001cfa093f",
    ],
    status: "done",
    name: "Бессмертный space флюоресцентный бургер",
    createdAt: "2023-09-03T16:04:08.383Z",
    updatedAt: "2023-09-03T16:04:08.564Z",
    number: 19161,
  },
  {
    _id: "64f4ae616d2997001caa5d93",
    ingredients: [
      "643d69a5c3f7b9001cfa093d",
      "643d69a5c3f7b9001cfa0943",
      "643d69a5c3f7b9001cfa0948",
    ],
    status: "done",
    name: "Альфа-сахаридный space флюоресцентный бургер",
    createdAt: "2023-09-03T16:03:45.221Z",
    updatedAt: "2023-09-03T16:03:45.421Z",
    number: 19160,
  },
  {
    _id: "64f4adfc6d2997001caa5d90",
    ingredients: ["643d69a5c3f7b9001cfa093d", "643d69a5c3f7b9001cfa093d"],
    status: "done",
    name: "Флюоресцентный бургер",
    createdAt: "2023-09-03T16:02:04.790Z",
    updatedAt: "2023-09-03T16:02:04.965Z",
    number: 19159,
  },
  {
    _id: "64f4ade06d2997001caa5d8e",
    ingredients: [
      "643d69a5c3f7b9001cfa093d",
      "643d69a5c3f7b9001cfa0943",
      "643d69a5c3f7b9001cfa0947",
    ],
    status: "done",
    name: "Space флюоресцентный фалленианский бургер",
    createdAt: "2023-09-03T16:01:36.767Z",
    updatedAt: "2023-09-03T16:01:36.943Z",
    number: 19158,
  },
  {
    _id: "64f4adca6d2997001caa5d8c",
    ingredients: ["643d69a5c3f7b9001cfa094a"],
    status: "done",
    name: "Астероидный бургер",
    createdAt: "2023-09-03T16:01:14.390Z",
    updatedAt: "2023-09-03T16:01:14.568Z",
    number: 19157,
  },
  {
    _id: "64f4adb66d2997001caa5d8a",
    ingredients: [
      "643d69a5c3f7b9001cfa093d",
      "643d69a5c3f7b9001cfa0943",
      "643d69a5c3f7b9001cfa093e",
    ],
    status: "done",
    name: "Space люминесцентный флюоресцентный бургер",
    createdAt: "2023-09-03T16:00:54.241Z",
    updatedAt: "2023-09-03T16:00:54.680Z",
    number: 19156,
  },
  {
    _id: "64f4ad316d2997001caa5d88",
    ingredients: [
      "643d69a5c3f7b9001cfa093d",
      "643d69a5c3f7b9001cfa0943",
      "643d69a5c3f7b9001cfa093e",
    ],
    status: "done",
    name: "Space люминесцентный флюоресцентный бургер",
    createdAt: "2023-09-03T15:58:41.305Z",
    updatedAt: "2023-09-03T15:58:41.486Z",
    number: 19155,
  },
  {
    _id: "64f4a9516d2997001caa5d7c",
    ingredients: ["643d69a5c3f7b9001cfa0943"],
    status: "done",
    name: "Space бургер",
    createdAt: "2023-09-03T15:42:09.046Z",
    updatedAt: "2023-09-03T15:42:09.228Z",
    number: 19154,
  },
  {
    _id: "64f4a9186d2997001caa5d78",
    ingredients: [
      "643d69a5c3f7b9001cfa093d",
      "643d69a5c3f7b9001cfa0943",
      "643d69a5c3f7b9001cfa0945",
    ],
    status: "done",
    name: "Space антарианский флюоресцентный бургер",
    createdAt: "2023-09-03T15:41:12.090Z",
    updatedAt: "2023-09-03T15:41:12.280Z",
    number: 19153,
  },
  {
    _id: "64f4a8f76d2997001caa5d75",
    ingredients: [
      "643d69a5c3f7b9001cfa093c",
      "643d69a5c3f7b9001cfa0945",
      "643d69a5c3f7b9001cfa093e",
    ],
    status: "done",
    name: "Антарианский люминесцентный краторный бургер",
    createdAt: "2023-09-03T15:40:39.391Z",
    updatedAt: "2023-09-03T15:40:39.599Z",
    number: 19152,
  },
  {
    _id: "64f4a8e86d2997001caa5d74",
    ingredients: [
      "643d69a5c3f7b9001cfa093d",
      "643d69a5c3f7b9001cfa0945",
      "643d69a5c3f7b9001cfa093e",
    ],
    status: "done",
    name: "Антарианский люминесцентный флюоресцентный бургер",
    createdAt: "2023-09-03T15:40:24.541Z",
    updatedAt: "2023-09-03T15:40:24.779Z",
    number: 19151,
  },
  {
    _id: "64f4a7306d2997001caa5d6f",
    ingredients: [
      "643d69a5c3f7b9001cfa093d",
      "643d69a5c3f7b9001cfa093e",
      "643d69a5c3f7b9001cfa0946",
    ],
    status: "done",
    name: "Минеральный люминесцентный флюоресцентный бургер",
    createdAt: "2023-09-03T15:33:04.760Z",
    updatedAt: "2023-09-03T15:33:04.977Z",
    number: 19150,
  },
  {
    _id: "64f4a6d26d2997001caa5d6e",
    ingredients: [
      "643d69a5c3f7b9001cfa093d",
      "643d69a5c3f7b9001cfa0945",
      "643d69a5c3f7b9001cfa0941",
    ],
    status: "done",
    name: "Био-марсианский антарианский флюоресцентный бургер",
    createdAt: "2023-09-03T15:31:30.873Z",
    updatedAt: "2023-09-03T15:31:31.091Z",
    number: 19149,
  },
  {
    _id: "64f4a6216d2997001caa5d6a",
    ingredients: [
      "643d69a5c3f7b9001cfa093d",
      "643d69a5c3f7b9001cfa0943",
      "643d69a5c3f7b9001cfa093e",
    ],
    status: "done",
    name: "Space люминесцентный флюоресцентный бургер",
    createdAt: "2023-09-03T15:28:33.224Z",
    updatedAt: "2023-09-03T15:28:33.486Z",
    number: 19148,
  },
  {
    _id: "64f4a5186d2997001caa5d5e",
    ingredients: [
      "643d69a5c3f7b9001cfa093d",
      "643d69a5c3f7b9001cfa0943",
      "643d69a5c3f7b9001cfa093e",
    ],
    status: "done",
    name: "Space люминесцентный флюоресцентный бургер",
    createdAt: "2023-09-03T15:24:08.624Z",
    updatedAt: "2023-09-03T15:24:08.854Z",
    number: 19147,
  },
  {
    _id: "64f4a4af6d2997001caa5d5a",
    ingredients: ["643d69a5c3f7b9001cfa093d", "643d69a5c3f7b9001cfa0943"],
    status: "done",
    name: "Space флюоресцентный бургер",
    createdAt: "2023-09-03T15:22:23.238Z",
    updatedAt: "2023-09-03T15:22:23.473Z",
    number: 19146,
  },
  {
    _id: "64f4a4ac6d2997001caa5d59",
    ingredients: [
      "643d69a5c3f7b9001cfa093d",
      "643d69a5c3f7b9001cfa0943",
      "643d69a5c3f7b9001cfa093e",
    ],
    status: "done",
    name: "Space люминесцентный флюоресцентный бургер",
    createdAt: "2023-09-03T15:22:20.169Z",
    updatedAt: "2023-09-03T15:22:20.339Z",
    number: 19145,
  },
  {
    _id: "64f4a4986d2997001caa5d58",
    ingredients: ["643d69a5c3f7b9001cfa093d", "643d69a5c3f7b9001cfa0943"],
    status: "done",
    name: "Space флюоресцентный бургер",
    createdAt: "2023-09-03T15:22:00.316Z",
    updatedAt: "2023-09-03T15:22:00.591Z",
    number: 19144,
  },
  {
    _id: "64f4a4936d2997001caa5d54",
    ingredients: [
      "643d69a5c3f7b9001cfa093d",
      "643d69a5c3f7b9001cfa0943",
      "643d69a5c3f7b9001cfa093e",
    ],
    status: "done",
    name: "Space люминесцентный флюоресцентный бургер",
    createdAt: "2023-09-03T15:21:55.788Z",
    updatedAt: "2023-09-03T15:21:56.018Z",
    number: 19143,
  },
  {
    _id: "64f4a47d6d2997001caa5d53",
    ingredients: [
      "643d69a5c3f7b9001cfa093d",
      "643d69a5c3f7b9001cfa0943",
      "643d69a5c3f7b9001cfa093e",
    ],
    status: "done",
    name: "Space люминесцентный флюоресцентный бургер",
    createdAt: "2023-09-03T15:21:33.705Z",
    updatedAt: "2023-09-03T15:21:33.923Z",
    number: 19142,
  },
  {
    _id: "64f4a4396d2997001caa5d52",
    ingredients: [
      "643d69a5c3f7b9001cfa093d",
      "643d69a5c3f7b9001cfa0943",
      "643d69a5c3f7b9001cfa093e",
    ],
    status: "done",
    name: "Space люминесцентный флюоресцентный бургер",
    createdAt: "2023-09-03T15:20:25.694Z",
    updatedAt: "2023-09-03T15:20:25.880Z",
    number: 19141,
  },
  {
    _id: "64f4a3a96d2997001caa5d4f",
    ingredients: [
      "643d69a5c3f7b9001cfa093d",
      "643d69a5c3f7b9001cfa0943",
      "643d69a5c3f7b9001cfa0944",
      "643d69a5c3f7b9001cfa093d",
    ],
    status: "done",
    name: "Space традиционный-галактический флюоресцентный бургер",
    createdAt: "2023-09-03T15:18:01.963Z",
    updatedAt: "2023-09-03T15:18:02.156Z",
    number: 19140,
  },
  {
    _id: "64f4a23f6d2997001caa5d47",
    ingredients: [
      "643d69a5c3f7b9001cfa093d",
      "643d69a5c3f7b9001cfa0943",
      "643d69a5c3f7b9001cfa093d",
    ],
    status: "done",
    name: "Space флюоресцентный бургер",
    createdAt: "2023-09-03T15:11:59.183Z",
    updatedAt: "2023-09-03T15:11:59.376Z",
    number: 19139,
  },
  {
    _id: "64f4a0326d2997001caa5d3e",
    ingredients: ["643d69a5c3f7b9001cfa0940"],
    status: "done",
    name: "Метеоритный бургер",
    createdAt: "2023-09-03T15:03:14.844Z",
    updatedAt: "2023-09-03T15:03:15.062Z",
    number: 19138,
  },
  {
    _id: "64f4a0096d2997001caa5d3d",
    ingredients: [
      "643d69a5c3f7b9001cfa093d",
      "643d69a5c3f7b9001cfa0943",
      "643d69a5c3f7b9001cfa093d",
    ],
    status: "done",
    name: "Space флюоресцентный бургер",
    createdAt: "2023-09-03T15:02:33.500Z",
    updatedAt: "2023-09-03T15:02:33.718Z",
    number: 19137,
  },
  {
    _id: "64f49f466d2997001caa5d3a",
    ingredients: [
      "643d69a5c3f7b9001cfa093d",
      "643d69a5c3f7b9001cfa093e",
      "643d69a5c3f7b9001cfa093d",
    ],
    status: "done",
    name: "Люминесцентный флюоресцентный бургер",
    createdAt: "2023-09-03T14:59:18.019Z",
    updatedAt: "2023-09-03T14:59:18.230Z",
    number: 19136,
  },
  {
    _id: "64f49ce66d2997001caa5d2f",
    ingredients: [
      "643d69a5c3f7b9001cfa093e",
      "643d69a5c3f7b9001cfa0940",
      "643d69a5c3f7b9001cfa093d",
    ],
    status: "done",
    name: "Люминесцентный флюоресцентный метеоритный бургер",
    createdAt: "2023-09-03T14:49:10.751Z",
    updatedAt: "2023-09-03T14:49:10.959Z",
    number: 19135,
  },
  {
    _id: "64f49cba6d2997001caa5d2d",
    ingredients: ["643d69a5c3f7b9001cfa094a"],
    status: "done",
    name: "Астероидный бургер",
    createdAt: "2023-09-03T14:48:26.962Z",
    updatedAt: "2023-09-03T14:48:27.156Z",
    number: 19134,
  },
  {
    _id: "64f49c956d2997001caa5d2c",
    ingredients: ["643d69a5c3f7b9001cfa094a"],
    status: "done",
    name: "Астероидный бургер",
    createdAt: "2023-09-03T14:47:49.010Z",
    updatedAt: "2023-09-03T14:47:49.248Z",
    number: 19133,
  },
  {
    _id: "64f493516d2997001caa5d11",
    ingredients: ["643d69a5c3f7b9001cfa094a"],
    status: "done",
    name: "Астероидный бургер",
    createdAt: "2023-09-03T14:08:17.580Z",
    updatedAt: "2023-09-03T14:08:17.780Z",
    number: 19132,
  },
];
