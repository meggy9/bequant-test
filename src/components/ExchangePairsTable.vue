<template>
  <table class="styled-table">
    <thead>
    <tr>
      <th>Pair</th>
      <th>Price</th>
      <th>Volume(24Hr)</th>
      <th>Trades(24Hr)</th>
    </tr>
    </thead>
    <tbody>
    <tr
        v-for="(market, key) in markets"
        :key="key"
    >
      <td>{{ market.baseSymbol + '/' + market.quoteSymbol }}</td>
      <td>{{ market.priceUsd }}</td>
      <td>{{ market.volumeUsd24Hr }}</td>
      <td>{{ market.tradesCount24Hr }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "ExchangePairsTable",
  props: {
    markets: {
      type: Array
    }
  },
  data: () => ({
    updateInterval: null
  }),
  mounted() {
    this.updateInterval = setInterval(() => this.$forceUpdate(), 700)
  },
  beforeDestroy() {
    clearInterval(this.updateInterval)
  }
}
</script>

<style scoped>

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

</style>