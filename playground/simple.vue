<template>
  <!-- Misc -->
  <div class="d-flex 'class-a class-abc d-xxl-flex"></div>
  <div :class="'d-flex class-c' + 'class-f new-class'"></div>
  <div :class="`d-flex abc-${'cde'} skibidi d-sm-inline`"></div>
  <div :class="['d-flex', 'd-md-none']"></div>
  <div :class="{ 'd-flex': true }"></div>

  <!-- Display -->
  <div class="d-flex d-xxl-inline"></div>

  <!-- Float -->
  <div class="float-end"></div>
  <div class="float-start"></div>
  <div class="float-none"></div>
  <div class="float-left"></div>
  <div class="float-md-end"></div>
  <div class="float-md-start"></div>
  <div class="float-md-none"></div>

  <!-- Flex -->
  <div class="flex-fill"></div>
  <div class="flex-1-1"></div>
  <div class="flex-1-0"></div>
  <div class="flex-md-0-1"></div>
  <div class="flex-lg-1-1"></div>
  <div class="flex-xxl-1-0"></div>

  <!-- Flex-direction -->
  <div class="flex-column"></div>
  <div class="flex-row"></div>
  <div class="flex-md-row-reverse"></div>

  <!-- Flex-grow -->
  <div class="flex-grow-1"></div>
  <div class="flex-grow-0"></div>
  <div class="flex-md-grow-0"></div>

  <!-- Flex-shrink -->
  <div class="flex-shrink-1"></div>
  <div class="flex-shrink-0"></div>
  <div class="flex-xxl-shrink-0"></div>

  <!-- Flex-wrap -->
  <div class="flex-wrap"></div>
  <div class="flex-wrap-reverse"></div>
  <div class="flex-xxl-wrap-reverse"></div>
  <div class="flex-xl-nowrap"></div>
</template>
