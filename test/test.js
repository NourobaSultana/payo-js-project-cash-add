document.getElementById('bd-btn').addEventListener('click',
    function(){

    document.getElementById('usa-text').style.display='none';
    document.getElementById('bd-text').style.display='block';
})

document.getElementById('usa-btn').addEventListener('click', 
    function(){
        document.getElementById('bd-text').style.display='none';
        document.getElementById('usa-text').style.display="block";
    }
)