<template>
    <v-navigation-drawer 
        class="sidebar"
        v-model="drawer" 
        :value="selectedOption"
        :mini-variant.sync="mini" 
        permanent 
        expand-on-hover
        height="100%"
        >
        <v-list-item class="px-2">
            <v-list-item-avatar>
                <!-- <img src="../assets/pikachu-profile.png" alt="profile"> -->
                <div class="avatar-initials"> {{ getUserNameInitials }} </div>
            </v-list-item-avatar>

            <v-list-item-content>
                <v-list-item-title class="text-h7 sidebar-content font-weight-bold">
                    {{ user.name }}
                </v-list-item-title>
                <v-list-item-subtitle class="sidebar-content text-caption">
                    {{ user.email }}
                </v-list-item-subtitle>
            </v-list-item-content>

        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>
            <v-list-item v-for="item in items" :href="item.link" :key="item.title" @click="selectOption(item)" :class="{ 'active-option': item === selectedOption }" style="margin-bottom: 16px;" link>
                <v-list-item-icon>
                    <div> <!-- style="max-width: fit-content; background-color: #0059ffb6; border-radius: 5px; max-width: fit-content;"> -->
                        <v-icon class="sidebar-content" >{{ item.icon }}</v-icon>
                    </div>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title class="sidebar-content" >{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'SideBar',
    props: {
        items: [],
        selectedOption: null,
    },
    methods:{
        selectOption(option){
            this.$emit("selectedOption", option);
        },
    },
    data() {
        return {
            drawer: true,
            mini: true,
        }
    },
    computed:{
        ...mapGetters(['user']),
        getUserNameInitials(){
            const names = this.user.name.split(' ');
            if (names.length === 1) {
                return names[0].charAt(0).toUpperCase();
            } else {
                return names[0].charAt(0).toUpperCase() + names[2].charAt(0).toUpperCase();
            }
        }
    },
    mounted(){
        this.items.forEach(t => {
            if(t.link === window.location.href){
                this.selectOption(t)
            }
        })
    }
}
</script>

<style>

.sidebar{
    /* background: linear-gradient(180deg, rgba(10, 78, 212, 0.64) 0%, rgba(10, 200, 212, 0.64) 0.01%, rgba(10, 212, 127, 0.92) 100%); */
    background-color: rgba(40, 214, 156, 1) !important;
    max-width: fit-content;
}

.sidebar-content{
    color:white !important
}

.active-option {
    background: #005AFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
}

.avatar-initials {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  background-color: #2196f3;
  border-radius: 50%;
  font-size: 24px;
  font-weight: 500;
  color: #ffffff;
}
</style>
