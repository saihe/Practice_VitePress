---
title: 勤怠一覧
layout: page
pageClass: list-page
sidebar: false
aside: false
prev: false
next: false
footer: false
---

<script setup>
  import Attendances from '.vitepress/theme/contents/Attendances'
</script>

<style>
  .list-page {
    overflow-x: hidden !important;
    overflow-y: hidden !important;
  }
  .list-page h1 {
    font-size: 28px;
  }
  .list-page h2 {
    font-size: 24px;
  }
  .list-page .VPContent {
    margin: 20px 0 0 50px;
    padding-right: 50px;
    height: 500px;
  }
  .list-page .VPPage {
    height: 100%;
  }

</style>

# 勤怠一覧

<Attendances />
