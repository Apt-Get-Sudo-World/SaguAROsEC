/*! tsParticles v1.26.0 by Matteo Bruni */ ! function(t, i) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = i();
    else if ("function" == typeof define && define.amd) define([], i);
    else {
        var e = i();
        for (var o in e)("object" == typeof exports ? exports : t)[o] = e[o]
    }
}(this, (function() {
    return (() => {
        "use strict";
        var t = {
                d: (i, e) => {
                    for (var o in e) t.o(e, o) && !t.o(i, o) && Object.defineProperty(i, o, {
                        enumerable: !0,
                        get: e[o]
                    })
                },
                o: (t, i) => Object.prototype.hasOwnProperty.call(t, i),
                r: t => {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(t, "__esModule", {
                        value: !0
                    })
                }
            },
            i = {};
        t.r(i), t.d(i, {
            AbsorberClickMode: () => le,
            AnimationStatus: () => m,
            CanvasUtils: () => O,
            ClickMode: () => l,
            CollisionMode: () => u,
            ColorUtils: () => T,
            Constants: () => C,
            Container: () => ee,
            DestroyMode: () => c,
            DestroyType: () => f,
            DivMode: () => d,
            DivType: () => x,
            EmitterClickMode: () => Me,
            HoverMode: () => h,
            InlineArrangement: () => Ce,
            InteractivityDetect: () => k,
            Main: () => We,
            MoveDirection: () => s,
            MoveType: () => ze,
            OutMode: () => v,
            ProcessBubbleType: () => g,
            RotateDirection: () => n,
            ShapeType: () => b,
            SizeMode: () => p,
            StartValueType: () => w,
            ThemeMode: () => y,
            Type: () => Ae,
            Utils: () => S,
            Vector: () => a,
            pJSDom: () => $e,
            particlesJS: () => Ne,
            tsParticles: () => Ge
        });
        class e {
            getSidesCount() {
                return 4
            }
            draw(t, i, e) {
                t.rect(-e, -e, 2 * e, 2 * e)
            }
        }
        var o, s, n;
        ! function(t) {
            t.bottom = "bottom", t.left = "left", t.right = "right", t.top = "top"
        }(o || (o = {})),
        function(t) {
            t.bottom = "bottom", t.bottomLeft = "bottom-left", t.bottomRight = "bottom-right", t.left = "left", t.none = "none", t.right = "right", t.top = "top", t.topLeft = "top-left", t.topRight = "top-right"
        }(s || (s = {})),
        function(t) {
            t.clockwise = "clockwise", t.counterClockwise = "counter-clockwise", t.random = "random"
        }(n || (n = {}));
        class a {
            constructor(t, i) {
                let e, o;
                if (void 0 === i) {
                    if ("number" == typeof t) throw new Error("tsParticles - Vector not initialized correctly");
                    const i = t;
                    [e, o] = [i.x, i.y]
                } else [e, o] = [t, i];
                this.x = e, this.y = o
            }
            static clone(t) {
                return a.create(t.x, t.y)
            }
            static create(t, i) {
                return new a(t, i)
            }
            get angle() {
                return Math.atan2(this.y, this.x)
            }
            set angle(t) {
                this.updateFromAngle(t, this.length)
            }
            get length() {
                return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
            }
            set length(t) {
                this.updateFromAngle(this.angle, t)
            }
            add(t) {
                return a.create(this.x + t.x, this.y + t.y)
            }
            addTo(t) {
                this.x += t.x, this.y += t.y
            }
            sub(t) {
                return a.create(this.x - t.x, this.y - t.y)
            }
            subFrom(t) {
                this.x -= t.x, this.y -= t.y
            }
            mult(t) {
                return a.create(this.x * t, this.y * t)
            }
            multTo(t) {
                this.x *= t, this.y *= t
            }
            div(t) {
                return a.create(this.x / t, this.y / t)
            }
            divTo(t) {
                this.x /= t, this.y /= t
            }
            distanceTo(t) {
                return this.sub(t).length
            }
            getLengthSq() {
                return Math.pow(this.x, 2) + Math.pow(this.y, 2)
            }
            distanceToSq(t) {
                return this.sub(t).getLengthSq()
            }
            manhattanDistanceTo(t) {
                return Math.abs(t.x - this.x) + Math.abs(t.y - this.y)
            }
            copy() {
                return a.clone(this)
            }
            setTo(t) {
                this.x = t.x, this.y = t.y
            }
            rotate(t) {
                return a.create(this.x * Math.cos(t) - this.y * Math.sin(t), this.x * Math.sin(t) + this.y * Math.cos(t))
            }
            updateFromAngle(t, i) {
                this.x = Math.cos(t) * i, this.y = Math.sin(t) * i
            }
        }
        a.origin = a.create(0, 0);
        class r {
            static clamp(t, i, e) {
                return Math.min(Math.max(t, i), e)
            }
            static mix(t, i, e, o) {
                return Math.floor((t * e + i * o) / (e + o))
            }
            static randomInRange(t) {
                const i = r.getRangeMax(t);
                let e = r.getRangeMin(t);
                return i === e && (e = 0), Math.random() * (i - e) + e
            }
            static getRangeValue(t) {
                return "number" == typeof t ? t : r.randomInRange(t)
            }
            static getRangeMin(t) {
                return "number" == typeof t ? t : t.min
            }
            static getRangeMax(t) {
                return "number" == typeof t ? t : t.max
            }
            static setRangeValue(t, i) {
                if (t === i || void 0 === i && "number" == typeof t) return t;
                const e = r.getRangeMin(t),
                    o = r.getRangeMax(t);
                return void 0 !== i ? {
                    min: Math.min(e, i),
                    max: Math.max(o, i)
                } : r.setRangeValue(e, o)
            }
            static getValue(t) {
                const i = t.random,
                    {
                        enable: e,
                        minimumValue: o
                    } = "boolean" == typeof i ? {
                        enable: i,
                        minimumValue: 0
                    } : i;
                return e ? r.getRangeValue(r.setRangeValue(t.value, o)) : r.getRangeValue(t.value)
            }
            static getDistances(t, i) {
                const e = t.x - i.x,
                    o = t.y - i.y;
                return {
                    dx: e,
                    dy: o,
                    distance: Math.sqrt(e * e + o * o)
                }
            }
            static getDistance(t, i) {
                return r.getDistances(t, i).distance
            }
            static getParticleBaseVelocity(t) {
                const i = a.origin;
                switch (i.length = 1, t) {
                    case s.top:
                        i.angle = -Math.PI / 2;
                        break;
                    case s.topRight:
                        i.angle = -Math.PI / 4;
                        break;
                    case s.right:
                        i.angle = 0;
                        break;
                    case s.bottomRight:
                        i.angle = Math.PI / 4;
                        break;
                    case s.bottom:
                        i.angle = Math.PI / 2;
                        break;
                    case s.bottomLeft:
                        i.angle = 3 * Math.PI / 4;
                        break;
                    case s.left:
                        i.angle = Math.PI;
                        break;
                    case s.topLeft:
                        i.angle = -3 * Math.PI / 4;
                        break;
                    case s.none:
                    default:
                        i.angle = Math.random() * Math.PI * 2
                }
                return i
            }
            static rotateVelocity(t, i) {
                return {
                    horizontal: t.horizontal * Math.cos(i) - t.vertical * Math.sin(i),
                    vertical: t.horizontal * Math.sin(i) + t.vertical * Math.cos(i)
                }
            }
            static collisionVelocity(t, i, e, o) {
                return a.create(t.x * (e - o) / (e + o) + 2 * i.x * o / (e + o), t.y)
            }
        }
        var l, c, d, h, u, v, p, y, m, f, g, b, w, x, k, P = function(t, i, e, o) {
            return new(e || (e = Promise))((function(s, n) {
                function a(t) {
                    try {
                        l(o.next(t))
                    } catch (t) {
                        n(t)
                    }
                }

                function r(t) {
                    try {
                        l(o.throw(t))
                    } catch (t) {
                        n(t)
                    }
                }

                function l(t) {
                    var i;
                    t.done ? s(t.value) : (i = t.value, i instanceof e ? i : new e((function(t) {
                        t(i)
                    }))).then(a, r)
                }
                l((o = o.apply(t, i || [])).next())
            }))
        };

        function M(t, i, e, o, s, n) {
            const a = {
                bounced: !1
            };
            return i.min >= o.min && i.min <= o.max && i.max >= o.min && i.max <= o.max && (t.max >= e.min && t.max <= (e.max + e.min) / 2 && s > 0 || t.min <= e.max && t.min > (e.max + e.min) / 2 && s < 0) && (a.velocity = s * -n, a.bounced = !0), a
        }

        function R(t, i) {
            if (i instanceof Array) {
                for (const e of i)
                    if (t.matches(e)) return !0;
                return !1
            }
            return t.matches(i)
        }
        class S {
            static isSsr() {
                return "undefined" == typeof window || !window
            }
            static get animate() {
                return S.isSsr() ? t => setTimeout(t) : t => (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || window.setTimeout)(t)
            }
            static get cancelAnimation() {
                return S.isSsr() ? t => clearTimeout(t) : t => (window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || window.clearTimeout)(t)
            }
            static isInArray(t, i) {
                return t === i || i instanceof Array && i.indexOf(t) > -1
            }
            static loadFont(t) {
                return P(this, void 0, void 0, (function*() {
                    try {
                        yield document.fonts.load(`${t.weight} 36px '${t.font}'`)
                    } catch (t) {}
                }))
            }
            static arrayRandomIndex(t) {
                return Math.floor(Math.random() * t.length)
            }
            static itemFromArray(t, i, e = !0) {
                return t[void 0 !== i && e ? i % t.length : S.arrayRandomIndex(t)]
            }
            static isPointInside(t, i, e, o) {
                return S.areBoundsInside(S.calculateBounds(t, null != e ? e : 0), i, o)
            }
            static areBoundsInside(t, i, e) {
                let s = !0;
                return e && e !== o.bottom || (s = t.top < i.height), !s || e && e !== o.left || (s = t.right > 0), !s || e && e !== o.right || (s = t.left < i.width), !s || e && e !== o.top || (s = t.bottom > 0), s
            }
            static calculateBounds(t, i) {
                return {
                    bottom: t.y + i,
                    left: t.x - i,
                    right: t.x + i,
                    top: t.y - i
                }
            }
            static loadImage(t) {
                return new Promise(((i, e) => {
                    if (!t) return void e("Error tsParticles - No image.src");
                    const o = {
                            source: t,
                            type: t.substr(t.length - 3)
                        },
                        s = new Image;
                    s.addEventListener("load", (() => {
                        o.element = s, i(o)
                    })), s.addEventListener("error", (() => {
                        e(`Error tsParticles - loading image: ${t}`)
                    })), s.src = t
                }))
            }
            static downloadSvgImage(t) {
                return P(this, void 0, void 0, (function*() {
                    if (!t) throw new Error("Error tsParticles - No image.src");
                    const i = {
                        source: t,
                        type: t.substr(t.length - 3)
                    };
                    if ("svg" !== i.type) return S.loadImage(t);
                    const e = yield fetch(i.source);
                    if (!e.ok) throw new Error("Error tsParticles - Image not found");
                    return i.svgData = yield e.text(), i
                }))
            }
            static deepExtend(t, ...i) {
                for (const e of i) {
                    if (null == e) continue;
                    if ("object" != typeof e) {
                        t = e;
                        continue
                    }
                    const i = Array.isArray(e);
                    !i || "object" == typeof t && t && Array.isArray(t) ? i || "object" == typeof t && t && !Array.isArray(t) || (t = {}) : t = [];
                    for (const i in e) {
                        if ("__proto__" === i) continue;
                        const o = e[i],
                            s = "object" == typeof o,
                            n = t;
                        n[i] = s && Array.isArray(o) ? o.map((t => S.deepExtend(n[i], t))) : S.deepExtend(n[i], o)
                    }
                }
                return t
            }
            static isDivModeEnabled(t, i) {
                return i instanceof Array ? !!i.find((i => i.enable && S.isInArray(t, i.mode))) : S.isInArray(t, i.mode)
            }
            static divModeExecute(t, i, e) {
                if (i instanceof Array)
                    for (const o of i) {
                        const i = o.mode;
                        o.enable && S.isInArray(t, i) && S.singleDivModeExecute(o, e)
                    } else {
                        const o = i.mode;
                        i.enable && S.isInArray(t, o) && S.singleDivModeExecute(i, e)
                    }
            }
            static singleDivModeExecute(t, i) {
                const e = t.selectors;
                if (e instanceof Array)
                    for (const o of e) i(o, t);
                else i(e, t)
            }
            static divMode(t, i) {
                if (i && t) return t instanceof Array ? t.find((t => R(i, t.selectors))) : R(i, t.selectors) ? t : void 0
            }
            static circleBounceDataFromParticle(t) {
                return {
                    position: t.getPosition(),
                    radius: t.getRadius(),
                    mass: t.getMass(),
                    velocity: t.velocity,
                    factor: {
                        horizontal: r.getValue(t.options.bounce.horizontal),
                        vertical: r.getValue(t.options.bounce.vertical)
                    }
                }
            }
            static circleBounce(t, i) {
                const e = t.velocity.x,
                    o = t.velocity.y,
                    s = t.position,
                    n = i.position;
                if (e * (n.x - s.x) + o * (n.y - s.y) >= 0) {
                    const e = -Math.atan2(n.y - s.y, n.x - s.x),
                        o = t.mass,
                        a = i.mass,
                        l = t.velocity.rotate(e),
                        c = i.velocity.rotate(e),
                        d = r.collisionVelocity(l, c, o, a),
                        h = r.collisionVelocity(c, l, o, a),
                        u = d.rotate(-e),
                        v = h.rotate(-e);
                    t.velocity.x = u.x * t.factor.horizontal, t.velocity.y = u.y * t.factor.vertical, i.velocity.x = v.x * i.factor.horizontal, i.velocity.y = v.y * i.factor.vertical
                }
            }
            static rectBounce(t, i) {
                const e = t.getPosition(),
                    o = t.getRadius(),
                    s = S.calculateBounds(e, o),
                    n = M({
                        min: s.left,
                        max: s.right
                    }, {
                        min: s.top,
                        max: s.bottom
                    }, {
                        min: i.left,
                        max: i.right
                    }, {
                        min: i.top,
                        max: i.bottom
                    }, t.velocity.x, r.getValue(t.options.bounce.horizontal));
                n.bounced && (void 0 !== n.velocity && (t.velocity.x = n.velocity), void 0 !== n.position && (t.position.x = n.position));
                const a = M({
                    min: s.top,
                    max: s.bottom
                }, {
                    min: s.left,
                    max: s.right
                }, {
                    min: i.top,
                    max: i.bottom
                }, {
                    min: i.left,
                    max: i.right
                }, t.velocity.y, r.getValue(t.options.bounce.vertical));
                a.bounced && (void 0 !== a.velocity && (t.velocity.y = a.velocity), void 0 !== a.position && (t.position.y = a.position))
            }
        }
        class C {}

        function z(t, i, e) {
            let o = e;
            return o < 0 && (o += 1), o > 1 && (o -= 1), o < 1 / 6 ? t + 6 * (i - t) * o : o < .5 ? i : o < 2 / 3 ? t + (i - t) * (2 / 3 - o) * 6 : t
        }

        function A(t) {
            if (t.startsWith("rgb")) {
                const i = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.]+)\s*)?\)/i.exec(t);
                return i ? {
                    a: i.length > 4 ? parseFloat(i[5]) : 1,
                    b: parseInt(i[3], 10),
                    g: parseInt(i[2], 10),
                    r: parseInt(i[1], 10)
                } : void 0
            }
            if (t.startsWith("hsl")) {
                const i = /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.]+)\s*)?\)/i.exec(t);
                return i ? T.hslaToRgba({
                    a: i.length > 4 ? parseFloat(i[5]) : 1,
                    h: parseInt(i[1], 10),
                    l: parseInt(i[3], 10),
                    s: parseInt(i[2], 10)
                }) : void 0
            }
            if (t.startsWith("hsv")) {
                const i = /hsva?\(\s*(\d+)°\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.]+)\s*)?\)/i.exec(t);
                return i ? T.hsvaToRgba({
                    a: i.length > 4 ? parseFloat(i[5]) : 1,
                    h: parseInt(i[1], 10),
                    s: parseInt(i[2], 10),
                    v: parseInt(i[3], 10)
                }) : void 0
            } {
                const i = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i,
                    e = t.replace(i, ((t, i, e, o, s) => i + i + e + e + o + o + (void 0 !== s ? s + s : ""))),
                    o = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(e);
                return o ? {
                    a: void 0 !== o[4] ? parseInt(o[4], 16) / 255 : 1,
                    b: parseInt(o[3], 16),
                    g: parseInt(o[2], 16),
                    r: parseInt(o[1], 16)
                } : void 0
            }
        }
        C.canvasClass = "tsparticles-canvas-el", C.randomColorValue = "random", C.midColorValue = "mid", C.touchEndEvent = "touchend", C.mouseDownEvent = "mousedown", C.mouseUpEvent = "mouseup", C.mouseMoveEvent = "mousemove", C.touchStartEvent = "touchstart", C.touchMoveEvent = "touchmove", C.mouseLeaveEvent = "mouseleave", C.mouseOutEvent = "mouseout", C.touchCancelEvent = "touchcancel", C.resizeEvent = "resize", C.visibilityChangeEvent = "visibilitychange", C.noPolygonDataLoaded = "No polygon data loaded.", C.noPolygonFound = "No polygon found, you need to specify SVG url in config.";
        class T {
            static colorToRgb(t, i, e = !0) {
                var o, s, n;
                if (void 0 === t) return;
                const a = "string" == typeof t ? {
                    value: t
                } : t;
                let r;
                if ("string" == typeof a.value) r = a.value === C.randomColorValue ? T.getRandomRgbColor() : T.stringToRgb(a.value);
                else if (a.value instanceof Array) {
                    const t = S.itemFromArray(a.value, i, e);
                    r = T.colorToRgb({
                        value: t
                    })
                } else {
                    const t = a.value,
                        i = null !== (o = t.rgb) && void 0 !== o ? o : a.value;
                    if (void 0 !== i.r) r = i;
                    else {
                        const i = null !== (s = t.hsl) && void 0 !== s ? s : a.value;
                        if (void 0 !== i.h && void 0 !== i.l) r = T.hslToRgb(i);
                        else {
                            const i = null !== (n = t.hsv) && void 0 !== n ? n : a.value;
                            void 0 !== i.h && void 0 !== i.v && (r = T.hsvToRgb(i))
                        }
                    }
                }
                return r
            }
            static colorToHsl(t, i, e = !0) {
                const o = T.colorToRgb(t, i, e);
                return void 0 !== o ? T.rgbToHsl(o) : void 0
            }
            static rgbToHsl(t) {
                const i = t.r / 255,
                    e = t.g / 255,
                    o = t.b / 255,
                    s = Math.max(i, e, o),
                    n = Math.min(i, e, o),
                    a = {
                        h: 0,
                        l: (s + n) / 2,
                        s: 0
                    };
                return s != n && (a.s = a.l < .5 ? (s - n) / (s + n) : (s - n) / (2 - s - n), a.h = i === s ? (e - o) / (s - n) : a.h = e === s ? 2 + (o - i) / (s - n) : 4 + (i - e) / (s - n)), a.l *= 100, a.s *= 100, a.h *= 60, a.h < 0 && (a.h += 360), a
            }
            static stringToAlpha(t) {
                var i;
                return null === (i = A(t)) || void 0 === i ? void 0 : i.a
            }
            static stringToRgb(t) {
                return A(t)
            }
            static hslToRgb(t) {
                const i = {
                        b: 0,
                        g: 0,
                        r: 0
                    },
                    e = {
                        h: t.h / 360,
                        l: t.l / 100,
                        s: t.s / 100
                    };
                if (0 === e.s) i.b = e.l, i.g = e.l, i.r = e.l;
                else {
                    const t = e.l < .5 ? e.l * (1 + e.s) : e.l + e.s - e.l * e.s,
                        o = 2 * e.l - t;
                    i.r = z(o, t, e.h + 1 / 3), i.g = z(o, t, e.h), i.b = z(o, t, e.h - 1 / 3)
                }
                return i.r = Math.floor(255 * i.r), i.g = Math.floor(255 * i.g), i.b = Math.floor(255 * i.b), i
            }
            static hslaToRgba(t) {
                const i = T.hslToRgb(t);
                return {
                    a: t.a,
                    b: i.b,
                    g: i.g,
                    r: i.r
                }
            }
            static hslToHsv(t) {
                const i = t.l / 100,
                    e = i + t.s / 100 * Math.min(i, 1 - i),
                    o = e ? 2 * (1 - i / e) : 0;
                return {
                    h: t.h,
                    s: 100 * o,
                    v: 100 * e
                }
            }
            static hslaToHsva(t) {
                const i = T.hslToHsv(t);
                return {
                    a: t.a,
                    h: i.h,
                    s: i.s,
                    v: i.v
                }
            }
            static hsvToHsl(t) {
                const i = t.v / 100,
                    e = i * (1 - t.s / 100 / 2),
                    o = 0 === e || 1 === e ? 0 : (i - e) / Math.min(e, 1 - e);
                return {
                    h: t.h,
                    l: 100 * e,
                    s: 100 * o
                }
            }
            static hsvaToHsla(t) {
                const i = T.hsvToHsl(t);
                return {
                    a: t.a,
                    h: i.h,
                    l: i.l,
                    s: i.s
                }
            }
            static hsvToRgb(t) {
                const i = {
                        b: 0,
                        g: 0,
                        r: 0
                    },
                    e = t.h / 60,
                    o = t.s / 100,
                    s = t.v / 100,
                    n = s * o,
                    a = n * (1 - Math.abs(e % 2 - 1));
                let r;
                if (e >= 0 && e <= 1 ? r = {
                        r: n,
                        g: a,
                        b: 0
                    } : e > 1 && e <= 2 ? r = {
                        r: a,
                        g: n,
                        b: 0
                    } : e > 2 && e <= 3 ? r = {
                        r: 0,
                        g: n,
                        b: a
                    } : e > 3 && e <= 4 ? r = {
                        r: 0,
                        g: a,
                        b: n
                    } : e > 4 && e <= 5 ? r = {
                        r: a,
                        g: 0,
                        b: n
                    } : e > 5 && e <= 6 && (r = {
                        r: n,
                        g: 0,
                        b: a
                    }), r) {
                    const t = s - n;
                    i.r = Math.floor(255 * (r.r + t)), i.g = Math.floor(255 * (r.g + t)), i.b = Math.floor(255 * (r.b + t))
                }
                return i
            }
            static hsvaToRgba(t) {
                const i = T.hsvToRgb(t);
                return {
                    a: t.a,
                    b: i.b,
                    g: i.g,
                    r: i.r
                }
            }
            static rgbToHsv(t) {
                const i = {
                        r: t.r / 255,
                        g: t.g / 255,
                        b: t.b / 255
                    },
                    e = Math.max(i.r, i.g, i.b),
                    o = e - Math.min(i.r, i.g, i.b);
                let s = 0;
                e === i.r ? s = (i.g - i.b) / o * 60 : e === i.g ? s = 60 * (2 + (i.b - i.r) / o) : e === i.b && (s = 60 * (4 + (i.r - i.g) / o));
                return {
                    h: s,
                    s: 100 * (e ? o / e : 0),
                    v: 100 * e
                }
            }
            static rgbaToHsva(t) {
                const i = T.rgbToHsv(t);
                return {
                    a: t.a,
                    h: i.h,
                    s: i.s,
                    v: i.v
                }
            }
            static getRandomRgbColor(t) {
                const i = null != t ? t : 0;
                return {
                    b: Math.floor(r.randomInRange(r.setRangeValue(i, 256))),
                    g: Math.floor(r.randomInRange(r.setRangeValue(i, 256))),
                    r: Math.floor(r.randomInRange(r.setRangeValue(i, 256)))
                }
            }
            static getStyleFromRgb(t, i) {
                return `rgba(${t.r}, ${t.g}, ${t.b}, ${null!=i?i:1})`
            }
            static getStyleFromHsl(t, i) {
                return `hsla(${t.h}, ${t.s}%, ${t.l}%, ${null!=i?i:1})`
            }
            static getStyleFromHsv(t, i) {
                return T.getStyleFromHsl(T.hsvToHsl(t), i)
            }
            static mix(t, i, e, o) {
                let s = t,
                    n = i;
                return void 0 === s.r && (s = T.hslToRgb(t)), void 0 === n.r && (n = T.hslToRgb(i)), {
                    b: r.mix(s.b, n.b, e, o),
                    g: r.mix(s.g, n.g, e, o),
                    r: r.mix(s.r, n.r, e, o)
                }
            }
            static replaceColorSvg(t, i, e) {
                if (!t.svgData) return "";
                return t.svgData.replace(/#([0-9A-F]{3,6})/gi, (() => T.getStyleFromHsl(i, e)))
            }
            static getLinkColor(t, i, e) {
                var o, s;
                if (e === C.randomColorValue) return T.getRandomRgbColor();
                if ("mid" !== e) return e;
                {
                    const e = null !== (o = t.getFillColor()) && void 0 !== o ? o : t.getStrokeColor(),
                        n = null !== (s = null == i ? void 0 : i.getFillColor()) && void 0 !== s ? s : null == i ? void 0 : i.getStrokeColor();
                    if (e && n && i) return T.mix(e, n, t.getRadius(), i.getRadius());
                    {
                        const t = null != e ? e : n;
                        if (t) return T.hslToRgb(t)
                    }
                }
            }
            static getLinkRandomColor(t, i, e) {
                const o = "string" == typeof t ? t : t.value;
                return o === C.randomColorValue ? e ? T.colorToRgb({
                    value: o
                }) : i ? C.randomColorValue : C.midColorValue : T.colorToRgb({
                    value: o
                })
            }
            static getHslFromAnimation(t) {
                return void 0 !== t ? {
                    h: t.h.value,
                    s: t.s.value,
                    l: t.l.value
                } : void 0
            }
        }

        function D(t, i, e) {
            t.beginPath(), t.moveTo(i.x, i.y), t.lineTo(e.x, e.y), t.closePath()
        }
        class O {
            static paintBase(t, i, e) {
                t.save(), t.fillStyle = null != e ? e : "rgba(0,0,0,0)", t.fillRect(0, 0, i.width, i.height), t.restore()
            }
            static clear(t, i) {
                t.clearRect(0, 0, i.width, i.height)
            }
            static drawLinkLine(t, i, e, o, s, n, a, l, c, d, h, u) {
                let v = !1;
                if (r.getDistance(e, o) <= s) D(t, e, o), v = !0;
                else if (a) {
                    let i, a;
                    const l = {
                            x: o.x - n.width,
                            y: o.y
                        },
                        c = r.getDistances(e, l);
                    if (c.distance <= s) {
                        const t = e.y - c.dy / c.dx * e.x;
                        i = {
                            x: 0,
                            y: t
                        }, a = {
                            x: n.width,
                            y: t
                        }
                    } else {
                        const t = {
                                x: o.x,
                                y: o.y - n.height
                            },
                            l = r.getDistances(e, t);
                        if (l.distance <= s) {
                            const t = -(e.y - l.dy / l.dx * e.x) / (l.dy / l.dx);
                            i = {
                                x: t,
                                y: 0
                            }, a = {
                                x: t,
                                y: n.height
                            }
                        } else {
                            const t = {
                                    x: o.x - n.width,
                                    y: o.y - n.height
                                },
                                l = r.getDistances(e, t);
                            if (l.distance <= s) {
                                const t = e.y - l.dy / l.dx * e.x;
                                i = {
                                    x: -t / (l.dy / l.dx),
                                    y: t
                                }, a = {
                                    x: i.x + n.width,
                                    y: i.y + n.height
                                }
                            }
                        }
                    }
                    i && a && (D(t, e, i), D(t, o, a), v = !0)
                }
                if (v) {
                    if (t.lineWidth = i, l && (t.globalCompositeOperation = c), t.strokeStyle = T.getStyleFromRgb(d, h), u.enable) {
                        const i = T.colorToRgb(u.color);
                        i && (t.shadowBlur = u.blur, t.shadowColor = T.getStyleFromRgb(i))
                    }
                    t.stroke()
                }
            }
            static drawLinkTriangle(t, i, e, o, s, n, a, r) {
                ! function(t, i, e, o) {
                    t.beginPath(), t.moveTo(i.x, i.y), t.lineTo(e.x, e.y), t.lineTo(o.x, o.y), t.closePath()
                }(t, i, e, o), s && (t.globalCompositeOperation = n), t.fillStyle = T.getStyleFromRgb(a, r), t.fill()
            }
            static drawConnectLine(t, i, e, o, s) {
                t.save(), D(t, o, s), t.lineWidth = i, t.strokeStyle = e, t.stroke(), t.restore()
            }
            static gradient(t, i, e, o) {
                const s = Math.floor(e.getRadius() / i.getRadius()),
                    n = i.getFillColor(),
                    a = e.getFillColor();
                if (!n || !a) return;
                const r = i.getPosition(),
                    l = e.getPosition(),
                    c = T.mix(n, a, i.getRadius(), e.getRadius()),
                    d = t.createLinearGradient(r.x, r.y, l.x, l.y);
                return d.addColorStop(0, T.getStyleFromHsl(n, o)), d.addColorStop(s > 1 ? 1 : s, T.getStyleFromRgb(c, o)), d.addColorStop(1, T.getStyleFromHsl(a, o)), d
            }
            static drawGrabLine(t, i, e, o, s, n) {
                t.save(), D(t, e, o), t.strokeStyle = T.getStyleFromRgb(s, n), t.lineWidth = i, t.stroke(), t.restore()
            }
            static drawLight(t, i, e) {
                const o = t.actualOptions.interactivity.modes.light.area;
                i.beginPath(), i.arc(e.x, e.y, o.radius, 0, 2 * Math.PI);
                const s = i.createRadialGradient(e.x, e.y, 0, e.x, e.y, o.radius),
                    n = o.gradient,
                    a = {
                        start: T.colorToRgb(n.start),
                        stop: T.colorToRgb(n.stop)
                    };
                a.start && a.stop && (s.addColorStop(0, T.getStyleFromRgb(a.start)), s.addColorStop(1, T.getStyleFromRgb(a.stop)), i.fillStyle = s, i.fill())
            }
            static drawParticleShadow(t, i, e, o) {
                const s = e.getPosition(),
                    n = t.actualOptions.interactivity.modes.light.shadow;
                i.save();
                const a = e.getRadius(),
                    r = e.sides,
                    l = 2 * Math.PI / r,
                    c = -e.rotate.value + Math.PI / 4,
                    d = [];
                for (let t = 0; t < r; t++) d.push({
                    x: s.x + a * Math.sin(c + l * t) * 1,
                    y: s.y + a * Math.cos(c + l * t) * 1
                });
                const h = [],
                    u = n.length;
                for (const t of d) {
                    const i = Math.atan2(o.y - t.y, o.x - t.x),
                        e = t.x + u * Math.sin(-i - Math.PI / 2),
                        s = t.y + u * Math.cos(-i - Math.PI / 2);
                    h.push({
                        endX: e,
                        endY: s,
                        startX: t.x,
                        startY: t.y
                    })
                }
                const v = T.colorToRgb(n.color);
                if (!v) return;
                const p = T.getStyleFromRgb(v);
                for (let t = h.length - 1; t >= 0; t--) {
                    const e = t == h.length - 1 ? 0 : t + 1;
                    i.beginPath(), i.moveTo(h[t].startX, h[t].startY), i.lineTo(h[e].startX, h[e].startY), i.lineTo(h[e].endX, h[e].endY), i.lineTo(h[t].endX, h[t].endY), i.fillStyle = p, i.fill()
                }
                i.restore()
            }
            static drawParticle(t, i, e, o, s, n, a, r, l, c, d) {
                const h = e.getPosition();
                i.save(), i.translate(h.x, h.y), i.beginPath();
                const u = e.rotate.value + (e.options.rotate.path ? e.velocity.angle : 0);
                0 !== u && i.rotate(u), a && (i.globalCompositeOperation = r);
                const v = e.shadowColor;
                d.enable && v && (i.shadowBlur = d.blur, i.shadowColor = T.getStyleFromRgb(v), i.shadowOffsetX = d.offset.x, i.shadowOffsetY = d.offset.y), s && (i.fillStyle = s);
                const p = e.stroke;
                i.lineWidth = e.strokeWidth, n && (i.strokeStyle = n), O.drawShape(t, i, e, l, c, o), p.width > 0 && i.stroke(), e.close && i.closePath(), e.fill && i.fill(), i.restore(), i.save(), i.translate(h.x, h.y), 0 !== u && i.rotate(u), a && (i.globalCompositeOperation = r), O.drawShapeAfterEffect(t, i, e, l, c, o), i.restore()
            }
            static drawShape(t, i, e, o, s, n) {
                if (!e.shape) return;
                const a = t.drawers.get(e.shape);
                a && a.draw(i, e, o, s, n, t.retina.pixelRatio)
            }
            static drawShapeAfterEffect(t, i, e, o, s, n) {
                if (!e.shape) return;
                const a = t.drawers.get(e.shape);
                (null == a ? void 0 : a.afterEffect) && a.afterEffect(i, e, o, s, n, t.retina.pixelRatio)
            }
            static drawPlugin(t, i, e) {
                void 0 !== i.draw && (t.save(), i.draw(t, e), t.restore())
            }
        }
        class E {
            constructor(t, i) {
                this.position = {
                    x: t,
                    y: i
                }
            }
        }
        class I extends E {
            constructor(t, i, e) {
                super(t, i), this.radius = e
            }
            contains(t) {
                return Math.pow(t.x - this.position.x, 2) + Math.pow(t.y - this.position.y, 2) <= this.radius * this.radius
            }
            intersects(t) {
                const i = t,
                    e = t,
                    o = this.position,
                    s = t.position,
                    n = Math.abs(s.x - o.x),
                    a = Math.abs(s.y - o.y),
                    r = this.radius;
                if (void 0 !== e.radius) {
                    return r + e.radius > Math.sqrt(n * n + a + a)
                }
                if (void 0 !== i.size) {
                    const t = i.size.width,
                        e = i.size.height,
                        o = Math.pow(n - t, 2) + Math.pow(a - e, 2);
                    return !(n > r + t || a > r + e) && (n <= t || a <= e || o <= r * r)
                }
                return !1
            }
        }
        class F extends E {
            constructor(t, i, e, o) {
                super(t, i), this.size = {
                    height: o,
                    width: e
                }
            }
            contains(t) {
                const i = this.size.width,
                    e = this.size.height,
                    o = this.position;
                return t.x >= o.x && t.x <= o.x + i && t.y >= o.y && t.y <= o.y + e
            }
            intersects(t) {
                const i = t,
                    e = t,
                    o = this.size.width,
                    s = this.size.height,
                    n = this.position,
                    a = t.position;
                if (void 0 !== e.radius) return e.intersects(this);
                if (void 0 !== i.size) {
                    const t = i.size,
                        e = t.width,
                        r = t.height;
                    return a.x < n.x + o && a.x + e > n.x && a.y < n.y + s && a.y + r > n.y
                }
                return !1
            }
        }
        class V extends I {
            constructor(t, i, e, o) {
                super(t, i, e), this.canvasSize = o, this.canvasSize = {
                    height: o.height,
                    width: o.width
                }
            }
            contains(t) {
                if (super.contains(t)) return !0;
                const i = {
                    x: t.x - this.canvasSize.width,
                    y: t.y
                };
                if (super.contains(i)) return !0;
                const e = {
                    x: t.x - this.canvasSize.width,
                    y: t.y - this.canvasSize.height
                };
                if (super.contains(e)) return !0;
                const o = {
                    x: t.x,
                    y: t.y - this.canvasSize.height
                };
                return super.contains(o)
            }
            intersects(t) {
                if (super.intersects(t)) return !0;
                const i = t,
                    e = t,
                    o = {
                        x: t.position.x - this.canvasSize.width,
                        y: t.position.y - this.canvasSize.height
                    };
                if (void 0 !== e.radius) {
                    const t = new I(o.x, o.y, 2 * e.radius);
                    return super.intersects(t)
                }
                if (void 0 !== i.size) {
                    const t = new F(o.x, o.y, 2 * i.size.width, 2 * i.size.height);
                    return super.intersects(t)
                }
                return !1
            }
        }

        function L(t, i, e, o, s) {
            if (o) {
                let o = {
                    passive: !0
                };
                "boolean" == typeof s ? o.capture = s : void 0 !== s && (o = s), t.addEventListener(i, e, o)
            } else {
                const o = s;
                t.removeEventListener(i, e, o)
            }
        }! function(t) {
            t.attract = "attract", t.bubble = "bubble", t.push = "push", t.remove = "remove", t.repulse = "repulse", t.pause = "pause", t.trail = "trail"
        }(l || (l = {})),
        function(t) {
            t.none = "none", t.split = "split"
        }(c || (c = {})),
        function(t) {
            t.bounce = "bounce", t.bubble = "bubble", t.repulse = "repulse"
        }(d || (d = {})),
        function(t) {
            t.attract = "attract", t.bounce = "bounce", t.bubble = "bubble", t.connect = "connect", t.grab = "grab", t.light = "light", t.repulse = "repulse", t.slow = "slow", t.trail = "trail"
        }(h || (h = {})),
        function(t) {
            t.absorb = "absorb", t.bounce = "bounce", t.destroy = "destroy"
        }(u || (u = {})),
        function(t) {
            t.bounce = "bounce", t.bounceHorizontal = "bounce-horizontal", t.bounceVertical = "bounce-vertical", t.none = "none", t.out = "out", t.destroy = "destroy", t.split = "split"
        }(v || (v = {})),
        function(t) {
            t.precise = "precise", t.percent = "percent"
        }(p || (p = {})),
        function(t) {
            t.any = "any", t.dark = "dark", t.light = "light"
        }(y || (y = {})),
        function(t) {
            t[t.increasing = 0] = "increasing", t[t.decreasing = 1] = "decreasing"
        }(m || (m = {})),
        function(t) {
            t.none = "none", t.max = "max", t.min = "min"
        }(f || (f = {})),
        function(t) {
            t.color = "color", t.opacity = "opacity", t.size = "size"
        }(g || (g = {})),
        function(t) {
            t.char = "char", t.character = "character", t.circle = "circle", t.edge = "edge", t.image = "image", t.images = "images", t.line = "line", t.polygon = "polygon", t.square = "square", t.star = "star", t.triangle = "triangle"
        }(b || (b = {})),
        function(t) {
            t.max = "max", t.min = "min", t.random = "random"
        }(w || (w = {})),
        function(t) {
            t.circle = "circle", t.rectangle = "rectangle"
        }(x || (x = {})),
        function(t) {
            t.canvas = "canvas", t.parent = "parent", t.window = "window"
        }(k || (k = {}));
        class H {
            constructor(t) {
                this.container = t, this.canPush = !0, this.mouseMoveHandler = t => this.mouseTouchMove(t), this.touchStartHandler = t => this.mouseTouchMove(t), this.touchMoveHandler = t => this.mouseTouchMove(t), this.touchEndHandler = () => this.mouseTouchFinish(), this.mouseLeaveHandler = () => this.mouseTouchFinish(), this.touchCancelHandler = () => this.mouseTouchFinish(), this.touchEndClickHandler = t => this.mouseTouchClick(t), this.mouseUpHandler = t => this.mouseTouchClick(t), this.mouseDownHandler = () => this.mouseDown(), this.visibilityChangeHandler = () => this.handleVisibilityChange(), this.resizeHandler = () => this.handleWindowResize()
            }
            addListeners() {
                this.manageListeners(!0)
            }
            removeListeners() {
                this.manageListeners(!1)
            }
            manageListeners(t) {
                var i;
                const e = this.container,
                    o = e.actualOptions,
                    s = o.interactivity.detectsOn;
                let n = C.mouseLeaveEvent;
                if (s === k.window) e.interactivity.element = window, n = C.mouseOutEvent;
                else if (s === k.parent && e.canvas.element) {
                    const t = e.canvas.element;
                    e.interactivity.element = null !== (i = t.parentElement) && void 0 !== i ? i : t.parentNode
                } else e.interactivity.element = e.canvas.element;
                const a = e.interactivity.element;
                if (!a) return;
                const r = a;
                (o.interactivity.events.onHover.enable || o.interactivity.events.onClick.enable) && (L(a, C.mouseMoveEvent, this.mouseMoveHandler, t), L(a, C.touchStartEvent, this.touchStartHandler, t), L(a, C.touchMoveEvent, this.touchMoveHandler, t), o.interactivity.events.onClick.enable ? (L(a, C.touchEndEvent, this.touchEndClickHandler, t), L(a, C.mouseUpEvent, this.mouseUpHandler, t), L(a, C.mouseDownEvent, this.mouseDownHandler, t)) : L(a, C.touchEndEvent, this.touchEndHandler, t), L(a, n, this.mouseLeaveHandler, t), L(a, C.touchCancelEvent, this.touchCancelHandler, t)), e.canvas.element && (e.canvas.element.style.pointerEvents = r === e.canvas.element ? "initial" : "none"), o.interactivity.events.resize && L(window, C.resizeEvent, this.resizeHandler, t), document && L(document, C.visibilityChangeEvent, this.visibilityChangeHandler, t, !1)
            }
            handleWindowResize() {
                var t;
                null === (t = this.container.canvas) || void 0 === t || t.windowResize()
            }
            handleVisibilityChange() {
                const t = this.container,
                    i = t.actualOptions;
                this.mouseTouchFinish(), i.pauseOnBlur && ((null === document || void 0 === document ? void 0 : document.hidden) ? (t.pageHidden = !0, t.pause()) : (t.pageHidden = !1, t.getAnimationStatus() ? t.play(!0) : t.draw()))
            }
            mouseDown() {
                const t = this.container.interactivity;
                if (t) {
                    const i = t.mouse;
                    i.clicking = !0, i.downPosition = i.position
                }
            }
            mouseTouchMove(t) {
                var i, e, o, s, n, a, r;
                const l = this.container,
                    c = l.actualOptions;
                if (void 0 === (null === (i = l.interactivity) || void 0 === i ? void 0 : i.element)) return;
                let d;
                l.interactivity.mouse.inside = !0;
                const h = l.canvas.element;
                if (t.type.startsWith("mouse")) {
                    this.canPush = !0;
                    const i = t;
                    if (l.interactivity.element === window) {
                        if (h) {
                            const t = h.getBoundingClientRect();
                            d = {
                                x: i.clientX - t.left,
                                y: i.clientY - t.top
                            }
                        }
                    } else if (c.interactivity.detectsOn === k.parent) {
                        const t = i.target,
                            s = i.currentTarget,
                            n = l.canvas.element;
                        if (t && s && n) {
                            const e = t.getBoundingClientRect(),
                                o = s.getBoundingClientRect(),
                                a = n.getBoundingClientRect();
                            d = {
                                x: i.offsetX + 2 * e.left - (o.left + a.left),
                                y: i.offsetY + 2 * e.top - (o.top + a.top)
                            }
                        } else d = {
                            x: null !== (e = i.offsetX) && void 0 !== e ? e : i.clientX,
                            y: null !== (o = i.offsetY) && void 0 !== o ? o : i.clientY
                        }
                    } else i.target === l.canvas.element && (d = {
                        x: null !== (s = i.offsetX) && void 0 !== s ? s : i.clientX,
                        y: null !== (n = i.offsetY) && void 0 !== n ? n : i.clientY
                    })
                } else {
                    this.canPush = "touchmove" !== t.type;
                    const i = t,
                        e = i.touches[i.touches.length - 1],
                        o = null == h ? void 0 : h.getBoundingClientRect();
                    d = {
                        x: e.clientX - (null !== (a = null == o ? void 0 : o.left) && void 0 !== a ? a : 0),
                        y: e.clientY - (null !== (r = null == o ? void 0 : o.top) && void 0 !== r ? r : 0)
                    }
                }
                const u = l.retina.pixelRatio;
                d && (d.x *= u, d.y *= u), l.interactivity.mouse.position = d, l.interactivity.status = C.mouseMoveEvent
            }
            mouseTouchFinish() {
                const t = this.container.interactivity;
                if (void 0 === t) return;
                const i = t.mouse;
                delete i.position, delete i.clickPosition, delete i.downPosition, t.status = C.mouseLeaveEvent, i.inside = !1, i.clicking = !1
            }
            mouseTouchClick(t) {
                const i = this.container,
                    e = i.actualOptions,
                    o = i.interactivity.mouse;
                o.inside = !0;
                let s = !1;
                const n = o.position;
                if (void 0 !== n && e.interactivity.events.onClick.enable) {
                    for (const [, t] of i.plugins)
                        if (void 0 !== t.clickPositionValid && (s = t.clickPositionValid(n), s)) break;
                    s || this.doMouseTouchClick(t), o.clicking = !1
                }
            }
            doMouseTouchClick(t) {
                const i = this.container,
                    e = i.actualOptions;
                if (this.canPush) {
                    const t = i.interactivity.mouse.position;
                    if (!t) return;
                    i.interactivity.mouse.clickPosition = {
                        x: t.x,
                        y: t.y
                    }, i.interactivity.mouse.clickTime = (new Date).getTime();
                    const o = e.interactivity.events.onClick;
                    if (o.mode instanceof Array)
                        for (const t of o.mode) this.handleClickMode(t);
                    else this.handleClickMode(o.mode)
                }
                "touchend" === t.type && setTimeout((() => this.mouseTouchFinish()), 500)
            }
            handleClickMode(t) {
                const i = this.container,
                    e = i.actualOptions,
                    o = e.interactivity.modes.push.quantity,
                    s = e.interactivity.modes.remove.quantity;
                switch (t) {
                    case l.push:
                        o > 0 && i.particles.push(o, i.interactivity.mouse);
                        break;
                    case l.remove:
                        i.particles.removeQuantity(s);
                        break;
                    case l.bubble:
                        i.bubble.clicking = !0;
                        break;
                    case l.repulse:
                        i.repulse.clicking = !0, i.repulse.count = 0;
                        for (const t of i.repulse.particles) t.velocity.setTo(t.initialVelocity);
                        i.repulse.particles = [], i.repulse.finish = !1, setTimeout((() => {
                            i.destroyed || (i.repulse.clicking = !1)
                        }), 1e3 * e.interactivity.modes.repulse.duration);
                        break;
                    case l.attract:
                        i.attract.clicking = !0, i.attract.count = 0;
                        for (const t of i.attract.particles) t.velocity.setTo(t.initialVelocity);
                        i.attract.particles = [], i.attract.finish = !1, setTimeout((() => {
                            i.destroyed || (i.attract.clicking = !1)
                        }), 1e3 * e.interactivity.modes.attract.duration);
                        break;
                    case l.pause:
                        i.getAnimationStatus() ? i.pause() : i.play()
                }
                for (const [, e] of i.plugins) e.handleClickMode && e.handleClickMode(t)
            }
        }
        const q = [],
            _ = new Map,
            B = new Map,
            W = new Map;
        class G {
            static getPlugin(t) {
                return q.find((i => i.id === t))
            }
            static addPlugin(t) {
                G.getPlugin(t.id) || q.push(t)
            }
            static getAvailablePlugins(t) {
                const i = new Map;
                for (const e of q) e.needsPlugin(t.actualOptions) && i.set(e.id, e.getPlugin(t));
                return i
            }
            static loadOptions(t, i) {
                for (const e of q) e.loadOptions(t, i)
            }
            static getPreset(t) {
                return _.get(t)
            }
            static addPreset(t, i) {
                G.getPreset(t) || _.set(t, i)
            }
            static addShapeDrawer(t, i) {
                G.getShapeDrawer(t) || B.set(t, i)
            }
            static getShapeDrawer(t) {
                return B.get(t)
            }
            static getSupportedShapes() {
                return B.keys()
            }
            static getPathGenerator(t) {
                return W.get(t)
            }
            static addPathGenerator(t, i) {
                G.getPathGenerator(t) || W.set(t, i)
            }
        }
        class N {
            constructor(t, i) {
                this.position = t, this.particle = i
            }
        }
        class $ {
            constructor(t, i) {
                this.rectangle = t, this.capacity = i, this.points = [], this.divided = !1
            }
            subdivide() {
                const t = this.rectangle.position.x,
                    i = this.rectangle.position.y,
                    e = this.rectangle.size.width,
                    o = this.rectangle.size.height,
                    s = this.capacity;
                this.northEast = new $(new F(t, i, e / 2, o / 2), s), this.northWest = new $(new F(t + e / 2, i, e / 2, o / 2), s), this.southEast = new $(new F(t, i + o / 2, e / 2, o / 2), s), this.southWest = new $(new F(t + e / 2, i + o / 2, e / 2, o / 2), s), this.divided = !0
            }
            insert(t) {
                var i, e, o, s, n;
                return !!this.rectangle.contains(t.position) && (this.points.length < this.capacity ? (this.points.push(t), !0) : (this.divided || this.subdivide(), null !== (n = (null === (i = this.northEast) || void 0 === i ? void 0 : i.insert(t)) || (null === (e = this.northWest) || void 0 === e ? void 0 : e.insert(t)) || (null === (o = this.southEast) || void 0 === o ? void 0 : o.insert(t)) || (null === (s = this.southWest) || void 0 === s ? void 0 : s.insert(t))) && void 0 !== n && n))
            }
            queryCircle(t, i) {
                return this.query(new I(t.x, t.y, i))
            }
            queryCircleWarp(t, i, e) {
                const o = e,
                    s = e;
                return this.query(new V(t.x, t.y, i, void 0 !== o.canvas ? o.canvas.size : s))
            }
            queryRectangle(t, i) {
                return this.query(new F(t.x, t.y, i.width, i.height))
            }
            query(t, i) {
                var e, o, s, n;
                const a = null != i ? i : [];
                if (!t.intersects(this.rectangle)) return [];
                for (const i of this.points) t.contains(i.position) && a.push(i.particle);
                return this.divided && (null === (e = this.northEast) || void 0 === e || e.query(t, a), null === (o = this.northWest) || void 0 === o || o.query(t, a), null === (s = this.southEast) || void 0 === s || s.query(t, a), null === (n = this.southWest) || void 0 === n || n.query(t, a)), a
            }
        }
        var U = function(t, i, e, o) {
            return new(e || (e = Promise))((function(s, n) {
                function a(t) {
                    try {
                        l(o.next(t))
                    } catch (t) {
                        n(t)
                    }
                }

                function r(t) {
                    try {
                        l(o.throw(t))
                    } catch (t) {
                        n(t)
                    }
                }

                function l(t) {
                    var i;
                    t.done ? s(t.value) : (i = t.value, i instanceof e ? i : new e((function(t) {
                        t(i)
                    }))).then(a, r)
                }
                l((o = o.apply(t, i || [])).next())
            }))
        };
        class j {
            getSidesCount() {
                return 12
            }
            init(t) {
                var i;
                return U(this, void 0, void 0, (function*() {
                    const e = t.actualOptions;
                    if (S.isInArray(b.char, e.particles.shape.type) || S.isInArray(b.character, e.particles.shape.type)) {
                        const t = null !== (i = e.particles.shape.options[b.character]) && void 0 !== i ? i : e.particles.shape.options[b.char];
                        if (t instanceof Array)
                            for (const i of t) yield S.loadFont(i);
                        else void 0 !== t && (yield S.loadFont(t))
                    }
                }))
            }
            draw(t, i, e) {
                const o = i.shapeData;
                if (void 0 === o) return;
                const s = o.value;
                if (void 0 === s) return;
                const n = i;
                void 0 === n.text && (n.text = s instanceof Array ? S.itemFromArray(s, i.randomIndexData) : s);
                const a = n.text,
                    r = o.style,
                    l = o.weight,
                    c = 2 * Math.round(e),
                    d = o.font,
                    h = i.fill,
                    u = a.length * e / 2;
                t.font = `${r} ${l} ${c}px "${d}"`;
                const v = {
                    x: -u,
                    y: e / 2
                };
                h ? t.fillText(a, v.x, v.y) : t.strokeText(a, v.x, v.y)
            }
        }
        var X = function(t, i, e, o) {
            return new(e || (e = Promise))((function(s, n) {
                function a(t) {
                    try {
                        l(o.next(t))
                    } catch (t) {
                        n(t)
                    }
                }

                function r(t) {
                    try {
                        l(o.throw(t))
                    } catch (t) {
                        n(t)
                    }
                }

                function l(t) {
                    var i;
                    t.done ? s(t.value) : (i = t.value, i instanceof e ? i : new e((function(t) {
                        t(i)
                    }))).then(a, r)
                }
                l((o = o.apply(t, i || [])).next())
            }))
        };
        class Y {
            constructor() {
                this.images = []
            }
            getSidesCount() {
                return 12
            }
            getImages(t) {
                const i = this.images.filter((i => i.id === t.id));
                return i.length ? i[0] : (this.images.push({
                    id: t.id,
                    images: []
                }), this.getImages(t))
            }
            addImage(t, i) {
                const e = this.getImages(t);
                null == e || e.images.push(i)
            }
            init(t) {
                var i;
                return X(this, void 0, void 0, (function*() {
                    const e = t.actualOptions.particles.shape;
                    if (!S.isInArray(b.image, e.type) && !S.isInArray(b.images, e.type)) return;
                    const o = null !== (i = e.options[b.images]) && void 0 !== i ? i : e.options[b.image];
                    if (o instanceof Array)
                        for (const i of o) yield this.loadImageShape(t, i);
                    else yield this.loadImageShape(t, o)
                }))
            }
            destroy() {
                this.images = []
            }
            loadImageShape(t, i) {
                return X(this, void 0, void 0, (function*() {
                    try {
                        const e = i.replaceColor ? yield S.downloadSvgImage(i.src): yield S.loadImage(i.src);
                        e && this.addImage(t, e)
                    } catch (t) {
                        console.warn(`tsParticles error - ${i.src} not found`)
                    }
                }))
            }
            draw(t, i, e, o) {
                var s, n;
                if (!t) return;
                const a = i.image,
                    r = null === (s = null == a ? void 0 : a.data) || void 0 === s ? void 0 : s.element;
                if (!r) return;
                const l = null !== (n = null == a ? void 0 : a.ratio) && void 0 !== n ? n : 1,
                    c = {
                        x: -e,
                        y: -e
                    };
                (null == a ? void 0 : a.data.svgData) && (null == a ? void 0 : a.replaceColor) || (t.globalAlpha = o), t.drawImage(r, c.x, c.y, 2 * e, 2 * e / l), (null == a ? void 0 : a.data.svgData) && (null == a ? void 0 : a.replaceColor) || (t.globalAlpha = 1)
            }
        }
        class J {
            getSidesCount() {
                return 1
            }
            draw(t, i, e) {
                t.moveTo(0, -e / 2), t.lineTo(0, e / 2)
            }
        }
        class Q {
            getSidesCount() {
                return 12
            }
            draw(t, i, e) {
                t.arc(0, 0, e, 0, 2 * Math.PI, !1)
            }
        }
        class Z {
            getSidesCount(t) {
                var i, e;
                const o = t.shapeData;
                return null !== (e = null !== (i = null == o ? void 0 : o.sides) && void 0 !== i ? i : null == o ? void 0 : o.nb_sides) && void 0 !== e ? e : 5
            }
            draw(t, i, e) {
                const o = this.getCenter(i, e),
                    s = this.getSidesData(i, e),
                    n = s.count.numerator * s.count.denominator,
                    a = s.count.numerator / s.count.denominator,
                    r = 180 * (a - 2) / a,
                    l = Math.PI - Math.PI * r / 180;
                if (t) {
                    t.beginPath(), t.translate(o.x, o.y), t.moveTo(0, 0);
                    for (let i = 0; i < n; i++) t.lineTo(s.length, 0), t.translate(s.length, 0), t.rotate(l)
                }
            }
        }
        class K extends Z {
            getSidesCount() {
                return 3
            }
            getSidesData(t, i) {
                return {
                    count: {
                        denominator: 2,
                        numerator: 3
                    },
                    length: 2 * i
                }
            }
            getCenter(t, i) {
                return {
                    x: -i,
                    y: i / 1.66
                }
            }
        }
        class tt {
            getSidesCount(t) {
                var i, e;
                const o = t.shapeData;
                return null !== (e = null !== (i = null == o ? void 0 : o.sides) && void 0 !== i ? i : null == o ? void 0 : o.nb_sides) && void 0 !== e ? e : 5
            }
            draw(t, i, e) {
                var o;
                const s = i.shapeData,
                    n = this.getSidesCount(i),
                    a = null !== (o = null == s ? void 0 : s.inset) && void 0 !== o ? o : 2;
                t.moveTo(0, 0 - e);
                for (let i = 0; i < n; i++) t.rotate(Math.PI / n), t.lineTo(0, 0 - e * a), t.rotate(Math.PI / n), t.lineTo(0, 0 - e)
            }
        }
        class it extends Z {
            getSidesData(t, i) {
                var e, o;
                const s = t.shapeData,
                    n = null !== (o = null !== (e = null == s ? void 0 : s.sides) && void 0 !== e ? e : null == s ? void 0 : s.nb_sides) && void 0 !== o ? o : 5;
                return {
                    count: {
                        denominator: 1,
                        numerator: n
                    },
                    length: 2.66 * i / (n / 3)
                }
            }
            getCenter(t, i) {
                return {
                    x: -i / (this.getSidesCount(t) / 3.5),
                    y: -i / .76
                }
            }
        }
        class et {
            constructor(t) {
                this.container = t, this.size = {
                    height: 0,
                    width: 0
                }, this.context = null, this.generatedCanvas = !1
            }
            init() {
                var t, i, e, o, s, n, a, r, l, c, d, h;
                this.resize();
                const u = this.container.actualOptions,
                    v = this.element;
                v && (u.fullScreen.enable ? (this.originalStyle = S.deepExtend({}, v.style), v.style.position = "fixed", v.style.zIndex = u.fullScreen.zIndex.toString(10), v.style.top = "0", v.style.left = "0", v.style.width = "100%", v.style.height = "100%") : (v.style.position = null !== (i = null === (t = this.originalStyle) || void 0 === t ? void 0 : t.position) && void 0 !== i ? i : "", v.style.zIndex = null !== (o = null === (e = this.originalStyle) || void 0 === e ? void 0 : e.zIndex) && void 0 !== o ? o : "", v.style.top = null !== (n = null === (s = this.originalStyle) || void 0 === s ? void 0 : s.top) && void 0 !== n ? n : "", v.style.left = null !== (r = null === (a = this.originalStyle) || void 0 === a ? void 0 : a.left) && void 0 !== r ? r : "", v.style.width = null !== (c = null === (l = this.originalStyle) || void 0 === l ? void 0 : l.width) && void 0 !== c ? c : "", v.style.height = null !== (h = null === (d = this.originalStyle) || void 0 === d ? void 0 : d.height) && void 0 !== h ? h : ""));
                const p = u.backgroundMask.cover,
                    y = p.color,
                    m = u.particles.move.trail,
                    f = T.colorToRgb(y);
                this.coverColor = void 0 !== f ? {
                    r: f.r,
                    g: f.g,
                    b: f.b,
                    a: p.opacity
                } : void 0, this.trailFillColor = T.colorToRgb(m.fillColor), this.initBackground(), this.paint()
            }
            loadCanvas(t, i) {
                var e;
                t.className || (t.className = C.canvasClass), this.generatedCanvas && (null === (e = this.element) || void 0 === e || e.remove()), this.generatedCanvas = null != i ? i : this.generatedCanvas, this.element = t, this.originalStyle = S.deepExtend({}, this.element.style), this.size.height = t.offsetHeight, this.size.width = t.offsetWidth, this.context = this.element.getContext("2d"), this.container.retina.init(), this.initBackground()
            }
            destroy() {
                var t;
                this.generatedCanvas && (null === (t = this.element) || void 0 === t || t.remove()), this.context && O.clear(this.context, this.size)
            }
            paint() {
                const t = this.container.actualOptions;
                this.context && (t.backgroundMask.enable && t.backgroundMask.cover && this.coverColor ? (O.clear(this.context, this.size), this.paintBase(T.getStyleFromRgb(this.coverColor, this.coverColor.a))) : this.paintBase())
            }
            clear() {
                const t = this.container.actualOptions,
                    i = t.particles.move.trail;
                t.backgroundMask.enable ? this.paint() : i.enable && i.length > 0 && this.trailFillColor ? this.paintBase(T.getStyleFromRgb(this.trailFillColor, 1 / i.length)) : this.context && O.clear(this.context, this.size)
            }
            windowResize() {
                if (!this.element) return;
                const t = this.container;
                t.canvas.resize(), t.actualOptions.setResponsive(this.size.width, t.retina.pixelRatio, t.options), t.particles.setDensity();
                for (const [, i] of t.plugins) void 0 !== i.resize && i.resize()
            }
            resize() {
                if (!this.element) return;
                const t = this.container,
                    i = t.retina.pixelRatio,
                    e = t.canvas.size,
                    o = e.width,
                    s = e.height;
                e.width = this.element.offsetWidth * i, e.height = this.element.offsetHeight * i, this.element.width = e.width, this.element.height = e.height, this.resizeFactor = {
                    width: e.width / o,
                    height: e.height / s
                }
            }
            drawConnectLine(t, i) {
                var e;
                const o = this.context;
                if (!o) return;
                const s = this.lineStyle(t, i);
                if (!s) return;
                const n = t.getPosition(),
                    a = i.getPosition();
                O.drawConnectLine(o, null !== (e = t.linksWidth) && void 0 !== e ? e : this.container.retina.linksWidth, s, n, a)
            }
            drawGrabLine(t, i, e, o) {
                var s;
                const n = this.container,
                    a = n.canvas.context;
                if (!a) return;
                const r = t.getPosition();
                O.drawGrabLine(a, null !== (s = t.linksWidth) && void 0 !== s ? s : n.retina.linksWidth, r, o, i, e)
            }
            drawParticleShadow(t, i) {
                this.context && O.drawParticleShadow(this.container, this.context, t, i)
            }
            drawLinkTriangle(t, i, e) {
                var o;
                const s = this.container,
                    n = s.actualOptions,
                    a = i.destination,
                    l = e.destination,
                    c = t.options.links.triangles,
                    d = null !== (o = c.opacity) && void 0 !== o ? o : (i.opacity + e.opacity) / 2;
                if (d <= 0) return;
                const h = t.getPosition(),
                    u = a.getPosition(),
                    v = l.getPosition(),
                    p = this.context;
                if (!p) return;
                if (r.getDistance(h, u) > s.retina.linksDistance || r.getDistance(v, u) > s.retina.linksDistance || r.getDistance(v, h) > s.retina.linksDistance) return;
                let y = T.colorToRgb(c.color);
                if (!y) {
                    const i = t.options.links,
                        e = void 0 !== i.id ? s.particles.linksColors.get(i.id) : s.particles.linksColor;
                    y = T.getLinkColor(t, a, e)
                }
                y && O.drawLinkTriangle(p, h, u, v, n.backgroundMask.enable, n.backgroundMask.composite, y, d)
            }
            drawLinkLine(t, i) {
                var e, o;
                const s = this.container,
                    n = s.actualOptions,
                    a = i.destination;
                let r = i.opacity;
                const l = t.getPosition(),
                    c = a.getPosition(),
                    d = this.context;
                if (!d) return;
                let h;
                const u = t.options.twinkle.lines;
                if (u.enable) {
                    const t = u.frequency,
                        i = T.colorToRgb(u.color);
                    Math.random() < t && void 0 !== i && (h = i, r = u.opacity)
                }
                if (!h) {
                    const i = t.options.links,
                        e = void 0 !== i.id ? s.particles.linksColors.get(i.id) : s.particles.linksColor;
                    h = T.getLinkColor(t, a, e)
                }
                if (!h) return;
                const v = null !== (e = t.linksWidth) && void 0 !== e ? e : s.retina.linksWidth,
                    p = null !== (o = t.linksDistance) && void 0 !== o ? o : s.retina.linksDistance;
                O.drawLinkLine(d, v, l, c, p, s.canvas.size, t.options.links.warp, n.backgroundMask.enable, n.backgroundMask.composite, h, r, t.options.links.shadow)
            }
            drawParticle(t, i) {
                var e, o, s, n;
                if (!1 === (null === (e = t.image) || void 0 === e ? void 0 : e.loaded) || t.spawning || t.destroyed) return;
                const a = t.getFillColor(),
                    r = null !== (o = t.getStrokeColor()) && void 0 !== o ? o : a;
                if (!a && !r) return;
                const l = this.container.actualOptions,
                    c = t.options.twinkle.particles,
                    d = c.frequency,
                    h = T.colorToRgb(c.color),
                    u = c.enable && Math.random() < d,
                    v = t.getRadius(),
                    p = u ? c.opacity : null !== (s = t.bubble.opacity) && void 0 !== s ? s : t.opacity.value,
                    y = t.infecter.infectionStage,
                    m = l.infection.stages,
                    f = void 0 !== y ? m[y].color : void 0,
                    g = T.colorToRgb(f),
                    b = u && void 0 !== h ? h : null != g ? g : a ? T.hslToRgb(a) : void 0,
                    w = u && void 0 !== h ? h : null != g ? g : r ? T.hslToRgb(r) : void 0,
                    x = void 0 !== b ? T.getStyleFromRgb(b, p) : void 0;
                if (!this.context || !x && !w) return;
                const k = void 0 !== w ? T.getStyleFromRgb(w, null !== (n = t.stroke.opacity) && void 0 !== n ? n : p) : x;
                this.drawParticleLinks(t), v > 0 && O.drawParticle(this.container, this.context, t, i, x, k, l.backgroundMask.enable, l.backgroundMask.composite, v, p, t.options.shadow)
            }
            drawParticleLinks(t) {
                if (!this.context) return;
                const i = this.container,
                    e = i.particles,
                    o = t.options;
                if (t.links.length > 0) {
                    this.context.save();
                    const s = t.links.filter((e => i.particles.getLinkFrequency(t, e.destination) <= o.links.frequency));
                    for (const n of s) {
                        const a = n.destination;
                        if (o.links.triangles.enable) {
                            const r = s.map((t => t.destination)),
                                l = a.links.filter((t => i.particles.getLinkFrequency(a, t.destination) <= a.options.links.frequency && r.indexOf(t.destination) >= 0));
                            if (l.length)
                                for (const i of l) {
                                    const s = i.destination;
                                    e.getTriangleFrequency(t, a, s) > o.links.triangles.frequency || this.drawLinkTriangle(t, n, i)
                                }
                        }
                        n.opacity > 0 && i.retina.linksWidth > 0 && this.drawLinkLine(t, n)
                    }
                    this.context.restore()
                }
            }
            drawPlugin(t, i) {
                this.context && O.drawPlugin(this.context, t, i)
            }
            drawLight(t) {
                this.context && O.drawLight(this.container, this.context, t)
            }
            paintBase(t) {
                this.context && O.paintBase(this.context, this.size, t)
            }
            lineStyle(t, i) {
                if (!this.context) return;
                const e = this.container.actualOptions.interactivity.modes.connect;
                return O.gradient(this.context, t, i, e.links.opacity)
            }
            initBackground() {
                const t = this.container.actualOptions.background,
                    i = this.element,
                    e = null == i ? void 0 : i.style;
                if (e) {
                    if (t.color) {
                        const i = T.colorToRgb(t.color);
                        e.backgroundColor = i ? T.getStyleFromRgb(i, t.opacity) : ""
                    } else e.backgroundColor = "";
                    e.backgroundImage = t.image || "", e.backgroundPosition = t.position || "", e.backgroundRepeat = t.repeat || "", e.backgroundSize = t.size || ""
                }
            }
        }

        function ot(t, i, e, o, s) {
            switch (i) {
                case f.max:
                    e >= s && t.destroy();
                    break;
                case f.min:
                    e <= o && t.destroy()
            }
        }
        class st {
            constructor(t, i) {
                this.container = t, this.particle = i
            }
            update(t) {
                this.particle.destroyed || (this.updateLife(t), this.particle.destroyed || this.particle.spawning || (this.updateOpacity(t), this.updateSize(t), this.updateAngle(t), this.updateColor(t), this.updateStrokeColor(t), this.updateOutModes(t)))
            }
            updateLife(t) {
                const i = this.particle;
                let e = !1;
                if (i.spawning && (i.lifeDelayTime += t.value, i.lifeDelayTime >= i.lifeDelay && (e = !0, i.spawning = !1, i.lifeDelayTime = 0, i.lifeTime = 0)), -1 !== i.lifeDuration && !i.spawning && (e ? i.lifeTime = 0 : i.lifeTime += t.value, i.lifeTime >= i.lifeDuration)) {
                    if (i.lifeTime = 0, i.livesRemaining > 0 && i.livesRemaining--, 0 === i.livesRemaining) return void i.destroy();
                    const t = this.container.canvas.size;
                    i.position.x = r.randomInRange(r.setRangeValue(0, t.width)), i.position.y = r.randomInRange(r.setRangeValue(0, t.height)), i.spawning = !0, i.lifeDelayTime = 0, i.lifeTime = 0, i.reset();
                    const e = i.options.life;
                    i.lifeDelay = 1e3 * r.getValue(e.delay), i.lifeDuration = 1e3 * r.getValue(e.duration)
                }
            }
            updateOpacity(t) {
                var i, e;
                const o = this.particle,
                    s = o.options.opacity,
                    n = s.animation,
                    a = r.getRangeMin(s.value),
                    l = r.getRangeMax(s.value);
                if (!o.destroyed && n.enable && (n.count <= 0 || o.loops.size < n.count)) {
                    switch (o.opacity.status) {
                        case m.increasing:
                            o.opacity.value >= l ? (o.opacity.status = m.decreasing, o.loops.opacity++) : o.opacity.value += (null !== (i = o.opacity.velocity) && void 0 !== i ? i : 0) * t.factor;
                            break;
                        case m.decreasing:
                            o.opacity.value <= a ? (o.opacity.status = m.increasing, o.loops.opacity++) : o.opacity.value -= (null !== (e = o.opacity.velocity) && void 0 !== e ? e : 0) * t.factor
                    }
                    ot(o, n.destroy, o.opacity.value, a, l), o.destroyed || (o.opacity.value = r.clamp(o.opacity.value, a, l))
                }
            }
            updateSize(t) {
                var i;
                const e = this.container,
                    o = this.particle,
                    s = o.options.size,
                    n = s.animation,
                    a = (null !== (i = o.size.velocity) && void 0 !== i ? i : 0) * t.factor,
                    l = r.getRangeMin(s.value) * e.retina.pixelRatio,
                    c = r.getRangeMax(s.value) * e.retina.pixelRatio;
                if (!o.destroyed && n.enable && (n.count <= 0 || o.loops.size < n.count)) {
                    switch (o.size.status) {
                        case m.increasing:
                            o.size.value >= c ? (o.size.status = m.decreasing, o.loops.size++) : o.size.value += a;
                            break;
                        case m.decreasing:
                            o.size.value <= l ? (o.size.status = m.increasing, o.loops.size++) : o.size.value -= a
                    }
                    ot(o, n.destroy, o.size.value, l, c), o.destroyed || (o.size.value = r.clamp(o.size.value, l, c))
                }
            }
            updateAngle(t) {
                var i;
                const e = this.particle,
                    o = e.options.rotate.animation,
                    s = (null !== (i = e.rotate.velocity) && void 0 !== i ? i : 0) * t.factor,
                    n = 2 * Math.PI;
                if (o.enable) switch (e.rotate.status) {
                    case m.increasing:
                        e.rotate.value += s, e.rotate.value > n && (e.rotate.value -= n);
                        break;
                    case m.decreasing:
                    default:
                        e.rotate.value -= s, e.rotate.value < 0 && (e.rotate.value += n)
                }
            }
            updateColor(t) {
                var i, e, o;
                const s = this.particle,
                    n = s.options.color.animation;
                void 0 !== (null === (i = s.color) || void 0 === i ? void 0 : i.h) && this.updateColorValue(s, t, s.color.h, n.h, 360, !1), void 0 !== (null === (e = s.color) || void 0 === e ? void 0 : e.s) && this.updateColorValue(s, t, s.color.s, n.s, 100, !0), void 0 !== (null === (o = s.color) || void 0 === o ? void 0 : o.l) && this.updateColorValue(s, t, s.color.l, n.l, 100, !0)
            }
            updateStrokeColor(t) {
                var i, e, o, s, n, a, r, l, c, d, h, u;
                const v = this.particle;
                if (!v.stroke.color) return;
                const p = v.stroke.color.animation,
                    y = p;
                if (void 0 !== y.enable) {
                    const s = null !== (e = null === (i = v.strokeColor) || void 0 === i ? void 0 : i.h) && void 0 !== e ? e : null === (o = v.color) || void 0 === o ? void 0 : o.h;
                    s && this.updateColorValue(v, t, s, y, 360, !1)
                } else {
                    const i = p,
                        e = null !== (n = null === (s = v.strokeColor) || void 0 === s ? void 0 : s.h) && void 0 !== n ? n : null === (a = v.color) || void 0 === a ? void 0 : a.h;
                    e && this.updateColorValue(v, t, e, i.h, 360, !1);
                    const o = null !== (l = null === (r = v.strokeColor) || void 0 === r ? void 0 : r.s) && void 0 !== l ? l : null === (c = v.color) || void 0 === c ? void 0 : c.s;
                    o && this.updateColorValue(v, t, o, i.s, 100, !0);
                    const y = null !== (h = null === (d = v.strokeColor) || void 0 === d ? void 0 : d.l) && void 0 !== h ? h : null === (u = v.color) || void 0 === u ? void 0 : u.l;
                    y && this.updateColorValue(v, t, y, i.l, 100, !0)
                }
            }
            updateColorValue(t, i, e, o, s, n) {
                var a;
                const l = e;
                if (!l || !o.enable) return;
                const c = r.randomInRange(o.offset),
                    d = (null !== (a = e.velocity) && void 0 !== a ? a : 0) * i.factor + 3.6 * c;
                n && l.status !== m.increasing ? (l.value -= d, l.value < 0 && (l.status = m.increasing, l.value += l.value)) : (l.value += d, n && l.value > s && (l.status = m.decreasing, l.value -= l.value % s)), l.value > s && (l.value %= s)
            }
            updateOutModes(t) {
                var i, e, s, n;
                const a = this.particle.options.move.outModes;
                this.updateOutMode(t, null !== (i = a.bottom) && void 0 !== i ? i : a.default, o.bottom), this.updateOutMode(t, null !== (e = a.left) && void 0 !== e ? e : a.default, o.left), this.updateOutMode(t, null !== (s = a.right) && void 0 !== s ? s : a.default, o.right), this.updateOutMode(t, null !== (n = a.top) && void 0 !== n ? n : a.default, o.top)
            }
            updateOutMode(t, i, e) {
                const o = this.container,
                    s = this.particle;
                switch (i) {
                    case v.bounce:
                    case v.bounceVertical:
                    case v.bounceHorizontal:
                    case "bounceVertical":
                    case "bounceHorizontal":
                    case v.split:
                        this.updateBounce(t, e, i);
                        break;
                    case v.destroy:
                        S.isPointInside(s.position, o.canvas.size, s.getRadius(), e) || o.particles.remove(s, !0);
                        break;
                    case v.out:
                        S.isPointInside(s.position, o.canvas.size, s.getRadius(), e) || this.fixOutOfCanvasPosition(e);
                        break;
                    case v.none:
                        this.bounceNone(e)
                }
            }
            fixOutOfCanvasPosition(t) {
                const i = this.container,
                    e = this.particle,
                    s = e.options.move.warp,
                    n = i.canvas.size,
                    a = {
                        bottom: n.height + e.getRadius() - e.offset.y,
                        left: -e.getRadius() - e.offset.x,
                        right: n.width + e.getRadius() + e.offset.x,
                        top: -e.getRadius() - e.offset.y
                    },
                    r = e.getRadius(),
                    l = S.calculateBounds(e.position, r);
                t === o.right && l.left > n.width - e.offset.x ? (e.position.x = a.left, s || (e.position.y = Math.random() * n.height)) : t === o.left && l.right < -e.offset.x && (e.position.x = a.right, s || (e.position.y = Math.random() * n.height)), t === o.bottom && l.top > n.height - e.offset.y ? (s || (e.position.x = Math.random() * n.width), e.position.y = a.top) : t === o.top && l.bottom < -e.offset.y && (s || (e.position.x = Math.random() * n.width), e.position.y = a.bottom)
            }
            updateBounce(t, i, e) {
                const s = this.container,
                    n = this.particle;
                let a = !1;
                for (const [, e] of s.plugins)
                    if (void 0 !== e.particleBounce && (a = e.particleBounce(n, t, i)), a) break;
                if (a) return;
                const l = n.getPosition(),
                    c = n.offset,
                    d = n.getRadius(),
                    h = S.calculateBounds(l, d),
                    u = s.canvas.size;
                ! function(t) {
                    if (t.outMode === v.bounce || t.outMode === v.bounceHorizontal || "bounceHorizontal" === t.outMode || t.outMode === v.split) {
                        const i = t.particle.velocity.x;
                        let e = !1;
                        if (t.direction === o.right && t.bounds.right >= t.canvasSize.width && i > 0 || t.direction === o.left && t.bounds.left <= 0 && i < 0) {
                            const i = r.getValue(t.particle.options.bounce.horizontal);
                            t.particle.velocity.x *= -i, e = !0
                        }
                        if (!e) return;
                        const s = t.offset.x + t.size;
                        t.bounds.right >= t.canvasSize.width ? t.particle.position.x = t.canvasSize.width - s : t.bounds.left <= 0 && (t.particle.position.x = s), t.outMode === v.split && t.particle.destroy()
                    }
                }({
                    particle: n,
                    outMode: e,
                    direction: i,
                    bounds: h,
                    canvasSize: u,
                    offset: c,
                    size: d
                }),
                function(t) {
                    if (t.outMode === v.bounce || t.outMode === v.bounceVertical || "bounceVertical" === t.outMode || t.outMode === v.split) {
                        const i = t.particle.velocity.y;
                        let e = !1;
                        if (t.direction === o.bottom && t.bounds.bottom >= t.canvasSize.height && i > 0 || t.direction === o.top && t.bounds.top <= 0 && i < 0) {
                            const i = r.getValue(t.particle.options.bounce.vertical);
                            t.particle.velocity.y *= -i, e = !0
                        }
                        if (!e) return;
                        const s = t.offset.y + t.size;
                        t.bounds.bottom >= t.canvasSize.height ? t.particle.position.y = t.canvasSize.height - s : t.bounds.top <= 0 && (t.particle.position.y = s), t.outMode === v.split && t.particle.destroy()
                    }
                }({
                    particle: n,
                    outMode: e,
                    direction: i,
                    bounds: h,
                    canvasSize: u,
                    offset: c,
                    size: d
                })
            }
            bounceNone(t) {
                const i = this.particle;
                if (i.options.move.distance) return;
                const e = i.options.move.gravity,
                    s = this.container;
                if (e.enable) {
                    const n = i.position;
                    (e.acceleration >= 0 && n.y > s.canvas.size.height && t === o.bottom || e.acceleration < 0 && n.y < 0 && t === o.top) && s.particles.remove(i)
                } else S.isPointInside(i.position, s.canvas.size, i.getRadius(), t) || s.particles.remove(i)
            }
        }
        class nt {
            constructor() {
                this.value = "#fff"
            }
            static create(t, i) {
                const e = null != t ? t : new nt;
                return void 0 !== i && e.load("string" == typeof i ? {
                    value: i
                } : i), e
            }
            load(t) {
                void 0 !== (null == t ? void 0 : t.value) && (this.value = t.value)
            }
        }
        class at {
            constructor() {
                this.blur = 5, this.color = new nt, this.enable = !1, this.color.value = "#00ff00"
            }
            load(t) {
                void 0 !== t && (void 0 !== t.blur && (this.blur = t.blur), this.color = nt.create(this.color, t.color), void 0 !== t.enable && (this.enable = t.enable))
            }
        }
        class rt {
            constructor() {
                this.enable = !1, this.frequency = 1
            }
            load(t) {
                void 0 !== t && (void 0 !== t.color && (this.color = nt.create(this.color, t.color)), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.frequency && (this.frequency = t.frequency), void 0 !== t.opacity && (this.opacity = t.opacity))
            }
        }
        class lt {
            constructor() {
                this.blink = !1, this.color = new nt, this.consent = !1, this.distance = 100, this.enable = !1, this.frequency = 1, this.opacity = 1, this.shadow = new at, this.triangles = new rt, this.width = 1, this.warp = !1
            }
            load(t) {
                void 0 !== t && (void 0 !== t.id && (this.id = t.id), void 0 !== t.blink && (this.blink = t.blink), this.color = nt.create(this.color, t.color), void 0 !== t.consent && (this.consent = t.consent), void 0 !== t.distance && (this.distance = t.distance), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.frequency && (this.frequency = t.frequency), void 0 !== t.opacity && (this.opacity = t.opacity), this.shadow.load(t.shadow), this.triangles.load(t.triangles), void 0 !== t.width && (this.width = t.width), void 0 !== t.warp && (this.warp = t.warp))
            }
        }
        class ct {
            constructor() {
                this.enable = !1, this.rotate = {
                    x: 3e3,
                    y: 3e3
                }
            }
            get rotateX() {
                return this.rotate.x
            }
            set rotateX(t) {
                this.rotate.x = t
            }
            get rotateY() {
                return this.rotate.y
            }
            set rotateY(t) {
                this.rotate.y = t
            }
            load(t) {
                var i, e, o, s;
                if (void 0 === t) return;
                void 0 !== t.enable && (this.enable = t.enable);
                const n = null !== (e = null === (i = t.rotate) || void 0 === i ? void 0 : i.x) && void 0 !== e ? e : t.rotateX;
                void 0 !== n && (this.rotate.x = n);
                const a = null !== (s = null === (o = t.rotate) || void 0 === o ? void 0 : o.y) && void 0 !== s ? s : t.rotateY;
                void 0 !== a && (this.rotate.y = a)
            }
        }
        class dt {
            constructor() {
                this.enable = !1, this.length = 10, this.fillColor = new nt, this.fillColor.value = "#000000"
            }
            load(t) {
                void 0 !== t && (void 0 !== t.enable && (this.enable = t.enable), this.fillColor = nt.create(this.fillColor, t.fillColor), void 0 !== t.length && (this.length = t.length))
            }
        }
        class ht {
            constructor() {
                this.enable = !1, this.minimumValue = 0
            }
            load(t) {
                t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.minimumValue && (this.minimumValue = t.minimumValue))
            }
        }
        class ut {
            constructor() {
                this.random = new ht, this.value = 0
            }
            load(t) {
                t && ("boolean" == typeof t.random ? this.random.enable = t.random : this.random.load(t.random), void 0 !== t.value && (this.value = r.setRangeValue(t.value, this.random.enable ? this.random.minimumValue : void 0)))
            }
        }
        class vt extends ut {
            constructor() {
                super()
            }
        }
        class pt {
            constructor() {
                this.clamp = !0, this.delay = new vt, this.enable = !1
            }
            load(t) {
                void 0 !== t && (void 0 !== t.clamp && (this.clamp = t.clamp), this.delay.load(t.delay), void 0 !== t.enable && (this.enable = t.enable), this.generator = t.generator)
            }
        }
        class yt {
            constructor() {
                this.offset = 45, this.value = 90
            }
            load(t) {
                void 0 !== t && (void 0 !== t.offset && (this.offset = t.offset), void 0 !== t.value && (this.value = t.value))
            }
        }
        class mt {
            constructor() {
                this.acceleration = 9.81, this.enable = !1, this.maxSpeed = 50
            }
            load(t) {
                t && (void 0 !== t.acceleration && (this.acceleration = t.acceleration), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.maxSpeed && (this.maxSpeed = t.maxSpeed))
            }
        }
        class ft {
            constructor() {
                this.default = v.out
            }
            load(t) {
                var i, e, o, s;
                t && (void 0 !== t.default && (this.default = t.default), this.bottom = null !== (i = t.bottom) && void 0 !== i ? i : t.default, this.left = null !== (e = t.left) && void 0 !== e ? e : t.default, this.right = null !== (o = t.right) && void 0 !== o ? o : t.default, this.top = null !== (s = t.top) && void 0 !== s ? s : t.default)
            }
        }
        class gt {
            constructor() {
                this.angle = new yt, this.attract = new ct, this.decay = 0, this.distance = 0, this.direction = s.none, this.drift = 0, this.enable = !1, this.gravity = new mt, this.path = new pt, this.outModes = new ft, this.random = !1, this.size = !1, this.speed = 2, this.straight = !1, this.trail = new dt, this.vibrate = !1, this.warp = !1
            }
            get collisions() {
                return !1
            }
            set collisions(t) {}
            get bounce() {
                return this.collisions
            }
            set bounce(t) {
                this.collisions = t
            }
            get out_mode() {
                return this.outMode
            }
            set out_mode(t) {
                this.outMode = t
            }
            get outMode() {
                return this.outModes.default
            }
            set outMode(t) {
                this.outModes.default = t
            }
            get noise() {
                return this.path
            }
            set noise(t) {
                this.path = t
            }
            load(t) {
                var i, e, o;
                if (void 0 === t) return;
                void 0 !== t.angle && ("number" == typeof t.angle ? this.angle.value = t.angle : this.angle.load(t.angle)), this.attract.load(t.attract), void 0 !== t.decay && (this.decay = t.decay), void 0 !== t.direction && (this.direction = t.direction), void 0 !== t.distance && (this.distance = t.distance), void 0 !== t.drift && (this.drift = r.setRangeValue(t.drift)), void 0 !== t.enable && (this.enable = t.enable), this.gravity.load(t.gravity);
                const s = null !== (i = t.outMode) && void 0 !== i ? i : t.out_mode;
                void 0 === t.outModes && void 0 === s || ("string" == typeof t.outModes || void 0 === t.outModes && void 0 !== s ? this.outModes.load({
                    default: null !== (e = t.outModes) && void 0 !== e ? e : s
                }) : this.outModes.load(t.outModes)), this.path.load(null !== (o = t.path) && void 0 !== o ? o : t.noise), void 0 !== t.random && (this.random = t.random), void 0 !== t.size && (this.size = t.size), void 0 !== t.speed && (this.speed = r.setRangeValue(t.speed)), void 0 !== t.straight && (this.straight = t.straight), this.trail.load(t.trail), void 0 !== t.vibrate && (this.vibrate = t.vibrate), void 0 !== t.warp && (this.warp = t.warp)
            }
        }
        class bt {
            constructor() {
                this.enable = !1, this.area = 800, this.factor = 1e3
            }
            get value_area() {
                return this.area
            }
            set value_area(t) {
                this.area = t
            }
            load(t) {
                var i;
                if (void 0 === t) return;
                void 0 !== t.enable && (this.enable = t.enable);
                const e = null !== (i = t.area) && void 0 !== i ? i : t.value_area;
                void 0 !== e && (this.area = e), void 0 !== t.factor && (this.factor = t.factor)
            }
        }
        class wt {
            constructor() {
                this.density = new bt, this.limit = 0, this.value = 100
            }
            get max() {
                return this.limit
            }
            set max(t) {
                this.limit = t
            }
            load(t) {
                var i;
                if (void 0 === t) return;
                this.density.load(t.density);
                const e = null !== (i = t.limit) && void 0 !== i ? i : t.max;
                void 0 !== e && (this.limit = e), void 0 !== t.value && (this.value = t.value)
            }
        }
        class xt {
            constructor() {
                this.count = 0, this.enable = !1, this.speed = 1, this.sync = !1
            }
            load(t) {
                t && (void 0 !== t.count && (this.count = t.count), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.speed && (this.speed = t.speed), void 0 !== t.sync && (this.sync = t.sync))
            }
        }
        class kt extends xt {
            constructor() {
                super(), this.destroy = f.none, this.enable = !1, this.minimumValue = 0, this.speed = 2, this.startValue = w.random, this.sync = !1
            }
            get opacity_min() {
                return this.minimumValue
            }
            set opacity_min(t) {
                this.minimumValue = t
            }
            load(t) {
                var i;
                if (void 0 === t) return;
                super.load(t), void 0 !== t.destroy && (this.destroy = t.destroy), void 0 !== t.enable && (this.enable = t.enable);
                const e = null !== (i = t.minimumValue) && void 0 !== i ? i : t.opacity_min;
                void 0 !== e && (this.minimumValue = e), void 0 !== t.speed && (this.speed = t.speed), void 0 !== t.startValue && (this.startValue = t.startValue), void 0 !== t.sync && (this.sync = t.sync)
            }
        }
        class Pt extends ut {
            constructor() {
                super(), this.animation = new kt, this.random.minimumValue = .1, this.value = 1
            }
            get anim() {
                return this.animation
            }
            set anim(t) {
                this.animation = t
            }
            load(t) {
                var i;
                if (!t) return;
                super.load(t);
                const e = null !== (i = t.animation) && void 0 !== i ? i : t.anim;
                void 0 !== e && (this.animation.load(e), this.value = r.setRangeValue(this.value, this.animation.enable ? this.animation.minimumValue : void 0))
            }
        }
        class Mt {
            constructor() {
                this.options = {}, this.type = b.circle
            }
            get image() {
                var t;
                return null !== (t = this.options[b.image]) && void 0 !== t ? t : this.options[b.images]
            }
            set image(t) {
                this.options[b.image] = t, this.options[b.images] = t
            }
            get custom() {
                return this.options
            }
            set custom(t) {
                this.options = t
            }
            get images() {
                return this.image instanceof Array ? this.image : [this.image]
            }
            set images(t) {
                this.image = t
            }
            get stroke() {
                return []
            }
            set stroke(t) {}
            get character() {
                var t;
                return null !== (t = this.options[b.character]) && void 0 !== t ? t : this.options[b.char]
            }
            set character(t) {
                this.options[b.character] = t, this.options[b.char] = t
            }
            get polygon() {
                var t;
                return null !== (t = this.options[b.polygon]) && void 0 !== t ? t : this.options[b.star]
            }
            set polygon(t) {
                this.options[b.polygon] = t, this.options[b.star] = t
            }
            load(t) {
                var i, e, o;
                if (void 0 === t) return;
                const s = null !== (i = t.options) && void 0 !== i ? i : t.custom;
                if (void 0 !== s)
                    for (const t in s) {
                        const i = s[t];
                        void 0 !== i && (this.options[t] = S.deepExtend(null !== (e = this.options[t]) && void 0 !== e ? e : {}, i))
                    }
                this.loadShape(t.character, b.character, b.char, !0), this.loadShape(t.polygon, b.polygon, b.star, !1), this.loadShape(null !== (o = t.image) && void 0 !== o ? o : t.images, b.image, b.images, !0), void 0 !== t.type && (this.type = t.type)
            }
            loadShape(t, i, e, o) {
                var s, n, a, r;
                void 0 !== t && (t instanceof Array ? (this.options[i] instanceof Array || (this.options[i] = [], this.options[e] && !o || (this.options[e] = [])), this.options[i] = S.deepExtend(null !== (s = this.options[i]) && void 0 !== s ? s : [], t), this.options[e] && !o || (this.options[e] = S.deepExtend(null !== (n = this.options[e]) && void 0 !== n ? n : [], t))) : (this.options[i] instanceof Array && (this.options[i] = {}, this.options[e] && !o || (this.options[e] = {})), this.options[i] = S.deepExtend(null !== (a = this.options[i]) && void 0 !== a ? a : {}, t), this.options[e] && !o || (this.options[e] = S.deepExtend(null !== (r = this.options[e]) && void 0 !== r ? r : {}, t))))
            }
        }
        class Rt extends xt {
            constructor() {
                super(), this.destroy = f.none, this.enable = !1, this.minimumValue = 0, this.speed = 5, this.startValue = w.random, this.sync = !1
            }
            get size_min() {
                return this.minimumValue
            }
            set size_min(t) {
                this.minimumValue = t
            }
            load(t) {
                var i;
                if (void 0 === t) return;
                super.load(t), void 0 !== t.destroy && (this.destroy = t.destroy), void 0 !== t.enable && (this.enable = t.enable);
                const e = null !== (i = t.minimumValue) && void 0 !== i ? i : t.size_min;
                void 0 !== e && (this.minimumValue = e), void 0 !== t.speed && (this.speed = t.speed), void 0 !== t.startValue && (this.startValue = t.startValue), void 0 !== t.sync && (this.sync = t.sync)
            }
        }
        class St extends ut {
            constructor() {
                super(), this.animation = new Rt, this.random.minimumValue = 1, this.value = 3
            }
            get anim() {
                return this.animation
            }
            set anim(t) {
                this.animation = t
            }
            load(t) {
                var i;
                if (!t) return;
                super.load(t);
                const e = null !== (i = t.animation) && void 0 !== i ? i : t.anim;
                void 0 !== e && (this.animation.load(e), this.value = r.setRangeValue(this.value, this.animation.enable ? this.animation.minimumValue : void 0))
            }
        }
        class Ct {
            constructor() {
                this.enable = !1, this.speed = 0, this.sync = !1
            }
            load(t) {
                void 0 !== t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.speed && (this.speed = t.speed), void 0 !== t.sync && (this.sync = t.sync))
            }
        }
        class zt extends ut {
            constructor() {
                super(), this.animation = new Ct, this.direction = n.clockwise, this.path = !1, this.value = {
                    min: 0,
                    max: 360
                }
            }
            load(t) {
                t && (super.load(t), void 0 !== t.direction && (this.direction = t.direction), this.animation.load(t.animation), void 0 !== t.path && (this.path = t.path))
            }
        }
        class At {
            constructor() {
                this.blur = 0, this.color = new nt, this.enable = !1, this.offset = {
                    x: 0,
                    y: 0
                }, this.color.value = "#000000"
            }
            load(t) {
                void 0 !== t && (void 0 !== t.blur && (this.blur = t.blur), this.color = nt.create(this.color, t.color), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.offset && (void 0 !== t.offset.x && (this.offset.x = t.offset.x), void 0 !== t.offset.y && (this.offset.y = t.offset.y)))
            }
        }
        class Tt {
            constructor() {
                this.count = 0, this.enable = !1, this.offset = 0, this.speed = 1, this.sync = !0
            }
            load(t) {
                void 0 !== t && (void 0 !== t.count && (this.count = t.count), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.offset && (this.offset = r.setRangeValue(t.offset)), void 0 !== t.speed && (this.speed = t.speed), void 0 !== t.sync && (this.sync = t.sync))
            }
        }
        class Dt {
            constructor() {
                this.h = new Tt, this.s = new Tt, this.l = new Tt
            }
            load(t) {
                t && (this.h.load(t.h), this.s.load(t.s), this.l.load(t.l))
            }
        }
        class Ot extends nt {
            constructor() {
                super(), this.animation = new Dt
            }
            static create(t, i) {
                const e = null != t ? t : new Ot;
                return void 0 !== i && e.load("string" == typeof i ? {
                    value: i
                } : i), e
            }
            load(t) {
                if (super.load(t), !t) return;
                const i = t.animation;
                void 0 !== i && (void 0 !== i.enable ? this.animation.h.load(i) : this.animation.load(t.animation))
            }
        }
        class Et {
            constructor() {
                this.width = 0
            }
            load(t) {
                void 0 !== t && (void 0 !== t.color && (this.color = Ot.create(this.color, t.color)), void 0 !== t.width && (this.width = t.width), void 0 !== t.opacity && (this.opacity = t.opacity))
            }
        }
        class It extends ut {
            constructor() {
                super(), this.random.minimumValue = .1, this.value = 1
            }
        }
        class Ft {
            constructor() {
                this.horizontal = new It, this.vertical = new It
            }
            load(t) {
                t && (this.horizontal.load(t.horizontal), this.vertical.load(t.vertical))
            }
        }
        class Vt {
            constructor() {
                this.enable = !0, this.retries = 0
            }
            load(t) {
                t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.retries && (this.retries = t.retries))
            }
        }
        class Lt {
            constructor() {
                this.bounce = new Ft, this.enable = !1, this.mode = u.bounce, this.overlap = new Vt
            }
            load(t) {
                void 0 !== t && (this.bounce.load(t.bounce), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.mode && (this.mode = t.mode), this.overlap.load(t.overlap))
            }
        }
        class Ht {
            constructor() {
                this.enable = !1, this.frequency = .05, this.opacity = 1
            }
            load(t) {
                void 0 !== t && (void 0 !== t.color && (this.color = nt.create(this.color, t.color)), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.frequency && (this.frequency = t.frequency), void 0 !== t.opacity && (this.opacity = t.opacity))
            }
        }
        class qt {
            constructor() {
                this.lines = new Ht, this.particles = new Ht
            }
            load(t) {
                void 0 !== t && (this.lines.load(t.lines), this.particles.load(t.particles))
            }
        }
        class _t extends ut {
            constructor() {
                super(), this.sync = !1
            }
            load(t) {
                t && (super.load(t), void 0 !== t.sync && (this.sync = t.sync))
            }
        }
        class Bt extends ut {
            constructor() {
                super(), this.random.minimumValue = 1e-4, this.sync = !1
            }
            load(t) {
                void 0 !== t && (super.load(t), void 0 !== t.sync && (this.sync = t.sync))
            }
        }
        class Wt {
            constructor() {
                this.count = 0, this.delay = new _t, this.duration = new Bt
            }
            load(t) {
                void 0 !== t && (void 0 !== t.count && (this.count = t.count), this.delay.load(t.delay), this.duration.load(t.duration))
            }
        }
        class Gt extends ut {
            constructor() {
                super(), this.value = 3
            }
        }
        class Nt extends ut {
            constructor() {
                super(), this.value = {
                    min: 4,
                    max: 9
                }
            }
        }
        class $t {
            constructor() {
                this.count = 1, this.factor = new Gt, this.rate = new Nt
            }
            load(t) {
                t && (void 0 !== t.count && (this.count = t.count), this.factor.load(t.factor), this.rate.load(t.rate), void 0 !== t.particles && (this.particles = S.deepExtend({}, t.particles)))
            }
        }
        class Ut {
            constructor() {
                this.mode = c.none, this.split = new $t
            }
            load(t) {
                t && (void 0 !== t.mode && (this.mode = t.mode), this.split.load(t.split))
            }
        }
        class jt {
            constructor() {
                this.bounce = new Ft, this.collisions = new Lt, this.color = new Ot, this.destroy = new Ut, this.life = new Wt, this.links = new lt, this.move = new gt, this.number = new wt, this.opacity = new Pt, this.reduceDuplicates = !1, this.rotate = new zt, this.shadow = new At, this.shape = new Mt, this.size = new St, this.stroke = new Et, this.twinkle = new qt
            }
            get line_linked() {
                return this.links
            }
            set line_linked(t) {
                this.links = t
            }
            get lineLinked() {
                return this.links
            }
            set lineLinked(t) {
                this.links = t
            }
            load(t) {
                var i, e, o, s, n, a, r;
                if (void 0 === t) return;
                this.bounce.load(t.bounce), this.color = Ot.create(this.color, t.color), this.destroy.load(t.destroy), this.life.load(t.life);
                const l = null !== (e = null !== (i = t.links) && void 0 !== i ? i : t.lineLinked) && void 0 !== e ? e : t.line_linked;
                void 0 !== l && this.links.load(l), this.move.load(t.move), this.number.load(t.number), this.opacity.load(t.opacity), void 0 !== t.reduceDuplicates && (this.reduceDuplicates = t.reduceDuplicates), this.rotate.load(t.rotate), this.shape.load(t.shape), this.size.load(t.size), this.shadow.load(t.shadow), this.twinkle.load(t.twinkle);
                const c = null !== (s = null === (o = t.move) || void 0 === o ? void 0 : o.collisions) && void 0 !== s ? s : null === (n = t.move) || void 0 === n ? void 0 : n.bounce;
                void 0 !== c && (this.collisions.enable = c), this.collisions.load(t.collisions);
                const d = null !== (a = t.stroke) && void 0 !== a ? a : null === (r = t.shape) || void 0 === r ? void 0 : r.stroke;
                void 0 !== d && (d instanceof Array ? this.stroke = d.map((t => {
                    const i = new Et;
                    return i.load(t), i
                })) : (this.stroke instanceof Array && (this.stroke = new Et), this.stroke.load(d)))
            }
        }
        class Xt {
            constructor(t) {
                this.container = t
            }
            startInfection(t) {
                t > this.container.actualOptions.infection.stages.length || t < 0 || (this.infectionDelay = 0, this.infectionDelayStage = t)
            }
            updateInfectionStage(t) {
                t > this.container.actualOptions.infection.stages.length || t < 0 || void 0 !== this.infectionStage && this.infectionStage > t || (this.infectionStage = t, this.infectionTime = 0)
            }
            updateInfection(t) {
                const i = this.container.actualOptions,
                    e = i.infection,
                    o = i.infection.stages,
                    s = o.length;
                if (void 0 !== this.infectionDelay && void 0 !== this.infectionDelayStage) {
                    const i = this.infectionDelayStage;
                    if (i > s || i < 0) return;
                    this.infectionDelay > 1e3 * e.delay ? (this.infectionStage = i, this.infectionTime = 0, delete this.infectionDelay, delete this.infectionDelayStage) : this.infectionDelay += t
                } else delete this.infectionDelay, delete this.infectionDelayStage;
                if (void 0 !== this.infectionStage && void 0 !== this.infectionTime) {
                    const i = o[this.infectionStage];
                    void 0 !== i.duration && i.duration >= 0 && this.infectionTime > 1e3 * i.duration ? this.nextInfectionStage() : this.infectionTime += t
                } else delete this.infectionStage, delete this.infectionTime
            }
            nextInfectionStage() {
                const t = this.container.actualOptions,
                    i = t.infection.stages.length;
                if (!(i <= 0 || void 0 === this.infectionStage) && (this.infectionTime = 0, i <= ++this.infectionStage)) {
                    if (t.infection.cure) return delete this.infectionStage, void delete this.infectionTime;
                    this.infectionStage = 0, this.infectionTime = 0
                }
            }
        }
        class Yt {
            constructor(t, i) {
                this.container = t, this.particle = i
            }
            move(t) {
                const i = this.particle;
                i.bubble.inRange = !1, i.links = [];
                for (const [, e] of this.container.plugins) {
                    if (i.destroyed) break;
                    e.particleUpdate && e.particleUpdate(i, t)
                }
                i.destroyed || (this.moveParticle(t), this.moveParallax())
            }
            moveParticle(t) {
                var i, e;
                const o = this.particle,
                    s = o.options;
                if (!s.move.enable) return;
                const n = this.container,
                    a = this.getProximitySpeedFactor(),
                    l = (null !== (i = o.moveSpeed) && void 0 !== i ? i : r.getRangeValue(o.options.move.speed) * n.retina.pixelRatio) * n.retina.reduceFactor,
                    c = r.getRangeMax(o.options.size.value) * n.retina.pixelRatio,
                    d = l / 2 * (s.move.size ? o.getRadius() / c : 1) * a * t.factor,
                    h = null !== (e = o.moveDrift) && void 0 !== e ? e : r.getRangeValue(o.options.move.drift) * n.retina.pixelRatio;
                this.applyPath(t);
                const u = s.move.gravity;
                u.enable && (o.velocity.y += u.acceleration * t.factor / (60 * d)), o.velocity.x += h * t.factor / (60 * d);
                const v = 1 - o.options.move.decay;
                o.velocity.multTo(v);
                const p = o.velocity.mult(d);
                u.enable && p.y >= u.maxSpeed && u.maxSpeed > 0 && (p.y = u.maxSpeed, o.velocity.y = p.y / d), o.position.addTo(p), s.move.vibrate && (o.position.x += Math.sin(o.position.x * Math.cos(o.position.y)), o.position.y += Math.cos(o.position.y * Math.sin(o.position.x)));
                const y = o.initialPosition,
                    m = r.getDistance(y, o.position);
                o.maxDistance && (m >= o.maxDistance && !o.misplaced ? (o.misplaced = m > o.maxDistance, o.velocity.x = o.velocity.y / 2 - o.velocity.x, o.velocity.y = o.velocity.x / 2 - o.velocity.y) : m < o.maxDistance && o.misplaced ? o.misplaced = !1 : o.misplaced && ((o.position.x < y.x && o.velocity.x < 0 || o.position.x > y.x && o.velocity.x > 0) && (o.velocity.x *= -Math.random()), (o.position.y < y.y && o.velocity.y < 0 || o.position.y > y.y && o.velocity.y > 0) && (o.velocity.y *= -Math.random())))
            }
            applyPath(t) {
                const i = this.particle,
                    e = i.options.move.path;
                if (!e.enable) return;
                const o = this.container;
                if (i.lastPathTime <= i.pathDelay) return void(i.lastPathTime += t.value);
                let s = o.pathGenerator;
                if (e.generator) {
                    const t = G.getPathGenerator(e.generator);
                    t && (s = t)
                }
                const n = s.generate(i);
                i.velocity.addTo(n), e.clamp && (i.velocity.x = r.clamp(i.velocity.x, -1, 1), i.velocity.y = r.clamp(i.velocity.y, -1, 1)), i.lastPathTime -= i.pathDelay
            }
            moveParallax() {
                const t = this.container,
                    i = t.actualOptions;
                if (S.isSsr() || !i.interactivity.events.onHover.parallax.enable) return;
                const e = this.particle,
                    o = i.interactivity.events.onHover.parallax.force,
                    s = t.interactivity.mouse.position;
                if (!s) return;
                const n = t.canvas.size.width / 2,
                    a = t.canvas.size.height / 2,
                    r = i.interactivity.events.onHover.parallax.smooth,
                    l = e.getRadius() / o,
                    c = (s.x - n) * l,
                    d = (s.y - a) * l;
                e.offset.x += (c - e.offset.x) / r, e.offset.y += (d - e.offset.y) / r
            }
            getProximitySpeedFactor() {
                const t = this.container,
                    i = t.actualOptions;
                if (!S.isInArray(h.slow, i.interactivity.events.onHover.mode)) return 1;
                const e = this.container.interactivity.mouse.position;
                if (!e) return 1;
                const o = this.particle.getPosition(),
                    s = r.getDistance(e, o),
                    n = t.retina.slowModeRadius;
                if (s > n) return 1;
                return (s / n || 0) / i.interactivity.modes.slow.factor
            }
        }
        class Jt {
            constructor(t, i, e, o) {
                var s, l, c, d, h, u, v, p, y;
                this.id = t, this.container = i, this.links = [], this.fill = !0, this.close = !0, this.lastPathTime = 0, this.destroyed = !1, this.unbreakable = !1, this.splitCount = 0, this.misplaced = !1, this.loops = {
                    opacity: 0,
                    size: 0
                };
                const f = i.retina.pixelRatio,
                    g = i.actualOptions,
                    b = new jt;
                b.load(g.particles);
                const x = b.shape.type,
                    k = b.reduceDuplicates;
                if (this.shape = x instanceof Array ? S.itemFromArray(x, this.id, k) : x, null == o ? void 0 : o.shape) {
                    if (o.shape.type) {
                        const t = o.shape.type;
                        this.shape = t instanceof Array ? S.itemFromArray(t, this.id, k) : t
                    }
                    const t = new Mt;
                    if (t.load(o.shape), this.shape) {
                        const i = t.options[this.shape];
                        i && (this.shapeData = S.deepExtend({}, i instanceof Array ? S.itemFromArray(i, this.id, k) : i))
                    }
                } else {
                    const t = b.shape.options[this.shape];
                    t && (this.shapeData = S.deepExtend({}, t instanceof Array ? S.itemFromArray(t, this.id, k) : t))
                }
                void 0 !== o && b.load(o), void 0 !== (null === (s = this.shapeData) || void 0 === s ? void 0 : s.particles) && b.load(null === (l = this.shapeData) || void 0 === l ? void 0 : l.particles), this.fill = null !== (d = null === (c = this.shapeData) || void 0 === c ? void 0 : c.fill) && void 0 !== d ? d : this.fill, this.close = null !== (u = null === (h = this.shapeData) || void 0 === h ? void 0 : h.close) && void 0 !== u ? u : this.close, this.options = b, this.pathDelay = 1e3 * r.getValue(this.options.move.path.delay), i.retina.initParticle(this);
                const P = this.options.color,
                    M = this.options.size,
                    R = r.getValue(M) * i.retina.pixelRatio,
                    C = "boolean" == typeof M.random ? M.random : M.random.enable;
                this.size = {
                    value: R
                }, this.direction = this.options.move.direction, this.bubble = {
                    inRange: !1
                }, this.initialVelocity = this.calculateVelocity(), this.velocity = this.initialVelocity.copy();
                const z = this.options.rotate;
                this.rotate = {
                    value: r.getRangeValue(z.value) * Math.PI / 180
                };
                let A = z.direction;
                if (A === n.random) {
                    A = Math.floor(2 * Math.random()) > 0 ? n.counterClockwise : n.clockwise
                }
                switch (A) {
                    case n.counterClockwise:
                    case "counterClockwise":
                        this.rotate.status = m.decreasing;
                        break;
                    case n.clockwise:
                        this.rotate.status = m.increasing
                }
                const D = this.options.rotate.animation;
                D.enable && (this.rotate.velocity = D.speed / 360 * i.retina.reduceFactor, D.sync || (this.rotate.velocity *= Math.random()));
                const O = this.options.size.animation;
                if (O.enable) {
                    if (this.size.status = m.increasing, !C) switch (O.startValue) {
                        case w.min:
                            this.size.value = O.minimumValue * f;
                            break;
                        case w.random:
                            this.size.value = r.randomInRange(r.setRangeValue(O.minimumValue * f, this.size.value));
                            break;
                        case w.max:
                        default:
                            this.size.status = m.decreasing
                    }
                    this.size.velocity = (null !== (v = this.sizeAnimationSpeed) && void 0 !== v ? v : i.retina.sizeAnimationSpeed) / 100 * i.retina.reduceFactor, O.sync || (this.size.velocity *= Math.random())
                }
                const E = T.colorToHsl(P, this.id, k);
                if (E) {
                    this.color = {
                        h: {
                            value: E.h
                        },
                        s: {
                            value: E.s
                        },
                        l: {
                            value: E.l
                        }
                    };
                    const t = this.options.color.animation;
                    this.setColorAnimation(t.h, this.color.h), this.setColorAnimation(t.s, this.color.s), this.setColorAnimation(t.l, this.color.l)
                }
                this.position = this.calcPosition(this.container, e), this.initialPosition = this.position.copy(), this.offset = a.create(0, 0);
                const I = this.options.opacity,
                    F = "boolean" == typeof I.random ? I.random : I.random.enable;
                this.opacity = {
                    value: r.getValue(I)
                };
                const V = I.animation;
                if (V.enable) {
                    if (this.opacity.status = m.increasing, !F) switch (V.startValue) {
                        case w.min:
                            this.opacity.value = V.minimumValue;
                            break;
                        case w.random:
                            this.opacity.value = r.randomInRange(r.setRangeValue(V.minimumValue, this.opacity.value));
                            break;
                        case w.max:
                        default:
                            this.opacity.status = m.decreasing
                    }
                    this.opacity.velocity = V.speed / 100 * i.retina.reduceFactor, V.sync || (this.opacity.velocity *= Math.random())
                }
                this.sides = 24;
                let L = i.drawers.get(this.shape);
                L || (L = G.getShapeDrawer(this.shape), L && i.drawers.set(this.shape, L));
                const H = null == L ? void 0 : L.getSidesCount;
                H && (this.sides = H(this));
                const q = this.loadImageShape(i, L);
                q && (this.image = q.image, this.fill = q.fill, this.close = q.close), this.stroke = this.options.stroke instanceof Array ? S.itemFromArray(this.options.stroke, this.id, k) : this.options.stroke, this.strokeWidth = this.stroke.width * i.retina.pixelRatio;
                const _ = null !== (p = T.colorToHsl(this.stroke.color)) && void 0 !== p ? p : this.getFillColor();
                if (_) {
                    this.strokeColor = {
                        h: {
                            value: _.h
                        },
                        s: {
                            value: _.s
                        },
                        l: {
                            value: _.l
                        }
                    };
                    const t = null === (y = this.stroke.color) || void 0 === y ? void 0 : y.animation;
                    t && this.strokeColor && (this.setColorAnimation(t.h, this.strokeColor.h), this.setColorAnimation(t.s, this.strokeColor.s), this.setColorAnimation(t.l, this.strokeColor.l))
                }
                const B = b.life;
                this.lifeDelay = i.retina.reduceFactor ? r.getValue(B.delay) * (B.delay.sync ? 1 : Math.random()) / i.retina.reduceFactor * 1e3 : 0, this.lifeDelayTime = 0, this.lifeDuration = i.retina.reduceFactor ? r.getValue(B.duration) * (B.duration.sync ? 1 : Math.random()) / i.retina.reduceFactor * 1e3 : 0, this.lifeTime = 0, this.livesRemaining = b.life.count, this.spawning = this.lifeDelay > 0, this.lifeDuration <= 0 && (this.lifeDuration = -1), this.livesRemaining <= 0 && (this.livesRemaining = -1), this.shadowColor = T.colorToRgb(this.options.shadow.color), this.updater = new st(i, this), this.infecter = new Xt(i), this.mover = new Yt(i, this), L && L.particleInit && L.particleInit(i, this)
            }
            move(t) {
                this.mover.move(t)
            }
            update(t) {
                this.updater.update(t)
            }
            draw(t) {
                this.container.canvas.drawParticle(this, t)
            }
            getPosition() {
                return this.position.add(this.offset)
            }
            getRadius() {
                return this.bubble.radius || this.size.value
            }
            getMass() {
                const t = this.getRadius();
                return Math.pow(t, 2) * Math.PI / 2
            }
            getFillColor() {
                var t;
                return null !== (t = this.bubble.color) && void 0 !== t ? t : T.getHslFromAnimation(this.color)
            }
            getStrokeColor() {
                var t, i;
                return null !== (i = null !== (t = this.bubble.color) && void 0 !== t ? t : T.getHslFromAnimation(this.strokeColor)) && void 0 !== i ? i : this.getFillColor()
            }
            destroy(t) {
                if (this.destroyed = !0, this.bubble.inRange = !1, this.links = [], this.unbreakable) return;
                this.destroyed = !0, this.bubble.inRange = !1;
                for (const [, i] of this.container.plugins) i.particleDestroyed && i.particleDestroyed(this, t);
                if (t) return;
                this.options.destroy.mode === c.split && this.split()
            }
            reset() {
                this.loops.opacity = 0, this.loops.size = 0
            }
            split() {
                const t = this.options.destroy.split;
                if (t.count >= 0 && this.splitCount++ > t.count) return;
                const i = r.getRangeValue(t.rate.value);
                for (let t = 0; t < i; t++) this.container.particles.addSplitParticle(this)
            }
            setColorAnimation(t, i) {
                if (t.enable) {
                    if (i.velocity = t.speed / 100 * this.container.retina.reduceFactor, t.sync) return;
                    i.status = m.increasing, i.velocity *= Math.random(), i.value && (i.value *= Math.random())
                } else i.velocity = 0
            }
            calcPosition(t, i, e = 0) {
                var o, s;
                for (const [, e] of t.plugins) {
                    const t = void 0 !== e.particlePosition ? e.particlePosition(i, this) : void 0;
                    if (void 0 !== t) return a.create(t.x, t.y)
                }
                const n = a.create(null !== (o = null == i ? void 0 : i.x) && void 0 !== o ? o : Math.random() * t.canvas.size.width, null !== (s = null == i ? void 0 : i.y) && void 0 !== s ? s : Math.random() * t.canvas.size.height),
                    r = this.options.move.outMode;
                return (S.isInArray(r, v.bounce) || S.isInArray(r, v.bounceHorizontal)) && (n.x > t.canvas.size.width - 2 * this.size.value ? n.x -= this.size.value : n.x < 2 * this.size.value && (n.x += this.size.value)), (S.isInArray(r, v.bounce) || S.isInArray(r, v.bounceVertical)) && (n.y > t.canvas.size.height - 2 * this.size.value ? n.y -= this.size.value : n.y < 2 * this.size.value && (n.y += this.size.value)), this.checkOverlap(n, e) ? this.calcPosition(t, void 0, e + 1) : n
            }
            checkOverlap(t, i = 0) {
                const e = this.options.collisions.overlap;
                if (!e.enable) {
                    const o = e.retries;
                    if (o >= 0 && i > o) throw new Error("Particle is overlapping and can't be placed");
                    let s = !1;
                    for (const i of this.container.particles.array)
                        if (r.getDistance(t, i.position) < this.size.value + i.size.value) {
                            s = !0;
                            break
                        } return s
                }
                return !1
            }
            calculateVelocity() {
                const t = r.getParticleBaseVelocity(this.direction).copy(),
                    i = this.options.move;
                let e, o = Math.PI / 4;
                "number" == typeof i.angle ? e = Math.PI / 180 * i.angle : (e = Math.PI / 180 * i.angle.value, o = Math.PI / 180 * i.angle.offset);
                const s = {
                    left: Math.sin(o + e / 2) - Math.sin(o - e / 2),
                    right: Math.cos(o + e / 2) - Math.cos(o - e / 2)
                };
                return i.straight && !i.random || (t.x += r.randomInRange(r.setRangeValue(s.left, s.right)) / 2, t.y += r.randomInRange(r.setRangeValue(s.left, s.right)) / 2), t
            }
            loadImageShape(t, i) {
                var e, o, s, n, a;
                if (this.shape !== b.image && this.shape !== b.images) return;
                const r = i.getImages(t).images,
                    l = this.shapeData,
                    c = null !== (e = r.find((t => t.source === l.src))) && void 0 !== e ? e : r[0],
                    d = this.getFillColor();
                let h;
                if (!c) return;
                if (void 0 !== c.svgData && l.replaceColor && d) {
                    const t = T.replaceColorSvg(c, d, this.opacity.value),
                        i = new Blob([t], {
                            type: "image/svg+xml"
                        }),
                        e = URL || window.URL || window.webkitURL || window,
                        s = e.createObjectURL(i),
                        n = new Image;
                    h = {
                        data: c,
                        loaded: !1,
                        ratio: l.width / l.height,
                        replaceColor: null !== (o = l.replaceColor) && void 0 !== o ? o : l.replace_color,
                        source: l.src
                    }, n.addEventListener("load", (() => {
                        this.image && (this.image.loaded = !0, c.element = n), e.revokeObjectURL(s)
                    })), n.addEventListener("error", (() => {
                        e.revokeObjectURL(s), S.loadImage(l.src).then((t => {
                            this.image && t && (c.element = t.element, this.image.loaded = !0)
                        }))
                    })), n.src = s
                } else h = {
                    data: c,
                    loaded: !0,
                    ratio: l.width / l.height,
                    replaceColor: null !== (s = l.replaceColor) && void 0 !== s ? s : l.replace_color,
                    source: l.src
                };
                h.ratio || (h.ratio = 1);
                return {
                    image: h,
                    fill: null !== (n = l.fill) && void 0 !== n ? n : this.fill,
                    close: null !== (a = l.close) && void 0 !== a ? a : this.close
                }
            }
        }
        class Qt {
            constructor(t) {
                this.container = t
            }
            isEnabled() {
                const t = this.container,
                    i = t.interactivity.mouse,
                    e = t.actualOptions.interactivity.events;
                if (!e.onHover.enable || !i.position) return !1;
                const o = e.onHover.mode;
                return S.isInArray(h.grab, o)
            }
            reset() {}
            interact() {
                var t;
                const i = this.container,
                    e = i.actualOptions.interactivity;
                if (e.events.onHover.enable && i.interactivity.status === C.mouseMoveEvent) {
                    const o = i.interactivity.mouse.position;
                    if (void 0 === o) return;
                    const s = i.retina.grabModeDistance,
                        n = i.particles.quadTree.queryCircle(o, s);
                    for (const a of n) {
                        const n = a.getPosition(),
                            l = r.getDistance(n, o);
                        if (l <= s) {
                            const n = e.modes.grab.links,
                                r = n.opacity,
                                c = r - l * r / s;
                            if (c > 0) {
                                const e = null !== (t = n.color) && void 0 !== t ? t : a.options.links.color;
                                if (!i.particles.grabLineColor) {
                                    const t = i.actualOptions.interactivity.modes.grab.links;
                                    i.particles.grabLineColor = T.getLinkRandomColor(e, t.blink, t.consent)
                                }
                                const s = T.getLinkColor(a, void 0, i.particles.grabLineColor);
                                if (void 0 === s) return;
                                i.canvas.drawGrabLine(a, s, c, o)
                            }
                        }
                    }
                }
            }
        }
        class Zt {
            constructor(t) {
                this.container = t
            }
            isEnabled() {
                const t = this.container,
                    i = t.actualOptions,
                    e = t.interactivity.mouse,
                    o = i.interactivity.events,
                    s = o.onDiv,
                    n = S.isDivModeEnabled(d.repulse, s);
                if (!(n || o.onHover.enable && e.position || o.onClick.enable && e.clickPosition)) return !1;
                const a = o.onHover.mode,
                    r = o.onClick.mode;
                return S.isInArray(h.repulse, a) || S.isInArray(l.repulse, r) || n
            }
            reset() {}
            interact() {
                const t = this.container,
                    i = t.actualOptions,
                    e = t.interactivity.status === C.mouseMoveEvent,
                    o = i.interactivity.events,
                    s = o.onHover.enable,
                    n = o.onHover.mode,
                    a = o.onClick.enable,
                    r = o.onClick.mode,
                    c = o.onDiv;
                e && s && S.isInArray(h.repulse, n) ? this.hoverRepulse() : a && S.isInArray(l.repulse, r) ? this.clickRepulse() : S.divModeExecute(d.repulse, c, ((t, i) => this.singleSelectorRepulse(t, i)))
            }
            singleSelectorRepulse(t, i) {
                const e = this.container,
                    o = document.querySelectorAll(t);
                o.length && o.forEach((t => {
                    const o = t,
                        s = e.retina.pixelRatio,
                        n = {
                            x: (o.offsetLeft + o.offsetWidth / 2) * s,
                            y: (o.offsetTop + o.offsetHeight / 2) * s
                        },
                        a = o.offsetWidth / 2 * s,
                        r = i.type === x.circle ? new I(n.x, n.y, a) : new F(o.offsetLeft * s, o.offsetTop * s, o.offsetWidth * s, o.offsetHeight * s),
                        l = e.actualOptions.interactivity.modes.repulse.divs,
                        c = S.divMode(l, o);
                    this.processRepulse(n, a, r, c)
                }))
            }
            hoverRepulse() {
                const t = this.container,
                    i = t.interactivity.mouse.position;
                if (!i) return;
                const e = t.retina.repulseModeDistance;
                this.processRepulse(i, e, new I(i.x, i.y, e))
            }
            processRepulse(t, i, e, o) {
                var s;
                const n = this.container,
                    a = n.particles.quadTree.query(e);
                for (const e of a) {
                    const {
                        dx: a,
                        dy: l,
                        distance: c
                    } = r.getDistances(e.position, t), d = {
                        x: a / c,
                        y: l / c
                    }, h = 100 * (null !== (s = null == o ? void 0 : o.speed) && void 0 !== s ? s : n.actualOptions.interactivity.modes.repulse.speed), u = r.clamp((1 - Math.pow(c / i, 2)) * h, 0, 50);
                    e.position.x += d.x * u, e.position.y += d.y * u
                }
            }
            clickRepulse() {
                const t = this.container;
                if (t.repulse.finish || (t.repulse.count || (t.repulse.count = 0), t.repulse.count++, t.repulse.count === t.particles.count && (t.repulse.finish = !0)), t.repulse.clicking) {
                    const i = t.retina.repulseModeDistance,
                        e = Math.pow(i / 6, 3),
                        o = t.interactivity.mouse.clickPosition;
                    if (void 0 === o) return;
                    const s = new I(o.x, o.y, e),
                        n = t.particles.quadTree.query(s);
                    for (const i of n) {
                        const {
                            dx: s,
                            dy: n,
                            distance: l
                        } = r.getDistances(o, i.position), c = l * l;
                        if (c <= e) {
                            t.repulse.particles.push(i);
                            const o = t.actualOptions.interactivity.modes.repulse.speed,
                                r = a.create(s, n);
                            r.length = -e * o / c, i.velocity.setTo(r)
                        }
                    }
                } else if (!1 === t.repulse.clicking) {
                    for (const i of t.repulse.particles) i.velocity.setTo(i.initialVelocity);
                    t.repulse.particles = []
                }
            }
        }

        function Kt(t, i, e, o) {
            if (i > e) {
                const s = t + (i - e) * o;
                return r.clamp(s, t, i)
            }
            if (i < e) {
                const s = t - (e - i) * o;
                return r.clamp(s, i, t)
            }
        }
        class ti {
            constructor(t) {
                this.container = t
            }
            isEnabled() {
                const t = this.container,
                    i = t.actualOptions,
                    e = t.interactivity.mouse,
                    o = i.interactivity.events,
                    s = o.onDiv,
                    n = S.isDivModeEnabled(d.bubble, s);
                if (!(n || o.onHover.enable && e.position || o.onClick.enable && e.clickPosition)) return !1;
                const a = o.onHover.mode,
                    r = o.onClick.mode;
                return S.isInArray(h.bubble, a) || S.isInArray(l.bubble, r) || n
            }
            reset(t, i) {
                t.bubble.inRange && !i || (delete t.bubble.div, delete t.bubble.opacity, delete t.bubble.radius, delete t.bubble.color)
            }
            interact() {
                const t = this.container.actualOptions.interactivity.events,
                    i = t.onHover,
                    e = t.onClick,
                    o = i.enable,
                    s = i.mode,
                    n = e.enable,
                    a = e.mode,
                    r = t.onDiv;
                o && S.isInArray(h.bubble, s) ? this.hoverBubble() : n && S.isInArray(l.bubble, a) ? this.clickBubble() : S.divModeExecute(d.bubble, r, ((t, i) => this.singleSelectorHover(t, i)))
            }
            singleSelectorHover(t, i) {
                const e = this.container,
                    o = document.querySelectorAll(t);
                o.length && o.forEach((t => {
                    const o = t,
                        s = e.retina.pixelRatio,
                        n = {
                            x: (o.offsetLeft + o.offsetWidth / 2) * s,
                            y: (o.offsetTop + o.offsetHeight / 2) * s
                        },
                        a = o.offsetWidth / 2 * s,
                        r = i.type === x.circle ? new I(n.x, n.y, a) : new F(o.offsetLeft * s, o.offsetTop * s, o.offsetWidth * s, o.offsetHeight * s),
                        l = e.particles.quadTree.query(r);
                    for (const t of l) {
                        if (!r.contains(t.getPosition())) continue;
                        t.bubble.inRange = !0;
                        const i = e.actualOptions.interactivity.modes.bubble.divs,
                            s = S.divMode(i, o);
                        t.bubble.div && t.bubble.div === o || (this.reset(t, !0), t.bubble.div = o), this.hoverBubbleSize(t, 1, s), this.hoverBubbleOpacity(t, 1, s), this.hoverBubbleColor(t, s)
                    }
                }))
            }
            process(t, i, e, o) {
                const s = this.container,
                    n = o.bubbleObj.optValue;
                if (void 0 === n) return;
                const a = s.actualOptions.interactivity.modes.bubble.duration,
                    r = s.retina.bubbleModeDistance,
                    l = o.particlesObj.optValue,
                    c = o.bubbleObj.value,
                    d = o.particlesObj.value || 0,
                    h = o.type;
                if (n !== l)
                    if (s.bubble.durationEnd) c && (h === g.size && delete t.bubble.radius, h === g.opacity && delete t.bubble.opacity);
                    else if (i <= r) {
                    if ((null != c ? c : d) !== n) {
                        const i = d - e * (d - n) / a;
                        h === g.size && (t.bubble.radius = i), h === g.opacity && (t.bubble.opacity = i)
                    }
                } else h === g.size && delete t.bubble.radius, h === g.opacity && delete t.bubble.opacity
            }
            clickBubble() {
                const t = this.container,
                    i = t.actualOptions,
                    e = t.interactivity.mouse.clickPosition;
                if (void 0 === e) return;
                const o = t.retina.bubbleModeDistance,
                    s = t.particles.quadTree.queryCircle(e, o);
                for (const o of s) {
                    if (!t.bubble.clicking) continue;
                    o.bubble.inRange = !t.bubble.durationEnd;
                    const s = o.getPosition(),
                        n = r.getDistance(s, e),
                        a = ((new Date).getTime() - (t.interactivity.mouse.clickTime || 0)) / 1e3;
                    a > i.interactivity.modes.bubble.duration && (t.bubble.durationEnd = !0), a > 2 * i.interactivity.modes.bubble.duration && (t.bubble.clicking = !1, t.bubble.durationEnd = !1);
                    const l = {
                        bubbleObj: {
                            optValue: t.retina.bubbleModeSize,
                            value: o.bubble.radius
                        },
                        particlesObj: {
                            optValue: r.getRangeMax(o.options.size.value) * t.retina.pixelRatio,
                            value: o.size.value
                        },
                        type: g.size
                    };
                    this.process(o, n, a, l);
                    const c = {
                        bubbleObj: {
                            optValue: i.interactivity.modes.bubble.opacity,
                            value: o.bubble.opacity
                        },
                        particlesObj: {
                            optValue: r.getRangeMax(o.options.opacity.value),
                            value: o.opacity.value
                        },
                        type: g.opacity
                    };
                    this.process(o, n, a, c), t.bubble.durationEnd ? delete o.bubble.color : n <= t.retina.bubbleModeDistance ? this.hoverBubbleColor(o) : delete o.bubble.color
                }
            }
            hoverBubble() {
                const t = this.container,
                    i = t.interactivity.mouse.position;
                if (void 0 === i) return;
                const e = t.retina.bubbleModeDistance,
                    o = t.particles.quadTree.queryCircle(i, e);
                for (const s of o) {
                    s.bubble.inRange = !0;
                    const o = s.getPosition(),
                        n = r.getDistance(o, i),
                        a = 1 - n / e;
                    n <= e ? a >= 0 && t.interactivity.status === C.mouseMoveEvent && (this.hoverBubbleSize(s, a), this.hoverBubbleOpacity(s, a), this.hoverBubbleColor(s)) : this.reset(s), t.interactivity.status === C.mouseLeaveEvent && this.reset(s)
                }
            }
            hoverBubbleSize(t, i, e) {
                const o = this.container,
                    s = (null == e ? void 0 : e.size) ? e.size * o.retina.pixelRatio : o.retina.bubbleModeSize;
                if (void 0 === s) return;
                const n = r.getRangeMax(t.options.size.value) * o.retina.pixelRatio,
                    a = Kt(t.size.value, s, n, i);
                void 0 !== a && (t.bubble.radius = a)
            }
            hoverBubbleOpacity(t, i, e) {
                var o;
                const s = this.container.actualOptions,
                    n = null !== (o = null == e ? void 0 : e.opacity) && void 0 !== o ? o : s.interactivity.modes.bubble.opacity;
                if (void 0 === n) return;
                const a = t.options.opacity.value,
                    l = Kt(t.opacity.value, n, r.getRangeMax(a), i);
                void 0 !== l && (t.bubble.opacity = l)
            }
            hoverBubbleColor(t, i) {
                var e;
                const o = this.container.actualOptions;
                if (void 0 === t.bubble.color) {
                    const s = null !== (e = null == i ? void 0 : i.color) && void 0 !== e ? e : o.interactivity.modes.bubble.color;
                    if (void 0 === s) return;
                    const n = s instanceof Array ? S.itemFromArray(s) : s;
                    t.bubble.color = T.colorToHsl(n)
                }
            }
        }
        class ii {
            constructor(t) {
                this.container = t
            }
            isEnabled() {
                const t = this.container,
                    i = t.interactivity.mouse,
                    e = t.actualOptions.interactivity.events;
                if (!e.onHover.enable || !i.position) return !1;
                const o = e.onHover.mode;
                return S.isInArray(h.connect, o)
            }
            reset() {}
            interact() {
                const t = this.container;
                if (t.actualOptions.interactivity.events.onHover.enable && "mousemove" === t.interactivity.status) {
                    const i = t.interactivity.mouse.position;
                    if (!i) return;
                    const e = Math.abs(t.retina.connectModeRadius),
                        o = t.particles.quadTree.queryCircle(i, e);
                    let s = 0;
                    for (const i of o) {
                        const e = i.getPosition();
                        for (const n of o.slice(s + 1)) {
                            const o = n.getPosition(),
                                s = Math.abs(t.retina.connectModeDistance),
                                a = Math.abs(e.x - o.x),
                                r = Math.abs(e.y - o.y);
                            a < s && r < s && t.canvas.drawConnectLine(i, n)
                        }++s
                    }
                }
            }
        }
        class ei {
            constructor(t) {
                this.container = t
            }
            isEnabled(t) {
                return t.options.links.enable
            }
            reset() {}
            interact(t) {
                var i;
                const e = this.container,
                    o = t.options.links,
                    s = o.opacity,
                    n = null !== (i = t.linksDistance) && void 0 !== i ? i : e.retina.linksDistance,
                    a = e.canvas.size,
                    l = o.warp,
                    c = t.getPosition(),
                    d = l ? new V(c.x, c.y, n, a) : new I(c.x, c.y, n),
                    h = e.particles.quadTree.query(d);
                for (const i of h) {
                    const d = i.options.links;
                    if (t === i || !d.enable || o.id !== d.id || i.spawning || i.destroyed) continue;
                    const h = i.getPosition();
                    let u = r.getDistance(c, h);
                    if (l && u > n) {
                        const t = {
                            x: h.x - a.width,
                            y: h.y
                        };
                        if (u = r.getDistance(c, t), u > n) {
                            const t = {
                                x: h.x - a.width,
                                y: h.y - a.height
                            };
                            if (u = r.getDistance(c, t), u > n) {
                                const t = {
                                    x: h.x,
                                    y: h.y - a.height
                                };
                                u = r.getDistance(c, t)
                            }
                        }
                    }
                    if (u > n) return;
                    const v = (1 - u / n) * s,
                        p = t.options.links;
                    let y = void 0 !== p.id ? e.particles.linksColors.get(p.id) : e.particles.linksColor;
                    if (!y) {
                        const t = p.color;
                        y = T.getLinkRandomColor(t, p.blink, p.consent), void 0 !== p.id ? e.particles.linksColors.set(p.id, y) : e.particles.linksColor = y
                    } - 1 === i.links.map((t => t.destination)).indexOf(t) && -1 === t.links.map((t => t.destination)).indexOf(i) && t.links.push({
                        destination: i,
                        opacity: v
                    })
                }
            }
        }
        class oi {
            constructor(t) {
                this.container = t
            }
            interact(t) {
                var i;
                const e = this.container,
                    o = null !== (i = t.linksDistance) && void 0 !== i ? i : e.retina.linksDistance,
                    s = t.getPosition(),
                    n = e.particles.quadTree.queryCircle(s, o);
                for (const i of n) {
                    if (t === i || !i.options.move.attract.enable || i.destroyed || i.spawning) continue;
                    const e = i.getPosition(),
                        {
                            dx: o,
                            dy: n
                        } = r.getDistances(s, e),
                        a = t.options.move.attract.rotate,
                        l = o / (1e3 * a.x),
                        c = n / (1e3 * a.y);
                    t.velocity.x -= l, t.velocity.y -= c, i.velocity.x += l, i.velocity.y += c
                }
            }
            isEnabled(t) {
                return t.options.move.attract.enable
            }
            reset() {}
        }
        class si {
            constructor(t) {
                this.container = t
            }
            isEnabled(t) {
                return t.options.collisions.enable
            }
            reset() {}
            interact(t) {
                const i = this.container,
                    e = t.getPosition(),
                    o = i.particles.quadTree.queryCircle(e, 2 * t.getRadius());
                for (const i of o) {
                    if (t === i || !i.options.collisions.enable || t.options.collisions.mode !== i.options.collisions.mode || i.destroyed || i.spawning) continue;
                    const o = i.getPosition();
                    r.getDistance(e, o) <= t.getRadius() + i.getRadius() && this.resolveCollision(t, i)
                }
            }
            resolveCollision(t, i) {
                switch (t.options.collisions.mode) {
                    case u.absorb:
                        this.absorb(t, i);
                        break;
                    case u.bounce:
                        ! function(t, i) {
                            S.circleBounce(S.circleBounceDataFromParticle(t), S.circleBounceDataFromParticle(i))
                        }(t, i);
                        break;
                    case u.destroy:
                        ! function(t, i) {
                            void 0 === t.getRadius() && void 0 !== i.getRadius() ? t.destroy() : void 0 !== t.getRadius() && void 0 === i.getRadius() ? i.destroy() : void 0 !== t.getRadius() && void 0 !== i.getRadius() && (t.getRadius() >= i.getRadius() ? i.destroy() : t.destroy())
                        }(t, i)
                }
            }
            absorb(t, i) {
                const e = this.container,
                    o = e.actualOptions.fpsLimit / 1e3;
                if (void 0 === t.getRadius() && void 0 !== i.getRadius()) t.destroy();
                else if (void 0 !== t.getRadius() && void 0 === i.getRadius()) i.destroy();
                else if (void 0 !== t.getRadius() && void 0 !== i.getRadius())
                    if (t.getRadius() >= i.getRadius()) {
                        const s = r.clamp(t.getRadius() / i.getRadius(), 0, i.getRadius()) * o;
                        t.size.value += s, i.size.value -= s, i.getRadius() <= e.retina.pixelRatio && (i.size.value = 0, i.destroy())
                    } else {
                        const s = r.clamp(i.getRadius() / t.getRadius(), 0, t.getRadius()) * o;
                        t.size.value -= s, i.size.value += s, t.getRadius() <= e.retina.pixelRatio && (t.size.value = 0, t.destroy())
                    }
            }
        }
        class ni {
            constructor(t) {
                this.container = t
            }
            isEnabled() {
                return this.container.actualOptions.infection.enable
            }
            reset() {}
            interact(t, i) {
                var e, o;
                const s = t.infecter;
                if (s.updateInfection(i.value), void 0 === s.infectionStage) return;
                const n = this.container,
                    a = n.actualOptions.infection;
                if (!a.enable || a.stages.length < 1) return;
                const r = a.stages[s.infectionStage],
                    l = n.retina.pixelRatio,
                    c = 2 * t.getRadius() + r.radius * l,
                    d = t.getPosition(),
                    h = null !== (e = r.infectedStage) && void 0 !== e ? e : s.infectionStage,
                    u = n.particles.quadTree.queryCircle(d, c),
                    v = r.rate,
                    p = u.length;
                for (const i of u) {
                    if (i === t || i.destroyed || i.spawning || void 0 !== i.infecter.infectionStage && i.infecter.infectionStage === s.infectionStage) continue;
                    const e = i.infecter;
                    if (Math.random() < v / p)
                        if (void 0 === e.infectionStage) e.startInfection(h);
                        else if (e.infectionStage < s.infectionStage) e.updateInfectionStage(h);
                    else if (e.infectionStage > s.infectionStage) {
                        const t = a.stages[e.infectionStage],
                            i = null !== (o = null == t ? void 0 : t.infectedStage) && void 0 !== o ? o : e.infectionStage;
                        s.updateInfectionStage(i)
                    }
                }
            }
        }
        class ai {
            constructor(t) {
                this.container = t, this.delay = 0
            }
            interact(t) {
                if (!this.container.retina.reduceFactor) return;
                const i = this.container,
                    e = i.actualOptions.interactivity.modes.trail,
                    o = 1e3 * e.delay / this.container.retina.reduceFactor;
                this.delay < o && (this.delay += t.value), this.delay >= o && (i.particles.push(e.quantity, i.interactivity.mouse, e.particles), this.delay -= o)
            }
            isEnabled() {
                const t = this.container,
                    i = t.actualOptions,
                    e = t.interactivity.mouse,
                    o = i.interactivity.events;
                return e.clicking && e.inside && !!e.position && S.isInArray(l.trail, o.onClick.mode) || e.inside && !!e.position && S.isInArray(h.trail, o.onHover.mode)
            }
            reset() {}
        }
        class ri {
            constructor(t) {
                this.container = t
            }
            isEnabled() {
                const t = this.container,
                    i = t.actualOptions,
                    e = t.interactivity.mouse,
                    o = i.interactivity.events;
                if (!(o.onHover.enable && e.position || o.onClick.enable && e.clickPosition)) return !1;
                const s = o.onHover.mode,
                    n = o.onClick.mode;
                return S.isInArray(h.attract, s) || S.isInArray(l.attract, n)
            }
            reset() {}
            interact() {
                const t = this.container,
                    i = t.actualOptions,
                    e = t.interactivity.status === C.mouseMoveEvent,
                    o = i.interactivity.events,
                    s = o.onHover.enable,
                    n = o.onHover.mode,
                    a = o.onClick.enable,
                    r = o.onClick.mode;
                e && s && S.isInArray(h.attract, n) ? this.hoverAttract() : a && S.isInArray(l.attract, r) && this.clickAttract()
            }
            hoverAttract() {
                const t = this.container,
                    i = t.interactivity.mouse.position;
                if (!i) return;
                const e = t.retina.attractModeDistance;
                this.processAttract(i, e, new I(i.x, i.y, e))
            }
            processAttract(t, i, e) {
                const o = this.container,
                    s = o.particles.quadTree.query(e);
                for (const e of s) {
                    const {
                        dx: s,
                        dy: n,
                        distance: a
                    } = r.getDistances(e.position, t), l = {
                        x: s / a,
                        y: n / a
                    }, c = o.actualOptions.interactivity.modes.attract.speed, d = r.clamp((1 - Math.pow(a / i, 2)) * c, 0, 50);
                    e.position.x -= l.x * d, e.position.y -= l.y * d
                }
            }
            clickAttract() {
                const t = this.container;
                if (t.attract.finish || (t.attract.count || (t.attract.count = 0), t.attract.count++, t.attract.count === t.particles.count && (t.attract.finish = !0)), t.attract.clicking) {
                    const i = t.interactivity.mouse.clickPosition;
                    if (!i) return;
                    const e = t.retina.attractModeDistance;
                    this.processAttract(i, e, new I(i.x, i.y, e))
                } else !1 === t.attract.clicking && (t.attract.particles = [])
            }
        }
        class li {
            constructor(t) {
                this.container = t
            }
            interact(t) {
                const i = this.container;
                if (i.actualOptions.interactivity.events.onHover.enable && "mousemove" === i.interactivity.status) {
                    const e = this.container.interactivity.mouse.position;
                    e && i.canvas.drawParticleShadow(t, e)
                }
            }
            isEnabled() {
                const t = this.container,
                    i = t.interactivity.mouse,
                    e = t.actualOptions.interactivity.events;
                if (!e.onHover.enable || !i.position) return !1;
                const o = e.onHover.mode;
                return S.isInArray(h.light, o)
            }
            reset() {}
        }
        class ci {
            constructor(t) {
                this.container = t
            }
            interact() {
                const t = this.container;
                if (t.actualOptions.interactivity.events.onHover.enable && "mousemove" === t.interactivity.status) {
                    const i = t.interactivity.mouse.position;
                    if (!i) return;
                    t.canvas.drawLight(i)
                }
            }
            isEnabled() {
                const t = this.container,
                    i = t.interactivity.mouse,
                    e = t.actualOptions.interactivity.events;
                if (!e.onHover.enable || !i.position) return !1;
                const o = e.onHover.mode;
                return S.isInArray(h.light, o)
            }
            reset() {}
        }
        class di {
            constructor(t) {
                this.container = t
            }
            isEnabled() {
                const t = this.container,
                    i = t.actualOptions,
                    e = t.interactivity.mouse,
                    o = i.interactivity.events,
                    s = o.onDiv;
                return e.position && o.onHover.enable && S.isInArray(h.bounce, o.onHover.mode) || S.isDivModeEnabled(d.bounce, s)
            }
            interact() {
                const t = this.container,
                    i = t.actualOptions.interactivity.events,
                    e = t.interactivity.status === C.mouseMoveEvent,
                    o = i.onHover.enable,
                    s = i.onHover.mode,
                    n = i.onDiv;
                e && o && S.isInArray(h.bounce, s) ? this.processMouseBounce() : S.divModeExecute(d.bounce, n, ((t, i) => this.singleSelectorBounce(t, i)))
            }
            reset() {}
            processMouseBounce() {
                const t = this.container,
                    i = 10 * t.retina.pixelRatio,
                    e = t.interactivity.mouse.position,
                    o = t.retina.bounceModeDistance;
                e && this.processBounce(e, o, new I(e.x, e.y, o + i))
            }
            singleSelectorBounce(t, i) {
                const e = this.container,
                    o = document.querySelectorAll(t);
                o.length && o.forEach((t => {
                    const o = t,
                        s = e.retina.pixelRatio,
                        n = {
                            x: (o.offsetLeft + o.offsetWidth / 2) * s,
                            y: (o.offsetTop + o.offsetHeight / 2) * s
                        },
                        a = o.offsetWidth / 2 * s,
                        r = 10 * s,
                        l = i.type === x.circle ? new I(n.x, n.y, a + r) : new F(o.offsetLeft * s - r, o.offsetTop * s - r, o.offsetWidth * s + 2 * r, o.offsetHeight * s + 2 * r);
                    this.processBounce(n, a, l)
                }))
            }
            processBounce(t, i, e) {
                const o = this.container.particles.quadTree.query(e);
                for (const s of o) e instanceof I ? S.circleBounce(S.circleBounceDataFromParticle(s), {
                    position: t,
                    radius: i,
                    mass: Math.pow(i, 2) * Math.PI / 2,
                    velocity: a.create(0, 0),
                    factor: {
                        horizontal: 0,
                        vertical: 0
                    }
                }) : e instanceof F && S.rectBounce(s, S.calculateBounds(t, i))
            }
        }
        class hi {
            constructor(t) {
                this.container = t, this.externalInteractors = [new di(t), new ti(t), new ii(t), new Qt(t), new ci(t), new ri(t), new Zt(t), new ai(t)], this.particleInteractors = [new oi(t), new li(t), new si(t), new ni(t), new ei(t)]
            }
            init() {}
            externalInteract(t) {
                for (const i of this.externalInteractors) i.isEnabled() && i.interact(t)
            }
            particlesInteract(t, i) {
                for (const i of this.externalInteractors) i.reset(t);
                for (const e of this.particleInteractors) e.isEnabled(t) && e.interact(t, i)
            }
        }
        class ui {
            constructor(t) {
                this.container = t, this.nextId = 0, this.array = [], this.limit = 0, this.linksFreq = new Map, this.trianglesFreq = new Map, this.interactionManager = new hi(t);
                const i = this.container.canvas.size;
                this.linksColors = new Map, this.quadTree = new $(new F(-i.width / 4, -i.height / 4, 3 * i.width / 2, 3 * i.height / 2), 4)
            }
            get count() {
                return this.array.length
            }
            init() {
                const t = this.container,
                    i = t.actualOptions;
                this.linksFreq = new Map, this.trianglesFreq = new Map;
                let e = !1;
                for (const e of i.manualParticles) {
                    const i = e.position ? {
                        x: e.position.x * t.canvas.size.width / 100,
                        y: e.position.y * t.canvas.size.height / 100
                    } : void 0;
                    this.addParticle(i, e.options)
                }
                for (const [, i] of t.plugins)
                    if (void 0 !== i.particlesInitialization && (e = i.particlesInitialization()), e) break;
                if (!e)
                    for (let t = this.count; t < i.particles.number.value; t++) this.addParticle();
                if (i.infection.enable)
                    for (let t = 0; t < i.infection.infections; t++) {
                        const t = this.array.filter((t => void 0 === t.infecter.infectionStage));
                        S.itemFromArray(t).infecter.startInfection(0)
                    }
                this.interactionManager.init(), t.pathGenerator.init()
            }
            redraw() {
                this.clear(), this.init(), this.draw({
                    value: 0,
                    factor: 0
                })
            }
            removeAt(t, i, e) {
                if (t >= 0 && t <= this.count)
                    for (const o of this.array.splice(t, null != i ? i : 1)) o.destroy(e)
            }
            remove(t, i) {
                this.removeAt(this.array.indexOf(t), void 0, i)
            }
            update(t) {
                const i = this.container,
                    e = [];
                i.pathGenerator.update();
                for (const [, e] of i.plugins) void 0 !== e.update && e.update(t);
                for (const i of this.array) {
                    const o = this.container.canvas.resizeFactor;
                    o && (i.position.x *= o.width, i.position.y *= o.height), i.move(t), i.destroyed ? e.push(i) : this.quadTree.insert(new N(i.getPosition(), i))
                }
                for (const t of e) this.remove(t);
                this.interactionManager.externalInteract(t);
                for (const i of this.container.particles.array) i.update(t), i.destroyed || i.spawning || this.interactionManager.particlesInteract(i, t);
                delete i.canvas.resizeFactor
            }
            draw(t) {
                const i = this.container;
                i.canvas.clear();
                const e = this.container.canvas.size;
                this.quadTree = new $(new F(-e.width / 4, -e.height / 4, 3 * e.width / 2, 3 * e.height / 2), 4), this.update(t);
                for (const [, e] of i.plugins) i.canvas.drawPlugin(e, t);
                for (const i of this.array) i.draw(t)
            }
            clear() {
                this.array = []
            }
            push(t, i, e) {
                const o = this.container,
                    s = o.actualOptions.particles.number.limit * o.density;
                if (this.pushing = !0, s > 0) {
                    const i = this.count + t - s;
                    i > 0 && this.removeQuantity(i)
                }
                for (let o = 0; o < t; o++) this.addParticle(null == i ? void 0 : i.position, e);
                this.pushing = !1
            }
            addParticle(t, i) {
                return this.pushParticle(t, i)
            }
            addSplitParticle(t) {
                const i = t.options.destroy.split,
                    e = new jt;
                e.load(t.options);
                const o = r.getRangeValue(i.factor.value);
                e.color.load({
                    value: {
                        hsl: t.getFillColor()
                    }
                }), "number" == typeof e.size.value ? e.size.value /= o : (e.size.value.min /= o, e.size.value.max /= o), e.load(i.particles);
                const s = r.setRangeValue(-t.size.value, t.size.value),
                    n = {
                        x: t.position.x + r.randomInRange(s),
                        y: t.position.y + r.randomInRange(s)
                    };
                return this.pushParticle(n, e, (i => !(i.size.value < .5) && (i.velocity.length = r.randomInRange(r.setRangeValue(t.velocity.length, i.velocity.length)), i.splitCount = t.splitCount + 1, i.unbreakable = !0, setTimeout((() => {
                    i.unbreakable = !1
                }), 500), !0)))
            }
            removeQuantity(t) {
                this.removeAt(0, t)
            }
            getLinkFrequency(t, i) {
                const e = `${Math.min(t.id,i.id)}_${Math.max(t.id,i.id)}`;
                let o = this.linksFreq.get(e);
                return void 0 === o && (o = Math.random(), this.linksFreq.set(e, o)), o
            }
            getTriangleFrequency(t, i, e) {
                let [o, s, n] = [t.id, i.id, e.id];
                o > s && ([s, o] = [o, s]), s > n && ([n, s] = [s, n]), o > n && ([n, o] = [o, n]);
                const a = `${o}_${s}_${n}`;
                let r = this.trianglesFreq.get(a);
                return void 0 === r && (r = Math.random(), this.trianglesFreq.set(a, r)), r
            }
            setDensity() {
                const t = this.container.actualOptions;
                this.applyDensity(t.particles)
            }
            applyDensity(t) {
                var i;
                if (!(null === (i = t.number.density) || void 0 === i ? void 0 : i.enable)) return;
                const e = t.number,
                    o = this.initDensityFactor(e.density),
                    s = e.value,
                    n = e.limit > 0 ? e.limit : s,
                    a = Math.min(s, n) * o,
                    r = this.count;
                this.limit = e.limit * o, r < a ? this.push(Math.abs(a - r), void 0, t) : r > a && this.removeQuantity(r - a)
            }
            initDensityFactor(t) {
                const i = this.container;
                if (!i.canvas.element || !t.enable) return 1;
                const e = i.canvas.element,
                    o = i.retina.pixelRatio;
                return e.width * e.height / (t.factor * o * o * t.area)
            }
            pushParticle(t, i, e) {
                try {
                    const o = new Jt(this.nextId, this.container, t, i);
                    let s = !0;
                    if (e && (s = e(o)), !s) return;
                    return this.array.push(o), this.nextId++, o
                } catch (t) {
                    return void console.warn(`error adding particle: ${t}`)
                }
            }
        }
        class vi {
            constructor(t) {
                this.container = t
            }
            init() {
                const t = this.container,
                    i = t.actualOptions;
                this.pixelRatio = !i.detectRetina || S.isSsr() ? 1 : window.devicePixelRatio;
                const e = this.container.actualOptions.motion;
                if (e && (e.disable || e.reduce.value))
                    if (S.isSsr() || "undefined" == typeof matchMedia || !matchMedia) this.reduceFactor = 1;
                    else {
                        const i = matchMedia("(prefers-reduced-motion: reduce)");
                        if (i) {
                            this.handleMotionChange(i);
                            const e = () => {
                                this.handleMotionChange(i), t.refresh().catch((() => {}))
                            };
                            void 0 !== i.addEventListener ? i.addEventListener("change", e) : void 0 !== i.addListener && i.addListener(e)
                        }
                    }
                else this.reduceFactor = 1;
                const o = this.pixelRatio;
                if (t.canvas.element) {
                    const i = t.canvas.element;
                    t.canvas.size.width = i.offsetWidth * o, t.canvas.size.height = i.offsetHeight * o
                }
                const s = i.particles;
                this.linksDistance = s.links.distance * o, this.linksWidth = s.links.width * o, this.sizeAnimationSpeed = s.size.animation.speed * o;
                const n = i.interactivity.modes;
                this.connectModeDistance = n.connect.distance * o, this.connectModeRadius = n.connect.radius * o, this.grabModeDistance = n.grab.distance * o, this.repulseModeDistance = n.repulse.distance * o, this.bounceModeDistance = n.bounce.distance * o, this.attractModeDistance = n.attract.distance * o, this.slowModeRadius = n.slow.radius * o, this.bubbleModeDistance = n.bubble.distance * o, n.bubble.size && (this.bubbleModeSize = n.bubble.size * o)
            }
            initParticle(t) {
                const i = t.options,
                    e = this.pixelRatio;
                t.linksDistance = i.links.distance * e, t.linksWidth = i.links.width * e, t.moveDrift = r.getRangeValue(i.move.drift) * e, t.moveSpeed = r.getRangeValue(i.move.speed) * e, t.sizeAnimationSpeed = i.size.animation.speed * e, t.maxDistance = i.move.distance * e
            }
            handleMotionChange(t) {
                const i = this.container.actualOptions;
                if (t.matches) {
                    const t = i.motion;
                    this.reduceFactor = t.disable ? 0 : t.reduce.value ? 1 / t.reduce.factor : 1
                } else this.reduceFactor = 1
            }
        }
        class pi {
            constructor(t) {
                this.container = t
            }
            nextFrame(t) {
                try {
                    const i = this.container;
                    if (void 0 !== i.lastFrameTime && t < i.lastFrameTime + 1e3 / i.fpsLimit) return void i.draw();
                    const e = t - i.lastFrameTime,
                        o = {
                            value: e,
                            factor: 60 * e / 1e3
                        };
                    i.lastFrameTime = t, i.particles.draw(o), i.getAnimationStatus() && i.draw()
                } catch (t) {
                    console.error("tsParticles error in animation loop", t)
                }
            }
        }
        class yi {
            constructor() {
                this.enable = !1, this.mode = []
            }
            load(t) {
                void 0 !== t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.mode && (this.mode = t.mode))
            }
        }
        class mi {
            constructor() {
                this.selectors = [], this.enable = !1, this.mode = [], this.type = x.circle
            }
            get elementId() {
                return this.ids
            }
            set elementId(t) {
                this.ids = t
            }
            get el() {
                return this.elementId
            }
            set el(t) {
                this.elementId = t
            }
            get ids() {
                return this.selectors instanceof Array ? this.selectors.map((t => t.replace("#", ""))) : this.selectors.replace("#", "")
            }
            set ids(t) {
                this.selectors = t instanceof Array ? t.map((t => `#${t}`)) : `#${t}`
            }
            load(t) {
                var i, e;
                if (void 0 === t) return;
                const o = null !== (e = null !== (i = t.ids) && void 0 !== i ? i : t.elementId) && void 0 !== e ? e : t.el;
                void 0 !== o && (this.ids = o), void 0 !== t.selectors && (this.selectors = t.selectors), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.mode && (this.mode = t.mode), void 0 !== t.type && (this.type = t.type)
            }
        }
        class fi {
            constructor() {
                this.enable = !1, this.force = 2, this.smooth = 10
            }
            load(t) {
                void 0 !== t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.force && (this.force = t.force), void 0 !== t.smooth && (this.smooth = t.smooth))
            }
        }
        class gi {
            constructor() {
                this.enable = !1, this.mode = [], this.parallax = new fi
            }
            load(t) {
                void 0 !== t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.mode && (this.mode = t.mode), this.parallax.load(t.parallax))
            }
        }
        class bi {
            constructor() {
                this.onClick = new yi, this.onDiv = new mi, this.onHover = new gi, this.resize = !0
            }
            get onclick() {
                return this.onClick
            }
            set onclick(t) {
                this.onClick = t
            }
            get ondiv() {
                return this.onDiv
            }
            set ondiv(t) {
                this.onDiv = t
            }
            get onhover() {
                return this.onHover
            }
            set onhover(t) {
                this.onHover = t
            }
            load(t) {
                var i, e, o;
                if (void 0 === t) return;
                this.onClick.load(null !== (i = t.onClick) && void 0 !== i ? i : t.onclick);
                const s = null !== (e = t.onDiv) && void 0 !== e ? e : t.ondiv;
                void 0 !== s && (s instanceof Array ? this.onDiv = s.map((t => {
                    const i = new mi;
                    return i.load(t), i
                })) : (this.onDiv = new mi, this.onDiv.load(s))), this.onHover.load(null !== (o = t.onHover) && void 0 !== o ? o : t.onhover), void 0 !== t.resize && (this.resize = t.resize)
            }
        }
        class wi {
            constructor() {
                this.distance = 200, this.duration = .4
            }
            load(t) {
                void 0 !== t && (void 0 !== t.distance && (this.distance = t.distance), void 0 !== t.duration && (this.duration = t.duration), void 0 !== t.opacity && (this.opacity = t.opacity), void 0 !== t.color && (t.color instanceof Array ? this.color = t.color.map((t => nt.create(void 0, t))) : (this.color instanceof Array && (this.color = new nt), this.color = nt.create(this.color, t.color))), void 0 !== t.size && (this.size = t.size))
            }
        }
        class xi extends wi {
            constructor() {
                super(), this.selectors = []
            }
            get ids() {
                return this.selectors instanceof Array ? this.selectors.map((t => t.replace("#", ""))) : this.selectors.replace("#", "")
            }
            set ids(t) {
                this.selectors = t instanceof Array ? t.map((t => `#${t}`)) : `#${t}`
            }
            load(t) {
                super.load(t), void 0 !== t && (void 0 !== t.ids && (this.ids = t.ids), void 0 !== t.selectors && (this.selectors = t.selectors))
            }
        }
        class ki extends wi {
            load(t) {
                super.load(t), void 0 !== t && void 0 !== t.divs && (t.divs instanceof Array ? this.divs = t.divs.map((t => {
                    const i = new xi;
                    return i.load(t), i
                })) : ((this.divs instanceof Array || !this.divs) && (this.divs = new xi), this.divs.load(t.divs)))
            }
        }
        class Pi {
            constructor() {
                this.opacity = .5
            }
            load(t) {
                void 0 !== t && void 0 !== t.opacity && (this.opacity = t.opacity)
            }
        }
        class Mi {
            constructor() {
                this.distance = 80, this.links = new Pi, this.radius = 60
            }
            get line_linked() {
                return this.links
            }
            set line_linked(t) {
                this.links = t
            }
            get lineLinked() {
                return this.links
            }
            set lineLinked(t) {
                this.links = t
            }
            load(t) {
                var i, e;
                void 0 !== t && (void 0 !== t.distance && (this.distance = t.distance), this.links.load(null !== (e = null !== (i = t.links) && void 0 !== i ? i : t.lineLinked) && void 0 !== e ? e : t.line_linked), void 0 !== t.radius && (this.radius = t.radius))
            }
        }
        class Ri {
            constructor() {
                this.blink = !1, this.consent = !1, this.opacity = 1
            }
            load(t) {
                void 0 !== t && (void 0 !== t.blink && (this.blink = t.blink), void 0 !== t.color && (this.color = nt.create(this.color, t.color)), void 0 !== t.consent && (this.consent = t.consent), void 0 !== t.opacity && (this.opacity = t.opacity))
            }
        }
        class Si {
            constructor() {
                this.distance = 100, this.links = new Ri
            }
            get line_linked() {
                return this.links
            }
            set line_linked(t) {
                this.links = t
            }
            get lineLinked() {
                return this.links
            }
            set lineLinked(t) {
                this.links = t
            }
            load(t) {
                var i, e;
                void 0 !== t && (void 0 !== t.distance && (this.distance = t.distance), this.links.load(null !== (e = null !== (i = t.links) && void 0 !== i ? i : t.lineLinked) && void 0 !== e ? e : t.line_linked))
            }
        }
        class Ci {
            constructor() {
                this.quantity = 2
            }
            get particles_nb() {
                return this.quantity
            }
            set particles_nb(t) {
                this.quantity = t
            }
            load(t) {
                var i;
                if (void 0 === t) return;
                const e = null !== (i = t.quantity) && void 0 !== i ? i : t.particles_nb;
                void 0 !== e && (this.quantity = e)
            }
        }
        class zi {
            constructor() {
                this.quantity = 4
            }
            get particles_nb() {
                return this.quantity
            }
            set particles_nb(t) {
                this.quantity = t
            }
            load(t) {
                var i;
                if (void 0 === t) return;
                const e = null !== (i = t.quantity) && void 0 !== i ? i : t.particles_nb;
                void 0 !== e && (this.quantity = e)
            }
        }
        class Ai {
            constructor() {
                this.distance = 200, this.duration = .4, this.speed = 1
            }
            load(t) {
                void 0 !== t && (void 0 !== t.distance && (this.distance = t.distance), void 0 !== t.duration && (this.duration = t.duration), void 0 !== t.speed && (this.speed = t.speed))
            }
        }
        class Ti extends Ai {
            constructor() {
                super(), this.selectors = []
            }
            get ids() {
                return this.selectors instanceof Array ? this.selectors.map((t => t.replace("#", ""))) : this.selectors.replace("#", "")
            }
            set ids(t) {
                this.selectors = t instanceof Array ? t.map((() => `#${t}`)) : `#${t}`
            }
            load(t) {
                super.load(t), void 0 !== t && (void 0 !== t.ids && (this.ids = t.ids), void 0 !== t.selectors && (this.selectors = t.selectors))
            }
        }
        class Di extends Ai {
            load(t) {
                super.load(t), void 0 !== (null == t ? void 0 : t.divs) && (t.divs instanceof Array ? this.divs = t.divs.map((t => {
                    const i = new Ti;
                    return i.load(t), i
                })) : ((this.divs instanceof Array || !this.divs) && (this.divs = new Ti), this.divs.load(t.divs)))
            }
        }
        class Oi {
            constructor() {
                this.factor = 3, this.radius = 200
            }
            get active() {
                return !1
            }
            set active(t) {}
            load(t) {
                void 0 !== t && (void 0 !== t.factor && (this.factor = t.factor), void 0 !== t.radius && (this.radius = t.radius))
            }
        }
        class Ei {
            constructor() {
                this.delay = 1, this.quantity = 1
            }
            load(t) {
                void 0 !== t && (void 0 !== t.delay && (this.delay = t.delay), void 0 !== t.quantity && (this.quantity = t.quantity), void 0 !== t.particles && (this.particles = S.deepExtend({}, t.particles)))
            }
        }
        class Ii {
            constructor() {
                this.distance = 200, this.duration = .4, this.speed = 1
            }
            load(t) {
                void 0 !== t && (void 0 !== t.distance && (this.distance = t.distance), void 0 !== t.duration && (this.duration = t.duration), void 0 !== t.speed && (this.speed = t.speed))
            }
        }
        class Fi {
            constructor() {
                this.start = new nt, this.stop = new nt, this.start.value = "#ffffff", this.stop.value = "#000000"
            }
            load(t) {
                void 0 !== t && (this.start = nt.create(this.start, t.start), this.stop = nt.create(this.stop, t.stop))
            }
        }
        class Vi {
            constructor() {
                this.gradient = new Fi, this.radius = 1e3
            }
            load(t) {
                void 0 !== t && (this.gradient.load(t.gradient), void 0 !== t.radius && (this.radius = t.radius))
            }
        }
        class Li {
            constructor() {
                this.color = new nt, this.color.value = "#000000", this.length = 2e3
            }
            load(t) {
                void 0 !== t && (this.color = nt.create(this.color, t.color), void 0 !== t.length && (this.length = t.length))
            }
        }
        class Hi {
            constructor() {
                this.area = new Vi, this.shadow = new Li
            }
            load(t) {
                void 0 !== t && (this.area.load(t.area), this.shadow.load(t.shadow))
            }
        }
        class qi {
            constructor() {
                this.distance = 200
            }
            load(t) {
                t && void 0 !== t.distance && (this.distance = t.distance)
            }
        }
        class _i {
            constructor() {
                this.attract = new Ii, this.bounce = new qi, this.bubble = new ki, this.connect = new Mi, this.grab = new Si, this.light = new Hi, this.push = new zi, this.remove = new Ci, this.repulse = new Di, this.slow = new Oi, this.trail = new Ei
            }
            load(t) {
                void 0 !== t && (this.attract.load(t.attract), this.bubble.load(t.bubble), this.connect.load(t.connect), this.grab.load(t.grab), this.light.load(t.light), this.push.load(t.push), this.remove.load(t.remove), this.repulse.load(t.repulse), this.slow.load(t.slow), this.trail.load(t.trail))
            }
        }
        class Bi {
            constructor() {
                this.detectsOn = k.canvas, this.events = new bi, this.modes = new _i
            }
            get detect_on() {
                return this.detectsOn
            }
            set detect_on(t) {
                this.detectsOn = t
            }
            load(t) {
                var i, e, o;
                if (void 0 === t) return;
                const s = null !== (i = t.detectsOn) && void 0 !== i ? i : t.detect_on;
                void 0 !== s && (this.detectsOn = s), this.events.load(t.events), this.modes.load(t.modes), !0 === (null === (o = null === (e = t.modes) || void 0 === e ? void 0 : e.slow) || void 0 === o ? void 0 : o.active) && (this.events.onHover.mode instanceof Array ? this.events.onHover.mode.indexOf(h.slow) < 0 && this.events.onHover.mode.push(h.slow) : this.events.onHover.mode !== h.slow && (this.events.onHover.mode = [this.events.onHover.mode, h.slow]))
            }
        }
        class Wi {
            constructor() {
                this.color = new nt, this.opacity = 1
            }
            load(t) {
                void 0 !== t && (void 0 !== t.color && (this.color = nt.create(this.color, t.color)), void 0 !== t.opacity && (this.opacity = t.opacity))
            }
        }
        class Gi {
            constructor() {
                this.composite = "destination-out", this.cover = new Wi, this.enable = !1
            }
            load(t) {
                if (void 0 !== t) {
                    if (void 0 !== t.composite && (this.composite = t.composite), void 0 !== t.cover) {
                        const i = t.cover,
                            e = "string" == typeof t.cover ? {
                                color: t.cover
                            } : t.cover;
                        this.cover.load(void 0 !== i.color ? i : {
                            color: e
                        })
                    }
                    void 0 !== t.enable && (this.enable = t.enable)
                }
            }
        }
        class Ni {
            constructor() {
                this.color = new nt, this.color.value = "", this.image = "", this.position = "", this.repeat = "", this.size = "", this.opacity = 1
            }
            load(t) {
                void 0 !== t && (void 0 !== t.color && (this.color = nt.create(this.color, t.color)), void 0 !== t.image && (this.image = t.image), void 0 !== t.position && (this.position = t.position), void 0 !== t.repeat && (this.repeat = t.repeat), void 0 !== t.size && (this.size = t.size), void 0 !== t.opacity && (this.opacity = t.opacity))
            }
        }
        class $i {
            constructor() {
                this.color = new nt, this.color.value = "#ff0000", this.radius = 0, this.rate = 1
            }
            load(t) {
                void 0 !== t && (void 0 !== t.color && (this.color = nt.create(this.color, t.color)), this.duration = t.duration, this.infectedStage = t.infectedStage, void 0 !== t.radius && (this.radius = t.radius), void 0 !== t.rate && (this.rate = t.rate))
            }
        }
        class Ui {
            constructor() {
                this.cure = !1, this.delay = 0, this.enable = !1, this.infections = 0, this.stages = []
            }
            load(t) {
                void 0 !== t && (void 0 !== t.cure && (this.cure = t.cure), void 0 !== t.delay && (this.delay = t.delay), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.infections && (this.infections = t.infections), void 0 !== t.stages && (this.stages = t.stages.map((t => {
                    const i = new $i;
                    return i.load(t), i
                }))))
            }
        }
        class ji {
            constructor() {
                this.mode = y.any, this.value = !1
            }
            load(t) {
                void 0 !== t && (void 0 !== t.mode && (this.mode = t.mode), void 0 !== t.value && (this.value = t.value))
            }
        }
        class Xi {
            constructor() {
                this.name = "", this.default = new ji
            }
            load(t) {
                void 0 !== t && (void 0 !== t.name && (this.name = t.name), this.default.load(t.default), void 0 !== t.options && (this.options = S.deepExtend({}, t.options)))
            }
        }
        class Yi {
            constructor() {
                this.enable = !1, this.zIndex = -1
            }
            load(t) {
                t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.zIndex && (this.zIndex = t.zIndex))
            }
        }
        class Ji {
            constructor() {
                this.factor = 4, this.value = !0
            }
            load(t) {
                t && (void 0 !== t.factor && (this.factor = t.factor), void 0 !== t.value && (this.value = t.value))
            }
        }
        class Qi {
            constructor() {
                this.disable = !1, this.reduce = new Ji
            }
            load(t) {
                t && (void 0 !== t.disable && (this.disable = t.disable), this.reduce.load(t.reduce))
            }
        }
        class Zi {
            load(t) {
                var i, e;
                t && (void 0 !== t.position && (this.position = {
                    x: null !== (i = t.position.x) && void 0 !== i ? i : 50,
                    y: null !== (e = t.position.y) && void 0 !== e ? e : 50
                }), void 0 !== t.options && (this.options = S.deepExtend({}, t.options)))
            }
        }
        class Ki {
            constructor() {
                this.maxWidth = 1 / 0, this.options = {}
            }
            load(t) {
                t && (void 0 !== t.maxWidth && (this.maxWidth = t.maxWidth), void 0 !== t.options && (this.options = S.deepExtend({}, t.options)))
            }
        }
        class te {
            constructor() {
                this.autoPlay = !0, this.background = new Ni, this.backgroundMask = new Gi, this.fullScreen = new Yi, this.detectRetina = !0, this.fpsLimit = 60, this.infection = new Ui, this.interactivity = new Bi, this.manualParticles = [], this.motion = new Qi, this.particles = new jt, this.pauseOnBlur = !0, this.pauseOnOutsideViewport = !0, this.responsive = [], this.themes = []
            }
            get fps_limit() {
                return this.fpsLimit
            }
            set fps_limit(t) {
                this.fpsLimit = t
            }
            get retina_detect() {
                return this.detectRetina
            }
            set retina_detect(t) {
                this.detectRetina = t
            }
            get backgroundMode() {
                return this.fullScreen
            }
            set backgroundMode(t) {
                this.fullScreen.load(t)
            }
            load(t) {
                var i, e, o;
                if (void 0 === t) return;
                if (void 0 !== t.preset)
                    if (t.preset instanceof Array)
                        for (const i of t.preset) this.importPreset(i);
                    else this.importPreset(t.preset);
                void 0 !== t.autoPlay && (this.autoPlay = t.autoPlay);
                const s = null !== (i = t.detectRetina) && void 0 !== i ? i : t.retina_detect;
                void 0 !== s && (this.detectRetina = s);
                const n = null !== (e = t.fpsLimit) && void 0 !== e ? e : t.fps_limit;
                if (void 0 !== n && (this.fpsLimit = n), void 0 !== t.pauseOnBlur && (this.pauseOnBlur = t.pauseOnBlur), void 0 !== t.pauseOnOutsideViewport && (this.pauseOnOutsideViewport = t.pauseOnOutsideViewport), this.background.load(t.background), this.fullScreen.load(null !== (o = t.fullScreen) && void 0 !== o ? o : t.backgroundMode), this.backgroundMask.load(t.backgroundMask), this.infection.load(t.infection), this.interactivity.load(t.interactivity), void 0 !== t.manualParticles && (this.manualParticles = t.manualParticles.map((t => {
                        const i = new Zi;
                        return i.load(t), i
                    }))), this.motion.load(t.motion), this.particles.load(t.particles), G.loadOptions(this, t), void 0 !== t.responsive)
                    for (const i of t.responsive) {
                        const t = new Ki;
                        t.load(i), this.responsive.push(t)
                    }
                if (this.responsive.sort(((t, i) => t.maxWidth - i.maxWidth)), void 0 !== t.themes)
                    for (const i of t.themes) {
                        const t = new Xi;
                        t.load(i), this.themes.push(t)
                    }
            }
            setTheme(t) {
                if (t) {
                    const i = this.themes.find((i => i.name === t));
                    i && this.load(i.options)
                } else {
                    const t = "undefined" != typeof matchMedia && matchMedia("(prefers-color-scheme: dark)").matches;
                    let i = this.themes.find((i => i.default.value && (i.default.mode === y.dark && t || i.default.mode === y.light && !t)));
                    i || (i = this.themes.find((t => t.default.value && t.default.mode === y.any))), i && this.load(i.options)
                }
            }
            importPreset(t) {
                this.load(G.getPreset(t))
            }
            setResponsive(t, i, e) {
                var o;
                this.load(e), this.load(null === (o = this.responsive.find((e => e.maxWidth * i > t))) || void 0 === o ? void 0 : o.options)
            }
        }
        var ie = function(t, i, e, o) {
            return new(e || (e = Promise))((function(s, n) {
                function a(t) {
                    try {
                        l(o.next(t))
                    } catch (t) {
                        n(t)
                    }
                }

                function r(t) {
                    try {
                        l(o.throw(t))
                    } catch (t) {
                        n(t)
                    }
                }

                function l(t) {
                    var i;
                    t.done ? s(t.value) : (i = t.value, i instanceof e ? i : new e((function(t) {
                        t(i)
                    }))).then(a, r)
                }
                l((o = o.apply(t, i || [])).next())
            }))
        };
        class ee {
            constructor(t, i, ...e) {
                this.id = t, this.fpsLimit = 60, this.firstStart = !0, this.started = !1, this.destroyed = !1, this.paused = !0, this.lastFrameTime = 0, this.pageHidden = !1, this._sourceOptions = i, this.retina = new vi(this), this.canvas = new et(this), this.particles = new ui(this), this.drawer = new pi(this), this.pathGenerator = {
                    generate: () => {
                        const t = a.create(0, 0);
                        return t.length = Math.random(), t.angle = Math.random() * Math.PI * 2, t
                    },
                    init: () => {},
                    update: () => {}
                }, this.interactivity = {
                    mouse: {
                        clicking: !1,
                        inside: !1
                    }
                }, this.bubble = {}, this.repulse = {
                    particles: []
                }, this.attract = {
                    particles: []
                }, this.plugins = new Map, this.drawers = new Map, this.density = 1, this._options = new te, this.actualOptions = new te;
                for (const t of e) this._options.load(G.getPreset(t));
                const o = G.getSupportedShapes();
                for (const t of o) {
                    const i = G.getShapeDrawer(t);
                    i && this.drawers.set(t, i)
                }
                this._options && this._options.load(this._sourceOptions), this.eventListeners = new H(this), "undefined" != typeof IntersectionObserver && IntersectionObserver && (this.intersectionObserver = new IntersectionObserver((t => this.intersectionManager(t))))
            }
            get options() {
                return this._options
            }
            get sourceOptions() {
                return this._sourceOptions
            }
            play(t) {
                const i = this.paused || t;
                if (!this.firstStart || this.actualOptions.autoPlay) {
                    if (this.paused && (this.paused = !1), i) {
                        for (const [, t] of this.plugins) t.play && t.play();
                        this.lastFrameTime = performance.now()
                    }
                    this.draw()
                } else this.firstStart = !1
            }
            pause() {
                if (void 0 !== this.drawAnimationFrame && (S.cancelAnimation(this.drawAnimationFrame), delete this.drawAnimationFrame), !this.paused) {
                    for (const [, t] of this.plugins) t.pause && t.pause();
                    this.pageHidden || (this.paused = !0)
                }
            }
            draw() {
                this.drawAnimationFrame = S.animate((t => this.drawer.nextFrame(t)))
            }
            getAnimationStatus() {
                return !this.paused
            }
            setNoise(t, i, e) {
                this.setPath(t, i, e)
            }
            setPath(t, i, e) {
                t && ("function" == typeof t ? (this.pathGenerator.generate = t, i && (this.pathGenerator.init = i), e && (this.pathGenerator.update = e)) : (t.generate && (this.pathGenerator.generate = t.generate), t.init && (this.pathGenerator.init = t.init), t.update && (this.pathGenerator.update = t.update)))
            }
            destroy() {
                this.stop(), this.canvas.destroy();
                for (const [, t] of this.drawers) t.destroy && t.destroy(this);
                for (const t of this.drawers.keys()) this.drawers.delete(t);
                this.destroyed = !0
            }
            exportImg(t) {
                this.exportImage(t)
            }
            exportImage(t, i, e) {
                var o;
                return null === (o = this.canvas.element) || void 0 === o ? void 0 : o.toBlob(t, null != i ? i : "image/png", e)
            }
            exportConfiguration() {
                return JSON.stringify(this.actualOptions, void 0, 2)
            }
            refresh() {
                return this.stop(), this.start()
            }
            reset() {
                return this._options = new te, this.refresh()
            }
            stop() {
                if (this.started) {
                    this.firstStart = !0, this.started = !1, this.eventListeners.removeListeners(), this.pause(), this.particles.clear(), this.canvas.clear(), this.interactivity.element instanceof HTMLElement && this.intersectionObserver && this.intersectionObserver.observe(this.interactivity.element);
                    for (const [, t] of this.plugins) t.stop && t.stop();
                    for (const t of this.plugins.keys()) this.plugins.delete(t);
                    this.particles.linksColors = new Map, delete this.particles.grabLineColor, delete this.particles.linksColor
                }
            }
            loadTheme(t) {
                return ie(this, void 0, void 0, (function*() {
                    this.actualOptions.setTheme(t), yield this.refresh()
                }))
            }
            start() {
                return ie(this, void 0, void 0, (function*() {
                    if (!this.started) {
                        yield this.init(), this.started = !0, this.eventListeners.addListeners(), this.interactivity.element instanceof HTMLElement && this.intersectionObserver && this.intersectionObserver.observe(this.interactivity.element);
                        for (const [, t] of this.plugins) void 0 !== t.startAsync ? yield t.startAsync(): void 0 !== t.start && t.start();
                        this.play()
                    }
                }))
            }
            init() {
                return ie(this, void 0, void 0, (function*() {
                    this.actualOptions = new te, this.actualOptions.load(this._options), this.retina.init(), this.canvas.init(), this.actualOptions.setResponsive(this.canvas.size.width, this.retina.pixelRatio, this._options), this.actualOptions.setTheme(void 0), this.fpsLimit = this.actualOptions.fpsLimit > 0 ? this.actualOptions.fpsLimit : 60;
                    const t = G.getAvailablePlugins(this);
                    for (const [i, e] of t) this.plugins.set(i, e);
                    for (const [, t] of this.drawers) t.init && (yield t.init(this));
                    for (const [, t] of this.plugins) t.init ? t.init(this.actualOptions) : void 0 !== t.initAsync && (yield t.initAsync(this.actualOptions));
                    this.canvas.resize(), this.particles.init(), this.particles.setDensity()
                }))
            }
            intersectionManager(t) {
                if (this.actualOptions.pauseOnOutsideViewport)
                    for (const i of t) i.target === this.interactivity.element && (i.isIntersecting ? this.play() : this.pause())
            }
        }
        var oe = function(t, i, e, o) {
            return new(e || (e = Promise))((function(s, n) {
                function a(t) {
                    try {
                        l(o.next(t))
                    } catch (t) {
                        n(t)
                    }
                }

                function r(t) {
                    try {
                        l(o.throw(t))
                    } catch (t) {
                        n(t)
                    }
                }

                function l(t) {
                    var i;
                    t.done ? s(t.value) : (i = t.value, i instanceof e ? i : new e((function(t) {
                        t(i)
                    }))).then(a, r)
                }
                l((o = o.apply(t, i || [])).next())
            }))
        };
        const se = [];

        function ne(t) {
            console.error(`Error tsParticles - fetch status: ${t}`), console.error("Error tsParticles - File config not found")
        }
        class ae {
            static dom() {
                return se
            }
            static domItem(t) {
                const i = ae.dom(),
                    e = i[t];
                if (e && !e.destroyed) return e;
                i.splice(t, 1)
            }
            static load(t, i, e) {
                return oe(this, void 0, void 0, (function*() {
                    const o = document.getElementById(t);
                    if (o) return ae.set(t, o, i, e)
                }))
            }
            static set(t, i, e, o) {
                return oe(this, void 0, void 0, (function*() {
                    const s = e instanceof Array ? S.itemFromArray(e, o) : e,
                        n = ae.dom(),
                        a = n.findIndex((i => i.id === t));
                    if (a >= 0) {
                        const t = ae.domItem(a);
                        t && !t.destroyed && (t.destroy(), n.splice(a, 1))
                    }
                    let r, l;
                    if ("canvas" === i.tagName.toLowerCase()) r = i, l = !1;
                    else {
                        const t = i.getElementsByTagName("canvas");
                        t.length ? (r = t[0], r.className || (r.className = C.canvasClass), l = !1) : (l = !0, r = document.createElement("canvas"), r.className = C.canvasClass, r.style.width = "100%", r.style.height = "100%", i.appendChild(r))
                    }
                    const c = new ee(t, s);
                    return a >= 0 ? n.splice(a, 0, c) : n.push(c), c.canvas.loadCanvas(r, l), yield c.start(), c
                }))
            }
            static loadJSON(t, i, e) {
                return oe(this, void 0, void 0, (function*() {
                    const o = i instanceof Array ? S.itemFromArray(i, e) : i,
                        s = yield fetch(o);
                    if (s.ok) return ae.load(t, yield s.json());
                    ne(s.status)
                }))
            }
            static setJSON(t, i, e) {
                return oe(this, void 0, void 0, (function*() {
                    const o = yield fetch(e);
                    if (o.ok) {
                        const e = yield o.json();
                        return ae.set(t, i, e)
                    }
                    ne(o.status)
                }))
            }
            static setOnClickHandler(t) {
                const i = ae.dom();
                if (0 === i.length) throw new Error("Can only set click handlers after calling tsParticles.load() or tsParticles.loadJSON()");
                for (const e of i) {
                    const i = e.interactivity.element;
                    if (!i) continue;
                    const o = (i, o) => {
                            if (e.destroyed) return;
                            const s = e.retina.pixelRatio,
                                n = {
                                    x: o.x * s,
                                    y: o.y * s
                                },
                                a = e.particles.quadTree.queryCircle(n, e.retina.sizeValue);
                            t(i, a)
                        },
                        s = t => {
                            if (e.destroyed) return;
                            const i = t,
                                s = {
                                    x: i.offsetX || i.clientX,
                                    y: i.offsetY || i.clientY
                                };
                            o(t, s)
                        },
                        n = () => {
                            e.destroyed || (c = !0, d = !1)
                        },
                        a = () => {
                            e.destroyed || (d = !0)
                        },
                        r = t => {
                            var i, s, n;
                            if (!e.destroyed) {
                                if (c && !d) {
                                    const a = t,
                                        r = a.touches[a.touches.length - 1],
                                        l = null === (i = e.canvas.element) || void 0 === i ? void 0 : i.getBoundingClientRect(),
                                        c = {
                                            x: r.clientX - (null !== (s = null == l ? void 0 : l.left) && void 0 !== s ? s : 0),
                                            y: r.clientY - (null !== (n = null == l ? void 0 : l.top) && void 0 !== n ? n : 0)
                                        };
                                    o(t, c)
                                }
                                c = !1, d = !1
                            }
                        },
                        l = () => {
                            e.destroyed || (c = !1, d = !1)
                        };
                    let c = !1,
                        d = !1;
                    i.addEventListener("click", s), i.addEventListener("touchstart", n), i.addEventListener("touchmove", a), i.addEventListener("touchend", r), i.addEventListener("touchcancel", l)
                }
            }
        }
        var re, le, ce = function(t, i, e, o) {
                return new(e || (e = Promise))((function(s, n) {
                    function a(t) {
                        try {
                            l(o.next(t))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function r(t) {
                        try {
                            l(o.throw(t))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function l(t) {
                        var i;
                        t.done ? s(t.value) : (i = t.value, i instanceof e ? i : new e((function(t) {
                            t(i)
                        }))).then(a, r)
                    }
                    l((o = o.apply(t, i || [])).next())
                }))
            },
            de = function(t, i, e) {
                if (!i.has(t)) throw new TypeError("attempted to set private field on non-instance");
                return i.set(t, e), e
            },
            he = function(t, i) {
                if (!i.has(t)) throw new TypeError("attempted to get private field on non-instance");
                return i.get(t)
            };
        re = new WeakMap;
        class ue {
            constructor(t, i, e, o) {
                var s, n, l;
                this.absorbers = t, this.container = i, this.initialPosition = o ? a.create(o.x, o.y) : void 0, this.options = e, this.dragging = !1, this.name = this.options.name, this.opacity = this.options.opacity, this.size = r.getValue(e.size) * i.retina.pixelRatio, this.mass = this.size * e.size.density * i.retina.reduceFactor;
                const c = e.size.limit;
                this.limit = void 0 !== c ? c * i.retina.pixelRatio * i.retina.reduceFactor : c;
                const d = "string" == typeof e.color ? {
                    value: e.color
                } : e.color;
                this.color = null !== (s = T.colorToRgb(d)) && void 0 !== s ? s : {
                    b: 0,
                    g: 0,
                    r: 0
                }, this.position = null !== (l = null === (n = this.initialPosition) || void 0 === n ? void 0 : n.copy()) && void 0 !== l ? l : this.calcPosition()
            }
            attract(t) {
                const i = this.options;
                if (i.draggable) {
                    const t = this.container.interactivity.mouse;
                    if (t.clicking && t.downPosition) {
                        r.getDistance(this.position, t.downPosition) <= this.size && (this.dragging = !0)
                    } else this.dragging = !1;
                    this.dragging && t.position && (this.position.x = t.position.x, this.position.y = t.position.y)
                }
                const e = t.getPosition(),
                    {
                        dx: o,
                        dy: s,
                        distance: n
                    } = r.getDistances(this.position, e),
                    l = a.create(o, s);
                if (l.length = this.mass / Math.pow(n, 2) * this.container.retina.reduceFactor, n < this.size + t.getRadius()) {
                    const e = .033 * t.getRadius() * this.container.retina.pixelRatio;
                    this.size > t.getRadius() && n < this.size - t.getRadius() ? i.destroy ? t.destroy() : (t.needsNewPosition = !0, this.updateParticlePosition(t, l)) : (i.destroy && (t.size.value -= e), this.updateParticlePosition(t, l)), (void 0 === this.limit || this.size < this.limit) && (this.size += e), this.mass += e * this.options.size.density * this.container.retina.reduceFactor
                } else this.updateParticlePosition(t, l)
            }
            resize() {
                const t = this.initialPosition;
                this.position = t && S.isPointInside(t, this.container.canvas.size) ? t : this.calcPosition()
            }
            draw(t) {
                t.translate(this.position.x, this.position.y), t.beginPath(), t.arc(0, 0, this.size, 0, 2 * Math.PI, !1), t.closePath(), t.fillStyle = T.getStyleFromRgb(this.color, this.opacity), t.fill()
            }
            calcPosition() {
                var t, i;
                const e = this.container,
                    o = this.options.position;
                return a.create((null !== (t = null == o ? void 0 : o.x) && void 0 !== t ? t : 100 * Math.random()) / 100 * e.canvas.size.width, (null !== (i = null == o ? void 0 : o.y) && void 0 !== i ? i : 100 * Math.random()) / 100 * e.canvas.size.height)
            }
            updateParticlePosition(t, i) {
                var e;
                if (t.destroyed) return;
                const o = this.container.canvas.size;
                if (t.needsNewPosition) {
                    const i = t.getRadius();
                    t.position.x = Math.random() * (o.width - 2 * i) + i, t.position.y = Math.random() * (o.height - 2 * i) + i, t.needsNewPosition = !1
                }
                this.options.orbits ? (void 0 === t.orbit && (t.orbit = a.create(0, 0), t.orbit.length = r.getDistance(t.getPosition(), this.position), t.orbit.angle = Math.random() * Math.PI * 2), t.orbit.length <= this.size && !this.options.destroy && (t.orbit.length = Math.random() * Math.max(o.width, o.height)), t.velocity.x = 0, t.velocity.y = 0, t.position.setTo(t.orbit.add(this.position)), t.orbit.length -= i.length, t.orbit.angle += (null !== (e = t.moveSpeed) && void 0 !== e ? e : r.getRangeValue(t.options.move.speed) * this.container.retina.pixelRatio) / 100 * this.container.retina.reduceFactor) : t.velocity.addTo(i)
            }
        }
        class ve extends ut {
            constructor() {
                super(), this.density = 5, this.random.minimumValue = 1, this.value = 50
            }
            load(t) {
                t && (super.load(t), void 0 !== t.density && (this.density = t.density), void 0 !== t.limit && (this.limit = t.limit), void 0 !== t.limit && (this.limit = t.limit))
            }
        }
        class pe {
            constructor() {
                this.color = new nt, this.color.value = "#000000", this.draggable = !1, this.opacity = 1, this.destroy = !0, this.orbits = !1, this.size = new ve
            }
            load(t) {
                void 0 !== t && (void 0 !== t.color && (this.color = nt.create(this.color, t.color)), void 0 !== t.draggable && (this.draggable = t.draggable), this.name = t.name, void 0 !== t.opacity && (this.opacity = t.opacity), void 0 !== t.position && (this.position = {
                    x: t.position.x,
                    y: t.position.y
                }), void 0 !== t.size && this.size.load(t.size), void 0 !== t.destroy && (this.destroy = t.destroy), void 0 !== t.orbits && (this.orbits = t.orbits))
            }
        }! function(t) {
            t.absorber = "absorber"
        }(le || (le = {}));
        class ye {
            constructor(t) {
                this.container = t, this.array = [], this.absorbers = [], this.interactivityAbsorbers = [];
                t.addAbsorber = (t, i) => this.addAbsorber(t, i)
            }
            init(t) {
                var i, e;
                if (!t) return;
                t.absorbers && (t.absorbers instanceof Array ? this.absorbers = t.absorbers.map((t => {
                    const i = new pe;
                    return i.load(t), i
                })) : (this.absorbers instanceof Array && (this.absorbers = new pe), this.absorbers.load(t.absorbers)));
                const o = null === (e = null === (i = t.interactivity) || void 0 === i ? void 0 : i.modes) || void 0 === e ? void 0 : e.absorbers;
                if (o && (o instanceof Array ? this.interactivityAbsorbers = o.map((t => {
                        const i = new pe;
                        return i.load(t), i
                    })) : (this.interactivityAbsorbers instanceof Array && (this.interactivityAbsorbers = new pe), this.interactivityAbsorbers.load(o))), this.absorbers instanceof Array)
                    for (const t of this.absorbers) this.addAbsorber(t);
                else this.addAbsorber(this.absorbers)
            }
            particleUpdate(t) {
                for (const i of this.array)
                    if (i.attract(t), t.destroyed) break
            }
            draw(t) {
                for (const i of this.array) t.save(), i.draw(t), t.restore()
            }
            stop() {
                this.array = []
            }
            resize() {
                for (const t of this.array) t.resize()
            }
            handleClickMode(t) {
                const i = this.container,
                    e = this.absorbers,
                    o = this.interactivityAbsorbers;
                if (t === le.absorber) {
                    let t;
                    o instanceof Array ? o.length > 0 && (t = S.itemFromArray(o)) : t = o;
                    const s = null != t ? t : e instanceof Array ? S.itemFromArray(e) : e,
                        n = i.interactivity.mouse.clickPosition;
                    this.addAbsorber(s, n)
                }
            }
            addAbsorber(t, i) {
                const e = new ue(this, this.container, t, i);
                return this.array.push(e), e
            }
            removeAbsorber(t) {
                const i = this.array.indexOf(t);
                i >= 0 && this.array.splice(i, 1)
            }
        }
        const me = new class {
            constructor() {
                this.id = "absorbers"
            }
            getPlugin(t) {
                return new ye(t)
            }
            needsPlugin(t) {
                var i, e, o;
                if (void 0 === t) return !1;
                const s = t.absorbers;
                let n = !1;
                return s instanceof Array ? s.length && (n = !0) : (void 0 !== s || (null === (o = null === (e = null === (i = t.interactivity) || void 0 === i ? void 0 : i.events) || void 0 === e ? void 0 : e.onClick) || void 0 === o ? void 0 : o.mode) && S.isInArray(le.absorber, t.interactivity.events.onClick.mode)) && (n = !0), n
            }
            loadOptions(t, i) {
                var e, o;
                if (!this.needsPlugin(t) && !this.needsPlugin(i)) return;
                const s = t;
                if (null == i ? void 0 : i.absorbers)
                    if ((null == i ? void 0 : i.absorbers) instanceof Array) s.absorbers = null == i ? void 0 : i.absorbers.map((t => {
                        const i = new pe;
                        return i.load(t), i
                    }));
                    else {
                        let t = s.absorbers;
                        void 0 === (null == t ? void 0 : t.load) && (s.absorbers = t = new pe), t.load(null == i ? void 0 : i.absorbers)
                    } const n = null === (o = null === (e = null == i ? void 0 : i.interactivity) || void 0 === e ? void 0 : e.modes) || void 0 === o ? void 0 : o.absorbers;
                if (n)
                    if (n instanceof Array) s.interactivity.modes.absorbers = n.map((t => {
                        const i = new pe;
                        return i.load(t), i
                    }));
                    else {
                        let t = s.interactivity.modes.absorbers;
                        void 0 === (null == t ? void 0 : t.load) && (s.interactivity.modes.absorbers = t = new pe), t.load(n)
                    }
            }
        };
        class fe {
            constructor() {
                this.mode = p.percent, this.height = 0, this.width = 0
            }
            load(t) {
                void 0 !== t && (void 0 !== t.mode && (this.mode = t.mode), void 0 !== t.height && (this.height = t.height), void 0 !== t.width && (this.width = t.width))
            }
        }

        function ge(t, i) {
            return t + i * (Math.random() - .5)
        }

        function be(t, i) {
            return {
                x: ge(t.x, i.x),
                y: ge(t.y, i.y)
            }
        }
        class we {
            constructor(t, i, e, o) {
                var s, n, a, r;
                this.emitters = t, this.container = i, this.firstSpawn = !0, this.currentDuration = 0, this.currentEmitDelay = 0, this.currentSpawnDelay = 0, this.initialPosition = o, this.emitterOptions = S.deepExtend({}, e), this.spawnDelay = 1e3 * (null !== (s = this.emitterOptions.life.delay) && void 0 !== s ? s : 0) / this.container.retina.reduceFactor, this.position = null !== (n = this.initialPosition) && void 0 !== n ? n : this.calcPosition(), this.name = e.name;
                let l = S.deepExtend({}, this.emitterOptions.particles);
                void 0 === l && (l = {}), void 0 === l.move && (l.move = {}), void 0 === l.move.direction && (l.move.direction = this.emitterOptions.direction), void 0 !== this.emitterOptions.spawnColor && (this.spawnColor = T.colorToHsl(this.emitterOptions.spawnColor)), this.paused = !this.emitterOptions.autoPlay, this.particlesOptions = l, this.size = null !== (a = this.emitterOptions.size) && void 0 !== a ? a : (() => {
                    const t = new fe;
                    return t.load({
                        height: 0,
                        mode: p.percent,
                        width: 0
                    }), t
                })(), this.lifeCount = null !== (r = this.emitterOptions.life.count) && void 0 !== r ? r : -1, this.immortal = this.lifeCount <= 0, this.play()
            }
            externalPlay() {
                this.paused = !1, this.play()
            }
            externalPause() {
                this.paused = !0, this.pause()
            }
            play() {
                this.paused || this.container.retina.reduceFactor && (this.lifeCount > 0 || this.immortal || !this.emitterOptions.life.count) && (void 0 === this.emitDelay && (this.emitDelay = 1e3 * this.emitterOptions.rate.delay / this.container.retina.reduceFactor), (this.lifeCount > 0 || this.immortal) && this.prepareToDie())
            }
            pause() {
                this.paused || delete this.emitDelay
            }
            resize() {
                const t = this.initialPosition;
                this.position = t && S.isPointInside(t, this.container.canvas.size) ? t : this.calcPosition()
            }
            update(t) {
                var i, e, o;
                this.paused || (this.firstSpawn && (this.firstSpawn = !1, this.currentSpawnDelay = null !== (i = this.spawnDelay) && void 0 !== i ? i : 0, this.currentEmitDelay = null !== (e = this.emitDelay) && void 0 !== e ? e : 0, t.value = 0), void 0 !== this.duration && (this.currentDuration += t.value, this.currentDuration >= this.duration && (this.pause(), void 0 !== this.spawnDelay && delete this.spawnDelay, this.immortal || this.lifeCount--, this.lifeCount > 0 || this.immortal ? (this.position = this.calcPosition(), this.spawnDelay = 1e3 * (null !== (o = this.emitterOptions.life.delay) && void 0 !== o ? o : 0) / this.container.retina.reduceFactor) : this.destroy(), this.currentDuration -= this.duration, delete this.duration)), void 0 !== this.spawnDelay && (this.currentSpawnDelay += t.value, this.currentSpawnDelay >= this.spawnDelay && (this.play(), this.currentSpawnDelay -= this.currentSpawnDelay, delete this.spawnDelay)), void 0 !== this.emitDelay && (this.currentEmitDelay += t.value, this.currentEmitDelay >= this.emitDelay && (this.emit(), this.currentEmitDelay -= this.emitDelay)))
            }
            prepareToDie() {
                var t;
                if (this.paused) return;
                const i = null === (t = this.emitterOptions.life) || void 0 === t ? void 0 : t.duration;
                this.container.retina.reduceFactor && (this.lifeCount > 0 || this.immortal) && void 0 !== i && i > 0 && (this.duration = 1e3 * i)
            }
            destroy() {
                this.emitters.removeEmitter(this)
            }
            calcPosition() {
                var t, i;
                const e = this.container,
                    o = this.emitterOptions.position;
                return {
                    x: (null !== (t = null == o ? void 0 : o.x) && void 0 !== t ? t : 100 * Math.random()) / 100 * e.canvas.size.width,
                    y: (null !== (i = null == o ? void 0 : o.y) && void 0 !== i ? i : 100 * Math.random()) / 100 * e.canvas.size.height
                }
            }
            emit() {
                var t;
                if (this.paused) return;
                const i = this.container,
                    e = this.position,
                    o = {
                        x: this.size.mode === p.percent ? i.canvas.size.width * this.size.width / 100 : this.size.width,
                        y: this.size.mode === p.percent ? i.canvas.size.height * this.size.height / 100 : this.size.height
                    };
                for (let s = 0; s < this.emitterOptions.rate.quantity; s++) {
                    const s = S.deepExtend({}, this.particlesOptions);
                    if (void 0 !== this.spawnColor) {
                        const i = null === (t = this.emitterOptions.spawnColor) || void 0 === t ? void 0 : t.animation;
                        if (i) {
                            const t = i;
                            if (t.enable) this.spawnColor.h = this.setColorAnimation(t, this.spawnColor.h, 360);
                            else {
                                const t = i;
                                this.spawnColor.h = this.setColorAnimation(t.h, this.spawnColor.h, 360), this.spawnColor.s = this.setColorAnimation(t.s, this.spawnColor.s, 100), this.spawnColor.l = this.setColorAnimation(t.l, this.spawnColor.l, 100)
                            }
                        }
                        s.color ? s.color.value = this.spawnColor : s.color = {
                            value: this.spawnColor
                        }
                    }
                    i.particles.addParticle(be(e, o), s)
                }
            }
            setColorAnimation(t, i, e) {
                var o;
                const s = this.container;
                if (!t.enable) return i;
                const n = r.randomInRange(t.offset),
                    a = 1e3 * this.emitterOptions.rate.delay / s.retina.reduceFactor;
                return (i + (null !== (o = t.speed) && void 0 !== o ? o : 0) * s.fpsLimit / a + 3.6 * n) % e
            }
        }
        class xe {
            constructor() {
                this.quantity = 1, this.delay = .1
            }
            load(t) {
                void 0 !== t && (void 0 !== t.quantity && (this.quantity = t.quantity), void 0 !== t.delay && (this.delay = t.delay))
            }
        }
        class ke {
            load(t) {
                void 0 !== t && (void 0 !== t.count && (this.count = t.count), void 0 !== t.delay && (this.delay = t.delay), void 0 !== t.duration && (this.duration = t.duration))
            }
        }
        class Pe {
            constructor() {
                this.autoPlay = !0, this.direction = s.none, this.life = new ke, this.rate = new xe
            }
            load(t) {
                void 0 !== t && (void 0 !== t.autoPlay && (this.autoPlay = t.autoPlay), void 0 !== t.size && (void 0 === this.size && (this.size = new fe), this.size.load(t.size)), void 0 !== t.direction && (this.direction = t.direction), this.life.load(t.life), this.name = t.name, void 0 !== t.particles && (this.particles = S.deepExtend({}, t.particles)), this.rate.load(t.rate), void 0 !== t.position && (this.position = {
                    x: t.position.x,
                    y: t.position.y
                }), void 0 !== t.spawnColor && (void 0 === this.spawnColor && (this.spawnColor = new Ot), this.spawnColor.load(t.spawnColor)))
            }
        }
        var Me;
        ! function(t) {
            t.emitter = "emitter"
        }(Me || (Me = {}));
        class Re {
            constructor(t) {
                this.container = t, this.array = [], this.emitters = [], this.interactivityEmitters = [];
                const i = t;
                i.addEmitter = (t, i) => this.addEmitter(t, i), i.playEmitter = t => {
                    const i = void 0 === t || "number" == typeof t ? this.array[t || 0] : this.array.find((i => i.name === t));
                    i && i.externalPlay()
                }, i.pauseEmitter = t => {
                    const i = void 0 === t || "number" == typeof t ? this.array[t || 0] : this.array.find((i => i.name === t));
                    i && i.externalPause()
                }
            }
            init(t) {
                var i, e;
                if (!t) return;
                t.emitters && (t.emitters instanceof Array ? this.emitters = t.emitters.map((t => {
                    const i = new Pe;
                    return i.load(t), i
                })) : (this.emitters instanceof Array && (this.emitters = new Pe), this.emitters.load(t.emitters)));
                const o = null === (e = null === (i = t.interactivity) || void 0 === i ? void 0 : i.modes) || void 0 === e ? void 0 : e.emitters;
                if (o && (o instanceof Array ? this.interactivityEmitters = o.map((t => {
                        const i = new Pe;
                        return i.load(t), i
                    })) : (this.interactivityEmitters instanceof Array && (this.interactivityEmitters = new Pe), this.interactivityEmitters.load(o))), this.emitters instanceof Array)
                    for (const t of this.emitters) this.addEmitter(t);
                else this.addEmitter(this.emitters)
            }
            play() {
                for (const t of this.array) t.play()
            }
            pause() {
                for (const t of this.array) t.pause()
            }
            stop() {
                this.array = []
            }
            update(t) {
                for (const i of this.array) i.update(t)
            }
            handleClickMode(t) {
                const i = this.container,
                    e = this.emitters,
                    o = this.interactivityEmitters;
                if (t === Me.emitter) {
                    let t;
                    o instanceof Array ? o.length > 0 && (t = S.itemFromArray(o)) : t = o;
                    const s = null != t ? t : e instanceof Array ? S.itemFromArray(e) : e,
                        n = i.interactivity.mouse.clickPosition;
                    this.addEmitter(S.deepExtend({}, s), n)
                }
            }
            resize() {
                for (const t of this.array) t.resize()
            }
            addEmitter(t, i) {
                const e = new we(this, this.container, t, i);
                return this.array.push(e), e
            }
            removeEmitter(t) {
                const i = this.array.indexOf(t);
                i >= 0 && this.array.splice(i, 1)
            }
        }
        const Se = new class {
            constructor() {
                this.id = "emitters"
            }
            getPlugin(t) {
                return new Re(t)
            }
            needsPlugin(t) {
                var i, e, o;
                if (void 0 === t) return !1;
                const s = t.emitters;
                let n = !1;
                return s instanceof Array ? s.length && (n = !0) : (void 0 !== s || (null === (o = null === (e = null === (i = t.interactivity) || void 0 === i ? void 0 : i.events) || void 0 === e ? void 0 : e.onClick) || void 0 === o ? void 0 : o.mode) && S.isInArray(Me.emitter, t.interactivity.events.onClick.mode)) && (n = !0), n
            }
            loadOptions(t, i) {
                var e, o;
                if (!this.needsPlugin(t) && !this.needsPlugin(i)) return;
                const s = t;
                if (null == i ? void 0 : i.emitters)
                    if ((null == i ? void 0 : i.emitters) instanceof Array) s.emitters = null == i ? void 0 : i.emitters.map((t => {
                        const i = new Pe;
                        return i.load(t), i
                    }));
                    else {
                        let t = s.emitters;
                        void 0 === (null == t ? void 0 : t.load) && (s.emitters = t = new Pe), t.load(null == i ? void 0 : i.emitters)
                    } const n = null === (o = null === (e = null == i ? void 0 : i.interactivity) || void 0 === e ? void 0 : e.modes) || void 0 === o ? void 0 : o.emitters;
                if (n)
                    if (n instanceof Array) s.interactivity.modes.emitters = n.map((t => {
                        const i = new Pe;
                        return i.load(t), i
                    }));
                    else {
                        let t = s.interactivity.modes.emitters;
                        void 0 === (null == t ? void 0 : t.load) && (s.interactivity.modes.emitters = t = new Pe), t.load(n)
                    }
            }
        };
        var Ce, ze, Ae;
        ! function(t) {
            t.equidistant = "equidistant", t.onePerPoint = "one-per-point", t.perPoint = "per-point", t.randomLength = "random-length", t.randomPoint = "random-point"
        }(Ce || (Ce = {})),
        function(t) {
            t.path = "path", t.radius = "radius"
        }(ze || (ze = {})),
        function(t) {
            t.inline = "inline", t.inside = "inside", t.outside = "outside", t.none = "none"
        }(Ae || (Ae = {}));
        class Te {
            constructor() {
                this.color = new nt, this.width = .5, this.opacity = 1
            }
            load(t) {
                var i;
                void 0 !== t && (this.color = nt.create(this.color, t.color), "string" == typeof this.color.value && (this.opacity = null !== (i = T.stringToAlpha(this.color.value)) && void 0 !== i ? i : this.opacity), void 0 !== t.opacity && (this.opacity = t.opacity), void 0 !== t.width && (this.width = t.width))
            }
        }
        class De {
            constructor() {
                this.enable = !1, this.stroke = new Te
            }
            get lineWidth() {
                return this.stroke.width
            }
            set lineWidth(t) {
                this.stroke.width = t
            }
            get lineColor() {
                return this.stroke.color
            }
            set lineColor(t) {
                this.stroke.color = nt.create(this.stroke.color, t)
            }
            load(t) {
                var i;
                if (void 0 !== t) {
                    void 0 !== t.enable && (this.enable = t.enable);
                    const e = null !== (i = t.stroke) && void 0 !== i ? i : {
                        color: t.lineColor,
                        width: t.lineWidth
                    };
                    this.stroke.load(e)
                }
            }
        }
        class Oe {
            constructor() {
                this.radius = 10, this.type = ze.path
            }
            load(t) {
                void 0 !== t && (void 0 !== t.radius && (this.radius = t.radius), void 0 !== t.type && (this.type = t.type))
            }
        }
        class Ee {
            constructor() {
                this.arrangement = Ce.onePerPoint
            }
            load(t) {
                void 0 !== t && void 0 !== t.arrangement && (this.arrangement = t.arrangement)
            }
        }
        class Ie {
            constructor() {
                this.path = [], this.size = {
                    height: 0,
                    width: 0
                }
            }
            load(t) {
                void 0 !== t && (void 0 !== t.path && (this.path = t.path), void 0 !== t.size && (void 0 !== t.size.width && (this.size.width = t.size.width), void 0 !== t.size.height && (this.size.height = t.size.height)))
            }
        }
        class Fe {
            constructor() {
                this.draw = new De, this.enable = !1, this.inline = new Ee, this.move = new Oe, this.scale = 1, this.type = Ae.none
            }
            get inlineArrangement() {
                return this.inline.arrangement
            }
            set inlineArrangement(t) {
                this.inline.arrangement = t
            }
            load(t) {
                var i;
                if (void 0 !== t) {
                    this.draw.load(t.draw);
                    const e = null !== (i = t.inline) && void 0 !== i ? i : {
                        arrangement: t.inlineArrangement
                    };
                    void 0 !== e && this.inline.load(e), this.move.load(t.move), void 0 !== t.scale && (this.scale = t.scale), void 0 !== t.type && (this.type = t.type), void 0 !== t.enable ? this.enable = t.enable : this.enable = this.type !== Ae.none, void 0 !== t.url && (this.url = t.url), void 0 !== t.data && ("string" == typeof t.data ? this.data = t.data : (this.data = new Ie, this.data.load(t.data))), void 0 !== t.position && (this.position = S.deepExtend({}, t.position))
                }
            }
        }
        var Ve = function(t, i, e, o) {
            return new(e || (e = Promise))((function(s, n) {
                function a(t) {
                    try {
                        l(o.next(t))
                    } catch (t) {
                        n(t)
                    }
                }

                function r(t) {
                    try {
                        l(o.throw(t))
                    } catch (t) {
                        n(t)
                    }
                }

                function l(t) {
                    var i;
                    t.done ? s(t.value) : (i = t.value, i instanceof e ? i : new e((function(t) {
                        t(i)
                    }))).then(a, r)
                }
                l((o = o.apply(t, i || [])).next())
            }))
        };

        function Le(t) {
            t.velocity.x = t.velocity.y / 2 - t.velocity.x, t.velocity.y = t.velocity.x / 2 - t.velocity.y
        }

        function He(t, i, e) {
            const o = T.colorToRgb(e.color);
            if (o) {
                t.beginPath(), t.moveTo(i[0].x, i[0].y);
                for (const e of i) t.lineTo(e.x, e.y);
                t.closePath(), t.strokeStyle = T.getStyleFromRgb(o), t.lineWidth = e.width, t.stroke()
            }
        }

        function qe(t, i, e, o) {
            t.translate(o.x, o.y);
            const s = T.colorToRgb(e.color);
            s && (t.strokeStyle = T.getStyleFromRgb(s, e.opacity), t.lineWidth = e.width, t.stroke(i))
        }
        class _e {
            constructor(t) {
                this.container = t, this.dimension = {
                    height: 0,
                    width: 0
                }, this.path2DSupported = !!window.Path2D, this.options = new Fe, this.polygonMaskMoveRadius = this.options.move.radius * t.retina.pixelRatio
            }
            initAsync(t) {
                return Ve(this, void 0, void 0, (function*() {
                    this.options.load(null == t ? void 0 : t.polygon);
                    const i = this.options;
                    this.polygonMaskMoveRadius = i.move.radius * this.container.retina.pixelRatio, i.enable && (yield this.initRawData())
                }))
            }
            resize() {
                const t = this.container,
                    i = this.options;
                i.enable && i.type !== Ae.none && (this.redrawTimeout && clearTimeout(this.redrawTimeout), this.redrawTimeout = window.setTimeout((() => Ve(this, void 0, void 0, (function*() {
                    yield this.initRawData(!0), t.particles.redraw()
                }))), 250))
            }
            stop() {
                delete this.raw, delete this.paths
            }
            particlesInitialization() {
                const t = this.options;
                return !(!t.enable || t.type !== Ae.inline || t.inline.arrangement !== Ce.onePerPoint && t.inline.arrangement !== Ce.perPoint) && (this.drawPoints(), !0)
            }
            particlePosition(t) {
                var i, e;
                if (this.options.enable && (null !== (e = null === (i = this.raw) || void 0 === i ? void 0 : i.length) && void 0 !== e ? e : 0) > 0) return S.deepExtend({}, t || this.randomPoint())
            }
            particleBounce(t) {
                const i = this.options;
                if (i.enable && i.type !== Ae.none && i.type !== Ae.inline) {
                    if (!this.checkInsidePolygon(t.getPosition())) return Le(t), !0
                } else if (i.enable && i.type === Ae.inline && t.initialPosition) {
                    if (r.getDistance(t.initialPosition, t.getPosition()) > this.polygonMaskMoveRadius) return Le(t), !0
                }
                return !1
            }
            clickPositionValid(t) {
                const i = this.options;
                return i.enable && i.type !== Ae.none && i.type !== Ae.inline && this.checkInsidePolygon(t)
            }
            draw(t) {
                var i;
                if (!(null === (i = this.paths) || void 0 === i ? void 0 : i.length)) return;
                const e = this.options,
                    o = e.draw;
                if (!e.enable || !o.enable) return;
                const s = this.raw;
                for (const i of this.paths) {
                    const e = i.path2d,
                        n = this.path2DSupported;
                    t && (n && e && this.offset ? qe(t, e, o.stroke, this.offset) : s && He(t, s, o.stroke))
                }
            }
            checkInsidePolygon(t) {
                var i, e;
                const o = this.container,
                    s = this.options;
                if (!s.enable || s.type === Ae.none || s.type === Ae.inline) return !0;
                if (!this.raw) throw new Error(C.noPolygonFound);
                const n = o.canvas.size,
                    a = null !== (i = null == t ? void 0 : t.x) && void 0 !== i ? i : Math.random() * n.width,
                    r = null !== (e = null == t ? void 0 : t.y) && void 0 !== e ? e : Math.random() * n.height;
                let l = !1;
                for (let t = 0, i = this.raw.length - 1; t < this.raw.length; i = t++) {
                    const e = this.raw[t],
                        o = this.raw[i];
                    e.y > r != o.y > r && a < (o.x - e.x) * (r - e.y) / (o.y - e.y) + e.x && (l = !l)
                }
                return s.type === Ae.inside ? l : s.type === Ae.outside && !l
            }
            parseSvgPath(t, i) {
                var e, o, s;
                const n = null != i && i;
                if (void 0 !== this.paths && !n) return this.raw;
                const a = this.container,
                    r = this.options,
                    l = (new DOMParser).parseFromString(t, "image/svg+xml"),
                    c = l.getElementsByTagName("svg")[0];
                let d = c.getElementsByTagName("path");
                d.length || (d = l.getElementsByTagName("path")), this.paths = [];
                for (let t = 0; t < d.length; t++) {
                    const i = d.item(t);
                    i && this.paths.push({
                        element: i,
                        length: i.getTotalLength()
                    })
                }
                const h = a.retina.pixelRatio,
                    u = r.scale / h;
                this.dimension.width = parseFloat(null !== (e = c.getAttribute("width")) && void 0 !== e ? e : "0") * u, this.dimension.height = parseFloat(null !== (o = c.getAttribute("height")) && void 0 !== o ? o : "0") * u;
                const v = null !== (s = r.position) && void 0 !== s ? s : {
                    x: 50,
                    y: 50
                };
                return this.offset = {
                        x: a.canvas.size.width * v.x / (100 * h) - this.dimension.width / 2,
                        y: a.canvas.size.height * v.y / (100 * h) - this.dimension.height / 2
                    },
                    function(t, i, e) {
                        const o = [];
                        for (const s of t) {
                            const t = s.element.pathSegList,
                                n = t.numberOfItems,
                                a = {
                                    x: 0,
                                    y: 0
                                };
                            for (let s = 0; s < n; s++) {
                                const n = t.getItem(s),
                                    r = window.SVGPathSeg;
                                switch (n.pathSegType) {
                                    case r.PATHSEG_MOVETO_ABS:
                                    case r.PATHSEG_LINETO_ABS:
                                    case r.PATHSEG_CURVETO_CUBIC_ABS:
                                    case r.PATHSEG_CURVETO_QUADRATIC_ABS:
                                    case r.PATHSEG_ARC_ABS:
                                    case r.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
                                    case r.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS: {
                                        const t = n;
                                        a.x = t.x, a.y = t.y;
                                        break
                                    }
                                    case r.PATHSEG_LINETO_HORIZONTAL_ABS:
                                        a.x = n.x;
                                        break;
                                    case r.PATHSEG_LINETO_VERTICAL_ABS:
                                        a.y = n.y;
                                        break;
                                    case r.PATHSEG_LINETO_REL:
                                    case r.PATHSEG_MOVETO_REL:
                                    case r.PATHSEG_CURVETO_CUBIC_REL:
                                    case r.PATHSEG_CURVETO_QUADRATIC_REL:
                                    case r.PATHSEG_ARC_REL:
                                    case r.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
                                    case r.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL: {
                                        const t = n;
                                        a.x += t.x, a.y += t.y;
                                        break
                                    }
                                    case r.PATHSEG_LINETO_HORIZONTAL_REL:
                                        a.x += n.x;
                                        break;
                                    case r.PATHSEG_LINETO_VERTICAL_REL:
                                        a.y += n.y;
                                        break;
                                    case r.PATHSEG_UNKNOWN:
                                    case r.PATHSEG_CLOSEPATH:
                                        continue
                                }
                                o.push({
                                    x: a.x * i + e.x,
                                    y: a.y * i + e.y
                                })
                            }
                        }
                        return o
                    }(this.paths, u, this.offset)
            }
            downloadSvgPath(t, i) {
                return Ve(this, void 0, void 0, (function*() {
                    const e = this.options,
                        o = t || e.url,
                        s = null != i && i;
                    if (!o || void 0 !== this.paths && !s) return this.raw;
                    const n = yield fetch(o);
                    if (!n.ok) throw new Error("tsParticles Error - Error occurred during polygon mask download");
                    return this.parseSvgPath(yield n.text(), i)
                }))
            }
            drawPoints() {
                if (this.raw)
                    for (const t of this.raw) this.container.particles.addParticle({
                        x: t.x,
                        y: t.y
                    })
            }
            randomPoint() {
                const t = this.container,
                    i = this.options;
                let e;
                if (i.type === Ae.inline) switch (i.inline.arrangement) {
                    case Ce.randomPoint:
                        e = this.getRandomPoint();
                        break;
                    case Ce.randomLength:
                        e = this.getRandomPointByLength();
                        break;
                    case Ce.equidistant:
                        e = this.getEquidistantPointByIndex(t.particles.count);
                        break;
                    case Ce.onePerPoint:
                    case Ce.perPoint:
                    default:
                        e = this.getPointByIndex(t.particles.count)
                } else e = {
                    x: Math.random() * t.canvas.size.width,
                    y: Math.random() * t.canvas.size.height
                };
                return this.checkInsidePolygon(e) ? e : this.randomPoint()
            }
            getRandomPoint() {
                if (!this.raw || !this.raw.length) throw new Error(C.noPolygonDataLoaded);
                const t = S.itemFromArray(this.raw);
                return {
                    x: t.x,
                    y: t.y
                }
            }
            getRandomPointByLength() {
                var t, i, e;
                const o = this.options;
                if (!this.raw || !this.raw.length || !(null === (t = this.paths) || void 0 === t ? void 0 : t.length)) throw new Error(C.noPolygonDataLoaded);
                const s = S.itemFromArray(this.paths),
                    n = Math.floor(Math.random() * s.length) + 1,
                    a = s.element.getPointAtLength(n);
                return {
                    x: a.x * o.scale + ((null === (i = this.offset) || void 0 === i ? void 0 : i.x) || 0),
                    y: a.y * o.scale + ((null === (e = this.offset) || void 0 === e ? void 0 : e.y) || 0)
                }
            }
            getEquidistantPointByIndex(t) {
                var i, e, o, s, n, a, r;
                const l = this.container.actualOptions,
                    c = this.options;
                if (!this.raw || !this.raw.length || !(null === (i = this.paths) || void 0 === i ? void 0 : i.length)) throw new Error(C.noPolygonDataLoaded);
                let d, h = 0;
                const u = this.paths.reduce(((t, i) => t + i.length), 0) / l.particles.number.value;
                for (const i of this.paths) {
                    const e = u * t - h;
                    if (e <= i.length) {
                        d = i.element.getPointAtLength(e);
                        break
                    }
                    h += i.length
                }
                return {
                    x: (null !== (e = null == d ? void 0 : d.x) && void 0 !== e ? e : 0) * c.scale + (null !== (s = null === (o = this.offset) || void 0 === o ? void 0 : o.x) && void 0 !== s ? s : 0),
                    y: (null !== (n = null == d ? void 0 : d.y) && void 0 !== n ? n : 0) * c.scale + (null !== (r = null === (a = this.offset) || void 0 === a ? void 0 : a.y) && void 0 !== r ? r : 0)
                }
            }
            getPointByIndex(t) {
                if (!this.raw || !this.raw.length) throw new Error(C.noPolygonDataLoaded);
                const i = this.raw[t % this.raw.length];
                return {
                    x: i.x,
                    y: i.y
                }
            }
            createPath2D() {
                var t, i;
                const e = this.options;
                if (this.path2DSupported && (null === (t = this.paths) || void 0 === t ? void 0 : t.length))
                    for (const t of this.paths) {
                        const o = null === (i = t.element) || void 0 === i ? void 0 : i.getAttribute("d");
                        if (o) {
                            const i = new Path2D(o),
                                s = document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGMatrix(),
                                n = new Path2D,
                                a = s.scale(e.scale);
                            n.addPath ? (n.addPath(i, a), t.path2d = n) : delete t.path2d
                        } else delete t.path2d;
                        !t.path2d && this.raw && (t.path2d = new Path2D, t.path2d.moveTo(this.raw[0].x, this.raw[0].y), this.raw.forEach(((i, e) => {
                            var o;
                            e > 0 && (null === (o = t.path2d) || void 0 === o || o.lineTo(i.x, i.y))
                        })), t.path2d.closePath())
                    }
            }
            initRawData(t) {
                return Ve(this, void 0, void 0, (function*() {
                    const i = this.options;
                    if (i.url) this.raw = yield this.downloadSvgPath(i.url, t);
                    else if (i.data) {
                        const e = i.data;
                        let o;
                        if ("string" != typeof e) {
                            const t = e.path instanceof Array ? e.path.map((t => `<path d="${t}" />`)).join("") : `<path d="${e.path}" />`;
                            o = `<svg ${'xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"'} width="${e.size.width}" height="${e.size.height}">${t}</svg>`
                        } else o = e;
                        this.raw = this.parseSvgPath(o, t)
                    }
                    this.createPath2D()
                }))
            }
        }
        const Be = new class {
            constructor() {
                this.id = "polygonMask"
            }
            getPlugin(t) {
                return new _e(t)
            }
            needsPlugin(t) {
                var i, e, o;
                return null !== (e = null === (i = null == t ? void 0 : t.polygon) || void 0 === i ? void 0 : i.enable) && void 0 !== e ? e : void 0 !== (null === (o = null == t ? void 0 : t.polygon) || void 0 === o ? void 0 : o.type) && t.polygon.type !== Ae.none
            }
            loadOptions(t, i) {
                if (!this.needsPlugin(i)) return;
                const e = t;
                let o = e.polygon;
                void 0 === (null == o ? void 0 : o.load) && (e.polygon = o = new Fe), o.load(null == i ? void 0 : i.polygon)
            }
        };
        class We extends class {
            constructor() {
                re.set(this, void 0), de(this, re, !1);
                const t = new e,
                    i = new j,
                    o = new Y;
                G.addShapeDrawer(b.line, new J), G.addShapeDrawer(b.circle, new Q), G.addShapeDrawer(b.edge, t), G.addShapeDrawer(b.square, t), G.addShapeDrawer(b.triangle, new K), G.addShapeDrawer(b.star, new tt), G.addShapeDrawer(b.polygon, new it), G.addShapeDrawer(b.char, i), G.addShapeDrawer(b.character, i), G.addShapeDrawer(b.image, o), G.addShapeDrawer(b.images, o)
            }
            init() {
                he(this, re) || de(this, re, !0)
            }
            loadFromArray(t, i, e) {
                return ce(this, void 0, void 0, (function*() {
                    return ae.load(t, i, e)
                }))
            }
            load(t, i) {
                return ce(this, void 0, void 0, (function*() {
                    return ae.load(t, i)
                }))
            }
            set(t, i, e) {
                return ce(this, void 0, void 0, (function*() {
                    return ae.set(t, i, e)
                }))
            }
            loadJSON(t, i, e) {
                return ae.loadJSON(t, i, e)
            }
            setOnClickHandler(t) {
                ae.setOnClickHandler(t)
            }
            dom() {
                return ae.dom()
            }
            domItem(t) {
                return ae.domItem(t)
            }
            addShape(t, i, e, o, s) {
                let n;
                n = "function" == typeof i ? {
                    afterEffect: o,
                    destroy: s,
                    draw: i,
                    init: e
                } : i, G.addShapeDrawer(t, n)
            }
            addPreset(t, i) {
                G.addPreset(t, i)
            }
            addPlugin(t) {
                G.addPlugin(t)
            }
            addPathGenerator(t, i) {
                G.addPathGenerator(t, i)
            }
        } {
            constructor() {
                super(), this.addPlugin(me), this.addPlugin(Se), this.addPlugin(Be)
            }
        }
        const Ge = new We;
        Ge.init();
        const {
            particlesJS: Ne,
            pJSDom: $e
        } = (t => {
            const i = (i, e) => t.load(i, e);
            i.load = (i, e, o) => {
                t.loadJSON(i, e).then((t => {
                    t && o(t)
                }))
            }, i.setOnClickHandler = i => {
                t.setOnClickHandler(i)
            };
            return {
                particlesJS: i,
                pJSDom: t.dom()
            }
        })(Ge);
        return i
    })()
}));
