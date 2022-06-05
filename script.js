window.onload = load_content();

function load_content() {
    console.log(object_b.extension_1.Voltage[0]);
}

function update_form(id) {
    //console.log(id);
    build_form();

}

function build_form() {
    voltage = document.getElementById("voltage").value;
    sub = document.getElementById("sub").value;
    rtu = document.getElementById("rtu").value;

    extensions_list = "";
    for (extension in object_b) {
        ext = object_b[extension];
        if (voltage == "choose" || ext.Voltage.includes(voltage)) {
            console.log(ext.Substation.includes(sub));
            if (sub == "choose" || ext.Substation.includes(sub)) {
                if (rtu == "choose" || ext.RTU.includes(rtu)) {
                    extensions_list = extensions_list + extension + "<br>"; 
                }
            }
        }  
    }
    document.getElementById("extensions_div").innerHTML = extensions_list;
}
