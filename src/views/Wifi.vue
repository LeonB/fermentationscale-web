<template>
  <div class="home">
    <Menu />
    <v-container
      class="fill-height"
      fluid
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          sm="8"
          md="4"
        >
          <v-card class="elevation-12">
            <v-toolbar
              color="primary"
              dark
              flat
            >
              <v-toolbar-title>Wifi</v-toolbar-title>
            </v-toolbar>
            <v-list flat>
              <v-list-item-group v-model="item" color="primary">
                  <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    :to="item.link"
                  >
                    <v-list-item-icon>
                      <v-icon large>{{item.icon}}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue'

export default {
  name: 'wifi',
  components: {
    Menu
  },
  data: () => ({
    items: [
      { text: 'Vanutsteen', icon: 'mdi-wifi-strength-3-lock', link: '/wifi/Vanutsteen' },
      { text: 'Omniboost HQ', icon: 'mdi-wifi-strength-2', link: '/wifi/Omniboost HQ' },
      { text: 'Delta', icon: 'mdi-wifi-strength-4', link: '/wifi/Delta' }
    ]
  })
}
</script>
