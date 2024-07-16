<template>
  <table class="my-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="person in persons" :key="person.id">
        <td>{{ person.name }}</td>
        <td>{{ person.age }}</td>
        <td>{{ person.email }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
const persons = [
  { id: 1, name: 'John Doe', age: 30, email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Smith', age: 25, email: 'jane.smith@example.com' },
  { id: 3, name: 'Mike Johnson', age: 35, email: 'mike.johnson@example.com' }
];
</script>

<style scoped>
.my-table {
  width: 100%;
  border-collapse: collapse;
}
.my-table th, .my-table td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}
</style>
