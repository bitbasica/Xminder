

/**
 * 开发版本的文件导入
 */
(function() {
    /* 可能的文件路径，已按照依赖关系排序 */
    var pathInfo = [

        /* 依赖库 */
        { path: 'lib/jquery-2.1.1.js',                  pack: '*' },
        { path: 'lib/jquery.xml2json.js',               pack: 'edit' },
        { path: 'lib/jquery.transit.min.js',            pack: 'edit' },
        { path: 'lib/jquery.blob.js',                   pack: 'edit' },
        { path: 'lib/zip.js',                           pack: 'edit' },
        { path: 'lib/ZeroClipboard.min.js',             pack: 'edit' },
        { path: 'lib/fui/dev-lib/jhtmls.min.js',        pack: 'edit' },
        { path: 'lib/fui/dist/fui.all.js',              pack: 'edit' },
        { path: 'lib/fio/src/fio.js',                   pack: 'index|edit' },
        { path: 'lib/fio/provider/netdisk/oauth.js',    pack: 'index|edit' },
        { path: 'lib/fio/provider/netdisk/netdisk.js',  pack: 'edit' },
        { path: 'lib/bower/codemirror/lib/codemirror.js',               pack: 'edit' },

        /* Kity 依赖库 */
        { path: 'lib/kity/dist/kity.js',                pack: 'edit' },

        /* 核心代码 */
        { path: 'src/core/kityminder.js',               pack: 'edit' },
        { path: 'src/core/utils.js',                    pack: 'edit' },
        { path: 'src/core/browser.js',                  pack: 'edit' },
        { path: 'src/core/minder.js',                   pack: 'edit' },

        { path: 'src/core/command.js',                  pack: 'edit' },
        { path: 'src/core/node.js',                     pack: 'edit' },

        { path: 'src/core/option.js',                   pack: 'edit' },
        { path: 'src/core/event.js',                    pack: 'edit' },
        { path: 'src/core/status.js',                   pack: 'edit' },
        { path: 'src/core/paper.js',                    pack: 'edit' },
        { path: 'src/core/select.js',                   pack: 'edit' },
        { path: 'src/core/key.js',                      pack: 'edit' },
        { path: 'src/core/contextmenu.js',              pack: 'edit' },
        { path: 'src/core/module.js',                   pack: 'edit' },
        { path: 'src/core/data.js',                     pack: 'edit' },
        { path: 'src/core/readonly.js',                 pack: 'edit' },
        { path: 'src/core/layout.js',                   pack: 'edit' },
        { path: 'src/core/theme.js',                    pack: 'edit' },

        { path: 'src/core/compatibility.js',            pack: 'edit' },
        { path: 'src/core/render.js',                   pack: 'edit' },
        { path: 'src/core/connect.js',                  pack: 'edit' },
        { path: 'src/core/template.js',                 pack: 'edit' },
        { path: 'src/core/lang.js',                     pack: 'edit' },
        { path: 'src/core/defaultoptions.js',           pack: 'edit' },
        { path: 'src/core/preference.js',               pack: 'edit' },
        { path: 'src/core/keymap.js',                   pack: 'edit' },

        /* 布局 */
        { path: 'src/layout/mind.js',                   pack: 'edit' },
        { path: 'src/layout/filetree.js',               pack: 'edit' },
        { path: 'src/layout/btree.js',                  pack: 'edit' },
        { path: 'src/layout/fish-bone-master.js',       pack: 'edit' },
        { path: 'src/layout/fish-bone-slave.js',        pack: 'edit' },
        { path: 'src/layout/tianpan.js',                 pack: 'edit' },

        /* 连线 */
        { path: 'src/connect/bezier.js',                pack: 'edit' },
        { path: 'src/connect/poly.js',                  pack: 'edit' },
        { path: 'src/connect/arc.js',                   pack: 'edit' },
        { path: 'src/connect/under.js',                 pack: 'edit' },
        { path: 'src/connect/l.js',                     pack: 'edit' },
        { path: 'src/connect/fish-bone-master.js',      pack: 'edit' },
        { path: 'src/connect/arc_tp.js',                  pack: 'edit' },

        /* 皮肤 */
        { path: 'src/theme/default.js',                 pack: 'edit' },
        { path: 'src/theme/snow.js',                    pack: 'edit' },
        { path: 'src/theme/fresh.js',                   pack: 'edit' },
        { path: 'src/theme/fish.js',                    pack: 'edit' },
        { path: 'src/theme/wire.js',                    pack: 'edit' },
        { path: 'src/theme/tianpan.js',                 pack: 'edit' },

        /* 模板 */
        { path: 'src/template/default.js',              pack: 'edit' },
        { path: 'src/template/structure.js',            pack: 'edit' },
        { path: 'src/template/filetree.js',             pack: 'edit' },
        { path: 'src/template/right.js',                pack: 'edit' },
        { path: 'src/template/fish-bone.js',            pack: 'edit' },
        { path: 'src/template/tianpan.js',              pack: 'edit' },

        /* 模块 */
        { path: 'src/module/node.js',                   pack: 'edit' },
        { path: 'src/module/text.js',                   pack: 'edit' },
        { path: 'src/module/expand.js',                 pack: 'edit' },
        { path: 'src/module/outline.js',                pack: 'edit' },
        { path: 'src/module/geometry.js',               pack: 'edit' },
        { path: 'src/module/history.js',                pack: 'edit' },
        { path: 'src/module/progress.js',               pack: 'edit' },
        { path: 'src/module/priority.js',               pack: 'edit' },
        { path: 'src/module/image.js',                  pack: 'edit' },
        { path: 'src/module/resource.js',               pack: 'edit' },
        { path: 'src/module/note.js',                   pack: 'edit' },
        { path: 'src/module/view.js',                   pack: 'edit' },
        { path: 'src/module/dragtree.js',               pack: 'edit' },
        { path: 'src/module/keynav.js',                 pack: 'edit' },
        { path: 'src/module/select.js',                 pack: 'edit' },
        { path: 'src/module/history.js',                pack: 'edit' },
        { path: 'src/module/editor.js',                 pack: 'edit' },
        { path: 'src/module/editor.keyboard.js',        pack: 'edit' },
        { path: 'src/module/editor.range.js',           pack: 'edit' },
        { path: 'src/module/editor.receiver.js',        pack: 'edit' },
        { path: 'src/module/editor.selection.js',       pack: 'edit' },
        { path: 'src/module/basestyle.js',              pack: 'edit' },
        { path: 'src/module/font.js',                   pack: 'edit' },
        { path: 'src/module/zoom.js',                   pack: 'edit' },
        { path: 'src/module/hyperlink.js',              pack: 'edit' },
        { path: 'src/module/arrange.js',                pack: 'edit' },
        { path: 'src/module/clipboard.js',              pack: 'edit' },
        { path: 'src/module/style.js',                  pack: 'edit' },

        /* 格式支持 */
        { path: 'src/protocol/xmind.js',                pack: 'edit' },

        /* UI 基础 */
        { path: 'ui/ui.js',                             pack: 'edit' },
        { path: 'ui/eve.js',                            pack: 'edit' },
        { path: 'ui/memory.js',                         pack: 'edit' },
        { path: 'ui/fuix.js',                           pack: 'edit' },
        { path: 'ui/axss.js',                           pack: 'edit' },
        { path: 'ui/fiox.js',                           pack: 'edit' },

        /* UI 组件 */
        { path: 'ui/widget/commandbutton.js',           pack: 'edit' },
        { path: 'ui/widget/commandbuttonset.js',        pack: 'edit' },
        { path: 'ui/widget/commandinputmenu.js',        pack: 'edit' },
        { path: 'ui/widget/commandselectmenu.js',       pack: 'edit' },
        { path: 'ui/widget/notice.js',                  pack: 'edit' },
        { path: 'ui/widget/friendlytimespan.js',        pack: 'edit' },
        { path: 'ui/widget/locallist.js',               pack: 'edit' },
        { path: 'ui/widget/menutab.js',                 pack: 'edit' },

        /* 基本业务 */
        { path: 'ui/doc.js',                            pack: 'edit' },
        { path: 'ui/contextmenu.js',                    pack: 'edit' },

        /* 视野导航 */
        { path: 'ui/nav.js',                            pack: 'edit' },
        
        /* UI Top Bar */
        { path: 'ui/topbar/quickopen.js',               pack: 'edit' },
        { path: 'ui/topbar/quickvisit.js',              pack: 'edit' },
        { path: 'ui/topbar/history.js',                 pack: 'edit' },
        { path: 'ui/topbar/title.js',                   pack: 'edit' },

        /* UI Ribbon */
        { path: 'ui/ribbon/tabs.js',                    pack: 'edit' },

        /* UI Ribbon「思路」面板 */
        { path: 'ui/ribbon/idea/insert.js',             pack: 'edit' },
        { path: 'ui/ribbon/idea/arrange.js',            pack: 'edit' },
        { path: 'ui/ribbon/idea/operation.js',          pack: 'edit' },
        { path: 'ui/ribbon/idea/attachment.js',         pack: 'edit' },
        { path: 'ui/ribbon/idea/link.js',               pack: 'edit' },
        { path: 'ui/ribbon/idea/image.js',              pack: 'edit' },
        { path: 'ui/ribbon/idea/note.js',               pack: 'edit' },
        { path: 'ui/ribbon/idea/priority.js',           pack: 'edit' },
        { path: 'ui/ribbon/idea/progress.js',           pack: 'edit' },
        { path: 'ui/ribbon/idea/resource.js',           pack: 'edit' },

        /* UI Ribbon「展示」面板 */
        { path: 'ui/ribbon/appearence/template.js',     pack: 'edit' },
        { path: 'ui/ribbon/appearence/theme.js',        pack: 'edit' },
        { path: 'ui/ribbon/appearence/layout.js',       pack: 'edit' },
        { path: 'ui/ribbon/appearence/style.js',        pack: 'edit' },
        { path: 'ui/ribbon/appearence/font.js',         pack: 'edit' },
        { path: 'ui/ribbon/appearence/color.js',        pack: 'edit' },

        /* UI Ribbon「视图」面板 */
        { path: 'ui/ribbon/view/fullscreen.js',         pack: 'edit' },
        { path: 'ui/ribbon/view/level.js',              pack: 'edit' },
        { path: 'ui/ribbon/view/select.js',             pack: 'edit' }
    ];

    if (typeof(module) === 'object' && module.exports) {
        module.exports = pathInfo;
    }

    else if (document) {
        /* jshint browser:true */
        var script = document.currentScript || document.actualScript();
        var src = script.src;
        var pack = /pack=([\w-]+)(?:&|$)/.exec(src);
        if (!pack) return;
        pack = pack[1];
        while (pathInfo.length) {
            var info = pathInfo.shift();
            if (info.pack == '*' || info.pack.split('|').indexOf(pack) != -1) {
                window.document.write('<script type="text/javascript" src="' + info.path + '"></script>');
            }
        }
    }
})();
