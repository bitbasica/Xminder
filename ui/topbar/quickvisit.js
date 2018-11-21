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
  
    var options = {
      download: true,
      filename: filename
    };
    var notice = minder.getUI('widget/notice');
    minder.exportData(protocol.name, options).then(function (data) {
      notice.info('保存成功');
    }).catch(function (err) {
      notice.error('保存失败');
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
      if (!$doc.checkSaved()) return false;
      $doc.load({
        content: {
          template: 'right',
          version: KityMinder.version,
          data: {
            text: minder.getLang('maintopic')
          }
        },
        saved: true
      });
    }
    
    function quickSave() {
      if (window.sessionStorage.getItem('localXmindFileName')=== minder.getMinderTitle()+ '.xmind'){
        var notice = minder.getUI('widget/notice');
        notice.warn('无法保存本地读取的文件，请将文件手动上传到网盘系统');
      }else {
        minder.getSupportedProtocols().forEach(function (protocol) {   //快速保存
          if (protocol.encode) {
            doExport(protocol);
          }
        });
      }
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
