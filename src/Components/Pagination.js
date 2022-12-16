import React from "react";
const MAX_ITEMS = 7;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;
/*
    limit: numero de items por pagina
    total: numero total de items
    offset: numero de items que devem ser pulados
    MAX_ITEMS: numero maximo de icones de paginas que devem ser exibidas
    MAX_LEFT: numero maximo de icones de paginas que devem ser exibidas a esquerda da pagina atual
*/
const Pagination = ({ limit, total, offset, setOffset }) => {
  const paginaAtual = offset ? offset / limit + 1 : 1;
  const numeroDePaginas = Math.ceil(total / limit);
  const valorDoPrimeiroBotaoVisivel = Math.max(paginaAtual - MAX_LEFT, 1);

  return (
    <ul>
      {Array.from({ length: Math.min(numeroDePaginas, MAX_ITEMS) }).map(
        (_, index) => {
          const valorDoBotaoAtual = valorDoPrimeiroBotaoVisivel + index;
          return (
            <li key={valorDoBotaoAtual}>
              <button
                onClick={() => setOffset((valorDoBotaoAtual - 1) * limit)}
              >
                {valorDoBotaoAtual}
              </button>
            </li>
          );
        }
      )}
    </ul>
  );
};

export default Pagination;
