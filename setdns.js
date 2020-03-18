const dns = require('dns');
const {exec} = require('child_process');
const os = require('os');

let argv=process.argv;
let argc=process.argv.length;

if(os.platform()!="darwin") {
  console.log("Sorry, only available for Mac OS X at the moment.");
}
else if(argc!=3) {
  console.log("Syntax: node setdns.js on|off");
}
else {
  if(argv[2]=="on") {
    dns.setServers(['127.0.0.1:5350']);
    dns.resolve4('ix',function(err,addresses) {
      if(err) {
        console.log("Your servers is not accepting connections on port 5350 or you have a firewall.");
      }
      else {
        if (addresses[0]=="45.33.66.56") {
          exec(`route get handshake.org | grep interface`, function(err,stdout,stderr) {
            result = stdout.split(':')[1].trim();
            exec(`networksetup -listnetworkserviceorder |grep `+result, function(err,stdout,stderr) {
              result = stdout.split(',')[0].split(':')[1].trim();
              exec(`osascript -e 'do shell script "./dnson.sh `+result+`" with administrator privileges'`);
            });
          });
        }
      }
    });
  }
  else {
    exec(`route get handshake.org | grep interface`, function(err,stdout,stderr) {
      result = stdout.split(':')[1].trim();
      exec(`networksetup -listnetworkserviceorder |grep `+result, function(err,stdout,stderr) {
        result = stdout.split(',')[0].split(':')[1].trim();
        exec(`osascript -e 'do shell script "./dnsoff.sh `+result+`" with administrator privileges'`);
      });
    }); 
  }
}
