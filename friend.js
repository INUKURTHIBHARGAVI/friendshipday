var arr=["black","green","indigo","grey"];
        var k=0;
        setInterval(()=>{
            setcolor(arr)
        },1000);
        function setcolor(arr)
        {  
            document.body.style.backgroundColor=arr[k];
            k++;
            if(k==arr.length)
            {
                k=0;
            }
        }
var ref=document.getElementById('nam');
var enter=window.prompt("Enter Your Name:");
ref.innerHTML="Hey!"+enter+" Happy Friendship Day     :)";
var no=document.getElementById('mylist');
function copy()
{
if(no.value==1)
{
    document.getElementById('text').innerHTML="True Friend";
}
else if(no.value==2)
{
    document.getElementById('text').innerHTML="Close Friend";
}
else if(no.value==3)
{
    document.getElementById('text').innerHTML="Best Friend";
}
else if(no.value==4)
{
    document.getElementById('text').innerHTML="Friend for Life"
}
}


