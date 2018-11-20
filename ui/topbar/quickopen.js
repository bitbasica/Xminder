/**
 * @fileOverview
 *
 * 快速访问区域
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
KityMinder.registerUI('topbar/quickvisit', function (minder) {
  var $doc = minder.getUI('doc');
  var notice = minder.getUI('widget/notice');
  
  /* extension => protocol */
  var supports = {};
  var accepts = [];
  
  minder.getSupportedProtocols().forEach(function (protocol) {
    if (protocol.decode) {
      supports[protocol.fileExtension] = protocol;
      accepts.push(protocol.fileExtension);
    }
  });
  
  var $open = $('<a class="quick-visit-button"></a>')
  .text(minder.getLang('ui.quickvisit.open'))
  .attr('title', minder.getLang('ui.quickvisit.open'))
  .addClass('open');
  $open.appendTo('#panel');
  
  function read(domfile) {
    if (!domfile) return;
    
    // var info = new fio.file.anlysisPath(domfile.name);
    // console.log(info);
    var protocol = supports['.xmind'];
    
    if (!protocol || !protocol.decode) {
      notice.warn(minder.getLang('ui.unsupportedfile'));
      return Promise.reject();
    }
    
    function loadFile(file, protocol) {
      return new Promise(function (resolve, reject) {
        var reader;
        
        if (protocol.dataType == 'blob') {
          
          resolve(new fio.file.Data(domfile));
          
        } else {
          
          reader = new FileReader();
          reader.onload = function () {
            resolve(new fio.file.Data(this.result));
          };
          reader.onerror = reject;
          reader.readAsText(domfile, 'utf-8');
        }
      });
    }
    
    function loadFileError() {
      var notice = minder.getUI('widget/notice');
      notice.error('err_localfile_read');
    }
    
    function loadDoc(data) {
      var doc = {
        content: data.content,
        protocol: protocol.name,
        title: window.sessionStorage.getItem('xmindName'),
        source: 'netdisk'
      };
      return $doc.load(doc);
    }
    
    $(minder.getRenderTarget()).addClass('loading');
    
    return loadFile(domfile, protocol).then(loadDoc, loadFileError).then(function () {
      
      $(minder.getRenderTarget()).removeClass('loading');
      
    });
  }
  
  $open.click(function () {
    if (!$doc.checkSaved()) return;
    $('<input type="file" />')
    .attr('accept', accepts.join())
    .on('change', function (e) {
      read(this.files[0]);
    }).click();
  });
  // 读取文件流，展示该xmind
  read(window.selfData.openUrl);
  var ret = {
    $open: $open
  };
  return ret;
});
