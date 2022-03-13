
class Calculator
{
    
    constructor(num1,num2)
    {
        this.num1=num1;
        this.num2=num2;
        this.currentop="";
        this.previousop="";
        this.first="^";
        this.second="^";
        this.oper="";
        this.clear();
        
    }
    clear()
    {
        this.num1=0;
        this.num2=0
        document.getElementById('first').innerText=this.num1;
        document.getElementById('second').innerText=this.num2;
    }
    updateDisplay(num)
    {
        document.getElementById('second').innerText=100000;
    }
    numsbuttons(nums)
    {
        if(this.first==="^")
        {
            this.currentop=this.currentop+nums;
            document.getElementById('first').innerText=this.currentop.toString();
        }
        else{
            this.previousop=this.previousop+nums;
            document.getElementById('second').innerText=this.previousop.toString();
        }
       
    }
    operation(oper)
    {
        this.first=this.currentop+oper;
        this.oper=oper;
        console.log(this.oper)
        document.getElementById('first').innerText=this.first.toString();
    }
    calculate()
    {
        const nm1=parseInt(this.currentop);
        const nm2=parseInt(this.previousop);
        const op=this.oper;
        var ans;
        console.log('&&&&&&&&&')
        console.log(op);
        console.log(nm1);
        console.log(nm2);
        switch(this.oper)
        {
            case '*':
                 ans=nm1 * nm2;
                document.getElementById('first').innerText=""
                document.getElementById('second').innerText=ans;
                console.log(ans);
                break;
            case '+':
                 ans=nm1 + nm2;
                document.getElementById('first').innerText="" 
                document.getElementById('second').innerText=ans;
                console.log(ans);
                break;
            case '-':
                ans=nm1 - nm2;
                document.getElementById('first').innerText=""
                document.getElementById('second').innerText=ans;
                console.log(ans);
                break;
            case '%':
                ans=nm1 / nm2;
                document.getElementById('first').innerText=""
                document.getElementById('second').innerText=ans;
                console.log(ans);
                break;
        }
        this.currentop=""
        this.previousop=""
        this.first="^";
        
    }
}
const cal=new Calculator(0,0);


 const numberbuttons=document.querySelectorAll('[data-num]');
const operationButton=document.querySelectorAll('[data-attributes]');



operationButton.forEach(operations=>{
    operations.addEventListener('click',()=>{
        cal.operation(operations.innerText);
    })
})


numberbuttons.forEach(buttons=>{
    buttons.addEventListener('click',()=>{
       cal.numsbuttons(buttons.innerText);
    })
})


document.getElementById('submit').addEventListener('click',()=>{
    cal.calculate();
})