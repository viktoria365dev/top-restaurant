export default [
  {
    category: "Starters",
    items: [
      {
        name: "Bruschetta",
        description: "Grilled bread with tomato, garlic & basil",
        price: 6.5,
        image: import.meta.env.BASE_URL + "assets/images/bruschetta.jpg",
      },
      {
        name: "Calamari",
        description: "Lightly fried squid rings with aioli",
        price: 8.0,
        image: import.meta.env.BASE_URL + "/assets/images/calamari.jpg",
      },
    ],
  },
  {
    category: "Mains",
    items: [
      {
        name: "Margherita Pizza",
        description: "Tomato, mozzarella, fresh basil",
        price: 12.0,
        image: import.meta.env.BASE_URL + "/assets/images/margherita.jpg",
      },
      {
        name: "Spaghetti Carbonara",
        description: "Guanciale, egg yolk, pecorino Romano",
        price: 14.5,
        image: import.meta.env.BASE_URL + "/assets/images/carbonara.jpg",
      },
    ],
  },
  {
    category: "Desserts",
    items: [
      {
        name: "Tiramisu",
        description: "Espresso-soaked ladyfingers & mascarpone",
        price: 7.0,
        image: import.meta.env.BASE_URL + "/assets/images/tiramisu.jpg",
      },
      {
        name: "Gelato",
        description: "Choose from vanilla, chocolate, or strawberry",
        price: 5.5,
        image: import.meta.env.BASE_URL + "/assets/images/gelato.jpg",
      },
    ],
  },
];
