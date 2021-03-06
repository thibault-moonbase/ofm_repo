System.register(["jimu-core", "jimu-ui", "jimu-layouts/layout-runtime", "jimu-core/react", "jimu-ui/basic/sql-expression-runtime"], (function (e, t) {
        var i = {},
        o = {},
        s = {},
        n = {},
        r = {};
        return {
            setters: [function (e) {
                    i.AppMode = e.AppMode,
                    i.BaseVersionManager = e.BaseVersionManager,
                    i.ClauseLogic = e.ClauseLogic,
                    i.ClauseOperator = e.ClauseOperator,
                    i.DataRecordsSelectionChangeMessage = e.DataRecordsSelectionChangeMessage,
                    i.DataSourceComponent = e.DataSourceComponent,
                    i.DataSourceManager = e.DataSourceManager,
                    i.DataSourceStatus = e.DataSourceStatus,
                    i.DataSourceTypes = e.DataSourceTypes,
                    i.ExpressionResolverComponent = e.ExpressionResolverComponent,
                    i.Immutable = e.Immutable,
                    i.LayoutItemType = e.LayoutItemType,
                    i.LayoutType = e.LayoutType,
                    i.LinkType = e.LinkType,
                    i.MessageManager = e.MessageManager,
                    i.MessageType = e.MessageType,
                    i.QueryScope = e.QueryScope,
                    i.React = e.React,
                    i.ReactRedux = e.ReactRedux,
                    i.ReactResizeDetector = e.ReactResizeDetector,
                    i.RepeatedDataSourceProvider = e.RepeatedDataSourceProvider,
                    i.appActions = e.appActions,
                    i.appConfigUtils = e.appConfigUtils,
                    i.classNames = e.classNames,
                    i.css = e.css,
                    i.dataSourceUtils = e.dataSourceUtils,
                    i.esri = e.esri,
                    i.getAppStore = e.getAppStore,
                    i.jsx = e.jsx,
                    i.lodash = e.lodash,
                    i.polished = e.polished,
                    i.utils = e.utils
                }, function (e) {
                    o.Alert = e.Alert,
                    o.Button = e.Button,
                    o.DataActionDropDown = e.DataActionDropDown,
                    o.Dropdown = e.Dropdown,
                    o.DropdownItem = e.DropdownItem,
                    o.DropdownMenu = e.DropdownMenu,
                    o.DropdownToggle = e.DropdownToggle,
                    o.Icon = e.Icon,
                    o.ListGroupItem = e.ListGroupItem,
                    o.Pagination = e.Pagination,
                    o.Popper = e.Popper,
                    o.TextInput = e.TextInput,
                    o.WidgetPlaceholder = e.WidgetPlaceholder,
                    o._Link = e._Link,
                    o.defaultMessages = e.defaultMessages,
                    o.styleUtils = e.styleUtils
                }, function (e) {
                    s.LayoutEntry = e.LayoutEntry,
                    s.LayoutItemSizeModes = e.LayoutItemSizeModes,
                    s.searchUtils = e.searchUtils
                }, function (e) {
                    n.Fragment = e.Fragment,
                    n.PureComponent = e.PureComponent,
                    n.createElement = e.createElement,
                    n.forwardRef = e.forwardRef
                }, function (e) {
                    r.SqlExpressionRuntime = e.SqlExpressionRuntime,
                    r.updateSQLExpressionByVersion = e.updateSQLExpressionByVersion
                }
            ],
            execute: function () {
                e((() => {
                        var e = {
                            65354: e => {
                                e.exports = '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M2 3a1 1 0 100-2 1 1 0 000 2zm0 1a2 2 0 110-4 2 2 0 010 4zm5-3a1 1 0 000 2h7a1 1 0 000-2H7zm0-1h7a2 2 0 110 4H7a2 2 0 110-4zm0 7a1 1 0 000 2h7a1 1 0 000-2H7zm0-1h7a2 2 0 110 4H7a2 2 0 110-4zm0 7a1 1 0 000 2h7a1 1 0 000-2H7zm0-1h7a2 2 0 110 4H7a2 2 0 110-4zM2 9a1 1 0 100-2 1 1 0 000 2zm0 1a2 2 0 110-4 2 2 0 010 4zm0 5a1 1 0 100-2 1 1 0 000 2zm0 1a2 2 0 110-4 2 2 0 010 4z" fill="#FFF" fill-rule="nonzero"></path></svg>'
                            },
                            81411: e => {
                                e.exports = '<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.5.995c0-.55-.43-.995-.96-.995H2.46a.94.94 0 00-.605.223 1.02 1.02 0 00-.14 1.4L6.5 7.72c.122.156.196.347.212.548l.835 10.815c.007.092.027.183.058.27a.951.951 0 001.237.582l2.112-.82a.99.99 0 00.615-.797l1.325-10.062c.025-.193.105-.374.228-.52l5.141-6.087c.154-.181.238-.414.238-.655zM2.5 1h14.999l-5.141 6.09-.117.153a2.016 2.016 0 00-.34.883l-1.325 10.062-2.035.792-.833-10.788-.02-.169a2.012 2.012 0 00-.402-.92L2.502 1.006 2.5 1z" fill="#000"></path></svg>'
                            },
                            33869: e => {
                                e.exports = '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 7.5a.522.522 0 01-.516.527H2.976L6.473 11.6a.535.535 0 010 .746.508.508 0 01-.73 0L1 7.5l4.743-4.846a.508.508 0 01.73 0 .535.535 0 010 .746L2.976 6.973h11.508c.285 0 .516.236.516.527z" fill="#000"></path></svg>'
                            },
                            59788: e => {
                                e.exports = '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.146 4.653a.485.485 0 01.708 0L8 10.24l5.146-5.587a.485.485 0 01.708 0 .538.538 0 010 .738l-5.5 5.956a.485.485 0 01-.708 0l-5.5-5.956a.538.538 0 010-.738z" fill="#000"></path></svg>'
                            },
                            11407: e => {
                                e.exports = '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.347 2.146a.485.485 0 010 .708L5.76 8l5.587 5.146a.486.486 0 010 .708.538.538 0 01-.738 0l-5.956-5.5a.485.485 0 010-.708l5.956-5.5a.538.538 0 01.738 0z" fill="#000"></path></svg>'
                            },
                            3273: e => {
                                e.exports = '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.653 13.854a.485.485 0 010-.708L10.24 8 4.653 2.854a.485.485 0 010-.708.538.538 0 01.738 0l5.956 5.5a.485.485 0 010 .708l-5.956 5.5a.538.538 0 01-.738 0z" fill="#000"></path></svg>'
                            },
                            96009: e => {
                                e.exports = '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.854 11.347a.486.486 0 01-.708 0L8 5.76l-5.146 5.587a.485.485 0 01-.708 0 .538.538 0 010-.738l5.5-5.956a.485.485 0 01.708 0l5.5 5.956a.538.538 0 010 .738z" fill="#000"></path></svg>'
                            },
                            55339: e => {
                                e.exports = '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.745 8l6.1 6.1a.527.527 0 11-.745.746L8 8.746l-6.1 6.1a.527.527 0 11-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 01.746-.746l6.1 6.1 6.1-6.1a.527.527 0 01.746.746L8.746 8z" fill="#000"></path></svg>'
                            },
                            65283: e => {
                                e.exports = '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.438 1C.196 1 0 1.224 0 1.5s.196.5.438.5h15.124c.242 0 .438-.224.438-.5s-.196-.5-.438-.5H.438zM0 7.5c0-.276.196-.5.438-.5h15.124c.242 0 .438.224.438.5s-.196.5-.438.5H.438C.196 8 0 7.776 0 7.5zM0 13.5c0-.276.196-.5.438-.5h15.124c.242 0 .438.224.438.5s-.196.5-.438.5H.438C.196 14 0 13.776 0 13.5z" fill="#000"></path></svg>'
                            },
                            30224: e => {
                                e.exports = '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-1.27 4.936a6.5 6.5 0 11.707-.707l4.136 4.137a.5.5 0 11-.707.707l-4.137-4.137z" fill="#000"></path></svg>'
                            },
                            87830: e => {
                                e.exports = '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 4.5a.5.5 0 01-.5.5h-8a.5.5 0 010-1h8a.5.5 0 01.5.5zM16 12.5a.5.5 0 01-.5.5h-8a.5.5 0 010-1h8a.5.5 0 01.5.5zM5.146 2.12a.5.5 0 01.055.705l-2.324 2.71a1 1 0 01-1.466.057L.146 4.327a.5.5 0 01.708-.707l1.264 1.265 2.323-2.71a.5.5 0 01.705-.055zM5.146 10.12a.5.5 0 01.055.705l-2.324 2.71a1 1 0 01-1.466.057L.146 12.328a.5.5 0 11.708-.708l1.264 1.265 2.323-2.71a.5.5 0 01.705-.055z" fill="#000"></path></svg>'
                            },
                            41235: e => {
                                e.exports = '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.116 1.5l.969 1.678H1.05v3H0l1.5 2 1.5-2h-.951v-2h1.614l4.618 8H2.049v-2H1.05v3h7.809l1.257 2.178.866-.5L2.982 1l-.866.5zm9.982 8.678h.95v2h-2.611l.576 1h3.036v-3h1.05l-1.501-2-1.5 2zm.951-4v-2H5.817l-.578-1h8.81v3h-1z" fill="#000"></path></svg>'
                            },
                            60397: e => {
                                e.exports = '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.049 6V3h13v3h-1V4h-11v2H3L1.5 7.999 0 6h1.049zm12 4h-.952l1.5-2 1.5 2h-1.049v3H1.05v-3h1v2h11v-2z" fill="#000"></path></svg>'
                            },
                            43036: e => {
                                e.exports = '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.366 7.841l-.732-.682-3.125 3.349-1.635-1.84-.748.664 2.365 2.66 3.875-4.15z" fill="#000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 3V1.167C4.5.469 5.204 0 6 0h4c.796 0 1.5.47 1.5 1.167V3h4a.5.5 0 010 1H14l-.929 11.077a1 1 0 01-.997.923H3.926a1 1 0 01-.997-.923L2 4H.5a.5.5 0 010-1h4zM3.003 4h9.994l-.923 11H3.926L3.003 4zM10.5 1v2h-5V1c0-.04 5-.04 5 0z" fill="#000"></path></svg>'
                            },
                            79964: e => {
                                e.exports = '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 2.125L14.334 14H1.667L8 2.125zm-.882-.47a1 1 0 011.765 0l6.333 11.874A1 1 0 0114.334 15H1.667a1 1 0 01-.882-1.47L7.118 1.653zM8 4.874a.905.905 0 00-.9.995l.35 3.507a.552.552 0 001.1 0L8.9 5.87a.905.905 0 00-.9-.995zm1 7a1 1 0 11-2 0 1 1 0 012 0z" fill="#000"></path></svg>'
                            },
                            48891: e => {
                                "use strict";
                                e.exports = i
                            },
                            51315: e => {
                                "use strict";
                                e.exports = n
                            },
                            74758: e => {
                                "use strict";
                                e.exports = s
                            },
                            30726: e => {
                                "use strict";
                                e.exports = o
                            },
                            15506: e => {
                                "use strict";
                                e.exports = r
                            }
                        },
                        t = {};
                        function a(i) {
                            var o = t[i];
                            if (void 0 !== o)
                                return o.exports;
                            var s = t[i] = {
                                exports: {}
                            };
                            return e[i](s, s.exports, a),
                            s.exports
                        }
                        a.n = e => {
                            var t = e && e.__esModule ? () => e.default : () => e;
                            return a.d(t, {
                                a: t
                            }),
                            t
                        },
                        a.d = (e, t) => {
                            for (var i in t)
                                a.o(t, i) && !a.o(e, i) && Object.defineProperty(e, i, {
                                    enumerable: !0,
                                    get: t[i]
                                })
                        },
                        a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
                        a.r = e => {
                            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                                value: "Module"
                            }),
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            })
                        },
                        a.p = "";
                        var l = {};
                        return a.p = window.jimuConfig.baseUrl,
                        (() => {
                            "use strict";
                            a.r(l),
                            a.d(l, {
                                Widget: () => dt,
                            default:
                                () => ct
                            });
                            var e = a(48891),
                            t = a(30726);
                            const i = 20;
                            var o,
                            s,
                            n,
                            r,
                            d,
                            c,
                            h,
                            u,
                            p,
                            g;
                            !function (e) {
                                e.AUTO = "Auto",
                                e.CUSTOM = "Custom"
                            }
                            (o || (o = {})),
                            function (e) {
                                e.None = "NONE",
                                e.Single = "SINGLE",
                                e.Multiple = "MULTIPLE"
                            }
                            (s || (s = {})),
                            function (e) {
                                e.Scroll = "SCROLL",
                                e.MultiPage = "MULTIPAGE"
                            }
                            (n || (n = {})),
                            function (e) {
                                e.Start = "FLEX-START",
                                e.Center = "CENTER",
                                e.End = "FLEX-END"
                            }
                            (r || (r = {})),
                            function (e) {
                                e.Horizon = "HORIZON",
                                e.Vertical = "VERTICAL"
                            }
                            (d || (d = {})),
                            function (e) {
                                e.Glide = "GLIDE",
                                e.Fade = "FADE",
                                e.Float = "FLOAT"
                            }
                            (c || (c = {})),
                            function (e) {
                                e.Hover0 = "HOVER0",
                                e.Hover1 = "HOVER1",
                                e.Hover2 = "HOVER2",
                                e.Hover3 = "HOVER3"
                            }
                            (h || (h = {})),
                            function (e) {
                                e.Style0 = "STYLE0",
                                e.Style1 = "STYLE1",
                                e.Style2 = "STYLE2",
                                e.Style3 = "STYLE3"
                            }
                            (u || (u = {})),
                            function (e) {
                                e.Style0 = "STYLE0",
                                e.Style1 = "STYLE1",
                                e.Style2 = "STYLE2",
                                e.Style3 = "STYLE3",
                                e.Style4 = "STYLE4",
                                e.Style5 = "STYLE5",
                                e.Style6 = "STYLE6",
                                e.Style7 = "STYLE7"
                            }
                            (p || (p = {})),
                            function (e) {
                                e.Regular = "REGULAR",
                                e.Selected = "SELECTED",
                                e.Hover = "HOVER"
                            }
                            (g || (g = {}));
                            var m = a(74758),
                            f = function (e, t, i, o) {
                                return new(i || (i = Promise))((function (s, n) {
                                        function r(e) {
                                            try {
                                                l(o.next(e))
                                            } catch (e) {
                                                n(e)
                                            }
                                        }
                                        function a(e) {
                                            try {
                                                l(o.throw(e))
                                            } catch (e) {
                                                n(e)
                                            }
                                        }
                                        function l(e) {
                                            var t;
                                            e.done ? s(e.value) : (t = e.value, t instanceof i ? t : new i((function (e) {
                                                        e(t)
                                                    }))).then(r, a)
                                        }
                                        l((o = o.apply(e, t || [])).next())
                                    }))
                            };
                            function v(t, i, o) {
                                const s = i.searchFields.split(","),
                                n = i.searchExact ? e.ClauseOperator.StringOperatorIs : e.ClauseOperator.StringOperatorContains;
                                if (i.searchOpen && i.searchFields) {
                                    const i = s.map((i => e.dataSourceUtils.createSQLClause(i, n, t))),
                                    r = e.dataSourceUtils.createSQLExpression(e.ClauseLogic.Or, i);
                                    return e.dataSourceUtils.getArcGISSQL(r, o)
                                }
                            }
                            function S(e, t) {
                                if (!t)
                                    return e;
                                const i = new RegExp(`(${t})`, "gi");
                                return e.replace(i, "<strong >$1</strong>")
                            }
                            const y = e.utils.memoize((function (t) {
                                        const {
                                            showTopTools: i,
                                            bottomToolH: o,
                                            topRightToolW: s,
                                            hasRecords: r,
                                            currentCardSize: a,
                                            direction: l,
                                            pageStyle: c,
                                            scrollBarOpen: h,
                                            appMode: u,
                                            theme: p,
                                            isHeightAuto: g,
                                            isWidthAuto: m,
                                            listTemplateDefaultCardSize: f
                                        } = t,
                                        v = i ? 42 : 0,
                                        S = l === d.Horizon,
                                        y = l === d.Horizon ? "column" : "row";
                                        return e.css `
    &.list-container {
      /* position: ${g?"absolute":"relative"}; */
      position: relative;
      z-index: 0;
      overflow: hidden;
      .bottom-boundary {
        height: 2px;
        width: 2px;
        position: absolute;
        bottom: 0;
        right: 0;
        opacity: 0;
      }
      ${l===d.Horizon?`\n          margin-left: 0px;\n          height: ${g?"auto":"100%"};\n          width: ${m?"auto":"calc(100% - 0px)"};\n        `:`\n          margin-top: 0px;\n          width: ${m?"auto":"100%"};\n          height: ${g?"auto":"calc(100% - 0px)"};\n        `}


      .editing-mask-list {
        position: absolute;
        top: ${l===d.Vertical&&r?a.height+v:v}px;
        left: ${l===d.Horizon&&r?a.width:0}px;
        bottom: ${e.polished.rem(o)};
        right: 0;
        z-index: 10;
        background-color: ${e.polished.rgba(p.colors.black,.2)};
      }

      .editing-mask-ds-tool {
        position: absolute;
        z-index: 10;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: ${e.polished.rgba(p.colors.black,.2)};
      }

      .editing-mask-bottom-tool {
        position: absolute;
        z-index: 10;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: ${e.polished.rgba(p.colors.black,.2)};
      }

      .empty-con {
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        z-index: 10;
        transform: translateY(-50%);
        padding-top: ${v}px;
        .jimu-icon {
          color: ${p.colors.palette.warning[900]};
        }
        .discribtion {
          margin: ${e.polished.rem(9)} 0 ${e.polished.rem(8)} 0;
          font-size: ${e.polished.rem(14)};
          color: ${p.colors.black}
        }
        .clear-message-action-button {
          width: ${e.polished.rem(65)};
        }
      }

      .datasource-tools {
        position: relative;
        height: ${e.polished.rem(v)};
        padding-bottom: ${e.polished.rem(14)};
        .sort-fields-input {
          width: 200px;
          margin-left: 8px;
          margin-right: 16px;
        }

        .tool-row {
          height: ${28}px;
        }
        .ds-tools-line {
          width: 100%;
          height: 1px;
          margin-top: ${e.polished.rem(6)};
          background-color: ${p.colors.palette.light[500]};
        }
        .ds-tools-line-blue {
          background-color: ${p.colors.palette.info[500]};
        }
        .list-search-div {
          width: calc(100% - ${s}px);
          .list-search {
            margin-bottom: ${e.polished.rem(-4)};
            width: 100%;
          }
        }

      }
      .tools-menu {
        color: ${p.colors.palette.light[800]};
      }
      .tools-menu:hover {
        color: ${p.colors.palette.info[500]};
      }
      .bottom-tools {
        position: relative;
        padding-top: ${e.polished.rem(14)};
        min-height: ${e.polished.rem(40)};
        .scroll-navigator {
          .btn {
            border-radius: ${p.borderRadiuses.circle};
          }
        }
      }

      .widget-list-list:focus {
        outline: none;
      }
      .widget-list-list {
        &>div {
          position: relative;
          flex: 1;
          box-sizing: content-box;
          ${S&&`padding-right: ${e.polished.rem(15)}`};
          ${!S&&`padding-bottom: ${e.polished.rem(15)}`};
        }
        padding: 0;
        position: relative;
        /* box-sizing: border-box; */
        ${window.jimuConfig.isInBuilder&&u!==e.AppMode.Run?"overflow: hidden !important;":`overflow-${S?"y":"x"}: hidden !important;`}
        height: ${g?"auto":`calc(100% - ${v}px - ${o}px)`} !important;
        width: ${m?"auto":"100%"} !important;
        display: flex;
        ${`flex-direction: ${y}`};
        ${g&&`min-height: ${f.height}px;`};
        ${m&&`min-width: ${f.width}px;`};
        ${S?`\n              max-width: ${t.mexSize.maxWidth}px;\n            `:`\n              max-height: calc(${t.mexSize.maxHeight} - ${v}px - ${o}px);\n            `}
      }
      ${c!==n.Scroll||h?"":"\n          .widget-list-list::-webkit-scrollbar {\n            display: none; //Safari and Chrome\n          }\n          .widget-list-list {\n              -ms-overflow-style: none; //IE 10+\n              overflow: -moz-scrollbars-none; //Firefox\n          }\n        "}
      .placeholder-alert-con {
        position: absolute;
        bottom: ${e.polished.rem(8)};
        right: ${e.polished.rem(8)};
        z-index: 11;
      }
    }
  `
                                    }));
                            function w(t, i, o) {
                                var s,
                                n,
                                r,
                                a,
                                l,
                                c,
                                h,
                                u,
                                p,
                                g;
                                const {
                                    config: m,
                                    id: f,
                                    appMode: v,
                                    isHeightAuto: S,
                                    isWidthAuto: y,
                                    theme: w
                                } = t;
                                return e.css `
    ${"&.list-widget-"+f} {
      overflow: visible;
      background-color: transparent;
      border: ${e.polished.rem(0)} solid ${e.polished.rgba(w.colors.black,window.jimuConfig.isInBuilder&&i?.2:0)};
      height: ${S?"auto":"100%"};
      width: ${y?"auto":"100%"};
      .list-with-mask {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        background-color: ${e.polished.rgba(w.colors.black,0)};
        z-index: 1;
      }
      .list-toggle-button {
        background: none;
      }
      .list-loading-con {
        min-height: ${e.polished.rem(120)};
        min-width: ${e.polished.rem(160)};
      }
      .refresh-loading-con {
        right: 0;
        bottom:${o?e.polished.rem(40):0};
        align-items: center;
        height: ${e.polished.rem(24)};
        .auto-refresh-loading {
          background: ${e.polished.rgba(null===(r=null===(n=null===(s=w.colors)||void 0===s?void 0:s.palette)||void 0===n?void 0:n.dark)||void 0===r?void 0:r[100],.2)};
          color: ${null===(a=w.colors)||void 0===a?void 0:a.black};
          font-size: ${e.polished.rem(12)};
          line-height: ${e.polished.rem(24)};
          padding: 0 ${e.polished.rem(7)};
        }
        &.horizon-loading {
          bottom:${o?e.polished.rem(46):e.polished.rem(6)};
        }
        &.vertical-loading {
          right: ${e.polished.rem(6)};
        }
      }
      .loading-con {
        @keyframes loading {
          0% {transform: rotate(0deg); };
          100% {transform: rotate(360deg)};
        }
        width: ${e.polished.rem(16)};
        height: ${e.polished.rem(16)};
        border: 1px solid ${null===(h=null===(c=null===(l=null==w?void 0:w.colors)||void 0===l?void 0:l.palette)||void 0===c?void 0:c.dark)||void 0===h?void 0:h[100]};
        border-radius: 50%;
        border-top: 1px solid ${null===(g=null===(p=null===(u=null==w?void 0:w.colors)||void 0===u?void 0:u.palette)||void 0===p?void 0:p.dark)||void 0===g?void 0:g[800]};
        box-sizing: border-box;
        animation:loading 2s infinite linear;
        margin-right: ${e.polished.rem(4)};
      }
      .widget-list {
        overflow: ${window.jimuConfig.isInBuilder&&v!==e.AppMode.Run?"hidden":"auto"};
        height: ${S?"auto":"100%"};
        width: ${y?"auto":"100%"};
        /* align-items: ${m.alignType};
        justify-content: ${m.alignType}; */
        ${m.direction===d.Horizon?"\n            overflow-y: hidden;\n          ":"\n            overflow-x: hidden;\n          "}
      }
    }

  `
                            }
                            function b(t) {
                                const {
                                    theme: i
                                } = t;
                                return e.css `
    & {
      padding: ${e.polished.rem(6)} ${e.polished.rem(11)};
      height: ${e.polished.rem(40)};
    }
    .ds-tools-line {
      width: 100%;
      height: 1px;
      background-color: ${i.colors.palette.light[500]};
    }
    .ds-tools-line-blue {
      background-color: ${i.colors.palette.info[500]};
    }
    .close-search {
      margin-top: ${e.polished.rem(-6)};
    }
  `
                            }
                            function x(t) {
                                const {
                                    theme: i
                                } = t;
                                return e.css `
    .close-search {
      border: 1px solid ${i.colors.palette.light[500]};
      box-sizing: border-box;
      background-color: ${i.colors.white};
    }
    .search-box-content {
      flex-direction: column;
      align-items: flex-start;
    }
  `
                            }
                            class C extends e.React.Component {
                                constructor() {
                                    super(...arguments),
                                    this.getNewProviderData = () => {
                                        const {
                                            widgetId: e,
                                            datasourceId: t,
                                            index: i,
                                            record: o
                                        } = this.props;
                                        return {
                                            widgetId: e,
                                            dataSourceId: t,
                                            recordIndex: i,
                                            record: o
                                        }
                                    },
                                    this.shouldComponentUpdateExcept = (e, t, i, o = []) => {
                                        let s = !1;
                                        return this.props && Object.keys(this.props).some((t => !i.includes(t) && this.props[t] !== e[t] && (s = !0, !0))),
                                        this.state && Object.keys(this.state).some((e => !o.includes(e) && this.state[e] !== t[e] && (s = !0, !0))),
                                        s
                                    },
                                    this.isProviderEqual = (e, t) => {
                                        let i = !0;
                                        if (e)
                                            Object.keys(e).some((o => t ? e[o] !== t[o] && (i = !1, !0) : (i = !1, !0)));
                                        else if (t)
                                            return !1;
                                        return i
                                    },
                                    this.formatMessage = (e, t) => this.props.formatMessage(e, t),
                                    this.getStyle = t => {
                                        const {
                                            widgetId: i,
                                            selectable: o,
                                            appMode: s,
                                            theme: n
                                        } = this.props,
                                        r = this.checkIsBackgroundTransparent(t);
                                        return e.css `
      ${"&.list-card-"+i} {
        padding: 0;
        border: 0;
        background-color: transparent;
        &:focus {
          outline: ${e.polished.rem(2)} solid ${n.colors.palette.primary[700]};
          outline-offset: ${e.polished.rem(2)};
        }
        .list-card-content {
          width: 100%;
          height: 100%;
        }
      }
      &.surface-1 {
        border: none !important;
        background: ${r&&"none !important"};
      }
      .list-clear-background {
        background: transparent !important;
      }
      .list-link {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
      }
      .list-item-con {
        overflow: hidden;
      }
      ${"&.list-card-"+i}:hover {
        ${window.jimuConfig.isInBuilder&&s!==e.AppMode.Run||!o?"":"cursor: pointer;"}
      }
      .card-editor-mask {
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 100;
      }
      .jimu-link {
        text-align: left;
      }
    `
                                    }
                                }
                                checkIsBackgroundTransparent(e) {
                                    var t,
                                    i,
                                    o;
                                    const {
                                        cardConfigs: s
                                    } = this.props;
                                    return "rgba(0,0,0,0)" === (null === (o = null === (i = null === (t = null == s ? void 0 : s[e]) || void 0 === t ? void 0 : t.backgroundStyle) || void 0 === i ? void 0 : i.background) || void 0 === o ? void 0 : o.color)
                                }
                            }
                            var I = a(60397),
                            M = a.n(I);
                            const R = i => {
                                const {
                                    className: o
                                } = i,
                                s = function (e, t) {
                                    var i = {};
                                    for (var o in e)
                                        Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (i[o] = e[o]);
                                    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                                        var s = 0;
                                        for (o = Object.getOwnPropertySymbols(e); s < o.length; s++)
                                            t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (i[o[s]] = e[o[s]])
                                    }
                                    return i
                                }
                                (i, ["className"]),
                                n = (0, e.classNames)("jimu-icon-component", o);
                                return e.React.createElement(t.Icon, Object.assign({
                                        className: n,
                                        icon: M()
                                    }, s))
                            };
                            var O = a(41235),
                            T = a.n(O);
                            const L = i => {
                                const {
                                    className: o
                                } = i,
                                s = function (e, t) {
                                    var i = {};
                                    for (var o in e)
                                        Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (i[o] = e[o]);
                                    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                                        var s = 0;
                                        for (o = Object.getOwnPropertySymbols(e); s < o.length; s++)
                                            t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (i[o[s]] = e[o[s]])
                                    }
                                    return i
                                }
                                (i, ["className"]),
                                n = (0, e.classNames)("jimu-icon-component", o);
                                return e.React.createElement(t.Icon, Object.assign({
                                        className: n,
                                        icon: T()
                                    }, s))
                            },
                            j = [0, 5],
                            z = [{
                                    name: "flip",
                                    options: {
                                        boundary: document.body,
                                        fallbackPlacements: ["right-start", "left-start", "bottom-start", "top-end", "top-start"]
                                    }
                                }
                            ],
                            D = [{
                                    name: "offset",
                                    options: {
                                        offset: [0, 10]
                                    }
                                }, {
                                    name: "arrow",
                                    enabled: !0
                                }
                            ],
                            k = e.ReactRedux.connect(((t, i) => {
                                        var o;
                                        const {
                                            selectionIsList: s,
                                            builderSupportModules: n,
                                            appMode: r,
                                            widgetId: a,
                                            browserSizeMode: l
                                        } = i;
                                        if (!window.jimuConfig.isInBuilder || r === e.AppMode.Run)
                                            return {
                                                selection: void 0,
                                                showBreak: !1
                                            };
                                        const d = null === (o = null == n ? void 0 : n.widgetModules) || void 0 === o ? void 0 : o.searchUtils,
                                        c = n.jimuForBuilderLib.getAppConfigAction().appConfig,
                                        h = 0 === i.index && i.selectionIsInList && t && t.appRuntimeInfo && t.appRuntimeInfo.selection;
                                        return {
                                            selection: h,
                                            showBreak: !s && h && d && d.getRelatedLayoutItemsInWidgetByLayoutInfo(c, h, a, l).length > 1
                                        }
                                    }))(class extends C {
                                    constructor(t) {
                                        super(t),
                                        this.lastResizeCall = null,
                                        this.handleItemClick = e => {
                                            const {
                                                selectCard: t
                                            } = this.props;
                                            e && e.stopPropagation(),
                                            t()
                                        },
                                        this.handleCopyTo = (t, i, o, s) => {
                                            if (!o)
                                                return;
                                            const {
                                                layouts: n,
                                                builderSupportModules: r,
                                                browserSizeMode: a,
                                                builderStatus: l
                                            } = this.props,
                                            d = r.jimuForBuilderLib.getAppConfigAction(),
                                            c = d.appConfig,
                                            h = m.searchUtils.findLayoutId(n[l], a, c.mainSizeMode),
                                            u = m.searchUtils.findLayoutId(n[i], a, c.mainSizeMode);
                                            if (s) {
                                                const t = r.widgetModules.searchUtils.getContainerLayoutItem(c.layouts[u], o.widgetId, e.LayoutItemType.Widget);
                                                t && d.removeLayoutItem({
                                                    layoutId: u,
                                                    layoutItemId: t.id
                                                }, !1)
                                            }
                                            d.duplicateLayoutItem(h, u, o.id, !1, s),
                                            d.exec(),
                                            t.stopPropagation(),
                                            t.nativeEvent.stopImmediatePropagation()
                                        },
                                        this.editStatus = (t, i) => {
                                            const {
                                                dispatch: o,
                                                widgetId: s
                                            } = this.props;
                                            o(e.appActions.widgetStatePropChange(s, t, i))
                                        },
                                        this.handleBreakLink = t => {
                                            const {
                                                layouts: i,
                                                builderSupportModules: o,
                                                browserSizeMode: s,
                                                selection: n,
                                                builderStatus: r,
                                                dispatch: a
                                            } = this.props,
                                            l = o.jimuForBuilderLib.getAppConfigAction(),
                                            d = l.appConfig,
                                            c = m.searchUtils.findLayoutItem(d, n);
                                            if (!c)
                                                return;
                                            const h = m.searchUtils.findLayoutId(i[r], s, d.mainSizeMode);
                                            l.duplicateLayoutItem(h, h, c.id, !0),
                                            l.removeLayoutItem({
                                                layoutId: h,
                                                layoutItemId: c.id
                                            }, !1),
                                            l.exec(),
                                            n.layoutId === h && n.layoutItemId === c.id && a(e.appActions.selectionChanged(null));
                                            const u = l.appConfig.layouts[h].content,
                                            p = Object.keys(u)[Object.keys(u).length - 1];
                                            if (p) {
                                                const t = u[p];
                                                a(e.appActions.selectionChanged({
                                                        layoutId: h,
                                                        layoutItemId: t.id
                                                    }))
                                            }
                                            t.stopPropagation(),
                                            t.nativeEvent.stopImmediatePropagation()
                                        },
                                        this.getCopyDropdownItems = t => {
                                            var i,
                                            n;
                                            const {
                                                cardConfigs: r,
                                                layouts: a,
                                                browserSizeMode: l,
                                                selection: d,
                                                builderStatus: c,
                                                builderSupportModules: h
                                            } = this.props,
                                            u = h.jimuForBuilderLib.getAppConfigAction().appConfig,
                                            p = m.searchUtils.findLayoutItem(u, d);
                                            if (!d || !p || !window.jimuConfig.isInBuilder)
                                                return {
                                                    items: (0, e.Immutable)([]),
                                                    title: ""
                                                };
                                            const f = [];
                                            let v = "",
                                            S = !0,
                                            y = r[g.Selected].selectionMode !== s.None,
                                            w = !!r[g.Hover].enable;
                                            const b = (t, i) => h.widgetModules.searchUtils.getContentsInLayoutWithLayoutWidgetOnly(u, t, e.LayoutItemType.Widget, l).indexOf(i) > -1,
                                            x = (null === (i = r[g.Hover]) || void 0 === i ? void 0 : i.listLayout) !== (null == o ? void 0 : o.AUTO),
                                            C = (null === (n = r[g.Selected]) || void 0 === n ? void 0 : n.listLayout) !== (null == o ? void 0 : o.AUTO),
                                            I = () => {
                                                if (r[g.Hover].enable) {
                                                    const e = m.searchUtils.findLayoutId(a[g.Hover], l, u.mainSizeMode);
                                                    b(e, u.layouts[d.layoutId].content[d.layoutItemId].widgetId) || (w = !1),
                                                    f.push({
                                                        label: this.formatMessage("applyTo", {
                                                            status: this.formatMessage("hover").toLocaleLowerCase()
                                                        }),
                                                        event: e => {
                                                            this.handleCopyTo(e, g.Hover, p, w)
                                                        }
                                                    })
                                                }
                                            },
                                            M = () => {
                                                if (r[g.Selected].selectionMode !== s.None) {
                                                    const e = m.searchUtils.findLayoutId(a[g.Selected], l, u.mainSizeMode);
                                                    b(e, u.layouts[d.layoutId].content[d.layoutItemId].widgetId) || (y = !1),
                                                    f.push({
                                                        label: this.formatMessage("applyTo", {
                                                            status: this.formatMessage("selected").toLocaleLowerCase()
                                                        }),
                                                        event: e => {
                                                            this.handleCopyTo(e, g.Selected, p, y)
                                                        }
                                                    })
                                                }
                                            },
                                            R = () => {
                                                const e = m.searchUtils.findLayoutId(a[g.Regular], l, u.mainSizeMode);
                                                b(e, u.layouts[d.layoutId].content[d.layoutItemId].widgetId) || (S = !1),
                                                f.push({
                                                    label: this.formatMessage("applyTo", {
                                                        status: this.formatMessage("regular").toLocaleLowerCase()
                                                    }),
                                                    event: e => {
                                                        this.handleCopyTo(e, g.Regular, p, S)
                                                    }
                                                })
                                            };
                                            return c === g.Regular ? (x && I(), C && M(), w && y ? v = this.formatMessage("linkedToAnd", {
                                                    where1: this.formatMessage("selected").toLocaleLowerCase(),
                                                    where2: this.formatMessage("hover").toLocaleLowerCase()
                                                }) : w ? v = this.formatMessage("linkedTo", {
                                                    where: this.formatMessage("hover").toLocaleLowerCase()
                                                }) : y && (v = this.formatMessage("linkedTo", {
                                                            where: this.formatMessage("selected").toLocaleLowerCase()
                                                        }))) : c === g.Hover ? (R(), M(), S && y ? v = this.formatMessage("linkedToAnd", {
                                                        where1: this.formatMessage("regular").toLocaleLowerCase(),
                                                        where2: this.formatMessage("selected").toLocaleLowerCase()
                                                    }) : S ? v = this.formatMessage("linkedTo", {
                                                        where: this.formatMessage("regular").toLocaleLowerCase()
                                                    }) : y && (v = this.formatMessage("linkedTo", {
                                                            where: this.formatMessage("selected").toLocaleLowerCase()
                                                        }))) : (R(), I(), S && w ? v = this.formatMessage("linkedToAnd", {
                                                        where1: this.formatMessage("regular").toLocaleLowerCase(),
                                                        where2: this.formatMessage("hover").toLocaleLowerCase()
                                                    }) : S ? v = this.formatMessage("linkedTo", {
                                                        where: this.formatMessage("regular").toLocaleLowerCase()
                                                    }) : w && (v = this.formatMessage("linkedTo", {
                                                            where: this.formatMessage("hover").toLocaleLowerCase()
                                                        }))),
                                            t ? f.push({
                                                label: this.formatMessage("isolate"),
                                                event: this.handleBreakLink
                                            }) : v = this.formatMessage("isolate"), {
                                                items: (0, e.Immutable)(f),
                                                title: v
                                            }
                                        },
                                        this._renderAction = () => {
                                            const t = [], {
                                                theme: i,
                                                direction: o
                                            } = this.props,
                                            s = e.css `
      box-shadow: none;

      &:after {
        position: absolute;
        content: '';
        width: ${12}px;
        height: ${12}px;
        background-color: ${i.colors.palette.primary[500]};
        border: 2px solid ${i.colors.white};
        border-radius: 50%;
        z-index: ${20};
      }
    `,
                                            n = e.css `
      box-shadow: none;
      height: ${16}px;
      left: 0px;
      right: 0px;
      bottom: ${-8}px;
      &:after {
        position: absolute;
        content: '';
        bottom: 50%;
        left: 0;
        right: 0;
        height: 2px;
        background-color: ${i.colors.palette.primary[300]};
        z-index: ${20};
      }
    `,
                                            r = e.css `
      box-shadow: none;
      width: ${16}px;
      top: 0px;
      bottom: 0px;
      right: ${-8}px;
      &:after {
        position: absolute;
        content: '';
        right: 50%;
        top: 0;
        bottom: 0;
        width: 2px;
        background-color: ${i.colors.palette.primary[300]};
        z-index: ${20};
      }
    `,
                                            a = e.css `
      position: absolute;
    `,
                                            l = e.css `
      width: ${16}px;
      top: ${10}px;
      bottom: ${10}px;
      right: ${-8}px;

      &:after {
        top: 50%;
        right: 50%;
        margin-top: ${-5}px;
        margin-right: ${-5}px;
      }
    `,
                                            c = e.css `
      height: ${16}px;
      left: ${10}px;
      right: ${10}px;
      bottom: ${-8}px;

      &:after {
        left: 50%;
        bottom: 50%;
        margin-left: ${-5}px;
        margin-bottom: ${-5}px;
      }
    `;
                                            return o === d.Horizon ? (t.push((0, e.jsx)("span", {
                                                        key: "10",
                                                        className: "list-card-rnd-resize-left-line",
                                                        css: [a, r]
                                                    })), t.push((0, e.jsx)("span", {
                                                        key: "4",
                                                        className: "list-card-rnd-resize-right",
                                                        css: [a, s, l]
                                                    }))) : (t.push((0, e.jsx)("span", {
                                                        key: "9",
                                                        className: "list-card-rnd-resize-bottom-line",
                                                        css: [a, n]
                                                    })), t.push((0, e.jsx)("span", {
                                                        key: "6",
                                                        className: "list-card-rnd-resize-bottom",
                                                        css: [a, s, c]
                                                    }))),
                                            t
                                        },
                                        this.getCardToolsStyle = t => e.css `
      width: 100%;
      .btn {
        width: 100%;
      }
      .dropdown-toggle {
        justify-content: center;
      }
    `,
                                        this.renderCardTools = () => {
                                            const {
                                                index: t
                                            } = this.props;
                                            if (!window.jimuConfig.isInBuilder || t > 0)
                                                return;
                                            const {
                                                cardConfigs: i,
                                                appMode: o,
                                                builderSupportModules: n,
                                                datasourceId: r,
                                                selectionIsInList: a,
                                                selectionIsList: l,
                                                hideCardTool: d
                                            } = this.props;
                                            let c = !0;
                                            const {
                                                BuilderPopper: h,
                                                GLOBAL_RESIZING_CLASS_NAME: u,
                                                GLOBAL_H5_DRAGGING_CLASS_NAME: p,
                                                GLOBAL_DRAGGING_CLASS_NAME: m
                                            } = n.widgetModules;
                                            return (a || l) && o !== e.AppMode.Run && !d && r || (c = !1),
                                            c && this.props.isEditing && (i[g.Hover].enable || i[g.Selected].selectionMode !== s.None) && (0, e.jsx)(h, {
                                                placement: "left-start",
                                                trapFocus: !1,
                                                autoFocus: !1,
                                                css: e.css `
            .${m} &,
            .${u} &,
            .${p} & {
              &.popper {
                display: none;
              }
            }
          `,
                                                reference: this.resizeRef.current,
                                                offset: j,
                                                modifiers: z,
                                                open: c
                                            }, this.getCardMenuElement())
                                        },
                                        this.getCardMenuElement = () => {
                                            var t;
                                            const {
                                                index: i
                                            } = this.props;
                                            if (!window.jimuConfig.isInBuilder || i > 0)
                                                return;
                                            const {
                                                cardConfigs: n,
                                                selection: r,
                                                widgetId: a,
                                                builderSupportModules: l,
                                                browserSizeMode: d,
                                                builderStatus: c,
                                                selectionIsList: h
                                            } = this.props,
                                            u = l.jimuForBuilderLib.getAppConfigAction().appConfig, {
                                                searchUtils: p,
                                                BuilderDropDown: m,
                                                BuilderButton: f,
                                                withBuilderTheme: v
                                            } = l.widgetModules,
                                            S = h,
                                            y = !S && r && p && p.getRelatedLayoutItemsInWidgetByLayoutInfo(u, r, a, d).length > 1, {
                                                items: w,
                                                title: b
                                            } = this.getCopyDropdownItems(y),
                                            x = w && w.length > 0,
                                            C = (null === (t = n[c]) || void 0 === t ? void 0 : t.listLayout) || o.CUSTOM,
                                            I = !S && (x || y) && C === o.CUSTOM,
                                            M = v((t => (0, e.jsx)("div", {
                                                            className: "status-group d-flex flex-column align-items-center p-2",
                                                            css: this.getCardToolsStyle(t)
                                                        }, (0, e.jsx)(f, {
                                                                active: c === g.Regular,
                                                                onClick: e => this.handleBuilderStatusChange(e, g.Regular)
                                                            }, this.formatMessage("regular")), n[g.Hover].enable && (0, e.jsx)(f, {
                                                                active: c === g.Hover,
                                                                className: "mt-1",
                                                                onClick: e => this.handleBuilderStatusChange(e, g.Hover)
                                                            }, this.formatMessage("hover")), n[g.Selected].selectionMode !== s.None && (0, e.jsx)(f, {
                                                                active: c === g.Selected,
                                                                className: "mt-1",
                                                                onClick: e => this.handleBuilderStatusChange(e, g.Selected)
                                                            }, this.formatMessage("selected")), I && (0, e.jsx)(m, {
                                                                className: "mt-1 w-100",
                                                                toggleIsIcon: !0,
                                                                toggleTitle: b,
                                                                toggleType: "default",
                                                                direction: "left",
                                                                toggleContent: t => y ? (0, e.jsx)(R, {
                                                                    size: 16
                                                                }) : (0, e.jsx)(L, {
                                                                    size: 16
                                                                }),
                                                                modifiers: D,
                                                                items: w
                                                            }))));
                                            return (0, e.jsx)(M, null)
                                        },
                                        this.isItemAccept = (e, t) => {
                                            var i,
                                            o;
                                            if (!e)
                                                return !1;
                                            const {
                                                isEditing: s
                                            } = this.props,
                                            n = null === (o = null === (i = e.manifest) || void 0 === i ? void 0 : i.properties) || void 0 === o ? void 0 : o.supportRepeat, {
                                                builderSupportModules: r,
                                                widgetId: a
                                            } = this.props,
                                            l = r.jimuForBuilderLib.getAppConfigAction().appConfig,
                                            d = r.widgetModules.selectionInList;
                                            return s && n && (!e.layoutInfo || e.layoutInfo && d(e.layoutInfo, a, l, !1))
                                        },
                                        this.getEditorStyle = () => e.css `
      &.list-card-content {
        .fixed-layout {
          border: 0 !important;
        }
      }
    `,
                                        this.state = {
                                            didMount: !1
                                        },
                                        this.resizeRef = e.React.createRef(),
                                        this.providerData = this.getNewProviderData()
                                    }
                                    shouldComponentUpdate(t, i) {
                                        let o = this.shouldComponentUpdateExcept(t, i, ["listStyle", "selection"]);
                                        if (o = o || !e.utils.isDeepEqual(this.props.listStyle, t.listStyle), !o) {
                                            const {
                                                selectionIsInList: i,
                                                selectionIsList: s
                                            } = this.props;
                                            (s || i) && (o = !e.utils.isDeepEqual(this.props.selection, t.selection))
                                        }
                                        return o
                                    }
                                    componentDidUpdate(e) {
                                        const {
                                            selectionIsInList: t,
                                            isEditing: i,
                                            direction: o,
                                            isRTL: s,
                                            lockItemRatio: n,
                                            index: r
                                        } = this.props;
                                        window.jimuConfig.isInBuilder && 0 === r && this.interactable && (!i || t || n ? this.interactable.resizable(!1) : (this.interactable.resizable({
                                                    edges: {
                                                        top: !1,
                                                        left: o === d.Horizon && s,
                                                        bottom: o === d.Vertical,
                                                        right: o === d.Horizon && !s
                                                    }
                                                }), this.interactable.resizable(!0)))
                                    }
                                    componentDidMount() {
                                        const {
                                            index: e,
                                            updateCardToolPosition: t
                                        } = this.props;
                                        if (0 === e && window.jimuConfig.isInBuilder && this.resizeRef.current) {
                                            const {
                                                interact: e,
                                                handleResizeCard: o,
                                                direction: s,
                                                isRTL: n
                                            } = this.props;
                                            this.interactable = e(this.resizeRef.current).resizable({
                                                edges: {
                                                    top: !1,
                                                    left: s === d.Horizon && n,
                                                    bottom: s === d.Vertical,
                                                    right: s === d.Horizon && !n
                                                },
                                                modifiers: [e.modifiers.restrictEdges({
                                                        outer: "parent",
                                                        endOnly: !0
                                                    }), e.modifiers.restrictSize({
                                                        min: {
                                                            width: i,
                                                            height: i
                                                        }
                                                    })],
                                                inertia: !1,
                                                onstart: e => {
                                                    const {
                                                        changeIsResizingCard: t
                                                    } = this.props;
                                                    t && t(!0),
                                                    e.stopPropagation()
                                                },
                                                onmove: e => {
                                                    e.stopPropagation(),
                                                    this.lastResizeCall && cancelAnimationFrame(this.lastResizeCall);
                                                    const i = e.rect,
                                                    s = {
                                                        width: i.right - i.left,
                                                        height: i.bottom - i.top
                                                    };
                                                    t(),
                                                    this.lastResizeCall = requestAnimationFrame((() => {
                                                                const e = {};
                                                                o(s, !1, e.top, e.left)
                                                            }))
                                                },
                                                onend: e => {
                                                    e.stopPropagation(),
                                                    this.lastResizeCall && cancelAnimationFrame(this.lastResizeCall),
                                                    this.lastResizeCall = requestAnimationFrame((() => {
                                                                const t = e.rect,
                                                                i = {
                                                                    width: t.right - t.left,
                                                                    height: t.bottom - t.top
                                                                };
                                                                o(i, !0);
                                                                const {
                                                                    changeIsResizingCard: s
                                                                } = this.props;
                                                                s && s(!1)
                                                            }))
                                                }
                                            })
                                        }
                                        this.setState({
                                            didMount: !0
                                        })
                                    }
                                    componentWillUnMount() {
                                        this.lastResizeCall && cancelAnimationFrame(this.lastResizeCall),
                                        this.interactable && (this.interactable.unset(), this.interactable = null)
                                    }
                                    handleBuilderStatusChange(e, t) {
                                        this.editStatus("showCardSetting", t),
                                        this.editStatus("builderStatus", t);
                                        const {
                                            selectCard: i
                                        } = this.props;
                                        i(),
                                        e.stopPropagation(),
                                        e.nativeEvent.stopImmediatePropagation()
                                    }
                                    render() {
                                        var i;
                                        const {
                                            selectable: s,
                                            active: n,
                                            cardConfigs: r,
                                            LayoutEntry: a,
                                            selectionIsInList: l,
                                            isEditing: d,
                                            widgetId: c,
                                            listStyle: h,
                                            lockItemRatio: u,
                                            builderStatus: p,
                                            layouts: m
                                        } = this.props, {
                                            didMount: f
                                        } = this.state,
                                        v = m[p],
                                        S = (null === (i = r[p]) || void 0 === i ? void 0 : i.listLayout) || o.CUSTOM,
                                        y = m[g.Regular],
                                        w = S === o.AUTO ? y : v,
                                        b = r[p].backgroundStyle,
                                        x = S === o.AUTO && p !== g.Regular,
                                        C = Object.assign({}, t.styleUtils.toCSSStyle(b || {})),
                                        I = Object.assign({}, t.styleUtils.toCSSStyle({
                                                    borderRadius: (null == b ? void 0 : b.borderRadius) || 0
                                                }
                                                     || {})),
                                        M = this.getNewProviderData();
                                        return this.isProviderEqual(M, this.providerData) || (this.providerData = M),
                                        (0, e.jsx)(e.RepeatedDataSourceProvider, {
                                            data: this.providerData
                                        }, (0, e.jsx)(t.ListGroupItem, {
                                                active: s && n,
                                                css: this.getStyle(p),
                                                style: Object.assign(Object.assign({}, I), h),
                                                className: (0, e.classNames)("surface-1", `list-card-${c}`),
                                                onClick: this.handleItemClick,
                                                role: "listCardEditor"
                                            }, x && (0, e.jsx)("div", {
                                                    className: "card-editor-mask position-absolute"
                                                }), f && this.renderCardTools(), (0, e.jsx)("div", {
                                                    className: "list-card-content d-flex",
                                                    style: C,
                                                    css: this.getEditorStyle(),
                                                    ref: this.resizeRef
                                                }, (0, e.jsx)(a, {
                                                        isItemAccepted: this.isItemAccept,
                                                        isRepeat: !0,
                                                        layouts: w,
                                                        isInWidget: !0
                                                    }), d && !l && !u && this._renderAction())))
                                    }
                                });
                            var P = a(51315);
                            class E extends C {
                                constructor(t) {
                                    super(t),
                                    this.updateExpressionRecords = () => {
                                        var e,
                                        t;
                                        this.expressionRecords = {},
                                        (null === (e = this.providerData) || void 0 === e ? void 0 : e.dataSourceId) && (null === (t = this.providerData) || void 0 === t ? void 0 : t.record) && (this.expressionRecords[this.providerData.dataSourceId] = this.providerData.record)
                                    },
                                    this.onUrlExpResolveChange = e => {
                                        if (e.isSuccessful)
                                            this.setState({
                                                url: e.value
                                            });
                                        else {
                                            const e = "";
                                            this.setState({
                                                url: e
                                            })
                                        }
                                    },
                                    this.handleItemClick = e => {
                                        const {
                                            onChange: t,
                                            active: i
                                        } = this.props, {
                                            providerData: o,
                                            linkRef: s
                                        } = this,
                                        n = e.target && e.target.tagName || "";
                                        if ("a" === n.toLowerCase() || "button" === n.toLowerCase() || "linkClick" === e.exbEventType || i || s.current && s.current.click(), i) {
                                            const i = e.target && e.target.tagName || "";
                                            "a" !== i.toLowerCase() && "button" !== i.toLowerCase() && "linkClick" !== e.exbEventType && t(o && o.record)
                                        } else
                                            t(o && o.record);
                                        "linkClick" === e.exbEventType && delete e.exbEventType
                                    },
                                    this.handleLinkClick = e => {
                                        e.stopPropagation()
                                    },
                                    this.state = {
                                        url: ""
                                    },
                                    this.providerData = this.getNewProviderData(),
                                    this.updateExpressionRecords(),
                                    this.layoutRef = e.React.createRef(),
                                    this.linkRef = e.React.createRef()
                                }
                                shouldComponentUpdate(t, i) {
                                    let o = this.shouldComponentUpdateExcept(t, i, ["listStyle"]);
                                    return o = o || !e.utils.isDeepEqual(this.props.listStyle, t.listStyle),
                                    o
                                }
                                render() {
                                    var i;
                                    const {
                                        selectable: s,
                                        active: n,
                                        cardConfigs: r,
                                        widgetId: a,
                                        listStyle: l,
                                        layouts: d,
                                        hoverLayoutOpen: c,
                                        appMode: h,
                                        isHover: u,
                                        linkParam: p,
                                        useDataSources: f,
                                        itemIdex: v,
                                        handleListMouseLeave: S,
                                        handleListMouseMove: y
                                    } = this.props;
                                    let {
                                        queryObject: w
                                    } = this.props;
                                    const {
                                        url: b
                                    } = this.state;
                                    let x,
                                    C,
                                    I,
                                    M,
                                    R = g.Regular;
                                    window.jimuConfig.isInBuilder && h !== e.AppMode.Run ? (C = r[g.Regular].backgroundStyle, x = d[g.Regular]) : (x = d[g.Regular], C = r[g.Regular].backgroundStyle, p && p.linkType && (I = p.openType, M = {
                                                linkType: p.linkType
                                            }, p.linkType === e.LinkType.WebAddress ? (M.value = b, w = void 0) : M.value = p.value), c && u && d[g.Hover] && (R = g.Hover, x = null == d ? void 0 : d[g.Hover], C = r[g.Hover].backgroundStyle), s && n && d[g.Selected] && (R = g.Selected, x = null == d ? void 0 : d[g.Selected], C = r[g.Selected].backgroundStyle, w = void 0, M = void 0, I = void 0));
                                    const O = (null === (i = r[R]) || void 0 === i ? void 0 : i.listLayout) || o.CUSTOM,
                                    T = d[g.Regular],
                                    L = O === o.AUTO ? T : x,
                                    j = Object.assign({}, t.styleUtils.toCSSStyle(C || {})),
                                    z = Object.assign({}, t.styleUtils.toCSSStyle({
                                                borderRadius: (null == C ? void 0 : C.borderRadius) || 0
                                            }
                                                 || {})),
                                    D = this.getNewProviderData();
                                    return this.isProviderEqual(D, this.providerData) || (this.providerData = D, this.updateExpressionRecords()),
                                    (0, e.jsx)(e.RepeatedDataSourceProvider, {
                                        data: this.providerData
                                    }, (0, e.jsx)(t.ListGroupItem, {
                                            active: s && n,
                                            css: this.getStyle(R),
                                            style: Object.assign(Object.assign({}, l), z),
                                            className: (0, e.classNames)("surface-1", `list-card-${a}`),
                                            role: "listCardViewer",
                                            onClick: this.handleItemClick
                                        }, (0, e.jsx)("div", {
                                                className: "list-card-content d-flex",
                                                onMouseLeave: S,
                                                onMouseMove: () => {
                                                    y(v)
                                                },
                                                style: j
                                            }, (0, e.jsx)("div", {
                                                    className: "position-relative h-100 w-100"
                                                }, (0, e.jsx)(P.Fragment, null, (0, e.jsx)(t._Link, {
                                                            className: "p-0 w-100 h-100 border-0 list-clear-background list-link",
                                                            ref: this.linkRef,
                                                            to: M,
                                                            target: I,
                                                            queryObject: w,
                                                            onClick: this.handleLinkClick
                                                        }), (0, e.jsx)("div", {
                                                            className: "d-flex w-100 h-100 list-item-con",
                                                            ref: this.layoutRef
                                                        }, (0, e.jsx)(m.LayoutEntry, {
                                                                layouts: L
                                                            }))))), (0, e.jsx)(e.ExpressionResolverComponent, {
                                                useDataSources: f,
                                                expression: null == p ? void 0 : p.expression,
                                                onChange: this.onUrlExpResolveChange,
                                                widgetId: this.props.widgetId
                                            })))
                                }
                            }
                            var N = a(55339),
                            A = a.n(N);
                            const $ = i => {
                                const {
                                    className: o
                                } = i,
                                s = function (e, t) {
                                    var i = {};
                                    for (var o in e)
                                        Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (i[o] = e[o]);
                                    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                                        var s = 0;
                                        for (o = Object.getOwnPropertySymbols(e); s < o.length; s++)
                                            t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (i[o[s]] = e[o[s]])
                                    }
                                    return i
                                }
                                (i, ["className"]),
                                n = (0, e.classNames)("jimu-icon-component", o);
                                return e.React.createElement(t.Icon, Object.assign({
                                        className: n,
                                        icon: A()
                                    }, s))
                            };
                            var B = a(30224),
                            H = a.n(B);
                            const F = i => {
                                const {
                                    className: o
                                } = i,
                                s = function (e, t) {
                                    var i = {};
                                    for (var o in e)
                                        Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (i[o] = e[o]);
                                    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                                        var s = 0;
                                        for (o = Object.getOwnPropertySymbols(e); s < o.length; s++)
                                            t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (i[o[s]] = e[o[s]])
                                    }
                                    return i
                                }
                                (i, ["className"]),
                                n = (0, e.classNames)("jimu-icon-component", o);
                                return e.React.createElement(t.Icon, Object.assign({
                                        className: n,
                                        icon: H()
                                    }, s))
                            };
                            var _ = a(33869),
                            U = a.n(_);
                            const W = i => {
                                const {
                                    className: o
                                } = i,
                                s = function (e, t) {
                                    var i = {};
                                    for (var o in e)
                                        Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (i[o] = e[o]);
                                    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                                        var s = 0;
                                        for (o = Object.getOwnPropertySymbols(e); s < o.length; s++)
                                            t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (i[o[s]] = e[o[s]])
                                    }
                                    return i
                                }
                                (i, ["className"]),
                                n = (0, e.classNames)("jimu-icon-component", o);
                                return e.React.createElement(t.Icon, Object.assign({
                                        className: n,
                                        icon: U()
                                    }, s))
                            },
                            q = new(0, e.esri.Sanitizer);
                            class V extends e.React.PureComponent {
                                constructor(i) {
                                    super(i),
                                    this.handleChange = e => {
                                        this.setState({
                                            searchText: e,
                                            isShowSuggestion: (null == e ? void 0 : e.length) > 2
                                        }, (() => {
                                                const {
                                                    onSearchTextChange: t
                                                } = this.props;
                                                t && t(e)
                                            }))
                                    },
                                    this.handleSubmit = (e, t = !1) => {
                                        const {
                                            onSubmit: i
                                        } = this.props;
                                        i && i(e, t)
                                    },
                                    this.onKeyUp = e => {
                                        e && e.target && "Enter" === e.key && (this.setState({
                                                isShowSuggestion: !1
                                            }), this.handleSubmit(e.target.value, !0))
                                    },
                                    this.onSuggestionConfirm = e => {
                                        this.setState({
                                            searchText: e,
                                            isShowSuggestion: !1
                                        }, (() => {
                                                var t;
                                                this.handleSubmit(e),
                                                null === (t = this.props) || void 0 === t || t.toggleSearchBoxVisible(!0)
                                            }))
                                    },
                                    this.handleClear = e => {
                                        this.setState({
                                            searchText: ""
                                        }),
                                        e.stopPropagation()
                                    },
                                    this.getStyle = () => {
                                        var t,
                                        i,
                                        o,
                                        s,
                                        n,
                                        r,
                                        a,
                                        l,
                                        d;
                                        const {
                                            theme: c
                                        } = this.props;
                                        return e.css `
      position: relative;
      .search-input {
        margin-bottom: -1px;
        padding-left: 3px;
        border: 0;
        // border-bottom-width: 1px;
        // border-bottom-style: solid;
        // border-color: ${c.colors.primary};
        background: transparent;
        height: ${e.polished.rem(26)};
        min-width: 0;
        .input-wrapper {
          background: transparent;
          border: none;
          padding: 0;
          height: 100%;
        }
      }
      .search-input:focus {
        background: transparent;
      }
      .search-loading-con {
        @keyframes loading {
          0% {transform: rotate(0deg); };
          100% {transform: rotate(360deg)};
        }
        width: ${e.polished.rem(13)};
        height: ${e.polished.rem(13)};
        min-width: ${e.polished.rem(13)};
        border: 2px solid ${null===(o=null===(i=null===(t=null==c?void 0:c.colors)||void 0===t?void 0:t.palette)||void 0===i?void 0:i.secondary)||void 0===o?void 0:o[300]};
        border-radius: 50%;
        border-top: 2px solid ${null===(r=null===(n=null===(s=null==c?void 0:c.colors)||void 0===s?void 0:s.palette)||void 0===n?void 0:n.primary)||void 0===r?void 0:r[500]};
        box-sizing: border-box;
        animation:loading 2s infinite linear;
        margin-right: ${e.polished.rem(4)};
      }
      .clear-search, .search-back {
        cursor: pointer;
        padding: ${e.polished.rem(6)};
        background: none;
        border: none;
        color: ${null===(d=null===(l=null===(a=null==c?void 0:c.colors)||void 0===a?void 0:a.palette)||void 0===l?void 0:l.dark)||void 0===d?void 0:d[800]}
      }
      .search-back {
        margin-left: ${e.polished.rem(-6)};
      }
      .clear-search:hover {
        background: none;
      }
    `
                                    },
                                    this.getSuggestionListStyle = () => {
                                        const {
                                            suggestionWidth: t
                                        } = this.props;
                                        return e.css `
      & {
        max-height: ${e.polished.rem(300)};
        min-width: ${e.polished.rem(t)};
        overflow: auto;
      }
      button {
        display: block;
        width: 100%;
        text-align: left;
        border: none;
        border-radius: 0;
      }
      button:hover {
        border: none;
      }
    `
                                    },
                                    this.clearSearchText = () => {
                                        const {
                                            searchText: e
                                        } = this.state;
                                        e && (this.handleChange(""), this.setState({
                                                isShowSuggestion: !1
                                            }))
                                    },
                                    this.getTextInputSuffixElement = () => {
                                        const {
                                            theme: i,
                                            showLoading: o,
                                            formatMessage: s
                                        } = this.props, {
                                            searchText: n
                                        } = this.state;
                                        return (0, e.jsx)("div", {
                                            className: "d-flex align-items-center"
                                        }, o && (0, e.jsx)("div", {
                                                className: "search-loading-con"
                                            }), n && (0, e.jsx)(t.Button, {
                                                color: "tertiary",
                                                className: "clear-search",
                                                icon: !0,
                                                size: "sm",
                                                onClick: this.clearSearchText,
                                                title: s("clearSearch")
                                            }, (0, e.jsx)($, {
                                                    size: 14,
                                                    color: i.colors.palette.dark[800]
                                                })))
                                    },
                                    this.getTextInputPrefixElement = () => {
                                        const {
                                            theme: i
                                        } = this.props;
                                        return (0, e.jsx)(t.Button, {
                                            type: "tertiary",
                                            icon: !0,
                                            size: "sm",
                                            onClick: e => this.handleSubmit(this.state.searchText)
                                        }, (0, e.jsx)(F, {
                                                size: 16,
                                                color: i.colors.palette.light[800]
                                            }))
                                    },
                                    this.state = {
                                        searchText: i.searchText || "",
                                        isShowSuggestion: !1
                                    }
                                }
                                componentDidUpdate(e) {
                                    if (this.props.searchText !== e.searchText && this.props.searchText !== this.state.searchText) {
                                        const {
                                            searchText: e
                                        } = this.props;
                                        this.setState({
                                            searchText: e
                                        })
                                    }
                                }
                                render() {
                                    const {
                                        placeholder: i,
                                        className: o,
                                        showClear: s,
                                        hideSearchIcon: n,
                                        inputRef: r,
                                        onFocus: a,
                                        onBlur: l,
                                        theme: d,
                                        searchSuggestion: c,
                                        formatMessage: h,
                                        isShowBackButton: u
                                    } = this.props, {
                                        searchText: p,
                                        isShowSuggestion: g
                                    } = this.state;
                                    return (0, e.jsx)("div", null, (0, e.jsx)("div", {
                                            css: this.getStyle(),
                                            className: `d-flex align-items-center ${o}`
                                        }, u && (0, e.jsx)(t.Button, {
                                                color: "tertiary",
                                                className: "search-back",
                                                icon: !0,
                                                size: "sm",
                                                onClick: e => {
                                                    var t;
                                                    null === (t = this.props) || void 0 === t || t.toggleSearchBoxVisible(!1)
                                                },
                                                title: h("topToolBack")
                                            }, (0, e.jsx)(W, {
                                                    size: 20,
                                                    color: d.colors.palette.dark[800]
                                                })), (0, e.jsx)(t.TextInput, {
                                                className: "search-input flex-grow-1",
                                                ref: r,
                                                placeholder: i,
                                                onChange: e => this.handleChange(e.target.value),
                                                onBlur: l,
                                                onFocus: a,
                                                value: p || "",
                                                onKeyDown: e => this.onKeyUp(e),
                                                prefix: !n && !u && this.getTextInputPrefixElement(),
                                                suffix: this.getTextInputSuffixElement()
                                            }), s && (0, e.jsx)(t.Button, {
                                                color: "tertiary",
                                                icon: !0,
                                                size: "sm",
                                                onClick: this.handleSubmit
                                            }, (0, e.jsx)($, {
                                                    size: 12,
                                                    color: d.colors.palette.dark[800]
                                                }))), (0, e.jsx)("div", {
                                            ref: e => this.reference = e
                                        }, (0, e.jsx)(t.Popper, {
                                                css: this.getSuggestionListStyle(),
                                                placement: "bottom-start",
                                                reference: this.reference,
                                                offset: [0, 8],
                                                open: g,
                                                trapFocus: !1,
                                                autoFocus: !1,
                                                toggle: e => {
                                                    this.setState({
                                                        isShowSuggestion: !g
                                                    })
                                                }
                                            }, c.map(((i, o) => {
                                                        const s = q.sanitize(i.suggestionHtml);
                                                        return (0, e.jsx)(t.Button, {
                                                            key: o,
                                                            type: "secondary",
                                                            size: "sm",
                                                            onClick: () => {
                                                                this.onSuggestionConfirm(i.suggestion)
                                                            },
                                                            dangerouslySetInnerHTML: {
                                                                __html: s
                                                            }
                                                        })
                                                    })))))
                                }
                            }
                            function Q() {
                                return Q = Object.assign || function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var i = arguments[t];
                                        for (var o in i)
                                            Object.prototype.hasOwnProperty.call(i, o) && (e[o] = i[o])
                                    }
                                    return e
                                },
                                Q.apply(this, arguments)
                            }
                            function G(e, t) {
                                return G = Object.setPrototypeOf || function (e, t) {
                                    return e.__proto__ = t,
                                    e
                                },
                                G(e, t)
                            }
                            function Y(e) {
                                if (void 0 === e)
                                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return e
                            }
                            var K = Number.isNaN || function (e) {
                                return "number" == typeof e && e != e
                            };
                            function X(e, t) {
                                if (e.length !== t.length)
                                    return !1;
                                for (var i = 0; i < e.length; i++)
                                    if (!((o = e[i]) === (s = t[i]) || K(o) && K(s)))
                                        return !1;
                                var o,
                                s;
                                return !0
                            }
                            const Z = function (e, t) {
                                var i;
                                void 0 === t && (t = X);
                                var o,
                                s = [],
                                n = !1;
                                return function () {
                                    for (var r = [], a = 0; a < arguments.length; a++)
                                        r[a] = arguments[a];
                                    return n && i === this && t(r, s) || (o = e.apply(this, r), n = !0, i = this, s = r),
                                    o
                                }
                            };
                            var J = "object" == typeof performance && "function" == typeof performance.now ? function () {
                                return performance.now()
                            }
                             : function () {
                                return Date.now()
                            };
                            function ee(e) {
                                cancelAnimationFrame(e.id)
                            }
                            var te = null;
                            function ie(e) {
                                if (void 0 === e && (e = !1), null === te || e) {
                                    var t = document.createElement("div"),
                                    i = t.style;
                                    i.width = "50px",
                                    i.height = "50px",
                                    i.overflow = "scroll",
                                    i.direction = "rtl";
                                    var o = document.createElement("div"),
                                    s = o.style;
                                    return s.width = "100px",
                                    s.height = "100px",
                                    t.appendChild(o),
                                    document.body.appendChild(t),
                                    t.scrollLeft > 0 ? te = "positive-descending" : (t.scrollLeft = 1, te = 0 === t.scrollLeft ? "negative" : "positive-ascending"),
                                    document.body.removeChild(t),
                                    te
                                }
                                return te
                            }
                            var oe = function (e, t) {
                                return e
                            };
                            function se(e) {
                                var t,
                                i,
                                o = e.getItemOffset,
                                s = e.getEstimatedTotalSize,
                                n = e.getItemSize,
                                r = e.getOffsetForIndexAndAlignment,
                                a = e.getStartIndexForOffset,
                                l = e.getStopIndexForStartIndex,
                                d = e.initInstanceProps,
                                c = e.shouldResetStyleCacheOnItemSizeChange,
                                h = e.validateProps;
                                return i = t = function (e) {
                                    function t(t) {
                                        var i;
                                        return (i = e.call(this, t) || this)._instanceProps = d(i.props, Y(Y(i))),
                                        i._outerRef = void 0,
                                        i._resetIsScrollingTimeoutId = null,
                                        i.state = {
                                            instance: Y(Y(i)),
                                            isScrolling: !1,
                                            scrollDirection: "forward",
                                            scrollOffset: "number" == typeof i.props.initialScrollOffset ? i.props.initialScrollOffset : 0,
                                            scrollUpdateWasRequested: !1
                                        },
                                        i._callOnItemsRendered = void 0,
                                        i._callOnItemsRendered = Z((function (e, t, o, s) {
                                                    return i.props.onItemsRendered({
                                                        overscanStartIndex: e,
                                                        overscanStopIndex: t,
                                                        visibleStartIndex: o,
                                                        visibleStopIndex: s
                                                    })
                                                })),
                                        i._callOnScroll = void 0,
                                        i._callOnScroll = Z((function (e, t, o) {
                                                    return i.props.onScroll({
                                                        scrollDirection: e,
                                                        scrollOffset: t,
                                                        scrollUpdateWasRequested: o
                                                    })
                                                })),
                                        i._getItemStyle = void 0,
                                        i._getItemStyle = function (e) {
                                            var t,
                                            s = i.props,
                                            r = s.direction,
                                            a = s.itemSize,
                                            l = s.layout,
                                            d = i._getItemStyleCache(c && a, c && l, c && r);
                                            if (d.hasOwnProperty(e))
                                                t = d[e];
                                            else {
                                                var h = o(i.props, e, i._instanceProps),
                                                u = n(i.props, e, i._instanceProps),
                                                p = "horizontal" === r || "horizontal" === l,
                                                g = "rtl" === r,
                                                m = p ? h : 0;
                                                d[e] = t = {
                                                    position: "absolute",
                                                    left: g ? void 0 : m,
                                                    right: g ? m : void 0,
                                                    top: p ? 0 : h,
                                                    height: p ? "100%" : u,
                                                    width: p ? u : "100%"
                                                }
                                            }
                                            return t
                                        },
                                        i._getItemStyleCache = void 0,
                                        i._getItemStyleCache = Z((function (e, t, i) {
                                                    return {}
                                                })),
                                        i._onScrollHorizontal = function (e) {
                                            var t = e.currentTarget,
                                            o = t.clientWidth,
                                            s = t.scrollLeft,
                                            n = t.scrollWidth;
                                            i.setState((function (e) {
                                                    if (e.scrollOffset === s)
                                                        return null;
                                                    var t = i.props.direction,
                                                    r = s;
                                                    if ("rtl" === t)
                                                        switch (ie()) {
                                                        case "negative":
                                                            r = -s;
                                                            break;
                                                        case "positive-descending":
                                                            r = n - o - s
                                                        }
                                                    return r = Math.max(0, Math.min(r, n - o)), {
                                                        isScrolling: !0,
                                                        scrollDirection: e.scrollOffset < s ? "forward" : "backward",
                                                        scrollOffset: r,
                                                        scrollUpdateWasRequested: !1
                                                    }
                                                }), i._resetIsScrollingDebounced)
                                        },
                                        i._onScrollVertical = function (e) {
                                            var t = e.currentTarget,
                                            o = t.clientHeight,
                                            s = t.scrollHeight,
                                            n = t.scrollTop;
                                            i.setState((function (e) {
                                                    if (e.scrollOffset === n)
                                                        return null;
                                                    var t = Math.max(0, Math.min(n, s - o));
                                                    return {
                                                        isScrolling: !0,
                                                        scrollDirection: e.scrollOffset < t ? "forward" : "backward",
                                                        scrollOffset: t,
                                                        scrollUpdateWasRequested: !1
                                                    }
                                                }), i._resetIsScrollingDebounced)
                                        },
                                        i._outerRefSetter = function (e) {
                                            var t = i.props.outerRef;
                                            i._outerRef = e,
                                            "function" == typeof t ? t(e) : null != t && "object" == typeof t && t.hasOwnProperty("current") && (t.current = e)
                                        },
                                        i._resetIsScrollingDebounced = function () {
                                            var e,
                                            t,
                                            o,
                                            s;
                                            null !== i._resetIsScrollingTimeoutId && ee(i._resetIsScrollingTimeoutId),
                                            i._resetIsScrollingTimeoutId = (e = i._resetIsScrolling, t = 150, o = J(), s = {
                                                    id: requestAnimationFrame((function i() {
                                                            J() - o >= t ? e.call(null) : s.id = requestAnimationFrame(i)
                                                        }))
                                                })
                                        },
                                        i._resetIsScrolling = function () {
                                            i._resetIsScrollingTimeoutId = null,
                                            i.setState({
                                                isScrolling: !1
                                            }, (function () {
                                                    i._getItemStyleCache(-1, null)
                                                }))
                                        },
                                        i
                                    }
                                    var i,
                                    u;
                                    u = e,
                                    (i = t).prototype = Object.create(u.prototype),
                                    i.prototype.constructor = i,
                                    G(i, u),
                                    t.getDerivedStateFromProps = function (e, t) {
                                        return ne(e, t),
                                        h(e),
                                        null
                                    };
                                    var p = t.prototype;
                                    return p.scrollTo = function (e) {
                                        e = Math.max(0, e),
                                        this.setState((function (t) {
                                                return t.scrollOffset === e ? null : {
                                                    scrollDirection: t.scrollOffset < e ? "forward" : "backward",
                                                    scrollOffset: e,
                                                    scrollUpdateWasRequested: !0
                                                }
                                            }), this._resetIsScrollingDebounced)
                                    },
                                    p.scrollToItem = function (e, t) {
                                        void 0 === t && (t = "auto");
                                        var i = this.props.itemCount,
                                        o = this.state.scrollOffset;
                                        e = Math.max(0, Math.min(e, i - 1)),
                                        this.scrollTo(r(this.props, e, t, o, this._instanceProps))
                                    },
                                    p.componentDidMount = function () {
                                        var e = this.props,
                                        t = e.direction,
                                        i = e.initialScrollOffset,
                                        o = e.layout;
                                        if ("number" == typeof i && null != this._outerRef) {
                                            var s = this._outerRef;
                                            "horizontal" === t || "horizontal" === o ? s.scrollLeft = i : s.scrollTop = i
                                        }
                                        this._callPropsCallbacks()
                                    },
                                    p.componentDidUpdate = function () {
                                        var e = this.props,
                                        t = e.direction,
                                        i = e.layout,
                                        o = this.state,
                                        s = o.scrollOffset;
                                        if (o.scrollUpdateWasRequested && null != this._outerRef) {
                                            var n = this._outerRef;
                                            if ("horizontal" === t || "horizontal" === i)
                                                if ("rtl" === t)
                                                    switch (ie()) {
                                                    case "negative":
                                                        n.scrollLeft = -s;
                                                        break;
                                                    case "positive-ascending":
                                                        n.scrollLeft = s;
                                                        break;
                                                    default:
                                                        var r = n.clientWidth,
                                                        a = n.scrollWidth;
                                                        n.scrollLeft = a - r - s
                                                    }
                                                else
                                                    n.scrollLeft = s;
                                            else
                                                n.scrollTop = s
                                        }
                                        this._callPropsCallbacks()
                                    },
                                    p.componentWillUnmount = function () {
                                        null !== this._resetIsScrollingTimeoutId && ee(this._resetIsScrollingTimeoutId)
                                    },
                                    p.render = function () {
                                        var e = this.props,
                                        t = e.children,
                                        i = e.className,
                                        o = e.direction,
                                        n = e.height,
                                        r = e.innerRef,
                                        a = e.innerElementType,
                                        l = e.innerTagName,
                                        d = e.itemCount,
                                        c = e.itemData,
                                        h = e.itemKey,
                                        u = void 0 === h ? oe : h,
                                        p = e.layout,
                                        g = e.outerElementType,
                                        m = e.outerTagName,
                                        f = e.style,
                                        v = e.useIsScrolling,
                                        S = e.width,
                                        y = this.state.isScrolling,
                                        w = "horizontal" === o || "horizontal" === p,
                                        b = w ? this._onScrollHorizontal : this._onScrollVertical,
                                        x = this._getRangeToRender(),
                                        C = x[0],
                                        I = x[1],
                                        M = [];
                                        if (d > 0)
                                            for (var R = C; R <= I; R++)
                                                M.push((0, P.createElement)(t, {
                                                        data: c,
                                                        key: u(R, c),
                                                        index: R,
                                                        isScrolling: v ? y : void 0,
                                                        style: this._getItemStyle(R)
                                                    }));
                                        var O = s(this.props, this._instanceProps);
                                        return (0, P.createElement)(g || m || "div", {
                                            className: i,
                                            onScroll: b,
                                            ref: this._outerRefSetter,
                                            style: Q({
                                                position: "relative",
                                                height: n,
                                                width: S,
                                                overflow: "auto",
                                                WebkitOverflowScrolling: "touch",
                                                willChange: "transform",
                                                direction: o
                                            }, f)
                                        }, (0, P.createElement)(a || l || "div", {
                                                children: M,
                                                ref: r,
                                                style: {
                                                    height: w ? "100%" : O,
                                                    pointerEvents: y ? "none" : void 0,
                                                    width: w ? O : "100%"
                                                }
                                            }))
                                    },
                                    p._callPropsCallbacks = function () {
                                        if ("function" == typeof this.props.onItemsRendered && this.props.itemCount > 0) {
                                            var e = this._getRangeToRender(),
                                            t = e[0],
                                            i = e[1],
                                            o = e[2],
                                            s = e[3];
                                            this._callOnItemsRendered(t, i, o, s)
                                        }
                                        if ("function" == typeof this.props.onScroll) {
                                            var n = this.state,
                                            r = n.scrollDirection,
                                            a = n.scrollOffset,
                                            l = n.scrollUpdateWasRequested;
                                            this._callOnScroll(r, a, l)
                                        }
                                    },
                                    p._getRangeToRender = function () {
                                        var e = this.props,
                                        t = e.itemCount,
                                        i = e.overscanCount,
                                        o = this.state,
                                        s = o.isScrolling,
                                        n = o.scrollDirection,
                                        r = o.scrollOffset;
                                        if (0 === t)
                                            return [0, 0, 0, 0];
                                        var d = a(this.props, r, this._instanceProps),
                                        c = l(this.props, d, r, this._instanceProps),
                                        h = s && "backward" !== n ? 1 : Math.max(1, i),
                                        u = s && "forward" !== n ? 1 : Math.max(1, i);
                                        return [Math.max(0, d - h), Math.max(0, Math.min(t - 1, c + u)), d, c]
                                    },
                                    t
                                }
                                (P.PureComponent),
                                t.defaultProps = {
                                    direction: "ltr",
                                    itemData: void 0,
                                    layout: "vertical",
                                    overscanCount: 2,
                                    useIsScrolling: !1
                                },
                                i
                            }
                            var ne = function (e, t) {
                                e.children,
                                e.direction,
                                e.height,
                                e.layout,
                                e.innerTagName,
                                e.outerTagName,
                                e.width,
                                t.instance
                            },
                            re = function (e, t, i) {
                                var o = e.itemSize,
                                s = i.itemMetadataMap,
                                n = i.lastMeasuredIndex;
                                if (t > n) {
                                    var r = 0;
                                    if (n >= 0) {
                                        var a = s[n];
                                        r = a.offset + a.size
                                    }
                                    for (var l = n + 1; l <= t; l++) {
                                        var d = o(l);
                                        s[l] = {
                                            offset: r,
                                            size: d
                                        },
                                        r += d
                                    }
                                    i.lastMeasuredIndex = t
                                }
                                return s[t]
                            },
                            ae = function (e, t, i, o, s) {
                                for (; o <= i; ) {
                                    var n = o + Math.floor((i - o) / 2),
                                    r = re(e, n, t).offset;
                                    if (r === s)
                                        return n;
                                    r < s ? o = n + 1 : r > s && (i = n - 1)
                                }
                                return o > 0 ? o - 1 : 0
                            },
                            le = function (e, t) {
                                var i = e.itemCount,
                                o = t.itemMetadataMap,
                                s = t.estimatedItemSize,
                                n = t.lastMeasuredIndex,
                                r = 0;
                                if (n >= i && (n = i - 1), n >= 0) {
                                    var a = o[n];
                                    r = a.offset + a.size
                                }
                                return r + (i - n - 1) * s
                            },
                            de = se({
                                getItemOffset: function (e, t, i) {
                                    return re(e, t, i).offset
                                },
                                getItemSize: function (e, t, i) {
                                    return i.itemMetadataMap[t].size
                                },
                                getEstimatedTotalSize: le,
                                getOffsetForIndexAndAlignment: function (e, t, i, o, s) {
                                    var n = e.direction,
                                    r = e.height,
                                    a = e.layout,
                                    l = e.width,
                                    d = "horizontal" === n || "horizontal" === a ? l : r,
                                    c = re(e, t, s),
                                    h = le(e, s),
                                    u = Math.max(0, Math.min(h - d, c.offset)),
                                    p = Math.max(0, c.offset - d + c.size);
                                    switch ("smart" === i && (i = o >= p - d && o <= u + d ? "auto" : "center"), i) {
                                    case "start":
                                        return u;
                                    case "end":
                                        return p;
                                    case "center":
                                        return Math.round(p + (u - p) / 2);
                                    default:
                                        return o >= p && o <= u ? o : o < p ? p : u
                                    }
                                },
                                getStartIndexForOffset: function (e, t, i) {
                                    return function (e, t, i) {
                                        var o = t.itemMetadataMap,
                                        s = t.lastMeasuredIndex;
                                        return (s > 0 ? o[s].offset : 0) >= i ? ae(e, t, s, 0, i) : function (e, t, i, o) {
                                            for (var s = e.itemCount, n = 1; i < s && re(e, i, t).offset < o; )
                                                i += n, n *= 2;
                                            return ae(e, t, Math.min(i, s - 1), Math.floor(i / 2), o)
                                        }
                                        (e, t, Math.max(0, s), i)
                                    }
                                    (e, i, t)
                                },
                                getStopIndexForStartIndex: function (e, t, i, o) {
                                    for (var s = e.direction, n = e.height, r = e.itemCount, a = e.layout, l = e.width, d = "horizontal" === s || "horizontal" === a ? l : n, c = re(e, t, o), h = i + d, u = c.offset + c.size, p = t; p < r - 1 && u < h; )
                                        p++, u += re(e, p, o).size;
                                    return p
                                },
                                initInstanceProps: function (e, t) {
                                    var i = {
                                        itemMetadataMap: {},
                                        estimatedItemSize: e.estimatedItemSize || 50,
                                        lastMeasuredIndex: -1
                                    };
                                    return t.resetAfterIndex = function (e, o) {
                                        void 0 === o && (o = !0),
                                        i.lastMeasuredIndex = Math.min(i.lastMeasuredIndex, e - 1),
                                        t._getItemStyleCache(-1),
                                        o && t.forceUpdate()
                                    },
                                    i
                                },
                                shouldResetStyleCacheOnItemSizeChange: !1,
                                validateProps: function (e) {
                                    e.itemSize
                                }
                            });
                            class ce extends e.React.PureComponent {
                                constructor(i) {
                                    super(i),
                                    this.onDropDownToggle = e => {
                                        e.stopPropagation();
                                        const {
                                            isDropDownOpen: t,
                                            onDropDownOpenChange: i
                                        } = this.props;
                                        if (void 0 !== t)
                                            i && i(!t);
                                        else {
                                            const {
                                                isOpen: e
                                            } = this.state;
                                            this.setState({
                                                isOpen: !e
                                            })
                                        }
                                    },
                                    this.onItemClick = (e, t) => {
                                        const {
                                            isDropDownOpen: i,
                                            onDropDownOpenChange: o
                                        } = this.props;
                                        void 0 !== i ? o && o(!1) : this.setState({
                                            isOpen: !1
                                        }),
                                        t.event(e, t),
                                        e.stopPropagation(),
                                        e.nativeEvent.stopImmediatePropagation()
                                    },
                                    this.onDropDownMouseClick = e => {
                                        e.stopPropagation(),
                                        e.nativeEvent.stopImmediatePropagation()
                                    },
                                    this.getStyle = () => {
                                        var t,
                                        i,
                                        o,
                                        s,
                                        n,
                                        r;
                                        const {
                                            theme: a
                                        } = this.props;
                                        return e.css `
      & button {
        padding: 0;
      }
      .list-toggle-button {
        background: ${null===(o=null===(i=null===(t=a.colors)||void 0===t?void 0:t.palette)||void 0===i?void 0:i.light)||void 0===o?void 0:o[500]};
        border: none;
        &:hover, &[aria-expanded="true"] {
          background: ${null===(r=null===(n=null===(s=a.colors)||void 0===s?void 0:s.palette)||void 0===n?void 0:n.light)||void 0===r?void 0:r[800]};
        }
      }
    `
                                    },
                                    this.state = {
                                        isOpen: !1
                                    };
                                    const {
                                        withBuilderStyle: o
                                    } = i;
                                    this.MyDropdown = o ? o(t.Dropdown) : t.Dropdown,
                                    this.MyDropdownToggle = o ? o(t.DropdownToggle) : t.DropdownToggle,
                                    this.MyDropdownMenu = o ? o(t.DropdownMenu) : t.DropdownMenu,
                                    this.MyDropdownItem = o ? o(t.DropdownItem) : t.DropdownItem
                                }
                                render() {
                                    const {
                                        items: t,
                                        toggleContent: i,
                                        caret: o,
                                        toggleType: s,
                                        menuContent: n,
                                        appMode: r,
                                        modifiers: a,
                                        toggleIsIcon: l,
                                        theme: d,
                                        isDropDownOpen: c,
                                        size: h,
                                        appendToBody: u,
                                        toggleTitle: p,
                                        direction: g,
                                        menuCss: m,
                                        className: f,
                                        showActive: v,
                                        activeLabel: S,
                                        fluid: y
                                    } = this.props;
                                    let {
                                        isOpen: w
                                    } = this.state;
                                    w = void 0 === c ? w : c;
                                    const {
                                        MyDropdown: b,
                                        MyDropdownToggle: x,
                                        MyDropdownMenu: C,
                                        MyDropdownItem: I
                                    } = this;
                                    return (0, e.jsx)(b, {
                                        size: h,
                                        toggle: this.onDropDownToggle,
                                        direction: g,
                                        fluid: y,
                                        isOpen: w && r !== e.AppMode.Design,
                                        className: `my-dropdown ${f}`,
                                        css: this.getStyle()
                                    }, i && (0, e.jsx)(x, {
                                            icon: l,
                                            title: p,
                                            size: h,
                                            type: s,
                                            caret: o,
                                            className: "list-toggle-button"
                                        }, i && i(d)), (0, e.jsx)(C, {
                                            appendToBody: u,
                                            modifiers: a,
                                            css: m && m(d)
                                        }, n ? n(d) : t && t.asMutable().map(((t, i) => !t.hide && (0, e.jsx)(I, {
                                                        key: i,
                                                        className: "no-user-select",
                                                        title: t.label,
                                                        active: v && t.label === S,
                                                        onClick: e => this.onItemClick(e, t)
                                                    }, t.label)))))
                                }
                            }
                            var he = a(15506),
                            ue = a(81411),
                            pe = a.n(ue);
                            const ge = i => {
                                const {
                                    className: o
                                } = i,
                                s = function (e, t) {
                                    var i = {};
                                    for (var o in e)
                                        Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (i[o] = e[o]);
                                    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                                        var s = 0;
                                        for (o = Object.getOwnPropertySymbols(e); s < o.length; s++)
                                            t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (i[o[s]] = e[o[s]])
                                    }
                                    return i
                                }
                                (i, ["className"]),
                                n = (0, e.classNames)("jimu-icon-component", o);
                                return e.React.createElement(t.Icon, Object.assign({
                                        className: n,
                                        icon: pe()
                                    }, s))
                            },
                            me = [0, 5],
                            fe = [{
                                    name: "flip",
                                    options: {
                                        boundary: document.body,
                                        fallbackPlacements: ["bottom-start", "right-end", "top-start", "left-start"]
                                    }
                                }
                            ];
                            class ve extends e.React.PureComponent {
                                constructor(t) {
                                    super(t),
                                    this.formatMessage = (e, t) => this.props.formatMessage(e, t),
                                    this.onPopperToggle = e => {
                                        const {
                                            filter: t
                                        } = this.props, {
                                            isOpen: i
                                        } = this.state;
                                        i || this.setState({
                                            currentFilter: t
                                        }),
                                        this.setState({
                                            isOpen: !i
                                        })
                                    },
                                    this.onItemClick = (e, t) => {
                                        this.setState({
                                            isOpen: !1
                                        }),
                                        e.stopPropagation(),
                                        e.nativeEvent.stopImmediatePropagation()
                                    },
                                    this.handleFilterChange = e => {
                                        this.setState({
                                            currentFilter: e
                                        })
                                    },
                                    this.handleApplyClick = e => {
                                        const {
                                            currentFilter: t
                                        } = this.state, {
                                            handleFilterApplyChange: i,
                                            handleFilterChange: o
                                        } = this.props;
                                        o(t),
                                        i(!0),
                                        this.setState({
                                            isOpen: !1
                                        })
                                    },
                                    this.handleClearClick = e => {
                                        const {
                                            handleFilterApplyChange: t
                                        } = this.props;
                                        t(!1),
                                        this.setState({
                                            isOpen: !1
                                        })
                                    },
                                    this.getStyle = () => {
                                        const {
                                            theme: t
                                        } = this.props;
                                        return e.css `
      position: relative;
      .dot {
        position: absolute;
        width: 6px;
        height: 6px;
        right: -2px;
        top: 0px;
        .dot-bottom {
          width: 6px;
          height: 6px;
          background-color: transparent;
          .dot-top {
            width: 4px;
            height: 4px;
            background-color: ${t.colors.palette.dark[600]};
          }
        }
      }
      :hover {
        .dot-top {
          background-color: ${t.colors.palette.primary[500]};
        }
      }
      & .active {
        .dot-top {
          background-color: ${t.colors.white};
        }
        :hover {
          .dot-top {
            background-color: ${t.colors.white};
          }
        }
      }
    `
                                    },
                                    this.getPopperStyle = () => e.css `
      .filter-button-con button {
        max-width: ${e.polished.rem(100)};
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .clear-button {
        margin-left: ${e.polished.rem(19)};
      }
    `,
                                    this.toggleRef = e.React.createRef(),
                                    this.state = {
                                        isOpen: !1,
                                        currentFilter: t.filter
                                    }
                                }
                                componentDidUpdate(t) {
                                    const {
                                        filter: i,
                                        appMode: o
                                    } = this.props;
                                    i !== t.filter && this.setState({
                                        currentFilter: i
                                    }),
                                    o !== t.appMode && o === e.AppMode.Design && this.setState({
                                        isOpen: !1
                                    })
                                }
                                render() {
                                    const {
                                        filter: i,
                                        selectedDs: o,
                                        widgetId: s,
                                        title: n,
                                        applied: r
                                    } = this.props, {
                                        isOpen: a,
                                        currentFilter: l
                                    } = this.state,
                                    d = r && (null == i ? void 0 : i.sql) === (null == l ? void 0 : l.sql);
                                    return (0, e.jsx)(P.Fragment, null, (0, e.jsx)(t.Button, {
                                            css: this.getStyle(),
                                            size: "sm",
                                            type: "tertiary",
                                            icon: !0,
                                            title: n,
                                            ref: this.toggleRef,
                                            onClick: this.onPopperToggle
                                        }, (0, e.jsx)(ge, {
                                                size: 16
                                            }), r && (0, e.jsx)("div", {
                                                className: "dot align-items-center justify-content-center"
                                            }, (0, e.jsx)("div", {
                                                    className: "dot-bottom rounded-circle"
                                                }, (0, e.jsx)("div", {
                                                        className: "dot-top rounded-circle"
                                                    })))), (0, e.jsx)(t.Popper, {
                                            placement: "bottom-start",
                                            reference: this.toggleRef.current,
                                            offset: me,
                                            toggle: this.onPopperToggle,
                                            css: this.getPopperStyle(),
                                            open: a,
                                            modifiers: fe
                                        }, (0, e.jsx)("div", {
                                                style: {
                                                    padding: e.polished.rem(20),
                                                    width: e.polished.rem(250)
                                                }
                                            }, (0, e.jsx)("div", null, (0, e.jsx)(he.SqlExpressionRuntime, {
                                                        widgetId: s,
                                                        dataSource: o,
                                                        expression: l,
                                                        onChange: this.handleFilterChange
                                                    })), (0, e.jsx)("div", {
                                                    className: "d-flex w-100 mt-3 filter-button-con"
                                                }, (0, e.jsx)(t.Button, {
                                                        disabled: d,
                                                        onClick: this.handleApplyClick,
                                                        type: "primary",
                                                        title: this.formatMessage("apply")
                                                    }, this.formatMessage("apply")), (0, e.jsx)(t.Button, {
                                                        disabled: !r,
                                                        onClick: this.handleClearClick,
                                                        title: this.formatMessage("clear"),
                                                        className: "clear-button"
                                                    }, this.formatMessage("clear"))))))
                                }
                            }
                            var Se = a(11407),
                            ye = a.n(Se);
                            const we = i => {
                                const {
                                    className: o
                                } = i,
                                s = function (e, t) {
                                    var i = {};
                                    for (var o in e)
                                        Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (i[o] = e[o]);
                                    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                                        var s = 0;
                                        for (o = Object.getOwnPropertySymbols(e); s < o.length; s++)
                                            t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (i[o[s]] = e[o[s]])
                                    }
                                    return i
                                }
                                (i, ["className"]),
                                n = (0, e.classNames)("jimu-icon-component", o);
                                return e.React.createElement(t.Icon, Object.assign({
                                        className: n,
                                        icon: ye()
                                    }, s))
                            };
                            var be = a(96009),
                            xe = a.n(be);
                            const Ce = i => {
                                const {
                                    className: o
                                } = i,
                                s = function (e, t) {
                                    var i = {};
                                    for (var o in e)
                                        Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (i[o] = e[o]);
                                    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                                        var s = 0;
                                        for (o = Object.getOwnPropertySymbols(e); s < o.length; s++)
                                            t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (i[o[s]] = e[o[s]])
                                    }
                                    return i
                                }
                                (i, ["className"]),
                                n = (0, e.classNames)("jimu-icon-component", o);
                                return e.React.createElement(t.Icon, Object.assign({
                                        className: n,
                                        icon: xe()
                                    }, s))
                            };
                            var Ie = a(3273),
                            Me = a.n(Ie);
                            const Re = i => {
                                const {
                                    className: o
                                } = i,
                                s = function (e, t) {
                                    var i = {};
                                    for (var o in e)
                                        Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (i[o] = e[o]);
                                    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                                        var s = 0;
                                        for (o = Object.getOwnPropertySymbols(e); s < o.length; s++)
                                            t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (i[o[s]] = e[o[s]])
                                    }
                                    return i
                                }
                                (i, ["className"]),
                                n = (0, e.classNames)("jimu-icon-component", o);
                                return e.React.createElement(t.Icon, Object.assign({
                                        className: n,
                                        icon: Me()
                                    }, s))
                            };
                            var Oe = a(59788),
                            Te = a.n(Oe);
                            const Le = i => {
                                const {
                                    className: o
                                } = i,
                                s = function (e, t) {
                                    var i = {};
                                    for (var o in e)
                                        Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (i[o] = e[o]);
                                    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                                        var s = 0;
                                        for (o = Object.getOwnPropertySymbols(e); s < o.length; s++)
                                            t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (i[o[s]] = e[o[s]])
                                    }
                                    return i
                                }
                                (i, ["className"]),
                                n = (0, e.classNames)("jimu-icon-component", o);
                                return e.React.createElement(t.Icon, Object.assign({
                                        className: n,
                                        icon: Te()
                                    }, s))
                            };
                            function je(i) {
                                const {
                                    isRTL: o,
                                    totalPage: s,
                                    pageStyle: r,
                                    direction: a,
                                    currentPage: l,
                                    scrollStatus: c,
                                    isScrollEnd: h,
                                    isEditing: u,
                                    showLoading: p,
                                    handleScrollDown: g,
                                    handleScrollUp: m,
                                    handleSwitchPage: f,
                                    formatMessage: v
                                } = i;
                                return e.React.createElement("div", {
                                    className: "bottom-tools w-100 d-flex align-items-center justify-content-center pl-2 pr-2"
                                }, r === n.MultiPage ? e.React.createElement(t.Pagination, {
                                        size: "sm",
                                        totalPage: s,
                                        current: l,
                                        onChangePage: f,
                                        disabled: p
                                    }) : e.React.createElement("div", {
                                        className: "d-flex scroll-navigator"
                                    }, e.React.createElement(t.Button, {
                                            title: v("previous"),
                                            disabled: "start" === c,
                                            type: "secondary",
                                            size: "sm",
                                            icon: !0,
                                            onClick: m
                                        }, a === d.Horizon ? e.React.createElement(we, {
                                                size: 12
                                            }) : e.React.createElement(Ce, {
                                                size: 12
                                            })), e.React.createElement(t.Button, {
                                            title: v("next"),
                                            disabled: "end" === c || h,
                                            type: "secondary",
                                            size: "sm",
                                            style: o ? {
                                                marginRight: e.polished.rem(10)
                                            }
                                             : {
                                                marginLeft: e.polished.rem(10)
                                            },
                                            icon: !0,
                                            onClick: g
                                        }, a === d.Horizon ? e.React.createElement(Re, null) : e.React.createElement(Le, null))), window.jimuConfig.isInBuilder && u && e.React.createElement("div", {
                                        className: "editing-mask-bottom-tool"
                                    }))
                            }
                            var ze = function (e, t, i, o) {
                                return new(i || (i = Promise))((function (s, n) {
                                        function r(e) {
                                            try {
                                                l(o.next(e))
                                            } catch (e) {
                                                n(e)
                                            }
                                        }
                                        function a(e) {
                                            try {
                                                l(o.throw(e))
                                            } catch (e) {
                                                n(e)
                                            }
                                        }
                                        function l(e) {
                                            var t;
                                            e.done ? s(e.value) : (t = e.value, t instanceof i ? t : new i((function (e) {
                                                        e(t)
                                                    }))).then(r, a)
                                        }
                                        l((o = o.apply(e, t || [])).next())
                                    }))
                            };
                            const De = function (t, i) {
                                var o,
                                s,
                                n,
                                r;
                                return ze(this, void 0, void 0, (function  * () {
                                        let a;
                                        const l = null === (r = null === (n = null === (s = null === (o = (0, e.getAppStore)().getState()) || void 0 === o ? void 0 : o.appConfig) || void 0 === s ? void 0 : s.widgets[i]) || void 0 === n ? void 0 : n.useDataSources) || void 0 === r ? void 0 : r[0],
                                        d = e.DataSourceManager.getInstance();
                                        return t && l && (a = d.createDataSourceByUseDataSource(Object.assign({}, l, {
                                                        mainDataSourceId: l.mainDataSourceId
                                                    }), "localId")),
                                        yield Promise.resolve(a)
                                    }))
                            };
                            class ke extends e.BaseVersionManager {
                                constructor() {
                                    super(...arguments),
                                    this.versions = [{
                                            version: "1.1.0",
                                            description: "",
                                            upgrader: (e, t) => ze(this, void 0, void 0, (function  * () {
                                                    const i = e.filter;
                                                    return yield De(i, t).then((t => {
                                                            let o = e;
                                                            const s = i ? (0, he.updateSQLExpressionByVersion)(i, "1.1.0", t) : null;
                                                            return o = o.set("filter", s),
                                                            o
                                                        }))
                                                }))
                                        }, {
                                            version: "1.5.0",
                                            description: "1.5.0",
                                            upgrader: (e, t) => ze(this, void 0, void 0, (function  * () {
                                                    const i = e.filter;
                                                    return yield De(i, t).then((t => {
                                                            let i = e;
                                                            if ("boolean" != typeof(null == e ? void 0 : e.isShowAutoRefresh)) {
                                                                const e = !!(o = t) && ((null === (s = o) || void 0 === s ? void 0 : s.getAutoRefreshInterval()) || 0) > 0;
                                                                i = i.set("isShowAutoRefresh", e)
                                                            }
                                                            var o,
                                                            s;
                                                            return i
                                                        }))
                                                }))
                                        }
                                    ]
                                }
                            }
                            const Pe = new ke;
                            function Ee(e, t) {
                                return Math.abs(e - t) < 1e-4
                            }
                            function Ne(e) {
                                var t;
                                const {
                                    config: i,
                                    builderStatus: o,
                                    browserSizeMode: s
                                } = e;
                                let n = i.cardConfigs[o];
                                n && n.cardSize || (n = i.cardConfigs[g.Regular]);
                                let r = null === (t = null == n ? void 0 : n.cardSize) || void 0 === t ? void 0 : t[s];
                                return r || (r = n.cardSize[Object.keys(n.cardSize)[0]]),
                                null == r ? void 0 : r.asMutable({
                                    deep: !0
                                })
                            }
                            function Ae(e, t, i) {
                                const o = Ne(i), {
                                    config: s,
                                    isHeightAuto: r,
                                    isWidthAuto: a
                                } = i;
                                let l;
                                if (s.pageStyle === n.Scroll) {
                                    if (!e)
                                        return 0;
                                    if (s.direction === d.Vertical) {
                                        if (0 === e.height)
                                            return 0;
                                        r && (t = document.body.scrollHeight),
                                        l = Math.ceil(t / (o.height + s.space)) + 1
                                    } else {
                                        if (0 === e.width)
                                            return 0;
                                        let t = e.width;
                                        a && (t = document.body.scrollWidth),
                                        l = Math.ceil(t / (o.width + s.space)) + 1
                                    }
                                    s.navigatorOpen && (l = Math.max(l, s.scrollStep))
                                } else
                                    l = s.itemsPerPage;
                                return l
                            }
                            function $e(e, t) {
                                let i = 40;
                                return e && (i = e.clientHeight),
                                i = t ? i : 0,
                                i
                            }
                            function Be(e, t, i) {
                                const o = i ? 42 : 0;
                                if (!e)
                                    return 0;
                                const s = e.height - o - t;
                                return s < 0 ? 0 : s
                            }
                            function He(e, t) {
                                const {
                                    config: i
                                } = e, {
                                    datasource: o
                                } = t;
                                return !(!o || i.pageStyle === n.Scroll && !i.navigatorOpen)
                            }
                            function Fe(e) {
                                return _e(e) || Ue(e)
                            }
                            function _e(e) {
                                return We(e) || Qe(e) || Ge(e) || Ve(e) || qe(e)
                            }
                            function Ue(t) {
                                var i,
                                o,
                                s;
                                const {
                                    id: n
                                } = t,
                                r = null === (o = null === (i = (0, e.getAppStore)()) || void 0 === i ? void 0 : i.getState()) || void 0 === o ? void 0 : o.appConfig,
                                a = null === (s = null == r ? void 0 : r.widgets) || void 0 === s ? void 0 : s[n];
                                return (void 0 === (null == a ? void 0 : a.enableDataAction) || (null == a ? void 0 : a.enableDataAction)) && function (e) {
                                    const {
                                        useDataSources: t
                                    } = e;
                                    return !!t && !!t[0]
                                }
                                (t)
                            }
                            function We(e) {
                                const {
                                    config: t
                                } = e;
                                if (!t.sortOpen || !t.sorts || t.sorts.length < 1)
                                    return !1;
                                const i = t.sorts;
                                let o = !1;
                                return i.some((e => (e.rule && e.rule.some((e => (e && e.jimuFieldName && (o = !0), o))), o))),
                                o
                            }
                            function qe(e) {
                                const {
                                    config: t
                                } = e;
                                return t.searchOpen && t.searchFields && "" !== t.searchFields
                            }
                            function Ve(e) {
                                const {
                                    config: t
                                } = e;
                                return t.filterOpen && !!t.filter
                            }
                            function Qe(e) {
                                const {
                                    config: t
                                } = e;
                                return t.showSelectedOnlyOpen && t.cardConfigs[g.Selected].selectionMode !== s.None
                            }
                            function Ge(e) {
                                const {
                                    config: t
                                } = e;
                                return t.showClearSelected && t.cardConfigs[g.Selected].selectionMode !== s.None
                            }
                            var Ye = a(65283),
                            Ke = a.n(Ye);
                            const Xe = i => {
                                const {
                                    className: o
                                } = i,
                                s = function (e, t) {
                                    var i = {};
                                    for (var o in e)
                                        Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (i[o] = e[o]);
                                    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                                        var s = 0;
                                        for (o = Object.getOwnPropertySymbols(e); s < o.length; s++)
                                            t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (i[o[s]] = e[o[s]])
                                    }
                                    return i
                                }
                                (i, ["className"]),
                                n = (0, e.classNames)("jimu-icon-component", o);
                                return e.React.createElement(t.Icon, Object.assign({
                                        className: n,
                                        icon: Ke()
                                    }, s))
                            };
                            var Ze = a(87830),
                            Je = a.n(Ze);
                            const et = i => {
                                const {
                                    className: o
                                } = i,
                                s = function (e, t) {
                                    var i = {};
                                    for (var o in e)
                                        Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (i[o] = e[o]);
                                    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                                        var s = 0;
                                        for (o = Object.getOwnPropertySymbols(e); s < o.length; s++)
                                            t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (i[o[s]] = e[o[s]])
                                    }
                                    return i
                                }
                                (i, ["className"]),
                                n = (0, e.classNames)("jimu-icon-component", o);
                                return e.React.createElement(t.Icon, Object.assign({
                                        className: n,
                                        icon: Je()
                                    }, s))
                            };
                            var tt = a(43036),
                            it = a.n(tt);
                            const ot = i => {
                                const {
                                    className: o
                                } = i,
                                s = function (e, t) {
                                    var i = {};
                                    for (var o in e)
                                        Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (i[o] = e[o]);
                                    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                                        var s = 0;
                                        for (o = Object.getOwnPropertySymbols(e); s < o.length; s++)
                                            t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (i[o[s]] = e[o[s]])
                                    }
                                    return i
                                }
                                (i, ["className"]),
                                n = (0, e.classNames)("jimu-icon-component", o);
                                return e.React.createElement(t.Icon, Object.assign({
                                        className: n,
                                        icon: it()
                                    }, s))
                            };
                            var st = a(79964),
                            nt = a.n(st);
                            const rt = i => {
                                const {
                                    className: o
                                } = i,
                                s = function (e, t) {
                                    var i = {};
                                    for (var o in e)
                                        Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (i[o] = e[o]);
                                    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                                        var s = 0;
                                        for (o = Object.getOwnPropertySymbols(e); s < o.length; s++)
                                            t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (i[o[s]] = e[o[s]])
                                    }
                                    return i
                                }
                                (i, ["className"]),
                                n = (0, e.classNames)("jimu-icon-component", o);
                                return e.React.createElement(t.Icon, Object.assign({
                                        className: n,
                                        icon: nt()
                                    }, s))
                            };
                            const at = [{
                                    fake: !0
                                }, {
                                    fake: !0
                                }, {
                                    fake: !0
                                }
                            ],
                            lt = Object.assign({}, {
                                _widgetLabel: "List",
                                _widgetDescription: "A widget to display data in a list view.",
                                _action_filter_label: "Filter",
                                _layout_REGULAR_label: "Regular",
                                _layout_HOVER_label: "Hover",
                                _layout_SELECTED_label: "Selected",
                                applyTo: "Apply to {status}",
                                listLoading: "Loading",
                                pleaseSelect: "Please select",
                                listNoData: "No data",
                                selectSortFields: "Select sorting fields",
                                clearFilter: "Clear filter",
                                isolate: "Isolate",
                                linkedToAnd: "Linked to {where1} and {where2}",
                                linkedTo: "Linked to {where}",
                                placeHolderTip: "Please select a list template.",
                                showSelected: "Show selected",
                                clearSelected: "Clear selected",
                                listSorting: "Sorting",
                                listSort: "Sort",
                                guideStep2Title: "Template",
                                guideStep2Content: "Click on a template and click start.",
                                guideStep3Title: "Data",
                                guideStep3Content: "Click on select data to add a data source.",
                                guideStep4Title: "Add new data",
                                guideStep4Content: "Click add new data to select a web map.",
                                guideStep5Title: "Select data",
                                guideStep5Content: "Click the feature layer in the select data panel and close the panel.",
                                guideStep6Title: "Data",
                                guideStep6Content: "Specifies the data source, allows you to filter the data and limit the number of features that appear in the list.",
                                guideStep7Title: "Arrangement",
                                guideStep7Content: "Click the expand icon to explore the Arrangement section. In here, it allows you to define the direction, height, spacing, and paging style for your list.",
                                guideStep8Title: "States",
                                guideStep8Content: "Click the expand icon to explore the available States. In this section, it provides a visual representation to communicate the state of the list items. There are three states: regular, selected, and hover. By default, the selected state is always on.",
                                guideStep9Title: "Tools",
                                guideStep9Content: "Click the expand icon to explore the available Tools. In here, you can include search, sort, filter, and show selected tools in your list.",
                                guideStep10Title: "Select image",
                                guideStep10Content: "Click the image widget to configure it in the content panel.",
                                guideStep10Title2: "Image settings",
                                guideStep10Content2: "Allows you to select the image source and other settings for your widget.",
                                guideStep11Title: "Select text",
                                guideStep11Content: "Click the text widget to add attributes in the widget toolbar.",
                                guideStep11Title2: "Text settings",
                                guideStep11Content2: "Provides the configurations and style, including adding dynamic content from the widget toolbar. ",
                                guideStep12Title: "End of tour",
                                guideStep12Content: "Add other widgets to enhance your experience.",
                                clearSearch: "Clear search",
                                minimize: "Minimize",
                                topToolBack: "Back",
                                showAllListRecords: "Show all records",
                                listDataActionLable: "{layer} list selection",
                                searchResult: "Search result"
                            }, t.defaultMessages);
                            class dt extends e.React.PureComponent {
                                constructor(o) {
                                    super(o),
                                    this.isFirstLoad = !0,
                                    this.isHasScrolled = !1,
                                    this.isHasRenderList = !1,
                                    this.isHasPublishMessageAction = !1,
                                    this.updateWidgetRectTimeout = void 0,
                                    this.getBodySize = () => {
                                        this.bodySize = {
                                            scrollWidth: document.documentElement.scrollWidth,
                                            scrollHeight: document.documentElement.scrollHeight,
                                            clientWidth: document.documentElement.clientWidth,
                                            clientHeight: document.documentElement.clientHeight
                                        }
                                    },
                                    this.updateListInBuilder = (e, t) => {
                                        const {
                                            config: i
                                        } = this.props;
                                        if (!window.jimuConfig.isInBuilder)
                                            return !1;
                                        const o = Ne(this.props);
                                        let s = this.layoutPropertiesChange(e);
                                        this.updateScrollContentSize(e.config),
                                        this.pageTypeChange(e),
                                        this.useDatasourcesChange(e),
                                        s = this.listDivSizeChange(e, t, o, s),
                                        s && this.updateCardToolPosition(),
                                        this.listSortChange(e),
                                        this.listFilterChange(e),
                                        i.cardConfigs[g.Selected].selectionMode !== e.config.cardConfigs[g.Selected].selectionMode && this.selectRecords([])
                                    },
                                    this.layoutPropertiesChange = e => {
                                        const {
                                            config: t,
                                            top: i,
                                            left: o
                                        } = this.props;
                                        let s = !1;
                                        if (!window.jimuConfig.isInBuilder)
                                            return !1;
                                        let n = !1;
                                        const r = Ne(this.props),
                                        a = Ne(e);
                                        this.updateScrollContentSize(e.config);
                                        const l = i !== e.top || o !== e.left,
                                        c = t.direction !== e.config.direction,
                                        h = (u = a, p = r, !(t.direction === d.Horizon ? Ee(u.width, p.width) : Ee(u.height, p.height)));
                                        var u,
                                        p;
                                        if (c || h || l)
                                            if (s = !0, h) {
                                                const e = {
                                                    currentCardSize: r
                                                };
                                                n = !0,
                                                this.setState(e, (() => {
                                                        n && this.refreshList()
                                                    }))
                                            } else
                                                c && this.handleResizeCard(this.state.currentCardSize, !0, !1, !1, !0);
                                        return n || Ee(t.space, e.config.space) && t.direction === e.config.direction || (n = !0, this.refreshList()),
                                        s
                                    },
                                    this.listDivSizeChange = (e, t, o, s) => {
                                        var n;
                                        const {
                                            config: r,
                                            isHeightAuto: a
                                        } = this.props, {
                                            listDivSize: l
                                        } = this.state,
                                        c = He(this.props, this.state),
                                        h = He(e, t),
                                        u = Fe(this.props),
                                        p = Fe(e);
                                        if (c !== h || u !== p)
                                            if (a)
                                                s = !0;
                                            else if (r.direction === d.Horizon) {
                                                let e = (null === (n = this.state.widgetRect) || void 0 === n ? void 0 : n.height) || (null == l ? void 0 : l.clientHeight);
                                                if (e -= $e(this.paginatorDiv.current, c) + 42 * (u ? 1 : 0), e < i)
                                                    return;
                                                const t = {
                                                    height: e,
                                                    width: o.width
                                                };
                                                this.handleResizeCard(t, !0, !1, !1, !0)
                                            }
                                        return s
                                    },
                                    this.appModeChange = t => {
                                        const {
                                            appMode: i,
                                            selectionIsSelf: o,
                                            selectionStatus: s,
                                            builderStatus: n
                                        } = this.props;
                                        t.appMode !== i && (i === e.AppMode.Run ? this.editBuilderAndSettingStatus(g.Regular) : (s !== n && (s ? this.editBuilderAndSettingStatus(s) : o || this.editBuilderAndSettingStatus(g.Regular)), this.setState({
                                                    showSelectionOnly: !1,
                                                    searchText: void 0,
                                                    filterApplied: !1,
                                                    hoverIndex: -1
                                                }, (() => {
                                                        this.scrollToIndex(0)
                                                    }))))
                                    },
                                    this.pageTypeChange = e => {
                                        const {
                                            pageStyle: t
                                        } = this.props.config;
                                        t !== e.config.pageStyle && this.setState({
                                            page: 1
                                        })
                                    },
                                    this.useDatasourcesChange = e => {
                                        const {
                                            useDataSources: t
                                        } = this.props,
                                        i = e.useDataSources;
                                        if (t && t[0]) {
                                            const e = i && i[0];
                                            e && e.dataSourceId === t[0].dataSourceId || this.setState({
                                                page: 1
                                            })
                                        } else
                                            this.setState({
                                                datasource: void 0
                                            })
                                    },
                                    this.listSortChange = e => {
                                        const {
                                            config: t
                                        } = this.props;
                                        t.sortOpen && t.sorts !== e.config.sorts && this.setState({
                                            sortOptionName: void 0
                                        })
                                    },
                                    this.listFilterChange = e => {
                                        const {
                                            config: t
                                        } = this.props;
                                        t.filterOpen && t.filter !== e.config.filter && this.setState({
                                            currentFilter: void 0,
                                            filterApplied: !1
                                        })
                                    },
                                    this.setSelectionStatus = () => {
                                        const {
                                            id: t,
                                            selectionIsInSelf: i
                                        } = this.props;
                                        this.props.dispatch(e.appActions.widgetStatePropChange(t, "selectionIsInSelf", i))
                                    },
                                    this.updateScrollContentSize = e => {
                                        const {
                                            config: t
                                        } = this.props;
                                        t.direction === e.direction && t.space === e.space || this.setScrollContentSize()
                                    },
                                    this.scrollToSelectedItems = e => {
                                        const t = e.getSelectedRecordIds();
                                        if (this.isMySelected)
                                            return this.isMySelected = !1, void(this.lastSelectedRecordIds = t || []);
                                        if (t && t.length > 0) {
                                            let i = !0;
                                            if (this.lastSelectedRecordIds && t.length === this.lastSelectedRecordIds.length ? t.some((e => !this.lastSelectedRecordIds.find((t => t === e)) && (i = !1, !0))) : i = !1, !i || this.needScroll) {
                                                let i = -1;
                                                if (this.records && this.records.find(((e, o) => {
                                                            var s;
                                                            return (null === (s = e.getId) || void 0 === s ? void 0 : s.call(e)) === t[0] && (i = o, !0)
                                                        })), -1 === i) {
                                                    const o = e.getRecords();
                                                    if (o && o.find(((e, o) => {
                                                                var s;
                                                                return (null === (s = e.getId) || void 0 === s ? void 0 : s.call(e)) === t[0] && (i = o, !0)
                                                            })), i > -1) {
                                                        const e = Math.ceil((i + 1) / this.getPageSize());
                                                        this.needScroll = !0,
                                                        this.setState({
                                                            page: e
                                                        })
                                                    }
                                                } else
                                                    this.scrollToIndex(i), this.needScroll = !1
                                            }
                                        }
                                        this.lastSelectedRecordIds = t || []
                                    },
                                    this.onDSCreated = e => {
										//debugger;
										if(e.belongToDataSource){
											
											if(e.belongToDataSource.layerDefinition.name == "eventTypes"){
												
												var dSources = e.dataSourceManager.dataSources;
														for (const property in dSources) {
														  if(dSources[property].dataSourceJson){
															
																if(dSources[property].dataSourceJson.sourceLabel){
																	if(dSources[property].dataSourceJson.sourceLabel == "Event Distribution and Hot/Cold Spots"){
																		var layers1 = dSources[property].map.allLayers._items;
																		for(var efg=0;efg<layers1.length;efg++){
																			if(layers1[efg].title == "events (all types)" || layers1[efg].title  == "hotspot analysis (all event types)"){
																				try{
																				dSources[property].getDataSourceByLayer(layers1[efg].id).updateQueryParams({where:"1=1"});
																				}catch(e){
																					
																				}
																				
																			}else{
																				try{
																				dSources[property].getDataSourceByLayer(layers1[efg].id).updateQueryParams({where:"1=2"});
																				}catch(e){
																					
																				}
																			}
																			
																		}
																		
																	
																		
																	}
																	
																}
																
															}
														}
												
												
											}
										}
										
										if(e.fetchedSchema){
											if(e.fetchedSchema.label == "Militarygroups"){
												var children = e.parentDataSource.getChildDataSources();
												for(var lmn=0;lmn<children.length;lmn++){
													if(children[lmn].fetchedSchema){
														if(children[lmn].fetchedSchema.label == "Mil bases"){
															children[lmn].updateQueryParams({where:"1=2"});
															
														}
														
													}
													
												}
												//debugger;
											}
										}
										//debugger;
                                        this.setState({
                                            datasource: e
                                        })
                                    },
                                    this.onResize = (e, t) => {
                                        const o = {
                                            width: e,
                                            height: t
                                        }, {
                                            config: s
                                        } = this.props, {
                                            isResizingCard: n
                                        } = this.state;
                                        if (n)
                                            return;
                                        const r = He(this.props, this.state),
                                        a = Be(o, $e(this.paginatorDiv.current, r), Fe(this.props)),
                                        l = this.state.currentCardSize,
                                        c = {
                                            width: l.width,
                                            height: l.height
                                        };
                                        let h = !1;
                                        if (s.lockItemRatio) {
                                            const t = c.width / c.height;
                                            s.direction === d.Horizon ? (c.height = a, c.width = a * t, Ee(c.width, l.width) || (h = !0)) : (c.height = e / t, c.width = e, Ee(c.height, l.height) || (h = !0))
                                        } else
                                            s.direction === d.Horizon ? c.height = a : c.width = e;
                                        c.width < i || c.height < i || (this.setState({
                                                widgetRect: o,
                                                currentCardSize: c
                                            }, (() => {
                                                    h && this.refreshList()
                                                })), this.resizeTimeout && (clearTimeout(this.resizeTimeout), this.resizeTimeout = void 0), s.lockItemRatio && (this.resizeTimeout = setTimeout((() => {
                                                            this.handleResizeCard(c, !0, !1, !1, !0)
                                                        }), 500)), this.updateCardToolPosition(), this.setListDivSize())
                                    },
                                    this.updateCardToolPosition = () => {
                                        const {
                                            selectionIsSelf: e
                                        } = this.props, {
                                            hideCardTool: t
                                        } = this.state;
                                        e && !t && (this.setState({
                                                hideCardTool: !0
                                            }), this.updateCardToolTimeout && (clearTimeout(this.updateCardToolTimeout), this.updateCardToolTimeout = void 0), this.updateCardToolTimeout = setTimeout((() => {
                                                        this.setState({
                                                            hideCardTool: !1
                                                        })
                                                    }), 500))
                                    },
                                    this.refreshList = (e = !0) => {
										//debugger;
                                        this.listRef.current && this.listRef.current.resetAfterIndex(0, e)
                                    },
                                    this.isDsConfigured = () => {
                                        const {
                                            useDataSources: e
                                        } = this.props;
                                        return !!e && !!e[0]
                                    },
                                    this.selectRecords = t => {
                                        const {
                                            datasource: i
                                        } = this.state;
                                        if (i)
                                            if (e.MessageManager.getInstance().publishMessage(new e.DataRecordsSelectionChangeMessage(this.props.id, t)), t) {
                                                this.isMySelected = !0,
                                                this.isHasPublishMessageAction = !0,
                                                i.selectRecordsByIds(t.map((e => e.getId())));
                                                const e = this.getOutputDs();
                                                e && e.selectRecordsByIds(t.map((e => e.getId())))
												
												
												// Added on 30-01-2022 for enabling filter of MG based on event selection 
												//debugger;
												
												//var item = i;
												
												var event_types_all = ["Combat operations", "Military exercise", "Sighting", "Non-combat operations", "ORBAT change", "Private military forces"];
												var hotspot_layers = ["hotspot analysis (Combat Operations)", "hotspot analysis (military exercise)", "hotspot analysis (Sighting)", "hotspot analysis (Non Combat Operations)", "hotspot analysis (Orbat Change)", "hotspot analysis (private military forces)"]
												var events_layers = ["events (Combat Operations)", "events (Military Exercise)", "events (Sightings)", "events (Non Combat Operations)", "events (Orbat Change)", "events (Private Military Forces)"]
												
												
												
												if(i.belongToDataSource){
													if(i.belongToDataSource.layerDefinition.name == "eventTypes"){
														var event_types = t.map((e => e.feature.attributes.Type));
														debugger;
														if(event_types.length !== 6){
															var hotspot_layers_selected = [];
															var events_layers_selected = [];
															for(var jkl=0;jkl<event_types.length;jkl++){
																hotspot_layers_selected.push(hotspot_layers[event_types_all.indexOf(event_types[jkl])])
																events_layers_selected.push(events_layers[event_types_all.indexOf(event_types[jkl])])
																
															}
														var dSources = i.dataSourceManager.dataSources;
														for (const property in dSources) {
														  if(dSources[property].dataSourceJson){
															
																if(dSources[property].dataSourceJson.sourceLabel){
																	if(dSources[property].dataSourceJson.sourceLabel == "Event Distribution and Hot/Cold Spots"){
																		var layers1 = dSources[property].map.allLayers._items;
																		for(var efg=0;efg<layers1.length;efg++){
																			if(hotspot_layers_selected.indexOf(layers1[efg].title) !== -1 || events_layers_selected.indexOf(layers1[efg].title) !== -1){
																				try{
																				dSources[property].getDataSourceByLayer(layers1[efg].id).updateQueryParams({where:"1=1"});
																				}catch(e){
																					
																				}
																				
																			}else{
																				try{
																				dSources[property].getDataSourceByLayer(layers1[efg].id).updateQueryParams({where:"1=2"});
																				}catch(e){
																					
																				}
																			}
																			
																		}
																		
																	
																		
																	}
																	
																}
																
															}
														}
													}else{
														var dSources = i.dataSourceManager.dataSources;
														for (const property in dSources) {
														  if(dSources[property].dataSourceJson){
															
																if(dSources[property].dataSourceJson.sourceLabel){
																	if(dSources[property].dataSourceJson.sourceLabel == "Event Distribution and Hot/Cold Spots"){
																		var layers1 = dSources[property].map.allLayers._items;
																		for(var efg=0;efg<layers1.length;efg++){
																			if(layers1[efg].title == "events (all types)" || layers1[efg].title  == "hotspot analysis (all event types)"){
																				try{
																				dSources[property].getDataSourceByLayer(layers1[efg].id).updateQueryParams({where:"1=1"});
																				}catch(e){
																					
																				}
																				
																			}else{
																				try{
																				dSources[property].getDataSourceByLayer(layers1[efg].id).updateQueryParams({where:"1=2"});
																				}catch(e){
																					
																				}
																			}
																			
																		}
																		
																	
																		
																	}
																	
																}
																
															}
														}
														
													}
														
														
													}
													
													
												}
												
												if(i.belongToDataSource){
													if(i.belongToDataSource.layerDefinition.name == "eventTypes"){
													var event_types = t.map((e => e.feature.attributes.Type));
													if(event_types.length == 0){
														var dSources = i.dataSourceManager.dataSources;
														debugger;
														for (const property in dSources) {
														  if(dSources[property].dataSourceJson){
																if(dSources[property].dataSourceJson.sourceLabel){
																	if(dSources[property].dataSourceJson.sourceLabel == "TTP_geom"){
																		dSources[property].updateQueryParams({where: "1=2"})
															
																	}
																}
																if(dSources[property].dataSourceJson.sourceLabel){
																	if(dSources[property].dataSourceJson.sourceLabel == "event_country"){
																		dSources[property].updateQueryParams({where: "1=2"})
															
																	}
																}
																if(dSources[property].dataSourceJson.sourceLabel){
																	if(dSources[property].dataSourceJson.sourceLabel == "top5_mg_24hrs"){
																		dSources[property].updateQueryParams({where: "1=2"})
															
																	}
																}
																if(dSources[property].dataSourceJson.url){
																	if(dSources[property].dataSourceJson.url == "https://services3.arcgis.com/NuayvQtmZiakDpyz/arcgis/rest/services/202105_janes_ofm_intara_gdb/FeatureServer/2"){
																		dSources[property].updateQueryParams({where: "1=2"})
															
																	}
																}
															}
														}
													}else{
														var queryStringTTP = "Event_Type IN ('" + event_types[0] + "'";
														for(var abc=1;abc<event_types.length;abc++){
															queryStringTTP = queryStringTTP + ",'" + event_types[abc] + "'";
															
														}
														queryStringTTP = queryStringTTP + ")";
														//debugger;
														var dSources = i.dataSourceManager.dataSources;
														for (const property in dSources) {
														  if(dSources[property].dataSourceJson){
																if(dSources[property].dataSourceJson.sourceLabel){
																	if(dSources[property].dataSourceJson.sourceLabel == "TTP_geom"){
																		dSources[property].updateQueryParams({where: queryStringTTP})
															
																	}
																}
																if(dSources[property].dataSourceJson.sourceLabel){
																	if(dSources[property].dataSourceJson.sourceLabel == "event_country"){
																		dSources[property].updateQueryParams({where: queryStringTTP})
															
																	}
																}
																if(dSources[property].dataSourceJson.sourceLabel){
																	if(dSources[property].dataSourceJson.sourceLabel == "top5_mg_24hrs"){
																		dSources[property].updateQueryParams({where: queryStringTTP})
															
																	}
																}
																if(dSources[property].dataSourceJson.url){
																	if(dSources[property].dataSourceJson.url == "https://services3.arcgis.com/NuayvQtmZiakDpyz/arcgis/rest/services/202105_janes_ofm_intara_gdb/FeatureServer/2"){
																		dSources[property].updateQueryParams({where: queryStringTTP})
															
																	}
																}
															}
														}
														
													}
												}
												}
												
												if(i.layerDefinition){
												if(i.layerDefinition.name == "rtm_events"){
													var event_ids = t.map((e => e.feature.attributes.Event_ID));
													
													if(event_ids.length > 0){
														var mg_query_string = "Event_ID IN (" + event_ids[0];
														for(var ha=1;ha<event_ids.length;ha++){
															mg_query_string = mg_query_string + "," + event_ids[ha]
														}
														mg_query_string = mg_query_string + ")";
														var otherDataSources2 = i.parentDataSource.getChildDataSources();
														for(var d=0;d<otherDataSources2.length;d++){
															if(otherDataSources2[d].layerDefinition && otherDataSources2[d].layerDefinition.name == "rtm_events"){
																otherDataSources2[d].updateQueryParams({where: mg_query_string})
															}
														}
														var otherDataSources = i.parentDataSource.getChildDataSources();
														  var ds2, ds3, ds4, ds5, ds6;
														  for(var d=0;d<otherDataSources.length;d++){
															  if(otherDataSources[d].layerDefinition && otherDataSources[d].layerDefinition.name == "equipment"){
																ds6 = otherDataSources[d];
															  }
															  if(otherDataSources[d].layerDefinition && otherDataSources[d].layerDefinition.name == "rtmev_eq"){
																ds5 = otherDataSources[d];
															  }
															  if(otherDataSources[d].fetchedSchema && otherDataSources[d].fetchedSchema.label == "Mil bases"){
																ds4 = otherDataSources[d];
															  }
															  if(otherDataSources[d].layerDefinition && otherDataSources[d].layerDefinition.name == "militarygroups"){
																ds3 = otherDataSources[d];
															  }
															  if(otherDataSources[d].layerDefinition && otherDataSources[d].layerDefinition.name == "rtmev_mg"){
																ds2 = otherDataSources[d];
															  }
														  }
														   var ds2Query = ds2.query({where: mg_query_string});
															ds2Query.then(result => {
																var records = result.records;
																if(records.length > 0){
																	var mg_uriids = records.map(record => record.feature.attributes.militarygroup_uriid)
																	if(mg_uriids.length > 0){
																		var query_string = "militarygroup_uriid IN ('" + mg_uriids[0] + "'";
																		for(var hb=1;hb<mg_uriids.length;hb++){
																			query_string = query_string + ",'" + mg_uriids[hb] + "'"
																		}
																		query_string = query_string + ")";
																		ds3.selectRecordById({id: "-1"});
																		ds3.updateQueryParams({where: query_string})
																		
																		var ds3Query = ds3.query({where: query_string});
																		ds3Query.then(result2 => {
																			
																			var records2 = result2.records;
																			var inst_uriids = records2.map(record => record.feature.attributes.group_base_location);
																			if(inst_uriids.length > 0){
																				if(inst_uriids[0]){
																					var inst_query_string = "installations_uriid IN ('" + inst_uriids[0] + "'";
																				}
																				for(var hb=1;hb<inst_uriids.length;hb++){
																					if(inst_uriids[hb]){
																						inst_query_string = inst_query_string + ",'" + inst_uriids[hb] + "'"
																					}
																					
																				}
																				inst_query_string = inst_query_string + ")";
																				//debugger;
																				
																				ds4.updateQueryParams({where: inst_query_string})
																				
																			}else{
																				ds4.updateQueryParams({where: "1=2"})
																			}

																			
																		})
																		
																		
																	}
																}else{
																	ds3.selectRecordById({id: "-1"});
																	ds3.updateQueryParams({where: "1=2"});
																	ds4.updateQueryParams({where: "1=2"});
																}
																
															})
															
															var ds5Query = ds5.query({where: mg_query_string});
															ds5Query.then(result => {
																var records = result.records;
																if(records.length > 0){
																	var eq_uriids = records.map(record => record.feature.attributes.equipment_uriid);
																	if(eq_uriids.length > 0){
																		var query_string = "equipment_uriid IN ('" + eq_uriids[0] + "'";
																		for(var hb=1;hb<eq_uriids.length;hb++){
																			query_string = query_string + ",'" + eq_uriids[hb] + "'"
																		}
																		query_string = query_string + ")";
																		ds6.selectRecordById({id: "-1"});
																		ds6.updateQueryParams({where: query_string})
																		
																	}
																}else{
																	ds6.selectRecordById({id: "-1"});
																	ds6.updateQueryParams({where: "1=2"})
																}
																
															})
													}else{
													var otherDataSources = i.parentDataSource.getChildDataSources();
													  var ds2, ds3, ds4;
													  for(var d=0;d<otherDataSources.length;d++){
														  if(otherDataSources[d].layerDefinition && otherDataSources[d].layerDefinition.name == "equipment"){
															ds6 = otherDataSources[d];
														  }
														  if(otherDataSources[d].layerDefinition && otherDataSources[d].layerDefinition.name == "rtmev_eq"){
															ds5 = otherDataSources[d];
														  }
														  if(otherDataSources[d].fetchedSchema && otherDataSources[d].fetchedSchema.label == "Mil bases"){
															ds4 = otherDataSources[d];
														  }
														  if(otherDataSources[d].layerDefinition && otherDataSources[d].layerDefinition.name == "militarygroups"){
															ds3 = otherDataSources[d];
														  }
														  if(otherDataSources[d].layerDefinition && otherDataSources[d].layerDefinition.name == "rtmev_mg"){
															ds2 = otherDataSources[d];
														  }
													  }
													  ds3.selectRecordById({id: "-1"});
													  ds6.selectRecordById({id: "-1"});
													  ds3.updateQueryParams({where: "1=1"})
													  ds6.updateQueryParams({where: "1=1"})
													  ds4.updateQueryParams({where: "1=2"});
													  var otherDataSources2 = i.parentDataSource.getChildDataSources();
														for(var d=0;d<otherDataSources2.length;d++){
															if(otherDataSources2[d].layerDefinition && otherDataSources2[d].layerDefinition.name == "rtm_events"){
																otherDataSources2[d].updateQueryParams({where: "1=1"})
															}
														}
													  //debugger;
													
												}
												}
												}
												if(i.layerDefinition){
												if(i.layerDefinition.name == "militarygroups"){
													
												
																							
													var mg_uriids = t.map((e => e.feature.attributes.militarygroup_uriid));
													if(mg_uriids.length > 0){
														var mg_query_string = "militarygroup_uriid IN ('" + mg_uriids[0] + "'";
														for(var ha=1;ha<mg_uriids.length;ha++){
															mg_query_string = mg_query_string + ",'" + mg_uriids[ha] + "'";
														}
														mg_query_string = mg_query_string + ")";
														i.updateQueryParams({where: mg_query_string});
														
														var base_location = t.map((e => e.feature.attributes.group_base_location));
														
														
														var otherDataSources = i.parentDataSource.getChildDataSources();
														  var ds2, ds3, ds4, ds5, ds6;
														  for(var d=0;d<otherDataSources.length;d++){
															  if(otherDataSources[d].layerDefinition && otherDataSources[d].layerDefinition.name == "equipment"){
																ds6 = otherDataSources[d];
															  }
															  if(otherDataSources[d].layerDefinition && otherDataSources[d].layerDefinition.name == "rtmev_eq"){
																ds5 = otherDataSources[d];
															  }
															  if(otherDataSources[d].fetchedSchema && otherDataSources[d].fetchedSchema.label == "Mil bases"){
																ds4 = otherDataSources[d];
															  }
															  if(otherDataSources[d].layerDefinition && otherDataSources[d].layerDefinition.name == "rtm_events"){
																ds3 = otherDataSources[d];
															  }
															  if(otherDataSources[d].layerDefinition && otherDataSources[d].layerDefinition.name == "rtmev_mg"){
																ds2 = otherDataSources[d];
															  }
														  }
														  
														  if(base_location[0]){
															  ds4.updateQueryParams({where: "installations_uriid IN ('" + base_location[0] + "')"})
														  }else{
															  ds4.updateQueryParams({where: "1=2"})
														  }
														  //debugger;
														  var ds2Query = ds2.query({where: mg_query_string});
														  ds2Query.then(result => {
																var records = result.records;
																if(records.length > 0){
																	var event_ids = records.map(record => record.feature.attributes.Event_ID)
																	if(event_ids.length > 0){
																		var query_string = "Event_ID IN (" + event_ids[0];
																		for(var hb=1;hb<event_ids.length;hb++){
																			query_string = query_string + "," + event_ids[hb]
																		}
																		query_string = query_string + ")";
																		
																		var otherDataSources2 = i.parentDataSource.getChildDataSources();
																		for(var d=0;d<otherDataSources2.length;d++){
																			if(otherDataSources2[d].layerDefinition && otherDataSources2[d].layerDefinition.name == "rtm_events"){
																				otherDataSources2[d].selectRecordById({id: "-1"});
																				otherDataSources2[d].updateQueryParams({where: query_string})
																			}
																		}
																		
																		
																		var ds5Query = ds5.query({where: query_string});
																		 ds5Query.then(result2 => {
																			 
																			 var records = result2.records;
																				if(records.length > 0){
																					var equipment_array = []
																					var eq_uriids = records.map(record => record.feature.attributes.equipment_uriid);
																					if(eq_uriids.length > 0){
																		
																						var query_string = "equipment_uriid IN ('" + eq_uriids[0] + "'";
																						equipment_array.push(eq_uriids[0])
																						for(var hb=1;hb<eq_uriids.length;hb++){
																							if(equipment_array.indexOf(eq_uriids[hb]) == -1){
																								query_string = query_string + ",'" + eq_uriids[hb] + "'"
																								equipment_array.push(eq_uriids[hb])
																							}
																							
																						}
																						query_string = query_string + ")";
																						
																						if(equipment_array.length < 21){
																							ds6.selectRecordById({id: "-1"});
																							ds6.updateQueryParams({where: query_string})
																							
																						}else{
																							var objectIdsArray = []
																							var promises = []
																							for(var gh=0;gh<equipment_array.length;gh++){
																								if(equipment_array.length - gh >= 20){
																									var newArr = equipment_array.slice(gh, gh+20);
																									var query_string2 = "equipment_uriid IN ('" + newArr[0] + "'";
																									for(var hc=1;hc<newArr.length;hc++){
																											query_string2 = query_string2 + ",'" + newArr[hc] + "'"
																									}
																									query_string2 = query_string2 + ")";
																									promises.push(ds6.query({where: query_string2}).then(result3 => {
																										var records3 = result3.records;
																										var eq_oids = records3.map(record => record.feature.attributes.OBJECTID);
																										objectIdsArray = objectIdsArray.concat(eq_oids)
																									}))
																									gh = gh+20;
																									
																								}else{
																									var newArr = equipment_array.slice(gh);
																									var query_string2 = "equipment_uriid IN ('" + newArr[0] + "'";
																									for(var hc=1;hc<newArr.length;hc++){
																											query_string2 = query_string2 + ",'" + newArr[hc] + "'"
																									}
																									query_string2 = query_string2 + ")";
																									promises.push(ds6.query({where: query_string2}).then(result3 => {
																										var records3 = result3.records;
																										var eq_oids = records3.map(record => record.feature.attributes.OBJECTID);
																										objectIdsArray = objectIdsArray.concat(eq_oids)
																									}))
																									gh = equipment_array.length;
																								}
																								
																							}
																							
																							Promise.all(promises).then((result) =>{
																									var oids = objectIdsArray;
																									var oidString = oids[0];
																									for(var hd=1;hd<oids.length;hd++){
																										oidString = oidString + "," + oids[hd]
																										
																									}
																									//debugger;
																									ds6.selectRecordById({id: "-1"});
																									ds6.updateQueryParams({where: query_string})
																									//debugger;
																								} 
																									
																								);
																							
																						}
																						
																						
																					}
																				}else{
																					ds6.selectRecordById({id: "-1"});
																					ds6.updateQueryParams({where: "1=2"})
																				}
																			 
																
																			 
																		 })
																		
																	}
																}else{
																	var otherDataSources2 = i.parentDataSource.getChildDataSources();
																	for(var d=0;d<otherDataSources2.length;d++){
																		if(otherDataSources2[d].layerDefinition && otherDataSources2[d].layerDefinition.name == "rtm_events"){
																			otherDataSources2[d].selectRecordById({id: "-1"});
																			otherDataSources2[d].updateQueryParams({where: "1=2"})
																		}
																	}
																	ds6.selectRecordById({id: "-1"});
																	ds6.updateQueryParams({where: "1=2"})
																}
																
															})
														
													}else{
														i.updateQueryParams({where: "1=1"})
														 var ds2, ds3, ds4, ds5, ds6;
														 var otherDataSources = i.parentDataSource.getChildDataSources();
														  for(var d=0;d<otherDataSources.length;d++){
															  if(otherDataSources[d].layerDefinition && otherDataSources[d].layerDefinition.name == "equipment"){
																ds6 = otherDataSources[d];
															  }
															  if(otherDataSources[d].layerDefinition && otherDataSources[d].layerDefinition.name == "rtmev_eq"){
																ds5 = otherDataSources[d];
															  }
															  if(otherDataSources[d].fetchedSchema && otherDataSources[d].fetchedSchema.label == "Mil bases"){
																ds4 = otherDataSources[d];
															  }
															  if(otherDataSources[d].layerDefinition && otherDataSources[d].layerDefinition.name == "rtm_events"){
																ds3 = otherDataSources[d];
															  }
															  if(otherDataSources[d].layerDefinition && otherDataSources[d].layerDefinition.name == "rtmev_mg"){
																ds2 = otherDataSources[d];
															  }
														  }
														var otherDataSources2 = i.parentDataSource.getChildDataSources();
														for(var d=0;d<otherDataSources2.length;d++){
															if(otherDataSources2[d].layerDefinition && otherDataSources2[d].layerDefinition.name == "rtm_events"){
																otherDataSources2[d].selectRecordById({id: "-1"});
																otherDataSources2[d].updateQueryParams({where: "1=1"})
															}
														}
														ds6.selectRecordById({id: "-1"});
														ds6.updateQueryParams({where: "1=1"});
														ds4.updateQueryParams({where: "1=2"});
													}
													
													
												}
												}
												
												if(i.layerDefinition){
												
												if(i.layerDefinition.name == "equipment"){
													
													var eq_uriids = t.map((e => e.feature.attributes.equipment_uriid));
													if(eq_uriids.length > 0){
														var eq_query_string = "equipment_uriid IN ('" + eq_uriids[0] + "'";
														for(var ha=1;ha<eq_uriids.length;ha++){
															eq_query_string = eq_query_string + ",'" + eq_uriids[ha] + "'";
														}
														eq_query_string = eq_query_string + ")";
														i.updateQueryParams({where: eq_query_string})
														var otherDataSources = i.parentDataSource.getChildDataSources();
														  var ds2, ds3, ds4, ds5, ds6;
														  for(var d=0;d<otherDataSources.length;d++){
															  if(otherDataSources[d].layerDefinition && otherDataSources[d].layerDefinition.name == "militarygroups"){
																ds6 = otherDataSources[d];
															  }
															  if(otherDataSources[d].layerDefinition && otherDataSources[d].layerDefinition.name == "rtmev_mg"){
																ds5 = otherDataSources[d];
															  }
															  if(otherDataSources[d].fetchedSchema && otherDataSources[d].fetchedSchema.label == "Mil bases"){
																ds4 = otherDataSources[d];
															  }
															  if(otherDataSources[d].layerDefinition && otherDataSources[d].layerDefinition.name == "rtm_events"){
																ds3 = otherDataSources[d];
															  }
															  if(otherDataSources[d].layerDefinition && otherDataSources[d].layerDefinition.name == "rtmev_eq"){
																ds2 = otherDataSources[d];
															  }
														  }
														  ds4.updateQueryParams({where: "1=2"});
														  //debugger;
														  var ds2Query = ds2.query({where: eq_query_string});
														  ds2Query.then(result => {
																var records = result.records;
																if(records.length > 0){
																	var event_ids = records.map(record => record.feature.attributes.Event_ID)
																	if(event_ids.length > 0){
																		var query_string = "Event_ID IN (" + event_ids[0];
																		for(var hb=1;hb<event_ids.length;hb++){
																			query_string = query_string + "," + event_ids[hb]
																		}
																		query_string = query_string + ")";
																		var otherDataSources2 = i.parentDataSource.getChildDataSources();
																		for(var d=0;d<otherDataSources2.length;d++){
																			if(otherDataSources2[d].layerDefinition && otherDataSources2[d].layerDefinition.name == "rtm_events"){
																				otherDataSources2[d].selectRecordById({id: "-1"});
																				otherDataSources2[d].updateQueryParams({where: query_string})
																			}
																		}
																		//ds3.updateQueryParams({where: query_string})
																		var ds5Query = ds5.query({where: query_string});
																		 ds5Query.then(result2 => {
																			 
																			 var records = result2.records;
																				if(records.length > 0){
																					var mg_array = []
																					var mg_uriids = records.map(record => record.feature.attributes.militarygroup_uriid);
																					if(mg_uriids.length > 0){
																		
																						var query_string = "militarygroup_uriid IN ('" + mg_uriids[0] + "'";
																						mg_array.push(mg_uriids[0])
																						for(var hb=1;hb<mg_uriids.length;hb++){
																							if(mg_array.indexOf(mg_uriids[hb]) == -1){
																								query_string = query_string + ",'" + mg_uriids[hb] + "'"
																								mg_array.push(mg_uriids[hb])
																							}
																							
																						}
																						query_string = query_string + ")";
																						
																						if(mg_array.length < 21){
																							ds6.selectRecordById({id: "-1"});
																							ds6.updateQueryParams({where: query_string})
																							
																						}else{
																							var objectIds = []
																							var promises = []
																							for(var gh=0;gh<mg_array.length;gh++){
																								if(mg_array.length - gh >= 20){
																									var newArr = mg_array.slice(gh, gh+20);
																									var query_string2 = "militarygroup_uriid IN ('" + newArr[0] + "'";
																									for(var hc=1;hc<newArr.length;hc++){
																											query_string2 = query_string2 + ",'" + newArr[hc] + "'"
																									}
																									query_string2 = query_string2 + ")";
																									promises.push(ds6.query({where: query_string2}).then(result3 => {
																										var records3 = result3.records;
																										var eq_oids = records3.map(record => record.feature.attributes.OBJECTID);
																										objectIds = objectIds.concat(eq_oids)
																									}))
																									gh = gh+20;
																									
																								}else{
																									var newArr = mg_array.slice(gh);
																									var query_string2 = "militarygroup_uriid IN ('" + newArr[0] + "'";
																									for(var hc=1;hc<newArr.length;hc++){
																											query_string2 = query_string2 + ",'" + newArr[hc] + "'"
																									}
																									query_string2 = query_string2 + ")";
																									promises.push(ds6.query({where: query_string2}).then(result3 => {
																										var records3 = result3.records;
																										var eq_oids = records3.map(record => record.feature.attributes.OBJECTID);
																										objectIds = objectIds.concat(eq_oids)
																									}))
																									gh = mg_array.length;
																								}
																								
																							}
																							
																							Promise.all(promises).then((result) =>{
																									var oids = objectIds;
																									var oidString = oids[0];
																									for(var hd=1;hd<oids.length;hd++){
																										oidString = oidString + "," + oids[hd]
																										
																									}
																									ds6.selectRecordById({id: "-1"});
																									ds6.updateQueryParams({where: query_string})
																									//debugger;
																								} 
																									
																								);
																							
																						}
																						
																						
																					}
																				}else{
																					ds6.selectRecordById({id: "-1"});
																					ds6.updateQueryParams({where: "1=2"})
																				}
																			 
																
																			 
																		 })
																		
																	}
																}else{
																	var otherDataSources2 = i.parentDataSource.getChildDataSources();
																		for(var d=0;d<otherDataSources2.length;d++){
																			if(otherDataSources2[d].layerDefinition && otherDataSources2[d].layerDefinition.name == "rtm_events"){
																				otherDataSources2[d].selectRecordById({id: "-1"});
																				otherDataSources2[d].updateQueryParams({where: "1=2"})
																			}
																		}
																	//ds3.updateQueryParams({where: "1=2"})
																	ds6.selectRecordById({id: "-1"});
																	ds6.updateQueryParams({where: "1=2"})
																}
																
															})
														
													}else{
														i.updateQueryParams({where: "1=1"})
														 var ds2, ds3, ds4, ds5, ds6;
														 var otherDataSources = i.parentDataSource.getChildDataSources();
														  for(var d=0;d<otherDataSources.length;d++){
															  if(otherDataSources[d].layerDefinition && otherDataSources[d].layerDefinition.name == "equipment"){
																ds6 = otherDataSources[d];
															  }
															  if(otherDataSources[d].layerDefinition && otherDataSources[d].layerDefinition.name == "rtmev_eq"){
																ds5 = otherDataSources[d];
															  }
															  if(otherDataSources[d].fetchedSchema && otherDataSources[d].fetchedSchema.label == "Mil bases"){
																ds4 = otherDataSources[d];
															  }
															  if(otherDataSources[d].layerDefinition && otherDataSources[d].layerDefinition.name == "rtm_events"){
																ds3 = otherDataSources[d];
															  }
															  if(otherDataSources[d].layerDefinition && otherDataSources[d].layerDefinition.name == "rtmev_mg"){
																ds2 = otherDataSources[d];
															  }
														  }
														  ds4.updateQueryParams({where: "1=2"})
														  var otherDataSources2 = i.parentDataSource.getChildDataSources();
															for(var d=0;d<otherDataSources2.length;d++){
																if(otherDataSources2[d].layerDefinition && otherDataSources2[d].layerDefinition.name == "rtm_events"){
																	otherDataSources2[d].selectRecordById({id: "-1"});
																	otherDataSources2[d].updateQueryParams({where: "1=1"})
																}
															}
														//ds3.updateQueryParams({where: "1=1"})
														ds6.selectRecordById({id: "-1"});
														ds6.updateQueryParams({where: "1=1"})
													}
													
													
												}
												}
												
                                            } else{
												 this.isHasPublishMessageAction = !1
												 debugger;
											}
                                               
                                    },
                                    this.formatMessage = (e, t) => this.props.intl.formatMessage({
                                        id: e,
                                        defaultMessage: lt[e]
                                    }, t),
                                    this.editStatus = (t, i) => {
                                        const {
                                            dispatch: o,
                                            id: s
                                        } = this.props;
                                        o(e.appActions.widgetStatePropChange(s, t, i))
                                    },
                                    this.editWidgetConfig = e => {
                                        window.jimuConfig.isInBuilder && this.props.builderSupportModules.jimuForBuilderLib.getAppConfigAction().editWidgetConfig(this.props.id, e).exec()
                                    },
                                    this.scrollToIndex = (e, t = "start") => {
                                        this.listRef.current && this.listRef.current.scrollToItem(e, t)
                                    },
                                    this.isEditing = () => {
                                        const {
                                            appMode: t,
                                            config: i,
                                            selectionIsSelf: o,
                                            selectionIsInSelf: s
                                        } = this.props;
                                        return !!window.jimuConfig.isInBuilder && (o || s) && window.jimuConfig.isInBuilder && t !== e.AppMode.Run && i.isItemStyleConfirm
                                    },
                                    this.handleItemChange = e => {
                                        const {
                                            config: t
                                        } = this.props, {
                                            datasource: i
                                        } = this.state;
                                        if (!i || !e)
                                            return;
                                        let o = i.getSelectedRecords() || [];
                                        if (t.cardConfigs[g.Selected].selectionMode && t.cardConfigs[g.Selected].selectionMode !== s.None) {
                                            const i = null == e ? void 0 : e.getId(),
                                            n = o.find((e => e.getId() === i));
                                            t.cardConfigs[g.Selected].selectionMode === s.Single ? n ? (this.selectRecords([]), this.setState({
                                                    showSelectionOnly: !1
                                                })) : this.selectRecords([e]) : (o = n ? o.filter((e => e.getId() !== i)) : [e].concat(o), this.selectRecords(o))
                                        }
                                    },
                                    this.handleListPointerDown = e => {
                                        this.setState({
                                            forceShowMask: !0
                                        }),
                                        this.mouseClickTimeout && (clearTimeout(this.mouseClickTimeout), this.mouseClickTimeout = void 0),
                                        this.mouseClickTimeout = setTimeout((() => {
                                                    this.setState({
                                                        forceShowMask: !1
                                                    })
                                                }), 200)
                                    },
                                    this.handleScrollUp = e => {
                                        const {
                                            scrollStep: t
                                        } = this.props.config;
                                        let i = this.getListVisibleStartIndex() - t;
                                        i < 0 && (i = 0),
                                        this.scrollToIndex(i, "start")
                                    },
                                    this.handleScrollDown = e => {
                                        const {
                                            scrollStep: t
                                        } = this.props.config, {
                                            listVisibleStopIndex: i
                                        } = this,
                                        o = this.getListVisibleStartIndex();
                                        i + t >= this.records.length - 1 && this.records.length < this.getTotalCount() ? (this.isSwitchPage = !0, this.setState({
                                                page: this.state.page + 1
                                            })) : this.scrollToIndex(o + t, "start")
                                    },
                                    this.handleSwitchPage = e => {
                                        const t = this.getTotalPage();
                                        e < 1 || e > t || e !== this.state.page && (this.isSwitchPage = !0, this.lastQueryStart = this.state.page, this.setState({
                                                page: e
                                            }))
                                    },
                                    this.handleListMouseLeave = () => {
                                        this.isEditing() || this.setState({
                                            hoverIndex: -1
                                        })
                                    },
                                    this.handleListMouseMove = e => {
                                        this.isEditing() || e !== this.state.hoverIndex && this.setState({
                                            hoverIndex: e
                                        })
                                    },
                                    this.lastScrollOffset = 0,
                                    this.handleListScroll = ({
                                        scrollDirection: t,
                                        scrollOffset: i,
                                        scrollUpdateWasRequested: o
                                    }) => {
                                        var s,
                                        r;
                                        const {
                                            appMode: a,
                                            config: l
                                        } = this.props,
                                        d = this.listOutDivRef, {
                                            datasource: c,
                                            scrollStatus: h
                                        } = this.state;
                                        this.lastScrollOffset = i,
                                        !d || (null !== (r = null === (s = this.records) || void 0 === s ? void 0 : s.length) && void 0 !== r ? r : 0) < 1 || l.pageStyle !== n.Scroll || this.queryStatus === e.DataSourceStatus.Loading || !c || window.jimuConfig.isInBuilder && a !== e.AppMode.Run || (this.isHasScrolled = !0, function (e, t) {
                                            return !e || t < 2
                                        }
                                            (d, this.lastScrollOffset) ? "start" !== h && this.setState({
                                                scrollStatus: "start"
                                            }) : "mid" !== h && this.setState({
                                                scrollStatus: "mid"
                                            }))
                                    },
                                    this.getTotalPage = () => {
                                        const {
                                            totalCount: e
                                        } = this, {
                                            config: t
                                        } = this.props,
                                        i = e,
                                        o = Math.floor(i / t.itemsPerPage);
                                        return 0 == i % t.itemsPerPage ? o : o + 1
                                    },
                                    this.getListVisibleStartIndex = () => {
                                        const {
                                            lastScrollOffset: e
                                        } = this, {
                                            config: t
                                        } = this.props,
                                        i = this.itemSize(0),
                                        o = 1 * e / i;
                                        let s = Math.floor(o);
                                        return (o - s) * i > i - t.space && s++,
                                        s
                                    },
                                    this.handleSortOptionChange = (e, t) => {
                                        this.setState({
                                            sortOptionName: t.label,
                                            page: 1
                                        }, (() => {}))
                                    },
                                    this.handleSearchTextChange = e => {
                                        "" !== e && e || this.handleSearchSubmit(void 0),
                                        clearTimeout(this.suggestionsQueryTimeout),
                                        this.suggestionsQueryTimeout = setTimeout((() => {
                                                    this.getSearchSuggestions(e)
                                                }), 200)
                                    },
                                    this.getSearchSuggestions = t => {
                                        const {
                                            config: i
                                        } = this.props, {
                                            datasource: o
                                        } = this.state;
                                        if ((null == t ? void 0 : t.length) < 3)
                                            return !1;
                                        (function (t, i, o) {
                                            var s;
                                            return f(this, void 0, void 0, (function  * () {
                                                    let n = {
                                                        page: 1,
                                                        pageSize: 10
                                                    };
                                                    const r = i.searchFields.split(",");
                                                    if (i.searchOpen && i.searchFields) {
                                                        const e = null === (s = v(t, i, o)) || void 0 === s ? void 0 : s.sql;
                                                        n.where = e;
                                                        const r = o.getCurrentQueryParams();
                                                        n = o.mergeQueryParams(n, r)
                                                    }
                                                    const a = new RegExp(`(${t})`, "gi");
                                                    return function (t, i) {
                                                        return f(this, void 0, void 0, (function  * () {
                                                                return i ? yield i.query(t, {
                                                                    scope: e.QueryScope.InConfigView
                                                                }).then((e => f(this, void 0, void 0, (function  * () {
                                                                                return yield function (e, t) {
                                                                                    return f(this, void 0, void 0, (function  * () {
                                                                                            return yield Promise.resolve((null == t ? void 0 : t.records) || [])
                                                                                        }))
                                                                                }
                                                                                (0, e)
                                                                            })))) : yield Promise.resolve([])
                                                            }))
                                                    }
                                                    (n, o).then((e => f(this, void 0, void 0, (function  * () {
                                                                    let i = [];
                                                                    return r.forEach((o => {
                                                                            e.forEach((e => {
                                                                                    var s;
                                                                                    const n = null === (s = null == e ? void 0 : e.feature) || void 0 === s ? void 0 : s.attributes[o];
                                                                                    if (n && !i.includes(n) && n.match(a)) {
                                                                                        const e = {
                                                                                            suggestionHtml: S(n, t),
                                                                                            suggestion: n
                                                                                        };
                                                                                        i.push(e)
                                                                                    }
                                                                                }))
                                                                        })),
                                                                    i = function (e, t) {
                                                                        const i = e[0] ? [e[0]] : [];
                                                                        for (let o = 1; o < e.length; o++) {
                                                                            const s = e[o];
                                                                            let n = !1;
                                                                            for (let e = 0; e < i.length; e++)
                                                                                if (s[t] === i[e][t]) {
                                                                                    n = !0;
                                                                                    break
                                                                                }
                                                                            n || i.push(s)
                                                                        }
                                                                        return i
                                                                    }
                                                                    (i, "suggestion"),
                                                                    Promise.resolve(i)
                                                                }))))
                                                }))
                                        })(t, i, o).then((e => {
                                                this.setState({
                                                    searchSuggestion: e
                                                })
                                            }))
                                    },
                                    this.handleSearchSubmit = (e, t = !1) => {
                                        (this.state.searchText !== e || t) && this.setState({
                                            searchText: e,
                                            page: 1
                                        }, (() => {}))
                                    },
                                    this.handleFilterChange = e => {
                                        this.setState({
                                            currentFilter: e,
                                            page: 1
                                        }, (() => {}))
                                    },
                                    this.handleFilterApplyChange = e => {
                                        const t = {
                                            filterApplied: e,
                                            queryStart: 0
                                        };
                                        this.setState(t, (() => {}))
                                    },
                                    this.handleShowSelectionClick = e => {
                                        const {
                                            showSelectionOnly: t
                                        } = this.state;
                                        this.setState({
                                            showSelectionOnly: !t
                                        })
                                    },
                                    this.handleClearSelectionClick = () => {
                                        this.setState({
                                            showSelectionOnly: !1
                                        }),
                                        this.selectRecords([])
                                    },
                                    this.resetShowSelectionStatus = () => {
                                        const {
                                            showSelectionOnly: e
                                        } = this.state;
                                        e && this.setState({
                                            showSelectionOnly: !1
                                        })
                                    },
                                    this._getCurrentPage = () => this.state.page,
                                    this.getTotalCount = () => this.totalCount || 0,
                                    this.selectCard = () => {
                                        const {
                                            selectionIsInSelf: e
                                        } = this.props;
                                        e && this.selectSelf()
                                    },
                                    this.editBuilderAndSettingStatus = e => {
                                        this.editStatus("showCardSetting", e),
                                        this.editStatus("builderStatus", e)
                                    },
                                    this.getSortItems = () => {
                                        const {
                                            config: t
                                        } = this.props,
                                        i = [];
                                        return t.sorts && t.sorts.forEach((e => {
                                                e.rule && e.rule.forEach((t => {
                                                        t && t.jimuFieldName && i.push({
                                                            label: e.ruleOptionName,
                                                            event: this.handleSortOptionChange
                                                        })
                                                    }))
                                            })),
                                        (0, e.Immutable)(i)
                                    },
                                    this.renderListTopTools = (i, o, s) => {
                                        var n,
                                        r;
                                        const {
                                            widgetRect: a,
                                            isSearchBoxVisible: l,
                                            isOpenTopToolsPopper: d
                                        } = this.state,
                                        c = (null == a ? void 0 : a.width) || 620,
                                        h = Ue(this.props),
                                        u = _e(this.props),
                                        p = this.formatMessage("listDataActionLable", {
                                            layer: (null === (r = null === (n = i) || void 0 === n ? void 0 : n.layerDefinition) || void 0 === r ? void 0 : r.name) || ""
                                        }),
                                        g = h ? 220 : 175;
                                        return (0, e.jsx)("div", {
                                            className: "datasource-tools w-100",
                                            css: (this.props, m = u, e.css `
    .list-data-action {
      & {
        padding-left: ${e.polished.rem(4)};
      }
      &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        height: ${e.polished.rem(16)};
        border-left: 1px solid ${m?"var(--light-400)":"transparent"}
      }
    }
    .m-left {
      margin-left: ${e.polished.rem(4)};
    }
  `)
                                        }, (0, e.jsx)("div", {
                                                className: "d-flex align-items-center"
                                            }, (0, e.jsx)("div", {
                                                    className: "flex-grow-1 tool-row"
                                                }, u && (0, e.jsx)("div", null, c >= g && (0, e.jsx)("div", {
                                                            className: "tool-row row1 d-flex align-items-center w-100 justify-content-between"
                                                        }, this.renderSearchTools(i, o), (!l || c >= 360) && this.renderTopRightTools(i, o)), c < g && (0, e.jsx)("div", {
                                                            className: "float-right",
                                                            ref: e => this.reference = e
                                                        }, (0, e.jsx)(t.Button, {
                                                                type: "tertiary",
                                                                icon: !0,
                                                                size: "sm",
                                                                className: "tools-menu",
                                                                title: this.formatMessage("guideStep9Title"),
                                                                onClick: e => {
                                                                    this.setState({
                                                                        isOpenTopToolsPopper: !d
                                                                    })
                                                                }
                                                            }, (0, e.jsx)(Xe, {
                                                                    size: 16
                                                                })), this.renderListTopToolsInPoper(i, o)))), i && h && (0, e.jsx)("div", {
                                                    className: (0, e.classNames)("list-data-action position-relative", {
                                                        "m-left": c < g
                                                    }),
                                                    "data-testid": "data-action"
                                                }, (0, e.jsx)(t.DataActionDropDown, {
                                                        dataName: p,
                                                        type: "tertiary",
                                                        widgetId: this.props.id,
                                                        dataSource: i,
                                                        size: "sm",
                                                        records: s
                                                    }))), window.jimuConfig.isInBuilder && this.isEditing() && (0, e.jsx)("div", {
                                                className: "editing-mask-ds-tool"
                                            }));
                                        var m
                                    },
                                    this.renderListTopToolsInPoper = (i, o) => {
                                        const {
                                            widgetRect: s,
                                            isSearchBoxVisible: n,
                                            isOpenTopToolsPopper: r
                                        } = this.state,
                                        a = this.isEditing(),
                                        l = ((null == s ? void 0 : s.width) || 620) < (Ue(this.props) ? 220 : 175) && r && !a;
                                        return (0, e.jsx)("div", null, (0, e.jsx)(t.Popper, {
                                                placement: "bottom-start",
                                                reference: this.reference,
                                                offset: [-10, 0],
                                                open: l,
                                                showArrow: !0,
                                                toggle: e => {
                                                    this.setState({
                                                        isOpenTopToolsPopper: !l
                                                    })
                                                }
                                            }, (0, e.jsx)("div", {
                                                    className: "tool-row row1 d-flex align-items-end justify-content-between",
                                                    css: b(this.props)
                                                }, this.renderSearchTools(i, o), !n && this.renderTopRightTools(i, o))))
                                    },
                                    this.renderSearchTools = (i, o) => {
                                        const s = this.isEditing() || !i || o !== e.DataSourceStatus.Loaded, {
                                            searchText: n,
                                            widgetRect: r,
                                            isSearchBoxVisible: a,
                                            showLoading: l
                                        } = this.state,
                                        d = (null == r ? void 0 : r.width) || 620, {
                                            theme: c,
                                            config: h
                                        } = this.props,
                                        u = d < 360 ? "ds-tools-line-blue" : "",
                                        p = (null == h ? void 0 : h.searchHint) || this.formatMessage("search"),
                                        g = d < 360 && a;
                                        return (0, e.jsx)("div", {
                                            className: "list-search-div flex-grow-1",
                                            css: x(this.props)
                                        }, qe(this.props) && (0, e.jsx)("div", {
                                                className: "d-flex search-box-content"
                                            }, (d >= 360 || a) && (0, e.jsx)("div", {
                                                    className: "flex-grow-1 w-100"
                                                }, (0, e.jsx)(V, {
                                                        theme: c,
                                                        placeholder: p,
                                                        searchText: n,
                                                        onSearchTextChange: this.handleSearchTextChange,
                                                        onSubmit: this.handleSearchSubmit,
                                                        disabled: s,
                                                        searchSuggestion: this.state.searchSuggestion,
                                                        suggestionWidth: d,
                                                        showLoading: l,
                                                        formatMessage: this.formatMessage,
                                                        isShowBackButton: g,
                                                        toggleSearchBoxVisible: this.toggleSearchBoxVisible,
                                                        className: "list-search "
                                                    }), (0, e.jsx)("div", {
                                                        className: (0, e.classNames)("ds-tools-line", u)
                                                    })), d < 360 && !a && (0, e.jsx)(t.Button, {
                                                    type: "tertiary",
                                                    icon: !0,
                                                    size: "sm",
                                                    onClick: e => {
                                                        this.toggleSearchBoxVisible(!0)
                                                    },
                                                    title: this.formatMessage("search")
                                                }, (0, e.jsx)(F, {
                                                        size: 16,
                                                        color: c.colors.palette.light[800]
                                                    }))))
                                    },
                                    this.toggleSearchBoxVisible = (e = !1) => {
                                        const {
                                            widgetRect: t
                                        } = this.state;
                                        this.setState({
                                            isSearchBoxVisible: e
                                        });
                                        const i = Ue(this.props) ? 220 : 175;
                                        ((null == t ? void 0 : t.width) || 620) < i && (clearTimeout(this.showPopperTimeOut), this.showPopperTimeOut = setTimeout((() => {
                                                        this.setState({
                                                            isOpenTopToolsPopper: !0
                                                        })
                                                    })))
                                    },
                                    this.getPageSize = () => {
                                        const {
                                            widgetRect: e
                                        } = this.state,
                                        t = He(this.props, this.state),
                                        i = Be(e, $e(this.paginatorDiv.current, t), Fe(this.props)) || 1;
                                        return Math.max(Ae(e, i, this.props), 1)
                                    },
                                    this.renderTopRightTools = (i, o) => {
                                        const {
                                            sortOptionName: s,
                                            showSelectionOnly: n,
                                            currentFilter: r,
                                            filterApplied: a
                                        } = this.state, {
                                            config: l,
                                            theme: d,
                                            id: c,
                                            appMode: h
                                        } = this.props,
                                        u = this.getSortItems(),
                                        p = i && i.getSelectedRecords(),
                                        g = p && p.length > 0;
                                        return (0, e.jsx)("div", {
                                            className: "d-flex align-items-center mr-1",
                                            ref: this.listTopRightToolsDiv
                                        }, We(this.props) && (0, e.jsx)(P.Fragment, null, (0, e.jsx)(ce, {
                                                    theme: d,
                                                    items: u,
                                                    appMode: h,
                                                    toggleType: "tertiary",
                                                    toggleContent: e => s || u && u[0].label,
                                                    size: "sm",
                                                    caret: !0,
                                                    showActive: !0,
                                                    toggleTitle: this.formatMessage("listSort"),
                                                    activeLabel: s || u && u[0].label
                                                })), Ve(this.props) && (0, e.jsx)(ve, {
                                                filter: r || l.filter,
                                                appMode: h,
                                                applied: a,
                                                title: this.formatMessage("filter"),
                                                selectedDs: this.state.datasource,
                                                handleFilterChange: this.handleFilterChange,
                                                handleFilterApplyChange: this.handleFilterApplyChange,
                                                formatMessage: this.formatMessage,
                                                theme: d,
                                                widgetId: c
                                            }), Qe(this.props) && (0, e.jsx)(t.Button, {
                                                disabled: !g,
                                                type: "tertiary",
                                                title: n ? this.formatMessage("showAll") : this.formatMessage("showSelection"),
                                                icon: !0,
                                                size: "sm",
                                                onClick: this.handleShowSelectionClick
                                            }, n ? (0, e.jsx)(Xe, {
                                                    size: 16
                                                }) : (0, e.jsx)(et, {
                                                    size: 16
                                                })), Ge(this.props) && (0, e.jsx)(t.Button, {
                                                disabled: !g,
                                                type: "tertiary",
                                                title: this.formatMessage("clearSelection"),
                                                icon: !0,
                                                size: "sm",
                                                onClick: this.handleClearSelectionClick
                                            }, (0, e.jsx)(ot, {
                                                    size: 16
                                                })))
                                    },
                                    this.renderList = (t, o) => {
                                        const {
                                            widgetRect: s,
                                            isMount: n
                                        } = this.state, {
                                            config: r,
                                            isRTL: a
                                        } = this.props,
                                        l = null == o ? void 0 : o.status;
                                        if (this.queryStatus = l, this.isHasRenderList = !0, !n)
                                            return !1;
                                        l === e.DataSourceStatus.Unloaded && (t = void 0),
                                        this.getDsTotalCount(t, l);
                                        const c = this.getLoadingStatus(t, l),
                                        h = (null == t ? void 0 : t.getAutoRefreshInterval()) || 0;
                                        this.toggleAutoRefreshLoading(t, c);
                                        const u = He(this.props, this.state),
                                        p = Fe(this.props),
                                        g = Be(s, $e(this.paginatorDiv.current, u), p) || 1,
                                        m = s && s.width || i,
                                        f = this.getOverscanCount(g),
                                        v = this.getDsSelectRecords(t),
                                        S = this.getDsRecords(t, c, g);
                                        this.isFirstLoad = !1,
                                        0 === S.length && this.resetShowSelectionStatus(),
                                        this.getlistInnerElementType();
                                        const y = this.getListStyle();
                                        return (0, e.jsx)("div", {
                                            "data-testid": "listContainer",
                                            className: "list-container animation",
                                            css: y
                                        }, p && this.renderListTopTools(t, l, v), (0, e.jsx)(de, {
                                                className: "widget-list-list",
                                                ref: this.listRef,
                                                useIsScrolling: !0,
                                                outerRef: this.setListOutDivRef,
                                                direction: a ? "rtl" : "ltr",
                                                layout: r.direction === d.Horizon ? "horizontal" : "vertical",
                                                itemCount: this.records.length,
                                                overscanCount: f,
                                                itemKey: this.itemKey,
                                                width: m,
                                                height: g,
                                                onItemsRendered: this.onItemsRendered,
                                                itemData: this.getItemsByRecords(this.records),
                                                innerElementType: this.innerElementType,
                                                itemSize: this.itemSize,
                                                onScroll: this.handleListScroll
                                            }, this.itemRender), u && this.renderBottomTools(c), this.checkIsShowListMask(c, S) && (0, e.jsx)("div", {
                                                className: "editing-mask-list"
                                            }), this.renderEmptyElement(c), l === e.DataSourceStatus.NotReady && this.renderNotReadyTips(t), (c || h > 0) && this.renderLoading(c, h))
                                    },
                                    this.renderEmptyElement = t => {
                                        var i;
                                        const o = !this.records || this.records.length < 1,
                                        s = (null === (i = this.props.config) || void 0 === i ? void 0 : i.noDataMessage) || this.formatMessage("noData");
                                        return !t && o && (0, e.jsx)("div", {
                                            className: "empty-con text-center"
                                        }, (0, e.jsx)(rt, {
                                                size: 16
                                            }), (0, e.jsx)("div", {
                                                className: "discribtion"
                                            }, s))
                                    },
                                    this.clearMessageAction = () => {
                                        this.handleClearSelectionClick(),
                                        e.MessageManager.getInstance().publishMessage(new e.DataRecordsSelectionChangeMessage(this.props.id, []))
                                    },
                                    this.renderLoading = (t, i) => {
                                        const {
                                            autoRefreshLoadingString: o
                                        } = this.state, {
                                            config: s
                                        } = this.props;
                                        let n = null == s ? void 0 : s.isShowAutoRefresh;
                                        return "boolean" != typeof n && (n = !0),
                                        (0, e.jsx)("div", {
                                            className: (0, e.classNames)("position-absolute refresh-loading-con d-flex align-items-center", this.getRefreshLoadingClass())
                                        }, t && (0, e.jsx)("div", {
                                                className: "loading-con"
                                            }), i > 0 && n && (0, e.jsx)("div", {
                                                className: "flex-grow-1 auto-refresh-loading"
                                            }, o))
                                    },
                                    this.renderNotReadyTips = i => {
                                        var o,
                                        s,
                                        n,
                                        r,
                                        a;
                                        const l = null == i ? void 0 : i.getLabel(),
                                        d = null === e.appConfigUtils || void 0 === e.appConfigUtils ? void 0 : e.appConfigUtils.getWidgetIdByOutputDataSource(null === (s = null === (o = this.props) || void 0 === o ? void 0 : o.useDataSources) || void 0 === s ? void 0 : s[0]),
                                        c = null === (n = (0, e.getAppStore)().getState()) || void 0 === n ? void 0 : n.appConfig,
                                        h = null === (a = null === (r = null == c ? void 0 : c.widgets) || void 0 === r ? void 0 : r[d]) || void 0 === a ? void 0 : a.label;
                                        return (0, e.jsx)("div", {
                                            className: "placeholder-alert-con"
                                        }, (0, e.jsx)(t.Alert, {
                                                form: "tooltip",
                                                size: "small",
                                                type: "warning",
                                                text: this.formatMessage("outputDataIsNotGenerated", {
                                                    outputDsLabel: l,
                                                    sourceWidgetName: h
                                                })
                                            }))
                                    },
                                    this.renderBottomTools = t => {
                                        const {
                                            scrollStatus: i,
                                            isScrollEnd: o
                                        } = this.state, {
                                            config: s,
                                            isRTL: n
                                        } = this.props;
                                        return (0, e.jsx)("div", {
                                            ref: this.paginatorDiv
                                        }, (0, e.jsx)(je, {
                                                isRTL: n,
                                                totalPage: this.getTotalPage(),
                                                currentPage: this._getCurrentPage(),
                                                isEditing: this.isEditing(),
                                                isScrollEnd: o,
                                                pageStyle: s.pageStyle,
                                                direction: s.direction,
                                                scrollStatus: i,
                                                handleScrollUp: this.handleScrollUp,
                                                handleScrollDown: this.handleScrollDown,
                                                handleSwitchPage: this.handleSwitchPage,
                                                formatMessage: this.formatMessage,
                                                showLoading: t
                                            }))
                                    },
                                    this.getDsTotalCount = (t, i) => {
                                        const o = null == t ? void 0 : t.count;
                                        this.queryStatus = i,
                                        i === e.DataSourceStatus.Loaded && null !== o && (this.totalCount !== o && (this.setPageTimeout = setTimeout((() => {
                                                            this.setState({
                                                                page: 1
                                                            })
                                                        }), 1)), this.totalCount = o)
                                    },
                                    this.getLoadingStatus = (t, i) => {
                                        const {
                                            LayoutEntry: o
                                        } = this.state, {
                                            showLoading: s
                                        } = this.props;
                                        let n = !1;
                                        return (s || window.jimuConfig.isInBuilder && !o || t && i === e.DataSourceStatus.Loading) && (n = !0),
                                        n
                                    },
                                    this.toggleAutoRefreshLoading = (e, t) => {
                                        const i = (null == e ? void 0 : e.getAutoRefreshInterval()) || 0;
                                        this.resetAutoRefreshTimes(i, t),
                                        i > 0 && this.setRefreshLoadingString(t)
                                    },
                                    this.setListOutDivRef = e => {
                                        if (!e)
                                            return;
                                        const t = `bottomBoundary${this.props.id}`;
                                        this.listOutDivRef = e,
                                        this.setListDivSize();
                                        const i = document.createElement("div");
                                        i.id = t,
                                        i.className = "bottom-boundary";
                                        const o = this.listOutDivRef.getElementsByTagName("div")[0];
                                        var s,
                                        n,
                                        r;
                                        this.setScrollContentSize(),
                                        o.appendChild(i),
                                        s = document.getElementById(t),
                                        n = this.listOutDivRef,
                                        r = this.intersectionObserverCallback,
                                        new IntersectionObserver((function (e, t) {
                                                const i = e[0].intersectionRatio > 0;
                                                r && r(i)
                                            }), {
                                            root: n
                                        }).observe(s)
                                    },
                                    this.getDsRecords = (t, i, o) => {
                                        const {
                                            showSelectionOnly: s,
                                            widgetRect: r
                                        } = this.state, {
                                            config: a,
                                            appMode: l
                                        } = this.props;
                                        let d = at;
                                        const c = Ae(r, o, this.props),
                                        h = this.getDsSelectRecords(t);
                                        return t && a.isItemStyleConfirm && (d = t && (a.pageStyle === n.Scroll ? t.getRecordsByPageWithSelection(1, c * this.state.page) : t.getRecordsByPageWithSelection(this.state.page, c)) || [], s && (d = h)),
                                        window.jimuConfig.isInBuilder && l !== e.AppMode.Run && !i && d.length < 1 && (d = at),
                                        i && !this.isFirstLoad || (this.records = d),
                                        d
                                    },
                                    this.getDsSelectRecords = e => {
                                        const {
                                            config: t
                                        } = this.props;
                                        let i;
                                        return e && t.isItemStyleConfirm && (i = e.getSelectedRecords()),
                                        i
                                    },
                                    this.getlistInnerElementType = () => {
                                        const {
                                            config: t
                                        } = this.props;
                                        this.lastSpace !== t.space && (this.lastSpace = t.space, this.innerElementType = (0, P.forwardRef)(((i, o) => {
                                                    var {
                                                        style: s
                                                    } = i,
                                                    n = function (e, t) {
                                                        var i = {};
                                                        for (var o in e)
                                                            Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (i[o] = e[o]);
                                                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                                                            var s = 0;
                                                            for (o = Object.getOwnPropertySymbols(e); s < o.length; s++)
                                                                t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (i[o[s]] = e[o[s]])
                                                        }
                                                        return i
                                                    }
                                                    (i, ["style"]);
                                                    return (0, e.jsx)("div", Object.assign({
                                                            ref: o,
                                                            style: Object.assign(Object.assign({}, s), {
                                                                height: parseFloat(s.height) - (t.direction === d.Horizon ? 0 : t.space) + "px",
                                                                width: parseFloat(s.width) - (t.direction === d.Vertical ? 0 : t.space) + "px"
                                                            })
                                                        }, n))
                                                })))
                                    },
                                    this.getListStyle = () => {
                                        var e,
                                        t;
                                        const {
                                            toolsDivWidth: i,
                                            currentCardSize: o
                                        } = this.state, {
                                            config: s,
                                            appMode: n,
                                            theme: r,
                                            isHeightAuto: a,
                                            isWidthAuto: l
                                        } = this.props,
                                        d = He(this.props, this.state),
                                        c = $e(this.paginatorDiv.current, d),
                                        h = Fe(this.props),
                                        u = Ne(this.props),
                                        p = {
                                            pageStyle: null == s ? void 0 : s.pageStyle,
                                            scrollBarOpen: null == s ? void 0 : s.scrollBarOpen,
                                            direction: null == s ? void 0 : s.direction,
                                            appMode: n,
                                            theme: r,
                                            isHeightAuto: a,
                                            isWidthAuto: l,
                                            currentCardSize: o,
                                            listTemplateDefaultCardSize: u,
                                            showTopTools: h,
                                            bottomToolH: c,
                                            topRightToolW: i,
                                            hasRecords: (null !== (t = null === (e = this.records) || void 0 === e ? void 0 : e.length) && void 0 !== t ? t : 0) > 0,
                                            mexSize: this.getListMaxSize()
                                        };
                                        return y(p)
                                    },
                                    this.checkIsShowListMask = (e, t) => {
                                        const {
                                            isInBuilder: i
                                        } = window.jimuConfig,
                                        o = this.isEditing(),
                                        s = !t || t.length < 1;
                                        return i && o && !(!e && s)
                                    },
                                    this.getOverscanCount = t => {
                                        const {
                                            widgetRect: i
                                        } = this.state, {
                                            appMode: o
                                        } = this.props,
                                        s = Ae(i, t, this.props);
                                        return window.jimuConfig.isInBuilder && o !== e.AppMode.Run ? 0 : s
                                    },
                                    this.setScrollContentSize = () => {
                                        var e;
                                        if (!this.listOutDivRef)
                                            return;
                                        const {
                                            direction: t
                                        } = null === (e = this.props) || void 0 === e ? void 0 : e.config,
                                        i = this.listOutDivRef.getElementsByTagName("div")[0];
                                        t === d.Horizon ? i.style.height = "100%" : i.style.width = "100%"
                                    },
                                    this.intersectionObserverCallback = t => {
                                        var i,
                                        o;
                                        const {
                                            appMode: s,
                                            config: r
                                        } = this.props,
                                        a = this.listOutDivRef, {
                                            datasource: l
                                        } = this.state;
                                        this.setState({
                                            isScrollEnd: t
                                        }),
                                        !a || (null !== (o = null === (i = this.records) || void 0 === i ? void 0 : i.length) && void 0 !== o ? o : 0) < 1 || r.pageStyle === n.Scroll && this.queryStatus !== e.DataSourceStatus.Loading && l && (!window.jimuConfig.isInBuilder || s === e.AppMode.Run && t) && this.isHasScrolled && (this.records.length < this.getTotalCount() ? (this.setState({
                                                    page: this.state.page + 1,
                                                    scrollStatus: "end"
                                                }), this.isSwitchPage = !0) : this.setState({
                                                scrollStatus: "end"
                                            }))
                                    },
                                    this.setListDivSize = () => {
                                        var e;
                                        const t = this.listOutDivRef,
                                        i = (null == t ? void 0 : t.clientWidth) || null,
                                        o = (null == t ? void 0 : t.clientHeight) || null,
                                        s = (null === (e = this.listTopRightToolsDiv.current) || void 0 === e ? void 0 : e.clientWidth) || 0,
                                        n = (null == t ? void 0 : t.getBoundingClientRect()) || null,
                                        r = {
                                            clientWidth: i,
                                            clientHeight: o
                                        };
                                        this.setState({
                                            listDivSize: r,
                                            toolsDivWidth: s,
                                            listDivBoundRect: n
                                        })
                                    },
                                    this.getContentLayout = () => {
                                        const {
                                            layoutId: t,
                                            browserSizeMode: i
                                        } = this.props,
                                        o = (0, e.getAppStore)().getState().appConfig,
                                        s = m.searchUtils.getWidgetIdThatUseTheLayoutId(o, t);
                                        return m.searchUtils.getContentLayoutInfosInOneSizeMode(o, s, e.LayoutItemType.Widget, i)
                                    },
                                    this.getContentLayoutSetting = () => {
                                        var t,
                                        i,
                                        o,
                                        s,
                                        n;
                                        const r = (0, e.getAppStore)().getState().appConfig, {
                                            layouts: a
                                        } = r,
                                        l = this.getContentLayout(),
                                        d = null === (t = null == l ? void 0 : l[0]) || void 0 === t ? void 0 : t.layoutId,
                                        c = null === (i = null == l ? void 0 : l[0]) || void 0 === i ? void 0 : i.layoutItemId;
                                        return null === (n = null === (s = null === (o = null == a ? void 0 : a[d]) || void 0 === o ? void 0 : o.content) || void 0 === s ? void 0 : s[c]) || void 0 === n ? void 0 : n.setting
                                    },
                                    this.getListMaxSize = () => {
                                        var t,
                                        i,
                                        o,
                                        s,
                                        n;
                                        const {
                                            boundingBox: r,
                                            heightLayoutItemSizeModes: a
                                        } = this.props,
                                        l = a === m.LayoutItemSizeModes.Custom && (null == r ? void 0 : r.height),
                                        d = l ? null == r ? void 0 : r.height : this.bodySize.clientHeight,
                                        c = l && !((null === (t = null == r ? void 0 : r.height) || void 0 === t ? void 0 : t.includes) && (null === (i = null == r ? void 0 : r.height) || void 0 === i ? void 0 : i.includes("%")));
                                        let h = (0, e.Immutable)({
                                            maxWidth: this.bodySize.scrollWidth,
                                            maxHeight: d
                                        });
                                        const {
                                            layoutId: u,
                                            browserSizeMode: p,
                                            appMode: g
                                        } = this.props,
                                        f = (0, e.getAppStore)().getState().appConfig,
                                        v = e.utils.findViewportSize(f, p), {
                                            layouts: S
                                        } = f,
                                        y = null === (o = S[u]) || void 0 === o ? void 0 : o.type,
                                        w = this.getContentLayoutSetting(),
                                        b = "auto" === (null === (s = null == w ? void 0 : w.autoProps) || void 0 === s ? void 0 : s.width) || "auto" === (null == w ? void 0 : w.widthMode),
                                        x = "auto" === (null === (n = null == w ? void 0 : w.autoProps) || void 0 === n ? void 0 : n.height) || "auto" === (null == w ? void 0 : w.heightMode);
                                        if (y === e.LayoutType.ColumnLayout && b && (h = h.set("maxWidth", this.bodySize.clientWidth)), "ROW" === y && x && !c) {
                                            const t = (null == v ? void 0 : v.height) || 800,
                                            i = g === e.AppMode.Design ? t : this.bodySize.clientHeight;
                                            h = h.set("maxHeight", i)
                                        }
                                        return h = h.set("maxHeight", this.initElementSize(h.maxHeight)),
                                        h = h.set("maxWidth", this.initElementSize(h.maxWidth)),
                                        h
                                    },
                                    this.initElementSize = e => Number(e) ? `${e}px` : "string" != typeof e || (null == e ? void 0 : e.includes("px")) || (null == e ? void 0 : e.includes("rem")) ? e : (null == e ? void 0 : e.includes("%")) ? "100%" : void 0,
                                    this.getRefreshLoadingClass = () => {
                                        const {
                                            config: t,
                                            appMode: i
                                        } = this.props, {
                                            direction: o,
                                            scrollBarOpen: s
                                        } = t,
                                        n = window.jimuConfig.isInBuilder && i === e.AppMode.Design;
                                        return !s || n ? "" : o === d.Vertical ? "vertical-loading" : "horizon-loading"
                                    },
                                    this.resetAutoRefreshTimes = (e, t = !1) => {
                                        clearTimeout(this.resetAutoRefreshTime),
                                        e <= 0 && clearInterval(this.autoRefreshLoadingTime),
                                        this.resetAutoRefreshTime = setTimeout((() => {
                                                    t && e > 0 && this.setState({
                                                        autoRefreshLoadingString: this.formatMessage("lastUpdateAFewTime")
                                                    }),
                                                    this.setState({
                                                        showLoading: t
                                                    })
                                                }), 0)
                                    },
                                    this.setRefreshLoadingString = (e = !1) => {
                                        if (!e)
                                            return !1;
                                        let t = 0;
                                        clearInterval(this.autoRefreshLoadingTime),
                                        this.autoRefreshLoadingTime = setInterval((() => {
                                                    t++,
                                                    this.setState({
                                                        autoRefreshLoadingString: this.getLoadingString(t)
                                                    })
                                                }), 6e4)
                                    },
                                    this.getLoadingString = e => {
                                        let t = this.formatMessage("lastUpdateAFewTime");
                                        return e > 1 && e <= 2 ? t = this.formatMessage("lastUpdateAMinute") : e > 2 && (t = this.formatMessage("lastUpdateTime", {
                                                    updateTime: e
                                                })),
                                        t
                                    },
                                    this.onItemsRendered = ({
                                        overscanStartIndex: e,
                                        overscanStopIndex: t,
                                        visibleStartIndex: i,
                                        visibleStopIndex: o
                                    }) => {
                                        this.listVisibleStartIndex = i,
                                        this.listVisibleStopIndex = o;
                                        const {
                                            config: s
                                        } = this.props;
                                        this.needRefreshListOnListRendered && (this.needRefreshListOnListRendered = !1, this.refreshList()),
                                        this.isSwitchPage && (s.pageStyle === n.Scroll ? this.records.length > o + 1 && (this.isSwitchPage = !1, this.onItemsRenderedTimeout = setTimeout((() => {
                                                            this.handleScrollDown(null)
                                                        }), 500)) : this.isSwitchPage = !1)
                                    },
                                    this.itemSize = e => {
                                        const {
                                            config: t
                                        } = this.props, {
                                            currentCardSize: i
                                        } = this.state;
                                        return t.direction === d.Horizon ? i.width + t.space : i.height + t.space
                                    },
                                    this.getItemsByRecords = t => {
                                        const {
                                            config: i,
                                            selectionIsInSelf: o,
                                            selectionIsSelf: s,
                                            builderStatus: n,
                                            appMode: r,
                                            queryObject: a,
                                            useDataSources: l
                                        } = this.props, {
                                            datasource: d,
                                            hoverIndex: c
                                        } = this.state,
                                        h = (d && i.isItemStyleConfirm ? d.getSelectedRecordIds() : []).map((e => e + ""));
                                        return t && t.map(((t, u) => {
                                                const p = 0 === u && window.jimuConfig.isInBuilder && r === e.AppMode.Design ? {
                                                    hideCardTool: this.state.hideCardTool,
                                                    selectionIsList: s,
                                                    selectionIsInList: o,
                                                    isEditing: this.isEditing(),
                                                    builderStatus: n,
                                                    lockItemRatio: i.lockItemRatio,
                                                    changeIsResizingCard: this.changeIsResizingCard
                                                }
                                                 : {
                                                    linkParam: i.linkParam,
                                                    queryObject: a,
                                                    useDataSources: l
                                                };
                                                return Object.assign(Object.assign({
                                                        index: u,
                                                        isHover: c === u,
                                                        record: i.isItemStyleConfirm ? t : void 0,
                                                        active: !t.fake && i.isItemStyleConfirm && d && h.includes(t.getId())
                                                    }, this.getOtherProps()), p)
                                            }))
                                    },
                                    this.getOtherProps = () => {
                                        const {
                                            config: e,
                                            theme: t,
                                            id: i,
                                            appMode: o,
                                            builderSupportModules: n,
                                            layouts: r,
                                            browserSizeMode: a,
                                            dispatch: l,
                                            isRTL: d
                                        } = this.props, {
                                            datasource: c
                                        } = this.state;
                                        return {
                                            browserSizeMode: a,
                                            space: e.space,
                                            isRTL: d,
                                            builderSupportModules: n,
                                            formatMessage: this.formatMessage,
                                            dispatch: l,
                                            widgetId: i,
                                            interact: window.jimuConfig.isInBuilder && n.widgetModules.interact,
                                            selectCard: this.selectCard,
                                            handleResizeCard: this.handleResizeCard,
                                            appMode: o,
                                            onChange: this.handleItemChange,
                                            hoverLayoutOpen: e.cardConfigs[g.Hover].enable,
                                            selectable: e.cardConfigs[g.Selected].selectionMode !== s.None,
                                            direction: e.direction,
                                            theme: t,
                                            LayoutEntry: this.state.LayoutEntry,
                                            layouts: r,
                                            cardConfigs: e.cardConfigs,
                                            datasourceId: c && c.id,
                                            updateCardToolPosition: this.updateCardToolPosition
                                        }
                                    },
                                    this.itemRender = t => {
                                        let i = t.style;
                                        const o = t.index,
                                        s = t.data, {
                                            appMode: n,
                                            config: r
                                        } = this.props;
                                        i = r.direction === d.Horizon ? Object.assign(Object.assign({}, i), {
                                            width: parseFloat(i.width) - r.space + "px"
                                        }) : Object.assign(Object.assign({}, i), {
                                            height: parseFloat(i.height) - r.space + "px"
                                        });
                                        const a = 0 === o && window.jimuConfig.isInBuilder && n === e.AppMode.Design ? k : E;
                                        return (0, e.jsx)(a, Object.assign({
                                                listStyle: i,
                                                widgetId: this.props.id
                                            }, s[o], {
                                                handleListMouseMove: this.handleListMouseMove,
                                                handleListMouseLeave: this.handleListMouseLeave,
                                                itemIdex: o
                                            }))
                                    },
                                    this.itemKey = e => {
                                        const t = this.records[e];
                                        return `${t.getId&&t.getId()||e}`
                                    };
                                    const {
                                        config: r
                                    } = o;
                                    this.paginatorDiv = e.React.createRef(),
                                    this.listTopRightToolsDiv = e.React.createRef();
                                    const a = {
                                        LayoutEntry: null,
                                        page: 1,
                                        sortOptionName: r.sorts && r.sorts[0] && r.sorts[0].ruleOptionName,
                                        currentCardSize: Ne(o),
                                        forceShowMask: !1,
                                        showList: !0,
                                        widgetRect: {
                                            width: i,
                                            height: i
                                        },
                                        searchText: "",
                                        currentFilter: void 0,
                                        filterApplied: !1,
                                        showSelectionOnly: !1,
                                        hideCardTool: !1,
                                        scrollStatus: "start",
                                        datasource: void 0,
                                        hoverIndex: -1,
                                        isScrolling: !1,
                                        isScrollSpeedOver: !1,
                                        isResizingCard: !1,
                                        searchSuggestion: [],
                                        isSearchBoxVisible: !1,
                                        isOpenTopToolsPopper: !1,
                                        latestUpdateTime: 0,
                                        showLoading: !1,
                                        autoRefreshLoadingString: "",
                                        listDivSize: {
                                            clientWidth: null,
                                            clientHeight: null
                                        },
                                        toolsDivWidth: null,
                                        listDivBoundRect: null,
                                        isScrollEnd: !1,
                                        isMount: !1
                                    };
                                    this.selectSelf = this.selectSelf.bind(this),
                                    this.handleResizeCard = this.handleResizeCard.bind(this),
                                    this.listRef = e.React.createRef(),
                                    window.jimuConfig.isInBuilder ? a.LayoutEntry = this.props.builderSupportModules.LayoutEntry : a.LayoutEntry = m.LayoutEntry,
                                    this.state = a,
                                    this.onResize = this.onResize.bind(this),
                                    this.changeIsResizingCard = this.changeIsResizingCard.bind(this),
                                    this.setRefreshLoadingString = this.setRefreshLoadingString.bind(this),
                                    this.resetAutoRefreshTimes = this.resetAutoRefreshTimes.bind(this),
                                    this.debounceOnResize = e.lodash.debounce(((e, t) => this.onResize(e, t)), 200)
                                }
                                componentDidMount() {
                                    this.setState({
                                        isMount: !0
                                    }),
                                    this.getBodySize(),
                                    window.addEventListener("resize", this.getBodySize)
                                }
                                componentWillUnmount() {
                                    clearTimeout(this.resizeTimeout),
                                    clearTimeout(this.updateCardToolTimeout),
                                    clearTimeout(this.mouseClickTimeout),
                                    clearTimeout(this.suggestionsQueryTimeout),
                                    clearTimeout(this.showPopperTimeOut),
                                    clearTimeout(this.resetAutoRefreshTime),
                                    clearTimeout(this.setPageTimeout),
                                    clearTimeout(this.onItemsRenderedTimeout),
                                    clearInterval(this.autoRefreshLoadingTime)
                                }
                                componentDidUpdate(t, i) {
                                    var o;
                                    const {
                                        config: n,
                                        appMode: r
                                    } = this.props, {
                                        datasource: a
                                    } = this.state;
                                    window.jimuConfig.isInBuilder && r !== e.AppMode.Run || a && n.cardConfigs[g.Selected].selectionMode !== s.None && this.scrollToSelectedItems(a),
                                    this.updateListInBuilder(t, i),
                                    this.appModeChange(t),
                                    (null == t ? void 0 : t.selectionIsInSelf) !== (null === (o = this.props) || void 0 === o ? void 0 : o.selectionIsInSelf) && this.setSelectionStatus()
                                }
                                changeIsResizingCard(e) {
                                    this.setState({
                                        isResizingCard: e
                                    })
                                }
                                handleResizeCard(e, t = !1, i, o, s = !1) {
                                    t ? (e.width = parseFloat(e.width.toFixed(2)), e.height = parseFloat(e.height.toFixed(2)), window.jimuConfig.isInBuilder && this.props.builderSupportModules.widgetModules.handleResizeCard(this.props, e, i, o, t, s)) : this.setState({
                                        currentCardSize: e
                                    }, (() => {
                                            this.refreshList(!1)
                                        }))
                                }
                                selectSelf() {
                                    window.jimuConfig.isInBuilder && this.props.builderSupportModules.widgetModules.selectSelf(this.props)
                                }
                                getOutputDs() {
                                    const t = this.props.outputDataSources && this.props.outputDataSources[0],
                                    i = this.props.useDataSources && this.props.useDataSources[0];
                                    if (t && i)
                                        return e.DataSourceManager.getInstance().getDataSource(t)
                                }
                                render() {
                                    const {
                                        config: i,
                                        id: o,
                                        appMode: s,
                                        browserSizeMode: n,
                                        selectionIsInSelf: r,
                                        selectionIsSelf: l,
                                        useDataSources: d,
                                        builderStatus: c,
                                        layouts: h
                                    } = this.props,
                                    u = (0, e.getAppStore)().getState().appConfig, {
                                        forceShowMask: p,
                                        datasource: g,
                                        widgetRect: f,
                                        page: S
                                    } = this.state,
                                    y = window.jimuConfig.isInBuilder,
                                    b = (0, e.classNames)("jimu-widget", "widget-list", "list-widget-" + o);
                                    if (!i.itemStyle)
                                        return (0, e.jsx)(t.WidgetPlaceholder, {
                                            widgetId: this.props.id,
                                            icon: a(65354),
                                            message: this.formatMessage("placeHolderTip")
                                        });
                                    const x = He(this.props, this.state),
                                    C = Ae(f, Be(f, $e(this.paginatorDiv.current, x), Fe(this.props)), this.props);
                                    let I = function (t, i, o) {
                                        var s,
                                        n,
                                        r;
                                        const a = {
                                            returnGeometry: !0
                                        }, {
                                            config: l,
                                            stateProps: d,
                                            useDataSources: c
                                        } = i, {
                                            sortOptionName: h,
                                            searchText: u,
                                            currentFilter: p,
                                            filterApplied: g,
                                            datasource: m
                                        } = t,
                                        f = c && c[0];
                                        if (!m || !f)
                                            return null;
                                        if (!m.query)
                                            return null;
                                        let S;
                                        if (l.sortOpen && l.sorts && (S = l.sorts.find((e => e.ruleOptionName === h)), S = S || l.sorts[0], (null === (n = null === (s = null == S ? void 0 : S.rule) || void 0 === s ? void 0 : s[0]) || void 0 === n ? void 0 : n.jimuFieldName) || (S = void 0), S)) {
                                            const t = [];
                                            S.rule.forEach((e => {
                                                    e.jimuFieldName && t.push(`${e.jimuFieldName} ${e.order}`)
                                                })),
                                            (null == m ? void 0 : m.type) === e.DataSourceTypes.FeatureLayer ? a.orderByFields = t.join(",") : a.orderByFields = t
                                        }
                                        if (l.filterOpen && g && l.filter && p && p.sql && (a.where = (a.where || "1=1") + " AND ", a.where += `(${p.sql})`), d) {
                                            const t = null == d ? void 0 : d[e.MessageType.ExtentChange];
                                            t && (a.geometry = t.queryExtent, t.querySQL && (a.where = (a.where || "1=1") + " AND ", a.where += `(${t.querySQL})`));
                                            const i = d[e.MessageType.DataRecordsSelectionChange];
                                            i && i.querySQL && (a.where = (a.where || "1=1") + " AND ", a.where += `(${i.querySQL})`)
                                        }
                                        if (l.searchOpen && l.searchFields && u) {
                                            a.where = (a.where || "1=1") + " AND ";
                                            const e = null === (r = v(u, l, m)) || void 0 === r ? void 0 : r.sql;
                                            a.where += e
                                        }
                                        return o > 0 && (a.page = t.page, a.pageSize = o),
                                        a
                                    }
                                    (this.state, this.props, C);
                                    if (!function (t, i, o) {
                                        return !!o && (t = o.getRealQueryParams(t, "query"), i = o.getRealQueryParams(i, "query"), !(!t || !i) && (delete t.page, delete t.pageSize, delete t.resultOffset, delete t.resultRecordCount, delete i.page, delete i.pageSize, delete i.resultOffset, delete i.resultRecordCount, e.utils.isDeepEqual(t, i)))
                                    }
                                        (I, this.lastQuery, g) && g) {
                                        const e = I;
                                        1 !== S ? (I = this.lastQuery, this.lastQuery = e, this.setState({
                                                page: 1
                                            })) : this.lastQuery = e
                                    }
                                    const M = null == u ? void 0 : u.layouts[m.searchUtils.findLayoutId(h[c], n, u.mainSizeMode)],
                                    R = M && M.type;
                                    return (0, e.jsx)("div", {
                                        className: b,
                                        css: w(this.props, this.isEditing(), x),
                                        onPointerDown: t => y && s !== e.AppMode.Run && !l && !r && this.handleListPointerDown(t)
                                    }, (0, e.jsx)("div", {
                                            className: "widget-list d-flex"
                                        }, this.isDsConfigured() ? (0, e.jsx)(e.DataSourceComponent, {
                                                query: g ? I : null,
                                                useDataSource: d && d[0],
                                                onDataSourceCreated: this.onDSCreated,
                                                widgetId: this.props.id,
                                                queryCount: !0
                                            }, this.renderList) : this.renderList(), !this.isHasRenderList && (0, e.jsx)("div", {
                                                className: "list-loading-con w-100 h-100"
                                            }, (0, e.jsx)("div", {
                                                    className: "jimu-secondary-loading"
                                                }))), y && s !== e.AppMode.Run && (p || !r && !l || !i.isItemStyleConfirm && R) && (0, e.jsx)("div", {
                                            className: "list-with-mask"
                                        }), (0, e.jsx)(e.ReactResizeDetector, {
                                            handleWidth: !0,
                                            handleHeight: !0,
                                            onResize: this.debounceOnResize
                                        }))
                                }
                            }
                            dt.versionManager = Pe,
                            dt.mapExtraStateProps = (e, t) => {
                                var i,
                                o,
                                s,
                                n,
                                r,
                                a,
                                l,
                                d,
                                c,
                                h,
                                u,
                                p,
                                f,
                                v,
                                S,
                                y,
                                w;
                                const b = e && e.appConfig, {
                                    layouts: x,
                                    layoutId: C,
                                    layoutItemId: I,
                                    builderSupportModules: M,
                                    id: R
                                } = t,
                                O = e && e.browserSizeMode,
                                T = e && e.widgetsState && e.widgetsState[t.id] && e.widgetsState[t.id].builderStatus || g.Regular;
                                let L;
                                if (b) {
                                    const t = b && e.appConfig.layouts && e.appConfig.layouts[m.searchUtils.findLayoutId(x[T], O, b.mainSizeMode)];
                                    L = t && t.type
                                }
                                const j = null === (i = b.layouts) || void 0 === i ? void 0 : i[C],
                                z = null === (s = null === (o = null == j ? void 0 : j.content) || void 0 === o ? void 0 : o[I]) || void 0 === s ? void 0 : s.setting,
                                D = (null === (n = null == z ? void 0 : z.autoProps) || void 0 === n ? void 0 : n.height) === m.LayoutItemSizeModes.Auto || !0 === (null === (r = null == z ? void 0 : z.autoProps) || void 0 === r ? void 0 : r.height),
                                k = (null === (a = null == z ? void 0 : z.autoProps) || void 0 === a ? void 0 : a.width) === m.LayoutItemSizeModes.Auto || !0 === (null === (l = null == z ? void 0 : z.autoProps) || void 0 === l ? void 0 : l.width);
                                let P;
                                if (window.jimuConfig.isInBuilder) {
                                    const e = null === (u = null === (h = null === (c = null === (d = b.layouts) || void 0 === d ? void 0 : d[C]) || void 0 === c ? void 0 : c.content) || void 0 === h ? void 0 : h[I]) || void 0 === u ? void 0 : u.bbox;
                                    P = e && {
                                        left: e.left,
                                        top: e.top
                                    }
                                }
                                const E = e && e.appRuntimeInfo && e.appRuntimeInfo.selection,
                                N = E && M && M.widgetModules && M.widgetModules.selectionInList(E, R, b, !1);
                                let A;
                                return N && (A = Object.keys(x).find((e => m.searchUtils.findLayoutId(x[e], O, b.mainSizeMode) === E.layoutId))), {
                                    selectionIsSelf: !(!E || E.layoutId !== C || E.layoutItemId !== I),
                                    selectionIsInSelf: !!N,
                                    selectionStatus: A,
                                    appMode: null === (p = null == e ? void 0 : e.appRuntimeInfo) || void 0 === p ? void 0 : p.appMode,
                                    browserSizeMode: e && e.browserSizeMode,
                                    builderStatus: e && e.widgetsState && e.widgetsState[t.id] && e.widgetsState[t.id].builderStatus || g.Regular,
                                    showLoading: null === (v = null === (f = null == e ? void 0 : e.widgetsState) || void 0 === f ? void 0 : f[t.id]) || void 0 === v ? void 0 : v.showLoading,
                                    isRTL: e && e.appContext && e.appContext.isRTL,
                                    subLayoutType: L,
                                    left: P && P.left,
                                    top: P && P.top,
                                    isHeightAuto: D,
                                    isWidthAuto: k,
                                    queryObject: e.queryObject,
                                    boundingBox: null === (y = null === (S = null == j ? void 0 : j.content) || void 0 === S ? void 0 : S[I]) || void 0 === y ? void 0 : y.bbox,
                                    heightLayoutItemSizeModes: null === (w = null == z ? void 0 : z.autoProps) || void 0 === w ? void 0 : w.height
                                }
                            };
                            const ct = dt
                        })(),
                        l
                    })())
            }
        }
    }));
