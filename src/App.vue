<script setup>
    import SideBar from './layouts/sidebar.vue'
    import Navbar from './layouts/navbar.vue'
</script>

<template>
  <div class="bg-gray-100 font-family-karla flex">
    <SideBar />

    <div class="w-full flex flex-col h-screen overflow-y-hidden">
        <Navbar />

        <router-view></router-view>
    </div>

  </div>
</template> 

<style>
    @import url('https://fonts.googleapis.com/css?family=Karla:400,700&display=swap');
    .font-family-karla { font-family: karla; }
    .bg-sidebar { background: #3d68ff; }
    .cta-btn { color: #3d68ff; }
    .upgrade-btn { background: #1947ee; }
    .upgrade-btn:hover { background: #0038fd; }
    .active-nav-link { background: #1947ee; }
    .nav-item:hover { background: #1947ee; }
    .account-link:hover { background: #3d68ff; }
</style>