(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.DownloadCsv = factory()
}(this, function() {
    function DownloadCsv(headers, content, fileName) {
        var data = [];

        data.push(headers);
        Array.prototype.push.apply(data, content);

        var csvContent = "";
        var tmpColDelim = String.fromCharCode(11);
        var tmpRowDelim = String.fromCharCode(0);
        var colDelim = '","';
        var rowDelim = '"\r\n"';

        var csvTmpStr = data.map(function(item, index) {
            var subItem = item.map(function(_item) {
                return typeof(_item) === 'string' ? _item.replace(/"/g, '""') : (_item + '');
            }).join(tmpColDelim);

            return subItem;
        }).join(tmpRowDelim).split(tmpRowDelim).join(rowDelim).split(tmpColDelim).join(colDelim);

        csvContent = '"' + csvTmpStr + '"';

        var encodedUri = "data:text/csv;charset=utf-8," + encodeURIComponent(csvContent);
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", fileName);
        link.click();
    }

    return DownloadCsv;
})
);