
window.addEventListener('load', function(e){
    
    const searchBar = document.querySelector('.frm-control')
    const thumb = document.querySelectorAll('.thumb-display')

    thumb.forEach(function(t) {
    const tagline = t.querySelector('.tags').textContent;
    t.tags = tagline.replaceAll('#','').split(' ');
    });


    searchBar.addEventListener('input',onSearchItems) 
    function onSearchItems(e){
        const searchTerm =  e.currentTarget.value;
        console.log(searchTerm)
   
        if(searchTerm === ""){
           resetTheDisplay()
        }
        else{
            // search throught the array looking for matches
            searchForMatchingItems(searchTerm)
        }
    }
   
    function searchForMatchingItems(searchTerm){

        for(const t of thumb) {
            for(const tag of t.tags) {
               if (tag.includes(searchTerm)) {
                   t.classList.remove('hidden');
                break;
                }
                else {

                t.classList.add('hidden')
                 }
            } 
        }

    }

    function resetTheDisplay(){
        for(const t of thumb){
            if( t.classList.contains('hidden')){
               t.classList.remove('hidden')
            }
        }
    }
})