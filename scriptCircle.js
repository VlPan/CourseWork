        var button = $(".btn-default");
        var well = $(".well");
        var textarea = $(".textarea");
        var buttonExit = $(".btn-danger");
        var sun = $(".fa-sun-o");
        var buttonClear = $(".btn-info");


class Ugl {
    
    
       

   
    move() {
       
    
    this.i = 0;
    this.val = false;
    this.currentPosition = 1;
    this.randomAnimal = 0; 
        
        i++;
        textarea.append(i+"Турн\n");
        val = true;
        if (currenPosition === 1){
            currenPosition = Math.floor(Math.random() * (3 - 1) + 1);
            textarea.append(" АТОМ УГЛЕРОДА ВХОДИТ В СОСТАВ МОЛЕКУЛЫ УГЛЕКИСЛОГО ГАЗА (СО2), НАХОДЯЩЕГОСЯ В АТМОСФЕРЕ.\n");
            if (currenPosition === 1){
               textarea.append(" Атом углерода не поглощается растением и остается в атмосфере до следующего хода.\n"); 
                
            }
            else {
                textarea.append(" – атом углерода поглощается листьями растения в процессе фотосинтеза.\n");  
                currenPosition = 2;
                val = false;
            }       
       }   
       
           
        


         if (currenPosition === 2 && val === true){
            currenPosition = Math.floor(Math.random() * (3 - 1) + 1);
            textarea.append(" МОЛЕКУЛА СО2 С ВАШИМ УГЛЕРОДНЫМ АТОМОМ НАХОДИТСЯ В ЛИСТЕ РАСТЕНИЯ.\n");
            if (currenPosition === 1){
               textarea.append("  солнечный свет отсутствует и фотосинтез не происходит, поэтому молекула СО2 свашим углеродным атомом возвращается в атмосферу.\n"); 
                
            }
            else {
                textarea.append("  в результате фотосинтеза ваш углеродный атом включается в молекулусахара.\n");  
                currenPosition = 3;
                 val = false;
                
            }
    }  
        
        
        
         if (currenPosition === 3 && val === true){
            currenPosition = Math.floor(Math.random() * (3 - 1) + 1);
            textarea.append(" АТОМ УГЛЕРОДА ВКЛЮЧЕН В МОЛЕКУЛУ САХАРА В РАСТЕНИИ.\n");
            if (currenPosition === 1){
               textarea.append("   молекула сахара с вашим атомом углерода окисляется в процессе клеточного дыхания, обеспечивающего растение энергией для роста. В результатеэтого процесса углеродный атом возвращается в составемолекулы СО2 в атмосферу.\n"); 
                
            }
            else {
                textarea.append(" молекула сахара с вашим углеродным атомом превращается в молекулу, входящую всостав ткани растения.\n");  
                currenPosition = 4;
                 val = false;
                
            }
    } 
        
        
        if (currenPosition === 4 && val === true){
            currenPosition = Math.floor(Math.random() * (3 - 1) + 1);
            textarea.append("АТОМ УГЛЕРОДА ВКЛЮЧЕН В МОЛЕКУЛУ, ВХОДЯЩУЮ В СОСТАВ РАСТИТЕЛЬНОЙ ТКАНИ.\n");
            if (currenPosition === 1){
               textarea.append("растение съедено животным,а именно:"); 
                radnomAnimal = Math.floor(Math.random()*(4-1)+1)
                switch (radnomAnimal){
                    case 1: textarea.append(" травоядным млекопитающим\n");
                        currenPosition = 8;
                        textarea.append("  РАСТЕНИЕ С УГЛЕРОДНЫМ АТОМОМ СЪЕДЕНО ПЕРВИЧНЫМ КОНСУМЕНТОМ.\n");
                         val = false;
                    break;
                    case 2: textarea.append(" птица\n");
                        currenPosition = 8;
                        textarea.append("  РАСТЕНИЕ С УГЛЕРОДНЫМ АТОМОМ СЪЕДЕНО ПЕРВИЧНЫМ КОНСУМЕНТОМ.\n");
                         val = false;
                    break;
                    case 3: textarea.append(" насекомое\n");
                        currenPosition = 8;
                        textarea.append("  РАСТЕНИЕ С УГЛЕРОДНЫМ АТОМОМ СЪЕДЕНО ПЕРВИЧНЫМ КОНСУМЕНТОМ.\n");
                         val = false;
                    break;
                    case 4: textarea.append(" человек (возможно, вы сами)\n");
                        currenPosition = 9;
                        textarea.append("  РАСТЕНИЕ С УГЛЕРОДНЫМ АТОМОМ СЪЕДЕНО ПЕРВИЧНЫМ КОНСУМЕНТОМ.\n");
                         val = false;
                    break;
                }
                
                
            }
            else {
                textarea.append(" часть растения отмирает, в результате образуется мертвое органическое вещество –детрит. \n");  
                currenPosition = 6;
                 val = false;
            }
    }
        
        
        
        if (currenPosition === 6 && val === true){
            currenPosition = Math.floor(Math.random() * (2 - 1) + 1);
            textarea.append("   АТОМ УГЛЕРОДА НАХОДИТСЯ В МОЛЕКУЛЕ ДЕТРИТА.\n");
            if (currenPosition === 1){
               textarea.append(" детрит съеден детритофагом или редуцентом.\n");
                currenPosition = 10;
                 val = false;
                
            }
            else {
                textarea.append(" случился пожар.\n");  
                currenPosition = 1;
                textarea.append(" МОЛЕКУЛА С УГЛЕРОДНЫМ АТОМОМ ОКИСЛЯЕТСЯ(СГОРАЕТ) И АТОМ УГЛЕРОДА ПОПАДАЕТ В АТМОСФЕРУ В СОСТАВЕ МОЛЕКУЛЫ УГЛЕКИСЛОГО ГАЗА.\n");
                
            }
    }
        
        
        if (currenPosition === 8 && val === true){
            currenPosition = Math.floor(Math.random() * (3 - 1) + 1);
            textarea.append("   ТКАНЬ РАСТЕНИЯ С УГЛЕРОДНЫМ АТОМОМ СЪЕЛ ПЕРВИЧНЫЙ КОНСУМЕНТ.\n");
            if (currenPosition === 1){
               textarea.append(" : молекула с углеродным атомом в результате метаболизма вошла в состав соединения, образующего ткань тела консумента.\n");
                currenPosition = 12;
                 val = false;
                
            }
             if (currenPosition === 2){
               textarea.append("  клеточное дыхание! \n");
                currenPosition = 15;
                  val = false;
                
            }
            else {
                textarea.append("  молекула с углеродным атомом не переварена, пройдя через желудочнокишечный тракт, онавернулась в окружающую среду\n");  
                currenPosition = 6;
                
            }
    }
        
        
        if (currenPosition === 9 && val === true){
            currenPosition = Math.floor(Math.random() * (3 - 1) + 1);
            textarea.append("ТКАНЬ РАСТЕНИЯ С УГЛЕРОДНЫМ АТОМОМ СЪЕЛ ЧЕЛОВЕК\n");
            if (currenPosition === 1){
               textarea.append(" :  молекула с углеродным атомом метаболизировалась, и он вошел в состав соединения, образующего ткань человеческого тела.\n");
                currenPosition = 11;
                 val = false;
                
            }
             if (currenPosition === 2){
               textarea.append("  клеточное дыхание! \n");
                currenPosition = 15;
                  val = false;
                
            }
            else {
                textarea.append("  молекула с углеродным атомом не переварена, пройдя через желудочнокишечный тракт, онавернулась в окружающую среду\n");  
                currenPosition = 6;
                
            }
    }
        
        
        
        if (currenPosition === 10 && val === true){
            currenPosition = Math.floor(Math.random() * (4 - 1) + 1);
            textarea.append("МОЛЕКУЛА С УГЛЕРОДНЫМ АТОМОМ СЪЕДЕНА ПЕРВИЧНЫМ ДЕТРИТОФАГОМ ИЛИ РЕДУЦЕНТОМ\n");
            if (currenPosition === 1){
               textarea.append("Молекула была сьедена дождевым червем\n");
                currenPosition = 19;
                 val = false;
                
            }
             if (currenPosition === 2){
               textarea.append("Молекула была сьедена Грибом\n");
                currenPosition = 20;
                  val = false;
                
            }
            if (currenPosition === 3){
               textarea.append("Молекула была сьедена дождевым Бактерией\n");
                currenPosition = 18;
                 val = false;
                
            }
            else {
                textarea.append("Молекула была сьедена Насекомым\n");  
                currenPosition = 21;
                 val = false;
                
            }
    }
        
        
        
        
        if (currenPosition === 11 && val === true){
            currenPosition = Math.floor(Math.random() * (2 - 1) + 1);
            textarea.append(" АТОМ УГЛЕРОДА ВХОДИТ В СОСТАВ СОЕДИНЕНИЯ, ОБРАЗУЮЩЕГО ТКАНЬ ЧЕЛОВЕЧЕСКОГО ТЕЛА.\n");
            if (currenPosition === 1){
               textarea.append("соединение включилось в процесс клеточного дыхания.\n");
                currenPosition = 15;
                 val = false;
                
            }
            else {
                textarea.append("человек умирает и его тело кремируют.\n");  
                currenPosition = 7;
                
            }
    }
        
        
        
        
        
        if (currenPosition === 12 && val === true){
            currenPosition = Math.floor(Math.random() * (3 - 1) + 1);
            textarea.append(" АТОМ УГЛЕРОДА ВХОДИТ В СОСТАВ СОЕДИНЕНИЯ, ОБРАЗУЮЩЕГО ТКАНЬ ПЕРВИЧНОГО КОНСУМЕНТА, ИЛИ ФИТОФАГА.\n");
            if (currenPosition === 1){
               textarea.append("соединение включилось в процесс клеточного дыхания.\n");
                currenPosition = 15;
                 val = false;
                
            }
             if (currenPosition === 2){
               textarea.append("  первичный консумент съеден вторичным консументом.\n");
                currenPosition = 16;
                  val = false;
                
            }
            else {
                textarea.append("первичный консумент погиб в борьбе или от болезни.\n");  
                currenPosition = 6;
                
            }
    }
       
        
        if (currenPosition === 13 && val === true){
            currenPosition = Math.floor(Math.random() * (3 - 1) + 1);
            textarea.append(" АТОМ УГЛЕРОДА ВХОДИТ В СОСТАВ СОЕДИНЕНИЯ, ОБРАЗУЮЩЕГО ТКАНЬ ВТОРИЧНОГО КОНСУМЕНТА (ПЛОТОЯДНОГО ЖИВОТНОГО).\n");
            if (currenPosition === 1){
               textarea.append("соединение включилось в процесс клеточного дыхания.\n");
                currenPosition = 15;
                 val = false;
                
            }
             if (currenPosition === 2){
               textarea.append("вторичный консумент съеден консументом третьего порядка.\n");
                currenPosition = 17;
                  val = false;
                
            }
            else {
                textarea.append("первичный консумент погиб в борьбе или от болезни.\n");  
                currenPosition = 6;
                
            }
    }
        
        
        if (currenPosition === 14 && val === true){
            currenPosition = Math.floor(Math.random() * (3 - 1) + 1);
            textarea.append(" АТОМ УГЛЕРОДА ВХОДИТ В СОСТАВ СОЕДИНЕНИЯ, ОБРАЗУЮЩЕГО ТКАНЬ КОНСУМЕНТАТРЕТЬЕГО ПОРЯДКА (ПЛОТОЯДНОГО ЖИВОТНОГО).\n");
            if (currenPosition === 1){
               textarea.append("соединение включилось в процесс клеточного дыхания.\n");
                currenPosition = 15;
                 val = false;
                
            }
             if (currenPosition === 2){
               textarea.append(" консумент третьего порядка съеден консументом четвертого порядка.\n");
                currenPosition = 17;
                  val = false;
                
            }
            else {
                textarea.append(" консумент третьего порядкам погиб в борьбе или от болезни.\n");  
                currenPosition = 6;
                
            }
    }
       
        
       if (currenPosition === 15 && val === true){
            currenPosition = 1;
            textarea.append("  МОЛЕКУЛА СОДЕРЖАЩАЯ АТОМ УГЛЕРОДА, РАСЩЕПЛЯЕТСЯ В ПРОЦЕССЕ КЛЕТОЧНОГО ДЫХАНИЯС ВЫСВОБОЖДЕНИЕМ ЭНЕРГИИ, НЕОБХОДИМОЙДЛЯ ЖИЗНЕДЕЯТЕЛЬНОСТИ И ДВИЖЕНИЯ КОНСУМЕНТА. ПРИ ЭТОМ УГЛЕРОДНЫЙ АТОМ ПОПАДАЕТ В АТМОСФЕРУ В СОСТАВЕ ДИОКСИДА УГЛЕРОДА.\n"); 
        
        
}
        
        
        
         if (currenPosition === 16 && val === true){
            currenPosition = Math.floor(Math.random() * (3 - 1) + 1);
            textarea.append("  МОЛЕКУЛА С УГЛЕРОДНЫМ АТОМОМ СЪЕДЕНА ВТОРИЧНЫМ КОНСУМЕНТОМ.\n");
            if (currenPosition === 1){
               textarea.append("молекула с углеродным атомом метаболизирована с образованием соединения, входящего в состав ткани консумента\n");
                currenPosition = 13;
                
            }
             if (currenPosition === 2){
               textarea.append(" клеточное дыхание! \n");
                currenPosition = 15;
                
            }
            else {
                textarea.append(" молекула с углеродным атомом не переварена; пройдя через желудочно кишечный тракт, онавышла в окружающую среду.\n");  
                currenPosition = 6;
                
            }
    }
        
        
        
        
        if (currenPosition === 17 && val === true){
            currenPosition = Math.floor(Math.random() * (3 - 1) + 1);
            textarea.append(" МОЛЕКУЛА С УГЛЕРОДНЫМ АТОМОМ СЪЕДЕНАКОНСУМЕНТОМ ТРЕТЬЕГО ИЛИ ЧЕТВЕРТОГО ПОРЯДКА.\n");
            if (currenPosition === 1){
               textarea.append(" молекула с углеродным атомом метаболизировалась с образованием соединения, входящего всостав ткани тела консумента.\n");
                currenPosition = 14;
                
            }
             if (currenPosition === 2){
               textarea.append(" клеточное дыхание! \n");
                currenPosition = 15;
                
            }
            else {
                textarea.append(" молекула с углеродным атомом не переварена; пройдя через желудочно кишечный тракт, онавышла в окружающую среду.\n");  
                currenPosition = 6;
                
            }
    }
        
        
        
        if (currenPosition === 18 && val === true){
            currenPosition = Math.floor(Math.random() * (2 - 1) + 1);
            textarea.append(" МОЛЕКУЛА С УГЛЕРОДНЫМ АТОМОМ ПОГЛОЩЕНА БАКТЕРИЕЙ.\n");
            if (currenPosition === 1){
               textarea.append(" Молекула включена в состав бактериальной клетки.\n");
                currenPosition = 22;
                 val = false;
            }

            else {
                textarea.append("  молекула расщепляется и метаболизируется в процессе клеточного дыхания.\n");  
                currenPosition = 15;
                
            }
    }
        
        
        
        if (currenPosition === 19 && val === true){
            currenPosition = Math.floor(Math.random() * (3 - 1) + 1);
            textarea.append(" МОЛЕКУЛА С УГЛЕРОДНЫМ АТОМОМ СЪЕДЕНА ДОЖДЕВЫМ ЧЕРВЕМ.\n");
            if (currenPosition === 1){
               textarea.append(" молекула включается в состав тела червя..\n");
                currenPosition = 23;
                 val = false;
                
            }
             if (currenPosition === 2){
               textarea.append("  молекула расщепляется и метаболизируется в процессе клеточного дыхания. \n");
                currenPosition = 15;
                
            }
            else {
                textarea.append(" молекула не переварена, пройдя через желудочно кишечный тракт, она выходит в окружающую среду.\n");  
                currenPosition = 6;
                
            }
    }
        
        
        
        
         if (currenPosition === 20 && val === true){
            currenPosition = Math.floor(Math.random() * (2 - 1) + 1);
            textarea.append("МОЛЕКУЛА С УГЛЕРОДНЫМ АТОМОМ ПОГЛОЩЕНА ГРИБОМ.\n");
            if (currenPosition === 1){
               textarea.append(" молекула включается в состав гриба.\n");
                currenPosition = 24;
                 val = false;
                
            }

            else {
                textarea.append(" молекула расщепляется и метаболизируется в процессе клеточного дыхания. \n");  
                currenPosition = 15;
                
            }
    }
        
        
        
        
        if (currenPosition === 21 && val === true){
            currenPosition = Math.floor(Math.random() * (3 - 1) + 1);
            textarea.append("  МОЛЕКУЛА С УГЛЕРОДНЫМ АТОМОМ СЪЕДЕНА ЛИЧИНКОЙ НАСЕКОМОГО.\n");
            if (currenPosition === 1){
               textarea.append("  молекула включается в состав тела насекомого\n");
                currenPosition = 25;
                 val = false;
                
            }
             if (currenPosition === 2){
               textarea.append("  молекула расщепляется и метаболизируется в процессе клеточного дыхания. \n");
                currenPosition = 15;
                
            }
            else {
                textarea.append(" молекула не переварена, пройдя через желудочно кишечный тракт, она выходит в окружающую среду.\n");  
                currenPosition = 6;
                
            }
    }
        
        
        if (currenPosition === 22 && val === true){
            currenPosition = Math.floor(Math.random() * (3 - 1) + 1);
            textarea.append(" АТОМ УГЛЕРОДА ВХОДИТ В СОСТАВ БАКТЕРИАЛЬНОЙ КЛЕТКИ.\n");
            if (currenPosition === 1){
               textarea.append("бактерия съедена земляным червем. \n");
                currenPosition = 19;
                
            }
             if (currenPosition === 2){
               textarea.append("  молекула расщепляется и метаболизируется в процессе клеточного дыхания. \n");
                currenPosition = 15;
                
            }
            else {
                textarea.append(" бактерия погибла.\n");  
                currenPosition = 6;
                
            }
    }
        
        
        
        
        if (currenPosition === 23 && val === true){
            currenPosition = Math.floor(Math.random() * (3 - 1) + 1);
            textarea.append("АТОМ УГЛЕРОДА ВХОДИТ В СОСТАВ ТЕЛА ЗЕМЛЯНОГО ЧЕРВЯ.\n");
            if (currenPosition === 1){
               textarea.append("земляного червя съела птица. \n");
                currenPosition = 8;
                
            }
             if (currenPosition === 2){
               textarea.append("  молекула расщепляется и метаболизируется в процессе клеточного дыхания. \n");
                currenPosition = 15;
                
            }
            else {
                textarea.append("земляной червь погиб от ранения или болезни.\n");  
                currenPosition = 6;
                
            }
    }
        
        
        
        if (currenPosition === 24 && val === true){
            currenPosition = Math.floor(Math.random() * (3 - 1) + 1);
            textarea.append(" УГЛЕРОДНЫЙ АТОМ ВХОДИТ В СОСТАВ ГРИБА.\n");
            if (currenPosition === 1){
               textarea.append("гриб съеден насекомым. Переход на позицию\n");
                currenPosition = 18;
                
            }
             if (currenPosition === 2){
               textarea.append("  молекула расщепляется и метаболизируется в процессе клеточного дыхания. \n");
                currenPosition = 15;
                
            }
            else {
                textarea.append("Гриб отмер\n");  
                currenPosition = 6;
                
            }
    }
        
        
        if (currenPosition === 25 && val === true){
            currenPosition = Math.floor(Math.random() * (3 - 1) + 1);
            textarea.append(" АТОМ УГЛЕРОДА ВХОДИТ В СОСТАВ ТЕЛА НАСЕКОМОГ.\n");
            if (currenPosition === 1){
               textarea.append("насекомое съедено мелким млекопитающим.\n");
                currenPosition = 4;
                
            }
             if (currenPosition === 2){
               textarea.append("  молекула расщепляется и метаболизируется в процессе клеточного дыхания. \n");
                currenPosition = 15;
                
            }
            else {
                textarea.append("Гриб отмер\n");  
                currenPosition = 6;
                
            }
    }
        
 }
};


class UglChild extends Ugl{
    
    
}

let uglerod = new UglChild();

function uglInherit(){
    
}

uglInherit.prototype = uglerod;

var currenPosition = 1;
var radnomAnimal = 0;     
var val = false;
var i = 0;

button.on("click",function(){
    button.text("Следующий Турн!");
    buttonExit.css("display","inline");
    button.css("color","darkred");
    
    sun.css({
    "font-size": "70px",
    "boxShadow": "0 0 10px #f1c40f",
    "color": "#f1c40f",
    "padding": "5px"
    });
    uglerod.move();
      
});

buttonExit.on("click",function(){
    button.text("Моделирование Завершено!");
    button.prop('disabled', true);
    buttonClear.css("display","inline");
     sun.css({
    "margin-top": "25px",
    "font-size": "60px",
    "color":"coral",
    "boxShadow": "0 0 0px #f1c40f"
         
    });
    $("body").css({
        

        "background": "#4DA0B0",
        "background": "-webkit-linear-gradient(to left, #4DA0B0 , #D39D38)" ,
        "background": "linear-gradient(to left, #4DA0B0 , #D39D38)",
        "font-family": "'Roboto Condensed', sans-serif"       
             
    });
        currenPosition = 1;
        radnomAnimal = 0;
        i = 0;


});

    buttonClear.on("click",function(){
    button.text("Начать Моделирование!");
    buttonClear.css("display","none");
    buttonExit.css("display","none");
    textarea.text(" ");
    button.prop('disabled', false);
    
    $("body").css({
        

        "background": "#FF5F6D",
        "background": "-webkit-linear-gradient(to left, #FF5F6D , #FFC371)" ,
        "background": "linear-gradient(to left, #FF5F6D , #FFC371)",
        "font-family": "'Roboto Condensed', sans-serif"       
    });
    
 
    
});

















