import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "inicio",
    component: HomeView,
  },
  {
    path: "/productos",
    name: "productos",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProductosView.vue"),
    props: () => {
      return {
        menu: "Desayunos",
        descripcion: "Contamos con desayunos nutritivos y deliciosos",
        precio: "$2000",
        cantidad: "Para dos personas",
      };
    },
  },

  {
    path: "/contacto",
    name: "contacto",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ContactoView.vue"),
    props: () => {
      return {
        nombre: "Suricata Comida S.A.",
        email: "contacto@Suricata.com",
        telefono: "+56923456789",
        direccion: "Calle Balmaceda #343, Concepción, CHILE",

      };
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
