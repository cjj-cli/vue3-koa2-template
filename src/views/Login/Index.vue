<template>
  <form>
    <label>用户名</label><input type="text"
           v-model="name">
    <label>密码</label><input type="text"
           v-model="password">
    <button @click="submit">提交</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import { useRequest } from 'vue-request';
import { loginApi } from '@/api/login';

export default defineComponent({
  setup() {
    const form = reactive({
      name: '',
      password: '',
    });

    const { loading, run } = useRequest(loginApi);
    const router = useRouter();
    const submit = () => {
      if (loading.value) {
        return;
      }

      run(
        {
          ...form,
        },
        {
          successCb: () => {
            router.push('/');
          },
        },
      );
    };

    return {
      ...toRefs(form),
      submit,
    };
  },
});
</script>

<style>
</style>
