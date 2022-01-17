/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import Vue from "vue";
import Router from "vue-router";
import Inicio from "./components/home/Inicio.vue";
import Menu from "./components/template/Menu.vue";
import MenuUser from "./components/template/MenuUser.vue";
import Usuario from "./components/usuario/Usuario.vue";
import UsuarioLista from "./components/usuario/UsuarioLista.vue";
import UsuarioDetalhe from "./components/usuario/UsuarioDetalhe.vue";
import UsuarioEditar from "./components/usuario/UsuarioEditar.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      // component: Inicio,
      components: {
        default: Inicio,
        menu: Menu,
      },
    },
    {
      path: "/usuario",
      // component: Usuario,
      components: {
        default: Usuario,
        menu: MenuUser,
      },
      props: true,
      children: [
        { path: "", component: UsuarioLista },
        {
          path: ":id",
          component: UsuarioDetalhe,
          props: true,
          beforeEnter: (to, from, next) => {
            console.log("antes da rota -> usuario detalhe");
            let user = true;
            if (user) {
              next();
            } else {
              console.log("acesso negado");
            }
          },
        },
        {
          path: ":id/editar",
          component: UsuarioEditar,
          props: true,
          name: "editarUsuario",
        },
      ],
    },
    {
      path: "*",
      redirect: "/",
    },
  ],
});

router.beforeEach((to, from, next) => {
  console.log("Antes das rotas Global");
  next();
});

export default router;
