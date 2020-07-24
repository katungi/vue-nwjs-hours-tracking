<template>
  <b-container class="hours-log-page">
    <b-row>
      <b-col sm="8" offsetSm="2">
        <b-row class="mt-5 mb-2">
          <b-col>
            <h1>Hours Log</h1>
          </b-col>
          <b-col>
            <b-btn variant="primary">+ Add New Projects</b-btn>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <v-select  :options="[{label: 'Canada', code:'ca'}]" />
          </b-col>
        </b-row> 
      </b-col>
    </b-row>
  </b-container>
</template>
