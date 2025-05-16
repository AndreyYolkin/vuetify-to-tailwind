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

  <!-- Justify-content -->
  <div class="justify-start"></div>
  <div class="justify-space-between"></div>
  <div class="justify-xl-space-around"></div>
  <div class="justify-md-center"></div>

  <!-- JAlign-items -->
  <div class="align-start"></div>
  <div class="align-stretch"></div>
  <div class="align-xl-center"></div>
  <div class="align-sm-end"></div>

  <!-- Align-content -->
  <div class="align-content-space-around"></div>
  <div class="align-content-xxl-space-evenly"></div>
  <div class="align-content-sm-center"></div>

  <!-- Align-self -->
  <div class="self-center"></div>
  <div class="self-start"></div>
  <div class="self-sm-center"></div>

  <!-- Order-->
  <div class="order-first"></div>
  <div class="order-md-last"></div>
  <div class="order-sm-11"></div>

  <!-- Gap-->
  <div class="ga-0"></div>
  <div class="gc-1"></div>
  <div class="gr-12"></div>
  <div class="gr-md-12"></div>
  <div class="gc-xl-2"></div>

  <!-- Margin -->
  <div class="ma-0"></div>
  <div class="mx-1"></div>
  <div class="me-n12"></div>
  <div class="ma-md-12"></div>
  <div class="mb-xl-n12"></div>
  <div class="ms-lg-0"></div>

  <!-- Margin -->
  <div class="pa-0"></div>
  <div class="px-1"></div>
  <div class="pe-12"></div>
  <div class="pa-md-12"></div>
  <div class="pb-xl-12"></div>
  <div class="ps-lg-0"></div>
</template>
