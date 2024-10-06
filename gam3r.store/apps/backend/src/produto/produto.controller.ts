import { Controller, Get, Param } from '@nestjs/common';
import { Produto } from "@gstore/core";
import { ProdutoPrisma } from './produto.prisma';

@Controller('produtos')
export class ProdutoController {

    constructor(readonly repo: ProdutoPrisma) {}

    @Get()
    buscarProdutos(): Promise<Produto[]> {
        return this.repo.obter();
    }

    @Get(':id')
    async obterProdutoporId(@Param('id') id:string): Promise<Produto | null>{
        return this.repo.obterPorId(Number(id));
    }
}
