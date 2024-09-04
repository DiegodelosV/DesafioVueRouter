<template>
  <Card
    :data="{
      menu: menu,
      descripcion: descripcion,
      precio: precio,
      cantidad: cantidad,
    }"
  />
  <router-view />
  <div class="text-center mt-4">
    <router-link class="btn btn-primary" to="/">Volver al inicio</router-link>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
export default {
  components: {
    Card,
  },
  props: {
    menu: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
    precio: {
      type: String,
      required: true,
    },
    cantidad: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
div {
  margin-top: 100px;
  margin-bottom: 100px;
}
</style>
