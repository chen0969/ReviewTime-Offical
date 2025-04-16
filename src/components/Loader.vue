<script setup>
</script>

<template>
    <div class="row justify-content-center align-items-center">
        <div class="col-12 text-center p-5">
            <div class="loader"></div>
        </div>
    </div>
</template>

<style scoped lang="scss">
/* HTML: <div class="loader"></div> */
.loader {
  display: inline-grid;
  padding: 5px;
  background: #fff;
  filter: blur(4px) contrast(12);
  filter: blur(6px);
  opacity: 0.5;
  transform: scale(2);
}
.loader:before,
.loader:after {
  content: "";
  grid-area: 1/1;
  height: 40px;
  aspect-ratio: 3;
  --c: #0000 64%,#000 66% 98%,#0000 101%;
  background:
    radial-gradient(35% 146% at 50% 159%,var(--c)) 0 0,
    radial-gradient(35% 146% at 50% -59%,var(--c)) 100% 100%;
  background-size: calc(200%/3) 50%;
  background-repeat: repeat-x;
  clip-path: inset(0 100% 0 0);
  animation: l15 1.5s infinite linear;
}
.loader:after {
  scale: -1 1;
}
@keyframes l15{
  50% {clip-path: inset(0)}
  to {clip-path: inset(0 0 0 100%)}
}
</style>
