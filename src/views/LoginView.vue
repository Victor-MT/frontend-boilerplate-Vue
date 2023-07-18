<template>
    <div class="cont">
        <div>
            <v-img alt="Logo" class="shrink mr-2" contain src="" transition="scale-transition" width="30%"/>
            <v-btn 
                elevation="24" 
                x-large 
                class="centered-button login-btn"
                @click="loginWMicrosoftAcc"
            > 
                Login with Microsoft account 
            </v-btn>
            <v-alert
                v-model="showError"
                border="left"
                elevation="5"
                prominent
                type="error"
                dismissible
                transition="fade-transition"
                style="position: absolute;margin: 10px;"
            >
                Login não autorizado!
            </v-alert>
        </div>
    </div>
</template>
  
<script>
//import { loginWithMSAL } from '../services/loginMSAL.js';
import { mapActions } from 'vuex';
//import { api } from '@/services/requestApi';

export default {
    name: 'LoginView',
    data(){
        return {
            showError: false,
        }
    },
    methods: {
        ...mapActions(['login']),
        async loginWMicrosoftAcc() {
            const user = { id: 'ajsososasjjo', name: 'MyUser', email: 'myuser@email.com'};
            const token = '122kasjasiajsncnsjaç';

            this.login({user, token});
            this.$router.push('/home');

            /* loginWithMSAL()
                .then(async account => {
                    console.log('Usuário logado:', account);

                    const user = { id:null, name:account.name, email: account.username };
                    const token = account.tenantId;

                    const response = await api({
                        entity: 'users',
                        action: 'userLoggin',
                        payload: {full_name: user.name, email: user.email}
                    });

                    const isAuth = response.data && response.data.id

                    console.log("AUTHORIZATION: " + isAuth)

                    if(!isAuth)
                        throw new Error('Not authorized');
                    
                    user.id = response.data.id
                    this.login({user, token});
                    this.$router.push('/home');
                })
                .catch(error => {
                    // Lidar com erros de login aqui
                    console.error('Erro ao fazer login:', error);
                    this.showError = true
                }); */
        }
    }
}

</script>

<style>

.cont{
  height: 100%;
  display: flex;
  align-items: center;
  background-size: cover; /* Ajuste o tamanho conforme necessário */
  background-position: center center;
}

.container{
    padding: 0px;
}

.login-btn{
background-color: #0000ff !important;
color: white !important;
margin-left: 10px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
  