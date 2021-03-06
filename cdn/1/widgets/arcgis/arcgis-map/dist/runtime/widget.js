System.register(["jimu-core", "jimu-arcgis", "jimu-ui", "jimu-layouts/layout-runtime"], (function (e, t) {
        var i = {},
        s = {},
        o = {},
        a = {};
        return {
            setters: [function (e) {
                    i.AppMode = e.AppMode,
                    i.DataSourceComponent = e.DataSourceComponent,
                    i.DataSourceManager = e.DataSourceManager,
                    i.ErrorBoundary = e.ErrorBoundary,
                    i.ExtentChangeMessage = e.ExtentChangeMessage,
                    i.Immutable = e.Immutable,
                    i.LayoutItemType = e.LayoutItemType,
                    i.MessageManager = e.MessageManager,
                    i.MutableStoreManager = e.MutableStoreManager,
                    i.React = e.React,
                    i.ReactDOM = e.ReactDOM,
                    i.ReactRedux = e.ReactRedux,
                    i.ReactResizeDetector = e.ReactResizeDetector,
                    i.SessionManager = e.SessionManager,
                    i.WidgetType = e.WidgetType,
                    i.appActions = e.appActions,
                    i.classNames = e.classNames,
                    i.css = e.css,
                    i.dataSourceUtils = e.dataSourceUtils,
                    i.esri = e.esri,
                    i.getAppStore = e.getAppStore,
                    i.jsx = e.jsx,
                    i.polished = e.polished,
                    i.portalUrlUtils = e.portalUrlUtils,
                    i.utils = e.utils
                }, function (e) {
                    s.DataSourceTypes = e.DataSourceTypes,
                    s.JimuMapViewComponent = e.JimuMapViewComponent,
                    s.LayerTypes = e.LayerTypes,
                    s.MapViewManager = e.MapViewManager,
                    s.ShowOnMapDataType = e.ShowOnMapDataType,
                    s.geometryUtils = e.geometryUtils,
                    s.loadArcGISJSAPIModules = e.loadArcGISJSAPIModules,
                    s.portalUtils = e.portalUtils,
                    s.zoomToUtils = e.zoomToUtils
                }, function (e) {
                    o.Button = e.Button,
                    o.Dropdown = e.Dropdown,
                    o.DropdownItem = e.DropdownItem,
                    o.DropdownMenu = e.DropdownMenu,
                    o.DropdownToggle = e.DropdownToggle,
                    o.Icon = e.Icon,
                    o.ImageWithParam = e.ImageWithParam,
                    o.MobilePanel = e.MobilePanel,
                    o.MobilePanelManager = e.MobilePanelManager,
                    o.Nav = e.Nav,
                    o.NavItem = e.NavItem,
                    o.NavLink = e.NavLink,
                    o.Popper = e.Popper,
                    o.Radio = e.Radio,
                    o.defaultMessages = e.defaultMessages
                }, function (e) {
                    a.LayoutEntry = e.LayoutEntry,
                    a.PageVisibilityContext = e.PageVisibilityContext,
                    a.ViewVisibilityContext = e.ViewVisibilityContext,
                    a.ViewportVisibilityContext = e.ViewportVisibilityContext
                }
            ],
            execute: function () {
                e((() => {
                        var e = {
                            78780: e => {
                                e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M.1 6.9h6.8V.1H.1v6.8zm6-.8H3.985c.077-.403.25-.78.506-1.102a4.574 4.574 0 001.609.805V6.1zm0-1.128a3.758 3.758 0 01-1.006-.523c.31-.203.65-.358 1.006-.459v.982zM6.1.9v2.266a4.229 4.229 0 00-1.613.73 6.038 6.038 0 01-1.1-1.767l.002-.004-.004-.001A8.16 8.16 0 012.99.9H6.1zM.9.9h1.266a8.7 8.7 0 00.359 1.249A1.93 1.93 0 01.9 3.188V.9zm0 3.09a2.828 2.828 0 002.006-.966c.262.519.594 1 .987 1.428A3.367 3.367 0 003.17 6.1H.9V3.99zM9.1.1v6.8h6.8V.1H9.1zm.8.8h4.063a.373.373 0 01-.045.2.594.594 0 01-.438.176 1.637 1.637 0 00-1.175.49.91.91 0 00-.203.708c-.001.007-.114.736-.607.742a.74.74 0 00-.719.384.828.828 0 00-.026.6H9.9V.9zm5.2 5.2H9.9V5h2.296l-.474-.639a1.562 1.562 0 01-.192-.346c1.041-.03 1.37-1.188 1.365-1.587a.19.19 0 01.028-.154c.031-.037.166-.162.624-.2.419 0 .81-.205 1.049-.549a1.13 1.13 0 00.16-.625h.344v5.2zm-15 9.8h6.8V9.1H.1v6.8zm.8-6h5.2v.46l-2 1.973v.867l-3.2-.089V9.9zm0 4.01l4 .112v-1.355l1.2-1.182V15.1H.9v-1.19zm8.2 1.99h6.8V9.1H9.1v6.8zm6-.8h-1.792l-1.27-1.572 1.468-1.468 1.594 1.605V15.1zm0-5.2v2.628L12.49 9.9h2.61zm-5.2 0h1.46l1.581 1.592-1.978 1.98 1.316 1.628H9.9V9.9z" fill="#000" fill-rule="nonzero"></path></svg>'
                            },
                            73395: e => {
                                e.exports = '<svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero" fill="none"><path d="M7.745 7l4.1 4.1a.527.527 0 01-.745.746L7 7.746l-4.1 4.1a.527.527 0 01-.746-.746l4.1-4.1-4.1-4.1a.527.527 0 01.746-.746l4.1 4.1 4.1-4.1a.527.527 0 01.746.746L7.746 7z" fill="#000"></path><path d="M1 1h12v12H1z"></path></g></svg>'
                            },
                            16940: e => {
                                e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39 32"><path d="M38.784 9.778v2.962H3.236V9.778h.074L13.086.002l2.111 2.111-7.702 7.665h31.29zM3.236 21.628h31.327l-7.702 7.702 2.111 2.111 9.776-9.813h.037v-2.962H3.237v2.962z"></path></svg>'
                            },
                            11759: e => {
                                e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M5 11v5H4v-4.001L0 12v-1h5zm11 0v1l-4-.001V16h-1v-5h5zM5 0v5H0V4l4 .001V0h1zm7 0v4.001L16 4v1h-5V0h1z" fill="#000" fill-rule="nonzero"></path></svg>'
                            },
                            54184: e => {
                                e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M1 11v4.001L5 15v1H0v-5h1zm15 0v5h-5v-1l4 .001V11h1zM5 0v1L1 .999V5H0V0h5zm11 0v5h-1V.999L11 1V0h5z" fill="#000" fill-rule="nonzero"></path></svg>'
                            },
                            66658: e => {
                                e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M14.376 10.573l1.647.927-8 4.5-8-4.5 1.648-.927 1.02.574-.628.353 5.96 3.353 5.96-3.353-.627-.353 1.02-.574zm-.999-2.414l.606.341-5.96 3.353L2.063 8.5l.607-.341-1.02-.574L.023 8.5l8 4.5 8-4.5-1.626-.915-1.02.574zM8.023 1.023l-8 4.5 8 4.5 8-4.5-8-4.5zm-5.96 4.5l5.96-3.352 5.96 3.352-5.96 3.353-5.96-3.353z" fill="#000" fill-rule="nonzero"></path></svg>'
                            },
                            32712: e => {
                                e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 16"><g fill="#000" fill-rule="nonzero"><path d="M4 8h1v3H4V8zM2 9h1v2H2V9zm6-1h1v3H8V8zm4 0h1v3h-1V8z"></path><path d="M15 12V6h-2V5h1V2h-3v1L4 1.05V0H1v3h1v3H0v6h2v1H1v3h3v-1h7v1h3v-3h-1v-1h2zm-3-9h1v1h-1V3zm-8-.92L11 4v1h1v1H3V3h1v-.92zM2 1h1v1H2V1zm1 14H2v-1h1v1zm8-1H4v-1H3v-1h9v1h-1v1zm2 1h-1v-1h1v1zM1 11V7h13v4H1z"></path><path d="M6 9h1v2H6V9zm4 0h1v2h-1V9z"></path></g></svg>'
                            },
                            39376: e => {
                                e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 10"><path d="M0 10h15V4H0v6zm1-5h13v4h-1V6h-1v3h-1V7h-1v2H9V6H8v3H7V7H6v2H5V6H4v3H3V7H2v2H1V5zm11-5v1H3V0H0v3h3V2h9v1h3V0h-3zM2 2H1V1h1v1zm12 0h-1V1h1v1z" fill="#000" fill-rule="nonzero"></path></svg>'
                            },
                            22591: e => {
                                e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M0 9v6h16V9H0zm15 3h-1v2h-1v-3h-1v3h-1v-2h-1v2H9v-3H8v3H7v-2H6v2H5v-3H4v3H3v-2H2v2H1v-4h14v2zm.18-7.5l-2.85 2.85-.71-.7L13.23 5H9V4h4.32l-1.7-1.69.71-.7 2.85 2.89zM2.68 4H7v1H2.77l1.61 1.65-.71.7L.82 4.5l2.85-2.85.71.7L2.68 4z" fill="#000" fill-rule="nonzero"></path></svg>'
                            },
                            80017: e => {
                                e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M7 1a6 6 0 100 12A6 6 0 007 1zm0 13a7 7 0 115.621-2.828l-.222.284 3.405 3.404a.668.668 0 01-.944.944L11.456 12.4A6.974 6.974 0 017 14z" fill="#000" fill-rule="nonzero"></path></svg>'
                            },
                            92272: e => {
                                e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="#363636" fill-rule="nonzero"><path d="M.25 3l8.642 4.969-3.422.738 2.723 5.45-2.886 1.667-2.724-5.45-2.351 2.595L.25 3zm.996 1.726l-.01 5.644 1.527-1.684 2.909 5.771 1.155-.667-2.91-5.77 2.222-.48-4.893-2.814z"></path><path d="M10.318 0C13.456 0 16 2.462 16 5.5S13.456 11 10.318 11a5.796 5.796 0 01-3.023-.842l-.22-.142.54-.752c.788.53 1.722.82 2.703.82 2.615 0 4.735-2.053 4.735-4.584 0-2.531-2.12-4.583-4.735-4.583-1.916 0-3.617 1.112-4.354 2.779l-.078.187L5 3.56C5.827 1.435 7.933 0 10.318 0z"></path></g></svg>'
                            },
                            66131: e => {
                                e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M16 0v16H0V0h16zM7.077 1H1v14h10.561L7.078 7.616 7.077 1zM15 6.391L9.56 9.779 12.73 15H15V6.391zM15 1H8.077v6.335l.965 1.589L15 5.213V1z" fill="#363636" fill-rule="nonzero"></path></svg>'
                            },
                            58855: e => {
                                e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 16"><g fill="#363636" fill-rule="nonzero"><path d="M.75 3l8.642 4.969-3.422.738 2.723 5.45-2.886 1.667-2.724-5.45-2.351 2.595L.75 3zm.996 1.726l-.01 5.644 1.527-1.684 2.909 5.771 1.155-.667-2.91-5.77 2.222-.48-4.893-2.814z"></path><path d="M8.721 0c1.82 0 2.865 1.556 2.865 4.35 0 .462.12.66.385.774.219.093.473.126.99.131h.551l.397.009c1.251.05 1.807.336 2.04 1.333.41 1.76-1.62 3.114-5.904 4.313l-.326.09-.245-.999.64-.18c3.516-1.02 5.088-2.089 4.88-2.979-.094-.407-.382-.535-1.304-.553l-.787-.002c-.62-.008-.943-.055-1.3-.207-.648-.276-.998-.859-.998-1.73 0-2.286-.694-3.318-1.884-3.318-.731 0-1.68.55-2.815 1.685l-.215.22L5 2.203C6.398.748 7.626 0 8.721 0z"></path></g></svg>'
                            },
                            54950: e => {
                                e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="#363636" fill-rule="nonzero"><path d="M.25 3l8.642 4.969-3.422.738 2.723 5.45-2.886 1.667-2.724-5.45-2.351 2.595L.25 3zm.996 1.726l-.01 5.644 1.527-1.684 2.909 5.771 1.155-.667-2.91-5.77 2.222-.48-4.893-2.814zM9.72 1.11l.588-.808 5.082 3.7-4.577 2.656L14.61 9.49l-.598.801L9 6.555l4.56-2.649z"></path></g></svg>'
                            },
                            87861: e => {
                                e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M.25 3l8.642 4.969-3.422.738 2.723 5.45-2.886 1.667-2.724-5.45-2.351 2.595L.25 3zm.996 1.726l-.01 5.644 1.527-1.684 2.909 5.771 1.155-.667-2.91-5.77 2.222-.48-4.893-2.814zM12 6a2 2 0 100-4 2 2 0 000 4z" fill="#363636" fill-rule="nonzero"></path></svg>'
                            },
                            21253: e => {
                                e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M.25 3l8.642 4.969-3.422.738 2.723 5.45-2.886 1.667-2.724-5.45-2.351 2.595L.25 3zm.996 1.726l-.01 5.644 1.527-1.684 2.909 5.771 1.155-.667-2.91-5.77 2.222-.48-4.893-2.814zM16 0v11H8.5v-1H15V1H6v2.5H5V0h11z" fill="#363636" fill-rule="nonzero"></path></svg>'
                            },
                            23596: e => {
                                e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M7.682 6.318a4.5 4.5 0 01.335 5.99l2.847 2.849-.707.707-2.848-2.848a4.5 4.5 0 11.373-6.698zm-5.657.707a3.5 3.5 0 104.95 4.95 3.5 3.5 0 00-4.95-4.95zM16 0v11H9.5v-1h3.099L10 5.153V1H6v2.5H5V0h11zm-1 5.954L12.637 7.83 13.801 10H15V5.954zM15 1h-3.981v3.813l1.055 1.967L15 4.457V1z" fill="#363636" fill-rule="nonzero"></path></svg>'
                            },
                            54357: e => {
                                e.exports = '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 6.5a.5.5 0 011 0v6a.5.5 0 01-1 0v-6zM9.5 6a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5z" fill="#000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11 0H5a1 1 0 00-1 1v2H.5a.5.5 0 000 1h1.6l.81 11.1a1 1 0 00.995.9h8.19a1 1 0 00.995-.9L13.9 4h1.6a.5.5 0 000-1H12V1a1 1 0 00-1-1zm0 3V1H5v2h6zm1.895 1h-9.79l.8 11h8.19l.8-11z" fill="#000"></path></svg>'
                            },
                            33630: e => {
                                e.exports = '<svg viewBox="0 0 9 5" xmlns="http://www.w3.org/2000/svg"><path d="M4.128 4.587L.751.834A.5.5 0 011.123 0h6.754a.5.5 0 01.372.834L4.872 4.587a.5.5 0 01-.744 0z" fill="#000" fill-rule="evenodd"></path></svg>'
                            },
                            37580: e => {
                                e.exports = '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero" fill="none"><path d="M13 7.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm-6.5 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM0 7.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" fill="#000"></path><path d="M0 0h16v16H0z"></path></g></svg>'
                            },
                            85277: e => {
                                e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M20.889 1.333h6.222a3.556 3.556 0 013.556 3.556v6.222a3.556 3.556 0 01-3.556 3.556h-6.222a3.556 3.556 0 01-3.556-3.556V4.889a3.556 3.556 0 013.556-3.556zM20 4v8h8V4h-8zM4.889 17.333h6.222a3.556 3.556 0 013.556 3.556v6.222a3.556 3.556 0 01-3.556 3.556H4.889a3.556 3.556 0 01-3.556-3.556v-6.222a3.556 3.556 0 013.556-3.556zM4 20v8h8v-8H4zm20 8a4 4 0 100-8 4 4 0 000 8zm0 2.667a6.667 6.667 0 110-13.334 6.667 6.667 0 010 13.334zM4.981 12h6.037L7.999 5.963 4.98 12zm4.212-9.615l5.176 10.352a1.334 1.334 0 01-1.192 1.93H2.825a1.333 1.333 0 01-1.192-1.929L6.809 2.386a1.332 1.332 0 012.385 0z"></path></svg>'
                            },
                            26826: e => {
                                "use strict";
                                e.exports = s
                            },
                            48891: e => {
                                "use strict";
                                e.exports = i
                            },
                            74758: e => {
                                "use strict";
                                e.exports = a
                            },
                            30726: e => {
                                "use strict";
                                e.exports = o
                            }
                        },
                        t = {};
                        function n(i) {
                            var s = t[i];
                            if (void 0 !== s)
                                return s.exports;
                            var o = t[i] = {
                                exports: {}
                            };
                            return e[i](o, o.exports, n),
                            o.exports
                        }
                        n.d = (e, t) => {
                            for (var i in t)
                                n.o(t, i) && !n.o(e, i) && Object.defineProperty(e, i, {
                                    enumerable: !0,
                                    get: t[i]
                                })
                        },
                        n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
                        n.r = e => {
                            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                                value: "Module"
                            }),
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            })
                        },
                        n.p = "";
                        var r = {};
                        return n.p = window.jimuConfig.baseUrl,
                        (() => {
                            "use strict";
                            n.r(r),
                            n.d(r, {
                            default:
                                () => Ie
                            });
                            var e,
                            t = n(48891);
                            !function (e) {
                                e.auto = "auto",
                                e.low = "low",
                                e.medium = "medium",
                                e.high = "high"
                            }
                            (e || (e = {}));
                            var i = n(26826),
                            s = n(30726),
                            o = function (e, t, i, s) {
                                return new(i || (i = Promise))((function (o, a) {
                                        function n(e) {
                                            try {
                                                l(s.next(e))
                                            } catch (e) {
                                                a(e)
                                            }
                                        }
                                        function r(e) {
                                            try {
                                                l(s.throw(e))
                                            } catch (e) {
                                                a(e)
                                            }
                                        }
                                        function l(e) {
                                            var t;
                                            e.done ? o(e.value) : (t = e.value, t instanceof i ? t : new i((function (e) {
                                                        e(t)
                                                    }))).then(n, r)
                                        }
                                        l((s = s.apply(e, t || [])).next())
                                    }))
                            };
                            function a(e, t, s) {
                                return o(this, void 0, void 0, (function  * () {
                                        return yield new Promise(((o, a) => (0, i.loadArcGISJSAPIModules)(["esri/layers/FeatureLayer"]).then((i => {
                                                        if (t.features.length < 1)
                                                            return o(null); {
                                                            let n;
                                                            [n] = i;
                                                            const r = t.features[0].layer,
                                                            l = [],
                                                            p = {};
                                                            for (let e = 0; e < r.fields.length; e++) {
                                                                const t = {
                                                                    name: (a = r.fields[e]).name.replace(/\./g, "_").replace(/\(/g, "_").replace(/\)/g, "_"),
                                                                    alias: a.alias,
                                                                    type: a.type
                                                                };
                                                                p[r.fields[e].name] = t.name,
                                                                l.push(t)
                                                            }
                                                            const h = [];
                                                            for (const e in t.features[0].attributes)
                                                                if (p[e]) {
                                                                    const t = {
                                                                        fieldName: p[e],
                                                                        label: e
                                                                    };
                                                                    h.push(t)
                                                                }
                                                            const c = [];
                                                            t.features.forEach(((e, t) => {
                                                                    const i = e;
                                                                    if (i.attributes) {
                                                                        for (const e in i.attributes)
                                                                            i.attributes[p[e]] = i.attributes[e];
                                                                        i.attributes.exbfid = t
                                                                    } else
                                                                        i.attributes = {
                                                                            exbfid: t
                                                                        };
                                                                    c.push(i)
                                                                }));
                                                            const d = new n({
                                                                id: s,
                                                                title: r.title,
                                                                source: c,
                                                                fields: l,
                                                                outFields: ["*"],
                                                                objectIdField: "exbfid",
                                                                renderer: r.renderer,
                                                                popupEnabled: !0,
                                                                popupTemplate: {
                                                                    title: "information",
                                                                    content: [{
                                                                            type: "fields",
                                                                            fieldInfos: h
                                                                        }
                                                                    ]
                                                                }
                                                            });
                                                            e.map.add(d),
                                                            d.on("layerview-create", (e => o(null)))
                                                        }
                                                        var a
                                                    }))))
                                    }))
                            }
                            function l(e) {
                                return o(this, void 0, void 0, (function  * () {
                                        return yield(0, i.loadArcGISJSAPIModules)(["esri/geometry/Extent"]).then((t => o(this, void 0, void 0, (function  * () {
                                                        let i;
                                                        if ([i] = t, !e || !e.length)
                                                            return yield Promise.resolve(null);
                                                        let s,
                                                        o = null;
                                                        const a = e.length;
                                                        for (s = 0; s < a; s++) {
                                                            const t = e[s];
                                                            if (!t)
                                                                continue;
                                                            let a = t.extent;
                                                            if (!a && "point" === t.type) {
                                                                const e = t;
                                                                e.x && e.y && (a = new i({
                                                                        xmax: e.x,
                                                                        xmin: e.x,
                                                                        ymax: e.y,
                                                                        ymin: e.y,
                                                                        zmax: e.z,
                                                                        zmin: e.z,
                                                                        spatialReference: e.spatialReference
                                                                    }))
                                                            }
                                                            a && (o = o ? o.union(a) : a)
                                                        }
                                                        return o.width < 0 && o.height < 0 ? yield Promise.resolve(null) : yield Promise.resolve(o)
                                                    }))))
                                    }))
                            }
                            function p(e, t) {
                                return (0, i.loadArcGISJSAPIModules)(["esri/tasks/support/Query"]).then((i => {
                                        let s;
                                        [s] = i;
                                        const o = new s;
                                        return o.where = t,
                                        o.outFields = ["*"],
                                        o.returnGeometry = !0,
                                        e.queryFeatures(o).then((e => e))
                                    }))
                            }
                            function h(e, s, o) {
                                if (o.view) {
                                    let t = o.view;
                                    if (!t)
                                        return null;
                                    p(t.layer, s).then((i => {
                                            if (i && i.features && i.features.length > 0) {
                                                const s = m(t.layer.geometryType);
                                                u(e.view, i.features, s)
                                            }
                                        }))
                                } else (0, i.loadArcGISJSAPIModules)(["esri/layers/FeatureLayer"]).then((i => {
                                            let a;
                                            [a] = i;
                                            let n = new a({
                                                url: t.dataSourceUtils.getUrlByLayer(o.layer)
                                            });
                                            n.load().then((() => {
                                                    p(n, s).then((t => {
                                                            if (t && t.features && t.features.length > 0) {
                                                                const i = m(t.features[0].geometry.type);
                                                                u(e.view, t.features, i)
                                                            }
                                                        }))
                                                }))
                                        }))
                            }
                            let c = null;
                            function d(e, t, i) {
                                var s;
                                if (i.view) {
                                    let o = i.view;
                                    p(null === (s = null == o ? void 0 : o.layer) || void 0 === s ? void 0 : s.associatedLayer, t).then((t => {
                                            if (t && t.features && t.features.length > 0) {
                                                const i = o.layer.objectIdField,
                                                s = t.features.map((e => e.attributes[i]));
                                                let a = 0;
                                                const n = 6;
                                                let r = [255, 255, 0, .8];
                                                const l = e.view.highlightOptions,
                                                p = function () {
                                                    a < n ? (a++, r ? (r = null, e.view.highlightOptions = {
                                                                color: [0, 0, 0, 0]
                                                            }, c && c.remove(), c = o.highlight(s)) : (r = [255, 255, 0, .8], e.view.highlightOptions = {
                                                                color: r
                                                            }, c && c.remove(), c = o.highlight(s)), setTimeout(p, 500)) : (e.view.highlightOptions = l, c && c.remove())
                                                };
                                                setTimeout(p, 500)
                                            }
                                        }))
                                }
                            }
                            function u(e, t, s) {
                                (0, i.loadArcGISJSAPIModules)(["esri/Graphic"]).then((i => {
                                        let o;
                                        [o] = i,
                                        function (t, i) {
                                            const a = [];
                                            let n = 0;
                                            for (let e = 0; e < t.length; e++) {
                                                const i = new o({
                                                    geometry: t[e].geometry,
                                                    symbol: s,
                                                    attributes: t[e].attributes
                                                });
                                                a.push(i)
                                            }
                                            const r = function () {
                                                e.graphics.addMany(a),
                                                setTimeout((() => {
                                                        e.graphics.removeMany(a),
                                                        n += 1,
                                                        n < 3 && setTimeout((() => {
                                                                r()
                                                            }), 500)
                                                    }), 500)
                                            };
                                            r()
                                        }
                                        (t)
                                    }))
                            }
                            function m(e) {
                                return ["point", "multipoint"].includes(e) ? {
                                    type: "simple-marker",
                                    style: "circle",
                                    color: [255, 255, 0, .8],
                                    size: "16px",
                                    outline: {
                                        color: [255, 255, 0, .8],
                                        width: 3
                                    }
                                }
                                 : ["polyline"].includes(e) ? {
                                    type: "simple-line",
                                    color: [255, 255, 0, .8],
                                    width: 3,
                                    style: "solid"
                                }
                                 : ["polygon", "extent"].includes(e) ? {
                                    type: "simple-fill",
                                    color: [255, 255, 0, .5],
                                    style: "solid",
                                    outline: {
                                        color: [255, 255, 0, .8],
                                        width: 3
                                    }
                                }
                                 : ["mesh"].includes(e) ? {
                                    type: "mesh-3d",
                                    symbolLayers: [{
                                            type: "fill",
                                            material: {
                                                color: [255, 255, 0, .8]
                                            }
                                        }
                                    ]
                                }
                                 : null
                            }
                            function g(e) {
                                switch (e.type) {
                                case "point":
                                    return e;
                                case "extent":
                                    return e.center;
                                case "polygon":
                                    return e.centroid;
                                case "polyline":
                                    return e.extent.center;
                                default:
                                    return e && e.extent ? e.extent.center : void 0
                                }
                            }
                            function w(e) {
                                return !window.jimuConfig.isInBuilder || e !== t.AppMode.Design
                            }
                            const M = t.React.createContext({
                                mapWidgetId: null,
                                mapWidgetHeight: null,
                                isShowMapSwitchBtn: !1,
                                isShowClearShowOnMapDataBtn: !1,
                                isFullScreen: !1,
                                dataSourceIds: [],
                                activeDataSourceId: null,
                                switchMap: () => {},
                                fullScreenMap: () => {},
                                initialMapState: null,
                                mobilePanelContainer: null,
                                onMobilePanelContentChange: e => {}
                            });
                            var f = function (e, t, i, s) {
                                return new(i || (i = Promise))((function (o, a) {
                                        function n(e) {
                                            try {
                                                l(s.next(e))
                                            } catch (e) {
                                                a(e)
                                            }
                                        }
                                        function r(e) {
                                            try {
                                                l(s.throw(e))
                                            } catch (e) {
                                                a(e)
                                            }
                                        }
                                        function l(e) {
                                            var t;
                                            e.done ? o(e.value) : (t = e.value, t instanceof i ? t : new i((function (e) {
                                                        e(t)
                                                    }))).then(n, r)
                                        }
                                        l((s = s.apply(e, t || [])).next())
                                    }))
                            };
                            const S = n(16940);
                            var v;
                            !function (e) {
                                e.Loading = "LOADING",
                                e.Loadok = "LOADOK",
                                e.LoadError = "LOADERROR"
                            }
                            (v || (v = {}));
                            class y extends t.React.PureComponent {
                                constructor(n) {
                                    super(n),
                                    this.highLightHandles = {},
                                    this.mapBaseViewEventHandles = {},
                                    this.dsManager = t.DataSourceManager.getInstance(),
                                    this.onExtented = null,
                                    this.isFirstReceiveMessage = !0,
                                    this.isRequestingMap = !1,
                                    this.__unmount = !1,
                                    this.startRenderMap = () => {
                                        (0, i.loadArcGISJSAPIModules)(["esri/geometry/Extent", "esri/Viewpoint"]).then((e => {
                                                [this.Extent, this.Viewpoint] = e,
                                                this.__unmount || this.setState({
                                                    isModulesLoaded: !0
                                                })
                                            }))
                                    },
                                    this.analysisMapView = () => f(this, void 0, void 0, (function  * () {
                                            return this.mapView ? yield Promise.resolve() : this.MapView ? yield this.initMapView() : yield(0, i.loadArcGISJSAPIModules)(["esri/geometry/Geometry", "esri/webmap/InitialViewProperties", "esri/Basemap", "esri/layers/TileLayer", "esri/views/MapView", "esri/WebMap", "esri/portal/Portal", "esri/portal/PortalItem", "esri/Color"]).then((e => f(this, void 0, void 0, (function  * () {
                                                            return [this.Geometry, this.InitialViewProperties, this.Basemap, this.TileLayer, this.MapView, this.WebMap, this.Portal, this.PortalItem, this.Color] = e,
                                                            yield this.initMapView()
                                                        }))))
                                        })),
                                    this.analysisSceneView = () => f(this, void 0, void 0, (function  * () {
                                            return this.sceneView ? yield Promise.resolve() : this.SceneView ? yield this.initSceneView() : yield(0, i.loadArcGISJSAPIModules)(["esri/views/SceneView", "esri/WebScene", "esri/portal/Portal", "esri/portal/PortalItem", "esri/Color"]).then((e => f(this, void 0, void 0, (function  * () {
                                                            return [this.SceneView, this.WebScene, this.Portal, this.PortalItem, this.Color] = e,
                                                            yield this.initSceneView()
                                                        }))))
                                        })),
                                    this.generateViewPointFromInitialMapState = e => "2d" === e.viewType ? new this.Viewpoint({
                                        targetGeometry: this.Extent.fromJSON(e.extent),
                                        rotation: e.rotation
                                    }) : this.Viewpoint.fromJSON(e.viewPoint),
                                    this.cloneMap = () => f(this, void 0, void 0, (function  * () {
                                            let e = null;
                                            const s = this.getDsJsonFromDsId(this.props.dataSourceId);
                                            let o = null;
                                            if (s.type === i.DataSourceTypes.WebMap && (o = this.WebMap), s.type === i.DataSourceTypes.WebScene && (o = this.WebScene), s.portalUrl) {
                                                const i = new this.Portal({
                                                    url: t.portalUrlUtils.getHostUrlByOrgUrl(s.portalUrl)
                                                });
                                                e = new o({
                                                    portalItem: new this.PortalItem({
                                                        id: s.itemId,
                                                        portal: i
                                                    })
                                                })
                                            } else
                                                e = new o({
                                                    portalItem: new this.PortalItem({
                                                        id: s.itemId
                                                    })
                                                });
                                            return t.dataSourceUtils.getWhetherUseProxy() ? yield e.load().then((() => f(this, void 0, void 0, (function  * () {
                                                            return yield e.when((() => f(this, void 0, void 0, (function  * () {
                                                                            return (e.tables ? e.tables.toArray() : []).forEach((e => {
                                                                                    const i = t.dataSourceUtils.getUrlByLayer(e);
                                                                                    if (!i)
                                                                                        return;
                                                                                    const s = t.dataSourceUtils.getDataSourceProxyUrl(i);
                                                                                    s && (e.url = s)
                                                                                })),
                                                                            e.allLayers.toArray().forEach((e => {
                                                                                    const i = t.dataSourceUtils.getUrlByLayer(e);
                                                                                    if (!i)
                                                                                        return;
                                                                                    const s = t.dataSourceUtils.getDataSourceProxyUrl(i);
                                                                                    s && (e.url = s)
                                                                                })),
                                                                            Promise.resolve(e)
                                                                        }))))
                                                        })))) : Promise.resolve(e)
                                        })),
                                    this.getInitViewPointForDefaultWebMap = () => {
                                        const e = this.props.defaultMapInfo && this.props.defaultMapInfo.defaultExtent;
                                        let t = null;
                                        return t = this.props.baseWidgetProps.config.initialMapState && this.props.baseWidgetProps.config.initialMapState.viewPoint ? this.generateViewPointFromInitialMapState(this.props.baseWidgetProps.config.initialMapState) : new this.Viewpoint({
                                            targetGeometry: new this.Extent({
                                                xmin: e && e.xmin,
                                                ymin: e && e.ymin,
                                                xmax: e && e.xmax,
                                                ymax: e && e.ymax,
                                                spatialReference: {
                                                    wkid: e.spatialReference.wkid
                                                }
                                            })
                                        }),
                                        t
                                    },
                                    this.getDefaultWebMap = () => {
                                        const e = this.props.defaultMapInfo && this.props.defaultMapInfo.defaultExtent;
                                        let t = null;
                                        return t = new this.Viewpoint({
                                            targetGeometry: new this.Extent({
                                                xmin: e && e.xmin,
                                                ymin: e && e.ymin,
                                                xmax: e && e.xmax,
                                                ymax: e && e.ymax,
                                                spatialReference: {
                                                    wkid: e.spatialReference.wkid
                                                }
                                            })
                                        }),
                                        new this.WebMap({
                                            portalItem: {
                                                id: this.props.defaultMapInfo.defaultMapId,
                                                portal: {
                                                    url: this.props.baseWidgetProps.portalUrl
                                                }
                                            },
                                            initialViewProperties: new this.InitialViewProperties({
                                                spatialReference: e && e.spatialReference,
                                                viewpoint: t
                                            })
                                        })
                                    },
                                    this.initMapView = () => f(this, void 0, void 0, (function  * () {
                                            if (this.extentWatch = null, this.fatalErrorWatch = null, this.mapView && !this.isRequestingMap)
                                                return yield Promise.resolve();
                                            if (this.isRequestingMap)
                                                return;
                                            let e;
                                            if (this.isRequestingMap = !0, this.props.isDefaultMap)
                                                e = {
                                                    map: this.getDefaultWebMap(),
                                                    container: this.mapContainer,
                                                    viewpoint: this.getInitViewPointForDefaultWebMap(),
                                                    rotation: this.props.baseWidgetProps.config.initialMapState && this.props.baseWidgetProps.config.initialMapState.rotation
                                                };
                                            else {
                                                const t = yield this.cloneMap();
                                                e = this.props.baseWidgetProps.config.initialMapState ? {
                                                    map: t,
                                                    container: this.mapContainer,
                                                    viewpoint: this.props.baseWidgetProps.config.initialMapState && this.generateViewPointFromInitialMapState(this.props.baseWidgetProps.config.initialMapState)
                                                }
                                                 : {
                                                    map: t,
                                                    container: this.mapContainer
                                                }
                                            }
                                            if (!window.jimuConfig.isInBuilder && this.props.baseWidgetProps.queryObject[this.props.baseWidgetProps.id]) {
                                                const t = this.props.baseWidgetProps.queryObject[this.props.baseWidgetProps.id].substr("extent=".length);
                                                let i;
                                                try {
                                                    i = new this.Extent(JSON.parse(t))
                                                } catch (e) {
                                                    console.error("Bad extent URL parameter.")
                                                }
                                                i && (e.extent = i)
                                            }
                                            return this.mapView ? yield Promise.resolve() : (this.mapView = new this.MapView(e), this.mapView.popup.spinnerEnabled = !1, this.mapView.ui.exbMapTools = {}, (this.props.isDefaultMap || this.mapDs && this.mapDs.id === this.props.dataSourceId) && this.createJimuMapView(), this.mapView.when((() => {
                                                        var e,
                                                        i,
                                                        s;
                                                        this.setState({
                                                            mapLoadStatus: v.Loadok
                                                        }, (() => {
                                                                this.props.onMapLoaded(this.props.dataSourceId, v.Loadok)
                                                            })),
                                                        this.extentWatch || Promise.allSettled(this.mapView.map.allLayers.map((e => f(this, void 0, void 0, (function  * () {
                                                                            return yield this.mapView.whenLayerView(e)
                                                                        }))))).then((() => !0)).catch((() => !0)).then((() => {
                                                                this.extentWatch = this.mapView.watch("extent", (e => {
                                                                            e && (clearTimeout(this.onExtented), this.onExtented = setTimeout((() => {
                                                                                            if (e)
                                                                                                if (this.mapView.isReceiveExtentChange)
                                                                                                    this.mapView.isReceiveExtentChange = !1;
                                                                                                else {
                                                                                                    const i = new t.ExtentChangeMessage(this.props.baseWidgetProps.id, e);
                                                                                                    i.addRelatedWidgetId(this.props.baseWidgetProps.id),
                                                                                                    this.props.onExtentChanged(this.props.dataSourceId, i)
                                                                                                }
                                                                                        }), 200))
                                                                        }))
                                                            })),
                                                        this.fatalErrorWatch || (this.fatalErrorWatch = this.mapView.watch("fatalError", (e => {
                                                                        e && (this.mapView.isInCaching ? this.setState({
                                                                                isMapCrashed: !0
                                                                            }) : (console.error("Fatal Error! View has lost its WebGL context. Attempting to recover..."), this.mapView.tryFatalErrorRecovery()))
                                                                    }))),
                                                        (null === (s = null === (i = null === (e = this.props.baseWidgetProps) || void 0 === e ? void 0 : e.mutableStateProps) || void 0 === i ? void 0 : i.zoomToFeatureActionValue) || void 0 === s ? void 0 : s.value) || this.goHome(!1).then((() => {
                                                                const e = new t.ExtentChangeMessage(this.props.baseWidgetProps.id, this.mapView.extent);
                                                                e.addRelatedWidgetId(this.props.baseWidgetProps.id),
                                                                this.props.onExtentChanged(this.props.dataSourceId, e),
                                                                this.props.onViewChanged && this.props.onViewChanged({
                                                                    dataSourceId: this.props.dataSourceId,
                                                                    viewpoint: this.mapView.viewpoint.clone()
                                                                })
                                                            }))
                                                    })), this.isRequestingMap = !1, this.bindMapBaseViewEvent(this.mapView), Promise.resolve())
                                        })),
                                    this.initSceneView = () => f(this, void 0, void 0, (function  * () {
                                            if (this.extentWatch = null, this.fatalErrorWatch = null, this.sceneView && !this.isRequestingMap)
                                                return yield Promise.resolve();
                                            if (this.isRequestingMap)
                                                return;
                                            this.isRequestingMap = !0;
                                            const i = {
                                                map: yield this.cloneMap(),
                                                container: this.mapContainer
                                            };
                                            this.props.baseWidgetProps.config.initialMapState && (i.viewpoint = this.props.baseWidgetProps.config.initialMapState && this.generateViewPointFromInitialMapState(this.props.baseWidgetProps.config.initialMapState));
                                            const s = this.props.baseWidgetProps.config.sceneQualityMode;
                                            return s && s !== e.auto ? i.qualityProfile = s : i.qualityProfile = e.low,
                                            this.sceneView ? yield Promise.resolve() : (this.sceneView = new this.SceneView(i), this.sceneView.popup.spinnerEnabled = !1, this.sceneView.ui.exbMapTools = {}, this.mapDs && this.mapDs.id === this.props.dataSourceId && this.createJimuMapView(), this.sceneView.when((() => {
                                                        var e,
                                                        i,
                                                        s;
                                                        this.setState({
                                                            mapLoadStatus: v.Loadok
                                                        }, (() => {
                                                                this.props.onMapLoaded(this.props.dataSourceId, v.Loadok)
                                                            })),
                                                        this.extentWatch || Promise.allSettled(this.sceneView.map.allLayers.map((e => f(this, void 0, void 0, (function  * () {
                                                                            return yield this.sceneView.whenLayerView(e)
                                                                        }))))).then((() => !0)).catch((() => !0)).then((() => {
                                                                this.extentWatch = this.sceneView.watch("extent", (e => {
                                                                            e && (clearTimeout(this.onExtented), this.onExtented = setTimeout((() => {
                                                                                            if (e)
                                                                                                if (this.sceneView.isReceiveExtentChange)
                                                                                                    this.sceneView.isReceiveExtentChange = !1;
                                                                                                else {
                                                                                                    const i = new t.ExtentChangeMessage(this.props.baseWidgetProps.id, e);
                                                                                                    i.addRelatedWidgetId(this.props.baseWidgetProps.id),
                                                                                                    this.props.onExtentChanged(this.props.dataSourceId, i)
                                                                                                }
                                                                                        }), 100))
                                                                        }))
                                                            })),
                                                        this.fatalErrorWatch || (this.fatalErrorWatch = this.sceneView.watch("fatalError", (e => {
                                                                        e && (this.sceneView.isInCaching ? this.setState({
                                                                                isMapCrashed: !0
                                                                            }) : (this.sceneView.tryFatalErrorRecovery(), console.error("Fatal Error! View has lost its WebGL context. Attempting to recover...")))
                                                                    }))),
                                                        (null === (s = null === (i = null === (e = this.props.baseWidgetProps) || void 0 === e ? void 0 : e.mutableStateProps) || void 0 === i ? void 0 : i.zoomToFeatureActionValue) || void 0 === s ? void 0 : s.value) || this.goHome(!1).then((() => {
                                                                const e = new t.ExtentChangeMessage(this.props.baseWidgetProps.id, this.sceneView.extent);
                                                                e.addRelatedWidgetId(this.props.baseWidgetProps.id),
                                                                this.props.onExtentChanged(this.props.dataSourceId, e),
                                                                this.props.onViewChanged && this.props.onViewChanged({
                                                                    dataSourceId: this.props.dataSourceId,
                                                                    viewpoint: this.sceneView.viewpoint.clone()
                                                                })
                                                            }))
                                                    })), this.isRequestingMap = !1, this.bindMapBaseViewEvent(this.sceneView), Promise.resolve())
                                        })),
                                    this.updateMapView = e => {
                                        const t = `${this.props.baseWidgetProps.id}-${this.props.dataSourceId}`;
                                        let s = null;
                                        t && (s = i.MapViewManager.getInstance().getJimuMapViewById(t)),
                                        s && s.getIsEditing() || (e.disablePopUp ? (this.mapView.popup.close(), this.mapView.popup.autoOpenEnabled = !1) : this.mapView.popup.autoOpenEnabled = !0, s && (s.isEnablePopup = !e.disablePopUp)),
                                        e.selectionHighlightColor && (this.mapView.highlightOptions.color = new this.Color(e.selectionHighlightColor)),
                                        this.mapView.ui && (this.mapView.ui.components = [])
                                    },
                                    this.updateSceneView = e => {
                                        const t = `${this.props.baseWidgetProps.id}-${this.props.dataSourceId}`;
                                        let s = null;
                                        t && (s = i.MapViewManager.getInstance().getJimuMapViewById(t)),
                                        s && s.getIsEditing() || (e.disablePopUp ? (this.sceneView.popup.close(), this.sceneView.popup.autoOpenEnabled = !1) : this.sceneView.popup.autoOpenEnabled = !0, s && (s.isEnablePopup = !e.disablePopUp)),
                                        e.selectionHighlightColor && (this.sceneView.highlightOptions.color = new this.Color(e.selectionHighlightColor));
                                        const o = e.sceneQualityMode;
                                        o && o !== this.sceneView.qualityProfile && (this.sceneView.qualityProfile = o),
                                        this.sceneView.ui && (this.sceneView.ui.components = [])
                                    },
                                    this.bindMapBaseViewEvent = e => {
                                        e && (this.mapBaseViewEventHandles["mouse-wheel"] && (this.mapBaseViewEventHandles["mouse-wheel"].remove(), this.mapBaseViewEventHandles["mouse-wheel"] = null), this.mapBaseViewEventHandles["mouse-wheel"] = e.on("mouse-wheel", (t => {
                                                        if (this.props.baseWidgetProps.config.disableScroll)
                                                            return t.stopPropagation(), void this.handleDisableWheel();
                                                        this.props.onViewChanged && this.props.onViewChanged({
                                                            dataSourceId: this.props.dataSourceId,
                                                            viewpoint: e.viewpoint.clone()
                                                        })
                                                    })), this.mapBaseViewEventHandles.drag && (this.mapBaseViewEventHandles.drag.remove(), this.mapBaseViewEventHandles.drag = null), this.mapBaseViewEventHandles.drag = e.on("drag", (() => {
                                                        this.props.onViewChanged && this.props.onViewChanged({
                                                            dataSourceId: this.props.dataSourceId,
                                                            viewpoint: e.viewpoint.clone()
                                                        })
                                                    })), this.mapBaseViewEventHandles.click && (this.mapBaseViewEventHandles.click.remove(), this.mapBaseViewEventHandles.click = null), this.mapBaseViewEventHandles.click = e.on("click", (() => {
                                                        for (const e in this.highLightHandles)
                                                            this.highLightHandles[e].remove()
                                                    })))
                                    },
                                    this.createJimuMapView = () => {
                                        i.MapViewManager.getInstance().createJimuMapView({
                                            mapWidgetId: this.props.baseWidgetProps.id,
                                            dataSourceId: this.props.dataSourceId,
                                            view: this.mapView || this.sceneView,
                                            isEnablePopup: this.props.baseWidgetProps.config && !this.props.baseWidgetProps.config.disablePopUp
                                        });
                                        const e = this.mapView || this.sceneView;
                                        if (e)
                                            e.when((() => {
                                                    const e = `${this.props.baseWidgetProps.id}-${this.props.dataSourceId}`,
                                                    t = i.MapViewManager.getInstance().getJimuMapViewById(e);
                                                    t && (t.view ? t.whenJimuMapViewLoaded().then((() => {
                                                                t.view ? (this.props.onJimuMapViewCreated(), this.setState({
                                                                        mapBaseJimuMapView: t
                                                                    })) : i.MapViewManager.getInstance().destroyJimuMapView(e)
                                                            })) : i.MapViewManager.getInstance().destroyJimuMapView(e))
                                                }));
                                        else {
                                            const e = `${this.props.baseWidgetProps.id}-${this.props.dataSourceId}`;
                                            i.MapViewManager.getInstance().destroyJimuMapView(e)
                                        }
                                    },
                                    this.onDataSourceCreated = e => {
                                        this.mapDs = e,
                                        this.mapDs.id === this.props.dataSourceId && (this.mapView || this.sceneView) && this.createJimuMapView(),
                                        this.setState({
                                            isMapCrashed: !1
                                        })
                                    },
                                    this.onCreateDataSourceFailed = e => {
                                        console.warn(e),
                                        this.mapDs = null,
                                        this.setState({
                                            mapLoadStatus: v.LoadError,
                                            isMapCrashed: !1
                                        }, (() => {
                                                this.props.onMapLoaded(this.props.dataSourceId, v.LoadError),
                                                this.createJimuMapView()
                                            }))
                                    },
                                    this.setViewPoint = e => {
                                        e && this.getDsJsonFromDsId(this.props.dataSourceId) && (this.getDsJsonFromDsId(this.props.dataSourceId).type === i.DataSourceTypes.WebMap && this.mapView && (this.mapView.viewpoint = e), this.getDsJsonFromDsId(this.props.dataSourceId).type === i.DataSourceTypes.WebScene && this.sceneView && (this.sceneView.viewpoint = e))
                                    },
                                    this.getMapLoadStatus = () => this.state.mapLoadStatus,
                                    this.getViewPoint = () => this.getDsJsonFromDsId(this.props.dataSourceId) ? this.getDsJsonFromDsId(this.props.dataSourceId).type === i.DataSourceTypes.WebMap ? this.mapView && this.mapView.viewpoint ? this.mapView.viewpoint.clone() : null : this.getDsJsonFromDsId(this.props.dataSourceId).type === i.DataSourceTypes.WebScene ? this.sceneView && this.sceneView.viewpoint ? (this.sceneView.goTo(this.sceneView.viewpoint.camera, {
                                            animate: !1
                                        }), this.sceneView.viewpoint.clone()) : null : void 0 : null,
                                    this.getViewType = () => this.getDsJsonFromDsId(this.props.dataSourceId).type,
                                    this.goToTilt = e => {
                                        this.sceneView && this.sceneView.goTo({
                                            tilt: e
                                        })
                                    },
                                    this.goHome = e => f(this, void 0, void 0, (function  * () {
                                                if (!this.getDsJsonFromDsId(this.props.dataSourceId))
                                                    return yield Promise.resolve();
                                                const t = this.getMapBaseInitViewPoint();
                                                return this.getDsJsonFromDsId(this.props.dataSourceId).type === i.DataSourceTypes.WebMap && this.mapView ? this.mapView.goTo(t, {
                                                    animate: e
                                                }) : this.getDsJsonFromDsId(this.props.dataSourceId).type === i.DataSourceTypes.WebScene && this.sceneView ? this.sceneView.goTo(t, {
                                                    animate: e
                                                }) : yield Promise.resolve()
                                            })),
                                    this.getMapBaseInitViewPoint = () => {
                                        var e,
                                        t,
                                        i,
                                        s,
                                        o,
                                        a;
                                        return this.props.isDefaultMap ? this.getInitViewPointForDefaultWebMap() : this.props.baseWidgetProps.config.initialMapState ? this.generateViewPointFromInitialMapState(this.props.baseWidgetProps.config.initialMapState) : this.mapView ? null === (i = null === (t = null === (e = this.mapView.map) || void 0 === e ? void 0 : e.initialViewProperties) || void 0 === t ? void 0 : t.viewpoint) || void 0 === i ? void 0 : i.clone() : this.sceneView ? null === (a = null === (o = null === (s = this.sceneView.map) || void 0 === s ? void 0 : s.initialViewProperties) || void 0 === o ? void 0 : o.viewpoint) || void 0 === a ? void 0 : a.clone() : void 0
                                    },
                                    this.getDsJsonFromDsId = e => (0, t.getAppStore)().getState().appConfig.dataSources[e] || {},
                                    this.queryExtentFromQueryParams = e => {
                                        const t = this.dsManager.getDataSource(e),
                                        s = t.getCurrentQueryParams();
                                        let o;
                                        return o = (null == t ? void 0 : t.layer) ? Promise.resolve(t.layer) : t.createJSAPILayerByDataSource().then((e => Promise.resolve(e))),
                                        (0, i.loadArcGISJSAPIModules)(["esri/tasks/support/Query", "esri/Graphic", "esri/geometry/Point"]).then((e => {
                                                const[t, i, a] = e,
                                                n = new t;
                                                return n.where = null == s ? void 0 : s.where,
                                                o.then((e => e.queryExtent(n).then((t => {
                                                                var s;
                                                                const o = null === (s = null == t ? void 0 : t.extent) || void 0 === s ? void 0 : s.center,
                                                                n = null == t ? void 0 : t.extent;
                                                                let r;
                                                                if (1 === (null == t ? void 0 : t.count) && o) {
                                                                    const e = new a({
                                                                        x: o.x,
                                                                        y: o.y,
                                                                        spatialReference: n.spatialReference
                                                                    });
                                                                    r = new i({
                                                                        geometry: e
                                                                    })
                                                                }
                                                                return {
                                                                    extent: n,
                                                                    singlePointGraphic: r,
                                                                    count: null == t ? void 0 : t.count,
                                                                    layer: e
                                                                }
                                                            }))))
                                            }))
                                    },
                                    this.handleDataAction = (e, t) => {
                                        e.showOnMapDatas && t.drawDataOnMap(e.showOnMapDatas)
                                    },
                                    this.handleAction = (e, s) => {
                                        var n,
                                        r;
                                        if (e.zoomToFeatureActionValue)
                                            if (e.zoomToFeatureActionValue.relatedWidgets && e.zoomToFeatureActionValue.relatedWidgets.includes(this.props.baseWidgetProps.id))
                                                this.props.onMutableStatePropsChanged(this.props.dataSourceId, "zoomToFeatureActionValue", null);
                                            else {
                                                const a = s,
                                                n = e.zoomToFeatureActionValue.relatedWidgets ? e.zoomToFeatureActionValue.relatedWidgets : [],
                                                r = e.zoomToFeatureActionValue.value;
                                                let l = null;
                                                if (r.layerId && (l = a.map.layers.find((e => e.id === r.layerId))), "zoom-to-extent" === r.type)
                                                    a.isReceiveExtentChange = !0, i.zoomToUtils.zoomTo(a, r.features[0], r.zoomToOption).then((() => {
                                                            n.push(this.props.baseWidgetProps.id);
                                                            const e = new t.ExtentChangeMessage(this.props.baseWidgetProps.id, a.extent);
                                                            e.setRelatedWidgetIds(n),
                                                            this.props.onExtentChanged(this.props.dataSourceId, e)
                                                        }), (() => {
                                                            a.isReceiveExtentChange = !1
                                                        }));
                                                else if ("zoom-to-query-params" === r.type)
                                                    this.queryExtentFromQueryParams(r.dataSourceId).then((e => {
                                                            let t;
                                                            0 !== e.count && (t = 1 === e.count ? {
                                                                    graphics: [null == e ? void 0 : e.singlePointGraphic],
                                                                    layer: null == e ? void 0 : e.layer
                                                                }
                                                                 : {
                                                                extent: null == e ? void 0 : e.extent,
                                                                layer: null == e ? void 0 : e.layer
                                                            }, i.zoomToUtils.zoomTo(a, t, r.zoomToOption))
                                                        }));
                                                else {
                                                    let e = null;
                                                    e = l ? {
                                                        layer: l,
                                                        graphics: r.features
                                                    }
                                                     : r.features,
                                                    function (e, t, s) {
                                                        return o(this, void 0, void 0, (function  * () {
                                                                return e && "3d" === e.type && t && t.queryFeatures && s ? yield(0, i.loadArcGISJSAPIModules)(["esri/tasks/support/Query"]).then((e => {
                                                                        const[i] = e,
                                                                        a = new i;
                                                                        return a.returnGeometry = !0,
                                                                        a.outFields = ["*"],
                                                                        a.objectIds = s.map((e => e.attributes[t.objectIdField])),
                                                                        t.queryFeatures(a).then((e => o(this, void 0, void 0, (function  * () {
                                                                                        return e && e.features && e.features.length === s.length ? yield Promise.resolve(e.features) : yield Promise.resolve(s)
                                                                                    }))), (() => o(this, void 0, void 0, (function  * () {
                                                                                        return yield Promise.resolve(s)
                                                                                    }))))
                                                                    })) : yield Promise.resolve(s)
                                                            }))
                                                    }
                                                    (a, e.layer, e && e.graphics ? e.graphics : e).then((s => {
                                                            l ? e.graphics = s : e = s,
                                                            a.isReceiveExtentChange = !0,
                                                            i.zoomToUtils.zoomTo(a, e, r.zoomToOption).then((() => {
                                                                    n.push(this.props.baseWidgetProps.id);
                                                                    const e = new t.ExtentChangeMessage(this.props.baseWidgetProps.id, a.extent);
                                                                    e.setRelatedWidgetIds(n),
                                                                    this.props.onExtentChanged(this.props.dataSourceId, e)
                                                                }), (() => {
                                                                    a.isReceiveExtentChange = !1
                                                                }))
                                                        }))
                                                }
                                                this.props.onMutableStatePropsChanged(this.props.dataSourceId, "zoomToFeatureActionValue", null)
                                            }
                                        if (e.panToActionValue) {
                                            if (e.panToActionValue.relatedWidgets && e.panToActionValue.relatedWidgets.includes(this.props.baseWidgetProps.id))
                                                this.props.onMutableStatePropsChanged(this.props.dataSourceId, "panToActionValue", null);
                                            else if ("pan-to-query-params" === (null === (r = null === (n = e.panToActionValue) || void 0 === n ? void 0 : n.value) || void 0 === r ? void 0 : r.type)) {
                                                const t = e.panToActionValue.value,
                                                i = e.panToActionValue.relatedWidgets ? e.panToActionValue.relatedWidgets : [];
                                                this.queryExtentFromQueryParams(t.dataSourceId).then((e => {
                                                        this.panToGeometry([null == e ? void 0 : e.extent], s, i)
                                                    }))
                                            } else {
                                                const t = e.panToActionValue.value,
                                                i = e.panToActionValue.relatedWidgets ? e.panToActionValue.relatedWidgets : [];
                                                this.panToGeometry(t.features, s, i)
                                            }
                                            s.isReceiveExtentChange = !0,
                                            this.props.onMutableStatePropsChanged(this.props.dataSourceId, "panToActionValue", null)
                                        }
                                        if (e.newFeatureSetActionValue && !e.newFeatureSetActionValue.promise) {
                                            const t = function (e, t) {
                                                return o(this, void 0, void 0, (function  * () {
                                                        const i = [];
                                                        return t && Object.keys(t).forEach((s => {
                                                                e.map.layers.find((e => e.id === s)) ? console.warn("the feature layer is already created") : i.push(a(e, t[s], s))
                                                            })),
                                                        0 === i.length ? null : Promise.all(i)
                                                    }))
                                            }
                                            (s, e.newFeatureSetActionValue.value);
                                            t ? (this.props.onMutableStatePropsChanged(this.props.dataSourceId, "newFeatureSetActionValue.promise", t), t.then((() => {
                                                        this.props.onMutableStatePropsChanged(this.props.dataSourceId, "newFeatureSetActionValue", null)
                                                    }))) : this.props.onMutableStatePropsChanged(this.props.dataSourceId, "newFeatureSetActionValue", null)
                                        }
                                        if (e.changedFeatureSetActionValue && (function (e, t) {
                                                o(this, void 0, void 0, (function  * () {
                                                        const i = [];
                                                        return t && Object.keys(t).forEach((s => {
                                                                const o = e.map.layers.find((e => e.id === s));
                                                                o && (e.map.remove(o), i.push(a(e, t[s], s)))
                                                            })),
                                                        0 === i.length ? null : Promise.all(i)
                                                    }))
                                            }
                                                (s, e.changedFeatureSetActionValue), this.props.onMutableStatePropsChanged(this.props.dataSourceId, "changedFeatureSetActionValue", null)), e.selectFeatureActionValue) {
                                            s.popup.close();
                                            for (const e in this.highLightHandles)
                                                this.highLightHandles[e].remove();
                                            const t = function (e, t, i) {
                                                let s,
                                                o = null,
                                                a = null;
                                                if (s || (a = t instanceof Array ? t[0] : t, a && (s = a.layer && a.layer.id)), s) {
                                                    const i = e.allLayerViews;
                                                    for (let e = 0; e < i.length; e++)
                                                        i.getItemAt(e).layer.id === s && (o = i.getItemAt(e));
                                                    return o ? {
                                                        layerId: s,
                                                        handle: o.highlight(t)
                                                    }
                                                     : null
                                                }
                                            }
                                            (s, e.selectFeatureActionValue);
                                            t && (this.highLightHandles[t.layerId] = t.handle),
                                            setTimeout((() => {
                                                    this.props.onMutableStatePropsChanged(this.props.dataSourceId, "selectFeatureActionValue", null)
                                                }), 500)
                                        }
                                        Object.keys(e).some((t => {
                                                var s;
                                                const o = `${this.props.baseWidgetProps.id}-${this.props.dataSourceId}`,
                                                a = i.MapViewManager.getInstance().getJimuMapViewById(o);
                                                return 0 === t.indexOf("flashActionValue-") && e[t] && (e[t].querySQL && function (e, t, s) {
                                                    if (t) {
                                                        const o = e.jimuLayerViews,
                                                        a = Object.keys(o);
                                                        for (let n = 0; n < a.length; n++) {
                                                            let r = o[a[n]];
                                                            r && r.layer && r.layerDataSourceId === t && (r.type === i.LayerTypes.FeatureLayer ? h(e, s, r) : r.type === i.LayerTypes.SceneLayer && d(e, s, r))
                                                        }
                                                    }
                                                }
                                                    (a, e[t].layerDataSourceId, e[t].querySQL), this.props.onMutableStatePropsChanged(this.props.dataSourceId, t, null)),
                                                0 === t.indexOf("filterActionValue-") && e[t] && ((null === (s = e[t].querySQL) || void 0 === s ? void 0 : s.length) >= 0 && function (e, t, s) {
                                                    if (t) {
                                                        const o = e.jimuLayerViews,
                                                        a = Object.keys(o);
                                                        for (let e = 0; e < a.length; e++) {
                                                            let n = o[a[e]];
                                                            n && n.layer && n.layerDataSourceId === t && (n.type === i.LayerTypes.FeatureLayer || n.type === i.LayerTypes.SceneLayer) && n.setLocalDefinitionExpression(s)
                                                        }
                                                    }
                                                }
                                                    (a, e[t].layerDataSourceId, e[t].querySQL), this.props.onMutableStatePropsChanged(this.props.dataSourceId, t, null)),
                                                !1
                                            }))
                                    },
                                    this.panToGeometry = (e, s, a) => {
                                        (function (e, t) {
                                            return o(this, void 0, void 0, (function  * () {
                                                    return e && 0 !== e.length && e[0] && t.wkid !== e[0].spatialReference.wkid && !t.equals(e[0].spatialReference) ? t.isWebMercator && e[0].spatialReference.isWGS84 || t.isWGS84 && e[0].spatialReference.isWebMercator ? yield Promise.resolve(e) : yield i.geometryUtils.projectToSpatialReference(e, t) : yield Promise.resolve(e)
                                                }))
                                        })(e, s.spatialReference).then((e => {
                                                (function (e, t) {
                                                    return o(this, void 0, void 0, (function  * () {
                                                            const i = t,
                                                            s = e;
                                                            if (i instanceof Array) {
                                                                if (0 === i.length)
                                                                    return yield Promise.resolve();
                                                                if (i[0].geometry) {
                                                                    const e = [];
                                                                    for (let t = 0; t < i.length; t++)
                                                                        e.push(i[t].geometry);
                                                                    return yield l(e).then((e => s.goTo(e.center)))
                                                                }
                                                                return l(i).then((e => s.goTo(e.center)))
                                                            }
                                                            if (i.geometry) {
                                                                const e = i.geometry;
                                                                return s.goTo(g(e))
                                                            }
                                                            return s.goTo(g(i))
                                                        }))
                                                })(s, e).then((() => {
                                                        s.isReceiveExtentChange = !0,
                                                        a.push(this.props.baseWidgetProps.id);
                                                        const e = new t.ExtentChangeMessage(this.props.baseWidgetProps.id, s.extent);
                                                        e.setRelatedWidgetIds(a),
                                                        this.props.onExtentChanged(this.props.dataSourceId, e)
                                                    }), (() => {
                                                        s.isReceiveExtentChange = !0
                                                    }))
                                            }))
                                    },
                                    this.formatMessage = e => this.props.baseWidgetProps.intl.formatMessage({
                                        id: e,
                                        defaultMessage: s.defaultMessages[e]
                                    }),
                                    this.handleDisableWheel = () => {
                                        this.widgetContainer.style.pointerEvents = "none",
                                        setTimeout((() => {
                                                this.widgetContainer.style.pointerEvents = "auto"
                                            }), 50)
                                    },
                                    this.getMapSwitchForErrorMap = () => t.React.createElement(M.Consumer, null, (({
                                                isShowMapSwitchBtn: e,
                                                dataSourceIds: i,
                                                activeDataSourceId: o,
                                                switchMap: a
                                            }) => t.React.createElement("div", {
                                                className: "mapswitch-container",
                                                style: {
                                                    display: e ? "block" : "none",
                                                    marginBottom: "xsmall" === this.props.widthBreakpoint ? 10 : 0
                                                }
                                            }, t.React.createElement("div", {
                                                    onClick: e => {
                                                        e.preventDefault(),
                                                        a()
                                                    },
                                                    className: "jimu-widget esri-widget--button"
                                                }, t.React.createElement(s.Icon, {
                                                        icon: S,
                                                        width: 16,
                                                        height: 16,
                                                        className: "mapswitch-icon"
                                                    }))))),
                                    this.recoverMap = () => {
                                        this.mapView && (this.mapView.tryFatalErrorRecovery(), this.setState({
                                                isMapCrashed: !1
                                            })),
                                        this.sceneView && (this.sceneView.tryFatalErrorRecovery(), this.setState({
                                                isMapCrashed: !1
                                            }))
                                    };
                                    const r = t.MutableStoreManager.getInstance().getStateValue([this.props.baseWidgetProps.id, "restoreData", `${this.props.baseWidgetProps.id}-restoreData-${this.props.dataSourceId}`]);
                                    r ? (function (e, t) {
                                        e.mapContainer = t.mapContainer,
                                        e.state = t.state,
                                        e.MapView = t.MapView,
                                        e.SceneView = t.SceneView,
                                        e.Extent = t.Extent,
                                        e.Viewpoint = t.Viewpoint,
                                        e.mapView = t.mapView,
                                        e.sceneView = t.sceneView,
                                        e.extentWatch = t.extentWatch,
                                        e.fatalErrorWatch = t.fatalErrorWatch,
                                        e.dsManager = t.dsManager,
                                        e.highLightHandles = t.highLightHandles,
                                        e.mapBaseViewEventHandles = t.mapBaseViewEventHandles,
                                        e.Color = t.Color,
                                        e.isRequestingMap = t.isRequestingMap
                                    }
                                        (this, r), t.MutableStoreManager.getInstance().updateStateValue(this.props.baseWidgetProps.id, `restoreData.${this.props.baseWidgetProps.id}-restoreData-${this.props.dataSourceId}`, null), this.bindMapBaseViewEvent(this.mapView || this.sceneView), this.mapView && (this.mapView.isInCaching = !1, this.mapView.tryFatalErrorRecovery()), this.sceneView && (this.sceneView.isInCaching = !1, this.sceneView.tryFatalErrorRecovery())) : this.state = {
                                        mapLoadStatus: v.Loading,
                                        widthBreakpoint: null,
                                        mapBaseJimuMapView: null,
                                        dataSourceId: null,
                                        widgetHeight: null,
                                        isMapCrashed: !1
                                    }
                                }
                                componentDidMount() {
                                    this.__unmount = !1,
                                    0 === this.widgetContainer.getElementsByClassName("widget-map").length && (this.mapContainer || (this.mapContainer = document && document.createElement("div"), this.mapContainer.className = "jimu-widget widget-map"), this.widgetContainer.appendChild(this.mapContainer)),
                                    !this.props.startLoadModules || this.state.isModulesLoaded ? (this.props.dataSourceId || this.props.isDefaultMap) && (this.getDsJsonFromDsId(this.props.dataSourceId) || this.props.isDefaultMap) && (this.props.isDefaultMap ? this.analysisMapView().then((() => {
                                                this.updateMapView(this.props.baseWidgetProps.config)
                                            })) : (this.getDsJsonFromDsId(this.props.dataSourceId).type === i.DataSourceTypes.WebMap && this.analysisMapView().then((() => {
                                                    this.updateMapView(this.props.baseWidgetProps.config)
                                                })), this.getDsJsonFromDsId(this.props.dataSourceId).type === i.DataSourceTypes.WebScene && this.analysisSceneView().then((() => {
                                                    this.updateSceneView(this.props.baseWidgetProps.config)
                                                })))) : this.startRenderMap()
                                }
                                componentDidUpdate(e) {
                                    if (!this.state.isModulesLoaded)
                                        return;
                                    e.isMapInVisibleArea !== this.props.isMapInVisibleArea && this.props.baseWidgetProps.useDataSources && 2 === this.props.baseWidgetProps.useDataSources.length && (this.props.isMapInVisibleArea && (this.mapView && (this.mapView.isInCaching = !1, this.mapView.tryFatalErrorRecovery()), this.sceneView && (this.sceneView.isInCaching = !1, this.sceneView.tryFatalErrorRecovery())), this.props.isMapInVisibleArea || (this.mapView && (this.mapView.isInCaching = !0), this.sceneView && (this.sceneView.isInCaching = !0)));
                                    const t = this.props.dataSourceId,
                                    s = e.dataSourceId,
                                    o = this.getDsJsonFromDsId(t).itemId,
                                    a = this.getDsJsonFromDsId(s).itemId;
                                    if (t !== s || o !== a) {
                                        this.mapView = null,
                                        this.sceneView = null,
                                        this.isRequestingMap = !1,
                                        this.mapDs = null;
                                        const e = this.getDsJsonFromDsId(s) && `${this.props.baseWidgetProps.id}-${s}`;
                                        if (e && i.MapViewManager.getInstance().destroyJimuMapView(e), this.state.mapLoadStatus === v.LoadError && !this.getDsJsonFromDsId(t))
                                            return;
                                        this.setState({
                                            mapLoadStatus: v.Loading
                                        })
                                    }
                                    this.props.isDefaultMap && (this.sceneView = null, this.isRequestingMap = !1, this.analysisMapView().then((() => {
                                                if (this.updateMapView(this.props.baseWidgetProps.config), this.mapView && this.props.baseWidgetProps.mutableStateProps && this.props.baseWidgetProps.mutableStateProps) {
                                                    const e = `${this.props.baseWidgetProps.id}-${this.props.dataSourceId}`,
                                                    t = i.MapViewManager.getInstance().getJimuMapViewById(e);
                                                    t && t.whenJimuMapViewLoaded().then((() => {
                                                            setTimeout((() => {
                                                                    this.handleAction(this.props.baseWidgetProps.mutableStateProps, this.mapView),
                                                                    this.handleDataAction(this.props.baseWidgetProps.mutableStateProps, t),
                                                                    this.isFirstReceiveMessage = !1
                                                                }), this.isFirstReceiveMessage ? 500 : 0)
                                                        }))
                                                }
                                            }))),
                                    this.getDsJsonFromDsId(t) && (this.getDsJsonFromDsId(t).type === i.DataSourceTypes.WebMap && (this.sceneView = null, this.isRequestingMap = !1, this.analysisMapView().then((() => {
                                                    if (this.updateMapView(this.props.baseWidgetProps.config), this.mapView && this.props.baseWidgetProps.mutableStateProps && this.props.baseWidgetProps.mutableStateProps) {
                                                        const e = `${this.props.baseWidgetProps.id}-${this.props.dataSourceId}`,
                                                        t = i.MapViewManager.getInstance().getJimuMapViewById(e);
                                                        t && t.whenJimuMapViewLoaded().then((() => {
                                                                setTimeout((() => {
                                                                        this.handleAction(this.props.baseWidgetProps.mutableStateProps, this.mapView),
                                                                        this.handleDataAction(this.props.baseWidgetProps.mutableStateProps, t),
                                                                        this.isFirstReceiveMessage = !1
                                                                    }), this.isFirstReceiveMessage ? 500 : 0)
                                                            }))
                                                    }
                                                }))), this.getDsJsonFromDsId(t).type === i.DataSourceTypes.WebScene && (this.mapView = null, this.isRequestingMap = !1, this.analysisSceneView().then((() => {
                                                    if (this.updateSceneView(this.props.baseWidgetProps.config), this.sceneView && this.props.baseWidgetProps.mutableStateProps && this.props.baseWidgetProps.mutableStateProps) {
                                                        const e = `${this.props.baseWidgetProps.id}-${this.props.dataSourceId}`,
                                                        t = i.MapViewManager.getInstance().getJimuMapViewById(e);
                                                        t && t.whenJimuMapViewLoaded().then((() => {
                                                                setTimeout((() => {
                                                                        this.handleAction(this.props.baseWidgetProps.mutableStateProps, this.sceneView),
                                                                        this.handleDataAction(this.props.baseWidgetProps.mutableStateProps, t),
                                                                        this.isFirstReceiveMessage = !1
                                                                    }), this.isFirstReceiveMessage ? 500 : 0)
                                                            }))
                                                    }
                                                }))))
                                }
                                static getDerivedStateFromProps(e, t) {
                                    return e.dataSourceId !== t.dataSourceId ? {
                                        dataSourceId: e.dataSourceId,
                                        mapLoadStatus: v.Loading
                                    }
                                     : null
                                }
                                componentWillUnmount() {
                                    this.__unmount = !0;
                                    const e = (0, t.getAppStore)().getState().appConfig.widgets;
                                    if (e[this.props.baseWidgetProps.id] && e[this.props.baseWidgetProps.id].useDataSources === this.props.baseWidgetProps.useDataSources && this.state.mapLoadStatus !== v.Loading) {
                                        const e = {
                                            mapContainer: (s = this).mapContainer,
                                            state: s.state,
                                            MapView: s.MapView,
                                            SceneView: s.SceneView,
                                            Extent: s.Extent,
                                            Viewpoint: s.Viewpoint,
                                            mapView: s.mapView,
                                            sceneView: s.sceneView,
                                            extentWatch: s.extentWatch,
                                            fatalErrorWatch: s.fatalErrorWatch,
                                            dsManager: s.dsManager,
                                            highLightHandles: s.highLightHandles,
                                            mapBaseViewEventHandles: s.mapBaseViewEventHandles,
                                            Color: s.Color,
                                            isRequestingMap: s.isRequestingMap
                                        };
                                        this.mapView && (this.mapView.isInCaching = !0),
                                        this.sceneView && (this.sceneView.isInCaching = !0),
                                        t.MutableStoreManager.getInstance().updateStateValue(this.props.baseWidgetProps.id, `restoreData.${this.props.baseWidgetProps.id}-restoreData-${this.props.dataSourceId}`, e)
                                    } else {
                                        this.props.onViewChanged && this.props.onViewChanged({
                                            dataSourceId: this.props.dataSourceId,
                                            viewpoint: null
                                        });
                                        const e = `${this.props.baseWidgetProps.id}-${this.props.dataSourceId}`;
                                        i.MapViewManager.getInstance().destroyJimuMapView(e),
                                        this.mapView && !this.mapView.destroyed && (this.mapView.container = null, this.mapView = null),
                                        this.sceneView && !this.sceneView.destroyed && (this.sceneView.container = null, this.sceneView = null),
                                        this.highLightHandles = {},
                                        this.extentWatch = null,
                                        this.fatalErrorWatch = null,
                                        this.mapDs = null,
                                        this.isRequestingMap = !1
                                    }
                                    var s
                                }
                                render() {
                                    let e = null;
                                    if (this.props.baseWidgetProps.useDataSources)
                                        for (let t = 0; t < this.props.baseWidgetProps.useDataSources.length; t++)
                                            this.props.baseWidgetProps.useDataSources[t].dataSourceId === this.props.dataSourceId && (e = this.props.baseWidgetProps.useDataSources[t]);
                                    return t.React.createElement("div", {
                                        className: "jimu-widget",
                                        style: {
                                            position: "relative"
                                        },
                                        ref: e => {
                                            this.widgetContainer = e
                                        }
                                    }, this.state.mapLoadStatus === v.Loading && t.React.createElement("div", {
                                            className: "jimu-widget widget-map-background"
                                        }, t.React.createElement("div", {
                                                style: {
                                                    position: "absolute",
                                                    left: "50%",
                                                    top: "50%"
                                                },
                                                className: "jimu-secondary-loading"
                                            })), this.state.mapLoadStatus === v.LoadError && t.React.createElement("div", {
                                            className: "jimu-widget widget-map-background"
                                        }, this.getMapSwitchForErrorMap(), t.React.createElement("div", {
                                                className: "jimu-widget d-flex justify-content-center align-items-center"
                                            }, this.formatMessage("mapFailure"))), !this.props.isDefaultMap && t.React.createElement("div", {
                                            style: {
                                                position: "absolute",
                                                display: "none"
                                            }
                                        }, t.React.createElement(t.DataSourceComponent, {
                                                useDataSource: e,
                                                onDataSourceCreated: this.onDataSourceCreated,
                                                onCreateDataSourceFailed: this.onCreateDataSourceFailed
                                            })))
                                }
                            }
                            var b = n(74758);
                            class x extends t.React.PureComponent {
                                constructor(e) {
                                    super(e),
                                    this.cloneLayoutRef = null,
                                    this.insertFixedDom = (e, t) => {
                                        if (!e || !t)
                                            return;
                                        const i = e.getElementsByClassName("exbmap-ui-layout");
                                        i && i[0] ? e.insertBefore(t, i[0]) : e.appendChild(t)
                                    },
                                    this.isItemAccepted = (e, i) => {
                                        var s,
                                        o;
                                        const a = null == e ? void 0 : e.itemType,
                                        n = null === (s = null == e ? void 0 : e.manifest) || void 0 === s ? void 0 : s.widgetType;
                                        return a !== t.LayoutItemType.Section && n !== t.WidgetType.Layout && (null === (o = null == e ? void 0 : e.manifest) || void 0 === o ? void 0 : o.name) !== this.props.widgetManifestName
                                    },
                                    this.getMapFixedLayout = () => {
                                        if (window.jimuConfig.isInBuilder) {
                                            const e = this.props.LayoutEntry,
                                            i = this.props.layouts && this.props.layouts.MapFixedLayout;
                                            return (0, t.jsx)(e, {
                                                layouts: i || null,
                                                isInWidget: !0,
                                                className: (0, t.classNames)("w-100 h-100", {
                                                    "widget-map-usemask": !w(this.props.appMode),
                                                    "map-is-live-mode": w(this.props.appMode)
                                                }),
                                                isItemAccepted: this.isItemAccepted
                                            })
                                        } {
                                            const e = this.props.layouts && this.props.layouts.MapFixedLayout;
                                            return (0, t.jsx)(b.LayoutEntry, {
                                                layouts: e ? (0, t.Immutable)(e) : null,
                                                className: "w-100 h-100 map-is-live-mode"
                                            })
                                        }
                                    },
                                    this.state = {},
                                    this.fixedLayoutRef = document.createElement("div"),
                                    this.fixedLayoutRef.className = "w-100 h-100",
                                    this.fixedLayoutRef.style.position = "absolute",
                                    this.fixedLayoutRef.style.zIndex = "0"
                                }
                                componentDidMount() {
                                    this.props.jimuMapView && this.props.jimuMapView.view && this.props.jimuMapView.view.ui && this.props.jimuMapView.view.ui.container && this.insertFixedDom(this.props.jimuMapView.view.ui.container, this.fixedLayoutRef)
                                }
                                componentDidUpdate(e, t) {
                                    if (e.jimuMapView && this.props.jimuMapView) {
                                        if (e.jimuMapView && e.jimuMapView.view && e.jimuMapView.view.ui) {
                                            const t = e.jimuMapView.view.ui.container.getElementsByClassName("layout-clone");
                                            if (t && t.length > 0)
                                                for (let e = 0; e < t.length; e++)
                                                    t[e].remove()
                                        }
                                        e.jimuMapView.id !== this.props.jimuMapView.id && (e.jimuMapView && e.jimuMapView.view && e.jimuMapView.view.ui && (this.cloneLayoutRef = this.fixedLayoutRef.cloneNode(!0), this.cloneLayoutRef.classList.add("layout-clone"), this.insertFixedDom(e.jimuMapView.view.ui.container, this.cloneLayoutRef), setTimeout((() => {
                                                        this.cloneLayoutRef && this.cloneLayoutRef.parentNode && this.cloneLayoutRef.parentNode.removeChild(this.cloneLayoutRef),
                                                        this.cloneLayoutRef = null
                                                    }), 500), e.jimuMapView.view.ui.container.contains(this.fixedLayoutRef) && e.jimuMapView.view.ui.container.removeChild(this.fixedLayoutRef)), this.props.jimuMapView && this.props.jimuMapView.view && this.insertFixedDom(this.props.jimuMapView.view.ui.container, this.fixedLayoutRef))
                                    }
                                }
                                render() {
                                    return this.props.jimuMapView && this.props.jimuMapView.view && this.props.jimuMapView.view.ui && this.props.jimuMapView.view.ui.container ? (0, t.jsx)("div", null, t.ReactDOM.createPortal(this.getMapFixedLayout(), this.fixedLayoutRef)) : this.getMapFixedLayout()
                                }
                            }
                            class I extends t.React.PureComponent {}
                            class V extends t.React.PureComponent {
                                constructor() {
                                    super(...arguments),
                                    this.moveY = 0,
                                    this.startY = 0,
                                    this.isRegisted = !1,
                                    this.registerTouchEvent = e => {
                                        e && !this.isRegisted && (e.addEventListener("touchstart", (e => {
                                                    this.moveY = 0;
                                                    const t = e.touches[0];
                                                    this.startY = t.clientY
                                                }), {
                                                passive: !1
                                            }), e.addEventListener("touchmove", (t => {
                                                    const i = t.touches[0];
                                                    this.moveY = -1 * (i.clientY - this.startY),
                                                    this.startY = i.clientY,
                                                    e.scrollTop = e.scrollTop + this.moveY
                                                }), {
                                                passive: !1
                                            }), e.addEventListener("touchend", (e => {
                                                    this.moveY = 0,
                                                    this.startY = 0
                                                }), {
                                                passive: !1
                                            }), this.isRegisted = !0)
                                    }
                                }
                                getStyle() {
                                    return t.css `
      overflow: auto;
      pointer-events: auto;
      `
                                }
                                render() {
                                    return (0, t.jsx)("div", {
                                        css: this.getStyle(),
                                        className: this.props.className,
                                        style: this.props.style,
                                        ref: e => {
                                            this.registerTouchEvent(e)
                                        }
                                    }, this.props.children)
                                }
                            }
                            class P extends t.React.PureComponent {
                                componentWillUnmount() {
                                    this.props.onDestroyed && this.props.onDestroyed()
                                }
                                render() {
                                    return t.React.createElement(t.React.Fragment, null, this.props.children)
                                }
                            }
                            const C = n(85277),
                            T = n(73395);
                            class j extends I {
                                constructor(e) {
                                    super(e),
                                    this.toolName = null,
                                    this.isContainedToMobilePanel = !1,
                                    this.generation = 0,
                                    this._getContent = () => this.props.toolJson.isOnlyExpanded ? (0, t.jsx)("div", {
                                        css: this._cssStyle(),
                                        className: "exbmap-ui exbmap-ui-tool-panel"
                                    }, (0, t.jsx)(t.ErrorBoundary, null, this.getExpandPanel())) : this.props.isMobile ? this._renderMobileTool() : this._renderPCTool(),
                                    this.onResize = (e, t) => {
                                        e && t && (this.generation = t, this.forceUpdate())
                                    },
                                    this.handleToggleMobilePanel = () => {
                                        this.props.onActiveToolInfoChange(null)
                                    };
                                    const i = this.props.jimuMapView && this.props.jimuMapView.view && this.props.jimuMapView.view.container;
                                    s.MobilePanelManager.getInstance().checkDomIsContained(i) && (this.isContainedToMobilePanel = !0),
                                    this.modifiers = [{
                                            name: "flip",
                                            options: {
                                                padding: 0
                                            }
                                        }, {
                                            name: "preventOverflow",
                                            options: {
                                                boundary: i
                                            }
                                        }
                                    ]
                                }
                                _cssStyle() {
                                    return t.css `
      .exbmap-basetool-loader {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 2px;
        width: 100%;
        animation: esri-fade-in 500ms ease-in-out;
      }

      .exbmap-basetool-loader:before {
        background-color: rgba(110,110,110,0.3);
        width: 100%;
        z-index: 0;
        content: "";
        opacity: 1;
        position: absolute;
        height: 2px;
        top: 0;
        transition: opacity 500ms ease-in-out;
      }

      .exbmap-basetool-loader:after {
        background-color: #6e6e6e;
        width: 20%;
        z-index: 0;
        animation: looping-progresss-bar-ani 1500ms linear infinite;
        content: "";
        opacity: 1;
        position: absolute;
        height: 2px;
        top: 0;
        transition: opacity 500ms ease-in-out;
      }

      /* pointer-events: auto;
      box-shadow: 0 1px 2px rgba(0,0,0,0.3);
      position: relative;

      .exbmap-ui-tool-icon {
        fill: black;
        left: 8px;
        top: 8px;
        position: absolute;
        display: block;
      }

      .exbmap-ui-expand-content {
        transition: opacity 250ms ease-in-out, margin 250ms ease-in-out;
        min-height: 10px;
        min-width: 10px;
        padding-top: ${t.polished.rem(10)};
        padding-bottom: ${t.polished.rem(10)};
        padding-left: ${t.polished.rem(20)};
        padding-right: ${t.polished.rem(20)};

        .exbmap-ui-expand-content-header {
          margin-bottom: ${t.polished.rem(10)};
        }

        .panel-title {
          font-size: ${t.polished.rem(16)};
          color: #000000;
        }
      }

      .expand-placement-bottom {
        padding-top: 0.25rem !important;
      }

      .expand-placement-left {
        padding-right: 0.25rem !important;
      }

      .expand-placement-right {
        padding-left: 0.25rem !important;
      }

      .expand-placement-top {
        padding-bottom: 0.25rem !important;
      }

      .exbmap-basetool-loader {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 2px;
        width: 100%;
        animation: esri-fade-in 500ms ease-in-out;
      }

      .exbmap-basetool-loader:before {
        background-color: rgba(110,110,110,0.3);
        width: 100%;
        z-index: 0;
        content: "";
        opacity: 1;
        position: absolute;
        height: 2px;
        top: 0;
        transition: opacity 500ms ease-in-out;
      }

      .exbmap-basetool-loader:after {
        background-color: #6e6e6e;
        width: 20%;
        z-index: 0;
        animation: looping-progresss-bar-ani 1500ms linear infinite;
        content: "";
        opacity: 1;
        position: absolute;
        height: 2px;
        top: 0;
        transition: opacity 500ms ease-in-out;
      } */
    `
                                }
                                onShowPanel() {}
                                onClosePanel() {}
                                destroy() {}
                                static getIsNeedSetting() {
                                    return !0
                                }
                                _onIconClick(e) {
                                    const t = this.getIcon() && this.getIcon().onIconClick;
                                    t && t(e),
                                    this.getExpandPanel() && (this.props.activeToolInfo && this.props.activeToolInfo.activeToolName === this.toolName ? this.props.onActiveToolInfoChange(null) : (this.props.onActiveToolInfoChange({
                                                activeToolName: this.toolName,
                                                activeToolTitle: this.getTitle()
                                            }), this.onShowPanel()))
                                }
                                _initIconContainer(e) {
                                    e && !this.iconContainer && (this.iconContainer = e, this.forceUpdate())
                                }
                                _renderPCTool() {
                                    let e = this.getIcon();
                                    e || (e = {
                                            icon: C,
                                            onIconClick: () => {}
                                        });
                                    const i = this.getExpandPanel(),
                                    o = this.props.activeToolInfo && this.props.activeToolInfo.activeToolName;
                                    return this.generation = this.generation + 1,
                                    (0, t.jsx)("div", {
                                        className: "exbmap-ui exbmap-ui-tool",
                                        css: this._cssStyle(),
                                        style: {
                                            width: "32px",
                                            height: "32px"
                                        }
                                    }, (0, t.jsx)("div", {
                                            style: {},
                                            ref: e => {
                                                this._initIconContainer(e)
                                            },
                                            className: (0, t.classNames)("exbmap-ui-tool esri-widget--button", {
                                                "exbmap-ui-tool-icon-selected": this.toolName === o && i
                                            }),
                                            title: this.props.toolJson.isShowIconTitle ? this.getTitle() : "",
                                            onClick: e => {
                                                this._onIconClick(e)
                                            }
                                        }, (0, t.jsx)(s.Icon, {
                                                width: 16,
                                                height: 16,
                                                className: "exbmap-ui-tool-icon",
                                                icon: e.icon
                                            })), this.iconContainer && this.toolName === o && i && (0, t.jsx)(P, {
                                            onDestroyed: () => {
                                                this.onClosePanel()
                                            }
                                        }, (0, t.jsx)(s.Popper, {
                                                className: "exbmap-ui-popper",
                                                reference: this.iconContainer,
                                                open: !(this.toolName !== o || !i),
                                                placement: this.props.toolJson.panelPlacement,
                                                modifiers: this.modifiers,
                                                version: this.generation,
                                                offset: [0, 4]
                                            }, (0, t.jsx)(M.Consumer, null, (({
                                                            mapWidgetHeight: e
                                                        }) => (0, t.jsx)("div", {
                                                            css: this._cssStyle(),
                                                            className: this.getExpandPanelPlacementClassName()
                                                        }, (0, t.jsx)("div", {
                                                                className: "exbmap-ui-expand-content"
                                                            }, (0, t.jsx)("div", {
                                                                    className: "w-100 justify-content-between d-flex exbmap-ui-expand-content-header"
                                                                }, (0, t.jsx)("div", {
                                                                        className: "panel-title text-truncate",
                                                                        style: {
                                                                            maxWidth: "210px"
                                                                        },
                                                                        title: this.getTitle()
                                                                    }, this.getTitle()), (0, t.jsx)("div", {
                                                                        onClick: () => {
                                                                            this.props.onActiveToolInfoChange(null)
                                                                        },
                                                                        style: {
                                                                            cursor: "pointer"
                                                                        }
                                                                    }, (0, t.jsx)(s.Icon, {
                                                                            width: 20,
                                                                            height: 20,
                                                                            icon: T
                                                                        }))), (0, t.jsx)(t.ErrorBoundary, null, (0, t.jsx)("div", {
                                                                        style: {
                                                                            maxHeight: e - 55 + "px",
                                                                            overflowY: "Search" !== this.toolName ? "auto" : "inherit"
                                                                        }
                                                                    }, i), (0, t.jsx)(t.ReactResizeDetector, {
                                                                        handleHeight: !0,
                                                                        onResize: this.onResize
                                                                    })))))))))
                                }
                                _renderMobileTool() {
                                    let e = this.getIcon();
                                    e || (e = {
                                            icon: C,
                                            onIconClick: () => {}
                                        });
                                    const i = this.getExpandPanel(),
                                    o = this.props.activeToolInfo && this.props.activeToolInfo.activeToolName;
                                    return (0, t.jsx)(M.Consumer, null, (({
                                                mobilePanelContainer: a
                                            }) => (0, t.jsx)("div", {
                                                className: "exbmap-ui exbmap-ui-tool",
                                                css: this._cssStyle()
                                            }, (0, t.jsx)("div", {
                                                    style: {},
                                                    ref: e => {
                                                        this.iconContainer = e
                                                    },
                                                    className: (0, t.classNames)("exbmap-ui-tool esri-widget--button", {
                                                        "exbmap-ui-tool-icon-selected": this.toolName === o && i
                                                    }),
                                                    title: this.props.toolJson.isShowIconTitle ? this.getTitle() : "",
                                                    onClick: e => {
                                                        this._onIconClick(e)
                                                    }
                                                }, (0, t.jsx)(s.Icon, {
                                                        width: 16,
                                                        height: 16,
                                                        className: "exbmap-ui-tool-icon",
                                                        icon: e.icon
                                                    })), this.toolName === o && i && t.ReactDOM.createPortal((0, t.jsx)(P, {
                                                        onDestroyed: () => {
                                                            this.onClosePanel()
                                                        }
                                                    }, (0, t.jsx)("div", {
                                                            className: "w-100 h-100 d-flex flex-column",
                                                            css: this._cssStyle()
                                                        }, (0, t.jsx)(V, {
                                                                className: "w-100 h-100"
                                                            }, (0, t.jsx)(t.ErrorBoundary, null, this.getExpandPanel())))), a))))
                                }
                                getExpandPanelPlacementClassName() {
                                    return this.props.toolJson.panelPlacement ? `expand-placement-${this.props.toolJson.panelPlacement.split("-")[0]}` : null
                                }
                                render() {
                                    return this._getContent()
                                }
                            }
                            class L extends t.React.PureComponent {
                                constructor(e) {
                                    super(e),
                                    this.Zoom = null,
                                    this.state = {
                                        apiLoaded: !1
                                    }
                                }
                                componentDidMount() {
                                    this.state.apiLoaded || (0, i.loadArcGISJSAPIModules)(["esri/widgets/Zoom"]).then((e => {
                                            [this.Zoom] = e,
                                            this.setState({
                                                apiLoaded: !0
                                            })
                                        }))
                                }
                                componentDidUpdate() {
                                    this.state.apiLoaded && this.container && (this.ZoomBtn && (this.container.innerHTML = ""), this.ZoomBtn = new this.Zoom({
                                            container: this.container,
                                            view: this.props.jimuMapView.view
                                        }))
                                }
                                componentWillUnmount() {
                                    this.ZoomBtn && (this.ZoomBtn.destroy(), this.ZoomBtn = null)
                                }
                                render() {
                                    return t.React.createElement("div", {
                                        ref: e => {
                                            this.container = e
                                        }
                                    })
                                }
                            }
                            class N extends t.React.PureComponent {
                                constructor(e) {
                                    super(e),
                                    this.Home = null,
                                    this.generateViewPointFromInitialMapState = e => "2d" === e.viewType ? new this.Viewpoint({
                                        targetGeometry: this.Extent.fromJSON(e.extent),
                                        rotation: e.rotation
                                    }) : this.Viewpoint.fromJSON(e.viewPoint),
                                    this.state = {
                                        apiLoaded: !1
                                    }
                                }
                                componentDidMount() {
                                    this.state.apiLoaded || (0, i.loadArcGISJSAPIModules)(["esri/widgets/Home", "esri/geometry/Extent", "esri/Viewpoint"]).then((e => {
                                            [this.Home, this.Extent, this.Viewpoint] = e,
                                            this.setState({
                                                apiLoaded: !0
                                            })
                                        }))
                                }
                                componentDidUpdate(e) {
                                    var t;
                                    this.state.apiLoaded && this.container && (null === (t = this.props.jimuMapView) || void 0 === t ? void 0 : t.view) && (this.homeBtn && (this.container.innerHTML = ""), this.homeBtn = new this.Home({
                                            container: this.container,
                                            view: this.props.jimuMapView.view,
                                            viewpoint: this.props.initialMapState ? this.generateViewPointFromInitialMapState(this.props.initialMapState) : this.props.jimuMapView.view.map.initialViewProperties.viewpoint
                                        }), e.initialMapState !== this.props.initialMapState && (this.props.jimuMapView.view ? this.props.jimuMapView.view.goTo(this.homeBtn.viewpoint, {
                                                animate: !1
                                            }) : (this.homeBtn.destroy(), this.homeBtn = null)))
                                }
                                componentWillUnmount() {
                                    this.homeBtn && (this.homeBtn.destroy(), this.homeBtn = null)
                                }
                                render() {
                                    return t.React.createElement("div", {
                                        className: "esri-widget--button",
                                        ref: e => {
                                            this.container || (this.container = e)
                                        }
                                    })
                                }
                            }
                            class D extends t.React.PureComponent {
                                constructor(e) {
                                    super(e),
                                    this.Compass = null,
                                    this.state = {
                                        apiLoaded: !1
                                    }
                                }
                                componentDidMount() {
                                    this.state.apiLoaded || (0, i.loadArcGISJSAPIModules)(["esri/widgets/Compass"]).then((e => {
                                            [this.Compass] = e,
                                            this.setState({
                                                apiLoaded: !0
                                            })
                                        }))
                                }
                                componentDidUpdate() {
                                    this.state.apiLoaded && this.container && (this.CompassBtn && (this.container.innerHTML = ""), this.CompassBtn = new this.Compass({
                                            container: this.container,
                                            view: this.props.jimuMapView.view
                                        }))
                                }
                                componentWillUnmount() {
                                    this.CompassBtn && (this.CompassBtn.destroy(), this.CompassBtn = null)
                                }
                                render() {
                                    return t.React.createElement("div", {
                                        ref: e => {
                                            this.container = e
                                        }
                                    })
                                }
                            }
                            class R extends t.React.PureComponent {
                                constructor(e) {
                                    super(e),
                                    this.Locate = null,
                                    this.state = {
                                        apiLoaded: !1
                                    }
                                }
                                componentDidMount() {
                                    this.state.apiLoaded || (0, i.loadArcGISJSAPIModules)(["esri/widgets/Locate"]).then((e => {
                                            [this.Locate] = e,
                                            this.setState({
                                                apiLoaded: !0
                                            })
                                        }))
                                }
                                componentDidUpdate() {
                                    this.state.apiLoaded && this.container && (this.LocateBtn && (this.container.innerHTML = ""), this.LocateBtn = new this.Locate({
                                            container: this.container,
                                            view: this.props.jimuMapView.view
                                        }))
                                }
                                componentWillUnmount() {
                                    this.LocateBtn && (this.LocateBtn.destroy(), this.LocateBtn = null)
                                }
                                render() {
                                    return t.React.createElement("div", {
                                        className: "esri-widget--button",
                                        ref: e => {
                                            this.container = e
                                        }
                                    })
                                }
                            }
                            class E extends t.React.PureComponent {
                                constructor(e) {
                                    super(e),
                                    this.Navigation = null,
                                    this.state = {
                                        apiLoaded: !1
                                    }
                                }
                                componentDidMount() {
                                    this.state.apiLoaded || (0, i.loadArcGISJSAPIModules)(["esri/widgets/NavigationToggle"]).then((e => {
                                            [this.Navigation] = e,
                                            this.setState({
                                                apiLoaded: !0
                                            })
                                        }))
                                }
                                componentDidUpdate() {
                                    this.state.apiLoaded && this.container && (this.NavigationBtn && (this.container.innerHTML = ""), this.NavigationBtn = new this.Navigation({
                                            container: this.container,
                                            view: this.props.jimuMapView.view
                                        }))
                                }
                                componentWillUnmount() {
                                    this.NavigationBtn && (this.NavigationBtn.destroy(), this.NavigationBtn = null)
                                }
                                render() {
                                    return t.React.createElement("div", {
                                        ref: e => {
                                            this.container = e
                                        }
                                    })
                                }
                            }
                            class W extends t.React.PureComponent {
                                constructor(e) {
                                    super(e),
                                    this.Search = null,
                                    this.Portal = null,
                                    this.state = {
                                        apiLoaded: !1
                                    }
                                }
                                getStyle() {
                                    return t.css `
      /* border: solid 1px rgba(110,110,110,0.3); */
    `
                                }
                                componentDidMount() {
                                    this.state.apiLoaded || (0, i.loadArcGISJSAPIModules)(["esri/widgets/Search", "esri/portal/Portal"]).then((e => {
                                            [this.Search, this.Portal] = e,
                                            this.setState({
                                                apiLoaded: !0
                                            })
                                        }))
                                }
                                componentDidUpdate() {
                                    this.state.apiLoaded && this.container && (this.SearchBtn && (this.container.innerHTML = ""), this.SearchBtn = new this.Search({
                                            container: this.container,
                                            view: this.props.jimuMapView.view,
                                            portal: new this.Portal({
                                                url: (0, t.getAppStore)().getState().portalUrl
                                            })
                                        }))
                                }
                                componentWillUnmount() {
                                    this.SearchBtn && (this.SearchBtn.destroy(), this.SearchBtn = null)
                                }
                                render() {
                                    return (0, t.jsx)("div", {
                                        css: this.getStyle(),
                                        className: "w-100",
                                        ref: e => {
                                            this.container = e
                                        }
                                    }, !this.state.apiLoaded && (0, t.jsx)("div", {
                                            className: "exbmap-basetool-loader"
                                        }))
                                }
                            }
                            class A extends t.React.PureComponent {
                                constructor(e) {
                                    super(e),
                                    this.LayerList = null,
                                    this.state = {
                                        apiLoaded: !1
                                    }
                                }
                                componentDidMount() {
                                    this.state.apiLoaded || (0, i.loadArcGISJSAPIModules)(["esri/widgets/LayerList"]).then((e => {
                                            [this.LayerList] = e,
                                            this.setState({
                                                apiLoaded: !0
                                            })
                                        }))
                                }
                                componentDidUpdate(e) {
                                    this.state.apiLoaded && this.container && (e.jimuMapView && this.props.jimuMapView && e.jimuMapView.id !== this.props.jimuMapView.id ? this.LayerListBtn && (this.LayerListBtn.view = this.props.jimuMapView.view, this.LayerListBtn.renderNow()) : this.LayerListBtn = new this.LayerList({
                                            container: this.container,
                                            view: this.props.jimuMapView.view
                                        }))
                                }
                                componentWillUnmount() {
                                    this.LayerListBtn && (this.LayerListBtn = null)
                                }
                                render() {
                                    return t.React.createElement("div", {
                                        ref: e => {
                                            this.container = e
                                        },
                                        style: {
                                            width: "100%",
                                            minHeight: "32px",
                                            position: "relative"
                                        }
                                    }, !this.state.apiLoaded && t.React.createElement("div", {
                                            className: "exbmap-basetool-loader"
                                        }))
                                }
                            }
                            class k extends t.React.PureComponent {
                                constructor(e) {
                                    super(e),
                                    this.Legend = null,
                                    this.state = {
                                        apiLoaded: !1
                                    }
                                }
                                componentDidMount() {
                                    this.state.apiLoaded || (0, i.loadArcGISJSAPIModules)(["esri/widgets/Legend"]).then((e => {
                                            [this.Legend] = e,
                                            this.setState({
                                                apiLoaded: !0
                                            })
                                        }))
                                }
                                componentDidUpdate(e) {
                                    this.state.apiLoaded && this.container && (e.jimuMapView && this.props.jimuMapView && e.jimuMapView.id !== this.props.jimuMapView.id ? this.LegendBtn && (this.LegendBtn.view = this.props.jimuMapView.view, this.LegendBtn.renderNow()) : this.LegendBtn = new this.Legend({
                                            container: this.container,
                                            view: this.props.jimuMapView.view
                                        }))
                                }
                                componentWillUnmount() {
                                    this.LegendBtn && (this.LegendBtn = null)
                                }
                                render() {
                                    return t.React.createElement("div", {
                                        ref: e => {
                                            this.container = e
                                        },
                                        style: {
                                            width: "100%",
                                            minHeight: "32px",
                                            position: "relative"
                                        }
                                    }, !this.state.apiLoaded && t.React.createElement("div", {
                                            className: "exbmap-basetool-loader"
                                        }))
                                }
                            }
                            class B extends t.React.PureComponent {
                                constructor(e) {
                                    super(e),
                                    this.BaseMap = null,
                                    this.state = {
                                        apiLoaded: !1
                                    }
                                }
                                componentDidMount() {
                                    this.state.apiLoaded || (0, i.loadArcGISJSAPIModules)(["esri/widgets/BasemapGallery"]).then((e => {
                                            [this.BaseMap] = e,
                                            this.setState({
                                                apiLoaded: !0
                                            })
                                        }))
                                }
                                componentDidUpdate(e) {
                                    this.state.apiLoaded && this.container && (e.jimuMapView && this.props.jimuMapView && e.jimuMapView.id !== this.props.jimuMapView.id ? this.BaseMapBtn && (this.BaseMapBtn.view = this.props.jimuMapView.view, this.BaseMapBtn.renderNow()) : this.BaseMapBtn = new this.BaseMap({
                                            container: this.container,
                                            view: this.props.jimuMapView.view
                                        }))
                                }
                                componentWillUnmount() {
                                    this.BaseMapBtn && (this.BaseMapBtn.destroy(), this.BaseMapBtn = null)
                                }
                                render() {
                                    return this.props.isMobile ? t.React.createElement("div", {
                                        ref: e => {
                                            this.container = e
                                        },
                                        style: {
                                            width: "100%",
                                            minHeight: "32px",
                                            maxWidth: "none",
                                            maxHeight: "none",
                                            overflowY: "auto",
                                            position: "relative"
                                        }
                                    }, !this.state.apiLoaded && t.React.createElement("div", {
                                            className: "exbmap-basetool-loader"
                                        })) : t.React.createElement("div", {
                                        ref: e => {
                                            this.container = e
                                        },
                                        style: {
                                            width: "250px",
                                            minHeight: "32px",
                                            position: "relative"
                                        },
                                        className: "exbmap-ui-pc-expand-maxheight"
                                    }, !this.state.apiLoaded && t.React.createElement("div", {
                                            className: "exbmap-basetool-loader"
                                        }))
                                }
                            }
                            class O extends t.React.PureComponent {
                                constructor(e) {
                                    super(e),
                                    this.unmount = !1,
                                    this.setMapThumbUrl = e => {
                                        var i;
                                        e || this.setState({
                                            mapThumbUrl: null
                                        });
                                        const s = (null === (i = this.props) || void 0 === i ? void 0 : i.portUrl) || (0, t.getAppStore)().getState().portalUrl,
                                        o = t.SessionManager.getInstance().getSessionByUrl(s) || null;
                                        t.esri.restPortal.searchItems({
                                            q: `id:${e}`,
                                            authentication: o,
                                            portal: s + "/sharing/rest"
                                        }).then((e => {
                                                if (!this.unmount)
                                                    if (e.results[0]) {
                                                        const i = t.SessionManager.getInstance().getMainSession();
                                                        let o = null;
                                                        o = i && i.token ? `${s}/sharing/rest/content/items/${e.results[0].id}/info/${e.results[0].thumbnail}?token=${i.token}` : `${s}/sharing/rest/content/items/${e.results[0].id}/info/${e.results[0].thumbnail}`,
                                                        this.setState({
                                                            mapThumbUrl: o
                                                        })
                                                    } else
                                                        this.setState({
                                                            mapThumbUrl: null
                                                        })
                                            }))
                                    },
                                    this.state = {
                                        mapThumbUrl: null
                                    }
                                }
                                componentDidMount() {
                                    this.unmount = !1,
                                    this.setMapThumbUrl(this.props.mapItemId)
                                }
                                componentDidUpdate(e, t) {
                                    e.mapItemId !== this.props.mapItemId && this.setMapThumbUrl(this.props.mapItemId)
                                }
                                componentWillUnmount() {
                                    this.unmount = !0
                                }
                                render() {
                                    return this.state.mapThumbUrl ? t.React.createElement(s.ImageWithParam, {
                                        imageParam: {
                                            url: this.state.mapThumbUrl
                                        }
                                    }) : t.React.createElement(s.ImageWithParam, {
                                        imageParam: {}
                                    })
                                }
                            }
                            class H extends t.React.PureComponent {
                                constructor(e) {
                                    super(e),
                                    this.ScaleBar = null,
                                    this.state = {
                                        apiLoaded: !1
                                    }
                                }
                                componentDidMount() {
                                    this.state.apiLoaded || (0, i.loadArcGISJSAPIModules)(["esri/widgets/ScaleBar"]).then((e => {
                                            [this.ScaleBar] = e,
                                            this.setState({
                                                apiLoaded: !0
                                            })
                                        }))
                                }
                                componentDidUpdate() {
                                    this.state.apiLoaded && this.container && (this.ScaleBarBtn && (this.container.innerHTML = ""), this.ScaleBarBtn = new this.ScaleBar({
                                            container: this.container,
                                            view: this.props.jimuMapView.view,
                                            unit: "dual"
                                        }))
                                }
                                componentWillUnmount() {
                                    this.ScaleBarBtn && (this.ScaleBarBtn.destroy(), this.ScaleBarBtn = null)
                                }
                                render() {
                                    return t.React.createElement("div", {
                                        ref: e => {
                                            this.container = e
                                        }
                                    })
                                }
                            }
                            class z extends t.React.PureComponent {
                                constructor(e) {
                                    super(e),
                                    this.Attribution = null,
                                    this.state = {
                                        apiLoaded: !1
                                    }
                                }
                                componentDidMount() {
                                    this.state.apiLoaded || (0, i.loadArcGISJSAPIModules)(["esri/widgets/Attribution"]).then((e => {
                                            [this.Attribution] = e,
                                            this.setState({
                                                apiLoaded: !0
                                            })
                                        }))
                                }
                                componentDidUpdate(e) {
                                    this.state.apiLoaded && this.container && (e.jimuMapView && this.props.jimuMapView && e.jimuMapView.id !== this.props.jimuMapView.id ? this.AttributionBtn && (this.AttributionBtn.view = this.props.jimuMapView.view, this.AttributionBtn.renderNow()) : this.AttributionBtn = new this.Attribution({
                                            container: this.container,
                                            view: this.props.jimuMapView.view
                                        }))
                                }
                                componentWillUnmount() {
                                    this.AttributionBtn && (this.AttributionBtn.destroy(), this.AttributionBtn = null)
                                }
                                render() {
                                    return t.React.createElement("div", {
                                        style: {
                                            position: "relative"
                                        },
                                        ref: e => {
                                            this.container = e
                                        }
                                    })
                                }
                            }
                            class G extends t.React.PureComponent {
                                constructor(e) {
                                    super(e),
                                    this.MeasureInstance = null,
                                    this.checkContainer = () => {
                                        "0" !== this.container.style.opacity && 0 !== this.container.style.opacity || (this.container.style.opacity = 1, this.container.style.height = "")
                                    },
                                    this.state = {
                                        apiLoaded: !1
                                    }
                                }
                                componentDidMount() {
                                    this.state.apiLoaded || (0, i.loadArcGISJSAPIModules)(["esri/widgets/" + this.props.measureModule.path]).then((e => {
                                            [this.MeasureClass] = e,
                                            this.setState({
                                                apiLoaded: !0
                                            })
                                        }))
                                }
                                componentDidUpdate(e) {
                                    var t,
                                    i;
                                    if (e.activeTabIndex === this.props.activeTabIndex && e.measureModule === this.props.measureModule) {
                                        if (this.state.apiLoaded && this.parentContainer && this.container) {
                                            if (e.jimuMapView && this.props.jimuMapView && e.jimuMapView.id !== this.props.jimuMapView.id)
                                                this.props.measureInstance.view = this.props.jimuMapView.view, this.props.measureInstance.renderNow(), this.props.measureInstance.viewModel.start();
                                            else if (this.props.measureInstance)
                                                if (this.props.measureInstance.view === this.props.jimuMapView.view)
                                                    this.parentContainer.getElementsByClassName("measure-container") && this.parentContainer.getElementsByClassName("measure-container")[0] && this.parentContainer.getElementsByClassName("measure-container")[0].remove(), this.parentContainer.appendChild(this.props.measureInstance.container), "measured" !== this.props.measureInstance.viewModel.state && "measuring" !== this.props.measureInstance.viewModel.state && this.props.measureInstance.viewModel.start();
                                                else if ((null === (i = null === (t = this.props.measureInstance) || void 0 === t ? void 0 : t.view) || void 0 === i ? void 0 : i.type) !== this.props.jimuMapView.view.type) {
                                                    this.props.measureInstance.destroy(),
                                                    this.parentContainer.getElementsByClassName("measure-container") && this.parentContainer.getElementsByClassName("measure-container")[0] && this.parentContainer.getElementsByClassName("measure-container")[0].remove(),
                                                    this.container.innerHTML = "",
                                                    this.container.style.opacity = 1,
                                                    this.container.style.height = "",
                                                    this.parentContainer.appendChild(this.container);
                                                    const e = new this.MeasureClass({
                                                        container: this.container,
                                                        view: this.props.jimuMapView.view
                                                    });
                                                    e.viewModel.start(),
                                                    this.props.onMeasurceInstanceCreated(e, this.props.activeTabIndex)
                                                } else
                                                    this.props.measureInstance.view = this.props.jimuMapView.view, this.props.measureInstance.renderNow(), this.props.measureInstance.viewModel.start();
                                            else {
                                                const e = new this.MeasureClass({
                                                    container: this.container,
                                                    view: this.props.jimuMapView.view
                                                });
                                                e.viewModel.start(),
                                                this.props.onMeasurceInstanceCreated(e, this.props.activeTabIndex)
                                            }
                                            this.checkContainer()
                                        }
                                    } else
                                        this.reload()
                                }
                                reload() {
                                    this.container.childNodes && this.container.childNodes[0] && (this.container.style.opacity = 0, this.container.style.height = "35px"),
                                    this.setState({
                                        apiLoaded: !1
                                    }, (() => {
                                            (0, i.loadArcGISJSAPIModules)(["esri/widgets/" + this.props.measureModule.path]).then((e => {
                                                    [this.MeasureClass] = e,
                                                    this.setState({
                                                        apiLoaded: !0
                                                    })
                                                }))
                                        }))
                                }
                                render() {
                                    return t.React.createElement("div", {
                                        className: "w-100",
                                        style: {
                                            width: "250px",
                                            position: "relative",
                                            minHeight: "32px"
                                        },
                                        ref: e => {
                                            this.parentContainer = e
                                        }
                                    }, t.React.createElement("div", {
                                            className: "measure-container",
                                            ref: e => {
                                                this.container = e
                                            }
                                        }), !this.state.apiLoaded && t.React.createElement("div", {
                                            className: "exbmap-basetool-loader"
                                        }))
                                }
                            }
                            const F = {
                                style: "esriSMSCircle",
                                color: [0, 0, 128, 128],
                                name: "Circle",
                                outline: {
                                    color: [0, 0, 128, 255],
                                    width: 1
                                },
                                type: "esriSMS",
                                size: 18
                            },
                            U = {
                                tags: ["solid"],
                                title: "Blue Thin",
                                style: "esriSLSSolid",
                                color: [79, 129, 189, 255],
                                width: 3,
                                name: "Blue 1",
                                type: "esriSLS"
                            },
                            J = {
                                style: "esriSFSSolid",
                                color: [79, 129, 189, 77],
                                type: "esriSFS",
                                outline: {
                                    style: "esriSLSSolid",
                                    color: [54, 93, 141, 255],
                                    width: 1.5,
                                    type: "esriSLS"
                                }
                            },
                            $ = n(33630),
                            q = n(21253),
                            _ = n(58855),
                            Y = n(92272),
                            Q = n(54950),
                            Z = n(87861),
                            K = n(66131);
                            class X extends t.React.PureComponent {
                                constructor(e) {
                                    super(e),
                                    this.currentActiveTool = "rectangle",
                                    this.jsonUtils = null,
                                    this.resultGraphics = [],
                                    this.toggleIsSelectActive = () => {
                                        this.setState({
                                            isActive: !this.state.isActive
                                        })
                                    },
                                    this.getSelectToolIcon = () => "Point" === this.state.currentSelectType ? Z : "Rectangle" === this.state.currentSelectType ? q : "Lasso" === this.state.currentSelectType ? _ : "Circle" === this.state.currentSelectType ? Y : "Line" === this.state.currentSelectType ? Q : q,
                                    this.toggleSelectTypePopup = () => {
                                        this.setState({
                                            isShowSelectTypePopup: !this.state.isShowSelectTypePopup
                                        })
                                    },
                                    this.toggleResultPopup = () => {
                                        this.setState({
                                            isShowResultPopup: !this.state.isShowResultPopup
                                        })
                                    },
                                    this.setCurrentSelectType = e => {
                                        this.initialSketchTool(),
                                        "Point" === e && (this.sketchViewModel.create("point"), this.currentActiveTool = "point"),
                                        "Rectangle" === e && (this.sketchViewModel.create("rectangle"), this.currentActiveTool = "rectangle"),
                                        "Lasso" === e && (this.sketchViewModel.create("polygon"), this.currentActiveTool = "polygon"),
                                        "Circle" === e && (this.sketchViewModel.create("circle"), this.currentActiveTool = "circle"),
                                        "Line" === e && (this.sketchViewModel.create("polyline"), this.currentActiveTool = "polyline"),
                                        this.setState({
                                            currentSelectType: e,
                                            isShowSelectTypePopup: !1,
                                            isActive: !0
                                        })
                                    },
                                    this.clearSelect = () => {
                                        this.props.jimuMapView.clearSelectedFeatures()
                                    },
                                    this.state = {
                                        isShowResultPopup: !1,
                                        isShowSelectTypePopup: !1,
                                        currentSelectType: "Rectangle",
                                        sketchInitialed: !1,
                                        isActive: !1,
                                        spatialRelationship: "intersects",
                                        resultGraphics: [],
                                        isQuerying: !1
                                    }
                                }
                                getCSSStyle() {
                                    const e = this.props.theme,
                                    i = e.arcgis.components.button.variants.default.default.bg,
                                    s = e.arcgis.components.button.variants.default.default.border;
                                    return t.css `
                                          .select-tool-container {
                                            ${i&&` background - color: $ {
                                        i
                                    };
                                    `}
                                            ${s&&` border: $ {
                                        s.color
                                    }
                                    $ {
                                        s.width
                                    }
                                    solid;
                                    `}
      }

      .select-tool-btn {
        width: 32px;
        height: 32px;
      }

      .content-bg {
        background-color: ${e.colors.palette.light[100]};
      }

      .content-title {
        font-size: ${t.polished.rem(13)};
        font-weight: bold;
      }

      .select-tool-type-mobile-container-shell {
        overflow-x: auto;
      }

      .select-tool-type-mobile-container-shell::-webkit-scrollbar {
        height: 0 !important;
        display: none;
      }

      .select-tool-type-mobile-container {
        width: 400px;
      }

      .select-tool-type {
        width: 64px;
        height: 64px;
        border: 1px solid ${e.colors.palette.light[400]};
        cursor: pointer;
      }

      .select-tool-type-choosed {
        border: 1px solid ${e.colors.primary};
        position: relative;
      }

      .select-tool-type-choosed:after {
        width: 0;
        height: 0;
        border-top: 8px solid ${e.colors.primary};
        border-left: 8px solid transparent;
        position: absolute;
        top: 0;
        right: 0;
        content: "";
      }

      .select-tool-type-text {
        font-size: ${t.polished.rem(12)};
      }

      .select-tool-loader {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 2px;
        width: 100%;
        animation: esri-fade-in 500ms ease-in-out;
      }

      .select-tool-loader:before {
        background-color: rgba(110,110,110,0.3);
        width: 100%;
        z-index: 0;
        content: "";
        opacity: 1;
        position: absolute;
        height: 2px;
        top: 0;
        transition: opacity 500ms ease-in-out;
      }

      .select-tool-loader:after {
        background-color: ${e.colors.primary};
        width: 20%;
        z-index: 0;
        animation: looping-progresss-bar-ani 1500ms linear infinite;
        content: "";
        opacity: 1;
        position: absolute;
        height: 2px;
        top: 0;
        transition: opacity 500ms ease-in-out;
      }

    `
                                }
                                componentDidMount() {
                                    this.state.sketchInitialed || (0, i.loadArcGISJSAPIModules)(["esri/widgets/Sketch/SketchViewModel", "esri/layers/GraphicsLayer", "esri/tasks/support/Query", "esri/symbols/support/jsonUtils", "esri/geometry/geometryEngine"]).then((e => {
                                            [this.SketchViewModel, this.GraphicsLayer, this.Query, this.jsonUtils, this.geometryEngine] = e,
                                            this.props.jimuMapView.view.when((() => {
                                                    this.initialSketchTool(),
                                                    this.setState({
                                                        sketchInitialed: !0
                                                    })
                                                }))
                                        }))
                                }
                                componentDidUpdate(e, t) {
                                    return t.sketchInitialed !== this.state.sketchInitialed && this.state.sketchInitialed ? (this.initialSketchTool(), void(this.state.isActive && this.currentActiveTool && this.sketchViewModel.create(this.currentActiveTool))) : e.jimuMapView && this.props.jimuMapView && e.jimuMapView.id !== this.props.jimuMapView.id && this.state.sketchInitialed ? (this.initialSketchTool(), this.sketchViewModel.view = this.props.jimuMapView.view, void(this.state.isActive && this.currentActiveTool && this.sketchViewModel.create(this.currentActiveTool))) : void(t.isActive !== this.state.isActive && (this.initialSketchTool(), this.state.isActive ? this.sketchViewModel.create(this.currentActiveTool) : (this.sketchViewModel.destroy(), this.sketchViewModel = null)))
                                }
                                componentWillUnmount() {
                                    this.sketchViewModel && this.sketchViewModel.destroy()
                                }
                                initialSketchTool() {
                                    this.SketchViewModel && (this.sketchViewModel || (this.sketchViewModel = new this.SketchViewModel({
                                                view: this.props.jimuMapView.view,
                                                layer: new this.GraphicsLayer,
                                                pointSymbol: this.jsonUtils.fromJSON(F),
                                                polylineSymbol: this.jsonUtils.fromJSON(U),
                                                polygonSymbol: this.jsonUtils.fromJSON(J)
                                            }), this.sketchViewModel.on("create", (e => {
                                                    "complete" === e.state && (this.sketchViewModel.create(this.currentActiveTool), this.setState({
                                                            isQuerying: !0
                                                        }), this.props.jimuMapView.selectFeaturesByGraphic(e.graphic, this.state.spatialRelationship).then((() => {
                                                                this.setState({
                                                                    isQuerying: !1
                                                                })
                                                            })))
                                                }))))
                                }
                                render() {
                                    return (0, t.jsx)("div", {
                                        css: this.getCSSStyle()
                                    }, (0, t.jsx)("div", {
                                            className: "d-flex align-items-center justify-content-center select-tool-container",
                                            ref: e => {
                                                this.btnContainer = e
                                            }
                                        }, (0, t.jsx)("div", {
                                                className: "d-flex"
                                            }, (0, t.jsx)("div", {
                                                    className: "d-flex"
                                                }, (0, t.jsx)("button", {
                                                        onClick: this.toggleIsSelectActive,
                                                        className: (0, t.classNames)("esri-widget--button  border-0 select-tool-btn d-flex align-items-center justify-content-center", {
                                                            active: this.state.isActive
                                                        }),
                                                        disabled: !this.state.sketchInitialed
                                                    }, (0, t.jsx)(s.Icon, {
                                                            width: 16,
                                                            height: 16,
                                                            icon: this.getSelectToolIcon()
                                                        })), (0, t.jsx)("button", {
                                                        onClick: this.toggleSelectTypePopup,
                                                        style: {
                                                            width: 18
                                                        },
                                                        className: (0, t.classNames)("esri-widget--button border-0 pl-1 pr-1 select-tool-btn d-flex align-items-center justify-content-center", {
                                                            active: this.state.isShowSelectTypePopup
                                                        }),
                                                        disabled: !this.state.sketchInitialed
                                                    }, (0, t.jsx)(s.Icon, {
                                                            width: 8,
                                                            height: 8,
                                                            icon: $
                                                        }))), (0, t.jsx)("button", {
                                                    className: "select-tool-btn d-flex align-items-center justify-content-center select-tool-btn-hover esri-widget--button border-0",
                                                    ref: e => {
                                                        this.selectResultContainer = e
                                                    },
                                                    onClick: this.clearSelect,
                                                    disabled: !this.state.sketchInitialed
                                                }, (0, t.jsx)(s.Icon, {
                                                        width: 16,
                                                        height: 16,
                                                        icon: K
                                                    })), (0, t.jsx)(s.Popper, {
                                                    css: this.getCSSStyle(),
                                                    reference: this.btnContainer,
                                                    open: this.state.isShowSelectTypePopup,
                                                    placement: "bottom-start",
                                                    toggle: this.toggleSelectTypePopup
                                                }, (0, t.jsx)("div", {
                                                        className: "p-3 content-bg",
                                                        style: {
                                                            display: "flex",
                                                            flexDirection: "column"
                                                        }
                                                    }, (0, t.jsx)("div", {
                                                            className: "content-title"
                                                        }, this.props.intl.formatMessage({
                                                                id: "SelectionTool",
                                                                defaultMessage: s.defaultMessages.SelectionTool
                                                            })), (0, t.jsx)("div", {
                                                            className: "mt-2 mb-2"
                                                        }, (0, t.jsx)("div", {
                                                                className: "d-flex mb-2"
                                                            }, (0, t.jsx)("div", {
                                                                    className: (0, t.classNames)("select-tool-type mr-2 d-flex flex-column align-items-center justify-content-center select-tool-btn-hover", {
                                                                        "select-tool-type-choosed": "Rectangle" === this.state.currentSelectType
                                                                    }),
                                                                    onClick: () => {
                                                                        this.setCurrentSelectType("Rectangle")
                                                                    }
                                                                }, (0, t.jsx)(s.Icon, {
                                                                        width: 16,
                                                                        height: 16,
                                                                        icon: q
                                                                    }), (0, t.jsx)("div", {
                                                                        className: "select-tool-type-text mt-1 w-100 text-truncate pl-1 pr-1 d-flex justify-content-center",
                                                                        title: this.props.intl.formatMessage({
                                                                            id: "SelectionToolRectangle",
                                                                            defaultMessage: s.defaultMessages.SelectionToolRectangle
                                                                        })
                                                                    }, this.props.intl.formatMessage({
                                                                            id: "SelectionToolRectangle",
                                                                            defaultMessage: s.defaultMessages.SelectionToolRectangle
                                                                        }))), (0, t.jsx)("div", {
                                                                    className: (0, t.classNames)("select-tool-type mr-2 d-flex flex-column align-items-center justify-content-center select-tool-btn-hover", {
                                                                        "select-tool-type-choosed": "Lasso" === this.state.currentSelectType
                                                                    }),
                                                                    onClick: () => {
                                                                        this.setCurrentSelectType("Lasso")
                                                                    }
                                                                }, (0, t.jsx)(s.Icon, {
                                                                        width: 16,
                                                                        height: 16,
                                                                        icon: _
                                                                    }), (0, t.jsx)("div", {
                                                                        className: "select-tool-type-text mt-1 w-100 text-truncate pl-1 pr-1 d-flex justify-content-center",
                                                                        title: this.props.intl.formatMessage({
                                                                            id: "SelectionToolLasso",
                                                                            defaultMessage: s.defaultMessages.SelectionToolLasso
                                                                        })
                                                                    }, this.props.intl.formatMessage({
                                                                            id: "SelectionToolLasso",
                                                                            defaultMessage: s.defaultMessages.SelectionToolLasso
                                                                        }))), (0, t.jsx)("div", {
                                                                    className: (0, t.classNames)("select-tool-type d-flex flex-column align-items-center justify-content-center select-tool-btn-hover", {
                                                                        "select-tool-type-choosed": "Circle" === this.state.currentSelectType
                                                                    }),
                                                                    onClick: () => {
                                                                        this.setCurrentSelectType("Circle")
                                                                    }
                                                                }, (0, t.jsx)(s.Icon, {
                                                                        width: 16,
                                                                        height: 16,
                                                                        icon: Y
                                                                    }), (0, t.jsx)("div", {
                                                                        className: "select-tool-type-text mt-1 w-100 text-truncate pl-1 pr-1 d-flex justify-content-center",
                                                                        title: this.props.intl.formatMessage({
                                                                            id: "SelectionToolCircle",
                                                                            defaultMessage: s.defaultMessages.SelectionToolCircle
                                                                        })
                                                                    }, this.props.intl.formatMessage({
                                                                            id: "SelectionToolCircle",
                                                                            defaultMessage: s.defaultMessages.SelectionToolCircle
                                                                        })))), (0, t.jsx)("div", {
                                                                className: "d-flex"
                                                            }, (0, t.jsx)("div", {
                                                                    className: (0, t.classNames)("select-tool-type mr-2 d-flex flex-column align-items-center justify-content-center select-tool-btn-hover", {
                                                                        "select-tool-type-choosed": "Line" === this.state.currentSelectType
                                                                    }),
                                                                    onClick: () => {
                                                                        this.setCurrentSelectType("Line")
                                                                    }
                                                                }, (0, t.jsx)(s.Icon, {
                                                                        width: 16,
                                                                        height: 16,
                                                                        icon: Q
                                                                    }), (0, t.jsx)("div", {
                                                                        className: "select-tool-type-text mt-1 w-100 text-truncate pl-1 pr-1 d-flex justify-content-center",
                                                                        title: this.props.intl.formatMessage({
                                                                            id: "SelectionToolLine",
                                                                            defaultMessage: s.defaultMessages.SelectionToolLine
                                                                        })
                                                                    }, this.props.intl.formatMessage({
                                                                            id: "SelectionToolLine",
                                                                            defaultMessage: s.defaultMessages.SelectionToolLine
                                                                        }))), (0, t.jsx)("div", {
                                                                    className: (0, t.classNames)("select-tool-type d-flex flex-column align-items-center justify-content-center select-tool-btn-hover", {
                                                                        "select-tool-type-choosed": "Point" === this.state.currentSelectType
                                                                    }),
                                                                    onClick: () => {
                                                                        this.setCurrentSelectType("Point")
                                                                    }
                                                                }, (0, t.jsx)(s.Icon, {
                                                                        width: 16,
                                                                        height: 16,
                                                                        icon: Z
                                                                    }), (0, t.jsx)("div", {
                                                                        className: "select-tool-type-text mt-1 w-100 text-truncate pl-1 pr-1 d-flex justify-content-center",
                                                                        title: this.props.intl.formatMessage({
                                                                            id: "SelectionToolPoint",
                                                                            defaultMessage: s.defaultMessages.SelectionToolPoint
                                                                        })
                                                                    }, this.props.intl.formatMessage({
                                                                            id: "SelectionToolPoint",
                                                                            defaultMessage: s.defaultMessages.SelectionToolPoint
                                                                        }))))), (0, t.jsx)("div", {
                                                            className: "content-title"
                                                        }, this.props.intl.formatMessage({
                                                                id: "SelectionMode",
                                                                defaultMessage: s.defaultMessages.SelectionMode
                                                            })), (0, t.jsx)("div", null, (0, t.jsx)("div", {
                                                                className: "d-flex align-items-center mt-2"
                                                            }, (0, t.jsx)(s.Radio, {
                                                                    style: {
                                                                        cursor: "pointer"
                                                                    },
                                                                    checked: "intersects" === this.state.spatialRelationship,
                                                                    onChange: () => {
                                                                        this.setState({
                                                                            spatialRelationship: "intersects"
                                                                        })
                                                                    }
                                                                }), (0, t.jsx)("label", {
                                                                    className: "m-0 ml-2 content-title",
                                                                    style: {
                                                                        cursor: "pointer"
                                                                    },
                                                                    onClick: () => {
                                                                        this.setState({
                                                                            spatialRelationship: "intersects"
                                                                        })
                                                                    }
                                                                }, this.props.intl.formatMessage({
                                                                        id: "SelectionWithin",
                                                                        defaultMessage: s.defaultMessages.SelectionWithin
                                                                    }))), (0, t.jsx)("div", {
                                                                className: "d-flex align-items-center mt-2"
                                                            }, (0, t.jsx)(s.Radio, {
                                                                    style: {
                                                                        cursor: "pointer"
                                                                    },
                                                                    checked: "contains" === this.state.spatialRelationship,
                                                                    onChange: () => {
                                                                        this.setState({
                                                                            spatialRelationship: "contains"
                                                                        })
                                                                    }
                                                                }), (0, t.jsx)("label", {
                                                                    className: "m-0 ml-2 content-title",
                                                                    style: {
                                                                        cursor: "pointer"
                                                                    },
                                                                    onClick: () => {
                                                                        this.setState({
                                                                            spatialRelationship: "contains"
                                                                        })
                                                                    }
                                                                }, this.props.intl.formatMessage({
                                                                        id: "SelectionContain",
                                                                        defaultMessage: s.defaultMessages.SelectionContain
                                                                    })))))))), (this.state.isQuerying || !this.state.sketchInitialed) && (0, t.jsx)("div", {
                                            className: "select-tool-loader"
                                        }))
                                }
                            }
                            const ee = {
                                style: "esriSMSCircle",
                                color: [0, 0, 128, 128],
                                name: "Circle",
                                outline: {
                                    color: [0, 0, 128, 255],
                                    width: 1
                                },
                                type: "esriSMS",
                                size: 18
                            },
                            te = {
                                tags: ["solid"],
                                title: "Blue Thin",
                                style: "esriSLSSolid",
                                color: [79, 129, 189, 255],
                                width: 3,
                                name: "Blue 1",
                                type: "esriSLS"
                            },
                            ie = {
                                style: "esriSFSSolid",
                                color: [79, 129, 189, 77],
                                type: "esriSFS",
                                outline: {
                                    style: "esriSLSSolid",
                                    color: [54, 93, 141, 255],
                                    width: 1.5,
                                    type: "esriSLS"
                                }
                            },
                            se = n(21253),
                            oe = n(58855),
                            ae = n(92272),
                            ne = n(54950),
                            re = n(87861),
                            le = n(37580);
                            class pe extends t.React.PureComponent {
                                constructor(e) {
                                    super(e),
                                    this.jsonUtils = null,
                                    this.currentActiveTool = "rectangle",
                                    this.setCurrentSelectType = e => {
                                        this.initialSketchTool(),
                                        e !== this.state.currentSelectType && ("Point" === e && (this.props.isActive && this.sketchViewModel.create("point"), this.currentActiveTool = "point"), "Rectangle" === e && (this.props.isActive && this.sketchViewModel.create("rectangle"), this.currentActiveTool = "rectangle"), "Lasso" === e && (this.props.isActive && this.sketchViewModel.create("polygon"), this.currentActiveTool = "polygon"), "Circle" === e && (this.props.isActive && this.sketchViewModel.create("circle"), this.currentActiveTool = "circle"), "Line" === e && (this.props.isActive && this.sketchViewModel.create("polyline"), this.currentActiveTool = "polyline"), this.setState({
                                                currentSelectType: e
                                            }, (() => {
                                                    (!this.props.activeToolInfo || this.props.activeToolInfo && this.props.activeToolInfo.activeToolName !== this.props.toolName) && this.props._onIconClick(null)
                                                })))
                                    },
                                    this.toggleIsSelectActive = () => {
                                        this.props._onIconClick(null)
                                    },
                                    this.handleIsShowSelectSetting = () => {
                                        this.setState({
                                            isShowSelectSetting: !this.state.isShowSelectSetting
                                        })
                                    },
                                    this.getSelectToolIcon = () => "Point" === this.state.currentSelectType ? re : "Rectangle" === this.state.currentSelectType ? se : "Lasso" === this.state.currentSelectType ? oe : "Circle" === this.state.currentSelectType ? ae : "Line" === this.state.currentSelectType ? ne : se,
                                    this.getMobilePanelForSelectSetting = () => (0, t.jsx)(M.Consumer, null, (({
                                                mapWidgetId: e
                                            }) => (0, t.jsx)(s.MobilePanel, {
                                                mapWidgetId: `${e}-with-select-container`,
                                                title: "",
                                                open: this.state.isShowSelectSetting,
                                                toggle: () => {
                                                    this.handleIsShowSelectSetting()
                                                }
                                            }, (0, t.jsx)("div", {
                                                    className: "w-100"
                                                }, this.getMobilePanelSettingContent())))),
                                    this.getMobilePanelSettingContent = () => (0, t.jsx)("div", {
                                        css: this.getCSSStyle()
                                    }, (0, t.jsx)("div", {
                                            className: "content-title mt-1 mb-2"
                                        }, this.props.intl.formatMessage({
                                                id: "SelectionTool",
                                                defaultMessage: s.defaultMessages.SelectionTool
                                            })), (0, t.jsx)("div", {
                                            className: "w-100 select-tool-type-mobile-container-shell"
                                        }, (0, t.jsx)("div", {
                                                className: "select-tool-type-mobile-container"
                                            }, (0, t.jsx)("div", {
                                                    className: (0, t.classNames)("select-tool-type mr-3 d-flex flex-column align-items-center justify-content-center select-tool-btn-hover", {
                                                        "select-tool-type-choosed": "Rectangle" === this.state.currentSelectType
                                                    }),
                                                    onClick: () => {
                                                        this.setCurrentSelectType("Rectangle")
                                                    },
                                                    style: {
                                                        float: "left"
                                                    }
                                                }, (0, t.jsx)(s.Icon, {
                                                        width: 16,
                                                        height: 16,
                                                        icon: se
                                                    }), (0, t.jsx)("div", {
                                                        className: "select-tool-type-text mt-1 w-100 text-truncate pl-1 pr-1 d-flex justify-content-center",
                                                        title: this.props.intl.formatMessage({
                                                            id: "SelectionToolRectangle",
                                                            defaultMessage: s.defaultMessages.SelectionToolRectangle
                                                        })
                                                    }, this.props.intl.formatMessage({
                                                            id: "SelectionToolRectangle",
                                                            defaultMessage: s.defaultMessages.SelectionToolRectangle
                                                        }))), (0, t.jsx)("div", {
                                                    className: (0, t.classNames)("select-tool-type mr-3 d-flex flex-column align-items-center justify-content-center select-tool-btn-hover", {
                                                        "select-tool-type-choosed": "Lasso" === this.state.currentSelectType
                                                    }),
                                                    onClick: () => {
                                                        this.setCurrentSelectType("Lasso")
                                                    },
                                                    style: {
                                                        float: "left"
                                                    }
                                                }, (0, t.jsx)(s.Icon, {
                                                        width: 16,
                                                        height: 16,
                                                        icon: oe
                                                    }), (0, t.jsx)("div", {
                                                        className: "select-tool-type-text mt-1 w-100 text-truncate pl-1 pr-1 d-flex justify-content-center",
                                                        title: this.props.intl.formatMessage({
                                                            id: "SelectionToolLasso",
                                                            defaultMessage: s.defaultMessages.SelectionToolLasso
                                                        })
                                                    }, this.props.intl.formatMessage({
                                                            id: "SelectionToolLasso",
                                                            defaultMessage: s.defaultMessages.SelectionToolLasso
                                                        }))), (0, t.jsx)("div", {
                                                    className: (0, t.classNames)("select-tool-type mr-3 d-flex flex-column align-items-center justify-content-center select-tool-btn-hover", {
                                                        "select-tool-type-choosed": "Circle" === this.state.currentSelectType
                                                    }),
                                                    onClick: () => {
                                                        this.setCurrentSelectType("Circle")
                                                    },
                                                    style: {
                                                        float: "left"
                                                    }
                                                }, (0, t.jsx)(s.Icon, {
                                                        width: 16,
                                                        height: 16,
                                                        icon: ae
                                                    }), (0, t.jsx)("div", {
                                                        className: "select-tool-type-text mt-1 w-100 text-truncate pl-1 pr-1 d-flex justify-content-center",
                                                        title: this.props.intl.formatMessage({
                                                            id: "SelectionToolCircle",
                                                            defaultMessage: s.defaultMessages.SelectionToolCircle
                                                        })
                                                    }, this.props.intl.formatMessage({
                                                            id: "SelectionToolCircle",
                                                            defaultMessage: s.defaultMessages.SelectionToolCircle
                                                        }))), (0, t.jsx)("div", {
                                                    className: (0, t.classNames)("select-tool-type mr-3 d-flex flex-column align-items-center justify-content-center select-tool-btn-hover", {
                                                        "select-tool-type-choosed": "Line" === this.state.currentSelectType
                                                    }),
                                                    onClick: () => {
                                                        this.setCurrentSelectType("Line")
                                                    },
                                                    style: {
                                                        float: "left"
                                                    }
                                                }, (0, t.jsx)(s.Icon, {
                                                        width: 16,
                                                        height: 16,
                                                        icon: ne
                                                    }), (0, t.jsx)("div", {
                                                        className: "select-tool-type-text mt-1 w-100 text-truncate pl-1 pr-1 d-flex justify-content-center",
                                                        title: this.props.intl.formatMessage({
                                                            id: "SelectionToolLine",
                                                            defaultMessage: s.defaultMessages.SelectionToolLine
                                                        })
                                                    }, this.props.intl.formatMessage({
                                                            id: "SelectionToolLine",
                                                            defaultMessage: s.defaultMessages.SelectionToolLine
                                                        }))), (0, t.jsx)("div", {
                                                    className: (0, t.classNames)("select-tool-type mr-3 d-flex flex-column align-items-center justify-content-center select-tool-btn-hover", {
                                                        "select-tool-type-choosed": "Point" === this.state.currentSelectType
                                                    }),
                                                    onClick: () => {
                                                        this.setCurrentSelectType("Point")
                                                    },
                                                    style: {
                                                        float: "left"
                                                    }
                                                }, (0, t.jsx)(s.Icon, {
                                                        width: 16,
                                                        height: 16,
                                                        icon: re
                                                    }), (0, t.jsx)("div", {
                                                        className: "select-tool-type-text mt-1 w-100 text-truncate pl-1 pr-1 d-flex justify-content-center",
                                                        title: this.props.intl.formatMessage({
                                                            id: "SelectionToolPoint",
                                                            defaultMessage: s.defaultMessages.SelectionToolPoint
                                                        })
                                                    }, this.props.intl.formatMessage({
                                                            id: "SelectionToolPoint",
                                                            defaultMessage: s.defaultMessages.SelectionToolPoint
                                                        }))))), (0, t.jsx)("div", {
                                            className: "content-title mt-1 mb-2"
                                        }, this.props.intl.formatMessage({
                                                id: "SelectionMode",
                                                defaultMessage: s.defaultMessages.SelectionMode
                                            })), (0, t.jsx)("div", null, (0, t.jsx)("div", {
                                                className: "d-flex align-items-center mt-2"
                                            }, (0, t.jsx)(s.Radio, {
                                                    style: {
                                                        cursor: "pointer"
                                                    },
                                                    checked: "intersects" === this.state.spatialRelationship,
                                                    onChange: () => {
                                                        this.setState({
                                                            spatialRelationship: "intersects"
                                                        })
                                                    }
                                                }), (0, t.jsx)("label", {
                                                    className: "m-0 ml-2 content-title",
                                                    style: {
                                                        cursor: "pointer"
                                                    },
                                                    onClick: () => {
                                                        this.setState({
                                                            spatialRelationship: "intersects"
                                                        })
                                                    }
                                                }, this.props.intl.formatMessage({
                                                        id: "SelectionWithin",
                                                        defaultMessage: s.defaultMessages.SelectionWithin
                                                    }))), (0, t.jsx)("div", {
                                                className: "d-flex align-items-center mt-2"
                                            }, (0, t.jsx)(s.Radio, {
                                                    style: {
                                                        cursor: "pointer"
                                                    },
                                                    checked: "contains" === this.state.spatialRelationship,
                                                    onChange: () => {
                                                        this.setState({
                                                            spatialRelationship: "contains"
                                                        })
                                                    }
                                                }), (0, t.jsx)("label", {
                                                    className: "m-0 ml-2 content-title",
                                                    style: {
                                                        cursor: "pointer"
                                                    },
                                                    onClick: () => {
                                                        this.setState({
                                                            spatialRelationship: "contains"
                                                        })
                                                    }
                                                }, this.props.intl.formatMessage({
                                                        id: "SelectionContain",
                                                        defaultMessage: s.defaultMessages.SelectionContain
                                                    }))))),
                                    this.state = {
                                        currentSelectType: "Rectangle",
                                        sketchInitialed: !1,
                                        spatialRelationship: "intersects",
                                        isQuerying: !1,
                                        isShowSelectSetting: !1
                                    }
                                }
                                getCSSStyle() {
                                    const e = this.props.theme;
                                    return t.css `
      background-color: 'initial';

      .select-tool-btn-hover: hover {
        background-color: ${t.polished.rgba(e.colors.palette.primary[500],.1)};;
      }

      .content-title {
        font-size: ${t.polished.rem(13)};
        font-weight: bold;
      }

      .select-tool-type-mobile-container-shell {
        overflow-x: auto;
      }

      .select-tool-type-mobile-container-shell::-webkit-scrollbar {
        height: 0 !important;
        display: none;
      }

      .select-tool-type-mobile-container {
        width: 400px;
      }

      .select-tool-type {
        width: 64px;
        height: 64px;
        border: 1px solid ${e.colors.palette.light[400]};
        cursor: pointer;
      }

      .select-tool-type-choosed {
        border: 1px solid ${e.colors.primary};
        position: relative;
      }

      .select-tool-type-choosed:after {
        width: 0;
        height: 0;
        border-top: 8px solid ${e.colors.primary};
        border-left: 8px solid transparent;
        position: absolute;
        top: 0;
        right: 0;
        content: "";
      }

      .select-tool-type-text {
        font-size: ${t.polished.rem(12)};
      }

      .select-tool-loader {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 2px;
        width: 100%;
        animation: esri-fade-in 500ms ease-in-out;
      }

      .select-tool-loader:before {
        background-color: rgba(110,110,110,0.3);
        width: 100%;
        z-index: 0;
        content: "";
        opacity: 1;
        position: absolute;
        height: 2px;
        top: 0;
        transition: opacity 500ms ease-in-out;
      }

      .select-tool-loader:after {
        background-color: ${e.colors.primary};
        width: 40%;
        z-index: 0;
        animation: looping-progresss-bar-ani 1500ms linear infinite;
        content: "";
        opacity: 1;
        position: absolute;
        height: 2px;
        top: 0;
        transition: opacity 500ms ease-in-out;
      }

    `
                                }
                                componentDidMount() {
                                    this.state.sketchInitialed || (0, i.loadArcGISJSAPIModules)(["esri/widgets/Sketch/SketchViewModel", "esri/layers/GraphicsLayer", "esri/tasks/support/Query", "esri/symbols/support/jsonUtils", "esri/geometry/geometryEngine"]).then((e => {
                                            [this.SketchViewModel, this.GraphicsLayer, this.Query, this.jsonUtils, this.geometryEngine] = e,
                                            this.props.jimuMapView.view.when((() => {
                                                    this.initialSketchTool(),
                                                    this.setState({
                                                        sketchInitialed: !0
                                                    })
                                                }))
                                        }))
                                }
                                componentDidUpdate(e, t) {
                                    const i = e.activeToolInfo && e.activeToolInfo.activeToolName,
                                    s = this.props.activeToolInfo && this.props.activeToolInfo.activeToolName;
                                    return i !== s && s !== this.props.toolName && s && this.setState({
                                        isShowSelectSetting: !1
                                    }),
                                    t.sketchInitialed !== this.state.sketchInitialed && this.state.sketchInitialed ? (this.initialSketchTool(), void(this.props.isActive && this.currentActiveTool && this.sketchViewModel.create(this.currentActiveTool))) : e.jimuMapView && this.props.jimuMapView && e.jimuMapView.id !== this.props.jimuMapView.id && this.state.sketchInitialed ? (this.initialSketchTool(), this.sketchViewModel.view = this.props.jimuMapView.view, void(this.props.isActive && this.currentActiveTool && this.sketchViewModel.create(this.currentActiveTool))) : void(e.isActive !== this.props.isActive && (this.initialSketchTool(), this.props.isActive ? this.sketchViewModel.create(this.currentActiveTool) : (this.sketchViewModel.destroy(), this.sketchViewModel = null)))
                                }
                                componentWillUnmount() {
                                    this.sketchViewModel && this.sketchViewModel.destroy()
                                }
                                initialSketchTool() {
                                    this.SketchViewModel && (this.sketchViewModel || (this.sketchViewModel = new this.SketchViewModel({
                                                view: this.props.jimuMapView.view,
                                                layer: new this.GraphicsLayer,
                                                pointSymbol: this.jsonUtils.fromJSON(ee),
                                                polylineSymbol: this.jsonUtils.fromJSON(te),
                                                polygonSymbol: this.jsonUtils.fromJSON(ie)
                                            }), this.sketchViewModel.on("create", (e => {
                                                    "complete" === e.state && (this.sketchViewModel.create(this.currentActiveTool), this.setState({
                                                            isQuerying: !0
                                                        }), this.props.jimuMapView.selectFeaturesByGraphic(e.graphic, this.state.spatialRelationship).then((() => {
                                                                this.setState({
                                                                    isQuerying: !1
                                                                })
                                                            })))
                                                }))))
                                }
                                render() {
                                    return (0, t.jsx)("div", {
                                        css: this.getCSSStyle()
                                    }, this.state.sketchInitialed && (0, t.jsx)("div", {
                                            onClick: this.toggleIsSelectActive,
                                            style: {},
                                            className: (0, t.classNames)("exbmap-ui-tool border-0 esri-widget--button", {
                                                "exbmap-ui-tool-icon-selected": this.props.isActive
                                            })
                                        }, (0, t.jsx)(s.Icon, {
                                                width: 16,
                                                height: 16,
                                                className: "exbmap-ui-tool-icon",
                                                icon: this.getSelectToolIcon()
                                            })), !this.state.sketchInitialed && (0, t.jsx)("div", {
                                            style: {},
                                            className: (0, t.classNames)("exbmap-ui-tool border-0 esri-widget--button")
                                        }, (0, t.jsx)(s.Icon, {
                                                width: 16,
                                                height: 16,
                                                className: "exbmap-ui-tool-icon",
                                                icon: this.getSelectToolIcon()
                                            })), (0, t.jsx)("div", {
                                            className: "border border-top-0 w-100",
                                            style: {
                                                height: "1px"
                                            }
                                        }), this.state.sketchInitialed && (0, t.jsx)("div", {
                                            onClick: this.handleIsShowSelectSetting,
                                            style: {},
                                            className: (0, t.classNames)("exbmap-ui-tool border-0 esri-widget--button")
                                        }, (0, t.jsx)(s.Icon, {
                                                width: 16,
                                                height: 16,
                                                className: "exbmap-ui-tool-icon",
                                                icon: le
                                            })), !this.state.sketchInitialed && (0, t.jsx)("div", {
                                            style: {},
                                            className: (0, t.classNames)("exbmap-ui-tool border-0 esri-widget--button")
                                        }, (0, t.jsx)(s.Icon, {
                                                width: 16,
                                                height: 16,
                                                className: "exbmap-ui-tool-icon",
                                                icon: le
                                            })), this.state.isShowSelectSetting && this.getMobilePanelForSelectSetting(), (this.state.isQuerying || !this.state.sketchInitialed) && (0, t.jsx)("div", {
                                            className: "select-tool-loader"
                                        }))
                                }
                            }
                            class he extends t.React.PureComponent {
                                componentDidMount() {
                                    this.computerSelectedGraphics()
                                }
                                componentDidUpdate() {
                                    this.computerSelectedGraphics()
                                }
                                computerSelectedGraphics() {
                                    if (this.props.onSelectedGraphicsChanged) {
                                        const e = this.props.jimuMapView.jimuLayerViews,
                                        i = Object.keys(e),
                                        s = [];
                                        for (let o = 0; o < i.length; o++) {
                                            const a = e[i[o]].layerDataSourceId,
                                            n = t.DataSourceManager.getInstance().getDataSource(a);
                                            if (n) {
                                                const e = n.getSelectedRecords();
                                                for (let t = 0; t < e.length; t++) {
                                                    const i = e[t].feature.clone();
                                                    s.push(i)
                                                }
                                            }
                                        }
                                        this.props.onSelectedGraphicsChanged(s)
                                    }
                                }
                                render() {
                                    return null
                                }
                            }
                            const ce = t.ReactRedux.connect(((e, t) => e.appStateInBuilder ? {
                                        dataSourcesInfo: e.appStateInBuilder && e.appStateInBuilder.dataSourcesInfo,
                                        viewInfos: e.appStateInBuilder && e.appStateInBuilder.jimuMapViewsInfo
                                    }
                                         : {
                                        dataSourcesInfo: e && e.dataSourcesInfo,
                                        viewInfos: e && e.jimuMapViewsInfo
                                    }))(he),
                            de = n(23596),
                            ue = n(66131),
                            me = {
                                Zoom: class extends j {
                                    constructor() {
                                        super(...arguments),
                                        this.toolName = "Zoom"
                                    }
                                    getTitle() {
                                        return this.props.intl.formatMessage({
                                            id: "ZoomLabel",
                                            defaultMessage: s.defaultMessages.ZoomLabel
                                        })
                                    }
                                    getIcon() {
                                        return null
                                    }
                                    getExpandPanel() {
                                        return t.React.createElement(L, {
                                            jimuMapView: this.props.jimuMapView
                                        })
                                    }
                                },
                                Home: class extends j {
                                    constructor() {
                                        super(...arguments),
                                        this.toolName = "Home",
                                        this.getHomeContent = e => t.React.createElement(N, {
                                            jimuMapView: this.props.jimuMapView,
                                            initialMapState: e
                                        })
                                    }
                                    getTitle() {
                                        return this.props.intl.formatMessage({
                                            id: "HomeLabel",
                                            defaultMessage: s.defaultMessages.HomeLabel
                                        })
                                    }
                                    getIcon() {
                                        return null
                                    }
                                    getExpandPanel() {
                                        return t.React.createElement(M.Consumer, null, (({
                                                    initialMapState: e
                                                }) => this.getHomeContent(e)))
                                    }
                                },
                                Navigation: class extends j {
                                    constructor() {
                                        super(...arguments),
                                        this.toolName = "Navigation"
                                    }
                                    getTitle() {
                                        return "Navigation"
                                    }
                                    getIcon() {
                                        return null
                                    }
                                    getExpandPanel() {
                                        return t.React.createElement(E, {
                                            jimuMapView: this.props.jimuMapView
                                        })
                                    }
                                },
                                Locate: class extends j {
                                    constructor() {
                                        super(...arguments),
                                        this.toolName = "Locate"
                                    }
                                    getTitle() {
                                        return "Locate"
                                    }
                                    getIcon() {
                                        return null
                                    }
                                    getExpandPanel() {
                                        return t.React.createElement(R, {
                                            jimuMapView: this.props.jimuMapView
                                        })
                                    }
                                },
                                ClearActionData: class extends j {
                                    constructor(e) {
                                        super(e),
                                        this.toolName = "ClearActionData",
                                        this.onIconClick = () => {},
                                        this.onDropDownToggle = () => {
                                            this.setState({
                                                isOpen: !this.state.isOpen
                                            })
                                        },
                                        this.onActionItemClick = (e, i, s) => {
                                            var o;
                                            this.setState({
                                                isOpen: !1
                                            });
                                            const a = null === (o = t.MutableStoreManager.getInstance().getStateValue([s])) || void 0 === o ? void 0 : o.showOnMapDatas;
                                            a && (delete a[i], t.MutableStoreManager.getInstance().updateStateValue(s, "showOnMapDatas", a))
                                        },
                                        this.getContent = (e, i) => e ? (0, t.jsx)("div", {
                                            css: this.getStyle(),
                                            title: this.getTitle()
                                        }, (0, t.jsx)(s.Dropdown, {
                                                direction: "down",
                                                size: "sm",
                                                toggle: this.onDropDownToggle,
                                                isOpen: this.state.isOpen
                                            }, (0, t.jsx)(s.DropdownToggle, {
                                                    icon: !0,
                                                    size: "sm",
                                                    type: "default"
                                                }, (0, t.jsx)(s.Icon, {
                                                        size: 16,
                                                        className: "exbmap-ui-tool-icon",
                                                        icon: this.getIcon().icon
                                                    })), (0, t.jsx)(s.DropdownMenu, null, this.getShowOnMapDatas(i).map(((e, t) => this.createActionDataItem(e[0], e[1].title, i, t)))))) : null,
                                        this.state = {
                                            isOpen: !1
                                        }
                                    }
                                    static getIsNeedSetting() {
                                        return !1
                                    }
                                    getStyle() {
                                        return t.css `
      .jimu-dropdown {
        margin-top: 10px;
        display: flex;
        .icon-btn {
          padding: 7px;
        }
      }
    `
                                    }
                                    getTitle() {
                                        return this.props.intl.formatMessage({
                                            id: "clearResults",
                                            defaultMessage: s.defaultMessages.clearResults
                                        })
                                    }
                                    getIcon() {
                                        return {
                                            icon: n(54357),
                                            onIconClick: () => {
                                                this.onIconClick()
                                            }
                                        }
                                    }
                                    createActionDataItem(e, i, o, a) {
                                        return (0, t.jsx)(s.DropdownItem, {
                                            key: a,
                                            header: !1,
                                            onClick: t => this.onActionItemClick(t, e, o)
                                        }, i)
                                    }
                                    getShowOnMapDatas(e) {
                                        var s;
                                        const o = (null === (s = t.MutableStoreManager.getInstance().getStateValue([e])) || void 0 === s ? void 0 : s.showOnMapDatas) || {};
                                        return Object.entries(o).filter((s => {
                                                let o = s[1].jimuMapViewId;
                                                if (!o && s[1].mapWidgetId === e) {
                                                    const i = (0, t.getAppStore)().getState().jimuMapViewsInfo;
                                                    o = Object.keys(i || {}).find((t => i[t].mapWidgetId === e))
                                                }
                                                return o === this.props.jimuMapView.id && s[1].type === i.ShowOnMapDataType.DataAction
                                            }))
                                    }
                                    getExpandPanel() {
                                        return (0, t.jsx)(M.Consumer, null, (({
                                                    isShowClearShowOnMapDataBtn: e,
                                                    mapWidgetId: t
                                                }) => this.getContent(e, t)))
                                    }
                                },
                                Compass: class extends j {
                                    constructor() {
                                        super(...arguments),
                                        this.toolName = "Compass"
                                    }
                                    getTitle() {
                                        return this.props.intl.formatMessage({
                                            id: "CompassLabel",
                                            defaultMessage: s.defaultMessages.CompassLabel
                                        })
                                    }
                                    getIcon() {
                                        return null
                                    }
                                    getExpandPanel() {
                                        return t.React.createElement(D, {
                                            jimuMapView: this.props.jimuMapView
                                        })
                                    }
                                },
                                Search: class extends j {
                                    constructor() {
                                        super(...arguments),
                                        this.toolName = "Search"
                                    }
                                    getTitle() {
                                        return this.props.intl.formatMessage({
                                            id: "SearchLabel",
                                            defaultMessage: s.defaultMessages.SearchLabel
                                        })
                                    }
                                    getIcon() {
                                        return {
                                            icon: n(80017)
                                        }
                                    }
                                    getExpandPanel() {
                                        return this.props.isMobile ? (0, t.jsx)("div", {
                                            style: {
                                                minHeight: "32px",
                                                position: "relative",
                                                width: "100%"
                                            }
                                        }, (0, t.jsx)(W, {
                                                jimuMapView: this.props.jimuMapView
                                            })) : (0, t.jsx)("div", {
                                            style: {
                                                minWidth: "250px",
                                                minHeight: "32px",
                                                position: "relative"
                                            }
                                        }, (0, t.jsx)(W, {
                                                jimuMapView: this.props.jimuMapView
                                            }))
                                    }
                                },
                                Layers: class extends j {
                                    constructor(e) {
                                        super(e),
                                        this.toolName = "Layers",
                                        this.handleTabIndexChange = e => {
                                            this.setState({
                                                activeTabIndex: e
                                            })
                                        },
                                        this.state = {
                                            activeTabIndex: 0
                                        }
                                    }
                                    getTitle() {
                                        return this.props.intl.formatMessage({
                                            id: "LayersLabel",
                                            defaultMessage: s.defaultMessages.LayersLabel
                                        })
                                    }
                                    getIcon() {
                                        return {
                                            icon: n(66658)
                                        }
                                    }
                                    getExpandPanel() {
                                        return t.React.createElement("div", {
                                            style: {
                                                width: this.props.isMobile ? "100%" : "250px",
                                                minHeight: "32px",
                                                position: "relative"
                                            },
                                            className: (0, t.classNames)({
                                                "exbmap-ui-pc-expand-maxheight": !this.props.isMobile
                                            })
                                        }, t.React.createElement(s.Nav, {
                                                tabs: !0
                                            }, t.React.createElement(s.NavItem, null, t.React.createElement(s.NavLink, {
                                                        active: 0 === this.state.activeTabIndex,
                                                        onClick: () => {
                                                            this.handleTabIndexChange(0)
                                                        }
                                                    }, this.props.intl.formatMessage({
                                                            id: "LayersLabelLayer",
                                                            defaultMessage: s.defaultMessages.LayersLabelLayer
                                                        }))), t.React.createElement(s.NavItem, null, t.React.createElement(s.NavLink, {
                                                        active: 1 === this.state.activeTabIndex,
                                                        onClick: () => {
                                                            this.handleTabIndexChange(1)
                                                        }
                                                    }, this.props.intl.formatMessage({
                                                            id: "LayersLabelLegend",
                                                            defaultMessage: s.defaultMessages.LayersLabelLegend
                                                        })))), t.React.createElement("div", {
                                                className: "mt-1"
                                            }), 0 === this.state.activeTabIndex && t.React.createElement(A, {
                                                jimuMapView: this.props.jimuMapView
                                            }), 1 === this.state.activeTabIndex && t.React.createElement(k, {
                                                jimuMapView: this.props.jimuMapView
                                            }))
                                    }
                                },
                                BaseMap: class extends j {
                                    constructor() {
                                        super(...arguments),
                                        this.toolName = "BaseMap"
                                    }
                                    getTitle() {
                                        return this.props.intl.formatMessage({
                                            id: "BaseMapLabel",
                                            defaultMessage: s.defaultMessages.BaseMapLabel
                                        })
                                    }
                                    getIcon() {
                                        return {
                                            icon: n(78780)
                                        }
                                    }
                                    getExpandPanel() {
                                        return t.React.createElement(B, {
                                            jimuMapView: this.props.jimuMapView,
                                            isMobile: this.props.isMobile
                                        })
                                    }
                                },
                                Measure: class extends j {
                                    constructor(e) {
                                        super(e),
                                        this.toolName = "Measure",
                                        this.measureModules2D = [{
                                                name: "Line",
                                                title: "Line",
                                                path: "DistanceMeasurement2D",
                                                src: n(39376)
                                            }, {
                                                name: "Polygon",
                                                title: "Polygon",
                                                path: "AreaMeasurement2D",
                                                src: n(32712)
                                            }
                                        ],
                                        this.measureModules3D = [{
                                                name: "Line",
                                                title: "Line",
                                                path: "DirectLineMeasurement3D",
                                                src: n(39376)
                                            }, {
                                                name: "Polygon",
                                                title: "Polygon",
                                                path: "AreaMeasurement3D",
                                                src: n(32712)
                                            }
                                        ],
                                        this.handleMeasurceInstanceCreated = (e, t) => {
                                            const i = this.state.measureInstances;
                                            i[t] = e,
                                            this.setState({
                                                measureInstances: i
                                            })
                                        },
                                        this.onTabClick = e => {
                                            if (this.state.activeTabIndex === e);
                                            else {
                                                this.setState({
                                                    activeTabIndex: e
                                                });
                                                for (let t = 0; t < this.state.measureInstances.length; t++)
                                                    t !== e && this.state.measureInstances[t] && (this.state.measureInstances[t].visible = !1), t === e && this.state.measureInstances[t] && (this.state.measureInstances[t].visible = !0)
                                            }
                                        },
                                        this.onClosePanel = () => {
                                            for (let e = 0; e < this.state.measureInstances.length; e++)
                                                this.state.measureInstances[e] && (this.state.measureInstances[e].visible = !1)
                                        },
                                        this.onShowPanel = () => {
                                            for (let e = 0; e < this.state.measureInstances.length; e++)
                                                e !== this.state.activeTabIndex && this.state.measureInstances[e] && (this.state.measureInstances[e].visible = !1), e === this.state.activeTabIndex && this.state.measureInstances[e] && (this.state.measureInstances[e].visible = !0)
                                        },
                                        this.getNavTab = () => "2d" === this.props.jimuMapView.view.type ? t.React.createElement(s.Nav, {
                                            tabs: !0
                                        }, this.measureModules2D.map(((e, i) => t.React.createElement(s.NavItem, {
                                                        key: i
                                                    }, t.React.createElement(s.NavLink, {
                                                            active: this.state.activeTabIndex === i,
                                                            onClick: () => {
                                                                this.onTabClick(i)
                                                            }
                                                        }, t.React.createElement(s.Icon, {
                                                                width: 16,
                                                                height: 16,
                                                                className: "m-0",
                                                                icon: e.src
                                                            })))))) : "3d" === this.props.jimuMapView.view.type ? t.React.createElement(s.Nav, {
                                            tabs: !0
                                        }, this.measureModules3D.map(((e, i) => t.React.createElement(s.NavItem, {
                                                        key: i
                                                    }, t.React.createElement(s.NavLink, {
                                                            active: this.state.activeTabIndex === i,
                                                            onClick: () => {
                                                                this.onTabClick(i)
                                                            }
                                                        }, t.React.createElement(s.Icon, {
                                                                width: 16,
                                                                height: 16,
                                                                className: "m-0",
                                                                icon: e.src
                                                            })))))) : null,
                                        this.getMeasureModule = () => "2d" === this.props.jimuMapView.view.type ? this.measureModules2D[this.state.activeTabIndex] : this.measureModules3D[this.state.activeTabIndex],
                                        this.state = {
                                            activeTabIndex: 0,
                                            measureInstances: [null, null]
                                        }
                                    }
                                    getTitle() {
                                        return this.props.intl.formatMessage({
                                            id: "MeasureLabel",
                                            defaultMessage: s.defaultMessages.MeasureLabel
                                        })
                                    }
                                    getIcon() {
                                        return {
                                            icon: n(22591)
                                        }
                                    }
                                    destroy() {
                                        for (let e = 0; e < this.state.measureInstances.length; e++)
                                            this.state.measureInstances[e] && !this.state.measureInstances[e].destroyed && this.state.measureInstances[e].destroy()
                                    }
                                    getExpandPanel() {
                                        return t.React.createElement("div", {
                                            style: {
                                                width: this.props.isMobile ? "100%" : "250px",
                                                position: "relative"
                                            },
                                            className: (0, t.classNames)({
                                                "exbmap-ui-pc-expand-maxheight": !this.props.isMobile
                                            })
                                        }, this.getNavTab(), t.React.createElement(G, {
                                                activeTabIndex: this.state.activeTabIndex,
                                                jimuMapView: this.props.jimuMapView,
                                                measureModule: this.getMeasureModule(),
                                                measureInstance: this.state.measureInstances[this.state.activeTabIndex],
                                                onMeasurceInstanceCreated: this.handleMeasurceInstanceCreated
                                            }))
                                    }
                                },
                                MapSwitch: class extends j {
                                    constructor() {
                                        super(...arguments),
                                        this.toolName = "MapSwitch",
                                        this.switchMap = () => {},
                                        this.getContent = (e, i, o, a, n) => {
                                            const r = () => {
                                                (0, t.getAppStore)().dispatch(t.appActions.requestAutoControlMapWidget(n, n)),
                                                a()
                                            };
                                            if (e) {
                                                if (this.props.isMobile)
                                                    return (0, t.jsx)("div", {
                                                        className: "exbmap-ui-tool esri-widget--button",
                                                        onClick: r
                                                    }, (0, t.jsx)(s.Icon, {
                                                            width: 16,
                                                            height: 16,
                                                            className: "exbmap-ui-tool-icon",
                                                            icon: this.getIcon().icon
                                                        })); {
                                                    const e = (0, t.getAppStore)().getState().appConfig.dataSources;
                                                    return (0, t.jsx)("div", {
                                                        css: this.getStyle(),
                                                        onClick: r
                                                    }, (0, t.jsx)("div", {
                                                            title: e[i[0]] ? e[i[0]].label : null,
                                                            className: (0, t.classNames)("mapthumb-item", {
                                                                front: i[0] !== o
                                                            }, {
                                                                back: i[0] === o
                                                            })
                                                        }, (0, t.jsx)(O, {
                                                                mapItemId: e[i[0]] ? e[i[0]].itemId : null,
                                                                portUrl: e[i[0]] ? e[i[0]].portalUrl : null
                                                            })), (0, t.jsx)("div", {
                                                            title: e[i[1]] ? e[i[1]].label : null,
                                                            className: (0, t.classNames)("mapthumb-item", {
                                                                front: i[1] !== o
                                                            }, {
                                                                back: i[1] === o
                                                            })
                                                        }, (0, t.jsx)(O, {
                                                                mapItemId: e[i[1]] ? e[i[1]].itemId : null,
                                                                portUrl: e[i[1]] ? e[i[1]].portalUrl : null
                                                            })))
                                                }
                                            }
                                            return null
                                        },
                                        this.getIconContent = (e, t, i, s) => e ? (this.switchMap = s, super.render()) : null
                                    }
                                    static getIsNeedSetting() {
                                        return !1
                                    }
                                    getStyle() {
                                        return t.css `
      width: ${t.polished.rem(68)};
      height: ${t.polished.rem(52)};
      cursor: pointer;
      position: relative;

      .mapthumb-item {
        position: absolute;
        width: ${t.polished.rem(64)};
        height: ${t.polished.rem(48)};
        transition: bottom 0.5s, left 0.5s, top 0.5s, right 0.5s, z-index 0.5s;
      }

      .front {
        z-index: 1;
        bottom: 0;
        left: 0;
      }

      .back {
        z-index: 0;
        top: 0;
        right: 0;
      }
    `
                                    }
                                    getTitle() {
                                        return "MapSwitch"
                                    }
                                    getIcon() {
                                        return {
                                            icon: n(16940),
                                            onIconClick: () => {
                                                this.switchMap()
                                            }
                                        }
                                    }
                                    getExpandPanel() {
                                        return this.props.toolJson.isOnlyExpanded ? (0, t.jsx)(M.Consumer, null, (({
                                                    isShowMapSwitchBtn: e,
                                                    dataSourceIds: t,
                                                    activeDataSourceId: i,
                                                    switchMap: s,
                                                    mapWidgetId: o
                                                }) => this.getContent(e, t, i, s, o))) : null
                                    }
                                    render() {
                                        return this.props.toolJson.isOnlyExpanded ? super.render() : (0, t.jsx)(M.Consumer, null, (({
                                                    isShowMapSwitchBtn: e,
                                                    dataSourceIds: t,
                                                    activeDataSourceId: i,
                                                    switchMap: s
                                                }) => this.getIconContent(e, t, i, s)))
                                    }
                                },
                                FullScreen: class extends j {
                                    constructor() {
                                        super(...arguments),
                                        this.toolName = "Fullscreen",
                                        this.isFullScreen = !1,
                                        this.fullScreenMap = () => {},
                                        this.getContent = (e, t) => (this.fullScreenMap = e, this.isFullScreen = t, super.render())
                                    }
                                    getTitle() {
                                        return this.props.intl.formatMessage({
                                            id: "FullScreenLabel",
                                            defaultMessage: s.defaultMessages.FullScreenLabel
                                        })
                                    }
                                    getIcon() {
                                        return {
                                            icon: this.isFullScreen ? n(11759) : n(54184),
                                            onIconClick: e => {
                                                this.fullScreenMap()
                                            }
                                        }
                                    }
                                    getExpandPanel() {
                                        return null
                                    }
                                    render() {
                                        return t.React.createElement(M.Consumer, null, (({
                                                    fullScreenMap: e,
                                                    isFullScreen: t
                                                }) => this.getContent(e, t)))
                                    }
                                },
                                ScaleBar: class extends j {
                                    constructor() {
                                        super(...arguments),
                                        this.toolName = "ScaleBar"
                                    }
                                    getTitle() {
                                        return "ScaleBar"
                                    }
                                    getIcon() {
                                        return null
                                    }
                                    getExpandPanel() {
                                        return t.React.createElement(H, {
                                            jimuMapView: this.props.jimuMapView
                                        })
                                    }
                                },
                                Attribution: class extends j {
                                    constructor() {
                                        super(...arguments),
                                        this.toolName = "Attribution"
                                    }
                                    static getIsNeedSetting() {
                                        return !1
                                    }
                                    getTitle() {
                                        return "Attribution"
                                    }
                                    getIcon() {
                                        return null
                                    }
                                    getExpandPanel() {
                                        return t.React.createElement(z, {
                                            jimuMapView: this.props.jimuMapView
                                        })
                                    }
                                },
                                Select: class extends j {
                                    constructor(e) {
                                        super(e),
                                        this.toolName = "Select",
                                        this.state = {}
                                    }
                                    getTitle() {
                                        return this.props.intl.formatMessage({
                                            id: "SelectLabel",
                                            defaultMessage: s.defaultMessages.SelectLabel
                                        })
                                    }
                                    getIcon() {
                                        return {
                                            icon: n(21253)
                                        }
                                    }
                                    getExpandPanel() {
                                        return this.props.isMobile ? (0, t.jsx)(pe, {
                                            isActive: this.toolName === (this.props.activeToolInfo && this.props.activeToolInfo.activeToolName),
                                            activeToolInfo: this.props.activeToolInfo,
                                            toolName: this.toolName,
                                            onActiveToolInfoChange: this.props.onActiveToolInfoChange,
                                            _onIconClick: () => {
                                                this._onIconClick()
                                            },
                                            theme: this.props.theme,
                                            intl: this.props.intl,
                                            jimuMapView: this.props.jimuMapView
                                        }) : (0, t.jsx)(X, {
                                            theme: this.props.theme,
                                            intl: this.props.intl,
                                            jimuMapView: this.props.jimuMapView
                                        })
                                    }
                                },
                                SelectState: class extends j {
                                    constructor(e) {
                                        super(e),
                                        this.toolName = "SelectState",
                                        this.handleSelectedGraphicsChanged = e => {
                                            this.setState({
                                                selectedGraphics: e
                                            })
                                        },
                                        this.zoomToSelectedFeatures = () => {
                                            this.props.jimuMapView.view && this.props.jimuMapView.view.goTo(this.state.selectedGraphics)
                                        },
                                        this.clearSelectedFeatures = () => {
                                            this.props.jimuMapView.clearSelectedFeatures()
                                        },
                                        this.state = {
                                            selectedGraphics: []
                                        }
                                    }
                                    getStyle() {
                                        return t.css `
      background-color: ${this.props.theme.arcgis.components.button.variants.default.default.bg};

      .divide-line {
        border-right: 1px solid ${this.props.theme.colors.palette.dark[400]};
        height: 100%;
      }
    `
                                    }
                                    getTitle() {
                                        return ""
                                    }
                                    getIcon() {
                                        return null
                                    }
                                    getExpandPanel() {
                                        return this.props.isMobile ? (0, t.jsx)("div", {
                                            css: this.getStyle(),
                                            className: "w-100 d-flex justify-content-between align-items-center",
                                            style: {
                                                height: "40px"
                                            }
                                        }, (0, t.jsx)("div", {
                                                className: "ml-2"
                                            }, `${this.props.intl.formatMessage({id:"SelectionSelectedFeatures",defaultMessage:s.defaultMessages.SelectionSelectedFeatures})}:${this.state.selectedGraphics.length}`), (0, t.jsx)("div", {
                                                className: "d-flex"
                                            }, (0, t.jsx)("div", {
                                                    className: "h-100 border border-top-0 border-bottom-0 d-flex justify-content-center align-items-center",
                                                    style: {
                                                        width: "40px",
                                                        cursor: "pointer"
                                                    },
                                                    onClick: this.zoomToSelectedFeatures
                                                }, (0, t.jsx)(s.Icon, {
                                                        width: 18,
                                                        height: 18,
                                                        icon: de
                                                    })), (0, t.jsx)("div", {
                                                    className: "h-100 d-flex justify-content-center align-items-center",
                                                    style: {
                                                        width: "40px",
                                                        cursor: "pointer"
                                                    },
                                                    onClick: this.clearSelectedFeatures
                                                }, (0, t.jsx)(s.Icon, {
                                                        width: 18,
                                                        height: 18,
                                                        icon: ue
                                                    }))), (0, t.jsx)(ce, {
                                                jimuMapView: this.props.jimuMapView,
                                                onSelectedGraphicsChanged: this.handleSelectedGraphicsChanged
                                            })) : (0, t.jsx)(t.React.Fragment, null, (0, t.jsx)(s.Button, {
                                                onClick: this.zoomToSelectedFeatures
                                            }, (0, t.jsx)(s.Icon, {
                                                    width: 16,
                                                    height: 16,
                                                    icon: de,
                                                    className: "mr-2"
                                                }), `${this.props.intl.formatMessage({id:"SelectionSelectedFeatures",defaultMessage:s.defaultMessages.SelectionSelectedFeatures})}:${this.state.selectedGraphics.length}`), (0, t.jsx)(ce, {
                                                jimuMapView: this.props.jimuMapView,
                                                onSelectedGraphicsChanged: this.handleSelectedGraphicsChanged
                                            }))
                                    }
                                }
                            },
                            ge = me;
                            class we extends I {
                                componentDidMount() {
                                    const e = this.refs.baseToolInstance;
                                    (!ge[this.props.toolName].getIsNeedSetting() || this.props.toolConfig && this.props.toolConfig[`can${this.props.toolName}`]) && (this.props.jimuMapView.view.ui.exbMapTools[this.props.toolName] = e)
                                }
                                componentWillUnmount() {
                                    if (ge[this.props.toolName].getIsNeedSetting()) {
                                        const e = this.props.jimuMapView && this.props.jimuMapView.view && this.props.jimuMapView.view.ui && this.props.jimuMapView.view.ui.exbMapTools[this.props.toolName];
                                        e && e.destroy && (e.destroy(), delete this.props.jimuMapView.view.ui.exbMapTools[this.props.toolName])
                                    }
                                }
                                render() {
                                    const e = ge[this.props.toolName];
                                    return e ? (0, t.jsx)("div", {
                                        className: (0, t.classNames)(this.props.className, "exbmap-ui exbmap-ui-tool-shell divitem", this.props.layoutConfig.elements[this.props.toolName].className, {
                                            "exbmap-ui-hidden-element": this.props.isHidden,
                                            "mb-0 mr-0": this.props.isLastElement,
                                            "rounded-pill": ["Compass"].includes(this.props.toolName)
                                        }),
                                        style: this.props.layoutConfig.elements[this.props.toolName].style
                                    }, (0, t.jsx)(e, {
                                            ref: "baseToolInstance",
                                            toolJson: this.props.layoutConfig.elements[this.props.toolName],
                                            toolName: this.props.toolName,
                                            isMobile: this.props.isMobile,
                                            jimuMapView: this.props.jimuMapView,
                                            activeToolInfo: this.props.activeToolInfo,
                                            onActiveToolInfoChange: this.props.onActiveToolInfoChange,
                                            intl: this.props.intl,
                                            theme: this.props.theme
                                        })) : this.props.isMobile ? (0, t.jsx)("span", null) : null
                                }
                            }
                            class Me extends I {
                                constructor(e) {
                                    super(e),
                                    this.moveY = 0,
                                    this.startY = 0,
                                    this.sliding = !1,
                                    this.startDrag = !1,
                                    this.currentBottomPanelHeight = 0,
                                    this.thumbMapElementNames = ["FullScreen", "Zoom", "MapSwitch"],
                                    this.checkIsHiddenElement = e => !!this.props.hiddenElementNames && !!this.props.hiddenElementNames.includes(e),
                                    this.start = (e, t) => {
                                        if (this.startDrag = !0, "touch" === t) {
                                            this.moveY = 0;
                                            const t = e.touches[0];
                                            this.startY = t.clientY
                                        }
                                        "mouse" === t && (this.moveY = 0, this.startY = e.clientY),
                                        document.getElementById(`${this.props.jimuMapView.id}-bottom-panel`).classList.remove("expand-mobile-panel-transition")
                                    },
                                    this.move = (e, t) => {
                                        if ("touch" === t) {
                                            this.sliding = !0;
                                            const t = e.touches[0];
                                            this.moveY = -1 * (t.clientY - this.startY)
                                        }
                                        if ("mouse" === t && this.startDrag && (this.sliding = !0, this.moveY = -1 * (e.clientY - this.startY)), "mouse" === t && !this.startDrag)
                                            return;
                                        let i = 150;
                                        this.state.bottomPanelHeight + this.moveY > i && (i = this.state.bottomPanelHeight + this.moveY),
                                        document.getElementById(`${this.props.jimuMapView.id}-bottom-panel`).style.height = `${i}px`,
                                        this.currentBottomPanelHeight = i;
                                        const s = this.state.widgetHeight - i;
                                        s > 360 && this.props.onSetHiddenElementNames([]),
                                        s > 200 && s <= 360 && this.props.onSetHiddenElementNames(this.props.layoutConfig.mobileResponsiveStrategy.stage1),
                                        s > 54 && s <= 200 && this.props.onSetHiddenElementNames(this.props.layoutConfig.mobileResponsiveStrategy.stage2),
                                        s < 54 && this.props.onSetHiddenElementNames(this.props.layoutConfig.mobileResponsiveStrategy.stage3)
                                    },
                                    this.end = (e, t) => {
                                        if ("mouse" !== t || this.startDrag) {
                                            if (this.startDrag = !1, this.sliding = !1, document.getElementById(`${this.props.jimuMapView.id}-bottom-panel`).classList.add("expand-mobile-panel-transition"), "touch" === t && Math.abs(this.moveY) < 10)
                                                return document.getElementById(`${this.props.jimuMapView.id}-bottom-panel`).style.height = `${this.state.bottomPanelHeight}px`, void(this.currentBottomPanelHeight = this.state.bottomPanelHeight);
                                            if (this.moveY >= 0) {
                                                let e = 0;
                                                e = this.currentBottomPanelHeight >= 150 && this.currentBottomPanelHeight < .6 * this.state.widgetHeight ? .6 * this.state.widgetHeight : this.currentBottomPanelHeight >= .6 * this.state.widgetHeight && this.currentBottomPanelHeight < this.state.widgetHeight ? this.state.widgetHeight - 20 : 150,
                                                this.setState({
                                                    bottomPanelHeight: e
                                                }, (() => {
                                                        this.checkResponsive()
                                                    })),
                                                this.currentBottomPanelHeight = e
                                            } else {
                                                let e = 0;
                                                e = this.currentBottomPanelHeight > 150 && this.currentBottomPanelHeight < .6 * this.state.widgetHeight ? 150 : this.currentBottomPanelHeight >= .6 * this.state.widgetHeight && this.currentBottomPanelHeight < this.state.widgetHeight ? .6 * this.state.widgetHeight : 150,
                                                this.setState({
                                                    bottomPanelHeight: e
                                                }, (() => {
                                                        this.checkResponsive()
                                                    })),
                                                this.currentBottomPanelHeight = e
                                            }
                                        }
                                    },
                                    this.checkResponsive = () => {
                                        if (this.state.isThumbMap)
                                            return void this.props.onSetHiddenElementNames([]);
                                        if (0 === this.state.bottomPanelHeight)
                                            return void this.props.onSetHiddenElementNames([]);
                                        const e = this.state.widgetHeight - this.state.bottomPanelHeight;
                                        e > 360 && this.props.onSetHiddenElementNames([]),
                                        e > 200 && e <= 360 && this.props.onSetHiddenElementNames(this.props.layoutConfig.mobileResponsiveStrategy.stage1),
                                        e > 54 && e <= 200 && this.props.onSetHiddenElementNames(this.props.layoutConfig.mobileResponsiveStrategy.stage2),
                                        e < 54 && this.props.onSetHiddenElementNames(this.props.layoutConfig.mobileResponsiveStrategy.stage3)
                                    },
                                    this.onResize = (e, t) => {
                                        e && t && this.setState({
                                            widgetWidth: e,
                                            widgetHeight: t,
                                            isThumbMap: !1
                                        }, (() => {
                                                this.checkResponsive()
                                            }))
                                    },
                                    this.returnNullNode = e => this.props.isMobile ? (0, t.jsx)("span", {
                                        key: e
                                    }) : null,
                                    this.checkIsLastElement = (e, t) => {
                                        const i = t.toolName,
                                        s = this.props.layoutConfig,
                                        o = s.layout[e.groupName].children,
                                        a = o.indexOf(i);
                                        if (a === o.length - 1)
                                            return !0;
                                        if (a < o.length - 1) {
                                            let e = !0;
                                            for (let t = a + 1; t < o.length; t++) {
                                                const i = o[t];
                                                if ("GROUP" !== s.elements[o[t]].type && (!ge[i].getIsNeedSetting() || this.props.toolConfig && this.props.toolConfig[`can${i}`] || s.lockToolNames && s.lockToolNames.includes(i))) {
                                                    e = !1;
                                                    break
                                                }
                                            }
                                            return e
                                        }
                                    },
                                    this.handleToggleMobilePanel = () => {
                                        this.props.onActiveToolInfoChange(null)
                                    },
                                    this.handlePanelHeightChange = (e, t) => {
                                        this.setState({
                                            bottomPanelHeight: t
                                        }, (() => {
                                                this.checkResponsive()
                                            }))
                                    },
                                    this.getMobilePanelInContext = () => (0, t.jsx)(M.Consumer, null, (({
                                                mobilePanelContainer: e,
                                                mapWidgetId: i
                                            }) => (0, t.jsx)(s.MobilePanel, {
                                                mapWidgetId: i,
                                                title: this.props.activeToolInfo && this.props.activeToolInfo.activeToolTitle,
                                                open: !!this.props.activeToolInfo,
                                                toggle: () => {
                                                    this.handleToggleMobilePanel()
                                                }
                                            }, (0, t.jsx)("div", {
                                                    className: "w-100 h-100",
                                                    ref: t => {
                                                        e && t && t.appendChild(e)
                                                    }
                                                })))),
                                    this.getGroupContent = e => {
                                        if (e) {
                                            const i = e.layout[this.props.groupName] && e.layout[this.props.groupName].children;
                                            return this.checkIsShowGroup(e, i) ? (0, t.jsx)("div", {
                                                id: this.props.isMainGroup ? this.props.mapWidgetId : void 0,
                                                css: this.getStyle(),
                                                className: (0, t.classNames)("exbmap-ui exbmap-ui-group", this.props.className, {
                                                    "exbmap-ui-hidden-element": this.props.isHidden
                                                }),
                                                style: this.props.style
                                            }, i.map(((i, s) => e.elements[i] ? "GROUP" === e.elements[i].type ? (0, t.jsx)(Me, {
                                                            mapWidgetId: this.props.mapWidgetId,
                                                            isHidden: this.checkIsHiddenElement(i),
                                                            className: e.elements[i].className,
                                                            style: e.elements[i].style,
                                                            key: s,
                                                            layoutConfig: e,
                                                            toolConfig: this.props.toolConfig,
                                                            isMobile: this.props.isMobile,
                                                            intl: this.props.intl,
                                                            jimuMapView: this.props.jimuMapView,
                                                            groupName: i,
                                                            activeToolInfo: this.props.activeToolInfo,
                                                            hiddenElementNames: this.props.hiddenElementNames,
                                                            onActiveToolInfoChange: this.props.onActiveToolInfoChange,
                                                            theme: this.props.theme,
                                                            isThumbMap: this.props.isMainGroup ? this.state.isThumbMap : this.props.isThumbMap
                                                        }) : "TOOL" === e.elements[i].type ? "Navigation" === e.elements[i].toolName && this.props.jimuMapView && this.props.jimuMapView.view && "2d" === this.props.jimuMapView.view.type ? this.returnNullNode(s) : !ge[i].getIsNeedSetting() || this.props.toolConfig && this.props.toolConfig[`can${i}`] || e.lockToolNames && e.lockToolNames.includes(i) ? (0, t.jsx)(we, {
                                                            isHidden: this.checkIsHiddenElement(i),
                                                            key: s,
                                                            layoutConfig: e,
                                                            activeToolInfo: this.props.activeToolInfo,
                                                            toolConfig: this.props.toolConfig,
                                                            jimuMapView: this.props.jimuMapView,
                                                            toolName: i,
                                                            theme: this.props.theme,
                                                            onActiveToolInfoChange: this.props.onActiveToolInfoChange,
                                                            intl: this.props.intl,
                                                            isMobile: this.props.isMobile,
                                                            isLastElement: this.checkIsLastElement(e.elements[this.props.groupName], e.elements[i])
                                                        }) : this.returnNullNode(s) : this.returnNullNode(s) : this.returnNullNode(s))), this.props.isMobile && this.props.isMainGroup && (0, t.jsx)(t.ReactResizeDetector, {
                                                    handleWidth: !0,
                                                    handleHeight: !0,
                                                    onResize: this.onResize
                                                }), this.props.isMainGroup && this.props.isMobile && this.props.activeToolInfo && "Select" !== this.props.activeToolInfo.activeToolName && this.getMobilePanelInContext(), this.props.isMainGroup && (0, t.jsx)("div", {
                                                    className: "exbmap-ui w-100",
                                                    style: {
                                                        position: "relative",
                                                        pointerEvents: "auto",
                                                        overflow: "hidden",
                                                        touchAction: "none",
                                                        display: !this.props.isMobile || this.state.isThumbMap || this.props.isThumbMap ? "none" : "block"
                                                    }
                                                }, (0, t.jsx)("div", {
                                                        className: `${this.props.mapWidgetId}-bottom-panel exbmap-ui w-100 expand-mobile-panel`,
                                                        style: {
                                                            overflow: "hidden",
                                                            pointerEvents: "auto",
                                                            position: "relative",
                                                            touchAction: "none"
                                                        }
                                                    }, (0, t.jsx)("div", {
                                                            className: "w-100 h-100"
                                                        }, (0, t.jsx)(t.ReactResizeDetector, {
                                                                handleHeight: !0,
                                                                onResize: this.handlePanelHeightChange
                                                            }))))) : this.returnNullNode()
                                        }
                                        return this.returnNullNode()
                                    },
                                    this.checkIsShowGroup = (e, t) => {
                                        if (t && 0 !== t.length) {
                                            const i = [];
                                            this.findAllToolNames(e, t, i);
                                            let s = !1;
                                            for (let t = 0; t < i.length; t++)
                                                if (this.props.toolConfig[`can${i[t]}`] || !ge[i[t]].getIsNeedSetting() || e.lockToolNames && e.lockToolNames.includes(i[t])) {
                                                    s = !0;
                                                    break
                                                }
                                            return s
                                        }
                                        return !1
                                    },
                                    this.findAllToolNames = (e, t, i) => {
                                        if (t && 0 !== t.length)
                                            for (let s = 0; s < t.length; s++)
                                                if ("GROUP" === e.elements[t[s]].type) {
                                                    const o = e.elements[t[s]].groupName;
                                                    this.findAllToolNames(e, e.layout[o] && e.layout[o].children, i)
                                                } else
                                                    i.push(t[s])
                                    },
                                    this.state = {
                                        bottomPanelHeight: 0,
                                        isThumbMap: !!this.props.isMobile
                                    }
                                }
                                getStyle() {
                                    const e = this.props.layoutConfig.layout[this.props.groupName] && this.props.layoutConfig.layout[this.props.groupName].position,
                                    i = this.props.layoutConfig.elements[this.props.groupName].direction;
                                    return t.css `
      position: ${e?"absolute":"relative"};
      top: ${e?e.top:null}px;
      bottom: ${e?e.bottom:null}px;
      left: ${e?e.left:null}px;
      right: ${e?e.right:null}px;
      display: flex;
      flex-flow: ${"vertical"===i?"column":"row"};
      align-items: flex-start;

      > .exbmap-ui + .exbmap-ui {
        margin-top: ${"vertical"===i?"10px":0};
        margin-left: ${"horizontal"===i?"10px":0};
      }

      .exbmap-ui-group-expand-icon {
        fill: black;
        left: 8px;
        top: 8px;
        position: absolute;
        display: block;
      }

      .expand-mobile-panel {
        box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 2px;
        border-radius: 10px 10px 0px 0px;
      }

      .expand-mobile-panel-transition {
        transition: height 0.3s;
      }

      .expand-mobile-panel-touch-container {
        top: 0;
        position: absolute;
        width: 100%;
        height: 31px;
      }

      .expand-mobile-panel-bar {
        width: 36px;
        height: 4px;
        background-color: #434343;
        border-radius: 2px;
      }
      `
                                }
                                componentDidUpdate(e, t) {
                                    if (this.props.activeToolInfo !== e.activeToolInfo) {
                                        if (this.props.activeToolInfo && e.activeToolInfo)
                                            return;
                                        this.props.activeToolInfo && !e.activeToolInfo && this.props.isMobile && this.props.isMainGroup && (this.setState({
                                                bottomPanelHeight: 150
                                            }, (() => {
                                                    this.checkResponsive()
                                                })), this.currentBottomPanelHeight = 150),
                                        !this.props.activeToolInfo && e.activeToolInfo && this.props.isMobile && this.props.isMainGroup && (this.setState({
                                                bottomPanelHeight: 0
                                            }, (() => {
                                                    this.checkResponsive()
                                                })), this.currentBottomPanelHeight = 0)
                                    }
                                }
                                render() {
                                    return this.props.isMainGroup && this.props.isMobile && this.props.toolConfig && this.props.toolConfig.canSelect ? (0, t.jsx)("div", {
                                        style: {
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            bottom: 0,
                                            right: 0
                                        }
                                    }, (0, t.jsx)("div", {
                                            id: `${this.props.mapWidgetId}-with-select-container`,
                                            style: {
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                bottom: 40,
                                                right: 0
                                            }
                                        }, (0, t.jsx)("div", {
                                                className: "w-100 h-100",
                                                style: {
                                                    position: "relative"
                                                }
                                            }, this.getGroupContent(this.props.layoutConfig))), (0, t.jsx)("div", {
                                            style: {
                                                position: "absolute",
                                                left: 0,
                                                bottom: 0,
                                                right: 0,
                                                height: 40
                                            }
                                        }, (0, t.jsx)("div", {
                                                className: "w-100 h-100",
                                                style: {
                                                    position: "relative"
                                                }
                                            }, (0, t.jsx)(we, {
                                                    isHidden: !1,
                                                    layoutConfig: this.props.layoutConfig,
                                                    activeToolInfo: this.props.activeToolInfo,
                                                    toolConfig: this.props.toolConfig,
                                                    jimuMapView: this.props.jimuMapView,
                                                    toolName: "SelectState",
                                                    theme: this.props.theme,
                                                    onActiveToolInfoChange: this.props.onActiveToolInfoChange,
                                                    intl: this.props.intl,
                                                    isMobile: this.props.isMobile,
                                                    isLastElement: !0
                                                })))) : this.getGroupContent(this.props.layoutConfig)
                                }
                            }
                            class fe extends t.React.PureComponent {
                                constructor(e) {
                                    super(e),
                                    this.cloneLayoutRef = null,
                                    this.getMaxHeightForPcExpand = e => {
                                        if (e) {
                                            if (e < 65)
                                                return null; {
                                                const t = e - 65;
                                                return t < 300 ? t : 300
                                            }
                                        }
                                        return null
                                    },
                                    this.handSetHiddenElementNames = e => {
                                        this.setState({
                                            hiddenElementNames: e
                                        })
                                    },
                                    this.getLayoutContent = e => e && this.props.toolConfig ? (0, t.jsx)("div", {
                                        css: this.getStyle()
                                    }, Object.keys(e.layout).map(((i, s) => e.elements[i] && "GROUP" === e.elements[i].type && e.layout[i].position ? (0, t.jsx)(Me, {
                                                        mapWidgetId: this.props.mapWidgetId,
                                                        className: e.elements[i].className,
                                                        style: e.elements[i].style,
                                                        isResponsive: e.elements[i].isResponsive,
                                                        isMobile: this.props.isMobile,
                                                        isMainGroup: !0,
                                                        key: s,
                                                        layoutConfig: e,
                                                        toolConfig: this.props.toolConfig,
                                                        activeToolInfo: this.props.activeToolInfo,
                                                        jimuMapView: this.props.jimuMapView,
                                                        groupName: i,
                                                        onActiveToolInfoChange: this.props.onActiveToolInfoChange,
                                                        hiddenElementNames: e.mobileResponsiveStrategy && this.state.hiddenElementNames,
                                                        intl: this.props.intl,
                                                        onSetHiddenElementNames: this.handSetHiddenElementNames,
                                                        theme: this.props.theme
                                                    }) : null))) : null,
                                    this.state = {
                                        toolsContentInMobileExpandPanel: null,
                                        hiddenElementNames: []
                                    },
                                    this.contentRef = document.createElement("div"),
                                    this.contentRef.className = "exbmap-ui esri-ui-inner-container exbmap-ui-layout"
                                }
                                getStyle() {
                                    return t.css `
      z-index: 0;

      .expand-panel-transition {
        transition: opacity 0.3s, right 0.3s;
      }

      .scale-attribution-xy-group {
        > div:first-of-type:nth-last-of-type(1) {
          width: 100%;
          max-width: 100% !important;
        }
      }

      .exbmap-ui-hidden-element {
        display: none !important;
      }
/* 
      .exbmap-basetool-loader {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 2px;
        width: 100%;
        animation: esri-fade-in 500ms ease-in-out;
      }

      .exbmap-basetool-loader:before {
        background-color: rgba(110,110,110,0.3);
        width: 100%;
        z-index: 0;
        content: "";
        opacity: 1;
        position: absolute;
        height: 2px;
        top: 0;
        transition: opacity 500ms ease-in-out;
      }

      .exbmap-basetool-loader:after {
        background-color: #6e6e6e;
        width: 20%;
        z-index: 0;
        animation: looping-progresss-bar-ani 1500ms linear infinite;
        content: "";
        opacity: 1;
        position: absolute;
        height: 2px;
        top: 0;
        transition: opacity 500ms ease-in-out;
      } */

      .exbmap-ui-pc-expand-maxheight {
        max-height: ${this.getMaxHeightForPcExpand(this.props.widgetHeight)}px;
        overflow: auto
      }
      `
                                }
                                componentDidMount() {
                                    this.props.jimuMapView && this.props.jimuMapView.view && this.props.jimuMapView.view.ui && this.props.jimuMapView.view.ui.container && this.props.jimuMapView.view.ui.container.appendChild(this.contentRef)
                                }
                                componentDidUpdate(e) {
                                    var i,
                                    s;
                                    if (e.appMode !== this.props.appMode && this.props.appMode === t.AppMode.Design && this.props.onActiveToolInfoChange(null), e.jimuMapView && e.jimuMapView.view && e.jimuMapView.view.ui) {
                                        const t = e.jimuMapView.view.ui.container.getElementsByClassName("tool-layout-clone");
                                        if (t && t.length > 0)
                                            for (let e = 0; e < t.length; e++)
                                                t[e].remove()
                                    }
                                    (null === (i = e.jimuMapView) || void 0 === i ? void 0 : i.id) !== (null === (s = this.props.jimuMapView) || void 0 === s ? void 0 : s.id) && (this.cloneLayoutRef = this.contentRef.cloneNode(!0), this.cloneLayoutRef.classList.add("tool-layout-clone"), setTimeout((() => {
                                                this.cloneLayoutRef && this.cloneLayoutRef.parentNode && this.cloneLayoutRef.parentNode.removeChild(this.cloneLayoutRef),
                                                this.cloneLayoutRef = null
                                            }), 500), e.jimuMapView.view && e.jimuMapView.view.ui && e.jimuMapView.view.ui.container && (e.jimuMapView.view.ui.container.appendChild(this.cloneLayoutRef), e.jimuMapView.view.ui.container.removeChild(this.contentRef)), this.props.jimuMapView.view && this.props.jimuMapView.view.ui && this.props.jimuMapView.view.ui.container && this.props.jimuMapView.view.ui.container.appendChild(this.contentRef))
                                }
                                render() {
                                    return this.props.jimuMapView && this.props.jimuMapView.view && this.props.jimuMapView.view.ui && this.props.jimuMapView.view.ui.container ? (0, t.jsx)("div", null, t.ReactDOM.createPortal(this.getLayoutContent(this.props.layoutConfig), this.contentRef)) : null
                                }
                            }
                            const Se = [{
                                    elements: {
                                        leftTopContainer: {
                                            type: "GROUP",
                                            groupName: "leftTopContainer",
                                            direction: "horizontal"
                                        },
                                        navigator: {
                                            type: "GROUP",
                                            groupName: "navigator",
                                            direction: "vertical"
                                        },
                                        interact: {
                                            type: "GROUP",
                                            groupName: "interact",
                                            direction: "vertical",
                                            isResponsive: !0
                                        },
                                        bottom: {
                                            type: "GROUP",
                                            groupName: "bottom",
                                            direction: "vertical",
                                            className: "w-100"
                                        },
                                        "bottom-line1": {
                                            type: "GROUP",
                                            groupName: "bottom-line1",
                                            direction: "horizontal",
                                            className: "d-flex align-items-center justify-content-between w-100 scale-attribution-xy-group",
                                            style: {
                                                marginBottom: 0,
                                                marginTop: 0
                                            }
                                        },
                                        "bottom-line2": {
                                            type: "GROUP",
                                            groupName: "bottom-line2",
                                            direction: "horizontal",
                                            className: "d-flex align-items-end justify-content-between w-100",
                                            style: {
                                                paddingLeft: "15px",
                                                paddingRight: "15px",
                                                marginBottom: "10px"
                                            }
                                        },
                                        "SelectState-FullScreen-Container": {
                                            type: "GROUP",
                                            groupName: "SelectState-FullScreen-Container",
                                            direction: "vertical",
                                            className: "align-items-end"
                                        },
                                        attributionGroup: {
                                            type: "GROUP",
                                            groupName: "attributionGroup",
                                            direction: "horizontal",
                                            style: {
                                                maxWidth: "60%"
                                            }
                                        },
                                        Zoom: {
                                            type: "TOOL",
                                            toolName: "Zoom",
                                            isOnlyExpanded: !0,
                                            isShowIconTitle: !1
                                        },
                                        Home: {
                                            type: "TOOL",
                                            toolName: "Home",
                                            isOnlyExpanded: !0,
                                            isShowIconTitle: !1
                                        },
                                        Compass: {
                                            type: "TOOL",
                                            toolName: "Compass",
                                            isOnlyExpanded: !0,
                                            isShowIconTitle: !1
                                        },
                                        Navigation: {
                                            type: "TOOL",
                                            toolName: "Navigation",
                                            isOnlyExpanded: !0,
                                            isShowIconTitle: !1
                                        },
                                        Locate: {
                                            type: "TOOL",
                                            toolName: "Locate",
                                            isOnlyExpanded: !0,
                                            isShowIconTitle: !1
                                        },
                                        Layers: {
                                            type: "TOOL",
                                            toolName: "Layers",
                                            isOnlyExpanded: !1,
                                            isShowIconTitle: !0,
                                            panelPlacement: "left-start"
                                        },
                                        BaseMap: {
                                            type: "TOOL",
                                            toolName: "BaseMap",
                                            isOnlyExpanded: !1,
                                            isShowIconTitle: !0,
                                            panelPlacement: "left-start"
                                        },
                                        Select: {
                                            type: "TOOL",
                                            toolName: "Select",
                                            isOnlyExpanded: !0,
                                            isShowIconTitle: !0
                                        },
                                        SelectState: {
                                            type: "TOOL",
                                            toolName: "SelectState",
                                            isOnlyExpanded: !0,
                                            isShowIconTitle: !1,
                                            style: {
                                                boxShadow: "0 1px 2px 0 rgba(0,0,0,0)"
                                            }
                                        },
                                        Measure: {
                                            type: "TOOL",
                                            toolName: "Measure",
                                            isOnlyExpanded: !1,
                                            isShowIconTitle: !0,
                                            panelPlacement: "left-start"
                                        },
                                        MapSwitch: {
                                            type: "TOOL",
                                            toolName: "MapSwitch",
                                            isOnlyExpanded: !0,
                                            isShowIconTitle: !0
                                        },
                                        FullScreen: {
                                            type: "TOOL",
                                            toolName: "FullScreen",
                                            isOnlyExpanded: !1,
                                            isShowIconTitle: !0
                                        },
                                        ClearActionData: {
                                            type: "TOOL",
                                            toolName: "ClearActionData",
                                            isOnlyExpanded: !0,
                                            isShowIconTitle: !1
                                        },
                                        ScaleBar: {
                                            type: "TOOL",
                                            toolName: "ScaleBar",
                                            isOnlyExpanded: !0,
                                            isShowIconTitle: !1
                                        },
                                        Attribution: {
                                            type: "TOOL",
                                            toolName: "Attribution",
                                            isOnlyExpanded: !0,
                                            isShowIconTitle: !1,
                                            className: "w-100"
                                        },
                                        Search: {
                                            type: "TOOL",
                                            toolName: "Search",
                                            isOnlyExpanded: !1,
                                            isShowIconTitle: !0,
                                            panelPlacement: "left-start"
                                        }
                                    },
                                    layout: {
                                        leftTopContainer: {
                                            children: ["navigator", "Select"],
                                            position: {
                                                top: 15,
                                                left: 15
                                            }
                                        },
                                        navigator: {
                                            children: ["Zoom", "Home", "Navigation", "Locate", "Compass"]
                                        },
                                        interact: {
                                            children: ["Search", "Layers", "BaseMap", "Measure"],
                                            position: {
                                                top: 15,
                                                right: 15
                                            }
                                        },
                                        "bottom-line1": {
                                            children: ["ScaleBar", "attributionGroup"]
                                        },
                                        "bottom-line2": {
                                            children: ["MapSwitch", "SelectState-FullScreen-Container"]
                                        },
                                        "SelectState-FullScreen-Container": {
                                            children: ["FullScreen", "ClearActionData", "SelectState"]
                                        },
                                        bottom: {
                                            children: ["bottom-line2", "bottom-line1"],
                                            position: {
                                                bottom: 0,
                                                left: 0
                                            }
                                        },
                                        attributionGroup: {
                                            children: ["Attribution"]
                                        }
                                    }
                                }, {
                                    elements: {
                                        navigator: {
                                            type: "GROUP",
                                            groupName: "navigator",
                                            direction: "vertical",
                                            className: "align-items-end"
                                        },
                                        interact: {
                                            type: "GROUP",
                                            groupName: "interact",
                                            direction: "horizontal",
                                            isResponsive: !0
                                        },
                                        fullScreenGroup: {
                                            type: "GROUP",
                                            groupName: "fullScreenGroup",
                                            direction: "horizontal"
                                        },
                                        bottom: {
                                            type: "GROUP",
                                            groupName: "bottom",
                                            direction: "vertical",
                                            className: "w-100"
                                        },
                                        "bottom-line1": {
                                            type: "GROUP",
                                            groupName: "bottom-line1",
                                            direction: "horizontal",
                                            className: "d-flex align-items-center justify-content-between w-100 scale-attribution-xy-group",
                                            style: {
                                                marginBottom: 0,
                                                marginTop: 0
                                            }
                                        },
                                        "bottom-line2": {
                                            type: "GROUP",
                                            groupName: "bottom-line2",
                                            direction: "horizontal",
                                            className: "d-flex align-items-end justify-content-between w-100",
                                            style: {
                                                paddingLeft: "15px",
                                                paddingRight: "15px",
                                                marginBottom: "10px"
                                            }
                                        },
                                        attributionGroup: {
                                            type: "GROUP",
                                            groupName: "attributionGroup",
                                            direction: "horizontal",
                                            style: {
                                                maxWidth: "60%"
                                            },
                                            className: "attibute-group"
                                        },
                                        Zoom: {
                                            type: "TOOL",
                                            toolName: "Zoom",
                                            isOnlyExpanded: !0,
                                            isShowIconTitle: !1
                                        },
                                        Home: {
                                            type: "TOOL",
                                            toolName: "Home",
                                            isOnlyExpanded: !0,
                                            isShowIconTitle: !1
                                        },
                                        Compass: {
                                            type: "TOOL",
                                            toolName: "Compass",
                                            isOnlyExpanded: !0,
                                            isShowIconTitle: !1
                                        },
                                        Navigation: {
                                            type: "TOOL",
                                            toolName: "Navigation",
                                            isOnlyExpanded: !0,
                                            isShowIconTitle: !1
                                        },
                                        Locate: {
                                            type: "TOOL",
                                            toolName: "Locate",
                                            isOnlyExpanded: !0,
                                            isShowIconTitle: !1
                                        },
                                        Layers: {
                                            type: "TOOL",
                                            toolName: "Layers",
                                            isOnlyExpanded: !1,
                                            isShowIconTitle: !0,
                                            panelPlacement: "bottom"
                                        },
                                        BaseMap: {
                                            type: "TOOL",
                                            toolName: "BaseMap",
                                            isOnlyExpanded: !1,
                                            isShowIconTitle: !0,
                                            panelPlacement: "bottom"
                                        },
                                        Select: {
                                            type: "TOOL",
                                            toolName: "Select",
                                            isOnlyExpanded: !0,
                                            isShowIconTitle: !0
                                        },
                                        SelectState: {
                                            type: "TOOL",
                                            toolName: "SelectState",
                                            isOnlyExpanded: !0,
                                            isShowIconTitle: !1,
                                            style: {
                                                boxShadow: "0 1px 2px 0 rgba(0,0,0,0)"
                                            }
                                        },
                                        Measure: {
                                            type: "TOOL",
                                            toolName: "Measure",
                                            isOnlyExpanded: !1,
                                            isShowIconTitle: !0,
                                            panelPlacement: "bottom"
                                        },
                                        MapSwitch: {
                                            type: "TOOL",
                                            toolName: "MapSwitch",
                                            isOnlyExpanded: !0,
                                            isShowIconTitle: !0
                                        },
                                        FullScreen: {
                                            type: "TOOL",
                                            toolName: "FullScreen",
                                            isOnlyExpanded: !1,
                                            isShowIconTitle: !0
                                        },
                                        ClearActionData: {
                                            type: "TOOL",
                                            toolName: "ClearActionData",
                                            isOnlyExpanded: !0,
                                            isShowIconTitle: !1
                                        },
                                        ScaleBar: {
                                            type: "TOOL",
                                            toolName: "ScaleBar",
                                            isOnlyExpanded: !0,
                                            isShowIconTitle: !1
                                        },
                                        Attribution: {
                                            type: "TOOL",
                                            toolName: "Attribution",
                                            isOnlyExpanded: !0,
                                            isShowIconTitle: !1,
                                            className: "w-100"
                                        },
                                        Search: {
                                            type: "TOOL",
                                            toolName: "Search",
                                            isOnlyExpanded: !1,
                                            isShowIconTitle: !0,
                                            panelPlacement: "bottom"
                                        }
                                    },
                                    layout: {
                                        navigator: {
                                            children: ["Compass", "Locate", "Navigation", "Zoom", "Home", "SelectState"]
                                        },
                                        interact: {
                                            children: ["Search", "Layers", "BaseMap", "Measure", "Select"],
                                            position: {
                                                top: 15,
                                                left: 15
                                            }
                                        },
                                        fullScreenGroup: {
                                            children: ["FullScreen", "ClearActionData"],
                                            position: {
                                                top: 15,
                                                right: 15
                                            }
                                        },
                                        "bottom-line1": {
                                            children: ["ScaleBar", "attributionGroup"]
                                        },
                                        "bottom-line2": {
                                            children: ["MapSwitch", "navigator"]
                                        },
                                        bottom: {
                                            children: ["bottom-line2", "bottom-line1"],
                                            position: {
                                                bottom: 0,
                                                left: 0
                                            }
                                        },
                                        attributionGroup: {
                                            children: ["Attribution"]
                                        }
                                    }
                                }
                            ],
                            ve = [{
                                    elements: {
                                        mainGroup: {
                                            type: "GROUP",
                                            groupName: "mainGroup",
                                            direction: "vertical",
                                            style: {
                                                position: "absolute"
                                            },
                                            className: "d-flex flex-column"
                                        },
                                        topGroup: {
                                            type: "GROUP",
                                            groupName: "topGroup",
                                            direction: "horizontal",
                                            className: "d-flex w-100 align-items-center justify-content-between",
                                            style: {
                                                padding: "10px"
                                            }
                                        },
                                        midGroup: {
                                            type: "GROUP",
                                            groupName: "midGroup",
                                            direction: "horizontal",
                                            className: "flex-grow-1 d-flex w-100 justify-content-between",
                                            style: {
                                                position: "relative"
                                            }
                                        },
                                        "midGroup-left": {
                                            type: "GROUP",
                                            groupName: "midGroup-left",
                                            direction: "vertical",
                                            className: "h-100 d-flex flex-column-reverse",
                                            style: {
                                                paddingLeft: "10px",
                                                paddingRight: "10px",
                                                paddingBottom: "10px",
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                bottom: 0
                                            }
                                        },
                                        "midGroup-left-content": {
                                            type: "GROUP",
                                            groupName: "midGroup-left-content",
                                            direction: "vertical"
                                        },
                                        "midGroup-right": {
                                            type: "GROUP",
                                            groupName: "midGroup-right",
                                            direction: "vertical",
                                            className: "h-100 d-flex flex-column justify-content-between",
                                            style: {
                                                paddingRight: "10px",
                                                paddingLeft: "10px",
                                                paddingBottom: "10px",
                                                position: "absolute",
                                                top: 0,
                                                right: 0,
                                                bottom: 0
                                            }
                                        },
                                        "midGroup-right-content-top": {
                                            type: "GROUP",
                                            groupName: "midGroup-right-content-top",
                                            direction: "vertical"
                                        },
                                        "midGroup-right-content-bottom": {
                                            type: "GROUP",
                                            groupName: "midGroup-right-content-bottom",
                                            direction: "vertical"
                                        },
                                        bottomGroup: {
                                            type: "GROUP",
                                            groupName: "bottomGroup",
                                            direction: "vertical"
                                        },
                                        Search: {
                                            type: "TOOL",
                                            toolName: "Search",
                                            isOnlyExpanded: !0,
                                            isShowIconTitle: !1,
                                            className: "flex-grow-1"
                                        },
                                        FullScreen: {
                                            type: "TOOL",
                                            toolName: "FullScreen",
                                            isOnlyExpanded: !1,
                                            isShowIconTitle: !0
                                        },
                                        Locate: {
                                            type: "TOOL",
                                            toolName: "Locate",
                                            isOnlyExpanded: !0,
                                            isShowIconTitle: !1
                                        },
                                        ClearActionData: {
                                            type: "TOOL",
                                            toolName: "ClearActionData",
                                            isOnlyExpanded: !0,
                                            isShowIconTitle: !1
                                        },
                                        Compass: {
                                            type: "TOOL",
                                            toolName: "Compass",
                                            isOnlyExpanded: !0,
                                            isShowIconTitle: !1,
                                            className: "mb-0"
                                        },
                                        MapSwitch: {
                                            type: "TOOL",
                                            toolName: "MapSwitch",
                                            isOnlyExpanded: !0,
                                            isShowIconTitle: !0
                                        },
                                        Zoom: {
                                            type: "TOOL",
                                            toolName: "Zoom",
                                            isOnlyExpanded: !0,
                                            isShowIconTitle: !1
                                        },
                                        Home: {
                                            type: "TOOL",
                                            toolName: "Home",
                                            isOnlyExpanded: !0,
                                            isShowIconTitle: !1
                                        },
                                        Layers: {
                                            type: "TOOL",
                                            toolName: "Layers",
                                            isOnlyExpanded: !1,
                                            isShowIconTitle: !0,
                                            panelPlacement: "left-start"
                                        },
                                        BaseMap: {
                                            type: "TOOL",
                                            toolName: "BaseMap",
                                            isOnlyExpanded: !1,
                                            isShowIconTitle: !0,
                                            panelPlacement: "left-start"
                                        },
                                        Select: {
                                            type: "TOOL",
                                            toolName: "Select",
                                            isOnlyExpanded: !0,
                                            isShowIconTitle: !1
                                        },
                                        SelectState: {
                                            type: "TOOL",
                                            toolName: "SelectState",
                                            isOnlyExpanded: !0,
                                            isShowIconTitle: !1
                                        },
                                        Measure: {
                                            type: "TOOL",
                                            toolName: "Measure",
                                            isOnlyExpanded: !1,
                                            isShowIconTitle: !0,
                                            panelPlacement: "left-start"
                                        }
                                    },
                                    layout: {
                                        mainGroup: {
                                            children: ["topGroup", "midGroup", "bottomGroup"],
                                            position: {
                                                top: 0,
                                                left: 0,
                                                bottom: 0,
                                                right: 0
                                            }
                                        },
                                        topGroup: {
                                            children: ["Search", "FullScreen"]
                                        },
                                        midGroup: {
                                            children: ["midGroup-left", "midGroup-right"]
                                        },
                                        "midGroup-left": {
                                            children: ["midGroup-left-content"]
                                        },
                                        "midGroup-left-content": {
                                            children: ["Compass", "MapSwitch"]
                                        },
                                        "midGroup-right": {
                                            children: ["midGroup-right-content-top", "midGroup-right-content-bottom"]
                                        },
                                        "midGroup-right-content-top": {
                                            children: ["Layers", "BaseMap", "Measure", "Select"]
                                        },
                                        "midGroup-right-content-bottom": {
                                            children: ["Zoom", "Home", "Locate", "ClearActionData"]
                                        }
                                    },
                                    mobileResponsiveStrategy: {
                                        stage1: ["midGroup-left-content", "midGroup-right-content-bottom"],
                                        stage2: ["midGroup-left-content", "midGroup-right-content-bottom", "midGroup-right-content-top"],
                                        stage3: ["topGroup", "midGroup-left-content", "midGroup-right-content-bottom", "midGroup-right-content-top"]
                                    },
                                    lockToolNames: []
                                }
                            ];
                            const ye = {
                                firstMapVisible: [{
                                        zIndex: 6,
                                        opacity: 1
                                    }, {
                                        zIndex: 5,
                                        opacity: 0
                                    }
                                ],
                                secondMapVisible: [{
                                        zIndex: 5,
                                        opacity: 0
                                    }, {
                                        zIndex: 6,
                                        opacity: 1
                                    }
                                ]
                            };
                            class be extends t.React.PureComponent {
                                constructor(e) {
                                    super(e),
                                    this.mutableStatePropsMap = {},
                                    this.__unmount = !1,
                                    this.reInitWidgetInstance = e => {
                                        this.state = e,
                                        this.isReIniting = !0
                                    },
                                    this.changeInitialMapDataSourceID = (e, t) => {
                                        if (this.props.baseWidgetProps.useDataSources && this.props.baseWidgetProps.useDataSources.length > 1) {
                                            const i = this.refs.firstMapInstance,
                                            s = this.refs.secondMapInstance;
                                            this.state.currentMapIndex ? this.state.firstMapDsId && this.state.firstMapDsId === e ? (this.startChangeInitialMapAnimation(t), i.goHome(!1)) : s.goHome(!1) : this.state.secondMapDsId && this.state.secondMapDsId === e ? (this.startChangeInitialMapAnimation(t), s.goHome(!1)) : i.goHome(!1)
                                        }
                                    },
                                    this.startChangeInitialMapAnimation = e => {
                                        const t = Object.assign({}, this.state),
                                        i = this.refs.firstMapInstance,
                                        s = this.refs.secondMapInstance;
                                        if (this.state.currentMapIndex) {
                                            t.currentMapIndex = 0,
                                            t.multiMapStyle = ye.firstMapVisible;
                                            const o = s && s.getViewPoint && s.getViewPoint();
                                            o && i && i.setViewPoint && i.setViewPoint(o),
                                            this.setState(t, (() => {
                                                    e()
                                                }))
                                        } else {
                                            t.currentMapIndex = 1,
                                            t.multiMapStyle = ye.secondMapVisible;
                                            const o = i && i.getViewPoint && i.getViewPoint();
                                            o && s && s.setViewPoint && s.setViewPoint(o),
                                            this.setState(t, (() => {
                                                    e()
                                                }))
                                        }
                                    },
                                    this.switchMap = () => {
                                        return e = this,
                                        t = void 0,
                                        s = function  * () {
                                            if (!this.props.baseWidgetProps.useDataSources || this.props.baseWidgetProps.useDataSources.length < 2)
                                                return yield Promise.resolve();
                                            const e = Object.assign({}, this.state);
                                            e.useAnimation = !0;
                                            const t = this.refs.firstMapInstance,
                                            i = this.refs.secondMapInstance;
                                            if (this.state.currentMapIndex) {
                                                e.currentMapIndex = 0,
                                                e.multiMapStyle = ye.firstMapVisible;
                                                const s = i && i.getViewPoint && i.getViewPoint();
                                                s && t && t.setViewPoint && t.setViewPoint(s)
                                            } else {
                                                e.currentMapIndex = 1,
                                                e.multiMapStyle = ye.secondMapVisible;
                                                const s = t && t.getViewPoint && t.getViewPoint();
                                                s && i && i.setViewPoint && i.setViewPoint(s)
                                            }
                                            if (t && i) {
                                                const e = t.getViewType(),
                                                s = i.getViewType();
                                                e && s && e !== s && (t.goToTilt(0), i.goToTilt(0), this.state.currentMapIndex ? setTimeout((() => {
                                                            t.goToTilt(45)
                                                        }), 300) : setTimeout((() => {
                                                            i.goToTilt(45)
                                                        }), 300))
                                            }
                                            return new Promise(((t, i) => {
                                                    this.setState(e, (() => {
                                                            this.confirmJimuMapViewIsActive(),
                                                            setTimeout((() => {
                                                                    this.setState({
                                                                        useAnimation: !1
                                                                    }, (() => t(null)))
                                                                }), 500)
                                                        }))
                                                }))
                                        },
                                        new((i = void 0) || (i = Promise))((function (o, a) {
                                                function n(e) {
                                                    try {
                                                        l(s.next(e))
                                                    } catch (e) {
                                                        a(e)
                                                    }
                                                }
                                                function r(e) {
                                                    try {
                                                        l(s.throw(e))
                                                    } catch (e) {
                                                        a(e)
                                                    }
                                                }
                                                function l(e) {
                                                    var t;
                                                    e.done ? o(e.value) : (t = e.value, t instanceof i ? t : new i((function (e) {
                                                                e(t)
                                                            }))).then(n, r)
                                                }
                                                l((s = s.apply(e, t || [])).next())
                                            }));
                                        var e,
                                        t,
                                        i,
                                        s
                                    },
                                    this.handleMutableStatePropsChanged = (e, i, s) => {
                                        this.mutableStatePropsMap[i] ? this.mutableStatePropsMap[i].includes(e) || this.mutableStatePropsMap[i].push(e) : this.mutableStatePropsMap[i] = [e];
                                        const o = [],
                                        a = this.refs.firstMapInstance,
                                        n = this.refs.secondMapInstance;
                                        a && a.getViewType() && o.push(this.state.firstMapDsId),
                                        n && n.getViewType() && o.push(this.state.secondMapDsId);
                                        let r = !0;
                                        for (let e = 0; e < o.length; e++)
                                            if (!this.mutableStatePropsMap[i].includes(o[e])) {
                                                r = !1;
                                                break
                                            }
                                        r && (delete this.mutableStatePropsMap[i], t.MutableStoreManager.getInstance().updateStateValue(this.props.baseWidgetProps.id, i, s))
                                    },
                                    this.handleViewChanged = e => {
                                        if (null === e.viewpoint) {
                                            const e = this.refs.firstMapInstance,
                                            t = this.refs.secondMapInstance;
                                            return e && e.goHome(!1),
                                            void(t && t.goHome(!1))
                                        }
                                        const t = this.getCurrentVisibleDsId();
                                        if (t === e.dataSourceId) {
                                            if (this.state.firstMapDsId && this.state.firstMapDsId !== t) {
                                                const t = this.refs.firstMapInstance;
                                                t && t.setViewPoint(e.viewpoint)
                                            }
                                            if (this.state.secondMapDsId && this.state.secondMapDsId !== t) {
                                                const t = this.refs.secondMapInstance;
                                                t && t.setViewPoint(e.viewpoint)
                                            }
                                        }
                                    },
                                    this.handleExtentChanged = (e, i) => {
										var thisds = t.DataSourceManager.getInstance().getDataSource(e);
                                        this.getCurrentVisibleDsId() === e && t.MessageManager.getInstance().publishMessage(i)
										if(thisds){
											
											var otherDataSources = thisds.getChildDataSources();
											for(var pqr=0;pqr<otherDataSources.length;pqr++){
												
												
												
												if(otherDataSources[pqr].layerDefinition && otherDataSources[pqr].layerDefinition.name == "rtm_events"){
													var query = otherDataSources[pqr].lastQueryParams.where;
													otherDataSources[pqr].updateQueryParams({geometry : {"spatialReference":{"latestWkid":3857,"wkid":102100},"xmin":i.extent.xmin,"ymin":i.extent.ymin,"xmax":i.extent.xmax,"ymax":i.extent.ymax}, where:query})
													if(pqr==1){
														otherDataSources[pqr].query({geometry : {"spatialReference":{"latestWkid":3857,"wkid":102100},"xmin":i.extent.xmin,"ymin":i.extent.ymin,"xmax":i.extent.xmax,"ymax":i.extent.ymax}, where:query, orderByFields: "date_reported DESC"}).then(result => {
															var records = result.records;
															var event_ids = records.map(record => record.feature.attributes.Event_ID);
															var query_string = "Event_ID IN (" + event_ids[0];
															for(var ha=1;ha<event_ids.length;ha++){
																query_string = query_string + "," + event_ids[ha]
															}
															query_string = query_string + ")";
															
															var ds_rtmev_mg,ds_rtmev_eq, mg, eq;
															var otherDataSources2 = thisds.getChildDataSources();
															for(var xyz=0;xyz<otherDataSources2.length;xyz++){
																if(otherDataSources2[xyz].layerDefinition && otherDataSources2[xyz].layerDefinition.name == "rtmev_mg"){
																	ds_rtmev_mg = otherDataSources2[xyz]
																	
																}
																if(otherDataSources2[xyz].layerDefinition && otherDataSources2[xyz].layerDefinition.name == "rtmev_eq"){
																	ds_rtmev_eq = otherDataSources2[xyz]
																	
																}
																if(otherDataSources2[xyz].layerDefinition && otherDataSources2[xyz].layerDefinition.name == "militarygroups"){
																	mg = otherDataSources2[xyz]
																	
																}
																if(otherDataSources2[xyz].layerDefinition && otherDataSources2[xyz].layerDefinition.name == "equipment"){
																	eq = otherDataSources2[xyz]
																	
																}
																
															}
															
															
															ds_rtmev_mg.query({where:query_string}).then(result2 => {
																var records2 = result2.records;
																
																
																if(records2.length > 0){
																var mg_uriids = records2.map(record => record.feature.attributes.militarygroup_uriid);
																if(mg_uriids.length > 0){
																		var query_mg = mg.lastQueryParams.where;
																		
																		var query_string_mg = "militarygroup_uriid IN ('" + mg_uriids[0] + "'";
																		for(var hb=1;hb<mg_uriids.length;hb++){
																			query_string_mg = query_string_mg + ",'" + mg_uriids[hb] + "'"
																		}
																		query_string_mg = query_string_mg + ")";
																		if(query_mg){
																			query_string_mg = query_string_mg + " AND " + query_mg
																		}
																		
																		mg.updateQueryParams({where: query_string_mg})
																		
																	}
																}else{
																	mg.updateQueryParams({where: "1=2"})
																	}
															})
															
															
															ds_rtmev_eq.query({where:query_string}).then(result3 => {
																var records3 = result3.records;
																if(records3.length > 0){
																var eq_uriids = records3.map(record => record.feature.attributes.equipment_uriid);
																if(eq_uriids.length > 0){
																		var query_eq = eq.lastQueryParams.where;
																		var query_string_eq = "equipment_uriid IN ('" + eq_uriids[0] + "'";
																		for(var hb=1;hb<eq_uriids.length;hb++){
																			query_string_eq = query_string_eq + ",'" + eq_uriids[hb] + "'"
																		}
																		query_string_eq = query_string_eq + ")";
																		if(query_eq){
																			query_string_eq = query_string_eq + " AND " + query_eq
																		}
																		eq.updateQueryParams({where: query_string_eq})
																		
																	}
																}else{
																	eq.updateQueryParams({where: "1=2"})
																	}
															})
															
														
														})
													}
													
												}
											}
											
										}
                                    },
                                    this.handleMapLoaded = (e, t) => {
                                        this.forceUpdate()
                                    },
                                    this.handleJimuMapViewCreated = () => {
                                        this.__unmount || this.confirmJimuMapViewIsActive()
                                    },
                                    this.confirmJimuMapViewIsActive = () => {
                                        if (this.props.isDefaultMap) {
                                            const e = `${this.props.baseWidgetProps.id}-null`,
                                            t = i.MapViewManager.getInstance().getJimuMapViewById(e);
                                            return void(t && this.setActiveJimuMapView(t, !0))
                                        }
                                        const e = [];
                                        this.state.firstMapDsId && e.push(this.state.firstMapDsId),
                                        this.state.secondMapDsId && e.push(this.state.secondMapDsId);
                                        const t = this.getCurrentVisibleDsId();
                                        for (let s = 0; s < e.length; s++) {
                                            const o = `${this.props.baseWidgetProps.id}-${e[s]}`,
                                            a = i.MapViewManager.getInstance().getJimuMapViewById(o);
                                            a && (e[s] === t ? this.setActiveJimuMapView(a, !0) : this.setActiveJimuMapView(a, !1))
                                        }
                                    },
                                    this.isShowMapSwitchBtn = () => {
                                        const e = this.refs.firstMapInstance,
                                        t = this.refs.secondMapInstance;
                                        return !(!e || !t) && (e.getMapLoadStatus() !== v.Loading && t.getMapLoadStatus() !== v.Loading || void 0)
                                    },
                                    this.getCurrentVisibleDsId = () => 1 === this.state.multiMapStyle[0].opacity ? this.state.firstMapDsId : this.state.secondMapDsId,
                                    this.handleViewGroupCreate = e => {
                                        this.props.onViewGroupCreate && this.props.onViewGroupCreate(e)
                                    },
                                    this.handleMobilePanelContentChange = e => {
                                        this.setState({
                                            mobilePanelContent: e
                                        })
                                    },
                                    this.handleActiveToolInfoChange = e => {
                                        this.setState({
                                            activeToolInfo: e
                                        })
                                    },
                                    this.getLayoutConfig = () => "xsmall" === this.props.widthBreakpoint ? ve[0] : this.props.baseWidgetProps.config.layoutIndex ? Se[this.props.baseWidgetProps.config.layoutIndex] : Se[0],
                                    this.isShowClearShowOnMapDataBtn = () => {
                                        var e;
                                        const s = null === (e = this.props.baseWidgetProps.mutableStateProps) || void 0 === e ? void 0 : e.showOnMapDatas;
                                        return Object.entries(s || {}).some((e => {
                                                let s = e[1].jimuMapViewId;
                                                if (!s && e[1].mapWidgetId === this.props.baseWidgetProps.id) {
                                                    const e = (0, t.getAppStore)().getState().jimuMapViewsInfo;
                                                    s = Object.keys(e || {}).find((t => e[t].mapWidgetId === this.props.baseWidgetProps.id))
                                                }
                                                return s === this.state.currentJimuMapViewId && e[1].type === i.ShowOnMapDataType.DataAction
                                            }))
                                    };
                                    const s = t.MutableStoreManager.getInstance().getStateValue([this.props.baseWidgetProps.id, "restoreData", `${this.props.baseWidgetProps.id}-restoreData-multimap`]);
                                    if (s) {
                                        const e = document.createElement("div");
                                        e.id = `${this.props.baseWidgetProps.id}-bottom-panel`,
                                        e.className = "w-100 h-100",
                                        s.mobilePanelContainer = e,
                                        this.reInitWidgetInstance(s),
                                        t.MutableStoreManager.getInstance().updateStateValue(this.props.baseWidgetProps.id, `restoreData.${this.props.baseWidgetProps.id}-restoreData-multimap`, null)
                                    } else {
                                        const e = document.createElement("div");
                                        e.id = `${this.props.baseWidgetProps.id}-bottom-panel`,
                                        e.className = "w-100 h-100",
                                        this.state = {
                                            currentMapIndex: 0,
                                            multiMapStyle: ye.firstMapVisible,
                                            firstMapDsId: null,
                                            secondMapDsId: null,
                                            useAnimation: !1,
                                            useDataSources: null,
                                            currentJimuMapViewId: null,
                                            mobilePanelContent: null,
                                            mobilePanelContainer: e,
                                            activeToolInfo: null
                                        }
                                    }
                                    this.mutableStatePropsMap = {},
                                    this.useMapWidgetIds = this.props.baseWidgetProps.id ? (0, t.Immutable)([this.props.baseWidgetProps.id]) : (0, t.Immutable)([])
                                }
                                componentDidMount() {
                                    if ((0, t.getAppStore)().getState().mapWidgetsInfo && ((0, t.getAppStore)().getState().mapWidgetsInfo[this.props.baseWidgetProps.id] || (0, t.getAppStore)().dispatch(t.appActions.MapWidgetInfoAdded(this.props.baseWidgetProps.id, (0, t.Immutable)({
                                                        mapWidgetId: this.props.baseWidgetProps.id
                                                    })))), this.__unmount = !1, !this.isReIniting && this.props.baseWidgetProps.useDataSources) {
                                        const e = this.props.baseWidgetProps.config.initialMapDataSourceID;
                                        e ? e === (this.props.baseWidgetProps.useDataSources[0] && this.props.baseWidgetProps.useDataSources[0].dataSourceId) ? this.setState({
                                            firstMapDsId: this.props.baseWidgetProps.useDataSources[0] && this.props.baseWidgetProps.useDataSources[0].dataSourceId,
                                            secondMapDsId: this.props.baseWidgetProps.useDataSources[1] && this.props.baseWidgetProps.useDataSources[1].dataSourceId
                                        }) : e === (this.props.baseWidgetProps.useDataSources[1] && this.props.baseWidgetProps.useDataSources[1].dataSourceId) ? this.setState({
                                            firstMapDsId: this.props.baseWidgetProps.useDataSources[1] && this.props.baseWidgetProps.useDataSources[1].dataSourceId,
                                            secondMapDsId: this.props.baseWidgetProps.useDataSources[0] && this.props.baseWidgetProps.useDataSources[0].dataSourceId
                                        }) : this.setState({
                                            firstMapDsId: this.props.baseWidgetProps.useDataSources[0] && this.props.baseWidgetProps.useDataSources[0].dataSourceId,
                                            secondMapDsId: this.props.baseWidgetProps.useDataSources[1] && this.props.baseWidgetProps.useDataSources[1].dataSourceId
                                        }) : this.setState({
                                            firstMapDsId: this.props.baseWidgetProps.useDataSources[0] && this.props.baseWidgetProps.useDataSources[0].dataSourceId,
                                            secondMapDsId: this.props.baseWidgetProps.useDataSources[1] && this.props.baseWidgetProps.useDataSources[1].dataSourceId
                                        })
                                    }
                                }
                                componentWillUnmount() {
                                    this.__unmount = !0;
                                    const e = (0, t.getAppStore)().getState().appConfig.widgets;
                                    if (e[this.props.baseWidgetProps.id] && e[this.props.baseWidgetProps.id].useDataSources === this.props.baseWidgetProps.useDataSources) {
                                        const e = {
                                            currentMapIndex: this.state.currentMapIndex,
                                            multiMapStyle: this.state.multiMapStyle,
                                            firstMapDsId: this.state.firstMapDsId,
                                            secondMapDsId: this.state.secondMapDsId,
                                            useAnimation: this.state.useAnimation,
                                            currentJimuMapViewId: this.state.currentJimuMapViewId
                                        };
                                        t.MutableStoreManager.getInstance().updateStateValue(this.props.baseWidgetProps.id, `restoreData.${this.props.baseWidgetProps.id}-restoreData-multimap`, e)
                                    }
                                    e[this.props.baseWidgetProps.id] || (0, t.getAppStore)().dispatch(t.appActions.MapWidgetInfoRemoved(this.props.baseWidgetProps.id))
                                }
                                static getDerivedStateFromProps(e, t) {
                                    return e.baseWidgetProps.useDataSources !== t.useDataSources ? be.getChangedState(t.firstMapDsId, t.secondMapDsId, e.baseWidgetProps.useDataSources) : null
                                }
                                componentDidUpdate(e, i, s) {
                                    if (this.props.baseWidgetProps.stateProps && this.props.baseWidgetProps.stateProps.initialMapDataSourceID) {
                                        const e = this.props.baseWidgetProps.stateProps.initialMapDataSourceID;
                                        if (this.state.firstMapDsId === e) {
                                            const e = this.refs.firstMapInstance;
                                            e && e.goHome(!1)
                                        }
                                        if (this.state.secondMapDsId === e) {
                                            const e = this.refs.secondMapInstance;
                                            e && e.goHome(!1)
                                        }
                                        this.props.baseWidgetProps.dispatch(t.appActions.widgetStatePropChange(this.props.baseWidgetProps.id, "initialMapDataSourceID", null))
                                    }
                                    this.isReIniting ? this.isReIniting = !1 : (this.props.baseWidgetProps.config.initialMapDataSourceID !== e.baseWidgetProps.config.initialMapDataSourceID && this.changeInitialMapDataSourceID(this.props.baseWidgetProps.config.initialMapDataSourceID, this.confirmJimuMapViewIsActive), this.props.baseWidgetProps.useDataSources !== e.baseWidgetProps.useDataSources && this.confirmJimuMapViewIsActive())
                                }
                                setActiveJimuMapView(e, t) {
                                    t ? (e.setIsActive(t), this.setState({
                                            currentJimuMapViewId: e.id
                                        })) : e.setIsActive(t)
                                }
                                render() {
                                    var e;
                                    return t.React.createElement(M.Provider, {
                                        value: {
                                            mapWidgetId: this.props.baseWidgetProps.id,
                                            mapWidgetHeight: this.props.widgetHeight,
                                            isShowMapSwitchBtn: this.props.baseWidgetProps.useDataSources && this.props.baseWidgetProps.useDataSources.length > 1 && this.isShowMapSwitchBtn(),
                                            isShowClearShowOnMapDataBtn: this.isShowClearShowOnMapDataBtn(),
                                            dataSourceIds: [this.state.firstMapDsId, this.state.secondMapDsId],
                                            activeDataSourceId: this.getCurrentVisibleDsId(),
                                            switchMap: this.switchMap,
                                            fullScreenMap: this.props.fullScreenMap,
                                            isFullScreen: this.props.isFullScreen,
                                            mobilePanelContainer: this.state.mobilePanelContainer,
                                            onMobilePanelContentChange: this.handleMobilePanelContentChange,
                                            initialMapState: this.props.baseWidgetProps.config && this.props.baseWidgetProps.config.initialMapState
                                        }
                                    }, !this.props.isDefaultMap && t.React.createElement("div", {
                                            className: "jimu-widget",
                                            style: {
                                                position: "relative"
                                            }
                                        }, t.React.createElement("div", {
                                                className: (0, t.classNames)("jimu-widget", {
                                                    "multisourcemap-item-appear": this.state.useAnimation && this.state.multiMapStyle[0].opacity,
                                                    "multisourcemap-item-disappear": this.state.useAnimation && !this.state.multiMapStyle[0].opacity,
                                                    "multisourcemap-item-appear-noanimate": this.state.multiMapStyle[0].opacity,
                                                    "multisourcemap-item-disappear-noanimate": !this.state.multiMapStyle[0].opacity
                                                }),
                                                style: {
                                                    position: "absolute",
                                                    zIndex: this.state.multiMapStyle[0].zIndex
                                                }
                                            }, this.state.firstMapDsId && t.React.createElement(y, {
                                                    ref: "firstMapInstance",
                                                    onViewChanged: this.handleViewChanged,
                                                    baseWidgetProps: this.props.baseWidgetProps,
                                                    onMapLoaded: this.handleMapLoaded,
                                                    onMutableStatePropsChanged: this.handleMutableStatePropsChanged,
                                                    onExtentChanged: (e, t) => {
                                                        this.handleExtentChanged(e, t)
                                                    },
                                                    onJimuMapViewCreated: this.handleJimuMapViewCreated,
                                                    startLoadModules: this.props.startLoadModules,
                                                    dataSourceId: this.state.firstMapDsId,
                                                    widthBreakpoint: this.props.widthBreakpoint,
                                                    isMapInVisibleArea: this.props.isMapInVisibleArea
                                                })), t.React.createElement("div", {
                                                className: (0, t.classNames)("jimu-widget", {
                                                    "multisourcemap-item-appear": this.state.useAnimation && this.state.multiMapStyle[1].opacity,
                                                    "multisourcemap-item-disappear": this.state.useAnimation && !this.state.multiMapStyle[1].opacity,
                                                    "multisourcemap-item-appear-noanimate": this.state.multiMapStyle[1].opacity,
                                                    "multisourcemap-item-disappear-noanimate": !this.state.multiMapStyle[1].opacity
                                                }),
                                                style: {
                                                    position: "absolute",
                                                    zIndex: this.state.multiMapStyle[1].zIndex
                                                }
                                            }, this.state.secondMapDsId && t.React.createElement(y, {
                                                    ref: "secondMapInstance",
                                                    onViewChanged: this.handleViewChanged,
                                                    baseWidgetProps: this.props.baseWidgetProps,
                                                    onMapLoaded: this.handleMapLoaded,
                                                    onMutableStatePropsChanged: this.handleMutableStatePropsChanged,
                                                    onExtentChanged: (e, t) => {
                                                        this.handleExtentChanged(e, t)
                                                    },
                                                    onJimuMapViewCreated: this.handleJimuMapViewCreated,
                                                    startLoadModules: this.props.startLoadModules,
                                                    dataSourceId: this.state.secondMapDsId,
                                                    widthBreakpoint: this.props.widthBreakpoint,
                                                    isMapInVisibleArea: this.props.isMapInVisibleArea
                                                }))), this.props.isDefaultMap && t.React.createElement("div", {
                                            className: "jimu-widget",
                                            style: {
                                                position: "relative"
                                            }
                                        }, t.React.createElement("div", {
                                                className: (0, t.classNames)("jimu-widget multisourcemap-item-appear-noanimate"),
                                                style: {
                                                    position: "absolute",
                                                    zIndex: 6
                                                }
                                            }, t.React.createElement(y, {
                                                    ref: "firstMapInstance",
                                                    isDefaultMap: this.props.isDefaultMap,
                                                    onViewChanged: this.handleViewChanged,
                                                    baseWidgetProps: this.props.baseWidgetProps,
                                                    onMapLoaded: this.handleMapLoaded,
                                                    onMutableStatePropsChanged: this.handleMutableStatePropsChanged,
                                                    dataSourceId: null,
                                                    onExtentChanged: (e, t) => {
                                                        this.handleExtentChanged(e, t)
                                                    },
                                                    onJimuMapViewCreated: this.handleJimuMapViewCreated,
                                                    startLoadModules: this.props.startLoadModules,
                                                    widthBreakpoint: this.props.widthBreakpoint,
                                                    isMapInVisibleArea: this.props.isMapInVisibleArea,
                                                    defaultMapInfo: this.props.defaultMapInfo
                                                }))), this.state.currentJimuMapViewId && t.React.createElement(x, {
                                            jimuMapView: i.MapViewManager.getInstance().getJimuMapViewById(this.state.currentJimuMapViewId),
                                            appMode: this.props.baseWidgetProps.appMode,
                                            layouts: this.props.baseWidgetProps.layouts,
                                            LayoutEntry: this.props.baseWidgetProps.builderSupportModules && this.props.baseWidgetProps.builderSupportModules.LayoutEntry,
                                            widgetManifestName: this.props.baseWidgetProps.manifest.name
                                        }), this.state.currentJimuMapViewId && i.MapViewManager.getInstance().getJimuMapViewById(this.state.currentJimuMapViewId) && t.React.createElement(fe, {
                                            mapWidgetId: this.props.baseWidgetProps.id,
                                            isMobile: "xsmall" === this.props.widthBreakpoint,
                                            jimuMapView: i.MapViewManager.getInstance().getJimuMapViewById(this.state.currentJimuMapViewId),
                                            appMode: this.props.baseWidgetProps.appMode,
                                            layouts: this.props.baseWidgetProps.layouts,
                                            intl: this.props.baseWidgetProps.intl,
                                            LayoutEntry: this.props.baseWidgetProps.builderSupportModules && this.props.baseWidgetProps.builderSupportModules.LayoutEntry,
                                            layoutConfig: this.getLayoutConfig(),
                                            toolConfig: this.props.baseWidgetProps.config.toolConifg ? this.props.baseWidgetProps.config.toolConifg : {},
                                            activeToolInfo: this.state.activeToolInfo,
                                            onActiveToolInfoChange: this.handleActiveToolInfoChange,
                                            theme: this.props.baseWidgetProps.theme,
                                            widgetManifestName: this.props.baseWidgetProps.manifest.name,
                                            widgetHeight: "xsmall" === this.props.widthBreakpoint ? null : this.props.widgetHeight
                                        }), t.React.createElement(i.JimuMapViewComponent, {
                                            useMapWidgetId: null === (e = this.useMapWidgetIds) || void 0 === e ? void 0 : e[0],
                                            onViewGroupCreate: this.handleViewGroupCreate
                                        }))
                                }
                            }
                            be.getChangedState = (e, t, i) => {
                                const s = {};
                                if (i && i[0]) {
                                    const o = [],
                                    a = [];
                                    for (let t = 0; t < i.length; t++)
                                        e !== i[t].dataSourceId ? o.push(i[t].dataSourceId) : a.push(i[t].dataSourceId);
                                    a.length > 0 ? (s.firstMapDsId = e, s.secondMapDsId = o[0]) : 0 === a.length && (o.includes(t) ? (o.splice(o.indexOf(t), 1), s.firstMapDsId = o[0], s.secondMapDsId = t) : (s.firstMapDsId = o[0], s.secondMapDsId = o[1]))
                                } else
                                    s.firstMapDsId = null, s.secondMapDsId = null;
                                return s.firstMapDsId !== e ? s.firstMapDsId ? (s.multiMapStyle = ye.firstMapVisible, s.currentMapIndex = 0) : s.secondMapDsId ? (s.multiMapStyle = ye.secondMapVisible, s.currentMapIndex = 1) : (s.multiMapStyle = ye.firstMapVisible, s.currentMapIndex = 0) : s.secondMapDsId ? s.secondMapDsId !== t && (s.multiMapStyle = ye.secondMapVisible, s.currentMapIndex = 1) : (s.multiMapStyle = ye.firstMapVisible, s.currentMapIndex = 0),
                                s
                            };
                            class xe extends t.React.PureComponent {
                                constructor(e) {
                                    super(e),
                                    this.state = {
                                        defaultMapInfo: null
                                    }
                                }
                                componentDidMount() {
                                    i.portalUtils.getDefaultWebMap(this.props.baseWidgetProps.portalUrl).then((e => {
                                            this.setState({
                                                defaultMapInfo: e
                                            })
                                        }))
                                }
                                render() {
                                    return t.React.createElement("div", {
                                        className: "w-100 h-100"
                                    }, !this.state.defaultMapInfo && t.React.createElement("div", {
                                            className: "widget-map jimu-widget widget-map-background"
                                        }, t.React.createElement("div", {
                                                style: {
                                                    position: "absolute",
                                                    left: "50%",
                                                    top: "50%"
                                                },
                                                className: "jimu-secondary-loading"
                                            })), this.state.defaultMapInfo && t.React.createElement("div", {
                                            className: (0, t.classNames)("jimu-widget", {
                                                "map-is-design-mode": !w(this.props.baseWidgetProps.appMode)
                                            })
                                        }, this.props.isMapInVisibleArea && t.React.createElement(be, {
                                                key: 0,
                                                fullScreenMap: this.props.fullScreenMap,
                                                baseWidgetProps: this.props.baseWidgetProps,
                                                startLoadModules: this.props.startLoadModules,
                                                isDefaultMap: !0,
                                                ref: this.props.setMultiSourceMapInstance,
                                                onViewGroupCreate: this.props.onViewGroupCreate,
                                                widgetHeight: this.props.widgetHeight,
                                                widthBreakpoint: this.props.widthBreakpoint,
                                                isFullScreen: this.props.isFullScreen,
                                                isMapInVisibleArea: this.props.isMapInVisibleArea,
                                                defaultMapInfo: this.state.defaultMapInfo
                                            })))
                                }
                            }
                            class Ie extends t.React.PureComponent {
                                constructor(e) {
                                    super(e),
                                    this.multiSourceMapInstance = null,
                                    this.startRenderMap = () => {
                                        setTimeout((() => {
                                                this.setState({
                                                    startLoadModules: !0
                                                })
                                            }), 100)
                                    },
                                    this.getPlaceHolderImage = () => {
                                        let e = this.props.config.placeholderImage;
                                        const i = t.SessionManager.getInstance().getMainSession();
                                        return e && new RegExp("^(.)+/sharing/rest/content/items/(.)+/info/(.)+").test(e) && (i ? e += `?token=${i.token}` : e = e),
                                        e
                                    },
                                    this.fullScreenMap = () => {
                                        if (t.utils.isTouchDevice())
                                            if ("fixed" === this.container.style.position)
                                                this.container.style.height = `${this.containerClientRect.height}px`, this.container.style.width = `${this.containerClientRect.width}px`, this.container.style.top = `${this.containerClientRect.top}px`, this.container.style.left = `${this.containerClientRect.left}px`, setTimeout((() => {
                                                        this.container.style.transition = null,
                                                        this.container.style.position = "relative",
                                                        this.container.style.height = "100%",
                                                        this.container.style.width = "100%",
                                                        this.container.style.top = "0",
                                                        this.container.style.left = "0",
                                                        this.container.style.backgroundColor = "none",
                                                        this.parentContainer.appendChild(this.container),
                                                        this.setState({
                                                            isFullScreen: !1
                                                        })
                                                    }), 100);
                                            else {
                                                const e = this.container.getBoundingClientRect();
                                                this.containerClientRect = e,
                                                this.container.style.height = `${e.height}px`,
                                                this.container.style.width = `${e.width}px`,
                                                this.container.style.position = "fixed",
                                                this.container.style.top = `${e.top}px`,
                                                this.container.style.left = `${e.left}px`,
                                                document && document.body.appendChild(this.container),
                                                setTimeout((() => {
                                                        this.container.style.transition = "top 0.3s, bottom 0.3s, left 0.3s, right 0.3s, height 0.3s, width 0.3s",
                                                        this.container.style.top = "0px",
                                                        this.container.style.left = "0px",
                                                        this.container.style.right = "0px",
                                                        this.container.style.bottom = "0px",
                                                        this.container.style.height = null,
                                                        this.container.style.width = null,
                                                        this.container.style.backgroundColor = "#fff",
                                                        this.setState({
                                                            isFullScreen: !0
                                                        })
                                                    }), 100)
                                            }
                                        else {
                                            const e = this.container;
                                            if (!document)
                                                return;
                                            if (document.addEventListener("webkitfullscreenchange", (e => {
                                                        document.fullscreenElement || document.webkitFullscreenElement || this.setState({
                                                            isFullScreen: !1
                                                        })
                                                    })), document.addEventListener("fullscreenchange", (e => {
                                                        document.fullscreenElement || document.webkitFullscreenElement || this.setState({
                                                            isFullScreen: !1
                                                        })
                                                    })), document.fullscreenElement === e)
                                                return document.exitFullscreen(), void this.setState({
                                                    isFullScreen: !1
                                                });
                                            if (document.webkitFullscreenElement === e)
                                                return document.webkitCancelFullScreen(), void this.setState({
                                                    isFullScreen: !1
                                                });
                                            const t = e.requestFullScreen || e.webkitRequestFullScreen || e.mozRequestFullScreen || e.msRequestFullScreen;
                                            if (t)
                                                this.setState({
                                                    isFullScreen: !0
                                                }), t.call(e);
                                            else if (void 0 !== window.ActiveXObject) {
                                                const e = new ActiveXObject("WScript.Shell");
                                                null !== e && e.SendKeys("{F11}")
                                            }
                                        }
                                    },
                                    this.handleViewGroupCreate = e => {
                                        e && e.setMapWidgetInstance(this)
                                    },
                                    this.switchMap = () => {
                                        return e = this,
                                        t = void 0,
                                        s = function  * () {
                                            return this.multiSourceMapInstance ? yield this.multiSourceMapInstance.switchMap() : yield Promise.resolve()
                                        },
                                        new((i = void 0) || (i = Promise))((function (o, a) {
                                                function n(e) {
                                                    try {
                                                        l(s.next(e))
                                                    } catch (e) {
                                                        a(e)
                                                    }
                                                }
                                                function r(e) {
                                                    try {
                                                        l(s.throw(e))
                                                    } catch (e) {
                                                        a(e)
                                                    }
                                                }
                                                function l(e) {
                                                    var t;
                                                    e.done ? o(e.value) : (t = e.value, t instanceof i ? t : new i((function (e) {
                                                                e(t)
                                                            }))).then(n, r)
                                                }
                                                l((s = s.apply(e, t || [])).next())
                                            }));
                                        var e,
                                        t,
                                        i,
                                        s
                                    },
                                    this.setMultiSourceMapInstance = e => {
                                        this.multiSourceMapInstance = e
                                    },
                                    this.onResize = (e, t) => {
                                        e && t && (e <= 545 && e > 0 ? this.setState({
                                                widthBreakpoint: "xsmall",
                                                widgetHeight: t
                                            }) : this.setState({
                                                widthBreakpoint: "other",
                                                widgetHeight: t
                                            }))
                                    },
                                    this.getInnerContent = e => this.state.startLoadModules ? this.props.useDataSources && this.props.useDataSources[0] && this.props.useDataSources[0].dataSourceId ? (0, t.jsx)("div", {
                                        className: "jimu-widget",
                                        ref: e => {
                                            this.parentContainer = e
                                        }
                                    }, (0, t.jsx)("div", {
                                                css: this.getStyle(),
                                                className: "jimu-widget",
                                                ref: e => {
                                                    this.container = e
                                                }
                                            }, (0, t.jsx)("div", {
                                                    className: (0, t.classNames)("jimu-widget", {
                                                        "map-is-design-mode": !w(this.props.appMode)
                                                    })
                                                }, e && this.props.useDataSources.length >= 1 && (0, t.jsx)(be, {
                                                        key: 1,
                                                        fullScreenMap: this.fullScreenMap,
                                                        baseWidgetProps: this.props,
                                                        startLoadModules: this.state.startLoadModules,
                                                        ref: this.setMultiSourceMapInstance,
                                                        onViewGroupCreate: this.handleViewGroupCreate,
                                                        widgetHeight: this.state.widgetHeight,
                                                        widthBreakpoint: this.state.widthBreakpoint,
                                                        isFullScreen: this.state.isFullScreen,
                                                        isMapInVisibleArea: e
                                                    })), (0, t.jsx)(t.ReactResizeDetector, {
                                                    handleWidth: !0,
                                                    handleHeight: !0,
                                                    onResize: this.onResize
                                                }))) : (0, t.jsx)("div", {
                                            className: "jimu-widget",
                                            ref: e => {
                                                this.parentContainer = e
                                            }
                                        }, (0, t.jsx)("div", {
                                                css: this.getStyle(),
                                                className: "jimu-widget",
                                                ref: e => {
                                                    this.container = e
                                                }
                                            }, (0, t.jsx)("div", {
                                                    className: (0, t.classNames)("jimu-widget", {
                                                        "map-is-design-mode": !w(this.props.appMode)
                                                    })
                                                }, e && (0, t.jsx)(xe, {
                                                        fullScreenMap: this.fullScreenMap,
                                                        baseWidgetProps: this.props,
                                                        startLoadModules: this.state.startLoadModules,
                                                        isDefaultMap: !0,
                                                        setMultiSourceMapInstance: this.setMultiSourceMapInstance,
                                                        onViewGroupCreate: this.handleViewGroupCreate,
                                                        widgetHeight: this.state.widgetHeight,
                                                        widthBreakpoint: this.state.widthBreakpoint,
                                                        isFullScreen: this.state.isFullScreen,
                                                        isMapInVisibleArea: e
                                                    })), (0, t.jsx)(t.ReactResizeDetector, {
                                                    handleWidth: !0,
                                                    handleHeight: !0,
                                                    onResize: this.onResize
                                                }))) : (0, t.jsx)("div", {
                                            css: this.getStyle(),
                                            className: "jimu-widget"
                                        }, (0, t.jsx)("div", {
                                                className: "widget-map jimu-widget"
                                            }, (0, t.jsx)("div", {
                                                    style: {
                                                        position: "absolute",
                                                        left: "50%",
                                                        top: "50%"
                                                    },
                                                    className: "jimu-secondary-loading"
                                                }))),
                                    this.state = {
                                        widthBreakpoint: null,
                                        widgetHeight: null,
                                        isFullScreen: !1
                                    }
                                }
                                getStyle() {
                                    const e = this.props.theme;
                                    return t.css `
      position: relative;

      .map-is-live-mode {
        .exbmap-ui {
          pointer-events: auto !important;
        }

        .is-widget {
          pointer-events: auto !important;
        }
      }

      .widget-map-usemask {
        pointer-events: auto !important;
      }

      .map-is-design-mode {
        .exbmap-ui,
        .exbmap-ui-tool {
          pointer-events: none !important;
        }

        .is-widget {
          pointer-events: auto !important;
        }
      }

      .widget-map{
        padding: 0;
        margin: 0;
        height: 100%;
        width: 100%;
        z-index: -1;
        .overview-container{
          position: absolute;
          top: 12px;
          right: 12px;
          width: 300px;
          height: 200px;
          border: 1px solid black;
          z-index: 1;
        }

        .extent-container{
          background-color: rgba(0, 0, 0, 0.5);
          position: absolute;
          z-index: 2;
        }

        .extent-btn-container{
          button{
            outline: none;
          }
          .previous-extent-btn{
            color: #111;
          }
          .next-extent-btn{
            color: #222;
          }
        }
      }

      .exbmap-ui-layout{
        z-index: 0;
      }

      .mapswitch-container {
        position: absolute;
        z-index: 7;
        width: 32px;
        height: 32px;
        bottom: 10px;
        left: 10px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3)
      }

      .mapswitch-icon {
        fill: black;
        left: 8px;
        top: 8px;
        position: absolute;
        display: block;
      }

      .widget-map-background {
        background-color: ${e.colors.white};
        position: absolute;
        z-index: 1;
      }

      .widget-map-crashed {
        background-color: ${t.polished.rgba(e.colors.white,.85)};
        position: absolute;
        z-index: 1;
        top: 0;

        .widget-map-crashed-label-padding {
          padding-left: ${t.polished.rem(24)};
          padding-right: ${t.polished.rem(24)};
        }

        .widget-map-crashed-label {
          font-size: ${t.polished.rem(13)};
          color: ${e.colors.black};
          font-weight: bold;
          text-align: center;
        }
      }

      @keyframes appear {
        0%{opacity:0}
        25%{opacity:.25}
        50%{opacity:.5;}
        75%{opacity:.75}
        100%{opacity:1;}
      }

      @keyframes disappear {
        0%{opacity:1}
        25%{opacity:.75}
        50%{opacity:.5;}
        75%{opacity:.25}
        100%{opacity:0;}
      }

      .multisourcemap-item-appear {
        animation: appear 300ms;
        -webkit-animation: appear 300ms;
        -moz-animation: appear 300ms;
        animation-fill-mode: forwards;
        -webkit-animation-fill-mode: forwards;
        -moz-animation-fill-mode: forwards;
        animation-timing-function: ease-in;
        -webkit-animation-timing-function: ease-in;
        -moz-animation-timing-function: ease-in;
      }

      .multisourcemap-item-disappear {
        animation: disappear 300ms;
        -webkit-animation: disappear 300ms;
        -moz-animation: disappear 300ms;
        animation-fill-mode: forwards;
        -webkit-animation-fill-mode: forwards;
        -moz-animation-fill-mode: forwards;
        animation-timing-function: ease-in;
        -webkit-animation-timing-function: ease-in;
        -moz-animation-timing-function: ease-in;
      }

      .multisourcemap-item-appear-noanimate {
        opacity: 1;
      }

      .multisourcemap-item-disappear-noanimate {
        opacity: 0;
      }
      `
                                }
                                componentDidMount() {
                                    this.state.startLoadModules || !window.jimuConfig.isInBuilder && this.props.config.canPlaceHolder || this.startRenderMap()
                                }
                                componentWillUnmount() {
                                    (0, t.getAppStore)().getState().appConfig.widgets[this.props.id] || t.MutableStoreManager.getInstance().updateStateValue(this.props.id, "restoreData", null)
                                }
                                render() {
                                    return (0, t.jsx)("div", {
                                        className: "w-100 h-100"
                                    }, (0, t.jsx)(b.PageVisibilityContext.Consumer, null, (e => (0, t.jsx)(b.ViewportVisibilityContext.Consumer, null, (i => (0, t.jsx)(b.ViewVisibilityContext.Consumer, null, (t => {
                                                                const s = !t.isInView || t.isInCurrentView;
                                                                return this.getInnerContent(w(this.props.appMode) ? i && s : e)
                                                            })))))))
                                }
                            }
                            Ie.mapExtraStateProps = e => ({
                                appMode: e && e.appRuntimeInfo && e.appRuntimeInfo.appMode,
                                queryObject: e.queryObject
                            })
                        })(),
                        r
                    })())
            }
        }
    }));
