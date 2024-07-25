$(document).ready(function () {
    // Function to check if triangle is valid
    $("#checkTriangle").click(function () {
        let side1 = parseInt($("#side1").val());
        let side2 = parseInt($("#side2").val());
        let side3 = parseInt($("#side3").val());
        $("#triangle_cont").hide();
        $("#result").show();
        $("input").val("");

        if (side1 > 0 && side2 > 0 && side3 > 0) {
            if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
                if (side1 === side2 && side2 === side3) {
                    $("#result").text("its an Equilateral triangle");
                } else if (side1 === side2 || side1 === side3 || side2 === side3) {
                    $("#result").text("its an isosceles triangle");
                } else {
                    $("#result").text("its a scalene triangle");
                }
            } else {
                $("#result").text("Not a valid triangle");
            }
        } else {
            $("#result").text("Not a valid triangle");
        }
        
    })
    $("#result").click(function () {
        $("#result").hide();
        $("#triangle_cont").show();
    });
});
