console.log("portfolio")

! function t(i, n, r) {
  function e(a, u) {
    if (!n[a]) {
      if (!i[a]) { var s = "function" == typeof require && require; if (!u && s) return s(a, !0); if (o) return o(a, !0); var c = new Error("Cannot find module '" + a + "'"); throw c.code = "MODULE_NOT_FOUND", c }
      var f = n[a] = { exports: {} };
      i[a][0].call(f.exports, function(t) { var n = i[a][1][t]; return e(n ? n : t) }, f, f.exports, t, i, n, r)
    }
    return n[a].exports
  }
  for (var o = "function" == typeof require && require, a = 0; a < r.length; a++) e(r[a]);
  return e
}({
  1: [function(t) { t("../layout/grid.js"), t("../pages/portfolio.js") }, { "../layout/grid.js": 2, "../pages/portfolio.js": 3 }],
  2: [function() {
    window.Grid = function(t) {
      if (!(this instanceof Grid)) return new Grid(t);
      var i, n, r, e = 1,
        o = this,
        a = 176,
        u = 120,
        s = { x: a, y: u, calculated: 1 },
        c = 10;
      this.fullScale = function() { s.x = a, s.y = u }, this.smallerScale = function() { s.x = a / 1.5, s.y = u / 1.5 };
      var f = function(t) { if (n[t]) return n[t]; for (var i = [], r = 0; r < columns; r++) i.push(0); return n.push(i), o.rows = n.length, i },
        h = function() {
          for (var t = n.length, o = 0 > e ? columns - 1 : 0, a = e > 0 ? columns : 0, u = r; t > u; u++)
            for (var s = f(u), c = o; e > 0 ? a > c : c > a; c += e)
              if (0 == s[c]) return i.x = c, i.y = r = u, i;
          return i
        },
        l = function(t, n) {
          if (e > 0 && i.x + t > columns) return !1;
          if (0 > e && i.x - t < 0) return !1;
          for (var r = i.y + n, o = e > 0 ? i.x + t : i.x - t, a = i.y; r > a; a++)
            for (var u = f(a), s = i.x; e > 0 ? o > s : s > o; s += e)
              if (0 != u[s]) return !1;
          return !0
        },
        d = function(t, n) {
          for (var r = i.y + n, o = e > 0 ? i.x + t : i.x - t, a = $.extend({}, i), u = i.y; r > u; u++)
            for (var s = f(u), c = i.x; e > 0 ? o > c : c > o; c += e) s[c] += u == i.y || c >= o - 1 ? 1 : 2;
          return i = h(), a
        },
        x = function(t, i, n) { return { top: t.y * s.y * s.calculated, left: t.x * s.x * s.calculated, width: Math.floor(i * s.x * s.calculated - c), height: Math.floor(n * s.y * s.calculated - c) } };
      this.resize = function() { var o = t.width(); return columns = Math.max(3, Math.floor(o / s.x)), s.calculated = (o + c) / columns / s.x, n = [], i = e > 0 ? { x: 0, y: 0 } : { x: columns - 1, y: 0 }, r = 0, this }, this.next = function(t, n) {
        for (var r = 0;;) {
          if (r++, l(t, n)) return d(t, n);
          if (r >= 500) return !1;
          i.x += e, i.x > columns ? (i.x = 0, i.y += 1) : i.x < 0 && (i.x = columns - 1, i.y += 1)
        }
      }, this.computed_height = 0, this.render = function(i) {
        this.computed_height = 0, this.windowWidthBeforeInitialization = t.width(), this.resize();
        var n = this;
        t.children().each(function() {
          var t = $(this),
            r = Math.min(columns, parseInt(t.attr("data-cols"))),
            e = parseInt(t.attr("data-rows")),
            o = x(n.next(r, e), r, e);
          if (n.computed_height = Math.max(o.height + o.top, n.computed_height), t.css("position", "absolute").stop(!0), i && i.animated) {
            var a = i.dur || 500;
            t.animate(o, a)
          } else t.css(o)
        }), t.css("height", n.computed_height), this.windowWidthBeforeInitialization > t.width() && this.render(i)
      }
    }
  }, {}],
  3: [function() {
    function t() { $(window).innerWidth() }

    function i() {
      r.each(function() {
        var t = $(this);
        setTimeout(function() {
          var i = t.find("h2 span"),
            n = t.find(".BoxList-desc"),
            r = i.height(),
            e = parseInt(i.css("font-size"), 10);
          r > 1.5 * e && n.css("top", r - e + 50 + "px")
        }, 200)
      })
    }
    var n = $(".BoxList");
    if (n.length > 0) {
      var r = n.children("li");
      wideLiMinimumWidth = 500, fullSizeTilesMinimumWidth = 700;
      var e = new Grid(n);
      i(); { r.filter(function() { return $(this).attr("data-cols") > 2 }).each(function() { $(this).data("initialWidth", $(this).attr("data-cols")) }) } t(), e.render(), $(window).on("resize", function() { t(), e.render({ animated: !0, dur: 1500 }), i() })
    }
  }, {}]
}, {}, [1]);
