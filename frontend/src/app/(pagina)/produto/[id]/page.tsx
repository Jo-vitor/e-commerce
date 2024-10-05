'use client'
import { Produto } from "@/src/core";
import useProdutos from "@/src/data/hooks/useProduto";
import { useEffect, useState } from "react";

export default function PaginaProduto(props: any){
    const { obterProdutosPorId } = useProdutos();
    const [produto, setProduto] = useState<Produto | null>(null);

    useEffect(() => {
        obterProdutosPorId(+props.params.id).then(setProduto);
    }, [props.params.id]);

    return (
        produto ? <div>{produto.nome}</div> : <div>Produto não encontrado</div> 
    ) 
    
}