/**
 * @fileOverview
 *
 * 快速访问区域
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
KityMinder.registerUI('topbar/quickvisit', function (minder) {
  
  var rightDocks = [];
  
  function btn(name, dockRight) {
    var $btn = $('<a class="quick-visit-button"></a>')
    .text(minder.getLang('ui.quickvisit.' + name))
    .attr('title', minder.getLang('ui.quickvisit.' + name))
    .addClass(name);
    
    if (dockRight) rightDocks.push($btn);
    else $btn.appendTo('#panel');
    
    return $btn;
  }
  
  var $new = btn('new'),
      $save = btn('save');
  
  var ret = {
    $new: $new,
    $save: $save,
  };

  function doExport(protocol) {
    var filename = minder.getMinderTitle() + protocol.fileExtension;
    var mineType = protocol.mineType || 'text/plain';
    
    var options = {
      download: true,
      filename: filename
    };
    
    minder.exportData(protocol.name, options).then(function (data) {
      console.log(protocol.name);
      console.log(data);
    })['catch'](function exportError(e) {
      console.log('exportError');
      var notice = minder.getUI('widget/notice');
      return notice.error('err_download', e);
    }).then(function done(tick) {
    
    });
  }
  
  minder.on('uiready', function quickVisit() {
    
    while (rightDocks.length) $('#panel #search').after(rightDocks.shift());
    
    function quickNew() {
      var $newDialog = new FUI.Dialog({
        width: 600,
        height: 600,
        prompt: true,
        className: 'image-dialog',
        caption: minder.getLang('ui.image')
      }).appendTo(document.getElementById('content-wrapper'));
      
      var $dialogBody = $($newDialog.getBodyElement());
      var $doc = minder.getUI('doc');
      if (!$doc.checkSaved()) return;
      $doc.load({
        content: {
          template: 'default',
          version: KityMinder.version,
          data: {
            text: minder.getLang('maintopic')
          }
        },
        saved: true
      });
    }
    
    function quickSave() {
      minder.getSupportedProtocols().forEach(function (protocol) {   //快速保存
        if (protocol.encode) {
          doExport(protocol);
        }
      });
    }
    
    
    $new.click(quickNew);
    $save.click(quickSave);
    
    minder.addShortcut('ctrl+alt+n', quickNew);
    minder.addShortcut('ctrl+s', quickSave);
    minder.addShortcut('ctrl+shift+s', function () {
      var $menu = minder.getUI('menu/menu');
      $menu.$tabs.select(2);
      $menu.show();
    });
    
    ret.ready = true;
    ret.quickNew = quickNew;
    ret.quickSave = quickSave;
    
  });
  
  ret.add = btn;
  
  return ret;
});
