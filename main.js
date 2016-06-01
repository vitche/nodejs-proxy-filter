exports.alive = function (proxies) {
    var results = [];
    for (var i = 0; i < proxies.length; i++) {
        var proxy = proxies[i];
        if (proxy.alive) {
            results.push(proxy);
        }
    }
    return results;
};
