	/*numerodecuenta es el valor introducido por el usuario, y para el que se va a comprobar si es válido.
    Retornaremos true o false según corresponda */
    
    var banco = numerodecuenta.substring(0,4);
    var sucursal = numerodecuenta.substring(4,8);
    var dc = numerodecuenta.substring(8,10);
    var cuenta=numerodecuenta.substring(10,20);
    var CCC = banco+sucursal+dc+cuenta;
    var i;
    if (!/^[0-9]{20}$/.test(CCC)){
        return false;
    }
    else
    {
        valores = new Array(1, 2, 4, 8, 5, 10, 9, 7, 3, 6);
        control = 0;
        for (i=0; i<=9; i++)
        control += parseInt(cuenta.charAt(i)) * valores[i];
        control = 11 - (control % 11);
        if (control == 11) control = 0;
        else if (control == 10) control = 1;
        if(control!=parseInt(dc.charAt(1))) {
            return false;
        }
        control=0;
        var zbs="00"+banco+sucursal;
        for (i=0; i<=9; i++)
            control += parseInt(zbs.charAt(i)) * valores[i];
        control = 11 - (control % 11);
        if (control == 11) control = 0;
            else if (control == 10) control = 1;
        if(control!=parseInt(dc.charAt(0))) {
            return false;
        }
        return true;
    }