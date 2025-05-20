<script>
  import Router from 'svelte-spa-router'; // The Router component itself
  import routes from './routes.js'; // Your defined routes
</script>

<main>
  <Router {routes} />
</main>
