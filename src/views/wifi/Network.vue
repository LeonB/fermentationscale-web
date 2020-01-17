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
              <v-toolbar-title>Configure wifi: Vanutsteen</v-toolbar-title>
            </v-toolbar>
            <v-form ref="form" v-model="valid">
              <v-container>
                <v-text-field
                  v-model="username"
                  :rules="nameRules"
                  label="Username"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  :rules="nameRules"
                  label="Password"
                  required
                ></v-text-field>
              </v-container>
            </v-form>
            <v-card-actions>
              <v-spacer />
              <v-btn
                color="error"
                class="mr-4"
                to="/wifi"
              >
                Cancel
              </v-btn>
              <v-btn
                color="success"
                class="mr-4"
                to="/wifi/Vanutsteen/connect"
              >
                Connect
              </v-btn>
            </v-card-actions>
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
