import { DataSource } from 'typeorm';

export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new DataSource({
                type: "postgres",
                host: "localhost",
                port: 5432,
                username: "postgres",
                password: "docker",
                database: "postgres",
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                synchronize: true, // Ja cria as tabelas e campos de acordo com as entidades
            });

            return dataSource.initialize();
        },
    },
];