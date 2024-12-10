1. 三元表达式
又叫三元运算符，必须有三个操作数参与的运算
操作符号：? :
表达式：在参与 js 程序时，都必须先计算出表达式结果，才能参与后续程序
由于三元表达式具备了一些选择的效果，所以也是一种条件分支语句

2. 语法
条件表达式 ? true : false;

var num=10;
var result = num>5 ? '是的' : '不是的' ;  //我们知道表达式是有返回值的

3. 作用：根据布尔表达式的结果，如果为真，三元表达式结果就是真值，如果为假，三元表达式结果就是假值
<script>  
    console.log(true ? 1 : 0); // 1
    console.log(false ? 1 : 0); // 0
    // 相当于 if 语句中的
    var a = true;
    if (a){
        console.log(1);
    } else {
        console.log(0);
    } // 1
</script>


4. 虽然 if 语句可以模拟三元表达式，但是三元表达式有自己的优点：
二选一的情况下，三元表达式结构更加简单
三元表达式作为一个表达式参与程序时必须运算出结果才能参与，可以利用这个特点，将二选一结果赋值给一个变量
遇到给一个变量根据条件二选一赋值的情况，可以使用三元表达式
<script>  
    var a = 3;
    var b = a >= 3 ? true : false
    console.log(b); // true
</script>

5. 数字补零
		var time=prompt('请你输入一个数值');
			 var result =  time<10 ? '0'+ time :time;
			alert(result);