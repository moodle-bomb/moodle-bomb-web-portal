const $__$r = $__$A;
(function (q, J) {
  const X = $__$A,
    G = q();
  while (!![]) {
    try {
      const A =
        parseInt(X(0xc9)) / 0x1 +
        -parseInt(X(0xed)) / 0x2 +
        (parseInt(X(0xc1)) / 0x3) * (-parseInt(X(0xe7)) / 0x4) +
        (-parseInt(X(0xca)) / 0x5) * (-parseInt(X(0xbc)) / 0x6) +
        (parseInt(X(0xd8)) / 0x7) * (parseInt(X(0xc4)) / 0x8) +
        (-parseInt(X(0xd1)) / 0x9) * (parseInt(X(0x103)) / 0xa) +
        (parseInt(X(0xd9)) / 0xb) * (parseInt(X(0xfc)) / 0xc);
      if (A === J) break;
      else G["push"](G["shift"]());
    } catch (V) {
      G["push"](G["shift"]());
    }
  }
})($__$G, 0xddbe1);
import { initializeApp } from "./assets/js/firebase/firebase-app.js";
import {
  getDatabase,
  ref,
  get,
  onValue,
} from "./assets/js/firebase/firebase-database.js";
const $__$B = initializeApp(firebaseConfig),
  $__$o = getDatabase($__$B),
  { maxsize: $__$I, highlight_color: $__$E, refresh_delay: $__$j } = config,
  $__$k = document[$__$r(0xff)]($__$r(0x105)),
  $__$K = document[$__$r(0xff)]($__$r(0xc5)),
  $__$R = document[$__$r(0xff)]($__$r(0xf0)),
  $__$T = document[$__$r(0xff)]("getHTML"),
  $__$i = document[$__$r(0xff)]($__$r(0x101)),
  $__$e = document[$__$r(0xff)]("countdown"),
  $__$v = document[$__$r(0xff)]($__$r(0xdf)),
  $__$P = document[$__$r(0xff)]($__$r(0xf5));
document[$__$r(0x107)]("DOMContentLoaded", () => {
  const h = $__$r,
    q = window[h(0xba)][h(0xf8)](h(0xf5));
  if (q !== h(0xc6)) $__$P[h(0xae)] = q;
}),
  document[$__$r(0x107)]("validUser", (q) => $__$Q(q[$__$r(0xc2)])),
  document[$__$r(0x107)]($__$r(0xb9), () => {
    $__$s(), $__$Z(), $__$x();
  }),
  $__$R[$__$r(0x107)]($__$r(0xde), $__$Z);
const $__$z = {};
function $__$A(q, J) {
  const G = $__$G();
  return (
    ($__$A = function (A, V) {
      A = A - 0xad;
      let B = G[A];
      if ($__$A["qMTDuB"] === undefined) {
        var o = function (K) {
          const R =
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
          let T = "",
            i = "";
          for (
            let e = 0x0, v, P, z = 0x0;
            (P = K["charAt"](z++));
            ~P && ((v = e % 0x4 ? v * 0x40 + P : P), e++ % 0x4)
              ? (T += String["fromCharCode"](0xff & (v >> ((-0x2 * e) & 0x6))))
              : 0x0
          ) {
            P = R["indexOf"](P);
          }
          for (let Q = 0x0, Z = T["length"]; Q < Z; Q++) {
            i +=
              "%" +
              ("00" + T["charCodeAt"](Q)["toString"](0x10))["slice"](-0x2);
          }
          return decodeURIComponent(i);
        };
        ($__$A["RfcoMK"] = o), (q = arguments), ($__$A["qMTDuB"] = !![]);
      }
      const I = G[0x0],
        E = A + I,
        j = q[E];
      return !j ? ((B = $__$A["RfcoMK"](B)), (q[E] = B)) : (B = j), B;
    }),
    $__$A(q, J)
  );
}
($__$z["dist"] = "user"),
  ($__$z[$__$r(0xaf)] = window[$__$r(0xd4)]),
  $__$T[$__$r(0x107)]($__$r(0xde), () => $__$U($__$z)),
  $__$v[$__$r(0x107)]($__$r(0xde), (J) => {
    const u = $__$r;
    J[u(0xd7)](), (window[u(0xd4)] = $__$P[u(0xae)][u(0x100)]());
    if (!window[u(0xd4)][u(0xb1)]) return;
    window[u(0xba)][u(0xe6)](u(0xf5), window[u(0xd4)]);
    const G = {};
    (G[u(0xd3)] = u(0xf7)), (G[u(0xaf)] = window[u(0xd4)]), $__$W(G);
  });
function $__$Q(G) {
  const M = $__$r,
    A = (function () {
      let o = !![];
      return function (I, E) {
        const j = o
          ? function () {
              const p = $__$A;
              if (E) {
                const k = E[p(0xd0)](I, arguments);
                return (E = null), k;
              }
            }
          : function () {};
        return (o = ![]), j;
      };
    })(),
    V = A(this, function () {
      const m = $__$A;
      let o;
      try {
        const j = Function(m(0xcf) + m(0xb7) + ");");
        o = j();
      } catch (k) {
        o = window;
      }
      const I = (o[m(0xb0)] = o["console"] || {}),
        E = [m(0xe4), "warn", m(0x106), "error", m(0xbd), m(0xc7), m(0xfd)];
      for (let K = 0x0; K < E[m(0xb1)]; K++) {
        const R = A[m(0xe2)]["prototype"]["bind"](A),
          T = E[K],
          i = I[T] || R;
        (R["__proto__"] = A[m(0xc8)](A)),
          (R["toString"] = i[m(0x108)]["bind"](i)),
          (I[T] = R);
      }
    });
  V();
  if (!(Array[M(0xfe)](G) && G[M(0xb1)])) return;
  console[M(0xe4)](M(0x109)), (window[M(0xcd)] = []);
  while ($__$i[M(0xc3)]) {
    $__$i[M(0xc3)][M(0xdd)]();
  }
  function B(o, I) {
    const c = M;
    if (!(Array[c(0xfe)](o) && o["length"])) return;
    const E = document["createElement"](I),
      j = document[c(0xe0)]("p"),
      k = document["createElement"](c(0xf3));
    let K = "",
      R = null;
    E["classList"][c(0xf9)](I);
    for (let e of o) {
      if (!(typeof e === "object" && e !== null)) continue;
      const { value: v, type: P } = e;
      K += v;
      switch (P) {
        case "text":
          j["classList"][c(0xf9)](I + "__text"),
            (j[c(0xad)] = v),
            E[c(0xd2)](j);
          break;
        case "image":
          j[c(0xb4)]["add"](I + "__text"), k[c(0xb6)]("src", v), E[c(0xd2)](k);
          break;
      }
    }
    const T = {};
    (T[c(0xe3)] = K),
      (T[c(0xe5)] = $__$I),
      (R = encoder(T)),
      (E[c(0xec)]["b64Id"] = R);
    const i = {};
    return (i[c(0xea)] = E), (i[c(0xb2)] = R), i;
  }
  G[M(0xda)]((o, I) => {
    const d = M,
      { no: E, question: j, answer: k } = o,
      K = document[d(0xe0)](d(0xbf));
    K[d(0xb6)]("id", "q-" + I), K["classList"][d(0xf9)](d(0xbf));
    const R = document[d(0xe0)](d(0xf6));
    R["classList"][d(0xf9)](d(0xf6)), (R[d(0xad)] = d(0xe9) + E), K[d(0xd2)](R);
    const { container: T, hash: i } = B(j, d(0xf2));
    window[d(0xcd)][d(0xfa)](i), (K[d(0xec)][d(0xfb)] = i), K["append"](T);
    for (let e of k) {
      K[d(0xd2)](B(e, d(0xb3))[d(0xea)]);
    }
    $__$i[d(0xd2)](K);
  });
  if (window[M(0xcd)][M(0xb1)]) document[M(0xd5)](new CustomEvent(M(0xb9)));
}
async function $__$Z() {
  const t = $__$r;
  console["log"](t(0x104));
  if (!(typeof window[t(0xcd)] === "object" && window[t(0xcd)] !== null))
    return;
  for (let V of window[t(0xcd)]) {
    const B = {};
    (B["dist"] = "question"), (B[t(0xaf)] = V);
    let o = await $__$U(B);
    const I = {};
    I["a"] = {};
    if (!o) o = I;
    const E = {};
    (E[V] = o), A(E);
  }
  function A(j) {
    const O = t,
      { r: k, g: K, b: R } = $__$E,
      T = $__$f(j);
    for (let i in T) {
      const e = Object[O(0xf4)](T[i])[O(0xeb)]((P, z) => P + z, 0x0),
        v = document[O(0xb8)](O(0xf1) + i + "\x22]");
      if (!v) continue;
      v["querySelectorAll"]("count-highlight.count-highlight")["forEach"]((P) =>
        P[O(0xdd)]()
      );
      for (let P in T[i]) {
        const z = T[i][P],
          Q = v["querySelector"]("answer[data-b64-id=\x22" + P + "\x22]");
        if (!Q) continue;
        const Z = document[O(0xe0)](O(0xdc));
        Z[O(0xb4)][O(0xf9)](O(0xdc)),
          (Z[O(0xad)] =
            Math[O(0xee)]((z * 0x64) / e) + "%\x20" + z + "\x20/\x20" + e),
          (Z[O(0xe1)][O(0xb5)] =
            O(0xd6) + k + ",\x20" + K + ",\x20" + R + ",\x20" + z / e + ")"),
          Q[O(0xd2)](Z);
      }
    }
  }
}
function $__$x() {
  const C = $__$r;
  console[C(0xe4)](C(0xbe)), clearInterval(window["refresher"]);
  let q = 0x0;
  window[C(0xbe)] = setInterval(() => {
    if (q > $__$j) q = 0x0;
    ($__$e["textContent"] = ($__$j - q) / 0x3e8),
      (q += 0x3e8),
      q === $__$j && $__$Z();
  }, 0x3e8);
}
async function $__$U({ dist: q, key: J }) {
  return new Promise((G) => {
    const Y = $__$A;
    get(ref($__$o, q + "/" + J))
      [Y(0xcb)]((A) => {
        const n = Y;
        if (A[n(0xcc)]()) {
          if (q === n(0xf7))
            document[n(0xd5)](
              new CustomEvent(n(0xc0), { detail: JSON["parse"](A[n(0xce)]()) })
            );
          else {
            if (q === n(0xf2)) G(A["val"]());
          }
        } else G(![]);
      })
      [Y(0xbb)]((A) => {
        G(![]), console["error"](A);
      });
  });
}
function $__$W({ dist: q, key: key = "" }) {
  onValue(ref($__$o, q + "/" + key), (J) => {
    const H = $__$A;
    J[H(0xcc)]() &&
      document[H(0xd5)](
        new CustomEvent(H(0xc0), { detail: JSON[H(0x102)](J[H(0xce)]()) })
      );
  });
}
function encoder({ string: q, maxsize: J }) {
  const l = $__$r;
  if (!(typeof q === l(0xe3) || q instanceof String)) return;
  return (q = q["trim"]()[l(0xe8)](/^\w\W*[.)]\W*/gim, "")), md5(q);
}
function $__$f(J) {
  const y = $__$r;
  let G = {};
  for (let A in J) {
    G[A] = Object["values"](J[A])[y(0xeb)]((V, B) => {
      const a = y;
      for (let o in B) {
        if (V[a(0xef)](o)) V[o]++;
        else V[o] = 0x1;
      }
      return V;
    });
  }
  return G;
}
function $__$s() {
  const L = $__$r;
  $__$K["remove"](), $__$k[L(0xdd)]();
}
function $__$G() {
  const D = [
    "zgf0yxnLDa",
    "mte5nZaYogX5uePrrq",
    "CM91BMq",
    "AgfZt3DUuhjVCgvYDhK",
    "z2v0uMvZDwX0",
    "CxvLC3rPB24Ty29UDgfPBMvYw2rHDgeTyJy0lwLKpsi",
    "CxvLC3rPB24",
    "Aw1N",
    "DMfSDwvZ",
    "DwLK",
    "Cw5V",
    "DxnLCG",
    "z2v0sxrLBq",
    "ywrK",
    "ChvZAa",
    "yJy0swq",
    "otzIq1nRugm",
    "DhjHy2u",
    "AxnbCNjHEq",
    "z2v0rwXLBwvUDej5swq",
    "DhjPBq",
    "CM9VDa",
    "CgfYC2u",
    "nZK5ntGWtfLhq1nO",
    "DxbKyxrLre9n",
    "Bg9HzgLUz0nVBNrHAw5LCG",
    "Aw5MBW",
    "ywrKrxzLBNrmAxn0zw5LCG",
    "Dg9tDhjPBMC",
    "y3jLyxrLre9n",
    "Dgv4DenVBNrLBNq",
    "DMfSDwu",
    "A2v5",
    "y29UC29Szq",
    "BgvUz3rO",
    "AgfZAa",
    "yw5ZD2vY",
    "y2XHC3nmAxn0",
    "yMfJA2DYB3vUza",
    "C2v0qxr0CMLIDxrL",
    "E30Uy29UC3rYDwn0B3iOiNjLDhvYBIb0AgLZiIKOicK",
    "CxvLCNLtzwXLy3rVCG",
    "re9nq3jLyxrLza",
    "Bg9JywXtDg9YywDL",
    "y2f0y2G",
    "mZyXmZi3oe9MD1bJBq",
    "zxHJzxb0Aw9U",
    "CMvMCMvZAgvY",
    "CxvLC3rPB24Ty29UDgfPBMvY",
    "DMfSAwrvC2vY",
    "ndjMqKDYz0W",
    "zgv0ywLS",
    "zMLYC3rdAgLSza",
    "mta0qwrKt1Hz",
    "Bg9NAw4TzM9YBq",
    "Dw5KzwzPBMvK",
    "DgfIBgu",
    "yMLUza",
    "mZuWmdLLveXIz28",
    "nvvNuhDiDW",
    "DgHLBG",
    "zxHPC3rZ",
    "CwHHC2HmAxn0",
    "DMfS",
    "CMv0DxjUicHMDw5JDgLVBIGPia",
    "yxbWBhK",
    "oxnkExrTsa",
    "yxbWzw5K",
    "zgLZDa",
    "jhvPza",
    "zgLZCgf0y2HfDMvUDa",
    "CMDIysG",
    "ChjLDMvUDerLzMf1Bhq",
    "ndq4mdKXvNnuB1Lf",
    "nZy0odG1yvj4CLri",
    "zM9YrwfJAa",
    "C2XPy2u",
    "y291BNqTAgLNAgXPz2H0",
    "CMvTB3zL",
    "y2XPy2S",
    "Bg9NAw4",
    "y3jLyxrLrwXLBwvUDa",
    "C3r5Bgu",
    "y29UC3rYDwn0B3i",
    "C3rYAw5N",
    "Bg9N",
    "Bwf4C2L6zq",
    "C2v0sxrLBq",
    "mti1ndeYA0nxtffY",
    "CMvWBgfJzq",
    "uxvLC3rPB24G",
    "y29UDgfPBMvY",
    "CMvKDwnL",
  ];
  $__$G = function () {
    return D;
  };
  return $__$G();
}
