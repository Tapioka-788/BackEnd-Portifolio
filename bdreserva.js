// let cartoes = [
//     {
//         nome: 'Portifolio Pessoal',
//         linguagem: 'Html; CSS; Js',
//         estado: 'ok',
//         link: 'https://github.com/Tapioka-788/Portifolio-Pessoal.git',
//         img: 'tche tche',
//     },
//     {
//         nome: 'Pokemon Gen3',
//         linguagem: 'Html; CSS; Js',
//         estado: 'andamento',
//         link: 'https://github.com/Tapioka-788/Pokemon-Gen3.git',
//         img: 'tcha tcha',
//     },
//     {
//         nome: 'Trash-Point',
//         linguagem: 'Html; CSS; Js',
//         estado: 'inicio',
//         link: 'https://github.com/Tapioka-788/trashPoint.git',
//         img: 'tche tche',
//     },
//     {
//         nome: 'K-entre-nos',
//         linguagem: 'Html; CSS; Js',
//         estado: 'ok',
//         link: 'https://github.com/BryamSenac/k_entre_nos.git',
//         img: 'tcha tcha',
//     },
//     {
//         nome: 'Bridge-Works',
//         linguagem: 'Html; CSS; Js',
//         estado: 'inicio',
//         link: 'https://github.com/Tapioka-788/BridgeWorks.git',
//         img: 'tche tche',
//     },
//     {
//         nome: 'Backend Bridge-Works',
//         linguagem: 'Js; Node.js',
//         estado: 'andamento',
//         link: 'https://github.com/Tapioka-788/Backend-BridgeWorks.git',
//         img: 'tcha tcha',
//     },
// ];

if (cartoes[i].estado === 'concluido') {
    cartao.style.backgroundColor = 'green';
} 


// if (cartoes[i].estado === 'ok') {

// substituido pelo de cima

//     cartao.style.backgroundColor = 'green';
// }


if (cartoes[i].estado === 'andamento') {
    cartao.style.backgroundColor = 'yellow';
} if (cartoes[i].estado === 'inicio') {
    cartao.style.backgroundColor = 'red';
}