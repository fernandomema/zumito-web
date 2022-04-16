<script>
    import { session } from '$app/stores';
    export let open = false;
    let toggleMenu = function() {
        open = !open;
    }
</script>


<div class="main mx-auto" class:hidden={!open}>
    <div class="bar"> 
        <img on:click={toggleMenu} class="bar__icon" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAw%0D%0AL3N2ZyI+CgogPGc+CiAgPHRpdGxlPmJhY2tncm91bmQ8L3RpdGxlPgogIDxyZWN0IGZpbGw9Im5v%0D%0AbmUiIGlkPSJjYW52YXNfYmFja2dyb3VuZCIgaGVpZ2h0PSI0MDIiIHdpZHRoPSI1ODIiIHk9Ii0x%0D%0AIiB4PSItMSIvPgogPC9nPgogPGc+CiAgPHRpdGxlPkxheWVyIDE8L3RpdGxlPgogIDxwYXRoIGlk%0D%0APSJzdmdfMSIgZmlsbD0ibm9uZSIgZD0ibTAsMGw0OCwwbDAsNDhsLTQ4LDBsMCwtNDh6Ii8+CiAg%0D%0APHBhdGggZmlsbD0iI2ZmZmZmZiIgaWQ9InN2Z18yIiBkPSJtMzgsMTRsMCw4bC0yNi4zNCwwbDcu%0D%0AMTcsLTcuMTdsLTIuODMsLTIuODNsLTEyLDEybDEyLDEybDIuODMsLTIuODNsLTcuMTcsLTcuMTds%0D%0AMzAuMzQsMGwwLC0xMmwtNCwweiIvPgogPC9nPgo8L3N2Zz4="/>
        <img class="bar__icon" style="padding:0;" src="https://cdn.discordapp.com/avatars/{$session.user?.id}/{$session.user?.avatar}.webp?size=1024" alt="{$session.user?.username} avatar"/>
    </div>
    <div class="menu">
        <div class="menu__item" id="0-0"> 
            <img class="menu__icon" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAw%0D%0AL3N2ZyI+CgogPGc+CiAgPHRpdGxlPmJhY2tncm91bmQ8L3RpdGxlPgogIDxyZWN0IGZpbGw9Im5v%0D%0AbmUiIGlkPSJjYW52YXNfYmFja2dyb3VuZCIgaGVpZ2h0PSI0MDIiIHdpZHRoPSI1ODIiIHk9Ii0x%0D%0AIiB4PSItMSIvPgogPC9nPgogPGc+CiAgPHRpdGxlPkxheWVyIDE8L3RpdGxlPgogIDxwYXRoIGZp%0D%0AbGw9IiNmZmZmZmYiIGlkPSJzdmdfMSIgZD0ibTIwLDQwbDAsLTEybDgsMGwwLDEybDEwLDBsMCwt%0D%0AMTZsNiwwbC0yMCwtMThsLTIwLDE4bDYsMGwwLDE2bDEwLDB6Ii8+CiA8L2c+Cjwvc3ZnPg=="/>
            <div class="menu__content">
                <span class="menu__span">HOME</span>
            </div>
        </div>
        <div class="menu__item" id="1-0">
            <img class="menu__icon" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAw%0D%0AL3N2ZyI+CgogPGc+CiAgPHRpdGxlPmJhY2tncm91bmQ8L3RpdGxlPgogIDxyZWN0IGZpbGw9Im5v%0D%0AbmUiIGlkPSJjYW52YXNfYmFja2dyb3VuZCIgaGVpZ2h0PSI0MDIiIHdpZHRoPSI1ODIiIHk9Ii0x%0D%0AIiB4PSItMSIvPgogPC9nPgogPGc+CiAgPHRpdGxlPkxheWVyIDE8L3RpdGxlPgogIDxwYXRoIGlk%0D%0APSJzdmdfMSIgZmlsbD0ibm9uZSIgZD0ibTAsMGw0OCwwbDAsNDhsLTQ4LDBsMCwtNDh6Ii8+CiAg%0D%0APHBhdGggZmlsbD0iI2ZmZmZmZiIgaWQ9InN2Z18yIiBkPSJtMjQsNDIuN2wtMi45LC0yLjYzYy0x%0D%0AMC4zLC05LjM1IC0xNy4xLC0xNS41MiAtMTcuMSwtMjMuMDdjMCwtNi4xNyA0LjgzLC0xMSAxMSwt%0D%0AMTFjMy40OCwwIDYuODIsMS42MiA5LDQuMTdjMi4xOCwtMi41NSA1LjUyLC00LjE3IDksLTQuMTdj%0D%0ANi4xNywwIDExLDQuODMgMTEsMTFjMCw3LjU1IC02LjgsMTMuNzIgLTE3LjEsMjMuMDdsLTIuOSwy%0D%0ALjYzeiIvPgogPC9nPgo8L3N2Zz4="/>
            <div class="menu__content">
                <span class="menu__span">LIKES</span>
            </div>
        </div>
        <div class="menu__item" id="0-1">
            <img class="menu__icon" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAw%0D%0AL3N2ZyI+CgogPGc+CiAgPHRpdGxlPmJhY2tncm91bmQ8L3RpdGxlPgogIDxyZWN0IGZpbGw9Im5v%0D%0AbmUiIGlkPSJjYW52YXNfYmFja2dyb3VuZCIgaGVpZ2h0PSI0MDIiIHdpZHRoPSI1ODIiIHk9Ii0x%0D%0AIiB4PSItMSIvPgogPC9nPgogPGc+CiAgPHRpdGxlPkxheWVyIDE8L3RpdGxlPgogIDxwYXRoIGlk%0D%0APSJzdmdfMSIgZmlsbD0ibm9uZSIgZD0ibTAsMGw0OCwwbDAsNDhsLTQ4LDBsMCwtNDh6Ii8+CiAg%0D%0APHBhdGggZmlsbD0iI2ZmZmZmZiIgaWQ9InN2Z18yIiBkPSJtMjAsNDBsOCwwbDAsLTMybC04LDBs%0D%0AMCwzMnptLTEyLDBsOCwwbDAsLTE2bC04LDBsMCwxNnptMjQsLTIybDAsMjJsOCwwbDAsLTIybC04%0D%0ALDB6Ii8+CiA8L2c+Cjwvc3ZnPg=="/>
            <div class="menu__content">
                <span class="menu__span">STATS</span>
            </div>
        </div>
        <div class="menu__item" id="1-1">
            <img class="menu__icon" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAw%0D%0AL3N2ZyI+CgogPGc+CiAgPHRpdGxlPmJhY2tncm91bmQ8L3RpdGxlPgogIDxyZWN0IGZpbGw9Im5v%0D%0AbmUiIGlkPSJjYW52YXNfYmFja2dyb3VuZCIgaGVpZ2h0PSI0MDIiIHdpZHRoPSI1ODIiIHk9Ii0x%0D%0AIiB4PSItMSIvPgogPC9nPgogPGc+CiAgPHRpdGxlPkxheWVyIDE8L3RpdGxlPgogIDxwYXRoIGlk%0D%0APSJzdmdfMSIgZmlsbD0ibm9uZSIgZD0ibTAsMGw0OCwwbDAsNDhsLTQ4LDBsMCwtNDh6Ii8+CiAg%0D%0APHBhdGggZmlsbD0iI2ZmZmZmZiIgaWQ9InN2Z18yIiBkPSJtNDIsMzhsMCwtMjhjMCwtMi4yMSAt%0D%0AMS43OSwtNCAtNCwtNGwtMjgsMGMtMi4yMSwwIC00LDEuNzkgLTQsNGwwLDI4YzAsMi4yMSAxLjc5%0D%0ALDQgNCw0bDI4LDBjMi4yMSwwIDQsLTEuNzkgNCwtNHptLTI1LC0xMWw1LDYuMDFsNywtOS4wMWw5%0D%0ALDEybC0yOCwwbDcsLTl6Ii8+CiA8L2c+Cjwvc3ZnPg=="/>
            <div class="menu__content">
                <span class="menu__span">PICTURES</span>
            </div>
        </div>
        <div class="menu__item" id="0-2">
            <img class="menu__icon" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAw%0D%0AL3N2ZyI+CgogPGc+CiAgPHRpdGxlPmJhY2tncm91bmQ8L3RpdGxlPgogIDxyZWN0IGZpbGw9Im5v%0D%0AbmUiIGlkPSJjYW52YXNfYmFja2dyb3VuZCIgaGVpZ2h0PSI0MDIiIHdpZHRoPSI1ODIiIHk9Ii0x%0D%0AIiB4PSItMSIvPgogPC9nPgogPGc+CiAgPHRpdGxlPkxheWVyIDE8L3RpdGxlPgogIDxwYXRoIGZp%0D%0AbGw9IiNmZmZmZmYiIGlkPSJzdmdfMSIgZD0ibTQuMDIsNDJsNDEuOTgsLTE4bC00MS45OCwtMThs%0D%0ALTAuMDIsMTRsMzAsNGwtMzAsNGwwLjAyLDE0eiIvPgogPC9nPgo8L3N2Zz4="/>
            <div class="menu__content">
                <span class="menu__span">SHARE</span>
            </div>
        </div>
        <div class="menu__item" id="1-2">
            <img class="menu__icon" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAw%0D%0AL3N2ZyI+CgogPGc+CiAgPHRpdGxlPmJhY2tncm91bmQ8L3RpdGxlPgogIDxyZWN0IGZpbGw9Im5v%0D%0AbmUiIGlkPSJjYW52YXNfYmFja2dyb3VuZCIgaGVpZ2h0PSI0MDIiIHdpZHRoPSI1ODIiIHk9Ii0x%0D%0AIiB4PSItMSIvPgogPC9nPgogPGc+CiAgPHRpdGxlPkxheWVyIDE8L3RpdGxlPgogIDxwYXRoIGlk%0D%0APSJzdmdfMSIgZmlsbD0ibm9uZSIgZD0ibTAsMGw0OCwwbDAsNDhsLTQ4LDBsMCwtNDh6Ii8+CiAg%0D%0APHBhdGggZmlsbD0iI2ZmZmZmZiIgaWQ9InN2Z18yIiBkPSJtMzguODYsMjUuOTVjMC4wOCwtMC42%0D%0ANCAwLjE0LC0xLjI5IDAuMTQsLTEuOTVzLTAuMDYsLTEuMzEgLTAuMTQsLTEuOTVsNC4yMywtMy4z%0D%0AMWMwLjM4LC0wLjMgMC40OSwtMC44NCAwLjI0LC0xLjI4bC00LC02LjkzYy0wLjI1LC0wLjQzIC0w%0D%0ALjc3LC0wLjYxIC0xLjIyLC0wLjQzbC00Ljk4LDIuMDFjLTEuMDMsLTAuNzkgLTIuMTYsLTEuNDYg%0D%0ALTMuMzgsLTEuOTdsLTAuNzUsLTUuM2MtMC4wOSwtMC40NyAtMC41LC0wLjg0IC0xLC0wLjg0bC04%0D%0ALDBjLTAuNSwwIC0wLjkxLDAuMzcgLTAuOTksMC44NGwtMC43NSw1LjNjLTEuMjIsMC41MSAtMi4z%0D%0ANSwxLjE3IC0zLjM4LDEuOTdsLTQuOTgsLTIuMDFjLTAuNDUsLTAuMTcgLTAuOTcsMCAtMS4yMiww%0D%0ALjQzbC00LDYuOTNjLTAuMjUsMC40MyAtMC4xNCwwLjk3IDAuMjQsMS4yOGw0LjIyLDMuMzFjLTAu%0D%0AMDgsMC42NCAtMC4xNCwxLjI5IC0wLjE0LDEuOTVzMC4wNiwxLjMxIDAuMTQsMS45NWwtNC4yMiwz%0D%0ALjMxYy0wLjM4LDAuMyAtMC40OSwwLjg0IC0wLjI0LDEuMjhsNCw2LjkzYzAuMjUsMC40MyAwLjc3%0D%0ALDAuNjEgMS4yMiwwLjQzbDQuOTgsLTIuMDFjMS4wMywwLjc5IDIuMTYsMS40NiAzLjM4LDEuOTds%0D%0AMC43NSw1LjNjMC4wOCwwLjQ3IDAuNDksMC44NCAwLjk5LDAuODRsOCwwYzAuNSwwIDAuOTEsLTAu%0D%0AMzcgMC45OSwtMC44NGwwLjc1LC01LjNjMS4yMiwtMC41MSAyLjM1LC0xLjE3IDMuMzgsLTEuOTds%0D%0ANC45OCwyLjAxYzAuNDUsMC4xNyAwLjk3LDAgMS4yMiwtMC40M2w0LC02LjkzYzAuMjUsLTAuNDMg%0D%0AMC4xNCwtMC45NyAtMC4yNCwtMS4yOGwtNC4yMiwtMy4zMXptLTE0Ljg2LDUuMDVjLTMuODcsMCAt%0D%0ANywtMy4xMyAtNywtN3MzLjEzLC03IDcsLTdzNywzLjEzIDcsN3MtMy4xMyw3IC03LDd6Ii8+CiA8%0D%0AL2c+Cjwvc3ZnPg=="/>
            <div class="menu__content">
                <span class="menu__span">SETTINGS</span>
            </div>
        </div>
        <div class="is-active" id="current"></div>
    </div>
</div>

<style lang="scss">
    /* variables */
    $bg: #fbefef;
    $main: #f981a3;
    $white: #FFFFFF;
    
    /**/
    .main{
        display: flex;
        flex-direction: column;
        width: 300px;
        min-width: 300px;
        height: auto;
        padding: 10px;
        
        background: $main;
        border-radius: 30px;
        box-shadow: 0 0 40px 5px rgba( $main, 0.25);
        &.hidden {
            display: none;
        }
        
    }
    .bar{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-shrink: 0;
        width: 100%;
        height: 50px;
        
        padding: 10px 0px;
        margin-bottom: 10px;
        
        &__icon{
            width: 40px;
            height: 40px;
            object-fit: contain;
            padding: 10px;
            
            background: darken($main, 5);
            border-radius: 50%;
        }
    }
    .menu{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        height: 420px;
        position: relative;
        
        &__item{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: relative;
            width: 140px;
            height: 140px;
            
            cursor: pointer;
            background: transparent;
            z-index: 100;
            transition: 150ms;
        }
        &__icon{
            width: 25px;
            height: 25px;
            object-fit: contain;
            margin: 2px;
        }
        &__content{
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            position: relative;
            width: 100%;
            height: 18px;
            overflow: hidden;
        }
        .menu__span {
            color: white;
        }
    }
    /**/
    .is-active{
        position: absolute;
        top: 0;
        left: 0;
        width: 140px;
        height: 140px;
        background: darken($main, 5);
        transition: 200ms;
        border-radius: 20px;
    }
    @keyframes icon {
        0%{ transform: rotateZ(-10deg); }
        100%{ transform: rotateZ(10deg); }
    }
    
</style>