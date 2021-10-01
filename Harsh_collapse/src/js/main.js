const collapsibleItems = document.querySelectorAll('.collapsible__item')
console.log(collapsibleItems);
collapsibleItems.forEach((item) =>{
    const collapsibleHeader = item.querySelector('.collapsible__header')
    collapsibleHeader.addEventListener('click', () =>{
        const openItem = document.querySelector('.collapsible-open')
        toggleItem(item)
        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
})
const toggleItem = (item) =>{
    const collapsibleContent = item.querySelector('.collapsible__content')
    if(item.classList.contains('collapsible-open')){
        collapsibleContent.removeAttribute('style')
        item.classList.remove('collapsible-open')
    }else{
        collapsibleContent.style.height = collapsibleContent.scrollHeight + 'px'
        item.classList.add('collapsible-open')
    }
}