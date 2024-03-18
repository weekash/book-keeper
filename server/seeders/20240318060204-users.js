'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    const sampleUsers =[
      { "userId": "6a84d9f8-3992-434b-97f3-6f62cb303619", "name": "John Doe", "email": "john@example.com", "password": "855f96e983f1f8e8be944692b6f719fd54329826cb62e98015efee8e2e071dd4", "image": "https://api.dicebear.com/8.x/fun-emoji/svg?seed=John Doe" },
      { "userId": "7bc6e654-7016-4cb7-9ab2-85e1e6242a52", "name": "Jane Smith", "email": "jane@example.com", "password": "8c87b489ce35cf2e2f39f80e282cb2e804932a56a213983eeeb428407d43b52d", "image": "https://api.dicebear.com/8.x/fun-emoji/svg?seed=Jane Smith" },
      { "userId": "a2a1c7ff-92d2-4aae-8aa3-97d7fb3ec0e7", "name": "Michael Johnson", "email": "michael@example.com", "password": "b3d6d304b71a7c156988a6af0eed8c82671952d6071fc7761291029f69b540ac", "image": "https://api.dicebear.com/8.x/fun-emoji/svg?seed=Michael Johnson" },
      { "userId": "8d5d72da-35e2-44c7-9fc0-25e3c2de3f51", "name": "Emily Brown", "email": "emily@example.com", "password": "6599ce4d8f9d3289820e0af8c795c5a06bdb512fe9cd3baaaeb132d35e641b09", "image": "https://api.dicebear.com/8.x/fun-emoji/svg?seed=Emily Brown" },
      { "userId": "26e22971-cd84-4705-b1ad-9b1a8f6b3c9c", "name": "David Wilson", "email": "david@example.com", "password": "d4e3f52c47a33949241f67af482f562ece6f62e618b041a62d00fa7ba5dae280", "image": "https://api.dicebear.com/8.x/fun-emoji/svg?seed=David Wilson" },
      { "userId": "e41f4a7d-586d-4cfc-89ec-09ec93802537", "name": "Sarah Taylor", "email": "sarah@example.com", "password": "1b0df3084513e398249e55cd6fe2b41dda58e0d835f78c6b8d33c08909c3df9e", "image": "https://api.dicebear.com/8.x/fun-emoji/svg?seed=Sarah Taylor" },
      { "userId": "960ff61a-0a67-47d0-ae5a-dfd1bc8f1e6c", "name": "James Martinez", "email": "james@example.com", "password": "e873dea4d72ffa9926e7117de13172a8afe1b2ee778d46eaee362901582ab68a", "image": "https://api.dicebear.com/8.x/fun-emoji/svg?seed=James Martinez" },
      { "userId": "30b79fc9-d344-45e0-8393-8c9a2b5ad481", "name": "Jessica Anderson", "email": "jessica@example.com", "password": "17005cd3ac890e39e0deda1f21b8215cf68cb512b6786bd02ae5a61d658dee49", "image": "https://api.dicebear.com/8.x/fun-emoji/svg?seed=Jessica Anderson" },
      { "userId": "b8cb048b-277d-4d40-bf91-518bf065e021", "name": "Matthew Thomas", "email": "matthew@example.com", "password": "eba80167fe43c7fbfe3c73a5917b0e9ab956d3b1b2a2d07274012ccc51c6676c", "image": "https://api.dicebear.com/8.x/fun-emoji/svg?seed=Matthew Thomas" },
      { "userId": "5e9c3c9b-d4c2-4cf2-8e6d-6160b8f01d76", "name": "Lara Garcia", "email": "lara@example.com", "password": "35757b32566fcb5676107b0a71baa55807d59d3c807b1f09fc132a54f633eddf", "image": "https://api.dicebear.com/8.x/fun-emoji/svg?seed=Lara Garcia" }
    ];
    

    await queryInterface.bulkInsert('users', sampleUsers);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
