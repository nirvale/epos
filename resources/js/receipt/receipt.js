$(document).ready(function() {
  console.log('hola mundos');

  var ePosDev = new epson.ePOSDevice();

  function connect() {
    var ipAddress = '192.168.100.100';
    var port = '515';
    ePosDev.connect(ipAddress, port, callback_connect);
  }

  function callback_connect(resultConnect){
    var deviceId = 'local_printer';
    var options = {'crypto' : false, 'buffer' : false};
    if ((resultConnect == 'OK') || (resultConnect == 'SSL_CONNECT_OK')) {
      //Retrieves the Printer object
      ePosDev.createDevice(deviceId, ePosDev.DEVICE_TYPE_PRINTER, options,
      callback_createDevice);
      //mensaje de conexion exitosa
      alert('lo hicimo puto')
    }
    else {
        //Displays error messages
        alert('no me conecté hdlv')
    }
  }
  //
  // var printer = null;
  // function callback_createDevice(deviceObj, errorCode){
  //   if (deviceObj === null) {
  //   //Displays an error message if the system fails to retrieve the Printer object
  //     alert('no me conecté hdlv')
  //   return;
  //   }
  //   printer = deviceObj;
  // }
  // //Registers the print complete event
  // printer.onreceive = function(response){
  //   if (response.success) {
  //     //Displays the successful print message
  //   }
  //   else {
  //     //Displays error messages
  //   }
  // }
  //
  // function createData(){
  //   printer.addTextAlign(printer.ALIGN_CENTER);
  //   printer.addText('Hello World\n');
  // }
  //
  // function send(){
  //   if (ePosDev.isConnected) {
  //   printer.send();
  //   }
  // }
  //
  // //Discards the Printer object
  // ePosDev.deleteDevice(printer, callback_deleteDevice);
  // function callback_deleteDevice(errorCode){
  // //Terminates connection with device
  // ePosDev.disconnect();
  // }
  connect();
  //callback_connect();

});
