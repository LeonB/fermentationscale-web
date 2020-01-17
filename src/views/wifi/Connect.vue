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
              <v-toolbar-title>Trying to connect</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <div class="text-center">
                <v-progress-circular indeterminate/>
              </div>
            </v-card-text>

            <v-card-actions>
              <v-spacer />
              <v-btn
                color="error"
                class="mr-4"
                to="/wifi/Vanutsteen"
              >
                Cancel
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
  name: 'connect',
  components: {
    Menu
  },
  data: () => ({
  })
}
</script>
