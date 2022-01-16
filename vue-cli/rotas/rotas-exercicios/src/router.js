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

export default new Router({
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
        { path: ":id", component: UsuarioDetalhe, props: true },
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
