<template>
  <div class="markets">
    <h1>Markets</h1>
    <table class="styled-table">
      <thead>
      <tr>
        <th>Name</th>
        <th>Points</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>Dom</td>
        <td>6000</td>
      </tr>
      <tr class="active-row">
        <td>Melissa</td>
        <td>5150</td>
      </tr>
      <!-- and so on... -->
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Markets',

}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
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

.styled-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
  border-bottom: 2px solid #009879;
}

.styled-table tbody tr.active-row {
  font-weight: bold;
  color: #009879;
}

</style>
