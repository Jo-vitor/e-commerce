'use client'
import { Produto } from "@/src/core";
import { useEffect, useState } from "react";

export default function useProdutos(){
    const [produtos, setProdutos] = useState<Produto[]>([])

    async function obterProdutos(): Promise<Produto[]> {
        const resp = await fetch('http://localhost:3005/produtos');
        const produtos = await resp.json();
        return produtos ?? [];
    }

    async function obterProdutosPorId(id: number): Promise<Produto | null> {
        const resp = await fetch(`http://localhost:3005/produtos/${id}`);
        const produto = await resp.json();
        return produto ?? null;
    }

    useEffect(() => {
        obterProdutos().then( setProdutos );
    }, [])

    return {
        produtos,
        obterProdutosPorId
    }
}