import { App } from 'vue';
import {
  Layout,
  Crumb,
  NewRangePicker,
  BasicGrid,
  Drawer,
  MultiSelect,
  NewSearchBar,
  SearchTags,
  AdvancedSearch,
  SearchSave,
  SearchForm,
} from 'xiezan-ui';
const xiazanUI = {
  install: (Vue: App) => {
    Vue.component('xz-layout', Layout);
    Vue.component('Crumb', Crumb);
    Vue.component('RangePicker', NewRangePicker);
    Vue.component('MultiSelect', MultiSelect);
    Vue.component('BasicGrid', BasicGrid);
    Vue.component('SearchBar', NewSearchBar);
    Vue.component('SearchTags', SearchTags);
    Vue.component('SearchSave', SearchSave);
    Vue.component('AdvancedSearch', AdvancedSearch);
    Vue.component('Drawer', Drawer);
    Vue.component('SearchForm', SearchForm);
  },
};

export default xiazanUI;
