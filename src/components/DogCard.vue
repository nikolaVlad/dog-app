<template>
  <div class="card">
    <div class="title">{{dog.name}}</div>
    <div class="body">
      <img class="image" width="200px" height="170" src="sad" />
      <div class="info">
        <div class="breed">Breed: {{dog.breed}}</div>
        <div class="registration">Registration: {{dog.registration}}</div>
        <!-- <div class="birth">Birth date: {{dog.birthday}}</div> -->
        <div class="timeline">Latest timeline activity: {{dog.timeline[dog.timeline.length - 1]}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['dog']
}
</script>

<style lang="scss" scoped>
  .card{

    margin: 10px 20px;
    height: 320px;
    background: rgb(129, 201, 21);
    border-radius: 25px;

    color:black;
    font-weight: 500;
    text-align: left;
    padding: 20px;

    width: 100%;

    .title
    {
      text-align: center;
      margin-bottom: 15px;
      font-weight: 700;
    }

    .body
    {
      .image
      {
        margin-bottom: 15px;
      }
    }
  }
</style>
