/* 
* @Author: tk
* @Date:   2014-06-12 13:51:42
* @Last Modified by:   tk
* @Last Modified time: 2014-06-19 03:29:40
* @Email: aruntknambiar@gmail.com 
*/
Package.describe({
summary: "rangy"
});
Package.on_use(function (api, where) {
api.use(['jquery'], 'client');
api.add_files(['lib/rangy-core.js'], 'client');
api.add_files(['lib/rangy-cssclassapplier.js'], 'client');
api.add_files(['lib/rangy-cssclassapplier.js'], 'client');
api.add_files(['lib/rangy-highlighter.js'], 'client');
api.add_files(['lib/rangy-selectionsaverestore.js'], 'client');
api.add_files(['lib/rangy-serializer.js'], 'client');
api.add_files(['lib/rangy-textrange.js'], 'client');
});
