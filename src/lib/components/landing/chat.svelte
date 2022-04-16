<div class="chat px-5 md:px-0">
    <p class="from-me">Hey! What's up</p>
    <p class="from-them">Nothin' much... How about you?</p>
    <p class="from-me">I just want to chat a little</p>
    <p class="from-them">Okay we can chat.</p>
    <p class="from-me">Are you a robot?</p>
    <p class="from-them">Yes. Why do you ask?</p>
</div>

<style>
    div.chat {
        overflow: hidden;
        font-family: "Helvetica Neue", Helvetica, sans-serif;
        font-size: 20px;
        font-weight: normal;
        display: -webkit-box;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column;
        min-width: 350px;
    }
    p {
        max-width: 255px;
        word-wrap: break-word;
        margin-bottom: 12px;
        line-height: 24px;
        position:relative;
        padding:10px 20px;
        border-radius:25px;
    }

    p:before, p:after {
        content:"";
        position:absolute;
        bottom:-2px;
        height:20px;
    }

    .from-me {
        color:white; 
        background: theme("colors.brand.500");
        align-self: flex-end;
    }

    .from-me:before {
        right:-7px;
        border-right:20px solid theme("colors.brand.500");
        border-bottom-left-radius: 16px 14px;
        -webkit-transform:translate(0, -2px);
        transform:translate(0, -2px);
    }

    .from-me:after {
        right:-56px;
        width:26px;
        background: theme("colors.brand.100");
        border-bottom-left-radius: 10px;
        -webkit-transform:translate(-30px, -2px);
        transform:translate(-30px, -2px);
    }
    .from-them {
        background: #fff;
        color:black;
    }
    .from-them:before {
        left:-7px;
        border-left:20px solid #fff;
        border-bottom-right-radius: 16px 14px;
        -webkit-transform:translate(0, -2px);
        transform:translate(0, -2px);
    }
    .from-them:after {
        left:4px;
        width:26px;
        background: theme("colors.brand.100");
        border-bottom-right-radius: 10px;
        -webkit-transform:translate(-30px, -2px);
        transform:translate(-30px, -2px);
    }
</style>
