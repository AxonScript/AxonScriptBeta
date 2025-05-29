<script>
  import Router from 'svelte-spa-router'; // The Router component itself
  import routes from './routes.js'; // Your defined routes
</script>

<main nav-theme="light" >
  <Router {routes} />
</main>

<style>
  :global(*){
    margin: 0px;
    padding: 0px;
  }
</style>