// Create an object that will hold all functionality
var calculator = 
{
    calResult : "",
    calMathOperator : undefined,
    calFirstNumber : "",
    calSecondNumber : "",
    init: function()
    {
        $(".number").on("click", function(){
            var number = $(this).attr("value");
            calculator.addNumber(number);
            console.log(calculator.calFirstNumber);        
            console.log(calculator.calSecondNumber);
        });
        
        $(".operator").on("click", function(){
            var operator = $(this).attr("value");
            calculator.setOperator(operator);
            console.log(calculator.calMathOperator);
        });
        
        $(".equal").on("click", function(){
            calculator.performCalculation();
            console.log(calculator.calResults);
        });

        $(".clear").on("click", function(){
            calculator.clear();
            console.clear();
            //console.log(calculator.calResults);
        });

        $(".bk").on("click", function(){
            calculator.back();
            console.log(calculator.calFirstNumber);        
            console.log(calculator.calSecondNumber);
        });
    },
    addNumber: function(input)
    {
        if(this.calMathOperator === undefined)
        {
            this.calFirstNumber += input;
            $("#first-number").text(this.calFirstNumber);
        }
        else
        {
            this.calSecondNumber +=  input;
            $("#second-number").text(this.calSecondNumber);
        }
    },
    back: function() {
        if(this.calMathOperator === undefined)
        {
            this.calFirstNumber = this.calFirstNumber.substring(0,this.calFirstNumber.length - 1);
            $("#first-number").text(this.calFirstNumber);
        }
        else
        {
            this.calSecondNumber = this.calSecondNumber.substring(0,this.calSecondNumber.length - 1);
            $("#second-number").text(this.calSecondNumber);
        }
    },
    setOperator: function(input)
    {
        if(this.calFirstNumber !== "" & this.calSecondNumber !== "")
        {
            this.performCalculation();
        }
        if(this.calResult !== "")
        {
            this.calFirstNumber = this.calResult;
            $("#first-number").text(this.calFirstNumber);
            this.calSecondNumber =  "";
            $("#second-number").text(this.calSecondNumber);
        }
        this.calMathOperator = input;
        var simbol = "";
        switch (input)
        {
            case "plus":
                simbol = "+";
                break;
            case "minus":
                simbol = "-";
                break;
            case "times":
                simbol = "&times;";
                break;
            case "divide":
                simbol = "&divide;";
                break;
            case "power":
                simbol = "^";
                break;
        }
        $("#operator").html(simbol);
        $("#result").empty();
    },
    performCalculation: function(){
        if(this.calMathOperator === undefined){
            return;
        }
        else if(this.calMathOperator === "plus") {
            this.calResult = parseInt(this.calFirstNumber) + parseInt(this.calSecondNumber);
        }
        else if(this.calMathOperator === "minus") {
            this.calResult = parseInt(this.calFirstNumber) - parseInt(this.calSecondNumber);
        }
        else if(this.calMathOperator === "times") {
            this.calResult = parseInt(this.calFirstNumber) * parseInt(this.calSecondNumber);
        }
        else if(this.calMathOperator === "divide") {
            this.calResult = parseInt(this.calFirstNumber) / parseInt(this.calSecondNumber);
        }
        else if(this.calMathOperator === "power") {
            this.calResult = parseInt(this.calFirstNumber) ^ parseInt(this.calSecondNumber);
        }
        $("#result").html(this.calResult);
    },
    clear: function()
    {
        this.calResult = "";
        this.calMathOperator = undefined;
        this.calFirstNumber = "";
        this.calSecondNumber = "";

        $("#result").empty();
        $("#operator").empty();
        $("#first-number").empty();
        $("#second-number").empty();
    }
}