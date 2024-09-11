// arrays, objetos
let meta = {
  value: "ler um livro por mes",
  checked: false,
  isChecked: (info) => {
    console.log(info);
  },
};

meta.value = "nao e mais ler um livro";
meta.isChecked(meta.value);

// function // arrow function
// const criarMeta = () => {};

// function criarMeta() {}
