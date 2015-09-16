'use strict';

define([
    '../../vendor/lodash-2.4.1',
    'q',
    '../../Webapp/Repository/Webapp'
], function(_, Q, Webapp) {

    /**
     * @param {Object} r Response from web-discovery 
     * @return {Webapp} A webapp
     */
    var getWebapp = function(r) {
        // Crazy temp cruft
        // this means the web pages and the apis must be server from the same address : (
        // only doing this if sameHost is true in environment.json would be nice....
        var prot = window.location.protocol + '//';
        var url = prot + r.id + "." + window.location.hostname.split(".").slice(1).join(".");
        return new Webapp({
            id          : r.id          || '',
            name        : r.name        || '',
            version     : r.version     || '',
            url         : url           || '',
            title       : r.title       || '',
            description : r.description || '',
            roles       : r.roles       || [],
            icons       : r.icons       || [],
            tags        : r.tags        || []
        });
    };

    /**
     * @param {H2/CallAPI} api
     */
    var Service = function(api) {
        this._api = api;
    };

    /**
     * @return {Promise} An array of webapps
     */
    Service.prototype.webapps = function() {
        return this._api
            .call('com.hailocab.service.web-discovery', 'webapps', {})
            .then(function(r) {
                return (r.webapps || []).map(function(result) {
                    return getWebapp(result);
                });
            });
    };

    /**
     * @param {string} id Webapp id
     * @return {Promise} A webapp, if found
     */
    Service.prototype.webapp = function(id) {
        return this._api
            .call('com.hailocab.service.web-discovery', 'webapps', { 'name' : id })
            .then(function(r) {
                var webapps = _.compact(r.webapps);
                if (webapps && webapps.length > 0) {
                    return getWebapp(webapps[0]);
                }
                return Q.reject("Webapp not found");
            });
    };

    return Service;
});
