<template>
  <xz-layout :baseUrl="baseUrl" :selectedUrl="'/pprice/v5/demo'">
    <a-config-provider :locale="locale">
      <xz-crumb />
    </a-config-provider>
  </xz-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import XzCrumb from './components/xzCrumb.vue';
import { Layout } from 'xiezan-ui';

export default defineComponent({
  name: 'App',
  components: {
    XzLayout: Layout,
    XzCrumb,
  },
  setup() {
    const baseUrl = process.env.VUE_APP_API;

    // 汉化
    moment.locale('zh-cn');

    return {
      baseUrl,
      locale: zhCN,
    };
  },
});
</script>

<style lang="less">
.table-show {
  margin-top: 20px;
}
</style>
