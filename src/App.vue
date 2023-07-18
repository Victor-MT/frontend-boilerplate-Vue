<template>
  <v-app>
    <!--
    <v-navigation-drawer app>
     
    </v-navigation-drawer>
    -->

    <v-app-bar app color="white">
      <div class="d-flex align-center">
      </div>

      <v-spacer></v-spacer>
      <v-icon v-if="!isLogin" @click="logoutPage()" class="logout-btn">mdi-location-exit</v-icon>

      <v-btn href="https://github.com/Victor-MT" target="_blank" text>
        <span class="mr-2"> Boilerplate Project </span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main class="flex-container">
      <side-bar v-if="user" :items="items" :selectedOption="selectedOption" @selectedOption="setSelectedOption"/>

      <!-- Provides the application the proper gutter -->
      <v-container style="max-width: 100%;" fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <!--
    <v-footer app>
      
    </v-footer>
    -->
  </v-app>
</template>

<script>
import SideBar from './components/SideBar.vue';
import { mapGetters, mapActions} from 'vuex';

const url = 'http://localhost:8080/#/'

export default {
  name: 'App',
  data: () => ({
    selectedOption: null,
    currentRoute: null,
    items: [
                { 
                    title: 'Home', icon: 'mdi-home', link: url + 'home'
                },
            ],
  }),
  components: {
    SideBar,
  },
  methods:{
    ...mapActions(['logout']),
    setSelectedOption(value){
      this.selectedOption = value;
    },
    logoutPage(){
      this.logout();
      this.$router.push('/');
    }
  },
  computed: {
    ...mapGetters(['user']),
    isLogin(){
      return this.currentRoute === '/'
    }
  },
  created() {
    this.currentRoute = this.$route.path;

    this.$watch('$route', () => {
      this.currentRoute = this.$route.path;
    });
  },
};
</script>

<style>
.flex-container {
  height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  padding: 0;
}

.v-main__wrap{
  display: flex;
  flex-direction: row;
}

.logout-btn:hover{
  color:black;
}

</style>
