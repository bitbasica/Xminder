/**
 * @fileOverview
 *
 * 菜单默认选择项目
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
KityMinder.registerUI('menu/default', function(minder) {

    minder.on('uiready', function() {

        var $menu = minder.getUI('menu/menu');
        var $open = minder.getUI('menu/open/open');
        var $save = minder.getUI('menu/save/save');

        setMenuDefaults();
      
        function setMenuDefaults() {

            // 主菜单默认选中「打开」
            $menu.$tabs.select(1);

            // 打开菜单默认选中「本地文件」
            $open.$tabs.select(2);

            // 保存菜单默认选中「导出到本地」
            $save.$tabs.select(1);
        }
        
    });
});
