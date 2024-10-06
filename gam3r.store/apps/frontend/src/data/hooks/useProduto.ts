'use client'
import { Produto } from "@gstore/core";
import { useEffect, useState } from "react";

export default function useProdutos(){
    const [produtos, setProdutos] = useState<Produto[]>([])

    async function obterProdutos(): Promise<Produto[]> {
        const resp = await fetch('http://localhost:3005/produtos');
        const produtos = await resp.json();
        return produtos ?? [];
    }

    async function obterProdutosPorId(id: number): Promise<Produto | null> {
        try {
            const resp = await fetch(`http://localhost:3005/produtos/${id}`);
            const produto = await resp.json();
            return produto
            
        } catch (error) {
            return null;
        }
    }

    useEffect(() => {
        obterProdutos().then( setProdutos );
    }, [])

    return {
        produtos,
        obterProdutosPorId
    }
}