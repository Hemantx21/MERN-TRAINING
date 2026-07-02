  function addFun()
            {
                var t1=document.querySelector("#t1")
                var t2=document.querySelector("#t2")
                var msg=document.querySelector("#msg")
                var num1=parseFloat(t1.value)
                var num2=parseFloat(t2.value)
                var res=num1+num2
                //msg.innerHTML="<b>Result is : <b/>"+res
                msg.innerHTML=`<b>Result is : <b/>${res.toFixed(3)}`

            }
            function subFun()
            {
                var t1=document.querySelector("#t1")
                var t2=document.querySelector("#t2")
                var msg=document.querySelector("#msg")
                var num1=parseFloat(t1.value)
                var num2=parseFloat(t2.value)
                var res=num1-num2
                //msg.innerHTML="<b>Result is : <b/>"+res
                msg.innerHTML=`<b>Result is : <b/>${res.toFixed(3)}`

            }
            function mulFun()
            {
                var t1=document.querySelector("#t1")
                var t2=document.querySelector("#t2")
                var msg=document.querySelector("#msg")
                var num1=parseFloat(t1.value)
                var num2=parseFloat(t2.value)
                var res=num1*num2
                //msg.innerHTML="<b>Result is : <b/>"+res
                msg.innerHTML=`<b>Result is : <b/>${res.toFixed(3)}`

            }
            function divFun()
            {
                var t1=document.querySelector("#t1")
                var t2=document.querySelector("#t2")
                var msg=document.querySelector("#msg")
                var num1=parseFloat(t1.value)
                var num2=parseFloat(t2.value)
                var res=num1/num2
                //msg.innerHTML="<b>Result is : <b/>"+res
                msg.innerHTML=`<b>Result is : <b/>${res.toFixed(3)}`

            }