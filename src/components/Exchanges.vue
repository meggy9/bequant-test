<template>
  <div v-if="exchanges" class="exchanges">
    <h1>Exchanges</h1>
    <table class="styled-table">
      <thead>
      <tr>
        <th>Rank</th>
        <th>Name</th>
        <th>Trading Pairs</th>
        <th>Volume(24Hr)</th>
      </tr>
      </thead>
      <tbody>
      <tr
          v-for="(exchange, key) in exchanges"
          :key="key"
          @click="showExchangePage(exchange)"
      >
        <td>{{ exchange.rank }}</td>
        <td>{{ exchange.name }}</td>
        <td>{{ exchange.tradingPairs }}</td>
        <td>{{ exchange.volumeUsd }}</td>
      </tr>
      </tbody>
    </table>
<!--    <button-->
<!--        @click="fetchNextPage()"-->
<!--        :disabled="!hasNextPage"-->
<!--        class="view-btn"-->
<!--    >-->
<!--      View more-->
<!--    </button>-->
  </div>
</template>

<script>

import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'Exchanges',

  data: () => ({
    pageSize: 20,
    size: 20,
    direction: "ASC"
  }),

  computed: {
    ...mapState('exchanges', ['exchanges'])
  },

  methods: {
    ...mapActions(
        'exchanges',
        [
            'getExchanges',
            'fetchNextExchangesPage'
        ]
    ),
    ...mapMutations(['SET_EXCHANGE']),

    showExchangePage(exchange) {
      this.SET_EXCHANGE(exchange)
      this.$router.push(`/exchanges/${exchange.exchangeId}`)
    }
  },

  created() {
    this.getExchanges();
  }

}
</script>


<style scoped>

  .exchanges {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h3 {
    margin: 40px 0 0;
  }

  .styled-table {
    margin-bottom: 20px;
  }

  .styled-table thead tr {
    background-color: #009879;
    color: #ffffff;
    text-align: left;
  }

  .styled-table th,
  .styled-table td {
    padding: 12px 15px;
  }

  .styled-table tbody tr {
    border-bottom: 1px solid #dddddd;
  }

  .styled-table tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
  }

  .styled-table tbody tr.active-row {
    font-weight: bold;
    color: #009879;
  }

  .styled-table tbody tr:hover {
    cursor: pointer;
    background-color: #f3f3f3;
  }

  .view-btn {
    padding:0.3em 1.2em;
    margin:0 0.3em 0.3em 0;
    border-radius:2em;
    box-sizing: border-box;
    text-decoration:none;
    font-weight:300;
    color:#FFFFFF;
    background-color:#4eb5f1;
    text-align:center;
    transition: all 0.2s;
  }

  .view-btn:hover{
    background-color:#4095c6;
  }

</style>
