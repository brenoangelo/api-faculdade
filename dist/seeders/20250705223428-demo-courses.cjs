"use strict";

// src/seeders/20250705223428-demo-courses.js
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "courses",
      [
        {
          title: "API com Express",
          description: "Curso de API com Express e MongoDB",
          start_date: "2023-01-01",
          category_id: 1,
          teacher_id: 5,
          createdAt: /* @__PURE__ */ new Date(),
          updatedAt: /* @__PURE__ */ new Date()
        },
        {
          title: "SpringBoot",
          description: "Curso de Java com Spring Framework",
          start_date: "2023-01-01",
          category_id: 2,
          teacher_id: 5,
          createdAt: /* @__PURE__ */ new Date(),
          updatedAt: /* @__PURE__ */ new Date()
        },
        {
          title: "Python Web com Django",
          description: "Curso de aplica\xE7\xF5es web com Django",
          start_date: "2023-01-01",
          category_id: 3,
          teacher_id: 6,
          createdAt: /* @__PURE__ */ new Date(),
          updatedAt: /* @__PURE__ */ new Date()
        },
        {
          title: "Orienta\xE7\xE3o a Objetos com C#",
          description: "Curso de C#: cole\xE7\xF5es, arquivos e libs",
          start_date: "2023-01-01",
          category_id: 4,
          teacher_id: 6,
          createdAt: /* @__PURE__ */ new Date(),
          updatedAt: /* @__PURE__ */ new Date()
        }
      ],
      {}
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("courses", null, {});
  }
};
