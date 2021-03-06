/*!
 * jQuery formRender: https://formbuilder.online/
 * Version: 3.1.3
 * Author: Kevin Chappell <kevin.b.chappell@gmail.com>
 */
! function(e) {
    "use strict";
    ! function(e) {
        var t = {};

        function n(r) {
            if (t[r]) return t[r].exports;
            var o = t[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
        }
        n.m = e, n.c = t, n.d = function(e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: r
            })
        }, n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, n.t = function(e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var o in e) n.d(r, o, function(t) {
                    return e[t]
                }.bind(null, o));
            return r
        }, n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "", n(n.s = 32)
    }([function(e, t, n) {
        t.__esModule = !0;
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            o = function() {
                return function(e, t) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e)) return function(e, t) {
                        var n = [],
                            r = !0,
                            o = !1,
                            i = void 0;
                        try {
                            for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                        } catch (e) {
                            o = !0, i = e
                        } finally {
                            try {
                                !r && s.return && s.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        return n
                    }(e, t);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            i = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            a = n(1),
            s = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n(2));
        var l = function() {
            function e(t, n) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.rawConfig = jQuery.extend({}, t), t = jQuery.extend({}, t), this.preview = n, delete t.isPreview, this.preview && delete t.required;
                var r = ["label", "description", "subtype", "required", "disabled"],
                    o = Array.isArray(r),
                    i = 0;
                for (r = o ? r : r[Symbol.iterator]();;) {
                    var a;
                    if (o) {
                        if (i >= r.length) break;
                        a = r[i++]
                    } else {
                        if ((i = r.next()).done) break;
                        a = i.value
                    }
                    var s = a;
                    this[s] = t[s], delete t[s]
                }
                t.id || (t.name ? t.id = t.name : t.id = "control-" + Math.floor(1e7 * Math.random() + 1)), this.id = t.id, this.type = t.type, this.description && (t.title = this.description), e.controlConfig || (e.controlConfig = {});
                var l = this.subtype ? this.type + "." + this.subtype : this.type;
                this.classConfig = jQuery.extend({}, e.controlConfig[l] || {}), this.subtype && (t.type = this.subtype), this.required && (t.required = "required", t["aria-required"] = "true"), this.disabled && (t.disabled = "disabled"), this.config = t, this.configure()
            }
            return e.register = function(t, n, r) {
                var o = r ? r + "." : "";
                e.classRegister || (e.classRegister = {}), Array.isArray(t) || (t = [t]);
                var i = t,
                    a = Array.isArray(i),
                    s = 0;
                for (i = a ? i : i[Symbol.iterator]();;) {
                    var l;
                    if (a) {
                        if (s >= i.length) break;
                        l = i[s++]
                    } else {
                        if ((s = i.next()).done) break;
                        l = s.value
                    }
                    var u = l; - 1 === u.indexOf(".") ? e.classRegister[o + u] = n : e.error("Ignoring type " + u + ". Cannot use the character '.' in a type name.")
                }
            }, e.getRegistered = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    n = Object.keys(e.classRegister);
                return n.length ? n.filter(function(e) {
                    return t ? e.indexOf(t + ".") > -1 : -1 == e.indexOf(".")
                }) : n
            }, e.getRegisteredSubtypes = function() {
                var t = {};
                for (var n in e.classRegister)
                    if (e.classRegister.hasOwnProperty(n)) {
                        var r = n.split("."),
                            i = o(r, 2),
                            a = i[0],
                            s = i[1];
                        if (!s) continue;
                        t[a] || (t[a] = []), t[a].push(s)
                    }
                return t
            }, e.getClass = function(t, n) {
                var r = n ? t + "." + n : t,
                    o = e.classRegister[r] || e.classRegister[t];
                return o || e.error("Invalid control type. (Type: " + t + ", Subtype: " + n + "). Please ensure you have registered it, and imported it correctly.")
            }, e.loadCustom = function(t) {
                var n = [];
                if (t && (n = n.concat(t)), window.fbControls && (n = n.concat(window.fbControls)), !this.fbControlsLoaded) {
                    var r = n,
                        o = Array.isArray(r),
                        i = 0;
                    for (r = o ? r : r[Symbol.iterator]();;) {
                        var a;
                        if (o) {
                            if (i >= r.length) break;
                            a = r[i++]
                        } else {
                            if ((i = r.next()).done) break;
                            a = i.value
                        }
                        a(e, e.classRegister)
                    }
                    this.fbControlsLoaded = !0
                }
            }, e.mi18n = function(e, t) {
                var n = this.definition,
                    o = n.i18n || {};
                o = o[s.default.locale] || o.default || o;
                var i = this.camelCase(e),
                    a = "object" == (void 0 === o ? "undefined" : r(o)) ? o[i] || o[e] : o;
                if (a) return a;
                var l = n.mi18n;
                return "object" === (void 0 === l ? "undefined" : r(l)) && (l = l[i] || l[e]), l || (l = i), s.default.get(l, t)
            }, e.active = function(e) {
                return !Array.isArray(this.definition.inactive) || -1 == this.definition.inactive.indexOf(e)
            }, e.label = function(e) {
                return this.mi18n(e)
            }, e.icon = function(e) {
                var t = this.definition;
                return t && "object" === r(t.icon) ? t.icon[e] : t.icon
            }, e.prototype.configure = function() {}, e.prototype.build = function() {
                var e = this.config,
                    t = e.label,
                    n = e.type,
                    r = function(e, t) {
                        var n = {};
                        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                        return n
                    }(e, ["label", "type"]);
                return this.markup(n, (0, a.parsedHtml)(t), r)
            }, e.prototype.on = function(e) {
                var t = this,
                    n = {
                        prerender: function(e) {},
                        render: function(e) {
                            var n = function() {
                                t.onRender && t.onRender()
                            };
                            t.css && (0, a.getStyles)(t.css), t.js && !(0, a.isCached)(t.js) ? (0, a.getScripts)(t.js).done(n) : n()
                        }
                    };
                return e ? n[e] : n
            }, e.error = function(e) {
                throw new Error(e)
            }, e.prototype.markup = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return this.element = (0, a.markup)(e, t, n), this.element
            }, e.prototype.parsedHtml = function(e) {
                return (0, a.parsedHtml)(e)
            }, e.camelCase = function(e) {
                return (0, a.camelCase)(e)
            }, i(e, null, [{
                key: "definition",
                get: function() {
                    return {}
                }
            }]), e
        }();
        t.default = l
    }, function(t, n, r) {
        n.__esModule = !0;
        var o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            a = function() {
                return function(e, t) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e)) return function(e, t) {
                        var n = [],
                            r = !0,
                            o = !1,
                            i = void 0;
                        try {
                            for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                        } catch (e) {
                            o = !0, i = e
                        } finally {
                            try {
                                !r && s.return && s.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        return n
                    }(e, t);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }();

        function s(e, t) {
            var n = {};
            for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
            return n
        }
        window.fbLoaded = {
            js: [],
            css: []
        }, window.fbEditors = {
            quill: {},
            tinymce: {}
        };
        var l = n.trimObj = function(e) {
                var t = [null, void 0, "", !1, "false"];
                for (var n in e) t.includes(e[n]) ? delete e[n] : Array.isArray(e[n]) && (e[n].length || delete e[n]);
                return e
            },
            u = n.validAttr = function(e) {
                return !["values", "enableOther", "other", "label", "subtype"].includes(e)
            },
            c = (n.xmlAttrString = function(e) {
                return Object.entries(e).map(function(e) {
                    var t = a(e, 2),
                        n = t[0],
                        r = t[1];
                    return p(n) + '="' + r + '"'
                }).join(" ")
            }, n.attrString = function(e) {
                return Object.entries(e).map(function(e) {
                    var t = a(e, 2),
                        n = t[0],
                        r = t[1];
                    return u(n) && Object.values(f(n, r)).join("")
                }).filter(Boolean).join(" ")
            }),
            f = n.safeAttr = function(e, t) {
                e = d(e);
                var n = void 0;
                return t && (Array.isArray(t) ? n = j(t.join(" ")) : ("boolean" == typeof t && (t = t.toString()), n = j(t.trim()))), {
                    name: e,
                    value: t = t ? '="' + n + '"' : ""
                }
            },
            d = (n.flattenArray = function e(t) {
                return t.reduce(function(t, n) {
                    return t.concat(Array.isArray(n) ? e(n) : n)
                }, [])
            }, n.safeAttrName = function(e) {
                return {
                    className: "class"
                }[e] || p(e)
            }),
            p = n.hyphenCase = function(e) {
                return (e = (e = e.replace(/[^\w\s\-]/gi, "")).replace(/([A-Z])/g, function(e) {
                    return "-" + e.toLowerCase()
                })).replace(/\s/g, "-").replace(/^-+/g, "")
            },
            h = n.camelCase = function(e) {
                return e.replace(/-([a-z])/g, function(e, t) {
                    return t.toUpperCase()
                })
            },
            m = n.bindEvents = function(e, t) {
                if (t) {
                    var n = function(n) {
                        t.hasOwnProperty(n) && e.addEventListener(n, function(e) {
                            return t[n](e)
                        })
                    };
                    for (var r in t) n(r)
                }
            },
            b = n.nameAttr = function(e) {
                var t = (new Date).getTime();
                return (e.type || p(e.label)) + "-" + t
            },
            y = n.getContentType = function(e) {
                return void 0 === e ? e : [
                    ["array", function(e) {
                        return Array.isArray(e)
                    }],
                    ["node", function(e) {
                        return e instanceof window.Node || e instanceof window.HTMLElement
                    }],
                    ["component", function() {
                        return e && e.dom
                    }],
                    [void 0 === e ? "undefined" : i(e), function() {
                        return !0
                    }]
                ].find(function(t) {
                    return t[1](e)
                })[0]
            },
            g = function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    o = y(n),
                    i = r.events,
                    a = s(r, ["events"]),
                    l = document.createElement(t),
                    u = {
                        string: function(e) {
                            l.innerHTML += e
                        },
                        object: function(t) {
                            var n = t.tag,
                                r = t.content,
                                o = s(t, ["tag", "content"]);
                            return l.appendChild(e(n, r, o))
                        },
                        node: function(e) {
                            return l.appendChild(e)
                        },
                        array: function(e) {
                            for (var t = 0; t < e.length; t++) o = y(e[t]), u[o](e[t])
                        },
                        function: function(e) {
                            e = e(), o = y(e), u[o](e)
                        },
                        undefined: function() {}
                    };
                for (var c in a)
                    if (a.hasOwnProperty(c)) {
                        var f = d(c),
                            p = Array.isArray(a[c]) ? S(a[c].join(" ").split(" ")).join(" ") : a[c];
                        l.setAttribute(f, p)
                    }
                return n && u[o](n), m(l, i), l
            };
        n.markup = g;
        var v = n.parseAttrs = function(e) {
                var t = e.attributes,
                    n = {};
                return C(t, function(e) {
                    var r = t[e].value || "";
                    r.match(/false|true/g) ? r = "true" === r : r.match(/undefined/g) && (r = void 0), r && (n[h(t[e].name)] = r)
                }), n
            },
            w = n.parseOptions = function(e) {
                for (var t = [], n = 0; n < e.length; n++) {
                    var r = o({}, v(e[n]), {
                        label: e[n].textContent
                    });
                    t.push(r)
                }
                return t
            },
            x = n.parseXML = function(e) {
                var t = (new window.DOMParser).parseFromString(e, "text/xml"),
                    n = [];
                if (t)
                    for (var r = t.getElementsByTagName("field"), o = 0; o < r.length; o++) {
                        var i = v(r[o]),
                            a = r[o].getElementsByTagName("option");
                        a && a.length && (i.values = w(a)), n.push(i)
                    }
                return n
            },
            q = n.parsedHtml = function(e) {
                var t = document.createElement("textarea");
                return t.innerHTML = e, t.textContent
            },
            O = n.escapeHtml = function(e) {
                var t = document.createElement("textarea");
                return t.textContent = e, t.innerHTML
            },
            j = n.escapeAttr = function(e) {
                var t = {
                    '"': "&quot;",
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;"
                };
                return "string" == typeof e ? e.replace(/["&<>]/g, function(e) {
                    return t[e] || e
                }) : e
            },
            k = n.escapeAttrs = function(e) {
                for (var t in e) e.hasOwnProperty(t) && (e[t] = j(e[t]));
                return e
            },
            C = n.forEach = function(e, t, n) {
                for (var r = 0; r < e.length; r++) t.call(n, r, e[r])
            },
            S = n.unique = function(e) {
                return e.filter(function(e, t, n) {
                    return n.indexOf(e) === t
                })
            },
            E = n.removeFromArray = function(e, t) {
                var n = t.indexOf(e);
                n > -1 && t.splice(n, 1)
            },
            A = n.getScripts = function(e, t) {
                var n, r = jQuery,
                    o = [];
                return Array.isArray(e) || (e = [e]), T(e) || (o = jQuery.map(e, function(e) {
                    var n = {
                        dataType: "script",
                        cache: !0,
                        url: (t || "") + e
                    };
                    return jQuery.ajax(n).done(function() {
                        return window.fbLoaded.js.push(e)
                    })
                })), o.push(jQuery.Deferred(function(e) {
                    return r(e.resolve)
                })), (n = jQuery).when.apply(n, o)
            },
            T = n.isCached = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "js",
                    n = !1,
                    r = window.fbLoaded[t];
                return n = Array.isArray(e) ? e.every(function(e) {
                    return r.includes(e)
                }) : r.includes(e), n
            },
            _ = n.getStyles = function(t, n) {
                Array.isArray(t) || (t = [t]), t.forEach(function(t) {
                    var r = "href",
                        o = t,
                        a = "";
                    if ("object" == (void 0 === t ? "undefined" : i(t)) && (r = t.type || (t.style ? "inline" : "href"), a = t.id, t = "inline" == r ? t.style : t.href, o = a || t.href || t.style), !T(o, "css")) {
                        if ("href" == r) {
                            var s = document.createElement("link");
                            s.type = "text/css", s.rel = "stylesheet", s.href = (n || "") + t, document.head.appendChild(s)
                        } else e('<style type="text/css">' + t + "</style>").attr("id", a).appendTo(e(document.head));
                        window.fbLoaded.css.push(o)
                    }
                })
            },
            R = n.capitalize = function(e) {
                return e.replace(/\b\w/g, function(e) {
                    return e.toUpperCase()
                })
            },
            L = n.merge = function e(t, n) {
                var r = Object.assign({}, t, n);
                for (var o in n) r.hasOwnProperty(o) && (Array.isArray(n[o]) ? r[o] = Array.isArray(t[o]) ? S(t[o].concat(n[o])) : n[o] : "object" === i(n[o]) ? r[o] = e(t[o], n[o]) : r[o] = n[o]);
                return r
            },
            M = n.addEventListeners = function(e, t, n) {
                return t.split(" ").forEach(function(t) {
                    return e.addEventListener(t, n, !1)
                })
            },
            P = n.closest = function(e, t) {
                for (var n = t.replace(".", "");
                    (e = e.parentElement) && !e.classList.contains(n););
                return e
            },
            N = n.mobileClass = function() {
                var e = "";
                return function(t) {
                    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) && (e = "fb-mobile")
                }(navigator.userAgent || navigator.vendor || window.opera), e
            },
            D = n.safename = function(e) {
                return e.replace(/\s/g, "-").replace(/[^a-zA-Z0-9[\]_-]/g, "")
            },
            F = n.forceNumber = function(e) {
                return e.replace(/[^0-9]/g, "")
            },
            U = n.subtract = function(e, t) {
                return t.filter(function(e) {
                    return !~this.indexOf(e)
                }, e)
            },
            B = (n.insertStyle = function(e) {
                var t = (e = Array.isArray(e) ? e : [e]).map(function(e) {
                    var t = e.src,
                        n = e.id;
                    return new Promise(function(e, r) {
                        if (window.fbLoaded.css.includes(t)) return e(t);
                        var o = g("link", null, {
                            href: t,
                            rel: "stylesheet",
                            id: n
                        });
                        document.head.insertBefore(o, document.head.firstChild)
                    })
                });
                return Promise.all(t)
            }, n.removeStyle = function(e) {
                var t = document.getElementById(e);
                return t.parentElement.removeChild(t)
            }, {
                addEventListeners: M,
                attrString: c,
                camelCase: h,
                capitalize: R,
                closest: P,
                getContentType: y,
                escapeAttr: j,
                escapeAttrs: k,
                escapeHtml: O,
                forceNumber: F,
                forEach: C,
                getScripts: A,
                getStyles: _,
                hyphenCase: p,
                isCached: T,
                markup: g,
                merge: L,
                mobileClass: N,
                nameAttr: b,
                parseAttrs: v,
                parsedHtml: q,
                parseOptions: w,
                parseXML: x,
                removeFromArray: E,
                safeAttr: f,
                safeAttrName: d,
                safename: D,
                subtract: U,
                trimObj: l,
                unique: S,
                validAttr: u
            });
        n.default = B
    }, function(e, t) {
        /*!
         * mi18n - https://github.com/Draggable/mi18n
         * Version: 0.4.7
         * Author: Kevin Chappell <kevin.b.chappell@gmail.com> (http://kevin-chappell.com)
         */
        e.exports = function(e) {
            var t = {};

            function n(r) {
                if (t[r]) return t[r].exports;
                var o = t[r] = {
                    i: r,
                    l: !1,
                    exports: {}
                };
                return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
            }
            return n.m = e, n.c = t, n.d = function(e, t, r) {
                n.o(e, t) || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: r
                })
            }, n.r = function(e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }, n.t = function(e, t) {
                if (1 & t && (e = n(e)), 8 & t) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                var r = Object.create(null);
                if (n.r(r), Object.defineProperty(r, "default", {
                        enumerable: !0,
                        value: e
                    }), 2 & t && "string" != typeof e)
                    for (var o in e) n.d(r, o, function(t) {
                        return e[t]
                    }.bind(null, o));
                return r
            }, n.n = function(e) {
                var t = e && e.__esModule ? function() {
                    return e.default
                } : function() {
                    return e
                };
                return n.d(t, "a", t), t
            }, n.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, n.p = "", n(n.s = 7)
        }([function(e, t, n) {
            var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                o = n(2),
                i = n(10),
                a = Object.prototype.toString;

            function s(e) {
                return "[object Array]" === a.call(e)
            }

            function l(e) {
                return null !== e && "object" === (void 0 === e ? "undefined" : r(e))
            }

            function u(e) {
                return "[object Function]" === a.call(e)
            }

            function c(e, t) {
                if (null !== e && void 0 !== e)
                    if ("object" !== (void 0 === e ? "undefined" : r(e)) && (e = [e]), s(e))
                        for (var n = 0, o = e.length; n < o; n++) t.call(null, e[n], n, e);
                    else
                        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.call(null, e[i], i, e)
            }
            e.exports = {
                isArray: s,
                isArrayBuffer: function(e) {
                    return "[object ArrayBuffer]" === a.call(e)
                },
                isBuffer: i,
                isFormData: function(e) {
                    return "undefined" != typeof FormData && e instanceof FormData
                },
                isArrayBufferView: function(e) {
                    return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
                },
                isString: function(e) {
                    return "string" == typeof e
                },
                isNumber: function(e) {
                    return "number" == typeof e
                },
                isObject: l,
                isUndefined: function(e) {
                    return void 0 === e
                },
                isDate: function(e) {
                    return "[object Date]" === a.call(e)
                },
                isFile: function(e) {
                    return "[object File]" === a.call(e)
                },
                isBlob: function(e) {
                    return "[object Blob]" === a.call(e)
                },
                isFunction: u,
                isStream: function(e) {
                    return l(e) && u(e.pipe)
                },
                isURLSearchParams: function(e) {
                    return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
                },
                isStandardBrowserEnv: function() {
                    return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document
                },
                forEach: c,
                merge: function e() {
                    var t = {};

                    function n(n, o) {
                        "object" === r(t[o]) && "object" === (void 0 === n ? "undefined" : r(n)) ? t[o] = e(t[o], n) : t[o] = n
                    }
                    for (var o = 0, i = arguments.length; o < i; o++) c(arguments[o], n);
                    return t
                },
                extend: function(e, t, n) {
                    return c(t, function(t, r) {
                        e[r] = n && "function" == typeof t ? o(t, n) : t
                    }), e
                },
                trim: function(e) {
                    return e.replace(/^\s*/, "").replace(/\s*$/, "")
                }
            }
        }, function(e, t, n) {
            (function(t) {
                var r = n(0),
                    o = n(13),
                    i = {
                        "Content-Type": "application/x-www-form-urlencoded"
                    };

                function a(e, t) {
                    !r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
                }
                var s = {
                    adapter: function() {
                        var e;
                        return "undefined" != typeof XMLHttpRequest ? e = n(3) : void 0 !== t && (e = n(3)), e
                    }(),
                    transformRequest: [function(e, t) {
                        return o(t, "Content-Type"), r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e) ? e : r.isArrayBufferView(e) ? e.buffer : r.isURLSearchParams(e) ? (a(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : r.isObject(e) ? (a(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
                    }],
                    transformResponse: [function(e) {
                        if ("string" == typeof e) try {
                            e = JSON.parse(e)
                        } catch (e) {}
                        return e
                    }],
                    timeout: 0,
                    xsrfCookieName: "XSRF-TOKEN",
                    xsrfHeaderName: "X-XSRF-TOKEN",
                    maxContentLength: -1,
                    validateStatus: function(e) {
                        return e >= 200 && e < 300
                    },
                    headers: {
                        common: {
                            Accept: "application/json, text/plain, */*"
                        }
                    }
                };
                r.forEach(["delete", "get", "head"], function(e) {
                    s.headers[e] = {}
                }), r.forEach(["post", "put", "patch"], function(e) {
                    s.headers[e] = r.merge(i)
                }), e.exports = s
            }).call(this, n(12))
        }, function(e, t, n) {
            e.exports = function(e, t) {
                return function() {
                    for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
                    return e.apply(t, n)
                }
            }
        }, function(e, t, n) {
            var r = n(0),
                o = n(14),
                i = n(16),
                a = n(17),
                s = n(18),
                l = n(4),
                u = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || n(19);
            e.exports = function(e) {
                return new Promise(function(t, c) {
                    var f = e.data,
                        d = e.headers;
                    r.isFormData(f) && delete d["Content-Type"];
                    var p = new XMLHttpRequest,
                        h = "onreadystatechange",
                        m = !1;
                    if ("undefined" == typeof window || !window.XDomainRequest || "withCredentials" in p || s(e.url) || (p = new window.XDomainRequest, h = "onload", m = !0, p.onprogress = function() {}, p.ontimeout = function() {}), e.auth) {
                        var b = e.auth.username || "",
                            y = e.auth.password || "";
                        d.Authorization = "Basic " + u(b + ":" + y)
                    }
                    if (p.open(e.method.toUpperCase(), i(e.url, e.params, e.paramsSerializer), !0), p.timeout = e.timeout, p[h] = function() {
                            if (p && (4 === p.readyState || m) && (0 !== p.status || p.responseURL && 0 === p.responseURL.indexOf("file:"))) {
                                var n = "getAllResponseHeaders" in p ? a(p.getAllResponseHeaders()) : null,
                                    r = {
                                        data: e.responseType && "text" !== e.responseType ? p.response : p.responseText,
                                        status: 1223 === p.status ? 204 : p.status,
                                        statusText: 1223 === p.status ? "No Content" : p.statusText,
                                        headers: n,
                                        config: e,
                                        request: p
                                    };
                                o(t, c, r), p = null
                            }
                        }, p.onerror = function() {
                            c(l("Network Error", e, null, p)), p = null
                        }, p.ontimeout = function() {
                            c(l("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", p)), p = null
                        }, r.isStandardBrowserEnv()) {
                        var g = n(20),
                            v = (e.withCredentials || s(e.url)) && e.xsrfCookieName ? g.read(e.xsrfCookieName) : void 0;
                        v && (d[e.xsrfHeaderName] = v)
                    }
                    if ("setRequestHeader" in p && r.forEach(d, function(e, t) {
                            void 0 === f && "content-type" === t.toLowerCase() ? delete d[t] : p.setRequestHeader(t, e)
                        }), e.withCredentials && (p.withCredentials = !0), e.responseType) try {
                        p.responseType = e.responseType
                    } catch (t) {
                        if ("json" !== e.responseType) throw t
                    }
                    "function" == typeof e.onDownloadProgress && p.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && p.upload && p.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function(e) {
                        p && (p.abort(), c(e), p = null)
                    }), void 0 === f && (f = null), p.send(f)
                })
            }
        }, function(e, t, n) {
            var r = n(15);
            e.exports = function(e, t, n, o, i) {
                var a = new Error(e);
                return r(a, t, n, o, i)
            }
        }, function(e, t, n) {
            e.exports = function(e) {
                return !(!e || !e.__CANCEL__)
            }
        }, function(e, t, n) {
            function r(e) {
                this.message = e
            }
            r.prototype.toString = function() {
                return "Cancel" + (this.message ? ": " + this.message : "")
            }, r.prototype.__CANCEL__ = !0, e.exports = r
        }, function(e, t, n) {
            t.__esModule = !0, t.I18N = void 0;
            var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                o = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(),
                i = n(8),
                a = {
                    extension: ".lang",
                    location: "assets/lang/",
                    langs: ["en-US"],
                    locale: "en-US",
                    override: {}
                },
                s = t.I18N = function() {
                    function e() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.langs = Object.create(null), this.loaded = [], this.processConfig(t)
                    }
                    return e.prototype.processConfig = function(e) {
                        var t = this,
                            n = Object.assign({}, a, e),
                            r = n.location,
                            o = function(e, t) {
                                var n = {};
                                for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                                return n
                            }(n, ["location"]),
                            i = r.replace(/\/?$/, "/");
                        this.config = Object.assign({}, {
                            location: i
                        }, o);
                        var s = this.config,
                            l = s.override,
                            u = s.preloaded,
                            c = void 0 === u ? {} : u,
                            f = Object.entries(this.langs).concat(Object.entries(l || c));
                        this.langs = f.reduce(function(e, n) {
                            var r = n[0],
                                o = n[1];
                            return e[r] = t.applyLanguage.call(t, r, o), e
                        }, {}), this.locale = this.config.locale || this.config.langs[0]
                    }, e.prototype.init = function(e) {
                        return this.processConfig.call(this, Object.assign({}, this.config, e)), this.setCurrent(this.locale)
                    }, e.prototype.addLanguage = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        t = "string" == typeof t ? this.processFile.call(this, t) : t, this.applyLanguage.call(this, e, t), this.config.langs.push("locale")
                    }, e.prototype.getValue = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
                        return this.langs[t] && this.langs[t][e] || this.getFallbackValue(e)
                    }, e.prototype.getFallbackValue = function(e) {
                        var t = Object.values(this.langs).find(function(t) {
                            return t[e]
                        });
                        return t && t[e]
                    }, e.prototype.makeSafe = function(e) {
                        var t = {
                            "{": "\\{",
                            "}": "\\}",
                            "|": "\\|"
                        };
                        return e = e.replace(/\{|\}|\|/g, function(e) {
                            return t[e]
                        }), new RegExp(e, "g")
                    }, e.prototype.put = function(e, t) {
                        return this.current[e] = t
                    }, e.prototype.get = function(e, t) {
                        var n = this.getValue(e);
                        if (n) {
                            var o = n.match(/\{[^}]+?\}/g),
                                i = void 0;
                            if (t && o)
                                if ("object" === (void 0 === t ? "undefined" : r(t)))
                                    for (var a = 0; a < o.length; a++) i = o[a].substring(1, o[a].length - 1), n = n.replace(this.makeSafe(o[a]), t[i] || "");
                                else n = n.replace(/\{[^}]+?\}/g, t);
                            return n
                        }
                    }, e.prototype.fromFile = function(e) {
                        for (var t, n = e.split("\n"), r = {}, o = 0; o < n.length; o++)(t = n[o].match(/^(.+?) *?= *?([^\n]+)/)) && (r[t[1]] = t[2].replace(/^\s+|\s+$/, ""));
                        return r
                    }, e.prototype.processFile = function(e) {
                        return this.fromFile(e.replace(/\n\n/g, "\n"))
                    }, e.prototype.loadLang = function(e) {
                        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            n = this;
                        return new Promise(function(r, o) {
                            if (-1 !== n.loaded.indexOf(e) && t) return n.applyLanguage.call(n, n.langs[e]), r(n.langs[e]);
                            var a = [n.config.location, e, n.config.extension].join("");
                            return (0, i.get)(a).then(function(t) {
                                var o = t.data,
                                    i = n.processFile(o);
                                return n.applyLanguage.call(n, e, i), n.loaded.push(e), r(n.langs[e])
                            }).catch(function() {
                                var t = n.applyLanguage.call(n, e);
                                r(t)
                            })
                        })
                    }, e.prototype.applyLanguage = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = this.config.override[e] || {},
                            r = this.langs[e] || {};
                        return this.langs[e] = Object.assign({}, r, t, n), this.langs[e]
                    }, e.prototype.setCurrent = function() {
                        var e = this,
                            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "en-US";
                        return this.loadLang(t).then(function() {
                            return e.locale = t, e.current = e.langs[t], e.current
                        })
                    }, o(e, [{
                        key: "getLangs",
                        get: function() {
                            return this.config.langs
                        }
                    }]), e
                }();
            t.default = new s
        }, function(e, t, n) {
            e.exports = n(9)
        }, function(e, t, n) {
            var r = n(0),
                o = n(2),
                i = n(11),
                a = n(1);

            function s(e) {
                var t = new i(e),
                    n = o(i.prototype.request, t);
                return r.extend(n, i.prototype, t), r.extend(n, t), n
            }
            var l = s(a);
            l.Axios = i, l.create = function(e) {
                return s(r.merge(a, e))
            }, l.Cancel = n(6), l.CancelToken = n(26), l.isCancel = n(5), l.all = function(e) {
                return Promise.all(e)
            }, l.spread = n(27), e.exports = l, e.exports.default = l
        }, function(e, t, n) {
            /*!
             * Determine if an object is a Buffer
             *
             * @author   Feross Aboukhadijeh <https://feross.org>
             * @license  MIT
             */
            function r(e) {
                return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
            }
            e.exports = function(e) {
                return null != e && (r(e) || function(e) {
                    return "function" == typeof e.readFloatLE && "function" == typeof e.slice && r(e.slice(0, 0))
                }(e) || !!e._isBuffer)
            }
        }, function(e, t, n) {
            var r = n(1),
                o = n(0),
                i = n(21),
                a = n(22);

            function s(e) {
                this.defaults = e, this.interceptors = {
                    request: new i,
                    response: new i
                }
            }
            s.prototype.request = function(e) {
                "string" == typeof e && (e = o.merge({
                    url: arguments[0]
                }, arguments[1])), (e = o.merge(r, {
                    method: "get"
                }, this.defaults, e)).method = e.method.toLowerCase();
                var t = [a, void 0],
                    n = Promise.resolve(e);
                for (this.interceptors.request.forEach(function(e) {
                        t.unshift(e.fulfilled, e.rejected)
                    }), this.interceptors.response.forEach(function(e) {
                        t.push(e.fulfilled, e.rejected)
                    }); t.length;) n = n.then(t.shift(), t.shift());
                return n
            }, o.forEach(["delete", "get", "head", "options"], function(e) {
                s.prototype[e] = function(t, n) {
                    return this.request(o.merge(n || {}, {
                        method: e,
                        url: t
                    }))
                }
            }), o.forEach(["post", "put", "patch"], function(e) {
                s.prototype[e] = function(t, n, r) {
                    return this.request(o.merge(r || {}, {
                        method: e,
                        url: t,
                        data: n
                    }))
                }
            }), e.exports = s
        }, function(e, t, n) {
            var r, o, i = e.exports = {};

            function a() {
                throw new Error("setTimeout has not been defined")
            }

            function s() {
                throw new Error("clearTimeout has not been defined")
            }

            function l(e) {
                if (r === setTimeout) return setTimeout(e, 0);
                if ((r === a || !r) && setTimeout) return r = setTimeout, setTimeout(e, 0);
                try {
                    return r(e, 0)
                } catch (t) {
                    try {
                        return r.call(null, e, 0)
                    } catch (t) {
                        return r.call(this, e, 0)
                    }
                }
            }! function() {
                try {
                    r = "function" == typeof setTimeout ? setTimeout : a
                } catch (e) {
                    r = a
                }
                try {
                    o = "function" == typeof clearTimeout ? clearTimeout : s
                } catch (e) {
                    o = s
                }
            }();
            var u, c = [],
                f = !1,
                d = -1;

            function p() {
                f && u && (f = !1, u.length ? c = u.concat(c) : d = -1, c.length && h())
            }

            function h() {
                if (!f) {
                    var e = l(p);
                    f = !0;
                    for (var t = c.length; t;) {
                        for (u = c, c = []; ++d < t;) u && u[d].run();
                        d = -1, t = c.length
                    }
                    u = null, f = !1,
                        function(e) {
                            if (o === clearTimeout) return clearTimeout(e);
                            if ((o === s || !o) && clearTimeout) return o = clearTimeout, clearTimeout(e);
                            try {
                                o(e)
                            } catch (t) {
                                try {
                                    return o.call(null, e)
                                } catch (t) {
                                    return o.call(this, e)
                                }
                            }
                        }(e)
                }
            }

            function m(e, t) {
                this.fun = e, this.array = t
            }

            function b() {}
            i.nextTick = function(e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                c.push(new m(e, t)), 1 !== c.length || f || l(h)
            }, m.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = b, i.addListener = b, i.once = b, i.off = b, i.removeListener = b, i.removeAllListeners = b, i.emit = b, i.prependListener = b, i.prependOnceListener = b, i.listeners = function(e) {
                return []
            }, i.binding = function(e) {
                throw new Error("process.binding is not supported")
            }, i.cwd = function() {
                return "/"
            }, i.chdir = function(e) {
                throw new Error("process.chdir is not supported")
            }, i.umask = function() {
                return 0
            }
        }, function(e, t, n) {
            var r = n(0);
            e.exports = function(e, t) {
                r.forEach(e, function(n, r) {
                    r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r])
                })
            }
        }, function(e, t, n) {
            var r = n(4);
            e.exports = function(e, t, n) {
                var o = n.config.validateStatus;
                n.status && o && !o(n.status) ? t(r("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n)
            }
        }, function(e, t, n) {
            e.exports = function(e, t, n, r, o) {
                return e.config = t, n && (e.code = n), e.request = r, e.response = o, e
            }
        }, function(e, t, n) {
            var r = n(0);

            function o(e) {
                return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
            }
            e.exports = function(e, t, n) {
                if (!t) return e;
                var i;
                if (n) i = n(t);
                else if (r.isURLSearchParams(t)) i = t.toString();
                else {
                    var a = [];
                    r.forEach(t, function(e, t) {
                        null !== e && void 0 !== e && (r.isArray(e) ? t += "[]" : e = [e], r.forEach(e, function(e) {
                            r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)), a.push(o(t) + "=" + o(e))
                        }))
                    }), i = a.join("&")
                }
                return i && (e += (-1 === e.indexOf("?") ? "?" : "&") + i), e
            }
        }, function(e, t, n) {
            var r = n(0),
                o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
            e.exports = function(e) {
                var t, n, i, a = {};
                return e ? (r.forEach(e.split("\n"), function(e) {
                    if (i = e.indexOf(":"), t = r.trim(e.substr(0, i)).toLowerCase(), n = r.trim(e.substr(i + 1)), t) {
                        if (a[t] && o.indexOf(t) >= 0) return;
                        a[t] = "set-cookie" === t ? (a[t] ? a[t] : []).concat([n]) : a[t] ? a[t] + ", " + n : n
                    }
                }), a) : a
            }
        }, function(e, t, n) {
            var r = n(0);
            e.exports = r.isStandardBrowserEnv() ? function() {
                var e, t = /(msie|trident)/i.test(navigator.userAgent),
                    n = document.createElement("a");

                function o(e) {
                    var r = e;
                    return t && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), {
                        href: n.href,
                        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                        host: n.host,
                        search: n.search ? n.search.replace(/^\?/, "") : "",
                        hash: n.hash ? n.hash.replace(/^#/, "") : "",
                        hostname: n.hostname,
                        port: n.port,
                        pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
                    }
                }
                return e = o(window.location.href),
                    function(t) {
                        var n = r.isString(t) ? o(t) : t;
                        return n.protocol === e.protocol && n.host === e.host
                    }
            }() : function() {
                return !0
            }
        }, function(e, t, n) {
            function r() {
                this.message = "String contains an invalid character"
            }
            r.prototype = new Error, r.prototype.code = 5, r.prototype.name = "InvalidCharacterError", e.exports = function(e) {
                for (var t, n, o = String(e), i = "", a = 0, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="; o.charAt(0 | a) || (s = "=", a % 1); i += s.charAt(63 & t >> 8 - a % 1 * 8)) {
                    if ((n = o.charCodeAt(a += .75)) > 255) throw new r;
                    t = t << 8 | n
                }
                return i
            }
        }, function(e, t, n) {
            var r = n(0);
            e.exports = r.isStandardBrowserEnv() ? {
                write: function(e, t, n, o, i, a) {
                    var s = [];
                    s.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), r.isString(o) && s.push("path=" + o), r.isString(i) && s.push("domain=" + i), !0 === a && s.push("secure"), document.cookie = s.join("; ")
                },
                read: function(e) {
                    var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                    return t ? decodeURIComponent(t[3]) : null
                },
                remove: function(e) {
                    this.write(e, "", Date.now() - 864e5)
                }
            } : {
                write: function() {},
                read: function() {
                    return null
                },
                remove: function() {}
            }
        }, function(e, t, n) {
            var r = n(0);

            function o() {
                this.handlers = []
            }
            o.prototype.use = function(e, t) {
                return this.handlers.push({
                    fulfilled: e,
                    rejected: t
                }), this.handlers.length - 1
            }, o.prototype.eject = function(e) {
                this.handlers[e] && (this.handlers[e] = null)
            }, o.prototype.forEach = function(e) {
                r.forEach(this.handlers, function(t) {
                    null !== t && e(t)
                })
            }, e.exports = o
        }, function(e, t, n) {
            var r = n(0),
                o = n(23),
                i = n(5),
                a = n(1),
                s = n(24),
                l = n(25);

            function u(e) {
                e.cancelToken && e.cancelToken.throwIfRequested()
            }
            e.exports = function(e) {
                return u(e), e.baseURL && !s(e.url) && (e.url = l(e.baseURL, e.url)), e.headers = e.headers || {}, e.data = o(e.data, e.headers, e.transformRequest), e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(t) {
                    delete e.headers[t]
                }), (e.adapter || a.adapter)(e).then(function(t) {
                    return u(e), t.data = o(t.data, t.headers, e.transformResponse), t
                }, function(t) {
                    return i(t) || (u(e), t && t.response && (t.response.data = o(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
                })
            }
        }, function(e, t, n) {
            var r = n(0);
            e.exports = function(e, t, n) {
                return r.forEach(n, function(n) {
                    e = n(e, t)
                }), e
            }
        }, function(e, t, n) {
            e.exports = function(e) {
                return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
            }
        }, function(e, t, n) {
            e.exports = function(e, t) {
                return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
            }
        }, function(e, t, n) {
            var r = n(6);

            function o(e) {
                if ("function" != typeof e) throw new TypeError("executor must be a function.");
                var t;
                this.promise = new Promise(function(e) {
                    t = e
                });
                var n = this;
                e(function(e) {
                    n.reason || (n.reason = new r(e), t(n.reason))
                })
            }
            o.prototype.throwIfRequested = function() {
                if (this.reason) throw this.reason
            }, o.source = function() {
                var e;
                return {
                    token: new o(function(t) {
                        e = t
                    }),
                    cancel: e
                }
            }, e.exports = o
        }, function(e, t, n) {
            e.exports = function(e) {
                return function(t) {
                    return e.apply(null, t)
                }
            }
        }])
    }, function(t, n, r) {
        n.__esModule = !0;
        var o = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(r(0));
        var a = function(t) {
            function n() {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, t.apply(this, arguments))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(n, t), n.prototype.build = function() {
                var e = this.config,
                    t = e.value,
                    n = void 0 === t ? "" : t,
                    r = function(e, t) {
                        var n = {};
                        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                        return n
                    }(e, ["value"]);
                return this.field = this.markup("textarea", this.parsedHtml(n), r), this.field
            }, n.prototype.onRender = function() {
                this.config.userData && e("#" + this.config.name).val(this.config.userData[0])
            }, n.prototype.on = function(n) {
                var r = this;
                return "prerender" == n && this.preview ? function(t) {
                    r.field && (t = r.field), e(t).on("mousedown", function(e) {
                        e.stopPropagation()
                    })
                } : t.prototype.on.call(this, n)
            }, o(n, null, [{
                key: "definition",
                get: function() {
                    return {
                        mi18n: {
                            textarea: "textArea"
                        }
                    }
                }
            }]), n
        }(i.default);
        n.default = a, i.default.register("textarea", a), i.default.register("textarea", a, "textarea")
    }, function(e, t, n) {
        t.__esModule = !0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            o = a(n(0)),
            i = a(n(2));

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s = function(e) {
            function t() {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, e.apply(this, arguments))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, e), t.register = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                t.customRegister = {}, t.def || (t.def = {
                    icon: {},
                    i18n: {}
                }), t.templates = e;
                var r = i.default.locale;
                t.def.i18n[r] || (t.def.i18n[r] = {}), o.default.register(Object.keys(e), t);
                var a = n,
                    s = Array.isArray(a),
                    l = 0;
                for (a = s ? a : a[Symbol.iterator]();;) {
                    var u;
                    if (s) {
                        if (l >= a.length) break;
                        u = a[l++]
                    } else {
                        if ((l = a.next()).done) break;
                        u = l.value
                    }
                    var c = u,
                        f = c.type;
                    if (c.attrs = c.attrs || {}, !f) {
                        if (!c.attrs.type) {
                            this.error("Ignoring invalid custom field definition. Please specify a type property.");
                            continue
                        }
                        f = c.attrs.type
                    }
                    var d = c.subtype || f;
                    if (!e[f]) {
                        var p = o.default.getClass(f, c.subtype);
                        if (!p) {
                            this.error("Error while registering custom field: " + f + (c.subtype ? ":" + c.subtype : "") + ". Unable to find any existing defined control or template for rendering.");
                            continue
                        }
                        d = c.datatype ? c.datatype : f + "-" + Math.floor(9e3 * Math.random() + 1e3), t.customRegister[d] = jQuery.extend(c, {
                            type: f,
                            class: p
                        })
                    }
                    t.def.i18n[r][d] = c.label, t.def.icon[d] = c.icon
                }
            }, t.getRegistered = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return e ? o.default.getRegistered(e) : Object.keys(t.customRegister)
            }, t.lookup = function(e) {
                return t.customRegister[e]
            }, t.prototype.build = function() {
                var e = t.templates[this.type];
                if (!e) return this.error("Invalid custom control type. Please ensure you have registered it correctly as a template option.");
                var n = Object.assign(this.config),
                    r = ["label", "description", "subtype", "id", "isPreview", "required", "title", "aria-required", "type"],
                    o = Array.isArray(r),
                    i = 0;
                for (r = o ? r : r[Symbol.iterator]();;) {
                    var a;
                    if (o) {
                        if (i >= r.length) break;
                        a = r[i++]
                    } else {
                        if ((i = r.next()).done) break;
                        a = i.value
                    }
                    var s = a;
                    n[s] = this.config[s] || this[s]
                }
                return (e = (e = e.bind(this))(n)).js && (this.js = e.js), e.css && (this.css = e.css), this.onRender = e.onRender, {
                    field: e.field,
                    layout: e.layout
                }
            }, r(t, null, [{
                key: "definition",
                get: function() {
                    return t.def
                }
            }]), t
        }(o.default);
        t.default = s, s.customRegister = {}
    }, function(e, t, n) {
        t.__esModule = !0;
        var r = t.instanceDom = {},
            o = t.defaultSubtypes = {
                text: ["text", "password", "email", "color", "tel"],
                header: ["h1", "h2", "h3"],
                button: ["button", "submit", "reset"],
                paragraph: ["p", "address", "blockquote", "canvas", "output"],
                textarea: ["textarea", "quill"]
            },
            i = (t.remove = function(e) {
                e.parentNode && e.parentNode.removeChild(e)
            }, t.empty = function(e) {
                for (; e.firstChild;) e.removeChild(e.firstChild);
                return e
            }),
            a = t.filter = function(e, t) {
                var n = [],
                    r = ["none", "block"];
                (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]) && (r = r.reverse());
                for (var o = e.length - 1; o >= 0; o--) {
                    -1 !== e[o].textContent.toLowerCase().indexOf(t.toLowerCase()) ? (e[o].style.display = r[0], n.push(e[o])) : e[o].style.display = r[1]
                }
                return n
            },
            s = t.optionFields = ["select", "checkbox-group", "checkbox", "radio-group", "autocomplete"],
            l = t.optionFieldsRegEx = new RegExp("(" + s.join("|") + ")"),
            u = function() {
                function e(t) {
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.optionFields = s, this.optionFieldsRegEx = l, this.subtypes = o, this.empty = i, this.filter = a, r[t] = this, r[t]
                }
                return e.prototype.onRender = function(e, t) {
                    var n = this;
                    e.parentElement ? t(e) : window.requestAnimationFrame(function() {
                        return n.onRender(e, t)
                    })
                }, e
            }();
        t.default = u
    }, function(t, n, r) {
        n.__esModule = !0;
        var o = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(r(0));
        var a = function(t) {
            function n() {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, t.apply(this, arguments))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(n, t), n.prototype.build = function() {
                var e = this.config.name;
                e = this.config.multiple ? e + "[]" : e;
                var t = Object.assign({}, this.config, {
                    name: e
                });
                return this.dom = this.markup("input", null, t), this.dom
            }, n.prototype.onRender = function() {
                this.config.userData && e(this.dom).val(this.config.userData[0])
            }, o(n, null, [{
                key: "definition",
                get: function() {
                    return {
                        mi18n: {
                            date: "dateField",
                            file: "fileUpload"
                        }
                    }
                }
            }]), n
        }(i.default);
        n.default = a, i.default.register(["text", "file", "date", "number"], a), i.default.register(["text", "password", "email", "color", "tel"], a, "text")
    }, function(e, t) {
        e.exports = function(e) {
            var t = "undefined" != typeof window && window.location;
            if (!t) throw new Error("fixUrls requires window.location");
            if (!e || "string" != typeof e) return e;
            var n = t.protocol + "//" + t.host,
                r = n + t.pathname.replace(/\/[^\/]*$/, "/");
            return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(e, t) {
                var o, i = t.trim().replace(/^"(.*)"$/, function(e, t) {
                    return t
                }).replace(/^'(.*)'$/, function(e, t) {
                    return t
                });
                return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? e : (o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : r + i.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")")
            })
        }
    }, function(e, t, n) {
        var r = {},
            o = function(e) {
                var t;
                return function() {
                    return void 0 === t && (t = e.apply(this, arguments)), t
                }
            }(function() {
                return window && document && document.all && !window.atob
            }),
            i = function(e) {
                var t = {};
                return function(e) {
                    if ("function" == typeof e) return e();
                    if (void 0 === t[e]) {
                        var n = function(e) {
                            return document.querySelector(e)
                        }.call(this, e);
                        if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                            n = n.contentDocument.head
                        } catch (e) {
                            n = null
                        }
                        t[e] = n
                    }
                    return t[e]
                }
            }(),
            a = null,
            s = 0,
            l = [],
            u = n(7);

        function c(e, t) {
            for (var n = 0; n < e.length; n++) {
                var o = e[n],
                    i = r[o.id];
                if (i) {
                    i.refs++;
                    for (var a = 0; a < i.parts.length; a++) i.parts[a](o.parts[a]);
                    for (; a < o.parts.length; a++) i.parts.push(b(o.parts[a], t))
                } else {
                    var s = [];
                    for (a = 0; a < o.parts.length; a++) s.push(b(o.parts[a], t));
                    r[o.id] = {
                        id: o.id,
                        refs: 1,
                        parts: s
                    }
                }
            }
        }

        function f(e, t) {
            for (var n = [], r = {}, o = 0; o < e.length; o++) {
                var i = e[o],
                    a = t.base ? i[0] + t.base : i[0],
                    s = {
                        css: i[1],
                        media: i[2],
                        sourceMap: i[3]
                    };
                r[a] ? r[a].parts.push(s) : n.push(r[a] = {
                    id: a,
                    parts: [s]
                })
            }
            return n
        }

        function d(e, t) {
            var n = i(e.insertInto);
            if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            var r = l[l.length - 1];
            if ("top" === e.insertAt) r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), l.push(t);
            else if ("bottom" === e.insertAt) n.appendChild(t);
            else {
                if ("object" != typeof e.insertAt || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                var o = i(e.insertInto + " " + e.insertAt.before);
                n.insertBefore(t, o)
            }
        }

        function p(e) {
            if (null === e.parentNode) return !1;
            e.parentNode.removeChild(e);
            var t = l.indexOf(e);
            t >= 0 && l.splice(t, 1)
        }

        function h(e) {
            var t = document.createElement("style");
            return void 0 === e.attrs.type && (e.attrs.type = "text/css"), m(t, e.attrs), d(e, t), t
        }

        function m(e, t) {
            Object.keys(t).forEach(function(n) {
                e.setAttribute(n, t[n])
            })
        }

        function b(e, t) {
            var n, r, o, i;
            if (t.transform && e.css) {
                if (!(i = t.transform(e.css))) return function() {};
                e.css = i
            }
            if (t.singleton) {
                var l = s++;
                n = a || (a = h(t)), r = g.bind(null, n, l, !1), o = g.bind(null, n, l, !0)
            } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function(e) {
                var t = document.createElement("link");
                return void 0 === e.attrs.type && (e.attrs.type = "text/css"), e.attrs.rel = "stylesheet", m(t, e.attrs), d(e, t), t
            }(t), r = function(e, t, n) {
                var r = n.css,
                    o = n.sourceMap,
                    i = void 0 === t.convertToAbsoluteUrls && o;
                (t.convertToAbsoluteUrls || i) && (r = u(r));
                o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
                var a = new Blob([r], {
                        type: "text/css"
                    }),
                    s = e.href;
                e.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s)
            }.bind(null, n, t), o = function() {
                p(n), n.href && URL.revokeObjectURL(n.href)
            }) : (n = h(t), r = function(e, t) {
                var n = t.css,
                    r = t.media;
                r && e.setAttribute("media", r);
                if (e.styleSheet) e.styleSheet.cssText = n;
                else {
                    for (; e.firstChild;) e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(n))
                }
            }.bind(null, n), o = function() {
                p(n)
            });
            return r(e),
                function(t) {
                    if (t) {
                        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                        r(e = t)
                    } else o()
                }
        }
        e.exports = function(e, t) {
            if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
            (t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || "boolean" == typeof t.singleton || (t.singleton = o()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
            var n = f(e, t);
            return c(n, t),
                function(e) {
                    for (var o = [], i = 0; i < n.length; i++) {
                        var a = n[i];
                        (s = r[a.id]).refs--, o.push(s)
                    }
                    e && c(f(e, t), t);
                    for (i = 0; i < o.length; i++) {
                        var s;
                        if (0 === (s = o[i]).refs) {
                            for (var l = 0; l < s.parts.length; l++) s.parts[l]();
                            delete r[s.id]
                        }
                    }
                }
        };
        var y = function() {
            var e = [];
            return function(t, n) {
                return e[t] = n, e.filter(Boolean).join("\n")
            }
        }();

        function g(e, t, n, r) {
            var o = n ? "" : r.css;
            if (e.styleSheet) e.styleSheet.cssText = y(t, o);
            else {
                var i = document.createTextNode(o),
                    a = e.childNodes;
                a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i)
            }
        }
    }, function(e, t) {
        e.exports = function(e) {
            var t = [];
            return t.toString = function() {
                return this.map(function(t) {
                    var n = function(e, t) {
                        var n = e[1] || "",
                            r = e[3];
                        if (!r) return n;
                        if (t && "function" == typeof btoa) {
                            var o = function(e) {
                                    return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */"
                                }(r),
                                i = r.sources.map(function(e) {
                                    return "/*# sourceURL=" + r.sourceRoot + e + " */"
                                });
                            return [n].concat(i).concat([o]).join("\n")
                        }
                        return [n].join("\n")
                    }(t, e);
                    return t[2] ? "@media " + t[2] + "{" + n + "}" : n
                }).join("")
            }, t.i = function(e, n) {
                "string" == typeof e && (e = [
                    [null, e, ""]
                ]);
                for (var r = {}, o = 0; o < this.length; o++) {
                    var i = this[o][0];
                    "number" == typeof i && (r[i] = !0)
                }
                for (o = 0; o < e.length; o++) {
                    var a = e[o];
                    "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), t.push(a))
                }
            }, t
        }
    }, function(e, t, n) {
        t.__esModule = !0, t.config = t.defaultI18n = t.styles = t.defaultOptions = void 0,
            function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n(2)).default.addLanguage("en-US", {
                NATIVE_NAME: "English (US)",
                ENGLISH_NAME: "English",
                addOption: "Add Option +",
                allFieldsRemoved: "All fields were removed.",
                allowMultipleFiles: "Allow users to upload multiple files",
                autocomplete: "Autocomplete",
                button: "Button",
                cannotBeEmpty: "This field cannot be empty",
                checkboxGroup: "Checkbox Group",
                checkbox: "Checkbox",
                checkboxes: "Checkboxes",
                className: "Class",
                clearAllMessage: "Are you sure you want to clear all fields?",
                clear: "Clear",
                close: "Close",
                content: "Content",
                copy: "Copy To Clipboard",
                copyButton: "&#43;",
                copyButtonTooltip: "Copy",
                dateField: "Date Field",
                description: "Help Text",
                descriptionField: "Description",
                devMode: "Developer Mode",
                editNames: "Edit Names",
                editorTitle: "Form Elements",
                editXML: "Edit XML",
                enableOther: "Enable &quot;Other&quot;",
                enableOtherMsg: "Let users to enter an unlisted option",
                fieldDeleteWarning: "false",
                fieldVars: "Field Variables",
                fieldNonEditable: "This field cannot be edited.",
                fieldRemoveWarning: "Are you sure you want to remove this field?",
                fileUpload: "File Upload",
                formUpdated: "Form Updated",
                getStarted: "Drag a field from the right to this area",
                header: "Header",
                hide: "Edit",
                hidden: "Hidden Input",
                inline: "Inline",
                inlineDesc: "Display {type} inline",
                label: "Label",
                labelEmpty: "Field Label cannot be empty",
                limitRole: "Limit access to one or more of the following roles:",
                mandatory: "Mandatory",
                maxlength: "Max Length",
                minOptionMessage: "This field requires a minimum of 2 options",
                minSelectionRequired: "Minimum {min} selections required",
                multipleFiles: "Multiple Files",
                name: "Name",
                no: "No",
                noFieldsToClear: "There are no fields to clear",
                number: "Number",
                off: "Off",
                on: "On",
                option: "Option",
                optionCount: "Option {count}",
                options: "Options",
                optional: "optional",
                optionLabelPlaceholder: "Label",
                optionValuePlaceholder: "Value",
                optionEmpty: "Option value required",
                other: "Other",
                paragraph: "Paragraph",
                placeholder: "Placeholder",
                "placeholders.value": "Value",
                "placeholders.label": "Label",
                "placeholders.email": "Enter you email",
                "placeholders.className": "space separated classes",
                "placeholders.password": "Enter your password",
                preview: "Preview",
                radioGroup: "Radio Group",
                radio: "Radio",
                removeMessage: "Remove Element",
                removeOption: "Remove Option",
                remove: "&#215;",
                required: "Required",
                requireValidOption: "Only accept a pre-defined Option",
                richText: "Rich Text Editor",
                roles: "Access",
                rows: "Rows",
                save: "Save",
                selectOptions: "Options",
                select: "Select",
                selectColor: "Select Color",
                selectionsMessage: "Allow Multiple Selections",
                size: "Size",
                "size.xs": "Extra Small",
                "size.sm": "Small",
                "size.m": "Default",
                "size.lg": "Large",
                style: "Style",
                "styles.btn.default": "Default",
                "styles.btn.danger": "Danger",
                "styles.btn.info": "Info",
                "styles.btn.primary": "Primary",
                "styles.btn.success": "Success",
                "styles.btn.warning": "Warning",
                subtype: "Type",
                text: "Text Field",
                textArea: "Text Area",
                toggle: "Toggle",
                warning: "Warning!",
                value: "Value",
                viewJSON: "[{&hellip;}]",
                viewXML: "&lt;/&gt;",
                yes: "Yes"
            });
        t.defaultOptions = {
            actionButtons: [],
            allowStageSort: !0,
            append: !1,
            controlOrder: ["autocomplete", "button", "checkbox-group", "checkbox", "date", "file", "header", "hidden", "number", "paragraph", "radio-group", "select", "text", "textarea"],
            controlPosition: "right",
            dataType: "json",
            defaultFields: [],
            disabledActionButtons: [],
            disabledAttrs: [],
            disabledFieldButtons: {},
            disabledSubtypes: {},
            disableFields: [],
            disableHTMLLabels: !1,
            disableInjectedStyle: !1,
            editOnAdd: !1,
            fields: [],
            fieldRemoveWarn: !1,
            fieldEditContainer: null,
            inputSets: [],
            notify: {
                error: console.error,
                success: console.log,
                warning: console.warn
            },
            onAddField: function(e, t) {
                return e
            },
            onClearAll: function() {
                return null
            },
            onCloseFieldEdit: function() {
                return null
            },
            onOpenFieldEdit: function() {
                return null
            },
            onSave: function(e, t) {
                return null
            },
            prepend: !1,
            replaceFields: [],
            roles: {
                1: "Administrator"
            },
            scrollToFieldOnAdd: !0,
            showActionButtons: !0,
            sortableControls: !1,
            stickyControls: {
                enable: !0,
                offset: {
                    top: 5,
                    bottom: "auto",
                    right: "auto"
                }
            },
            subtypes: {},
            templates: {},
            typeUserAttrs: {},
            typeUserDisabledAttrs: {},
            typeUserEvents: {}
        }, t.styles = {
            btn: ["default", "danger", "info", "primary", "success", "warning"]
        }, t.defaultI18n = {
            location: "https://formbuilder.online/assets/lang/"
        }, t.config = {}
    }, function(e, t, n) {
        function r(e) {
            var t = void 0;
            return "function" == typeof Event ? t = new Event(e) : (t = document.createEvent("Event")).initEvent(e, !0, !0), t
        }
        t.__esModule = !0;
        var o = {
            loaded: r("loaded"),
            viewData: r("viewData"),
            userDeclined: r("userDeclined"),
            modalClosed: r("modalClosed"),
            modalOpened: r("modalOpened"),
            formSaved: r("formSaved"),
            fieldAdded: r("fieldAdded"),
            fieldRemoved: r("fieldRemoved"),
            fieldRendered: r("fieldRendered"),
            fieldEditOpened: r("fieldEditOpened"),
            fieldEditClosed: r("fieldEditClosed")
        };
        t.default = o
    }, function(e, t, n) {
        t.__esModule = !0;
        var r = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(n(3));
        var o = function(e) {
            function t() {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, e.apply(this, arguments))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, e), t.prototype.configure = function() {
                this.js = "//cdn.quilljs.com/1.2.4/quill.js", this.css = "//cdn.quilljs.com/1.2.4/quill.snow.css"
            }, t.prototype.build = function() {
                var e = this.config,
                    t = (e.value, function(e, t) {
                        var n = {};
                        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                        return n
                    }(e, ["value"]));
                return this.field = this.markup("div", null, t), this.field
            }, t.prototype.onRender = function(e) {
                var t = this.config.value || "",
                    n = window.Quill.import("delta");
                window.fbEditors.quill[this.id] = {};
                var r = window.fbEditors.quill[this.id];
                r.instance = new window.Quill(this.field, {
                    modules: {
                        toolbar: [
                            [{
                                header: [1, 2, !1]
                            }],
                            ["bold", "italic", "underline"],
                            ["code-block"]
                        ]
                    },
                    placeholder: this.config.placeholder || "",
                    theme: "snow"
                }), r.data = new n, t && r.instance.setContents(window.JSON.parse(this.parsedHtml(t))), r.instance.on("text-change", function(e) {
                    r.data = r.data.compose(e)
                })
            }, t
        }(r.default);
        t.default = o, r.default.register("quill", o, "textarea")
    }, function(e, t, n) {
        t.__esModule = !0;
        var r = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(n(3));
        var o = function(e) {
            function t() {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, e.apply(this, arguments))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, e), t.prototype.configure = function() {
                if (this.js = ["https://cdn.tinymce.com/4/tinymce.min.js"], this.classConfig.js) {
                    var e = this.classConfig.js;
                    Array.isArray(e) || (e = new Array(e)), this.js.concat(e), delete this.classConfig.js
                }
                this.classConfig.css && (this.css = this.classConfig.css), this.editorOptions = {
                    height: 250,
                    paste_data_images: !0,
                    plugins: ["advlist autolink lists link image charmap print preview anchor", "searchreplace visualblocks code fullscreen", "insertdatetime media table contextmenu paste code"],
                    toolbar: "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | table"
                }
            }, t.prototype.build = function() {
                var e = this.config,
                    t = e.value,
                    n = void 0 === t ? "" : t,
                    r = function(e, t) {
                        var n = {};
                        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                        return n
                    }(e, ["value"]);
                return this.field = this.markup("textarea", this.parsedHtml(n), r), r.disabled && (this.editorOptions.readonly = !0), this.field
            }, t.prototype.onRender = function(e) {
                window.tinymce.editors[this.id] && window.tinymce.editors[this.id].remove();
                var t = jQuery.extend(this.editorOptions, this.classConfig);
                t.target = this.field, window.tinymce.init(t), this.config.userData && window.tinymce.editors[this.id].setContent(this.parsedHtml(this.config.userData[0]))
            }, t
        }(r.default);
        t.default = o, r.default.register("tinymce", o, "textarea")
    }, function(t, n, r) {
        n.__esModule = !0;
        var o = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(r(6));
        var a = function(t) {
            function n() {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, t.apply(this, arguments))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(n, t), n.prototype.configure = function() {
                var t = this;
                this.js = this.classConfig.js || "//cdnjs.cloudflare.com/ajax/libs/file-uploader/5.14.2/jquery.fine-uploader/jquery.fine-uploader.min.js", this.css = [this.classConfig.css || "//cdnjs.cloudflare.com/ajax/libs/file-uploader/5.14.2/jquery.fine-uploader/fine-uploader-gallery.min.css", {
                    type: "inline",
                    id: "fineuploader-inline",
                    style: "\n          .qq-uploader .qq-error-message {\n            position: absolute;\n            left: 20%;\n            top: 20px;\n            width: 60%;\n            color: #a94442;\n            background: #f2dede;\n            border: solid 1px #ebccd1;\n            padding: 15px;\n            line-height: 1.5em;\n            text-align: center;\n            z-index: 99999;\n          }\n          .qq-uploader .qq-error-message span {\n            display: inline-block;\n            text-align: left;\n          }"
                }], this.handler = this.classConfig.handler || "/upload", ["js", "css", "handler"].forEach(function(e) {
                    return delete t.classConfig[e]
                });
                var n = this.classConfig.template || '\n      <div class="qq-uploader-selector qq-uploader qq-gallery" qq-drop-area-text="Drop files here">\n        <div class="qq-total-progress-bar-container-selector qq-total-progress-bar-container">\n          <div role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" class="qq-total-progress-bar-selector qq-progress-bar qq-total-progress-bar"></div>\n        </div>\n        <div class="qq-upload-drop-area-selector qq-upload-drop-area" qq-hide-dropzone>\n          <span class="qq-upload-drop-area-text-selector"></span>\n        </div>\n        <div class="qq-upload-button-selector qq-upload-button">\n          <div>Upload a file</div>\n        </div>\n        <span class="qq-drop-processing-selector qq-drop-processing">\n          <span>Processing dropped files...</span>\n          <span class="qq-drop-processing-spinner-selector qq-drop-processing-spinner"></span>\n        </span>\n        <ul class="qq-upload-list-selector qq-upload-list" role="region" aria-live="polite" aria-relevant="additions removals">\n          <li>\n            <span role="status" class="qq-upload-status-text-selector qq-upload-status-text"></span>\n            <div class="qq-progress-bar-container-selector qq-progress-bar-container">\n              <div role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" class="qq-progress-bar-selector qq-progress-bar"></div>\n            </div>\n            <span class="qq-upload-spinner-selector qq-upload-spinner"></span>\n            <div class="qq-thumbnail-wrapper">\n              <img class="qq-thumbnail-selector" qq-max-size="120" qq-server-scale>\n            </div>\n            <button type="button" class="qq-upload-cancel-selector qq-upload-cancel">X</button>\n            <button type="button" class="qq-upload-retry-selector qq-upload-retry">\n              <span class="qq-btn qq-retry-icon" aria-label="Retry"></span>\n              Retry\n            </button>\n            <div class="qq-file-info">\n              <div class="qq-file-name">\n                <span class="qq-upload-file-selector qq-upload-file"></span>\n                <span class="qq-edit-filename-icon-selector qq-btn qq-edit-filename-icon" aria-label="Edit filename"></span>\n              </div>\n              <input class="qq-edit-filename-selector qq-edit-filename" tabindex="0" type="text">\n              <span class="qq-upload-size-selector qq-upload-size"></span>\n              <button type="button" class="qq-btn qq-upload-delete-selector qq-upload-delete">\n                <span class="qq-btn qq-delete-icon" aria-label="Delete"></span>\n              </button>\n              <button type="button" class="qq-btn qq-upload-pause-selector qq-upload-pause">\n                <span class="qq-btn qq-pause-icon" aria-label="Pause"></span>\n              </button>\n              <button type="button" class="qq-btn qq-upload-continue-selector qq-upload-continue">\n                <span class="qq-btn qq-continue-icon" aria-label="Continue"></span>\n              </button>\n            </div>\n          </li>\n        </ul>\n        <dialog class="qq-alert-dialog-selector">\n          <div class="qq-dialog-message-selector"></div>\n          <div class="qq-dialog-buttons">\n            <button type="button" class="qq-cancel-button-selector">Close</button>\n          </div>\n        </dialog>\n        <dialog class="qq-confirm-dialog-selector">\n          <div class="qq-dialog-message-selector"></div>\n          <div class="qq-dialog-buttons">\n            <button type="button" class="qq-cancel-button-selector">No</button>\n            <button type="button" class="qq-ok-button-selector">Yes</button>\n          </div>\n        </dialog>\n        <dialog class="qq-prompt-dialog-selector">\n          <div class="qq-dialog-message-selector"></div>\n          <input type="text">\n          <div class="qq-dialog-buttons">\n            <button type="button" class="qq-cancel-button-selector">Cancel</button>\n            <button type="button" class="qq-ok-button-selector">Ok</button>\n          </div>\n        </dialog>\n      </div>';
                this.fineTemplate = e("<div/>").attr("id", "qq-template").html(n)
            }, n.prototype.build = function() {
                return this.input = this.markup("input", null, {
                    type: "hidden",
                    name: this.config.name,
                    id: this.config.name
                }), this.wrapper = this.markup("div", "", {
                    id: this.config.name + "-wrapper"
                }), [this.input, this.wrapper]
            }, n.prototype.onRender = function() {
                var t = e(this.wrapper),
                    n = e(this.input),
                    r = jQuery.extend(!0, {
                        request: {
                            endpoint: this.handler
                        },
                        deleteFile: {
                            enabled: !0,
                            endpoint: this.handler
                        },
                        chunking: {
                            enabled: !0,
                            concurrent: {
                                enabled: !0
                            },
                            success: {
                                endpoint: this.handler + (-1 == this.handler.indexOf("?") ? "?" : "&") + "done"
                            }
                        },
                        resume: {
                            enabled: !0
                        },
                        retry: {
                            enableAuto: !0,
                            showButton: !0
                        },
                        callbacks: {
                            onError: function(n, r, o, i) {
                                "." != o.slice(-1) && (o += ".");
                                var a = e("<div />").addClass("qq-error-message").html("<span>Error processing upload: <b>" + r + "</b>.<br />Reason: " + o + "</span>").prependTo(t.find(".qq-uploader"));
                                setTimeout(function() {
                                    a.fadeOut(function() {
                                        a.remove()
                                    })
                                }, 6e3)
                            },
                            onStatusChange: function(e, r, o) {
                                var i = [],
                                    a = t.fineUploader("getUploads"),
                                    s = Array.isArray(a),
                                    l = 0;
                                for (a = s ? a : a[Symbol.iterator]();;) {
                                    var u;
                                    if (s) {
                                        if (l >= a.length) break;
                                        u = a[l++]
                                    } else {
                                        if ((l = a.next()).done) break;
                                        u = l.value
                                    }
                                    var c = u;
                                    "upload successful" == c.status && i.push(c.name)
                                }
                                n.val(i.join(", "))
                            }
                        },
                        template: this.fineTemplate
                    }, this.classConfig);
                t.fineUploader(r)
            }, o(n, null, [{
                key: "definition",
                get: function() {
                    return {
                        i18n: {
                            default: "Fine Uploader"
                        }
                    }
                }
            }]), n
        }(i.default);
        n.default = a, i.default.register("file", i.default, "file"), i.default.register("fineuploader", a, "file")
    }, function(t, n, r) {
        n.__esModule = !0;
        var o = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(r(0));

        function a(e, t) {
            var n = {};
            for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
            return n
        }
        var s = function(t) {
            function n() {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, t.apply(this, arguments))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(n, t), n.prototype.build = function() {
                var e = [],
                    t = this.config,
                    n = t.values,
                    r = t.value,
                    o = t.placeholder,
                    i = t.type,
                    s = t.inline,
                    l = t.other,
                    u = t.toggle,
                    c = a(t, ["values", "value", "placeholder", "type", "inline", "other", "toggle"]),
                    f = i.replace("-group", ""),
                    d = "select" === i;
                if ((c.multiple || "checkbox-group" === i) && (c.name = c.name + "[]"), "checkbox-group" === i && c.required && (this.onRender = this.groupRequired), delete c.title, n) {
                    o && d && e.push(this.markup("option", o, {
                        disabled: null,
                        selected: null
                    }));
                    for (var p = 0; p < n.length; p++) {
                        var h = n[p];
                        "string" == typeof h && (h = {
                            label: h,
                            value: h
                        });
                        var m = h,
                            b = m.label,
                            y = void 0 === b ? "" : b;
                        if ((k = a(m, ["label"])).id = c.id + "-" + p, k.selected && !o || delete k.selected, void 0 !== r && k.value === r && (k.selected = !0), d) {
                            var g = this.markup("option", document.createTextNode(y), k);
                            e.push(g)
                        } else {
                            var v = [y],
                                w = "fb-" + f;
                            s && (w += "-inline"), k.type = f, k.selected && (k.checked = "checked", delete k.selected);
                            var x = this.markup("input", null, Object.assign({}, c, k)),
                                q = {
                                    for: k.id
                                },
                                O = [x, this.markup("label", v, q)];
                            u && (q.className = "kc-toggle", v.unshift(x, this.markup("span")), O = this.markup("label", v, q));
                            var j = this.markup("div", O, {
                                className: w
                            });
                            e.push(j)
                        }
                    }
                    if (!d && l) {
                        var k, C = {
                                id: c.id + "-other",
                                className: c.className + " other-option",
                                value: ""
                            },
                            S = "fb-" + f;
                        s && (S += "-inline"), (k = Object.assign({}, c, C)).type = f;
                        var E = {
                                type: "text",
                                events: {
                                    input: function(e) {
                                        var t = e.target;
                                        t.parentElement.previousElementSibling.value = t.value
                                    }
                                },
                                id: C.id + "-value",
                                className: "other-val"
                            },
                            A = this.markup("input", null, k),
                            T = [document.createTextNode("Other"), this.markup("input", null, E)],
                            _ = this.markup("label", T, {
                                for: k.id
                            }),
                            R = this.markup("div", [A, _], {
                                className: S
                            });
                        e.push(R)
                    }
                }
                return this.dom = "select" == i ? this.markup(f, e, c) : this.markup("div", e, {
                    className: i
                }), this.dom
            }, n.prototype.groupRequired = function() {
                for (var e = this.element.getElementsByTagName("input"), t = function(e, t) {
                        [].forEach.call(e, function(e) {
                            t ? e.removeAttribute("required") : e.setAttribute("required", "required"),
                                function(e, t) {
                                    var n = i.default.mi18n("minSelectionRequired", 1);
                                    t ? e.setCustomValidity("") : e.setCustomValidity(n)
                                }(e, t)
                        })
                    }, n = function() {
                        var n = [].some.call(e, function(e) {
                            return e.checked
                        });
                        t(e, n)
                    }, r = e.length - 1; r >= 0; r--) e[r].addEventListener("change", n);
                n()
            }, n.prototype.onRender = function() {
                if (this.config.userData) {
                    var t = this.config.userData.slice();
                    "select" === this.config.type ? e(this.dom).val(t).prop("selected", !0) : this.config.type.endsWith("-group") && this.dom.querySelectorAll("input").forEach(function(e) {
                        if (!e.classList.contains("other-val")) {
                            for (var n = 0; n < t.length; n++)
                                if (e.value === t[n]) {
                                    e.setAttribute("checked", !0), t.splice(n, 1);
                                    break
                                }
                            if (e.id.endsWith("-other")) {
                                var r = document.getElementById(e.id + "-value");
                                if (0 === t.length) return;
                                e.setAttribute("checked", !0), r.value = e.value = t[0], r.style.display = "inline-block"
                            }
                        }
                    })
                }
            }, o(n, null, [{
                key: "definition",
                get: function() {
                    return {
                        inactive: ["checkbox"],
                        mi18n: {
                            minSelectionRequired: "minSelectionRequired"
                        }
                    }
                }
            }]), n
        }(i.default);
        n.default = s, i.default.register(["select", "checkbox-group", "radio-group", "checkbox"], s)
    }, function(e, t, n) {
        t.__esModule = !0;
        var r = i(n(0)),
            o = i(n(1));

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var a = function(e) {
            function t() {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, e.apply(this, arguments))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, e), t.prototype.build = function() {
                var e = this.config,
                    t = e.type,
                    n = function(e, t) {
                        var n = {};
                        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                        return n
                    }(e, ["type"]),
                    r = t,
                    i = {
                        paragraph: "p",
                        header: this.subtype
                    };
                return i[t] && (r = i[t]), {
                    field: this.markup(r, o.default.parsedHtml(this.label), n),
                    layout: "noLabel"
                }
            }, t
        }(r.default);
        t.default = a, r.default.register(["paragraph", "header"], a), r.default.register(["p", "address", "blockquote", "canvas", "output"], a, "paragraph"), r.default.register(["h1", "h2", "h3", "h4"], a, "header")
    }, function(t, n, r) {
        n.__esModule = !0;
        var o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(r(0));
        var i = function(t) {
            function n() {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, t.apply(this, arguments))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(n, t), n.prototype.build = function() {
                return {
                    field: this.markup("input", null, this.config),
                    layout: "hidden"
                }
            }, n.prototype.onRender = function() {
                this.config.userData && e("#" + this.config.name).val(this.config.userData[0])
            }, n
        }(o.default);
        n.default = i, o.default.register("hidden", i)
    }, function(e, t, n) {
        t.__esModule = !0;
        var r = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(n(0));
        var o = function(e) {
            function t() {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, e.apply(this, arguments))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, e), t.prototype.build = function() {
                return {
                    field: this.markup("button", this.label, this.config),
                    layout: "noLabel"
                }
            }, t
        }(r.default);
        t.default = o, r.default.register("button", o), r.default.register(["button", "submit", "reset"], o, "button")
    }, function(t, n, r) {
        n.__esModule = !0;
        var o = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(r(0)),
            a = r(5);
        var s = function(t) {
            function n() {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, t.apply(this, arguments))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(n, t), n.prototype.build = function() {
                var e = this,
                    t = this.config,
                    n = t.values,
                    r = t.type,
                    o = function(e, t) {
                        var n = {};
                        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                        return n
                    }(t, ["values", "type"]),
                    i = function(t) {
                        var n = t.target.nextSibling.nextSibling,
                            r = t.target.nextSibling,
                            o = e.getActiveOption(n),
                            i = new Map([
                                [38, function() {
                                    var t = e.getPreviousOption(o);
                                    t && e.selectOption(n, t)
                                }],
                                [40, function() {
                                    var t = e.getNextOption(o);
                                    t && e.selectOption(n, t)
                                }],
                                [13, function() {
                                    o ? (t.target.value = o.innerHTML, r.value = o.getAttribute("value"), "none" === n.style.display ? e.showList(n, o) : e.hideList(n)) : e.config.requireValidOption && (e.isOptionValid(n, t.target.value) || (t.target.value = "", t.target.nextSibling.value = "")), t.preventDefault()
                                }],
                                [27, function() {
                                    e.hideList(n)
                                }]
                            ]).get(t.keyCode);
                        return i || (i = function() {
                            return !1
                        }), i()
                    },
                    s = {
                        focus: function(t) {
                            var n = t.target.nextSibling.nextSibling,
                                r = (0, a.filter)(n.querySelectorAll("li"), t.target.value);
                            if (t.target.addEventListener("keydown", i), t.target.value.length > 0) {
                                var o = r.length > 0 ? r[r.length - 1] : null;
                                e.showList(n, o)
                            }
                        },
                        blur: function(t) {
                            if (t.target.removeEventListener("keydown", i), setTimeout(function() {
                                    t.target.nextSibling.nextSibling.style.display = "none"
                                }, 200), e.config.requireValidOption) {
                                var n = t.target.nextSibling.nextSibling;
                                e.isOptionValid(n, t.target.value) || (t.target.value = "", t.target.nextSibling.value = "")
                            }
                        },
                        input: function(t) {
                            var n = t.target.nextSibling.nextSibling;
                            t.target.nextSibling.value = t.target.value;
                            var r = (0, a.filter)(n.querySelectorAll("li"), t.target.value);
                            if (0 == r.length) e.hideList(n);
                            else {
                                var o = e.getActiveOption(n);
                                o || (o = r[r.length - 1]), e.showList(n, o)
                            }
                        }
                    },
                    l = Object.assign({}, o, {
                        id: o.id + "-input",
                        autocomplete: "off",
                        events: s
                    }),
                    u = Object.assign({}, o, {
                        type: "hidden"
                    });
                delete l.name;
                var c = [this.markup("input", null, l), this.markup("input", null, u)],
                    f = n.map(function(t) {
                        var n = t.label,
                            r = {
                                events: {
                                    click: function(n) {
                                        var r = n.target.parentElement,
                                            o = r.previousSibling.previousSibling;
                                        o.value = t.label, o.nextSibling.value = t.value, e.hideList(r)
                                    }
                                },
                                value: t.value
                            };
                        return e.markup("li", n, r)
                    });
                return c.push(this.markup("ul", f, {
                    id: o.id + "-list",
                    className: "fb-" + r + "-list"
                })), c
            }, n.prototype.hideList = function(e) {
                this.selectOption(e, null), e.style.display = "none"
            }, n.prototype.showList = function(e, t) {
                this.selectOption(e, t), e.style.display = "block", e.style.width = e.parentElement.offsetWidth + "px"
            }, n.prototype.getActiveOption = function(e) {
                var t = e.getElementsByClassName("active-option")[0];
                return t && "none" !== t.style.display ? t : null
            }, n.prototype.getPreviousOption = function(e) {
                var t = e;
                do {
                    t = t ? t.previousSibling : null
                } while (null != t && "none" === t.style.display);
                return t
            }, n.prototype.getNextOption = function(e) {
                var t = e;
                do {
                    t = t ? t.nextSibling : null
                } while (null != t && "none" === t.style.display);
                return t
            }, n.prototype.selectOption = function(e, t) {
                for (var n = e.querySelectorAll("li"), r = 0; r < n.length; r++) n[r].classList.remove("active-option");
                t && t.classList.add("active-option")
            }, n.prototype.isOptionValid = function(e, t) {
                for (var n = e.querySelectorAll("li"), r = !1, o = 0; o < n.length; o++)
                    if (n[o].innerHTML === t) {
                        r = !0;
                        break
                    }
                return r
            }, n.prototype.onRender = function(t) {
                if (this.config.userData) {
                    var n = e("#" + this.config.name),
                        r = n.next(),
                        o = this.config.userData[0],
                        i = null;
                    if (r.find("li").each(function() {
                            e(this).attr("value") !== o || (i = e(this).get(0))
                        }), null === i) return this.config.requireValidOption ? void 0 : void n.prev().val(this.config.userData[0]);
                    n.prev().val(i.innerHTML), n.val(i.getAttribute("value"));
                    var a = n.next().get(0);
                    "none" === a.style.display ? this.showList(a, i) : this.hideList(a)
                }
            }, o(n, null, [{
                key: "definition",
                get: function() {
                    return {
                        mi18n: {
                            requireValidOption: "requireValidOption"
                        }
                    }
                }
            }]), n
        }(i.default);
        n.default = s, i.default.register("autocomplete", s)
    }, function(e, t, n) {
        t.__esModule = !0;
        var r = h(n(19)),
            o = h(n(18)),
            i = h(n(4)),
            a = h(n(17)),
            s = h(n(16)),
            l = h(n(15)),
            u = h(n(6)),
            c = h(n(14)),
            f = h(n(3)),
            d = h(n(13)),
            p = h(n(12));

        function h(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.default = {
            controlAutocomplete: r.default,
            controlButton: o.default,
            controlCustom: i.default,
            controlHidden: a.default,
            controlParagraph: s.default,
            controlSelect: l.default,
            controlText: u.default,
            controlFineUploader: c.default,
            controlTextarea: f.default,
            controlTinymce: d.default,
            controlQuill: p.default
        }
    }, function(e, t, n) {
        t.__esModule = !0;
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            o = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n(1));
        var i = function() {
            function e(t, n) {
                var r = this;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.preview = n, this.templates = {
                    label: null,
                    help: null,
                    default: function(e, t, n, o) {
                        n && t.appendChild(n);
                        var i = o.id ? "fb-" + o.type + " form-group field-" + o.id : "";
                        if (o.className) {
                            var a = o.className.split(" ").filter(function(e) {
                                return /^col-(xs|sm|md|lg)-([^\s]+)/.test(e) || e.startsWith("row-")
                            });
                            if (a && a.length > 0) {
                                i += " " + a.join(" ");
                                for (var s = 0; s < a.length; s++) {
                                    var l = a[s];
                                    e.classList.remove(l)
                                }
                            }
                        }
                        return r.markup("div", [t, e], {
                            className: i
                        })
                    },
                    noLabel: function(e, t, n, o) {
                        var i = o.id ? "fb-" + o.type + " form-group field-" + o.id : "";
                        return r.markup("div", e, {
                            className: i
                        })
                    },
                    hidden: function(e, t, n, r) {
                        return e
                    }
                }, t && (this.templates = jQuery.extend(this.templates, t)), this.configure()
            }
            return e.prototype.configure = function() {}, e.prototype.build = function(e, t, n) {
                this.preview && (t.name ? t.name = t.name + "-preview" : t.name = o.default.nameAttr(t) + "-preview"), t.id = t.name, this.data = jQuery.extend({}, t);
                var i = new e(t, this.preview),
                    a = i.build();
                "object" === (void 0 === a ? "undefined" : r(a)) && a.field || (a = {
                    field: a
                });
                var s = this.label(),
                    l = this.help(),
                    u = void 0;
                u = n && this.isTemplate(n) ? n : this.isTemplate(a.layout) ? a.layout : "default";
                var c = this.processTemplate(u, a.field, s, l);
                return i.on("prerender")(c), c.addEventListener("fieldRendered", i.on("render")), c
            }, e.prototype.label = function() {
                var e = this.data.label || "",
                    t = [o.default.parsedHtml(e)];
                return this.data.required && t.push(this.markup("span", "*", {
                    className: "fb-required"
                })), this.isTemplate("label") ? this.processTemplate("label", t) : this.markup("label", t, {
                    for: this.data.id,
                    className: "fb-" + this.data.type + "-label"
                })
            }, e.prototype.help = function() {
                return this.data.description ? this.isTemplate("help") ? this.processTemplate("help", this.data.description) : this.markup("span", "?", {
                    className: "tooltip-element",
                    tooltip: this.data.description
                }) : null
            }, e.prototype.isTemplate = function(e) {
                return "function" == typeof this.templates[e]
            }, e.prototype.processTemplate = function(e) {
                for (var t, n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                var i = (t = this.templates)[e].apply(t, r.concat([this.data]));
                return i.jquery && (i = i[0]), i
            }, e.prototype.markup = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return o.default.markup(e, t, n)
            }, e
        }();
        t.default = i
    }, , , , , , , , , function(e, t, n) {
        (e.exports = n(9)(!1)).push([e.i, '.rendered-form *{box-sizing:border-box}.rendered-form input{line-height:normal}.rendered-form textarea{overflow:auto}.rendered-form button,.rendered-form input,.rendered-form select,.rendered-form textarea{font-family:inherit;font-size:inherit;line-height:inherit}.rendered-form .btn-group{position:relative;display:inline-block;vertical-align:middle}.rendered-form .btn-group>.btn{position:relative;float:left}.rendered-form .btn-group>.btn:first-child:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.rendered-form .btn-group>.btn:not(:first-child):not(:last-child):not(.dropdown-toggle){border-radius:0}.rendered-form .btn-group .btn+.btn,.rendered-form .btn-group .btn+.btn-group,.rendered-form .btn-group .btn-group+.btn,.rendered-form .btn-group .btn-group+.btn-group{margin-left:-1px}.rendered-form .btn-group .input-group-addon:last-child,.rendered-form .btn-group .input-group-btn:first-child>.btn-group:not(:first-child)>.btn,.rendered-form .btn-group .input-group-btn:first-child>.btn:not(:first-child),.rendered-form .btn-group .input-group-btn:last-child>.btn,.rendered-form .btn-group .input-group-btn:last-child>.btn-group>.btn,.rendered-form .btn-group .input-group-btn:last-child>.dropdown-toggle,.rendered-form .btn-group .input-group .form-control:last-child,.rendered-form .btn-group>.btn:last-child:not(:first-child),.rendered-form .btn-group>.dropdown-toggle:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.rendered-form .btn-group>.btn.active,.rendered-form .btn-group>.btn:active,.rendered-form .btn-group>.btn:focus,.rendered-form .btn-group>.btn:hover{z-index:2}.rendered-form .btn{display:inline-block;padding:6px 12px;margin-bottom:0;font-size:14px;font-weight:400;line-height:1.42857143;text-align:center;white-space:nowrap;vertical-align:middle;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-image:none;border-radius:4px}.rendered-form .btn.btn-lg{padding:10px 16px;font-size:18px;line-height:1.3333333;border-radius:6px}.rendered-form .btn.btn-sm{padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}.rendered-form .btn.btn-xs{padding:1px 5px;font-size:12px;line-height:1.5;border-radius:3px}.rendered-form .btn.active,.rendered-form .btn.btn-active,.rendered-form .btn:active{background-image:none}.rendered-form .input-group-addon:last-child,.rendered-form .input-group-btn:first-child>.btn-group:not(:first-child)>.btn,.rendered-form .input-group-btn:first-child>.btn:not(:first-child),.rendered-form .input-group-btn:last-child>.btn,.rendered-form .input-group-btn:last-child>.btn-group>.btn,.rendered-form .input-group-btn:last-child>.dropdown-toggle,.rendered-form .input-group .form-control:last-child{border-top-left-radius:0;border-bottom-left-radius:0}.rendered-form .input-group-addon,.rendered-form .input-group-btn,.rendered-form .input-group .form-control{display:table-cell}.rendered-form .input-group-lg>.form-control,.rendered-form .input-group-lg>.input-group-addon,.rendered-form .input-group-lg>.input-group-btn>.btn{height:46px;padding:10px 16px;font-size:18px;line-height:1.3333333}.rendered-form .input-group{position:relative;display:table;border-collapse:separate}.rendered-form .input-group .form-control{position:relative;z-index:2;float:left;width:100%;margin-bottom:0}.rendered-form .form-control,.rendered-form output{font-size:14px;line-height:1.42857143;display:block}.rendered-form textarea.form-control{height:auto}.rendered-form .form-control{height:34px;display:block;width:100%;padding:6px 12px;font-size:14px;line-height:1.42857143;border-radius:4px}.rendered-form .form-control:focus{outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)}.rendered-form .form-group{margin-left:0;margin-bottom:15px}.rendered-form .btn,.rendered-form .form-control{background-image:none}.rendered-form .pull-right{float:right}.rendered-form .pull-left{float:left}.rendered-form .fb-required,.rendered-form .required-asterisk{color:#c10000}.rendered-form .fb-checkbox-group input[type=checkbox],.rendered-form .fb-checkbox-group input[type=radio],.rendered-form .fb-radio-group input[type=checkbox],.rendered-form .fb-radio-group input[type=radio]{margin:0 4px 0 0}.rendered-form .fb-checkbox-inline,.rendered-form .fb-radio-inline{margin-right:8px;display:inline-block;vertical-align:middle;padding-left:0}.rendered-form .fb-checkbox-inline label input[type=text],.rendered-form .fb-radio-inline label input[type=text]{margin-top:0}.rendered-form .fb-checkbox-inline:first-child,.rendered-form .fb-radio-inline:first-child{padding-left:0}.rendered-form .fb-autocomplete-list{background-color:#fff;display:none;list-style:none;padding:0;border:1px solid #ccc;border-width:0 1px 1px;position:absolute;z-index:20;max-height:200px;overflow-y:auto}.rendered-form .fb-autocomplete-list li{display:none;cursor:default;padding:5px;margin:0;transition:background-color .2s ease-in-out}.rendered-form .fb-autocomplete-list li.active-option,.rendered-form .fb-autocomplete-list li:hover{background-color:rgba(0,0,0,.075)}.rendered-form .kc-toggle{padding-left:0!important}.rendered-form .kc-toggle span{position:relative;width:48px;height:24px;background:#e6e6e6;display:inline-block;border-radius:4px;border:1px solid #ccc;padding:2px;overflow:hidden;float:left;margin-right:5px;will-change:transform}.rendered-form .kc-toggle span:after,.rendered-form .kc-toggle span:before{position:absolute;display:inline-block;top:0}.rendered-form .kc-toggle span:after{position:relative;content:"";width:50%;height:100%;left:0;border-radius:3px;background:linear-gradient(180deg,#fff 0,#ccc);border:1px solid #999;transition:transform .1s;transform:translateX(0)}.rendered-form .kc-toggle span:before{border-radius:4px;top:2px;left:2px;content:"";width:calc(100% - 4px);height:18px;box-shadow:inset 0 0 1px 1px #b3b3b3;background-color:transparent}.rendered-form .kc-toggle input{height:0;overflow:hidden;width:0;opacity:0;pointer-events:none;margin:0}.rendered-form .kc-toggle input:checked+span:after{transform:translateX(100%)}.rendered-form .kc-toggle input:checked+span:before{background-color:#6fc665}.rendered-form label{font-weight:400}.form-group .fb-required{color:#c10000}.other-option:checked+label input{display:inline-block}.other-val{margin-left:5px;display:none}[tooltip]{position:relative}[tooltip]:hover:after{background:rgba(0,0,0,.9);border-radius:5px 5px 5px 0;bottom:23px;color:#fff;content:attr(tooltip);padding:10px 5px;position:absolute;z-index:98;left:2px;width:230px;text-shadow:none;font-size:12px;line-height:1.5em}[tooltip]:hover:before{border:solid;border-color:#222 transparent;border-width:6px 6px 0;bottom:17px;content:"";left:2px;position:absolute;z-index:99}.tooltip-element{color:#fff;background:#000;width:16px;height:16px;border-radius:8px;display:inline-block;text-align:center;line-height:16px;margin:0 5px;font-size:12px}.form-control.number{width:auto}.form-control[type=color]{width:60px;padding:2px;display:inline-block}.form-control[multiple]{height:auto}', ""])
    }, function(e, t, n) {
        var r = n(30);
        "string" == typeof r && (r = [
            [e.i, r, ""]
        ]);
        var o = {
            attrs: {
                class: "formBuilder-injected-style"
            },
            sourceMap: !1,
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(8)(r, o);
        r.locals && (e.exports = r.locals)
    }, function(t, n, r) {
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            i = function() {
                return function(e, t) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e)) return function(e, t) {
                        var n = [],
                            r = !0,
                            o = !1,
                            i = void 0;
                        try {
                            for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                        } catch (e) {
                            o = !0, i = e
                        } finally {
                            try {
                                !r && s.return && s.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        return n
                    }(e, t);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            a = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            s = m(r(2)),
            l = r(1),
            u = m(l),
            c = m(r(11)),
            f = m(r(21)),
            d = m(r(0));
        r(20);
        var p = m(r(4)),
            h = r(10);

        function m(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        r(31);
        var b = function() {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var n = {
                    layout: f.default,
                    layoutTemplates: {},
                    controls: {},
                    controlConfig: {},
                    container: !1,
                    dataType: "json",
                    formData: !1,
                    i18n: Object.assign({}, h.defaultI18n),
                    messages: {
                        formRendered: "Form Rendered",
                        noFormData: "No form data.",
                        other: "Other",
                        selectColor: "Select Color",
                        invalidControl: "Invalid control"
                    },
                    onRender: function() {},
                    render: !0,
                    templates: {},
                    notify: {
                        error: console.error,
                        success: console.log,
                        warning: console.warn
                    }
                };
                if (this.options = jQuery.extend(!0, n, e), this.instanceContainers = [], s.default.current || s.default.init(this.options.i18n), !this.options.formData) return !1;
                this.options.formData = this.parseFormData(this.options.formData), d.default.controlConfig = e.controlConfig || {}, d.default.loadCustom(e.controls), Object.keys(this.options.templates).length && p.default.register(this.options.templates), "function" != typeof Element.prototype.appendFormFields && (Element.prototype.appendFormFields = function(e) {
                    var t = this;
                    Array.isArray(e) || (e = [e]);
                    var n = u.default.markup("div", e, {
                        className: "rendered-form"
                    });
                    this.appendChild(n), e.forEach(function(e) {
                        var r = e.className.match(/row-([^\s]+)/) || [],
                            o = i(r, 1)[0];
                        if (o) {
                            var a = t.id ? t.id + "-row-" + o : "row-" + o,
                                s = document.getElementById(a);
                            s || (s = u.default.markup("div", null, {
                                id: a,
                                className: "row form-inline"
                            }), n.appendChild(s)), s.appendChild(e)
                        } else n.appendChild(e);
                        e.dispatchEvent(c.default.fieldRendered)
                    })
                }), "function" != typeof Element.prototype.emptyContainer && (Element.prototype.emptyContainer = function() {
                    for (; this.lastChild;) this.removeChild(this.lastChild)
                })
            }
            return t.prototype.santizeField = function(e, t) {
                var n = Object.assign({}, e);
                return t && (n.id = e.id && e.id + "-" + t, n.name = e.name && e.name + "-" + t), n.className = Array.isArray(e.className) ? u.default.unique(e.className.join(" ").split(" ")).join(" ") : e.className || e.class || null, delete n.class, e.values && (e.values = e.values.map(function(e) {
                    return u.default.trimObj(e)
                })), u.default.trimObj(n)
            }, t.prototype.getElement = function(e) {
                return (e = this.options.container || e) instanceof jQuery ? e = e[0] : "string" == typeof e && (e = document.querySelector(e)), e
            }, t.prototype.render = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = this.options;
                e = this.getElement(e);
                var r = [];
                if (n.formData) {
                    for (var o = new n.layout(n.layoutTemplates), i = 0; i < n.formData.length; i++) {
                        var a = n.formData[i],
                            s = this.santizeField(a, t),
                            l = d.default.getClass(a.type, a.subtype),
                            c = o.build(l, s);
                        r.push(c)
                    }
                    if (e && (this.instanceContainers[t] = e), n.render && e) e.emptyContainer(), e.appendFormFields(r), n.onRender && n.onRender(), n.notify.success(n.messages.formRendered);
                    else {
                        this.markup = function(e) {
                            return e.map(function(e) {
                                return e.innerHTML
                            }).join("")
                        }(r)
                    }
                } else {
                    var f = u.default.markup("div", n.messages.noFormData, {
                        className: "no-form-data"
                    });
                    r.push(f), n.notify.error(n.messages.noFormData)
                }
                return this
            }, t.prototype.renderControl = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = this.options,
                    n = t.formData;
                if (!n || Array.isArray(n)) throw new Error("To render a single element, please specify a single object of formData for the field in question");
                var r = this.santizeField(n),
                    o = new t.layout,
                    i = d.default.getClass(n.type, n.subtype),
                    a = t.forceTemplate || "hidden",
                    s = o.build(i, r, a);
                return e.appendFormFields(s), t.notify.success(t.messages.formRendered), this
            }, t.prototype.clear = function() {
                var e = this;
                this.instanceContainers.forEach(function(t) {
                    e.options.formData.slice().filter(function(e) {
                        return "tinymce" === e.subtype
                    }).forEach(function(e) {
                        return window.tinymce.get(e.name).setContent("")
                    }), t.querySelectorAll("input, select, textarea").forEach(function(e) {
                        ["checkbox", "radio"].includes(e.type) ? e.checked = !1 : e.value = ""
                    })
                })
            }, t.prototype.parseFormData = function(e) {
                var t = {
                    xml: function(e) {
                        return (0, l.parseXML)(e)
                    },
                    json: function(e) {
                        return window.JSON.parse(e)
                    }
                };
                return "object" !== (void 0 === e ? "undefined" : o(e)) && (e = t[this.options.dataType](e) || !1), e
            }, a(t, [{
                key: "userData",
                get: function() {
                    var t = this.options.formData.slice();
                    return t.filter(function(e) {
                        return "tinymce" === e.subtype
                    }).forEach(function(e) {
                        return window.tinymce.get(e.name).save()
                    }), this.instanceContainers.forEach(function(n, r) {
                        for (var o = e("select, input, textarea", n).serializeArray().reduce(function(e, t) {
                                var n = t.name,
                                    r = t.value;
                                return e[n = n.replace("[]", "")] ? e[n].push(r) : e[n] = [r], e
                            }, {}), i = t.length, a = 0; a < i; a++) {
                            var s = t[a];
                            void 0 !== s.name && (s.disabled || (s.userData = o[s.name]))
                        }
                    }), t
                }
            }]), t
        }();
        ! function(e) {
            var t = void 0,
                n = {
                    init: function(e) {
                        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return t = e, n.instance = new b(r), e.each(function(t) {
                            return n.instance.render(e[t], t)
                        }), n.instance
                    },
                    userData: function() {
                        return n.instance && n.instance.userData
                    },
                    clear: function() {
                        return n.instance && n.instance.clear()
                    },
                    setData: function(e) {
                        if (n.instance) {
                            var t = n.instance;
                            t.options.formData = t.parseFormData(e)
                        }
                    },
                    render: function(e) {
                        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (n.instance) {
                            var o = n.instance;
                            o.options = Object.assign({}, o.options, r, {
                                formData: o.parseFormData(e)
                            }), t.each(function(e) {
                                return n.instance.render(t[e], e)
                            })
                        }
                    },
                    html: function() {
                        return t.map(function(e) {
                            return t[e]
                        }).html()
                    }
                };
            jQuery.fn.formRender = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (n[e]) {
                    for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) r[o - 1] = arguments[o];
                    return n[e].apply(this, r)
                }
                var i = n.init(this, e);
                return Object.assign(n, i), i
            }, jQuery.fn.controlRender = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                t.formData = e, t.dataType = "string" == typeof e ? "json" : "xml";
                var n = new b(t),
                    r = this;
                return r.each(function(e) {
                    return n.renderControl(r[e])
                }), r
            }
        }(jQuery)
    }])
}(jQuery);