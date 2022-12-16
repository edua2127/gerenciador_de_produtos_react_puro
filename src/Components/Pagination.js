import React from "react";
import style from "./Pagination.module.css";
function range(start, end) {
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx);
}

const Pagination = ({
  quantidade_de_items_por_pagina,
  total_de_items,
  starts,
  setStarts,
}) => {
  const quantidade_de_paginas = Math.ceil(
    total_de_items / quantidade_de_items_por_pagina
  );
  const pagina_atual = starts / quantidade_de_items_por_pagina + 1;
  const paginas_mostradas = range(pagina_atual - 2, pagina_atual + 2).filter(
    (pagina) => pagina > 0 && pagina <= quantidade_de_paginas
  );
  return (
    <ul className={style.botoes_paginacao}>
      {paginas_mostradas.map((pagina) => {
        return (
          <li key={pagina}>
            <button
              className={style.botao_da_pagina}
              onClick={() =>
                setStarts((pagina - 1) * quantidade_de_items_por_pagina)
              }
            >
              {pagina}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Pagination;
