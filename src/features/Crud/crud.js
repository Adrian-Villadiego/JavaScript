const form = document.getElementById("dataForm");
const tableBody = document.getElementById("tableBody");
const clearBtn = document.getElementById("clearBtn");
const exportBtn = document.getElementById("exportBtn");

// Inputs
const nameInput = document.getElementById("name");
const documentInput = document.getElementById("document");
const emailInput = document.getElementById("email");

// Datos
let data = JSON.parse(localStorage.getItem("crudData")) || [];
let editIndex = null;

// Renderizar tabla
function renderTable() {
  tableBody.innerHTML = "";

  data.forEach((item, index) => {
    tableBody.innerHTML += `
      <tr>
        <td>${item.email}</td>
        <td>${item.name}</td>
        <td>${item.document}</td>
        <td class="text-center">
          <button class="btn btn-sm btn-warning me-1" onclick="editItem(${index})">
            Editar
          </button>
          <button class="btn btn-sm btn-danger" onclick="deleteItem(${index})">
            Eliminar
          </button>
        </td>
      </tr>
    `;
  });
}

// Guardar / Actualizar
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailValue = emailInput.value.trim();

  // Validar correo y documento duplicados
  const emailExists = data.some((item, index) =>
    item.email === emailValue && index !== editIndex
  );

  const documentValue = documentInput.value.trim();

  const documentExists = data.some((item, index) =>
    item.document === documentValue && index !== editIndex
  );

  if (emailExists) {
    alert(" Este correo ya está registrado");
    return;
  }

  if (documentExists) {
    alert(" Este documento ya está registrado");
    return;
  }


  const newItem = {
    name: nameInput.value.trim(),
    document: documentInput.value.trim(),
    email: emailValue
  };

  if (editIndex === null) {
    // Crear
    data.push(newItem);
  } else {
    // Editar
    data[editIndex] = newItem;
    editIndex = null;
    form.querySelector("button").textContent = "Guardar";
  }

  localStorage.setItem("crudData", JSON.stringify(data));
  form.reset();
  renderTable();
});

// Editar
function editItem(index) {
  const item = data[index];

  nameInput.value = item.name;
  documentInput.value = item.document;
  emailInput.value = item.email;

  editIndex = index;
  form.querySelector("button").textContent = "Actualizar";
}

// Eliminar
function deleteItem(index) {
  if (confirm("¿Eliminar este registro?")) {
    data.splice(index, 1);
    localStorage.setItem("crudData", JSON.stringify(data));
    renderTable();
  }  
}

// Borrar todo
clearBtn.addEventListener("click", () => {
  if (confirm("¿Borrar todos los registros?")) {
    data = [];
    localStorage.removeItem("crudData");
    renderTable();
  }
});

// Exportar JSON
exportBtn.addEventListener("click", () => {
  const blob = new Blob(
    [JSON.stringify(data, null, 2)],
    { type: "application/json" }
  );

  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");

  a.href = url;
  a.download = "datos.json";
  a.click();

  URL.revokeObjectURL(url);
});

// Inicial
renderTable();
