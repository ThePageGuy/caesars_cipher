const getcode = () => {
  const code = document.getElementById("code").value;

  let encoded = rot13(code);

  document.getElementById("encode").innerHTML = encoded;
};

function rot13(str) {
  const alpha = {
    A: "N",
    B: "O",
    C: "P",
    D: "Q",
    E: "R",
    F: "S",
    G: "T",
    H: "U",
    I: "V",
    J: "W",
    K: "X",
    L: "Y",
    M: "Z",
    N: "A",
    O: "B",
    P: "C",
    Q: "D",
    R: "E",
    S: "F",
    T: "G",
    U: "H",
    V: "I",
    W: "J",
    X: "K",
    Y: "L",
    Z: "M",
  };

  let words = str.split(" ");
  const pattern = /[A-Z]/;

  for (let i = 0; i < words.length; i++) {
    let letter = words[i];
    let spaced = letter.split("");
    for (let j = 0; j < spaced.length; j++) {
      if (pattern.test(spaced[j])) {
        spaced[j] = alpha[spaced[j]];
      }
    }
    words[i] = spaced.join("");
  }

  return words.join(" ");
}
