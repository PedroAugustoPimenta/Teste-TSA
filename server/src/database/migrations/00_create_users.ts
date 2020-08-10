import Knex from 'knex';

export async function up(Knex: Knex) {
    return Knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.string('email').notNullable();
        table.integer('cpf').notNullable();
        table.string('endereco').notNullable();
        table.string('estado').notNullable();
        table.string('cidade').notNullable();
        table.integer('cep').notNullable();
        table.string('formaDePagamento').notNullable();
        table.string('nomeCartao').notNullable();
        table.integer('mes').notNullable();
        table.integer('ano').notNullable();
        table.integer('numeroCartao').notNullable();
        table.integer('codigoSeguranca').notNullable();
    })
}
export async function down(Knex: Knex) {
    return Knex.schema.dropTable('users');
}