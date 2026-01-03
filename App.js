const form = document.getElementById("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    nombre: nombre.value,
    telefono: telefono.value,
    personas: parseInt(personas.value),
    fecha: fecha.value,
    hora: hora.value
  };

  const { error } = await supabase.from("reservas").insert([data]);

  if (error) {
    alert("Error al guardar la reserva");
  } else {
    alert("Reserva guardada correctamente");
    form.reset();
  }
});
