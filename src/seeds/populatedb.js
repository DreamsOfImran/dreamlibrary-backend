require("../config/db");
const User = require("../models/User");
const Book = require("../models/Book");
const faker = require("faker");

const usersList = [
  {
    first_name: "Imran",
    last_name: "Basha",
    email: "ibasha66@gmail.com",
    password: "imran",
    is_admin: true,
  },
];

const booksList = [
  {
    title: faker.random.word(),
    author: faker.name.findName(),
    isbn: faker.internet.password(),
    published_on: new Date().toISOString().slice(0, 10),
    image_url: "https://placeimg.com/540/640/any?0",
    category: faker.random.word(),
    summary: faker.lorem.paragraph(),
    quantity: faker.random.number(),
  },
  {
    title: faker.random.word(),
    author: faker.name.findName(),
    isbn: faker.internet.password(),
    published_on: new Date().toISOString().slice(0, 10),
    image_url: "https://placeimg.com/540/640/any?1",
    category: faker.random.word(),
    summary: faker.lorem.paragraph(),
    quantity: faker.random.number(),
  },
  {
    title: faker.random.word(),
    author: faker.name.findName(),
    isbn: faker.internet.password(),
    published_on: new Date().toISOString().slice(0, 10),
    image_url: "https://placeimg.com/540/640/any?2",
    category: faker.random.word(),
    summary: faker.lorem.paragraph(),
    quantity: faker.random.number(),
  },
  {
    title: faker.random.word(),
    author: faker.name.findName(),
    isbn: faker.internet.password(),
    published_on: new Date().toISOString().slice(0, 10),
    image_url: "https://placeimg.com/540/640/any?3",
    category: faker.random.word(),
    summary: faker.lorem.paragraph(),
    quantity: faker.random.number(),
  },
  {
    title: faker.random.word(),
    author: faker.name.findName(),
    isbn: faker.internet.password(),
    published_on: new Date().toISOString().slice(0, 10),
    image_url: "https://placeimg.com/540/640/any?4",
    category: faker.random.word(),
    summary: faker.lorem.paragraph(),
    quantity: faker.random.number(),
  },
  {
    title: faker.random.word(),
    author: faker.name.findName(),
    isbn: faker.internet.password(),
    published_on: new Date().toISOString().slice(0, 10),
    image_url: "https://placeimg.com/540/640/any?5",
    category: faker.random.word(),
    summary: faker.lorem.paragraph(),
    quantity: faker.random.number(),
  },
  {
    title: faker.random.word(),
    author: faker.name.findName(),
    isbn: faker.internet.password(),
    published_on: new Date().toISOString().slice(0, 10),
    image_url: "https://placeimg.com/540/640/any?6",
    category: faker.random.word(),
    summary: faker.lorem.paragraph(),
    quantity: faker.random.number(),
  },
  {
    title: faker.random.word(),
    author: faker.name.findName(),
    isbn: faker.internet.password(),
    published_on: new Date().toISOString().slice(0, 10),
    image_url: "https://placeimg.com/540/640/any?7",
    category: faker.random.word(),
    summary: faker.lorem.paragraph(),
    quantity: faker.random.number(),
  },
  {
    title: faker.random.word(),
    author: faker.name.findName(),
    isbn: faker.internet.password(),
    published_on: new Date().toISOString().slice(0, 10),
    image_url: "https://placeimg.com/540/640/any?8",
    category: faker.random.word(),
    summary: faker.lorem.paragraph(),
    quantity: faker.random.number(),
  },
  {
    title: faker.random.word(),
    author: faker.name.findName(),
    isbn: faker.internet.password(),
    published_on: new Date().toISOString().slice(0, 10),
    image_url: "https://placeimg.com/540/640/any?9",
    category: faker.random.word(),
    summary: faker.lorem.paragraph(),
    quantity: faker.random.number(),
  },
  {
    title: faker.random.word(),
    author: faker.name.findName(),
    isbn: faker.internet.password(),
    published_on: new Date().toISOString().slice(0, 10),
    image_url: "https://placeimg.com/540/640/any?10",
    category: faker.random.word(),
    summary: faker.lorem.paragraph(),
    quantity: faker.random.number(),
  },
];

const seedUser = async () => {
  const user = new User({
    first_name: "Imran",
    last_name: "Basha",
    email: "ibasha66@gmail.com",
    password: "imran",
    is_admin: true,
  });
  await user.save();
  console.log("User Created");
};

const seedBooks = () => {
  booksList.map(async (book) => {
    const newBook = new Book(book);
    await newBook.save();
    console.log("New Book Added");
  });
};

const clearDB = () => {
  User.deleteMany({}).then(console.log).catch(console.error);
  Book.deleteMany({}).then(console.log).catch(console.error);
};

clearDB();
seedUser();
seedBooks();
