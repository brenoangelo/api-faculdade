"use strict";

// src/seeders/20250705223822-demo-registrations.js
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "registrations",
      [
        {
          student_id: 2,
          course_id: 1,
          status: "matriculado",
          createdAt: /* @__PURE__ */ new Date(),
          updatedAt: /* @__PURE__ */ new Date()
        },
        {
          student_id: 3,
          course_id: 2,
          status: "matriculado",
          createdAt: /* @__PURE__ */ new Date(),
          updatedAt: /* @__PURE__ */ new Date()
        },
        {
          student_id: 4,
          course_id: 3,
          status: "matriculado",
          createdAt: /* @__PURE__ */ new Date(),
          updatedAt: /* @__PURE__ */ new Date()
        },
        {
          student_id: 8,
          course_id: 4,
          status: "matriculado",
          createdAt: /* @__PURE__ */ new Date(),
          updatedAt: /* @__PURE__ */ new Date()
        }
      ],
      {}
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("registrations", null, {});
  }
};
