<template>

    <div class="app">

        <router-view></router-view>
        
    </div>

</template>

<script>

    export default {    name: 'App',    }

</script>

<style>
* {
    margin: 0;
    padding: 0;
    font-family: 'Gotham Pro';
}
*, *:before, *:after {
  box-sizing: border-box;
}

body {
    margin: 0;
    padding: 0;
}

a {
    text-decoration: none;
    color: #000;
}

ul, li {
    list-style: none;
}

button {
    background: none;
    padding: 0;
    margin: 0;
    border: none;
    cursor: pointer;
}

select{
    -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
    border: none;
}

:active, :hover, :focus {
    outline: 0;
    outline-offset: 0;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
textarea {
    resize: none;
}
</style>