<template>
  <section>
    <h1>Please enter the quantity to get the price</h1>
    <form @submit.prevent="submit">
      <input type="text" id="quantity" v-model="form.quantity" required />
      <button type="submit">Submit</button>
    </form>
    <Success :message="productValue" />
    <Error :message="error.message" />
  </section> 
</template>

<script>
import { mapActions } from "vuex"

import Success from '@/components/SuccessMessage.vue'
import Error from '@/components/ErrorMessage.vue'

export default {
  name: 'RequestedQuantity',
  components: {
    Success,
    Error
  },

  data() {
    return {
      form: {
        quantity:""
      },
      productValue: "",
      error: {
        message: "",
        show: false
      }
    }
  },

  methods: {
    ...mapActions({
      getRequestedPrice: 'inventory/getRequestedPrice'
    }),

    async submit() {
      const response = await this.getRequestedPrice(this.form)
      if (response.success) {
        this.error.message = ""
        this.error.show = false
        this.productValue = `The applied value is $${response.data.productValue}`
      } else {
        this.productValue = ""
        this.error.message = (response.errors) ? response.errors.quantity[0] : response.message,
        this.error.show = true
      }
    }
  }
}
</script>