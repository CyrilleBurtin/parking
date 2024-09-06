<template>
  <div
    class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <a href="#">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <slot name="title" />
      </h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
      <slot name="action" />
    </p>
    <slot name="button"> </slot>
    <p class="text-green-500">
      <slot name="info" />
    </p>
    <p class="text-red-500">
      <slot name="warning" />
    </p>
  </div>
</template>
