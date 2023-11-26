

<template>
  <div class="home-container">
    <PlayerPanel />
    <div class="center-container">
      <Keyboard />
    </div>
  </div>

</template>

<script>
import PlayerPanel from "@/components/PlayerPanel.vue";
import Keyboard from "@/components/Keyboard.vue";

export default {
  components: {Keyboard, PlayerPanel},
};
</script>

<style>
.home-container {
  height: 100%;
  display: block;
  flex-direction: column;
}

.center-container {
  flex: 0;
  display: inline-block;
  justify-content: center;
  align-items: center;
}

</style>