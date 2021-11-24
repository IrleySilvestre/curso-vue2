<template>
  <v-container tag="div">
    <v-list rounded>
      <v-list-item>
        <v-list-item-action>
          <v-checkbox color="primary"></v-checkbox>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>teste</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon elevation="7">
            <v-icon color="red lighten-2">mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>
        <v-list-item-action>
          <v-btn icon elevation="7">
            <v-icon color="indigo">mdi-pencil</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
      <v-divider></v-divider>

      <v-list-item>
        <v-list-item-action>
          <v-checkbox color="primary"></v-checkbox>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>teste</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon elevation="7">
            <v-icon color="red lighten-2">mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>
        <v-list-item-action>
          <v-btn icon elevation="7">
            <v-icon color="indigo">mdi-pencil</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
      <v-divider></v-divider>
    </v-list>
  </v-container>
</template>

<script>
export default {
  name: "TasksList",

  data: () => ({
    settings: [],
  }),
};
</script>
