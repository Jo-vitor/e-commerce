import { Controller, Get, Param } from '@nestjs/common';
import { Produto, produtos } from 'src/core';

@Controller('produtos')
export class ProdutoController {
    @Get()
    buscarProdutos(): Produto[] {
        return produtos.map((produto) => {
            return {...produto, especificacoes: { destaque: produto.especificacoes.destaque}}
        });
    }

    @Get(':id')
    async obterProdutoporId(@Param('id') id:string): Promise<Produto | null>{
        const produto = produtos.find((p) => p.id === +id);

        return produto ?? null;
    }
}
