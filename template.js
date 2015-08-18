/**
 * 构建模版引擎
 */
var template = function(tmplId, data){

    var tmplHtml = $('#'+tmplId).html();

    if(!tmplHtml) return null;

    var reg = new RegExp('\\${[^}]+}', 'gi');

    var arr = tmplHtml.match(reg);

    $.each(arr, function(n){

        var code = this.replace(/\${\s*/g, '').replace(/\s*}/g, '');
        var rest = '';
        try{
          rest = eval(code);
        }catch(e){
          rest = '';
        }

        tmplHtml = tmplHtml.replace(this, rest);

    });
    return tmplHtml;
}