/**
 * @fileOverview
 *
 * 插入和管理图片
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */

KityMinder.registerUI('ribbon/idea/image', function (minder) {
  
  var $attachment = minder.getUI('ribbon/idea/attachment');
  
  var $imageButtonMenu = new FUI.ButtonMenu({
    id: 'image-button-menu',
    text: minder.getLang('ui.image'),
    layout: 'bottom',
    buttons: [{}, {
      label: minder.getLang('ui.image')
    }],
    menu: {
      items: [minder.getLang('ui.removeimage')]
    }
  }).appendTo($attachment);
  
  $imageButtonMenu.bindCommandState(minder, 'image');
  
  var $imageDialog = new FUI.Dialog({
    width: 600,
    height: 600,
    prompt: true,
    className: 'image-dialog',
    caption: minder.getLang('ui.image')
  }).appendTo(document.getElementById('content-wrapper'));
  
  var $dialogBody = $($imageDialog.getBodyElement());
  
  // writed by yangxiaohu 2014-10-20
  var tabs = new FUI.Tabs({
    buttons: ["插入图片"]
  });
  
  $dialogBody.html([
    '<div id="img_buttons"></div>',
    '<div id="img_panels"></div>'
  ].join(''));
  tabs.appendButtonTo(document.getElementById('img_buttons'));
  tabs.appendPanelTo(document.getElementById('img_panels'));
  
  tabs.getPanel(0).getContentElement().innerHTML = [
    '<p><label>导入本地图片：</label><input id="img_searchTxt" type="file" accept="image/png,image/gif,image/jpeg" placeholder="请输入搜索关键词"></p>',
    '<p><label>图片地址：</label><input type="url" class="image-url fui-widget fui-selectable" /></p>',
    '<p><label>提示文本：</label><input type="text" class="image-title fui-widget fui-selectable" /></p>',
    '<img class="image-preview" src="" style="max-height: 200px;" />'].join('');
  
  
  var $G = function (id) {
    return document.getElementById(id);
  };
  
  var $url = $dialogBody.find('.image-url');
  var $title = $dialogBody.find('.image-title');
  var $preview = $dialogBody.find('.image-preview');
  var $errorMsg = $('<span class="validate-error"></span>');
  
  $imageDialog.on('ok', function () {
    minder.execCommand('image', $url.val(), $title.val());
  });
  
  $imageDialog.on('open', function () {
    var image = minder.queryCommandValue('image');
    $url.val(image.url);
    $title.val(image.title);
    $preview.attr('src', image.url || '');
    error(false);
  });
  
  function error(value) {
    if (value) {
      $url.addClass('validate-error');
      $errorMsg.text('图片无法加载');
      // $ok.disable();
    } else {
      $url.removeClass('validate-error');
      $errorMsg.text('');
      // $imageDialog.enable();
    }
    return value;
  }
  
  $url.after($errorMsg);
  
  $url.on('input', function () {
    var url = $url.val();
    if (/^https?\:\/\/(\w+\.)+\w+/.test(url)) {
      $preview.attr('src', url);
      error(false);
      // $imageDialog.disable();
      $preview.addClass('loading');
    } else {
      error(true);
    }
  });
  
  $preview.on('load', function () {
    error(false);
    $preview.removeClass('loading');
  }).on('error', function () {
    if ($preview.attr('src')) error(true);
    $preview.removeClass('loading');
  });
  
  $imageButtonMenu.on('buttonclick', function () {
    $imageDialog.open();
    $url[0].focus();
  });
  
  $imageButtonMenu.on('select', function () {
    minder.execCommand('removeimage');
  });
  
  return $imageButtonMenu;
});
