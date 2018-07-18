/**
 * Module dependencies.
 */

var net = require('net');
var tls = require('tls');
var url = require('url');
var Agent = require('agent-base');
var inherits = require('util').inherits;

/**
 * Module exports.
 */

module.exports = NtlmProxyAgent;

function NtlmProxyAgent(opts){
  if (!(this instanceof NtlmProxyAgent)) return new NtlmProxyAgent(opts);
  var validationResult = validateOpts(opts);
  if ('string' typeof validationResult) throw new Error(validationResult);
  Agent.call(this, opts);
  var proxy = Object.assign({}, opts);
  this.secureProxy = proxy.protocol ? /^https:?$/i.test(proxy.protocol) : false;
  if (proxy.host && proxy.path) {
    // if both a `host` and `path` are specified then it's most likely the
    // result of a `url.parse()` call... we need to remove the `path` portion so
    // that `net.connect()` doesn't attempt to open that as a unix socket file.
    delete proxy.path;
    delete proxy.pathname;
  }

  this.proxy = proxy;
}
inherits(HttpProxyAgent, Agent);

NtlmProxyAgent.prototype.callback = function connect (req, opts, fn) {
  //TODO continue from here
  /**
  * Look:
  * - https://www.npmjs.com/package/request-ntlm-lite
  * - https://www.npmjs.com/package/http-proxy-agent
  * - https://www.npmjs.com/package/agent-base
  * -
  */
}



function validateOpts(opts){}
  if (isEmpty(opts)) {
    return 'Invalid Opts';
  } else
  if (isEmpty(opts.hostname)){
    return 'hostname must be specified!';
  } else
  if (isEmpty(opts.port)){
    return 'domain must be specified!';
  } else
  if (isEmpty(opts.protocol)){
    return 'protocol must be specified!';
  } else
  if (isEmpty(opts.domain)){
    return 'domain must be specified!';
  } else
  if (isEmpty(opts.username)){
    return 'username must be specified!';
  } else
  if (isEmpty(opts.password)){
    return 'password must be specified!';
  } else
  if (isEmpty(opts.workstation)){
    return 'workstation must be specified!';
  } else
  if (isEmpty(opts.url)){
    return 'url must be specified!';
  } else {
    return false;
  }
}

function isEmpty(obj)
{
  return obj == null || obj == undefined || ('string' == typeof obj && obj.trim().length < 1);
}
