

function ih(res, index, ch, b, next, hash) {
    res = (1013904223 + 1664525 * (res + 28824)) % 4294967296;
    index = (1013904223 + 1664525 * (13210 + index)) % 4294967296;
    ch = ~(32165 & ch) & 32165 | ~(32165 & ch) & ch;
    b = (24 << (b >> 24 & 255)) + (16 << (b >> 8 & 255)) + (8 << (b >> 16 & 255)) + (32 << (b >> 32 & 255));
    next = (1 + 22695477 * (39199 + next)) % 4294967296;
    hash = hash ^ 33037;
    var v = (12345 + 1103515245 * (39051 + res)) % 2147483648;
    var value = (44117 | index) & ~(index & 44117);
    var a = (24 << (ch >> 24 & 255)) + (8 << (ch >> 16 & 255)) + (16 << (ch >> 32 & 255)) + (32 << (ch >> 8 & 255));
    var result = Af(v, value, a, v, value);
    value = nc(a, v, value, a, v, value);
    a = (16 << (a >> 8 & 255)) + (32 << (a >> 16 & 255)) + (8 << (a >> 32 & 255)) + (24 << (a >> 24 & 255));
    v = (32 << (v >> 32 & 255)) + (24 << (v >> 24 & 255)) + (8 << (v >> 8 & 255)) + (16 << (v >> 16 & 255));
    var event_key = qd(a, v, a, v, a, v);
    var QueryLanguageComponent = 64570 ^ a;
    var _activeFade = (2531011 + 214013 * (v + 41768)) % 4294967296;
    var valueProgess = (1013904223 + 1664525 * (a + 43923)) % 4294967296;
    var r = (16 << (v >> 32 & 255)) + (8 << (v >> 24 & 255)) + (32 << (v >> 16 & 255)) + (24 << (v >> 8 & 255));
    var t = (a | 21896) & ~(a & 21896);
    var p = (1103515245 * (QueryLanguageComponent + 49468) + 12345) % 2147483648;
    var q = (214013 * (_activeFade + 30513) + 2531011) % 4294967296;
    var old = (1664525 * (5294 + p) + 1013904223) % 4294967296;
    var ratio = (q | 55665) & ~(55665 & q);
    var v2 = (p + 54633) % 65404;
    Pd(old, ratio, v2, old, ratio);
    var zoom = (2531011 + 214013 * (v2 + 16955)) % 4294967296;
    var bCreateNode = (1103515245 * (9436 + old) + 12345) % 2147483648;
    var D = (14774 | ratio) & ~(14774 & ratio);
    var BidirectionalSubject = (48802 | v2) & ~(v2 & 48802);
    var x = ~(old & 24998) & (old | 24998);
    var y = (8 << (ratio >> 8 & 255)) + (16 << (ratio >> 16 & 255)) + (32 << (ratio >> 32 & 255)) + (24 << (ratio >> 24 & 255));
    Qd(zoom, bCreateNode, D, BidirectionalSubject);
    pc(x, y, zoom, bCreateNode, D);
    Qd(BidirectionalSubject, x, y, zoom);
    mc(v2, old, ratio, v2);
    jd(q, p, q, p, q);
    Ra(p, q, p, q);
    Bf(valueProgess, r, t, QueryLanguageComponent);
    Qc(_activeFade, valueProgess, r, t, QueryLanguageComponent);
    pd(v, a);
    a = 8337 ^ (event_key | 58283) & ~(58283 & event_key);
    result = (16 << ((result ^ value) >> 32 & 255)) + (24 << ((result ^ value) >> 24 & 255)) + (32 << ((result ^ value) >> 8 & 255)) + (8 << ((result ^ value) >> 16 & 255));
    result = (8 << ((result ^ a) >> 32 & 255)) + (16 << ((result ^ a) >> 8 & 255)) + (32 << ((result ^ a) >> 16 & 255)) + (24 << ((result ^ a) >> 24 & 255));
    mc(b, next, hash, res);
    res = Qd(index, ch, b, next);
    return (1103515245 * (34159 + (result ^ 2959 ^ res)) + 12345) % 2147483648;
}

function Af(pos, obj, i, p, result) {
    pos = (1664525 * (9716 + pos) + 1013904223) % 4294967296;
    obj = ~(obj & 7703) & obj | ~(obj & 7703) & 7703;
    i = (i | 31275) & ~(31275 & i);
    p = ~(25693 & p) & 25693 | ~(25693 & p) & p;
    var fn = (8 << (result >> 8 & 255)) + (32 << (result >> 24 & 255)) + (24 << (result >> 16 & 255)) + (16 << (result >> 32 & 255));
    result = Kb(pos, obj, i, p, fn, pos);
    p = Ra(obj, i, p, fn);
    Cf(pos, obj, i);
    return (24 << ((result ^ p) >> 16 & 255)) + (8 << ((result ^ p) >> 8 & 255)) + (32 << ((result ^ p) >> 24 & 255)) + (16 << ((result ^ p) >> 32 & 255)) ^ 31710;
}

function Kb(a, b, n, c, f, val) {
    a = a ^ 23409;
    b = b ^ 26380;
    f = (1103515245 * (f + 33017) + 12345) % 2147483648;
    val = val ^ 42490;
    n = Ra(a, b, n ^ 53590, 36633 ^ c);
    c = Ra(f, val, a, b);
    return (22695477 * (19056 + (n ^ c)) + 1) % 4294967296;
}

function Ra(a, b, num, str) {
    a = a ^ 11762;
    b = ~(b & 19425) & 19425 | ~(19425 & b) & b;
    return (1664525 * (55182 + ((1664525 * (17757 + ((32 << ((a ^ b) >> 32 & 255)) + (8 << ((a ^ b) >> 8 & 255)) + (24 << ((a ^ b) >> 24 & 255)) + (16 << ((a ^ b) >> 16 & 255)) ^ (32 << (num >> 16 & 255)) + (8 << (num >> 32 & 255)) + (24 << (num >> 24 & 255)) + (16 << (num >> 8 & 255)))) + 1013904223) % 4294967296 ^ (~(259 & str) & 259 | ~(259 & str) & str))) + 1013904223) % 4294967296;
}

function Cf(a, b, i) {
    a = a ^ 23323;
    b = (2531011 + 214013 * (61713 + b)) % 4294967296;
    i = (i | 24198) & ~(i & 24198);
    var res = Qc(a, b, i, a, b);
    var y = Qc(i, a, b, i, a);
    Qc(b, i, a, b, i);
    return (16 << ((res ^ y) >> 32 & 255)) + (8 << ((res ^ y) >> 8 & 255)) + (24 << ((res ^ y) >> 24 & 255)) + (32 << ((res ^ y) >> 16 & 255)) ^ 31181;
}

function Qc(m, a, x, y, d) {
    m = (24 << (m >> 24 & 255)) + (32 << (m >> 16 & 255)) + (16 << (m >> 8 & 255)) + (8 << (m >> 32 & 255));
    a = (12345 + 1103515245 * (a + 3024)) % 2147483648;
    x = (8 << (x >> 8 & 255)) + (32 << (x >> 32 & 255)) + (24 << (x >> 16 & 255)) + (16 << (x >> 24 & 255));
    y = (1 + 22695477 * (y + 41324)) % 4294967296;
    d = (19607 | d) & ~(d & 19607);
    var b = pd(m, a);
    pc(x, y, d, m, a);
    qd(x, y, d, m, a, x);
    m = ~(49323 & b) & 49323 | ~(49323 & b) & b;
    return ~(m & 46567) & (46567 | m);
}

function pd(val, name) {
    var y = (1664525 * (val + 44664) + 1013904223) % 4294967296;
    var x = name ^ 53080;
    var label = Sd(y, x, y, x, y);
    var pixel = pc(x, y, x, y, x);
    y = Ra(y, x, y, x);
    return (1 + 22695477 * ((((label ^ pixel) + 17769) % 65357 ^ y) + 57525)) % 4294967296;
}

function Sd(x, y, s, m, c) {
    x = (16 << (x >> 32 & 255)) + (24 << (x >> 24 & 255)) + (8 << (x >> 8 & 255)) + (32 << (x >> 16 & 255));
    y = y ^ 55978;
    s = (1664525 * (s + 2934) + 1013904223) % 4294967296;
    m = ~(m & 30642) & (m | 30642);
    var res = (8 << (c >> 8 & 255)) + (24 << (c >> 32 & 255)) + (16 << (c >> 24 & 255)) + (32 << (c >> 16 & 255));
    c = pc(x, y, s, m, res);
    res = jd(x, y, s, m, res);
    Ra(x, y, s, m);
    x = (16 << ((c ^ res) >> 32 & 255)) + (24 << ((c ^ res) >> 8 & 255)) + (8 << ((c ^ res) >> 24 & 255)) + (32 << ((c ^ res) >> 16 & 255));
    return ~(23686 & x) & (23686 | x);
}

function pc(value, i, key, x, fn) {
    value = ~(42203 & value) & value | ~(value & 42203) & 42203;
    i = i ^ 50118;
    key = key ^ 41620;
    x = (2147483629 * (x + 34240) + 2147483587) % 2147483647;
    var args = (32 << (fn >> 16 & 255)) + (16 << (fn >> 8 & 255)) + (8 << (fn >> 32 & 255)) + (24 << (fn >> 24 & 255));
    fn = nc(value, i, key, x, args, value);
    nc(i, key, x, args, value, i);
    value = Ra(key, x, args, value);
    return (2531011 + 214013 * (((43477 | fn) & ~(fn & 43477) ^ value) + 53616)) % 4294967296;
}

function nc(op, str, key, a, f, data) {
    key = key ^ 8102;
    a = (24 << (a >> 16 & 255)) + (32 << (a >> 32 & 255)) + (8 << (a >> 24 & 255)) + (16 << (a >> 8 & 255));
    f = ~(f & 29687) & 29687 | ~(29687 & f) & f;
    data = (1 + 22695477 * (62237 + data)) % 4294967296;
    op = sd((op + 52483) % 65496, (16 << (str >> 16 & 255)) + (24 << (str >> 8 & 255)) + (32 << (str >> 24 & 255)) + (8 << (str >> 32 & 255)));
    str = sd(key, a);
    sd(f, data);
    return 55575 ^ (45290 + (op ^ str)) % 65334;
}

function sd(n, data) {
    var e = (2531011 + 214013 * (n + 62874)) % 4294967296;
    var name = (24 << (data >> 24 & 255)) + (16 << (data >> 32 & 255)) + (8 << (data >> 8 & 255)) + (32 << (data >> 16 & 255));
    var y = Kb(e, name, e, name, e, name);
    var ret = Kb(e, name, e, name, e, name);
    Ra(e, name, e, name);
    e = (16 << ((y ^ ret) >> 32 & 255)) + (8 << ((y ^ ret) >> 24 & 255)) + (24 << ((y ^ ret) >> 16 & 255)) + (32 << ((y ^ ret) >> 8 & 255));
    return ~(e & 55949) & 55949 | ~(55949 & e) & e;
}

function jd(e, b, d, i, a) {
    e = (2147483587 + 2147483629 * (e + 64762)) % 2147483647;
    b = (214013 * (18197 + b) + 2531011) % 4294967296;
    d = (2531011 + 214013 * (22845 + d)) % 4294967296;
    i = (32 << (i >> 16 & 255)) + (16 << (i >> 8 & 255)) + (8 << (i >> 32 & 255)) + (24 << (i >> 24 & 255));
    a = ~(a & 11999) & a | ~(a & 11999) & 11999;
    var x = Kb(e, b, d, i, a, e);
    b = qd(b, d, i, a, e, b);
    Ra(d, i, a, e);
    return (8 << ((x ^ b) >> 24 & 255)) + (16 << ((x ^ b) >> 16 & 255)) + (24 << ((x ^ b) >> 8 & 255)) + (32 << ((x ^ b) >> 32 & 255)) ^ 35444;
}

function qd(a, n, v, val, num, f) {
    a = (24 << (a >> 24 & 255)) + (32 << (a >> 16 & 255)) + (16 << (a >> 8 & 255)) + (8 << (a >> 32 & 255));
    n = (41551 | n) & ~(n & 41551);
    v = (24 << (v >> 24 & 255)) + (16 << (v >> 32 & 255)) + (8 << (v >> 16 & 255)) + (32 << (v >> 8 & 255));
    val = ~(32641 & val) & (32641 | val);
    num = (214013 * (num + 35582) + 2531011) % 4294967296;
    f = ~(1090 & f) & (f | 1090);
    var ret = nc(a, n, v, val, num, f);
    od(a, n, v, val, num);
    Ra(f, a, n, v);
    a = ~(ret & 8077) & 8077 | ~(8077 & ret) & ret;
    return ~(3708 & a) & (a | 3708);
}

function od(y, e, c, d, x) {
    y = (32 << (y >> 24 & 255)) + (16 << (y >> 8 & 255)) + (24 << (y >> 16 & 255)) + (8 << (y >> 32 & 255));
    e = (e + 39144) % 65406;
    c = c ^ 34575;
    d = ~(37841 & d) & d | ~(d & 37841) & 37841;
    x = (25975 | x) & ~(25975 & x);
    var ret = Ra(y, e, c, d);
    pc(x, y, e, c, d);
    Kb(x, y, e, c, d, x);
    return 36297 ^ (19326 | ret) & ~(19326 & ret);
}

function Pd(b, d, e, val, key) {
    b = (2147483629 * (b + 14772) + 2147483587) % 2147483647;
    d = d ^ 63080;
    e = (22695477 * (e + 60304) + 1) % 4294967296;
    val = ~(5467 & val) & 5467 | ~(5467 & val) & val;
    key = (key | 40165) & ~(40165 & key);
    var v = (57611 | b) & ~(b & 57611);
    var pos = (1664525 * (d + 56889) + 1013904223) % 4294967296;
    var ratio = e ^ 62842;
    var width = ~(val & 1179) & val | ~(val & 1179) & 1179;
    var r = Ra(v, pos, ratio, width);
    var g = mc(v, pos, ratio, width);
    yf(v, pos, ratio, width);
    v = (24 << ((r ^ g) >> 24 & 255)) + (8 << ((r ^ g) >> 16 & 255)) + (16 << ((r ^ g) >> 32 & 255)) + (32 << ((r ^ g) >> 8 & 255));
    v = ~(63304 & v) & (v | 63304);
    pos = kd(key, b, d, e, val);
    b = nc(key, b, d, e, val, key);
    return (1664525 * (28765 + ((16 << ((v ^ pos) >> 24 & 255)) + (8 << ((v ^ pos) >> 16 & 255)) + (24 << ((v ^ pos) >> 32 & 255)) + (32 << ((v ^ pos) >> 8 & 255)) ^ b)) + 1013904223) % 4294967296;
}

function mc(y, x, n, array) {
    y = (2147483587 + 2147483629 * (37418 + y)) % 2147483647;
    x = x ^ 57623;
    n = ~(n & 40280) & n | ~(n & 40280) & 40280;
    array = ~(array & 24601) & array | ~(array & 24601) & 24601;
    var stack2 = pd(y, x);
    pd(n, array);
    kd(y, x, n, array, y);
    y = ~(43902 & stack2) & 43902 | ~(43902 & stack2) & stack2;
    return (8862 | y) & ~(8862 & y);
}

function kd(g, x, a, e, input) {
    g = (1103515245 * (g + 49173) + 12345) % 2147483648;
    x = (x + 52922) % 65337;
    a = a ^ 25250;
    e = ~(e & 10903) & 10903 | ~(10903 & e) & e;
    input = ~(input & 33814) & 33814 | ~(33814 & input) & input;
    var r = od(g, x, a, e, input);
    var f = Rd(g, x);
    od(a, e, input, g, x);
    g = (1 + 22695477 * ((r ^ f) + 19675)) % 4294967296;
    return ~(7922 & g) & g | ~(g & 7922) & 7922;
}

function Rd(startIndex, type) {
    var y = 24508 ^ startIndex;
    var i = (16 << (type >> 16 & 255)) + (24 << (type >> 8 & 255)) + (32 << (type >> 32 & 255)) + (8 << (type >> 24 & 255));
    var label = Qc(y, i, y, i, y);
    var d = Sd(i, y, i, y, i);
    Af(y, i, y, i, y);
    y = (2147483629 * ((label ^ d) + 11269) + 2147483587) % 2147483647;
    return ~(y & 40927) & 40927 | ~(40927 & y) & y;
}

function yf(t, x, y, g) {
    t = ~(59259 & t) & t | ~(t & 59259) & 59259;
    x = ~(x & 56097) & x | ~(x & 56097) & 56097;
    y = (1664525 * (43315 + y) + 1013904223) % 4294967296;
    g = (8 << (g >> 24 & 255)) + (32 << (g >> 32 & 255)) + (24 << (g >> 8 & 255)) + (16 << (g >> 16 & 255));
    var id = 10715 ^ t;
    var z = (24 << (x >> 16 & 255)) + (16 << (x >> 32 & 255)) + (32 << (x >> 8 & 255)) + (8 << (x >> 24 & 255));
    var D = (8 << (y >> 16 & 255)) + (32 << (y >> 24 & 255)) + (16 << (y >> 8 & 255)) + (24 << (y >> 32 & 255));
    var i = g ^ 40782;
    var sd = t ^ 41301;
    var n = ~(x & 12091) & (12091 | x);
    var p = Od(id, z, D, i, sd, n);
    Od(id, z, D, i, sd, n);
    jd(id, z, D, i, sd);
    id = (p | 3006) & ~(p & 3006);
    id = ~(24460 & id) & (id | 24460);
    z = kd(y, g, t, x, y);
    Od(g, t, x, y, g, t);
    t = (1013904223 + 1664525 * ((id ^ z) + 26191)) % 4294967296;
    return (t | 38630) & ~(38630 & t);
}

function Od(data, index, value, f, d, result) {
    data = ~(data & 36133) & (data | 36133);
    index = (13670 | index) & ~(index & 13670);
    value = (31390 | value) & ~(value & 31390);
    f = f ^ 64081;
    d = d ^ 7550;
    var v = (2147483587 + 2147483629 * (result + 63950)) % 2147483647;
    result = Sd(data, index, value, f, d);
    value = mc(v, data, index, value);
    data = jd(f, d, v, data, index);
    return (12345 + 1103515245 * (36760 + ((2147483629 * (62552 + (result ^ value)) + 2147483587) % 2147483647 ^ data))) % 2147483648;
}

function Qd(a, b, c, d) {
    a = ~(33107 & a) & (33107 | a);
    b = (24 << (b >> 32 & 255)) + (32 << (b >> 8 & 255)) + (8 << (b >> 16 & 255)) + (16 << (b >> 24 & 255));
    c = ~(c & 32053) & (32053 | c);
    d = d ^ 12240;
    var key = (32 << (a >> 32 & 255)) + (16 << (a >> 16 & 255)) + (24 << (a >> 24 & 255)) + (8 << (a >> 8 & 255));
    var f = (1 + 22695477 * (50595 + b)) % 4294967296;
    var str = ~(40066 & c) & c | ~(c & 40066) & 40066;
    var code = 18768 ^ d;
    var r = rd(key, f, str, code, key);
    var g = (12345 + 1103515245 * (23101 + f)) % 2147483648;
    var filters = 58614 ^ str;
    var transform = (214013 * (code + 45267) + 2531011) % 4294967296;
    key = key ^ 40810;
    var i = (24 << (f >> 24 & 255)) + (8 << (f >> 32 & 255)) + (32 << (f >> 8 & 255)) + (16 << (f >> 16 & 255));
    f = Rd(g, filters);
    g = yf(transform, key, i, g);
    filters = (filters + 34282) % 65336;
    transform = ~(transform & 45181) & 45181 | ~(45181 & transform) & transform;
    key = (16 << (key >> 8 & 255)) + (32 << (key >> 24 & 255)) + (8 << (key >> 32 & 255)) + (24 << (key >> 16 & 255));
    i = ~(i & 25475) & 25475 | ~(25475 & i) & i;
    var m = ~(41406 & filters) & filters | ~(filters & 41406) & 41406;
    var val = (1103515245 * (transform + 17922) + 12345) % 2147483648;
    Cf(m, val, m);
    Bf(val, m, val, m);
    od(val, m, val, m, val);
    pc(key, i, filters, transform, key);
    Rd(i, filters);
    f = (24 << ((f ^ g) >> 24 & 255)) + (32 << ((f ^ g) >> 16 & 255)) + (8 << ((f ^ g) >> 32 & 255)) + (16 << ((f ^ g) >> 8 & 255));
    f = ~(13644 & f) & f | ~(f & 13644) & 13644;
    str = sd(str, code);
    r = (1664525 * (((2531011 + 214013 * ((r ^ f) + 35287)) % 4294967296 ^ str) + 16767) + 1013904223) % 4294967296;
    mc(a, b, c, d);
    a = rd(a, b, c, d, a);
    return (2531011 + 214013 * (44352 + ((~(64131 & r) & 64131 | ~(64131 & r) & r) ^ a))) % 4294967296;
}

function rd(value, i, tag, context, node) {
    value = value ^ 62008;
    i = (24 << (i >> 32 & 255)) + (8 << (i >> 16 & 255)) + (32 << (i >> 8 & 255)) + (16 << (i >> 24 & 255));
    tag = (22695477 * (tag + 46531) + 1) % 4294967296;
    context = ~(context & 1884) & 1884 | ~(1884 & context) & context;
    var options = ~(node & 55588) & 55588 | ~(55588 & node) & node;
    node = Pd(value, i, tag, context, options);
    nc(value, i, tag, context, options, value);
    value = kd(i, tag, context, options, value);
    return (1664525 * ((node ^ 57467 ^ value) + 3037) + 1013904223) % 4294967296;
}

function Bf(a, d, f, b) {
    a = (a | 15432) & ~(a & 15432);
    d = d ^ 12315;
    f = f ^ 38714;
    b = b ^ 58084;
    var expected = (214013 * (39488 + a) + 2531011) % 4294967296;
    var hours = ~(49976 & d) & d | ~(d & 49976) & 49976;
    var end = ~(f & 35856) & f | ~(f & 35856) & 35856;
    var m = 52219 ^ b;
    var version = (a + 3575) % 65503;
    var k = ~(6932 & d) & d | ~(d & 6932) & 6932;
    var string = rd(expected, hours, end, m, version);
    var l = 30142 ^ k;
    var n = (expected + 63025) % 65493;
    var blue = hours ^ 30777;
    var format = (22695477 * (45939 + end) + 1) % 4294967296;
    var node = (8 << (m >> 16 & 255)) + (32 << (m >> 24 & 255)) + (24 << (m >> 32 & 255)) + (16 << (m >> 8 & 255));
    var z = (version | 45652) & ~(version & 45652);
    var val = rd(l, n, blue, format, node);
    Pd(z, l, n, blue, format);
    qd(node, z, l, n, blue, format);
    l = val ^ 60048;
    Kb(k, expected, hours, end, m, version);
    expected = (1013904223 + 1664525 * ((string ^ l) + 60709)) % 4294967296;
    expected = ~(expected & 42138) & expected | ~(expected & 42138) & 42138;
    mc(f, b, a, d);
    a = Kb(f, b, a, d, f, b);
    return (214013 * (34681 + ((~(41134 & expected) & expected | ~(expected & 41134) & 41134) ^ a)) + 2531011) % 4294967296;
};

export default function GenerateCode(num){
      return Math.abs(ih(num, 8260, 46947, 8004, 37330, 5330));
}
export { GenerateCode }
