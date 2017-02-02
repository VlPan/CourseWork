
var question = $(".fa-question-circle-o");
var textarea = $("#textarea");
var textareaPrompt = $("#textareaPrompt");
var cross = $(".fa-times");
var button = $("button");


var elA = $("#A1");
var elM = $("#M1");
var elF = $("#F1");
var eln = $("#n1");
var elH = $("#H1");
var elV1 = $("#V11");
var eldT = $("#dT1");
var elW0 = $("#W01");
var elD = $("#D1");
var checkPoint = false;
var solution = 0;
var numerator = 0;
var denumerator = 0;
var m = 0;
var n = 0;
var f = 0;
var V = 0


class polution {
 

    check(){
        if(elA.val()=== "" || elM.val()=== "" || elF.val()=== "" || eln.val() === "" || elH.val() === ""|| elV1.val()==="" || eldT.val() === "" || elW0.val() === "" || elD.val()=== ""){
            checkPoint = false;
            console.log(checkPoint);
        }
        else{
            checkPoint = true;
             console.log(checkPoint);
        }
    }
        
    calculate(){
        
        if (checkPoint === false){
            textarea.text(" ВНИМАНИЕ! ВВЕДИТЕ ВСЕ ДАННЫЕ!")
        }
      
        else{
            
            f = (Math.pow(10,3)*Math.pow(Number(elW0.val()),2)*Number(elD.val()))/
                (Math.pow(Number(elH.val()),2)*Number(eldT.val()));
            
            m = 1/(0.67+0.1*Math.pow(f,1/2)+0,34*Math.pow(f,1/3));
            
            V = 0.65 * Math.pow((Number(elV1.val()) * Number(eldT.val())) / Number(elH.val()),1/3);
            
            if (V < 0.3){
                n = 3
            }
            if (V>2){
                n = 1
            }
            if (0.3<V && V<2){
                n = 3 - Math.sqrt((V - 0.3) * (4.36 - V));
            }
            
             numerator = Number(elA.val()) * Number(elM.val())*Number(elF.val())*Number(eln.val()) * n * m;
             denumerator = Math.pow(Number(elH.val()),2)*Math.pow(Number(elV1.val() * Number(eldT.val())),1/3);
             solution = numerator / denumerator;
        }
    }
    
    putData(){
        if (checkPoint === false){
            textarea.text(" ВНИМАНИЕ! ВВЕДИТЕ ВСЕ ДАННЫЕ!")
        }
        else{
        textarea.text("Предельная Концентрация загрязнения для вашего вещества равна "+solution+" ,что бы узнать норму придельной концентрации для вашего вещества, перейдите по ссылку выше 'Госты о предельной концентрации'");
        $("#solution").text(solution);
        }
    }
    
    
    
    
    
    
}



$("#A").on("click",function(){
    textareaPrompt.css("display","block");
    cross.css("display","inline");
    textareaPrompt.text("Коэффициент стратификации атмосферы, который зависит от температурного градиента и определяющий условиявертикального и горизонтального рассеивания выбросов(для центра России принимают значение – 120);")
    
});

$("#D").on("click",function(){
    textareaPrompt.css("display","block");
    cross.css("display","inline");
    textareaPrompt.text("D – диаметр трубы, м")
    
});

$("#M").on("click",function(){
    textareaPrompt.css("display","block");
    cross.css("display","inline");
    textareaPrompt.text("М – масса вещества, выбрасываемого в атмосферу в единицу времени, г/с")
    
});

$("#F").on("click",function(){
    textareaPrompt.css("display","block");
    cross.css("display","inline");
    textareaPrompt.text("F – коэффициент, учитывающий скорость оседания взвешенных частиц выброса в атмосфере (для газов равен 1, для пыли при эффективности очистки газоочистной установки более 90% F = 2,5 и менее 75% F = 3)")
    
});

$("#n").on("click",function(){
    textareaPrompt.css("display","block");
    cross.css("display","inline");
    textareaPrompt.text("безразмерный коэффициент, учитывающий влияние рельефа местности")
    
});

$("#H").on("click",function(){
    textareaPrompt.css("display","block");
    cross.css("display","inline");
    textareaPrompt.text("H – высота трубы, м")
    
});

$("#V1").on("click",function(){
    textareaPrompt.css("display","block");
    cross.css("display","inline");
    textareaPrompt.text("V1 – объем выбрасываемой газовоздушной смеси, м3/с")
    
});

$("#dT").on("click",function(){
    textareaPrompt.css("display","block");
    cross.css("display","inline");
    textareaPrompt.text("Т – разность между температурой выбрасываемой газо воздушной смеси и температурой окружающего атмосферного воздуха, равной средней температуре самого жаркого месяца в 13 часов")
    
});

$("#W0").on("click",function(){
    textareaPrompt.css("display","block");
    cross.css("display","inline");
    textareaPrompt.text("Wo – средняя скорость выхода газов из трубки, м/с")
    
});

cross.on("click",function(){
    textareaPrompt.css("display","none");
    cross.css("display","none");
});


class polutionChild extends polution{
    
}

let polutionObject = new polutionChild();


button.on("click",function(){
          polutionObject.check();
          polutionObject.calculate();
          polutionObject.putData();
            
});










