<style>
    /* fonts */
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');

    .card{
        display: flex;
        justify-content: space-between;
        padding: 1rem;
        background-color:aliceblue;        
    }


    .nav-img{
        height: 3rem;
    }

    .nav-links{
        margin-top: 1rem;
    }
    .nav-links > a{
        font-size: 1rem;
        margin-right: 2rem;
        padding: 0.5rem;
        
        border-radius: 4px;
        color: #027bd1;
        text-decoration: none;

        /* font */
        font-family: "Roboto", sans-serif;
        font-optical-sizing: auto;
        font-weight: 350;
        font-style: normal;
        font-variation-settings:"wdth" 100;
    }
   
   .nav-links > a:hover{
        color: aliceblue;
        background-color: #027bd1;

   }
</style>



<div class="card">
    <a href="/">
        <img class="nav-img" src="/axonscript-favicon.png" alt="AxonScript Logo">
    </a>
<ul class="nav-links">
    <a href="/about">About</a>
    <a href="/docs">Docs</a>
    <a href="https://dev.to/axonscript">Blog</a>
    <a href="/community">Community</a>
    <a href="https://github.com/AxonScript">GitHub</a>
</ul>
</div>"