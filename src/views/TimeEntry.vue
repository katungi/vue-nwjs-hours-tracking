<template>
  <b-container>
    <b-row>
      <b-col sm="6" offsetsm="12">
        <b-row>
          <b-col>
            <h1> New Time Entry </h1>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form @submit="onSubmit" @reset="onReset">
              <b-form-group id="input-group-1" label="Start Date:">
                <date-picker v-model="formData.startDate" type="datetime" />
              </b-form-group>
              <b-form-group id="input-group-2" label="End Date:">
                <date-picker v-model="formData.endDate" type="datetime" />
              </b-form-group>
              <b-button type="submit" variant="primary">Submit</b-button>
              <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
          </b-col>
        </b-row>
      </b-col></b-row>
  </b-container>
</template>

<script>
export default {
  name: 'TimeEntry',
  data () {
    return {
      formData: {
        startDate: {},
        endDate: {}
      }
    };
  },
  methods: {
    onSubmit () {
    },
    onReset () {
    }
  } 
};
</script>