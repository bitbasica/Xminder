/**
 * @fileOverview
 *
 * 导出数据到本地
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
KityMinder.registerUI('menu/save/download', function (minder) {
  var $menu = minder.getUI('menu/menu');
  var $save = minder.getUI('menu/save/save');
  
  /* 导出面板 */
  var $panel = $($save.createSub('download')).addClass('download-panel');
  
  /* 标题 */
  var $title = $('<h2></h2>')
  .text(minder.getLang('ui.menu.downloadheader'))
  .appendTo($panel);
  
  var $list = $('<ul>')
  .addClass('download-list')
  .appendTo($panel);
  
  var supports = [];
  
  minder.getSupportedProtocols().forEach(function (protocol) {
    console.log(protocol);
    if (protocol.encode) {
      supports.push(protocol);
    }
  });
  
  supports.forEach(function (protocol) {
    $('<li>')
    .addClass(protocol.name)
    .text(protocol.fileDescription + ' (' + protocol.fileExtension + ')')
    .data('protocol', protocol)
    .appendTo($list);
  });
  
  $list.delegate('li', 'click', function (e) {
    var protocol = $(e.target).data('protocol');
    if (!$panel.hasClass('loading')) doExport(protocol);
  });
  
  function doExport(protocol) {
    console.log('doExport');
    var filename = minder.getMinderTitle() + protocol.fileExtension;
    console.log('getMinderTitle');
    var mineType = protocol.mineType || 'text/plain';
    
    $panel.addClass('loading');
    
    var options = {
      download: true,
      filename: filename
    };
    
    minder.exportData(protocol.name, options).then(function (data) {
      console.log('exportData',protocol);
    })['catch'](function exportError(e) {
      console.log('exportError');
      var notice = minder.getUI('widget/notice');
      return notice.error('err_download', e);
    }).then(function done(tick) {
      $panel.removeClass('loading');
    });
  }
  
});
