export default{
setrem()
{
    let window_a=document.documentElement.clientWidth || document.body.clientWidth;
    let ui_a=375;
    document.documentElement.style.fontSize=(window_a/ui_a)*100+'px';
}
}




