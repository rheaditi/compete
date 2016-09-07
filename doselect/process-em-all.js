/* 
This task require you to accomplish the following sub-tasks.
Get process id of the current process
Check if module `crypto` is enabled
Spawn a process named `bc`
Get process id of the `bc` process
The solution should return an object which should have the following keys.
process_id_self  {Integer}
crypto_enabled  {Boolean}
process_id_bc  {Integer}

Sample response:
{
    "process_id_self" : 3456,
    "crypto_enabled" : true,
    "process_id_bc": 4563
}
*/

// module.exports = function(){
//   var crypto = null, 
//   isCryptoEnabled = true,
//   child_process = require('child_process'),
//   op = child_process.spawnSync('bc'),
//   exportable = {};

//   try {
//     crypto = require('crypto');
//   } catch (err) {
//     isCryptoEnabled = false;
//   }

//   exportable = {
//     'process_id_self' : parseInt(process.pid),
//       'crypto_enabled' : isCryptoEnabled,
//       'process_id_bc': parseInt(op.pid)
//   };
//   return exportable;
// }

try {
  throw err.message = 'wat';
}
catch(err){
  console.log('yes?')
}