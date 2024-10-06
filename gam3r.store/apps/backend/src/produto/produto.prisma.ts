import { Injectable } from '@nestjs/common';
import { Produto } from "@gstore/core";
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class ProdutoPrisma {
    constructor(readonly prisma:PrismaProvider) {}

    async obter(): Promise<Produto[]> {
        return this.prisma.produto.findMany() as any;
    }

    async obterPorId(id: number): Promise<Produto | null> {
        const produto = this.prisma.produto.findUnique({ where: { id } });

        return produto as any ?? null;
    }
}
