
// console.log(33); //вивід інформації у консоль розробника
// document.write('hello'); // вивід інформації у браузерне вікно
// let strText='Hello';// type string 'hello' "hello" `hello`
// console.log(strText);
//
// const PI=3
// console.log(PI);
//
// strText='world';
// console.log(strText);

// {
    // let a=1;
    // var b=2;
    // console.log(a);
//     // console.log(b);
// }
// console.log(a);
// console.log(b);

// let str='hello';
// console.log(typeof str);
//
// let num=10;
// console.log(typeof num);
//
// let bool=true;
// console.log(typeof bool)
//
// let str2='false';
// console.log(typeof str);

// let str='Hello';

// let str2='World';
//конкадинація  - в рядку все буде писатися разом
// console.log(str + str2);
// для того аби не було консадинації пишемо:
// let str3='pi';
// console.log(str + ' qqq' +str2 + ' ' + ' ' + str3);
//для того щоби ці всі + ' ' + стільки не ставив пишемо: console.log(`${str} ${str2} ${str3}`);

// console.log(str + ' ' +str2);

// console.log(`${str} brave new ${str2} ${str3}`);

// let num = 10;
// console.log(num);
//
// let num1 = 2;
// console.log(num1);

// console.log(num + num1);
// console.log(num - num1);
// console.log(num * num1);
// console.log(num / num1);
// console.log(num % num1);
// 0.1+0.2.log=0.30000000000000004
// console.log(0.1 + 0.2);  //0.30000000000000004

// let big=BigInt(1234567);
// console.log(big); //1234567n

// let a=true;
// // let b=false;
// // console.log(typeof a);
// // console.log(typeof b);
// //
// // let res =5 > 7; //false , true;
// // console.log(res);
// //
// //
// // console.log(10 === 10);
// // console.log(10 !== 10);
// // console.log(10 !== '10');
// // console.log(10 == '10');
// // console.log(10 === '10');

// console.log('hello' === 'hello');
// console.log('hell' <'hello');

// console.log(typeof (22 +''));
// // тобто 22 при +'' буде перетворюватися у стрінгу;
//
// console.log(100 + 200 + 'hello');
//
// console.log('hello' + 100 + 200);
//
// console.log(typeof '12');
//
// console.log(typeof +'12');
//
// console.log( +'12djdkjdke');
//
// console.log(parseInt('12kdsjfkl')); //виведе 12, вона відсікає все те що не є числом
//
// console.log(parseFloat('12.45')); // перетворювати в тим намбер parseFloat. parseInt.

// console.log(!!10);
// console.log(!!-10);
// console.log(!!'10');
// console.log(!!10);
// console.log(!!-10);
// console.log(!!'-10');
// console.log(!![]);
// console.log(!!{});
//
// console.log(!!0);
// console.log(!!'');
// console.log(!!NaN);
// console.log(!!null);
// console.log(!!undefined);
// console.log(!!-0);

// let obj={
//     name: 'Vasya',
//     age: 33
// }
// console.log(obj);
//
// let arr=[1,2,3,4,obj];
// console.log(arr);
//
// console.log(typeof obj);
// console.log(typeof arr);

// let undef = undefined;
// console.log(undef);
// console.log(typeof undef)
//
// let nan = NaN;
// console.log(nan);
// console.log(typeof nan);
//
// let nul = null;
// console.log(nul);
// console.log(typeof nul);

// undefined
// let a;
// console.log(a);

// let names='vasya, petya, olga, anna';
      //     0         1        2       3     4    5          6
       //                                                0  1  2
// let names=['vasya', 'petya', 'olga', 'anna', 123, true, [12,[111,222,333], 13,14] ];
// console.log(names);
// console.log(names[0]);
// console.log(names[2]);
// let innerArrayOFNambers=names[6];
// console.log(innerArrayOFNambers[1]);
// console.log(names[6] [2])
// console.log(typeof 111);
// console.log(typeof true);
// console.log(typeof 'anna');
//
// console.log(names[1],names[2]);

// names[2]='TOLYA';
// console.log(names);
// names[7]='foo ';
// console.log(names)
// names[8]='afdsgdfg ';
// names[9]='fsjfjds';
// names[10]='sdfhtr ';

// names[names.length]= 'foo'; // щоб бути динамічнішим пишемо це names.length
// names[names.length]= 'bar';
// names[names.length]= 'foobar';
// console.log(names);

// console.log(typeof 111);
// console.log(typeof names);
// console.log(Array.isArray(names));  //true, false  ця команда скаже точно чи обєкт чи ні

// let user1Name='kokos';
// let user1age=23;//
// let user1status=true;// але це можна написати динамічніше
// let user={
//     username:'kokos',
//     age:23,
//     status:true,
//     skills:['java','js','html'],
//     wife:{
//         username: 'anna',
//         age: 21
//     }
// };
// console.log(user);
// console.log(user.wife.username);
// console.log(user.username);
// console.log(user['wife']["username"]);

// console.log(user.username);
// console.log(user.age);
// console.log(user.status);
// console.log(user.skills[2]); //це перший спосіб як можна звертатися до ключів;

// console.log(user['username']);
// console.log(user['age']);
// console.log(user['status']);
// console.log(user['skills'][2]);

// let skills = [
//     {title:'java',exp:3},
//     {title:'js',exp: 4},
//     {title:'html',exp: 12}
// ];
// console.log(skills);
// let user={
//     username:'kokos',
//     age:23,
//     status:true,
//     skills:[
//         {title:'java',exp:3},
//         {title:'js',exp: 4},
//         {title:'html',exp: 12}
//     ],
//     wife:{
//         username: 'anna',
//         age: 21
//     }
// };
// console.log(user.skills[2].exp); //хочемо вивести exp:12;
// // user.nickname='kamikadze';//
// user['nickname']='kamikadze';// два способи додати характеристику;
//
// console.log(user);
//
// user.car={
//     manufactirer:'porcshe',
//     year: 2014,
//     generation:2,
//     power:300,
//
// };
// console.log(user);

// const s =prompt('dkjfkdl'); // як витягти дані з модельного вікна
// console.log()

// let x=0;
// let y=x;
// y=y+1;
// console.log(x,y);
// let obj={
//     foo:0
// }
// let obj2=obj;
// obj2.foo=100500;
// console.log(obj2);
// console.log(obj);
// console.log(obj===obj2);

// const obj ={
//     name:'vasya'
// }
// obj.age=123;
// const obj2=obj;
// console.log(obj2);
// if (true){ // покаже іфку.
//     console.log('++++');
// }else{
//     console.log('----');
// }
// if (false){ //покаже елсз
//     console.log('++++');
// }else{
//     console.log('----');
// }
//
// let color='red'; //будуть ++++, якщо у летці буде щось інше то будуть ----
// if (color==='black'){
//     console.log('++++');
// }else{
//     console.log('----');
// }

//це застосовуюють у сайтах де потрібно підтвердити чи є тобі 18+
// const answer=confirm('are you older than 18?');
// console.log(answer);
// if (answer){
//     document.write('<h1> hello and watch your hot movies</h1>')
// }else {
//     document.write('<h1> hello and watch your cartoons </h1>')
// }

//для світлофора
// let color='green'
// let isroadClean=true;
// if (color==='green' || isroadClean) {
//     console.log('go')
// }else if (color==='yellow'){
//     console.log('wait')
// }else if (color==='red'){
//     console.log('stop')
// }else {
//     console.log('????')
// }
// if (color==='green' || isroadClean) {
//     console.log('go')
// } if (color==='yellow'){
//     console.log('wait')
// } if (color==='red'){
//     console.log('stop')
// } {
//     console.log('????')
// }
// true&&false->false;
// true&&true->true;
// false&&true->false;
// false&&false->false

// true||false->true;
// true||true->true;
// false||true->true;
// false||false->false

// switch ('foo'){
//     case 'foo':
//         console.log('dsfksjlkf');
//         break;
//     case 'bar':
//         console.log(sdkfjsklf);
//         break;
//     default:
//         console.log('as;kjfsak');
// }