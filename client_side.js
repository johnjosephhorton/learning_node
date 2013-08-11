function CreateURL(company, reviewer){    
    var base_url = "https://docs.google.com/forms/d/13UMLKRoFVYKU5y-EKfCQ-LE43H4Hbbv7C5uxV65iSGw/viewform?"; 
    var company_param = "entry.738417743=" + company 
    var reviewer_param = "entry.917684579=" + reviewer
    return base_url + company_param + "&" + reviewer_param
}

$(function () {

    $.get('/api/get_companies', function(company_list){
	t = $("<div>")
	t.append("<ul>")
	for(var i=0; i < company_list.length; i++){
	    var survey_url = CreateURL(company_list[i], "john_horton");
	    t.append("<li><a href = '" + survey_url + "'  target=\"_blank\" class = \"" + company_list[i] + "\">" + company_list[i] + "</a></li>\n")
	    $(".oDesk").click(function(){alert("clicked!")}); // not working 
	}
	t.append("</ul>")
	$("body").append(t)
    })
})

