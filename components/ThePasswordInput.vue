<template>
  <div class="input-group">
    <input
      data-val="true"
      data-val-required="Şifre alanı boş geçilemez"
      id="pass"
      name="Password"
      placeholder="****"
      :type="showPassword ? 'password':'text'"
      class="form-control"
      @input="$emit('change', $event.target.value)"
    /><span
      data-valmsg-for="Password"
      data-valmsg-replace="true"
      class="field-validation-valid text-danger"
    ></span>
    <div class="input-group-addon">
      <span
        class="toggle-password-visible"
        @click="
          {
            showPassword= !showPassword;
          }
        "
        ><i class="icon-eye-alt"></i
      ></span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showPassword: false,
    };
  }
};
</script>