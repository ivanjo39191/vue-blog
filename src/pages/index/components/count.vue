<template>
  <div class="content-box">
    <h2>{{ msg }}</h2>
    <hr>
    <h3>{{$store.state.count.count}}</h3>
    <h3>{{count}}</h3>
    <div>
      <button @click="$store.commit('add',10)">+</button>
      <button @click="reduce">-</button>
    </div>
    <p>
      <button @click="addAction">+</button>
      <button @click="reduceAction">-</button>
    </p>
  </div>
</template>

<script>
import store from '../store/index'
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex';

export default {
  data () {
    return {
      msg: 'Hello Vuex'
    }
  },
  computed:{
    ...mapState(["count"]),
    ...mapGetters(["count"])
  },
  methods:{
    ...mapMutations([  
        'add','reduce'
    ]),
    ...mapActions(['addAction','reduceAction'])
  },
  store
}

</script>