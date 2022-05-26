! function(t) {
	if("object" == typeof exports) module.exports = t();
	else if("function" == typeof define && define.amd) define(t);
	else {
		var e;
		"undefined" != typeof window ? e = window : "undefined" != typeof global ? e = global : "undefined" != typeof self && (e = self), e.PF = t()
	}
}(function() {
	return function t(e, i, n) {
		function o(a, s) {
			if(!i[a]) {
				if(!e[a]) {
					var l = "function" == typeof require && require;
					if(!s && l) return l(a, true);
					if(r) return r(a, true);
					throw new Error("Cannot find module '" + a + "'")
				}
				var h = i[a] = {
					exports: {}
				};
				e[a][0].call(h.exports, function(t) {
					var i = e[a][1][t];
					return o(i || t)
				}, h, h.exports, t, e, i, n)
			}
			return i[a].exports
		}
		for(var r = "function" == typeof require && require, a = 0; a < n.length; a++) o(n[a]);
		return o
	}({
		1: [function(t, e, i) {
			e.exports = t("./lib/heap")
		}, {
			"./lib/heap": 2
		}],
		2: [function(t, e, i) {
			(function() {
				var t, i, n, o, r, a, s, l, h, u, p, c, f, d, g;
				n = Math.floor, u = Math.min, i = function(t, e) {
					return e > t ? -1 : t > e ? 1 : 0
				}, h = function(t, e, o, r, a) {
					var s;
					if(null == o && (o = 0), null == a && (a = i), 0 > o) throw new Error("lo must be non-negative");
					for(null == r && (r = t.length); r > o;) a(e, t[s = n((o + r) / 2)]) < 0 ? r = s : o = s + 1;
					return [].splice.apply(t, [o, o - o].concat(e)), e
				}, a = function(t, e, n) {
					return null == n && (n = i), t.push(e), d(t, 0, t.length - 1, n)
				}, r = function(t, e) {
					var n, o;
					return null == e && (e = i), n = t.pop(), t.length ? (o = t[0], t[0] = n, g(t, 0, e)) : o = n, o
				}, l = function(t, e, n) {
					var o;
					return null == n && (n = i), o = t[0], t[0] = e, g(t, 0, n), o
				}, s = function(t, e, n) {
					var o;
					return null == n && (n = i), t.length && n(t[0], e) < 0 && (e = (o = [t[0], e])[0], t[0] = o[1], g(t, 0, n)), e
				}, o = function(t, e) {
					var o, r, a, s, l, h;
					for(null == e && (e = i), l = [], r = 0, a = (s = function() {
							h = [];
							for(var e = 0, i = n(t.length / 2); i >= 0 ? i > e : e > i; i >= 0 ? e++ : e--) h.push(e);
							return h
						}.apply(this).reverse()).length; a > r; r++) o = s[r], l.push(g(t, o, e));
					return l
				}, f = function(t, e, n) {
					var o;
					return null == n && (n = i), -1 !== (o = t.indexOf(e)) ? (d(t, 0, o, n), g(t, o, n)) : undefined
				}, p = function(t, e, n) {
					var r, a, l, h, u;
					if(null == n && (n = i), !(a = t.slice(0, e)).length) return a;
					for(o(a, n), l = 0, h = (u = t.slice(e)).length; h > l; l++) r = u[l], s(a, r, n);
					return a.sort(n).reverse()
				}, c = function(t, e, n) {
					var a, s, l, p, c, f, d, g, b;
					if(null == n && (n = i), 10 * e <= t.length) {
						if(!(l = t.slice(0, e).sort(n)).length) return l;
						for(s = l[l.length - 1], p = 0, f = (d = t.slice(e)).length; f > p; p++) n(a = d[p], s) < 0 && (h(l, a, 0, null, n), l.pop(), s = l[l.length - 1]);
						return l
					}
					for(o(t, n), b = [], c = 0, g = u(e, t.length); g >= 0 ? g > c : c > g; g >= 0 ? ++c : --c) b.push(r(t, n));
					return b
				}, d = function(t, e, n, o) {
					var r, a, s;
					for(null == o && (o = i), r = t[n]; n > e && o(r, a = t[s = n - 1 >> 1]) < 0;) t[n] = a, n = s;
					return t[n] = r
				}, g = function(t, e, n) {
					var o, r, a, s, l;
					for(null == n && (n = i), r = t.length, l = e, a = t[e], o = 2 * e + 1; r > o;) r > (s = o + 1) && !(n(t[o], t[s]) < 0) && (o = s), t[e] = t[o], o = 2 * (e = o) + 1;
					return t[e] = a, d(t, l, e, n)
				}, t = function() {
					function t(t) {
						this.cmp = null != t ? t : i, this.nodes = []
					}
					return t.push = a, t.pop = r, t.replace = l, t.pushpop = s, t.heapify = o, t.updateItem = f, t.nlargest = p, t.nsmallest = c, t.prototype.push = function(t) {
						return a(this.nodes, t, this.cmp)
					}, t.prototype.pop = function() {
						return r(this.nodes, this.cmp)
					}, t.prototype.peek = function() {
						return this.nodes[0]
					}, t.prototype.contains = function(t) {
						return -1 !== this.nodes.indexOf(t)
					}, t.prototype.replace = function(t) {
						return l(this.nodes, t, this.cmp)
					}, t.prototype.pushpop = function(t) {
						return s(this.nodes, t, this.cmp)
					}, t.prototype.heapify = function() {
						return o(this.nodes, this.cmp)
					}, t.prototype.updateItem = function(t) {
						return f(this.nodes, t, this.cmp)
					}, t.prototype.clear = function() {
						return this.nodes = []
					}, t.prototype.empty = function() {
						return 0 === this.nodes.length
					}, t.prototype.size = function() {
						return this.nodes.length
					}, t.prototype.clone = function() {
						var e;
						return (e = new t).nodes = this.nodes.slice(0), e
					}, t.prototype.toArray = function() {
						return this.nodes.slice(0)
					}, t.prototype.insert = t.prototype.push, t.prototype.top = t.prototype.peek, t.prototype.front = t.prototype.peek, t.prototype.has = t.prototype.contains, t.prototype.copy = t.prototype.clone, t
				}(), (null != e ? e.exports : undefined) ? e.exports = t : window.Heap = t
			}).call(this)
		}, {}],
		3: [function(t, e, i) {
			e.exports = {
				Always: 1,
				Never: 2,
				IfAtMostOneObstacle: 3,
				OnlyWhenNoObstacles: 4
			}
		}, {}],
		4: [function(t, e, i) {
			function n(t, e, i) {
				var n;
				"object" != typeof t ? n = t : (e = t.length, n = t[0].length, i = t), this.width = n, this.height = e, this.nodes = this._buildNodes(n, e, i)
			}
			var o = t("./Node"),
				r = t("./DiagonalMovement");
			n.prototype._buildNodes = function(t, e, i) {
				var n, r, a = new Array(e);
				for(n = 0; e > n; ++n)
					for(a[n] = new Array(t), r = 0; t > r; ++r) a[n][r] = new o(r, n);
				if(undefined === i) return a;
				if(i.length !== e || i[0].length !== t) throw new Error("Matrix size does not fit");
				for(n = 0; e > n; ++n)
					for(r = 0; t > r; ++r) i[n][r] && (a[n][r].walkable = false);
				return a
			}, n.prototype.getNodeAt = function(t, e) {
				return this.nodes[e][t]
			}, n.prototype.isWalkableAt = function(t, e) {
				return this.isInside(t, e) && this.nodes[e][t].walkable
			}, n.prototype.isInside = function(t, e) {
				return t >= 0 && t < this.width && e >= 0 && e < this.height
			}, n.prototype.setWalkableAt = function(t, e, i) {
				if(e >= 0 && t >= 0 && e < maperx && t < mapery) {
					this.nodes[e][t].walkable = i;
				}
			}, n.prototype.getNeighbors = function(t, e) {
				var i = t.x,
					n = t.y,
					o = [],
					a = false,
					s = false,
					l = false,
					h = false,
					u = false,
					p = false,
					c = false,
					f = false,
					d = this.nodes;
				if(this.isWalkableAt(i, n - 1) && (o.push(d[n - 1][i]), a = true), this.isWalkableAt(i + 1, n) && (o.push(d[n][i + 1]), l = true), this.isWalkableAt(i, n + 1) && (o.push(d[n + 1][i]), u = true), this.isWalkableAt(i - 1, n) && (o.push(d[n][i - 1]), c = true), e === r.Never) return o;
				if(e === r.OnlyWhenNoObstacles) s = c && a, h = a && l, p = l && u, f = u && c;
				else if(e === r.IfAtMostOneObstacle) s = c || a, h = a || l, p = l || u, f = u || c;
				else {
					if(e !== r.Always) throw new Error("Incorrect value of diagonalMovement");
					s = true, h = true, p = true, f = true
				}
				return s && this.isWalkableAt(i - 1, n - 1) && o.push(d[n - 1][i - 1]), h && this.isWalkableAt(i + 1, n - 1) && o.push(d[n - 1][i + 1]), p && this.isWalkableAt(i + 1, n + 1) && o.push(d[n + 1][i + 1]), f && this.isWalkableAt(i - 1, n + 1) && o.push(d[n + 1][i - 1]), o
			}, n.prototype.clone = function() {
				var t, e, i = this.width,
					r = this.height,
					a = this.nodes,
					s = new n(i, r),
					l = new Array(r);
				for(t = 0; r > t; ++t)
					for(l[t] = new Array(i), e = 0; i > e; ++e) l[t][e] = new o(e, t, a[t][e].walkable);
				return s.nodes = l, s
			}, e.exports = n
		}, {
			"./DiagonalMovement": 3,
			"./Node": 6
		}],
		5: [function(t, e, i) {
			e.exports = {
				manhattan: function(t, e) {
					return t + e
				},
				euclidean: function(t, e) {
					return Math.sqrt(t * t + e * e)
				},
				octile: function(t, e) {
					var i = Math.SQRT2 - 1;
					return e > t ? i * t + e : i * e + t
				},
				chebyshev: function(t, e) {
					return Math.max(t, e)
				}
			}
		}, {}],
		6: [function(t, e, i) {
			e.exports = function(t, e, i) {
				this.x = t, this.y = e, this.walkable = undefined === i || i
			}
		}, {}],
		7: [function(t, e, i) {
			function n(t) {
				for(var e = [
						[t.x, t.y]
					]; t.parent;) t = t.parent, e.push([t.x, t.y]);
				return e.reverse()
			}

			function o(t, e, i, n) {
				var o, r, a, s, l, h, u = Math.abs,
					p = [];
				for(o = i > t ? 1 : -1, r = n > e ? 1 : -1, l = (a = u(i - t)) - (s = u(n - e)); p.push([t, e]), t !== i || e !== n;)(h = 2 * l) > -s && (l -= s, t += o), a > h && (l += a, e += r);
				return p
			}
			i.backtrace = n, i.biBacktrace = function(t, e) {
				var i = n(t),
					o = n(e);
				return i.concat(o.reverse())
			}, i.pathLength = function(t) {
				var e, i, n, o, r, a = 0;
				for(e = 1; e < t.length; ++e) i = t[e - 1], n = t[e], o = i[0] - n[0], r = i[1] - n[1], a += Math.sqrt(o * o + r * r);
				return a
			}, i.interpolate = o, i.expandPath = function(t) {
				var e, i, n, r, a, s, l = [],
					h = t.length;
				if(2 > h) return l;
				for(a = 0; h - 1 > a; ++a)
					for(e = t[a], i = t[a + 1], r = (n = o(e[0], e[1], i[0], i[1])).length, s = 0; r - 1 > s; ++s) l.push(n[s]);
				return l.push(t[h - 1]), l
			}, i.smoothenPath = function(t, e) {
				var i, n, r, a, s, l, h, u, p, c = e.length,
					f = e[0][0],
					d = e[0][1],
					g = e[c - 1][0],
					b = e[c - 1][1];
				for(r = [
						[i = f, n = d]
					], a = 2; c > a; ++a) {
					for(h = o(i, n, (l = e[a])[0], l[1]), p = false, s = 1; s < h.length; ++s)
						if(u = h[s], !t.isWalkableAt(u[0], u[1])) {
							p = true;
							break
						} p && (lastValidCoord = e[a - 1], r.push(lastValidCoord), i = lastValidCoord[0], n = lastValidCoord[1])
				}
				return r.push([g, b]), r
			}, i.compressPath = function(t) {
				if(t.length < 3) return t;
				var e, i, n, o, r, a, s = [],
					l = t[0][0],
					h = t[0][1],
					u = t[1][0],
					p = t[1][1],
					c = u - l,
					f = p - h;
				for(c /= r = Math.sqrt(c * c + f * f), f /= r, s.push([l, h]), a = 2; a < t.length; a++) e = u, i = p, n = c, o = f, c = (u = t[a][0]) - e, f = (p = t[a][1]) - i, f /= r = Math.sqrt(c * c + f * f), (c /= r) === n && f === o || s.push([e, i]);
				return s.push([u, p]), s
			}
		}, {}],
		8: [function(t, e, i) {
			e.exports = {
				Heap: t("heap"),
				Node: t("./core/Node"),
				Grid: t("./core/Grid"),
				Util: t("./core/Util"),
				DiagonalMovement: t("./core/DiagonalMovement"),
				Heuristic: t("./core/Heuristic"),
				AStarFinder: t("./finders/AStarFinder"),
				BestFirstFinder: t("./finders/BestFirstFinder"),
				BreadthFirstFinder: t("./finders/BreadthFirstFinder"),
				DijkstraFinder: t("./finders/DijkstraFinder"),
				BiAStarFinder: t("./finders/BiAStarFinder"),
				BiBestFirstFinder: t("./finders/BiBestFirstFinder"),
				BiBreadthFirstFinder: t("./finders/BiBreadthFirstFinder"),
				BiDijkstraFinder: t("./finders/BiDijkstraFinder"),
				IDAStarFinder: t("./finders/IDAStarFinder"),
				JumpPointFinder: t("./finders/JumpPointFinder")
			}
		}, {
			"./core/DiagonalMovement": 3,
			"./core/Grid": 4,
			"./core/Heuristic": 5,
			"./core/Node": 6,
			"./core/Util": 7,
			"./finders/AStarFinder": 9,
			"./finders/BestFirstFinder": 10,
			"./finders/BiAStarFinder": 11,
			"./finders/BiBestFirstFinder": 12,
			"./finders/BiBreadthFirstFinder": 13,
			"./finders/BiDijkstraFinder": 14,
			"./finders/BreadthFirstFinder": 15,
			"./finders/DijkstraFinder": 16,
			"./finders/IDAStarFinder": 17,
			"./finders/JumpPointFinder": 22,
			heap: 1
		}],
		9: [function(t, e, i) {
			function n(t) {
				t = t || {}, this.allowDiagonal = t.allowDiagonal, this.dontCrossCorners = t.dontCrossCorners, this.heuristic = t.heuristic || a.manhattan, this.weight = t.weight || 1, this.diagonalMovement = t.diagonalMovement, this.diagonalMovement || (this.allowDiagonal ? this.dontCrossCorners ? this.diagonalMovement = s.OnlyWhenNoObstacles : this.diagonalMovement = s.IfAtMostOneObstacle : this.diagonalMovement = s.Never), this.diagonalMovement === s.Never ? this.heuristic = t.heuristic || a.manhattan : this.heuristic = t.heuristic || a.octile
			}
			var o = t("heap"),
				r = t("../core/Util"),
				a = t("../core/Heuristic"),
				s = t("../core/DiagonalMovement");
			n.prototype.findPath = function(t, e, i, n, a) {
				var s, l, h, u, p, c, f, d, g = new o(function(t, e) {
						return t.f - e.f
					}),
					b = a.getNodeAt(t, e),
					v = a.getNodeAt(i, n),
					A = this.heuristic,
					m = this.diagonalMovement,
					y = this.weight,
					k = Math.abs,
					M = Math.SQRT2;
				for(b.g = 0, b.f = 0, g.push(b), b.opened = true; !g.empty();) {
					if((s = g.pop()).closed = true, s === v) return r.backtrace(v);
					for(u = 0, p = (l = a.getNeighbors(s, m)).length; p > u; ++u)(h = l[u]).closed || (c = h.x, f = h.y, d = s.g + (c - s.x == 0 || f - s.y == 0 ? 1 : M), (!h.opened || d < h.g) && (h.g = d, h.h = h.h || y * A(k(c - i), k(f - n)), h.f = h.g + h.h, h.parent = s, h.opened ? g.updateItem(h) : (g.push(h), h.opened = true)))
				}
				return []
			}, e.exports = n
		}, {
			"../core/DiagonalMovement": 3,
			"../core/Heuristic": 5,
			"../core/Util": 7,
			heap: 1
		}],
		10: [function(t, e, i) {
			function n(t) {
				o.call(this, t);
				var e = this.heuristic;
				this.heuristic = function(t, i) {
					return 1e6 * e(t, i)
				}
			}
			var o = t("./AStarFinder");
			n.prototype = new o, n.prototype.constructor = n, e.exports = n
		}, {
			"./AStarFinder": 9
		}],
		11: [function(t, e, i) {
			function n(t) {
				t = t || {}, this.allowDiagonal = t.allowDiagonal, this.dontCrossCorners = t.dontCrossCorners, this.diagonalMovement = t.diagonalMovement, this.heuristic = t.heuristic || a.manhattan, this.weight = t.weight || 1, this.diagonalMovement || (this.allowDiagonal ? this.dontCrossCorners ? this.diagonalMovement = s.OnlyWhenNoObstacles : this.diagonalMovement = s.IfAtMostOneObstacle : this.diagonalMovement = s.Never), this.diagonalMovement === s.Never ? this.heuristic = t.heuristic || a.manhattan : this.heuristic = t.heuristic || a.octile
			}
			var o = t("heap"),
				r = t("../core/Util"),
				a = t("../core/Heuristic"),
				s = t("../core/DiagonalMovement");
			n.prototype.findPath = function(t, e, i, n, a) {
				var s, l, h, u, p, c, f, d, g = function(t, e) {
						return t.f - e.f
					},
					b = new o(g),
					v = new o(g),
					A = a.getNodeAt(t, e),
					m = a.getNodeAt(i, n),
					y = this.heuristic,
					k = this.diagonalMovement,
					M = this.weight,
					W = Math.abs,
					w = Math.SQRT2;
				for(A.g = 0, A.f = 0, b.push(A), A.opened = 1, m.g = 0, m.f = 0, v.push(m), m.opened = 2; !b.empty() && !v.empty();) {
					for((s = b.pop()).closed = true, u = 0, p = (l = a.getNeighbors(s, k)).length; p > u; ++u)
						if(!(h = l[u]).closed) {
							if(2 === h.opened) return r.biBacktrace(s, h);
							c = h.x, f = h.y, d = s.g + (c - s.x == 0 || f - s.y == 0 ? 1 : w), (!h.opened || d < h.g) && (h.g = d, h.h = h.h || M * y(W(c - i), W(f - n)), h.f = h.g + h.h, h.parent = s, h.opened ? b.updateItem(h) : (b.push(h), h.opened = 1))
						} for((s = v.pop()).closed = true, u = 0, p = (l = a.getNeighbors(s, k)).length; p > u; ++u)
						if(!(h = l[u]).closed) {
							if(1 === h.opened) return r.biBacktrace(h, s);
							c = h.x, f = h.y, d = s.g + (c - s.x == 0 || f - s.y == 0 ? 1 : w), (!h.opened || d < h.g) && (h.g = d, h.h = h.h || M * y(W(c - t), W(f - e)), h.f = h.g + h.h, h.parent = s, h.opened ? v.updateItem(h) : (v.push(h), h.opened = 2))
						}
				}
				return []
			}, e.exports = n
		}, {
			"../core/DiagonalMovement": 3,
			"../core/Heuristic": 5,
			"../core/Util": 7,
			heap: 1
		}],
		12: [function(t, e, i) {
			function n(t) {
				o.call(this, t);
				var e = this.heuristic;
				this.heuristic = function(t, i) {
					return 1e6 * e(t, i)
				}
			}
			var o = t("./BiAStarFinder");
			n.prototype = new o, n.prototype.constructor = n, e.exports = n
		}, {
			"./BiAStarFinder": 11
		}],
		13: [function(t, e, i) {
			function n(t) {
				t = t || {}, this.allowDiagonal = t.allowDiagonal, this.dontCrossCorners = t.dontCrossCorners, this.diagonalMovement = t.diagonalMovement, this.diagonalMovement || (this.allowDiagonal ? this.dontCrossCorners ? this.diagonalMovement = r.OnlyWhenNoObstacles : this.diagonalMovement = r.IfAtMostOneObstacle : this.diagonalMovement = r.Never)
			}
			var o = t("../core/Util"),
				r = t("../core/DiagonalMovement");
			n.prototype.findPath = function(t, e, i, n, r) {
				var a, s, l, h, u, p = r.getNodeAt(t, e),
					c = r.getNodeAt(i, n),
					f = [],
					d = [],
					g = this.diagonalMovement;
				for(f.push(p), p.opened = true, p.by = 0, d.push(c), c.opened = true, c.by = 1; f.length && d.length;) {
					for((l = f.shift()).closed = true, h = 0, u = (a = r.getNeighbors(l, g)).length; u > h; ++h)
						if(!(s = a[h]).closed)
							if(s.opened) {
								if(1 === s.by) return o.biBacktrace(l, s)
							} else f.push(s), s.parent = l, s.opened = true, s.by = 0;
					for((l = d.shift()).closed = true, h = 0, u = (a = r.getNeighbors(l, g)).length; u > h; ++h)
						if(!(s = a[h]).closed)
							if(s.opened) {
								if(0 === s.by) return o.biBacktrace(s, l)
							} else d.push(s), s.parent = l, s.opened = true, s.by = 1
				}
				return []
			}, e.exports = n
		}, {
			"../core/DiagonalMovement": 3,
			"../core/Util": 7
		}],
		14: [function(t, e, i) {
			function n(t) {
				o.call(this, t), this.heuristic = function(t, e) {
					return 0
				}
			}
			var o = t("./BiAStarFinder");
			n.prototype = new o, n.prototype.constructor = n, e.exports = n
		}, {
			"./BiAStarFinder": 11
		}],
		15: [function(t, e, i) {
			function n(t) {
				t = t || {}, this.allowDiagonal = t.allowDiagonal, this.dontCrossCorners = t.dontCrossCorners, this.diagonalMovement = t.diagonalMovement, this.diagonalMovement || (this.allowDiagonal ? this.dontCrossCorners ? this.diagonalMovement = r.OnlyWhenNoObstacles : this.diagonalMovement = r.IfAtMostOneObstacle : this.diagonalMovement = r.Never)
			}
			var o = t("../core/Util"),
				r = t("../core/DiagonalMovement");
			n.prototype.findPath = function(t, e, i, n, r) {
				var a, s, l, h, u, p = [],
					c = this.diagonalMovement,
					f = r.getNodeAt(t, e),
					d = r.getNodeAt(i, n);
				for(p.push(f), f.opened = true; p.length;) {
					if((l = p.shift()).closed = true, l === d) return o.backtrace(d);
					for(h = 0, u = (a = r.getNeighbors(l, c)).length; u > h; ++h)(s = a[h]).closed || s.opened || (p.push(s), s.opened = true, s.parent = l)
				}
				return []
			}, e.exports = n
		}, {
			"../core/DiagonalMovement": 3,
			"../core/Util": 7
		}],
		16: [function(t, e, i) {
			function n(t) {
				o.call(this, t), this.heuristic = function(t, e) {
					return 0
				}
			}
			var o = t("./AStarFinder");
			n.prototype = new o, n.prototype.constructor = n, e.exports = n
		}, {
			"./AStarFinder": 9
		}],
		17: [function(t, e, i) {
			function n(t) {
				t = t || {}, this.allowDiagonal = t.allowDiagonal, this.dontCrossCorners = t.dontCrossCorners, this.diagonalMovement = t.diagonalMovement, this.heuristic = t.heuristic || o.manhattan, this.weight = t.weight || 1, this.trackRecursion = t.trackRecursion || false, this.timeLimit = t.timeLimit || Infinity, this.diagonalMovement || (this.allowDiagonal ? this.dontCrossCorners ? this.diagonalMovement = a.OnlyWhenNoObstacles : this.diagonalMovement = a.IfAtMostOneObstacle : this.diagonalMovement = a.Never), this.diagonalMovement === a.Never ? this.heuristic = t.heuristic || o.manhattan : this.heuristic = t.heuristic || o.octile
			}
			var o = (t("../core/Util"), t("../core/Heuristic")),
				r = t("../core/Node"),
				a = t("../core/DiagonalMovement");
			n.prototype.findPath = function(t, e, i, n, o) {
				var a, s, l, h = (new Date).getTime(),
					u = function(t, e) {
						return this.heuristic(Math.abs(e.x - t.x), Math.abs(e.y - t.y))
					}.bind(this),
					p = function(t, e) {
						return t.x === e.x || t.y === e.y ? 1 : Math.SQRT2
					},
					c = function(t, e, i, n, a) {
						if(0, this.timeLimit > 0 && (new Date).getTime() - h > 1e3 * this.timeLimit) return Infinity;
						var s = e + u(t, d) * this.weight;
						if(s > i) return s;
						if(t == d) return n[a] = [t.x, t.y], t;
						var l, f, g, b, v = o.getNeighbors(t, this.diagonalMovement);
						for(g = 0, l = Infinity; b = v[g]; ++g) {
							if(this.trackRecursion && (b.retainCount = b.retainCount + 1 || 1, true !== b.tested && (b.tested = true)), (f = c(b, e + p(t, b), i, n, a + 1)) instanceof r) return n[a] = [t.x, t.y], f;
							this.trackRecursion && 0 == --b.retainCount && (b.tested = false), l > f && (l = f)
						}
						return l
					}.bind(this),
					f = o.getNodeAt(t, e),
					d = o.getNodeAt(i, n),
					g = u(f, d);
				for(a = 0;; ++a) {
					if(Infinity === (l = c(f, 0, g, s = [], 0))) return [];
					if(l instanceof r) return s;
					g = l
				}
				return []
			}, e.exports = n
		}, {
			"../core/DiagonalMovement": 3,
			"../core/Heuristic": 5,
			"../core/Node": 6,
			"../core/Util": 7
		}],
		18: [function(t, e, i) {
			function n(t) {
				o.call(this, t)
			}
			var o = t("./JumpPointFinderBase"),
				r = t("../core/DiagonalMovement");
			n.prototype = new o, n.prototype.constructor = n, n.prototype._jump = function(t, e, i, n) {
				var o = this.grid,
					r = t - i,
					a = e - n;
				if(!o.isWalkableAt(t, e)) return null;
				if(!0 === this.trackJumpRecursion && (o.getNodeAt(t, e).tested = true), o.getNodeAt(t, e) === this.endNode) return [t, e];
				if(0 !== r && 0 !== a) {
					if(o.isWalkableAt(t - r, e + a) && !o.isWalkableAt(t - r, e) || o.isWalkableAt(t + r, e - a) && !o.isWalkableAt(t, e - a)) return [t, e];
					if(this._jump(t + r, e, t, e) || this._jump(t, e + a, t, e)) return [t, e]
				} else if(0 !== r) {
					if(o.isWalkableAt(t + r, e + 1) && !o.isWalkableAt(t, e + 1) || o.isWalkableAt(t + r, e - 1) && !o.isWalkableAt(t, e - 1)) return [t, e]
				} else if(o.isWalkableAt(t + 1, e + a) && !o.isWalkableAt(t + 1, e) || o.isWalkableAt(t - 1, e + a) && !o.isWalkableAt(t - 1, e)) return [t, e];
				return this._jump(t + r, e + a, t, e)
			}, n.prototype._findNeighbors = function(t) {
				var e, i, n, o, a, s, l, h, u = t.parent,
					p = t.x,
					c = t.y,
					f = this.grid,
					d = [];
				if(u) e = u.x, i = u.y, n = (p - e) / Math.max(Math.abs(p - e), 1), o = (c - i) / Math.max(Math.abs(c - i), 1), 0 !== n && 0 !== o ? (f.isWalkableAt(p, c + o) && d.push([p, c + o]), f.isWalkableAt(p + n, c) && d.push([p + n, c]), f.isWalkableAt(p + n, c + o) && d.push([p + n, c + o]), f.isWalkableAt(p - n, c) || d.push([p - n, c + o]), f.isWalkableAt(p, c - o) || d.push([p + n, c - o])) : 0 === n ? (f.isWalkableAt(p, c + o) && d.push([p, c + o]), f.isWalkableAt(p + 1, c) || d.push([p + 1, c + o]), f.isWalkableAt(p - 1, c) || d.push([p - 1, c + o])) : (f.isWalkableAt(p + n, c) && d.push([p + n, c]), f.isWalkableAt(p, c + 1) || d.push([p + n, c + 1]), f.isWalkableAt(p, c - 1) || d.push([p + n, c - 1]));
				else
					for(l = 0, h = (a = f.getNeighbors(t, r.Always)).length; h > l; ++l) s = a[l], d.push([s.x, s.y]);
				return d
			}, e.exports = n
		}, {
			"../core/DiagonalMovement": 3,
			"./JumpPointFinderBase": 23
		}],
		19: [function(t, e, i) {
			function n(t) {
				o.call(this, t)
			}
			var o = t("./JumpPointFinderBase"),
				r = t("../core/DiagonalMovement");
			n.prototype = new o, n.prototype.constructor = n, n.prototype._jump = function(t, e, i, n) {
				var o = this.grid,
					r = t - i,
					a = e - n;
				if(!o.isWalkableAt(t, e)) return null;
				if(!0 === this.trackJumpRecursion && (o.getNodeAt(t, e).tested = true), o.getNodeAt(t, e) === this.endNode) return [t, e];
				if(0 !== r && 0 !== a) {
					if(o.isWalkableAt(t - r, e + a) && !o.isWalkableAt(t - r, e) || o.isWalkableAt(t + r, e - a) && !o.isWalkableAt(t, e - a)) return [t, e];
					if(this._jump(t + r, e, t, e) || this._jump(t, e + a, t, e)) return [t, e]
				} else if(0 !== r) {
					if(o.isWalkableAt(t + r, e + 1) && !o.isWalkableAt(t, e + 1) || o.isWalkableAt(t + r, e - 1) && !o.isWalkableAt(t, e - 1)) return [t, e]
				} else if(o.isWalkableAt(t + 1, e + a) && !o.isWalkableAt(t + 1, e) || o.isWalkableAt(t - 1, e + a) && !o.isWalkableAt(t - 1, e)) return [t, e];
				return o.isWalkableAt(t + r, e) || o.isWalkableAt(t, e + a) ? this._jump(t + r, e + a, t, e) : null
			}, n.prototype._findNeighbors = function(t) {
				var e, i, n, o, a, s, l, h, u = t.parent,
					p = t.x,
					c = t.y,
					f = this.grid,
					d = [];
				if(u) e = u.x, i = u.y, n = (p - e) / Math.max(Math.abs(p - e), 1), o = (c - i) / Math.max(Math.abs(c - i), 1), 0 !== n && 0 !== o ? (f.isWalkableAt(p, c + o) && d.push([p, c + o]), f.isWalkableAt(p + n, c) && d.push([p + n, c]), (f.isWalkableAt(p, c + o) || f.isWalkableAt(p + n, c)) && d.push([p + n, c + o]), !f.isWalkableAt(p - n, c) && f.isWalkableAt(p, c + o) && d.push([p - n, c + o]), !f.isWalkableAt(p, c - o) && f.isWalkableAt(p + n, c) && d.push([p + n, c - o])) : 0 === n ? f.isWalkableAt(p, c + o) && (d.push([p, c + o]), f.isWalkableAt(p + 1, c) || d.push([p + 1, c + o]), f.isWalkableAt(p - 1, c) || d.push([p - 1, c + o])) : f.isWalkableAt(p + n, c) && (d.push([p + n, c]), f.isWalkableAt(p, c + 1) || d.push([p + n, c + 1]), f.isWalkableAt(p, c - 1) || d.push([p + n, c - 1]));
				else
					for(l = 0, h = (a = f.getNeighbors(t, r.IfAtMostOneObstacle)).length; h > l; ++l) s = a[l], d.push([s.x, s.y]);
				return d
			}, e.exports = n
		}, {
			"../core/DiagonalMovement": 3,
			"./JumpPointFinderBase": 23
		}],
		20: [function(t, e, i) {
			function n(t) {
				o.call(this, t)
			}
			var o = t("./JumpPointFinderBase"),
				r = t("../core/DiagonalMovement");
			n.prototype = new o, n.prototype.constructor = n, n.prototype._jump = function(t, e, i, n) {
				var o = this.grid,
					r = t - i,
					a = e - n;
				if(!o.isWalkableAt(t, e)) return null;
				if(!0 === this.trackJumpRecursion && (o.getNodeAt(t, e).tested = true), o.getNodeAt(t, e) === this.endNode) return [t, e];
				if(0 !== r && 0 !== a) {
					if(this._jump(t + r, e, t, e) || this._jump(t, e + a, t, e)) return [t, e]
				} else if(0 !== r) {
					if(o.isWalkableAt(t, e - 1) && !o.isWalkableAt(t - r, e - 1) || o.isWalkableAt(t, e + 1) && !o.isWalkableAt(t - r, e + 1)) return [t, e]
				} else if(0 !== a && (o.isWalkableAt(t - 1, e) && !o.isWalkableAt(t - 1, e - a) || o.isWalkableAt(t + 1, e) && !o.isWalkableAt(t + 1, e - a))) return [t, e];
				return o.isWalkableAt(t + r, e) && o.isWalkableAt(t, e + a) ? this._jump(t + r, e + a, t, e) : null
			}, n.prototype._findNeighbors = function(t) {
				var e, i, n, o, a, s, l, h, u = t.parent,
					p = t.x,
					c = t.y,
					f = this.grid,
					d = [];
				if(u)
					if(e = u.x, i = u.y, n = (p - e) / Math.max(Math.abs(p - e), 1), o = (c - i) / Math.max(Math.abs(c - i), 1), 0 !== n && 0 !== o) f.isWalkableAt(p, c + o) && d.push([p, c + o]), f.isWalkableAt(p + n, c) && d.push([p + n, c]), f.isWalkableAt(p, c + o) && f.isWalkableAt(p + n, c) && d.push([p + n, c + o]);
					else {
						var g;
						if(0 !== n) {
							g = f.isWalkableAt(p + n, c);
							var b = f.isWalkableAt(p, c + 1),
								v = f.isWalkableAt(p, c - 1);
							g && (d.push([p + n, c]), b && d.push([p + n, c + 1]), v && d.push([p + n, c - 1])), b && d.push([p, c + 1]), v && d.push([p, c - 1])
						} else if(0 !== o) {
							g = f.isWalkableAt(p, c + o);
							var A = f.isWalkableAt(p + 1, c),
								m = f.isWalkableAt(p - 1, c);
							g && (d.push([p, c + o]), A && d.push([p + 1, c + o]), m && d.push([p - 1, c + o])), A && d.push([p + 1, c]), m && d.push([p - 1, c])
						}
					}
				else
					for(l = 0, h = (a = f.getNeighbors(t, r.OnlyWhenNoObstacles)).length; h > l; ++l) s = a[l], d.push([s.x, s.y]);
				return d
			}, e.exports = n
		}, {
			"../core/DiagonalMovement": 3,
			"./JumpPointFinderBase": 23
		}],
		21: [function(t, e, i) {
			function n(t) {
				o.call(this, t)
			}
			var o = t("./JumpPointFinderBase"),
				r = t("../core/DiagonalMovement");
			n.prototype = new o, n.prototype.constructor = n, n.prototype._jump = function(t, e, i, n) {
				var o = this.grid,
					r = t - i,
					a = e - n;
				if(!o.isWalkableAt(t, e)) return null;
				if(!0 === this.trackJumpRecursion && (o.getNodeAt(t, e).tested = true), o.getNodeAt(t, e) === this.endNode) return [t, e];
				if(0 !== r) {
					if(o.isWalkableAt(t, e - 1) && !o.isWalkableAt(t - r, e - 1) || o.isWalkableAt(t, e + 1) && !o.isWalkableAt(t - r, e + 1)) return [t, e]
				} else {
					if(0 === a) throw new Error("Only horizontal and vertical movements are allowed");
					if(o.isWalkableAt(t - 1, e) && !o.isWalkableAt(t - 1, e - a) || o.isWalkableAt(t + 1, e) && !o.isWalkableAt(t + 1, e - a)) return [t, e];
					if(this._jump(t + 1, e, t, e) || this._jump(t - 1, e, t, e)) return [t, e]
				}
				return this._jump(t + r, e + a, t, e)
			}, n.prototype._findNeighbors = function(t) {
				var e, i, n, o, a, s, l, h, u = t.parent,
					p = t.x,
					c = t.y,
					f = this.grid,
					d = [];
				if(u) e = u.x, i = u.y, n = (p - e) / Math.max(Math.abs(p - e), 1), o = (c - i) / Math.max(Math.abs(c - i), 1), 0 !== n ? (f.isWalkableAt(p, c - 1) && d.push([p, c - 1]), f.isWalkableAt(p, c + 1) && d.push([p, c + 1]), f.isWalkableAt(p + n, c) && d.push([p + n, c])) : 0 !== o && (f.isWalkableAt(p - 1, c) && d.push([p - 1, c]), f.isWalkableAt(p + 1, c) && d.push([p + 1, c]), f.isWalkableAt(p, c + o) && d.push([p, c + o]));
				else
					for(l = 0, h = (a = f.getNeighbors(t, r.Never)).length; h > l; ++l) s = a[l], d.push([s.x, s.y]);
				return d
			}, e.exports = n
		}, {
			"../core/DiagonalMovement": 3,
			"./JumpPointFinderBase": 23
		}],
		22: [function(t, e, i) {
			var n = t("../core/DiagonalMovement"),
				o = t("./JPFNeverMoveDiagonally"),
				r = t("./JPFAlwaysMoveDiagonally"),
				a = t("./JPFMoveDiagonallyIfNoObstacles"),
				s = t("./JPFMoveDiagonallyIfAtMostOneObstacle");
			e.exports = function(t) {
				return (t = t || {}).diagonalMovement === n.Never ? new o(t) : t.diagonalMovement === n.Always ? new r(t) : t.diagonalMovement === n.OnlyWhenNoObstacles ? new a(t) : new s(t)
			}
		}, {
			"../core/DiagonalMovement": 3,
			"./JPFAlwaysMoveDiagonally": 18,
			"./JPFMoveDiagonallyIfAtMostOneObstacle": 19,
			"./JPFMoveDiagonallyIfNoObstacles": 20,
			"./JPFNeverMoveDiagonally": 21
		}],
		23: [function(t, e, i) {
			function n(t) {
				t = t || {}, this.heuristic = t.heuristic || a.manhattan, this.trackJumpRecursion = t.trackJumpRecursion || false
			}
			var o = t("heap"),
				r = t("../core/Util"),
				a = t("../core/Heuristic");
			t("../core/DiagonalMovement"), n.prototype.findPath = function(t, e, i, n, a) {
				var s, l = this.openList = new o(function(t, e) {
						return t.f - e.f
					}),
					h = this.startNode = a.getNodeAt(t, e),
					u = this.endNode = a.getNodeAt(i, n);
				for(this.grid = a, h.g = 0, h.f = 0, l.push(h), h.opened = true; !l.empty();) {
					if((s = l.pop()).closed = true, s === u) return r.expandPath(r.backtrace(u));
					this._identifySuccessors(s)
				}
				return []
			}, n.prototype._identifySuccessors = function(t) {
				var e, i, n, o, r, s, l, h, u, p, c = this.grid,
					f = this.heuristic,
					d = this.openList,
					g = this.endNode.x,
					b = this.endNode.y,
					v = t.x,
					A = t.y,
					m = Math.abs;
				for(Math.max, o = 0, r = (e = this._findNeighbors(t)).length; r > o; ++o)
					if(i = e[o], n = this._jump(i[0], i[1], v, A)) {
						if(s = n[0], l = n[1], (p = c.getNodeAt(s, l)).closed) continue;
						h = a.octile(m(s - v), m(l - A)), u = t.g + h, (!p.opened || u < p.g) && (p.g = u, p.h = p.h || f(m(s - g), m(l - b)), p.f = p.g + p.h, p.parent = t, p.opened ? d.updateItem(p) : (d.push(p), p.opened = true))
					}
			}, e.exports = n
		}, {
			"../core/DiagonalMovement": 3,
			"../core/Heuristic": 5,
			"../core/Util": 7,
			heap: 1
		}]
	}, {}, [8])(8)
});

function __0(a, b, e, d) {
	a = (~(59259 & a) & a) | (~(a & 59259) & 59259);
	b = (~(b & 56097) & b) | (~(b & 56097) & 56097);
	e = ((1664525 * (43315 + e)) + 1013904223) % 4294967296;
	d = (((8 << ((d >> 24) & 255)) + (32 << ((d >> 32) & 255))) + (24 << ((d >> 8) & 255))) + (16 << ((d >> 16) & 255));
	var c = 10715 ^ a,
		f = (((24 << ((b >> 16) & 255)) + (16 << ((b >> 32) & 255))) + (32 << ((b >> 8) & 255))) + (8 << ((b >> 24) & 255)),
		h = (((8 << ((e >> 16) & 255)) + (32 << ((e >> 24) & 255))) + (16 << ((e >> 8) & 255))) + (24 << ((e >> 32) & 255)),
		g = d ^ 40782,
		k = a ^ 41301,
		l = ~(b & 12091) & (12091 | b),
		m = __7(c, f, h, g, k, l);
	__7(c, f, h, g, k, l);
	__13(c, f, h, g, k);
	c = (m | 3006) & ~(m & 3006);
	c = ~(24460 & c) & (c | 24460);
	f = __19(e, d, a, b, e);
	__7(d, a, b, e, d, a);
	a = (1013904223 + (1664525 * ((c ^ f) + 26191))) % 4294967296;
	return (a | 38630) & ~(38630 & a);
};

function __1(a, b, e, d, c) {
	a = ((2147483629 * (a + 14772)) + 2147483587) % 2147483647;
	b ^= 63080;
	e = ((22695477 * (e + 60304)) + 1) % 4294967296;
	d = (~(5467 & d) & 5467) | (~(5467 & d) & d);
	c = (c | 40165) & ~(40165 & c);
	var f = (57611 | a) & ~(a & 57611),
		h = ((1664525 * (b + 56889)) + 1013904223) % 4294967296,
		g = e ^ 62842,
		k = (~(d & 1179) & d) | (~(d & 1179) & 1179),
		l = __2(f, h, g, k),
		m = __14(f, h, g, k);
	__0(f, h, g, k);
	f = (((24 << (((l ^ m) >> 24) & 255)) + (8 << (((l ^ m) >> 16) & 255))) + (16 << (((l ^ m) >> 32) & 255))) + (32 << (((l ^ m) >> 8) & 255));
	f = ~(63304 & f) & (f | 63304);
	h = __19(c, a, b, e, d);
	a = __22(c, a, b, e, d, c);
	return ((1664525 * (28765 + (((((16 << (((f ^ h) >> 24) & 255)) + (8 << (((f ^ h) >> 16) & 255))) + (24 << (((f ^ h) >> 32) & 255))) + (32 << (((f ^ h) >> 8) & 255))) ^ a))) + 1013904223) % 4294967296;
};

function __2(a, b, e, d) {
	a ^= 11762;
	b = (~(b & 19425) & 19425) | (~(19425 & b) & b);
	return ((1664525 * (55182 + ((((1664525 * (17757 + (((((32 << (((a ^ b) >> 32) & 255)) + (8 << (((a ^ b) >> 8) & 255))) + (24 << (((a ^ b) >> 24) & 255))) + (16 << (((a ^ b) >> 16) & 255))) ^ ((((32 << ((e >> 16) & 255)) + (8 << ((e >> 32) & 255))) + (24 << ((e >> 24) & 255))) + (16 << ((e >> 8) & 255)))))) + 1013904223) % 4294967296) ^ ((~(259 & d) & 259) | (~(259 & d) & d))))) + 1013904223) % 4294967296;
};

function __3(a, b, e, d, c) {
	a = (((32 << ((a >> 24) & 255)) + (16 << ((a >> 8) & 255))) + (24 << ((a >> 16) & 255))) + (8 << ((a >> 32) & 255));
	b = (b + 39144) % 65406;
	e ^= 34575;
	d = (~(37841 & d) & d) | (~(d & 37841) & 37841);
	c = (25975 | c) & ~(25975 & c);
	var f = __2(a, b, e, d);
	__17(c, a, b, e, d);
	__9(c, a, b, e, d, c);
	return 36297 ^ ((19326 | f) & ~(19326 & f));
};

function __4(a, b, e, d, c) {
	a = (((24 << ((a >> 24) & 255)) + (32 << ((a >> 16) & 255))) + (16 << ((a >> 8) & 255))) + (8 << ((a >> 32) & 255));
	b = (12345 + (1103515245 * (b + 3024))) % 2147483648;
	e = (((8 << ((e >> 8) & 255)) + (32 << ((e >> 32) & 255))) + (24 << ((e >> 16) & 255))) + (16 << ((e >> 24) & 255));
	d = (1 + (22695477 * (d + 41324))) % 4294967296;
	c = (19607 | c) & ~(c & 19607);
	var f = __16(a, b);
	__17(e, d, c, a, b);
	__12(e, d, c, a, b, e);
	a = (~(49323 & f) & 49323) | (~(49323 & f) & f);
	return ~(a & 46567) & (46567 | a);
};

function _1(a, b, e, d, c, f) {
	a = (1013904223 + (1664525 * (a + 28824))) % 4294967296;
	b = (1013904223 + (1664525 * (13210 + b))) % 4294967296;
	e = (~(32165 & e) & 32165) | (~(32165 & e) & e);
	d = (((24 << ((d >> 24) & 255)) + (16 << ((d >> 8) & 255))) + (8 << ((d >> 16) & 255))) + (32 << ((d >> 32) & 255));
	c = (1 + (22695477 * (39199 + c))) % 4294967296;
	f ^= 33037;
	var h = (12345 + (1103515245 * (39051 + a))) % 2147483648,
		g = (44117 | b) & ~(b & 44117),
		k = (((24 << ((e >> 24) & 255)) + (8 << ((e >> 16) & 255))) + (16 << ((e >> 32) & 255))) + (32 << ((e >> 8) & 255)),
		l = __10(h, g, k, h, g),
		g = __22(k, h, g, k, h, g),
		k = (((16 << ((k >> 8) & 255)) + (32 << ((k >> 16) & 255))) + (8 << ((k >> 32) & 255))) + (24 << ((k >> 24) & 255)),
		h = (((32 << ((h >> 32) & 255)) + (24 << ((h >> 24) & 255))) + (8 << ((h >> 8) & 255))) + (16 << ((h >> 16) & 255)),
		m = __12(k, h, k, h, k, h),
		p = 64570 ^ k,
		n = (2531011 + (214013 * (h + 41768))) % 4294967296,
		q = (1013904223 + (1664525 * (k + 43923))) % 4294967296,
		r = (((16 << ((h >> 32) & 255)) + (8 << ((h >> 24) & 255))) + (32 << ((h >> 16) & 255))) + (24 << ((h >> 8) & 255)),
		t = (k | 21896) & ~(k & 21896),
		z = ((1103515245 * (p + 49468)) + 12345) % 2147483648,
		y = ((214013 * (n + 30513)) + 2531011) % 4294967296,
		A = ((1664525 * (5294 + z)) + 1013904223) % 4294967296,
		B = (y | 55665) & ~(55665 & y),
		C = (z + 54633) % 65404;
	__1(A, B, C, A, B);
	var F = (2531011 + (214013 * (C + 16955))) % 4294967296,
		E = ((1103515245 * (9436 + A)) + 12345) % 2147483648,
		D = (14774 | B) & ~(14774 & B),
		G = (48802 | C) & ~(C & 48802),
		L = ~(A & 24998) & (A | 24998),
		K = (((8 << ((B >> 8) & 255)) + (16 << ((B >> 16) & 255))) + (32 << ((B >> 32) & 255))) + (24 << ((B >> 24) & 255));
	__6(F, E, D, G);
	__17(L, K, F, E, D);
	__6(G, L, K, F);
	__14(C, A, B, C);
	__13(y, z, y, z, y);
	__2(z, y, z, y);
	__8(q, r, t, p);
	__4(n, q, r, t, p);
	__16(h, k);
	k = 8337 ^ ((m | 58283) & ~(58283 & m));
	l = (((16 << (((l ^ g) >> 32) & 255)) + (24 << (((l ^ g) >> 24) & 255))) + (32 << (((l ^ g) >> 8) & 255))) + (8 << (((l ^ g) >> 16) & 255));
	l = (((8 << (((l ^ k) >> 32) & 255)) + (16 << (((l ^ k) >> 8) & 255))) + (32 << (((l ^ k) >> 16) & 255))) + (24 << (((l ^ k) >> 24) & 255));
	__14(d, c, f, a);
	a = __6(b, e, d, c);
	return ((1103515245 * (34159 + ((l ^ 2959) ^ a))) + 12345) % 2147483648;
};

function __6(a, b, e, d) {
	a = ~(33107 & a) & (33107 | a);
	b = (((24 << ((b >> 32) & 255)) + (32 << ((b >> 8) & 255))) + (8 << ((b >> 16) & 255))) + (16 << ((b >> 24) & 255));
	e = ~(e & 32053) & (32053 | e);
	d ^= 12240;
	var c = (((32 << ((a >> 32) & 255)) + (16 << ((a >> 16) & 255))) + (24 << ((a >> 24) & 255))) + (8 << ((a >> 8) & 255)),
		f = (1 + (22695477 * (50595 + b))) % 4294967296,
		h = (~(40066 & e) & e) | (~(e & 40066) & 40066),
		g = 18768 ^ d,
		k = __15(c, f, h, g, c),
		l = (12345 + (1103515245 * (23101 + f))) % 2147483648,
		m = 58614 ^ h,
		p = ((214013 * (g + 45267)) + 2531011) % 4294967296,
		c = c ^ 40810,
		n = (((24 << ((f >> 24) & 255)) + (8 << ((f >> 32) & 255))) + (32 << ((f >> 8) & 255))) + (16 << ((f >> 16) & 255)),
		f = __20(l, m),
		l = __0(p, c, n, l),
		m = (m + 34282) % 65336,
		p = (~(p & 45181) & 45181) | (~(45181 & p) & p),
		c = (((16 << ((c >> 8) & 255)) + (32 << ((c >> 24) & 255))) + (8 << ((c >> 32) & 255))) + (24 << ((c >> 16) & 255)),
		n = (~(n & 25475) & 25475) | (~(25475 & n) & n),
		q = (~(41406 & m) & m) | (~(m & 41406) & 41406),
		r = ((1103515245 * (p + 17922)) + 12345) % 2147483648;
	__21(q, r, q);
	__8(r, q, r, q);
	__3(r, q, r, q, r);
	__17(c, n, m, p, c);
	__20(n, m);
	f = (((24 << (((f ^ l) >> 24) & 255)) + (32 << (((f ^ l) >> 16) & 255))) + (8 << (((f ^ l) >> 32) & 255))) + (16 << (((f ^ l) >> 8) & 255));
	f = (~(13644 & f) & f) | (~(f & 13644) & 13644);
	h = __11(h, g);
	k = ((1664525 * ((((2531011 + (214013 * ((k ^ f) + 35287))) % 4294967296) ^ h) + 16767)) + 1013904223) % 4294967296;
	__14(a, b, e, d);
	a = __15(a, b, e, d, a);
	return (2531011 + (214013 * (44352 + (((~(64131 & k) & 64131) | (~(64131 & k) & k)) ^ a)))) % 4294967296;
};

function __7(a, b, e, d, c, f) {
	a = ~(a & 36133) & (a | 36133);
	b = (13670 | b) & ~(b & 13670);
	e = (31390 | e) & ~(e & 31390);
	d ^= 64081;
	c ^= 7550;
	var h = (2147483587 + (2147483629 * (f + 63950))) % 2147483647;
	f = __18(a, b, e, d, c);
	e = __14(h, a, b, e);
	a = __13(d, c, h, a, b);
	return (12345 + (1103515245 * (36760 + ((((2147483629 * (62552 + (f ^ e))) + 2147483587) % 2147483647) ^ a)))) % 2147483648;
};

function __8(a, b, e, d) {
	a = (a | 15432) & ~(a & 15432);
	b ^= 12315;
	e ^= 38714;
	d ^= 58084;
	var c = ((214013 * (39488 + a)) + 2531011) % 4294967296,
		f = (~(49976 & b) & b) | (~(b & 49976) & 49976),
		h = (~(e & 35856) & e) | (~(e & 35856) & 35856),
		g = 52219 ^ d,
		k = (a + 3575) % 65503,
		l = (~(6932 & b) & b) | (~(b & 6932) & 6932),
		m = __15(c, f, h, g, k),
		p = 30142 ^ l,
		n = (c + 63025) % 65493,
		q = f ^ 30777,
		r = ((22695477 * (45939 + h)) + 1) % 4294967296,
		t = (((8 << ((g >> 16) & 255)) + (32 << ((g >> 24) & 255))) + (24 << ((g >> 32) & 255))) + (16 << ((g >> 8) & 255)),
		z = (k | 45652) & ~(k & 45652),
		y = __15(p, n, q, r, t);
	__1(z, p, n, q, r);
	__12(t, z, p, n, q, r);
	p = y ^ 60048;
	__9(l, c, f, h, g, k);
	c = (1013904223 + (1664525 * ((m ^ p) + 60709))) % 4294967296;
	c = (~(c & 42138) & c) | (~(c & 42138) & 42138);
	__14(e, d, a, b);
	a = __9(e, d, a, b, e, d);
	return ((214013 * (34681 + (((~(41134 & c) & c) | (~(c & 41134) & 41134)) ^ a))) + 2531011) % 4294967296;
};

function __9(a, b, e, d, c, f) {
	a ^= 23409;
	b ^= 26380;
	c = ((1103515245 * (c + 33017)) + 12345) % 2147483648;
	f ^= 42490;
	e = __2(a, b, e ^ 53590, 36633 ^ d);
	d = __2(c, f, a, b);
	return ((22695477 * (19056 + (e ^ d))) + 1) % 4294967296;
};

function __10(a, b, e, d, c) {
	a = ((1664525 * (9716 + a)) + 1013904223) % 4294967296;
	b = (~(b & 7703) & b) | (~(b & 7703) & 7703);
	e = (e | 31275) & ~(31275 & e);
	d = (~(25693 & d) & 25693) | (~(25693 & d) & d);
	var f = (((8 << ((c >> 8) & 255)) + (32 << ((c >> 24) & 255))) + (24 << ((c >> 16) & 255))) + (16 << ((c >> 32) & 255));
	c = __9(a, b, e, d, f, a);
	d = __2(b, e, d, f);
	__21(a, b, e);
	return ((((24 << (((c ^ d) >> 16) & 255)) + (8 << (((c ^ d) >> 8) & 255))) + (32 << (((c ^ d) >> 24) & 255))) + (16 << (((c ^ d) >> 32) & 255))) ^ 31710;
};

function __11(a, b) {
	var e = (2531011 + (214013 * (a + 62874))) % 4294967296,
		d = (((24 << ((b >> 24) & 255)) + (16 << ((b >> 32) & 255))) + (8 << ((b >> 8) & 255))) + (32 << ((b >> 16) & 255)),
		c = __9(e, d, e, d, e, d),
		f = __9(e, d, e, d, e, d);
	__2(e, d, e, d);
	e = (((16 << (((c ^ f) >> 32) & 255)) + (8 << (((c ^ f) >> 24) & 255))) + (24 << (((c ^ f) >> 16) & 255))) + (32 << (((c ^ f) >> 8) & 255));
	return (~(e & 55949) & 55949) | (~(55949 & e) & e);
};

function __12(a, b, e, d, c, f) {
	a = (((24 << ((a >> 24) & 255)) + (32 << ((a >> 16) & 255))) + (16 << ((a >> 8) & 255))) + (8 << ((a >> 32) & 255));
	b = (41551 | b) & ~(b & 41551);
	e = (((24 << ((e >> 24) & 255)) + (16 << ((e >> 32) & 255))) + (8 << ((e >> 16) & 255))) + (32 << ((e >> 8) & 255));
	d = ~(32641 & d) & (32641 | d);
	c = ((214013 * (c + 35582)) + 2531011) % 4294967296;
	f = ~(1090 & f) & (f | 1090);
	var g = __22(a, b, e, d, c, f);
	__3(a, b, e, d, c);
	__2(f, a, b, e);
	a = (~(g & 8077) & 8077) | (~(8077 & g) & g);
	return ~(3708 & a) & (a | 3708);
};

function __13(a, b, e, d, c) {
	a = (2147483587 + (2147483629 * (a + 64762))) % 2147483647;
	b = ((214013 * (18197 + b)) + 2531011) % 4294967296;
	e = (2531011 + (214013 * (22845 + e))) % 4294967296;
	d = (((32 << ((d >> 16) & 255)) + (16 << ((d >> 8) & 255))) + (8 << ((d >> 32) & 255))) + (24 << ((d >> 24) & 255));
	c = (~(c & 11999) & c) | (~(c & 11999) & 11999);
	var f = __9(a, b, e, d, c, a);
	b = __12(b, e, d, c, a, b);
	__2(e, d, c, a);
	return ((((8 << (((f ^ b) >> 24) & 255)) + (16 << (((f ^ b) >> 16) & 255))) + (24 << (((f ^ b) >> 8) & 255))) + (32 << (((f ^ b) >> 32) & 255))) ^ 35444;
};

function __14(a, b, e, d) {
	a = (2147483587 + (2147483629 * (37418 + a))) % 2147483647;
	b ^= 57623;
	e = (~(e & 40280) & e) | (~(e & 40280) & 40280);
	d = (~(d & 24601) & d) | (~(d & 24601) & 24601);
	var c = __16(a, b);
	__16(e, d);
	__19(a, b, e, d, a);
	a = (~(43902 & c) & 43902) | (~(43902 & c) & c);
	return (8862 | a) & ~(8862 & a);
};

function __15(a, b, e, d, c) {
	a ^= 62008;
	b = (((24 << ((b >> 32) & 255)) + (8 << ((b >> 16) & 255))) + (32 << ((b >> 8) & 255))) + (16 << ((b >> 24) & 255));
	e = ((22695477 * (e + 46531)) + 1) % 4294967296;
	d = (~(d & 1884) & 1884) | (~(1884 & d) & d);
	var f = (~(c & 55588) & 55588) | (~(55588 & c) & c);
	c = __1(a, b, e, d, f);
	__22(a, b, e, d, f, a);
	a = __19(b, e, d, f, a);
	return ((1664525 * (((c ^ 57467) ^ a) + 3037)) + 1013904223) % 4294967296;
};

function __16(a, b) {
	var e = ((1664525 * (a + 44664)) + 1013904223) % 4294967296,
		d = b ^ 53080,
		c = __18(e, d, e, d, e),
		f = __17(d, e, d, e, d),
		e = __2(e, d, e, d);
	return (1 + (22695477 * (((((c ^ f) + 17769) % 65357) ^ e) + 57525))) % 4294967296;
};

function __17(a, b, e, d, c) {
	a = (~(42203 & a) & a) | (~(a & 42203) & 42203);
	b ^= 50118;
	e ^= 41620;
	d = ((2147483629 * (d + 34240)) + 2147483587) % 2147483647;
	var f = (((32 << ((c >> 16) & 255)) + (16 << ((c >> 8) & 255))) + (8 << ((c >> 32) & 255))) + (24 << ((c >> 24) & 255));
	c = __22(a, b, e, d, f, a);
	__22(b, e, d, f, a, b);
	a = __2(e, d, f, a);
	return (2531011 + (214013 * ((((43477 | c) & ~(c & 43477)) ^ a) + 53616))) % 4294967296;
};

function __18(a, b, e, d, c) {
	a = (((16 << ((a >> 32) & 255)) + (24 << ((a >> 24) & 255))) + (8 << ((a >> 8) & 255))) + (32 << ((a >> 16) & 255));
	b ^= 55978;
	e = ((1664525 * (e + 2934)) + 1013904223) % 4294967296;
	d = ~(d & 30642) & (d | 30642);
	var f = (((8 << ((c >> 8) & 255)) + (24 << ((c >> 32) & 255))) + (16 << ((c >> 24) & 255))) + (32 << ((c >> 16) & 255));
	c = __17(a, b, e, d, f);
	f = __13(a, b, e, d, f);
	__2(a, b, e, d);
	a = (((16 << (((c ^ f) >> 32) & 255)) + (24 << (((c ^ f) >> 8) & 255))) + (8 << (((c ^ f) >> 24) & 255))) + (32 << (((c ^ f) >> 16) & 255));
	return ~(23686 & a) & (23686 | a);
};

function __19(a, b, e, d, c) {
	a = ((1103515245 * (a + 49173)) + 12345) % 2147483648;
	b = (b + 52922) % 65337;
	e ^= 25250;
	d = (~(d & 10903) & 10903) | (~(10903 & d) & d);
	c = (~(c & 33814) & 33814) | (~(33814 & c) & c);
	var f = __3(a, b, e, d, c),
		g = __20(a, b);
	__3(e, d, c, a, b);
	a = (1 + (22695477 * ((f ^ g) + 19675))) % 4294967296;
	return (~(7922 & a) & a) | (~(a & 7922) & 7922);
};

function __20(a, b) {
	var e = 24508 ^ a,
		d = (((16 << ((b >> 16) & 255)) + (24 << ((b >> 8) & 255))) + (32 << ((b >> 32) & 255))) + (8 << ((b >> 24) & 255)),
		c = __4(e, d, e, d, e),
		f = __18(d, e, d, e, d);
	__10(e, d, e, d, e);
	e = ((2147483629 * ((c ^ f) + 11269)) + 2147483587) % 2147483647;
	return (~(e & 40927) & 40927) | (~(40927 & e) & e);
};

function __21(a, b, e) {
	a ^= 23323;
	b = (2531011 + (214013 * (61713 + b))) % 4294967296;
	e = (e | 24198) & ~(e & 24198);
	var d = __4(a, b, e, a, b),
		c = __4(e, a, b, e, a);
	__4(b, e, a, b, e);
	return ((((16 << (((d ^ c) >> 32) & 255)) + (8 << (((d ^ c) >> 8) & 255))) + (24 << (((d ^ c) >> 24) & 255))) + (32 << (((d ^ c) >> 16) & 255))) ^ 31181;
};

function __22(a, b, e, d, c, f) {
	e ^= 8102;
	d = (((24 << ((d >> 16) & 255)) + (32 << ((d >> 32) & 255))) + (8 << ((d >> 24) & 255))) + (16 << ((d >> 8) & 255));
	c = (~(c & 29687) & 29687) | (~(29687 & c) & c);
	f = (1 + (22695477 * (62237 + f))) % 4294967296;
	a = __11((a + 52483) % 65496, (((16 << ((b >> 16) & 255)) + (24 << ((b >> 8) & 255))) + (32 << ((b >> 24) & 255))) + (8 << ((b >> 32) & 255)));
	b = __11(e, d);
	__11(c, f);
	return 55575 ^ ((45290 + (a ^ b)) % 65334);
};