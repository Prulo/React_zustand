import { PokemonModel } from "../models/PokemonModel";

export const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "Contact", href: "/contact" },
  { name: "Cart", href: "/Cartbasket" },
];

export const data: Array<PokemonModel> = [
  {
    id: "1",
    name: "Pikachu",
    desc: "Pikachu is an iconic and beloved Pokémon known for its cute appearance, electric abilities, and its role as the mascot of the Pokémon franchise.",
    buttonText: "check player",
    price: 20,
  },
  {
    id: "2",
    name: "Bulbasaur",
    desc: "Bulbasaur is a Grass/Poison-type Pokémon characterized by its bulb on its back, which grows into a large plant as it evolves, and it's one of the original starter Pokémon in the Pokémon series.",
    buttonText: "check player",
    price: 6,
  },
  {
    id: "3",
    name: "Squirtle",
    desc: "Squirtle is a Water-type Pokémon recognized for its turtle-like appearance and ability to shoot water from its mouth with powerful accuracy; it's also one of the original starter Pokémon in the Pokémon series.",
    buttonText: "check player",
    price: 541,
  },
  {
    id: "4",
    name: "Ryu",
    desc: "Ryu is a fictional character from the Street Fighter video game series known for his disciplined martial arts skills and iconic move, the Hadouken.",
    buttonText: "check player",
    price: 5,
  },
  {
    id: "5",
    name: "Ken",
    desc: "Ken is a character from the Street Fighter video game series, often recognized as Ryu's rival and friend, known for his fiery fighting style and signature move, the Shoryuken.",
    buttonText: "check player",
    price: 50,
  },
  {
    id: "6",
    name: "Sagat",
    desc: "Sagat is a character from the Street Fighter video game series, renowned for his imposing stature, Muay Thai fighting style, and distinctive eye patch, earning him the title of The King of Muay Thai.",
    buttonText: "check player",
    price: 30,
  },
];

export const imageString =
  "https://images.unsplash.com/photo-1511882150382-421056c89033?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdhbWV8ZW58MHx8MHx8fDA%3D";
