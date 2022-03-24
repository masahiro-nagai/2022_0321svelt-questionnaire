<script>
    import Card from "./Card.svelte";
    import Button from "./Button.svelte";
    import RatingSelect from "./RatingSelect.svelte"

    let text = ''
    let rating = 10
    let btnDisable = true
    let min = 10
    let message 

    const handleSelect = (e) =>rating = e.detail

    const handleInput = () => {
        if(text.trim().length <= min){
        message = `${min}文字以上入力してください`
        btnDisable = true
        }else {
            message = null
            btnDisable = false
        }
    }

</script>
<Card>
    <header>
        <h2>アンケートをお願いします</h2>
    </header>
<form>
    <RatingSelect on:raiting-select={handleSelect}/>
    <div class="input-group">
        <input type="text" on:input ={handleInput} bind:value = {text} placeholder="ご意見はこちらに入力してください">
        <Button disabled={btnDisable} type = "submit">送信</Button>
    </div>
    {#if message}
    <div class="message">
        {message}
    </div>
    {/if}
</form>
</Card>

<style>
    header {
      max-width: 400px;
      margin: auto;
    }
    header h2 {
      font-size: 22px;
      font-weight: 600;
      text-align: center;
    }
    .input-group {
      display: flex;
      flex-direction: row;
      border: 1px solid #ccc;
      padding: 8px 10px;
      border-radius: 8px;
      margin-top: 15px;
    }
    input {
      flex-grow: 2;
      border: none;
      font-size: 16px;
    }
    input:focus {
      outline: none;
    }
    
  </style>