<template>
  <form class="form" @submit.prevent="handleSubmit">
    <!--Title-->
    <label for="title">Título:</label>
    <input id="title" name="title" v-model="formData.title" required />
    <!--Description-->
    <label for="description">Descripción:</label>
    <input
      id="description"
      name="description"
      v-model="formData.description"
      required
    />
    <!--Status-->
    <label for="status">Estado del proyecto:</label>
    <select v-model="formData.status" required>
      <option value="PENDING">Pendiente</option>
      <option value="QUEUED">En cola</option>
      <option value="COMPLETED">Completada</option>
    </select>
    <!--Submit button-->
    <button class="button green" type="submit">
      <p v-if="!defaultValues">Crear proyecto</p>
      <p v-else>Actualizar proyecto</p>
    </button>
    <!--Go back button-->
    <button @click="goBack" class="button blue" type="button">Volver</button>
  </form>
</template>

<script lang="ts">
//Vue library
import { defineComponent } from "vue";
import { ref } from "@vue/reactivity";
//Router
import { useRouter } from "vue-router";
//Interfaces
import { ProjectForm } from "../interfaces/forms";

export default defineComponent({
  props: ["defaultValues", "handleFormSubmit"],
  setup(props) {
    const { go } = useRouter();
    /**Inital form data */
    const formData = ref<ProjectForm>({
      title: props.defaultValues?.title ?? "",
      description: props.defaultValues?.description ?? "",
      status: props.defaultValues?.status ?? "",
    });
    /**Handle form submit */
    const handleSubmit = () => {
      props.handleFormSubmit(formData.value);
    };
    /**Handle go back */
    const goBack = () => {
      go(-1);
    };
    return {
      formData,
      handleSubmit,
      goBack,
    };
  },
});
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
}
label {
  font-weight: 600;
  text-align: start;
  margin: 0 0 2px 0;
}
label:not(:first-child) {
  margin: 12px 0 2px 0;
}
button {
  margin: 16px 0 0 0;
}
</style>
