"use strict";

function showForm() {
  const allForms = document.querySelectorAll(".form");
  const selectedValue = document.getElementById("formSelector").value;

  // 1️⃣ أخفي كل الفورمات
  allForms.forEach((form) => {
    form.classList.add("hidden");
  });

  // 2️⃣ أظهر الفورم المختار فقط
  if (selectedValue !== "") {
    document.getElementById(selectedValue).classList.remove("hidden");
  }
}

const branchForm = document.getElementById("branchForm");
const branchNoForm = document.getElementById("branchNoForm");
const employeeForm = document.getElementById("employeeForm");
const empNoForm = document.getElementById("empNoForm");
const patientForm = document.getElementById("patientForm");
const patientNoForm = document.getElementById("patientNoForm");

const select = document.getElementById("formSelector");
select.addEventListener("change", function () {
  if (select.value === "branchForm") {
    branchForm.classList.remove("hidden");
    branchNoForm.classList.remove("hidden");
  }
  if (select.value === "employeeForm") {
    employeeForm.classList.remove("hidden");
    empNoForm.classList.remove("hidden");
  }
  if (select.value === "patientForm") {
    patientForm.classList.remove("hidden");
    patientNoForm.classList.remove("hidden");
  }
});
