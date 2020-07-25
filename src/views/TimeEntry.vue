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
              <b-form-group id="input-group-2" label="Your Name:" labelFor="input-2">
                <b-form-input  
                  id="input-2"
                  required
                  placeholder="Enter name"
                />
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