<template>
  <h1 class="text-center mb-4">Contáctanos</h1>
  <div class="container mt-5">
    <div id="ubicacion" class="card mb-4 shadow-sm">
      <div class="card-body">
        <h3 class="card-title text-center">Ubicación y Contacto</h3>
        <p class="card-text">
          <strong>Nombre:</strong> {{ nombre }} <br />
          <strong>Teléfono:</strong> {{ telefono }} <br />
          <strong>Dirección:</strong> {{ direccion }} <br />
          <strong>Email:</strong> {{ email }}
        </p>
      </div>
    </div>

    <form class="row g-3 p-4 shadow rounded">
      <div class="col-md-6">
        <label for="name" class="form-label">Nombre</label>
        <input
          type="text"
          class="form-control"
          id="name"
          placeholder="Ingresa tu nombre"
        />
      </div>
      <div class="col-md-6">
        <label for="mail" class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          id="mail"
          placeholder="Ingresa tu email"
        />
      </div>
      <div class="col-md-6">
        <label for="tel" class="form-label">Teléfono</label>
        <input
          type="tel"
          class="form-control"
          id="tel"
          placeholder="Ingresa tu teléfono"
        />
      </div>
      <div class="col-12">
        <label for="comment" class="form-label">Comentario</label>
        <textarea
          class="form-control"
          id="comment"
          rows="4"
          placeholder="Escribe tu comentario"
        ></textarea>
      </div>
      <div class="col-12 text-center">
        <button type="submit" class="btn btn-primary">Enviar</button>
      </div>
    </form>
    <div class="text-center mt-4">
      <router-link class="btn btn-primary" to="/">Volver al inicio</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    nombre: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    telefono: {
      type: String,
      required: true,
    },
    direccion: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
}

form,
#ubicacion {
  margin-top: 30px;
  background-color: #f8f9fa;
}

h1 {
  color: #707070;
  margin-top: 120px;
}

button {
  width: 100%;
}
</style>
