const popularData = [
  {
    id: '1',
    image: require('../images/whey.png'),
    title: 'Whey Protein 100%',
    weight: '900 gr',
    rating: '5.0',
    price: 129.99,
    sizeName: 'Grande',
    sizeNumber: '900gr',
    marca: 'Max',
    sabor: 'Baunilha',
    description: '100% Whey é um suplemento a base de proteína concentrada do soro do leite (Whey Protein Concentrate), matéria-prima elaborada com alta tecnologia, de elevado valor biológico, rápida digestibilidade e alta concentração de aminoácidos essenciais, que são fatores de relevância para auxiliar a síntese proteica muscular.100% Whey é um suplemento a base de proteína concentrada do soro do leite (Whey Protein Concentrate), matéria-prima elaborada com alta tecnologia, de elevado valor biológico, rápida digestibilidade e alta concentração de aminoácidos essenciais, que são fatores de relevância para auxiliar a síntese proteica muscular.'
  },
  {
    id: '2',
    image: require('../images/benegripe.png'),
    title: 'Benegripe',
    weight: '1 mg',
    rating: '4.0',
    price: 21.30,
    sizeName: 'Small',
    sizeNumber: 10,
    crust: 'Thick Crust',
    deliveryTime: 40,
    ingredients: [
      {
        id: '1',
        name: 'cheese',
        image: require('../images/cheese.png'),
      },
      {
        id: '2',
        name: 'garlic',
        image: require('../images/garlic.png'),
      },
    ],
  },
  {
    id: '3',
    image: require('../images/protetor.png'),
    title: 'Pepperoni Pizza',
    weight: '700 gr',
    rating: '5.0',
    price: 9.99,
    sizeName: 'Large',
    sizeNumber: 18,
    crust: 'Thin Crust',
    deliveryTime: 20,
    ingredients: [
      {
        id: '1',
        name: 'tomato',
        image: require('../images/tomato.png'),
      },
      {
        id: '2',
        name: 'cheese',
        image: require('../images/cheese.png'),
      },
    ],
  },
];

export default popularData;
