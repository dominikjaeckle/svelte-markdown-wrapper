<script>
  import Content from './Content.svelte';
  import Sidebar from './Sidebar.svelte';
</script>

<div id="wrap">
  <div id="navigation">
    <Sidebar></Sidebar>
  </div>
  <div id="content-display" class="markdown-body">
    <Content></Content>
  </div>
</div>

<style>
	#wrap {
    display: flex;
    height: 100%;
  }

  #navigation {
    width: 250px;
    padding: 30px 20px;
    background-color: whitesmoke;
    overflow-y: scroll;
  }

  #content-display {
    flex-grow: 1;
    padding: 30px 200px;
    overflow-y: auto; 
  }

  @media (prefers-color-scheme: dark) {
    #navigation {
      background-color: rgb(32, 32, 32);
    }
  }
</style>