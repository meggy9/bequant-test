<template>
  <div>
    <button @click="closeConnection()">Close socket</button>
    <div class="top-section">
      <div>
        <div>{{ exchange.rank }}
          RANK
        </div>
        <div>
          <div>{{ exchange.name }}</div>
          <div>{{ exchange.tradingPairs }}</div>
        </div>
      </div>
      <div>
        <div>
          <div class="title">Volume(24Hr)</div>
          <div>{{ exchange.volumeUsd }}</div>
        </div>
        <div>
          <div>Top Pair</div>
          <div>BTC/USDT</div>
        </div>
      </div>
      <div>
        <a :href="exchange.exchangeUrl" target="_blank">Website</a>
      </div>
    </div>
    <div class="content">
      <ExchangePairsTable :markets="exchangeMarkets"></ExchangePairsTable>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import { initExchangeSocket, closeConnection } from "@/socket";

import ExchangePairsTable from "./ExchangePairsTable";

export default {
  name: "Exchange",
  components: { ExchangePairsTable },

  data: () => ({
    connection: null
  }),

  computed: {
    ...mapState(
        'exchanges',
        [
            'exchange',
            'exchangeMarkets'
        ]
    )
  },

  methods: {
    ...mapMutations('exchanges', ['UPDATE_EXCHANGE']),
    ...mapActions(
        'exchanges',
        [
          'getSingleExchange',
          'getExchangeMarkets'
        ]
    ),
    closeConnection() {
      closeConnection(this.connection)
    }
  },

  created() {
    this.getSingleExchange(this.$route.params.id)
    this.getExchangeMarkets(this.$route.params.id)
    this.connection = initExchangeSocket(this.$route.params.id, this.UPDATE_EXCHANGE)
  },

  beforeDestroy() {
    closeConnection()
  }
}
</script>

<style scoped>
  .top-section {
    background: rgb(3, 152, 252);
    color: white;
    padding: 20px;
    margin-bottom: 20px;
  }

  .content {
    display: flex;
    justify-content: center;
  }
</style>