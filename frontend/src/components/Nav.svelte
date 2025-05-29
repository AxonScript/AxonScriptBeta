

<style lang="scss">
    /* fonts */
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');

    .card{
        display: flex;
        justify-content: space-between;
        padding: 0.1rem;
        background: var(--nav-bg);
        border-bottom: 0.01rem solid var(--nav-border-bottom-color);
        
        
        .nav-logo{
            height: 3rem;
        }


        .nav-links{
            margin-top: 1rem;

            
            a{
                font-size: 1.1rem;
                margin-right: 2rem;
                padding: 0.5rem;

            
                border-radius: 4px;
                color: #027bd1;
                text-decoration: none;

                /* font */
                font-family: "Varela Round", sans-serif;
                font-weight: 1000;
                font-style: normal;

                &:hover{
                    color: var(--nav-links-color-on-hover);
                    
                    
                    background-color: #027bd1;
                    font-weight: 900;

               }
            }
        }
    }


    
    
</style>



<div class="card ">
    <a href="/">
        <img class="nav-logo" src="/axonscript-favicon.png" alt="AxonScript Logo">
    </a>
<ul class="nav-links">
    
    <a href="/about">About</a>
    <a href="/docs">Docs</a>
    <a href="https://dev.to/axonscript">Blog</a>
    <a href="/community">Community</a>
    <a href="https://github.com/AxonScript">GitHub</a>
</ul>
</div>
