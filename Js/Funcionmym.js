
/*Mayor, menor y intermedio*/

function Funcionmym(){ 
    var n1 = document.getElementById ('num1').value;
    var n2 = document.getElementById ('num2').value;
    var n3 = document.getElementById ('num3').value;
var m=(n1>n2)? n1 : n2;
var mayor=(m>n3)? m : n3;
var n=(n1<n2)? n1 : n2;
var menor=(n<n3)? n : n3;
var e=(n1<n2)? n2 : n1;
var neutral=(e>n3)? n2 || n1 : e;
alert("el mayor es:"+mayor+"\nel intermedio es:"+neutral+"\nel menor es:"+menor);
if(n1==n2==n3){
	alert("Todos son iguales");
}
}


/* Mayor y menor de 4 numeros */
function yybro(){
    var n1 = document.getElementById ('num1').value;
    var n2 = document.getElementById ('num2').value;
    var n3 = document.getElementById ('num3').value;
    var n4 = document.getElementById ('num4').value;
    if(n1==n2 & n2==n3 & n3==n4){
        alert("Todos son iguales");
    }
    if (n1>n2 & n2>n3 & n3>n4){
       alert("Elmayor es:"+n1+"\nel segundo es:"+n2+"\nel terceo es:"+n3+"\nel ultimo es:"+n4);
    }
    if(n1==n2 & n2==n3 & n3>n4){
        alert("El primero:"+n1+"\nel segundo:"+n2+"\nel tercero:"+n3+"son igual y mayores"+"\nel menor es:"+n4);
    }
	if(n1==n2 & n2==n3 & n3<n4){
        alert("El primero:"+n1+"\nel segundo:"+n2+"\nel tercero:"+n3+"son igual y menores"+"\nel mayor es:"+n4);
    }
	if(n1==n2 & n2>n3 & n3==n4){
        alert("El primero:"+n1+"\ny segundo:"+n2+"\nson iguales/mayores \n\nel tercero:"+n3+"\ny el cuarto:"+n4+"\nson iguales menores");
	}
	if(n1==n2 & n2<n3 & n3==n4){
		alert("El primero:"+n1+"\ny segundo:"+n2+"\nson iguales/menores \n\nel tercero:"+n3+"\ny el cuarto:"+n4+"\nson iguales mayores");
	}
    if(n1>n2 & n2==n3 & n3==n4){
		alert("El primero es el mayor:"+n1+"\nel segundo:"+n2+"\n el tercero:"+n3+"\ny el cuarto:"+n4+"\nson iguales menores");
	}
    if(n1<n2 & n2==n3 & n3==n4){
		alert("El primero es el menor:"+n1+"\nel segundo:"+n2+"\n el tercero:"+n3+"\ny el cuarto:"+n4+"\nson iguales mayores");
	}
    if(n1>n2 & n2>n3 & n3==n4){
		alert("El primero es el mayor:"+n1+"\nel segundo:"+n2+"\n el tercero:"+n3+"\ny el cuarto:"+n4+"\nson iguales menores");
	}
	if(n1==n2 & n2>n3 & n3>n4){
		alert("El primero:"+n1+"\ny segundo:"+n2+"\nson iguales/mayores \n\nel intermedio es:"+n3+"\ny el menor es:"+n4);
	}
    if(n1==n2 & n2<n3 & n3<n4){
		alert("El primero:"+n1+"\ny segundo:"+n2+"\nson iguales/menores \n\nel intermedio es:"+n3+"\ny el mayor es:"+n4);
    }
    if(n1<n2 & n2<n3 & n3==n4){
		alert("El primero es el menor:"+n1+"\nel segundo es intermedio:"+n2+"\n el tercero:"+n3+"\ny el cuarto:"+n4+"\nson iguales mayores");
	}
    if(n1>n4 & n4>n3 & n3==n2){
		alert("El primero es el mayor:"+n1+"\nel segundo:"+n4+"\n el tercero:"+n3+"\ny el segundo:"+n2+"\nson iguales menores");
	}
	if(n1<n2 & n2==n3 & n3<n4){
		alert("El cuarto es el mayor:"+n4+"\nel primero:"+n1+"\nes menor\n\nel cuarto:"+n4+"\ny el tercero:"+n3+"\nson iguales menores");
	}
	if(n1==n4 & n4>n3 & n3>n2){
		alert("El primero:"+n1+"Y el cuarto:"+n4+"\nson iguales mayores \n\nel intermedio es:"+n3+"\nel menor es:"+n2);
	}
    if(n3>n2 & n2>n4 & n4==n1){
		alert("el mayor es:"+n3+"\nel intermedio es:"+n2+"\nel primero:"+n1+"\ny el cuarto:"+n4+"\nson iguales/menores");
	}
	if(n1<n3 & n3<n2 & n2==n4){
		alert("El cuarto:"+n4+"\ny el segundo:"+n2+"son iguales/mayores \n\nel intermedio es:"+n3+"\nel menor es:"+n1);
	}
	if(n1==n3 & n3>n2 & n2==n4){
		alert("El primero:"+n1+"\ny el tercero:"+n3+"\nson mayores/iguales \n\nel segundo:"+n2+"\ny el cuarto:"+n4+"\nson menores/iguales");
	}
	if(n1==n3 & n3<n2 & n2==n4){
		alert("El primero:"+n1+"\ny el tercero:"+n3+"\nson menores/iguales \n\nel segundo:"+n2+"\ny el cuarto:"+n4+"\nson mayores/iguales");
	}
	if(n1==n4 & n4>n2 & n2==n3){
		alert("El primero:"+n1+"\ny el cuarto"+n4+"\nson mayores/iguales \n\nel segundo:"+n2+"y el tercero:"+n3+"\nson menores/iguales");
	}
	if(n1==n4 & n4>n2 & n2==n3){
		alert("El primero:"+n1+"\ny el cuarto"+n4+"\nson menores/iguales \n\nel segundo:"+n2+"y el tercero:"+n3+"\nson mayores/iguales");
	}




}
/*NO ABRIR ES PARA INCLUIR FUNCIONES DE C++ SI HACEN FALTA !!!!!!!!!!!!!!!!!  





if(a==d and d<b and b==c){ // condiciones
			cout <<"\n""el segundo:"<<b<<" y tercero:"<<c<<" son mayores iguales""\n" <<b; //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el primero:"<<a<<" y cuarto:"<<d<<" son menores iguales""\n" <<a;  //cout  muestra en pantalla lo que esta entre las comillas
		}
		if(a==d and d<c and c<b){ // condiciones
			cout <<"el mayor es:""\n" <<b;
			cout <<"\n""el intermedio es:""\n" <<c;  //cout  muestra en pantalla lo que esta entre las comillas
				cout <<"\n""el primero:"<<a<<" y el cuarto:"<<d<<" son menores iguales""\n" <<a;  //cout  muestra en pantalla lo que esta entre las comillas
		}
		if (a==b and b<d and d<c){ // condiciones
			cout <<"el tercero es el mayor ""\n" <<c;  //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el intermedio es:""\n" <<d;  //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el primero:"<<a<<" y segundo:"<<b<<" son menores iguales""\n" <<a;  //cout  muestra en pantalla lo que esta entre las comillas
		}
		if(a==b and b>d and d>c){ // condiciones
			cout <<"el primero:"<<a<<" y el segundo:"<<b<<" son mayores""\n" <<a;  //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el intermedio es:""\n" <<d;  //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el menor es: ""\n" <<c;  //cout  muestra en pantalla lo que esta entre las comillas
		}
		if(a==b and b==d and d<c){ // condiciones
			cout <<"el mayor es:""\n" <<c; //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el primero:"<<a<<" segundo:"<<b<<" y cuarto:"<<d<<" son iguales menores""\n" <<a;  //cout  muestra en pantalla lo que esta entre las comillas
		}
		if(a==b and b==d and d>c){ // condiciones
			cout <<"el primero:"<<a<<" segundo:"<<b<<" y cuarto:"<<d<<" son mayores iguales""\n" <<a;  //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el menor es:""\n" <<c;  //cout  muestra en pantalla lo que esta entre las comillas
		}
		if(a==c and c==d and d<b){ // condiciones
			cout <<"el mayor es:""\n" <<b; //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el primero:"<<a<<" tercero:"<<c<<" y cuarto:"<<d<<" son iguales menores""\n" <<a; //cout  muestra en pantalla lo que esta entre las comillas
		}
		if(a==c and c==d and d>b){ // condiciones
			cout <<"el primero:"<<a<<" tercero:"<<c<<" y cuarto:"<<d<<" son mayores""\n" <<a;  //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el menor es:""\n" <<b;  //cout  muestra en pantalla lo que esta entre las comillas
		}
		if(c>a and a>b and b==d){ // condiciones
			cout <<"el tercero es mayor""\n" <<c;  //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el intermedio es: ""\n" <<a;  //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el segundo:"<<b<<" y tercero:"<<c<<" son iguales""\n" <<b; //cout  muestra en pantalla lo que esta entre las comillas
		}
		if(b==d and d>a and a>c){ // condiciones
			cout <<"el segundo:"<<b<<" y cuarto:"<<d<<" son mayores iguales""\n" <<b; //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el intermedio es:""\n" <<a; //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el menor es:""\n" <<c;  //cout  muestra en pantalla lo que esta entre las comillas
		}
		if(b>a and a==d and d>c){ // condiciones
			cout <<"el mayor ""\n" <<b;  //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el primero:"<<a<<" y el cuarto:"<<d<<" son iguales menores""\n" <<a;  //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el menor es:""\n" <<c;  //cout  muestra en pantalla lo que esta entre las comillas
		}
		if(a>c and c>b and b==d){ // condiciones
			cout <<"el mayor es:""\n" <<a; //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el intermedio es:""\n" <<c; //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el segundo:"<<b<<" y cuarto:"<<d<<" son menores iguales""\n" <<b;  //cout  muestra en pantalla lo que esta entre las comillas
		}
		if(a==d and d>b and b>c){ // condiciones
			cout <<"el primero:"<<a<<" y cuarto:"<<d<<" son mayores""\n" <<a;  //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el intermedio es:""\n" <<b;  //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el menor es:""\n" <<c;	 //cout  muestra en pantalla lo que esta entre las comillas
		}
		if(b>a and a==c and c>d){ // condiciones
		    cout <<"el mayor: ""\n" <<b;  //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el primero:"<<a<<" y el tercero:"<<c<<" son iguales menores""\n" <<a;  //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el menor es:""\n" <<d; //cout  muestra en pantalla lo que esta entre las comillas
		}
		if(a==c and c>d and d>b){ // condiciones
			cout <<"el primero:"<<a<<" y tercero:"<<c<<" son mayores""\n" <<a;  //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el intermedio es:""\n" <<d; //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el menor es:""\n" <<b; //cout  muestra en pantalla lo que esta entre las comillas
		}
		if(a==c and c>b and b>d){ // condiciones
			cout <<"el primero:"<<a<<" y tercero:"<<c<<" son mayores""\n" <<a; //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el intermedio es:""\n" <<b;  //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el menor es:""\n" <<d; //cout  muestra en pantalla lo que esta entre las comillas
		}
		if(d==c and c>a and a>b){ // condiciones
			cout <<"el tercero:"<<c<<" y cuarto:"<<d<<" son mayores""\n" <<c; //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el intermedio es:""\n" <<a;  //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el menor es:""\n" <<b;  //cout  muestra en pantalla lo que esta entre las comillas
		}
		if(d>b and b>a and a==c){ // condiciones
			cout <<"\n""el mayor es:""\n" <<d;  //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el intermedio es:""\n" <<b;  //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el primero:"<<a<<" y tercero:"<<c<<" son menores""\n" <<a;  //cout  muestra en pantalla lo que esta entre las comillas
		}
		if(b>d and d>a and a==c){ // condiciones
			cout <<"\n""el mayor es:""\n" <<b;  //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el intermedio es:""\n" <<d;  //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el primero:"<<a<<" y tercero:"<<c<<" son menores""\n" <<a;  //cout  muestra en pantalla lo que esta entre las comillas
		}
		if(c>a and a==b and b>d){
			cout <<"\n""el mayor es:""\n" <<c;  //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el primero:"<<a<<" y segundo:"<<b<<" son menores iguales""\n" <<a;  //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el menor es:""\n" <<d; //cout  muestra en pantalla lo que esta entre las comillas
		}
		if(d>a and a==b and b>c){
			cout <<"\n""el mayor es:""\n" <<d; //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el primero:"<<a<<" y segundo:"<<b<<" son menores iguales""\n" <<a;//cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el menor es:""\n" <<c; //cout  muestra en pantalla lo que esta entre las comillas
		}
		if(d>a and a==c and c>b){
			cout <<"\n""el mayor es:""\n" <<d; //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el primero:"<<a<<" y tercero:"<<c<<" son menores iguales""\n" <<a; //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el menor es:""\n" <<b; //cout  muestra en pantalla lo que esta entre las comillas
		}
		if(a>b and b>c and c>d){ // condiciones
			cout <<"el primero es mayor ""\n" <<a; //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el segundo es:""\n" <<b; //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el tercero es: ""\n" <<c; //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el menor es:""\n" <<d;  //cout  muestra en pantalla lo que esta entre las comillas
		}
		if(a<b and b<c and c<d){ // condiciones
			cout <<"el primero es mayor ""\n" <<d; //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el segundo es:""\n" <<c; //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el tercero es: ""\n" <<b; //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el menor es:""\n" <<a;  //cout  muestra en pantalla lo que esta entre las comillas
		}
		if(a>b and b>d and d>c){ // condiciones
			cout <<"el mayor es:""\n" <<a; //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el segundo es:""\n" <<b; //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el tercero es:""\n" <<d; //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el menor es:""\n" <<c; //cout  muestra en pantalla lo que esta entre las comillas
		}
		if(a>c and c>d and d>b){ // condiciones
			cout <<"el mayor es:""\n" <<a; //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el segundo es:""\n" <<c; //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el tercero es:""\n" <<d; 
			cout <<"\n""el menor es:""\n" <<b; //cout  muestra en pantalla lo que esta entre las comillas
		}
		if(b>c and c>d and d>a){ // condiciones
			cout <<"el mayor es:""\n" <<b; 
			cout <<"\n""el segundo es:""\n" <<c; 
			cout <<"\n""el tercero es:""\n" <<d; 
			cout <<"\n""el menor es:""\n" <<a;//cout  muestra en pantalla lo que esta entre las comillas
		}
		if(a>d and d>c and c>b){ // condiciones
			cout <<"el mayor es:""\n" <<a; //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el segundo es:""\n" <<d; //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el tercero es:""\n" <<c;//cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el menor es:""\n" <<b;//cout  muestra en pantalla lo que esta entre las comillas
		}
		if(c>a and a>d and d>b){ // condiciones
		    cout <<"el mayor es:""\n" <<c;//cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el segundo es:""\n" <<a; //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el tercero es:""\n" <<d;//cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el menor es:""\n" <<b; //cout  muestra en pantalla lo que esta entre las comillas
		}
		if(c>d and d>a and a>b){ // condiciones
			cout <<"el mayor es:""\n" <<c; //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el segundo es:""\n" <<d; //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el tercero es:""\n" <<a; //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el menor es:""\n" <<b; //cout  muestra en pantalla lo que esta entre las comillas
		}
		if(c>a and a>b and b>d){ // condiciones
			cout <<"el mayor es:""\n" <<c;//cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el segundo es:""\n" <<a; //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el tercero es:""\n" <<b; //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el menor es:""\n" <<d; //cout  muestra en pantalla lo que esta entre las comillas
		}
		if(c>b and b>d and d>a){ // condiciones
			cout <<"el mayor es:""\n" <<c; //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el segundo es:""\n" <<b; //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el tercero es:""\n" <<d;//cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el menor es:""\n" <<a; //cout  muestra en pantalla lo que esta entre las comillas
		}
		if(c>d and d>b and b>a){ // condiciones
			cout <<"el mayor es:""\n" <<c; //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el segundo es:""\n" <<d; //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el tercero es:""\n" <<b; //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el menor es:""\n" <<a; //cout  muestra en pantalla lo que esta entre las comillas
		}
		if(d>a and a>b and b>c){ // condiciones
			cout <<"el mayor es:""\n" <<d;//cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el segundo es:""\n" <<a;//cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el tercero es:""\n" <<b;//cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el menor es:""\n" <<c; //cout  muestra en pantalla lo que esta entre las comillas
		}
	    if(a>c and c>b and b>d){ // condiciones
	        cout <<"el mayor es:""\n" <<a; //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el segundo es:""\n" <<c;//cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el tercero es:""\n" <<b;//cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el menor es:""\n" <<d; //cout  muestra en pantalla lo que esta entre las comillas
		}
		if(d>a and a>c and c>b){ // condiciones
			cout <<"el mayor es:""\n" <<d; //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el segundo es:""\n" <<a; //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el tercero es:""\n" <<c; //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el menor es:""\n" <<b; //cout  muestra en pantalla lo que esta entre las comillas
		}
		if(b>d and d>a and a>c){ // condiciones
			cout <<"el mayor es:""\n" <<b; //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el segundo es:""\n" <<d; //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el tercero es:""\n" <<a;//cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el menor es:""\n" <<c;//cout  muestra en pantalla lo que esta entre las comillas
		}
		if(d>b and b>c and c>a){ // condiciones
			cout <<"el mayor es:""\n" <<d;//cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el segundo es:""\n" <<b; //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el tercero es:""\n" <<c;//cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el menor es:""\n" <<a;//cout  muestra en pantalla lo que esta entre las comillas
		}
		if(b>a and a>d and d>c){
			cout <<"el mayor es:""\n" <<b;//cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el segundo es:""\n" <<a; //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el tercero es:""\n" <<d; //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el menor es:""\n" <<c;//cout  muestra en pantalla lo que esta entre las comillas
		}
		if(d>b and b>c and c<a){ // condiciones
			cout <<"el mayor es:""\n" <<d;//cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el segundo es:""\n" <<b; //cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el tercero es:""\n" <<a;//cout  muestra en pantalla lo que esta entre las comillas
			cout <<"\n""el menor es:""\n" <<c;//cout  muestra en pantalla lo que esta entre las comillas */


/* mayor menor de 2 numeros */			
function mayormenor22(){
	var n1 = document.getElementById ('num1').value;
	var n2 = document.getElementById ('num2').value;

if(n1==n2){
	alert("Los numeros son iguales")
}
if(n1>n2){
    document.getElementById ('mayor').value=n1;
	document.getElementById('menor').value=n2;
}
else{
	document.getElementById ('mayor').value=n2;
	document.getElementById('menor').value=n1;
}
}

/*Convertir metros */
function metros(){

var m1 = document.getElementById ('metros1').value;
kilometros=m1/1000;
decametros=m1/10;
decimales=m1*10;
centimetros=m1*100

document.getElementById ('kilometros').value=kilometros;
document.getElementById ('decametros').value=decametros;
document.getElementById ('decimales').value=decimales;
document.getElementById ('centimetros').value=centimetros;
}

/* Tabla de multiplicar */
function multipli(){
var numm = document.getElementById ('nm1').value;

while(numm <1 | numm>50);
 for(x = 1; x<=10; x++){
	mp=numm*x;
	document.write(numm+"x"+x+"="+mp+"<br>");
 }


}
