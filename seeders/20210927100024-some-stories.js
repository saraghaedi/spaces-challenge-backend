"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "stories",
      [
        {
          name: "Lorem ipsum dolor",
          content:
            "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...",
          imageUrl:
            "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
          spaceId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "first true generator on the Interne",
          content:
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
          imageUrl:
            "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZvY2Fkb3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
          spaceId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "looks reasonable",
          content:
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
          imageUrl:
            "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZvY2Fkb3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
          spaceId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "injected humour",
          content:
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
          imageUrl:
            "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZvY2Fkb3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
          spaceId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("stories", null, {});
  },
};
