<template>
  this is test
  <div>loading:{{loading}}</div>
  <div>data:{{data}}</div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useRequest } from 'vue-request';
import { getSignApi } from '@/api/example';

export default defineComponent({
  setup() {
    const { loading, data, run } = useRequest(getSignApi, {
      manual: true,
    });

    onMounted(() => {
      setTimeout(() => {
        run(
          {
            a: 2,
          },
          {
            successCb: (data1: any) => {
              console.log('success', data1);
            },
          },
        );
      }, 1000);
    });

    return {
      loading,
      data,
    };
  },
});
</script>
