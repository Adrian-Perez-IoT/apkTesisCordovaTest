<template>
  <div>
    <v-app-bar app class="red darken-1">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <!-- <v-btn class="success" small>Ingreso</v-btn>
      <v-btn class="danger" small>Salir</v-btn> -->
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      app
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>        
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to='item.router'          

        >
          <v-list-item-icon>
            <v-icon> {{item.icon}} </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title> {{item.title}}</v-list-item-title>
          </v-list-item-content>

          
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- <v-navigation-drawer app v-model="drawer" temporary dark >
        <v-layout mt-4 column align-center>
            <v-flex>
                <v-avatar>
                    <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="alt">
                </v-avatar>
            </v-flex>
            <v-flex xs1>
                <p class="white--text mt-3 headline ">Juan Pérez</p>
                
            </v-flex>
        </v-layout>
    </v-navigation-drawer> -->
  </div>
</template>

<script>
export default {
    name: "ToolBar",
    data(){
        return {
            drawer:null,
            items: [
                { title: 'Inicio', icon: 'mdi-xbox-controller', router:'/' },
                { title: 'Notificaciones', icon: 'mdi-xbox-controller', router:'/notificaciones' },
                { title: 'Programar horarios', icon: 'mdi-xbox-controller', router:'/programarhorarios' },
                { title: 'Generar informes', icon: 'mdi-xbox-controller', router:'/generarinformes' },
                { title: 'Gestionar usuarios', icon: 'mdi-watch', router:'/gestionarusuarios' },
                { title: 'Mi cuenta', icon: 'mdi-watch', router:'/micuenta' },
                { title: 'Log out', icon: 'mdi-watch', router:'/logout' },
            ]
        }
    }
}
</script>