'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const sampleBooks = [
      {
        bookId: 'a7d59d46-6cf9-4a33-b8e0-29ebe69d8693',
        name: 'To Kill a Mockingbird',
        publisher: 'HarperCollins Publishers',
        description: 'To Kill a Mockingbird is a novel by Harper Lee published in 1960. It is widely regarded as a classic of modern American literature.',
        image: 'https://images.example.com/to-kill-a-mockingbird.jpg'
      },
      {
        bookId: 'fde0985b-fb3d-4e0a-8933-30dc58dfe21f',
        name: '1984',
        publisher: 'Secker & Warburg',
        description: '1984 is a dystopian social science fiction novel by George Orwell. It was published in 1949.',
        image: 'https://images.example.com/1984.jpg'
      },
      {
        bookId: 'c121e31e-97fc-4e05-85d9-bf2c43e21a97',
        name: 'Pride and Prejudice',
        publisher: 'T. Egerton, Whitehall',
        description: 'Pride and Prejudice is a romantic novel of manners written by Jane Austen. It was first published in 1813.',
        image: 'https://images.example.com/pride-and-prejudice.jpg'
      },
      {
        bookId: '6f0d2212-1998-4e76-b473-d777a7c59c1b',
        name: 'The Great Gatsby',
        publisher: 'Charles Scribner\'s Sons',
        description: 'The Great Gatsby is a novel by American writer F. Scott Fitzgerald. It was first published in 1925.',
        image: 'https://images.example.com/the-great-gatsby.jpg'
      },
      {
        bookId: '5a69f747-0d02-4b76-ba6d-22ab6f41d59a',
        name: 'Moby-Dick',
        publisher: 'Richard Bentley (UK), Harper & Brothers (US)',
        description: 'Moby-Dick; or, The Whale is an 1851 novel by American writer Herman Melville.',
        image: 'https://images.example.com/moby-dick.jpg'
      },
      {
        bookId: 'b5be5f1d-2013-4a1f-8390-1c6ab1297400',
        name: 'The Catcher in the Rye',
        publisher: 'Little, Brown and Company',
        description: 'The Catcher in the Rye is a novel by J. D. Salinger, first published in 1951.',
        image: 'https://images.example.com/the-catcher-in-the-rye.jpg'
      },
      {
        bookId: 'f6b1a77a-705d-4229-97f8-0b9a2d1bc031',
        name: 'Brave New World',
        publisher: 'Chatto & Windus',
        description: 'Brave New World is a dystopian social science fiction novel by Aldous Huxley, published in 1932.',
        image: 'https://images.example.com/brave-new-world.jpg'
      },
      {
        bookId: 'a35e3c39-1d9a-4181-8e29-b04a7cde87a7',
        name: 'The Hobbit',
        publisher: 'Allen & Unwin',
        description: 'The Hobbit, or There and Back Again is a children\'s fantasy novel by J. R. R. Tolkien.',
        image: 'https://images.example.com/the-hobbit.jpg'
      },
      {
        bookId: '74b0a55b-f4d4-41cb-af68-c4a5014c5d3b',
        name: 'The Lord of the Rings',
        publisher: 'Allen & Unwin',
        description: 'The Lord of the Rings is an epic high-fantasy novel by J. R. R. Tolkien, published in 1954.',
        image: 'https://images.example.com/the-lord-of-the-rings.jpg'
      },
      {
        bookId: '34d6a2ab-4e7b-4ae7-896f-5d0782246c2f',
        name: 'Harry Potter and the Philosopher\'s Stone',
        publisher: 'Bloomsbury',
        description: 'Harry Potter and the Philosopher\'s Stone is a fantasy novel by J. K. Rowling, published in 1997.',
        image: 'https://images.example.com/harry-potter-and-the-philosophers-stone.jpg'
      }
    ];

    await queryInterface.bulkInsert('books', sampleBooks, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('books', null, {});
  }
};
