'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const bookAuthors = [
      { bookId: 'a7d59d46-6cf9-4a33-b8e0-29ebe69d8693', userId: '6a84d9f8-3992-434b-97f3-6f62cb303619' },
      { bookId: 'fde0985b-fb3d-4e0a-8933-30dc58dfe21f', userId: '7bc6e654-7016-4cb7-9ab2-85e1e6242a52' },
      { bookId: 'c121e31e-97fc-4e05-85d9-bf2c43e21a97', userId: 'a2a1c7ff-92d2-4aae-8aa3-97d7fb3ec0e7' },
      { bookId: 'c121e31e-97fc-4e05-85d9-bf2c43e21a97', userId: '6a84d9f8-3992-434b-97f3-6f62cb303619' },
      { bookId: '6f0d2212-1998-4e76-b473-d777a7c59c1b', userId: '8d5d72da-35e2-44c7-9fc0-25e3c2de3f51' },
      { bookId: '5a69f747-0d02-4b76-ba6d-22ab6f41d59a', userId: '26e22971-cd84-4705-b1ad-9b1a8f6b3c9c' },
      { bookId: 'b5be5f1d-2013-4a1f-8390-1c6ab1297400', userId: 'e41f4a7d-586d-4cfc-89ec-09ec93802537' },
      { bookId: 'f6b1a77a-705d-4229-97f8-0b9a2d1bc031', userId: '960ff61a-0a67-47d0-ae5a-dfd1bc8f1e6c' },
      { bookId: 'a35e3c39-1d9a-4181-8e29-b04a7cde87a7', userId: '30b79fc9-d344-45e0-8393-8c9a2b5ad481' },
      { bookId: '74b0a55b-f4d4-41cb-af68-c4a5014c5d3b', userId: 'b8cb048b-277d-4d40-bf91-518bf065e021' },
      { bookId: '74b0a55b-f4d4-41cb-af68-c4a5014c5d3b', userId: 'e41f4a7d-586d-4cfc-89ec-09ec93802537' },
      { bookId: '34d6a2ab-4e7b-4ae7-896f-5d0782246c2f', userId: '5e9c3c9b-d4c2-4cf2-8e6d-6160b8f01d76' }
    ];
    
    await queryInterface.bulkInsert('book_authors', bookAuthors, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('book_authors', null, {});
  }
};
