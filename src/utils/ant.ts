import { App } from 'vue';
import {
  Avatar,
  Badge,
  Button,
  ConfigProvider,
  DatePicker,
  Divider,
  Form,
  Input,
  Popover,
  Skeleton,
  Table,
  Tag,
  Tooltip,
  Typography,
} from 'ant-design-vue';

const Ant = {
  install: function(Vue: App) {
    Vue.component('a-button', Button);
    Vue.component('a-tooltip', Tooltip);
    Vue.component('a-table', Table);
    Vue.component('a-divider', Divider);
    Vue.component('a-input', Input);
    Vue.component('a-tag', Tag);
    Vue.component('a-data-picker', DatePicker);
    Vue.component('a-range-picker', DatePicker.RangePicker);
    Vue.component('a-config-provider', ConfigProvider);
    Vue.component('a-badge', Badge);
    Vue.component('a-popover', Popover);
    Vue.component('a-form', Form);
    Vue.component('a-typography', Typography);
    Vue.component('a-avatar', Avatar);
    Vue.component('a-skeleton', Skeleton);
  },
};

export default Ant;
