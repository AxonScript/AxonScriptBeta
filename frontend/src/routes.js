// router.js
import Home from "./components/Home.svelte";

// import { wrap } from "svelte-spa-router/wrap";

const routes = {
  "/": Home,

  // "/about": About,
  // "*": Error404, // Catch-all route for 404 errors
};

export default routes;
