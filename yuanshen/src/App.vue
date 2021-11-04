/* eslint-disable */
<template>
    <router-view />
</template>

<script>
export default {
};
</script>

<style>
/* 滚动条样式 */
::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 4px;
  height: 10px;
}

::-webkit-scrollbar-thumb {
  cursor: pointer;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.25);
  transition: color 0.2s ease;
}
::-webkit-scrollbar-track {
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 0;
}

/* end */
</style>
