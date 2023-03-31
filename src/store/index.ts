import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import assignment from './modules/assignment';
import { RootState } from '@/interfaces';

Vue.use(Vuex)

const store: StoreOptions<RootState> = { 
  modules: {
    assignment
  },
  strict: process.env.NODE_ENV !== 'production'
}

export default new Vuex.Store<RootState>(store);
