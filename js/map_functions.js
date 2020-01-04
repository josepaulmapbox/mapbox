function split_values(current_value_string, type){
    var latitude;
    var longitute;

    if(type == "lat"){
        var split_value_string = current_value_string.split(" ");
        var split_value_string_lat = split_value_string[0].split(".")
        // console.log(split_value_string_lat[1]);
        var matches0 = split_value_string_lat[0].match(/(\d+)/); 

        if (matches0) { 
        latitude = matches0[0]; 
        } 
        var matches = split_value_string_lat[1].match(/(\d+)/); 

        if (matches) { 
        latitude = latitude+"."+matches[0]
        } 
        return latitude;
    }
    if(type == "long"){
        var split_value_string = current_value_string.split(" ");
        var split_value_string_lat = split_value_string[1].split(".")
        // console.log(split_value_string_lat[1]);
        var matches0 = split_value_string_lat[0].match(/(\d+)/); 

        if (matches0) { 
        longitude = matches0[0]; 
        } 
        var matches = split_value_string_lat[1].match(/(\d+)/); 

        if (matches) { 
        longitude = longitude+"."+matches[0]
        } 
        return longitude;
    }

}