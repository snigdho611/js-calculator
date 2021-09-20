console.log('script detected');

const onInputClick = (e) => {
    console.log(e.id);
    document.getElementById('input').value = document.getElementById('input').value+e.id;
}
